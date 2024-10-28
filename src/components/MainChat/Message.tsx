// components/Message.tsx
import { NextPage } from "next";
import { BiSolidShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

interface Props {
  text?: string;
  imageUrl?: string;
  sender: String; // Đảm bảo đây là kiểu string cụ thể
  index: number;
}

const Message: NextPage<Props> = ({ text, imageUrl, sender, index }) => {
  // Kiểm tra độ dài của tin nhắn để xác định kiểu bo tròn
  const isLongMessage = text && text.length > 50; // Giả sử tin nhắn dài nếu có hơn 50 ký tự

  return (
    <div
      className={`flex items-center ${
        sender === "me" ? "justify-end" : "justify-start"
      } my-1 group`}
    >
      {/* Chỉ hiển thị avatar nếu sender là "other" */}
      {sender === "other" && (
        <div className="w-8 h-8 mr-2">
          <img
            src="/avatar-trang-4.jpg"
            alt="Avatar"
            className="rounded-full"
          />
        </div>
      )}
      {sender === "me" && (
        <div className="">
          <div
            className={`flex text-[#7d7676]  gap-2 mr-2 invisible group-hover:visible ${
              sender === "me" ? "order-1 ml-2" : "order-2"
            }`}
          >
            <div className="w-7 h-7 hover:bg-[#3e4042] flex items-center justify-center rounded-full">
              <BsThreeDotsVertical size={20} />
            </div>
            <div className="w-7 h-7 hover:bg-[#3e4042] flex items-center justify-center rounded-full">
              <BiSolidShare size={20} />
            </div>
            <div className="w-7 h-7 hover:bg-[#3e4042] flex items-center justify-center rounded-full">
              <FaRegSmile size={20} />
            </div>
          </div>
        </div>
      )}
      <div
        className={`px-3 py-2 max-w-80 ${
          isLongMessage ? "rounded-lg" : "rounded-full"
        } ${
          sender === "me"
            ? "bg-blue-500 text-white text-sm"
            : "bg-[#4c4c4c] text-white text-sm"
        }`}
      >
        {text && <p>{text}</p>}
        {imageUrl && (
          <img src={imageUrl} alt="message" className="mt-2 rounded max-w-xs" />
        )}
      </div>

      {sender === "other" && (
        <div
          className={`flex text-[#7d7676] gap-2 ml-2 invisible group-hover:visible ${
            sender === "me" ? "order-1 ml-2" : "order-2"
          }`}
        >
          <div className="w-7 h-7 hover:bg-[#3e4042] flex items-center justify-center rounded-full">
            <FaRegSmile size={20} />
          </div>
          <div className="w-7 h-7 hover:bg-[#3e4042] flex items-center justify-center rounded-full">
            <IoIosShareAlt size={20} />
          </div>
          <div className="w-7 h-7 hover:bg-[#3e4042] flex items-center justify-center rounded-full">
            <BsThreeDotsVertical size={20} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
