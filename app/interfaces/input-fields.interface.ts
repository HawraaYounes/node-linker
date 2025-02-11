interface InputFieldProps {
  label: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}