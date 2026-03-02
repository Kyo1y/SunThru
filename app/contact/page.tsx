import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with the SunThru team.",
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-24 sm:py-32 text-center">
                <div className="container-wide">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in-up">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto animate-fade-in-up animate-delay-100">
                        We&apos;d love to hear from you
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-wide">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-off-white rounded-2xl border border-border p-10 sm:p-14">
                            <div className="w-16 h-16 rounded-2xl bg-sky/10 flex items-center justify-center mx-auto mb-6">
                                <Mail className="text-sky" size={28} />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-muted mb-8 max-w-md mx-auto">
                                Have questions about our aerogel technology or interested in
                                partnering with us? Reach out directly.
                            </p>

                            <a
                                href="mailto:Johncosta@sunthru.co"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-sky text-white font-semibold rounded-xl hover:bg-sky-dark transition-all duration-200 shadow-lg shadow-sky/20 hover:shadow-xl hover:shadow-sky/30 hover:-translate-y-0.5 text-lg"
                            >
                                <Mail size={20} />
                                Johncosta@sunthru.co
                            </a>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted">
                                <MapPin size={14} />
                                <span>Schenectady, New York</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
