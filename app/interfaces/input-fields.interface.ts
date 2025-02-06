// components/InputField.tsx
interface InputFieldProps {
  label: string;
  placeholder: string;
  // No need for value or onChange here since react-hook-form handles that
 // [key: string]: any;  // Allow additional props (like value, onChange, etc.)
}