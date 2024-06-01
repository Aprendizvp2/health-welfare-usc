import { Hidden } from "@mui/material";
import Header from "../../components/header/Header";
import SmallHeader from "../../components/smallheader/SmallHeader";

function Profile() {
  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <div className="pt-40 px-8 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-8">
          <div>
            <img
              className="w-40 md:w-full"
              src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
              alt="profile"
            />
          </div>
          <div>
            <div className="flex flex-col pt-8 sm:pt-0">
              <p className="text-black font-medium text-xl sm:text-2xl md:text-3xl">
                Nombre
              </p>
              <p className="text-black font-bold text-xl sm:text-5xl md:text-4xl pb-8">
                Leandro
              </p>
              <p className="text-black font-medium text-xl sm:text-2xl md:text-3xl">
                Email
              </p>
              <p className="text-black font-bold text-xl sm:text-5xl md:text-4xl pb-8">
                leo@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
