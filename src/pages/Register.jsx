import React from "react";
import { Button, CustomizeInput } from "../components";
import { Link } from "react-router-dom";
import { FcAddImage } from "react-icons/fc";
import { useFormik } from "formik";
import { registerSchema } from "../schema";

const Register = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit,
    });

  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="text-4xl font-bold">Chat Room</h1>
        <div className="md:w-[450px] border flex flex-col px-5 py-4 shadow-smallShadow rounded-md gap-3 lg:h-[450px] lg:overflow-y-auto register bg-white">
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
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("email")}
              placeholder="Full Name"
              className="bg-white border border-firstgray h-[48px] w-full rounded px-4 focus:border-primary outline-none text-sm text-gray-500 placeholder:text-gray-500"
            />
            <CustomizeInput
              type="text"
              name="email"
              // value={values.email}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // error={getError("email")}
              placeholder="Email address"
              className="bg-white border border-firstgray h-[48px] w-full rounded px-4 focus:border-primary outline-none text-sm text-gray-500 placeholder:text-gray-500"
            />
            <CustomizeInput
              type="password"
              name="password"
              containerClass="h-full"
              // value={values.password}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // error={getError("password")}
              placeholder="Password"
              className="bg-white border border-firstgray h-[48px] w-full rounded px-4 focus:border-primary outline-none text-sm text-gray-500 placeholder:text-gray-500"
            />
            <div className="w-full">
              <CustomizeInput
                type="file"
                name="file"
                // value={values.file}
                // onChange={handleChange}
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
                <span className="text-primary text-base font-normal">
                  Upload an avatar
                </span>
              </label>
            </div>
            <Button
              // disabled={loading}
              type="submit"
              text="Create Account"
              className="mt-4 w-full h-[44px] bg-primary text-white disabled:bg-primary/70"
            />
            <p className="text-gray-400 font-normal text-sm md:text-base text-center w-full mt-2">
              Already on our platform?{" "}
              <Link to="/" className="text-[#3307C5] mx-2 font-medium">
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
