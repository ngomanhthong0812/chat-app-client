import { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import axios from "axios";
import Message from "./Message";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";
import { getUserIdFromToken } from "@/src/utils/auth";

interface MessageData {
  user_id: number;
  sender_name: string;
  message_id: number;
  message_content: string;
  message_sent_at: string;
  message_image_url?: string | null;
  message_video_url?: string | null;
  message_file_url?: string | null;
  avatar_url?: string | null;
}

interface Props {
  toggleChatInfo: () => void;
}

const MessageList: NextPage<Props> = ({ toggleChatInfo }) => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<MessageData[]>([]); // Khởi tạo messages là mảng rỗng
  const [currentUserId, setCurrentUserId] = useState<number | null>(null); // Khởi tạo currentUserId
  const [roomName, setRoomName] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const userId = getUserIdFromToken();
  // Fetch messages from the API
  useEffect(() => {
    const token = localStorage.getItem("token"); // Lấy token từ local storage
    if (token) {
      // Giải mã để lấy user_id
      setCurrentUserId(userId); // Lưu vào state
    }
    const id_other = userId != 1 ? "1" : "2";
    console.log("other: " + id_other);

    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/api/messager/1/2`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("API Response:", response.data); // In ra phản hồi từ API

        // Kiểm tra nếu dữ liệu có thuộc tính `data` và thuộc tính `message` là một mảng
        if (
          response.data.code === 200 &&
          Array.isArray(response.data.data.message)
        ) {
          setRoomName(response.data.data.name_rom);
          setAvatarUrl(response.data.data.avatar_url);
          setMessages(response.data.data.message); // Lấy mảng message từ dữ liệu
        } else {
          console.warn(
            "Expected an array for messages, received:",
            response.data
          );
          setMessages([]); // Hoặc thiết lập một mảng mặc định
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  // Scroll to the bottom when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <ChatHeader
        name_room={roomName}
        avatar_url={avatarUrl}
        toggleChatInfo={toggleChatInfo}
      />
      <div className="flex flex-col h-full p-3 scrollbar-custom rounded-md overflow-y-auto">
        {messages.map((message) => (
          <Message
            key={message.message_id}
            user_id={message.user_id} // Thêm user_id
            sender_name={message.sender_name} // Thêm sender_name
            message_id={message.message_id} // Thêm message_id
            message_content={message.message_content} // Thêm message_content
            message_sent_at={message.message_sent_at} // Thêm message_sent_at
            message_image_url={message.message_image_url} // Thêm message_image_url
            message_video_url={message.message_video_url} // Thêm message_video_url
            message_file_url={message.message_file_url} // Thêm message_file_url
            currentUserId={currentUserId} // Truyền currentUserId vào Message
            avatar_url={message.avatar_url}
          />
        ))}
        <div ref={messageEndRef} /> {/* Reference to scroll into view */}
      </div>
      <MessageInput />
    </div>
  );
};

export default MessageList;
