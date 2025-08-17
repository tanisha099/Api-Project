import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const products = () => {
const products = useSelector((state)=> state.products.products);
  console.log(products);
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
          <button  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add to cart</button>
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