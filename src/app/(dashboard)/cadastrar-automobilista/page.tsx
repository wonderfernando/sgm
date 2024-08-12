import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Search, Table } from "lucide-react";
const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
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
            <div>
                <Table>
                    
                </Table>
            </div>
        </div>
    )
}