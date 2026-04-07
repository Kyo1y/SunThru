import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product",
    description: "Aerogel IGU Insert — the world's most efficient transparent thermal barrier. Slides into standard double-pane frames with zero modification.",
};

const SPECS = [
    { property: "Center-of-Glass U-Value", metric: "0.45 W/m²K", imperial: "0.08 BTU/h·ft²·°F", ref: "ASTM E1222" },
    { property: "Visible Light Transmittance", metric: "72% (Diffuse)", imperial: "72% (Diffuse)", ref: "ISO 9050" },
    { property: "Specific Weight", metric: "1.8 kg/m²", imperial: "0.37 lb/ft²", ref: "Lab Std-24" },
    { property: "IGU Compatibility", metric: "12mm – 24mm Gap", imperial: "1/2\" – 1\" Cavity", ref: "NFRC 100" },
];

const APPLICATIONS = [
    { num: "01", title: "Commercial Glazing", desc: "Optimizing heat load for high-rise glass structures." },
    { num: "02", title: "Residential Performance", desc: "Superior comfort and energy savings for homes." },
    { num: "03", title: "Skylights", desc: "Diffuse natural light with maximum thermal resistance." },
    { num: "04", title: "Educational Daylighting", desc: "Soft, comfortable light for schools and institutions." },
];

