import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home"
import Products from "../pages/products"
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProducts";
import ProductDetails from "../pages/admin/ProductDetails";
import ProfileUser from "../pages/users/ProfileUser";
import AuthWrapper from "../pages/components/AuthWrapper";
import Cart from "../pages/Cart";
const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/login" element={<Login/>}/>
           
           <Route path="/register" element={<Register/>}/>
            <Route path="/ProfileUser" element={
                <AuthWrapper><ProfileUser/></AuthWrapper>}/>
                <Route path="/addtocartdetails" element={
  <AuthWrapper><Cart/></AuthWrapper>
}/>
            <Route path="/admin/create-product" element={
                <AuthWrapper>
                    <CreateProduct/>
                </AuthWrapper>
                }/>
          <Route path="/products/product/:id" element={<ProductDetails />} />
           
            

        </Routes>
    )
}
export default Mainroutes ;