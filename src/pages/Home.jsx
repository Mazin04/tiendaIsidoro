import BannerMain from "../assets/img/mainBanner.jpg";
import libros from "../assets/img/libros.jpg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Contenedor principal */}
      <div className="max-w-[1300px] w-full px-4">

        {/* Imagen del banner */}
        <img src={BannerMain} alt="Banner principal" className="w-full object-cover" />

        {/* Oferta / Banner principal */}
        <div className="bg-black w-full px-6 md:px-8 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white text-2xl md:text-4xl font-bold">Libros imprescindibles con 5% dto.</p>
            <p className="text-white text-sm md:text-base mt-2">
              Lo que no querrás perderte este mes con 5% dto. y gastos GRATIS para Socios.
            </p>
          </div>
          <a href="#" className="mt-3 md:mt-0">
            <button className="bg-[#EBAA20] text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition-all">
              VER IMPRESCINDIBLES
            </button>
          </a>
        </div>
      </div>

      <div className="max-w-[1300px] w-full px-4">
        {/* Sección de novedades */}
        <section className="mt-10">
          <h2 className="text-[#004D43] text-3xl md:text-4xl font-semibold text-center">Compra productos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

            {/* Libros, mangas, novelas... */}
            <div className="bg-[#F7F8F9] flex flex-col gap-1">
              <Link to={"/libros"} href="#"><img src={libros} alt="Imagen del producto" className="w-full object-cover max-h-[200px]" /></Link>
              <p className="tituloCard text-center mx-4 my-2 text-[24px]">Libros, mangas, novelas...</p>

              <Link to={"/libros"} className="bg-[#EBAA20] mx-4 mb-4 shadow-md rounded-md py-2 text-center hover:bg-yellow-600 transition-all">
                VER LIBROS, MANGAS, NOVELAS...
              </Link>
            </div>

            {/* Audiolibros */}
            <div className="bg-[#F7F8F9] flex flex-col gap-1">
              <Link to={"/audiolibros"} href="#"><img src={libros} alt="Imagen del producto" className="w-full object-cover max-h-[200px]" /></Link>
              <p className="tituloCard text-center mx-4 my-2 text-[24px]">Tus audiolibros favoritos</p>

              <Link to={"/audiolibros"} className="bg-[#EBAA20] mx-4 mb-4 shadow-md rounded-md py-2 text-center hover:bg-yellow-600 transition-all">
                VER AUDIOLIBROS
              </Link>
            </div>

            {/* Películas */}
            <div className="bg-[#F7F8F9] flex flex-col gap-1">
              <Link to={"/peliculas"} href="#"><img src={libros} alt="Imagen del producto" className="w-full object-cover max-h-[200px]" /></Link>
              <p className="tituloCard text-center mx-4 my-2 text-[24px]">Tu cine, pero en casa</p>

              <Link to={"/peliculas"} className="bg-[#EBAA20] mx-4 mb-4 shadow-md rounded-md py-2 text-center hover:bg-yellow-600 transition-all">
                VER PELÍCULAS, SERIES...
              </Link>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;
