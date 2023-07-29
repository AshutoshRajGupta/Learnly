import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../../reducers/authSlice";
import { useState } from "react";
import { followUser, unFollowUser } from "../../reducers/userSlice";
import { isUserFollowAnotherUser } from "../../utils";
import { EditProfileModal } from "./EditProfileModal";
import { FollowListModal } from "./FollowListModal";
import { UserAvatar, Loader } from "../index";

export const ProfileDetails = ({ currentUser }) => {
  const { user, token } = useSelector((state) => state.auth);
  const { allUsers, loadingStatus } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [followModal, setFollowModal] = useState({
    show: false,
    title: "",
    list: [],
  });
  const [editModal, setEditModal] = useState(false);

  const isLoggedInUser = currentUser?.username === user?.username;
  const loggedInUser = allUsers.find(
    (dbUser) => dbUser.username === user?.username
  );

  const { firstName, lastName, username, bio, website, followers, following } =
    currentUser || "";

  const alreadyFollowing = isUserFollowAnotherUser(
    currentUser,
    loggedInUser?.following
  );

  const userFollowingHandler = () => {
    alreadyFollowing
      ? dispatch(unFollowUser({ followUserId: currentUser._id, token }))
      : dispatch(followUser({ followUserId: currentUser._id, token }));
  };

  const logoutClickHandler = () => {
    dispatch(logoutHandler());
  };

  const openEditModal = () => setEditModal(true);
  const openFollowModal = (title) => {
    setFollowModal({
      show: true,
      title: title,
      list: title === "Following" ? following : followers,
    });
  };

  return (
    <>
      {loadingStatus === "loading" ? (
        <Loader />
      ) : (
        <div className="p-4 grid grid-cols-[8rem_1fr] gap-8">
          <UserAvatar user={currentUser} profile={true} />
          <div className="flex flex-col gap-4">
            <div className="flex justify-between flex-col gap-4 md:flex-row">
              <div className="flex flex-col">
                <span className="font-bold tracking-wide">
                  {firstName} {lastName}
                </span>
                <span className="text-gray-500 text-sm">@{username}</span>
              </div>
              {isLoggedInUser ? (
                <div className="flex gap-4">
                  <button
                    className="self-baseline font-semibold border-2 border-slate-400 py-1 px-4 rounded-full text-sm hover:bg-slate-200 hover:border-slate-400"
                    onClick={openEditModal}
                  >
                    Edit Profile
                  </button>
                  <span className="cursor-pointer" onClick={logoutClickHandler}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </span>
                </div>
              ) : (
                <button
                  className="self-center px-4 py-1 text-center font-semibold  rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 self-baseline"
                  onClick={() => userFollowingHandler()}
                >
                  {alreadyFollowing ? "Unfollow" : "Follow"}
                </button>
              )}
            </div>
            {bio && <p className="font-semibold">{bio}</p>}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-sky-600"
              >
                <i className="fa-solid fa-link mr-1 text-xs"></i>
                {website}
              </a>
            )}
            <div className="flex gap-3">
              <span
                className="hover:underline cursor-pointer font-semibold"
                onClick={() => openFollowModal("Followers")}
              >
                <span>{followers?.length}</span> <span>Followers</span>
              </span>
              <span
                className="hover:underline cursor-pointer font-semibold"
                onClick={() => openFollowModal("Following")}
              >
                <span>{following?.length}</span> <span>Following</span>
              </span>
            </div>
          </div>
          {followModal.show && (
            <FollowListModal
              followModal={followModal}
              setFollowModal={setFollowModal}
            />
          )}
          {editModal && <EditProfileModal setEditModal={setEditModal} />}
        </div>
      )}
    </>
  );
};
