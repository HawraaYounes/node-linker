import GraphCanvas from "./components/GraphCanvas";
 

export  default function Home() {
  return (
    <div className=" h-screen">
      <div className="flex-grow">
        <GraphCanvas />
      </div>
    </div>
  );
}
