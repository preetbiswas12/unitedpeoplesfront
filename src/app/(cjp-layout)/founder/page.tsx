import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_ITEMS, SITE_INFO } from "@/constants/data";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "A founder page for United People's Front focused on trust, background, consistency, and real action.",
  alternates: {
    canonical: "/founder",
  },
  openGraph: {
    title: "Founder | United People's Front",
    description:
      "Meet Ritesh Dutta and read the founder note that shapes UPF's direction.",
    url: "/founder",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Founder | United People's Front",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder | United People's Front",
    description:
      "Meet Ritesh Dutta and read the founder note that shapes UPF's direction.",
    images: ["/banner.png"],
  },
};

const founderNotes = [
  "At UPF, we believe trust is earned through background, consistency, and real action, not just words.",
  "Ritesh Dutta, Founder of United People's Front (UPF), is a student of Political Science with a strong interest in governance, public leadership, civic participation, and grassroots problem-solving.",
  "Over the years, he has actively participated in youth leadership, policy, and civic platforms, including being selected for the final round of national youth initiatives and contributing to discussions around public policy, youth empowerment, technology, and community impact.",
  "His work and interests have focused on areas such as youth leadership, civic awareness, education inequality, environmental responsibility, and local community development.",
  "UPF was created from a simple belief: Real change begins when ordinary people decide to care, observe, and take responsibility for the places they live in.",
  "For Ritesh, leadership is not about making promises. It is about listening to people, understanding local realities, and taking meaningful action, one step at a time.",
  "Because stronger communities are built through trust, responsibility, and real action.",
];

const founderPrinciples = [
  "Stay rooted in civic participation and local realities.",
  "Lead with consistency, listening, and accountability.",
  "Turn public interest into meaningful action.",
  "Keep the mission readable on mobile and desktop alike.",
];

export default function FounderPage() {
  const founderItem = CONTACT_ITEMS.find((item) => item.label === "Founder");

  return (
    <section className="relative bg-paper border-b-2 border-ink overflow-hidden py-[80px] lg:py-[120px] min-h-screen">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 65% 40% at 15% 0%, rgba(224,101,30,0.10), transparent 55%), radial-gradient(ellipse 45% 35% at 95% 10%, rgba(31,90,46,0.10), transparent 50%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[56px] relative z-2">
        <div className="max-w-[900px] mb-[56px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
            <div className="max-w-[680px]">
              <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-saffron-deep mb-[22px]">
                Chapter Zero
              </span>
              <h1 className="font-display font-normal text-[clamp(44px,6vw,84px)] leading-[0.9] tracking-[-0.01em] text-ink">
                Founder.
                <br />
                <span className="text-green font-['Georgia',serif] italic tracking-[-0.02em]">Ritesh Dutta, United People&apos;s Front.</span>
              </h1>
              <p className="font-sans text-[18px] leading-[1.6] text-ink-2 mt-6">
                {SITE_INFO.SITE_FULL_NAME} keeps the same visual language everywhere. This page gives the founder a dedicated space to explain the background, values, and purpose behind UPF without changing the site-wide theme, header, footer, or layout structure.
              </p>
            </div>

            <div className="justify-self-start lg:justify-self-end w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border-2 border-ink bg-paper shadow-[8px_8px_0_var(--color-ink)] overflow-hidden">
              <Image
                src="/me.jpg"
                alt="Ritesh Dutta portrait"
                width={560}
                height={560}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-10 items-start">
          <article className="border-2 border-ink bg-paper shadow-[8px_8px_0_var(--color-ink)] p-[24px] sm:p-[30px]">
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-green bg-paper-2 py-1 px-2.5 border border-green">
                Founder Note
              </span>
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-saffron-deep">
                01 / 07
              </span>
            </div>

            <div className="space-y-5 font-sans text-[17px] leading-[1.7] text-ink-2">
              {founderNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>

            <div className="mt-10 border-t-2 border-ink pt-8">
              <h2 className="font-display text-[28px] leading-none text-ink mb-5">Operating principles</h2>
              <ul className="list-none grid gap-3">
                {founderPrinciples.map((principle) => (
                  <li
                    key={principle}
                    className="bg-paper-2 border-2 border-ink px-4 py-3 font-sans text-[15px] leading-[1.5] text-ink-2 shadow-[4px_4px_0_var(--color-ink)]"
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="border-2 border-ink bg-ink text-paper shadow-[8px_8px_0_var(--color-saffron-deep)] p-[24px] sm:p-[30px]">
              <span className="inline-block font-mono text-[10.5px] tracking-[0.22em] uppercase text-saffron-2 bg-[rgba(244,235,215,0.06)] py-1 px-2.5 border border-[rgba(244,235,215,0.22)] mb-5">
                Role
              </span>
              <h2 className="font-display text-[30px] leading-none mb-4">Founder of UPF</h2>
              <p className="font-sans text-[16px] leading-[1.65] text-[rgba(244,235,215,0.82)]">
                The founder page acts as a simple public profile. It stays inside the existing palette and spacing system so it feels native to the current site instead of a separate design.
              </p>
            </div>

            <div className="border-2 border-ink bg-paper-2 shadow-[6px_6px_0_var(--color-ink)] p-[24px] sm:p-[30px]">
              <span className="inline-block font-mono text-[10.5px] tracking-[0.22em] uppercase text-saffron-deep mb-5">
                Contact
              </span>
              <div className="grid gap-4">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-ink/15 pb-3 last:border-b-0 last:pb-0">
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-green mb-1">
                      {item.label}
                    </div>
                    <div className="font-sans text-[16px] text-ink-2">{item.value}</div>
                    {item.subValue && <div className="font-sans text-[13px] text-ink/75">{item.subValue}</div>}
                  </div>
                ))}
              </div>
            </div>

            {founderItem && (
              <div className="border-2 border-ink bg-paper shadow-[6px_6px_0_var(--color-ink)] p-[24px] sm:p-[30px]">
                <span className="inline-block font-mono text-[10.5px] tracking-[0.22em] uppercase text-saffron-deep mb-4">
                  Founder signature
                </span>
                <p className="font-display text-[28px] leading-[1.05] text-ink mb-2">Ritesh Dutta</p>
                <p className="font-sans text-[14px] leading-[1.6] text-ink-2">
                  Founder, United People&apos;s Front (UPF)
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-1">
              <Link
                href="/"
                className="bg-saffron-deep text-paper font-condensed text-[13px] font-bold tracking-[0.2em] uppercase py-[14px] px-[22px] border-2 border-ink shadow-[5px_5px_0_var(--color-ink)] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--color-ink)]"
              >
                Back Home
              </Link>
              <Link
                href="/donate"
                className="bg-paper text-ink font-condensed text-[13px] font-bold tracking-[0.2em] uppercase py-[14px] px-[22px] border-2 border-ink shadow-[5px_5px_0_var(--color-ink)] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--color-ink)]"
              >
                Donate
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}