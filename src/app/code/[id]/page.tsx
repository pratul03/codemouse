import Navbar from "@/components/navbar";
import dynamic from "next/dynamic";

const CodeEditor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex w-screen flex-col h-screen bg-background">
      <div className="h-12 flex">
        <Navbar />
      </div>
      <div className="w-screen flex flex-grow">
        <CodeEditor />
      </div>
    </div>
  );
}
