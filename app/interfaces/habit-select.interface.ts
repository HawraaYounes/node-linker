interface HabitSelectProps {
  value: string;
  onChange: (value: string) => void;
  habits: { value: string; label: string }[];
}