// scripts/add-authors.cjs
// Updates every JSON file in src/data, adding an `author` field to each item.
// Supports round-robin (default) or random assignment from a provided list of authors.
// It does NOT modify any other fields. Creates a timestamped .bak backup per file.

const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(process.cwd(), "src", "data");

// Fallback authors if --authors isn't provided.
// Replace these or pass --authors="Name1,Name2,..."
const FALLBACK_AUTHORS = [
  "Author One",
  "Author Two",
  "Author Three",
  "Author Four",
  "Author Five",
  "Author Six",
];

// ---- arg parsing helpers ----
function getArg(key) {
  // supports --key=value or --key value
  const i = process.argv.findIndex((a) => a === `--${key}` || a.startsWith(`--${key}=`));
  if (i === -1) return undefined;
  const eq = process.argv[i].indexOf("=");
  if (eq !== -1) return process.argv[i].slice(eq + 1);
  return process.argv[i + 1] && !process.argv[i + 1].startsWith("--") ? process.argv[i + 1] : "";
}

function hasFlag(flag) {
  return process.argv.some((a) => a === `--${flag}`);
}

// ---- config from CLI ----
const authorsArg = getArg("authors"); // e.g. --authors="A,B,C,D,E,F"
const MODE = hasFlag("random") ? "random" : (getArg("mode") || "round-robin"); // --mode=round-robin|random or --random
const FORCE = hasFlag("force");   // if present, overwrite existing author fields
const DRY = hasFlag("dry");       // if present, preview only, don't write

const AUTHORS = (authorsArg
  ? authorsArg.split(",").map((s) => s.trim()).filter(Boolean)
  : FALLBACK_AUTHORS);

if (!AUTHORS.length) {
  console.error("No authors provided. Use --authors=\"A,B,C,D,E,F\" or set FALLBACK_AUTHORS.");
  process.exit(1);
}

if (!fs.existsSync(DATA_DIR) || !fs.statSync(DATA_DIR).isDirectory()) {
  console.error(`Data folder not found: ${DATA_DIR}`);
  process.exit(1);
}

// deterministic filename order so round-robin is stable
const files = fs.readdirSync(DATA_DIR)
  .filter((f) => f.endsWith(".json"))
  .sort((a, b) => a.localeCompare(b));

if (files.length === 0) {
  console.log(`No .json files in ${DATA_DIR}`);
  process.exit(0);
}

let globalIndex = 0;
let totalTouched = 0;
let totalSkippedHasAuthor = 0;

console.log(`Mode: ${MODE}`);
console.log(`Force overwrite: ${FORCE ? "yes" : "no"}`);
console.log(`Dry run: ${DRY ? "yes" : "no"}`);
console.log(`Authors (${AUTHORS.length}): ${AUTHORS.join(", ")}`);
console.log(`Scanning ${files.length} file(s) in ${DATA_DIR}...\n`);

for (const file of files) {
  const filePath = path.join(DATA_DIR, file);
  const raw = fs.readFileSync(filePath, "utf8").trim();
  let data;

  try {
    data = JSON.parse(raw);
  } catch (err) {
    console.warn(`✗ Skipping ${file} (invalid JSON)`);
    continue;
  }

  if (!Array.isArray(data)) {
    console.warn(`✗ Skipping ${file} (top-level JSON is not an array)`);
    continue;
  }

  let fileTouched = 0;
  let fileSkipped = 0;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (item === null || typeof item !== "object" || Array.isArray(item)) continue;

    if (!FORCE && Object.prototype.hasOwnProperty.call(item, "author")) {
      fileSkipped++;
      continue;
    }

    const author =
      MODE === "random"
        ? AUTHORS[Math.floor(Math.random() * AUTHORS.length)]
        : AUTHORS[globalIndex % AUTHORS.length];

    // Add/overwrite only the `author` field; do not touch anything else.
    item.author = author;
    fileTouched++;
    globalIndex++;
  }

  if (fileTouched > 0 && !DRY) {
    const backupPath =
      `${filePath}.bak.${new Date().toISOString().replace(/[:.]/g, "-")}`;
    fs.writeFileSync(backupPath, raw, "utf8");
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
  }

  totalTouched += fileTouched;
  totalSkippedHasAuthor += fileSkipped;

  const status =
    fileTouched === 0
      ? "no changes"
      : DRY
      ? `would update ${fileTouched}`
      : `updated ${fileTouched}`;

  console.log(`• ${file}: ${status}${fileSkipped ? `, skipped ${fileSkipped} (already had author)` : ""}`);
}

console.log(
  `\nDone. ${DRY ? "(dry run)" : ""} Items ${DRY ? "that would be" : ""} updated: ${totalTouched}. Skipped (already had author): ${totalSkippedHasAuthor}.`
);
