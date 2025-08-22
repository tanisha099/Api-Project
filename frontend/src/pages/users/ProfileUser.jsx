import { useForm } from 'react-hook-form';
import { nanoid } from "nanoid";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {asyncdeleteuser, asyncUpdateuser} from "../../store/actions/userAction"

function ProfileUser() {
  const user = useSelector((state) => state.user.users);
  console.log(user, "user");
   const { register, reset, handleSubmit } = useForm(
    {
      defaultValues:{
          fullname: user?.fullname,
        username:user?.username,
        password: user?.password, 
      }
    }
   );
    
   const dispatch = useDispatch();
   const Navigate =useNavigate();
 const UpdateHandler = (formData) => {
  // merge form data with the existing user (so we keep the id)
  const updatedUser = { ...user, ...formData };
  dispatch(asyncUpdateuser(user.id, updatedUser));
};
  const DeleteHandler = () =>{
    dispatch(asyncdeleteuser(user.id));
    Navigate("/login")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-rose-200 via-rose-100 to-pink-200 p-4">
      <form
        onSubmit={handleSubmit(UpdateHandler)}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-pink-700">Register</h2>

        {/* Full Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Ekanshi"
            {...register("fullname")}
          />
        </div>

        {/* Username */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="_ekanshi9_"
            {...register("username")}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter your password"
            {...register("password")}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
        >
          Update User
        </button>
       <button type='button' onClick={DeleteHandler}>
        Delete User
       </button>
      </form>
    </div>
  );
}

export default ProfileUser;
