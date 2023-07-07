import computerImg from "../assets/images/local/computer.png";
import pagoImg from "../assets/images/local/pago.png";
import catalogoImg from "../assets/images/local/catalogo.png";
import cajaImg from "../assets/images/local/caja.png";
import Helmet from "../components/Helmet";

function Subscription() {
  return (
    <>
    <Helmet title="Subscripcion">
    <section className="max-w-[668px] m-auto bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Cobrá de forma automática desde el sillón de tu casa.</p>
          <p>Creá un plan de suscripción, compartilo con tus clientes y empezá a cobrar de forma recurrente sin tener que hacer nada más.</p>
        </div>
        <img src={computerImg} alt="computer" className="hidden md:flex"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-4 rounded-md">
          <img src={pagoImg} alt="create a plan" className="m-auto"/>
          <p className="font-semibold text-center">Creá un plan de suscripción en pocos pasos</p>
          <p className="text-center">Definí su nombre, el precio y la frecuencia de cobro.</p>
        </div>
        <div className="bg-white p-4 rounded-md">
          <img src={catalogoImg} alt="create a plan" className="m-auto"/>
          <p className="font-semibold text-center">Compartilo con tus clientes</p>
          <p className="text-center">Tendrás un link o botón para compartir por WhatsApp o tu red social favorita.</p>
        </div>
        <div className="bg-white p-4 rounded-md">
          <img src={cajaImg} alt="create a plan" className="m-auto"/>
          <p className="font-semibold text-center">Administrá todo desde tu panel</p>
          <p className="text-center">Controlá tus ingresos y editá tus planes como gustes.</p>
        </div>
      </div>
    </section>
    </Helmet>
    </>
  );
}

export default Subscription;
