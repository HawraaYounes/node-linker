"use client";

export default function InputField({ label, placeholder, name, defaultValue, value, onChange }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        className="w-full p-2 border rounded"
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue} 
        value={value} 
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}

