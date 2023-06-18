import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate('/')
    }
  }, [navigate]);

  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  const handleFocus = (e) => {
    setFocus({ ...focus, [e.target.name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        values,
        config
      );
      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      generateError(error.response.data.error);
    }
  };
  const generateError = (err) => {
    toast.error(err, {
      position: "bottom-right",
    });
  };

  return (
    <div className="font-custom">
      <div className="flex justify-center mx-6 my-6 body">
        <div className="w-full flex ">
          <div className="mx-4 absolute mt-6 hidden lg:block">
            <img
              src="https://neokredwebsite.s3.ap-south-1.amazonaws.com/svg/neokred_logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div
            className="w-full h-[40rem] hidden lg:w-1/2 lg:block rounded-md bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80")',
            }}
          ></div>

          <div className="w-full lg:w-1/2 ml-6 flex items-center justify-center">
            <div className="w-2/3">
              <p className="text-[#7181A1] text-[20px] font-[400]">Welcome</p>
              <p className="text-3xl font-[600] text-[#131926]">Login</p>
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor=""
                    className="block text-sm font-light text-[#4D5E80] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="allthebest@neokred.com"
                    name="email"
                    className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                    onChange={(e) =>
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                      })
                    }
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    required
                    onBlur={handleFocus}
                    focused={focus.email.toString()}
                  />
                  <p className="error">Required, valid email format</p>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor=""
                    className="block text-sm font-light text-[#4D5E80] mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="*********"
                    className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                    onChange={(e) =>
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                      })
                    }
                    pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
                    required
                    onBlur={handleFocus}
                    focused={focus.password.toString()}
                  />
                  <p className="error">
                    Required, minimum length of 8 characters, at least one
                    uppercase letter and one digit
                  </p>
                  <a
                    href="http://localhost:3000/login"
                    className="flex justify-end text-[#194DFF] text-xs"
                  >
                    forgot password?
                  </a>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-[#194DFF] rounded-md w-3/6 py-1 text-white"
                  >
                    Login
                  </button>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-normal text-[#A0ABC0]">
                    Don't have an account ?{" "}
                    <Link className="underline text-[#194DFF]" to="/register">
                      Sign up
                    </Link>
                  </span>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
