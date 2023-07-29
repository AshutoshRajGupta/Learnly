import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../reducers/postSlice";
import { UserAvatar } from "../index";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dkwrbu6qr/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "pgltbcxc";

export const NewPost = () => {
  const [postData, setPostData] = useState({
    content: "",
    img: "",
    imgAlt: "",
  });
  const [image, setImage] = useState(null);
  const { content } = postData;
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.users);
  const currentUser = allUsers?.find(
    (dbUser) => dbUser.username === user.username
  );

  const uploadImageFile = () => {
    const file = image;
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "");

    fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        return dispatch(
          createPost({
            postData: {
              ...postData,
              img: data.url,
              imgAlt: data.original_filename,
            },
            token,
          })
        );
      })
      .catch((err) => console.error(err));
  };

  const imageUploadHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const postHandler = (e) => {
    setPostData({ ...postData, content: e.target.value });
  };

  const postSubmitHandler = () => {
    if (image) uploadImageFile();
    else dispatch(createPost({ postData, token }));
    setPostData({ content: "" });
  };
  return (
    <div className="flex gap-2 mt-4 justify-center p-4">
      <UserAvatar user={currentUser} />
      <div className="flex-grow flex flex-col gap-4">
        <input
          className="text-xl outline-none mt-1.5 bg-transparent break-all w-full"
          placeholder="What's happening?"
          value={content}
          onChange={postHandler}
        />
        {image ? (
          <div className="relative">
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-auto rounded-md"
              alt="demo"
            />
            <button
              type="button"
              className="absolute top-1 left-2 text-lg"
              onClick={() => setImage(null)}
            >
              <i className="fa-solid fa-square-xmark"></i>
            </button>
          </div>
        ) : null}
        <div className="ml-auto flex items-center gap-4">
          <label>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={imageUploadHandler}
            />
            <i className="fa-solid fa-image text-lg cursor-pointer"></i>
          </label>
          <button
            className={`px-4 py-1 text-center font-semibold  rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 ${
              content.trim() || image
                ? "opacity-100"
                : "opacity-60 pointer-events-none"
            }`}
            onClick={postSubmitHandler}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
