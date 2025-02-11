"use client"
import dynamic from "next/dynamic";
import { Node } from "reactflow";

const SidePanel = dynamic(() => import("../components/SidePanel"), {
  ssr: false,
});

export default function SSR({ selectedNode, setSelectedNode }: { selectedNode: Node | '', setSelectedNode: (node: Node | null) => void }) {
  return (
    <div>
      <SidePanel selectedNode={selectedNode} setSelectedNode={setSelectedNode} />
    </div>
  );
}