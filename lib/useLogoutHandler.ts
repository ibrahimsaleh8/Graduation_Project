import axios from "axios";
import { useUserStore } from "./UserStore";

export const useLogoutHandler = () => {
  const { clearUserData } = useUserStore();
  const logoutFn = async () => {
    await axios.get("/api/logout");
    clearUserData();
  };

  return {
    logoutFn,
  };
};
