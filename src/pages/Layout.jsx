import { Outlet, Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Logo from "../assets/casaLibro.svg";
import { CiLocationOn, CiUser, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import LanguageSelect from "../components/languageSelect";
import Footer from "../components/footer"
import { useTranslation } from "react-i18next";
import { useState } from "react";


// Importar los JSON de datos
import booksEN from "../data/en/books.json";
import audiobooksEN from "../data/en/audiobooks.json";
import moviesEN from "../data/en/movies.json";
import booksES from "../data/es/books.json";
import audiobooksES from "../data/es/audiobooks.json";
import moviesES from "../data/es/movies.json";


const Layout = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);


  // Determinar qué datos cargar en función del idioma seleccionado
  const language = i18n.language === "es" ? "es" : "en";
  const books = language === "es" ? booksES : booksEN;
  const audiobooks = language === "es" ? audiobooksES : audiobooksEN;
  const movies = language === "es" ? moviesES : moviesEN;

  const allItems = [
    ...books.map((item) => ({ ...item, type: "libros" })),
    ...audiobooks.map((item) => ({ ...item, type: "audiolibros" })),
    ...movies.map((item) => ({ ...item, type: "peliculas" })),
  ];


  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length >= 1) {
      const regex = new RegExp(`\\b${term}`, "i");
      const results = allItems.filter((item) => regex.test(item.name));
      console.log(results);
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <>
      <div id="greenNav" className="bg-[#004D43] text-white p-0 px-4 md:px-10 text-[14px] w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between">
          <Link className="hover:underline">
            <Typewriter
              words={[t('greenNav1'), t('greenNav2'), t('greenNav3')]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Link>

          <ul className="flex justify-end space-x-4 mt-2 md:mt-0">
            <li className="hover:underline"><Link>{t('blog')}</Link></li>
            <li className="hover:underline"><Link>{t('order_status')}</Link></li>
            <li className="hover:underline"><Link>{t('help')}</Link></li>
            <li className="hover:underline"><Link>{t('sell_bussiness')}</Link></li>
          </ul>
        </div>

      </div>
      <nav className="sticky top-0 z-5 bg-white border-b border-[#DCDFE6]">
        {/* Barra verde que ocupa todo el ancho */}


        {/* Contenedor central con un ancho máximo para el contenido */}
        <div className="px-2 md:px-4 pt-4 max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to={"/"}><img src={Logo} alt="Logo Casa del Libro" className="max-w-[200px]" /></Link>

            {/* Barra de búsqueda */}
            <div className="relative flex flex-row space-x-0 border border-[#004D43]  mx-4 max-w-[620px] w-full flex-shrink">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder={t('search_placeholder')}
                className="p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#004D43] focus:border-[#004D43] border-0"
              />
              <button className="bg-[#004D43] text-white p-2 w-[50px] flex justify-center items-center focus:outline-none border-0">
                <CiSearch className="text-2xl" />
              </button>
              {filteredResults.length > 0 && (
                <div className="absolute left-0 top-10 z-50 w-full h-fit bg-white shadow-lg border-b border-x border-[#004D43] max-h-[150px] overflow-auto">
                  {filteredResults.map((item) => (
                    <Link
                      onClick={() => {
                        setSearchTerm(""); // Vaciar el input
                        setFilteredResults([]); // Limpiar los resultados
                      }}
                      key={item.id}
                      to={`/${item.type}/${item.id}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>


            {/* Iconos de ubicación y usuario */}
            <div className="flex flex-row space-x-2 text-[#004D43]">
              <Link className="mt-2 md:mt-0 flex items-center hover:bg-[#D8E3E2] p-2 rounded-md">
                <div className="flex items-center space-x-2">
                  <CiLocationOn />
                  <p>{t('bookstores')}</p>
                </div>
              </Link>
              <Link className="mt-2 md:mt-0 flex items-center hover:bg-[#D8E3E2] p-2 rounded-md">
                <div className="flex items-center space-x-2">
                  <CiUser />
                  <p>{t('account')}</p>
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

              <LanguageSelect />

            </div>

          </div>
        </div>

        {/* Menú de navegación */}
        <div className="flex flex-wrap justify-center gap-4 px-4 md:px-16 max-w-[1300px] mx-auto text-[#004D43] text-[16px]">
          <Link to={"/"} className="p-1 pt-2 border-b-6 border-transparent hover:border-[#004D43]">{t('home')}</Link>
          <Link to={"/libros"} className="p-1 pt-2 border-b-6 border-transparent hover:border-[#004D43]">{t('books')}</Link>
          <Link to={"/audiolibros"} className="p-1 pt-2 border-b-6 border-transparent hover:border-[#004D43]">{t('audiobooks')}</Link>
          <Link to={"/peliculas"} className="p-1 pt-2 border-b-6 border-transparent hover:border-[#004D43]">{t('movies')}</Link>
        </div>
      </nav>
      <Outlet />

      <Footer />
    </>
  )
};

export default Layout;
