import Link from "next/link";
import { FOOTER_COLUMNS, SITE_INFO } from "@/constants/data";
import Logo from "@/components/Logo";

const TwitterIcon = ({ className = "w-4 h-4 shrink-0", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 0 0 0 0-2.881z" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
    <path d="M13.5 22v-8h2.5l.5-3h-3v-2c0-.9.3-1.5 1.6-1.5H16.5V4.1C16.2 4.1 15.1 4 13.9 4 11.3 4 9.8 5.6 9.8 8.4V11H7v3h2.8v8h3.7z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.89 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 5 2.12 5 3.5ZM0 8h5v16H0V8Zm8 0h4.8v2.2h.1c.7-1.3 2.5-2.6 5.1-2.6 5.5 0 6.5 3.6 6.5 8.3V24h-5V16.3c0-1.8 0-4-2.4-4s-2.8 1.9-2.8 3.9V24H8V8Z" />
  </svg>
);

const ICONS_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "Twitter / X": TwitterIcon,
  "Instagram": InstagramIcon,
  "Facebook": FacebookIcon,
  "LinkedIn": LinkedInIcon,
  "@UPF4People": TwitterIcon,
  "@upf4people": InstagramIcon,
};

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-auto">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 pt-16 lg:pt-20 pb-12 lg:pb-[60px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-3.5 mb-[18px]">
              <span className="w-12 h-12 grid place-items-center">
                <Logo variant="dark" />
              </span>
              <span className="flex flex-col gap-1.5 leading-none">
                <span className="font-display text-[14px] sm:text-[16px] tracking-[0.01em] leading-[0.94] text-paper">
                  UNITED
                  <br />
                  PEOPLE&apos;S FRONT
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-saffron-2">
                  United People&apos;s Front
                </span>
              </span>
            </div>
            <p className="font-sans text-[15px] leading-[1.6] text-[rgba(244,235,215,0.6)] max-w-[320px]">
              A citizen-driven initiative working for awareness, accountability, and local action in Naihati and nearby communities. Headquartered Naihati, Hooghly, West Bengal
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-9">
            {FOOTER_COLUMNS.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col">
                <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-saffron-2 font-semibold mb-[18px] pb-3 border-b border-[rgba(255,255,255,0.18)]">
                  {col.title}
                </h4>
                {col.sections.map((section, secIdx) => (
                  <div key={secIdx} className={secIdx > 0 ? "mt-8 flex flex-col" : "flex flex-col"}>
                    {section.title && (
                      <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-saffron-2 font-semibold mb-[18px] pb-3 border-b border-[rgba(255,255,255,0.18)]">
                        {section.title}
                      </h4>
                    )}
                    <ul className="list-none flex flex-col gap-[11px]">
                      {section.links.map((link, linkIdx) => {
                        const className = "font-sans text-[15px] text-[rgba(244,235,215,0.72)] transition-colors duration-150 hover:text-saffron-2 inline-flex items-center gap-[9px]";
                        const Icon = ICONS_MAP[link.name];
                        const linkContent = (
                          <>
                            {Icon && <Icon />}
                            <span>{link.name}</span>
                          </>
                        );
                        const linkProps = {
                          href: link.href,
                          className,
                        };

                        return (
                          <li key={linkIdx}>
                            {link.external ? (
                              <a
                                {...linkProps}
                                target="_blank"
                                rel="noopener"
                              >
                                {linkContent}
                              </a>
                            ) : (
                              <Link
                                {...linkProps}
                              >
                                {linkContent}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.12)] py-[22px]">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center font-mono text-[10.5px] tracking-[0.2em] uppercase text-[rgba(244,235,215,0.55)] flex-wrap gap-4 sm:gap-4">
            <div>© 2026 {SITE_INFO.SITE_FULL_NAME} · All Voices reserved.</div>
            <span className="bg-saffron text-paper py-1 px-3 tracking-[0.22em]">
              ⚠ A work of Youths
            </span>
            <div className="flex gap-2">
              <a href="#" className="text-[rgba(244,235,215,0.55)] transition-colors duration-150 hover:text-saffron-2">Privacy</a>
              {" · "}
              <a href="#" className="text-[rgba(244,235,215,0.55)] transition-colors duration-150 hover:text-saffron-2">Press</a>
              {" · "}
              <Link
                href="/#contact"
                className="text-[rgba(244,235,215,0.55)] transition-colors duration-150 hover:text-saffron-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
