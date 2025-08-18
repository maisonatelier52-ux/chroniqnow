import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

/**
 * Page Title EXACTLY uses the brand “Chroniq Now”
 * URL slug: /our-team/antonio-davis
 */
export const metadata: Metadata = {
  title: "Antonio M. Davis | Chroniq Now",
  description:
    "Author page for Antonio M. Davis on Chroniq Now — ethics-first journalism, verified facts, and accountability.",
  alternates: { canonical: "https://www.chroniqnow.com/our-team/antonio-davis" },
  openGraph: {
    title: "Antonio M. Davis | Chroniq Now",
    description:
      "Ethics-first journalism, verified facts, and accountability. Explore Antonio’s latest work on Chroniq Now.",
    url: "https://www.chroniqnow.com/our-team/antonio-davis",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio M. Davis | Chroniq Now",
    description:
      "Ethics-first journalism, verified facts, and accountability. Explore Antonio’s latest work on Chroniq Now.",
  },
};

export default function AuthorAntonioPage() {
  return (
    <>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <header className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex items-start gap-4">
              <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white">
                {/* Replace this image src with the real headshot later */}
                <Image
                  src="/images/antonio-m-davis.webp"
                  alt="Headshot of Antonio M. Davis"
                  width={192}
                  height={192}
                  className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                  priority
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Antonio M. Davis
                </h1>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-neutral-600">
                  Editor, Chroniq Now
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <main className="px-4 sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-6xl">
            {/* About Antonio (exact provided content, formatted) */}
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="sr-only">About Antonio</h2>

              <p className="text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                I got into this business a long time ago. The technology has changed—we&apos;ve gone from notepads to laptops to smartphones—but the core job hasn&apos;t. Not one bit.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                My belief is simple: the principles of good journalism are not optional.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                They&apos;re not suggestions you can ignore when a deadline is tight or a story is popular. You get the facts. You verify them with more than one source. You present all sides fairly. You are accountable to your readers. You own your mistakes.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                That&apos;s it. That&apos;s the work.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-900">
                <span className="font-semibold">I’m not here to reinvent the wheel.</span> I&apos;m here to make sure the wheels stay on. My role is to ensure that every story with my name on it, and every story published by this team, is built on a foundation of solid, ethical reporting.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                If you ever see us falling short of that standard, I&apos;m the one to contact.
              </p>

              {/* Contact row */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 whitespace-nowrap overflow-x-auto" aria-label="Email">
                  <p className="shrink-0 text-sm font-medium text-neutral-900">Email:</p>
                  <Link
                    href="mailto:antonio.d@chroniqnow.com"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-emerald-700"
                  >
                    antonio.d@chroniqnow.com
                  </Link>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap overflow-x-auto" aria-label="Twitter">
                  <p className="shrink-0 text-sm font-medium text-neutral-900">Twitter:</p>
                  <Link
                    href="https://twitter.com/AntonioD_reports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-neutral-900 hover:bg-neutral-50"
                    title="Replace with his actual handle if different"
                  >
                    @AntonioD_reports
                  </Link>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-neutral-200" />

            {/* Latest Work (placeholder slots; replace with your feed/component) */}
            <section aria-labelledby="latest-by-antonio">
              <h2 id="latest-by-antonio" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Latest by Antonio
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
      <Script id="author-antonio-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://www.chroniqnow.com/our-team/antonio-davis",
              url: "https://www.chroniqnow.com/our-team/antonio-davis",
              name: "Antonio M. Davis | Chroniq Now",
              isPartOf: { "@id": "https://www.chroniqnow.com/#website" },
              inLanguage: "en",
              about: { "@id": "https://www.chroniqnow.com/our-team/antonio-davis#person" },
              breadcrumb: { "@id": "https://www.chroniqnow.com/our-team/antonio-davis#breadcrumb" },
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/our-team/antonio-davis#person",
              name: "Antonio M. Davis",
              url: "https://www.chroniqnow.com/our-team/antonio-davis",
              image: "https://www.chroniqnow.com/images/team/antonio-m-davis.jpg",
              jobTitle: "Editor",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" },
              email: "mailto:antonio.d@chroniqnow.com",
              sameAs: ["https://twitter.com/AntonioD_reports"]
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
              "@id": "https://www.chroniqnow.com/our-team/antonio-davis#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.chroniqnow.com/" },
                { "@type": "ListItem", position: 2, name: "Our Team", item: "https://www.chroniqnow.com/our-team" },
                { "@type": "ListItem", position: 3, name: "Antonio M. Davis", item: "https://www.chroniqnow.com/our-team/antonio-davis" }
              ]
            }
          ]
        })}
      </Script>
    </>
  );
}
