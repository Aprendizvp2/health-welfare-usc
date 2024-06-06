import React, { forwardRef, ReactElement } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AlertProps {
  open: boolean;
  onClick: () => void;
  labelText: string;
  labelButton: string;
  icon: React.ReactElement<any, any>;
}

function Alert({ open, onClick, labelText, labelButton, icon }: AlertProps) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <DialogTitle sx={{ fontSize: 20, fontWeight: "bold" }}>{labelText}</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DialogContentText>{icon}</DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
        variant="outlined"
          sx={{
            backgroundColor: "#0074D9",
            color: "white",
            textTransform: "none",
            width: 200,
            fontSize: 18,
            marginBottom: 2,
            "&:hover": {
              backgroundColor: "white",
              color: "#0074D9"
            },  
          }}
          onClick={onClick}
        >
          {labelButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Alert;
