import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, followUser } from "../../reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { filterUnfollowedUsers } from "../../utils";
import { UserAvatar } from "../index";

export const SuggestedFollowers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allUsers } = useSelector((state) => state.users);
  const { token, user } = useSelector((state) => state.auth);
  const loggedInUser = allUsers.find(
    (dbUser) => dbUser.username === user.username
  );

  const suggestedFollowers = filterUnfollowedUsers(
    allUsers,
    loggedInUser
  ).slice(0, 4);

  const followHandler = (followUserId) => {
    dispatch(followUser({ followUserId, token }));
  };

  const userProfileHandler = (user) => {
    navigate(`/profile/${user.username}`);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      {suggestedFollowers.length > 0 ? (
        <aside className="bg-slate-200 bg-opacity-60 mt-12 my-3 rounded-md py-4 px-3">
          <h2 className="font-bold">Who to follow</h2>
          <div className="flex flex-col gap-10 mt-4">
            {suggestedFollowers.map((user) => (
              <div className="flex gap-1" key={user._id}>
                <UserAvatar user={user} />
                <div
                  className="flex flex-col flex-grow cursor-pointer"
                  onClick={() => userProfileHandler(user)}
                >
                  <span className="font-bold tracking-wide">
                    {user.firstName} {user.lastName}
                  </span>
                  <span className="text-gray-500">{user.username}</span>
                </div>
                <button
                  className="self-center px-4 py-1 text-center font-semibold  rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
                  onClick={() => followHandler(user._id)}
                >
                  Follow
                </button>
              </div>
            ))}
          </div>
        </aside>
      ) : null}
    </>
  );
};
