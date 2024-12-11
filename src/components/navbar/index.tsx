import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="h-12 px-2 flex items-center justify-between">
      <div className="flex items-center">
        <Button variant={"outline"} size={"sm"}>
          <ChevronLeftIcon className="w-4 h-4" /> Go Home
        </Button>
      </div>
    </div>
  );
}
