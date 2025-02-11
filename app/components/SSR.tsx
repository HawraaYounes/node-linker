"use client"
import dynamic from "next/dynamic";
import { Node } from "reactflow";

const SidePanel = dynamic(() => import("../components/SidePanel"), {
  ssr: false,
});
type SSRProps = {
  selectedNode: Node | "";  
  setSelectedNode: (node: Node | null) => void;  
};


export default function SSR({ selectedNode, setSelectedNode }: SSRProps) {
  return (
    <div>
      <SidePanel selectedNode={selectedNode} setSelectedNode={setSelectedNode} />
    </div>
  );
}