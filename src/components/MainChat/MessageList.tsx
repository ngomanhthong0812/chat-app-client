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
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [roomName, setRoomName] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const userId = getUserIdFromToken();

  // Fetch messages from the API
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setCurrentUserId(userId);
    }

    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/messager/1`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("API Response:", response.data);

        const { users, message } = response.data.data;

        // Kiểm tra cấu trúc dữ liệu
        if (
          response.data.code === 200 &&
          Array.isArray(message) &&
          Array.isArray(users)
        ) {
          if (users.length > 0) {
            // Lấy tên phòng từ tên người dùng (có thể thay đổi tùy theo yêu cầu)
            const user = users[0];
            setRoomName(`${user.first_name} ${user.last_name}`);
            setAvatarUrl(user.avatar_url);
          }
          setMessages(message); // Lưu lại mảng message từ dữ liệu
        } else {
          console.warn(
            "Expected an array for messages, received:",
            response.data
          );
          setMessages([]);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [userId]); // Thêm userId vào dependencies

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
            user_id={message.user_id}
            sender_name={message.sender_name}
            message_id={message.message_id}
            message_content={message.message_content}
            message_sent_at={message.message_sent_at}
            message_image_url={message.message_image_url}
            message_video_url={message.message_video_url}
            message_file_url={message.message_file_url}
            currentUserId={currentUserId}
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
