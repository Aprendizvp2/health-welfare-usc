import { Hidden } from "@mui/material";
import React from "react";
import Header from "../../components/header/Header";
import SmallHeader from "../../components/smallheader/SmallHeader";

function History() {
  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <div className="px-8 md:px-10">
        <p className="text-2xl font-bold pt-28">Historial de citas</p>
      </div>
    </div>
  );
}

export default History;
