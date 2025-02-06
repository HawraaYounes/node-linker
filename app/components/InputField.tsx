export default function InputField({ label, placeholder, value, onChange }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        className="w-full p-2 border rounded"
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
}
