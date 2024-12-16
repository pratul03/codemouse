import {
  FileIcon,
  FilePlusIcon,
  Folder,
  FolderPlusIcon,
  Search,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-full w-56 flex flex-col items-start p-2">
      <div className="flex w-full items-center justify-between h-8 mb-1">
        <div className="text-muted-foreground">Explorer</div>
        <div className="flex space-x-1">
          <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-sm">
            <FilePlusIcon className="h-4 w-4" />
          </div>
          <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-sm">
            <FolderPlusIcon className="h-4 w-4" />
          </div>
          <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-sm">
            <Search className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <FileIcon className="h-4 w-4" />
          index.html
        </div>
        <div>
          <Folder className="h-4 w-4" />
          styles
        </div>
      </div>
    </div>
  );
}
