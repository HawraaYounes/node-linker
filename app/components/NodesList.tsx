"use server";

import ReactFlow, { Background, Node } from "reactflow";
import GraphCanvas from "./GraphCanvas";

export default async function NodesList({ nodes }: { nodes: Node[] }) {
  console.log("NODES IN NODES LIST", nodes);
  return (
    <>
      <ReactFlow nodes={nodes}>
      <Background />

      </ReactFlow>
    </>
  );
}
