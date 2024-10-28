import { NextPage } from "next";
import { IoSearch } from "react-icons/io5";

interface Props {}

const SearchBar: NextPage<Props> = ({}) => {
  return (
    <div className="mt-2">
      <div className="bg-[#47484b] flex rounded-full px-3 py-2 justify-center items-center">
        <IoSearch size={20} />
        <input
          type="search"
          placeholder="Tìm kiếm trên Messenger"
          className="w-full bg-transparent border-none outline-none focus:border-none focus:outline-none pl-2"
        />
      </div>
    </div>
  );
};

export default SearchBar;
