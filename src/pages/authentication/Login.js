import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { regEXEmail } from "../../core/components/forms/InputMail";
import { regEXPassword } from "../../core/components/forms/InputPassword";

import { useNavigate } from "react-router-dom";
import InputMail from "../../core/components/forms/InputMail";
import { UserContext } from "../../core/components/contexts/UserContext";
import { useTranslation } from "react-i18next";
import InputPassword from "../../core/components/forms/InputPassword";

const Login = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = regEXEmail.test(formData.email);
    const isValidPassword = regEXPassword.test(formData.password);

    if (!isValidEmail || !isValidPassword) {
      return;
    }

    let u = { mail: formData.email, password: formData.password };
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

    if (fieldName === "email") {
      setIsValidEmail(regEXEmail.test(value));
    } else if (fieldName === "password") {
      setIsValidPassword(regEXPassword.test(value));
    }
  };

  return (
    <div>
      <h1> {t("login")}</h1>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <InputMail
            label={t("login")}
            placeholder="Votre Login"
            onChange={(e) => handleInputChange(e, "email")}
            value={formData.email}
          />
          <InputPassword
            label={t("password")}
            placeholder="Votre Mot de passe"
            onChange={(e) => handleInputChange(e, "password")}
            value={formData.password}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isValidEmail || !isValidPassword}
          >
            {t("login")}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
