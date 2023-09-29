import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { useNavigate } from "react-router-dom";
import InputMail from "../../core/components/forms/InputMail";
import { UserContext } from "../../core/components/contexts/UserContext";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const [userLog, setUserLog] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    let u = { lastname: "LePonge", firstname: "Bob", mail: userLog.email };
    setUser(u);
    sessionStorage.setItem("USER", JSON.stringify(u));
    navigate("/");
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div>
      <h1> {t('login')}</h1>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <InputMail
            label={t('login')}
            placeholder="Votre Login"
            onChange={(e) => handleInputChange(e, "email")}
          />

          <TextField
            fullWidth
            label= {t('password')}
            name="password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
            type="password"
            margin="normal"
            variant="outlined"
          />

          <Button type="submit" variant="contained" color="primary">
            {t('login')}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
