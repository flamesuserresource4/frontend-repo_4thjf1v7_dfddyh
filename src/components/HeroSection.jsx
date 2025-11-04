import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="h-[320px] md:h-[420px] w-full overflow-hidden rounded-none md:rounded-2xl bg-black">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Soft gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="absolute inset-0 flex items-end p-6 md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-white text-2xl md:text-4xl font-semibold leading-tight">
              Smart Ticketing for Faster Care
            </h2>
            <p className="mt-2 text-slate-200/90 text-sm md:text-base">
              Choose a service, generate a ticket, and take a seat. We’ll notify you when it’s your turn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
