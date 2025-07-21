import {Metadata} from "next";
import ErrorPage from "@/components/ErrorPage/ErrorPage";

export const metadata: Metadata = {
    title: "404 — Notehub",
    description:
        "Looks like you've reached a dead end. Let's get you back to your notes.",
    openGraph: {
        title: "404 — Notehub",
        description:
            "Looks like you've reached a dead end. Let's get you back to your notes.",
        url: "https://08-zustand-beta.vercel.app/404",
        images: [
            {
                url: "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg",
                width: 1200,
                height: 630,
                alt: "not found 404",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 — Notehub",
        description:
            "Looks like you've reached a dead end. Let's get you back to your notes.",
        images: [
            {
                url: "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg",
                width: 1200,
                height: 630,
                alt: "notehub image",
            },
        ],
    },
};

export default function NotFoundPage() {
    return <ErrorPage/>;
}