import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./page.module.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Create note",
    description: "Create a new note with title, content, and tags.",
    openGraph: {
        title: "Create note",
        description: "Create a new note with title, content, and tags.",
        url: "https://08-zustand-beta.vercel.app/notes/action/create",
        images: [
            {
                url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                width: 1200,
                height: 630,
                alt: "notehub image",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "NoteHub",
        description: "Take and organize notes easily with tags and instant search.",
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

export default function CreateNote() {
    return (
        <main className={css.main}>
            <div className={css.container}>
                <h1 className={css.title}>Create note</h1>
                <NoteForm/>
            </div>
        </main>
    );
}
