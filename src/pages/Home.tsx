import { ImStatsBars2 } from "react-icons/im";
import { BsCardList } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";

import { Link } from "react-router-dom";

import discover1 from "../assets/images/home/1.png";
import phoneImg from "../assets/images/home/phone.png";
import Helmet from "../components/Helmet";

function Home() {
	return (
		<>
			<Helmet title="Inicio">
			<div className="flex items-center justify-center bg-white px-4 min-h-[78px] hover:bg-[#F5F5F5] cursor-pointer rounded-md shadow-md">
				<div className="flex">
					<img className="mr-6" src={phoneImg} alt="phone" height={40} width={40}/>
					<div>
						<p className="text-medium">¿Buscás pagar?</p>
						<p className="mt-1 text-sm text-gray-500">Pagá servicios, recargá tu celular y tarjeta de transporte desde la app de Mercado Pago.</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-4 flex-wrap max-w-[878px] m-auto mt-14 ">
				<div className="bg-white w-[470px] lg:w-[370px] h-[245px] p-4 rounded-md shadow-md">
					<div className="flex items-center justify-between">
						<p className="text-[#5F5F5F]">Dinero disponible</p>
						<p className="bg-[#E4F0F8] text-sm text-[#009EE3] px-2 py-1 rounded-md shadow-md">Tu CVU</p>
					</div>
					<div className="flex items-center justify-between py-3 border-b-[1px]">
						<div>
							<p className="font-semibold text-2xl pb-2">$ 75000</p>
							<p className="text-[#5F5F5F] text-[.7rem]">$ 75000 a liquidar</p>
						</div>
						<span>
							{">"}
						</span>
					</div>
					<div className="flex items-center justify-between py-2 border-b-[1px] ">
						<div className="flex items-center">
							<div className="bg-[#009EE3] p-3 rounded-full">
								<ImStatsBars2 className="text-white text-xl"/>
							</div>
							<span className="ml-3 text-sm">!Tu dinero puede crecer¡</span>
						</div>
						<div>
							<span className="bg-[#E4F0F8] text-[.7rem] text-[#009EE3] px-2 py-1 rounded-md shadow-md">
								81,2%
							</span>
							<span>
								{">"}
							</span>
						</div>
					</div>
					<div className="text-center py-4">
						<button className="bg-[#E4F0F8] text-sm text-[#009EE3] px-4 py-1 rounded-md mr-2 shadow-md">
							Ingresas dinero
						</button>
						<button className="bg-[#E4F0F8] text-sm text-[#009EE3] px-4 py-1 rounded-md shadow-md">
							Transferir dinero
						</button>
					</div>
				</div>
				{/*activity*/}
				<div className="flex flex-col justify-between bg-white w-[470px] h-[275px] rounded-md">
					<p className="border-b-[1px] w-full py-3 px-4 text-base font-semibold">Tu actividad</p>
					<div className="">
						<div className="pt-6 pb-2">
							<BsCardList className="m-auto text-3xl text-[#5F5F5F]"/>
						</div>
						<p className="mx-auto text-center text-gray-600 font-semibold max-w-[300px]">Usá Mercado Pago y descubrí todo lo que tenemos para vos.</p>

					</div>
					<div className="flex items-center justify-between border-t-[1px] cursor-pointer text-sm bg-white text-[#009EE3] text-base font-medium transition duration-150 hover:bg-[#ddd]  shadow-md">
						<Link className="w-full p-4 " to={"/activity"}>
							Ver toda tu actividad
						</Link>
						<span className="mr-5">
								{">"}
						</span>
					</div>
				</div>
			</div>
			{/*carrousel*/}
			<div className="m-auto lg:m-0 lg:w-[370px] h-[245px]  my-4 ">
					<p className="text-lg font-semibold mb-4">Descubrí más</p>
					<div className="flex justify-between bg-white rounded-md p-4 pb-0 shadow-md">
						<div className="text-[#009EE3]">
							<p className="text-[.6rem]">INVITÁ Y GANÁ</p>
							<div>
								<p className="text-base max-w-[150px] font-bold">
									RECOMENDÁ LA APP Y GANA $1.500
								</p>
							</div>
						</div>
						<img src={discover1} alt="people" width={175} height={175}/>
					</div>
			</div>
			<div className="m-auto lg:mx-0 flex justify-center flex-col lg:w-[370px] h-[120px] bg-white text-sm mb-4 rounded-md shadow-md">
				<button className="max-h-[50px] flex items-center text-left border-b-[1px] px-4 py-4 transition duration-150 hover:bg-[#eee] ">
					<AiOutlineGift className="text-[#009EE3] text-xl mr-4"/> !Recomendá Point y ganá hasta $2.500¡
				</button>
				<button className="max-h-[50px] flex items-center text-left px-4 py-4 transition duration-150 hover:bg-[#eee]">
					<AiOutlineGift className="text-[#009EE3] text-xl mr-4"/> !Recomendá la app y ganá hasta $1.500¡
				</button>
			</div>

			<div className="m-auto lg:m-0 flex flex-col lg:w-[370px] mb-8 pb-6">
				<button className="flex items-center text-left py-6 px-3 rounded-md bg-white shadow-md">
					<LuNewspaper className="text-[#009EE3] text-xl"/> 
					<span className="ml-4 text-sm">
						Botón de arrepentimiento
					</span>
				</button>
				<button className="m-auto lg:mx-0 flex items-center mt-6 text-left py-4 px-3 rounded-md bg-white shadow-md">
					<MdOutlineAccountCircle className="text-[#009EE3] text-xl"/> 
					<span className="ml-4 text-sm">
						Cancelar cuenta
					</span>
				</button>
			</div>
            </Helmet>
		</>
	)
}

export default Home