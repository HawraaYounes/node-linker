import { NodeFormSchema } from "../zod/node-schema";


export const nodeFormAction = async (_: any, formData: FormData) => {
    console.log(",111111dmdndndn")

  const nodeNamee = formData.get("nodeNamee") as string;
  console.log(",,dmdndndn")

  const validatedFields = NodeFormSchema.safeParse({ nodeNamee });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors as { nodeNamee?: string[] },
      values: { nodeNamee }, // Preserve input values
    };
  }

  console.log("Form Submitted Successfully:", validatedFields.data);
  return { success: true, message: {}, values: { nodeNamee: "" } }; // Ensure message exists
};
