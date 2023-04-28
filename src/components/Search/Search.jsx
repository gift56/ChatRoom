import React, { useState } from "react";
import CustomizeInput from "../inputs/CustomizeInput";
import { useFormik } from "formik";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const Search = () => {
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const initialValues = {
    searchusername: "",
  };

  const onSubmit = async (payload, actions) => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", payload.searchusername)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { handleSubmit, handleChange, values, handleBlur } = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <div className="w-full border-b">
      <form
        onSubmit={handleSubmit}
        onKeyUp={(e) => e.keyCode === 13 && handleSubmit(e)}
        className="w-full px-4"
      >
        <CustomizeInput
          type="text"
          name="searchusername"
          value={values.searchusername}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Search users"
          className="bg-white h-[40px] w-full focus:border-primary outline-none text-base text-gray-500 placeholder:text-gray-500"
        />
      </form>
      {user && (
        <div className="flex items-center justify-start w-full gap-2 hover:bg-gray-200 px-4 p-2 cursor-pointer transition-all duration-300">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <h4 className="text-base font-normal">{user?.displayName}</h4>
        </div>
      )}
    </div>
  );
};

export default Search;
