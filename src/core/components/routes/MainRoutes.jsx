import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../../pages/home/Home";

import Login from "../../../pages/authentication/Login";

import { useContext } from "react";
import Brand from "../../../pages/brand/Brand";
import BrandsList from "../../../pages/brand/BrandsList";
import Car from "../../../pages/car/Car";
import CarAdd from "../../../pages/car/CarAdd";
import CarEdit from "../../../pages/car/CarEdit";
import CarsList from "../../../pages/car/CarsList";
import { UserContext } from "../contexts/UserContext";

const MainRoutes = () => {
  const [user, setUser] = useContext(UserContext);

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
