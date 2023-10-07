import * as React from "react";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./OrderPage.css";
import OrderContainer from "./OrderContainer";

const styleNavbar = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    backgroundColor: isActive ? "white" : "",
    textDecoration: "none",
  };
};

const OrderPage = () => {
  return (
    <div className="navbar-container">
      <div className="order-header">
        <Typography variant="h5" className="order-logo">
          LOGO
        </Typography>
        <Box className="navbar-container-links">
          <Box className="">
            <NavLink style={styleNavbar} to="store">
              <Typography variant="h6" className="nav-item-link">
                Store
              </Typography>
            </NavLink>
          </Box>
          <Box>
            <NavLink style={styleNavbar} to="/">
              <Typography variant="h6" className="nav-item-link">
                Orders
              </Typography>
            </NavLink>
          </Box>
          <Box>
            <NavLink style={styleNavbar} to="analytics">
              <Typography variant="h6" className="nav-item-link">
                Analytics
              </Typography>
            </NavLink>
          </Box>
        </Box>
      </div>

      <div className="order-id-container">
        <div className="order-id-container-first">
          <Typography>Orders</Typography>
          <ChevronRightIcon />
          <Typography>Order 32457ALPZ</Typography>
        </div>
        <div className="order-id-container-second">
          <Typography className="order-id-page">Order 32457ALPZ </Typography>
          <div className="header-button">
            <Button variant="outlined">
              <Typography>Back</Typography>
            </Button>
            <Button variant="contained">
              <Typography>Approve order</Typography>
            </Button>
          </div>
        </div>
      </div>
      <div className="order-container">
        <div className="order-supplier-div">
          <div className="order-supplier-categories">
            <Typography className="category-key">Supplier</Typography>
            <Typography className="category-val">
              East coast fruits & vegetables
            </Typography>
          </div>
          <Divider orientation="vertical" flexItem />

          <div className="order-supplier-categories">
            <Typography className="category-key">Shipping Date</Typography>
            <Typography className="category-val">Thu, Feb 10</Typography>
          </div>
          <Divider orientation="vertical" flexItem />

          <div className="order-supplier-categories">
            <Typography className="category-key">Total</Typography>
            <Typography className="category-val">$15056</Typography>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="order-supplier-categories">
            <Typography className="category-key">Department</Typography>
            <Typography className="category-val">890-150-536</Typography>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="order-supplier-categories">
            <Typography className="category-key">Status</Typography>
            <Typography className="category-val">
              Awaiting your approvel
            </Typography>
          </div>
        </div>
        <div className="order-item-div">
          <OrderContainer />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
