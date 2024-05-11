import { useState } from "react";
import { AppBar, IconButton } from "@mui/material";
import logo from "../../assets/imgs/logo-health-welfare.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "../menudrawer/MenuDrawer";

export default function SmallHeader() {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  const handleOpenMenuDrawer = (): void => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

  return (
    <AppBar className="px-8 md:px-10 py-4" position="absolute">
      <div className="flex justify-between  bg-[#0074D9]  items-center">
        <a href="/">
          <img className="w-20" src={logo} alt="logo" />
        </a>
        <div>
          <MenuDrawer
            open={openMenuDrawer}
            toggleMenuDrawer={handleOpenMenuDrawer}
          />
          <IconButton onClick={handleOpenMenuDrawer}>
            <MenuIcon sx={{ color: "white", width: 35, height: 35 }} />
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
}
