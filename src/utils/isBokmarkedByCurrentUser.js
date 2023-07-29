export const isBokmarkedByCurrentUser = (post, bookmarks) =>
  bookmarks.find((bookmarkId) => bookmarkId === post._id);
