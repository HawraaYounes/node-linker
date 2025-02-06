"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import HabitSelect from "./HabitSelect";
import NodeTypeSelect from "./NodeTypeSelect";
import InputField from "./InputField";
import { habits } from "../constants";
import UserNode from "./UserNode";
import HabitNode from "./HabitNode";

interface SidePanelProps {
  onAddNode?: () => void;
}

// Step 3: Create the Zod Schema for Validation
const schema = z.object({
  nodeName: z.string().min(3).max(20, "Node name must be between 3 and 20 characters").nonempty("Node name is required"),
});

type FormData = z.infer<typeof schema>;

export default function SidePanel({ onAddNode }: SidePanelProps) {
  const [nodeType, setNodeType] = useState<string>("user");
  const [username, setUsername] = useState<string>("");
  const [habit, setHabit] = useState<string>("");

  // Step 4: Initialize react-hook-form with validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted successfully with data: ", data);
    if (onAddNode) {
      onAddNode(); // Pass to parent callback if needed
    }
  };

  return (
    <div className="p-4 bg-gray-100 border-r w-80 min-h-screen">
      <h2 className="text-lg font-semibold mb-4">Add Node</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <NodeTypeSelect nodeType={nodeType} setNodeType={setNodeType} />
        
        {/* Use register for the input field */}
        <InputField
          label="Node Name"
          placeholder="Enter node name"
          {...register("nodeName")}  // Spread the register object directly
        />
        {errors.nodeName && <p className="text-red-500 text-sm">{errors.nodeName.message}</p>}

        {nodeType === "user" && (
          <UserNode username={username} onChange={setUsername} />
        )}
        {nodeType === "habit" && <HabitNode habit={habit} onChange={setHabit} />}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Node
        </button>
      </form>
    </div>
  );
}
