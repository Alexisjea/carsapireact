import "./App.css";
import NavBar from "./core/components/layout/NavBar";
import MainRoutes from "./core/components/routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./core/components/layout/Footer";

import { useState } from "react";
import { UserContext } from "./core/components/contexts/UserContext";

function App() {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("USER")));
  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
          <NavBar />
          <MainRoutes />
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
