import React, { useState } from "react";
import { Button, CustomizeInput } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { FcAddImage } from "react-icons/fc";
import { useFormik } from "formik";
import { registerSchema } from "../schema";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { toast } from "react-toastify";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import logo from "../assets/chat.json";
import Lottie from "lottie-react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    full_name: "",
    email: "",
    password: "",
    file: null,
  };

  const onSubmit = async (payload, actions) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      const storageRef = ref(storage, payload.full_name);

      const uploadTask = uploadBytesResumable(storageRef, payload.file);

      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: payload.full_name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: payload.full_name,
              email: payload.email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
            setLoading(false);
            toast.success("Account Created Successfully!", {
              toastId: 1,
              autoClose: 1500,
              position: "bottom-right",
            });
          });
        }
      );
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 1000,
        toastId: 1,
      });
      navigate("/");
      setLoading(false);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit,
  });

  const getError = (key) => {
    return touched[key] && errors[key];
  };
  function handleImageChange(event) {
    const file = event.currentTarget.files[0];
    if (file && !file.type.startsWith("image/")) {
      setFieldValue("file", null);
      return;
    }
    setFieldValue("file", file);
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center justify-center flex-col gap-5 w-full">
        <div className="lg:w-[8%] w-[20%] max-w-full sticky top-0">
          <Lottie animationData={logo} loop={true} />
        </div>
        <div className="md:w-[450px] w-[90%] border flex flex-col px-5 py-4 shadow-smallShadow rounded-md gap-3 lg:h-[450px] lg:overflow-y-auto register bg-white dark:bg-slate-800 border-slate-800 transition-all duration-300">
          <h2 className="text-xl font-bold">Welcome 👋🏻</h2>
          <p className="text-sm font-normal text-gray-400">
            Enter your details to create account
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 items-start justify-start w-full"
          >
            <CustomizeInput
              type="text"
              name="full_name"
              value={values.full_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("full_name")}
              placeholder="Full Name"
              className="bg-white dark:bg-transparent transition-all duration-300 dark:text-white dark:placeholder:text-white border border-firstgray h-[48px] w-full rounded px-4 focus:border-primary outline-none text-sm text-gray-500 placeholder:text-gray-500"
            />
            <CustomizeInput
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("email")}
              placeholder="Email address"
              className="bg-white transition-all duration-300 dark:bg-transparent dark:text-white dark:placeholder:text-white border border-firstgray h-[48px] w-full rounded px-4 focus:border-primary outline-none text-sm text-gray-500 placeholder:text-gray-500"
            />
            <CustomizeInput
              type="password"
              name="password"
              containerClass="h-full"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("password")}
              placeholder="Password"
              className="bg-white transition-all duration-300 dark:bg-transparent dark:text-white dark:placeholder:text-white border border-firstgray h-[48px] w-full rounded px-4 focus:border-primary outline-none text-sm text-gray-500 placeholder:text-gray-500"
            />
            <div className="w-full">
              <CustomizeInput
                type="file"
                name="file"
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
                id="file"
              />
              <label
                htmlFor="file"
                className="flex items-center justify-start w-full gap-3 cursor-pointer"
              >
                <span>
                  <FcAddImage size={30} />
                </span>
                <span className="text-primary text-base font-normal truncate w-full">
                  {values.file ? values.file.name : "Upload an avatar"}
                </span>
              </label>
            </div>
            <Button
              disabled={loading}
              type="submit"
              text="Create Account"
              className="mt-4 w-full h-[44px] bg-primary text-white disabled:bg-primary/70 disabled:cursor-not-allowed"
            />
            <p className="text-gray-400 font-normal text-sm md:text-base text-center w-full mt-2">
              Already on our platform?{" "}
              <Link
                to="/"
                className="text-[#3307C5] dark:text-primary mx-2 font-medium"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
