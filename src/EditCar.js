import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditCar = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  const { id } = useParams();

  const [carData, setCarData] = useState({
    id: id,
    model: "",
    price: 0,
    brandID: 5,
    dateOfCirculation: formattedDate,
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
      .put(`https://formation.inow.fr/demo/api/v1/cars/${id}`, carData)
      .then((response) => {
        console.log("Envoi réussi");
      })
      .catch((err) => {
        console.log("Erreur lors de la modif de voiture" + err.response);
        console.log(carData);
      });
  };

  useEffect(() => {
    axios
      .get(`https://formation.inow.fr/demo/api/v1/cars/${id}`)
      .then((response) => {
        setCarData({
          model: response.data.model,
          price: response.data.price,
          brandID: response.data.brandID,
          id: response.data.id,
          dateOfCirculation: response.data.dateOfCirculation
        });
        
      })

      .catch((err) => {
        const error = err.response.data.error;
        console.log(error);
      });
  }, [id]);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Modifier une voiture
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Sauvegarder
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EditCar;
