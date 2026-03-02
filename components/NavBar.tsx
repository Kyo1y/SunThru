"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
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

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-300  h-24
                ${scrolled
                    ? "bg-white shadow-md border-b border-border"
                    : "bg-white"
                }
            `}
        >
            <div className="container-wide flex h-24 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.jpg"
                        alt="SunThru"
                        width={60}
                        height={60}
                        className="h-auto"
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`
                                    px-4 py-2 rounded-lg text-md font-medium transition-all duration-200
                                    ${isActive
                                        ? "text-sky bg-sky/10"
                                        : "text-text hover:text-sky hover:bg-sky/5"
                                    }
                                `}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg text-text hover:bg-sky/10 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile drawer — full-screen overlay */}
            {mobileOpen && (
                <div className="md:hidden fixed inset-0 top-24 z-40 bg-white">
                    <nav className="container-wide py-4 flex flex-col gap-1">
                        {NAV_LINKS.map(({ href, label }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`
                                        px-4 py-3 rounded-lg text-sm font-medium transition-all
                                        ${isActive
                                            ? "text-sky bg-sky/10"
                                            : "text-text hover:text-sky hover:bg-sky/5"
                                        }
                                    `}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
