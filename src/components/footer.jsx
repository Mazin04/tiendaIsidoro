import { HiOutlineEnvelopeOpen } from "react-icons/hi2";
import { SocialIcon } from "react-social-icons";
import { CiCircleCheck, CiDeliveryTruck, CiShop } from "react-icons/ci";
import { PiPackageLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer>
      <hr className="text-[#D0D4DD] mt-6"/>
      <div className="bg-white py-12">
        <div className="flex flex-row flex-wrap justify-between gap-4 max-w-[1300px] w-full px-4 mx-auto">
          <div className="flex flex-col justify-center items-center gap-4 text-black">
            <CiCircleCheck className="text-[60px]"/>
            <p>Compra segura</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-black">
            <CiDeliveryTruck  className="text-[60px]"/>
            <p>Envío gratis a partir de 19.0 €</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-black">
            <CiShop className="text-[60px]"/>
            <p>Recogida en librería gratis</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-black">
            <PiPackageLight className="text-[60px]"/>
            <p>Devoluciones gratis hasta 14 días</p>
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
              Recibe nuestras novedades en libros en tu email
            </p>

            {/* Aviso legal */}
            <div className="mt-2 text-xs md:text-sm text-gray-200">
              <p>
                ESPASA CALPE, S.A. (Casa del Libro) tratará tus datos personales para informarte de nuestras novedades y descuentos. Conservaremos tus datos mientras no te des de baja o nos solicites su supresión. Podrás ejercer los derechos de acceso, supresión, rectificación, oposición, limitación y portabilidad, mediante carta a ESPASA CALPE, S.A. (Casa del Libro), Apartado de Correos 221 de Barcelona o remitiendo un email a protecciondedatos@casadellibro.com. Asimismo, cuando lo consideres oportuno, podrás presentar una reclamación ante la Agencia Española de protección de datos.
              </p>
            </div>

            {/* Formulario */}
            <form className="flex flex-wrap gap-4 mt-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 w-full md:w-[540px] bg-white border border-[#004D43] text-black rounded-sm text-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />
              <button className="bg-[#FFC107] text-black px-6 py-3 hover:bg-yellow-600 rounded-sm text-lg font-semibold">
                SUSCRIBIRME
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
              <SocialIcon network="facebook" target="_blank" url="https://www.facebook.com" fgColor="#fff" style={{height: 40, width: 40}}/>
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="x" target="_blank" url="https://www.x.com" fgColor="#fff" style={{height: 40, width: 40}}/>
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="instagram" target="_blank" url="https://www.instagram.com" fgColor="#fff" style={{height: 40, width: 40}}/>
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="youtube" target="_blank" url="https://www.youtube.com" fgColor="#fff" style={{height: 40, width: 40}}/>
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="pinterest" target="_blank" url="https://www.pinterest.com" fgColor="#fff" style={{height: 40, width: 40}}/>
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="spotify" target="_blank" url="https://www.spotify.com" fgColor="#fff" style={{height: 40, width: 40}}/>
            </div>
            <div className="rounded-full p-1 hover:bg-slate-300 transition-all">
              <SocialIcon network="tiktok" target="_blank" url="https://www.tiktok.com" fgColor="#fff" style={{height: 40, width: 40}}/>
            </div>
          </div>
        </div>

        {/* Enlaces de interés */}
        <div className="grid grid-cols-4 gap-2 mt-6 max-w-[1300px] w-full px-4 mx-auto">
          <div className="flex flex-col gap-1 text-[#004D43]">
            <p className="mt-4 mb-2 text-black">Casa del Libro</p>
            <a className="hover:underline" href="#"><small>Quienes somos</small></a>
            <a className="hover:underline" href="#"><small>Trabaja con nosotros</small></a>
            <a className="hover:underline" href="#"><small>Nuestras librerías</small></a>
            <a className="hover:underline" href="#"><small>Casa del Libro México</small></a>
            <a className="hover:underline" href="#"><small>Casa del Libro Colombia</small></a>
          </div>
          <div className="flex flex-col gap-1 text-[#004D43]">
            <p className="mt-4 mb-2 text-black">Ayuda</p>
            <a className="hover:underline" href="#"><small>Pago seguro con tarjeta</small></a>
            <a className="hover:underline" href="#"><small>Pagar con Klarna</small></a>
            <a className="hover:underline" href="#"><small>Devoluciones</small></a>
            <a className="hover:underline" href="#"><small>Gastos y formas de envío</small></a>
            <a className="hover:underline" href="#"><small>Preguntas frecuentes</small></a>
            <a className="hover:underline" href="#"><small>Estado de tu pedido</small></a>
            <a className="hover:underline" href="#"><small>Incidencias de pedidos</small></a>
            <a className="hover:underline" href="#"><small>Contacta con nosotros</small></a>
            <a className="hover:underline" href="#"><small>Bono Cultural Joven</small></a>
          </div>
          <div className="flex flex-col gap-1 text-[#004D43]">
            <p className="mt-4 mb-2 text-black">Servicios</p>
            <a className="hover:underline" href="#"><small>Casa del Libro Plus</small></a>
            <a className="hover:underline" href="#"><small>Vende con nosotros</small></a>
            <a className="hover:underline" href="#"><small>Venta a Empresas e Instituciones</small></a>
            <a className="hover:underline" href="#"><small>Preventa</small></a>
            <a className="hover:underline" href="#"><small>Información para editoriales</small></a>
            <a className="hover:underline" href="#"><small>Libros al por mayor</small></a>
            <a className="hover:underline" href="#"><small>Programa afiliados</small></a>
          </div>
          <div className="flex flex-col gap-1 text-[#004D43]">
            <p className="mt-4 mb-2 text-black">Información legal</p>
            <a className="hover:underline" href="#"><small>Condiciones de uso</small></a>
            <a className="hover:underline" href="#"><small>Condiciones de contratación</small></a>
            <a className="hover:underline" href="#"><small>Condiciones para vender</small></a>
            <a className="hover:underline" href="#"><small>Política de privacidad</small></a>
            <a className="hover:underline" href="#"><small>Política de devoluciones y anulaciones</small></a>
            <a className="hover:underline" href="#"><small>Política de cookies</small></a>
            <a className="hover:underline" href="#"><small>Configurar cookies</small></a>
            <a className="hover:underline" href="#"><small>Resolución de litigios en línea</small></a>
            <a className="hover:underline" href="#"><small>Oficina de Buenas Prácticas</small></a>
          </div>
        </div>
      </div>
      <hr className="mt-4 text-slate-600" />
      <div className="bg-[#E9EBEF] p-3">
        <p className="text-center">
          © 2025 Casa del Libro. Todos los derechos reservados
        </p>
      </div>

    </footer>
  );
};

export default Footer;
