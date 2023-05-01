import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
      className={`fixed top-0 right-0 w-full h-full bg-[#00000085] z-40 place-items-center flex justify-center transition-all duration-500 ${
        show ? "flex" : "flex"
      }`}
    >
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, y: "150px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        className="rounded-xl bg-white lg:p-8 p-4 relative w-[90%] md:w-[390px] flex items-start justify-start flex-col gap-6"
      ></motion.div>
    </div>
  );
};

export default DeleteModal;
