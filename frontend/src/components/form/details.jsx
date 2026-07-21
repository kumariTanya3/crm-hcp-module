import { useSelector, useDispatch } from "react-redux";
import { updateInteraction } from "../../redux/slices/interaction";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

function Details() {
  const dispatch = useDispatch();
  const interaction = useSelector((state) => state.interaction);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Interaction Details
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* HCP Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            HCP Name
          </label>
          <input
            type="text"
            value={interaction.hcpName || ""}
            readOnly
            placeholder="Search or Select HCP..."
            className="w-full rounded-lg border bg-gray-50 p-3"
            //className="w-full rounded-lg border bg-gray-50 p-3 cursor-not-allowed" //if we want to cursor make no changes
          />
        </div>

        {/* Interaction Type */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Interaction Type
          </label>
          <select
            value={interaction.interactionType || "Meeting"}
            disabled
            className="w-full rounded-lg border bg-gray-50 p-3"
          >
            <option>Meeting</option>
            <option>Call</option>
            <option>Email</option>
            <option>Conference</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Date
          </label>
          <DatePicker
            selected={
              interaction.date ? new Date(interaction.date) : null
            }
            onChange={(date) => {
              dispatch(
                updateInteraction({
                  date: date ? date.toLocalDateString("en-CA") : "",
                })
              );
            }}
            dateFormat="dd/MM/yyyy"
            className="w-full rounded-lg border bg-gray-50 p-3"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </div>

        {/* Time */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Time
          </label>
          <TimePicker
            onChange={(time) => {
              dispatch(
                updateInteraction({
                  time,
                })
              );
            }}
            value={interaction.time || ""}
            //disabled
            disableClock={false}
            clearIcon={null}
          />
        </div>
      </div>

      {/* Attendees */}
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">
          Attendees
        </label>
        <input
          type="text"
          value={interaction.attendees || ""}
          readOnly
          placeholder="AI will detect attendees..."
          className="w-full rounded-lg border bg-gray-50 p-3"
        />
      </div>

      {/* Location */}
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">
          Location
        </label>
        <input
          type="text"
          value={interaction.location || ""}
          readOnly
          placeholder="Hospital / Clinic / Online"
          className="w-full rounded-lg border bg-gray-50 p-3"
        />
      </div>

      {/* Topics Discussed */}
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">
          Topics Discussed
        </label>
        <textarea
          rows={4}
          value={interaction.topics || ""}
          readOnly
          placeholder="AI will summarize the discussion..."
          className="w-full rounded-lg border bg-gray-50 p-3"
        />
      </div>
    </div>
  );
}

export default Details;