import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="flex justify-center  serach sm:bg-amber-400 sm  ">
      <div className="relative  ">
        <input
          type="text"
          placeholder="Search for whisky, gin, etc"
          className="w-[480px] md:w-[250px] bg-gray-100 border h-[35px] border-gray-300 rounded-full py-3 pl-5 pr-12 outline-none focus:ring-2 focus:ring-gray-300"
        />

        <FiSearch className="absolute right-8 md:right-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl cursor-pointer" />
      </div>
    </div>
  );
}

export default SearchBar;
