import logo from "../../assets/logo/logo-health-welfare.png";

function Footer() {
  return (
    <div className="mt-20">
      <div className="bg-[#0074D9]">
        <div className="flex justify-between gap-10 items-start flex-col sm:flex-row pt-16 px-8 md:px-10">
          <div>
            <h1 className="py-6 text-2xl text-white font-bold">Contácto</h1>
            <p className="text-xl text-white font-bold">3211233333</p>
          </div>
          <div>
            <h1 className="py-6 text-2xl text-white font-bold">
              Ciudadela Pampalinda
            </h1>
            <p className="pb-4 text-xl text-white font-bold">
              Calle 5 # 62-00, Barrio Pampalinda
            </p>
            <p className="pb-4 text-xl text-white font-bold">
              PBX: +57 (602) 518 3000
            </p>
            <p className="pb-4 text-xl text-white font-bold">
              Santiago de Cali, Valle del Cauca, Colombia
            </p>
          </div>
          <div>
            <h1 className="py-6 text-2xl text-white font-bold">
              Pagina principal de la universidad
            </h1>
            <a
              href="https://www.usc.edu.co/"
              target="_blank"
              rel="noreferrer"
              className="pb-4 text-xl text-white font-bold underline"
            >
              https://www.usc.edu.co/
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end px-8 md:px-20 py-8">
          <a href="/home">
            <img className="w-16" src={logo} alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
