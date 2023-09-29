import { Routes, Route, Navigate } from "react-router-dom";
import CarsList from "../../../pages/CarsList";
import Home from "../../../pages/home/Home";
import Car from "../../../pages/Car";
import BrandsList from "../../../pages/BrandsList";
import Login from "../../../pages/authentication/Login";
import Brand from "../../../pages/Brand";
import AddCar from "../../../AddCar";
import EditCar from "../../../EditCar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

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
          element={user ? <AddCar /> : <Navigate to="/auth/login" replace />}
        />

        <Route
          path="/editCar/:id"
          element={user ? <EditCar /> : <Navigate to="/auth/login" replace />}
        />
      </Routes>
    </>
  );
};
export default MainRoutes;
