interface HabitSelectProps {
  onChange: (value: string) => void;
  habit: string,
  name: string,
  habits: { value: string; label: string }[];
}