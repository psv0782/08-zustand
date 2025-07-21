import fetchNoteId from "@/lib/api";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import NotePreviewClient from "./NotePreview.client";

export default async function NoteModal({
                                            params,
                                        }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const noteId = +id;

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["note", noteId],
        queryFn: () => fetchNoteId(noteId),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotePreviewClient />
        </HydrationBoundary>
    );
}