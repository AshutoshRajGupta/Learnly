import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../reducers/postSlice";
import { UserAvatar } from "../index";

export const EditPostModal = ({ post, setShowEditModal }) => {
  const [postData, setPostData] = useState({
    content: post.content,
    img: post.img,
  });
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.users);
  const currentUser = allUsers?.find(
    (dbUser) => dbUser.username === post.username
  );

  const removeImage = () => setPostData({ ...postData, img: null });

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const postChangeHandler = (e) => {
    setPostData({ ...postData, content: e.target.value });
  };

  const editPostHandler = () => {
    dispatch(editPost({ postId: post._id, postData, token }));
    setShowEditModal(false);
  };

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 z-50 bg-gray-900 bg-opacity-10"
        onClick={closeEditModal}
      ></div>
      <div
        className="fixed z-50 top-1/4 left-1/4 md:left-[15%] w-[70%] bg-white ring-1 ring-gray-300 shadow-inner py-4 rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-[3rem,1fr] gap-4 mt-4 justify-center p-4">
          <UserAvatar user={currentUser} />
          <div className="flex-grow flex flex-col gap-4">
            <textarea
              className="text-xl outline-none mt-1.5 bg-transparent break-all w-full break-words h-20"
              value={postData.content}
              onChange={postChangeHandler}
            />
            {postData.img ? (
              <div className="relative">
                <img
                  src={postData.img}
                  className="w-80 h-auto rounded-md"
                  alt="demo"
                />
                <button
                  type="button"
                  className="absolute top-1 left-2 text-lg"
                  onClick={removeImage}
                >
                  <i className="fa-solid fa-square-xmark"></i>
                </button>
              </div>
            ) : null}
            <div className="flex justify-between items-center gap-4">
              <button>
                {/* <i className="fa-solid fa-image text-lg"></i> */}
              </button>
              <div className="flex gap-6">
                <button
                  className="px-4 py-1 text-center font-semibold  rounded-full border-2 border-sky-400"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-1 text-center font-semibold  rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
                  onClick={editPostHandler}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
