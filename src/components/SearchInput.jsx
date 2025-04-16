import Input from "./Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (inputValue.trim()) {
      navigate(`/search?query=${encodeURIComponent(inputValue)}`);
    }
  }

  return (
    <>
      <div className="box-search flex items-center max-w-[90%] h-12 mt-5 mx-auto relative">
        <Input
          placeholder={"Pesquisa um filme, uma série ou um anime"}
          className="bg-gray-300 text-gray-950 w-full h-full rounded-3xl pl-6 pr-17"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key == "Enter") handleSearch();
          }}
        />
        <button
          className="h-10 w-15 rounded-3xl bg-gray-400 text-gray-600 absolute right-1 hover:bg-gray-600 hover:text-gray-400"
          onClick={() => {
            handleSearch();
          }}
        >
          <MagnifyingGlassIcon className="size-6 mx-auto" />
        </button>
      </div>
    </>
  );
};

export default SearchInput;
