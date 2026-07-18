
import { useSelector } from "react-redux";

function Msg() {

  const messages = useSelector(
    (state) => state.chat.messages
  );

  return (

    <div className="space-y-4">

      {messages.map((msg) => (

        <div
          key={msg.id}
          className={`flex ${
            msg.sender === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          <div
            className={`max-w-[80%] rounded-xl p-4 ${
              msg.sender === "user"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >

            {msg.text}

          </div>

        </div>

      ))}

    </div>

  );

}

export default Msg;

/*
function Msg() {

  return (

    <>

      

      <div className="mb-4 flex">

        <div className="max-w-[85%] rounded-2xl bg-gray-100 p-4">

          👋 Hello!

          <br /><br />

          I'm your AI CRM Assistant.

          <br /><br />

          Describe today's interaction with the HCP.

        </div>

      </div>

      

      <div className="mb-4 flex justify-end">

        <div className="max-w-[85%] rounded-2xl bg-blue-600 p-4 text-white">

          I met Dr. Sharma yesterday and discussed CardioPlus.

        </div>

      </div>

      

      <div className="flex">

        <div className="max-w-[85%] rounded-2xl bg-green-100 p-4">

          ⚙ Running Tool...

          <br /><br />

          ✔ LogInteraction Tool

          <br /><br />

          Extracting entities...

        </div>

      </div>

    </>

  );

}

export default Msg;*/