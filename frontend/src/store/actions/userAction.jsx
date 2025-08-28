import axios from "../../api/axiosconfig";
import { loadUsers, removeuser } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loadUsers(user));
    } else {
      console.log("User not logged in!");
    }
  } catch (error) {
    console.log(error);
  }
};
export const asynclogoutuser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");   // storage se user delete
    dispatch(removeuser());            // redux state update
  } catch (error) {
    console.log("Logout error:", error);
  }
};
export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/users?username=${user.username}&password=${user.password}`);

    if (res.data.length > 0) {
      const loggedInUser = res.data[0];

      // ✅ Save to localStorage
      localStorage.setItem("user", JSON.stringify(loggedInUser));

      // ✅ Dispatch to Redux
      dispatch(loadUsers(loggedInUser));

      console.log("successful login");
      console.log(loggedInUser);
    } else {
      console.log("Invalid credentials");
    }
  } catch (error) {
    console.log(error);
  }
};

export const asyncregisteruser = (user) => async (dispatchEvent,getState)=>{
    try{
        const res = await axios.post("/users", user);
        console.log(res);
    } catch (error){
        console.log(error);
    }
};

export const asyncUpdateuser = (id, user) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/users/${id}`, user);
    console.log("Updated user:", data);

    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asynccurrentuser()); // refresh state
  } catch (error) {
    console.log("Update failed:", error);
  }
};
export const asyncdeleteuser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch(asynclogoutuser());
  } catch (error) {
    console.log(error);
  }
};