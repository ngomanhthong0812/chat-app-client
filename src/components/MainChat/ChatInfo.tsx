import { NextPage } from "next";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

interface Props {}

const ChatInfo: NextPage<Props> = ({}) => {
  return (
    <div className="">
      <div className="w-full text-white flex flex-col items-center text-center justify-center mt-5">
        <img
          src="/avatar-trang-4.jpg"
          alt=""
          className="rounded-full w-[72px]"
        />
        <span className="text-[15px] font-bold leading-[19px] mt-2">Quang</span>
        <span className="text-[13px] text-[#b0b3b8]">Đang hoạt động</span>

        <div className="flex gap-3 mt-5">
          <div className="flex flex-col justify-center items-center text-center text-[13px] cursor-pointer text-[#b0b3b8] w-30">
            <div className="bg-[#3e4042] p-2 rounded-full">
              <FaUserCircle size={20} />
            </div>
            <span>Trang cá nhân</span>
          </div>
          <div className="flex  flex-col justify-center items-center text-center text-[13px] cursor-pointer text-[#b0b3b8] w-30">
            <div className="bg-[#3e4042] p-2 rounded-full">
              <FaBell size={20} />
            </div>
            <span>Tắt thông báo</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center text-[13px] cursor-pointer text-[#b0b3b8] w-30">
            <div className="bg-[#3e4042] p-2 rounded-full">
              <IoSearch size={20} />
            </div>
            <span>Tìm kiếm</span>
          </div>
        </div>
        <div className="mt-5 text-start w-full px-4">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-between w-full hover:bg-[#3e4042] cursor-pointer p-3 rounded-md ">
              <div className="font-medium ">Thông tin đoạn chat</div>
              <div>
                <IoIosArrowDown />
              </div>
            </li>
            <li className="flex items-center justify-between w-full hover:bg-[#3e4042] cursor-pointer p-3 rounded-sm ">
              <div className="font-medium ">Tùy chỉnh đoạn chat</div>
              <div>
                <IoIosArrowDown />
              </div>
            </li>
            <li className="flex items-center justify-between w-full hover:bg-[#3e4042] cursor-pointer p-3 rounded-sm ">
              <div className="font-medium ">File phương tiện & flie</div>
              <div>
                <IoIosArrowDown />
              </div>
            </li>
            <li className="flex items-center justify-between w-full hover:bg-[#3e4042] cursor-pointer p-3 rounded-sm ">
              <div className="font-medium ">Quyền riêng tư & hỗ trợ</div>
              <div>
                <IoIosArrowDown />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
