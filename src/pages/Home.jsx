import BannerMain from "../assets/img/mainBanner.jpg";
import libros from "../assets/img/libros.jpg";
import audiolibros from "../assets/img/audiolibro.jpg";
import peliculas from "../assets/img/peliculas.jpg";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center">

      {/* Contenedor principal */}
      <div className="max-w-[1300px] w-full px-4">

        {/* Imagen del banner */}
        <img src={BannerMain} alt="Banner principal" className="w-full object-cover" />

        {/* Oferta / Banner principal */}
        <div className="bg-black w-full px-6 md:px-8 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white text-2xl md:text-4xl font-bold">{t('banner_title')}</p>
            <p className="text-white text-sm md:text-base mt-2">{t('banner_subtitle')}</p>
          </div>
          <a href="#" className="mt-3 md:mt-0">
            <button className="bg-[#EBAA20] text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition-all">{t('essential_click')}</button>
          </a>
        </div>
      </div>

      <div className="max-w-[1300px] w-full px-4">
        {/* Sección de novedades */}
        <section className="mt-10">
          <h2 className="text-[#004D43] text-3xl md:text-4xl font-semibold text-center">{t('buy_title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

            {/* Libros, mangas, novelas... */}
            <div className="bg-[#F7F8F9] flex flex-col gap-1 shadow-md">  
              <Link to={"/libros"} href="#"><img src={libros} alt="Imagen del producto" className="w-full object-cover max-h-[200px]" /></Link>
              <p className="tituloCard text-center mx-4 my-2 text-[24px]">{t('books_title')}</p>

              <Link to={"/libros"} className="bg-[#EBAA20] mx-4 mb-4 shadow-md rounded-md py-2 text-center hover:bg-yellow-600 transition-all">
              {t('books_subtitle')}
              </Link>
            </div>

            {/* Audiolibros */}
            <div className="bg-[#F7F8F9] flex flex-col gap-1 shadow-md">
              <Link to={"/audiolibros"} href="#"><img src={audiolibros} alt="Imagen del producto" className="w-full object-cover max-h-[200px]" /></Link>
              <p className="tituloCard text-center mx-4 my-2 text-[24px]">{t('audiobooks_title')}</p>

              <Link to={"/audiolibros"} className="bg-[#EBAA20] mx-4 mb-4 shadow-md rounded-md py-2 text-center hover:bg-yellow-600 transition-all">
              {t('audiobooks_subtitle')}
              </Link>
            </div>

            {/* Películas */}
            <div className="bg-[#F7F8F9] flex flex-col gap-1 shadow-md">
              <Link to={"/peliculas"} href="#"><img src={peliculas} alt="Imagen del producto" className="w-full object-cover max-h-[200px]" /></Link>
              <p className="tituloCard text-center mx-4 my-2 text-[24px]">{t('movies_title')}</p>

              <Link to={"/peliculas"} className="bg-[#EBAA20] mx-4 mb-4 shadow-md rounded-md py-2 text-center hover:bg-yellow-600 transition-all">
                {t('movies_subtitle')}
              </Link>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;
