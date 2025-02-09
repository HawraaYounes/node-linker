"use client";
import ReactFlow, {
  Background,
  Edge,
  Node,
  useEdgesState,
  useNodesState,
} from "reactflow";
import GraphCanvas from "./GraphCanvas";
import { useEffect, useState } from "react";
import { fetchNodes } from "../actions/nodeFormAction";

export default function NodesList({
  initialNodes,
  initialEdges,
}: {
  initialNodes: Node[];
  initialEdges: Edge[];
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  console.log()
  useEffect(() => {
   // const newNodes = await fetchNodes(); // Fetch new nodes from server

    // Append new nodes to existing ones
    setNodes((prevNodes) => [...initialNodes]);
    setEdges((prevEdges) => [...initialEdges]);
  }, [initialNodes,initialEdges]);

  
  
  console.log("NODES IN NODES LIST", nodes);
  // Update nodes when a change occurs (e.g., drag)
  return (
    <>
      <ReactFlow nodes={nodes}   edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}>
        <Background />
      </ReactFlow>
    </>
  );
}
