import axios from "../../api/axiosconfig";
export const asyncregisteruser = (user) => async (dispatchEvent,getState)=>{
    try{
        const res = await axios.post("/users", user);
        console.log(res);
    } catch (error){
        console.log(error);
    }
};