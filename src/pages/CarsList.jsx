import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const viewCar = (id) => {
    navigate(`/car/${id}`);
    console.log(id);
  };

  const deleteCar = (id) => {
    axios
      .delete(`https://formation.inow.fr/demo/api/v1/cars/${id}`)
      .then((response) => {
        console.log("Voiture supprimée avec succès.");
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de la voiture :", error);
        console.log(error.message);
      });
  };

  const editCar = (id) => {
    navigate(`/editCar/${id}`);
  };

  useEffect(() => {
    axios.get("https://formation.inow.fr/demo/api/v1/cars").then((response) => {
      setCars(response.data);
    });
  }, [deleteCar]);

  return (
    <>
      <h1>La liste des voitures</h1>
      <Grid direction="row" justifyContent="center" alignItems="center">
        {cars?.map((car, index) => (
          <Card sx={{height: "80%"}}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Voiture : {car.id}
              </Typography>
              <Typography variant="h5" component="div" key={index}>
                Modèle : {car.model}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Prix : {car.price} Marque Id : {car.brandID}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => viewCar(car.id)}> Voir plus</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </>
  );
};
export default CarsList;
