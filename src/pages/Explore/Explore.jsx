import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LeftSidebar,
  RightSidebar,
  LatestPost,
  SearchBar,
  Loader,
} from "../../components";
import { getPosts } from "../../reducers/postSlice";
import { getSortedPosts } from "../../utils/getSortedPosts";

export const Explore = () => {
  const dispatch = useDispatch();
  const { postsStatus } = useSelector((state) => state.posts);
  const { allPosts } = useSelector((state) => state.posts);
  const posts = getSortedPosts(allPosts, "Latest");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {postsStatus === "loading" ? (
        <Loader />
      ) : (
        <div className="md:min-h-screen sm:grid sm:grid-cols-6 lg:grid-cols-10  w-full sm:w-[80%] sm:gap-12 lg:gap-4 mx-auto mb-8 sm:mb-0">
          <LeftSidebar />
          <div className="main-section sm:col-span-5 lg:col-span-5 w-full border-x-2 border-x-gray-200">
            <div className="flex justify-between items-center border-b-2 border-b-gray-200">
              <h2 className="font-bold text-xl p-4">Explore</h2>
              <div className="lg:hidden">
                <SearchBar />
              </div>
            </div>
            {posts.map((post) => (
              <LatestPost post={post} key={post._id} />
            ))}
          </div>
          <RightSidebar />
        </div>
      )}
    </>
  );
};
