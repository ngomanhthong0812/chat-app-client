import { useEffect, useRef } from "react";
import { NextPage } from "next";
import Message from "./Message";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";

interface MessageData {
  text?: string;
  imageUrl?: string;
  sender: string;
}

interface Props {
  messages?: MessageData[];
  toggleChatInfo: () => void;
}

const MessageList: NextPage<Props> = ({ messages = [], toggleChatInfo }) => {
  const messageEndRef = useRef<HTMLDivElement>(null); // Create a ref for the end of the message list

  // Scroll to the bottom when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <ChatHeader toggleChatInfo={toggleChatInfo} />
      <div className="flex flex-col h-full p-3 scrollbar-custom rounded-md overflow-y-auto">
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            imageUrl={message.imageUrl}
            sender={message.sender}
            index={index}
          />
        ))}
        <div ref={messageEndRef} /> {/* Reference to scroll into view */}
      </div>
      <MessageInput />
    </div>
  );
};

export default MessageList;
