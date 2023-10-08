import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Typography } from "@mui/material";
import jsonData from "../utils/order.json";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import orderImages from "../assets";
import MissingProductPopup from "./MissingPopup";
import EditOrderPopup from "./EditOrder";

const OrderContainer = () => {
  const [openMissingPopUp, setOpenMissingPopUp] = useState(false);
  const [openEditPopUp, setOpenEditPopUp] = useState(false);
  const [activeOrderId, setActiveOrderId] = useState("");
  const [orderData, setOrderData] = useState(jsonData ?? []);
  const [orderToBeEdit, setOrderToBeEdit] = useState(null);

  const handleCloseMissingPopUp = ()=>{
    setOpenMissingPopUp(false);
    setActiveOrderId("");
  }

  const handleCloseEditPopUp = ()=>{
    setOpenEditPopUp(false);
    setActiveOrderId("");
    setOrderToBeEdit(null);
  }

  const handleChangeOrderEntity = (entity,value)=>{
    setOrderToBeEdit({
      ...orderToBeEdit,
      [entity]: Number(value),
      status: "Updated",
    });

  }

  const updateOrderStatus = (id, action) => {
    setOrderData(
      orderData.map((order) => {
        if (order.id === id) {
          let updatedOrder = { ...order };
          updatedOrder.status = action;
          return updatedOrder;
        } else return order;
      })
    );
    handleCloseMissingPopUp()
    
  };

  

  const openEditOrderDetailModal = (id) => {
    setOpenEditPopUp(true);
    setActiveOrderId(id);
    setOrderToBeEdit(orderData?.find((item) => item.id === id));
  };

  const saveEditDetail = (data) => {
    setOrderData(
      orderData.map((order) => {
        if (order.id === data.id) {
          return data;
        } else return order;
      })
    );
    handleCloseEditPopUp()
  };
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <Table
          aria-label="simple table"
          style={{ overflowY: "auto", height: "auto" }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="right" style={{ width: "5%" }}></TableCell>
              <TableCell style={{ width: "20%", fontWeight: "bold" }}>
                <Typography variant="subtitle">Product name</Typography>
              </TableCell>
              <TableCell
                align="left"
                style={{ width: "10%", fontWeight: "bold" }}
              >
                <Typography variant="subtitle">Brand</Typography>
              </TableCell>
              <TableCell
                align="left"
                style={{ width: "10%", fontWeight: "bold" }}
              >
                <Typography variant="subtitle">Price</Typography>
              </TableCell>
              <TableCell
                align="left"
                style={{ width: "10%", fontWeight: "bold" }}
              >
                <Typography variant="subtitle">Quantity</Typography>
              </TableCell>
              <TableCell
                align="left"
                style={{ width: "10%", fontWeight: "bold" }}
              >
                <Typography variant="subtitle">Total</Typography>
              </TableCell>
              <TableCell
                align="left"
                style={{ width: "10%", fontWeight: "bold" }}
              >
                <Typography variant="subtitle">Status</Typography>
              </TableCell>
              <TableCell align="right" style={{ width: "5%" }}></TableCell>
              <TableCell align="right" style={{ width: "5%" }}></TableCell>
              <TableCell align="right" style={{ width: "5%" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData &&
              orderData.map((order) => (
                <TableRow key={order?.id}>
                  <TableCell component="th" scope="row">
                    <img
                      src={orderImages.avacadoImg}
                      alt="product-img"
                      className="product-image-size"
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="inherit">
                      {order?.productName}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="inherit">{order?.brand}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="inherit">${order?.price}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="inherit">{order?.quantity}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="inherit">
                      ${order?.quantity * order?.price}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <div className={`order-status ${order?.status}`}>
                      {" "}
                      {order?.status}
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <div
                      className={
                        order?.status === "Approved" ||
                        order?.status === "Updated"
                          ? `${order?.status}-icon`
                          : ""
                      }
                    >
                      <IconButton>
                        <CheckIcon
                          onClick={() =>
                            updateOrderStatus(order.id, "Approved")
                          }
                        />
                      </IconButton>
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <div
                      className={
                        order?.status === "Missing" ||
                        order?.status === "Missing-Urgent"
                          ? `${order?.status}-icon`
                          : ""
                      }
                    >
                      <IconButton>
                        <CloseIcon
                          onClick={() => {
                            setOpenMissingPopUp(true);
                            setActiveOrderId(order.id);
                          }}
                        />
                      </IconButton>
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <Button onClick={() => openEditOrderDetailModal(order.id)}>
                      Exit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {openMissingPopUp && (
        <MissingProductPopup
          openMissingPopUp={openMissingPopUp}
         orderId={activeOrderId}
          handleCloseMissingPopUp = {handleCloseMissingPopUp}
          updateOrderStatus={updateOrderStatus}
        />
      )}
      {openEditPopUp && (
        <EditOrderPopup
          openEditPopUp={openEditPopUp}
          orderToBeEdit={orderToBeEdit}
          saveEditDetail={saveEditDetail}
          handleCloseEditPopUp = {handleCloseEditPopUp}
          handleChangeOrderEntity = {handleChangeOrderEntity}
        />
      )}
    </>
  );
};

export default OrderContainer;
