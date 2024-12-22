import React from "react";
import { useFormik } from "formik";
import { registerschema } from "../../shemas/RegisterSchema";
import "./registerForm.css";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const submitForm = async (values, actions) => {
   await axios.post("http://localhost:3000/users", values);
   toast.success("Uğurla qeydiyyatdan keçdiniz!");
    setTimeout(() => {
      actions.resetForm();
    }, 1000);
  };
  const { values, handleChange,  handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmpassword: "",
      surname: "",
      username: "",
      isLogin: false,
    },
    onSubmit: submitForm,
    validationSchema: registerschema,
  });
  return (
    <div className="register-container">
      <form className="register-form" action="" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <div className="label-container">
            <label htmlFor="name">name</label>
            {errors.name ? <p className="error">{errors.name}</p> : null}
          </div>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={values.name}
          />
        </div>

        <div>
          <div className="label-container">
            <label htmlFor="surname">surname</label>
            {errors.surname ? <p className="error">{errors.surname}</p> : null}
          </div>

          <input
            type="text"
            id="surname"
            onChange={handleChange}
            value={values.surname}
          />
        </div>

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
        <label htmlFor="email">Email</label>
        {errors.email ? <p className="error">{errors.email}</p> : null}
        </div>
          
          <input
            type="email"
            id="email"
            onChange={handleChange}
            value={values.email}
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

        <div>
        <div className="label-container">
        <label htmlFor="confirmpassword">Confirmpassword</label>
        {errors.confirmpassword ? <p className="error">{errors.confirmpassword}</p> : null}
        </div>
         
          <input
            type="password"
            id="confirmpassword"
            onChange={handleChange}
            value={values.confirmpassword}
          />
        </div>
        <button type="submit" className="register-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;