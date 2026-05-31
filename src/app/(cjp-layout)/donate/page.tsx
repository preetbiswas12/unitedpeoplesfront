import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "A donation page for United People's Front with an embedded Google Form-style layout.",
  alternates: {
    canonical: "/donate",
  },
  openGraph: {
    title: "Donate | United People's Front",
    description:
      "Support United People's Front using the embedded donation form.",
    url: "/donate",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Donate | United People's Front",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate | United People's Front",
    description:
      "Support United People's Front using the embedded donation form.",
    images: ["/banner.png"],
  },
};

export default function DonatePage() {
  return (
    <section className="py-20 lg:py-[120px] bg-paper min-h-screen border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">
          <div className="flex flex-col">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-2 mb-4 block">
              Support the movement
            </span>
            <h1 className="font-display font-normal text-[clamp(44px,6vw,80px)] leading-[0.92] tracking-[-0.005em] text-ink mb-4">
              Donate
              <br />
              <span className="text-saffron-deep">to UPF.</span>
            </h1>
            <p className="font-sans text-[18px] leading-[1.55] text-ink-2 max-w-[560px]">
              Use the embedded donation form on the right. It follows the same Google Form-style layout as the contact section, so the page feels consistent with the rest of the site.
            </p>

            <div className="mt-10 border-2 border-ink bg-paper py-7 px-[30px] relative shadow-[8px_8px_0_var(--color-ink)]">
              <span className="inline-block font-mono text-[10.5px] tracking-[0.22em] uppercase text-green bg-paper-2 py-1 px-2.5 border border-green mb-4">
                Donation Notes
              </span>
              <p className="font-sans text-[17px] leading-[1.6] text-ink-2">
                Donations help fund local outreach, printing, and community work. Please use the form to request the official payment details.
              </p>
            </div>
          </div>

          <iframe
            src="https://forms.gle/eKWYFPczr47MYR9R6"
            width="100%"
            height="1565"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full min-w-0 border-2 border-ink shadow-[8px_8px_0_var(--color-ink)] bg-paper"
            title="Donation Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}