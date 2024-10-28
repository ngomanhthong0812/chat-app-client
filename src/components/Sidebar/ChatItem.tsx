import { NextPage } from "next";

interface Props {
  key: number;
  name: string;
  message: string;
  avatar: string;
}

const ChatItem: NextPage<Props> = (props) => {
  return (
    <div className="bg-[#ffffff2e] rounded-md mt-2 relative group ">
      <div className="p-2 flex items-center">
        <img src={props.avatar} alt="" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col ml-2">
          <span>{props.name}</span>
          <div className="block text-xs text-[#ffffff80]">
            <span className="mr-1">Bạn:</span>
            <span>{props.message  }</span>
          </div>
        </div>

        <div className="absolute right-5 invisible group-hover:visible border border-gray-400 w-7 h-7 rounded-full  bg-zinc-800 flex items-center justify-center text-center">
          <img src="/dot-menu-more-2-svgrepo-com.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
