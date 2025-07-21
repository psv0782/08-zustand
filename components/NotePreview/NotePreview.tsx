import {Note} from "@/types/note";
import css from "./NotePreview.module.css";
import {useRouter} from "next/navigation";

interface NotePreviewProps {
    note?: Note;
}

export default function NotePreview({note}: NotePreviewProps) {
    const router = useRouter();

    function handleClose() {
        router.back();
    }

    return (
        <div className={css.container}>
            {note && (
                <div className={css.item}>
                    <div className={css.header}>
                        <h2>{note.title}</h2>
                        <button className={css.backBtn} onClick={handleClose}>
                            Close
                        </button>
                    </div>
                    <p className={css.tag}>{note.tag}</p>
                    <p className={css.content}>{note.content}</p>
                    <p className={css.date}>{note.createdAt}</p>
                </div>
            )}
        </div>
    );
}
