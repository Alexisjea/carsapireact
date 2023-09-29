import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Brand = () => {
  const [brand, setBrand] = useState({});
  const [carByBrand, setCarByBrand] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`https://formation.inow.fr/demo/api/v1/brands/${id}`)
      .then((response) => {
        setBrand(response.data);
      });

    axios.get(`https://formation.inow.fr/demo/api/v1/cars`).then((response) => {
      setCarByBrand(response.data.filter((x) => x.brandID == id));
    });
  }, [id]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <Box sx={{ width: 150, height: 140, overflow: "hidden" }}>
        <img
          src={`/${brand.image}`}
          alt={brand.model}
          loading="lazy"
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "auto",
          }}
        />
      </Box>

      <TableContainer component={Paper} sx={{ mt: 2, width: "80%" }}>
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
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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

      <Button onClick={goHome} sx={{ mt: 2 }}>
        Go Home
      </Button>
    </Box>
  );
};

export default Brand;
