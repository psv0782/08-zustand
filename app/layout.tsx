import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {Toaster} from "react-hot-toast";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-roboto",
    display: "swap",
});

export const metadata: Metadata = {
    title: "NoteHub",
    description:
        "Notehub is a simple and intuitive web application for creating, editing, and organizing notes, with support for search and tag-based filtering.",
    openGraph: {
        title: "NoteHub",
        description: "Take and organize notes easily with tags and instant search.",
        url: "https://08-zustand-beta.vercel.app/",
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

export default function RootLayout({
                                       children,
                                       modal,
                                   }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${roboto.variable}`}>
        <TanStackProvider>
            <Header/>
            {children}
            {modal}
            <Footer/>
            <Toaster/>
        </TanStackProvider>
        </body>
        </html>
    );
}
