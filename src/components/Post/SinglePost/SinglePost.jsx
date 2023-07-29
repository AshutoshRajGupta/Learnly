import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { LeftSidebar, RightSidebar, Loader } from "../..";
import { getSinglePost } from "../../../reducers/postSlice";
import {
  getPostDate,
  isLikedByCurrentUser,
  isBokmarkedByCurrentUser,
  getUserFullNameFromUsername,
  setFocusInput,
} from "../../../utils";
import { PostOptionsModal } from "../PostOptionsModal";
import { useOnClickOutsideModal } from "../../../hooks/useOnClickOutsideModal";
import { EditPostModal } from "..";
import { likePost, dislikePost } from "../../../reducers/postSlice";
import {
  addBookmarkPosts,
  removePostFromBookmark,
} from "../../../reducers/userSlice";
import { CommentSection, LikePostModal } from "./index";
import { UserAvatar } from "../../index";

export const SinglePost = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [likeModal, setLikeModal] = useState(false);

  const postRef = useRef();
  const toggleRef = useRef();

  const newCommentRef = useRef();
  const {
    allPosts,
    postsStatus,
    singlePost: currentPost,
  } = useSelector((state) => state.posts);
  const { user, token } = useSelector((state) => state.auth);
  const { allUsers, bookmarks } = useSelector((state) => state.users);
  const currentUser = allUsers?.find(
    (dbUser) => dbUser.username === currentPost.username
  );

  const toggleModalHandler = () => setShowOptionsModal((prev) => !prev);

  useOnClickOutsideModal(postRef, () => setShowOptionsModal(false), toggleRef);

  const isLiked = isLikedByCurrentUser(currentPost, user);

  const likeHandler = () => {
    isLiked
      ? dispatch(dislikePost({ postId: currentPost._id, token }))
      : dispatch(likePost({ postId: currentPost._id, token }));
  };

  const userProfileHandler = (e) => {
    e.stopPropagation();
    navigate(`/profile/${currentPost.username}`);
  };

  const isBookmarked = isBokmarkedByCurrentUser(currentPost, bookmarks);

  const bookmarkHandler = () => {
    isBookmarked
      ? dispatch(removePostFromBookmark({ postId: currentPost._id, token }))
      : dispatch(addBookmarkPosts({ postId: currentPost._id, token }));
  };

  const showLikeModal = () => setLikeModal(true);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [dispatch, postId, allPosts]);

  useEffect(() => {
    getUserFullNameFromUsername(currentPost.username).then((user) =>
      setName({ firstName: user.firstName, lastName: user.lastName })
    );
  }, [currentPost.username]);

  return (
    <>
      {postsStatus === "loading" ? (
        <Loader />
      ) : (
        <div className="min-h-screen sm:grid sm:grid-cols-6 lg:grid-cols-10  w-full sm:w-[80%] sm:gap-12 lg:gap-4 mx-auto">
          <LeftSidebar />
          <div className="main-section sm:col-span-5 lg:col-span-5 w-full border-x-2 border-x-gray-200">
            <div className="flex justify-between items-center border-b-2 border-b-gray-200">
              <h2 className="font-bold text-xl p-4">
                <i
                  className="fa-solid fa-arrow-left mr-4 cursor-pointer"
                  onClick={() => navigate(-1)}
                ></i>
                Posts
              </h2>
            </div>
            {currentPost ? (
              <div className="flex flex-col">
                <div className="relative p-4 border-b-2 border-b-gray-200 grid grid-cols-[4rem,1fr,1rem]">
                  <div onClick={userProfileHandler}>
                    <UserAvatar user={currentUser} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-1">
                      <div
                        className="flex gap-1  cursor-pointer"
                        onClick={userProfileHandler}
                      >
                        <span className="font-bold tracking-wide">
                          {name.firstName}
                        </span>
                        <span className="font-bold tracking-wide">
                          {name.lastName}
                        </span>
                        <span className="text-gray-500">
                          @{currentPost.username}
                        </span>
                        <span className="text-gray-500">.</span>
                        <span className="text-gray-500">
                          {getPostDate(currentPost.createdAt)}
                        </span>
                      </div>
                      <p>{currentPost.content}</p>
                      {currentPost?.img ? (
                        <img
                          src={currentPost?.img}
                          className="w-full h-auto rounded-md"
                          alt={currentPost?.imgAlt}
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
                        {currentPost.likes.likeCount > 0 && (
                          <span
                            className="hover:underline hover:text-black"
                            onClick={showLikeModal}
                          >
                            {currentPost.likes.likeCount}
                          </span>
                        )}
                      </span>
                      <span
                        className="cursor-pointer flex items-center"
                        onClick={() => setFocusInput(newCommentRef)}
                      >
                        <i className="fa-regular fa-comment text-lg  w-8 h-8  hover:bg-gray-400 hover:rounded-full hover:bg-opacity-40 flex items-center justify-center"></i>
                        <span>{currentPost.comments.length}</span>
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={bookmarkHandler}
                      >
                        <i
                          className={`fa-bookmark text-lg w-8 h-8 hover:bg-gray-400 hover:rounded-full hover:bg-opacity-40 flex items-center justify-center ${
                            isBookmarked
                              ? "fa-solid text-sky-400"
                              : "fa-regular "
                          }`}
                        ></i>
                      </span>
                    </div>
                  </div>
                  <span
                    className="cursor-pointer self-start text-center w-6 h-6 hover:bg-gray-400 hover:bg-opacity-30 hover:rounded-full"
                    onClick={toggleModalHandler}
                    ref={toggleRef}
                  >
                    <i className="fa-solid fa-ellipsis"></i>
                  </span>
                  <div ref={postRef}>
                    {showOptionsModal && (
                      <PostOptionsModal
                        post={currentPost}
                        setShowOptionsModal={setShowOptionsModal}
                        setShowEditModal={setShowEditModal}
                      />
                    )}
                  </div>
                </div>

                <CommentSection
                  singlePost={currentPost}
                  newCommentRef={newCommentRef}
                />

                {showEditModal && (
                  <EditPostModal
                    post={currentPost}
                    setShowEditModal={setShowEditModal}
                  />
                )}
                {likeModal && (
                  <LikePostModal
                    post={currentPost}
                    setLikeModal={setLikeModal}
                  />
                )}
              </div>
            ) : null}
          </div>
          <RightSidebar />
        </div>
      )}
    </>
  );
};
