
function Select({
  label,
  options,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <select
        disabled
        className="w-full rounded-lg border bg-gray-50 p-3"
      >
        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;