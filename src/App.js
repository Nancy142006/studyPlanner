import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;