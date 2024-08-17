"use client"
import { useFormContext } from "react-hook-form"
import { AutomobilistaType } from "./AutomobilistaForm"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { Eye } from "lucide-react"
import { IStep } from "./FirstForm"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"


export default function ViewDataAutomobilista({ setNextStep, setPreviusStep }: IStep) {
    const form = useFormContext<AutomobilistaType>()
    return (
        <div>
            <Table className="bg-white mt-8  rounded-md">    
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableCell>{form.watch("name")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Nacionalidade</TableHead>
                        <TableCell>{form.watch("pais")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Data de Nascimento</TableHead>
                        <TableCell>{format(form.watch("data_nascimento"),"PPP",{locale:ptBR})}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>BI</TableHead>
                        <TableCell >{form.watch("bi")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Data de emissâo do bi</TableHead>
                        <TableCell >{format(form.watch("data_emissao_bi"),"PPP", {locale:ptBR})}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Data de validade do bi</TableHead>
                        <TableCell >{format(form.watch("data_validade_bi"),"PPP", {locale:ptBR})}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Email</TableHead>
                        <TableCell >{form.watch("email")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Email alternativo</TableHead>
                        <TableCell >{form.watch("email_alternativo")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Telefone</TableHead>
                        <TableCell >{form.watch("telemovel")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Telefone alternativo</TableHead>
                        <TableCell >{form.watch("telemovel_alternativo")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Provincia</TableHead>
                        <TableCell >{form.watch("provincia")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Municipio</TableHead>
                        <TableCell >{form.watch("municipio")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Endereco</TableHead>
                        <TableCell >{form.watch("endereco")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>N da carta</TableHead>
                        <TableCell >{form.watch("numero_carta")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>N da via</TableHead>
                        <TableCell >{form.watch("numero_via")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>N da via</TableHead>
                        <TableCell >{form.watch("numero_via")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Local de emissâo</TableHead>
                        <TableCell >{form.watch("local_emissao")}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>data de emissâo</TableHead>
                        <TableCell >{format(form.watch("data_emissao_carta_conducao"),"PPP",{locale:ptBR})}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>data de validade</TableHead>
                        <TableCell >{format(form.watch("data_validade_carta"),"PPP",{locale:ptBR})}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Categoria</TableHead>
                        <TableCell >{form.watch("categoria")}</TableCell>
                    </TableRow>
            </Table>

            <div className="flex justify-between mt-4">
                <Button onClick={() => setPreviusStep()} variant={"outline"}>Voltar</Button>
                <Button onClick={() => setNextStep()} className="bg-green-800 font-bold">Salvar</Button>
            </div>
        </div>
    )
}