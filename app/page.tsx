import { ArrowDown } from "lucide-react";
import Link from "next/link";
import AutoplayVideo from "@/components/AutoplayVideo";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,158,207,0.15)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight text-balance">
            Enabling Widespread Commercialization of{" "}
            <span className="text-sky-light">Aerogels</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-200">
            Revolutionizing window technology with high-performance aerogel monoliths
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown className="text-white/40" size={28} />
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 border border-border">
              <AutoplayVideo />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Who We Are
            </h2>
            <div className="w-16 h-1 bg-sky mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted leading-relaxed text-balance">
              SunThru is a manufacturing company focused on facilitating the
              large-scale production of aerogel monoliths for window products.
              With the support of the National Science Foundation, NYSERDA,
              FuzeHub and the Union College Aerogel Lab, SunThru has
              significantly reduced the cost and processing time of the silica
              aerogel monolith manufacturing process. While we have proven this
              technology at the lab scale the window industry demands
              significantly larger aerogel monoliths. SunThru is now working on
              scaling our technology to meet the size requirements for windows.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Interested in learning more?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Discover how SunThru is transforming the window industry with aerogel technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-3 bg-sky text-white font-semibold rounded-lg hover:bg-sky-dark transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
