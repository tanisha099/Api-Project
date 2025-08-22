import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { asyncUpdateuser } from "../store/actions/userAction";


const products = () => {
const products = useSelector((state) => state.products.products);
const user = useSelector((state) => state.user.users);
const dispatch = useDispatch();

const AddtoCartHandler = (product) => {
  const copyuser = { ...user, cart: [...(user.cart || [])] };

  const x = copyuser.cart.findIndex((c) => c.product === product.id);
  console.log(x);

  if (x === -1) {
    copyuser.cart.push({ product, quantity: 1 });
  } else {
    copyuser.cart[x] = {
      ...copyuser.cart[x],
      quantity: copyuser.cart[x].quantity + 1,
    };
  }

  // ✅ Pass both id and updated user object
  dispatch(asyncUpdateuser(user.id, copyuser));

  console.log(copyuser);
};


  const renderproduct = products.map((product)=>{
    return (
      <div className="mt-14">
       <div className="p-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div  className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200" key={product.id}>
        <img className="object-cover h-48 w-full" src={product.image} alt=""  />
        <div className="p-4">
          <h1 className="text-lg text-blue-700 font-semibold py-2">{product.title}</h1>
        <h3 className= "text-lg font-semibold mb-2">{product.description.slice(0,100)}..</h3>
        
          <p className="text-xl font-bold mb-4">{product.price}$</p>
          <button onClick={() => AddtoCartHandler(product)}  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add to cart</button>
        </div>
        <Link to={`product/${product.id}`}>More Info</Link>

      </div>
      </div>
      
      </div>
     
    )
  })
  return products.length > 0 ? <div>{renderproduct}</div> : "Loading..."
}
export default products;