import GraphCanvas from "./components/GraphCanvas";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Graph Canvas (React Flow) */}
      <div className="flex-1">
        <GraphCanvas />
      </div>
    </div>
  );
}