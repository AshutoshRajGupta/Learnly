import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getPostDate,
  isLikedByCurrentUser,
  isBokmarkedByCurrentUser,
  getUserFullNameFromUsername,
} from "../../utils";
import { PostOptionsModal } from "../Post/PostOptionsModal";
import { useOnClickOutsideModal } from "../../hooks/useOnClickOutsideModal";
import { EditPostModal, CommentModal } from "../Post";
import { likePost, dislikePost } from "../../reducers/postSlice";
import {
  addBookmarkPosts,
  removePostFromBookmark,
} from "../../reducers/userSlice";
import { UserAvatar } from "../index";

export const LatestPost = ({ post, bookmark }) => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const postRef = useRef();
  const toggleRef = useRef();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { allUsers, bookmarks } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const toggleModalHandler = (e) => {
    e.stopPropagation();
    setShowOptionsModal((prev) => !prev);
  };

  useOnClickOutsideModal(postRef, () => setShowOptionsModal(false), toggleRef);

  const isLiked = isLikedByCurrentUser(post, user);
  const likeHandler = (e) => {
    e.stopPropagation();
    isLiked
      ? dispatch(dislikePost({ postId: post._id, token }))
      : dispatch(likePost({ postId: post._id, token }));
  };

  const commentHandler = (e) => {
    e.stopPropagation();
    setShowCommentModal(true);
  };

  const isBookmarked = isBokmarkedByCurrentUser(post, bookmarks);
  const currentUser = allUsers?.find(
    (dbUser) => dbUser.username === post.username
  );

  const bookmarkHandler = (e) => {
    e.stopPropagation();
    isBookmarked
      ? dispatch(removePostFromBookmark({ postId: post._id, token }))
      : dispatch(addBookmarkPosts({ postId: post._id, token }));
  };

  const singlePostHandler = () => navigate(`/post/${post._id}`);
  const userProfileHandler = (e) => {
    e.stopPropagation();
    navigate(`/profile/${post.username}`);
  };

  useEffect(() => {
    getUserFullNameFromUsername(post.username).then((user) =>
      setName({ firstName: user.firstName, lastName: user.lastName })
    );
  }, [post.username]);

  return (
    <div
      className="relative p-4 border-b-2 border-b-gray-200 grid grid-cols-[4rem,1fr,1rem]"
      onClick={singlePostHandler}
    >
      <div onClick={userProfileHandler}>
        <UserAvatar user={currentUser} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1 cursor-pointer">
          <div
            className="flex flex-col sm:flex-row md:gap-1"
            onClick={userProfileHandler}
          >
            <div className="flex gap-2">
              <span className="font-bold tracking-wide">{name.firstName}</span>
              <span className="font-bold tracking-wide">{name.lastName}</span>
            </div>
            <div>
              <span className="text-gray-500">@{post.username}</span>
              <span className="text-gray-500">.</span>
              <span className="text-gray-500">
                {getPostDate(post.createdAt)}
              </span>
            </div>
          </div>
          <p>{post.content}</p>
          {post?.img ? (
            <img
              src={post?.img}
              className="w-full h-auto rounded-md"
              alt={post?.imgAlt}
            ></img>
          ) : null}
        </div>
        <div className="flex justify-between text-gray-500 w-9/12">
          <span className="cursor-pointer flex items-center">
            <i
              className={`fa-heart text-lg w-8 h-8 hover:bg-gray-400 hover:rounded-full hover:bg-opacity-40 flex items-center justify-center ${
                isLiked ? "fa-solid text-sky-400" : "fa-regular"
              }`}
              onClick={likeHandler}
            ></i>
            <span>{post.likes.likeCount}</span>
          </span>
          <span className="cursor-pointer flex items-center">
            <i
              className="fa-regular fa-comment text-lg  w-8 h-8  hover:bg-gray-400 hover:rounded-full hover:bg-opacity-40 flex items-center justify-center"
              onClick={commentHandler}
            ></i>
            <span>{post.comments.length}</span>
          </span>
          <span className="cursor-pointer" onClick={bookmarkHandler}>
            <i
              className={`fa-bookmark text-lg w-8 h-8 hover:bg-gray-400 hover:rounded-full hover:bg-opacity-40 flex items-center justify-center ${
                isBookmarked ? "fa-solid text-sky-400" : "fa-regular "
              }`}
            ></i>
          </span>
        </div>
      </div>
      {!bookmark && (
        <span
          className="cursor-pointer self-start text-center w-6 h-6 hover:bg-gray-400 hover:bg-opacity-30 hover:rounded-full"
          onClick={toggleModalHandler}
          ref={toggleRef}
        >
          <i className="fa-solid fa-ellipsis"></i>
        </span>
      )}
      <div ref={postRef}>
        {showOptionsModal && (
          <PostOptionsModal
            post={post}
            setShowOptionsModal={setShowOptionsModal}
            setShowEditModal={setShowEditModal}
          />
        )}
      </div>
      {showEditModal && (
        <EditPostModal post={post} setShowEditModal={setShowEditModal} />
      )}
      {showCommentModal && (
        <CommentModal post={post} setShowCommentModal={setShowCommentModal} />
      )}
    </div>
  );
};
