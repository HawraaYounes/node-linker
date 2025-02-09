// // actions/graphActions.ts
// "use server";

// import { revalidatePath } from "next/cache";
// import { Node, Edge } from "reactflow";

// let nodes: Node[] = [];
// let edges: Edge[] = [];

// export async function addNode(node: Node): Promise<void> {
//   nodes.push(node);
//   console.log("NODES IN GRAPPH ACTIONS", nodes);

//   if (nodes.length > 1) {

//     const previousNode = nodes[nodes.length - 2];
//     edges.push({
//       id: `e${previousNode.id}-${node.id}`,
//       source: previousNode.id,
//       target: node.id,
//     });
//   }
//   revalidatePath("/")
// }

// export async function fetchNodes(): Promise<Node[]> {
//   return nodes;
// }

// export async function fetchEdges(): Promise<Edge[]> {
//   return edges;
// }