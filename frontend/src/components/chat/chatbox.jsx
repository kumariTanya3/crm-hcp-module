
import { FaPaperPlane } from "react-icons/fa";

function chatbox() {
  return (
    <div className="flex gap-2">
      <input
        className="flex-1 rounded-lg border p-3"
        placeholder="Describe your interaction..."
      />

      <button className="rounded-lg bg-blue-600 px-5 text-white">
        <FaPaperPlane />
      </button>
    </div>
  );
}

export default chatbox;