import Helmet from "../components/Helmet";
import { CgProfile } from "react-icons/cg";

function Help() {
  return (
    <>
      <Helmet title="Help">
      <div className="max-w-[426px] m-auto my-8">
        <h2 className="text-2xl font-medium mb-2">¿Con qué podemos ayudarte?</h2>
        <div className="flex justify-between items-center mb-6">
          <input className="w-full px-2 py-4 mr-2 rounded-md" type="text" placeholder="Buscá en Ayuda" />
          <button className="py-4 px-6 rounded-md bg-[#ccc] font-semibold">Buscar</button>
        </div>

        <div>
          <div className="flex items-center bg-white my-3 rounded-md p-4">
            <div className="text-2xl mr-3 color-mp">
              <CgProfile />
            </div>
            <div>
              <p className="font-medium text-sm">Seguridad</p>
              <p className="text-[#555] text-sm">Robo o pérdida de dispositivo y robo de cuenta.</p>
            </div>
          </div>
          <div className="flex items-center bg-white my-3 rounded-md p-4">
            <div className="text-2xl mr-3 color-mp">
              <CgProfile />
            </div>
            <div>
              <p className="font-medium text-sm">Tu perfil</p>
              <p className="text-[#555] text-sm">Datos y problemas de ingreso a la cuenta.</p>
            </div>
          </div>
          <div className="flex items-center bg-white my-3 rounded-md p-4">
            <div className="text-2xl mr-3 color-mp">
              <CgProfile />
            </div>
            <div>
              <p className="font-medium text-sm">Cuenta Mercado Pago</p>
              <p className="text-[#555] text-sm">Ingresos, transferencias, extracciones, inversiones y tarjetas.</p>
            </div>
          </div>
          <div className="flex items-center bg-white my-3 rounded-md p-4">
            <div className="text-2xl mr-3 color-mp">
              <CgProfile />
            </div>
            <div>
              <p className="font-medium text-sm">Ventas</p>
              <p className="text-[#555] text-sm">Tus cobros, tasas y herramientas para vender con QR, Point, link de pago, etc.</p>
            </div>
          </div>
          <div className="flex items-center bg-white my-3 rounded-md p-4">
            <div className="text-2xl mr-3 color-mp">
              <CgProfile />
            </div>
            <div>
              <p className="font-medium text-sm">Préstamos</p>
              <p className="text-[#555] text-sm">Cómo solicitar, usar y pagar cuotas de Mercado Crédito.</p>
            </div>
          </div>
          <div className="flex items-center bg-white my-3 rounded-md p-4">
            <div className="text-2xl mr-3 color-mp">
              <CgProfile />
            </div>
            <div>
              <p className="font-medium text-sm">Otros productos</p>
              <p className="text-[#555] text-sm">Seguros, garantías extendidas y Mercado Puntos.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-medium">Estos temas pueden interesarte</p>
          <div className="flex items-center justify-between bg-white my-3 rounded-md p-4">
            <p>¿Qué cuentas y servicios puedo pagar?</p>
            <span className="font-bold">{">"}</span>
          </div>
          <div className="flex items-center bg-white my-3 rounded-md p-4">
            <p>Por qué no veo a Mercado Crédito entre los medios de pago</p>
            <span className="font-bold">{">"}</span>
          </div>
          <div className="flex items-center justify-between bg-white my-3 rounded-md p-4">
            <p>¿Cuáles son los costos por cobro con Mercado Pago?</p>
            <span className="font-bold">{">"}</span>
          </div>
        </div>
        <div>
          <p>¿Necesitás más ayuda?</p>
          <div className="flex items-center justify-between bg-white my-3 rounded-md p-4">
            <p>Contactanos</p>
            <span className="font-bold">{">"}</span>
          </div>
        </div>
      </div>
      </Helmet>
    </>
  );
}

export default Help;
