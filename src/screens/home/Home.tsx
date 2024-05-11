import {
  FormControl,
  Hidden,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../../styles/styles.css";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SmallHeader from "../../components/smallheader/SmallHeader";

function Home() {
  const [form, setForm] = useState({
    email: "",
    role: "",
    password: "",
  });
  const handleRoleChange = (event: any) => {
    setForm({ ...form, role: event.target.value as string });
  };

  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <div className="bg-home">
        <div className="flex justify-center flex-col items-center px-8 md:px-20">
          <h1 className="pt-80 text-4xl sm:text-5xl md:text-8xl text-white text-center w-full md:w-5/6 font-bold">
            Health Welfare USC
          </h1>
          <a
            href="#medicalappoiments"
            className="bg-[#1976D2] text-white hover:bg-transparent border-2 border-[#1976D2] hover:border-white px-10 py-2 normal-case rounded-lg text-2xl uppercase mt-4 transition duration-300"
          >
            Agenda una cita
          </a>
        </div>
      </div>
      <div className="px-8 md:px-10 flex justify-center flex-col">
        <h1 className="pt-20 pb-8 text-2xl sm:text-3xl md:text-5xl font-bold text-left">
          Agenda tus citas de manera sencilla
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col">
            <img
              className="rounded-xl h-[190px] sm:h-[220px] md:h-[260px] xl-[400px] w-full"
              src="https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2020/08/1140-woman-at-computer-esp.imgcache.rev.web.1000.575.jpg"
              alt="img"
            />
            <p className="text-lg sm:ext-2xl text-center font-medium mt-4">
              Desde la comodidad de tu casa puedes solicitar tu cita
            </p>
          </div>
          <div className="flex flex-col">
            <img
              className="rounded-xl h-[190px] sm:h-[230px] md:h-[260px] xl-[400px] w-full"
              src="https://www.fenestrationawards.co.uk/wp-content/uploads/2021/11/Onsite-7-savings-scaled.jpg"
              alt="img"
            />
            <p className="text-lg sm:ext-2xl text-center font-medium mt-4">
              Puedes editar tu perfil y ver el historial de tus citas
            </p>
          </div>
        </div>
      </div>
      <div
        id="medicalappoiments"
        className="flex justify-center items-center flex-col px-8 sm:px-20"
      >
        <h1 className="pt-20 pb-8 text-2xl sm:text-3xl md:text-5xl font-bold text-center">
          Solicita una cita
        </h1>
        <div className="flex justify-center items-center flex-col space-y-4 p-6 sm:p-8 xl:p-10 border-2 border-[#1976D2] rounded-xl w- sm:w-[60%] xl:w-[35%]">
          <div className="w-full">
            <TextField placeholder="Nombres y apellidos" fullWidth />
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="w-full">
              <DatePicker className="w-full" label="Fecha de la cita" />
            </div>
          </LocalizationProvider>
          <div className="w-full">
            <FormControl fullWidth variant="outlined">
              <InputLabel id="role-label">Tipo de cita</InputLabel>
              <Select
                labelId="role-label"
                value={form.role}
                onChange={handleRoleChange}
                label="Tipo de cita"
              >
                <MenuItem value="" disabled>
                  Tipo de cita
                </MenuItem>
                <MenuItem value="general">General</MenuItem>
                <MenuItem value="Oftamlologia">Oftamlologia</MenuItem>
                <MenuItem value="Odontología">Odontología</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-full">
            <TextField placeholder="Descripción" multiline rows={4} fullWidth />
          </div>
          <button className="bg-[#1976D2] text-white hover:text-[#1976D2] hover:bg-transparent border-2 border-[#1976D2] hover:border-[#1976D2] px-10 py-2 normal-case rounded-lg text-2xl uppercase transition duration-300">
            Enviar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
