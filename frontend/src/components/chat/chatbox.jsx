
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addMessage } from "../../redux/slices/chatSlice";

import {
  FaPaperPlane,
  FaMicrophone,
  FaPaperclip,
} from "react-icons/fa";

function ChatBox() {

  const dispatch = useDispatch();

  const [message, setMessage] = useState("");

  function sendMessage() {

    if (!message.trim()) return;

    dispatch(
      addMessage({
        id: Date.now(),
        sender: "user",
        text: message,
      })
    );

    setMessage("");

  }

  return (

    <div className="border-t p-4">

      <div className="flex gap-2">

        <button className="border rounded-lg p-3">

          <FaPaperclip />

        </button>

        <input
        className="flex-1 rounded-lg border p-3"
        placeholder="Describe today's interaction..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
        if (e.key === "Enter") {
        sendMessage();}
        } 
      }
      />
        <button className="border rounded-lg p-3">

          <FaMicrophone />

        </button>

        <button
          onClick={sendMessage}
          className="rounded-lg bg-blue-600 p-3 text-white"
        >

          <FaPaperPlane />

        </button>

      </div>

    </div>

  );

}

export default ChatBox;

/*
import {
  FaPaperPlane,
  FaPaperclip,
  FaMicrophone,
} from "react-icons/fa";

function ChatBox() {

  return (

    <div className="border-t p-4">

      <div className="flex items-center gap-2">

        <button className="rounded-lg border p-3">

          <FaPaperclip />

        </button>

        <input
          className="flex-1 rounded-lg border p-3"
          placeholder="Describe your interaction..."
        />

        <button className="rounded-lg border p-3">

          <FaMicrophone />

        </button>

        <button className="rounded-lg bg-blue-600 p-3 text-white">

          <FaPaperPlane />

        </button>

      </div>

    </div>

  );

}

export default ChatBox;
*/


/*
import { FaPaperPlane } from "react-icons/fa";

function ChatBox() {
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

export default ChatBox;
*/