"use client"
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
import {ptBR} from 'date-fns/locale/pt-BR';
import { DialogClose } from "@radix-ui/react-dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormField, FormItem } from "../ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";


export interface IStep{
    setNextStep: () => void,
    setPreviusStep: () => void
}
export interface ICountry{
      name: {
        common:string,
        official:string,
        nativeName:{
        eng:{
               official:string
               common:string
            }
         }
      },
      flag: any
    }

   
export default function FirstForm({setNextStep, setPreviusStep}: IStep) {
   
    async function getCountrys() {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flag")
        const json = await response.json() as ICountry[]
        setCountry(json.reverse())
    }
    const form = useFormContext<AutomobilistaType>()
    const [open,setOpen] = useState(false)
    const [countrys, setCountry] = useState<ICountry[]>()
    useEffect(()=>{
        getCountrys()
    },[])
    return (
        <div className="flex flex-col gap-3">
            <h1>Passo 1</h1>
            <div className="gap-4 flex flex-col">
                <div className="flex flex-col gap-1">
                    <FormField
                    control={form.control}
                        name="name"
                        render={({fieldState,field}) => (
                            <FormItem>
                                <Label className="text-slate-700">Informe o nome completo do automoblista</Label>
                                <FormControl>
                                    <Input {...field} placeholder="Nome completo"/>
                                </FormControl>
                            </FormItem>
                        )     
                        }
                    />
                </div>
                
                <div className="grid grid-cols-2 gap-2 items-center max-sm:grid-cols-1">
                    <div className="flex flex-col gap-1">
                            <FormField
                                    control={form.control}
                                    name="pais"
                                    render={({field}) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <Label>Informe o sexo do automobilista</Label>
                                            <Select>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Selecione o sexo" />
                                                    </SelectTrigger> 
                                                </FormControl>
                                                <SelectContent>
                                                        <SelectItem value="femenino">Masculino</SelectItem>
                                                        <SelectItem value="masculino">Femenino</SelectItem>
                                                </SelectContent>
                                            </Select>
                                </FormItem>)}
                                            />
                    </div>
                    <div className="flex flex-col gap-1">
                        <FormField
                            control={form.control}
                            name="pais"
                            render={({field}) => (
                                <FormItem className="flex flex-col gap-1">
                                    <Label>Informe a nacionalidade</Label>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <FormControl>  
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={open}
                                                    className="w-fu justify-between"
                                                    >
                                                    {field.value || "Selecione a nacionalidade"}
                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </PopoverTrigger>
                                        </FormControl>
                                            <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                            <CommandInput placeholder="Procurar país.." />
                                            <CommandList>
                                                <CommandEmpty>Nacionalidade nao encontrada</CommandEmpty>
                                                <CommandGroup>
                                                {countrys && countrys.map((country) => (
                                                    <CommandItem
                                                    key={country.name.common}
                                                    value={country.name.common}
                                                    onSelect={(currentValue) => {
                                                        form.setValue("pais",currentValue)
                                                        setOpen(false)
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
                            )}/>
                    
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="data_nascimento"
                        render={({field}) => (
                            <FormItem>
                                <Label className="text-slate-700">Informe a data de nascimemto do automoblista</Label>
                                <FormControl>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant={"outline"} className={"w-[240px] pl-3 text-left font-normal"}> 
                                                {field.value ? format(field.value,"PPP",{locale:ptBR}) : "Data de nascimento"}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar  mode="single" onSelect={ (e) => field.onChange(String(e)) } disabled={(date) => {  return date < new Date("1900-01-01")}} initialFocus />
                                    </PopoverContent>
                                </Popover>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                </div>

                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="bi"
                        render={({field}) => (
                            <FormItem>
                                <Label>Informe o numero de bilhete de identidade / passaporte</Label>
                                <FormControl>
                                    <Input placeholder="Numero de BI ou Passaporte" {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                        /> 
                        <div className="grid grid-cols-2 w-full gap-2 max-sm:grid-cols-1">
                        <FormField
                        control={form.control}
                        name="data_nascimento"
                        render={({field}) => (
                            <FormItem className="flex flex-col">
                                <Label className="text-slate-700">Informe a data de emissão</Label>
                                <FormControl>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant={"outline"} className={"w-[200px] pl-3 text-left font-normal"}> 
                                                {field.value ? format(field.value,"PPP",{locale:ptBR}) : "Data de Emissão"}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar  mode="single" onSelect={ (e) => field.onChange(String(e)) } disabled={(date) => {  return date < new Date("1900-01-01")}} initialFocus />
                                    </PopoverContent>
                                </Popover>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                  <FormField
                        control={form.control}
                        name="data_nascimento"
                        render={({field}) => (
                            <FormItem className="flex flex-col">
                                <Label className="text-slate-700">Informe a data de validade</Label>
                                <FormControl>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant={"outline"} className={"w-[240px] pl-3 text-left font-normal"}> 
                                                {field.value ? format(field.value,"PPP",{locale:ptBR}) : "Data de Validade"}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar  mode="single" onSelect={ (e) => field.onChange(String(e)) } disabled={(date) => {  return date < new Date("1900-01-01")}} initialFocus />
                                    </PopoverContent>
                                </Popover>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                        </div>
                </div>
            </div>
           
            <div className="flex justify-between mt-4">
                <DialogClose asChild><Button type="button" variant={"outline"}>Cancelar</Button></DialogClose>
                <Button onClick={() => { setNextStep()}} className="bg-blue-600">Proximo</Button>
            </div>
        </div>
    )
}