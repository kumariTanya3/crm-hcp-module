
import { FaSearch } from "react-icons/fa";

function Search({
  label,
  placeholder,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <div className="relative">

        <input
          readOnly
          placeholder={placeholder}
          className="w-full rounded-lg border bg-gray-50 p-3 pr-10"
        />

        <FaSearch
          className="absolute right-3 top-4 text-gray-400"
        />

      </div>
    </div>
  );
}

export default Search;