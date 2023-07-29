import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserAvatar } from "../index";
import { searchedUsersHandler } from "../../reducers/userSlice";

export const SearchedUsersModal = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userProfileHandler = () => {
    navigate(`/profile/${user.username}`);
    dispatch(searchedUsersHandler({ searchedText: "" }));
  };
  return (
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
    </div>
  );
};
