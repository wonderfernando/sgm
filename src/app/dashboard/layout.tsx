import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

export default function LayoutDashboard({children} : {children:ReactNode}) {
    return (
        <div className="bg-zinc-100 flex">
            <Sidebar />
            <main className="w-full">
            <Header/>
                {children}
            </main>
        </div>
    )
}