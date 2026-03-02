export interface NewsArticle {
    _id: string;
    title: string;
    publishedAt: string;
    excerpt: string;
    externalUrl: string;
    source?: string;
    image?: {
        asset: {
            _id?: string;
            _ref?: string;
            url?: string;
        };
        alt?: string;
    };
}

export interface TeamMember {
    name: string;
    role: string;
    bio?: string;
    linkedIn?: string;
    initials: string;
}

export interface Partner {
    name: string;
    url?: string;
}
