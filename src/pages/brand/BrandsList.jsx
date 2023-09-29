import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";

const BrandsList = () => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://formation.inow.fr/demo/api/v1/brands")
      .then((response) => {
        setBrands(response.data);
      });
  }, []);
  const viewBrand = (id) => {
    navigate(`/brand/${id}`);
  };

  return (
    <>
      <Grid direction="row" justifyContent="center" alignItems="center">
        {brands?.map((brand, index) => (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <CardMedia
                  sx={{ height: 140, width: 150 }}
                  image={brand.image}
                  title="Brand Image"
                />
                <Typography variant="h5" component="div" mt={1}>
                  {brand.name}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" width="100%">
                <Button onClick={() => viewBrand(brand.id)}>Voir plus</Button>
              </Box>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </>
  );
};
export default BrandsList;
