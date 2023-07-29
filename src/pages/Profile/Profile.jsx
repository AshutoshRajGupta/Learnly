import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  LeftSidebar,
  RightSidebar,
  SearchBar,
  ProfileDetails,
  Loader,
  LatestPost,
} from "../../components";
import { getAllUsers } from "../../reducers/userSlice";
import { getPosts } from "../../reducers/postSlice";

export const Profile = () => {
  const { username } = useParams();
  const { allUsers } = useSelector((state) => state.users);
  const { allPosts, postsStatus } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = allUsers?.find((user) => user.username === username);
  const currentUserPosts = allPosts?.filter(
    (post) => post.username === username
  );

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      {postsStatus === "loading" ? (
        <Loader />
      ) : (
        <div className="md:min-h-screen sm:grid sm:grid-cols-6 lg:grid-cols-10  w-full sm:w-[80%] sm:gap-12 lg:gap-4 mx-auto">
          <LeftSidebar />
          <div className="main-section sm:col-span-5 lg:col-span-5 w-full border-x-2 border-x-gray-200">
            <div className="flex  justify-between  border-b-2 border-b-gray-200">
              <div className="ml-4 flex items-center">
                <i
                  className="fa-solid fa-arrow-left mr-4 cursor-pointer"
                  onClick={() => navigate(-1)}
                ></i>
                <span>
                  <h2 className="font-bold text-md  md:text-xl hidden sm:block">
                    {currentUser?.firstName} {currentUser?.lastName}
                  </h2>
                  <span>{currentUserPosts.length}</span> <span>Posts</span>
                </span>
              </div>
              <div className="lg:hidden">
                <SearchBar />
              </div>
            </div>
            <ProfileDetails currentUser={currentUser} />
            <div className="border-b-2 border-b-gray-200 my-2"></div>
            {currentUserPosts.length > 0 ? (
              currentUserPosts.map((post) => (
                <LatestPost post={post} key={post._id} />
              ))
            ) : (
              <div className="flex justify-center font-semibold text-xl mt-4">
                You haven't posted anything yet.
              </div>
            )}
          </div>
          <RightSidebar />
        </div>
      )}
    </>
  );
};
