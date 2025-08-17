import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { asyncupdateproduct , asyncdeleteproduct } from '../../store/actions/productActions';

function ProductDetails() {
  const { id } = useParams();
   const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const product = products?.find((product) => product.id == id);
   const { register, reset, handleSubmit } = useForm(
    {
      defaultValues:{
        image: product?.image,
        title:product?.title,
        price:product?.price,
        description:product?.description,
        category: product?.category,
      }
    }
   );
   const dispatch = useDispatch();
 const UpdateProductHandler = (productData) => {
  dispatch(asyncupdateproduct(id, productData));
};
const deletehandler = () =>{
  dispatch(asyncdeleteproduct(id));
  navigate("/products");
}
  return product ?(
    <div className="min-h-screen bg-gray-100 p-6 mt-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Back Button */}
        <div className="p-4">
          <Link 
            to="/products" 
            className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to Products
          </Link>
        </div>

        {/* Product Content */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full max-w-sm object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600">₹ {product.price}</p>

            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className='mt-2 flex  justify-center'>
        <form
        onSubmit={handleSubmit(UpdateProductHandler)}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-pink-700">Create Product</h2>

        {/* Full Name */}
          <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="url"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="http/:"
            {...register("image")}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Title"
            {...register("title")}
          />
        </div>


        {/* Username */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="0.00"
            {...register("price")}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter Description here"
            {...register("description")}
          />
        </div>
          <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Category"
            {...register("category")}
          />
        </div>
        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
        >
          Update Product
        </button>
           <button
           onClick={deletehandler}
          type="button"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
        >
          Delete
        </button>
      </form>
      </div>
      
    </div>
  ) : "Laoding.."
}

export default ProductDetails;
