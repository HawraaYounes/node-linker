// actions/nodeFormAction.ts
"use server";

import { NodeFormSchema } from "../zod/node-schema";
import { addNode, updateNode } from "./graphActions";
import { Node } from "reactflow";

export const nodeFormAction = async (prevState: any, formData: FormData) => {
  console.log("ENTERED NODE FORM ACTION");

  const nodeNamee = formData.get("nodeNamee") as string;
  const username = formData.get("username") as string;
  const habit = formData.get("habit") as string || '';
  const nodeId = formData.get("nodeId") as string || '';
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
      success: false,
      message: validatedFields.error.flatten().fieldErrors as { nodeNamee?: string[], username?: string[], habit?: string[] },
      values: { nodeNamee, username, habit },
    };
  }

  console.log("Validation Succeeded");

  const newNode: Node = {
    id: nodeId || String(Date.now()),
    type: nodeType,
    position: { x, y }, // Use the provided x and y positions
    data: {
      label: validatedFields.data.nodeNamee,
      username: validatedFields.data.username,
      habit: validatedFields.data.habit,
    },
  };

  console.log("New Node:", newNode);

  if (nodeId) {
    await updateNode(newNode);
  } else {
    await addNode(newNode);
  }

  console.log("Node Added/Updated Successfully");

  return { success: true, message: {}, values: { nodeNamee: "", username: "", habit: "" } };
};