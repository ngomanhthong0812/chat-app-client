import { NextPage } from "next";
import ChatItem from "./ChatItem";

interface ChatData {
  id: number;
  name: string;
  message: string;
  avatar: string;
}

const chatItems: ChatData[] = [
  {
    id: 1,
    name: "Quang",
    message: "cặc cặc cặc cặc cặc",
    avatar: "/avatar-trang-4.jpg",
  },
 ];

const ChatList: NextPage = () => {
  return (
    <div className="h-[510px] overflow-y-auto mt-1">
      {" "}
      {/* Đặt chiều cao cụ thể */}
      {chatItems.map((item) => (
        <ChatItem
          key={item.id}
          name={item.name}
          message={item.message}
          avatar={item.avatar}
        />
      ))}
    </div>
  );
};

export default ChatList;
