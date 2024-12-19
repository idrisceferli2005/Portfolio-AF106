import React from 'react'
import { useFormik } from 'formik'
import { loginschema } from '../../shemas/LoginSchema';
import axios from 'axios';
import './loginForm.css';
import { toast } from "react-toastify";

const LoginForm = () => {
    const submitForm = async (values, actions) => {
      const res =   await axios.get("http://localhost:3000/users");
      const updatedUser = {
        ...res.data[0],
        isLogin: true,
      }
      res.data[0].isLogin = true;
      await axios.put(`http://localhost:3000/users/${updatedUser.id}`, updatedUser);   
      toast.success("Uğurla daxil oldunuz!");
         setTimeout(() => {
           actions.resetForm();
         }, 1000);
       };
     const { values, handleChange,  handleSubmit, errors } = useFormik({
        initialValues: {
          password: "",
          username: "",
          isLogin: false,
        },
        onSubmit: submitForm,
        validationSchema: loginschema,
      });
  return (
    <div className="login-container">
    <form className="login-form" action="" onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      

      <div>
          <div className="label-container">
          <label htmlFor="username">username</label>
          {errors.username ? <p className="error">{errors.username}</p> : null}
          </div>
 
        <input
          type="text"
          id="username"
          onChange={handleChange}
          value={values.username}
        />
      </div>

      

      <div>
      <div className="label-container">
      <label htmlFor="password">password</label>
      {errors.password ? <p className="error">{errors.password}</p> : null}
      </div>
       
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
      </div>

     
      <button type="submit" className="register-btn">
        Sign In
      </button>
    </form>
  </div>
  )
}

export default LoginForm
