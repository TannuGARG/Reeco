import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function MissingProductPopup(props) {
  const handleClose = () => {
    props?.setOpenMissingPopUp(false);
    props?.setActiveOrderId("");
  };

  return (
    <div>
      <Dialog
        open={props?.openMissingPopUp}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Missing Product</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Is Chicken Breast Fillets, Boneless..."urgent" ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
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
