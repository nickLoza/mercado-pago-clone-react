import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { ClipLoader } from "react-spinners"

const Home         =  lazy(()=> import("../pages/Home"))
const Profile      =  lazy(()=> import("../pages/Profile"));
const Help         =  lazy(()=> import("../pages/Help"));
const Money        =  lazy(()=> import("../pages/Money"));
const Activity     =  lazy(()=> import("../pages/Activity"));
const Send         =  lazy(()=> import("../pages/Send"));
const Loan         =  lazy(()=> import("../pages/Loan"));
const Local        =  lazy(()=> import("../pages/Local"));
const Link         =  lazy(()=> import("../pages/Link"));
const Inform       =  lazy(()=> import("../pages/Inform"));
const Subscription =  lazy(()=> import("../pages/Subscription"));


function Routers() {
	const loaderStyle = {
	    display: "flex",
	    justifyContent: "center",
	    alignItems: "center",
	    margin: "3rem auto"
  	};
	return (
		<Suspense fallback={<ClipLoader color="#009EE3" size={100} cssOverride={loaderStyle}/>}>
			<Routes>
		        <Route path="/" element={<Navigate to={"/home"} />} />
		        <Route path="/home" element={<Home />} />
		        <Route path="/profile" element={<Profile />} />
		        <Route path="/help" element={<Help />} />
		        <Route path="/money" element={<Money />} />
		        <Route path="/activity" element={<Activity />} />
		        <Route path="/send" element={<Send/>} />
		        <Route path="/loan" element={<Loan />} />
		        <Route path="/local" element={<Local />} />
		        <Route path="/link" element={<Link />} />
		        <Route path="/inform" element={<Inform />} />
		        <Route path="/subscription" element={<Subscription />} />
		        <Route path="*" element={<Navigate to={"/home"} />} />
		    </Routes>
	    </Suspense>
	)
}

export default Routers