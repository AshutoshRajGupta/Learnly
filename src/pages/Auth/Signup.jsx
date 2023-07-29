import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../reducers/authSlice";
import { Loader } from "../../components";
import { useShowPassword } from "../../hooks/useShowPassword";
import { Auth } from "./Auth";

export const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, authStatus, signupError } = useSelector((state) => state.auth);
  const { showPass, togglePassword } = useShowPassword();
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const formChangeHandler = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signupUser(signUpForm));
  };

  useEffect(() => {
    if (token)
      navigate(location?.state?.from.pathname || "/", { replace: true });
  });

  return (
    <>
      {authStatus === "loading" ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex flex-col gap-4 ">
          <div className="text-center p-2 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 -tracking-wide italic">
            Learnly...
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-center p-8">
            <Auth signUp={true} />
            <div className="mx-auto text-center sm:max-w-xl sm:w-full">
              <span className="text-2xl font-light">Register your Account</span>
              <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                <div className="h-2 bg-sky-400 rounded-t-md"></div>
                <form className="py-6 px-8" onSubmit={submitHandler}>
                  <label className="block font-semibold">
                    Enter First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                    name="firstName"
                    value={signUpForm.firstName}
                    onChange={formChangeHandler}
                    required
                  />
                  <label className="block font-semibold mt-4">
                    Enter Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                    name="lastName"
                    value={signUpForm.lastName}
                    onChange={formChangeHandler}
                    required
                  />
                  <label className="block font-semibold mt-4">
                    Enter Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                    name="email"
                    value={signUpForm.email}
                    onChange={formChangeHandler}
                    required
                  />
                  <label className="block font-semibold mt-4">
                    Enter Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                    name="username"
                    value={signUpForm.username}
                    onChange={formChangeHandler}
                    required
                  />
                  <label className="block font-semibold mt-4">
                    Enter Password
                  </label>
                  <div className="relative flex items-center mt-1">
                    <input
                      type={`${showPass ? "text" : "password"}`}
                      placeholder="Password"
                      className="border w-full h-5 px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                      name="password"
                      value={signUpForm.password}
                      onChange={formChangeHandler}
                      required
                    />
                    <span
                      className="absolute right-3 cursor-pointer"
                      onClick={togglePassword}
                    >
                      <i
                        className={`fa-solid ${
                          showPass ? "fa-eye " : "fa-eye-slash"
                        }`}
                      ></i>
                    </span>
                  </div>
                  {signupError?.length > 0 && (
                    <div className="mt-4 text-center text-red-600 font-medium">
                      {signupError}
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:items-baseline">
                    <button
                      type="submit"
                      className="mt-4 bg-sky-500 py-2 px-6 rounded-md hover:bg-sky-600 font-semibold"
                    >
                      Signup
                    </button>
                    <Link to="/login" className="text-sm hover:underline">
                      Already have an account? Sign In
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
