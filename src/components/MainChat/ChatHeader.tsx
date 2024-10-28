import { NextPage } from "next";
import { BsThreeDots } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";

interface Props {}

const ChatHeader: NextPage<Props> = ({}) => {
  return (
    <div className="p-3 flex justify-between items-center text-center shadow-sm ">
      <div className="flex text-start items-center ">
        <div className="w-9 h-9 mr-3">
          <img src="/avatar-trang-4.jpg" alt="" className="rounded-full" />
        </div>
        <div className="text-white flex flex-col">
          <span className="text-[15px] font-medium leading-[19px]">Quang</span>
          <span className="text-[13px] text-[#b0b3b8]">Đang hoạt động</span>
        </div>
      </div>
      <div className="text-[#aa00ff] flex gap-5">
        <div className="w-8 h-8 hover:bg-zinc-500 flex items-center justify-center rounded-full">
          <FaPhoneAlt size={20} />
        </div>
        <div className="w-8 h-8 hover:bg-zinc-500 flex items-center justify-center rounded-full">
          <IoIosVideocam size={25} />
        </div>
        <div className="w-8 h-8 hover:bg-zinc-500 flex items-center justify-center rounded-full">
          <BsThreeDots size={25} />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
