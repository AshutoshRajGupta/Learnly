export const getSortedPosts = (posts, sortValue) => {
  let sortedPosts;
  if (sortValue === "Oldest")
    sortedPosts = [...posts].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  else if (sortValue === "Latest")
    sortedPosts = [...posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  else if (sortValue === "Trending")
    sortedPosts = [...posts].sort(
      (a, b) => b.likes.likeCount - a.likes.likeCount
    );

  return sortedPosts;
};
