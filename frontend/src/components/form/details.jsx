import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

function Details() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("09:00");

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Interaction Details
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="mb-2 block text-sm font-medium">
            HCP Name
          </label>

          <input
            type="text"
            readOnly
            placeholder="AI will populate..."
            className="w-full rounded-lg border bg-gray-50 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Interaction Type
          </label>

          <select
            disabled
            className="w-full rounded-lg border bg-gray-50 p-3"
          >
            <option>Meeting</option>
            <option>Call</option>
            <option>Email</option>
            <option>Conference</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Date
          </label>

          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            dateFormat="dd/MM/yyyy"
            className="w-full rounded-lg border bg-gray-50 p-3"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Time
          </label>

          <TimePicker
            onChange={setSelectedTime}
            value={selectedTime}
            disableClock={false}
            clearIcon={null}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">
          Attendees
        </label>

        <input
          readOnly
          placeholder="AI will detect attendees..."
          className="w-full rounded-lg border bg-gray-50 p-3"
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">
          Location
        </label>

        <input
          readOnly
          placeholder="Hospital / Clinic / Online"
          className="w-full rounded-lg border bg-gray-50 p-3"
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">
          Topics Discussed
        </label>

        <textarea
          rows={4}
          readOnly
          placeholder="AI will summarize the discussion..."
          className="w-full rounded-lg border bg-gray-50 p-3"
        />
      </div>
    </div>
  );
}

export default Details;