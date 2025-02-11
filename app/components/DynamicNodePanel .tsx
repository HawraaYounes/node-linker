"use client";
import dynamic from "next/dynamic";
import { SidePanelProps } from "../interfaces/side-panel.interface";

const SidePanel = dynamic(() => import("../components/SidePanel"), {
  ssr: false,
});

export default function DynamicNodePanel ({ selectedNode, setSelectedNode }: SidePanelProps) {
  return (
    <div>
      <SidePanel
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
    </div>
  );
}
