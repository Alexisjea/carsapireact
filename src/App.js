import "./App.css";
import NavBar from "./core/components/layout/NavBar";
import MainRoutes from "./core/components/routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./core/components/layout/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
