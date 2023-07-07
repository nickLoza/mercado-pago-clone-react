import { CgProfile } from "react-icons/cg"
import Helmet from "../components/Helmet";

function Profile() {


	return (
		<>
			<Helmet title="Tu Perfil">
			<div className="max-w-[714px] m-auto pb-4">
				{/*top*/}
				<div className="min-h-[112px] flex items-center py-4 px-6 bg-white rounded-md mb-8">
					<CgProfile className="text-4xl color-mp mr-4"/>
					<div>
						<p className="text-2xl font-semibold">Joe Doe</p>
						<p className="text-base">Estás en nível 1 - Mercado Puntos</p>
					</div>
				</div>
				{/*options*/}
				<div className="bg-white py-2 px-8 pb-8 rounded-md">
					<div className="flex items-center h-full justify-between bg-[#E4F0F8] color-mp py-2 px-6 rounded-full mb-4 mt-4">
						<p className="font-semibold">CVU y Alias</p>
						<span className="font-bold">{">"}</span>
					</div>
					<div className="flex flex-col gap-y-14 px-6 pt-6">
						<div className="flex items-center gap-x-3">
						<div className="text-4xl color-mp">
							<CgProfile/>
						</div>
						<div className="flex flex-col">
							<p className="text-base font-medium">Tus datos</p>
							<p className="text-sm text-[#777]">Datos validados</p>
						</div>
					</div>
					<div className="flex items-center gap-x-3">
						<div className="text-4xl color-mp">
							<CgProfile/>
						</div>
						<div className="flex flex-col">
							<p className="text-base font-medium">Seguridad</p>
							<p className="text-sm text-[#777]">Tenés configuraciones pendientes</p>
						</div>
					</div>
					<div className="flex items-center gap-x-3">
						<div className="text-4xl color-mp">
							<CgProfile/>
						</div>
						<div className="flex flex-col">
							<p className="text-base font-medium">Tarjetas</p>
							<p className="text-sm text-[#777]">Tarjetas guardadas en tu cuenta</p>
						</div>
					</div>
					<div className="flex items-center gap-x-3">
						<div className="text-4xl color-mp">
							<CgProfile/>
						</div>
						<div className="flex flex-col">
							<p className="text-base font-medium">Direcciones</p>
							<p className="text-sm text-[#777]">Privacidad</p>
						</div>
					</div>
					<div className="flex items-center gap-x-3">
						<div className="text-4xl color-mp">
							<CgProfile/>
						</div>
						<div className="flex flex-col">
							<p className="text-base font-medium">Privacidad</p>
							<p className="text-sm text-[#777]">Preferencias y control sobre el uso de tus datos</p>
						</div>
					</div>
					<div className="flex items-center gap-x-3">
						<div className="text-4xl color-mp">
							<CgProfile/>
						</div>
						<div className="flex flex-col">
							<p className="text-base font-medium">Comunicaciones</p>
							<p className="text-sm text-[#777]">Elegí qué tipo de información querés recibir</p>
						</div>
					</div>
					<div className="flex items-center gap-x-3">
						<div className="text-4xl color-mp">
							<CgProfile/>
						</div>
						<div className="flex flex-col">
							<p className="text-base font-medium">Subcripciones</p>
							<p className="text-sm text-[#777]">Gestioná tus subscripciones</p>
						</div>
					</div>
					</div>
				</div>
			</div>
            </Helmet>
		</>
	)
}

export default Profile