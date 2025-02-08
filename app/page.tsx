// app/page.tsx
"use client";

import dynamic from "next/dynamic";
import ReactFlow, { Background, Controls } from "reactflow";
import useGraph from "./hooks/useGraph";

// Dynamically import SidePanel with SSR disabled
const SidePanel = dynamic(() => import("./components/SidePanel"), { ssr: false });

export default function Home() {
  const { nodes, edges } = useGraph();
  console.log("nodes in page", nodes);

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