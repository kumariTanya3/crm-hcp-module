

import { FaRobot } from "react-icons/fa"; //for robot icon
import { MdCircle } from "react-icons/md"; //for solid circle
import ChatBox from "./chatbox";
import Msg from "./msg";

function AIChat() {
  return (
    <div className="flex h-full flex-col">

      <div className="border-b p-4">

        <div className="flex items-center gap-3">

          <FaRobot className="text-3xl text-blue-600" />

          <div>

            <h2 className="text-xl font-bold">
              AI Assistant
            </h2>

            <div className="flex items-center gap-2">

              <MdCircle className="text-green-500" />

              <span className="text-sm text-gray-500">

                Connected to Groq

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* messages */}

      <div className="flex-1 overflow-y-auto p-4">

        <Msg />

      </div>

      <ChatBox />

    </div>
  );
}

export default AIChat;


/*
import { FaRobot } from "react-icons/fa"; //for robot icon
import { MdCircle } from "react-icons/md"; //for solid circle
import ChatBox from "./chatbox";

function AiChat() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="text-xl font-bold">
        🤖 AI Assistant
      </h2>

      <div className="my-4 flex-1 rounded-lg bg-gray-100 p-4">
        <p className="text-gray-500">
          Start chatting...
        </p>
      </div>

      <ChatBox />
    </div>
  );
}

export default AiChat;
*/
