import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Basket.module.css"
import { deleteAllBaket, deleteBasket, minusBtn, plusBtn } from "../../../redux/features/basketSlice";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  TextField,
  Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.basket);
  console.log(products);

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const handleDeleteBasket = (product) => {
    dispatch(deleteBasket(product));
    notify("silindi")
  };

  const handlePlus = (product) => {
    dispatch(plusBtn(product));
    notify("artirildi")
  };

  const handleMinus = (product) => {
    dispatch(minusBtn(product));
    notify("azaldildi")
  };

  const handleDeleteAllBasket = (product) => {
    dispatch(deleteAllBaket([]));
    notify("hamisi silindi")
  }
  function notify(text, type){
            toast(text, {
              type: type,
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }

          const handlePayment = () => {
            if (products.length === 0) {
              alert("Your basket is empty. Please add some products.")
            } else {
              console.log("Basket Products:", products);
              notify("Payment processing...");
            }
          };

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: "bold" }}>
        Shopping Bag
      </Typography>
      <Grid container spacing={3}>
        {products && products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: "contain", padding: 2 }}
                />
                <CardContent>
                  <Typography variant="h6" noWrap>
                    {product.title || "Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.category}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ marginY: 1 }}>
                    ${(product.price * product.quantity).toFixed(2)}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handlePlus(product)}
                    >
                      +
                    </Button>
                    <Typography variant="body1">{product.quantity}</Typography>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleMinus(product)}
                    >
                      -
                    </Button>
                  </Box>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => handleDeleteBasket(product)}
                    sx={{ marginTop: 2 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            Your basket is empty. Add some products to get started!
          </Typography>
        )}
      </Grid>


      <Box sx={{ marginTop: 4, textAlign: "right" }}>
        <Typography variant="h6" color="primary">
          Total: ${totalAmount.toFixed(2)}
        </Typography>
        <TextField
          variant="outlined"
          label="Discount Code"
          size="small"
          sx={{ marginY: 2, width: "30%" }}
        />
        <Button variant="contained" color="secondary" sx={{ marginLeft: 2 }}>
          Apply
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ marginLeft: 2 }}
          onClick={handlePayment}
        >
          Confirm cart
        </Button>
        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteAllBasket}
          >
            Delete All
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Basket;
