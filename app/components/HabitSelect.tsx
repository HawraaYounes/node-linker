export default function HabitSelect({
  onChange,
  habits,
  habit = "",
  name
}: HabitSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium">Select Habit</label>
      <select
        name={name}
        value={habit}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Select a habit</option>
        {habits.map((habit) => (
          <option key={habit.value} value={habit.value}>
            {habit.label}
          </option>
        ))}
      </select>
    </div>
  );
}
