"use client";

import { useEffect, useState } from "react";
import { Node, Edge } from "reactflow";
import "reactflow/dist/style.css";
import { fetchEdges, fetchNodes, addNode } from "../actions/graphActions"; // Import addNode

export default function useGraph() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    async function loadNodesAndEdges() {
      const nodesData = await fetchNodes();
      const edgesData = await fetchEdges();
      setNodes(nodesData);
      setEdges(edgesData);
    }

    loadNodesAndEdges();
  }, []);

  // Handle adding a new node
  const handleAddNode = async (newNode: Node) => {
    await addNode(newNode); // Add the node to the storage (or database)
    setNodes([...nodes, newNode]); // Update the local state to re-render the nodes
  };

  return { nodes, edges, handleAddNode };
}
