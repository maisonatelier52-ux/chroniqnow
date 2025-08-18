import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorLatestFromFS from "@/components/AuthorLatestFromFS";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Kenneth M. Butts | Chroniq Now",
  description:
    "Author page for Kenneth M. Butts on Chroniq Now — connecting dots behind the headlines with deep context.",
  alternates: {
    canonical: "https://www.chroniqnow.com/our-team/kenneth-butts",
  },
  openGraph: {
    title: "Kenneth M. Butts | Chroniq Now",
    description:
      "Connecting the dots behind the headlines. Explore Kenneth’s latest work on Chroniq Now.",
    url: "https://www.chroniqnow.com/our-team/kenneth-butts",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth M. Butts | Chroniq Now",
    description:
      "Connecting the dots behind the headlines. Explore Kenneth’s latest work on Chroniq Now.",
  },
};

export default function AuthorKennethPage() {
  return (
    <>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <Navbar />

        <header className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex items-start gap-4">
              <div className="overflow-hidden rounded-2xl border border-sky-200 bg-white">
                <Image
                  src="/images/kenneth-m-butts.webp"
                  alt="Headshot of Kenneth M. Butts"
                  width={192}
                  height={192}
                  className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                  priority
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Kenneth M. Butts
                </h1>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-neutral-600">
                  Reporter, Chroniq Now
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-6xl">
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="sr-only">About Kenneth</h2>

              <p className="text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                I’ve always been more interested in the &quot;why&quot; than the
                &quot;what.&quot;
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                Anyone can report that an event happened. That’s the easy part.
                But to me, the real job of a journalist is to explore the forces
                that led to that event. Was it a policy decision from five years
                ago? A social trend that’s been simmering under the surface? A
                technological shift that no one was paying attention to?
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                My work is about connecting those dots.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-900">
                <span className="font-semibold">
                  I believe a story isn&apos;t a single point—it&apos;s a line.
                </span>{" "}
                It has a past, a present, and a future. My goal is to give you
                the whole line, not just the point that’s making noise today. If
                I can provide the context behind the headline, I’ve done my job.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                I'm always looking for patterns and stories that haven't been
                told yet. If you see a connection I'm missing or have a lead, my
                inbox is open.
              </p>

              <p className="mt-4 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                You can find my reporting for Chroniq Now below.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div
                  className="flex items-center gap-3 whitespace-nowrap overflow-x-auto"
                  aria-label="Email"
                >
                  <p className="shrink-0 text-sm font-medium text-neutral-900">
                    Email:
                  </p>
                  <Link
                    href="mailto:kenneth.b@chroniqnow.com"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-sky-700"
                  >
                    kenneth.b@chroniqnow.com
                  </Link>
                </div>
                <div
                  className="flex items-center gap-3 whitespace-nowrap overflow-x-auto"
                  aria-label="Twitter"
                >
                  <p className="shrink-0 text-sm font-medium text-neutral-900">
                    Twitter:
                  </p>
                  <Link
                    href="https://twitter.com/KennethB_writes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-neutral-900 hover:bg-neutral-50"
                    title="Replace with his actual handle if different"
                  >
                    @KennethB_writes
                  </Link>
                </div>
              </div>
            </section>

            <div className="my-8 h-px w-full bg-neutral-200" />

            <AuthorLatestFromFS authorName="Kenneth M. Butts" />

            <div className="mt-10" />
          </article>
        </main>

        <Footer />
      </div>

      <Script
        id="author-kenneth-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://www.chroniqnow.com/our-team/kenneth-butts",
              url: "https://www.chroniqnow.com/our-team/kenneth-butts",
              name: "Kenneth M. Butts | Chroniq Now",
              isPartOf: { "@id": "https://www.chroniqnow.com/#website" },
              inLanguage: "en",
              about: {
                "@id":
                  "https://www.chroniqnow.com/our-team/kenneth-butts#person",
              },
              breadcrumb: {
                "@id":
                  "https://www.chroniqnow.com/our-team/kenneth-butts#breadcrumb",
              },
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" },
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/our-team/kenneth-butts#person",
              name: "Kenneth M. Butts",
              url: "https://www.chroniqnow.com/our-team/kenneth-butts",
              image:
                "https://www.chroniqnow.com/images/team/kenneth-m-butts.jpg",
              jobTitle: "Reporter",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" },
              email: "mailto:kenneth.b@chroniqnow.com",
              sameAs: ["https://twitter.com/KennethB_writes"],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.chroniqnow.com/#website",
              name: "Chroniq Now",
              url: "https://www.chroniqnow.com/",
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" },
            },
            {
              "@type": "NewsMediaOrganization",
              "@id": "https://www.chroniqnow.com/#newsorg",
              name: "Chroniq Now",
              url: "https://www.chroniqnow.com/",
              email: "contact@chroniqnow.com",
              ethicsPolicy: "https://www.chroniqnow.com/editorial-policy",
              correctionsPolicy: "https://www.chroniqnow.com/correction-policy",
              privacyPolicy: "https://www.chroniqnow.com/privacy-policy",
            },
            {
              "@type": "BreadcrumbList",
              "@id":
                "https://www.chroniqnow.com/our-team/kenneth-butts#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.chroniqnow.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Our Team",
                  item: "https://www.chroniqnow.com/our-team",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Kenneth M. Butts",
                  item: "https://www.chroniqnow.com/our-team/kenneth-butts",
                },
              ],
            },
          ],
        })}
      </Script>
    </>
  );
}
