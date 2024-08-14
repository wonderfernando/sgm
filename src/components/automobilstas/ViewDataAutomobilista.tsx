"use client"
import { useFormContext } from "react-hook-form"
import { AutomobilistaType } from "./AutomobilistaForm"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { Eye } from "lucide-react"
import { IStep } from "./FirstForm"


export default function ViewDataAutomobilista({setNextStep,setPreviusStep} : IStep) {
    const form = useFormContext<AutomobilistaType>()
    return(
<div>
     
     <Table className="bg-white mt-8  rounded-md">
       <TableHeader>
           <TableRow>
                <TableHead className="w-[200px]">Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>BI</TableHead>
                <TableHead>N Carta</TableHead>
                <TableHead>Data de emissão</TableHead>
                    </TableRow>
       </TableHeader>
       <TableBody>
         
           <TableRow key={form.watch("name")}>
               <TableCell className="font-medium">{form.watch("name")}</TableCell>
               <TableCell>{form.watch("email")}</TableCell>
               <TableCell>{form.watch("telemovel")}</TableCell>
               <TableCell >{form.watch("bi")}</TableCell>
               <TableCell >{form.watch("numero_carta")}</TableCell>
               <TableCell >{form.watch("data_emissao_carta_conducao")}</TableCell>
             </TableRow>
      
       </TableBody>
    
       </Table>

       <div className="flex justify-between mt-4">
            <Button onClick={() => setPreviusStep()} variant={"outline"}>Voltar</Button>
            <Button onClick={() => setNextStep()} className="bg-green-800 font-bold">Salvar</Button>
        </div>
   </div>
    )
}