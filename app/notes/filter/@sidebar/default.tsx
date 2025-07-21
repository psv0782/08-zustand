import SidebarNotes from "@/components/SidebarNotes/SidebarNote";


const arrayTags: string[] = ["Work", "Personal", "Meeting", "Shopping", "Todo"];

export default function Sidebar() {
    return <SidebarNotes tags={arrayTags} />;
}
