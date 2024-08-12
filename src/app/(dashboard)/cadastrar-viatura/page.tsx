import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";

export default function Viaturas() {
    return(
        <div>
            <h1>Automobilistas</h1>
            <div>
                <div>
                    <Input placeholder="Nome do automobilistas"/>
                    <Input placeholder="Email do automobilistas"/>
                </div>
                <Button className="flex gap-1 bg-foreground"><PlusCircle className="w-5 h-5"/>Cadastrar</Button>
            </div>
        </div>
    )
}