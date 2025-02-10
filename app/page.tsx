import GraphCanvas from "./components/GraphCanvas";
import SSR from "./components/SSR";
 

export  default function Home() {
  return (
    <div className="flex h-screen">
      
      <div className="flex-grow">
        <GraphCanvas />
      </div>
      <SSR />
    </div>
  );
}
