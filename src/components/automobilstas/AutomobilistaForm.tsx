"use client"
import { FormProvider, useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"
import FirstForm from "./FirstForm"
import { useState } from "react"
import SecondForm from "./SecondForm"


const scheemaAutomobilista = z.object({
    name: z.string(),
    email: z.string().email("O email não é válido"),
    data_nascimento: z.string(),
    pais: z.string()
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

    function setPreviusStep() {
        setStep( (state) => {
            if (state > 1 )
                return state - 1;
            return 0
        })
    }
    function setNextStep() {
        setStep( (state) => {
            if (state < 3)
                return state + 1;
            return 0
        })
    }
    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitAutomobilista)}>
                { step == 1 && <FirstForm setNextStep={setNextStep} setPreviusStep={setPreviusStep} /> }
                { step == 2 && <SecondForm  setNextStep={setNextStep} setPreviusStep={setPreviusStep}/> }
                { step == 3 && <FirstForm setNextStep={setNextStep} setPreviusStep={setPreviusStep}/> }
            </form>
        </FormProvider>
    )
}