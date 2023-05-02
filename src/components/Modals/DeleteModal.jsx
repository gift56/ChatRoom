import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";

const DeleteModal = ({ show, setShow, handleLogout }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-[#00000085] z-[100] place-items-center flex justify-center transition-all duration-500 ${
        show ? "flex" : "hidden"
      }`}
    >
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, y: "-150px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        className="rounded-xl bg-white dark:bg-slate-800 lg:p-8 p-4 relative w-[90%] md:w-[450px] flex items-start justify-start flex-col gap-6 transition-[background-color] duration-300"
      >
        <h2 className="text-xl font-bold text-darkColor dark:text-white transition-all duration-300">
          Are you sure you want to log out!
        </h2>
        <div className="flex items-center justify-start w-full gap-4">
          <Button
            onClick={() => setShow(false)}
            text="Cancel"
            className="border font-semibold text-darkBg dark:text-white transition-all duration-300"
          />
          <Button
            onClick={() => handleLogout()}
            text="Logout"
            className="border border-red-500 bg-red-500 text-white font-semibold"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteModal;
