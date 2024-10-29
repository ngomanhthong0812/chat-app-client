"use client"

import { useState } from 'react';
import { SIDEBAR_NAV } from '../../constants/SidebarNavigation'

interface IProps { }

const Navbar: React.FC<IProps> = () => {
    const [sidebarNav, setSidebarNav] = useState(SIDEBAR_NAV);

    const handleSubmit = (id: string) => {
        const update = sidebarNav.map(item => (
            item.id === id ? { ...item, active: true } : { ...item, active: false }
        ));
        setSidebarNav(update);
    }

    return (
        <div className="navbar">
            {sidebarNav.map(item => (
                <div key={item.id}
                    className={`group w-[44px] h-[44px] relative flex items-center justify-center p-2 rounded-lg text-[#b0b3b8] cursor-pointer hover:bg-[#47484b] bg-opacity-75 ${item.active && "bg-[#47484b] !text-[#dadada]"}`}
                    onClick={() => handleSubmit(item.id)}
                >
                    <p
                        className="flex z-[999] absolute invisible left-full top-[50%] translate-y-[-50%] whitespace-nowrap text-black text-xs p-2 rounded-lg bg-white bg-opacity-95 group-hover:visible duration-100 delay-100">
                        {item.name}
                    </p>
                    {item.icon}
                </div>
            ))}
        </div>
    )
}

export default Navbar;