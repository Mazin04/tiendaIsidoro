import { useTranslation } from "react-i18next";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";

const MovieStore = ({ id, name, director, price, type, cover }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    const button = e.target;
    const originalContent = button.innerHTML;
  
    button.disabled = true;
    button.innerHTML = t('added_to_cart');
  
    addToCart({ id, name, price, cover, quantity: 1 });
  
    setTimeout(() => {
      button.disabled = false;
      button.innerHTML = originalContent;
    }, 1000);
  };

  const handleClick = () => {
    navigate(`/peliculas/${id}`);
  }

  return (
    <div className="border p-4 shadow-xl rounded-lg flex flex-col items-center bg-white md:w-72 max-w-xs">
      {/* Contenedor de la imagen con overflow-hidden */}
      <div className="w-full h-84 overflow-hidden rounded-md" onClick={handleClick}>
        <img
          src={`/${cover}`}
          alt={name}
          className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
        />
      </div>

      {/* Título */}
      <h2 className="text-lg font-bold mt-4 text-center">{name}</h2>

      {/* Autor */}
      <p className="text-gray-600 text-sm text-center">{director}</p>

      {/* Tipo de libro */}
      <div className="flex flex-wrap gap-2 mt-2">
        {type.map((category, index) => (
          <span
            key={index}
            className="bg-[#004D43] text-white px-2 py-1 rounded-md text-center min-w-[90px] flex-grow"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Botón de agregar al carrito */}
      <button onClick={handleAddToCart} className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md w-full hover:bg-yellow-600 transition-all flex flex-col items-center justify-center">
        <p className="flex flex-row items-center justify-center">{t('buy_item')} <FaCartShopping className="ml-2" /></p> {price}€
      </button>
    </div>
  );
};

export default MovieStore;
