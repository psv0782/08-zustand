"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import fetchNoteId from "@/lib/api";
import {useQuery} from "@tanstack/react-query";
import {useParams, useRouter} from "next/navigation";

export default function NotePreviewClient() {
    const router = useRouter();
    const {id} = useParams<{ id: string }>();
    const noteId = +id;
    const {data} = useQuery({
        queryKey: ["note", noteId],
        queryFn: () => fetchNoteId(noteId),
        refetchOnMount: false,
    });

    function handleClose() {
        router.back();
    }

    return (
        <Modal onClose={handleClose}>
            <NotePreview note={data}/>
        </Modal>
    );
}
