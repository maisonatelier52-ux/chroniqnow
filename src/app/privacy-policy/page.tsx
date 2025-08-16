import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Chroniq Now’s privacy policy: what we collect, why we collect it, how we protect it, and your rights.",
  alternates: { canonical: "https://www.chroniqnow.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy",
    description:
      "What we collect, why we collect it, how we protect it, and your rights.",
    url: "https://www.chroniqnow.com/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description:
      "What we collect, why we collect it, how we protect it, and your rights.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script
        id="privacy-policy-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.chroniqnow.com/privacy-policy",
              url: "https://www.chroniqnow.com/privacy-policy",
              name: "Privacy Policy",
              isPartOf: { "@id": "https://www.chroniqnow.com/#website" },
              inLanguage: "en",
              description:
                "Chroniq Now’s privacy policy: what we collect, why we collect it, how we protect it, and your rights.",
              breadcrumb: {
                "@id": "https://www.chroniqnow.com/privacy-policy#breadcrumb",
              },
              mainEntity: {
                "@id": "https://www.chroniqnow.com/privacy-policy#policy",
              },
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" },
            },
            {
              "@type": "PrivacyPolicy",
              "@id": "https://www.chroniqnow.com/privacy-policy#policy",
              url: "https://www.chroniqnow.com/privacy-policy",
              name: "Privacy Policy",
              publisher: { "@id": "https://www.chroniqnow.com/#newsorg" },
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
              correctionsPolicy: "https://www.chroniqnow.com/correction-policy",
              ethicsPolicy: "https://www.chroniqnow.com/editorial-policy",
              privacyPolicy: "https://www.chroniqnow.com/privacy-policy",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "editorial",
                  email: "contact@chroniqnow.com",
                  areaServed: "Worldwide",
                  availableLanguage: ["en"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "news tips",
                  email: "tips@chroniqnow.com",
                  areaServed: "Worldwide",
                  availableLanguage: ["en"],
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://www.chroniqnow.com/privacy-policy#breadcrumb",
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
                  name: "Privacy Policy",
                  item: "https://www.chroniqnow.com/privacy-policy",
                },
              ],
            },
          ],
        })}
      </Script>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <Navbar />
        <header className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
          <div className="mx-auto w-full max-w-6xl">
            <h1 className="mt-4 text-balance text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-3xl text-pretty text-neutral-700 text-base sm:text-lg md:text-[1.15rem] leading-relaxed">
              We believe you have a right to privacy. This page explains in
              plain English what little information we collect from visitors to{" "}
              <span className="font-semibold">Chroniq Now</span> and how we use
              it. Our goal is to be as transparent as possible.
            </p>
          </div>
        </header>

        <main className="px-4 sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-6xl">
            <section
              aria-labelledby="short-version"
              className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6 sm:p-8"
            >
              <h2
                id="short-version"
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-amber-800"
              >
                The Short Version
              </h2>
              <p className="mt-4 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-amber-900/90">
                We are a news site, not a data company. We don&apos;t track you
                personally, and we don&apos;t sell your information to anyone.
                Ever. We only collect the bare minimum amount of anonymous data
                we need to understand how our site is being used so we can make
                it better.
              </p>
            </section>

            <div className="my-8 h-px w-full bg-neutral-200" />

            <section aria-labelledby="what-we-collect" className="space-y-6">
              <h2
                id="what-we-collect"
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
              >
                What Information We Collect and Why
              </h2>

              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-sky-700">
                  Website Analytics
                </h3>
                <p className="mt-2 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-sky-900/90">
                  Like most websites, we use analytics tools (like{" "}
                  <span className="font-medium">
                    e.g., Google Analytics, Plausible, etc.
                  </span>
                  ) to see how many people are visiting our site, which articles
                  are popular, and how people found us. This information is
                  anonymous. It tells us things like &quot;1,000 people from
                  this country read this story,&quot; but it absolutely does not
                  tell us that <em>you</em> specifically read it. We use this
                  data to help us figure out what kind of stories our audience
                  is interested in.
                </p>
              </div>

              <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-rose-700">
                  Cookies
                </h3>
                <p className="mt-2 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-rose-900/90">
                  Cookies are small text files that your browser stores. Our
                  site may use them for basic functions, like remembering if
                  you&apos;ve dismissed a notice so we don&apos;t show it to you
                  again. Our analytics tool also uses cookies to distinguish
                  between different visitors anonymously. You can clear or block
                  cookies in your browser settings at any time. It won&apos;t
                  break our site.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-emerald-700">
                  Comments
                </h3>
                <p className="mt-2 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-emerald-900/90">
                  If you choose to leave a comment on an article, we will
                  collect the information you provide in the comment form (like
                  your name and the comment itself), as well as your IP address
                  to help with spam prevention. The name you provide will be
                  publicly visible. We ask that you do not share sensitive
                  personal information in the comments section.
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-700">
                  Emails and Contact Forms
                </h3>
                <p className="mt-2 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-indigo-900/90">
                  If you email us directly or use a contact form, we will
                  obviously have the information you provide, like your email
                  address and your name. We only use this information to respond
                  to your inquiry. We will not add you to a mailing list without
                  your explicit permission, and we will never sell or share your
                  email address.
                </p>
              </div>
            </section>

            <div className="my-8 h-px w-full bg-neutral-200" />

            <section
              aria-labelledby="who-we-share"
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <h2
                id="who-we-share"
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
              >
                Who We Share Data With
              </h2>
              <p className="mt-4 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                Nobody.
              </p>
              <p className="mt-2 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties. The only exception is if we are
                required to do so by law. The anonymous analytics data is
                processed by our analytics provider (e.g., Google, Plausible),
                but they are also bound by strict privacy policies.
              </p>
            </section>

            <div className="my-8 h-px w-full bg-neutral-200" />

            <section
              aria-labelledby="how-we-protect"
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <h2
                id="how-we-protect"
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
              >
                How We Protect Your Information
              </h2>
              <p className="mt-4 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                We take security seriously. While no online service is 100%
                secure, we use standard security measures (like SSL encryption
                for our website) to help protect your information. For sensitive
                communications, like a news tip, we strongly encourage you to
                use our secure{" "}
                <Link
                  href="mailto:tips@chroniqnow.com"
                  className="font-semibold underline underline-offset-4"
                >
                  tips@chroniqnow.com
                </Link>{" "}
                email and consider using an encrypted service for added
                protection.
              </p>
            </section>

            <div className="my-8 h-px w-full bg-neutral-200" />

            <section
              aria-labelledby="your-rights"
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <h2
                id="your-rights"
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
              >
                Your Rights
              </h2>
              <p className="mt-4 text-base sm:text-[1.05rem] md:text-lg leading-relaxed text-neutral-800">
                You have the right to your data. Since we don&apos;t collect
                personal profiles of our readers, there isn&apos;t much for you
                to request, but you can always contact us if you have questions
                or concerns.
              </p>

              <div
                className="mt-5 flex items-center gap-3 whitespace-nowrap overflow-x-auto"
                aria-label="Contact email"
              >
                <p className="shrink-0 text-sm font-medium text-neutral-900">
                  Email:
                </p>
                <Link
                  href="mailto:contact@chroniqnow.com"
                  className="shrink-0 inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-2 text-sm sm:text-[0.95rem] font-semibold text-white hover:bg-sky-700"
                >
                  contact@chroniqnow.com
                </Link>
              </div>

              <p className="mt-6 text-sm sm:text-[0.95rem] text-neutral-600">
                This policy was last updated on{" "}
                <span className="font-semibold">August 16, 2025</span>.
              </p>
            </section>

            <div className="mt-10" />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
