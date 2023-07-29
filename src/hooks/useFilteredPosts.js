import { useSelector } from "react-redux";
import { getSortedPosts } from "../utils/getSortedPosts";

export const useFilteredPosts = (sortValue, followingUsers) => {
  const { allPosts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const followingPosts = allPosts.filter(
    (post) =>
      followingUsers?.some(
        (followingUser) => followingUser.username === post.username
      ) || user.username === post.username
  );
  const sortedPost = getSortedPosts(followingPosts, sortValue);
  return sortedPost;
};
