"use client";
import ReactFlow, {
  Background,
  Edge,
  Node,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { useEffect, useState } from "react";
import SSR from "./SSR";

export default function NodesList({
  initialNodes,
  initialEdges,
}: {
  initialNodes: Node[];
  initialEdges: Edge[];
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState('');

  useEffect(() => {
    setNodes((prevNodes) => [...initialNodes]);
    setEdges((prevEdges) => [...initialEdges]);
  }, [initialNodes, initialEdges]);

  const onNodeClick = (event: any, node: Node) => {
    setSelectedNode(node);
  };

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
      >
        <Background />
      </ReactFlow>
      <SSR selectedNode={selectedNode} setSelectedNode={setSelectedNode} />
    </>
  );
}