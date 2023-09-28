import { TextField } from "@mui/material";

const InputMail = ({ label, onChange, ...other }) => {
  return (
    <TextField
      fullWidth
      label={label}
      type="email"
      variant="outlined"
      {...other}
    />
  );
};

export default InputMail;
