import { client } from "./client";
import type { NewsArticle } from "@/types";

export async function getAllNews(): Promise<NewsArticle[]> {
    if (!client) return [];

    return client.fetch(
        `*[_type == "newsArticle"] | order(publishedAt desc) {
            _id,
            title,
            publishedAt,
            excerpt,
            externalUrl,
            source,
            image {
                asset -> { _id, url },
                alt
            }
        }`
    );
}
