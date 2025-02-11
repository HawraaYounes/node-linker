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
import { NodesListProps } from "../interfaces/nodes-list.interface";

export default function NodesList({
  initialNodes,
  initialEdges,
}: NodesListProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | "">("");  

  useEffect(() => {
    setNodes((prevNodes) => [...initialNodes]);
    setEdges((prevEdges) => [...initialEdges]);
  }, [initialNodes, initialEdges]);

  const onNodeClick = (event: any, node: Node) => {
    setSelectedNode(node);  // Set it to the Node object
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
