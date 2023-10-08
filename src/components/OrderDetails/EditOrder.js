import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import orderImages from "../assets";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { Box, TextField } from "@mui/material";
import "./EditOrder.css";

export default function EditOrderPopup(props) {
  return (
    <div className="missing-product-popup">
      <Dialog
        open={props?.openEditPopUp}
        onClose={props?.handleCloseEditPopUp}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box className="edit-page-header">
          <Typography variant = "body1" className="edit-page-name">
            {props?.orderToBeEdit?.productName}
          </Typography>
          <IconButton
            aria-label="close"
            onClick= {props?.handleCloseEditPopUp}
            sx={{
              color: grey,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props?.orderToBeEdit?.brand}
          </DialogContentText>
          </DialogContent>
       
        <DialogContent>
          <Box className="order-box">
            <img
              src={orderImages.avacadoImg}
              alt="product-img"
              className="product-image-editpage"
            />
            <Box className="order-detail">
              <Box className="order-detail-input">
                <Typography variant="h5">Price ($)</Typography>
                <TextField
                  id="outlined-basic"
                  type="number"
                  InputProps={{
                    inputProps: {
                      min: 1,
                    },
                  }}
                  value={props?.orderToBeEdit?.price}
                  variant="outlined"
                  onChange={(e)=>props?.handleChangeOrderEntity("price",e.target.value)}
                />
              </Box>
              <Box className="order-detail-input">
                <Typography variant="h5">Quantity</Typography>

                <TextField
                  id="outlined-basic"
                  type="number"
                  InputProps={{
                    inputProps: {
                      min: 1,
                    },
                  }}
                  defaultValue={props?.orderToBeEdit?.quantity}
                  onChange={(e)=>props?.handleChangeOrderEntity("quantity",e.target.value)}
                  variant="outlined"
                />
              </Box>
              <Box className="order-detail-input">
                <Typography variant="h5">Total</Typography>
                <Typography style={{ marginLeft: "40px" }}>
                  {props?.orderToBeEdit?.quantity * props?.orderToBeEdit?.price}
                </Typography>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions className="dialog-active-button">
          <Button variant="outlined" onClick= {props?.handleCloseEditPopUp}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => props.saveEditDetail(props?.orderToBeEdit)}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
