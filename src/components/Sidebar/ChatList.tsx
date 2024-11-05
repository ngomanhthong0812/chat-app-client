"use client"
import { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { SkeletonChat } from "../SkeletonChat";
import axios from "axios";
import useUser from "@/src/hook/useUser";

import { useActiveChat } from '@/src/context/ActiveChatContext';

interface IProps { }

const ChatList: React.FC<IProps> = () => {
  const [onScroll, setOnScroll] = useState<boolean>(false);
  const [chatList, setChatList] = useState<ChatItemType[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const { setChatId, setGroupId } = useActiveChat();

  const user = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      const data: object = {
        user_id: user?.user_id
      };

      try {
        const response = await axios.post('http://localhost:8080/api/chatList', data);
        const resChatList: ChatItemType[] = response.data.chatList;

        resChatList?.sort((a, b) => {
          // Chuyển đổi sent_at từ string sang timestamp
          const timeA = new Date(a.sent_at).getTime();
          const timeB = new Date(b.sent_at).getTime();
          return timeB - timeA;
        });

        setChatList(resChatList?.map((item, index) => {
          if (index === 0) {
            setChatId(item.chat_id);
            setGroupId(item.group_id);
            return { ...item, active: true };
          }
          return { ...item, active: false };
        }));

      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const responseData = error.response.data;
          console.log(responseData);
        }
      }
    };
    fetchData();
  }, [user]);

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
    setLoading(false);
  }
  const handleActiveItem = (msg_id: number, chat_id: number | null, group_id: number | null) => {
    setChatList(
      prev => {
        return prev?.map(item => (
          item.id === msg_id
            ? { ...item, active: true }
            : { ...item, active: false }
        ));
      }
    );

    setChatId(chat_id);
    setGroupId(group_id);
  }

  return (
    <div className={`mt-3 px-2 h-full scrollbar-custom ${onScroll && 'border-t border-[#484848]'}`}
      onScroll={handleScroll}>

      {(loading && chatList?.length !== 0) && <div>
        <SkeletonChat />
        <SkeletonChat />
        <SkeletonChat />
      </div>}

      {chatList?.length !== 0
        ? chatList?.map((chat: ChatItemType) => (
          <div key={chat.id} style={!loading ? { visibility: 'visible' } : { visibility: 'hidden' }}>
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
              participants={chat.participants}
              participants_avatar_url={chat.participants_avatar_url}
              active={chat.active}
              handleSetLoading={handleSetLoading}
              handleActiveItem={handleActiveItem} />
          </div>
        ))
        : <div className="text-center text-[#b0b3b8] mt-10">
          Không tìm thấy đoạn chat nào.
        </div>
      }

    </div>
  );
}
export default ChatList;

