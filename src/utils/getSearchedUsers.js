export const getSearchedUsers = (searchText, allUsers) => {
  return allUsers.filter((user) =>
    user.username.toLowerCase().includes(searchText.toLowerCase().trim())
  );
};
