
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

function TimeField({
  label,
  selectedTime,
  setSelectedTime,
  disabled = true,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <TimePicker
        onChange={setSelectedTime}
        value={selectedTime}
        disableClock={false}
        clearIcon={null}
        disabled={disabled}
      />
    </div>
  );
}

export default TimeField;