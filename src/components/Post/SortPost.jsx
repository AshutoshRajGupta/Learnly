export const SortPost = ({ sortValue, setSortValue }) => {
  const changeValueHandler = (e) => {
    setSortValue(e.target.value);
  };

  const onClickHandler = () => {
    setSortValue("Trending");
  };

  return (
    <div className="flex justify-around">
      <button
        className={`font-bold flex gap-2 items-center border-2 border-sky-400 rounded-md px-3 py-1 ${
          sortValue === "Trending" &&
          "bg-gradient-to-r from-sky-400 to-cyan-300 border-none"
        }`}
        onClick={onClickHandler}
      >
        <i className="fa-solid fa-chart-line"></i>
        <span>Trending</span>
      </button>
      <select
        className={`outline-none w-32 px-3 py-1 font-bold rounded-md cursor-pointer border-2 border-sky-400  ${
          sortValue === "Latest" || sortValue === "Oldest"
            ? "bg-gradient-to-r from-sky-400 to-cyan-300"
            : ""
        }`}
        onChange={changeValueHandler}
      >
        <option className="bg-white hover:bg-sky-300">Latest</option>
        <option className="bg-white">Oldest</option>
      </select>
    </div>
  );
};
