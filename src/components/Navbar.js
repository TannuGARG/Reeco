import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import "./OrderDetails/OrderPage.css";
const styleNavbar = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
  };
};

const Navbar = () => {
  return (
    <div className="order-header">
      <Typography variant="h5" className="order-logo">
        LOGO
      </Typography>
      <Box className="navbar-container-links">
        <NavLink style={styleNavbar} to="/">
          <Typography variant="h6" className="nav-item-link">
            Store
          </Typography>
        </NavLink>

        <NavLink style={styleNavbar} to="orders">
          <Typography variant="h6" className="nav-item-link">
            Orders
          </Typography>
        </NavLink>

        <NavLink style={styleNavbar} to="analytics">
          <Typography variant="h6" className="nav-item-link">
            Analytics
          </Typography>
        </NavLink>
      </Box>
    </div>
  );
};

export default Navbar;
