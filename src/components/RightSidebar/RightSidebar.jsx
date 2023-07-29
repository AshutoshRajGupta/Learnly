import { SuggestedFollowers, SearchBar } from "../index";
export const RightSidebar = () => {
  return (
    <div className="hidden lg:block col-span-3">
      <SearchBar />
      <SuggestedFollowers />
    </div>
  );
};
