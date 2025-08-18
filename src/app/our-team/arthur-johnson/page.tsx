import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

/**
 * Page Title EXACTLY uses the brand “Chroniq Now”
 * URL slug: /our-team/arthur-johnson
 */
export const metadata: Metadata = {
  title: "Arthur A. Johnson | Chroniq Now",
  description:
    "Author page for Arthur A. Johnson on Chroniq Now — on-the-ground reporting focused on the people living inside the headlines.",
  alternates: { canonical: "https://www.chroniqnow.com/our-team/arthur-johnson" },
  openGraph: {
    title: "Arthur A. Johnson | Chroniq Now",
    description:
      "On-the-ground reporting focused on the human stories behind the news. Explore Arthur’s latest work on Chroniq Now.",
    url: "https://www.chroniqnow.com/our-team/arthur-johnson",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur A. Johnson | Chroniq Now",
    description:
      "On-the-ground reporting focused on the human stories behind the news. Explore Arthur’s latest work on Chroniq Now.",
  },
};

export default function AuthorArthurPage() {
  return (
    <>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <header className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex items-start gap-4">
              <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white">
                {/* Replace this src with the real headshot later */}
                <Image
                  src="/images/arthur-a-johnson.webp"
                  alt="Headshot of Arthur A. Johnson"
                  width={192}
                  height={192}
                  className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                  priority
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Arthur A. Johnson
                </h1>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-neutral-600">
                  Field Reporter, Chroniq Now
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <main className="px-4 sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-6xl">
            {/* About Arthur (exact provided content, formatted) */}
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="sr-only">About Arthur</h2>

              <p className="text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                Facts and figures can tell you what happened. They can&apos;t always tell you what it felt like.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                My job, as I see it, is to find the people who are living inside the headlines. The news is more than just statistics about unemployment or policy debates in a distant capital. It&apos;s about a family trying to make ends meet. It&apos;s about a community fighting for its future. It&apos;s about the one person whose life was changed forever by a decision they had no say in.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-900">
                <span className="font-semibold">I believe that stories are what connect us.</span>
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                My reporting starts on the ground, talking to people and, more importantly, listening to them. I look for the human consequences behind the news because that&apos;s where the real stakes are. A story without that element is just information. A story with it becomes something we can all understand on a personal level.
              </p>

              <p className="mt-3 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                If your community has a story that needs to be heard, please reach out.
              </p>

              {/* Contact row */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 whitespace-nowrap overflow-x-auto" aria-label="Email">
                  <p className="shrink-0 text-sm font-medium text-neutral-900">Email:</p>
                  <Link
                    href="mailto:arthur.j@chroniqnow.com"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl bg-amber-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-amber-700"
                  >
                    arthur.j@chroniqnow.com
                  </Link>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap overflow-x-auto" aria-label="Twitter">
                  <p className="shrink-0 text-sm font-medium text-neutral-900">Twitter:</p>
                  <Link
                    href="https://twitter.com/ArthurJ_writes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-neutral-900 hover:bg-neutral-50"
                    title="Replace with his actual handle if different"
                  >
                    @ArthurJ_writes
                  </Link>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-neutral-200" />

            {/* Latest Work (placeholder slots; replace with your feed/component) */}
            <section aria-labelledby="latest-by-arthur">
              <h2 id="latest-by-arthur" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Latest by Arthur
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
      <Script id="author-arthur-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://www.chroniqnow.com/our-team/arthur-johnson",
              url: "https://www.chroniqnow.com/our-team/arthur-johnson",
              name: "Arthur A. Johnson | Chroniq Now",
              isPartOf: { "@id": "https://www.chroniqnow.com/#website" },
              inLanguage: "en",
              about: { "@id": "https://www.chroniqnow.com/our-team/arthur-johnson#person" },
              breadcrumb: { "@id": "https://www.chroniqnow.com/our-team/arthur-johnson#breadcrumb" },
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/our-team/arthur-johnson#person",
              name: "Arthur A. Johnson",
              url: "https://www.chroniqnow.com/our-team/arthur-johnson",
              image: "https://www.chroniqnow.com/images/team/arthur-a-johnson.jpg",
              jobTitle: "Field Reporter",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" },
              email: "mailto:arthur.j@chroniqnow.com",
              sameAs: ["https://twitter.com/ArthurJ_writes"]
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
              "@id": "https://www.chroniqnow.com/our-team/arthur-johnson#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.chroniqnow.com/" },
                { "@type": "ListItem", position: 2, name: "Our Team", item: "https://www.chroniqnow.com/our-team" },
                { "@type": "ListItem", position: 3, name: "Arthur A. Johnson", item: "https://www.chroniqnow.com/our-team/arthur-johnson" }
              ]
            }
          ]
        })}
      </Script>
    </>
  );
}
