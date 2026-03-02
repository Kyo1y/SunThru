import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "./env";

function makeSanityClient() {
    if (!projectId) return null;
    return createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: true,
    });
}

export const client = makeSanityClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
    if (!client) return null;
    return imageUrlBuilder(client).image(source);
}
