import React, { useState } from "react";
import CustomizeInput from "../inputs/CustomizeInput";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import { UserAuth } from "../../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);
  const { user } = UserAuth();

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSearchedUser(doc.data());
      });
      setUsername("");
    } catch (error) {
      console.log(error);
      toast.error("User Not Found!", {
        position: "top-left",
        toastId: 1,
        autoClose: 1000,
      });
    }
  };

  const handleKey = (e) => {
    e.code == "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // creating user chats
    const combinedId = user;
    const res = await getDocs(db, "chats");
  };

  return (
    <div className="w-full border-b">
      <div className="w-full px-4 flex items-center">
        <CustomizeInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Search users"
          className="bg-white h-[40px] w-full focus:border-primary outline-none text-base text-gray-500 placeholder:text-gray-500"
        />
        <span
          onClick={() => handleSearch()}
          className="cursor-pointer text-gray-500"
        >
          <FiSearch size={18} />
        </span>
      </div>
      {searchedUser && (
        <div
          className="flex items-center justify-start w-full gap-2 hover:bg-gray-200 px-4 p-2 cursor-pointer transition-all duration-300"
          onClick={handleSelect}
        >
          <img
            src={searchedUser?.photoURL}
            alt={searchedUser?.displayName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <h4 className="text-base font-normal">{searchedUser?.displayName}</h4>
        </div>
      )}
    </div>
  );
};

export default Search;
