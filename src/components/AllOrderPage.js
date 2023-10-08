import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import "./AllOrder.css";

const AllOrderPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  let orderId = params?.orderId;
  return (
    <div>
      {orderId ? (
        <Outlet />
      ) : (
        <div className="card-container">
          <Card className="order-card" onClick={() => navigate("32457ALPZ")}>
            <CardContent>
              <Typography variant="h5">Order 1</Typography>
            </CardContent>
          </Card>
          <Card className="order-card" onClick={() => navigate("32459ALWA")}>
            <CardContent>
              <Typography variant="h5">Order 2</Typography>
            </CardContent>
          </Card>
          <Card className="order-card" onClick={() => navigate("32458ALNK")}>
            <CardContent>
              <Typography variant="h5">Order 3</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AllOrderPage;
