import axios from "../../api/axiosconfig";
import { loadUsers } from "../reducers/userSlice";

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
export const asynclogoutuser = (user) => async (dispatchEvent,getState)=>{
    try{
        localStorage.removeItem("user");
        } catch (error){
        console.log(error);
    }
};
export const asyncloginuser = (user) => async (dispatchEvent,getState)=>{
    try{
         const res = await axios.get(`/users?email=${user.email}&password=${user.password}`);
         localStorage.setItem("user", JSON.stringify(res.data[0]));
         console.log("successful login")
            console.log(res.data);
        } catch (error){
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