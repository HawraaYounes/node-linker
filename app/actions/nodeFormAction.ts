"use server";
import { revalidatePath } from "next/cache";
import { NodeFormSchema } from "../zod/node-schema";
import { Edge, Node } from "reactflow";
let nodes: Node[] = [];
let edges: Edge[] = [];

export const nodeFormAction = async (prevState: any, formData: FormData) => {

  const id = formData.get("id") as string;
  const nodeNamee = formData.get("nodeNamee") as string;
  const username = formData.get("username") as string;
  const habit = formData.get("habit") as string || '';
  const nodeType = formData.get("nodeType") as string || 'user';
  const x = parseFloat(formData.get("x") as string);
  const y = parseFloat(formData.get("y") as string);

  console.log("Form Values:", { nodeNamee, username, habit, nodeType, x, y });

  const validatedFields = NodeFormSchema.safeParse({
    nodeNamee,
    username: nodeType === "user" ? username : undefined,
    habit: nodeType === "habit" ? habit : undefined,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors as { nodeNamee?: string[], username?: string[], habit?: string[] },
      values: { nodeNamee, username, habit },
    };
  }

  if (id) {
    // Update existing node
    const nodeIndex = nodes.findIndex(node => node.id === id);
    if (nodeIndex !== -1) {
      nodes[nodeIndex] = {
        ...nodes[nodeIndex],
        type: nodeType,
        position: { x, y },
        data: {
          label: nodeType === "user"
            ? `${validatedFields.data.nodeNamee} (${validatedFields.data.username})`
            : `${validatedFields.data.nodeNamee} (${validatedFields.data.habit})`,
          username: validatedFields.data.username,
          habit: validatedFields.data.habit,
        },
      };
    }
  } else {
    // Add new node
    const newNode: Node = {
      id: String(Date.now()),
      type: nodeType,
      position: { x, y },
      data: {
        label: nodeType === "user"
          ? `${validatedFields.data.nodeNamee} (${validatedFields.data.username})`
          : `${validatedFields.data.nodeNamee} (${validatedFields.data.habit})`,
        username: validatedFields.data.username,
        habit: validatedFields.data.habit,
      },
    };

    nodes.push(newNode);

    if (nodes.length > 1) {
      const previousNode = nodes[nodes.length - 2];
      edges.push({
        id: `e${previousNode.id}-${newNode.id}`,
        source: previousNode.id,
        target: newNode.id,
      });
    }
  }

  revalidatePath("/");
  return { success: true, message: {}, values: { nodeNamee: "", username: "", habit: "" } };
};

export async function fetchNodes(): Promise<Node[]> {
  return nodes;
}

export async function fetchEdges(): Promise<Edge[]> {
  return edges;
}