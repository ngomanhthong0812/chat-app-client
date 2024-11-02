"use client"
import { useContext, useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { SkeletonChat } from "../SkeletonChat";
import axios from "axios";

interface IProps { }


const ChatList: React.FC<IProps> = () => {
  const [onScroll, setOnScroll] = useState<boolean>(false);
  const [chatList, setChatList] = useState<ChatItemType[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      const data: object = {
        user_id: userId
      };

      try {
        const response = await axios.post('http://localhost:8080/api/chatList', data);
        setChatList(response.data.chatList);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const responseData = error.response.data;
          console.log(responseData);
        }
      } finally {
        setInterval(() => {
          setLoading(false);
        }, 1000)
      }
    };
    fetchData();
  }, [])

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = event.currentTarget;
    if (scrollTop > 0) {
      setOnScroll(true); // Đã cuộn tới đầu
    } else {
      setOnScroll(false); // Đang cuộn
    }
  }
  const handleSetLoading = () => {
    console.log("tai thanh cong");
    setLoading(true);
  }
  return (
    <div className={`mt-3 px-2 h-full scrollbar-custom ${onScroll && 'border-t border-[#484848]'}`}
      onScroll={handleScroll}>
      {
        (chatList?.length === 0 && !loading) &&
        <div className="text-center text-[#b0b3b8] mt-10">
          Không tìm thấy đoạn chat nào.
        </div>
      }

      {loading && <div>
        <SkeletonChat />
        <SkeletonChat />
        <SkeletonChat />
      </div>}

      {chatList?.map((chat: ChatItemType) => (
        <div key={chat.id} className={`${!loading ? 'visible' : 'invisible'}`}>
          <ChatItem
            avatar_url={chat.avatar_url}
            chat_name={chat.chat_name}
            id={chat.id}
            user_id={chat.user_id}
            chat_id={chat.chat_id}
            group_id={chat.group_id}
            content={chat.content}
            image_url={chat.image_url}
            video_url={chat.video_url}
            file_url={chat.file_url}
            sent_at={chat.sent_at}
            seen_at={chat.seen_at}
            is_read={chat.is_read}
            sender_last_name={chat.sender_last_name}
            sender_first_name={chat.sender_first_name}
            handleSetLoading={handleSetLoading} />
        </div>
      ))}

    </div>
  );
}
export default ChatList;

