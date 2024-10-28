import Footer from "@/src/components/app.footer";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Register: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className="flex justify-center items-center pb-48 text-center px-5 bg-[#f2f4f7] flex-col">
        {/*Logo*/}
        <div className=" pb-[16px]">
          <img className="h-[100px] " src="/logofb.svg" alt="" />
        </div>
        {/*From*/}
        <div className="box-shadow w-auto max-w-[450px] bg-white rounded-md">
          <div className="border-b mt-3 ">
            <h1 className="text-2xl leading-8 font-bold">Tạo tài khoản mới</h1>
            <h2 className="text-sm leading-6 text-[#606770] pb-2">
              Nhanh chóng và dễ dàng.
            </h2>
          </div>
          <div className="p-4">
            <div className="flex gap-2">
              <div className="border w-2/3  rounded">
                <input
                  type="text"
                  placeholder="Họ"
                  className="w-full px-4 py-2"
                />
              </div>
              <div className="border w-2/3 rounded">
                <input
                  type="text"
                  placeholder="Tên"
                  className="w-full px-4 py-2"
                />
              </div>
            </div>
            {/*  */}
            <div className="block">
              <span className="text-start flex text-xs text-[#606770] mb-1 mt-3">
                Ngày sinh
              </span>
              <div className="flex gap-2">
                <select
                  aria-label="Ngày"
                  name="birthday_day"
                  className="border w-1/3 p-2 rounded"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select aria-label="Tháng" className="border w-1/3 p-2 rounded">
                  <option value="1">Tháng 1</option>
                  <option value="2">Tháng 2</option>
                  <option value="3">Tháng 3</option>
                  <option value="4">Tháng 4</option>
                  <option value="5">Tháng 5</option>
                  <option value="6">Tháng 6</option>
                  <option value="7">Tháng 7</option>
                  <option value="8">Tháng 8</option>
                  <option value="9">Tháng 9</option>
                  <option value="10">Tháng 10</option>
                  <option value="11">Tháng 11</option>
                  <option value="12">Tháng 12</option>
                </select>
                <select
                  aria-label="Năm"
                  name="birthday_year"
                  className="border w-1/3 p-2 rounded"
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                  <option value="1959">1959</option>
                  <option value="1958">1958</option>
                  <option value="1957">1957</option>
                  <option value="1956">1956</option>
                  <option value="1955">1955</option>
                  <option value="1954">1954</option>
                  <option value="1953">1953</option>
                  <option value="1952">1952</option>
                  <option value="1951">1951</option>
                  <option value="1950">1950</option>
                  <option value="1949">1949</option>
                  <option value="1948">1948</option>
                  <option value="1947">1947</option>
                  <option value="1946">1946</option>
                  <option value="1945">1945</option>
                  <option value="1944">1944</option>
                  <option value="1943">1943</option>
                  <option value="1942">1942</option>
                  <option value="1941">1941</option>
                  <option value="1940">1940</option>
                  <option value="1939">1939</option>
                  <option value="1938">1938</option>
                  <option value="1937">1937</option>
                  <option value="1936">1936</option>
                  <option value="1935">1935</option>
                  <option value="1934">1934</option>
                  <option value="1933">1933</option>
                  <option value="1932">1932</option>
                  <option value="1931">1931</option>
                  <option value="1930">1930</option>
                  <option value="1929">1929</option>
                  <option value="1928">1928</option>
                  <option value="1927">1927</option>
                  <option value="1926">1926</option>
                  <option value="1925">1925</option>
                  <option value="1924">1924</option>
                  <option value="1923">1923</option>
                  <option value="1922">1922</option>
                  <option value="1921">1921</option>
                  <option value="1920">1920</option>
                  <option value="1919">1919</option>
                  <option value="1918">1918</option>
                  <option value="1917">1917</option>
                  <option value="1916">1916</option>
                  <option value="1915">1915</option>
                  <option value="1914">1914</option>
                  <option value="1913">1913</option>
                  <option value="1912">1912</option>
                  <option value="1911">1911</option>
                  <option value="1910">1910</option>
                  <option value="1909">1909</option>
                  <option value="1908">1908</option>
                  <option value="1907">1907</option>
                  <option value="1906">1906</option>
                  <option value="1905">1905</option>
                </select>
              </div>
            </div>
            {/*  */}
            <div className="block">
              <span className="text-start flex text-xs text-[#606770] mb-1 mt-3">
                Giới tính
              </span>
              <div className="flex gap-2">
                <div className="border p-2 rounded w-1/2">
                  <label htmlFor="" className="flex justify-between">
                    Nữ
                    <input type="radio" />
                  </label>
                </div>
                {/*  */}
                <div className="border p-2 rounded w-1/2">
                  <label htmlFor="" className="flex justify-between">
                    Nam
                    <input type="radio" />
                  </label>
                </div>
                {/*  */}
                <div className="border p-2 rounded w-2/3">
                  <label htmlFor="" className="flex justify-between">
                    Tùy chỉnh
                    <input type="radio" />
                  </label>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="w-full mt-4">
              <select
                aria-label="Chọn danh xưng"
                className="border rounded w-full px-1 py-2"
              >
                <option value="0">Chọn danh xưng</option>
                <option value="1">Cô ấy: "Chúc cô ấy sinh nhật vui vẻ!"</option>
                <option value="2">
                  Anh ấy: "Chúc anh ấy sinh nhật vui vẻ!"
                </option>
                <option value="6">Họ: "Chúc họ sinh nhật vui vẻ!"</option>
              </select>
              <span className="text-start flex text-xs text-[#606770] mb-1 mt-2">
                Danh xưng của bạn hiển thị với tất cả mọi người.
              </span>
            </div>
            {/*  */}
            <div className=" mt-4 border rounded">
              <input
                type="text"
                className="w-full p-[8px]"
                placeholder="Số di động hoặc Email"
              />
            </div>
            {/*  */}
            <div className=" mt-4 border rounded">
              <input
                type="text"
                className="w-full p-[8px]"
                placeholder="Mật khẩu mới"
              />
            </div>
            {/*  */}
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
            {/*  */}
            <div className="mt-5">
              <button className="bg-[#36a420] border border-[#42b72a] py-1 px-16 hover:bg-[#42b72a] rounded-md text-white font-bold text-lg mt-2">
                Đăng ký
              </button>
            </div>
            {/*  */}
            <div className="mt-5 text-[17px] text-[#1877f2]">
              <Link href="/login">Bạn đã có tài khoản ư ?</Link>
            </div>
            {/* end */}
          </div>
        </div>
        {/* end from */}
      </div>
      {/* end */}
      <Footer></Footer>
    </div>
  );
};

export default Register;
