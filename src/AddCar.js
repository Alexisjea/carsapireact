import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";

const AddCar = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  const [carData, setCarData] = useState({
    model: "",
    price: 0,
    dateOfCirculation: formattedDate,
    brandID: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

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
        console.log("Envoi réussi");
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

            <TextField
              type="number"
              label="Id de la marque"
              variant="outlined"
              fullWidth
              margin="normal"
              name="brandID"
              value={carData.brandID}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Ajouter la voiture
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddCar;