export default function ProductPage() {
    return (
        <>
            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="relative min-h-[640px] flex flex-col items-center justify-center overflow-hidden px-8 pt-24">
                <div className="absolute inset-0 micro-grid" />
                <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="font-mono text-sm tracking-widest text-[#7787aa] uppercase">Product / Series 01</span>
                            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                                Aerogel IGU Insert
                            </h1>
                            <p className="text-xl text-[#44474d] max-w-lg font-light leading-relaxed">
                                The world's most efficient thermal barrier. A monolithic silica structure that captures light while rejecting heat.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 font-mono text-xs text-[#44474d]">
                            <div className="flex items-center gap-2 px-3 py-1 bg-[#e6e8eb]">
                                <span className="w-2 h-2 rounded-full bg-[#E8A030]" />
                                MIN: 5&quot; × 5&quot;
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-[#e6e8eb]">
                                <span className="w-2 h-2 rounded-full bg-[#356574]" />
                                MAX: 5&prime; × 10&prime;
                            </div>
                        </div>
                    </div>
                    {/* Product visual placeholder */}
                    <div className="relative aspect-square flex items-center justify-center">
                        <div className="absolute w-4/5 h-4/5 border border-[#c5c6ce]/30 transform -rotate-6 -translate-x-6 -translate-y-6 glass-panel shadow-sm" />
                        <div className="absolute w-4/5 h-4/5 border-2 border-[#E8A030]/20 z-10 glass-panel overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#A8D8EA]/10 animate-pulse" />
                            <div className="relative z-20 text-center font-mono text-[10px] tracking-widest text-[#E8A030]">SILICA NANOPOROUS CORE</div>
                        </div>
                        <div className="absolute w-4/5 h-4/5 border border-[#c5c6ce]/30 transform rotate-6 translate-x-6 translate-y-6 glass-panel shadow-lg" />
                    </div>
                </div>
            </section>

            {/* ── Engineering Specifications ────────────────────── */}
            <section className="py-24 bg-[#f2f4f7] px-8">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                                Engineering Specifications
                            </h2>
                            <p className="text-[#44474d] max-w-md mt-4">Precision-validated performance metrics for architectural integration and energy modeling.</p>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full font-mono text-sm">
                            <thead>
                                <tr className="text-left text-[#75777e] border-b border-[#e0e3e6]">
                                    {["Property", "Standard Metric", "US Imperial", "Reference Code"].map(h => (
                                        <th key={h} className="pb-4 font-medium uppercase tracking-wider">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e0e3e6]">
                                {SPECS.map((row) => (
                                    <tr key={row.property} className="hover:bg-[#e6e8eb] transition-colors">
                                        <td className="py-6 font-bold text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>{row.property}</td>
                                        <td className="py-6 text-[#44474d]">{row.metric}</td>
                                        <td className="py-6 font-bold text-[#E8A030]">{row.imperial}</td>
                                        <td className="py-6 text-[#75777e]">{row.ref}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── Architectural Applications ────────────────────── */}
            <section className="py-24 px-8 max-w-screen-xl mx-auto">
                <h2 className="text-4xl font-bold tracking-tight mb-16 text-center text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                    Architectural Applications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                    {APPLICATIONS.map((app, i) => (
                        <div
                            key={app.num}
                            className={`relative group overflow-hidden bg-[#e0e3e6] flex items-end p-8 ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                        >
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <span className="font-mono text-xs text-[#000719] uppercase tracking-widest">[ Photo Placeholder ]</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000719]/80 via-transparent to-transparent" />
                            <div className="relative z-10 text-white">
                                <span className="font-mono text-xs text-[#E8A030] tracking-widest">{app.num}</span>
                                <h3 className={`font-bold mt-1 ${i === 0 ? "text-2xl" : "text-lg"}`} style={{ fontFamily: "var(--font-headline)" }}>{app.title}</h3>
                                {i === 0 && <p className="text-sm opacity-80 mt-2 font-light">{app.desc}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Seamless Integration ──────────────────────────── */}
            <section className="py-24 bg-white px-8">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-video glass-panel border border-[#c5c6ce]/30 relative flex items-center justify-center p-12 overflow-hidden">
                            <div className="absolute inset-0 micro-grid" />
                            <div className="relative w-full h-full border-l-4 border-[#000719]/20 flex flex-col justify-center gap-12 pl-12">
                                {[
                                    { label: "FRAME", line: "Standard Frame Profile", lineColor: "#c5c6ce", text: "" },
                                    { label: "AEROGEL INSERT", line: "Direct Replacement", lineColor: "#E8A030", text: "" },
                                    { label: "GLASS", line: "Existing Secondary Pane", lineColor: "#c5c6ce", text: "" },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-8">
                                        <div className="w-20 h-14 bg-[#e6e8eb] border border-[#c5c6ce] flex items-center justify-center font-mono text-xs text-center">{item.label}</div>
                                        <div className="flex-1 h-px relative" style={{ background: item.lineColor }}>
                                            <div className="absolute -top-5 left-0 font-mono text-[10px] text-[#75777e]">{item.line}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-[#E8A030] p-5 shadow-xl">
                            <div className="font-mono text-xs font-bold text-[#000719]">ZERO MODIFICATION</div>
                            <div className="text-sm text-[#000719] mt-1">Fits 99% of existing curtain wall systems.</div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="text-4xl font-bold tracking-tight text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>Seamless Integration</h2>
                        <p className="text-lg text-[#44474d] font-light">Designed for the real world. Our IGU insert uses standard sizing and compression seals, allowing for rapid deployment in new construction or retrofits without specialized labor.</p>
                        <ul className="space-y-6 font-mono text-sm text-[#44474d]">
                            {[
                                "Direct drop-in for standard 1\" Insulated Glass Units.",
                                "Compatible with structural silicone or gasket pressure plates.",
                                "Maintains U-value even under high-wind pressure loads.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-[#E8A030] font-bold shrink-0">0{i + 1}/</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────── */}
            <section className="py-32 bg-[#000719] text-white text-center px-8 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E8A030]/5 blur-[120px] rounded-full" />
                <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                    <h2 className="text-5xl font-bold tracking-tighter" style={{ fontFamily: "var(--font-headline)" }}>
                        Ready for the Next Generation of Glazing?
                    </h2>
                    <p className="text-[#7787aa] text-lg">Contact our engineering team for technical drawings and custom thermal calculations for your project.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a href="/partners" className="bg-[#E8A030] text-[#000719] px-8 py-4 font-bold hover:bg-[#ffb955] transition-colors" style={{ fontFamily: "var(--font-headline)" }}>
                            Request Sample Kit
                        </a>
                        <a href="/partners" className="border border-white/20 text-white px-8 py-4 font-bold hover:bg-white/10 transition-colors" style={{ fontFamily: "var(--font-headline)" }}>
                            Talk to an Engineer
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
