import SearchInput from "../components/SearchInput";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div id="top" className={`mb-10 relative`}>
        <Header />
        <div className="darken-top bg-[#030712b3] pb-15 ">
          <h2 className="text-white text-center text-[1.8rem] font-bold">
            Descobre as principais novidades de filmes, séries e animes aqui
            <span>.</span>
          </h2>
          <SearchInput />
        </div>
      </div>

      <div id="content" className="flex gap-5">
        {/* <div
          id="sidebar"
          className="max-h-100 min-h-20 w-[25%] bg-gray-900 rounded-[5px]"
        ></div> */}
        <main className="w-[90%] mx-auto min-h-100 max-h-fit grid grid-cols-4 gap-x-[2em] gap-y-[2em]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default HomePage;
//        <div className="search-icon w-12 h-12 bg-slate-400 flex justify-center items-center"></div>

//border-1 border-solid border-red-50 bg-slate-500
