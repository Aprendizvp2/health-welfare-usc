import { useState } from "react";
import { Button, Hidden, IconButton, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import firebase from "../../firebaseConfig";
import logoBlue from "../../assets/logo/logo-health-welfare-blue.png";
import logo from "../../assets/logo/logo-health-welfare.png";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/alert/Alert";
import { ErrorIcon, SuccessCheckIcon } from "../../assets/svg";

export default function Login() {
  const navigate = useNavigate();
  const [showHelperText, setShowHelperText] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleInputChange = (e: any, fieldName: any) => {
    const value = e.target.value;
    setForm({ ...form, [fieldName]: value });
  };

  const handleClickOpenSuccesAlert = () => {
    setOpenAlert(!openAlert);
  };

  const handleClickOpenErrorAlert = () => {
    setOpenErrorAlert(!openErrorAlert);
  };

  const onClickGoToHome = () => {
    navigate("/home");
  };

  const onClickSignIn = async (e: any) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      setShowHelperText(true);
      return;
    }
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(form.email, form.password);
      if (user) {
        handleClickOpenSuccesAlert();
      }
    } catch (error) {
      handleClickOpenErrorAlert();
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <Hidden mdDown>
          <div className="w-full md:w-1/2 pt-52">
            <div className="flex flex-col justify-center items-center w-ful">
              <h1 className="text-black text-5xl text-center font-bold px-20">
                Iniciar sesión
              </h1>
              <div className="flex justify-center items-center flex-col px-28 py-10 w-full">
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  value={form.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  fullWidth
                  helperText={
                    showHelperText && form.email === "" ? "Digita tu email" : ""
                  }
                  placeholder="Email"
                />
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  value={form.password}
                  onChange={(e) => handleInputChange(e, "password")}
                  placeholder="Contraseña"
                  type={showPassword ? "text" : "password"}
                  helperText={
                    showHelperText && form.email === ""
                      ? "Digita la contraseña"
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                  fullWidth
                />
                <Button
                  className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] px-10 py-2 rounded-lg text-xl text-white normal-case"
                  variant="outlined"
                  onClick={onClickSignIn}
                >
                  Ingresar
                </Button>
                <h1 className="text-black pt-4">
                  ¿No tienes una cuenta?{" "}
                  <a className="underline text-[#0074D9]" href="/signup">
                    Registrarse
                  </a>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-screen bg-[#0074D9] pt-32">
            <div className="flex flex-col justify-center items-center w-full">
              <img className="w-96" alt="logo" src={logo} />
              <h1 className="text-white text-7xl mt-10">Bienvenido</h1>
            </div>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className="w-full pt-16">
            <div className="flex flex-col justify-center items-center w-ful">
              <img
                className="w-[200px] sm:w-[350px] h-[200px] sm:h-[350px]"
                alt="logo"
                src={logoBlue}
              />
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold px-20">
                Iniciar sesión
              </h1>
              <div className="flex justify-center items-center flex-col px-8 sm:px-28 py-10 w-full">
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  placeholder="Email"
                  helperText={
                    showHelperText && form.email === "" ? "Digita tu email" : ""
                  }
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  placeholder="Contraseña"
                  helperText={
                    showHelperText && form.email === ""
                      ? "Digita la contraseña"
                      : ""
                  }
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                  fullWidth
                />
                <Button
                  className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] py-2 rounded-lg text-xl text-white normal-case sm:w-1/2  w-full"
                  variant="outlined"
                  href="/home"
                >
                  Ingresar
                </Button>
                <h1 className="text-black pt-4">
                  ¿No tienes una cuenta?{" "}
                  <a className="underline text-[#0074D9]" href="/signup">
                    Registrarse
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </Hidden>
      </div>
      <Alert
        open={openAlert}
        onClick={onClickGoToHome}
        labelText="¡Te has registrado con éxito!"
        labelButton="Ir a el inicio"
        icon={<SuccessCheckIcon />}
      />
      <Alert
        open={openErrorAlert}
        onClick={handleClickOpenErrorAlert}
        labelText="¡Ha ocurrido un error, el correo o contraseña son inválidos, vuelve a intentar!"
        labelButton="Cerrar"
        icon={<ErrorIcon />}
      />
    </div>
  );
}
