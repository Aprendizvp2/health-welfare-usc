import { Hidden } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SmallHeader from "../../components/smallheader/SmallHeader";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function History() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [citas, setCitas] = useState([
    {
      id: "",
      estado: "pendiente",
      citaId: {
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
    },
  ]);

  const eliminarCita = (cita: any) => {
    const decision = window.confirm("¿Desea cancelar esta cita?");

    if (decision) {
      cita.citaId.disponible = 1;
      axios
        .post(`http://localhost:8080/citas/actualizar`, cita.citaId)
        .then(() => {
          axios
            .delete(`http://localhost:8080/historialCitas/eliminar/${cita.id}`)
            .then(() => {
              alert("Cita cancelada");
              navigate("/home");
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    const cargarCitas = () => {
      axios
        .get(`http://localhost:8080/historialCitas?paciente=${id}`)
        .then(({ data }) => setCitas(data))
        .catch((err) => console.log(err));
    };
    cargarCitas();
  }, [id]);

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

        {citas.length === 0 ? (
          <p className="text-lg pt-10">No tiene citas hasta el momento</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {citas.map((cita) => (
              <div
                key={cita.id}
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fecha: {cita.citaId.fecha}
                </p>
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Hora: {cita.citaId.hora}
                </p>
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Cita: {cita.citaId.tipoCita}
                </p>
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Médico: {cita.citaId.medicoId.nombre}
                </p>
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Estado: {cita.estado}
                </p>
                {cita.estado === "pendiente" ? (
                  <button
                    className="bg-[#ff0000] text-white hover:text-[#ff0000] hover:bg-transparent border-2 border-[#ff0000] hover:border-[#ff0000] px-2 py-1 normal-case rounded-lg mt-2 transition duration-300"
                    onClick={() => eliminarCita(cita)}
                  >
                    Cancelar
                  </button>
                ) : (
                  <span></span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default History;
