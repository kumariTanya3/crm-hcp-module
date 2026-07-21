function SelectSample() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <h2 className="text-lg font-semibold">
          Samples Distributed
        </h2>

        <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
          ➕ Add Sample
        </button>

      </div>

      <div className="mt-4 rounded-lg border border-dashed p-6 text-center text-gray-400">

        No samples added.

      </div>

    </div>
  );
}

export default SelectSample;