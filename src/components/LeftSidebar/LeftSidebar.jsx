import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const LeftSidebar = () => {
  const { allUsers } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);

  const loggedInUser = allUsers?.find(
    (dbUser) => dbUser.username === user.username
  );

  const isActiveLink = ({ isActive }) => {
    return `flex gap-3 cursor-pointer sm:hover:bg-gray-400 sm:hover:bg-opacity-30 py-1 px-3 lg:py-2 lg:px-5 rounded-full ${
      isActive ? "bg-gray-400 bg-opacity-40" : ""
    }`;
  };
  return (
    <div className="sm:col-span-1 lg:col-span-2 flex justify-center">
      <Link
        to="/"
        className="lg:fixed pb-4 mt-4 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 -tracking-wide italic"
      >
        Learnly...
      </Link>
      <nav className="fixed z-10 w-full sm:w-auto bg-gray-100 sm:bg-transparent border-t-2 sm:border-t-0 border-t-slate-300 bottom-0 sm:bottom-auto flex flex-row justify-between sm:flex-col  gap-10 sm:gap-6 text-xl mt-16">
        <NavLink to="/" className={isActiveLink}>
          <span>
            <i className="fa-solid fa-house"></i>
          </span>
          <span className="hidden sm:block">Home</span>
        </NavLink>
        <NavLink to="/explore" className={isActiveLink}>
          <span>
            <i className="fa-solid fa-globe"></i>
          </span>
          <span className="hidden sm:block">Explore</span>
        </NavLink>
        <NavLink to="/bookmarks" className={isActiveLink}>
          <span>
            <i className="fa-solid fa-bookmark"></i>
          </span>
          <span className="hidden sm:block">Bookmarks</span>
        </NavLink>
        <NavLink
          to={`/profile/${loggedInUser?.username}`}
          className={isActiveLink}
        >
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          <span className="hidden sm:block">Profile</span>
        </NavLink>
      </nav>
    </div>
  );
};
