import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NoPage = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
            <h1 className="text-7xl font-bold text-[#004D43]">404</h1>
            <p className="text-xl text-black mt-4">{t('404_message')}</p>
            <Link to={"/"} className="mt-6 px-6 py-3 bg-[#FFC107] text-black rounded-lg text-lg hover:bg-yellow-600 transition">
                {t('404_return')}
            </Link>
        </div>
    );
};

export default NoPage;
