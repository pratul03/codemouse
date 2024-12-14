import { Clock, PencilIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="h-12 px-2 flex items-center justify-between w-full border-b border-border">
      <div className="flex items-center space-x-4">
        <button className="ring-offset-2 ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none rounded-sm">
          <Clock className="h-10 w-10" />
        </button>
        <div className="flex items-center text-sm font-medium">
          My react project{" "}
          <div className="h-7 w-7 flex ml-1 items-center justify-center transition-colors bg-transparent hover:bg-muted-foreground/25 rounded-md">
            <PencilIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
