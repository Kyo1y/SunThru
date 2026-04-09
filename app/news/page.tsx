import type { Metadata } from "next";
import type { NewsArticle } from "@/types";
import { getAllNews } from "@/sanity/queries";

export const metadata: Metadata = {
    title: "News",
    description: "SunThru in the news — press coverage and announcements.",
};

const FALLBACK_ARTICLES: NewsArticle[] = [
    {
        _id: "1",
        title: "FuzeHub Announces 2021 Commercialization Competition Awardees",
        publishedAt: "2021-11-12",
        excerpt: "FuzeHub announced the seven winners of the 2021 Commercialization Competition during the New York State Innovation Summit. Start-ups won $350,000 in prizes after pitching to advance the development of their technologies.",
        externalUrl: "https://fuzehub.com/press-room/",
        source: "FuzeHub",
    },
    {
        _id: "2",
        title: "Startup firm working out of Union College among commercialization competition winners",
        publishedAt: "2021-11-12",
        excerpt: "SunThru was one of seven winners in the 2021 Commercialization Competition held by FuzeHub. Entrepreneurs from across the state pitched their ideas for a share of $350,000 in prizes.",
        externalUrl: "https://dailygazette.com/2021/11/12/startup-firm/",
        source: "Daily Gazette",
    },
    {
        _id: "3",
        title: "Schenectady County company hopes to be part of big window breakthrough",
        publishedAt: "2021-11-12",
        excerpt: "A Schenectady County company, Sunthru, is developing a product that they say will be a game changer. They're called aerogels.",
        externalUrl: "https://wnyt.com",
        source: "WNYT",
    },
    {
        _id: "4",
        title: "STTR Phase I: High-Performance Windows for Daylighting",
        publishedAt: "2020-08-01",
        excerpt: "The broader impacts/commercial potential of this Small Business Technology Transfer (STTR) Phase I project is in the development of energy-saving window products that are aesthetically pleasing.",
        externalUrl: "https://www.sbir.gov",
        source: "SBIR.gov",
    },
    {
        _id: "5",
        title: "Windows of opportunity: aerogel's promise for insulated panes",
        publishedAt: "2021-12-17",
        excerpt: "SunThru, a Schenectady startup founded by professors Ann Anderson and Mary Carroll '86, is creating a silica aerogel insert for triple-pane windows that's more energy efficient and cost-effective.",
        externalUrl: "https://www.union.edu/news",
        source: "Union College",
    },
    {
        _id: "6",
        title: "Schenectady startup SunThru developing high-efficiency window pane with alternative material",
        publishedAt: "2021-03-16",
        excerpt: "SunThru is developing a window pane out of silica aerogel, a very low-density material with high thermal insulation properties.",
        externalUrl: "https://www.bizjournals.com/albany",
        source: "Albany Business Journal",
    },
    {
        _id: "7",
        title: "Novel Window Designs Aim for More Than Just Efficiency",
        publishedAt: "2021-03-26",
        excerpt: "With more attention gathering around aerogels as an alternative, officials for Sunthru LLC report that they're working to deliver a monolithic version of the material.",
        externalUrl: "https://www.dwmmag.com",
        source: "DWM Magazine",
    },
];

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export default async function NewsPage() {
    let articles: NewsArticle[] = FALLBACK_ARTICLES;

    try {
        const sanityArticles = await getAllNews();
        if (sanityArticles && sanityArticles.length > 0) {
            articles = sanityArticles;
        }
    } catch {
        // Sanity not configured — use fallback
    }

    return (
        <>
            {/* ── Hero ─────────────────────────────────────────── */}
            <header className="pt-36 pb-20 px-8 max-w-screen-2xl mx-auto">
                <div className="inline-block px-3 py-1 mb-6 bg-[#e0e3e6]">
                    <span className="font-mono text-xs tracking-widest text-[#000719] uppercase">Press Coverage</span>
                </div>
                <h1
                    className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-[#000719] mb-8 max-w-3xl"
                    style={{ fontFamily: "var(--font-headline)" }}
                >
                    SunThru in<br />the News.
                </h1>
                <p className="text-[#44474d] text-xl max-w-xl leading-relaxed">
                    Press coverage, public research announcements, and media appearances.
                </p>
            </header>

            {/* ── Article Grid ──────────────────────────────────── */}
            <section className="pb-32 px-8 max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c5c6ce]/20 border border-[#c5c6ce]/20">
                    {articles.map((article) => (
                        <a
                            key={article._id}
                            href={article.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-[#f7f9fc] p-8 flex flex-col hover:bg-[#f2f4f7] transition-colors duration-200"
                        >
                            {/* Source + Date */}
                            <div className="flex items-center justify-between mb-6">
                                {article.source && (
                                    <span
                                        className="font-mono text-[10px] uppercase tracking-widest text-white px-2 py-1"
                                        style={{ background: "#0d1f3c" }}
                                    >
                                        {article.source}
                                    </span>
                                )}
                                <span className="font-mono text-[10px] text-[#75777e] ml-auto">
                                    {formatDate(article.publishedAt)}
                                </span>
                            </div>

                            {/* Title */}
                            <h2
                                className="text-xl font-bold text-[#000719] mb-4 leading-snug group-hover:text-[#E8A030] transition-colors"
                                style={{ fontFamily: "var(--font-headline)" }}
                            >
                                {article.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="text-sm text-[#44474d] leading-relaxed flex-1">
                                {article.excerpt}
                            </p>

                            {/* Read link */}
                            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-[#E8A030] font-medium">
                                <span>Read Article</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Manage note */}
                <p className="mt-8 font-mono text-[10px] text-[#75777e] text-center">
                    Articles managed via{" "}
                    <a href="/studio" className="text-[#356574] hover:text-[#E8A030] transition-colors">
                        Sanity Studio
                    </a>
                </p>
            </section>
        </>
    );
}
