import { TiThListOutline } from "react-icons/ti";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
    LifeBuoy,
    LogOut,
    Settings,
    User,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"
import useUser from "@/src/hook/useUser";

interface IProps {
    toggleSidebar: () => void,
    isSidebarExpanded: boolean,
}

const AccountOptions: React.FC<IProps> = ({ toggleSidebar, isSidebarExpanded }) => {
    const router = useRouter();

    const user = useUser();

    const handleLogout = async () => {
        const response = await axios.post('http://localhost:8080/api/logout');

        if (response.status === 200) {
            router.push('/login');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } else {
            const error = await response.data.json();
            console.error(error.message);
        }

    }
    return (
        <div className={`account flex ${isSidebarExpanded ? 'w-[235px] pl-[6px]' : 'w-[44px] flex-col'}  items-center justify-between gap-2 absolute bottom-0 left-0`}>
            <div className="flex items-center gap-1 z-[999]">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button>
                            <img src={user?.avatar_url} alt={user?.last_name}
                                className="flex w-[32px] h-[32px] object-cover rounded-full cursor-pointer" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80 z-[999] bg-[#272727] border-none text-white text-[15px] ml-5">
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
                                <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                                    <User />
                                </div>
                                <span>Thông tin tài khoản</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
                                <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                                    <Settings />
                                </div>
                                <span>Tuỳ chọn</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator className="bg-[#47484b] bg-opacity-55" />

                        <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white">
                            <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                                <LifeBuoy />
                            </div>
                            <span>Hổ trợ</span>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator className="bg-[#47484b] bg-opacity-55" />

                        <DropdownMenuItem className="cursor-pointer hover:!bg-[#47484b] bg-opacity-55 hover:!text-white" onClick={handleLogout}>
                            <div className="flex w-7 h-7 p-[5px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-55">
                                <LogOut />
                            </div>
                            <span>Đăng xuất</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {isSidebarExpanded && <span className="text-[15px] font-medium leading-[19px] text-white">{user?.last_name}</span>}
            </div>
            <div
                className="flex w-[34px] h-[34px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-75 hover:bg-opacity-100"
                onClick={toggleSidebar}>
                <TiThListOutline size={18} />
            </div>
        </div>
    );
}

export default AccountOptions;