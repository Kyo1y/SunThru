import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technology",
    description: "SunThru's Rapid Supercritical Extraction (RSCE) process — 7x faster than traditional aerogel manufacturing with the same thermal performance.",
};

const PROCESS_STEPS = [
    { phase: "PHASE_01", title: "Silica Precursor", desc: "Liquid silicate solution engineered for high transparency and nanopore uniformity.", color: "#356574" },
    { phase: "PHASE_02", title: "Gelation", desc: "Chemical cross-linking forms a solid, porous silica network within the solvent.", color: "#356574" },
    { phase: "PHASE_03", title: "Supercritical Drying", desc: "RSCE bypasses capillary stress by removing solvent at supercritical pressure.", color: "#E8A030" },
    { phase: "PHASE_04", title: "Finished Monolith", desc: "The final 99.8% air aerogel pane, ready for high-performance IGU integration.", color: "#356574" },
];

const SOMA_UNITS = [
    { model: "400", tag: "SOMA-400 (R&D)", desc: "Pilot scale for prototyping single-pane monolithic structures.", color: "#E8A030", active: true },
    { model: "1200", tag: "SOMA-1200 (Current)", desc: "Mid-scale manufacturing for commercial pilot projects.", color: "#000719", active: true },
    { model: "5000", tag: "SOMA-5000 (Next-Gen)", desc: "In development: High-throughput gigafactory implementation.", color: "#c5c6ce", active: false },
];

const MATRIX_ROWS = [
    { metric: "U-Value (W/m²·K)", double: "2.8", triple: "1.4", aerogel: "0.6" },
    { metric: "Thickness (mm)", double: "24", triple: "36", aerogel: "20" },
    { metric: "Weight (kg/m²)", double: "20", triple: "30", aerogel: "12" },
    { metric: "Relative Cost", double: "1.0×", triple: "1.8×", aerogel: "1.4×*" },
];

