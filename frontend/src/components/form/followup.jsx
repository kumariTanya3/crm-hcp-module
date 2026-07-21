function FollowUp() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">

      <h2 className="mb-4 text-lg font-semibold">
        Follow-up Actions
      </h2>

      <textarea
        rows={4}
        readOnly
        placeholder="AI will generate follow-up tasks..."
        className="w-full rounded-lg border bg-gray-50 p-3"
      />

    </div>
  );
}

export default FollowUp;