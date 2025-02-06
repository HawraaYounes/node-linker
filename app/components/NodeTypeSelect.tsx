export default function NodeTypeSelect({ nodeType, setNodeType }: NodeTypeSelectProps) {
    return (
      <div>
        <label className="block text-sm font-medium">Node Type</label>
        <select
          value={nodeType}
          onChange={(e) => setNodeType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="user">User Node</option>
          <option value="habit">Habit Node</option>
        </select>
      </div>
    );
  }