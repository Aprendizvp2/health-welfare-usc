import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import Profile from "./profile/Profile";
import History from "./history/History";
import {Citas} from "./citas/Citas"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/citas/:tipoCita" element={<Citas />} />
      </Routes>
    </div>
  );
}

export default App;
