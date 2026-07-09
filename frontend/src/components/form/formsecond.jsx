
import { FaUserDoctor } from "react-icons/fa6";

function FormSecond() {
  return (
    <div className="flex items-center gap-3 border-b pb-4">
      <FaUserDoctor size={24} />
      <div>
        <h1 className="text-2xl font-bold">
          Log HCP Interaction
        </h1>

        <p className="text-gray-500 text-sm">
          AI-controlled interaction details
        </p>
      </div>
    </div>
  );
}

export default FormSecond;