"use client";

import type {CreateNoteValues, Tag} from "../../types/note";
import css from "./NoteForm.module.css";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createNote} from "../../lib/api";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {useDraftStore} from "@/lib/store/noteStore";

export default function NoteForm() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const {draft, setDraft, clearDraft} = useDraftStore();

    const mutationCreate = useMutation({
        mutationFn: createNote,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["notes"],
            });
            router.push("/notes/filter/all");
            toast.success("Success! Your note has been saved.");
        },
        onError: () => {
            toast.error("Oops! The note couldn't be saved.");
        },
    });

    function handleChange(
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        setDraft({
            ...draft,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(formData: FormData) {
        const formValues: CreateNoteValues = {
            title: formData.get("title") as string,
            content: (formData.get("content") as string) || "",
            tag: formData.get("tag") as Tag,
        };
        mutationCreate.mutate(formValues);
        clearDraft();
    }

    return (
        <>
            <form className={css.form} action={handleSubmit}>
                <div className={css.formGroup}>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        className={css.input}
                        defaultValue={draft.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={css.formGroup}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        rows={8}
                        className={css.textarea}
                        defaultValue={draft.content}
                        onChange={handleChange}
                    />
                </div>

                <div className={css.formGroup}>
                    <label htmlFor="tag">Tag</label>
                    <select
                        id="tag"
                        name="tag"
                        className={css.select}
                        defaultValue={draft.tag}
                        onChange={handleChange}
                        required
                    >
                        <option value="Todo">Todo</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Shopping">Shopping</option>
                    </select>
                </div>

                <div className={css.actions}>
                    <button
                        type="button"
                        className={css.cancelButton}
                        onClick={() => router.back()}
                    >
                        Cancel
                    </button>
                    {mutationCreate.isPending ? (
                        <button type="submit" className={css.submitButton} disabled={true}>
                            Note creation...
                        </button>
                    ) : (
                        <button type="submit" className={css.submitButton} disabled={false}>
                            Create note
                        </button>
                    )}
                </div>
            </form>
        </>
    );
}
