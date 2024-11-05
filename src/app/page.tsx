"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import ChatList from "../components/Sidebar/ChatList";
import SearchBar from "../components/Sidebar/SearchBar";
import AccountOptions from "../components/SidebarNavigation/AccountOptions";
import GroupList from "../components/SidebarNavigation/GroupList";
import Navbar from "../components/SidebarNavigation/Navbar";
import ChatInfo from "../components/MainChat/ChatInfo";
import MessageList from "../components/MainChat/MessageList";

const Home = () => {
  const [isChatInfoVisible, setChatInfoVisible] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      redirect("/login");
    }
  }, []);

  const toggleChatInfo = () => {
    setChatInfoVisible(!isChatInfoVisible);
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <main className=" bg-[#1a1b1b] h-[100vh] p-4">
      <div className="container h-full flex gap-4 relative m-auto">
        {/* sidebarNav */}
        <div className="w-full h-full absolute">
          <div
            className={`${
              isSidebarExpanded ? "h-[94%]" : "h-[88%]"
            } overflow-y-scroll overflow-x-visible hide-scrollbar`}
          >
            <Navbar isSidebarExpanded={isSidebarExpanded} />
            <GroupList isSidebarExpanded={isSidebarExpanded} />
          </div>
          <AccountOptions
            toggleSidebar={toggleSidebar}
            isSidebarExpanded={isSidebarExpanded}
          />
        </div>
        {/* sidebarNav */}

        {/* sidebar */}
        <div
          className={`${isChatInfoVisible ? "w-[24.5%]" : "w-[32%]"} ${
            isSidebarExpanded ? "ml-[251px] !w-[24.5%]" : "ml-[60px]"
          } bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light flex flex-col z-[99] pt-3`}
        >
          <SearchBar />
          <ChatList />
        </div>
        {/* sidebar */}

        {/* Chat Area */}
        <div className="w-[60%] flex-1 flex gap-4 ">
          <div className="flex-1 bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light flex flex-col z-[99]">
            <MessageList
              toggleChatInfo={toggleChatInfo}
              chat_id={0}
              group_id={1}
            />
          </div>

          {/* Chat Info */}
          {isChatInfoVisible && (
            <div className="min-w-[33%] bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light z-[99]">
              <ChatInfo />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
