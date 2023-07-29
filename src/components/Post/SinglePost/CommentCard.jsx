import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPostDate } from "../../../utils";
import { CommentOptionsModal } from "./index";
import { useOnClickOutsideModal } from "../../../hooks/useOnClickOutsideModal";
import { CommentModal } from "../CommentModal";
import { UserAvatar } from "../../index";

export const CommentCard = ({ singlePost, comment }) => {
  const [showCommentOptionsModal, setShowCommentOptionsModal] = useState(false);
  const [showEditCommentModal, setShowEditCommentModal] = useState(false);
  const { allUsers } = useSelector((state) => state.users);
  const currentUser = allUsers?.find(
    (dbUser) => dbUser.username === comment.username
  );
  const navigate = useNavigate();
  const commentToggleRef = useRef();
  const commentRef = useRef();
  const commentToggleHandler = () =>
    setShowCommentOptionsModal((prev) => !prev);

  useOnClickOutsideModal(
    commentRef,
    () => setShowCommentOptionsModal(false),
    commentToggleRef
  );

  const navigateUserProfile = () => {
    navigate(`/profile/${comment.username}`);
  };

  return (
    <div className=" p-4 border-b-2 border-b-gray-200p-4 grid grid-cols-[4rem,1fr,1rem]">
      <UserAvatar user={currentUser} />
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <span
              className="font-semibold cursor-pointer"
              onClick={navigateUserProfile}
            >
              @{comment.username}
            </span>
            <span className="text-gray-500">.</span>
            <span className="text-gray-500">
              {getPostDate(comment.createdAt)}
            </span>
          </div>
          <p>{comment.text}</p>
        </div>
      </div>
      <div
        className="relative cursor-pointer self-start text-center w-6 h-6 hover:bg-gray-400 hover:bg-opacity-30 hover:rounded-full"
        ref={commentToggleRef}
        onClick={commentToggleHandler}
      >
        <i className="fa-solid fa-ellipsis"></i>
        <div ref={commentRef}>
          {showCommentOptionsModal && (
            <CommentOptionsModal
              post={singlePost}
              comment={comment}
              setShowCommentOptionsModal={setShowCommentOptionsModal}
              setShowEditCommentModal={setShowEditCommentModal}
            />
          )}
        </div>
      </div>
      {showEditCommentModal && (
        <CommentModal
          post={singlePost}
          setShowCommentModal={setShowEditCommentModal}
          comment={comment}
        />
      )}
    </div>
  );
};
