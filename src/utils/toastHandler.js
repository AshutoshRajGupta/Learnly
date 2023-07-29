import { toast } from "react-toastify";
export const toastHandler = (type, message) => {
  if (type === "success") toast.success(message);

  if (type === "error") toast.error(message);

  if (type === "warn") toast.warn(message);

  if (type === "info") toast.info(message);
};
