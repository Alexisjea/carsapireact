import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState , useEffect  } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CarsList = () => {
     const [cars, setCars ] = useState([]);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    function handleClickById(e) {
  }
    const viewCar = (id) => {
      navigate(`/car/${id}`);
    }


    const handleTestClick = (e) => {
      console.log(e);
      setName("Didoo");
    }

    useEffect(() => {
      axios.get('https://formation.inow.fr/demo/api/v1/cars')
          .then(response => {
            setCars(response.data);
          });
    }, []);

    return(
    <>
        <h1>La liste des voitures</h1>
        <Grid
            direction="row"
            justifyContent="center"
            alignItems="center">
            {cars?.map((car, index) =>  
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Voiture : {car.id}
                </Typography>
                <Typography variant="h5" component="div" key={index}>
                Modèle :  {car.model}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                Prix :  {car.price} Marque Id :  {car.brandID}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => viewCar(car.id)} > Voir plus</Button>
            </CardActions>
            </Card>    
        )} 
        </Grid>
    </>
    );
}
export default CarsList;