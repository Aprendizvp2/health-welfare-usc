import {
  Button,
  FormControl,
  Hidden,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Header from "../../components/header/Header";
import SmallHeader from "../../components/smallheader/SmallHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {
  const { id } = useParams();
  const [form, setForm] = useState({
    id: "",
    nombre: "",
    numeroDocumento: "",
    genero: "",
    telefono: "",
    email: "",
    // clave: ""
  });

  const handleInputChange = (e: any, fieldName: any) => {
    const value = e.target.value;
    setForm({ ...form, [fieldName]: value });
  };

  const handleGeneroChange = (event: any) => {
    setForm({ ...form, genero: event.target.value as string });
  };

  const editarInfo = async (e: any) => {
    e.preventDefault();
    axios.post("http://localhost:8080/pacientes/actualizar", form)
    .then(() => alert("Perfíl actualizado"))
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    const cargarPaciente = () => {
      axios.get(`http://localhost:8080/pacientes/${id}`)
      .then(({data}) => setForm(data))
      .catch((err) => console.log(err))
    }
    cargarPaciente();
  }, [id])
  
  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <div className="pt-40 px-8 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div>
            <img
              className="w-40 md:w-full"
              src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
              alt="profile"
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col pt-8 sm:pt-0 w-full">
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-black text-5xl text-center font-bold px-20">
                  Perfíl
                </h1>
                <div className="flex justify-center items-center flex-col px-8 py-10 w-full">
                  <label className="block w-full">
                    <span className="block text-sm font-medium text-slate-700">Nombres y apellidos</span>
                    <TextField
                      sx={{ marginBottom: 4 }}
                      variant="outlined"
                      value={form.nombre}
                      onChange={(e) => handleInputChange(e, "nombre")}
                      placeholder="Nombres y apellidos"
                      fullWidth
                    />
                  </label>
                  <label className="block w-full">
                    <span className="block text-sm font-medium text-slate-700">Número de documento</span>
                    <TextField
                      sx={{ marginBottom: 4 }}
                      variant="outlined"
                      value={form.numeroDocumento}
                      onChange={(e) => handleInputChange(e, "numeroDocumento")}
                      placeholder="No de Documento"
                      fullWidth
                    />
                  </label>
                   <FormControl fullWidth variant="outlined">
                    <InputLabel id="genero-label">Género</InputLabel>
                    <Select
                      sx={{ marginBottom: 4 }}
                      labelId="genero-label"
                      value={form.genero}
                      onChange={handleGeneroChange}
                      label="Género"
                    >
                      <MenuItem value="" disabled>
                        Género
                      </MenuItem>
                      <MenuItem value="masculino">Masculino</MenuItem>
                      <MenuItem value="femenino">Femenino</MenuItem>
                    </Select>
                  </FormControl>
                  <label className="block w-full">
                    <span className="block text-sm font-medium text-slate-700">Teléfono</span>
                    <TextField
                      sx={{ marginBottom: 4 }}
                      variant="outlined"
                      value={form.telefono}
                      onChange={(e) => handleInputChange(e, "telefono")}
                      placeholder="Teléfono"
                      fullWidth
                    />
                  </label>
                  <label className="block w-full">
                    <span className="block text-sm font-medium text-slate-700">Email</span>
                    <TextField
                      sx={{ marginBottom: 4 }}
                      variant="outlined"
                      value={form.email}
                      onChange={(e) => handleInputChange(e, "email")}
                      placeholder="Email"
                      fullWidth
                      disabled
                    />
                  </label>

                  <Button
                    className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] px-10 py-2 rounded-lg text-xl text-white normal-case"
                    variant="outlined"
                    onClick={editarInfo}
                  >
                    Actualizar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
