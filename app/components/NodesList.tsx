"use client";
import ReactFlow, {
  Background,
  Edge,
  Node,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { useEffect, useState } from "react";

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
    setNodes((prevNodes) => [...initialNodes]);
    setEdges((prevEdges) => [...initialEdges]);
  }, [initialNodes,initialEdges]);
  
  console.log("NODES IN NODES LIST", nodes);
  
  return (
    <>
      <ReactFlow nodes={nodes}   edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}>
        <Background />
      </ReactFlow>
    </>
  );
}
