import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Snackbar,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const CarAdd = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  const [open, setOpen] = useState(false);
  const [carData, setCarData] = useState({
    model: "",
    price: 0,
    dateOfCirculation: formattedDate,
    brandID: 5,
  });

  useEffect(() => {
    axios
      .get("https://formation.inow.fr/demo/api/v1/brands")
      .then((response) => {
        setBrands(response.data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}></Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const priceAsNumber = parseFloat(carData.price);
    const idAsNumber = parseFloat(carData.brandID);
    carData.price = priceAsNumber;
    carData.brandID = idAsNumber;

    axios
      .post("https://formation.inow.fr/demo/api/v1/cars/", carData)
      .then((response) => {
        setCarData({
          model: "",
          price: 0,
          dateOfCirculation: formattedDate,
          brandID: 5,
        });

        setOpen(true);
        setTimeout(() => {
          navigate("/cars");
        }, 500);
        console.log("Voiture ajoutée" + open);
      })
      .catch((err) => {
        console.log("Erreur lors de l'ajout de voiture" + err.response);
        console.log(carData);
      });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Ajouter une Voiture
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Modèle"
              variant="outlined"
              fullWidth
              margin="normal"
              name="model"
              value={carData.model}
              onChange={handleChange}
            />
            <TextField
              type="number"
              label="Prix"
              variant="outlined"
              fullWidth
              margin="normal"
              name="price"
              value={carData.price}
              onChange={handleChange}
            />

            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel id="brand-label">Marque</InputLabel>
              <Select
                labelId="brand-label"
                id="brandID"
                value={carData.brandID}
                onChange={handleChange}
                label="Marque"
                name="brandID"
              >
                {brands.map((brand) => (
                  <MenuItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              Ajouter la voiture
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message="Ajout Réussi !"
              action={action}
            />
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CarAdd;
