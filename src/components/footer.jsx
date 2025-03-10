import { HiOutlineEnvelopeOpen } from "react-icons/hi2";
import { SocialIcon } from "react-social-icons";
import { CiCircleCheck, CiDeliveryTruck, CiShop } from "react-icons/ci";
import { PiPackageLight } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <hr className="text-[#D0D4DD] mt-6" />
      <div className="bg-white py-12">
        <div className="flex flex-row flex-wrap justify-between gap-4 max-w-[1300px] w-full px-4 mx-auto">
          <div className="flex flex-col justify-center items-center gap-4 text-black">
            <CiCircleCheck className="text-[60px]" />
            <p>{t('safe_buy')}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-black">
            <CiDeliveryTruck className="text-[60px]" />
            <p>{t('free_shipping')}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-black">
            <CiShop className="text-[60px]" />
            <p>{t('pick_up')}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-black">
            <PiPackageLight className="text-[60px]" />
            <p>{t('returns')}</p>
          </div>
        </div>
      </div>

      {/* Sección de suscripción */}
      <div className="bg-[#004D43] text-white p-6 flex justify-center items-center">
        <div className="max-w-[1300px] w-full flex flex-wrap items-center gap-6 px-4 justify-center">
          {/* Ícono del sobre */}
          <div className="flex-shrink-0">
            <HiOutlineEnvelopeOpen className="text-5xl md:text-6xl" />
          </div>

          {/* Contenedor de texto y formulario */}
          <div className="flex-1">
            <p className="text-lg md:text-2xl font-semibold pt-1">
              {t('get_news')}
            </p>

            {/* Aviso legal */}
            <div className="mt-2 text-xs md:text-sm text-gray-200">
              <p>
                {t('legal')}
              </p>
            </div>

            {/* Formulario */}
            <form className="flex flex-wrap gap-4 mt-4">
              <input
                type="email"
                placeholder={"Email"}
                className="p-3 w-full md:w-[540px] bg-white border border-[#004D43] text-black rounded-sm text-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />
              <button className="bg-[#FFC107] text-black px-6 py-3 hover:bg-yellow-600 rounded-sm text-lg font-semibold">
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Sección de enlaces */}
      <div className="bg-white py-6">
        <div className="flex flex-wrap justify-center gap-4 max-w-[1300px] w-full px-4 mx-auto">
          {/* Redes sociales */}
          <div className="flex flex-row gap-2 align-center">
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="facebook" target="_blank" url="https://www.facebook.com" fgColor="#fff" style={{ height: 40, width: 40 }} />
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="x" target="_blank" url="https://www.x.com" fgColor="#fff" style={{ height: 40, width: 40 }} />
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="instagram" target="_blank" url="https://www.instagram.com" fgColor="#fff" style={{ height: 40, width: 40 }} />
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="youtube" target="_blank" url="https://www.youtube.com" fgColor="#fff" style={{ height: 40, width: 40 }} />
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="pinterest" target="_blank" url="https://www.pinterest.com" fgColor="#fff" style={{ height: 40, width: 40 }} />
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="spotify" target="_blank" url="https://www.spotify.com" fgColor="#fff" style={{ height: 40, width: 40 }} />
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="tiktok" target="_blank" url="https://www.tiktok.com" fgColor="#fff" style={{ height: 40, width: 40 }} />
            </div>
          </div>
        </div>

        {/* Enlaces de interés */}
        <div className="grid grid-cols-4 gap-2 mt-6 max-w-[1300px] w-full px-4 mx-auto">
          <div className="flex flex-col gap-1 text-[#004D43]">
            <p className="mt-4 mb-2 text-black">{t('footer_about_us')}</p>
            <a className="hover:underline" href="#"><small>{t('footer_who_we_are')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_work_with_us')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_our_stores')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_casa_del_libro_mexico')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_casa_del_libro_colombia')}</small></a>
          </div>
          <div className="flex flex-col gap-1 text-[#004D43]">
            <p className="mt-4 mb-2 text-black">{t('footer_help')}</p>
            <a className="hover:underline" href="#"><small>{t('footer_secure_payment_with_card')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_pay_with_klarna')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_returns')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_shipping_costs_and_methods')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_faq')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_order_status')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_order_issues')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_contact_us')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_youth_cultural_bonus')}</small></a>
          </div>
          <div className="flex flex-col gap-1 text-[#004D43]">
            <p className="mt-4 mb-2 text-black">{t('footer_services')}</p>
            <a className="hover:underline" href="#"><small>{t('footer_casa_del_libro_plus')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_sell_with_us')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_sales_to_companies_institutions')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_preorder')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_info_for_publishers')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_bulk_books')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_affiliate_program')}</small></a>
          </div>
          <div className="flex flex-col gap-1 text-[#004D43]">
            <p className="mt-4 mb-2 text-black">{t('footer_legal_info')}</p>
            <a className="hover:underline" href="#"><small>{t('footer_terms_of_use')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_terms_of_contract')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_terms_for_selling')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_privacy_policy')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_returns_and_cancellations_policy')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_cookies_policy')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_configure_cookies')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_online_dispute_resolution')}</small></a>
            <a className="hover:underline" href="#"><small>{t('footer_good_practice_office')}</small></a>
          </div>
        </div>
      </div>
      <hr className="mt-4 text-slate-600" />
      <div className="bg-[#E9EBEF] p-3">
        <p className="text-center">
          © 2025 Casa del Libro. {t('footer_rights_reserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
