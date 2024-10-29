import ChatList from "../components/Sidebar/ChatList";
import SearchBar from "../components/Sidebar/SearchBar";
import AccountOptions from "../components/SidebarNavigation/AccountOptions";
import GroupList from "../components/SidebarNavigation/GroupList";
import Navbar from "../components/SidebarNavigation/Navbar";

const Home = () => {
  return (
    <main className=" bg-[#1a1b1b] h-[100vh] p-4">

      <div className="container h-full flex gap-4 relative m-auto">
        {/* sidebar */}
        <div className="w-full h-full absolute">
          <div className='h-[88%] overflow-y-scroll overflow-x-visible hide-scrollbar'>
            <Navbar />
            <GroupList />
          </div>
          <AccountOptions />
        </div>
        {/* sidebar */}


        {/* 24.5% */}
        <div className="w-[32%] bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light ml-[61px] flex flex-col z-[99] pt-3">
          <SearchBar />
          <ChatList />
        </div>

        <div className="flex-1 flex gap-4">
          <div className="flex-1 bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light flex flex-col z-[99]">

          </div>
          {/* <div className="min-w-[33%] bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light">

        </div> */}
        </div>
      </div>

    </main>
  );
}
export default Home;
