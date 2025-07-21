import fetchNoteId from "@/lib/api";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

export default async function NoteDetails({
                                              params,
                                          }: {
    params: Promise<{ id: string }>;
}) {
    const {id} = await params;
    const noteId = +id;

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["note", noteId],
        queryFn: () => fetchNoteId(noteId),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteDetailsClient/>
        </HydrationBoundary>
    );
}