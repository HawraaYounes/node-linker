// hooks/useGraph.ts
"use client";

import { useEffect, useState } from "react";
import { Node, Edge } from "reactflow";
import { fetchEdges, fetchNodes } from "../actions/graphActions";

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

  return { nodes, edges };
}