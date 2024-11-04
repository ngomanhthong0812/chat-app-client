// components/MainChat/ChatHeader.tsx
import { NextPage } from "next";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

interface Props {
  name_room: string;
  avatar_url: string;
  toggleChatInfo: () => void; // Nhận hàm toggle từ props
}

const ChatHeader: NextPage<Props> = ({
  toggleChatInfo,
  name_room,
  avatar_url,
}) => {
  const [isActive, setIsActive] = useState(false); // State để theo dõi trạng thái

  const handleToggle = () => {
    setIsActive(!isActive); // Đảo trạng thái
    toggleChatInfo(); // Gọi hàm toggleChatInfo
  };
  return (
    <div className="p-3 flex justify-between items-center text-center shadow-sm ">
      <div className="flex text-start items-center ">
        <div className="w-9 h-9 mr-3 relative">
          <img
            src={avatar_url || "/avatar-trang-4.jpg"}
            alt=""
            className="rounded-full"
          />
          <span className="absolute right-[1px] bottom-0 w-[14px] h-[14px] bg-green-600 rounded-full border-2 border-[#252323]"></span>
        </div>
        <div className="text-white flex flex-col">
          <span className="text-[15px] font-medium leading-[19px]">
            {name_room}
          </span>
          <span className="text-[13px] text-[#b0b3b8]">Đang hoạt động</span>
        </div>
      </div>
      <div className="text-[#aa00ff] flex items-center gap-4">
        <div className="w-8 h-8 hover:bg-[#3e4042] flex items-center justify-center rounded-full cursor-pointer">
          <FaPhoneAlt size={17} />
        </div>
        <div className="w-8 h-8 hover:bg-[#3e4042] flex items-center justify-center rounded-full cursor-pointer">
          <IoIosVideocam size={22} />
        </div>
        <div
          className={`flex items-center justify-center rounded-full cursor-pointer ${
            isActive
              ? "bg-[#aa00ff] text-[#3e4042] text-sm w-5 h-5"
              : "hover:bg-[#3e4042] text-xl w-7 h-7"
          }`} // Áp dụng class tùy thuộc vào isActive
          onClick={handleToggle} // Gọi handleToggle
        >
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
