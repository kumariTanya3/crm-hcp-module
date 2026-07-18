
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateField({
  label,
  selectedDate,
  setSelectedDate,
  disabled = true,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <DatePicker
        selected={selectedDate}
        onChange={setSelectedDate}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select Date"
        className="w-full rounded-lg border bg-gray-50 p-3"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        disabled={disabled}
      />
    </div>
  );
}

export default DateField;