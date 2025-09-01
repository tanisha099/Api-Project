import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateuser } from "../store/actions/userAction";
import { Suspense, useEffect, useState } from "react";
import axios from "../api/axiosconfig";
  import InfiniteScroll from 'react-infinite-scroll-component';
const Products = () => {
  //const products = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
 const [products, setproducts] = useState([]);
 const [hasMore, sethasMore] = useState(true);

const fetchproducts = async () => {
  try {
    const { data } = await axios.get(
      `/products?_limit=6&_start=${products.length}`
    );

    if (data.length === 0) {
      sethasMore(false);
    } else {
      setproducts((prev) => [...prev, ...data]); // ✅ append new data
    }
  } catch (error) {
    console.log(error);
  }
};

 useEffect(() =>{
  fetchproducts();
 },[]);
  const AddtoCartHandler = (product) => {
    const copyuser = { ...user, cart: [...user.cart] };

    const x = copyuser.cart.findIndex((c) => c.product.id === product.id);
    console.log(x);

    if (x === -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + 1,
      };
    }
    dispatch(asyncUpdateuser(user.id, copyuser));

    console.log(copyuser);
  };

  return  (
    <InfiniteScroll
    dataLength={products.length}
    next={fetchproducts}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    endMessage={
     <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
    }>
        <div className="mt-14 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Suspense 
          fallback = {
            <h1 className="text-center text-5xl text-4xl">
              LoADING...
            </h1>
          }>
              {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
        >
          <img
            className="object-cover h-48 w-full"
            src={product.image}
            alt={product.title}
          />
          <div className="p-4">
            <h1 className="text-lg text-blue-700 font-semibold py-2">
              {product.title}
            </h1>
            <h3 className="text-sm text-gray-600 mb-2">
              {product.description.slice(0, 100)}..
            </h3>
            <p className="text-xl font-bold mb-4">{product.price} ₹</p>
            <button
              onClick={() => AddtoCartHandler(product)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add to cart
            </button>
            <Link
              to={`product/${product.id}`}
              className="block text-center mt-2 text-blue-600 hover:underline"
            >
              More Info
            </Link>
          </div>
        </div>
      ))}
          </Suspense>
    
    </div>
    </InfiniteScroll>
  
  )
};

export default Products;
