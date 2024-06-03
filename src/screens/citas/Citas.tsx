import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Hidden } from "@mui/material";
import SmallHeader from "../../components/smallheader/SmallHeader";
import Header from "../../components/header/Header";

export const Citas = () => {
  
  const navigate = useNavigate();
  const { tipoCita, id } = useParams();
  const [citas, setCitas] = useState([{
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

  const [historialCitas, setHistorialCitas] = useState([{
      id: "",
      estado: "",
      citaId: {
        tipoCita: ""
      },
    },
  ]);

  const agendarCita = (cita: any) => {
    const decision = window.confirm("¿Desea agendar esta cita?");
    if (decision) {
      cita.disponible = 0;
      axios
        .post(`http://localhost:8080/citas/actualizar`, cita)
        .then(() => {
          const infoCita = {
            estado: "pendiente",
            citaId: {id: cita.id},
            pacienteId: {id: id},
          }
          axios.post(`http://localhost:8080/historialCitas/agregar`, infoCita)
          .then(() => {
            alert("Cita agendada exitosamente");
            navigate("/home");
          })
        });
    }
  };

  useEffect(() => {
    
    const cargarCitas = () => {
      axios
      .get(`http://localhost:8080/citas?tipoCita=${tipoCita}&disponible=1`)
      .then(({ data }) => setCitas(data));
    };
    cargarCitas();

    const verificarCita = () => {
      axios
        .get(`http://localhost:8080/historialCitas?paciente=${id}`)
        .then(({ data }) => {
          setHistorialCitas(data);
          historialCitas.forEach(cita => {
            if(cita.citaId.tipoCita === tipoCita && cita.estado === "pendiente"){
              alert(`Tiene un cita pendiente. Una vez cumplida la cita, puede agendar otra`)
              navigate("/home");
            }
          });
        })
        .catch((err) => console.log(err));
    }
    verificarCita();
  }, [tipoCita, id, historialCitas, navigate]);

  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <div className="px-10">
        <p className="text-2xl font-bold pt-28">Citas</p>
        {citas.length === 0
          ?
          <p className="text-lg pt-10">No hay citas disponibles</p>
          :
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {citas.map((cita) => (
              <div key={cita.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">Fecha: {cita.fecha}</p>
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">Hora: {cita.hora}</p>
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">Cita: {cita.tipoCita}</p>
                <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">Médico: {cita.medicoId.nombre}</p>
                <button
                  className="bg-[#1976D2] text-white hover:text-[#1976D2] hover:bg-transparent border-2 border-[#1976D2] hover:border-[#1976D2] px-2 py-1 normal-case rounded-lg mt-2 transition duration-300"
                  onClick={() => agendarCita(cita)}
                >
                  Agendar
                </button>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};
