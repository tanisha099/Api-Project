import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link , useNavigate} from 'react-router-dom';
import {asyncloginuser} from "../store/actions/userAction";
function Login() {
  const { register, reset, handleSubmit } = useForm();
const dispatch = useDispatch();
const navigate = useNavigate();

  const LoginHandler = (user) => {
    console.log(user, "user");
  dispatch(asyncloginuser(user)).then(() => {
  navigate("/");
});
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-rose-200 via-rose-100 to-pink-200 p-4">
      <form
        onSubmit={handleSubmit(LoginHandler)}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-pink-700">Login</h2>
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
          Login User
        </button>
        <p>
            Don't have an account ? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
