import type { Metadata } from "next";
import type { NewsArticle } from "@/types";
import { ExternalLink, Calendar, Newspaper } from "lucide-react";
import { getAllNews } from "@/sanity/queries";

export const metadata: Metadata = {
    title: "News",
    description: "SunThru in the news — press coverage and announcements.",
};

// Static fallback articles (used when Sanity is not configured yet)
const FALLBACK_ARTICLES: NewsArticle[] = [
    {
        _id: "1",
        title: "FuzeHub Announces 2021 Commercialization Competition Awardees",
        publishedAt: "2021-11-12",
        excerpt:
            "FuzeHub announced the seven winners of the 2021 Commercialization Competition during the New York State Innovation Summit. Start-ups won $350,000 in prizes after pitching to advance the development of their technologies.",
        externalUrl: "https://fuzehub.com/press-room/",
        source: "FuzeHub",
    },
    {
        _id: "2",
        title: "Startup firm working out of Union College among commercialization competition winners",
        publishedAt: "2021-11-12",
        excerpt:
            "SunThru was one of seven winners in the 2021 Commercialization Competition held by FuzeHub. Entrepreneurs from across the state pitched their ideas for a share of $350,000 in prizes.",
        externalUrl: "https://dailygazette.com/2021/11/12/startup-firm/",
        source: "Daily Gazette",
    },
    {
        _id: "3",
        title: "Schenectady County company hopes to be part of big window breakthrough",
        publishedAt: "2021-11-12",
        excerpt:
            "A Schenectady County company, Sunthru, is developing a product that they say will be a game changer. They're called aerogels.",
        externalUrl: "https://wnyt.com",
        source: "WNYT",
    },
    {
        _id: "4",
        title: "STTR Phase I: High-Performance Windows for Daylighting",
        publishedAt: "2020-08-01",
        excerpt:
            "The broader impacts/commercial potential of this Small Business Technology Transfer (STTR) Phase I project is in the development of energy-saving window products that are aesthetically pleasing.",
        externalUrl: "https://www.sbir.gov",
        source: "SBIR.gov",
    },
    {
        _id: "5",
        title: "Windows of opportunity: aerogel's promise for insulated panes",
        publishedAt: "2021-12-17",
        excerpt:
            "SunThru, a Schenectady startup founded by professors Ann Anderson and Mary Carroll '86, is creating a silica aerogel insert for triple-pane windows that's more energy efficient and cost-effective.",
        externalUrl: "https://www.union.edu/news",
        source: "Union College",
    },
    {
        _id: "6",
        title: "Schenectady startup SunThru developing high-efficiency window pane with alternative material",
        publishedAt: "2021-03-16",
        excerpt:
            "SunThru is developing a window pane out of silica aerogel, a very low-density material with high thermal insulation properties.",
        externalUrl: "https://www.bizjournals.com/albany",
        source: "Albany Business Journal",
    },
    {
        _id: "7",
        title: "Novel Window Designs Aim for More Than Just Efficiency",
        publishedAt: "2021-03-26",
        excerpt:
            "With more attention gathering around aerogels as an alternative, officials for Sunthru LLC report that they're working to deliver a monolithic version of the material.",
        externalUrl: "https://www.dwmmag.com",
        source: "DWM Magazine",
    },
];

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default async function NewsPage() {
    let articles: NewsArticle[] = FALLBACK_ARTICLES;

    // Try to fetch from Sanity; fall back to static content if not configured
    try {
        const sanityArticles = await getAllNews();
        if (sanityArticles && sanityArticles.length > 0) {
            articles = sanityArticles;
        }
    } catch {
        // Sanity not configured yet — use fallback
    }

    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-24 sm:py-32 text-center">
                <div className="container-wide">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in-up">
                        SunThru in the News
                    </h1>
                    <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto animate-fade-in-up animate-delay-100">
                        Press coverage, awards, and announcements
                    </p>
                </div>
            </section>

            {/* Articles */}
            <section className="section-padding bg-white">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto flex flex-col gap-6">
                        {articles.map((article) => (
                            <a
                                key={article._id}
                                href={article.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white rounded-2xl border border-border p-6 sm:p-8 hover:shadow-lg hover:shadow-sky/5 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 text-xs text-muted mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {formatDate(article.publishedAt)}
                                            </span>
                                            {article.source && (
                                                <span className="flex items-center gap-1 px-2 py-0.5 bg-sky/10 text-sky rounded-full font-medium">
                                                    <Newspaper size={10} />
                                                    {article.source}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold text-navy group-hover:text-sky transition-colors leading-snug">
                                            {article.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                    <ExternalLink
                                        size={18}
                                        className="text-muted group-hover:text-sky transition-colors flex-shrink-0 mt-1"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
