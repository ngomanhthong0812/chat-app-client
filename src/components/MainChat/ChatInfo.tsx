import { NextPage } from "next";
import { AiFillLike } from "react-icons/ai";
import { FaImage, FaSmile, FaStickyNote } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { RiFileGifFill } from "react-icons/ri";
import MessageInput from "./MessageInput";

interface Props {}

const ChatInfo: NextPage<Props> = ({}) => {
  return (
    <div className="flex justify-between items-center w-full px-5">
      <div className="flex text-[#1877f2] gap-5 mr-5">
        <div className="">
          <FaCirclePlus size={20} />
        </div>
        <div className="">
          <FaImage size={20} />
        </div>
        <div className="">
          <FaStickyNote size={20} />
        </div>
        <div className="">
          <RiFileGifFill size={20} />
        </div>
      </div>
      {/*  */}
      <MessageInput />
      <div className="text-[#1877f2]">
        <AiFillLike size={25} />
      </div>
    </div>
  );
};

export default ChatInfo;
