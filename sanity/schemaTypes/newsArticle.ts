import { defineField, defineType } from "sanity";

export const newsArticle = defineType({
    name: "newsArticle",
    title: "News Article",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "publishedAt",
            title: "Published Date",
            type: "date",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 4,
            description: "A short summary of the article shown on the news page.",
        }),
        defineField({
            name: "externalUrl",
            title: "External Link",
            type: "url",
            description: "Link to the original article (FuzeHub, Daily Gazette, etc.)",
            validation: (Rule) => Rule.required().uri({ allowRelative: false }),
        }),
        defineField({
            name: "image",
            title: "Cover Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                }),
            ],
        }),
        defineField({
            name: "source",
            title: "Source Name",
            type: "string",
            description: "e.g. FuzeHub, Daily Gazette, WNYT, Union College",
        }),
    ],
    orderings: [
        {
            title: "Published Date, Newest First",
            name: "publishedAtDesc",
            by: [{ field: "publishedAt", direction: "desc" }],
        },
    ],
    preview: {
        select: { title: "title", date: "publishedAt", media: "image" },
        prepare({ title, date }) {
            return { title, subtitle: date };
        },
    },
});
