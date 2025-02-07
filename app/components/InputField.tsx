export default function InputField({ label, placeholder, name }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        className="w-full p-2 border rounded"
        placeholder={placeholder}
        name={name}
      //  {...rest}  // Spread the rest of the props (including value and onChange)
      />
    </div>
  );
}