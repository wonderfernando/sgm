"use client"
import { useFormContext, useFormState } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { AutomobilistaType } from "./AutomobilistaForm";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon, Check } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import {format} from 'date-fns';
import parse  from "date-fns/parse";
import ptBR from 'date-fns/locale/pt-BR';
import { DialogClose } from "@radix-ui/react-dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { cn } from "@/lib/utils";
const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]
export interface IStep{
    setNextStep: () => void,
    setPreviusStep: () => void
}
export default function FirstForm({setNextStep, setPreviusStep}: IStep) {
   
    const {register, formState,watch,setValue} = useFormContext<AutomobilistaType>()
    console.log(formState)
    const [data, setData] = useState("Data de nascimento")
    const [value, setValues] = useState("")
    const [open,setOpen] = useState(false)
    console.log(watch("pais"))
    return (
        <div className="flex flex-col gap-2">
            <h1>Passo 1</h1>
            <div className="flex flex-col gap-1">
                <Label className="text-slate-700">Informe o nome completo do automoblista</Label>
                <Input {...register("name")} placeholder="Nome completo"/>
            </div>
            <div className="flex flex-col gap-1">
        
        
            <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button variant={"outline"} className={"w-[240px] pl-3 text-left font-normal"}> 
                            {value ? frameworks.find((framework) => framework.value === value)?.label : "Selecione o pais"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Command>
                        <CommandInput placeholder="Encontre o país" />
                        <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    setValue("pais", currentValue)
                                    setValues(currentValue)
                                }}
                                >
                                <Check
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {framework.label}
                                </CommandItem>
                            ))}
                            </CommandGroup>
                        </CommandList>
                        </Command>
                </PopoverContent>
              </Popover>


      
            </div>
            <div className="flex flex-col gap-1">
                <Label className="text-slate-700">Informe a data de nascimemto do automoblista</Label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"outline"} className={"w-[240px] pl-3 text-left font-normal"}> 
                            {watch("data_nascimento")}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" onSelect={ (e) => { setValue("data_nascimento", format(e!, "PPP")) } } disabled={(date) => date > new Date() || date < new Date("1900-01-01")} initialFocus />
                </PopoverContent>
              </Popover>

            </div>
            <div className="flex justify-between mt-4">
                <DialogClose asChild><Button type="button" variant={"outline"}>Cancelar</Button></DialogClose>
                <Button onClick={() => {console.log(""); setNextStep()}} className="bg-blue-600">Proximo</Button>
            </div>
        </div>
    )
}