import { NextPage } from "next";

import { FaSmile } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaImage, FaStickyNote } from "react-icons/fa";
import { RiFileGifFill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";

interface Props { }

const MessageInput: NextPage<Props> = ({ }) => {
  return (
    <div className="flex justify-between items-center w-full px-2 py-3">
      <div className="flex text-[#1877f2] mr-2">
        <div className="bg-opacity-100 hover:bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full text-[#1877f2] p-2">
          <FaCirclePlus size={19} />
        </div>
        <div className="bg-opacity-100 hover:bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full text-[#1877f2] p-2">
          <FaImage size={19} />
        </div>
        <div className="bg-opacity-100 hover:bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full text-[#1877f2] p-2">
          <FaStickyNote size={19} />
        </div>
        <div className="bg-opacity-100 hover:bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full text-[#1877f2] p-2">
          <RiFileGifFill size={19} />
        </div>
      </div >
      <div className="bg-opacity-55 bg-[#47484b] flex rounded-full w-full pl-3 justify-center items-center mr-2">
        <input
          type="text"
          placeholder="Aa"
          className="text-white w-full bg-transparent border-none outline-none focus:border-none focus:outline-none text-[15px]"
        />
        <div className="bg-opacity-100 hover:bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full text-[#1877f2] p-[8.5px]">
          <FaSmile size={19} />
        </div>
      </div>
      <div className="bg-opacity-100 hover:bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full text-[#1877f2] p-1">
        <AiFillLike size={24} />
      </div>
    </div >
  );
};

export default MessageInput;
