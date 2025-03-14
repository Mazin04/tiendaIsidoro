import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaCartShopping } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

// Libros de la tienda
import booksEN from "../data/en/audiobooks.json";
import booksES from "../data/es/audiobooks.json";

const AudioBookDetail = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const [book, setBook] = useState(null);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar la expansión

    useEffect(() => {
        const books = i18n.language === "es" ? booksES : booksEN;
        const book = books.find((book) => book.id === parseInt(id));
        setBook(book);
    }, [id, i18n.language]);

    // Función para copiar el enlace al portapapeles
    const handleCopyLink = () => {
        const shareUrl = window.location.href;
        navigator.clipboard.writeText(shareUrl).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000); // Resetear el mensaje después de 2 segundos
        });
    };

    // Función para abrir el pop-up de compartir
    const handleShare = () => {
        setIsShareOpen(true);
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    if (!book) {
        return <p className="text-center text-red-500">{t('audiobook_not_found')}</p>;
    }

    return (
        <div className="w-full flex flex-col items-center justify-center my-8 py-10 px-4">
            <div className="max-w-[1300px] w-full px-4 grid grid-cols-1 md:grid-cols-8 gap-8 items-start">
                {/* Imagen del libro */}
                <div className="col-span-2">
                    <div className="w-full h-72 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                        <img
                            src={`/${book.cover}`}
                            alt={book.name}
                            className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Información del libro */}
                <div className="col-span-3 space-y-4">
                    <h1 className="text-4xl text-[#004D43] font-semibold">{book.name}</h1>
                    <hr className="w-full h-1 bg-[#004D43] mt-2 mb-1" />

                    <p className="text-lg text-gray-700">{book.description}</p>

                    <p className="text-lg text-gray-700 mt-4 font-semibold underline">{book.author}</p>
                    <p className="text-lg text-gray-700">{book.volume}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {book.type.map((category, index) => (
                            <span key={index} className="bg-[#004D43] text-white px-3 py-1 rounded-md text-center text-sm">
                                {category}
                            </span>
                        ))}
                    </div>

                    {/* Sinopsis con opción de expandir */}
                    <div
                        className={`text-lg text-gray-700 mt-4 text-justify overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-full' : 'max-h-40'}`}
                        style={{ maxHeight: isExpanded ? 'none' : '160px' }}
                    >
                        {book.synopsis}
                    </div>
                    <button
                        onClick={toggleExpand}
                        className="text-[#004D43] mt-1"
                    >
                        {isExpanded ? <><div className="flex flex-row justify-center items-center">{t('see_less')}<MdKeyboardArrowUp className="ml-2"/></div></> : <><div className="flex flex-row justify-center items-center">{t('see_more')}<MdKeyboardArrowDown className="ml-2"/></div></>}
                    </button>
                </div>

                {/* Precio y botón de compra */}
                <div className="col-span-3 flex flex-col items-start justify-center space-y-4">
                    <p className="text-4xl text-left font-bold text-[#004D43]">{book.price}€</p>

                    <button className="bg-yellow-500 text-white text-xl px-6 py-3 rounded-md w-full hover:bg-yellow-600 transition-all ease-in-out duration-300 flex items-center justify-center transform hover:scale-105">
                        <p className="flex items-center">
                            {t('buy_item')} <FaCartShopping className="ml-2" />
                        </p>
                    </button>
                    <div className="flex flex-row items-center justify-center w-full">
                        <div className="flex flex-row items-center justify-center w-fit cursor-pointer transition-all duration-300 hover:bg-[#D8E3E2] p-2 rounded-md"
                            onClick={handleShare}>
                            <p className="text-lg group">{t('share')}</p>
                            <FaShare
                                className="text-xl text-[#004D43] ml-2 group cursor-pointer  transition-all duration-300 transform hover:scale-105"
                                onClick={handleShare}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <hr className="max-w-[1300px] w-full h-0.5 bg-[#004D43] mt-12 mb-2" />

            <div className="max-w-[1300px] w-full">
                <h2 className="text-4xl text-[#004D43] font-semibold text-center mt-10">{t('listen_audiobook')}</h2>

                <div className="w-full mt-8 flex justify-center items-center">
                    <audio controls className="w-full max-w-[800px] bg-gray-100 p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                        <source src={`/${book.audio}`} type="audio/mpeg" />
                        {t('audio_not_supported')}
                    </audio>
                </div>

                <div className="text-center mt-6 text-lg text-gray-700">
                    <p>{t('enjoy_the_audio')}</p>
                </div>
            </div>


            {/* Pop-up de compartir */}
            {isShareOpen && (
                <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex justify-center items-center z-10">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-110">
                        <h2 className="text-xl font-semibold text-center mb-4">{t('share_audiobook')}</h2>

                        {/* Enlace para copiar */}
                        <div className="flex justify-between items-center mb-4">
                            <input
                                type="text"
                                readOnly
                                value={window.location.href}
                                className="border px-4 py-2 rounded-md w-full"
                            />
                            <button
                                onClick={handleCopyLink}
                                className="ml-2 cursor-pointer bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-all duration-300 w-64"
                            >
                                {copySuccess ? t('link_copied') : t('copy_link')}
                            </button>
                        </div>

                        {/* Botones para compartir en redes sociales */}
                        <div className="flex justify-between">
                            <SocialIcon className="transition-all duration-300 transform hover:scale-110 hover:cursor-pointer" onClick={() => window.open(`https://x.com/share?url=${window.location.href}`, '_blank')} network="x" fgColor="#fff" style={{ height: 40, width: 40 }} />
                            <SocialIcon className="transition-all duration-300 transform hover:scale-110 hover:cursor-pointer" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')} network="facebook" fgColor="#fff" style={{ height: 40, width: 40 }} />
                            <SocialIcon className="transition-all duration-300 transform hover:scale-110 hover:cursor-pointer" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`, '_blank')} network="tiktok" fgColor="#fff" style={{ height: 40, width: 40 }} />
                            <SocialIcon className="transition-all duration-300 transform hover:scale-110 hover:cursor-pointer" onClick={() => window.open(`https://www.instagram.com/?url=${window.location.href}`, '_blank')} network="instagram" fgColor="#fff" style={{ height: 40, width: 40 }} />
                            <SocialIcon className="transition-all duration-300 transform hover:scale-110 hover:cursor-pointer" onClick={() => window.open(`mailto:?subject=Check out this book&body=${window.location.href}`, '_blank')} network="email" fgColor="#fff" style={{ height: 40, width: 40 }} />
                            <SocialIcon className="transition-all duration-300 transform hover:scale-110 hover:cursor-pointer" onClick={() => window.open(`https://api.whatsapp.com/send?text=${window.location.href}`, '_blank')} network="whatsapp" fgColor="#fff" style={{ height: 40, width: 40 }} />
                        </div>

                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => setIsShareOpen(false)}
                                className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-all duration-300"
                            >
                                {t('close')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AudioBookDetail;
