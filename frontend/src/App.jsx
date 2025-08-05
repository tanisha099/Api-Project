import React, { useEffect } from 'react';
import Navbar from "./pages/components/Navbar"
import Mainroutes from "./routes/Mainroutes"
import { useDispatch } from 'react-redux';
import { asynccurrentuser } from './store/actions/userAction';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(asynccurrentuser());
  }, []);

  return (
    <>
     <Navbar />
      <Mainroutes/>
    </>  
  );
}

export default App;
