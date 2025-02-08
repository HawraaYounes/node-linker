// components/SidePanel.tsx
"use client";

import { useActionState, useState } from "react";
import HabitSelect from "./HabitSelect";
import NodeTypeSelect from "./NodeTypeSelect";
import InputField from "./InputField";
import UserNode from "./UserNode";
import HabitNode from "./HabitNode";
import { nodeFormAction } from "../actions/nodeFormAction";

interface SidePanelProps {
  onAddNode?: () => void;
}

export default function SidePanel({ onAddNode }: SidePanelProps) {
  const [nodeType, setNodeType] = useState<string>("user");
  const [username, setUsername] = useState<string>("");
  const [habit, setHabit] = useState<string>("");

  const [state, nodeFormActionTrigger, isPending] = useActionState(
    nodeFormAction,
    {
      success: false,
      message: {},
      values: { nodeNamee: "", username: "", habit: "" },
    }
  );

  return (
    <div className="p-4 bg-gray-100 border-r w-80 min-h-screen">
      <h2 className="text-lg font-semibold mb-4">Add Node</h2>
      <form action={nodeFormActionTrigger} className="space-y-4">
        <NodeTypeSelect nodeType={nodeType} setNodeType={setNodeType} />

        <InputField
          label="Node Name"
          placeholder="Enter node name"
          name="nodeNamee"
        />
        {state?.message?.nodeNamee && (
          <p className="text-red-500 text-sm">{state.message.nodeNamee[0]}</p>
        )}

        {nodeType === "user" && (
          <>
            <UserNode onChange={setUsername} name="username" />
            {state?.message?.username && (
              <p className="text-red-500 text-sm">{state.message.username[0]}</p>
            )}
          </>
        )}
        {nodeType === "habit" && (
          <>
            <HabitNode habit={habit} onChange={setHabit} />
            {state?.message?.habit && (
              <p className="text-red-500 text-sm">{state.message.habit[0]}</p>
            )}
          </>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isPending ? "Adding..." : "Add Node"}
        </button>

        {state?.success && (
          <p className="mt-3 text-center text-green-600">
            Node added successfully!
          </p>
        )}
      </form>
    </div>
  );
}