import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    password: "",
    phoneNumber: "",
    cPassword: "",
    secuirityQuestions: "",
    secuirityAnswear: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [focus, setFocus] = useState({
    fullName: false,
    email: false,
    dateOfBirth: false,
    password: false,
    phoneNumber: false,
    cPassword: false,
    secuirityQuestions: false,
    secuirityAnswear: false,
    address: false,
    city: false,
    state: false,
    zipCode: false,
    country: false,
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
      console.log("call");
      const { data } = await axios.post(
        "https://localhost:4000/register",
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

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);
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
            className="w-full h-[40rem] hidden lg:w-5/12 lg:block rounded-md bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80")',
            }}
          ></div>

          <div className="w-full lg:w-7/12 ml-6">
            <p className="text-[#7181A1] text-[20px] font-[400]">Welcome</p>
            <p className="text-4xl font-[600] text-[#131926]">Sign up</p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="md:grid md:grid-cols-2">
                <div className="mb-3">
                  <label
                    htmlFor=""
                    className="block text-sm font-light text-[#4D5E80] mb-1"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="fullName"
                    className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    pattern="^[A-Za-z]{1,50}$"
                    required
                    onBlur={handleFocus}
                    focused={focus.fullName.toString()}
                  />
                  <p className="error">
                    Required, alphabetic characters only, maximum length of 50
                    characters
                  </p>
                </div>

                <div className="mb-3 md:ml-6">
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
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    required
                    onBlur={handleFocus}
                    focused={focus.email.toString()}
                  />
                  <p className="error">Required, valid email format</p>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor=""
                    className="block text-sm font-light text-[#4D5E80] mb-1"
                  >
                    Date of birth
                  </label>
                  <input
                    type="text"
                    placeholder="12/12/12"
                    name="dateOfBirth"
                    className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    pattern="^(\d{1,2})\/(\d{1,2})\/(\d{4})$"
                    required
                    onBlur={handleFocus}
                    focused={focus.dateOfBirth.toString()}
                  />
                  <p className="error">Required, must be a valid date</p>
                </div>

                <div className="mb-3 md:ml-6">
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
                      setValues({ ...values, [e.target.name]: e.target.value })
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
                </div>

                <div className="mb-3">
                  <label
                    htmlFor=""
                    className="block text-sm font-light text-[#4D5E80] mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+919876543210"
                    name="phoneNumber"
                    className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    pattern="^\d{10}$"
                    required
                    onBlur={handleFocus}
                    focused={focus.phoneNumber.toString()}
                  />
                  <p className="error">
                    Required, valid phone number format with 10 digits (e.g.,
                    9098787898 )
                  </p>
                </div>

                <div className="mb-3 md:ml-6">
                  <label
                    htmlFor=""
                    className="block text-sm font-light text-[#4D5E80] mb-1"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="cPassword"
                    placeholder="*********"
                    className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    pattern={values.password}
                    required
                    onBlur={handleFocus}
                    focused={focus.cPassword.toString()}
                  />
                  <p className="error">
                    Required, must match the entered password
                  </p>
                </div>

                <div className="mb-3">
                  <p className="block text-sm font-light mb-2  text-[#26334D]">
                    Security Question
                  </p>
                  <input
                    type="text"
                    name="secuirityQuestions"
                    placeholder="What is your school name ?"
                    className="w-full text-xs font-light mb-1 focus:outline-none"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    pattern="^.{1,100}$"
                    required
                    onBlur={handleFocus}
                    focused={focus.secuirityQuestions.toString()}
                  />
                  <p className="error">Required, minimum 2 characters</p>
                  <div>
                    <input
                      type="text"
                      name="secuirityAnswear"
                      className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      }
                      pattern="^.{1,100}$"
                      required
                      onBlur={handleFocus}
                      focused={focus.secuirityAnswear.toString()}
                    />
                    <p className="error">
                      Required, maximum length of 100 characters
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-3 w-full">
                <label
                  htmlFor=""
                  className="block text-sm font-light text-[#4D5E80] mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  placeholder="********"
                  name="address"
                  className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                  pattern="^.{1,100}$"
                  required
                  onBlur={handleFocus}
                  focused={focus.address.toString()}
                />
                <p className="error">
                  Required, maximum length of 100 characters
                </p>
              </div>

              <div className="md:flex gap-3">
                <div className="mb-4">
                  <label
                    htmlFor=""
                    className="block text-sm font-light text-[#4D5E80] mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="********"
                    name="city"
                    className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    pattern="^[A-Za-z]{1,100}$"
                    required
                    onBlur={handleFocus}
                    focused={focus.city.toString()}
                  />
                  <p className="error">
                    Required, alphabetic characters only, maximum length of 50
                    characters
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor=""
                    className="block text-sm font-light text-[#4D5E80] mb-1"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="********"
                    name="state"
                    className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    pattern="^[A-Za-z]{1,100}$"
                    required
                    onBlur={handleFocus}
                    focused={focus.state.toString()}
                  />
                  <p className="error">Required</p>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor=""
                    className="block text-sm font-light text-[#4D5E80] mb-1"
                  >
                    ZIP code
                  </label>
                  <input
                    type="text"
                    placeholder="********"
                    name="zipCode"
                    className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    pattern="^\d{6}$"
                    required
                    onBlur={handleFocus}
                    focused={focus.zipCode.toString()}
                  />
                  <p className="error">Required, Any 6 digit number</p>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor=""
                    className="block text-sm font-light text-[#4D5E80] mb-1"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="********"
                    name="country"
                    className="w-full text-xs font-light border px-3 py-2 mb-1 rounded-md focus:outline-none"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    pattern="^[A-Za-z]{1,100}$"
                    required
                    onBlur={handleFocus}
                    focused={focus.country.toString()}
                  />
                  <p className="error">Required</p>
                </div>
              </div>

              <div>
                <button className="bg-[#194DFF] rounded-md w-2/6 py-1 text-white">
                  Sign up
                </button>
              </div>

              <span className="text-xs font-normal text-[#A0ABC0]">
                Already have an account ?{" "}
                <Link className="underline text-[#194DFF]" to="/login">
                  Login
                </Link>
              </span>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
