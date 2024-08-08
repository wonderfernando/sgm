import { BookText, LucideHome, Trees, TriangleAlert, UserCircle2, UserPlus, UserRound, UserRoundPlus } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="bg-white w-60 p-4 min-h-screen" >
            <div className="border-b border-zinc-400/20 p-1 mb-1">
                <span>SGM</span>
            </div>
            <div>
                <ul className="flex flex-col">
                    <Link href="" className="text-xs p-2 text-slate-700 hover:bg-slate-200 rounded-md"><li className="flex items-center gap-1 "><LucideHome className="w-4 h-4"/>Inicio</li></Link>
                    <Link href="" className="text-xs p-2 text-slate-700 hover:bg-slate-200 rounded-md"><li className="flex items-center gap-1 "><UserRoundPlus className="w-4 h-4"/>Cadastrar automobilista</li></Link>
                    <Link href="" className="text-xs p-2 text-slate-700 hover:bg-slate-200 rounded-md"><li className="flex items-center gap-1 "><UserPlus className="w-4 h-4"/>Cadastrar funcionario</li></Link>
                    <Link href="" className="text-xs p-2 text-slate-700 hover:bg-slate-200 rounded-md"><li className="flex items-center gap-1 "><BookText className="w-4 h-4"/>Gerar multa</li></Link>
                    <Link href="" className="text-xs p-2 text-slate-700 hover:bg-slate-200 rounded-md"><li className="flex items-center gap-1 "><TriangleAlert className="w-4 h-4"/>Alertas</li></Link>
                </ul>
            </div>
        </div>
    )
}