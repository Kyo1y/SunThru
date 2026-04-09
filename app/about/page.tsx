import type { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "About",
    description: "From Union College aerogel lab to climate tech. A decade of precision engineering to make aerogel insulation commercially viable.",
};

const TIMELINE = [
    { year: "2013", title: "The Founding", desc: "Initial IP development at Union College Aerogel Lab. Focus on patented supercritical drying processes.", color: "#356574", size: "sm" },
    { year: "2020", title: "NSF & Expansion", desc: "New leadership team joins. Awarded prestigious National Science Foundation (NSF) Grant for commercialization.", color: "#356574", size: "sm" },
    { year: "2021", title: "FuzeHub Win", desc: "Selected as winner of the FuzeHub Commercialization Competition, accelerating manufacturing readiness.", color: "#356574", size: "sm" },
    { year: "2022", title: "SOMA-400 Built", desc: "Construction of the SOMA-400 prototype unit, the foundation for our current scaling technology.", color: "#356574", size: "sm" },
    { year: "2024", title: "20\" × 14\" Milestone", desc: "Successful production of large-format monolithic aerogel sheets, setting a new industry standard.", color: "#E8A030", size: "lg" },
    { year: "Vision 2030", title: "Global Decarbonization", desc: "Widespread integration of SunThru materials into architectural glass systems worldwide.", color: "#000719", size: "sm" },
];

const TEAM_MEMBERS = [
    { name: "John Costa", role: "Founder / CEO", degree: "PhD, Thermal Dynamics", image: "/team/ann.jpg", initials: "AA" },
    { name: "Jeremy Manus", role: "COO", degree: "MBA, Business Administration", image: "/team/costa.jpg", initials: "JC" },
    { name: "Maxwell Rhodes", role: "Mechanical Engineer", degree: "MS, Finance", image: "/team/kevin.jpg", initials: "KB" },
    { name: "Adam Forti", role: "Founder / Advisor", degree: "PhD, Chemical Engineering", image: "/team/jeff.jpg", initials: "ZG" },
    { name: "Ann Anderson", role: "Founder / Advisor", degree: "BS, Mechanical Engineering", image: "/team/tyler.jpg", initials: "TF" },
    { name: "Mary Caroll", role: "Founder / Advisor", degree: "PhD, Materials Science", image: "/team/mark.jpg", initials: "ML" },
];

