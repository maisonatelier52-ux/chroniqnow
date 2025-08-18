import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

/**
 * Page Title uses the brand “Chroniq Now”
 * URL slug: /our-team/hope-pender
 */
export const metadata: Metadata = {
  title: "Hope M. Pender | Chroniq Now",
  description:
    "Author page for Hope M. Pender on Chroniq Now — translating dense, technical topics into clear, accessible reporting.",
  alternates: { canonical: "https://www.chroniqnow.com/our-team/hope-pender" },
  openGraph: {
    title: "Hope M. Pender | Chroniq Now",
    description:
      "Translating dense, technical topics into clear, accessible reporting. Explore Hope’s latest work on Chroniq Now.",
    url: "https://www.chroniqnow.com/our-team/hope-pender",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hope M. Pender | Chroniq Now",
    description:
      "Translating dense, technical topics into clear, accessible reporting. Explore Hope’s latest work on Chroniq Now.",
  },
};

export default function AuthorHopePage() {
  return (
    <>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <header className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex items-start gap-4">
              <div className="overflow-hidden rounded-2xl border border-indigo-200 bg-white">
                {/* Replace this image src with the real headshot later */}
                <Image
                  src="/images/hope-m-pender.webp"
                  alt="Headshot of Hope M. Pender"
                  width={192}
                  height={192}
                  className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                  priority
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Hope M. Pender
                </h1>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-neutral-600">
                  Technology &amp; Science Reporter, Chroniq Now
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <main className="px-4 sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-6xl">
            {/* About Hope (exact provided content, formatted) */}
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="sr-only">About Hope</h2>

              <p className="text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                I believe that the most important information is often the hardest to understand.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                It&apos;s trapped behind a wall of scientific jargon, legal-speak, or technical language. That&apos;s a problem. When people don&apos;t understand an issue, they can&apos;t make informed decisions about it. Knowledge becomes something for a select few, and that’s not how a healthy society works.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-900">
                <span className="font-semibold">My mission is to be a translator.</span>
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                I take on the dense, complicated subjects and make it my job to break them down into plain English. My goal isn&apos;t to &quot;dumb down&quot; the news, but to make it accessible. I cut through the clutter to get to the core of what you actually need to know and why it matters to your life.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                If I&apos;ve done my work correctly, you&apos;ll walk away from one of my articles feeling smarter and more confident about a topic, not more confused.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                Questions about a complex topic? Send them my way.
              </p>

              {/* Contact row */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 whitespace-nowrap overflow-x-auto" aria-label="Email">
                  <p className="shrink-0 text-sm font-medium text-neutral-900">Email:</p>
                  <Link
                    href="mailto:hope.p@chroniqnow.com"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-indigo-700"
                  >
                    hope.p@chroniqnow.com
                  </Link>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap overflow-x-auto" aria-label="Twitter">
                  <p className="shrink-0 text-sm font-medium text-neutral-900">Twitter:</p>
                  <Link
                    href="https://twitter.com/HopeP_reports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-neutral-900 hover:bg-neutral-50"
                    title="Replace with her actual handle if different"
                  >
                    @HopeP_reports
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
            <section aria-labelledby="latest-by-hope">
              <h2 id="latest-by-hope" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Latest by Hope
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
      <Script id="author-hope-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://www.chroniqnow.com/our-team/hope-pender",
              url: "https://www.chroniqnow.com/our-team/hope-pender",
              name: "Hope M. Pender | Chroniq Now",
              isPartOf: { "@id": "https://www.chroniqnow.com/#website" },
              inLanguage: "en",
              about: { "@id": "https://www.chroniqnow.com/our-team/hope-pender#person" },
              breadcrumb: { "@id": "https://www.chroniqnow.com/our-team/hope-pender#breadcrumb" },
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/our-team/hope-pender#person",
              name: "Hope M. Pender",
              url: "https://www.chroniqnow.com/our-team/hope-pender",
              image: "https://www.chroniqnow.com/images/team/hope-m-pender.jpg",
              jobTitle: "Technology & Science Reporter",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" },
              email: "mailto:hope.p@chroniqnow.com",
              sameAs: ["https://twitter.com/HopeP_reports"]
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
              "@id": "https://www.chroniqnow.com/our-team/hope-pender#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.chroniqnow.com/" },
                { "@type": "ListItem", position: 2, name: "Our Team", item: "https://www.chroniqnow.com/our-team" },
                { "@type": "ListItem", position: 3, name: "Hope M. Pender", item: "https://www.chroniqnow.com/our-team/hope-pender" }
              ]
            }
          ]
        })}
      </Script>
    </>
  );
}
