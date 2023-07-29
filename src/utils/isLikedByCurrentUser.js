export const isLikedByCurrentUser = (post, user, from) => {
  return post.likes?.likedBy?.find(
    (currUser) => currUser.username === user.username
  );
};
