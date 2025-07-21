"use client";

import {keepPreviousData, useQuery} from "@tanstack/react-query";
import css from "./NotePage.module.css";
import {useState} from "react";
import {useDebounce} from "use-debounce";
import ErrorMessage from "./error";
import Loader from "@/app/loading";
import {fetchNotes} from "@/lib/api";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import NoteList from "@/components/NoteList/NoteList";
import {FetchNotesValues} from "@/types/note";
import Link from "next/link";

interface NotesClientProps {
    initialQuery: string;
    initialPage: number;
    initialTag?: string;
    initialData: FetchNotesValues | undefined;
}

export default function NotesClient({
                                        initialQuery,
                                        initialPage,
                                        initialTag,
                                        initialData,
                                    }: NotesClientProps) {
    const [query, setQuery] = useState<string>(initialQuery);
    const [currentPage, setCurrentPage] = useState<number>(initialPage);
    const [debounceQuery] = useDebounce(query, 500);

    const {data, isLoading, isError, error, isSuccess} = useQuery({
        queryKey: ["notes", debounceQuery, initialTag, currentPage],
        queryFn: () => fetchNotes(debounceQuery, currentPage, initialTag),
        placeholderData: keepPreviousData,
        refetchOnMount: true,
        initialData,
    });

    const notesRequest = data?.notes ?? [];
    const totalPage = data?.totalPages ?? 1;

    function handleChange(newQuery: string) {
        setQuery(newQuery);
        setCurrentPage(1);
    }

    return (
        <div className={css.app}>
            <div className={css.toolbar}>
                <SearchBox value={query} onChange={handleChange}/>
                {totalPage > 1 && (
                    <Pagination
                        totalPages={totalPage}
                        currentPage={currentPage}
                        setPage={setCurrentPage}
                    />
                )}
                <Link href="/notes/action/create" className={css.button}>
                    Create note +
                </Link>
            </div>

            {isLoading && <Loader/>}

            {isError && <ErrorMessage error={error}/>}
            {isSuccess && <NoteList notes={notesRequest}/>}
        </div>
    );
}
