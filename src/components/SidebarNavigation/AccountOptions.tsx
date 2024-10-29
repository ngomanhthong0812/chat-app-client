import { TiThListOutline } from "react-icons/ti";

interface IProps { }

const AccountOptions: React.FC<IProps> = () => {
    return (
        <div className="account flex flex-col items-center justify-center gap-2 absolute bottom-0 left-[5px]">
            <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-1/65838514_835314680203196_7493673885099884544_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFaMvcULFQuK01VrdXVgfpAcesKwMaWrIpx6wrAxpasipl8NbrGgyA6DO_SVaeBzvc-qjJqLPvl_OTor9f7gDeM&_nc_ohc=4-m2KeWfxiAQ7kNvgHTa6LT&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AFcJANj2morSo1gZiJ9uWTJ&oh=00_AYDGewQKyHE2KtjbJr4MA0AHv0DOvxAgiZhKEEn0_8SxFQ&oe=6746C834" alt="" className="flex w-[32px] h-[32px] object-cover rounded-full cursor-pointer" />
            <div className="flex w-[34px] h-[34px] items-center justify-center rounded-full text-[#dadada] cursor-pointer bg-[#47484b] bg-opacity-75 hover:bg-opacity-100">
                <TiThListOutline size={18} />
            </div>
        </div>
    );
}

export default AccountOptions;