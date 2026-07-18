
function Text({
  label,
  value,
  placeholder,
  readOnly = true,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        className="w-full rounded-lg border bg-gray-50 p-3"
      />
    </div>
  );
}

export default Text;

/*
<Text
    label="HCP Name"
    placeholder="Search or select HCP..."
/>
*/