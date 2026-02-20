import { useState } from "react";

function SelectBar() {
//   const [sort, setSort] = useState("default");
 return (
    <select className="w-54 border px-3 py-2 rounded-full flex bg-white/30 ">
      <option className="text-black hover:bg-black hover:text-white">
        Default sorting
      </option>
      <option className="text-black hover:bg-black hover:text-white">
        Sort by popularity
      </option>
      <option className="text-black hover:bg-black hover:text-white">
        Sort by average rating
      </option>
      <option className="text-black hover:bg-black hover:text-white">
        Sort by latest
      </option>
      <option className="text-black hover:bg-black hover:text-white">
        Sort by price: low to high
      </option>
      <option className="text-black hover:bg-black hover:text-white">
        Sort by price: high to low
      </option>
    </select>
  );
}

export default SelectBar;
