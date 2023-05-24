import AuthenticateAPI from "@/src/api/authentication";
import ProfileAPI from "@/src/api/profile";
import RegisterAPI from "@/src/api/register";
import { CartContext } from "@/src/components/CartContext";
import FormLogin from "@/src/components/FormLogin";
import FormRegister from "@/src/components/FormRegister";
import IconArrow from "@/src/components/icon/IconArrow";
import StorageUtil, { STORAGE_KEY } from "@/src/util/storage";
import { useFormik } from "formik";
import Router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import * as yup from "yup";

const Login = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   validationSchema: yup.object({
  //     username: yup.string().required(),
  //     password: yup
  //       .string()
  //       .required("Please enter your password.")
  //       .min(8, "Your password is too short."),
  //     rePassword: yup
  //       .string()
  //       .required("Please retype your password.")
  //       .oneOf([yup.ref("password")], "Your passwords do not match."),
  //   }),
  //   onSubmit: async (values) => {
  //     try {
  //       const response = await AuthenticateAPI.signIn(values);
  //       if (response?.data?.access) {
  //         StorageUtil.set(STORAGE_KEY.JWT, response?.data?.access);
  //         const profile = await ProfileAPI.GetProfile();
  //         localStorage.setItem("profile", JSON.stringify(profile.data.user));
  //         Router.push("/");
  //       }
  //       console.log(values);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   },
  // });

  // const secondFormik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //     rePassword: "",
  //   },

  //   validationSchema: yup.object({
  //     username: yup.string().required(),
  //     password: yup
  //       .string()
  //       .required("Please enter your password.")
  //       .min(8, "Your password is too short."),
  //     rePassword: yup
  //       .string()
  //       .required("Please retype your password.")
  //       .oneOf([yup.ref("password")], "Your passwords do not match."),
  //   }),
  //   onSubmit: async (values) => {
  //     try {
  //       console.log(values);
  //       // const response = await RegisterAPI.Register(username, rePassword);
  //       // if (response?.data?.access) {
  //       //   StorageUtil.set(STORAGE_KEY.JWT, response?.data?.access);
  //       //   const profile = await ProfileAPI.GetProfile();
  //       //   localStorage.setItem("profile", JSON.stringify(profile.data.user));
  //       //   Router.push("/");
  //       // }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   },
  // });

  const [isRegister, setIsRegister] = useState(false);

  return (
    <div class="bg-white relative h-[100vh] lg:py-18">
      <div
        class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
          xl:px-5 lg:flex-row">
        <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <img
                src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                class="btn-"
              />
            </div>
          </div>
          <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            {isRegister == true ? <FormRegister /> : <FormLogin />}
          </div>
        </div>
        <div
          onClick={() => {
            setIsRegister(!isRegister);
          }}
          className="w-7 cursor-pointer rounded-full">
          <IconArrow />
        </div>
      </div>
    </div>
  );
};

export default Login;
