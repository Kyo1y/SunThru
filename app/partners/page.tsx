"use client";

import Image from "next/image";
import { useState } from "react";

const PARTNERS = [
    { name: "NYSERDA", logo: "/partners/NYSERDA_wordmark.svg", href: "https://www.nyserda.ny.gov/" },
    { name: "FuzeHub", logo: "/partners/cropped-cropped-logotype.png", href: "https://fuzehub.com/" },
    { name: "Koffman", logo: "/partners/koffman-logo.webp", href: "https://koffmancenter.com/" },
    { name: "America's Seed Fund", logo: "/partners/americas_seed_fund.png", href: "https://seedfund.nsf.gov/" },
    { name: "Union College Aerogel Lab", logo: "/partners/union-college-seeklogo.svg", href: "https://muse.union.edu/aerogels/aerogel-lab-at-union/" },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function PartnersPage() {
    const [form, setForm] = useState({ name: "", org: "", persona: "I am a window manufacturer", message: "" });
    const [status, setStatus] = useState<FormState>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Failed to send");
            }
            setStatus("success");
            setForm({ name: "", org: "", persona: "I am a window manufacturer", message: "" });
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Unknown error");
        }
    }

    return (
        <>
            {/* ── Hero ─────────────────────────────────────────── */}
            <header className="max-w-screen-2xl mx-auto px-8 pt-36 pb-20">
                <div className="inline-block px-3 py-1 mb-6 bg-[#e0e3e6]">
                    <span className="font-mono text-xs tracking-widest text-[#000719] uppercase">Collaboration Framework v.2.4</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-[#000719] mb-8 max-w-4xl" style={{ fontFamily: "var(--font-headline)" }}>
                    Precision Scaled.<br />Global Impact.
                </h1>
                <p className="text-[#44474d] text-xl md:text-2xl max-w-2xl leading-relaxed">
                    Join our mission to revolutionize the window industry with high-performance aerogel inserts. We bridge the gap between material science and commercial scale.
                </p>
            </header>

            {/* ── Two-Column Path Selection ─────────────────────── */}
            <section className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                {/* Manufacturers */}
                <div className="flex flex-col space-y-8">
                    <div className="aspect-[4/3] bg-[#e0e3e6] overflow-hidden flex items-center justify-center">
                        <span className="font-mono text-xs text-[#75777e] uppercase tracking-widest opacity-40">
                            [ Manufacturing Facility Photo Placeholder ]
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-[#E8A030] text-xl">⬡</span>
                            <h2 className="text-3xl font-semibold text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>Manufacturers &amp; OEMs</h2>
                        </div>
                        <p className="text-[#44474d]">Integration of SunThru Silica Aerogel inserts into existing Insulated Glass Unit (IGU) assembly lines. We offer licensing and supply-chain partnership models.</p>
                        <ul className="space-y-3 pt-4">
                            {["Direct Integration Protocols", "Scale-Up Licensing Agreements", "Thermal Performance Validation"].map((item) => (
                                <li key={item} className="flex items-center gap-3 font-mono text-sm border-b border-[#c5c6ce]/20 pb-2">
                                    <span className="text-xs text-[#356574]">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Investors */}
                <div className="flex flex-col space-y-8">
                    <div className="aspect-[4/3] bg-[#e0e3e6] overflow-hidden flex items-center justify-center">
                        <span className="font-mono text-xs text-[#75777e] uppercase tracking-widest opacity-40">
                            [ Aerogel Sample Photo Placeholder ]
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-[#E8A030] text-xl">◈</span>
                            <h2 className="text-3xl font-semibold text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>Investors &amp; Grant Bodies</h2>
                        </div>
                        <p className="text-[#44474d]">Current TRL status: 6. Seeking Series A funding for the first commercial-scale pilot facility. Backed by federal and state engineering grants.</p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[{ label: "Status", value: "TRL 6" }, { label: "Funding Phase", value: "Series A" }].map((item) => (
                                <div key={item.label} className="bg-[#eceef1] p-6">
                                    <span className="font-mono text-xs text-[#44474d] block mb-2 uppercase">{item.label}</span>
                                    <span className="text-2xl font-bold text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs font-mono text-[#44474d]">Verified by NSF SBIR Phase II and NYSERDA innovation pipelines.</p>
                    </div>
                </div>
            </section>

            {/* ── Inquiry Specification Form ────────────────────── */}
            <section className="max-w-screen-2xl mx-auto px-8 mb-32">
                <div className="bg-[#f2f4f7] p-8 md:p-16 relative overflow-hidden">
                    {/* Grid watermark */}
                    <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                        <svg width="400" height="400" viewBox="0 0 100 100">
                            <defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" /></pattern></defs>
                            <rect width="100" height="100" fill="url(#grid)" />
                        </svg>
                    </div>
                    <div className="max-w-3xl relative z-10">
                        <h3 className="text-4xl font-bold mb-4 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>Inquiry Specification</h3>
                        <p className="text-[#44474d] mb-12">Submit your technical requirements or partnership intent. Our engineering team will review within 48 business hours.</p>

                        {status === "success" ? (
                            <div className="bg-[#b7e7f9]/30 border border-[#356574]/20 p-8 text-center">
                                <p className="font-mono text-sm text-[#356574] font-bold">[ SUBMISSION_RECEIVED ]</p>
                                <p className="text-[#44474d] mt-2">Thank you — we&apos;ll be in touch within 48 business hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-mono text-[10px] tracking-widest uppercase text-[#44474d] block">Full Name / Lead Engineer</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Dr. Elena Rossi"
                                        value={form.name}
                                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                        className="w-full bg-[#e6e8eb] border-b border-[#000719]/20 focus:border-[#000719] px-4 py-3 outline-none text-sm transition-all placeholder:text-[#44474d]/40"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-mono text-[10px] tracking-widest uppercase text-[#44474d] block">Organization / Fund</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Global Glass Systems Inc."
                                        value={form.org}
                                        onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
                                        className="w-full bg-[#e6e8eb] border-b border-[#000719]/20 focus:border-[#000719] px-4 py-3 outline-none text-sm transition-all placeholder:text-[#44474d]/40"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="font-mono text-[10px] tracking-widest uppercase text-[#44474d] block">Partner Persona</label>
                                    <select
                                        value={form.persona}
                                        onChange={e => setForm(f => ({ ...f, persona: e.target.value }))}
                                        className="w-full bg-[#e6e8eb] border-b border-[#000719]/20 focus:border-[#000719] px-4 py-3 outline-none text-sm transition-all appearance-none"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        <option>I am a window manufacturer</option>
                                        <option>I am an investor</option>
                                        <option>I am a researcher</option>
                                        <option>I am a student</option>
                                    </select>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="font-mono text-[10px] tracking-widest uppercase text-[#44474d] block">Technical Intent / Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Briefly describe your scale-up requirements or investment parameters..."
                                        value={form.message}
                                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                        className="w-full bg-[#e6e8eb] border-b border-[#000719]/20 focus:border-[#000719] px-4 py-3 outline-none text-sm transition-all placeholder:text-[#44474d]/40 resize-none"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    />
                                </div>
                                <div className="md:col-span-2 flex justify-between items-center pt-4">
                                    <div className="hidden md:flex items-center gap-2">
                                        <span className={`w-2 h-2 ${status === "loading" ? "bg-[#E8A030] animate-pulse" : "bg-[#E8A030]"}`} />
                                        <span className="font-mono text-[10px] text-[#44474d]">
                                            {status === "loading" ? "Transmitting..." : status === "error" ? `Error: ${errorMsg}` : "System Ready: Awaiting Input"}
                                        </span>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="bg-[#000719] text-white font-bold px-12 py-4 hover:bg-[#0d1f3c] transition-all flex items-center gap-3 disabled:opacity-50"
                                        style={{ fontFamily: "var(--font-headline)" }}
                                    >
                                        {status === "loading" ? "Sending..." : "Initiate Protocol"}
                                        <span className="text-sm">→</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Institutional Backing ─────────────────────────── */}
            <section className="max-w-screen-2xl mx-auto px-8 mb-24">
                <div className="border-t border-[#c5c6ce]/30 pt-16">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[#44474d] mb-10 text-center">Institutional Backing &amp; Scientific Validation</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {PARTNERS.map((partner) => (
                            <a
                                key={partner.name}
                                href={partner.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-3 px-6 py-4 bg-white border border-[#c5c6ce]/20 min-w-[140px] cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <div className="relative h-10 w-28">
                                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                                </div>
                                <span className="text-xs font-mono text-[#44474d] text-center leading-tight">{partner.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
