import * as React from "react";
import { Divider, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./OrderPage.css";
import OrderContainer from "./OrderContainer";
import { Link, useParams, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  let orderId = params?.orderId;
  return (
    <div className="navbar-container">
      <div className="order-id-container">
        <div className="order-id-container-first">
          <Typography className="go-back-to-order" onClick={() => navigate(-1)}>
            Orders
          </Typography>
          <IconButton onClick={() => navigate(-1)}>
            {" "}
            <ChevronRightIcon />
          </IconButton>
          <Typography>Order {orderId}</Typography>
        </div>
        <div className="order-id-container-second">
          <Typography className="order-id-page">Order {orderId} </Typography>
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
