import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Car = () => {

    const [car, setCar] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/cars/${id}`).then(response => {
            setCar(response.data);
        });
    }, []);
    
    return(
        <>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Voiture : {car.id}
                </Typography>
                <Typography variant="h5" component="div" >
                Modèle :  {car.model}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                Prix :  {car.price} Marque Id :  {car.brandID}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => goHome()} > Go Home</Button>
            </CardActions>
            </Card> 
        </>
    );

}
export default Car;
