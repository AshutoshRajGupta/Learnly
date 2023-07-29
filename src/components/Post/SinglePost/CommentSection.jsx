import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../reducers/postSlice";
import { CommentCard } from "./index";
import { UserAvatar } from "../../index";

export const CommentSection = ({ singlePost, newCommentRef }) => {
  const { comments } = singlePost;
  const [commentData, setCommentData] = useState({ text: "" });
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.users);
  const currentUser = allUsers?.find(
    (dbUser) => dbUser.username === user.username
  );

  const commentChangeHandler = (e) => {
    setCommentData({ ...commentData, text: e.target.value });
  };

  const addPostCommentHandler = () => {
    dispatch(addComment({ postId: singlePost._id, commentData, token }));
  };

  return (
    <>
      <div className="relative p-2 border-b-2 border-b-gray-200 grid grid-cols-[4rem,1fr,6rem]">
        <UserAvatar user={currentUser} />
        <input
          type="text"
          required
          ref={newCommentRef}
          placeholder="Post your reply"
          className="outline-none bg-inherit"
          value={commentData.text}
          onChange={commentChangeHandler}
        />
        <button
          className=" text-center font-semibold  rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 disabled:opacity-60"
          disabled={!commentData.text.trim()}
          type="submit"
          onClick={addPostCommentHandler}
        >
          Comment
        </button>
      </div>
      {comments?.map((comment) => (
        <CommentCard
          singlePost={singlePost}
          comment={comment}
          key={comment._id}
        />
      ))}
    </>
  );
};
