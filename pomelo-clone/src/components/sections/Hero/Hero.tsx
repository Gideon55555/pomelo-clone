import Container from "@/components/common/Container";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#000339] pb-12 pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_50%_57%,rgba(22,72,255,0.28),transparent_72%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(115,104,151,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(115,104,151,0.045)_1px,transparent_1px)] [background-size:82px_82px]" />
      <div className="absolute left-[18%] top-[18%] h-px w-[42%] bg-gradient-to-r from-transparent via-[#1648ff]/45 to-transparent" />
      <div className="absolute right-[16%] top-[21%] h-[1px] w-[25%] bg-gradient-to-r from-transparent to-[#3484ff]/30" />

      <div className="pointer-events-none absolute left-[16%] top-[58%] hidden h-[118px] w-[118px] -rotate-[27deg] rounded-[13px] border border-[#3484ff]/60 bg-[linear-gradient(135deg,rgba(100,166,255,0.32),rgba(18,55,156,0.12))] shadow-[-10px_14px_35px_rgba(22,72,255,0.2)] lg:block" />
      <div className="pointer-events-none absolute left-[19%] top-[55%] hidden h-[118px] w-[118px] -rotate-[27deg] rounded-[13px] bg-[#3484ff]/10 blur-sm lg:block" />

      <div className="pointer-events-none absolute right-[17%] top-[35%] hidden h-[100px] w-[138px] rotate-[29deg] rounded-[13px] border border-[#3484ff]/70 bg-[linear-gradient(135deg,rgba(130,185,255,0.34),rgba(22,72,255,0.17))] shadow-[0_14px_45px_rgba(22,72,255,0.2)] lg:block" />
      <div className="pointer-events-none absolute right-[13%] top-[31%] hidden h-[100px] w-[138px] rotate-[29deg] rounded-[13px] bg-[#1648ff]/20 lg:block" />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-[660px] flex-col items-center text-center">
          <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-1.5 text-[10px] font-medium tracking-[-0.02em] text-white/55 shadow-[0_4px_20px_rgba(0,0,0,0.16)] backdrop-blur-md sm:text-xs">
            Launch, scale up or future-proof your business
          </span>

          <h1 className="mt-7 text-[46px] font-semibold leading-[0.96] tracking-[-0.065em] sm:mt-8 sm:text-[62px] lg:text-[68px]">
            Smart payments
            <br />
            infrastructure.
            <br />
            <span className="bg-gradient-to-r from-[#1648ff] via-[#3484ff] to-[#80b4ff] bg-clip-text text-transparent">
              Zero friction.
            </span>
          </h1>

          <p className="mt-6 max-w-[410px] text-[13px] font-medium leading-[1.45] tracking-[-0.025em] text-white/78 sm:text-[15px]">
            A modular, API-first, cloud-native platform powered by
            <br className="hidden sm:block" /> AI to launch, operate, and manage your card business.
          </p>

          <div className="mt-7">
            <button className="rounded-[2px] bg-gradient-to-r from-[#1648ff] to-[#3484ff] px-5 py-2.5 text-[11px] font-medium text-white shadow-[0_6px_20px_rgba(22,72,255,0.32)] transition hover:brightness-110">
              Contact us
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}