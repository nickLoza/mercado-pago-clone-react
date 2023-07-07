import computerImg from "../assets/images/local/computer.png";
import pagoImg from "../assets/images/local/pago.png";
import catalogoImg from "../assets/images/local/catalogo.png";
import cajaImg from "../assets/images/local/caja.png";
import Helmet from "../components/Helmet";

function Local() {
  return (
    <>
    <Helmet title="Local">
    <section className="bg-white p-5 rounded-md">
      <div className="flex items-center justify-between border-b-[1px] pb-2">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Configurá gratis tu punto de venta</h3>
          <p>Podés cobrar y gestionar tu negocio desde el panel de Mercado Pago.</p>
          <button className="py-2 px-4 mt-4 bg-blue-500 text-white font-semibold rounded-md">
            Comenzar
          </button>
        </div>
        <img src={computerImg} alt="computer" className="hidden md:flex h-[200px]" />
      </div>
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div className="flex items-center flex-col">
          <img src={pagoImg} alt="metodo de pago" className="h-12 mr-8 mb-4" />
          <div>
            <p className="font-semibold text-base">Elegí el medio de cobro que querés aceptar en cada venta.</p>
            <p className="text-[#555] text-sm">
              Cobrás con código QR y registrás cobros en efectivo y con otros lectores.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <img src={catalogoImg} alt="catalogo" className="h-12 mr-8 mb-4" />
          <div>
            <p className="font-semibold text-base">Creá un catálogo con tus productos</p>
            <p className="text-[#555] text-sm">
              Te permite organizarlos, crear variantes y vender en menos pasos.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <img src={cajaImg} alt="caja registradora" className="h-12 mr-8 mb-4" />
          <div>
            <p className="font-semibold text-base">Gestioná tu caja y obtené el reporte de ventas</p>
            <p className="text-[#555] text-sm">
              Podés seguir el estado de tus cobros al instante y hacer el cierre de caja.
            </p>
          </div>
        </div>
      </div>
    </section>
    </Helmet>
    </>
  );
}

export default Local;
