import { NextPage } from "next";
import { FaSmile } from "react-icons/fa";

interface Props {}

const MessageInput: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#47484b] flex rounded-full w-full px-3 py-2 justify-center items-center mr-2">
      <input
        type="text"
        placeholder="Aa"
        className="text-white w-full bg-transparent border-none outline-none focus:border-none focus:outline-none pl-2"
      />
      <div className="text-[#1877f2]">
        <FaSmile size={20} />
      </div>
    </div>
  );
};

export default MessageInput;
