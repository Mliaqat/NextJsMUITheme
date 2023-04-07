// hooks
import { IMG_URL } from "@root/config";
import useAuth from "../hooks/useAuth";
// utils
import createAvatar from "../utils/createAvatar";
//
import Avatar from "./Avatar";

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }: any) {
  const { user }: any = useAuth();
  const imgUrl = `${IMG_URL}${user?.profileImage}`;

  return (
    <Avatar
      src={imgUrl}
      alt={user?.firstName}
      color={user?.profileImage ? "default" : createAvatar(user?.firstName).color}
      {...other}
    >
      {createAvatar(user?.firstName).name}
    </Avatar>
  );
}
