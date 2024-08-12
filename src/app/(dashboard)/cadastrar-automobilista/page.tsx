import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Table } from "@/components/ui/table";
import { Eye, PlusCircle, Search } from "lucide-react";
const auto = [
    {
      name: "Gustavo Junior",
      email: "gustavo@gmail.com",
      phone: "921312313",
      bi: "007021321LA23",
    }, {
        name: "Gustavo Junior",
        email: "gustavo@gmail.com",
        phone: "921312313",
        bi: "007021321LA23",
      }, {
        name: "Gustavo Junior",
        email: "gustavo@gmail.com",
        phone: "921312313",
        bi: "007021321LA23",
      }, {
        name: "Gustavo Junior",
        email: "gustavo@gmail.com",
        phone: "921312313",
        bi: "007021321LA23",
      }, {
        name: "Gustavo Junior",
        email: "gustavo@gmail.com",
        phone: "921312313",
        bi: "007021321LA23",
      }, {
        name: "Gustavo Junior",
        email: "gustavo@gmail.com",
        phone: "921312313",
        bi: "007021321LA23",
      }, {
        name: "Gustavo Junior",
        email: "gustavo@gmail.com",
        phone: "921312313",
        bi: "007021321LA23",
      }, {
        name: "Gustavo Junior",
        email: "gustavo@gmail.com",
        phone: "921312313",
        bi: "007021321LA23",
      }, {
        name: "Gustavo Junior",
        email: "gustavo@gmail.com",
        phone: "921312313",
        bi: "007021321LA23",
      },
]
export default function Automobilista() {
    return(
        <div className="p-4">
            <h1 className="text-lg text-slate-700 font-bold">Automobilistas</h1>
            <div className="flex items-center justify-between">
                <div className="flex gap-1">
                    <Input placeholder="Nome do automobilistas"/>
                    <Input placeholder="Email do automobilistas"/>
                    <Button variant={"ghost"} className="text-muted-foreground flex gap-1"><Search className="w-4 h-4"/> Filtrar resultados</Button>
                </div>
                <Button className="flex gap-1 bg-foreground"><PlusCircle className="w-5 h-5"/>Cadastrar</Button>
            </div>
            <div className="w-full shadow-sm rounded-md">
     
                <Table className="bg-white mt-8  rounded-md">
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[200px]">Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>BI</TableHead>
                    <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {auto.map((automobilista) => (
                    <TableRow key={automobilista.name}>
                        <TableCell className="font-medium">{automobilista.name}</TableCell>
                        <TableCell>{automobilista.email}</TableCell>
                        <TableCell>{automobilista.phone}</TableCell>
                        <TableCell >{automobilista.bi}</TableCell>
                        <TableCell><Button variant={"outline"} className=" hover:bg-muted"><Eye className="w-5 h-5 "/></Button></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3}><Button>Anterior</Button></TableCell>
                    <TableCell className="text-right"><Button>Proximo</Button></TableCell>
                    </TableRow>
                </TableFooter>
                </Table>
         </div>
        </div>
    )
}