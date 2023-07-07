import Helmet from "../components/Helmet";
import { AiFillCamera } from "react-icons/ai";

function Link() {
  return (
    <>
    <Helmet title="Link">
    <section>
      <h3 className="text-2xl font-semibold mb-4">Creá tu Link de pago</h3>
      <div className="grid grid-cols-2 gap-6 bg-white p-2 md:p-10 items-center rounded-md">
        <div>
          <div>
            <label htmlFor="price" className="text-sm">Price</label>
            <input type="text" placeholder="$0,00" className="w-full px-3 py-2 border rounded-md mb-2" />
            <p className="text-sm text-[#777]">Pagás de comisión hasta $0,00 + IVA</p>
          </div>
          <div className="mt-10">
            <label htmlFor="titulo" className="text-sm">Título de tu producto o servicio</label>
            <input type="text" placeholder="Ej: Remera azul con estampados talle L" className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <AiFillCamera className="text-4xl mb-2" />
          <p className="text-sm text-center">Agregar una foto (opcional)</p>
          <p className="text-sm">Podés arrastrarla acá</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-md">
        <h4 className="text-lg font-semibold mb-2">Elegí si querés configurar:</h4>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>Medios de pago y más opciones</span>
        </div>
      </div>
      <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md mt-4">
        Crear Link de pago
      </button>
    </section>
    </Helmet>
    </>
  );
}

export default Link;