export default function AboutPage() {
    return (
        <>
            {/* ── Hero ─────────────────────────────────────────── */}
            <header className="pt-40 pb-24 px-8 max-w-screen-2xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#b7e7f9]/10 to-transparent pointer-events-none" />
                <div className="max-w-4xl relative z-10">
                    <div className="font-mono text-xs uppercase tracking-widest text-[#0d1f3c] mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-[#0d1f3c]" />
                        Founding Philosophy
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#000719] mb-8 leading-[0.9]" style={{ fontFamily: "var(--font-headline)" }}>
                        From Union College<br />to Climate Tech.
                    </h1>
                    <p className="text-xl md:text-2xl text-[#44474d] max-w-2xl leading-relaxed">
                        SunThru emerged from the Aerogel Lab at Union College — a pursuit of the world&apos;s most efficient insulator, refined through a decade of academic precision and engineering discipline.
                    </p>
                </div>
            </header>

            {/* ── Origin Story ─────────────────────────────────── */}
            <section className="py-24 px-8 bg-[#f2f4f7]">
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="font-mono text-sm text-[#356574] font-medium">[ LOG_01: ORIGIN_STORY ]</div>
                        <h2 className="text-4xl font-bold tracking-tight text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                            The Lab was our Crucible.
                        </h2>
                        <div className="space-y-6 text-[#44474d] leading-relaxed text-lg">
                            <p>What began as fundamental research between professors and a dedicated cohort of alumni blossomed into a breakthrough in material science. Our journey wasn&apos;t born in a Silicon Valley garage, but in the sterile, high-precision environment of an academic laboratory.</p>
                            <p>We saw the potential of silica aerogels — not just as a scientific curiosity — but as the missing link in high-performance building insulation and energy efficiency. We leveraged decades of combined expertise in thermodynamics and chemical engineering to make the &ldquo;impossible&rdquo; material commercially viable.</p>
                        </div>
                    </div>
                    {/* Lab photo placeholder */}
                    <div className="aspect-[4/5] bg-[#e0e3e6] overflow-hidden border border-[#c5c6ce]/10 flex items-center justify-center">
                        <img className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" data-alt="Black and white high-contrast photo of researchers in a pristine chemistry lab at Union College, focusing on a transparent aerogel sample under a microscope." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDiA1m9lXpca7gVnWsCtqin9ZGddS9JtH6Ck-4eGVnAMI5LwDW4a0_IPj0uSf5bdtnw8dD2OpNDX9cOaSg5kbCmKcChjiZoynMOV1pqMpTqBYN-cdk5CEFtgdhxESi0TcY4w8ByBgPJGZ_Ib4L1qa_N69lvV7nr9vWWMvotrfHoGkfxgqtGMalcI36Da7nhYyfhXsqSclNotMMuGZ-Pl_zUMsKFKChQPtzKxPGG9R7zT2kMDddMKdbGVHEhTNSxP2wgkI98uvJP3_N" />
                    </div>
                </div>
            </section>

            {/* ── Timeline ─────────────────────────────────────── */}
            <section className="py-32 px-8 max-w-screen-2xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-2 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                        Development Roadmap
                    </h2>
                    <p className="font-mono text-sm text-[#0d1f3c]">A decade of engineering milestones.</p>
                </div>
                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#c5c6ce]/30 md:-translate-x-1/2" />
                    <div className="flex flex-col space-between space-y-24">
                        {TIMELINE.map((item, i) => {
                            const isRight = i % 2 === 1;
                            return (
                                <div
                                    key={item.year}
                                    className={cn(
                                        "relative flex flex-row-reverse pl-[10px] md:flex-row items-center gap-8",
                                        isRight ? "justify-start md:pl-[5rem] md:flex-row-reverse" : "md:pr-[4.7rem]"
                                    )}
                                >
                                    {!isRight ? (
                                        <div className="w-full md:w-1/2 md:text-right">
                                            <div className="font-mono text-xl font-bold mb-2" style={{ color: item.color }}>{item.year}</div>
                                            <h3 className="text-xl font-bold mb-2 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>{item.title}</h3>
                                            <p className="text-[#44474d] max-w-md md:ml-auto">{item.desc}</p>
                                        </div>
                                    ) : (

                                        <div className="w-full md:w-1/2">
                                            <div className="font-mono text-xl font-bold mb-2" style={{ color: item.color }}>{item.year}</div>
                                            <h3 className="text-xl font-bold mb-2 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>{item.title}</h3>
                                            <p className="text-[#44474d] max-w-md">{item.desc}</p>
                                        </div>

                                    )}
                                    <div
                                        className="md:-translate-x-[1px] border-4 border-[#f7f9fc] shadow-sm"
                                        style={{
                                            width: item.size === "lg" ? "1rem" : "0.75rem",
                                            height: item.size === "lg" ? "1rem" : "0.75rem",
                                            background: item.color,
                                            borderRadius: "50%",
                                            boxShadow: item.size === "lg" ? `0 0 0 4px ${item.color}33` : undefined,
                                        }}
                                    />

                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Team ─────────────────────────────────────────── */}
            <section className="py-24 px-8 bg-[#eceef1]">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl font-bold tracking-tight text-[#000719] mb-6" style={{ fontFamily: "var(--font-headline)" }}>
                                Scientific Minds.
                            </h2>
                            <p className="text-[#44474d] text-lg">
                                Our team represents a fusion of academic rigor and industrial grit. We are researchers, engineers, and problem solvers dedicated to the chemistry of the future.
                            </p>
                        </div>
                        <div className="font-mono text-sm bg-[#e0e3e6] px-4 py-2 border border-[#c5c6ce]/20 whitespace-nowrap">
                            TEAM_SIZE: <span className="text-[#356574] font-bold">06_ACTIVE</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c5c6ce]/20 overflow-hidden border border-[#c5c6ce]/20">
                        {TEAM_MEMBERS.map((member) => (
                            <div key={member.name} className="bg-[#f7f9fc] group">
                                <div className="aspect-square bg-[#e6e8eb] overflow-hidden relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"

                                    />
                                    <div className="absolute bottom-4 left-4 font-mono text-[10px] bg-[#000719] text-white px-2 py-1 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                                        {member.role.split("/")[0].trim()}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-xl font-bold mb-1 text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>{member.name}</h4>
                                    {/* <div className="font-mono text-xs text-[#356574] mb-4">{member.degree}</div> */}
                                    <p className="text-sm text-[#44474d] leading-relaxed">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Scrolling marquee bar ─────────────────────────── */}
            <div className="bg-[#000719] text-white py-4 overflow-hidden whitespace-nowrap border-y border-[#c5c6ce]/10">
                <div className="flex gap-12 font-mono text-xs animate-marquee">
                    {[
                        "[ ACADEMIC_PARTNERS: UNION_COLLEGE, NSF ]",
                        "[ PATENTS_FILED: 004-922-A ]",
                        "[ CORE_COMPETENCY: AEROGEL_SYNTHESIS ]",
                        "[ MISSION_STATUS: SCALING ]",
                        "[ ACADEMIC_PARTNERS: UNION_COLLEGE, NSF ]",
                        "[ PATENTS_FILED: 004-922-A ]",
                        "[ CORE_COMPETENCY: AEROGEL_SYNTHESIS ]",
                        "[ MISSION_STATUS: SCALING ]",
                    ].map((item, i) => (
                        <span key={i}>{item}</span>
                    ))}
                </div>
            </div>

            {/* ── CTA ──────────────────────────────────────────── */}
            <section className="py-24 px-8 max-w-screen-2xl mx-auto text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold tracking-tight text-[#000719]" style={{ fontFamily: "var(--font-headline)" }}>
                        Join our research network.
                    </h2>
                    <p className="text-xl text-[#44474d]">We are always looking for visionary partners and brilliant minds to help us push the boundaries of what aerogels can do for the planet.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:Johncosta@sunthru.co" className="bg-[#0d1f3c] text-white px-8 py-4 font-medium hover:opacity-90 transition-all">Apply to the Team</a>
                        <a href="/partners" className="bg-white border border-[#c5c6ce]/30 text-[#000719] px-8 py-4 font-medium hover:bg-[#f2f4f7] transition-all">Research Collaboration</a>
                    </div>
                </div>
            </section>
        </>
    );
}
