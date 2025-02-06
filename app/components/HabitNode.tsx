import { habits } from "../constants";
import HabitSelect from "./HabitSelect";

export default function HabitNode({ habit, onChange }: HabitNodeProps) {
  return (
    <div className="p-4 bg-white border rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Habit Node</h3>
      <HabitSelect value={habit} onChange={onChange} habits={habits} />
    </div>
  );
}