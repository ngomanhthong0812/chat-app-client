"use client"
import { TbEdit } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { GrFormPreviousLink } from "react-icons/gr";
import { useState } from "react";

interface IProps { }
const SearchBar: React.FC<IProps> = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [showClose, setShowClose] = useState<boolean>(false);

    const handleClose = () => {
        setShowClose(false);
        setSearchValue("");
    }
    return (
        <>
            <div className="text-white flex items-center justify-between px-4">
                <h1 className="text-[25px] font-bold">Đoạn chat</h1>
                <div className="flex w-[34px] h-[34px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-75 hover:bg-opacity-100 ">
                    <TbEdit size={20} />
                </div>
            </div>
            <div className="text-[#b0b3b8] px-2 mt-2 flex items-center gap-2">
                {showClose
                    &&
                    <GrFormPreviousLink
                        size={30}
                        className="text-[#dadada] cursor-pointer"
                        onClick={handleClose}
                    />
                }
                <div className="relative w-full">
                    <span className="absolute top-0 left-3 flex items-center justify-center h-full">
                        <IoSearch size={20} />
                    </span>
                    <input type="text"
                        placeholder="Tìm kiếm trên Messenger"
                        className="w-full outline-none bg-[#47484b] bg-opacity-55 rounded-[25px] p-[7px] px-10 text-[14.5px] text-[#dadada] placeholder-[#dadada]"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowClose(true)} />
                    {searchValue !== ""
                        &&
                        <span
                            className="absolute top-[50%] right-[2px] w-[30px] h-[30px] translate-y-[-50%] rounded-full flex items-center justify-center bg-[#5e5e61] bg-opacity-75 hover:bg-opacity-100 text-[#dadada] cursor-pointer"
                            onClick={handleClose}
                        >
                            <IoClose size={20} />
                        </span>
                    }

                </div>
            </div >
        </>
    );
}

export default SearchBar;