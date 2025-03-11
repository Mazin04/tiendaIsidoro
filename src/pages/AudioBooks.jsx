import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// Card item
import AudioStore from "../components/audioStore";

// Fotos Próximamente
import proxDB from "/assets/img/audiolibros/proximamente/cuandoseapaganlasluces.jpg";
import proxShingeki from "/assets/img/audiolibros/proximamente/loshijosdeadan.jpg";
import proxSpy from "/assets/img/audiolibros/proximamente/porquematamos.jpg";
import proxBleach from "/assets/img/audiolibros/proximamente/porquematamos5.jpg";

// Libros de la tienda
import booksEN from "../data/en/audiobooks.json";
import booksES from "../data/es/audiobooks.json";

const Books = () => {
    const { i18n, t } = useTranslation();
    const [books, setBooks] = useState([]);

    // Update books when the language changes
    useEffect(() => {
        setBooks(i18n.language === "es" ? booksES : booksEN);
    }, [i18n.language]);

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl text-[#004D43] font-bold mt-10">{t('audiobooks_head')}</h1>
            <hr className="w-32 h-1 bg-[#004D43] mt-2 mb-6" />

            <div className="max-w-[1300px] w-full px-4">
                <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 items-center justify-center justify-items-center">
                    {books.map((book) => (
                        <AudioStore
                            key={book.id}
                            id = {book.id}  
                            name={book.name}
                            author={book.author}
                            volume={book.volume}
                            price={book.price}
                            type={book.type}
                            volCover={book.cover}
                        />
                    ))}
                </section>

                {/* Swiper Carrusel con loop infinito */}
                <div className="flex flex-col items-center justify-center mt-6">
                    <h4 className="text-4xl text-center text-[#004D43] font-bold mt-10">{t('audiobooks_next')}</h4>
                    <hr className="text-center w-72 h-1 bg-[#004D43] mt-2 mb-6" />

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true} // Hace que el carrusel sea infinito
                        className="w-full max-w-xl shadow-xl">

                        <SwiperSlide className="relative w-full">
                            <img
                                src={proxDB}
                                alt="Dragon Ball Super"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/30 text-white text-center p-6">
                                <h3 className="text-3xl font-bold bg-black/60 shadow-xl p-2 rounded-md border border-white">Cuando se apagan las luces</h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="relative w-full">
                            <img
                                src={proxShingeki}
                                alt="Shingeki no Kyojin"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/30 text-white text-center p-6">
                                <h3 className="text-3xl font-bold bg-black/60 shadow-xl p-2 rounded-md border border-white">Los hijos de Adán</h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="relative w-full">
                            <img
                                src={proxSpy}
                                alt="Spy x Family"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/30 text-white text-center p-6">
                                <h3 className="text-3xl font-bold bg-black/60 shadow-xl p-2 rounded-md border border-white">¿Por qué matamos?</h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="relative w-full">
                            <img
                                src={proxBleach}
                                alt="Bleach"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/30 text-white text-center p-6">
                                <h3 className="text-3xl font-bold bg-black/60 shadow-xl p-2 rounded-md border border-white">¿Por qué matamos? Vol.5</h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Books;
