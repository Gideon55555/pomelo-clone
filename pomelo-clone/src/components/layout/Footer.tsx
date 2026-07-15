const columns = [
  {
    heading: "Solutions",
    links: ["Mobile Development", "Web Development", "Custom Software", "Cloud & DevOps", "Our work"],
  },
  {
    heading: "Company",
    links: ["About Us", "Work with us", "Contact us"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Case Studies", "Docs", "Status Page"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#000339] px-6 pb-10 pt-16 text-white light:border-[#000339]/10 light:bg-[#e9ebec] light:text-[#000339] sm:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_50%_120%,rgba(22,72,255,0.16),transparent_70%)] light:bg-[radial-gradient(ellipse_40%_50%_at_50%_120%,rgba(52,132,255,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1050px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#" className="flex items-center gap-1.5 text-[15px] font-semibold tracking-[-0.06em]">
              <svg aria-hidden="true" className="h-[18px] w-[15px]" viewBox="0 0 18 20" fill="none">
                <path d="M1 4.1 8.9 0v8L1 12.1V4.1Z" fill="#1648FF" />
                <path d="m1 12.1 7.9-4v8L1 20v-7.9Z" fill="#0F36BF" />
                <path d="m9.1 0 7.9 4.1v8l-7.9-4V0Z" fill="#75B2FF" />
                <path d="m9.1 12 7.9-3.9V16l-7.9 4v-8Z" fill="#3484FF" />
              </svg>
              <span>qua</span>
            </a>
            <p className="mt-4 max-w-[280px] text-[13px] leading-relaxed text-white/60 light:text-[#000339]/60">
              Subscribe to our newsletter and receive the latest industry news.
            </p>
            <form className="mt-4 flex max-w-[280px] overflow-hidden rounded-[3px] border border-white/[0.12] light:border-[#000339]/15">
              <div className="relative min-w-0 flex-1">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder=" "
                  autoComplete="email"
                  className="peer w-full bg-white/[0.03] px-3 pb-2 pt-5 text-[13px] text-white focus:outline-none light:bg-white/70 light:text-[#000339]"
                />
                <label
                  htmlFor="newsletter-email"
                  className="pointer-events-none absolute left-3 top-1/2 origin-left -translate-y-1/2 text-[13px] text-white/45 transition-transform duration-200 ease-out peer-focus:-translate-y-[17px] peer-focus:scale-[0.72] peer-focus:text-[#80b4ff] peer-[:not(:placeholder-shown)]:-translate-y-[17px] peer-[:not(:placeholder-shown)]:scale-[0.72] light:text-[#000339]/50 light:peer-focus:text-[#1648ff]"
                >
                  Your email
                </label>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#1648ff] to-[#80b4ff] transition-transform duration-300 ease-out peer-focus:scale-x-100"
                />
              </div>
              <button
                type="button"
                data-cursor="hover"
                className="bg-gradient-to-r from-[#1648ff] to-[#3484ff] px-4 text-[13px] font-medium text-white transition hover:brightness-110"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.heading}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55 light:text-[#000339]/55">
                  {column.heading}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[13px] text-white/70 transition-colors hover:text-white light:text-[#000339]/70 light:hover:text-[#000339]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-6 light:border-[#000339]/10 sm:flex-row">
          <p className="text-[12px] text-white/55 light:text-[#000339]/55">
            © 2026 Qua. All rights reserved. Service availability varies by market.
          </p>
          <div className="flex gap-4 text-[13px] text-white/60 light:text-[#000339]/60">
            <a href="#" aria-label="X" className="transition-colors hover:text-white light:hover:text-[#000339]">X</a>
            <a href="#" aria-label="YouTube" className="transition-colors hover:text-white light:hover:text-[#000339]">YouTube</a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-white light:hover:text-[#000339]">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
