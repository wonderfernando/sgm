import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
    return (
    <header className="bg-white w-full p-1 flex justify-between pr-4">
          <Button className="p-2" variant={"ghost"}><Menu/></Button>
          <div className="flex items-center gap-1">
            <small>Fernando</small>
            <img className="rounded-full w-6 h-6" src="https://avatars.githubusercontent.com/u/122708313?s=400&u=43bb79fc06f46ae8dd61b32128e5582a5c0c1473&v=4" alt="" />
          </div>
    </header>)
}