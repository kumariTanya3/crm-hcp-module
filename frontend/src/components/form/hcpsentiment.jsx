function HCPSentiment() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">

      <h2 className="mb-4 text-lg font-semibold">
        Observed HCP Sentiment
      </h2>

      <div className="flex gap-8">

        <label>
          <input type="radio" name="sentiment" /> 😊 Positive
        </label>

        <label>
          <input type="radio" name="sentiment" /> 😐 Neutral
        </label>

        <label>
          <input type="radio" name="sentiment" /> ☹️ Negative
        </label>

      </div>

    </div>
  );
}

export default HCPSentiment;