import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (

    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left links */}
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
      </> ):(
        <>
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
        </>
      )
    }
        </div>

        {/* Right text */}
        <div className="text-gray-600 font-medium">Demo</div>
      </div>
    </nav>
  );
}

export default Navbar;
