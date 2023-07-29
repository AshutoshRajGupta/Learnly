export const UserAvatar = ({ user, profile }) => {
  const avatar = user?.avatarURL;

  const firstNameInitial = user?.firstName[0];
  const lastNameInitial = user?.lastName[0];

  const userInitials = firstNameInitial + lastNameInitial || "";

  return (
    <>
      {avatar ? (
        <img
          src={avatar}
          alt={user.username}
          className={`${
            profile ? "w-32 h-32" : "w-12 h-12"
          } rounded-full object-cover`}
        />
      ) : (
        <span
          className={`${
            profile ? "w-32 h-32 text-3xl" : "w-12 h-12 text-sm"
          } bg-red-300 flex font-semibold justify-center items-center rounded-full bg-primary`}
        >
          {userInitials}
        </span>
      )}
    </>
  );
};
