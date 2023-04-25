import React from "react";
import CustomizeInput from "../inputs/CustomizeInput";

const Search = () => {
  return (
    <div className="w-full border-b">
      <div className="w-full px-4">
        <CustomizeInput
          type="text"
          name="search"
          // value={values.search}
          // onChange={handleChange}
          // onBlur={handleBlur}
          // error={getError("search")}
          placeholder="Search users"
          className="bg-white h-[40px] w-full focus:border-primary outline-none text-base text-gray-500 placeholder:text-gray-500"
        />
      </div>
      <div className="flex items-center justify-start w-full gap-2 hover:bg-gray-300 px-4 p-2 cursor-pointer">
        <img
          src="https://images.pexels.com/photos/10152592/pexels-photo-10152592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="user_image"
          className="w-12 h-12 rounded-full object-cover"
        />
        <h4 className="text-base font-normal">
          Jane Foster
        </h4>
      </div>
    </div>
  );
};

export default Search;
