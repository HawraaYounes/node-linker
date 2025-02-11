"use server";
import "reactflow/dist/style.css";
import { fetchEdges, fetchNodes } from "../actions/nodeFormAction";
import NodesList from "./NodesList";

export default async function GraphCanvas() {
  const nodes = await fetchNodes();
  const edges = await fetchEdges();
  return (
    <div className="flex h-screen">
      <NodesList initialNodes={nodes} initialEdges={edges} />
    </div>
  );
}
