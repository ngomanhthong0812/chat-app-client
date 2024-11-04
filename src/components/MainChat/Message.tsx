import { NextPage } from "next";
import { BiSolidShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";

interface Props {
  user_id: number; // user_id là số
  sender_name: string; // Tên người gửi
  message_id: number; // ID tin nhắn
  message_content: string; // Nội dung tin nhắn
  message_sent_at: string; // Thời gian gửi
  message_image_url?: string | null; // URL hình ảnh
  message_video_url?: string | null; // URL video
  message_file_url?: string | null; // URL file
  avatar_url?: string | null; // URL file
  currentUserId: number | null; // Thêm currentUserId
}

const Message: NextPage<Props> = ({
  user_id,
  sender_name,
  message_id,
  message_content,
  message_sent_at,
  message_image_url,
  message_video_url,
  message_file_url,
  currentUserId,
  avatar_url,
}) => {
  const isLongMessage = message_content.length > 50; // Giả sử tin nhắn dài nếu có hơn 50 ký tự

  return (
    <div
      className={`flex items-center ${
        currentUserId == user_id ? "justify-end" : "justify-start"
      } my-1 group`}
    >
      {/* Hiển thị avatar nếu người gửi là "other" */}
      {currentUserId !== user_id && (
        <div className="w-7 h-7 mr-2">
          <img
            src={avatar_url || "/avatar-trang-4.jpg"}
            alt="Avatar"
            className="rounded-full"
          />
        </div>
      )}
      {currentUserId == user_id && (
        <div className="">
          <div
            className={`flex text-[#dadada] gap-2 mr-2 invisible group-hover:visible ${
              currentUserId !== user_id ? "order-1 ml-2" : "order-2"
            }`}
          >
            <div className="w-7 h-7 bg-opacity-55 hover:bg-opacity-100 bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full">
              <BsThreeDotsVertical size={18} />
            </div>
            <div className="w-7 h-7 bg-opacity-55 hover:bg-opacity-100 bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full">
              <BiSolidShare size={18} />
            </div>
            <div className="w-7 h-7 bg-opacity-55 hover:bg-opacity-100 bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full">
              <FaRegSmile size={18} />
            </div>
          </div>
        </div>
      )}
      <div
        className={`px-3 py-2 max-w-80 ${
          isLongMessage ? "rounded-lg" : "rounded-full"
        } ${
          currentUserId == user_id
            ? "bg-blue-500 text-white text-sm"
            : "bg-opacity-100 bg-[#47484b] text-white text-sm"
        }`}
      >
        <p>{message_content}</p>
        {message_image_url && (
          <img
            src={message_image_url}
            alt="message"
            className="mt-2 rounded max-w-xs"
          />
        )}
        {message_video_url && (
          <video
            controls
            src={message_video_url}
            className="mt-2 rounded max-w-xs"
          />
        )}
        {message_file_url && (
          <a
            href={message_file_url}
            download
            className="mt-2 block text-blue-400"
          >
            Download File
          </a>
        )}
      </div>

      {currentUserId !== user_id && (
        <div
          className={`flex text-[#dadada] gap-2 ml-2 invisible group-hover:visible ${
            currentUserId !== user_id ? "order-1 ml-2" : "order-2"
          }`}
        >
          <div className="w-7 h-7 bg-opacity-55 hover:bg-opacity-100 bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full">
            <FaRegSmile size={18} />
          </div>
          <div className="w-7 h-7 bg-opacity-55 hover:bg-opacity-100 bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full">
            <BiSolidShare size={18} />
          </div>
          <div className="w-7 h-7 bg-opacity-55 hover:bg-opacity-100 bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full">
            <BsThreeDotsVertical size={18} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
