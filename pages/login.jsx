import AuthenticateAPI from '@/src/api/authentication'
import StorageUtil, { STORAGE_KEY } from '@/src/util/storage'
import { useFormik } from 'formik'
import Router from 'next/router'
import React from 'react'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await AuthenticateAPI.signIn(values)
        if (response?.data?.access) {
          StorageUtil.set(STORAGE_KEY.JWT, response?.data?.access)
          Router.push('/')
        }
      } catch (err) {
        console.error(err)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="username"
      />
      {formik.errors.email && formik.touched.email && formik.errors.email}
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="password"
      />
      {formik.errors.password &&
        formik.touched.password &&
        formik.errors.password}
      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  )
}

export default Login
