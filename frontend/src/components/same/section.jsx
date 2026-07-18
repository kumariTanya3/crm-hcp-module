
function Section({ title, children }) {
  return (
    <div className="mt-6">
      <h2 className="mb-4 text-lg font-semibold">
        {title}
      </h2>

      {children}
    </div>
  );
}

export default Section;