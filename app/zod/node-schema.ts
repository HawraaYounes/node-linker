import { z } from "zod";
import { habits } from "../constants";

export const NodeFormSchema = z.object({
  nodeNamee: z.string().min(3, "Node name must be at least 3 characters").max(20, "Max 20 characters"),
  username: z.string().min(3, "Username must be at least 3 characters").max(50, "Max 50 characters"),
  habit: z
      .string()
      .min(1, "Habit is required")
      .refine(
        (val) => habits.some((habit) => habit.value === val),
        {
          message: "Invalid habit selected",
        }
      ),
});
