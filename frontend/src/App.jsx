import React, { useEffect } from 'react';
import {asyncgetusers} from "./store/userActions"
function App() {

  useEffect(()=>{
    asyncgetusers();
  }, []);
  return (
    <div>
      hello
      
    </div>
  );
}

export default App;
