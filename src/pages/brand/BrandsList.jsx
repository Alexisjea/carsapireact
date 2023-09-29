import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';

const BrandsList = () => {

    const [brands , setBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://formation.inow.fr/demo/api/v1/brands').then(response => {
            setBrands(response.data);
        })
    }, [])
    const viewBrand = (id) => {
      navigate(`/brand/${id}`);
    }

    return(
        <>
            <h1>Les marques</h1>
            <Grid
            direction="row"
            justifyContent="center"
            alignItems="center">
            {brands?.map((brand, index) =>  
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                 <CardMedia
                        sx={{ height: 140 , width:150 }}
                        image={brand.image}
                        title="green iguana"
                    />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                
                </Typography>
                <Typography variant="h5" component="div" key={index} >
                 {brand.name}
                </Typography>
                
            </CardContent>
            <CardActions>
                <Button onClick={() => viewBrand(brand.id)} > Voir plus</Button>
            </CardActions>
            </Card>    
        )} 
        </Grid>

        </>
    );
}
export default BrandsList;