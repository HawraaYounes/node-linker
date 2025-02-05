import GraphCanvas from "./components/GraphCanvas";
import SidePanel from "./components/SidePanel";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Graph Canvas (React Flow) */}
      <div className="flex-1">
        <GraphCanvas />
      </div>
      <SidePanel/>
    </div>
  );
}