import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../../reducers/postSlice";
import { followUser, unFollowUser } from "../../../reducers/userSlice";
import { isUserFollowAnotherUser } from "../../../utils";

export const CommentOptionsModal = ({
  post,
  comment,
  setShowCommentOptionsModal,
  setShowEditCommentModal,
}) => {
  const { user, token } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.users);
  const { _id } = post;

  const dispatch = useDispatch();

  const deletePostHandler = () => {
    dispatch(deleteComment({ postId: _id, commentId: comment._id, token }));
  };

  const editCommentHandler = (e) => {
    setShowEditCommentModal(true);
    setShowCommentOptionsModal(false);
    e.stopPropagation();
  };

  const userToFollow = allUsers.find(
    (dbUser) => dbUser.username === comment.username
  );
  const loggedInUser = allUsers.find(
    (dbUser) => dbUser.username === user.username
  );

  const alreadyFollowing = isUserFollowAnotherUser(
    userToFollow,
    loggedInUser.following
  );
  const userFollowingHandler = (e) => {
    alreadyFollowing
      ? dispatch(unFollowUser({ followUserId: userToFollow._id, token }))
      : dispatch(followUser({ followUserId: userToFollow._id, token }));
    setShowCommentOptionsModal(false);
    e.stopPropagation();
  };

  return (
    <>
      <div className="absolute z-10 right-8 top-2 ring-1 ring-gray-300 bg-neutral-50 shadow-2xl w-36">
        <div className="flex flex-col gap-2">
          {user.username === comment.username ? (
            <div className="flex flex-col gap-2">
              <span
                className="flex gap-3 p-2 items-center cursor-pointer hover:bg-neutral-300 hover:bg-opacity-30"
                onClick={editCommentHandler}
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
            <span
              className="flex gap-3 p-2 items-center cursor-pointer hover:bg-neutral-300 hover:bg-opacity-30"
              onClick={(e) => userFollowingHandler(e)}
            >
              <i
                className={`fa-solid fa-user-${
                  alreadyFollowing ? "xmark" : "plus"
                }`}
              ></i>
              <span>{alreadyFollowing ? "Unfollow" : "Follow"}</span>
            </span>
          )}
        </div>
      </div>
    </>
  );
};
