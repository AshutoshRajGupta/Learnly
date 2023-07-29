import axios from "axios";

export const getAllUsersService = async () => {
  return await axios.get("/api/users");
};

export const getUserByUsernameService = async (username) => {
  return await axios.get(`/api/users/${username}`);
};

export const editUserDetailsService = async ({ userData, token }) => {
  return await axios.post(
    `/api/users/edit`,
    { userData },
    { headers: { authorization: token } }
  );
};

export const getBookmarkPostHandlerService = async (token) => {
  return await axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });
};

export const addBookmarkPostService = async ({ postId, token }) => {
  return await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};

export const removePostFromBookmarkService = async ({ postId, token }) => {
  return await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};

export const followUserService = async ({ followUserId, token }) => {
  return await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};

export const unFollowUserService = async ({ followUserId, token }) => {
  return await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};
