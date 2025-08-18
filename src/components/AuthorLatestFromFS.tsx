// Server Component (Next.js 15 + Tailwind v4)
// Reads every *.json in src/data (or data/ as fallback) and
// shows the latest 2 posts for the given author.
// Uses ONLY: title, image, date, shortdescription, author.
import Image from "next/image";
import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";

type Post = {
  title: string;
  image?: string;
  date: string; // e.g., "16th july 2025"
  shortdescription?: string;
  author: string;
};

async function resolveDataDir() {
  const a = path.join(process.cwd(), "src", "data");
  const b = path.join(process.cwd(), "data");
  try {
    const st = await fs.stat(a);
    if (st.isDirectory()) return a;
  } catch {}
  return b;
}

// tolerant date parser for strings like "16th july 2025"
function parseLooseDate(input: string): number {
  if (!input) return 0;
  const s = String(input).trim().toLowerCase().replace(/,/g, "");
  const m1 = s.match(/^(\d{1,2})(?:st|nd|rd|th)?\s+([a-z]+)\s+(\d{4})$/);
  if (m1) {
    const day = Number(m1[1]);
    const monthName = m1[2];
    const year = Number(m1[3]);
    const months =
      "january february march april may june july august september october november december".split(
        " "
      );
    const idx = months.indexOf(monthName);
    if (idx >= 0) return new Date(year, idx, day).getTime();
  }
  const cleaned = s.replace(/\b(\d{1,2})(st|nd|rd|th)\b/g, "$1");
  const t = Date.parse(cleaned);
  return Number.isNaN(t) ? 0 : t;
}

function normName(v: string) {
  return v.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}
function sameAuthor(a: string, b: string) {
  const A = normName(a);
  const B = normName(b);
  if (A === B) return true;
  const as = A.split(" ");
  const bs = B.split(" ");
  return as.length >= 2 && bs.length >= 2 && as[0] === bs[0] && as.at(-1) === bs.at(-1);
}
function firstName(full: string) {
  return (full || "").trim().split(/\s+/)[0] || "Author";
}

const readAllPosts = cache(async (): Promise<Post[]> => {
  const dir = await resolveDataDir();
  const files = await fs.readdir(dir).catch(() => []);
  const jsonFiles = files.filter((f) => f.toLowerCase().endsWith(".json"));

  const all: Post[] = [];
  for (const file of jsonFiles) {
    try {
      const raw = await fs.readFile(path.join(dir, file), "utf8");
      const parsed = JSON.parse(raw);
      const arr: unknown = Array.isArray(parsed)
        ? parsed
        : parsed?.articles ?? parsed?.items ?? [];
      if (!Array.isArray(arr)) continue;

      for (const it of arr) {
        if (!it || typeof it !== "object") continue;
        const p = it as any;
        const post: Post = {
          title: String(p.title ?? ""),
          image: typeof p.image === "string" ? p.image : undefined,
          date: String(p.date ?? ""),
          shortdescription:
            typeof p.shortdescription === "string" ? p.shortdescription : undefined,
          author: String(p.author ?? ""),
        };
        if (post.title && post.author && post.date) all.push(post);
      }
    } catch {
      // ignore file if invalid
    }
  }
  return all;
});

export default async function AuthorLatestFromFS({
  authorName,
}: {
  authorName: string;
}) {
  const posts = await readAllPosts();

  const latest = posts
    .filter((p) => p.author && sameAuthor(p.author, authorName))
    .sort((a, b) => parseLooseDate(b.date) - parseLooseDate(a.date))
    .slice(0, 2);

  const headingFirst = firstName(authorName);

  return (
    <section aria-labelledby={`latest-by-${headingFirst.toLowerCase()}`}>
      <h2
        id={`latest-by-${headingFirst.toLowerCase()}`}
        className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
      >
        Latest by {headingFirst}
      </h2>

      {latest.length === 0 ? (
        <p className="mt-4 text-sm text-neutral-600">No recent articles yet.</p>
      ) : (
        <div className="mt-5 grid gap-4 sm:gap-6 md:grid-cols-2">
          {latest.map((p, i) => (
            <article
              key={`${p.title}-${i}`}
              className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 transition hover:shadow-sm"
            >
              {/* Classic image block using next/image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-neutral-400 text-sm">
                    No image
                  </div>
                )}
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-semibold leading-snug">
                {p.title}
              </h3>

              {p.shortdescription ? (
                <p className="mt-2 text-sm sm:text-[0.95rem] text-neutral-700">
                  {p.shortdescription}
                </p>
              ) : null}

              <div className="mt-3 flex flex-wrap items-center gap-x-2 text-xs text-neutral-500">
                <span>{p.date}</span>
                <span aria-hidden="true">•</span>
                <span>{p.author}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
