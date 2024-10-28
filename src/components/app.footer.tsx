import { NextPage } from "next";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className="bg-white">
        <div className="pt-5 max-w-[980px] m-auto text-[#737373] max-lg:px-5">
          <ul className="flex text-xs gap-3 border-b pb-5 flex-wrap">
            <li>Tiếng Việt</li>
            <li>English (UK)</li>
            <li>中文(台灣)</li>
            <li>한국어</li>
            <li>日本語</li>
            <li>Français (France)</li>
            <li>ภาษาไทย</li>
            <li>ภาษาไทย</li>
            <li>Español</li>
            <li>Português (Brasil)</li>
            <li>Deutsch</li>
            <li>Italiano</li>
          </ul>
          <ul className="flex text-xs gap-3 border-b pb-5 flex-wrap mt-5">
            <li>Đăng ký</li>
            <li>Đăng nhập</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Video</li>
            <li>Địa điểm</li>
            <li>Trò chơi</li>
            <li>Marketplace</li>
            <li>Meta Pay</li>
            <li>Cửa hàng trên Meta</li>
            <li>Meta Quest</li>
            <li>Ray-Ban Meta</li>
            <li>Meta AI</li>
            <li>Instagram</li>
            <li>Threads</li>
            <li>Chiến dịch gây quỹ</li>
            <li>Dịch vụ</li>
            <li>Trung tâm thông tin bỏ phiếu</li>
            <li>Chính sách quyền riêng tư</li>
            <li>Trung tâm quyền riêng tư</li>
            <li>Nhóm</li>
            <li>Giới thiệu</li>
            <li>Tạo quảng cáo</li>
            <li>Tạo Trang</li>
            <li>Nhà phát triển</li>
            <li>Tuyển dụng</li>
            <li>Cookie</li>
            <li>Lựa chọn quảng cáo</li>
            <li>Điều khoản</li>
            <li>Trợ giúp</li>
            <li>Tải thông tin liên hệ lên & đối tượng không phải người dùng</li>
            <li>Cài đặt</li>
            <li>Nhật ký hoạt động</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
