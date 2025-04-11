import Input from "../components/Input";
import { Outlet } from "react-router-dom";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const HomePage = () => {
  return (
    <>
      <div id="top" className="my-15">
        <h2 className="text-white text-center text-[1.5rem]">
          Descobre as principais novidades de filmes, séries e animes aqui
          <span>.</span>
        </h2>
        <div className="box-search flex items-center w-120 h-12 mt-5 mx-auto relative">
          <Input
            placeholder={"Pesquisa um filme, uma série ou um anime"}
            className="bg-gray-300 text-gray-950 w-full h-full rounded-3xl pl-6 pr-17"
          />
          <button className="h-10 w-15 rounded-3xl bg-gray-400 text-gray-600 absolute right-1 hover:bg-gray-600 hover:text-gray-400">
            <MagnifyingGlassIcon className="size-6 mx-auto" />
          </button>
        </div>
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
