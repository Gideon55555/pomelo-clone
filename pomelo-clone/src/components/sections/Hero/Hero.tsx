import Container from "@/components/common/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070B1D] pt-40 pb-36 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/15 blur-[180px]" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,transparent_0%,transparent_45%,#ffffff_46%,transparent_47%)] bg-[length:120px_120px]" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">

          {/* Badge */}
          <span className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-gray-300 backdrop-blur">
            Launch, scale up or future-proof your business
          </span>

          {/* Heading */}
          <h1 className="mt-10 text-6xl font-black leading-none tracking-tight md:text-7xl lg:text-[96px]">
            Smart payments
            <br />
            infrastructure.
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              Zero friction.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Modern payment infrastructure built for fast-growing companies.
            Launch, scale and automate your financial operations with one
            powerful platform.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button className="rounded-md bg-pink-600 px-8 py-4 font-semibold transition hover:bg-pink-500">
              Contact us
            </button>

            <button className="rounded-md border border-white/20 px-8 py-4 transition hover:bg-white/10">
              Learn More
            </button>
          </div>

        </div>
      </Container>

      {/* Decorative Card Right */}
      <div className="absolute right-24 top-1/2 hidden h-64 w-64 rotate-[35deg] rounded-3xl border border-pink-500/40 bg-white/5 backdrop-blur-xl lg:block" />

      {/* Decorative Card Left */}
      <div className="absolute bottom-10 left-20 hidden h-44 w-44 -rotate-[25deg] rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl lg:block" />
    </section>
  );
}