import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="flex justify-center text-center items-center">
      <div className="grid grid-cols-2">
        <div className="c">
          <img src="/logofb.svg" alt="" />
          <p>
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
            của bạn.
          </p>
        </div>
        {/* form login */}
        <div className="">
          <input type="text" placeholder="Nhập tên người dùng" />
        </div>
      </div>
    </div>
  );
};

export default Page;
