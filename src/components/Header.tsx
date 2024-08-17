import { Bell, Menu } from "lucide-react";
import { Button } from "./ui/button";
import SheetMobile from "./SheetMobile";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
interface ISideBar{
  toogleSideBar: () => void,
}
export default function Header({toogleSideBar} : ISideBar) {
    return (
    <header className="sticky z-50 shadow-sm top-0 left-0 bg-white w-full p-1 flex justify-between pr-4 h-20 items-center">
          <Button onClick={toogleSideBar} className="p-2 max-md:hidden" variant={"ghost"}><Menu className="w-8 h-8"/></Button>
          <SheetMobile/>
          <div className="flex items-center gap-1">
            <Button variant={"ghost"}><Bell className="w-5 h-5"/></Button>
              <small>Fernando</small>
              <Avatar>
                <AvatarImage src="https://github.com/wonderfernando.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> 
          </div>
    </header>)
}