// components/MessageList.tsx
import { NextPage } from "next";
import Message from "./Message"; // Nhập component Message

interface MessageData {
  text?: string;
  imageUrl?: string; // Thêm thuộc tính cho hình ảnh
  sender: String;
}

interface Props {
  messages?: MessageData[];
}

const MessageList: NextPage<Props> = ({ messages = [] }) => {
  return (
    <div className="flex flex-col h-[83%] p-4 overflow-y-auto rounded-md">
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
  );
};

export default MessageList;
