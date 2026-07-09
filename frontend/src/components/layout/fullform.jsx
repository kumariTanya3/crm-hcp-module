
import Form from "./form";
import ChatBot from "./chatbot";

function fullform() {
  return (
    <div className="min-h-screen bg-slate-100 p-5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Leftside Form */}
        <div className="lg:col-span-2">
          <Form />
        </div>

        {/* AI Chatbot */}
        <div>
          <ChatBot />
        </div>
      </div>
    </div>
  );
}

export default fullform;