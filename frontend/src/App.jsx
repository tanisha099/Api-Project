import React, { useEffect } from 'react';
import Navbar from "./pages/components/Navbar"
import Mainroutes from "./routes/Mainroutes"
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from './store/reducers/userSlice';
import { asynccurrentuser } from './store/actions/userAction';
//import { asyncloadproducts } from './store/actions/productActions';
function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
const user = useSelector((state) => state.user.users);
  useEffect(() => {
!user && dispatch(asynccurrentuser()); 
}, [user]);


  return (
    <div>
     <Navbar />
      <Mainroutes/>
    </div>  
  );
}

export default App;