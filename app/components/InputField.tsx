"use client";

export default function InputField({ label, placeholder, name, defaultValue, value, onChange }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        className="w-full p-2 border rounded"
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue} // For uncontrolled inputs
        value={value} // For controlled inputs
        onChange={(e) => onChange?.(e.target.value)} // Only call onChange if it exists
      />
    </div>
  );
}

