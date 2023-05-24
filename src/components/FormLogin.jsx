import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import AuthenticateAPI from "../api/authentication";
import ProfileAPI from "../api/profile";
import StorageUtil, { STORAGE_KEY } from "@/src/util/storage";
import Router from "next/router";
import RegisterAPI from "@/src/api/register";
import { CartContext } from "./CartContext";

const FormLogin = () => {
  const { RegisterForm } = useContext(CartContext);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        const response = await AuthenticateAPI.signIn(values);
        if (response?.data?.access) {
          StorageUtil.set(STORAGE_KEY.JWT, response?.data?.access);
          const profile = await ProfileAPI.GetProfile();
          localStorage.setItem("profile", JSON.stringify(profile.data.user));
          Router.push("/");
        }
        console.log(values);
      } catch (err) {
        console.error(err);
      }
    },
  });
  const registerForm = () => {
    RegisterForm();
  };
  return (
    <div>
      <div
        class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
      relative z-10">
        <p class="w-full text-4xl font-medium text-center leading-snug font-serif">
          Đăng nhập
        </p>
        <form
          onSubmit={formik.handleSubmit}
          class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
          <div class="relative">
            <p
              class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
            absolute">
              Username
            </p>
            <input
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="John"
              type="text"
              class="border placeholder-gray-400 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-gray-300 rounded-md"
            />
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
          <div class="relative">
            <p
              class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
            absolute">
              Mật khẩu
            </p>
            <input
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Mật khẩu"
              type="password"
              class="border placeholder-gray-400 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-gray-300 rounded-md"
            />
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </div>

          <div class="relative">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
            rounded-lg transition duration-200 hover:bg-indigo-600 ease">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
