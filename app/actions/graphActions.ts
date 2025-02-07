"use server";

import { Node, Edge } from "reactflow";

let nodes: Node[] = [];
let edges: Edge[] = [];

export async function fetchNodes(): Promise<Node[]> {
  return nodes;
}

export async function fetchEdges(): Promise<Edge[]> {
  return edges;
}

export async function addNode(node: Node): Promise<void> {
  nodes.push(node);
  if (nodes.length > 1) {
    const previousNode = nodes[nodes.length - 2];
    edges.push({
      id: `e${previousNode.id}-${node.id}`,
      source: previousNode.id,
      target: node.id,
    });
  }
}

export async function updateNode(updatedNode: Node): Promise<void> {
  nodes = nodes.map((node) =>
    node.id === updatedNode.id ? updatedNode : node
  );
}

export async function linkNodes(sourceId: string, targetId: string): Promise<void> {
  edges.push({
    id: `e${sourceId}-${targetId}`,
    source: sourceId,
    target: targetId,
  });
}