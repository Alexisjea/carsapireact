import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useTranslation } from "react-i18next";
import i18n from "../../config/i18n";
import UsFlag from "./svg/UsFlag";
import FrFlag from "./svg/FrFlag";


const NavBar = () => {


  const { t } = useTranslation();

  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    sessionStorage.removeItem("USER");
    setUser(undefined);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              {t('home')}
            </Button>
            <Button color="inherit" component={Link} to="/cars">
              {t('listcars')}
            </Button>
            
              
            {user ? (
              <>
                <Button color="inherit" component={Link} to="/addCar">
                  {t('addCar')}
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                  {t('logout')}
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="auth/login">
                  {t('login')}
                </Button>
              </>
            )}
            <Button color="inherit"  onClick={() => i18n.changeLanguage('en')}>
             <UsFlag/></Button>
            <Button color="inherit"  onClick={() => i18n.changeLanguage('fr')}>
             <FrFlag/>  </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default NavBar;
