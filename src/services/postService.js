import axios from "axios";

export const getPostsService = async () => {
  return await axios.get("/api/posts");
};

export const getSinglePostService = async (postId) => {
  return await axios.get(`/api/posts/${postId}`);
};

export const createPostService = async ({ postData, token }) => {
  return await axios.post(
    "/api/posts/",
    { postData },
    { headers: { authorization: token } }
  );
};

export const deletePostService = async ({ postId, token }) => {
  return await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
};

export const editPostService = async ({ postId, postData, token }) => {
  return await axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    {
      headers: { authorization: token },
    }
  );
};

export const likePostService = async ({ postId, token }) => {
  return await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const dislikePostService = async ({ postId, token }) => {
  return await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const addCommentPostService = async ({ postId, commentData, token }) => {
  return await axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    { headers: { authorization: token } }
  );
};

export const editCommentPostService = async ({
  postId,
  commentId,
  commentData,
  token,
}) => {
  return await axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    { headers: { authorization: token } }
  );
};

export const deleteCommentPostService = async ({
  postId,
  commentId,
  token,
}) => {
  return await axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    { headers: { authorization: token } }
  );
};
