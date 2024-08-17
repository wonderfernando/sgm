"use client"
import { FormProvider, useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"
import FirstForm from "./FirstForm"
import { use, useEffect, useState } from "react"
import SecondForm from "./SecondForm"
import ThreeForm from "./ThreeForm"
import { Progress } from "../ui/progress"
import ViewDataAutomobilista from "./ViewDataAutomobilista"


const scheemaAutomobilista = z.object({
    name: z.string(),
    email: z.string().email("O email não é válido"),
    email_alternativo: z.string().email(),
    data_nascimento: z.string(),
    pais: z.string(),
    bi: z.string().min(10, "informe um numero de bi valido"),
    telemovel: z.string(),
    telemovel_alternativo: z.string(),
    endereco: z.string(),
    categoria:z.string(),
    data_emissao_carta_conducao: z.string(),
    data_primeira_emissao_carta: z.string(),
    numero_carta: z.string(),
    data_validade_carta: z.string(),
    local_emissao: z.string(),
    numero_via: z.string(),
    data_emissao_bi: z.date(),
    data_validade_bi: z.date(),
    municipio: z.string(),
    provincia: z.string()
})
export type AutomobilistaType = z.infer<typeof scheemaAutomobilista>

export default function AutomobilistaForm() {
    const form = useForm<AutomobilistaType>({
        resolver: zodResolver(scheemaAutomobilista)
    })
    function handleSubmitAutomobilista(data:any) {
        console.log(data)
    }

    const [step, setStep] = useState(1)

    const[progressBar,setProgressBar] =  useState(0)

    function setPreviusStep() {
        setStep( (state) => {
            if (state > 1 )
                return state - 1;
            return 0
        })
    }
    function setNextStep() {
        setStep( (state) => {
            if (state < 4)
                return state + 1;
            return 0
        })
    }
    function handleSaveAutomobilista() {
        
    }
    return (
        <FormProvider {...form}>
 
            <form onSubmit={form.handleSubmit(handleSubmitAutomobilista)}>
                { step == 1 && <FirstForm setNextStep={setNextStep} setPreviusStep={setPreviusStep} /> }
                { step == 2 && <SecondForm  setNextStep={setNextStep} setPreviusStep={setPreviusStep}/> }
                { step == 3 && <ThreeForm setNextStep={setNextStep} setPreviusStep={setPreviusStep}/> }
                { step == 4 && <ViewDataAutomobilista setNextStep={setNextStep} setPreviusStep={setPreviusStep}/> }
            </form>
        </FormProvider>
    )
}