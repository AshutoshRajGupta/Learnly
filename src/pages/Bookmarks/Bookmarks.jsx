import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  LeftSidebar,
  RightSidebar,
  SearchBar,
  LatestPost,
  Loader,
} from "../../components";
import { getBookmarkPosts } from "../../reducers/userSlice";

export const Bookmarks = () => {
  const { bookmarks, loadingStatus } = useSelector((state) => state.users);
  const { allPosts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const bookMarkedPosts = allPosts.filter((dbPost) =>
    bookmarks.find((bookmark) => bookmark === dbPost._id)
  );

  useEffect(() => {
    dispatch(getBookmarkPosts());
  }, [dispatch]);

  return (
    <>
      {loadingStatus === "loading" ? (
        <Loader />
      ) : (
        <div className="min-h-screen sm:grid sm:grid-cols-6 lg:grid-cols-10  w-full sm:w-[80%] sm:gap-12 lg:gap-4 mx-auto">
          <LeftSidebar />
          <div className="main-section sm:col-span-5 lg:col-span-5 w-full border-x-2 border-x-gray-200">
            <div className="flex justify-between items-center border-b-2 border-b-gray-200">
              <h2 className="font-bold text-xl p-4">Bookmarks</h2>
              <div className="lg:hidden">
                <SearchBar />
              </div>
            </div>
            {bookMarkedPosts.length ? (
              bookMarkedPosts.map((post) => (
                <LatestPost post={post} key={post._id} bookmark={true} />
              ))
            ) : (
              <div className="flex justify-center font-semibold text-xl mt-4">
                No Bookmarks
              </div>
            )}
          </div>
          <RightSidebar />
        </div>
      )}
    </>
  );
};
