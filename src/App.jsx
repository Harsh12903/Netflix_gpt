import React from "react";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import Appstore from "./Utils/Appstore";
function App(){
  return(
    <div>
      <Provider store={Appstore}>
      <Body/>  
      </Provider>
    </div>
  )
}
export default App;