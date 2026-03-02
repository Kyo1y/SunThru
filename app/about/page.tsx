import type { Metadata } from "next";
import { Eye, Layers, Scaling } from "lucide-react";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn how SunThru produces highly transparent aerogel monoliths for next-generation window products.",
};

const FEATURES = [
    {
        icon: Eye,
        title: "Transparency",
        description:
            "SunThru responded to industry demand by producing highly transparent aerogel monoliths that maintain excellent optical clarity.",
    },
    {
        icon: Layers,
        title: "Triple-Pane Performance",
        description:
            "Our Aerogel IGU prototype provides triple-pane performance in a unit with the same thickness and weight as a double-pane IGU.",
    },
    {
        icon: Scaling,
        title: "Scaling Manufacturing",
        description:
            "SunThru is focused on scaling our manufacturing capabilities to meet the needs of our customers and the window industry.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-24 sm:py-32 text-center">
                <div className="container-wide">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in-up">
                        Aerogels and Windows
                    </h1>
                    <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto animate-fade-in-up animate-delay-100">
                        Transparency is key to the future of energy-efficient windows
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding bg-white">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">
                            Transparency is Key
                        </h2>
                        <div className="w-16 h-1 bg-sky rounded-full mb-8" />
                        <p className="text-lg text-muted leading-relaxed text-balance">
                            The window industry was loud and clear when they described to us
                            the importance of transparency for window products. SunThru
                            responded by producing highly transparent aerogel monoliths. We
                            also focused on developing various aerogel techniques that allow
                            for aerogels to be easily integrated into Insulated Glazing Units
                            (IGU). This resulted in the development of SunThru&apos;s Aerogel IGU
                            prototype which provides triple pane IGU performance in a unit
                            with the same thickness and weight as a double pane IGU.
                            Currently, SunThru is focused on scaling our manufacturing
                            capabilities to meet the needs of our customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-off-white">
                <div className="container-wide">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {FEATURES.map((f, i) => (
                            <div
                                key={f.title}
                                className={`
                                    bg-white rounded-2xl p-8 border border-border
                                    hover:shadow-lg hover:shadow-sky/5 transition-all duration-300
                                    hover:-translate-y-1
                                    animate-fade-in-up animate-delay-${(i + 1) * 100}
                                `}
                            >
                                <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center mb-5">
                                    <f.icon className="text-sky" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">{f.title}</h3>
                                <p className="text-muted leading-relaxed">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
