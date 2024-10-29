import { NextPage } from "next";
import Message from "./Message"; // Import Message component

import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";

interface MessageData {
  text?: string;
  imageUrl?: string; // Add property for image
  sender: String;
}

interface Props {
  messages?: MessageData[];
  toggleChatInfo: () => void; // Receive toggleChatInfo as prop
}

const MessageList: NextPage<Props> = ({ messages = [], toggleChatInfo }) => {
  return (
    <div className="flex flex-col h-full ">
      <ChatHeader toggleChatInfo={toggleChatInfo} />{" "}
      {/* Pass toggleChatInfo to ChatHeader */}
      <div className="flex flex-col h-full p-3 scrollbar-custom rounded-md">
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            imageUrl={message.imageUrl}
            sender={message.sender}
            index={index}
          />
        ))}
      </div>
        <MessageInput />
    </div>
  );
};

export default MessageList;
