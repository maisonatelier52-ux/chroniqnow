import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

/**
 * Page Title uses the brand “Chroniq Now”
 * URL slug: /our-team/jennifer-albright
 */
export const metadata: Metadata = {
  title: "Jennifer Albright | Chroniq Now",
  description:
    "Author page for Jennifer Albright on Chroniq Now — fast, verified reporting that cuts through breaking-news chaos.",
  alternates: { canonical: "https://www.chroniqnow.com/our-team/jennifer-albright" },
  openGraph: {
    title: "Jennifer Albright | Chroniq Now",
    description:
      "Fast, verified reporting that cuts through breaking-news chaos. Explore Jennifer’s latest work on Chroniq Now.",
    url: "https://www.chroniqnow.com/our-team/jennifer-albright",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jennifer Albright | Chroniq Now",
    description:
      "Fast, verified reporting that cuts through breaking-news chaos. Explore Jennifer’s latest work on Chroniq Now.",
  },
};

export default function AuthorJenniferPage() {
  return (
    <>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <header className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex items-start gap-4">
              <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white">
                {/* Replace this image src with the real headshot later */}
                <Image
                  src="/images/jennifer-albright.webp"
                  alt="Headshot of Jennifer Albright"
                  width={192}
                  height={192}
                  className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                  priority
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Jennifer Albright
                </h1>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-neutral-600">
                  Breaking News Reporter, Chroniq Now
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <main className="px-4 sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-6xl">
            {/* About Jennifer (exact provided content, formatted) */}
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="sr-only">About Jennifer</h2>

              <p className="text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                When a big story breaks, the first few hours are chaos. Conflicting reports, speculation, and a firehose of information flooding your screen. My job is to find the signal in that noise.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                My philosophy is that speed and clarity must go hand-in-hand. Getting the story out fast is important, but getting the facts right is essential. In a world of constant updates, you don&apos;t need more alerts—you need a reliable source that can tell you what is confirmed, what is rumored, and what it all means.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                That’s what I focus on: cutting through the clutter to deliver the core facts, verified and contextualized, as a story unfolds.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-900">
                <span className="font-semibold">I don&apos;t report the chaos; I report through it.</span> My goal is to be your first, most reliable source, giving you the information you need to understand a developing situation without adding to the panic.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                If you have a tip on a breaking story, I&apos;m the one to contact.
              </p>

              {/* Contact row */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 whitespace-nowrap overflow-x-auto" aria-label="Email">
                  <p className="shrink-0 text-sm font-medium text-neutral-900">Email:</p>
                  <Link
                    href="mailto:jennifer.a@chroniqnow.com"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl bg-violet-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-violet-700"
                  >
                    jennifer.a@chroniqnow.com
                  </Link>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap overflow-x-auto" aria-label="Twitter">
                  <p className="shrink-0 text-sm font-medium text-neutral-900">Twitter:</p>
                  <Link
                    href="https://twitter.com/JennAlbrightNow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-neutral-900 hover:bg-neutral-50"
                    title="Replace with her actual handle if different"
                  >
                    @JennAlbrightNow
                  </Link>
                </div>
              </div>

              <p className="mt-6 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                You can find my reporting for Chroniq Now below.
              </p>
            </section>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-neutral-200" />

            {/* Latest Work (placeholder slots; replace with your feed/component) */}
            <section aria-labelledby="latest-by-jennifer">
              <h2 id="latest-by-jennifer" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Latest by Jennifer
              </h2>

              <div className="mt-5 grid gap-4 sm:gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
                  <div className="h-40 w-full rounded-lg bg-neutral-100" aria-hidden="true" />
                  <div className="mt-4 h-5 w-2/3 rounded bg-neutral-200" aria-hidden="true" />
                  <div className="mt-2 h-4 w-full rounded bg-neutral-100" aria-hidden="true" />
                  <div className="mt-2 h-4 w-5/6 rounded bg-neutral-100" aria-hidden="true" />
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
                  <div className="h-40 w-full rounded-lg bg-neutral-100" aria-hidden="true" />
                  <div className="mt-4 h-5 w-2/3 rounded bg-neutral-200" aria-hidden="true" />
                  <div className="mt-2 h-4 w-full rounded bg-neutral-100" aria-hidden="true" />
                  <div className="mt-2 h-4 w-5/6 rounded bg-neutral-100" aria-hidden="true" />
                </div>
              </div>

              <p className="mt-4 text-sm text-neutral-600">
                Replace these placeholders with your real author feed component or server query.
              </p>
            </section>

            {/* Spacer */}
            <div className="mt-10" />
          </article>
        </main>

        <Footer />
      </div>

      {/* JSON-LD: ProfilePage + Person + WebSite + NewsMediaOrganization + BreadcrumbList */}
      <Script id="author-jennifer-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://www.chroniqnow.com/our-team/jennifer-albright",
              url: "https://www.chroniqnow.com/our-team/jennifer-albright",
              name: "Jennifer Albright | Chroniq Now",
              isPartOf: { "@id": "https://www.chroniqnow.com/#website" },
              inLanguage: "en",
              about: { "@id": "https://www.chroniqnow.com/our-team/jennifer-albright#person" },
              breadcrumb: { "@id": "https://www.chroniqnow.com/our-team/jennifer-albright#breadcrumb" },
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/our-team/jennifer-albright#person",
              name: "Jennifer Albright",
              url: "https://www.chroniqnow.com/our-team/jennifer-albright",
              image: "https://www.chroniqnow.com/images/team/jennifer-albright.jpg",
              jobTitle: "Breaking News Reporter",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" },
              email: "mailto:jennifer.a@chroniqnow.com",
              sameAs: ["https://twitter.com/JennAlbrightNow"]
            },
            {
              "@type": "WebSite",
              "@id": "https://www.chroniqnow.com/#website",
              name: "Chroniq Now",
              url: "https://www.chroniqnow.com/",
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "NewsMediaOrganization",
              "@id": "https://www.chroniqnow.com/#newsorg",
              name: "Chroniq Now",
              url: "https://www.chroniqnow.com/",
              email: "contact@chroniqnow.com",
              ethicsPolicy: "https://www.chroniqnow.com/editorial-policy",
              correctionsPolicy: "https://www.chroniqnow.com/correction-policy",
              privacyPolicy: "https://www.chroniqnow.com/privacy-policy"
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://www.chroniqnow.com/our-team/jennifer-albright#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.chroniqnow.com/" },
                { "@type": "ListItem", position: 2, name: "Our Team", item: "https://www.chroniqnow.com/our-team" },
                { "@type": "ListItem", position: 3, name: "Jennifer Albright", item: "https://www.chroniqnow.com/our-team/jennifer-albright" }
              ]
            }
          ]
        })}
      </Script>
    </>
  );
}
