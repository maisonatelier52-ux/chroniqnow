import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

/**
 * Meta title EXACTLY matches the suggested title.
 */
export const metadata: Metadata = {
  title: "The People Behind the News",
  description:
    "Meet the Chroniq Now team: the journalists, editors, and on-the-ground reporters behind the stories.",
  alternates: { canonical: "https://www.chroniqnow.com/our-team" },
  openGraph: {
    title: "The People Behind the News",
    description:
      "Meet the journalists and editors building Chroniq Now every day.",
    url: "https://www.chroniqnow.com/our-team",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The People Behind the News",
    description:
      "Meet the journalists and editors building Chroniq Now every day.",
  },
};

export default function OurTeamPage() {
  return (
    <>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <header className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
          <div className="mx-auto w-full max-w-6xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs sm:text-[13px] font-medium text-neutral-700">
              Our Team
            </span>
            <h1 className="mt-4 text-balance text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              The People Behind the News
            </h1>
            <p className="mt-4 max-w-3xl text-pretty text-neutral-700 text-base sm:text-lg md:text-[1.15rem] leading-relaxed">
              This is us. We’re the team that builds Chroniq Now every day. We
              got into this line of work to report the truth, and we started
              this site to create a place where that&apos;s all that matters.
            </p>
          </div>
        </header>

        {/* Main */}
        <main className="px-4 sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-6xl">
            {/* Team grid */}
            <section
              aria-label="Team members"
              className="grid gap-5 sm:gap-6 md:grid-cols-2"
            >
              {/* Chelsea M. Wheatley */}
              <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 sm:p-6">
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[128px_1fr] gap-4 items-start">
                  <div className="overflow-hidden rounded-xl border border-rose-200 bg-white">
                    <Image
                      src="/images/chelsea-m-wheatley.webp"
                      alt="Portrait of Chelsea M. Wheatley"
                      width={512}
                      height={512}
                      className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold text-rose-700">
                      Chelsea M. Wheatley
                    </h2>
                    <p className="mt-2 text-base sm:text-[1.05rem] leading-relaxed text-rose-900/90">
                      Chelsea is our long-game journalist. She’s the one who
                      will spend months chasing down a single story, talking to
                      dozens of people, and piecing together the full picture.
                      She works from the belief that the real story, the one
                      that truly matters, is never the first one you hear.
                    </p>
                    <div className="mt-3">
                      <Link
                        href="/team/chelsea-wheatley"
                        className="inline-flex items-center gap-1 rounded-xl bg-rose-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-rose-700"
                      >
                        See Chelsea&apos;s work →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kenneth M. Butts */}
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5 sm:p-6">
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[128px_1fr] gap-4 items-start">
                  <div className="overflow-hidden rounded-xl border border-sky-200 bg-white">
                    <Image
                      src="/images/kenneth-m-butts.webp"
                      alt="Portrait of Kenneth M. Butts"
                      width={512}
                      height={512}
                      className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold text-sky-700">
                      Kenneth M. Butts
                    </h2>
                    <p className="mt-2 text-base sm:text-[1.05rem] leading-relaxed text-sky-900/90">
                      Kenneth is the one who actually enjoys a tangled mess of
                      information. He can take a mountain of data, a complex
                      policy, or a confusing scientific study and turn it into a
                      story that makes sense. He believes you shouldn&apos;t need a
                      special degree to understand the forces shaping your
                      world.
                    </p>
                    <div className="mt-3">
                      <Link
                        href="/our-team/kenneth-butts"
                        className="inline-flex items-center gap-1 rounded-xl bg-sky-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-sky-700"
                      >
                        See Kenneth&apos;s work →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Antonio M. Davis */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 sm:p-6">
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[128px_1fr] gap-4 items-start">
                  <div className="overflow-hidden rounded-xl border border-emerald-200 bg-white">
                    <Image
                      src="/images/antonio-m-davis.webp"
                      alt="Portrait of Antonio M. Davis"
                      width={512}
                      height={512}
                      className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold text-emerald-700">
                      Antonio M. Davis
                    </h2>
                    <p className="mt-2 text-base sm:text-[1.05rem] leading-relaxed text-emerald-900/90">
                      Antonio is our built-in fact-checker and ethical compass.
                      He&apos;s the one who asks the hard questions before we
                      publish: &quot;Did we talk to everyone? Is this fair? Can we
                      back this up with another source?&quot; He started in this
                      business when the rules were the rules, and he makes sure
                      they still are at Chroniq Now.
                    </p>
                    <div className="mt-3">
                      <Link
                        href="/our-team/antonio-davis"
                        className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-emerald-700"
                      >
                        See Antonio&apos;s work →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arthur A. Johnson */}
              <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5 sm:p-6">
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[128px_1fr] gap-4 items-start">
                  <div className="overflow-hidden rounded-xl border border-amber-200 bg-white">
                    <Image
                      src="/images/arthur-a-johnson.webp"
                      alt="Portrait of Arthur A. Johnson"
                      width={512}
                      height={512}
                      className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold text-amber-700">
                      Arthur A. Johnson
                    </h2>
                    <p className="mt-2 text-base sm:text-[1.05rem] leading-relaxed text-amber-900/90">
                      Arthur believes the most important reporting happens far
                      from a desk. He’s committed to being on the ground, in
                      communities, listening to people whose voices are often
                      ignored. His work focuses on the real-world impact of
                      headlines, showing the human consequences behind the news.
                    </p>
                    <div className="mt-3">
                      <Link
                        href="/our-team/arthur-johnson"
                        className="inline-flex items-center gap-1 rounded-xl bg-amber-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-amber-700"
                      >
                        See Arthur&apos;s work →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hope M. Pender */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 sm:p-6">
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[128px_1fr] gap-4 items-start">
                  <div className="overflow-hidden rounded-xl border border-indigo-200 bg-white">
                    <Image
                      src="/images/hope-m-pender.webp"
                      alt="Portrait of Hope M. Pender"
                      width={512}
                      height={512}
                      className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold text-indigo-700">
                      Hope M. Pender
                    </h2>
                    <p className="mt-2 text-base sm:text-[1.05rem] leading-relaxed text-indigo-900/90">
                      Hope is our go-to for the really complicated stuff.
                      Whether it’s a new piece of technology or a dense
                      environmental report, she has a way of breaking it down so
                      it’s not just understandable, but actually interesting.
                      She&apos;s always asking the question that matters most to
                      readers: &quot;Why does this matter to me?&quot;
                    </p>
                    <div className="mt-3">
                      <Link
                        href="/our-team/hope-pender"
                        className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-indigo-700"
                      >
                        See Hope&apos;s work →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jennifer Albright */}
              <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-5 sm:p-6">
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[128px_1fr] gap-4 items-start">
                  <div className="overflow-hidden rounded-xl border border-violet-200 bg-white">
                    <Image
                      src="/images/jennifer-albright.webp"
                      alt="Portrait of Jennifer Albright"
                      width={512}
                      height={512}
                      className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold text-violet-700">
                      Jennifer Albright
                    </h2>
                    <p className="mt-2 text-base sm:text-[1.05rem] leading-relaxed text-violet-900/90">
                      Jennifer is the pulse of our newsroom, our go-to for the
                      fast-moving story. She excels at cutting through the noise
                      of the 24-hour news cycle to deliver what you need to
                      know, right now. She operates on the principle that in a
                      breaking situation, clarity is as important as speed,
                      ensuring our readers get the facts without the panic.
                    </p>
                    <div className="mt-3">
                      <Link
                        href="/our-team/jennifer-albright"
                        className="inline-flex items-center gap-1 rounded-xl bg-violet-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-violet-700"
                      >
                        See Jennifer&apos;s work →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Staff byline note */}
            <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                A Note on the &apos;Chroniq Now Staff&apos; Byline
              </h2>

              <p className="mt-4 text-base sm:text-[1.05rem] leading-relaxed text-neutral-800">
                You&apos;ll sometimes see an article from &quot;Chroniq Now Staff.&quot; Here’s
                what that means:
              </p>

              <ul className="mt-4 list-disc pl-6 text-base sm:text-[1.05rem] leading-relaxed text-neutral-800 space-y-2">
                <li>
                  <span className="font-semibold">A Story is a Team Effort:</span>{" "}
                  The article was a group project by several of our journalists,
                  where one name on the byline wouldn&apos;t do the work justice.
                </li>
                <li>
                  <span className="font-semibold">It&apos;s a Brief or Press Release:</span>{" "}
                  The article is a short, factual news update or a verified
                  summary of an official announcement.
                </li>
                <li>
                  <span className="font-semibold">To keep a writer safe:</span>{" "}
                  In rare situations, a story can be too sensitive or dangerous
                  to attach a single name to. If a journalist could be put at
                  risk, we will use the staff byline to protect them.
                </li>
              </ul>

              <p className="mt-4 text-base sm:text-[1.05rem] leading-relaxed text-neutral-800">
                No matter whose name is on the article—an individual&apos;s or the
                team&apos;s—it goes through the same rigorous editing and
                fact-checking process laid out in our{" "}
                <Link
                  href="/editorial-policy"
                  className="font-medium underline underline-offset-4"
                >
                  Editorial Policy
                </Link>
                . Our standards don&apos;t change.
              </p>
            </section>

            {/* Spacer */}
            <div className="mt-10" />
          </article>
        </main>

        <Footer />
      </div>

      {/* JSON-LD: CollectionPage + Persons + NewsMediaOrganization + WebSite + BreadcrumbList */}
      <Script id="our-team-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://www.chroniqnow.com/our-team",
              url: "https://www.chroniqnow.com/our-team",
              name: "The People Behind the News",
              isPartOf: { "@id": "https://www.chroniqnow.com/#website" },
              inLanguage: "en",
              description:
                "Meet the Chroniq Now team: long-form reporters, explainers, fact-checkers, and on-the-ground journalists.",
              breadcrumb: { "@id": "https://www.chroniqnow.com/our-team#breadcrumb" },
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/author/chelsea-m-wheatley#id",
              name: "Chelsea M. Wheatley",
              url: "https://www.chroniqnow.com/author/chelsea-m-wheatley",
              image: "https://www.chroniqnow.com/images/team/chelsea-m-wheatley.jpg",
              jobTitle: "Journalist",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/author/kenneth-m-butts#id",
              name: "Kenneth M. Butts",
              url: "https://www.chroniqnow.com/author/kenneth-m-butts",
              image: "https://www.chroniqnow.com/images/team/kenneth-m-butts.jpg",
              jobTitle: "Reporter",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/author/antonio-m-davis#id",
              name: "Antonio M. Davis",
              url: "https://www.chroniqnow.com/author/antonio-m-davis",
              image: "https://www.chroniqnow.com/images/team/antonio-m-davis.jpg",
              jobTitle: "Editor",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/author/arthur-a-johnson#id",
              name: "Arthur A. Johnson",
              url: "https://www.chroniqnow.com/author/arthur-a-johnson",
              image: "https://www.chroniqnow.com/images/team/arthur-a-johnson.jpg",
              jobTitle: "Field Reporter",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/author/hope-m-pender#id",
              name: "Hope M. Pender",
              url: "https://www.chroniqnow.com/author/hope-m-pender",
              image: "https://www.chroniqnow.com/images/team/hope-m-pender.jpg",
              jobTitle: "Technology & Science Reporter",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" }
            },
            {
              "@type": "Person",
              "@id": "https://www.chroniqnow.com/author/jennifer-albright#id",
              name: "Jennifer Albright",
              url: "https://www.chroniqnow.com/author/jennifer-albright",
              image: "https://www.chroniqnow.com/images/team/jennifer-albright.jpg",
              jobTitle: "Breaking News Reporter",
              worksFor: { "@id": "https://www.chroniqnow.com/#newsorg" }
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
              sameAs: []
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://www.chroniqnow.com/our-team#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.chroniqnow.com/" },
                { "@type": "ListItem", position: 2, name: "The People Behind the News", item: "https://www.chroniqnow.com/our-team" }
              ]
            }
          ]
        })}
      </Script>
    </>
  );
}
