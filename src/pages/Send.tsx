import Helmet from "../components/Helmet";
import { CgProfile } from "react-icons/cg";

function Send() {
  return (
    <>
    <Helmet title="Enviar Dinero">
    <section className="flex flex-col  justify-evenly max-w-[640px] min-h-[450px] m-auto bg-white p-6 mt-10 rounded-md">
      <div className="flex items-center gap-3 mb-4">
        <CgProfile className="text-xl" />
        <input
          type="text"
          placeholder="Ingresa nombre o e-mail"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4 py-2 border-b-[1px]">
        <p className="font-semibold text-center text-3xl">$0</p>
      </div>
      <input
        type="text"
        placeholder="¿Quieres decirle algo?"
        className="w-full px-3 py-2 border rounded-md mb-4"
      />
      <div className="flex items-center mb-9">
        <input type="checkbox" id="checkbox" className="mr-2" />
        <label htmlFor="checkbox" className="text-sm">
          Acepto usar la sección Amigos solo con fines personales, no comerciales.
        </label>
      </div>
      <div className="flex justify-end">
        <button className="py-2 px-4 rounded-md bg-blue-500 text-white font-semibold">
          Continuar
        </button>
      </div>
    </section>
    </Helmet>
    </>
  );
}

export default Send;
