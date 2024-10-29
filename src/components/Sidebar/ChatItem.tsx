import { SlOptions } from "react-icons/sl";

interface IProps { }
const ChatItem: React.FC<IProps> = () => {
    return (
        <div>
            <div className="group relative bg-[#47484b] bg-opacity-55 rounded-lg flex px-2 py-[10px] gap-2 cursor-pointer">
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
                <div className="group-hover:visible invisible btn-options absolute right-8 top-[50%] translate-y-[-50%] w-[30px] h-[30px] flex items-center justify-center rounded-full text-[#b0b3b8] cursor-pointer bg-[#252323]"
                    style={{ boxShadow: '0 0 2px white' }}>
                    <SlOptions size={13} />
                </div>
            </div>
            <div className="group relative bg-opacity-55 rounded-lg flex px-2 py-[10px] gap-2 cursor-pointer hover:bg-opacity-100 hover:bg-[#47484b]">
                <div className="thumbnail relative w-[48px] h-[48px] object-cover">
                    <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeFo1Zw82S0L754Ag7XXSEphWt9TLzuBU1Ba31MvO4FTUFx5cJlTPNIKvNOVm4mNPTR6D0dJb9AFv5BLAtK63fUX&_nc_ohc=bcdbOGzydRcQ7kNvgFKI3UO&_nc_zt=24&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AOmUVMMsCjKi2hWiUNSR6hZ&oh=00_AYBs7TtS2fdRKJ8E3LRRpBSFEmuRe6xqSkfYnU0C3bAVbg&oe=6747167A"
                        alt=""
                        className="rounded-full"
                    />
                    <span className="absolute right-[1px] bottom-0 w-[14px] h-[14px] bg-green-600 rounded-full border-2 border-[#252323]"></span>
                </div>
                <div className="mt-[2px]">
                    <h3 className="text-white font-[500] text-[15px] truncate max-w-[300px]">Ngô Mạnh Thông </h3>
                    <div className="text-[12.5px] font-[500] text-[#b0b3b8] flex"><p className="truncate max-w-[300px]">Bạn: ngon</p><span>.10 ngày</span></div>
                </div>
                <div className="group-hover:visible invisible btn-options absolute right-8 top-[50%] translate-y-[-50%] w-[30px] h-[30px] flex items-center justify-center rounded-full text-[#b0b3b8] cursor-pointer bg-[#252323]"
                    style={{ boxShadow: '0 0 2px white' }}>
                    <SlOptions size={13} />
                </div>
            </div>
        </div>
    );
}
export default ChatItem;