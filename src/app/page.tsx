import SidebarNavigation from "../components/SidebarNavigation";

const Home = () => {
  return (
    <main className=" bg-[#1a1b1b] h-[100vh] p-4">

      <div className="container h-full  flex  gap-4  m-auto">
        <div className="w-[3%]">
          <SidebarNavigation />
        </div>

        {/* 24.5% */}
        <div className="min-w-[32.5%] bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light">
        </div>

        <div className="flex-1 flex gap-4">
          <div className="flex-1 bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light">

          </div>
          {/* <div className="min-w-[33%] bg-[#47484b] bg-opacity-15 rounded-xl shadow-custom-light">

        </div> */}
        </div>
      </div>

    </main>
  );
}
export default Home;
