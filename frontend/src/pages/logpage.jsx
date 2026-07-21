
import Form from "../components/layout/form";
import ChatBot from "../components/layout/chatbot";

function LogPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6">

        {/* Left Side */}
        <Form />

        {/* Right Side */}
        <ChatBot />

      </div>
    </div>
  );
}

export default LogPage;

/*
import FullLayout from "../components/layout/fullform";

function FullForm() {
  return <FullLayout />;
}

export default FullForm;
*/

/*
function logpage() {
  return (
    <div>
      <h1>Log HCP Interaction</h1>
    </div>
  );
}

export default logpage;
*/