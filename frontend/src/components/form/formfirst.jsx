/*
import FormSecond from "./formsecond";

function FormFirst() {
  return (
    <>
      <FormSecond />

      <div className="mt-6">
        <p className="text-gray-500">
          Interaction form will be built here.
        </p>
      </div>
    </>
  );
}

export default FormFirst;
*/

import FormSecond from "./formsecond";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

function FormFirst() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("00:00");
  return (
    <>
      <FormSecond />
      
      <div className="mt-6 space-y-6">
        {/* Interaction Details */}
        <div className="rounded-lg border border-gray-200 p-5">
          <h2 className="mb-4 text-lg font-semibold">Interaction Details</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* HCP Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">HCP Name</label>
              <input
                type="text"
                placeholder="AI will populate..."
                readOnly
                className="w-full rounded-lg border p-3 bg-gray-50"/>
            </div>
            {/* Interaction Type */}
            <div>
              <label className="mb-2 block text-sm font-medium">Interaction Type</label>
              <select
              disabled
              className="w-full rounded-lg border p-3 bg-gray-50">
                <option>Meeting</option>
                <option>Call</option>
                <option>Email</option>
                <option>Conference</option>
              </select>
            </div>
            {/* Date */}
            <div>
              <label className="mb-2 block text-sm font-medium">Date
              </label>
              <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date"
              className="w-full rounded-lg border p-3 bg-gray-50"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"/>
              {/* <input
                type="date"
                readOnly
                className="w-full rounded-lg border p-3 bg-gray-50"/> */}
            </div>
            {/* Time */}
            <div>
              <label className="mb-2 block text-sm font-medium">Time</label>
              <TimePicker
              onChange={setSelectedTime}
              value={selectedTime}
              disableClock={false}
              clearIcon={null}
              className="w-full"/>
              {/* <input
              type="time"
              readOnly
              className="w-full rounded-lg border p-3 bg-gray-50"/> */}
            </div>
            {/* Attendees & Location */}
            <div className="rounded-lg border border-gray-200 p-5">
              <h2 className="mb-4 text-lg font-semibold">Attendees & Location</h2>
              <div className="space-y-4">
                {/* Attendees */}
                <div>
                  <label className="mb-2 block text-sm font-medium">Attendees</label>
                  <input
                  type="text"
                  placeholder="AI will detect attendees..."
                  readOnly
                  className="w-full rounded-lg border bg-gray-50 p-3"/>
                </div>
                {/* Location */}
                <div>
                  <label className="mb-2 block text-sm font-medium">Location</label>
                  <input
                  type="text"
                  placeholder="Hospital / Clinic / Online"
                  readOnly
                  className="w-full rounded-lg border bg-gray-50 p-3"/>
                </div>
              </div>
            </div>
            {/* Topics Discussed */}
            <div className="rounded-lg border border-gray-200 p-5">
              <h2 className="mb-4 text-lg font-semibold">Topics Discussed</h2>
              <textarea
              rows="5"
              readOnly
              placeholder="AI will summarize the conversation..."
              className="w-full rounded-lg border bg-gray-50 p-3"/>
            </div>
            {/* Outcomes */}
            <div className="rounded-lg border border-gray-200 p-5">
              <h2 className="mb-4 text-lg font-semibold">Outcomes</h2>
              <textarea
              rows="4"
              readOnly
              placeholder="AI-generated interaction outcome..."
              className="w-full rounded-lg border bg-gray-50 p-3"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormFirst;
