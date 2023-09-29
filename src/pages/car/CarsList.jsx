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
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const viewCar = (id) => {
    navigate(`/car/${id}`);
    console.log(id);
  };

  const deleteCar = (id) => {
    axios
      .delete(`https://formation.inow.fr/demo/api/v1/cars/${id}`)
      .then((response) => {
        setOpen(true);
        setTimeout(() => {
          navigate("/cars");
        }, 500);
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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const getBrandNameById = (brandId) => {
    const brand = brands.find((brand) => brand.id === brandId);
    return brand ? brand.name : "Unknown Brand";
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

  useEffect(() => {
    axios.get("https://formation.inow.fr/demo/api/v1/cars").then((response) => {
      setCars(response.data);
    });

    axios
      .get("https://formation.inow.fr/demo/api/v1/brands")
      .then((response) => {
        setBrands(response.data);
      });
  }, [deleteCar]);

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {cars?.map((car, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "80%" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Voiture : {car.id}
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.primary">
                  Marque : {getBrandNameById(car.brandID)}
                </Typography>
                <Typography variant="h5" component="div">
                  Modèle : {car.model}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Prix :{" "}
                  {Number(car.price).toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Visibility />}
                  onClick={() => viewCar(car.id)}
                >
                  Show more
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => deleteCar(car.id)}
                >
                  Delete
                </Button>

                <Snackbar
                  open={open}
                  autoHideDuration={1000}
                  onClose={handleClose}
                  message="Supression réussie"
                  action={action}
                />

                <Button
                  variant="contained"
                  color="warning"
                  startIcon={<Edit />}
                  onClick={() => editCar(car.id)}
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default CarsList;
