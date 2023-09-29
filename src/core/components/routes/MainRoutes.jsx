import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../../pages/home/Home";

import Login from "../../../pages/authentication/Login";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import CarAdd from "../../../pages/car/CarAdd";
import CarEdit from "../../../pages/car/CarEdit";
import Car from "../../../pages/car/Car";
import CarsList from "../../../pages/car/CarsList";
import BrandsList from "../../../pages/brand/BrandsList";
import Brand from "../../../pages/brand/Brand";

const MainRoutes = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cars" element={<CarsList></CarsList>}></Route>
        <Route path="/car/:id" element={<Car></Car>}></Route>
        <Route path="/brands" element={<BrandsList></BrandsList>}></Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/brand/:id" element={<Brand></Brand>}></Route>

        <Route
          path="/addCar"
          element={user ? <CarAdd /> : <Navigate to="/auth/login" replace />}
        />

        <Route
          path="/editCar/:id"
          element={user ? <CarEdit /> : <Navigate to="/auth/login" replace />}
        />
      </Routes>
    </>
  );
};
export default MainRoutes;
