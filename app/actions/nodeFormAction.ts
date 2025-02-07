import { NodeFormSchema } from "../zod/node-schema";


export const nodeFormAction = async (_: any, formData: FormData) => {

    const nodeNamee = formData.get("nodeNamee") as string;
    const validatedFields = NodeFormSchema.safeParse({ nodeNamee });

    if (!validatedFields.success) {
        return {
            success: false,
            message: validatedFields.error.flatten().fieldErrors as { nodeNamee?: string[] },
            values: { nodeNamee }, 
        };
    }

    console.log("Form Submitted Successfully:", validatedFields.data);
    return { success: true, message: {}, values: { nodeNamee: "" } }; 
};
