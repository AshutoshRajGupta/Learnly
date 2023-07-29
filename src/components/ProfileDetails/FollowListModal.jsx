import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { UserAvatar } from "../index";
export const FollowListModal = ({ followModal, setFollowModal }) => {
  const { title, list } = followModal;
  const navigate = useNavigate();

  const closeEditModal = () => {
    setFollowModal(false);
  };

  const navigateUserProfile = (e, user) => {
    e.stopPropagation();
    navigate(`/profile/${user.username}`);
    setFollowModal(false);
  };

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-10 "></div>
      <div
        className="h-full w-full fixed z-50  top-0 left-0 flex items-center justify-center"
        onClick={closeEditModal}
      >
        <div className=" w-80 bg-white ring-1 ring-gray-300 shadow-inner p-4 rounded-sm">
          <div className="flex justify-between users-center mb-4">
            <div className="text-xl">{title}</div>
            <button
              className="hover:bg-neutral-300 h-min hover:rounded-full px-2 py-0.5"
              onClick={closeEditModal}
            >
              <i className="fa-solid fa-times"></i>
            </button>
          </div>

          <div className="flex flex-col justify-center gap-4">
            {list.length ? (
              list.map((user) => (
                <div
                  key={user._id}
                  className="flex gap-2 cursor-pointer"
                  onClick={(e) => navigateUserProfile(e, user)}
                >
                  <UserAvatar user={user} />
                  <div className="flex flex-col -mt-0.5">
                    <span className="font-bold">
                      {user.firstName} {user.lastName}
                    </span>
                    <span className="text-sm text-lightGrey -mt-1">
                      @{user.username}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div>Oops! No {title} found</div>
            )}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
