import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { asynclogoutuser } from '../../store/actions/userAction';
function Navbar() {
   const dispatch = useDispatch();
  const navigate = useNavigate();
   const user = useSelector((state) => state.user.users); 
  console.log(user, "user");

  const logoutHandler = () =>{
    dispatch(asynclogoutuser()); // ✅ dispatch available here
    navigate("/login"); // ✅ redirect to login
 
  }

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Products
          </NavLink>

          {/* Show CreateProduct if user exists, else show Login */}
          {user ? (
            <>
                    <NavLink
              to="/admin/create-product"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              CreateProduct
            </NavLink>
            <NavLink to="/ProfileUser">Profile</NavLink>
            <button onClick={logoutHandler}>Logut</button>
            <NavLink to="/addtocartdetails">Go to Cart</NavLink>
            </>
    
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Right Text */}
        <div className="text-gray-600 font-medium">Demo</div>
      </div>
    </nav>
  );
}

export default Navbar;