import Link from "next/link";
import Image from "next/image";

const NAV_COLS = [
    {
        heading: "Explore",
        links: [
            { href: "/technology", label: "Technology" },
            { href: "/product", label: "Product" },
            { href: "/impact", label: "Impact" },
            { href: "/about", label: "About" },
            { href: "/news", label: "News" },
        ],
    },
    {
        heading: "Company",
        links: [
            { href: "/partners", label: "Partner With Us" },
            { href: "https://www.linkedin.com/company/sunthru", label: "LinkedIn", external: true },
        ],
    },
    {
        heading: "Contact",
        links: [
            { href: "mailto:Johncosta@sunthru.co", label: "Johncosta@sunthru.co", external: true },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#f2f4f7] border-t border-[#c5c6ce]/20">
            <div className="container-wide py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <Link href="/">
                        <Image
                            src="/sunthru_cropped_logo.png"
                            alt="SunThru"
                            width={90}
                            height={30}
                            className="h-8 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-sm text-[#44474d] leading-relaxed max-w-xs">
                        Precision engineering for a sustainable future. Pioneering the next generation of silica aerogel insulation.
                    </p>
                </div>

                {/* Link columns */}
                {NAV_COLS.map((col) => (
                    <div key={col.heading}>
                        <h4
                            className="text-xs font-bold uppercase tracking-widest mb-5 text-[#000719]"
                            style={{ fontFamily: "var(--font-headline)" }}
                        >
                            {col.heading}
                        </h4>
                        <ul className="space-y-3">
                            {col.links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        target={(link as { external?: boolean }).external ? "_blank" : undefined}
                                        rel={(link as { external?: boolean }).external ? "noopener noreferrer" : undefined}
                                        className="text-sm text-[#44474d] hover:text-[#E8A030] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="container-wide pb-8 border-t border-[#c5c6ce]/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-[#75777e]" style={{ fontFamily: "var(--font-mono)" }}>
                    © {new Date().getFullYear()} SunThru. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#356574] inline-block" />
                    <span className="text-[#75777e]">Precision engineering for a sustainable future.</span>
                </div>
            </div>
        </footer>
    );
}
