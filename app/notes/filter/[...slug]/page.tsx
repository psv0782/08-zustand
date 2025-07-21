import {fetchNotes} from "@/lib/api";
import NotesClient from "./Notes.client";
import {Metadata} from "next";

interface NotesProps {
    params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
                                           params,
                                       }: NotesProps): Promise<Metadata> {
    const {slug} = await params;
    const tag = slug[0] === "all" ? undefined : slug[0];
    return {
        title: `Notes: ${tag ? `${tag}` : "all"}`,
        description: `Note: ${tag || "all"} — created in Notehub.`,
        openGraph: {
            title: `Notes: ${tag ? `${tag}` : "all"}`,
            description: `Note: ${tag || "all"} — created in Notehub.`,
            url: `https://08-zustand-beta.vercel.app/notes/filter/${slug.join("/")}`,
            images: [
                {
                    url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                    width: 1200,
                    height: 630,
                    alt: "notehub image",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `Notes: ${tag ? `${tag}` : "all"}`,
            description: `Note: ${tag || "all"} — created in Notehub.`,
            images: [
                {
                    url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                    width: 1200,
                    height: 630,
                    alt: "notehub image",
                },
            ],
        },
    };
}

export const revalidate = 60;

export default async function Notes({params}: NotesProps) {
    const initialQuery = "";
    const initialPage = 1;
    const {slug} = await params;
    const tag = slug[0] === "all" ? undefined : slug[0];
    const data = await fetchNotes(initialQuery, initialPage, tag);

    return (
        <NotesClient
            initialQuery={initialQuery}
            initialPage={initialPage}
            initialTag={tag}
            initialData={data}
        />
    );
}
