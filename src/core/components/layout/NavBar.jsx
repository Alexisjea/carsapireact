import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../config/i18n";
import { UserContext } from "../contexts/UserContext";
import FrFlag from "./svg/FrFlag";
import UsFlag from "./svg/UsFlag";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { t } = useTranslation();

  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("USER");
    setUser(undefined);
    navigate("/auth/login");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              {t("home")}
            </Button>
            <Button color="inherit" component={Link} to="/cars">
              {t("listcars")}
            </Button>

            {user ? (
              <>
                <Button color="inherit" component={Link} to="/addCar">
                  {t("addCar")}
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                  {t("logout")}
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="auth/login">
                  {t("login")}
                </Button>
              </>
            )}
            <Button
              color="inherit"
              onClick={() => i18n.changeLanguage("en")}
              sx={{ ml: "auto" }}
            >
              <UsFlag />
            </Button>
            <Button color="inherit" onClick={() => i18n.changeLanguage("fr")}>
              <FrFlag />{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default NavBar;
