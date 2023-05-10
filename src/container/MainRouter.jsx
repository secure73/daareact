
import React from "react";
import { Route , Routes }  from "react-router-dom";
import Product from '../pages/Product';
import Aboutus from '../pages/Aboutus';
import Users from "../pages/Users";
const MainRouter = () =>{
    return(
        <Routes>
            <Route path="/product" element={<Product/>} />
            <Route path="/about" element={<Aboutus/>} />
            <Route path="/users" element={<Users/>} />
        </Routes>
    );
}
export default MainRouter;