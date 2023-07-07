import Helmet from "../components/Helmet";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsCardText } from "react-icons/bs";

function Money() {
  return (
    <>
    <Helmet title="Tu Dinero">
    <div className="max-w-[426px] m-auto bg-white p-6 rounded-md">
      <div className="flex items-center justify-between">
        <p className="font-medium">Dinero disponible</p>
        <BiDotsVerticalRounded />
      </div>
      <p className="text-2xl font-bold">$ 75.000</p>
      <div className="flex items-center justify-between my-2 pb-2 border-b-[1px]">
        <p className="font-medium">¡Tu dinero puede crecer!</p>
        {">"}
      </div>
      <div className="flex items-center mt-4">
        <BsCardText className="text-4xl color-mp mr-3" />
        <div>
          <p className="font-medium">No tienes movimientos de tu dinero</p>
          <p className="text-sm text-[#777]">
            Aquí encontrarás las operaciones que impacten en tu dinero disponible.
          </p>
        </div>
      </div>
    </div>
    </Helmet>
    </>
  );
}

export default Money;
