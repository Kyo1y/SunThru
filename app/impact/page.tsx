import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impact",
    description: "Buildings account for 40% of US energy consumption. SunThru's aerogel technology addresses the thermal leakage crisis in the building envelope.",
};

export default function ImpactPage() {
    return (
        <>
            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-24 relative">
                <div className="absolute inset-0 micro-grid" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
                    <div className="lg:col-span-8">
                        <span className="inline-block py-1 px-3 bg-[#e6e8eb] text-[#44474d] font-mono text-[10px] tracking-widest uppercase mb-6">
                            IMPACT ANALYSIS 001_THERMAL_LEAKAGE
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#000719] leading-[0.9] mb-8" style={{ fontFamily: "var(--font-headline)" }}>
                            The Physics of{" "}
                            <span className="text-[#7787aa]">Energy Loss.</span>
                        </h1>
                        <p className="text-xl text-[#44474d] max-w-2xl font-light leading-relaxed">
                            Buildings represent the single largest opportunity for climate mitigation. We are addressing the &ldquo;hole in the wall&rdquo;—the thermal bridges that undermine modern architecture.
                        </p>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="glass-panel p-8 border border-[#c5c6ce]/20 shadow-sm">
                            <div className="font-mono text-[#E8A030] text-4xl font-bold mb-2">40%</div>
                            <div className="text-sm font-bold text-[#000719] tracking-tight uppercase" style={{ fontFamily: "var(--font-headline)" }}>U.S. Energy Consumption</div>
                            <div className="mt-4 text-xs text-[#44474d] leading-relaxed">
                                Commercial and residential buildings account for nearly half of total U.S. energy use.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Climate Data Vis ──────────────────────────────── */}
            <section className="max-w-screen-2xl mx-auto px-8 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-[#f2f4f7] p-12 relative overflow-hidden min-h-[480px] flex flex-col justify-end">
                        <div className="absolute top-0 right-0 p-6">
                            <span className="font-mono text-[10px] text-[#75777e] uppercase tracking-widest">Heat Flux Mapping / National Average</span>
                        </div>
                        {/* Bar chart viz */}
                        <div className="absolute inset-x-0 top-16 bottom-40 px-12">
                            <div className="w-full h-full border-b border-l border-[#c5c6ce]/40 flex items-end space-x-3">
                                {[40, 55, 92, 60, 45].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-12 transition-all"
                                        style={{ height: `${h}%`, background: i === 2 ? "#E8A030" : "#0d1f3c", opacity: i === 2 ? 0.9 : 0.7 }}
                                    >
                                        {i === 2 && <div className="font-mono text-[10px] text-[#E8A030] -mt-6 whitespace-nowrap">CRITICAL THRESHOLD</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-[#000719] mb-4" style={{ fontFamily: "var(--font-headline)" }}>Window Heat Loss</h3>
                            <div className="flex flex-wrap gap-12">
                                <div>
                                    <div className="font-mono text-5xl font-medium text-[#0d1f3c]">25–30<span className="text-2xl">%</span></div>
                                    <div className="text-xs font-bold text-[#44474d] tracking-widest uppercase mt-2">HVAC Energy Loss via Windows</div>
                                </div>
                                <div className="max-w-xs">
                                    <p className="text-sm text-[#44474d] leading-relaxed">Traditional dual-pane glazing creates a massive thermal deficit in the building envelope, forcing systems to work harder during peak loads.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        {[
                            { icon: "◈", title: "Thermal Conductance", value: "0.015", unit: "W/m·K", desc: "SunThru Silica Aerogel monoliths provide the world's lowest thermal conductivity for transparent materials." },
                            { icon: "⬡", title: "Carbon Abatement", value: "12.4", unit: "GT", desc: "Projected global CO₂ reduction through full-scale building envelope optimization." },
                        ].map((card) => (
                            <div key={card.title} className="glass-panel p-10 border border-[#c5c6ce]/10">
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className="text-[#E8A030] text-xl">{card.icon}</span>
                                    <h4 className="font-bold text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>{card.title}</h4>
                                </div>
                                <div className="font-mono text-3xl font-bold text-[#000719] mb-2">
                                    {card.value} <span className="text-lg font-normal text-[#44474d]">{card.unit}</span>
                                </div>
                                <p className="text-xs text-[#44474d] leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Climate Zones ────────────────────────────────── */}
            <section className="bg-[#000719] text-white py-32">
                <div className="max-w-screen-2xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="font-mono text-[10px] text-[#b6c7ec] uppercase tracking-widest mb-8 block">CLIMATE ZONE ANALYSIS [NORTH_CENTRAL]</span>
                            <h2 className="text-5xl font-bold tracking-tight mb-8" style={{ fontFamily: "var(--font-headline)" }}>
                                Engineering for the{" "}
                                <span className="text-[#E8A030]">Cold Climate Transition.</span>
                            </h2>
                            <p className="text-[#7787aa] mb-12 text-lg leading-relaxed">
                                ENERGY STAR Version 7.0 has fundamentally changed the landscape for window manufacturers. Standard dual-pane glass no longer meets the stringent U-Factor requirements for Northern zones.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { value: "0.22", label: "Max U-Factor (v7.0)" },
                                    { value: "94%", label: "Compliance Gap" },
                                ].map((stat) => (
                                    <div key={stat.label} className="border-l border-[#7787aa]/30 pl-6">
                                        <div className="font-mono text-2xl mb-1">{stat.value}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#b6c7ec]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Map placeholder */}
                        <div className="relative aspect-square bg-[#0d1f3c]/50 flex items-center justify-center">
                            <span className="font-mono text-xs text-[#7787aa] uppercase tracking-widest text-center">
                                [ US Climate Zone Map<br />— Photo Placeholder — ]
                            </span>
                            <div className="absolute top-1/4 left-1/4 glass-panel p-3 border border-white/10">
                                <div className="font-mono text-[10px] text-white">ZONE 5–7 HIGH ADOPTION</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ENERGY STAR Section ───────────────────────────── */}
            <section className="max-w-screen-2xl mx-auto px-8 py-32">
                <div className="bg-[#eceef1] p-16 relative overflow-hidden">
                    <div className="max-w-3xl relative z-10">
                        <div className="flex items-center space-x-3 mb-10">
                            <div className="w-12 h-0.5 bg-[#E8A030]" />
                            <span className="font-mono text-xs text-[#44474d] tracking-[0.2em]">REGULATORY MANDATE 2022–2024</span>
                        </div>
                        <h3 className="text-4xl font-bold text-[#000719] mb-8 leading-tight" style={{ fontFamily: "var(--font-headline)" }}>
                            Navigating the ENERGY STAR V7.0 Specification.
                        </h3>
                        <div className="space-y-6 text-[#44474d] leading-relaxed font-light">
                            <p>Released in 2022 and taking full effect in 2023, the EPA&apos;s ENERGY STAR Version 7.0 for Residential Windows represents the most significant tightening of performance criteria in a decade. For the Northern Zone, the U-Factor requirement dropped from 0.27 to 0.22.</p>
                            <p>SunThru&apos;s silica aerogel inserts are designed specifically to bridge this performance gap. By integrating our monoliths into traditional glazing units, manufacturers can achieve V7.0 compliance without the weight penalty of triple-pane glass.</p>
                        </div>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { label: "SPEC. PARAMETER", title: "U-Factor Reduction", value: "-18.5%" },
                                { label: "COMPLIANCE PATH", title: "Silica Monolith", value: "Achieved" },
                                { label: "ENERGY STAR", title: "Version 7.0", value: "Certified" },
                            ].map((item) => (
                                <div key={item.label} className="bg-white p-6 border border-[#c5c6ce]/30">
                                    <div className="font-mono text-xs text-[#75777e] mb-4">{item.label}</div>
                                    <div className="font-bold text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>{item.title}</div>
                                    <div className="font-mono text-xl text-[#E8A030] mt-2">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ────────────────────────────────────── */}
            <section className="max-w-screen-2xl mx-auto px-8 mb-32 text-center">
                <div className="py-24 border-y border-[#c5c6ce]/20">
                    <h2 className="text-4xl font-bold text-[#000719] mb-6" style={{ fontFamily: "var(--font-headline)" }}>Scale the Impact.</h2>
                    <p className="text-[#44474d] max-w-xl mx-auto mb-10">We are looking for strategic partners in the glazing and architectural industries to deploy aerogel-enhanced fenestration at scale.</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <a href="/partners" className="px-10 py-4 bg-[#000719] text-white font-bold text-sm tracking-widest hover:bg-[#0d1f3c] transition-all uppercase" style={{ fontFamily: "var(--font-headline)" }}>
                            Request Technical Spec
                        </a>
                        <a href="/partners" className="px-10 py-4 bg-transparent border border-[#000719] text-[#000719] font-bold text-sm tracking-widest hover:bg-[#f2f4f7] transition-all uppercase" style={{ fontFamily: "var(--font-headline)" }}>
                            Partner With Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
