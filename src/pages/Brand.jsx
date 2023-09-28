import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';

const Brand = () => {

    const [brand, setBrand] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/brands/${id}`).then(response => {
            setBrand(response.data);
        });
    }, []);

    return(
        <>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <CardMedia
                        sx={{ height: 140 , width:150 }}
                        image={`/${brand.image}`}
                        title="green iguana"
                    />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Marque Id : {brand.id}
                </Typography>
                <Typography variant="h5" component="div" >
                Marque :  {brand.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                Image :  {brand.image} 
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => goHome()} > Go Home</Button>
            </CardActions>
            </Card> 
        </>
    );
}
export default Brand;