import Footer from "@/src/components/app.footer";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const PageLogin: NextPage<Props> = ({}) => {
  return (
    <div className="">
      <div className=" flex justify-center items-center h-auto py-36 max-lg:pb-14 max-lg:pt-0 text-center  bg-[#f2f4f7]">
        <div className="grid grid-cols-2 gap-16 max-w-[980px] m-auto max-lg:gap-5 max-lg:flex max-lg:flex-col ">
          {/*  */}
          <div className="text-stzart max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
            <div className="pt-[112px] pb-[16px] max-lg:pt-0">
              <img
                className="h-[106px] -m-[27px] max-lg:m-0"
                src="/logofb.svg"
                alt=""
              />
            </div>
            <h2 className="text-[28px] font-normal text-start w-[500px] leading-8 max-lg:w-[396px] max-lg:justify-center max-lg:text-center max-lg:text-[24px] max-lg:flex">
              Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
              của bạn.
            </h2>
          </div>
          {/* form login */}
          <div className="from flex flex-col justify-end items-end max-lg:justify-center max-lg:items-center">
            <div className=" w-[85%] h-auto flex flex-col box-shadow rounded-md bg-white">
              <div className="p-4 flex flex-col  ">
                <form action="">
                  <div className="input-z mb-3 ">
                    <input
                      className="flex items-start border-0 outline-none px-4 py-[14px]"
                      type="email"
                      placeholder="Email hoặc số điện thoại"
                    />
                  </div>
                  <div className="input-z my-[6px]">
                    <input
                      className="flex items-start border-0 outline-none px-4 py-[14px]"
                      type="password"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  {/*  */}
                  <button className="bg-[#0866ff] w-full py-2 rounded-md text-white font-bold text-lg mt-2">
                    Đăng nhập
                  </button>
                </form>
                <Link
                  href="#"
                  className="text-[#0866ff] text-base font-medium mt-[16px]"
                >
                  Quên mật khẩu?
                </Link>
                <div className="_8icz"></div>
                <div className="mt-5 mb-5">
                  <Link
                    href="/register"
                    className="bg-[#42b72a] border border-[#42b72a] py-2 px-4 hover:bg-[#36a420] rounded-md text-white font-bold text-lg mt-2"
                  >
                    Tạo tài khoản mới
                  </Link>
                </div>
              </div>
            </div>

            <div className=" w-[396px] flex mt-5">
              <p>
                {" "}
                <a href="#" className="font-semibold pr-1">
                  Tạo trang
                </a>
                dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <Footer></Footer>
      {/*  */}
    </div>
  );
};

export default PageLogin;
