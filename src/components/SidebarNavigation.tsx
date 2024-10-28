import { SIDEBAR_NAV } from '../constants/SidebarNavigation'
interface IProps { }
const SidebarNavigation: React.FC<IProps> = () => {
    return (
        <div className="flex justify-center">
            <div className="navbar">
                {SIDEBAR_NAV.map(item => (
                    <div className={`p-3 rounded-lg text-[#b0b3b8] cursor-pointer hover:bg-[#47484b] bg-opacity-75 ${item.active && 'bg-[#47484b] !text-[white]'}`}>
                        {item.icon}
                    </div>
                ))}
                demo
            </div>
        </div>
    );
}
export default SidebarNavigation;