export default function TechnologyPage() {
    return (
        <>
            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto relative">
                <div className="absolute inset-0 micro-grid" />
                <div className="max-w-4xl relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="h-px w-8 bg-[#75777e]/30" />
                        <span className="font-mono text-xs tracking-widest text-[#75777e] uppercase">Technical Blueprint v2.4</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#000719] leading-tight mb-8" style={{ fontFamily: "var(--font-headline)" }}>
                        Our Moat: Rapid Supercritical Extraction (RSCE)
                    </h1>
                    <p className="text-xl text-[#44474d] max-w-2xl leading-relaxed">
                        By decoupling the structural formation from the solvent removal phase, we achieve monolithic stability at 8× the speed of traditional batch processing.
                    </p>
                </div>
            </section>

            {/* ── RSCE Process Visualization ───────────────────── */}
            <section className="py-24 px-8 bg-[#f2f4f7]">
                <div className="max-w-screen-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight mb-16 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                        Process Visualization: RSCE Workflow
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {PROCESS_STEPS.map((step) => (
                            <div key={step.phase} className="glass-panel p-8 border-l-2" style={{ borderColor: step.color }}>
                                <span className="font-mono text-sm block mb-4" style={{ color: step.color }}>{step.phase}</span>
                                <h3 className="font-bold text-xl mb-3 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>{step.title}</h3>
                                <p className="text-sm text-[#44474d] leading-relaxed">{step.desc}</p>
                                <div className="mt-8 h-24 flex items-center justify-center bg-[#e6e8eb]/30">
                                    <span className="font-mono text-xs text-[#75777e] uppercase tracking-widest opacity-40">[ {step.title} ]</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SOMA Spotlight ───────────────────────────────── */}
            <section className="py-24 px-8 max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block bg-[#0d1f3c] text-white px-3 py-1 text-[10px] font-mono tracking-widest uppercase mb-6">
                            Equipment Profile
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                            SOMA Machine Spotlight
                        </h2>
                        <p className="text-lg text-[#44474d] mb-8 leading-relaxed">
                            The Supercritical Oven for Monolithic Aerogels (SOMA) is our proprietary reactor system designed specifically for the RSCE process.
                        </p>
                        <div className="space-y-6">
                            {SOMA_UNITS.map((u) => (
                                <div key={u.model} className="flex gap-6 items-start">
                                    <div className="font-mono text-2xl w-20 shrink-0" style={{ color: u.color }}>{u.model}</div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-[#000719]">{u.tag}</h4>
                                        <p className="text-sm text-[#44474d]" style={{ fontStyle: u.active ? "normal" : "italic" }}>{u.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* SOMA placeholder */}
                    <div className="bg-[#e6e8eb] aspect-[4/5] flex items-center justify-center">
                        <span className="font-mono text-xs text-[#75777e] uppercase tracking-widest opacity-40 text-center px-8">
                            [ SOMA REACTOR DIAGRAM<br />— Photo Placeholder — ]
                        </span>
                    </div>
                </div>
            </section>

            {/* ── Manufacturing Moat Callout ───────────────────── */}
            <section className="px-8 py-12">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="bg-[#0d1f3c] text-white p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h3 className="font-mono text-xs tracking-widest uppercase mb-2 opacity-60">Manufacturing Moat</h3>
                            <p className="text-2xl font-medium tracking-tight" style={{ fontFamily: "var(--font-headline)" }}>
                                Radical compression of the production timeline.
                            </p>
                        </div>
                        <div className="flex gap-8 items-center">
                            <div className="text-center">
                                <div className="text-[#7787aa] font-mono text-sm mb-1">Traditional</div>
                                <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-headline)" }}>8 hrs</div>
                            </div>
                            <div className="h-12 w-px bg-white/20" />
                            <div className="text-center">
                                <div className="text-[#E8A030] font-mono text-sm mb-1">SunThru RSCE</div>
                                <div className="text-4xl font-bold text-[#E8A030]" style={{ fontFamily: "var(--font-headline)" }}>1 hr</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Performance Matrix ───────────────────────────── */}
            <section className="py-24 px-8 bg-white">
                <div className="max-w-screen-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                        Performance Matrix
                    </h2>
                    <p className="text-[#44474d] mb-12">Comparative analysis of thermal efficiency and material logistics.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-[#e0e3e6]">
                                    {["Metric", "Double-Pane", "Triple-Pane", "Aerogel IGU"].map((h, i) => (
                                        <th key={h} className="py-6 font-bold text-sm uppercase tracking-widest" style={{ fontFamily: "var(--font-headline)", color: i === 3 ? "#E8A030" : "#000719" }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="font-mono text-sm divide-y divide-[#e0e3e6]">
                                {MATRIX_ROWS.map((row) => (
                                    <tr key={row.metric}>
                                        <td className="py-6 font-medium text-[#000719]">{row.metric}</td>
                                        <td className="py-6 text-[#44474d]">{row.double}</td>
                                        <td className="py-6 text-[#44474d]">{row.triple}</td>
                                        <td className="py-6 font-bold bg-[#b7e7f9]/20">{row.aerogel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-6 text-[10px] text-[#75777e] font-mono">*Projected at scale (SOMA-5000 utilization)</p>
                </div>
            </section>

            {/* ── IP & Licensing ───────────────────────────────── */}
            <section className="py-24 px-8 max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>IP &amp; Licensing</h2>
                        <p className="text-[#44474d] leading-relaxed">
                            Our technological advantage is secured through a robust patent portfolio and strategic academic partnerships.
                        </p>
                    </div>
                    <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { icon: "⚖", title: "University College Patent", desc: "Exclusive worldwide license for the foundational RSCE chemistry and thermal regulation algorithms developed over 15 years." },
                            { icon: "✓", title: "Proprietary Equipment", desc: "Three active patents filed for the SOMA reactor architecture, covering our unique pressure-relief and thermal cycling systems." },
                        ].map((item) => (
                            <div key={item.title} className="p-8 border border-[#c5c6ce]/30">
                                <div className="text-2xl text-[#0d1f3c] mb-4">{item.icon}</div>
                                <h4 className="font-bold mb-3 text-[#000719]">{item.title}</h4>
                                <p className="text-sm text-[#44474d]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
