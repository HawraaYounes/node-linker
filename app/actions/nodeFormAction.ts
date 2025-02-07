import { NodeFormSchema } from "../zod/node-schema";

export const nodeFormAction = async (_: any, formData: FormData) => {
    const nodeNamee = formData.get("nodeNamee") as string;
    const username = formData.get("username") as string;
    const habit = formData.get("habit") as string || ''; 

    const validatedFields = NodeFormSchema.safeParse({ nodeNamee, username, habit });

    if (!validatedFields.success) {
      return {
        success: false,
        message: validatedFields.error.flatten().fieldErrors as { nodeNamee?: string[], username?: string[], habit?: string[] },
        values: { nodeNamee, username, habit },
      };
    }

    console.log("Form Submitted Successfully:", validatedFields.data);
    return { success: true, message: {}, values: { nodeNamee: "", username: "", habit: "" } };
};
