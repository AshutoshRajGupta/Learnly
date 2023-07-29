export const isUserFollowAnotherUser = (user, followingArray) => {
  return followingArray?.find(
    (following) => following.username === user.username
  );
};

export const filterUnfollowedUsers = (allUsers, loggedInUser) => {
  const unfollowedUsers = allUsers.filter(
    (user) =>
      !isUserFollowAnotherUser(user, loggedInUser?.following) &&
      user.username !== loggedInUser?.username
  );
  return unfollowedUsers;
};
