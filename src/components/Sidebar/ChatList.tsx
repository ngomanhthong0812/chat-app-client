"use client"
import { useState } from "react";
import ChatItem from "./ChatItem";
import { SkeletonChat } from "../SkeletonChat";

interface IProps { }
const ChatList: React.FC<IProps> = () => {
  const [onScroll, setOnScroll] = useState<boolean>(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = event.currentTarget;
    if (scrollTop > 0) {
      setOnScroll(true); // Đã cuộn tới đầu
    } else {
      setOnScroll(false); // Đang cuộn
    }
  }
  return (
    <div className={`mt-3 px-2 h-full scrollbar-custom ${onScroll && 'border-t border-[#484848]'}`}
      onScroll={handleScroll}>
      <SkeletonChat />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />

    </div>
  );
}
export default ChatList;

