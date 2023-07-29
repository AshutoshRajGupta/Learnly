import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../reducers/postSlice";
import { followUser, unFollowUser } from "../../reducers/userSlice";
import { isUserFollowAnotherUser } from "../../utils";

export const PostOptionsModal = ({
  post,
  setShowEditModal,
  setShowOptionsModal,
}) => {
  const { user, token } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.users);
  const { username, _id } = post;

  const dispatch = useDispatch();

  const deletePostHandler = () => {
    dispatch(deletePost({ postId: _id, token }));
  };

  const editPostHandler = () => {
    setShowEditModal(true);
    setShowOptionsModal(false);
  };

  const userToFollow = allUsers.find(
    (dbUser) => dbUser.username === post.username
  );

  const loggedInUser = allUsers.find(
    (dbUser) => dbUser.username === user.username
  );

  const alreadyFollowing = isUserFollowAnotherUser(
    userToFollow,
    loggedInUser.following
  );
  const userFollowingHandler = () => {
    alreadyFollowing
      ? dispatch(unFollowUser({ followUserId: userToFollow._id, token }))
      : dispatch(followUser({ followUserId: userToFollow._id, token }));
    setShowOptionsModal(false);
  };

  return (
    <div
      className="absolute z-10 right-8 top-12 ring-1 ring-gray-300 bg-neutral-50 shadow-2xl w-36"
      onClick={(e) => e.stopPropagation()}
    >
      {user.username === username ? (
        <div className="flex flex-col gap-2">
          <span
            className="flex gap-3 p-2 items-center cursor-pointer hover:bg-neutral-300 hover:bg-opacity-30"
            onClick={editPostHandler}
          >
            <i className="fa-solid fa-pen-to-square"></i>
            <span>Edit</span>
          </span>
          <span
            className="flex gap-3 p-2 items-center cursor-pointer hover:bg-neutral-300 hover:bg-opacity-30"
            onClick={deletePostHandler}
          >
            <i className="fa-solid fa-trash"></i>
            <span>Delete</span>
          </span>
        </div>
      ) : (
        <div>
          <span
            className="flex gap-3 p-2 items-center cursor-pointer hover:bg-neutral-300 hover:bg-opacity-30"
            onClick={() => userFollowingHandler()}
          >
            <i
              className={`fa-solid fa-user-${
                alreadyFollowing ? "xmark" : "plus"
              }`}
            ></i>
            <span>{alreadyFollowing ? "Unfollow" : "Follow"}</span>
          </span>
        </div>
      )}
    </div>
  );
};
