import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../reducers/authSlice";
import { Loader } from "../../components";
import { useShowPassword } from "../../hooks/useShowPassword";
import { Auth } from "./Auth";

export const Login = () => {
  const { token, authStatus, loginError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [loginCred, setLoginCred] = useState({ username: "", password: "" });
  const { showPass, togglePassword } = useShowPassword();

  const guestLoginCred = {
    username: "test_test",
    password: "test@123",
  };

  const formChangeHandler = (e) => {
    setLoginCred({ ...loginCred, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginCred));
  };

  const guestLoginHandler = () => {
    setLoginCred({
      username: guestLoginCred.username,
      password: guestLoginCred.password,
    });
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
        <div className="min-h-screen flex flex-col gap-4">
          <div className="text-center p-2 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-sky-500 to-red-400 -tracking-wide italic">
            Learnly...
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center p-8">
            <Auth />

            <div className="mx-auto text-center sm:max-w-xl sm:w-full">
              <span className="text-2xl font-light">Login to your Account</span>
              <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                <div className="h-2 bg-sky-400 rounded-t-md"></div>
                <form className="py-6 px-8" onSubmit={submitHandler}>
                  <label className="block font-semibold">Username</label>

                  <input
                    type="text"
                    placeholder="Username"
                    className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                    name="username"
                    value={loginCred.username}
                    onChange={formChangeHandler}
                    required
                  />

                  <label className="block mt-3 font-semibold">Password</label>
                  <div className="relative flex items-center mt-2">
                    <input
                      type={`${showPass ? "text" : "password"}`}
                      placeholder="Password"
                      className="border w-full h-5 px-3 py-5  hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md"
                      name="password"
                      value={loginCred.password}
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
                  {loginError?.length > 0 && (
                    <div className="mt-4 text-center text-red-600 font-medium">
                      {loginError}
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:items-baseline">
                    <button
                      type="submit"
                      className="mt-4 bg-sky-500 py-2 px-6 rounded-md hover:bg-sky-600 font-semibold"
                    >
                      Login
                    </button>
                    <Link to="/signup" className="text-sm hover:underline">
                      Need an account? Sign Up
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="flex mt-4 mx-auto border-sky-500 border-2 py-2 px-6 rounded-md hover: bg-gradient-to-r hover:from-sky-500 hover:to-cyan-400 font-semibold"
                    onClick={guestLoginHandler}
                  >
                    Login as Guest
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
