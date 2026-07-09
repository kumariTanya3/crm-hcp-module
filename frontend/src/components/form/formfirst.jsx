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

function FormFirst() {
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
              <input
                type="date"
                readOnly
                className="w-full rounded-lg border p-3 bg-gray-50"/>
            </div>
            {/* Time */}
            <div>
              <label className="mb-2 block text-sm font-medium">Time</label>
              <input
              type="time"
              readOnly
              className="w-full rounded-lg border p-3 bg-gray-50"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormFirst;
