"use client";

import Link from "next/link";
import css from "./TagsMenu.module.css";
import {useState} from "react";

const tags: string[] = ["Work", "Personal", "Meeting", "Shopping", "Todo"];

export default function TagsMenu() {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={css.menuContainer}>
            <button className={css.menuButton} onClick={toggle}>
                Notes ▾
            </button>
            {isOpen && (
                <ul className={css.menuList}>
                    <li className={css.menuItem}>
                        <Link
                            href={`/notes/filter/all`}
                            className={css.menuLink}
                            onClick={toggle}
                        >
                            All notes
                        </Link>
                    </li>
                    {tags.map((tag) => (
                        <li className={css.menuItem} key={tag}>
                            <Link
                                href={`/notes/filter/${tag}`}
                                className={css.menuLink}
                                onClick={toggle}
                            >
                                {tag}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
