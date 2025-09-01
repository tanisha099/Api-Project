import {Route, Routes} from "react-router-dom";
import { lazy } from "react";
const Home= lazy(()=>import( "../pages/Home"));
const Products = lazy(()=>import("../pages/products"));
const Login = lazy(()=>import("../pages/Login"));
const Register = lazy(()=>import("../pages/Register"));
const CreateProduct= lazy(()=>import("../pages/admin/CreateProducts"));
const ProductDetails = lazy(()=>import("../pages/admin/ProductDetails")) ;
const ProfileUser= lazy(()=>import("../pages/users/ProfileUser")) ;
const AuthWrapper= lazy(()=>import("../pages/components/AuthWrapper"));
const Cart = lazy(()=>import("../pages/Cart")) ;

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