const partners = [
  { name: "tapi", mark: "⌁", style: "lowercase italic" },
  { name: "Western Union", mark: "W", style: "" },
  { name: "Pomelo", mark: "◫", style: "" },
  { name: "BINANCE", mark: "◆", style: "tracking-[0.05em]" },
  { name: "creditas", mark: "◉", style: "lowercase" },
  { name: "Konfío", mark: "", style: "" },
];

export default function PartnerMarquee() {
  return (
    <section
      aria-label="Companies using Qua technology"
      className="relative overflow-hidden border-y border-[#609395]/10 bg-[#0B2023] py-10 text-[#EEFEFC] sm:py-12"
    >
      <p className="relative z-10 px-6 text-center text-[14px] font-medium tracking-[-0.015em] text-[#EEFEFC]/90 sm:text-[16px]">
        Banks, fintechs, and global businesses run on our technology
      </p>

      <div className="relative mx-auto mt-8 max-w-[1120px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent)] sm:mt-9">
        <div className="partner-logo-marquee flex w-max items-center">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              aria-hidden={index >= partners.length}
              className={`flex min-w-[130px] shrink-0 items-center justify-center gap-2 text-[16px] font-semibold tracking-[-0.045em] text-[#EEFEFC]/80 sm:min-w-[150px] sm:text-[18px] ${partner.style}`}
            >
              {partner.mark && (
                <span className="text-[18px] font-bold leading-none text-[#1AF3DC]">
                  {partner.mark}
                </span>
              )}
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
