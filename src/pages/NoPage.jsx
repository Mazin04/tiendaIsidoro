import { Link } from "react-router-dom";


const NoPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
            <h1 className="text-7xl font-bold text-[#004D43]">404</h1>
            <p className="text-xl text-black mt-4">Oops, la página que buscas no existe.</p>
            <Link to={"/"} className="mt-6 px-6 py-3 bg-[#FFC107] text-black rounded-lg text-lg hover:bg-yellow-600 transition">
                Volver al inicio
            </Link>
        </div>
    );
};

export default NoPage;
