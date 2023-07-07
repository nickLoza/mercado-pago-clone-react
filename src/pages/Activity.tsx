import Helmet from "../components/Helmet";

function Activity() {
  return (
    <>
      <Helmet title={"Activity"}>
      <section className="bg-white p-6 text-center rounded-md">
        <p className="font-medium mb-4">Todavía no tienes actividad en tu cuenta</p>
        <p className="text-sm text-[#777]">
          Cuando cobres, pagues, envíes o recibas dinero, aquí vas a ver todas tus operaciones.
        </p>
      </section>
      </Helmet>
    </>
  );
}

export default Activity;
