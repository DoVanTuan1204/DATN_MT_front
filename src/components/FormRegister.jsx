import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import AuthenticateAPI from "../api/authentication";
import ProfileAPI from "../api/profile";
import StorageUtil, { STORAGE_KEY } from "@/src/util/storage";
import Router from "next/router";
import RegisterAPI from "@/src/api/register";
import { CartContext } from "./CartContext";

const FormRegister = () => {
  const { RegisterForm } = useContext(CartContext);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rePassword: "",
    },
    validationSchema: yup.object({
      username: yup.string().required(),
      password: yup
        .string()
        .required("Please enter your password.")
        .min(8, "Your password is too short."),
      rePassword: yup
        .string()
        .required("Please retype your password.")
        .oneOf([yup.ref("password")], "Your passwords do not match."),
    }),
    onSubmit: async (values) => {
      try {
        const data = {};
        data.username = values.username;
        data.password = values.rePassword;
        const response = await RegisterAPI.Register(data);
        if (response) {
          alert("Đăng ký thành công xin mời đăng nhập");
        }
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <div>
      <div
        className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
      relative z-10">
        <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
          Đăng ký
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
          <div className="relative">
            <p
              className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
            absolute">
              Username
            </p>
            <input
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="John"
              type="text"
              className="border placeholder-gray-400 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-gray-300 rounded-md"
            />
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
          <div className="relative">
            <p
              className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
            absolute">
              Mật khẩu
            </p>
            <input
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Mật khẩu"
              type="password"
              className="border placeholder-gray-400 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-gray-300 rounded-md"
            />
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </div>
          <div className="relative">
            <p
              className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
            absolute">
              Nhập lại mật khẩu
            </p>
            <input
              name="rePassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Nhập lại mật khẩu"
              type="password"
              className="border placeholder-gray-400 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-gray-300 rounded-md"
            />
            {formik.errors.rePassword &&
              formik.touched.rePassword &&
              formik.errors.rePassword}
          </div>

          <div className="relative">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
            rounded-lg transition duration-200 hover:bg-indigo-600 ease">
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
