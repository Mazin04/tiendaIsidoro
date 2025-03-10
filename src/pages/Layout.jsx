import { Outlet, Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Logo from "../assets/casaLibro.svg";
import { CiLocationOn, CiUser, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import ReactCountryFlag from "react-country-flag";

import Footer from "../components/footer"

const TEXTS = ["5% dto. en libros e ebooks", "Descárgate nuestra APP", "Creado por Rubén García"];

const Layout = () => {

  return (
    <>
      <div id="greenNav" className="bg-[#004D43] text-white p-0 px-4 md:px-16 text-[14px] w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between">
          <Link className="hover:underline">
            <Typewriter
              words={TEXTS}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Link>

          <ul className="flex justify-end space-x-4 mt-2 md:mt-0">
            <li className="hover:underline"><Link>Blog</Link></li>
            <li className="hover:underline"><Link>Estado de tu pedido</Link></li>
            <li className="hover:underline"><Link>Ayuda</Link></li>
            <li className="hover:underline"><Link>Venta a empresas e instituciones</Link></li>
          </ul>
        </div>

      </div>
      <nav className="sticky top-0 z-50 bg-white border-b border-[#DCDFE6]">
        {/* Barra verde que ocupa todo el ancho */}


        {/* Contenedor central con un ancho máximo para el contenido */}
        <div className="px-4 md:px-16 pt-4 max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to={"/"}><img src={Logo} alt="Logo Casa del Libro" className="max-w-[200px]" /></Link>

            {/* Barra de búsqueda */}
            <div className="flex flex-row space-x-0 border border-[#004D43]  mx-4 max-w-[620px] w-full overflow-hidden flex-shrink">
              <input
                type="text"
                placeholder="Busca por autor, título, ISBN"
                className="p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#004D43] focus:border-[#004D43] border-0"
              />
              <button className="bg-[#004D43] text-white p-2 w-[50px] flex justify-center items-center focus:outline-none border-0">
                <CiSearch className="text-2xl" />
              </button>
            </div>


            {/* Iconos de ubicación y usuario */}
            <div className="flex flex-row space-x-2 text-[#004D43]">
              <Link className="mt-2 md:mt-0 flex items-center hover:bg-[#D8E3E2] p-2 rounded-md">
                <div className="flex items-center space-x-2">
                  <CiLocationOn />
                  <p>Librerías</p>
                </div>
              </Link>
              <Link className="mt-2 md:mt-0 flex items-center hover:bg-[#D8E3E2] p-2 rounded-md">
                <div className="flex items-center space-x-2">
                  <CiUser />
                  <p>Mi cuenta</p>
                </div>
              </Link>
              <Link className="mt-2 md:mt-0 flex items-center relative group">
                <div className="flex items-center justify-center group-hover:bg-[#D8E3E2] p-3 rounded-full">
                  <HiOutlineShoppingBag className="text-2xl" />
                  {/* Círculo con el número */}
                  <span className="absolute top-[25px] right-[5px] bg-pink-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </div>
              </Link>


              <button className="mt-2 md:mt-0 flex items-center focus:outline-none hover:cursor-pointer">
                <ReactCountryFlag
                  countryCode="ES"
                  className="emojiFlag"
                  style={{
                    fontSize: '1.5em',
                  }}
                />
              </button>
            </div>

          </div>
        </div>

        {/* Menú de navegación */}
        <div className="flex flex-wrap justify-center gap-4 px-4 md:px-16 max-w-[1300px] mx-auto text-[#004D43] text-[16px]">
          <Link to={"/"} className="p-1 pt-2 border-b-6 border-transparent hover:border-[#004D43]">Inicio</Link>
          <Link to={"/libros"} className="p-1 pt-2 border-b-6 border-transparent hover:border-[#004D43]">Libros</Link>
          <Link to={"/audiolibros"} className="p-1 pt-2 border-b-6 border-transparent hover:border-[#004D43]">Audiolibros</Link>
          <Link to={"/peliculas"} className="p-1 pt-2 border-b-6 border-transparent hover:border-[#004D43]">Películas</Link>
        </div>
      </nav>

      <Outlet />

      <Footer />
    </>
  )
};

export default Layout;
