import InputField from "./InputField";

export default function UserNode({ username, onChange }: UserNodeProps) {
  return (
    <div className="p-4 bg-white border rounded shadow">
      <h3 className="text-lg font-semibold mb-2">User Node</h3>
      <InputField
        label="Username"
        placeholder="Enter username"
      />
    </div>
  );
}
