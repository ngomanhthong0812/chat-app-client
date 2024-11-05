import { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import axios from "axios";
import Message from "./Message";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";
import { getUserIdFromToken } from "@/src/utils/auth";
import { useActiveChat } from "@/src/context/ActiveChatContext";
import useSocket from "@/src/hook/useSocket";
import useUser from "@/src/hook/useUser";

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

const MessageList: NextPage<Props> = ({
  toggleChatInfo
}) => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<MessageData[]>([]); // Default to empty array
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [roomName, setRoomName] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const { chatId, groupId } = useActiveChat();
  const user = useUser();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const userId = getUserIdFromToken();

  useEffect(() => {
    if (token) {
      setCurrentUserId(userId);
    }

    const fetchMessages = async () => {
      try {
        if (chatId) {
          const response = await axios.post(
            `http://localhost:8080/api/messagesprivate`,
            { chat_id: chatId },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("API Response:", response.data);

          const { users, message } = response.data.data || {};

          if (
            response.data.code === 200 &&
            Array.isArray(message) &&
            Array.isArray(users)
          ) {
            if (users.length > 0) {
              const user = users[0];
              setRoomName(`${user.first_name} ${user.last_name}`);
              setAvatarUrl(user.avatar_url);
            }
            setMessages(message);
          } else {
            console.warn(
              "Expected an array for messages, received:",
              response.data
            );
            setMessages([]);
          }
        } else {
          const response = await axios.post(
            `http://localhost:8080/api/groupmessages`,
            { groupId: groupId },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("API Response:", response.data);

          const { group, messages } = response.data.data || {};
          console.log(messages);

          if (response.data.code === 200) {
            if (group.length > 0) {
              const groupz = group[0];
              console.log(groupz.group_name);

              setRoomName(groupz.group_name);
              setAvatarUrl(groupz.avatar_url);
            }
            setMessages(messages);
          } else {
            console.warn(
              "Expected an array for messages, received:",
              response.data
            );
            setMessages([]);
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          console.warn("Authorization error: Invalid or expired token.");
        }
      }
    };

    fetchMessages();
  }, [chatId, groupId]);

  // Scroll to the bottom when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //socket
  const { socket } = useSocket(user?.user_id, chatId, groupId);

  useEffect(() => {
    // Lắng nghe tin nhắn nhận được
    socket.on('receive-message', (msg) => {
      console.log("tin nhắn mess list" + JSON.stringify(msg));
      setMessages(
        prev => [...prev, msg.message]
      )
    });
  }, [userId, groupId, chatId]);
  //

  return (
    <div className="flex flex-col h-full">
      <ChatHeader
        name_room={roomName}
        avatar_url={avatarUrl}
        toggleChatInfo={toggleChatInfo}
      />
      <div className="flex flex-col h-full p-3 scrollbar-custom rounded-md overflow-y-auto">
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message) => (
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
          ))
        ) : (
          <p>No messages found.</p> // Display message if array is empty
        )}
        <div ref={messageEndRef} /> {/* Reference to scroll into view */}
      </div>
      <MessageInput />
    </div>
  );
};

export default MessageList;
