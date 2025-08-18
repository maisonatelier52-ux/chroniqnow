import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

/**
 * Page Title EXACTLY updated to use the brand "Chroniq Now"
 * URL slug: /our-team/chelsea-wheatley
 */
export const metadata: Metadata = {
  title: "Chelsea M. Wheatley | Chroniq Now",
  description:
    "Author page for Chelsea M. Wheatley on Chroniq Now — long-form reporting with context over hype.",
  alternates: { canonical: "https://www.chroniqnow.com/our-team/chelsea-wheatley" },
  openGraph: {
    title: "Chelsea M. Wheatley | Chroniq Now",
    description:
      "Long-form reporting with context over hype. Explore Chelsea’s latest work on Chroniq Now.",
    url: "https://www.chroniqnow.com/our-team/chelsea-wheatley",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelsea M. Wheatley | Chroniq Now",
    description:
      "Long-form reporting with context over hype. Explore Chelsea’s latest work on Chroniq Now.",
  },
};

export default function AuthorChelseaPage() {
  return (
    <>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <header className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex items-start gap-4">
              <div className="overflow-hidden rounded-2xl border border-rose-200 bg-white">
                {/* Replace this image src with the real headshot later */}
                <Image
                  src="/images/chelsea-m-wheatley.webp"
                  alt="Headshot of Chelsea M. Wheatley"
                  width={192}
                  height={192}
                  className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                  priority
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Chelsea M. Wheatley
                </h1>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-neutral-600">
                  Long-form Reporter, Chroniq Now
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <main className="px-4 sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-6xl">
            {/* About Chelsea (exact provided content, formatted) */}
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="sr-only">About Chelsea</h2>

              <p className="text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                I’m the reporter who gets sent in when the first wave of news is over.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                My work lives in the messy middle—after the initial headlines have faded but before the full story has been told. It’s not about speed. It’s about digging. I’m the one reading the 400-page budget report that everyone else just quoted the summary of. I’m the one making the third phone call to a source to clarify one small detail that doesn't feel right.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-900">
                <span className="font-semibold">My only rule is this: be willing to be wrong.</span>
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                I never assume I know where a story is going. If the facts lead me to a place that completely shatters my initial theory, then that's the story we publish. A journalist's job isn't to be right; it's to find the truth, even if it’s inconvenient.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                <span className="font-semibold">What you can expect from my work:</span>
              </p>
              <p className="mt-1 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                No hype. No hot takes. No telling you what to think. Just the story, laid out with all the facts I could find, so you can make up your own mind.
              </p>

              <p className="mt-4 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                Below is my work for Chroniq Now.
              </p>

              {/* Contact row */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 whitespace-nowrap overflow-x-auto" aria-label="Email">
                  <p className="shrink-0 text-sm font-medium text-neutral-900">Email:</p>
                  <Link
                    href="mailto:chelsea.w@chroniqnow.com"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl bg-rose-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-rose-700"
                  >
                    chelsea.w@chroniqnow.com
                  </Link>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap overflow-x-auto" aria-label="Twitter">
                  <p className="shrink-0 text-sm font-medium text-neutral-900">Twitter:</p>
                  <Link
                    href="https://twitter.com/ChelseaW_reports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    @ChelseaW_reports
                  </Link>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-neutral-200" />

            {/* Latest Work (placeholder slots; replace with your feed/component) */}
            <section aria-labelledby="latest-by-chelsea">
              <h2 id="latest-by-chelsea" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Latest by Chelsea
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

      {/* JSON-LD: ProfilePage + Person + NewsMediaOrganization + WebSite + Breadcrumbs */}
      <Script id="author-chelsea-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://www.chroniqnow.com/our-team/chelsea-wheatley",
              url: "https://www.chroniqnow.com/our-team/chelsea-wheatley",
              name: "Chelsea M. Wheatley | Chroniq Now",
              isPartOf: { "@id": "https://www.chroniqnow.com/#website" },
              inLanguage: "en",
              about: { "@id": "https://www.chroniqnow.com/our-team/chelsea-wheatley#person" },
              breadcrumb: { "@id": "https://www.chroniqnow.com/our-team/chelsea-wheatley#breadcrumb" },
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/our-team/chelsea-wheatley#person",
              name: "Chelsea M. Wheatley",
              url: "https://www.chroniqnow.com/our-team/chelsea-wheatley",
              image: "https://www.chroniqnow.com/images/team/chelsea-m-wheatley.jpg",
              jobTitle: "Long-form Reporter",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" },
              email: "mailto:chelsea.w@chroniqnow.com",
              sameAs: ["https://twitter.com/ChelseaW_reports"]
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
              "@id": "https://www.chroniqnow.com/our-team/chelsea-wheatley#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.chroniqnow.com/" },
                { "@type": "ListItem", position: 2, name: "Our Team", item: "https://www.chroniqnow.com/our-team" },
                { "@type": "ListItem", position: 3, name: "Chelsea M. Wheatley", item: "https://www.chroniqnow.com/our-team/chelsea-wheatley" }
              ]
            }
          ]
        })}
      </Script>
    </>
  );
}
