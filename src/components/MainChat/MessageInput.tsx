import { NextPage } from "next";

import { FaSmile } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaImage, FaStickyNote } from "react-icons/fa";
import { RiFileGifFill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { IoSend } from "react-icons/io5";

import { v4 as uuid } from "uuid";
import useSocket from "@/src/hook/useSocket";
import { useRef, useState } from "react";
import { useActiveChat } from "@/src/context/ActiveChatContext";
import useUser from "@/src/hook/useUser";

interface Props { }

const MessageInput: NextPage<Props> = ({ }) => {
  const [message, setMessages] = useState({
    message_content: '',
    message_image_url: null,
    message_video_url: null,
    message_file_url: null,
  });

  //socket
  const user = useUser();
  const { chatId, groupId } = useActiveChat();
  const inputRef = useRef<HTMLInputElement>(null);

  const { socket, roomId } = useSocket(user?.user_id, chatId, groupId);

  const handleSendMessage = () => {
    if (!message.message_content.trim()) return;

    socket?.emit('send-message', {
      room: roomId,
      message: {
        user_id: user?.user_id,
        chat_id: chatId,
        group_id: groupId,
        sender_name: `${user?.first_name} ${user?.last_name}`,
        message_id: uuid(),
        message_content: message.message_content,
        message_sent_at: new Date().toISOString(),
        message_image_url: message.message_image_url,
        message_video_url: message.message_video_url,
        message_file_url: message.message_file_url,
        avatar_url: user?.avatar_url,
      },
    });

    setMessages({
      message_content: '',
      message_image_url: null,
      message_video_url: null,
      message_file_url: null,
    });

    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessages({ ...message, message_content: e.target.value });
  };
  //

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
          value={message.message_content}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          className="text-white w-full bg-transparent border-none outline-none focus:border-none focus:outline-none text-[15px]"
        />
        <div className="bg-opacity-100 hover:bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full text-[#1877f2] p-[8.5px]">
          <FaSmile size={19} />
        </div>
      </div>
      {(message.message_content || message.message_file_url || message.message_image_url || message.message_video_url)
        ?
        <div className="bg-opacity-100 hover:bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full text-[#1877f2] p-1"
          onClick={handleSendMessage}>
          <IoSend size={24} />
        </div>
        :
        <div className="bg-opacity-100 hover:bg-[#47484b] cursor-pointer flex items-center justify-center rounded-full text-[#1877f2] p-1"
          onClick={handleSendMessage}>
          <AiFillLike size={24} />
        </div>
      }
    </div >
  );
};

export default MessageInput;