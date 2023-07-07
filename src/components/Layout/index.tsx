import Routers from "../../routers/Routers"
import Footer from "../Footer"
import Header from "../Header"

function Layout() {
	return (
		<>
		<Header/>
		<div className="m-auto max-w-[878px] pt-4 px-2">
			<Routers/>
		</div>
		<Footer/>	
		</>
	)
}

export default Layout