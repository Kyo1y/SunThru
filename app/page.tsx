import type { Metadata } from "next";
import Link from "next/link";
import AutoplayVideo from "@/components/AutoplayVideo";

export const metadata: Metadata = {
  title: "SunThru — The Lightest Insulation",
  description: "Enabling widespread commercialization of aerogels for high-performance window products. 7x faster to manufacture than triple-pane glass.",
};

const PARTNERS_TRUST = ["NYSERDA", "FuzeHub", "Koffman", "America's Seed Fund", "Union College"];

const SPEC_CARDS = [
  { label: "U-Value Rating", value: "0.15", unit: "W/(m²·K) Center of glass", compare: "62% Improvement", color: "#356574" },
  { label: "Visual Transmittance", value: "78%", unit: "Photopic transmission index", compare: "Ultra-Clear Silica", color: "#E8A030" },
  { label: "Product Weight", value: "1.2", unit: "kg/m² (Insert only)", compare: "35% Cost reduction", color: "#000719" },
  { label: "Service Life", value: "30+", unit: "Years anticipated longevity", compare: "Zero Refill Needed", color: "#9ecee0" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        {/* Placeholder hero image until real photo provided */}
        <img alt="Modern Architectural Window" className="absolute inset-0 w-full h-full object-cover"
          data-alt="wide shot of a minimalist modern building with floor-to-ceiling glass windows at sunrise, warm sunlight streaming through clear panes onto polished concrete floor"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyE6aJG5uuB-2OpjYyQRe_qpa0qyCoRLZLe3UCHelqI703dXu9Cl6eeJV8VL_Yod7-Jjhvrz5R0nUspiFvI2Iw_ls2YaIaq4o4yImKdPpJsvBrAkZmzOE9UDDQiFwjVhovZqPALQBjDmZlzq8VyiDTRbd2dqmPfr35CsOOVoRWtAG-YPkiDiObqHmJcqW2lEd_lMIL-_D55MZoBMG7P_3GN9ckVRQEN8nKtAyfKONq6KtM9wjH0xZ2Ns6ibAef52i-JjOl1bL9vy2Q" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>

        <div className="relative z-10 container-wide w-full">

          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#E8A030] mb-6">
              Aerogel Window Technology
            </p>
            <h1
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              The lightest insulation.{" "}
              <span className="text-[#e0e3e6] opacity-80">
                Engineered for every window on earth.
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 mt-12">
              <Link
                href="/technology"
                className="bg-[#0d1f3c] text-white px-8 py-4 font-bold hover:bg-[#E8A030] hover:text-[#000719] transition-colors duration-300"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                See the Technology
              </Link>
              <Link
                href="/partners"
                className="bg-white/60 text-[#0d1f3c] px-8 py-4 font-bold hover:bg-[#FFFFFF] transition-colors duration-300"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Thermal Index floating card */}
        {/* <div className="absolute right-12 bottom-24 w-80 glass-panel p-6 rounded-lg border border-white/30 hidden lg:block">
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-xs text-primary-container font-bold uppercase tracking-widest">Thermal Index</span>
            <span className="material-symbols-outlined text-[#E8A030]" data-icon="thermostat">thermostat</span>
          </div>
          <div className="h-40 w-full bg-gradient-to-t from-blue-400/30 via-transparent to-orange-400/30 relative flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-dashed border-white/40 m-2"></div>
            <span className="font-mono text-sm text-primary-container">Silica Aerogel Core</span>
          </div>
          <p className="mt-4 text-xs font-body text-on-surface-variant leading-relaxed">
            99% air molecular structure providing 3x the R-value of standard inert gas fills.
          </p>
        </div> */}
      </section>

      {/* ── Trust Rail ───────────────────────────────────── */}
      <section className="bg-[#f2f4f7] py-10 border-y border-[#c5c6ce]/20">
        <div className="container-wide">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[#75777e] mb-6">
            Supported &amp; Validated By
          </p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
            {PARTNERS_TRUST.map((p) => (
              <div key={p} className="text-lg font-bold text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem / Solution ───────────────────────────── */}
      <section className="section-padding bg-[#f7f9fc] relative">
        <div className="absolute inset-0 micro-grid" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left: Conventional */}
            <div className="space-y-10">
              <div>
                <span className="font-mono text-xs text-[#75777e] uppercase tracking-widest">Conventional Design</span>
                <h2 className="text-4xl font-bold mt-4 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                  The Triple-Pane Problem
                </h2>
                <p className="mt-6 text-[#44474d] text-lg leading-relaxed max-w-lg">
                  Traditional high-efficiency windows rely on heavy, expensive triple-pane glass stacks. They require reinforced frames and complex shipping logistics.
                </p>
              </div>
              <div className="aspect-square bg-[#e0e3e6] relative overflow-hidden group flex items-center justify-center">
                <img alt="Triple-Pane Cross Section" className="w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105" data-alt="technical diagram of a heavy triple-pane window cross section with thick glass and metal spacers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6qynwvc1qIHoUAU0xu5Q-W6Y_XgkxP0FqLo7WM_Vi7JhbQb3LgsyyJZTf0Pnj_wZCaK1V3HgB_o_VCUIV4q_WNkOA3_I7VtfhFNqC3DYRdhjZs17iO4MMM1dyommAgi2aRe5ZGn8y2Hsar-jTGfvQpXio37_DAWTj2GKUpxI1AI6sXsTSYn8cWQtiMqJTsnGIcXK6zH2NI8JlXW-wT4YvHVkEvfU3wTEaJUegOjPnlCtJ-yZIG_tlrXSg-dYstw89iMHhguyoCu_n" />
                <div className="absolute bottom-8 left-8">
                  <div className="bg-white px-4 py-2 shadow-sm inline-block">
                    <span className="font-mono text-xs font-bold text-[#ba1a1a]">CRITICAL WEIGHT: 140kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: SunThru */}
            <div className="space-y-10">
              <div>
                <span className="font-mono text-xs text-[#E8A030] uppercase tracking-widest">The SunThru Advantage</span>
                <h2 className="text-4xl font-bold mt-4 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                  Molecular Transparency
                </h2>
                <p className="mt-6 text-[#44474d] text-lg leading-relaxed max-w-lg">
                  Our silica aerogel inserts slide into standard double-pane frames. Same performance, 40% less weight, fits standard architectural specs.
                </p>
              </div>
              <div className="aspect-square bg-[#f2f4f7] border border-[#b7e7f9] relative overflow-hidden group flex items-center justify-center">
                <img alt="SunThru Aerogel Insert" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" data-alt="macro close-up of a blue-tinted transparent silica aerogel sample being inserted between two glass panes, crystalline structure" src="/aerogel_insert.jpg" />
                <div className="absolute bottom-8 left-8">
                  <div className="bg-[#E8A030] px-4 py-2 shadow-sm inline-block">
                    <span className="font-mono text-xs font-bold text-[#0d1f3c]">OPTIMIZED WEIGHT: 82kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7X Faster Stat ───────────────────────────────── */}
      <section className="bg-[#0d1f3c] py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8A030]/10 skew-x-12 transform translate-x-20" />
        <div className="container-wide text-center relative z-10">
          <div className="inline-block border border-white/20 px-6 py-2 mb-8">
            <span className="font-mono text-[#7787aa] text-xs tracking-widest uppercase">Manufacturing Benchmark</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-4">
              <span className="text-9xl md:text-[12rem] font-bold text-white tracking-tighter" style={{ fontFamily: "var(--font-headline)" }}>7X</span>
              <span className="text-4xl font-bold text-[#E8A030]" style={{ fontFamily: "var(--font-headline)" }}>FASTER</span>
            </div>
            <p className="text-2xl font-light text-[#7787aa] max-w-2xl mt-8" style={{ fontFamily: "var(--font-headline)" }}>
              To manufacture. Same thermal performance as the industry leading triple-pane windows.
            </p>
          </div>
        </div>
      </section>

      {/* ── Video Section ────────────────────────────────── */}
      <section className="section-padding bg-[#f7f9fc]">
        <div className="container-wide">
          <div className="mb-12">
            <span className="font-mono text-xs text-[#75777e] uppercase tracking-widest">Company Overview</span>
            <h2 className="text-4xl font-bold mt-4 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
              Technical Performance
            </h2>
          </div>
          <div className="max-w-4xl mx-auto rounded-none overflow-hidden shadow-2xl border border-[#c5c6ce]/20">
            <AutoplayVideo />
          </div>
        </div>
      </section>

      {/* ── Spec Cards ───────────────────────────────────── */}
      <section className="section-padding bg-[#f7f9fc]">
        <div className="container-wide">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <span className="font-mono text-xs text-[#75777e] uppercase tracking-widest">Specifications</span>
              <h2 className="text-4xl font-bold mt-4 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                Technical Performance
              </h2>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar">
            {SPEC_CARDS.map((card) => (
              <div
                key={card.label}
                className="min-w-[340px] bg-white p-10 hover:bg-[#f2f4f7] transition-colors"
                style={{ borderBottom: `4px solid ${card.color}` }}
              >
                <h3 className="text-lg font-bold text-[#000719] mb-10" style={{ fontFamily: "var(--font-headline)" }}>
                  {card.label}
                </h3>
                <div className="font-mono text-5xl font-bold text-[#000719] mb-2">{card.value}</div>
                <div className="text-sm text-[#44474d]">{card.unit}</div>
                <div className="mt-8 pt-8 border-t border-[#c5c6ce]/30 flex justify-between">
                  <span className="text-xs uppercase font-mono text-[#75777e]">Vs. Standard</span>
                  <span className="text-xs font-mono font-bold" style={{ color: card.color }}>{card.compare}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Closer ───────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="material-symbols-outlined text-4xl text-[#E8A030]" style={{ fontVariationSettings: "'FILL' 1" }}>
              eco
            </span>
            <h2 className="text-5xl font-bold text-[#000719] leading-tight" style={{ fontFamily: "var(--font-headline)" }}>
              Decarbonizing the built environment, one pane at a time.
            </h2>
            <p className="text-xl text-[#44474d] leading-relaxed font-light">
              Our technology is engineered to meet the strictest ENERGY STAR requirements of 2024 and beyond. By rethinking the window core, we're making sustainable architecture accessible for every commercial and residential project.
            </p>
            <div className="pt-8 flex justify-center gap-16 opacity-50">
              <div className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="font-mono text-sm uppercase tracking-tighter">Energy Star V7</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  apartment
                </span>
                <span className="font-mono text-sm uppercase tracking-tighter">LEED Platinum Ready</span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}