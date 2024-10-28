"use client";
import { useState } from "react";
import ChatInfo from "../components/MainChat/ChatInfo";
import MessageList from "../components/MainChat/MessageList";
import ChatList from "../components/Sidebar/ChatList";
import SearchBar from "../components/Sidebar/SearchBar";
import SidebarNavigation from "../components/SidebarNavigation";

const messages = [
  { text: "Hello!", sender: "me" },
  { text: "Hi there!", sender: "other" },
  { text: "Hi there!", sender: "other" },
  { text: "Hi there!", sender: "other" },
  { text: "Hi there!", sender: "other" },
  { text: "Hi there!", sender: "other" },
  { text: "Hi there!", sender: "other" },
  { text: "Hi there!", sender: "other" },
  { text: "Hi there!", sender: "other" },
  { text: "Hi there!", sender: "other" },
  { text: "Hi there!", sender: "other" },
  { text: "Hi there!", sender: "other" },
  {
    text: "cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặccặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc cặc",
    sender: "other",
  },
  {
    text: "loz loz loz loz loz loz loz loz loz loz loz loz loz loz loz loz",
    sender: "me",
  },
];

const Home = () => {
  const [isChatInfoVisible, setChatInfoVisible] = useState(false);

  const toggleChatInfo = () => {
    setChatInfoVisible(!isChatInfoVisible);
  };

  return (
    <main className=" bg-[#1a1b1b] h-[100vh] p-4">
      <div className="container h-full flex gap-4 m-auto">
        <div className="w-[3%]">
          <SidebarNavigation />
        </div>

        {/* Sidebar */}
        <div
          className={`min-w-[${
            isChatInfoVisible ? "25%" : "33%"
          }] bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light text-white`}
        >
          <div className="p-3">
            <div className="flex justify-between">
              <div className="text-2xl font-bold">Đoạn chat</div>
              <div className="w-9 h-9 mr-2 bg-[#ffffff2e] flex items-center justify-center text-center rounded-full">
                <img src="/pen-square-svgrepo-com.svg" alt="" />
              </div>
            </div>
            <SearchBar />
            <ChatList />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex gap-4">
          <div className="flex-1 bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light">
            <MessageList messages={messages} toggleChatInfo={toggleChatInfo} />
          </div>
        </div>

        {/* Chat Info */}
        {isChatInfoVisible && (
          <div className="min-w-[25%] bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light">
            <ChatInfo />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
