import { NodeFormSchema } from "../zod/node-schema";


export const nodeFormAction = async (_: any, formData: FormData) => {
    const nodeNamee = formData.get("nodeNamee") as string;
    const username = formData.get("username") as string;
  
    const validatedFields = NodeFormSchema.safeParse({ nodeNamee, username });
  
    if (!validatedFields.success) {
      return {
        success: false,
        message: validatedFields.error.flatten().fieldErrors as { nodeNamee?: string[], username?: string[] },
        values: { nodeNamee, username },
      };
    }
  
    console.log("Form Submitted Successfully:", validatedFields.data);
    return { success: true, message: {}, values: { nodeNamee: "", username: "" } };
  };
