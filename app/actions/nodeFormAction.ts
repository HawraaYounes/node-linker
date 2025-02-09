// actions/nodeFormAction.ts
"use server";

import { revalidatePath } from "next/cache";
import { NodeFormSchema } from "../zod/node-schema";
// import { addNode } from "./graphActions"; // Import addNode
import { Edge, Node } from "reactflow";
let nodes: Node[] = [];
let edges: Edge[] = [];
export const nodeFormAction = async (prevState: any, formData: FormData) => {
  console.log("ENTERED NODE FORM ACTION");

  const nodeNamee = formData.get("nodeNamee") as string;
  const username = formData.get("username") as string;
  const habit = formData.get("habit") as string || '';
  const nodeType = formData.get("nodeType") as string || 'user';
  const x = parseFloat(formData.get("x") as string); // Get x position from form data
  const y = parseFloat(formData.get("y") as string); // Get y position from form data

  console.log("Form Values:", { nodeNamee, username, habit, nodeType, x, y });

  // Validate based on node type
  const validatedFields = NodeFormSchema.safeParse({
    nodeNamee,
    username: nodeType === "user" ? username : undefined,
    habit: nodeType === "habit" ? habit : undefined,
  });

  if (!validatedFields.success) {
    console.log("Validation Failed:", validatedFields.error);
    return {
      success: false, // Ensure this is returned
      message: validatedFields.error.flatten().fieldErrors as { nodeNamee?: string[], username?: string[], habit?: string[] },
      values: { nodeNamee, username, habit },
    };
  }

  console.log("Validation Succeeded");

  const newNode: Node = {
    id: "11", // Generate a unique ID
    type: nodeType,
    position: { x, y }, // Use the provided x and y positions
    data: {
      label: validatedFields.data.nodeNamee,
      username: validatedFields.data.username,
      habit: validatedFields.data.habit,
    },
  };

  console.log("New Node:", newNode);

  nodes.push(newNode);
  console.log("NODES IN GRAPPH ACTIONS", nodes);

  if (nodes.length > 1) {

    const previousNode = nodes[nodes.length - 2];
    edges.push({
      id: `e${previousNode.id}-${newNode.id}`,
      source: previousNode.id,
      target: newNode.id,
    });
  }
  revalidatePath("/")
  console.log("Node Added Successfully");

  return { success: true, message: {}, values: { nodeNamee: "", username: "", habit: "" } };
};




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

export async function fetchNodes(): Promise<Node[]> {
  return nodes;
}

export async function fetchEdges(): Promise<Edge[]> {
  return edges;
}