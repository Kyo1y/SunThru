import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export const metadata: Metadata = {
    title: "Team",
    description: "Meet the SunThru team — founders, engineers, and advisors.",
};

type TeamMember = {
    name: string;
    role: string;
    image?: string;
    linkedIn?: string;
    initials: string;
};

const TEAM: TeamMember[] = [
    {
        name: "John Costa",
        role: "Founder / Chief Executive Officer",
        image: "/team/john-costa.png",
        linkedIn: "https://www.linkedin.com/in/john-costa-2b88201b8/",
        initials: "JC",
    },
    {
        name: "Jeremy Manus",
        role: "Chief Operating Officer",
        image: "/team/jeremy-manus.jpg",
        linkedIn: "https://www.linkedin.com/in/jeremy-manus-3a7093106/",
        initials: "JM",
    },
    {
        name: "Maxwell Rhodes",
        role: "Mechanical Engineer",
        image: "/team/maxwell-rhodes.jpg",
        linkedIn: "https://www.linkedin.com/in/maxwellrhodes2001/",
        initials: "MR",
    },
    {
        name: "Adam Forti",
        role: "Founder / Advisor",
        image: "/team/adam-forti.jpg",
        linkedIn: "https://www.linkedin.com/in/adamforti/",
        initials: "AF",
    },
    {
        name: "Ann Anderson",
        role: "Founder / Advisor",
        image: "/team/ann-anderson.jpg",
        initials: "AA",
    },
    {
        name: "Mary Carroll",
        role: "Founder / Advisor",
        image: "/team/mary-carroll.jpg",
        initials: "MC",
    },
];

const PARTNERS = [
    { name: "NYSERDA", logo: "/partners/NYSERDA_wordmark.svg", href: "https://www.nyserda.ny.gov/" },
    { name: "FuzeHub", logo: "/partners/cropped-cropped-logotype.png", href: "https://fuzehub.com/" },
    { name: "Koffman", logo: "/partners/koffman-logo.webp", href: "https://koffmancenter.com/" },
    { name: "America's Seed Fund", logo: "/partners/americas_seed_fund.png", href: "https://seedfund.nsf.gov/" },
    { name: "Union College Aerogel Lab", logo: "/partners/union-college-seeklogo.svg", href: "https://muse.union.edu/aerogels/aerogel-lab-at-union/" },
];

function TeamCard({ member }: { member: TeamMember }) {
    const card = (
        <div className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:shadow-sky/5 transition-all duration-300 hover:-translate-y-1">
            {/* Photo */}
            <div className="relative w-full aspect-square bg-off-white overflow-hidden">
                {member.image ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-navy/5">
                        <span className="text-4xl font-bold text-navy/30">
                            {member.initials}
                        </span>
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="p-5">
                <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                <p className="text-sm text-muted mt-1">{member.role}</p>
                {member.linkedIn && (
                    <span className="inline-flex items-center gap-1.5 mt-3 text-sm text-sky font-medium">
                        <Linkedin size={14} />
                        LinkedIn
                    </span>
                )}
            </div>
        </div>
    );

    if (member.linkedIn) {
        return (
            <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
            >
                {card}
            </a>
        );
    }

    return card;
}

export default function TeamPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-24 sm:py-32 text-center">
                <div className="container-wide">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in-up">
                        Meet the Team
                    </h1>
                    <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto animate-fade-in-up animate-delay-100">
                        The people behind SunThru&apos;s aerogel innovation
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section-padding bg-white">
                <div className="container-wide">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {TEAM.map((member) => (
                            <TeamCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="section-padding bg-off-white">
                <div className="container-wide text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                        Partners
                    </h2>
                    <div className="w-16 h-1 bg-sky mx-auto rounded-full mb-10" />
                    <div className="flex flex-wrap justify-center gap-6">
                        {PARTNERS.map((partner) => (
                            <a
                                key={partner.name}
                                href={partner.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-3 px-6 py-4 bg-white rounded-xl border border-border shadow-sm min-w-[140px] cursor-pointer hover:shadow-lg hover:shadow-sky/5 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="relative h-10 w-28">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-xs font-medium text-navy text-center leading-tight">
                                    {partner.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
