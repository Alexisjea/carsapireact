

import { Routes, Route } from "react-router-dom";
import CarsList from "../../../pages/CarsList";
import Home from "../../../pages/home/Home";
import Car from "../../../pages/Car";
import BrandsList from "../../../pages/BrandsList";
import Login from "../../../pages/authentication/Login";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cars" element={<CarsList></CarsList>}></Route>
        <Route path="/car/:id" element={<Car></Car>}></Route>
        <Route path="/brands" element={<BrandsList></BrandsList>}></Route>
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </>
  );
};
export default MainRoutes;
>>>>>>> master
