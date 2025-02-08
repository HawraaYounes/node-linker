// actions/nodeFormAction.ts
"use server";

import { NodeFormSchema } from "../zod/node-schema";
import { addNode, updateNode } from "./graphActions";
import { Node } from "reactflow";

export const nodeFormAction = async (prevState: any, formData: FormData) => {
  const nodeNamee = formData.get("nodeNamee") as string;
  const username = formData.get("username") as string;
  const habit = formData.get("habit") as string || '';
  const nodeId = formData.get("nodeId") as string || '';

  const validatedFields = NodeFormSchema.safeParse({ nodeNamee, username, habit });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors as { nodeNamee?: string[], username?: string[], habit?: string[] },
      values: { nodeNamee, username, habit },
    };
  }

  const newNode: Node = {
    id: nodeId || String(Date.now()),
    type: validatedFields.data.habit ? "habit" : "user",
    position: { x: Math.random() * 500, y: Math.random() * 500 },
    data: {
      label: validatedFields.data.nodeNamee,
      username: validatedFields.data.username,
      habit: validatedFields.data.habit,
    },
  };

  if (nodeId) {
    await updateNode(newNode);
  } else {
    await addNode(newNode);
  }

  return { success: true, message: {}, values: { nodeNamee: "", username: "", habit: "" } };
};