"use client";
import Footer from "@/src/components/app.footer";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {}

const Register: NextPage<Props> = () => {
  const router = useRouter(); // Khởi tạo router ở đầu
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [birthDay, setBirthDay] = useState<number>(1);
  const [birthMonth, setBirthMonth] = useState<number>(1);
  const [birthYear, setBirthYear] = useState<number>(2024);
  const [gender, setGender] = useState<string>("male");
  const [error, setError] = useState<string>(""); // State để lưu thông báo lỗi
  const [successMessage, setSuccessMessage] = useState<string>(""); // State để lưu thông báo thành công

  // Hàm xử lý khi bấm nút Đăng ký
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Kiểm tra xem các trường đã được điền đầy đủ chưa
    if (!firstName || !lastName || !email || !password) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    // Nếu tất cả đều hợp lệ, log thông tin
    // console.log("Họ:", firstName);
    // console.log("Tên:", lastName);
    // console.log("Email:", email);
    // console.log("Mật khẩu:", password);
    // console.log("Ngày sinh:", `${birthDay}/${birthMonth}/${birthYear}`);
    // console.log("Giới tính:", gender);
    //
    const requestData = {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      email: email,
      password: password,
      birth_date: `${birthYear}-${String(birthMonth).padStart(2, "0")}-${String(
        birthDay
      ).padStart(2, "0")}`,
      active_status: 0,
    };
    console.log(requestData);

    try {
      // Gửi yêu cầu PUT tới API
      const response = await fetch("http://localhost:8080/api/register", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData), // Sử dụng dữ liệu động từ form
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Có lỗi xảy ra. Vui lòng thử lại.");
        setSuccessMessage("");
        console.log("Có lỗi xảy ra. Vui lòng thử lại.");
      } else {
        const data = await response.json();
        console.log(data); // Xử lý phản hồi từ API
        setSuccessMessage("Đăng ký thành công!");
        setError("");
        console.log("Đăng ký thành công!");
        // Chuyển hướng về trang đăng nhập

        router.push("/"); // Đường dẫn tới trang đăng nhập
      }
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
      console.error("Có lỗi xảy ra. Vui lòng thử lại. : ", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center pb-48 text-center px-5 bg-[#f2f4f7] flex-col">
        {/* Logo */}
        <div className="pb-[16px]">
          <img className="h-[100px]" src="/logofb.svg" alt="" />
        </div>
        {/* Form */}
        <form
          className="box-shadow w-auto max-w-[450px] bg-white rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="border-b mt-3 ">
            <h1 className="text-2xl leading-8 font-bold">Tạo tài khoản mới</h1>
            <h2 className="text-sm leading-6 text-[#606770] pb-2">
              Nhanh chóng và dễ dàng.
            </h2>
          </div>
          <div className="p-4">
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}{" "}
            {/* Hiển thị thông báo lỗi */}
            {successMessage && (
              <div className="text-green-500 text-sm mb-4">
                {successMessage}
              </div>
            )}{" "}
            {/* Hiển thị thông báo thành công */}
            <div className="flex gap-2">
              <div className="border w-2/3 rounded">
                <input
                  type="text"
                  placeholder="Họ"
                  className="w-full px-4 py-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} // Cập nhật giá trị
                />
              </div>
              <div className="border w-2/3 rounded">
                <input
                  type="text"
                  placeholder="Tên"
                  className="w-full px-4 py-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} // Cập nhật giá trị
                />
              </div>
            </div>
            {/* Ngày sinh */}
            <div className="block">
              <span className="text-start flex text-xs text-[#606770] mb-1 mt-3">
                Ngày sinh
              </span>
              <div className="flex gap-2">
                <select
                  aria-label="Ngày"
                  name="birthday_day"
                  className="border w-1/3 p-2 rounded"
                  value={birthDay}
                  onChange={(e) => setBirthDay(Number(e.target.value))} // Cập nhật giá trị
                >
                  {[...Array(31).keys()].map((day) => (
                    <option key={day + 1} value={day + 1}>
                      {day + 1}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="Tháng"
                  className="border w-1/3 p-2 rounded"
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(Number(e.target.value))} // Cập nhật giá trị
                >
                  {[...Array(12).keys()].map((month) => (
                    <option key={month + 1} value={month + 1}>
                      Tháng {month + 1}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="Năm"
                  name="birthday_year"
                  className="border w-1/3 p-2 rounded"
                  value={birthYear}
                  onChange={(e) => setBirthYear(Number(e.target.value))} // Cập nhật giá trị
                >
                  {[...Array(100).keys()].map((year) => (
                    <option key={2024 - year} value={2024 - year}>
                      {2024 - year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Giới tính */}
            <div className="block">
              <span className="text-start flex text-xs text-[#606770] mb-1 mt-3">
                Giới tính
              </span>
              <div className="flex gap-2">
                <div className="border p-2 rounded w-1/2">
                  <label className="flex justify-between">
                    Nữ
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"} // Kiểm tra giá trị đã chọn
                      onChange={() => setGender("female")} // Cập nhật giá trị
                    />
                  </label>
                </div>
                <div className="border p-2 rounded w-1/2">
                  <label className="flex justify-between">
                    Nam
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"} // Kiểm tra giá trị đã chọn
                      onChange={() => setGender("male")} // Cập nhật giá trị
                    />
                  </label>
                </div>
                <div className="border p-2 rounded w-2/3">
                  <label className="flex justify-between">
                    Tùy chỉnh
                    <input
                      type="radio"
                      name="gender"
                      value="custom"
                      checked={gender === "custom"} // Kiểm tra giá trị đã chọn
                      onChange={() => setGender("custom")} // Cập nhật giá trị
                    />
                  </label>
                </div>
              </div>
            </div>
            {/* Số di động hoặc Email */}
            <div className="mt-4 border rounded">
              <input
                type="email"
                className="w-full p-[8px]"
                placeholder="Số di động hoặc Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Cập nhật giá trị
              />
            </div>
            {/* Mật khẩu mới */}
            <div className="mt-4 border rounded">
              <input
                type="password" // Đổi sang type password
                className="w-full p-[8px]"
                placeholder="Mật khẩu mới"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Cập nhật giá trị
              />
            </div>
            {/* Thông báo điều khoản */}
            <div className="flex text-start flex-col">
              <p className="mt-3 text-xs text-[#777]">
                Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin
                liên hệ của bạn lên Facebook.{" "}
                <a href="#" className="text-[#385898] hover:underline">
                  Tìm hiểu thêm.
                </a>
              </p>
              <p className="mt-2 text-xs text-[#777]">
                Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
                <a href="#" className="text-[#385898] hover:underline">
                  {" "}
                  Điều khoản
                </a>
                ,{" "}
                <a href="#" className="text-[#385898] hover:underline">
                  Chính sách quyền riêng tư
                </a>{" "}
                và{" "}
                <a href="#" className="text-[#385898] hover:underline">
                  Chính sách cookie
                </a>
                của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua
                SMS và hủy nhận bất kỳ lúc nào.
              </p>
            </div>
            {/* Nút Đăng ký */}
            <div className="mt-5">
              <button
                type="submit"
                className="bg-[#36a420] border border-[#42b72a] py-1 px-16 hover:bg-[#42b72a] rounded-md text-white font-bold text-lg mt-2"
              >
                Đăng ký
              </button>
            </div>
            {/* Liên kết đến trang đăng nhập */}
            <div className="mt-5 text-[17px] text-[#1877f2]">
              <Link href="/login">Bạn đã có tài khoản ư?</Link>
            </div>
          </div>
        </form>
        {/* end form */}
      </div>
      {/* end */}
      <Footer />
    </div>
  );
};

export default Register;
