import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Home,
  Explore,
  Bookmarks,
  Profile,
  Login,
  Signup,
  ErrorPage,
} from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import { SinglePost } from "../components/Post/SinglePost/SinglePost";

export const NavRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/post/:postId" element={<SinglePost />} />
        </Route>
      </Routes>
    </div>
  );
};
