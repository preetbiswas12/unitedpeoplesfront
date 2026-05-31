import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Oswald, Bowlby_One } from "next/font/google";
import "./globals.css";
import { SITE_INFO } from "@/constants/data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const oswald = Oswald({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bowlbyOne = Bowlby_One({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = process.env.NEXT_CJP_PUBLIC_SITE_URL || "https://cjpgenz.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${SITE_INFO.SITE_FULL_NAME} — Voice of the Unheared & Underserved`,
    template: `%s — ${SITE_INFO.SITE_FULL_NAME}`,
  },
  description:
    "A citizen-driven initiative working for awareness, accountability, and local action in Naihati and nearby communities.",

  applicationName: SITE_INFO.SITE_FULL_NAME,
  keywords: [
    "United People's Front",
    "UPF",
    "United People's Front India",
    "unitedpeoplesfront",
    "Youth political Community India",
    "unemployed youth India",
    "lazy and unemployed Community",
    "satire political Community",
    "education reform India",
    "student movement India",
    "Gen Z politics India",
    "protest Community India",
    "five Call for UPF",
  ],
  authors: [{ name: SITE_INFO.SITE_FULL_NAME }],
  creator: SITE_INFO.SITE_FULL_NAME,
  publisher: SITE_INFO.SITE_FULL_NAME,
  category: "Politics & Satire",

  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_INFO.SITE_FULL_NAME,
    title: `${SITE_INFO.SITE_FULL_NAME} — Voice of the Unheared & Underserved`,
    description:
      "A citizen-driven initiative working for awareness, accountability, and local action in Naihati and nearby communities.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: `${SITE_INFO.SITE_FULL_NAME} — Stronger Together`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_INFO.SITE_FULL_NAME} — Voice of the Unheared & Underserved`,
    description:
      "A citizen-driven initiative working for awareness, accountability, and local action in Naihati and nearby communities.",
    images: ["/banner.png"],
  },

  other: {
    "og:locale:alternate": "hi_IN",
    "article:tag": "UPF, United People's Front, Youth Movement",
  },
};

export const viewport = {
  themeColor: "#F4EBD7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${oswald.variable} ${bowlbyOne.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* JSON-LD: Organization + WebSite with alternate names */}
        <script
          type="application/ld+json"
          id="schema-organization"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  name: SITE_INFO.SITE_FULL_NAME,
                  alternateName: [
                    "UPF",
                    "United People's Front India",
                    "United People Front",
                    "unitedpeoplesfront",
                    "united peoples front"
                  ],
                  url: siteUrl,
                  logo: `${siteUrl}/logo.png`,
                  description:
                    "A citizen-driven initiative working for awareness, accountability, and local action in Naihati and nearby communities.",
                  foundingDate: "2026",
                  slogan: "Voice of the Unheared & Underserved",
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: SITE_INFO.SITE_FULL_NAME,
                  alternateName: [
                    "UPF",
                    "United People's Front",
                    "United Peoples Front",
                    "unitedpeoplesfront",
                  ],
                  publisher: {
                    "@id": `${siteUrl}/#organization`,
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
