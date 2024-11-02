import { useEffect, useState } from "react";
import { SlOptions } from "react-icons/sl";

import axios from "axios";
import useUser from "@/src/hook/useUser";

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
  handleSetLoading }) => {

  // lấy ra thông tin người dùng
  const user = useUser();

  const [activeStatus, setActiveStatus] = useState<boolean>(true);

  const timeSentAt = calculateTimeDifference(sent_at);

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

  return (
    <div>
      {/* <div className="group relative bg-[#47484b] bg-opacity-55 rounded-lg flex px-2 py-[10px] gap-2 cursor-pointer">
        <div className="thumbnail relative w-[48px] h-[48px] object-cover">
          <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/65838514_835314680203196_7493673885099884544_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFaMvcULFQuK01VrdXVgfpAcesKwMaWrIpx6wrAxpasipl8NbrGgyA6DO_SVaeBzvc-qjJqLPvl_OTor9f7gDeM&_nc_ohc=4-m2KeWfxiAQ7kNvgHTa6LT&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fhan14-4.fna&_nc_gid=A7vpkftiZUYcreDIkUAknzH&oh=00_AYC0sLKbnn-xss1Pz7z5qlIh4FgmuIyea1ONlQk8WQ-shQ&oe=67470074"
            alt=""
            className="rounded-full"
          />
          <span className="absolute right-[1px] bottom-0 w-[14px] h-[14px] bg-green-600 rounded-full border-2 border-[#252323]"></span>
        </div>
        <div className="mt-[2px]">
          <h3 className="text-white font-[500] text-[15px] truncate max-w-[300px]">Ngô Mạnh Thông </h3>
          <div className="text-[12.5px] font-[500] text-[#b0b3b8] flex"><p className="truncate max-w-[300px]">Bạn: ngon</p><span>.10 ngày</span></div>
        </div>
        <div className="group-hover:visible invisible hover:bg-[#47484b] bg-opacity-55 btn-options absolute right-8 top-[50%] translate-y-[-50%] w-[30px] h-[30px] flex items-center justify-center rounded-full text-[#b0b3b8] cursor-pointer bg-[#252323]"
          style={{ boxShadow: '0 0 2px white' }}>
          <SlOptions size={13} />
        </div>
      </div> */}
      <div className="group relative bg-opacity-55 rounded-lg flex px-2 py-[10px] gap-2 cursor-pointer hover:bg-opacity-100 hover:bg-[#47484b]">
        <div className="thumbnail relative w-[48px] h-[48px] object-cover">
          <img src={avatar_url}
            alt=""
            onLoad={handleSetLoading}
            className="rounded-full"
          />
          {activeStatus && <span className="absolute right-[1px] bottom-0 w-[14px] h-[14px] bg-green-600 rounded-full border-2 border-[#252323]"></span>}
        </div>
        <div className="mt-[2px]">
          <h3 className="text-white font-[500] text-[15px] truncate max-w-[300px]">{chat_name}</h3>
          <div className="text-[12.5px] font-[500] text-[#b0b3b8] flex">
            <p className="truncate max-w-[300px]">
              {user_id === user?.user_id ? 'Bạn' : sender_last_name}: {
                content ? content : video_url
              }
            </p>
            <span className="ml-1">. {timeSentAt}</span></div>
        </div>
        <div className="group-hover:visible invisible hover:bg-[#47484b] bg-opacity-55 btn-options absolute right-8 top-[50%] translate-y-[-50%] w-[30px] h-[30px] flex items-center justify-center rounded-full text-[#b0b3b8] cursor-pointer bg-[#252323]"
          style={{ boxShadow: '0 0 2px white' }}>
          <SlOptions size={13} />
        </div>
      </div>
    </div>
  );
}
export default ChatItem;