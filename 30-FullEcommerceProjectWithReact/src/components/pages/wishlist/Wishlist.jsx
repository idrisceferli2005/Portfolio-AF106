import React, { useEffect } from "react";
import styles from "./Wishlist.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateWishlist } from "../../../redux/features/wishlistSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addBasket } from "../../../redux/features/basketSlice";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleDelete = (products) => {
    if (user) {
      dispatch(updateWishlist(products));
      notify("Item removed from wishlist", "success");
    }
  };

  const handleClearWishlist = () => {
    if (user) {
      dispatch(updateWishlist([]));
      notify("All items removed from wishlist", "success");
    }
  };

  function notify(text, type) {
    toast(text, {
      type: type,
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleAddToCart = (wishlistItem) => {
    if (wishlistItem) {
      dispatch(addBasket({ ...wishlistItem, quantity: 1 }));
      notify("Basketə əlavə olundu", "success");
    }
  };

  return (
    <Container>
    <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: "bold" }}>
      Your Wishlist
    </Typography>
    <Grid container spacing={3}>
      {user && user.wishlist.length > 0 ? (
        user.wishlist.map((wishlistItem) => (
          <Grid item xs={12} sm={6} md={4} key={wishlistItem.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image={wishlistItem.image}
                alt={wishlistItem.title}
                sx={{ objectFit: "contain", padding: 2 }}
              />
              <CardContent>
                <Typography variant="h6" noWrap>
                  {wishlistItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {wishlistItem.category}
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ marginY: 1 }}
                >
                  ${wishlistItem.price}
                </Typography>
                <Box display="flex" gap={1} marginTop={2}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(wishlistItem)}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(wishlistItem)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ textAlign: "center", width: "100%", marginTop: 4 }}
        >
          Your wishlist is empty.
        </Typography>
      )}
    </Grid>
    {user && user.wishlist.length > 0 && (
      <Box sx={{ marginTop: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="warning"
          onClick={handleClearWishlist}
        >
          Clear All
        </Button>
      </Box>
    )}
    <Box sx={{ marginTop: 4, textAlign: "center" }}>
      <Link to="/" style={{ textDecoration: "none", color: "primary" }}>
        <Button variant="outlined">Back</Button>
      </Link>
    </Box>
  </Container>
  );
};

export default Wishlist;