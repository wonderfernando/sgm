import { useFormContext, useFormState } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { AutomobilistaType } from "./AutomobilistaForm";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useEffect, useState } from "react";
import {format} from 'date-fns';
import parse  from "date-fns/parse";
import ptBR from 'date-fns/locale/pt-BR';
import { ICountry, IStep } from "./FirstForm";
import { FormControl, FormField, FormItem } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { cn } from "@/lib/utils";
export default function SecondForm({setNextStep,setPreviusStep} : IStep) {
    async function getCountrys() {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flag")
        const json = await response.json() as ICountry[]
        setCountry(json.reverse())
    }
    const {register, formState,watch,setValue} = useFormContext<AutomobilistaType>()
    const form = useFormContext<AutomobilistaType>()
    const [data, setData] = useState("Data de nascimento")
    const [openProvince,setOpenProvince] = useState(false)
    const [open,setOpen] = useState(false)
    const [openMunicipe,setOpenMunicipe] = useState(false)
    const [countrys, setCountry] = useState<ICountry[]>()
    useEffect(()=>{
        getCountrys()
    },[])
    console.log(countrys)
    return (
        <div className="flex flex-col gap-4">
            <h1>Passo 2</h1>
           <div className="grid grid-cols-2 items-center gap-2">
                <div className="flex flex-col gap-2">
                    <Label className="text-slate-700">Informe o contacto</Label>
                    <Input type="tel" {...register("telemovel")} placeholder="Numero de telemovel"/>
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-slate-700">Informe o contacto alternativo</Label>
                    <Input type="tel" {...register("telemovel_alternativo")} placeholder="Numero de telemovel alternativo"/>
                </div>
           </div>

            <div className="flex flex-col gap-2">
                <Label className="text-slate-700">Informe o email</Label>
                <Input {...register("email")} placeholder="Endereço de email"/>
            </div>
            <div className="flex flex-col gap-2">
                <Label className="text-slate-700">Informe o email alternativo</Label>
                <Input {...register("email_alternativo")} placeholder="Endereço de email alternativo"/>
            </div>
            <div className="flex flex-col gap-2">
                <Label className="text-slate-700">Informe o email alternativo</Label>
                <Input {...register("email_alternativo")} placeholder="Endereço de email alternativo"/>
            </div>
            <div className="flex flex-col gap-2">
                <Label className="text-slate-700">Informe o email alternativo</Label>
                <Input {...register("email_alternativo")} placeholder="Endereço de email alternativo"/>
            </div>
            <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
                <FormField
                    control={form.control}
                    name="pais"
                    render={({field}) => (
                        <FormItem className="flex flex-col">
                            <Label>Informe a provincia</Label>
                            <Popover open={openProvince} onOpenChange={setOpenProvince}>
                                <FormControl>  
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-fu justify-between"
                                            >
                                            {field.value || "Selecione a provincia"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                </FormControl>
                                    <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                    <CommandInput placeholder="Procurar provincia.." />
                                    <CommandList>
                                        <CommandEmpty>Provincia nao encontrada</CommandEmpty>
                                        <CommandGroup>
                                        {countrys && countrys.map((country) => (
                                            <CommandItem
                                            key={country.name.common}
                                            value={country.name.common}
                                            onSelect={(currentValue) => {
                                                form.setValue("pais",currentValue)
                                                setOpenProvince(false)
                                            }}
                                            >
                                            <Check
                                                className={cn(
                                                "mr-2 h-4 w-4",
                                                field.value === country.name.common ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {country.name.common}
                                            </CommandItem>
                                        ))}
                                        </CommandGroup>
                                    </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                            )}
                />
                  <FormField
                    control={form.control}
                    name="pais"
                    render={({field}) => (
                        <FormItem className="flex flex-col">
                            <Label>Informe o municipio</Label>
                            <Popover open={openMunicipe} onOpenChange={setOpenMunicipe}>
                                <FormControl>  
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-fu justify-between"
                                            >
                                            {field.value || "Selecione o municipio"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                </FormControl>
                                    <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                    <CommandInput placeholder="Procurar municipio.." />
                                    <CommandList>
                                        <CommandEmpty>Provincia nao encontrada</CommandEmpty>
                                        <CommandGroup>
                                        {countrys && countrys.map((country) => (
                                            <CommandItem
                                            key={country.name.common}
                                            value={country.name.common}
                                            onSelect={(currentValue) => {
                                                form.setValue("pais",currentValue)
                                                setOpenMunicipe(false)
                                            }}
                                            >
                                            <Check
                                                className={cn(
                                                "mr-2 h-4 w-4",
                                                field.value === country.name.common ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {country.name.common}
                                            </CommandItem>
                                        ))}
                                        </CommandGroup>
                                    </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                            )}
                />
            </div>
            <div>
                <Label>Endereço</Label>
                <Input {...form.register("endereco")} placeholder="Endereço"/>
            </div>
            <div className="flex justify-between mt-4">
                <Button onClick={() => setPreviusStep()} variant={"outline"}>Anterior</Button>
                <Button onClick={() => setNextStep()} className="bg-blue-600">Proximo</Button>
            </div>
        </div>
    )
}