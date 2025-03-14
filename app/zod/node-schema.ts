import { habits } from "@/public/data";
import { z } from "zod";

export const NodeFormSchema = z.object({
  nodeNamee: z.string().min(3, "Node name must be at least 3 characters").max(20, "Max 20 characters"),
  username: z.string().min(3, "Username must be at least 3 characters").max(50, "Max 50 characters").optional(),
  habit: z
    .string()
    .min(1, "Habit is required")
    .refine(
      (val) => habits.some((habit) => habit.value === val),
      {
        message: "Invalid habit selected",
      }
    )
    .optional(),
}).superRefine((data, ctx) => {
  if (!data.username && !data.habit) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Either username or habit must be provided",
      path: ["username"],
    });
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Either username or habit must be provided",
      path: ["habit"],
    });
  }
});