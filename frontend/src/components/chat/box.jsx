
import ChatBox from "./chatbox";

function aichat() {
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

export default aichat;