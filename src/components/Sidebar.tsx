import { BookText, Car, LucideHome, PanelBottom, Trees, TriangleAlert, UserCircle2, UserPlus, UserRound, UserRoundPlus } from "lucide-react";
import Link from "next/link";

export default function Sidebar({isSideBarOpen} : {isSideBarOpen:boolean}) {
    return (
        <div className={`flex flex-col w-96 bg-white min-h-screen transition-all max-md:hidden text-lg overflow-hidden ${!isSideBarOpen && "opacity-0 w-0"}`}>
            <div className="flex flex-col">
                <div className="border-b flex gap-1 font-extrabold border-zinc-400/20 h-20 items-center pl-2">
                    <Car className="font-extrabold"/>
                    <span>SGM</span>
                </div>
                <div>
                    <ul className="flex flex-col px-2 w-full text-nowrap text-ellipsis whitespace-nowrap mt-2">
                        <Link href="/dashboard" className=" p-2 text-slate-700 hover:bg-foreground/90 transition-all hover:text-muted rounded-md"><li className="flex items-center gap-1 "><LucideHome className="w-4 h-4"/>Inicio</li></Link>
                        <Link href="/automobilistas" className=" p-2 text-slate-700 hover:bg-foreground/90 transition-all hover:text-muted rounded-md"><li className="flex items-center gap-1 "><UserRoundPlus className="w-4 h-4"/>Cadastrar automobilista</li></Link>
                        <Link href="/funcionarios" className=" p-2 text-slate-700 hover:bg-foreground/90 transition-all hover:text-muted rounded-md"><li className="flex items-center gap-1 "><UserPlus className="w-4 h-4"/>Cadastrar funcionario</li></Link>
                        <Link href="/multas" className=" p-2 text-slate-700 hover:bg-foreground/90 transition-all hover:text-muted rounded-md"><li className="flex items-center gap-1 "><BookText className="w-4 h-4"/>Gerar multa</li></Link>
                        <Link href="/alertas" className=" p-2 text-slate-700 hover:bg-foreground/90 transition-all hover:text-muted rounded-md"><li className="flex items-center gap-1 "><TriangleAlert className="w-4 h-4"/>Alertas</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}