import Helmet from "../components/Helmet";
import { CgProfile } from "react-icons/cg";

function Loan() {
  return (
    <>
    <Helmet title="Prestamos">
    <section className="max-w-[650px] m-auto">
      <p className="text-medium font-medium mb-4">Elegí en qué te gustaría utilizarlos</p>
      <div className="flex items-center gap-3 mb-6 bg-white p-5 rounded-md">
        <CgProfile className="text-2xl" />
        <div>
          <p className="font-semibold text-base">Para pagar en cuotas sin tarjeta</p>
          <p className="text-[#555] text-sm">Una línea de crédito para usar en Mercado Libre y Mercado Pago.</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white p-5 rounded-md">
        <CgProfile className="text-2xl" />
        <div>
          <p className="font-semibold text-base">Para mi negocio</p>
          <p className="text-[#555] text-sm">Conocé los objetivos que tenés que alcanzar para obtener una oferta de crédito.</p>
        </div>
      </div>
    </section>
    </Helmet>
    </>
  );
}

export default Loan;
