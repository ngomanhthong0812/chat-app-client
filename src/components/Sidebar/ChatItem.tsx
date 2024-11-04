import { useEffect, useState } from "react";
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
import { useActiveChat } from '@/src/context/ActiveChatContext';

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
  handleActiveItem }) => {

  // lấy ra thông tin người dùng
  const user = useUser();

  const [activeStatus, setActiveStatus] = useState<boolean>(true);
  const [isDropdownMenu, setIsDropdownMenu] = useState<boolean>(false);
  const { chatId, groupId } = useActiveChat();

  const timeSentAt = calculateTimeDifference(sent_at);

  useEffect(() => {
    console.log(chatId);
    console.log(groupId);

  }, [chatId, groupId]);

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
    const pastDate: any = new Date(pastDateStr);
    const currentDate: any = new Date();

    // Tính toán sự khác biệt tính theo milliseconds
    const timeDifference = currentDate - pastDate;

    // Chuyển đổi milliseconds thành seconds, minutes, hours, days
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days) {
      return `${days} ngày`;
    }
    if (hours) {
      return `${hours} giờ`;
    }
    if (minutes) {
      return `${minutes} phút`;
    }
    if (seconds) {
      return `${seconds} giây`;
    }

    return '';
  }

  const setViewContent = (): JSX.Element => {
    if (image_url && content) {
      return <span className="flex gap-1"> <CiImageOn size={17} />{content}</span>
    }
    if (content) {
      return <span className="flex gap-1">{content}</span>
    }
    if (image_url) {
      return <span className="flex gap-1"><CiImageOn size={17} /> Hình ảnh</span>
    }
    if (video_url) {
      return <span className="flex gap-1"><LuFileVideo size={17} /> Video</span>
    }
    if (file_url) {
      return <span className="flex gap-1"><CiFileOn size={17} /> File</span>
    }
    return (
      <span></span>
    );
  }

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
        <div className="mt-[2px] truncate">
          <h3 className="text-white font-[500] text-[15px] truncate max-w-[200px]">{chat_id ? participants : chat_name}</h3>
          <div className="text-[12.5px] font-[500] text-[#b0b3b8] flex">
            <p className="max-w-[200px] truncate">
              <span className="flex gap-1">
                {user_id === user?.user_id ? 'Bạn' : sender_last_name}:
                {setViewContent()}
              </span>
            </p>
            <span className="ml-1">. {timeSentAt}</span></div>
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
    </div>
  );
}
export default ChatItem;