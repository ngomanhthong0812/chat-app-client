"use client"

import Footer from "@/src/components/app.footer";
import Link from "next/link";

import { NextPage } from "next";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import BounceLoader from "react-spinners/BounceLoader";

interface Props { }

interface LoginData {
  email: string;
  password: string;
}

const PageLogin: NextPage<Props> = ({ }) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      router.push('/');
    }
  }, []);


  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateLoginInput(data: LoginData): string | boolean {
    if (!data.email || !data.password) {
      return "Vui lòng nhập đầy đủ email và mật khẩu"
    }
    if (!validateEmail(data.email)) {
      return "Email không hợp lệ"
    }
    if (data.password.length < 6) {
      return "Mật khẩu phải chứa ít nhất 6 ký tự"
    }

    return true;
  }

  const handleSubmit = async (data: LoginData) => {
    setLoading(true);
    if (validateLoginInput(data) === true) {
      try {
        const response = await axios.post('http://localhost:8080/api/login', data);
        const token = response?.data.token;
        const user = response?.data.user;
        if (token && user) {
          router.push('/');
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const responseData = error.response.data;
          setError(responseData.msg || "Đã xảy ra lỗi không xác định");
        } else {
          setError("Đã xảy ra lỗi không xác định");
        }
        setLoading(false);
      }

    } else {
      setError(validateLoginInput(data));
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const iEmail: string = email.trim();
    const data: LoginData = { email: iEmail, password };
    handleSubmit(data);
  };

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
                <form action="" onSubmit={handleFormSubmit}>
                  <div className="input-z mb-3 py-2">
                    <input
                      className="flex w-full items-start border-0 outline-none px-4 py-1"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete='current-email'
                    />
                  </div>
                  <div className="input-z  py-2">
                    <input
                      className="flex w-full items-start border-0 outline-none px-4 py-1"
                      type="password"
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="text-red-500 text-sm text-start px-2 mt-2">{error}</div>
                  {/*  */}
                  <button
                    className="bg-[#0866ff] w-full min-h-[45px] rounded-md text-white font-bold text-lg mt-3 flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ?
                      <div className="h-full">
                        <BounceLoader
                          color="#ffffff"
                          size={20}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      </div>
                      :
                      'Đăng nhập'
                    }
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
