import axios from "axios";

export const loginService = async ({ username, password }) => {
  return await axios.post("/api/auth/login", {
    username,
    password,
  });
};

export const singupService = async ({
  username,
  password,
  email,
  firstName,
  lastName,
}) => {
  return await axios.post("/api/auth/signup", {
    username,
    password,
    email,
    firstName,
    lastName,
  });
};
