import Helmet from "../components/Helmet";


function Inform() {
  return (
    <>
    <Helmet title="Informes">
    <section className="max-w-[791px] p-6">
      <h3 className="text-2xl font-semibold mb-10">Informes y facturación</h3>

      <h4 className="text-lg font-semibold mb-2 pb-2">Estado de facturación</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md">
          <p className="font-semibold">Saldo por pagar</p>
          <p className="text-[#888] mt-4">No registrás saldo por pagar. Cuando lo tengas, acá verás el monto adeudado y podrás acceder a realizar el pago.</p>
        </div>
        <div className="bg-white p-4 rounded-md">
          <p className="font-semibold">En curso</p>
          <p className="text-[#888] mt-4">Actualmente no registrás facturación en curso. Cuando se genere tu primer cargo, podrás acceder al resumen desde acá.</p>
        </div>
      </div>

       <h4 className="text-lg font-semibold mb-2 pt-6">Accesos</h4>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md">
          <p className="font-semibold">Facturas y reportes</p>
          <p className="text-[#888]">No registrás cargos facturados en los últimos meses. Cuando tengas cargos por venta u otras operaciones, podrás acceder a todos tus comprobantes desde acá.</p>
        </div>
        <div className="bg-white p-4 rounded-md">
          <p className="font-semibold">Impuestos</p>
          <p className="text-[#888]">Actualmente no tenés percepciones ni retenciones.</p>
        </div>
      </div>
    </section>
    </Helmet>
    </>
  );
}

export default Inform;
