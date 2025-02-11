"use client";
import { useActionState, useEffect, useState } from "react";
import NodeTypeSelect from "./NodeTypeSelect";
import InputField from "./InputField";
import UserNode from "./UserNode";
import HabitNode from "./HabitNode";
import { nodeFormAction } from "../actions/nodeFormAction";
import { SidePanelProps } from "../interfaces/side-panel.interface";

export default function SidePanel({
  selectedNode,
  setSelectedNode,
}: SidePanelProps) {
  const [nodeType, setNodeType] = useState<string>("user");
  const [username, setUsername] = useState<string>("");
  const [habit, setHabit] = useState<string>("");
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const [state, nodeFormActionTrigger, isPending] = useActionState(
    nodeFormAction,
    {
      success: false,
      message: {},
      values: { nodeNamee: "", username: "", habit: "" },
    }
  );

  useEffect(() => {
    if (selectedNode) {
      setIsEditMode(true);
      setNodeType(selectedNode.type || "");
      setUsername(selectedNode.data.username || "");
      setHabit(selectedNode.data.habit || "");
      setX(selectedNode.position.x);
      setY(selectedNode.position.y);
    } else {
      setIsEditMode(false);
      setNodeType("user");
      setUsername("");
      setHabit("");
      setX(Math.random() * 500);
      setY(Math.random() * 500);
    }
  }, [selectedNode]);

  const handleSubmit = async (formData: FormData) => {
    await nodeFormActionTrigger(formData);
    setSelectedNode("");
  };

  return (
    <div className="p-4 bg-gray-100 border-r w-80 min-h-screen">
      <h2 className="text-lg font-semibold mb-4">
        {isEditMode ? "Edit Node" : "Add Node"}
      </h2>
      <form action={handleSubmit} className="space-y-4">
        <NodeTypeSelect nodeType={nodeType} setNodeType={setNodeType} />

        <input type="hidden" name="nodeType" value={nodeType} />
        <input type="hidden" name="x" value={x} />
        <input type="hidden" name="y" value={y} />
        <input
          type="hidden"
          name="id"
          value={(selectedNode && selectedNode?.id) || ""}
        />

        <InputField
          label="Node Name"
          placeholder="Enter node name"
          name="nodeNamee"
          defaultValue={selectedNode && selectedNode?.data.label.split(" (")[0]}
        />
        {state?.message?.nodeNamee && (
          <p className="text-red-500 text-sm">{state.message.nodeNamee[0]}</p>
        )}

        {nodeType === "user" && (
          <>
            <UserNode
              onChange={setUsername}
              name="username"
              defaultValue={username}
            />
            {state?.message?.username && (
              <p className="text-red-500 text-sm">
                {state.message.username[0]}
              </p>
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
          {isPending
            ? isEditMode
              ? "Updating..."
              : "Adding..."
            : isEditMode
            ? "Update Node"
            : "Add Node"}
        </button>

        {state?.success && (
          <p className="mt-3 text-center text-green-600">
            {isEditMode
              ? "Node updated successfully!"
              : "Node added successfully!"}
          </p>
        )}
      </form>
    </div>
  );
}
