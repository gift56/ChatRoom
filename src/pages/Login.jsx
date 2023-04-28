import React, { useState } from "react";
import { Button, CustomizeInput } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schema";
import { toast } from "react-toastify";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logIn } = UserAuth();

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (payload, actions) => {
    setLoading(true);
    try {
      await logIn(payload.email, payload.password);
      navigate("/chatspace");
      setLoading(false);
      toast.success("Logged In Successfully!", {
        toastId: 1,
        autoClose: 1500,
        position: "bottom-right",
      });
    } catch (error) {
      console.log(error);
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

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit,
    });

  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="text-4xl font-bold">Chat Room</h1>
        <div className="md:w-[450px] border flex flex-col px-5 py-4 shadow-smallShadow rounded-md gap-3 lg:h-[350px] lg:overflow-y-auto register bg-white">
          <h2 className="text-xl font-bold">Welcome 👋🏻</h2>
          <p className="text-sm font-normal text-gray-400">
            Please sign-in to your account
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 items-start justify-start w-full"
          >
            <CustomizeInput
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("email")}
              placeholder="Email address"
              className="bg-white border border-firstgray h-[48px] w-full rounded px-4 focus:border-primary outline-none text-sm text-gray-500 placeholder:text-gray-500"
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
              className="bg-white border border-firstgray h-[48px] w-full rounded px-4 focus:border-primary outline-none text-sm text-gray-500 placeholder:text-gray-500"
            />
            <Button
              disabled={loading}
              type="submit"
              text="Create Account"
              className="mt-4 w-full h-[44px] bg-primary text-white disabled:bg-primary/70"
            />
            <p className="text-gray-400 font-normal text-sm md:text-base text-center w-full mt-2">
              New on our platform?
              <Link to="/register" className="text-[#3307C5] mx-2 font-medium">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
