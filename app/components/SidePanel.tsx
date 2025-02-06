"use client"
import { useState } from "react";
import HabitSelect from "./HabitSelect";
import NodeTypeSelect from "./NodeTypeSelect";
import InputField from "./InputField";
import { habits } from "../constants";
import UserNode from "./UserNode";
import HabitNode from "./HabitNode";

interface SidePanelProps {
  onAddNode?: () => void;
}

export default function SidePanel({ onAddNode }: SidePanelProps) {
  const [nodeType, setNodeType] = useState<string>("user");
  const [nodeName, setNodeName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [habit, setHabit] = useState<string>("");

  const handleNodeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodeName(e.target.value);
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handleHabitChange = (value: string) => {
    setHabit(value);
  };

  return (
    <div className="p-4 bg-gray-100 border-r w-80 min-h-screen">
      <h2 className="text-lg font-semibold mb-4">Add Node</h2>
      <div className="space-y-4">
        <NodeTypeSelect nodeType={nodeType} setNodeType={setNodeType} />
        <InputField
          label="Node Name"
          placeholder="Enter node name"
          value={nodeName}
          onChange={handleNodeNameChange}
        />

        {nodeType === "user" && (
          <UserNode username={username} onChange={handleUsernameChange} />
        )}
        {nodeType === "habit" && <HabitNode habit={habit} onChange={handleHabitChange} />}

        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={onAddNode}
        >
          Add Node
        </button>
      </div>
    </div>
  );
}
