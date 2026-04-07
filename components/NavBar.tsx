"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
    { href: "/technology", label: "Technology" },
    { href: "/product", label: "Product" },
    { href: "/impact", label: "Impact" },
    { href: "/about", label: "About" },
    { href: "/news", label: "News" },
];

export default function NavBar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-[#c5c6ce]/20"
                    : "bg-white/60 backdrop-blur-xl"
                }`}
        >
            <div className="container-wide flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.jpg"
                        alt="SunThru"
                        width={100}
                        height={34}
                        className="h-9 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(({ href, label }) => {
                        const isActive = pathname === href || pathname.startsWith(href + "/");
                        return (
                            <Link
                                key={href}
                                href={href}
                                style={{ fontFamily: "var(--font-headline)" }}
                                className={`text-sm font-medium tracking-tight transition-colors duration-200 ${isActive
                                        ? "text-[#E8A030]"
                                        : "text-[#44474d] hover:text-[#E8A030]"
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/partners"
                        className="ml-2 bg-[#0d1f3c] text-white text-sm font-medium px-5 py-2 hover:opacity-90 active:scale-95 transition-all"
                        style={{ fontFamily: "var(--font-headline)" }}
                    >
                        Partner With Us
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-px bg-[#000719] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-px bg-[#000719] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-px bg-[#000719] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="md:hidden fixed inset-0 top-16 z-40 bg-white flex flex-col">
                    <nav className="flex flex-col px-6 pt-6 gap-0">
                        {NAV_LINKS.map(({ href, label }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    style={{ fontFamily: "var(--font-headline)" }}
                                    className={`px-4 py-4 text-lg font-medium border-b border-[#c5c6ce]/30 transition-colors ${isActive
                                            ? "text-[#E8A030]"
                                            : "text-[#191c1e] hover:text-[#E8A030]"
                                        }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                        <Link
                            href="/partners"
                            style={{ fontFamily: "var(--font-headline)" }}
                            className="mt-6 mx-4 bg-[#0d1f3c] text-white text-center py-4 font-medium"
                        >
                            Partner With Us
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
