import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";

export default function MissingProductPopup(props) {
  return (
    <div className="missing-product-popup">
      <Dialog
        open={props?.openMissingPopUp}
        onClose={props?.handleCloseMissingPopUp}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Missing Product</DialogTitle>
        <IconButton
            aria-label="close"
            onClick= {props?.handleCloseMissingPopUp}
            sx={{
              position: 'absolute', right:'10px', top:'10px',
              color: grey,
            }}
          >
            <CloseIcon />
          </IconButton>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Is Chicken Breast Fillets, Boneless..."urgent" ?
          </DialogContentText>
        </DialogContent>
        <DialogActions className="dialog-active-button">
          <Button
            onClick={() => props.updateOrderStatus(props?.orderId, "Missing")}
          >
            NO
          </Button>
          <Button
            onClick={() =>
              props.updateOrderStatus(props?.orderId, "Missing-Urgent")
            }
          >
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
