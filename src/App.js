import "./App.css";
import NavBar from "./core/components/layout/NavBar";
import MainRoutes from "./core/components/routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./core/components/layout/Footer";
import { useTranslation , I18nextProvider } from "react-i18next";
import { useState } from "react";
import { UserContext } from "./core/components/contexts/UserContext";

import i18next from './core/config/i18next';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("USER")));
  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <UserContext.Provider value={[user, setUser]}>
          <BrowserRouter>
          <div className="doo" >
            <NavBar />
            <MainRoutes />
            <Footer />
          </div>
          </BrowserRouter>
        </UserContext.Provider>
      </I18nextProvider>
    </div>
  );
}

export default App;
