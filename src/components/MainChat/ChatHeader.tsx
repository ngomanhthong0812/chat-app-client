// components/MainChat/ChatHeader.tsx
import { NextPage } from "next";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

interface Props {
  toggleChatInfo: () => void; // Nhận hàm toggle từ props
}

const ChatHeader: NextPage<Props> = ({ toggleChatInfo }) => {
  const [isActive, setIsActive] = useState(false); // State để theo dõi trạng thái

  const handleToggle = () => {
    setIsActive(!isActive); // Đảo trạng thái
    toggleChatInfo(); // Gọi hàm toggleChatInfo
  };
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
        <div className="w-8 h-8 hover:bg-[#3e4042] flex items-center justify-center rounded-full">
          <FaPhoneAlt size={17} />
        </div>
        <div className="w-8 h-8 hover:bg-[#3e4042] flex items-center justify-center rounded-full">
          <IoIosVideocam size={22} />
        </div>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            isActive ? "bg-[#1877f2] text-[#3e4042]" : "hover:bg-[#3e4042]"
          }`} // Áp dụng class tùy thuộc vào isActive
          onClick={handleToggle} // Gọi handleToggle
        >
          <BsThreeDots size={22} />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
