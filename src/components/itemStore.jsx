import { useTranslation } from "react-i18next";
import { FaCartShopping } from "react-icons/fa6";

const ItemStore = ({ name, author, volume, price, type, volCover }) => {
    const { t } = useTranslation();

    return (
      <div className="border p-4 shadow-xl rounded-lg flex flex-col items-center bg-white md:w-72 max-w-xs">
        {/* Contenedor de la imagen con overflow-hidden */}
        <div className="w-full h-92 overflow-hidden rounded-md">
          <img 
            src={volCover} 
            alt={name} 
            className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
          />
        </div>
  
        {/* Título */}
        <h2 className="text-lg font-bold mt-4 text-center">{name}</h2>
  
        {/* Autor */}
        <p className="text-gray-600 text-sm text-center">{author}</p>

        {/* Volumen */}
        <p className="text-sm font-semibold text-[#004D43] mt-2">{volume}</p>
  
        {/* Tipo de libro */}
        <p className="text-sm font-semibold text-[#004D43] mt-2">{type}</p>
  
        {/* Botón de agregar al carrito */}
        <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md w-full hover:bg-yellow-600 transition-all flex flex-col items-center justify-center">
            <p className="flex flex-row items-center justify-center">{t('buy_item')} <FaCartShopping className="ml-2"/></p> {price}€
        </button>
      </div>
    );
  };
  
  export default ItemStore;
  