import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export const revalidate = 60;

export default async function Notes({
                                        params,
                                    }: {
    params: Promise<{ slug: string[] }>;
}) {
    const initialQuery = "";
    const initialPage = 1;

    const { slug } = await params;
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