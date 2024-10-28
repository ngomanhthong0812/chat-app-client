import { v4 as uuid } from 'uuid'
import { BsChatFill } from "react-icons/bs";
import { IoStorefrontSharp } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { BsArchiveFill } from "react-icons/bs";

export const SIDEBAR_NAV = [
    {
        id: uuid(),
        name: 'Đoạn chat',
        icon: <BsChatFill size={19} />,
        active: true,
    },
    {
        id: uuid(),
        name: 'Marketplace',
        icon: <IoStorefrontSharp size={19} />,
        active: false,
    },
    {
        id: uuid(),
        name: 'Tin nhắn đang chờ',
        icon: <BsChatDotsFill size={19} />,
        active: false,
    },
    {
        id: uuid(),
        name: 'Đoạn chat đã lưu trữ',
        icon: <BsArchiveFill size={19} />,
        active: false,
    }
]