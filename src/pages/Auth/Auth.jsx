export const Auth = ({ signUp }) => {
  return (
    <div className={`${signUp && "md:mt-32"}`}>
      <p className="text-3xl md:text-5xl text-gray-600 font-semibold text-center">
        The New Social
      </p>
      <p className="text-xl md:text-3xl text-gray-500 text-center">
        Communities on{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-red-400  italic font-semibold">
          Learnly...
        </span>{" "}
        bring people together
      </p>
    </div>
  );
};
