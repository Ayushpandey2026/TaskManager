import axios from "../utils/axios";
import type  {User}  from "../types/user.types"; 

export const getUsersApi = async () => {
  const res = await axios.get("/users");
  return res.data as User[];
};

export const updateProfileApi = async (payload: Partial<User>) => {
  const res = await axios.patch("/users/me", payload);
  return res.data;
};
