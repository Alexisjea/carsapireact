import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Brand = () => {

    const [brand, setBrand] = useState({});
    const [carByBrand , setCarByBrand] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/brands/${id}`).then(response => {
            setBrand(response.data);
        });
        axios.get(`https://formation.inow.fr/demo/api/v1/cars`).then(response => {
            setCarByBrand(response.data.filter(x => x.brandID == id));
            console.log(carByBrand);
        });
    }, []);

    

    return(
        <><ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={164}>
    <ImageListItem >
      <img
        src={`/${brand.image}`}
        alt={brand.model}
        loading="lazy"
      />
    </ImageListItem></ImageList>
      
       <>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Modèle</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carByBrand.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.model}
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           <Button onClick={() => goHome()}> Go Home</Button></> 
         </>
    );
}
export default Brand;