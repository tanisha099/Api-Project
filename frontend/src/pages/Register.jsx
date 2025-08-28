import { useForm } from 'react-hook-form';
import { nanoid } from "nanoid";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncregisteruser } from "../store/actions/userAction";

function Register() {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.cart = [];
    user.isAdmin = user.isAdmin === "true"; // dropdown se string aayega, isko boolean me convert karna hoga
    console.log(user);
    dispatch(asyncregisteruser(user));
    reset(); 
    Navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-rose-200 via-rose-100 to-pink-200 p-4">
      <form
        onSubmit={handleSubmit(RegisterHandler)}
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
            {...register("fullname", { required: true })}
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
            {...register("username", { required: true })}
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
            {...register("password", { required: true })}
          />
        </div>

        {/* Admin Role */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            {...register("isAdmin")}
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="false">User</option>
            <option value="true">Admin</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
        >
          Register User
        </button>
        <p>
          You have an account?{" "}
          <Link to="/login" className="text-pink-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
