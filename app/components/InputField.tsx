export default function InputField({ label, placeholder, ...rest }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        className="w-full p-2 border rounded"
        placeholder={placeholder}
      //  {...rest}  // Spread the rest of the props (including value and onChange)
      />
    </div>
  );
}