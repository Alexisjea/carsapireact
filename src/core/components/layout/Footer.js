import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "8%",
      }}
    >
      <Toolbar>
        <Typography
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
          variant="body1"
          color="inherit"
        >
          Projet React
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
