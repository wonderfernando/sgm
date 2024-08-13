import { useFormContext, useFormState } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { AutomobilistaType } from "./AutomobilistaForm";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import {format} from 'date-fns';
import parse  from "date-fns/parse";
import ptBR from 'date-fns/locale/pt-BR';
import { IStep } from "./FirstForm";
export default function SecondForm({setNextStep,setPreviusStep} : IStep) {
   
    const {register, formState,watch,setValue} = useFormContext<AutomobilistaType>()

    const [data, setData] = useState("Data de nascimento")
    return (
        <div className="flex flex-col gap-2">
            <h1>Passo 2</h1>
            <div className="flex flex-col gap-1">
                <Label className="text-slate-700">Informe o nome completo do automoblista</Label>
                <Input {...register("name")} placeholder="Nome completo"/>
            </div>
            <div className="flex flex-col gap-1">
                <Label className="text-slate-700">Informe o email do automoblista</Label>
                <Input placeholder="joaosoares@gmail.com"/>
            </div>
            <div className="flex flex-col gap-1">
                <Label className="text-slate-700">Informe o email do automoblista</Label>
                <Input placeholder="joaosoares@gmail.com"/>
            </div>
            <div className="flex flex-col gap-1">
                <Label className="text-slate-700">Informe o email do automoblista</Label>
                <Input placeholder="joaosoares@gmail.com"/>
            </div>

            <div className="flex justify-between mt-4">
                <Button onClick={() => setPreviusStep()} variant={"outline"}>Anterior</Button>
                <Button onClick={() => setNextStep()} className="bg-blue-600">Proximo</Button>
            </div>
        </div>
    )
}