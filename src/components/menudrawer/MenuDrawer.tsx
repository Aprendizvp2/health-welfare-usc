import { Drawer, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo/logo-health-welfare.png";
import LogoutIcon from "@mui/icons-material/Logout";

interface MenuDrawerProps {
  open: boolean;
  toggleMenuDrawer: () => void;
}

export default function MenuDrawer({
  open,
  toggleMenuDrawer,
}: MenuDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClick={toggleMenuDrawer}>
      <Paper
        sx={{
          width: 320,
          height: "100%",
          borderRadius: 0,
          padding: "8px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img style={{ width: 90 }} src={logo} alt="logo" />
          <IconButton onClick={toggleMenuDrawer}>
            <CloseIcon sx={{ color: "black", width: 35, height: 35 }} />
          </IconButton>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", paddingTop: 20 }}
        >
          <a
            style={{
              color: "black",
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
            href="/home"
          >
            Inicio
          </a>
          <a
            style={{
              color: "black",
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
            href="/products"
          >
            Productos
          </a>
          <a
            style={{
              color: "black",
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
            href="/profile"
          >
            Perfil
          </a>
          <IconButton className="mx-4" href="/">
            <LogoutIcon sx={{ color: "black" }} />
          </IconButton>
        </div>
      </Paper>
    </Drawer>
  );
}
