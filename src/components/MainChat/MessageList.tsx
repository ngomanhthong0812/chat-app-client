import { NextPage } from "next";
import Message from "./Message"; // Import Message component
import { FaCirclePlus } from "react-icons/fa6";
import { FaImage, FaStickyNote } from "react-icons/fa";
import { RiFileGifFill } from "react-icons/ri";
import MessageInput from "./MessageInput";
import { AiFillLike } from "react-icons/ai";
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
    <div className="flex flex-col h-full">
      <ChatHeader toggleChatInfo={toggleChatInfo} />{" "}
      {/* Pass toggleChatInfo to ChatHeader */}
      <div className="flex flex-col h-full p-4 overflow-y-auto rounded-md">
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
      <div className="flex justify-between items-center w-full px-5">
        <div className="flex text-[#1877f2] gap-5 mr-5">
          <FaCirclePlus size={20} />
          <FaImage size={20} />
          <FaStickyNote size={20} />
          <RiFileGifFill size={20} />
        </div>
        <MessageInput />
        <div className="text-[#1877f2]">
          <AiFillLike size={25} />
        </div>
      </div>
    </div>
  );
};

export default MessageList;
