import SearchInput from "../components/SearchInput";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div id="top" className="my-15">
        <h2 className="text-white text-center text-[1.5rem]">
          Descobre as principais novidades de filmes, séries e animes aqui
          <span>.</span>
        </h2>
        <SearchInput />
      </div>

      <div id="content" className="flex gap-5">
        <div
          id="sidebar"
          className="max-h-100 w-[30%] bg-slate-800 rounded-[5px]"
        ></div>
        <main className="min-h-100 max-h-fit w-[70%] rounded-[5px] grid grid-cols-3 gap-5">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default HomePage;
//        <div className="search-icon w-12 h-12 bg-slate-400 flex justify-center items-center"></div>

//border-1 border-solid border-red-50 bg-slate-500
