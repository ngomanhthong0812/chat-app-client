import { useEffect, useMemo, useState } from "react";
import { SlOptions } from "react-icons/sl";
import { CiImageOn } from "react-icons/ci";
import { LuFileVideo } from "react-icons/lu";
import { CiFileOn } from "react-icons/ci";

import {
  Archive,
  Bell,
  CircleMinus,
  MailWarning,
  Phone,
  Trash,
  TriangleAlert,
  User,
  Video,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"

import axios from "axios";
import useUser from "@/src/hook/useUser";
import useSocket from "@/src/hook/useSocket";

const ChatItem: React.FC<ChatItemType> = ({
  id, // => id message
  avatar_url,
  chat_name,
  user_id, // => id người gửi
  chat_id,
  group_id,
  content,
  image_url,
  video_url,
  file_url,
  sent_at,
  seen_at,
  is_read,
  sender_last_name,
  sender_first_name,
  participants,
  participants_avatar_url,
  active,
  handleSetLoading,
  handleActiveItem,
  handleReceiveMessage }) => {

  // lấy ra thông tin người dùng
  const user = useUser();

  const [activeStatus, setActiveStatus] = useState<boolean>(true);
  const [isDropdownMenu, setIsDropdownMenu] = useState<boolean>(false);

  const { socket } = useSocket(user?.user_id, chat_id, group_id);
  const [messageDetails, setMessageDetails] = useState({
    contentNew: content,
    senderImageUrl: image_url,
    senderVideoUrl: video_url,
    senderFileUrl: file_url,
    sentAtNew: sent_at,
    senderName: `${sender_first_name} ${sender_last_name}`,
    senderId: user_id,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        if (chat_id) {
          const response = await axios.post('http://localhost:8080/api/activeStatusChat', {
            chat_id: chat_id,
            user_id: user?.user_id,
          });
          setActiveStatus(response.data.status);
        } else {
          const response = await axios.post('http://localhost:8080/api/activeStatusGroup', {
            group_id: group_id,
            user_id: user?.user_id,
          });
          console.log(user_id + response.data);
          setActiveStatus(response.data.status);
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const responseData = error.response.data;
          console.log(responseData);
        }
      }
    }
    fetchData();
  }, [user])

  function calculateTimeDifference(pastDateStr: string): string {
    if (!pastDateStr) {
      return '';
    }
    const pastDate: Date = new Date(pastDateStr);
    const currentDate: Date = new Date();

    // Tính toán sự khác biệt tính theo milliseconds
    const timeDifference = currentDate.getTime() - pastDate.getTime();

    // Chuyển đổi milliseconds thành seconds, minutes, hours, days
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} ngày`;
    }
    if (hours > 0) {
      return `${hours} giờ`;
    }
    if (minutes > 0) {
      return `${minutes} phút`;
    }
    if (seconds >= 0) {
      return `${seconds + 1} giây`;
    }

    return '';
  }

  const setViewContent = useMemo((): JSX.Element => {
    if (messageDetails.senderImageUrl && messageDetails.contentNew) {
      return <span className="flex gap-1"> <CiImageOn size={17} /><span className="line-clamp-1 max-w-[50px] lg:max-w-[200px]">{messageDetails.contentNew}</span></span>
    }
    if (messageDetails.contentNew) {
      return <span className="flex gap-1"><span className="line-clamp-1 max-w-[30px] lg:max-w-[150px]">{messageDetails.contentNew}</span></span>
    }
    if (messageDetails.senderImageUrl) {
      return <span className="flex gap-1"><CiImageOn size={17} /> Hình ảnh</span>
    }
    if (messageDetails.senderVideoUrl) {
      return <span className="flex gap-1"><LuFileVideo size={17} /> Video</span>
    }
    if (messageDetails.senderFileUrl) {
      return <span className="flex gap-1"><CiFileOn size={17} /> File</span>
    }
    return (
      <span></span>
    )
  }, [messageDetails.senderImageUrl, messageDetails.contentNew, messageDetails.senderVideoUrl, messageDetails.senderFileUrl]);


  useEffect(() => {
    // Lắng nghe tin nhắn nhận được
    const roomIdItem = chat_id ? `chat:${chat_id}` : group_id ? `group:${group_id}` : null;
    socket?.emit('join-room', roomIdItem);
    socket?.on('receive-message', (msg) => {
      setMessageDetails({
        contentNew: msg.message.message_content,
        sentAtNew: msg.message.message_sent_at,
        senderName: msg.message.sender_name,
        senderId: msg.message.user_id,
        senderImageUrl: msg.message_image_url,
        senderVideoUrl: msg.message_video_url,
        senderFileUrl: msg.message_file_url,
      });
      handleReceiveMessage(msg);
    });

    return () => {
      socket?.disconnect();
    };
  }, [user?.user_id, chat_id, group_id]);


  return (
    <div onClick={() => handleActiveItem(id, chat_id, group_id)}>
      <div className={`group relative rounded-lg flex px-2 py-[10px] gap-2 cursor-pointer
         ${active ? 'bg-[#47484b] bg-opacity-55' : 'hover:bg-opacity-100 hover:bg-[#47484b]'}
         `}>
        <div className="thumbnail relative min-w-[48px] min-h-[48px] max-h-[48px] max-w-[48px]">
          <img src={chat_id ? participants_avatar_url : avatar_url}
            alt=""
            onLoad={handleSetLoading}
            className="rounded-full w-full h-full object-cover"
          />
          {activeStatus && <span className="absolute right-[1px] bottom-0 w-[14px] h-[14px] bg-green-600 rounded-full border-2 border-[#252323]"></span>}
        </div>
        <div className="mt-[2px]">
          <h3 className="text-white font-[500] text-[15px]">{chat_id ? participants : chat_name}</h3>
          <div className="text-[12.5px] font-[500] text-[#b0b3b8] flex">
            <span className="flex gap-1">
              {messageDetails.senderId ? (messageDetails.senderId === user?.user_id ? 'Bạn' : messageDetails.senderName) + ':' : 'Hãy bắt đầu đoạn chat'}
              {setViewContent}
            </span>
            <span className="ml-1 whitespace-nowrap">. {calculateTimeDifference(messageDetails.sentAtNew)}</span></div>
        </div>
        <DropdownMenu onOpenChange={() => setIsDropdownMenu(!isDropdownMenu)}>
          <DropdownMenuTrigger asChild>
            <button
              className={`group-hover:visible ${isDropdownMenu ? 'visible' : 'invisible'} hover:bg-[#47484b] bg-opacity-55 btn-options absolute right-8 top-[50%]
             translate-y-[-50%] w-[30px] h-[30px] flex items-center justify-center rounded-full text-[#b0b3b8] cursor-pointer bg-[#252323]`}
              style={{ boxShadow: '0 0 2px white' }}>
              <SlOptions size={13} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 z-[999] bg-[#272727] border-none text-white text-[15px]">
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
                <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                  <MailWarning />
                </div>
                <span>Đánh dấu là chưa đọc</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
                <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                  <Bell />
                </div>
                <span>Tắt thông báo</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
                <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                  <User />
                </div>
                <span>Xem trang cá nhân</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className="bg-[#47484b] bg-opacity-55" />

            <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
              <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                <Phone />
              </div>
              <span>Gọi thoại</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
              <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                <Video />
              </div>
              <span>Chat video</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-[#47484b] bg-opacity-55" />

            <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
              <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                <CircleMinus />
              </div>
              <span>Chặn</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
              <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                <Archive />
              </div>
              <span>Lưu trữ đoạn chat</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
              <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                <Trash />
              </div>
              <span>Xoá đoạn chat</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
              <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                <TriangleAlert />
              </div>
              <span>Báo cáo</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div >
  );
}
export default ChatItem;