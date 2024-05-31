import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Hidden } from "@mui/material";
import SmallHeader from "../../components/smallheader/SmallHeader";
import Header from "../../components/header/Header";

export const Citas = () => {
  const { tipoCita } = useParams();
  const [citas, setCitas] = useState([
    {
      id: "",
      fecha: "",
      hora: "",
      tipoCita: "",
      disponible: "",
      medicoId: {
        id: "",
        nombre: "",
      },
    },
  ]);

  const agendarCita = (cita: any) => {
    const decision = window.confirm("¿Desea agendar esta cita?");

    if (decision) {
      cita.disponible = 0;
      axios
        .post(`http://localhost:8080/citas/actualizar`, cita)
        .then(() => alert("Cita agendada exitosamente"));
    }
  };

  useEffect(() => {
    const cargarCitas = () => {
      axios
        .get(`http://localhost:8080/citas?tipoCita=${tipoCita}&disponible=1`)
        .then(({ data }) => setCitas(data));
    };

    cargarCitas();
  }, [tipoCita]);

  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <div className="px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-24">
       {citas.map((cita) => (
        <div key={cita.id} className="border m-2 p-3 w-full">
          <p className="text-lg pt-2 text-end">Fecha: {cita.fecha}</p>
          <p className="text-lg pt-2">Hora: {cita.hora}</p>
          <p className="text-lg pt-2">Cita: {cita.tipoCita}</p>
          <p className="text-lg pt-2">Médico: {cita.medicoId.nombre}</p>
          <button
            className="bg-[#1976D2] text-white hover:text-[#1976D2] hover:bg-transparent border-2 border-[#1976D2] hover:border-[#1976D2] px-2 py-1 normal-case rounded-lg mt-2 transition duration-300"
            onClick={() => agendarCita(cita)}
          >
            Agendar
          </button>
        </div>
      ))} 
      </div>
      </div>
    </div>
  );
};
