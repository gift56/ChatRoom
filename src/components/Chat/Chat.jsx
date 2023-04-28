import React from "react";
import { BsCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { BiImageAdd, BiSend } from "react-icons/bi";
import { IoMdAttach } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";
import Messages from "../Messages/Messages";
import CustomizeInput from "../inputs/CustomizeInput";
import Button from "../Button/Button";
import { UserChat } from "../../context/ChatsContext";
import { UserAuth } from "../../context/AuthContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuid } from "uuid";

const Chat = ({ show, setShow }) => {
  const initialValues = {
    reply: "",
    img: null,
  };
  const validationSchema = yup.object().shape({
    reply: yup.string().required("required"),
  });

  const onSubmit = async (payload, actions) => {
    console.log(payload);
    if (payload.img) {
    } else {
      await updateDoc(doc(db, "chtas", data.chatId), {
        messages: arrayUnion({
          id: uuid,
          text: payload.reply,
          senderId: user.uid,
        }),
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { handleSubmit, handleChange, handleBlur, values, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });
  function handleImageChange(event) {
    const file = event.currentTarget.files[0];
    if (file && !file.type.startsWith("image/")) {
      setFieldValue("img", null);
      return;
    }
    setFieldValue("img", file);
  }
  const { data } = UserChat();
  const { user } = UserAuth();

  return (
    <div
      className={`lg:w-[85%] flex flex-col h-screen absolute top-0 w-full lg:relative lg:right-0 ${
        show ? "right-0" : "right-[-100%]"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-4 bg-white shadow-sm h-14 px-5 flex-none">
        <div className="flex items-center justify-start gap-2">
          <span onClick={() => setShow(false)} className="lg:hidden">
            <MdArrowBack className="text-gray-500" size={20} />
          </span>
          <img
            src={data?.user?.photoURL}
            className="w-10 h-10 rounded-full object-cover border"
            alt="profile_pitcure"
          />
          <h4 className="md:text-xl text-base font-medium">
            {data?.user?.displayName}
          </h4>
        </div>
        <div className="flex items-center justify-end gap-4">
          <span>
            <BsCameraVideoFill
              size={18}
              className="text-gray-600 cursor-pointer hover:text-primary transition-all duration-300"
            />
          </span>
          <span>
            <FiUserPlus
              size={18}
              className="text-gray-600 cursor-pointer hover:text-primary transition-all duration-300"
            />
          </span>
          <span>
            <BsThreeDots
              size={18}
              className="text-gray-600 cursor-pointer hover:text-primary transition-all duration-300"
            />
          </span>
        </div>
      </div>
      <Messages />
      <form
        onSubmit={handleSubmit}
        className="h-14 w-full bg-white p-4 flex-none flex items-center justify-between gap-2"
      >
        <CustomizeInput
          type="text"
          name="reply"
          value={values.reply}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Send a message..."
          className="bg-white h-[40px] w-full outline-none text-base text-gray-500 placeholder:text-gray-500"
        />
        <div className="flex items-center gap-3 justify-end">
          <span>
            <IoMdAttach size={23} className="text-gray-500" />
          </span>
          <div>
            <CustomizeInput
              type="file"
              name="img"
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
              id="file"
            />
            <label htmlFor="file" className="cursor-pointer">
              <BiImageAdd size={23} className="text-gray-500" />
            </label>
          </div>
          <Button
            text={<BiSend size={25} />}
            className="bg-primary text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default Chat;
