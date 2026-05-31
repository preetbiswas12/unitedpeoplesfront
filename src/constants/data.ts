export const TICKER_ITEMS = [
  "Community Launch · Volume 1, Edition 1",
  "Filed under: Local Action, Youth Movement, Citizen Power",
  "Run by Youths, for People, with zero corporate funding",
  " Whoever wants to be here",
  "Now accepting complaints, concerns, and calls for action",
];

export const MARQUEE_SLOGANS = [
  "Together We Speak",
  "Stronger Together",
  "Unity · Resilience · Progress",
  "You Cannot Squash People's Voices",
];

export const NAV_ITEMS = [
  { name: "Vision", href: "/#vision" },
  { name: "Manifesto", href: "/#manifesto" },
  { name: "SDGs", href: "/#sdg" },
  { name: "Eligibility", href: "/#join" },
  { name: "Contact", href: "/#contact" },
  { name: "Donate", href: "/donate" },
];

export const FOOTER_COLUMNS = [
  {
    title: "The Community",
    sections: [
      {
        links: [
          { name: "Vision", href: "/#vision", external: false },
          { name: "Manifesto", href: "/#manifesto", external: false },
          { name: "Founder", href: "/#contact", external: false }
        ]
      },
    ]
  },
  {
    title: "Get involved",
    sections: [
      {
        links: [
          { name: "Eligibility", href: "/#join", external: false },
          { name: "Join the Community", href: "/#contact", external: false },
          { name: "Donate", href: "/donate", external: false }
        ]
      }
    ]
  },
  {
    title: "UPF Handles",
    sections: [
      {
        links: [
          { name: "Twitter / X", href: "https://x.com/UPF4People", external: true },
          { name: "Instagram", href: "https://www.instagram.com/upf4people/", external: true },
          { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61590512543442", external: true },
          { name: "LinkedIn", href: "https://www.linkedin.com/unitedpeoplesfront/", external: true }
        ]
      },
      {
        title: "Founder",
        links: [
          { name: "@UPF4People", href: "https://x.com/UPF4People", external: true },
          { name: "@upf4people", href: "https://www.instagram.com/upf4people/", external: true },
          { name: "Founder Page", href: "/founder", external: false }
        ]
      }
    ]
  }
];

export const ELIGIBILITY_ITEMS = [
  {
    id: "REQ / 01",
    title: "Tired of the Status Quo",
    desc: "By force, by choice, or by principle. If you are done with 'someone should fix this,' you belong here."
  },
  {
    id: "REQ / 02",
    title: "Lazy (Physically Only)",
    desc: "You hate running behind politicians for basic rights, but your brain constantly spirals with local solutions."
  },
  {
    id: "REQ / 03",
    title: "Chronically Observant",
    desc: "You can't walk past a broken street light, an open drain, or a pile of garbage without noticing it and getting annoyed."
  },
  {
    id: "REQ / 04",
    title: "Professional Ranter",
    desc: "As long as your rant is sharp, honest, and points at a local community problem that actually matters."
  }
];


export const MANIFESTO_DEMANDSfor = [
  {
    num: "01",
    textBefore: "A broken drain, a dark street, garbage in one corner, unsafe roads, small issues often become big struggles for ordinary people.",
    textHighlight: "We believe no local problem is “too small” ",
    textAfter: "if it affects people’s daily lives.",
    textHighlight2: "",
    textAfter2: ""
  },
  {
    num: "02",
    textBefore: "Before opinions, parties, or positions, there are people.",
    textHighlight: "Every decision, effort, and action should first answer one question:",
    textAfter: "Does this genuinely help the people?",
    textHighlight2: "",
    textAfter2: ""
  },
  {
    num: "03",
    textBefore: "Too many people feel ignored.",
    textHighlight: "We want to build a culture where citizens, especially ordinary residents, women, senior citizens, and youth, are listened ",
    textAfter: "to before decisions are spoken for them.",
    textHighlight2: "",
    textAfter2: "",
  },
  {
    num: "04",
    textBefore: "We do not believe in symbolic plantation drives for photos",
    textHighlight: "We believe in greener communities through responsibility, tree survival, and long-term care",
    textAfter: "because nature deserves commitment, not campaigns.",
    textHighlight2: "",
    textAfter2: ""
  },
  {
    num: "05",
    textBefore: "A stronger locality is built when",
    textHighlight: "people move from saying “someone should do something” to “let us do something together.”",
    textAfter: "We want to encourage communities where responsibility becomes collective.",
    textHighlight2: "",
    textAfter2: ""
  }
];

type FetchPriority = "high" | "low" | "auto";

interface HeroSlide {
  key: string;
  src: string;
  alt: string;
  fetchPriority?: FetchPriority;
}

export const HERO_SLIDES: HeroSlide[] = [
  { key: "default", src: "/logo.png", alt: "Official Poster", fetchPriority: "high" },
  { key: "alt", src: "/logo.png", alt: "Official Poster Alternative" },
];

export const DEFAULT_STATS = {
  PETITION_COUNT: 619016,
  VISITORS_COUNT: 84200,
};

export const API_BASE_URL = process.env.NEXT_PUBLIC_CJP_API_URL || "https://petition.cockroachjantaCommunity.org";

export interface StatItem {
  value: string;
  label: string;
  hasPulse?: boolean;
}

export const STAT_ITEMS: StatItem[] = [
  { value: "5", label: "Call for" },
  { value: "0", label: "Corporate donors" },
  { value: "∞", label: "Patience" },
  { value: "1", label: "Founder, no PA" }
];

export interface ContactItem {
  label: string;
  value: string;
  subValue?: string;
}

export const CONTACT_ITEMS: ContactItem[] = [
  { label: "Email", value: "unitedpeoplesfrontofficial@gmail.com" },
  { label: "Press", value: "unitedpeoplesfrontofficial@gmail.com" },
  { label: "Headquarters", value: "Naihati, Hooghly, West Bengal" },
  { label: "Founder", value: "Ritesh Dutta", subValue: "Founder & Convenor" }
];

export const SITE_INFO = {
  SITE_NAME: "UPF",
  SITE_FULL_NAME: "United People's Front",
};
