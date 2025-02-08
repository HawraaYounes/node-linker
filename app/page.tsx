// app/page.tsx
"use client";

import ReactFlow, { Background, Controls } from "reactflow";
import SidePanel from "./components/SidePanel";
import useGraph from "./hooks/useGraph";

export default function Home() {
  const { nodes, edges } = useGraph();

  return (
    <div className="flex h-screen">
      <div className="flex-grow">
        <ReactFlow nodes={nodes} edges={edges}>
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      <SidePanel />
    </div>
  );
}