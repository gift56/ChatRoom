import React, { useState } from "react";
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
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import logo from "../../assets/chat2.json";
import Lottie from "lottie-react";

const Chat = ({ show, setShow }) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    reply: "",
    img: null,
  };
  const validationSchema = yup.object().shape({
    reply: yup.string().required("required"),
  });

  const onSubmit = async (payload, actions) => {
    setLoading(true);
    if (payload.img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, payload.img);
      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text: payload.reply,
                senderId: user.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
            setLoading(false);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            actions.resetForm();
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text: payload.reply,
          senderId: user.uid,
          date: Timestamp.now(),
        }),
      });
      setLoading(false);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    }
    await updateDoc(doc(db, "userChats", user.uid), {
      [data.chatId + ".lastMessage"]: {
        text: payload.reply,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.userInfo.uid), {
      [data.chatId + ".lastMessage"]: {
        text: payload.reply,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
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

  if (!data?.user?.photoURL)
    return (
      <div
        className={`w-full lg:h-screen items-center justify-center flex-col gap-4 fixed  top-[110px] h-[90vh] bg-[#ecf0f1] dark:bg-darkBg lg:relative lg:top-0 transition-[background-color] duration-300 ${
          show ? "hidden" : "flex"
        }`}
      >
        <div className="w-[35%] max-w-full sticky top-0">
          <Lottie animationData={logo} loop={true} />
        </div>
        <div className="flex flex-col text-center items-center justify-center w-full gap-3">
          <h2 className="text-xl md:text-4xl font-bold text-center">
            Welcome 👋
          </h2>
          <p className="text-sm md:text-base font-medium text-center max-w-[500px]">
            Hey there! Welcome to chatio, where you can connect with your
            friends and stay in touch on the go. Let's get chatting!
          </p>
        </div>
      </div>
    );

  return (
    <div
      className={`lg:w-[80%] flex flex-col h-screen absolute top-0 w-full lg:relative lg:right-0 z-40 ${
        show ? "right-0" : "right-[-100%]"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-4 bg-white dark:bg-slate-800 shadow-sm h-14 px-5 flex-none transition-all duration-300">
        <div className="flex items-center justify-start gap-2">
          <span onClick={() => setShow(false)} className="lg:hidden">
            <MdArrowBack className="text-gray-500 dark:text-white transition-all duration-300" size={20} />
          </span>
          {data?.user?.photoURL && (
            <img
              src={data?.user?.photoURL}
              className="w-10 h-10 rounded-full object-cover border"
              alt="profile_pitcure"
            />
          )}
          <h4 className="md:text-xl text-base font-medium">
            {data?.user?.displayName}
          </h4>
        </div>
        <div className="flex items-center justify-end gap-4 relative">
          <span>
            <BsCameraVideoFill
              size={18}
              className="text-gray-600 dark:text-white cursor-pointer hover:text-primary transition-all duration-300"
            />
          </span>
          <span>
            <FiUserPlus
              size={18}
              className="text-gray-600 dark:text-white cursor-pointer hover:text-primary transition-all duration-300"
            />
          </span>
          <span>
            <BsThreeDots
              size={18}
              className="text-gray-600 dark:text-white cursor-pointer hover:text-primary transition-all duration-300"
            />
          </span>
        </div>
      </div>
      <Messages />
      <form
        onSubmit={handleSubmit}
        className="h-14 w-full bg-white dark:bg-slate-800 p-4 flex-none flex items-center justify-between gap-2"
      >
        <CustomizeInput
          type="text"
          name="reply"
          value={values.reply}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Send a message..."
          className="bg-white dark:bg-transparent dark:text-white dark:placeholder:text-white  h-[40px] w-full outline-none text-base text-gray-500 placeholder:text-gray-500 transition-all duration-300"
        />
        <div className="flex items-center gap-3 justify-end">
          <span>
            <IoMdAttach size={23} className="text-gray-500 dark:text-white transition-all duration-300" />
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
              <BiImageAdd size={23} className="text-gray-500 dark:text-white" />
            </label>
          </div>
          <Button
            disabled={loading}
            text={<BiSend size={25} />}
            className="bg-primary text-white disabled:bg-primary/70 disabled:cursor-not-allowed"
          />
        </div>
      </form>
    </div>
  );
};

export default Chat;
