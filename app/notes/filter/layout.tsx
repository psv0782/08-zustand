import css from "./layout.module.css";

interface NotesLayoutProps {
    children: React.ReactNode;
    sidebar: React.ReactNode;
}

export default function NotesLayout({children, sidebar}: NotesLayoutProps) {
    return (
        <section className={css.section}>
            <aside className={css.aside}>{sidebar}</aside>
            <div className={css.container}>{children}</div>
        </section>
    );
}
