import React from "react";
import { useFormik } from "formik";
import styles from "./Login.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginschema } from "../../../../schemas/LoginSchema";
import { Link } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate(); 
  const notify = (text, type) =>
    toast(text, {
      type: type,
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const submitForm = async (values, action) => {
    const { data } = await axios.get("http://localhost:3000/users");

    const findUser = data.find(
      (user) =>
        user.username === values.username && user.password === values.password
    );

    if (!findUser) {
      notify("Username or password incorrect", "error");
      return;
    } else {
      const updatedUser = {
        ...findUser,
        isLogin: true,
      };
      await axios.put(
        `http://localhost:3000/users/${updatedUser.id}`,
        updatedUser
      );
      notify("Login successful", "success");
      setTimeout(() => {
        action.resetForm();
        navigate("/");
      }, 2000);
    }
  };
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
      //   isLogin: false,
    },
    onSubmit: submitForm,
    validationSchema: loginschema,
  });
  return (
    <div className={styles["login-container"]}>
    <form className={styles["login-form"]} action="" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <div className={styles["label-container"]}>
          <label htmlFor="username">Username</label>
          {errors.username ? <span className={styles.error}>{errors.username}</span> : null}
        </div>
        <input
          type="text"
          id="username"
          value={values.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <div className={styles["label-container"]}>
          <label htmlFor="password">Password</label>
          {errors.password ? <span className={styles.error}>{errors.password}</span> : null}
        </div>
        <input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <div>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </div>
      <button className={styles["register-btn"]} type="submit">
        Sign In
      </button>
    </form>
  </div>
);
};

export default Login;
