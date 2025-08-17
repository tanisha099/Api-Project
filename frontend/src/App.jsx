import React, { useEffect } from 'react';
import Navbar from "./pages/components/Navbar"
import Mainroutes from "./routes/Mainroutes"
import { useDispatch } from 'react-redux';
import { loadUsers } from './store/reducers/userSlice';
import { asynccurrentuser } from './store/actions/userAction';
import { asyncloadproducts } from './store/actions/productActions';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  dispatch(asyncloadproducts());
 
  if (user) {
    dispatch(loadUsers(user));
  }
}, []);

  return (
    <>
     <Navbar />
      <Mainroutes/>
    </>  
  );
}

export default App;
