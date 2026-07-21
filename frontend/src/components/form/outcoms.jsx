function Outcomes() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">

      <h2 className="mb-4 text-lg font-semibold">
        Outcomes
      </h2>

      <textarea
        rows={5}
        readOnly
        placeholder="AI-generated interaction outcome..."
        className="w-full rounded-lg border bg-gray-50 p-3"
      />

    </div>
  );
}

export default Outcomes;