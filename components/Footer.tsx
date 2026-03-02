import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy text-white/80">
            <div className="container-wide py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="mb-3 inline-block">
                            <Image
                                src="/logo.jpg"
                                alt="SunThru"
                                width={50}
                                height={50}
                                className="h-auto"
                            />
                        </Link>
                        <p className="text-sm text-white/60 max-w-xs">
                            Enabling widespread commercialization of aerogels for high-performance window products.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                            Navigation
                        </h4>
                        <nav className="flex flex-col gap-2">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About" },
                                { href: "/team", label: "Team" },
                                { href: "/news", label: "News" },
                                { href: "/contact", label: "Contact" },
                            ].map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="text-sm text-white/60 hover:text-sky-light transition-colors w-fit"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                            Get in Touch
                        </h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:Johncosta@sunthru.co"
                                className="flex items-center gap-2 text-sm text-white/60 hover:text-sky-light transition-colors"
                            >
                                <Mail size={16} />
                                Johncosta@sunthru.co
                            </a>
                            <a
                                href="https://www.linkedin.com/company/sunthru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-white/60 hover:text-sky-light transition-colors"
                            >
                                <Linkedin size={16} />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
                    © {new Date().getFullYear()} SunThru. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
