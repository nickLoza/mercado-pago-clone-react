import { Link, NavLink, useLocation } from "react-router-dom";
import { menuItems } from "../constants/menuItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { VscAccount } from "react-icons/vsc";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const asideRef = useRef<any>(null);
  const location = useLocation();

  const currentPage = menuItems.find((item) => item.route === location.pathname);
  const pageTitle = currentPage ? currentPage.title : "Inicio";


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setToggle(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleOnClickToggle() {
    setToggle(!toggle);
  }

  return (
    <header className="bg-mp h-[60px] text-white">
      <nav className="flex h-full items-center justify-between px-7 text-white">
        <div className="flex items-center font-bold">
          <button 
            className="text-xl mr-4 xl:hidden" 
            onClick={handleOnClickToggle}
            aria-label="Toggle Navigation Menu">
            <GiHamburgerMenu />
          </button>
          <h1 className="xl:ml-[265px]">{pageTitle}</h1>
        </div>
        <button 
          className="text-3xl"
          aria-label="Toggle Notifications View">
          <IoMdNotificationsOutline />
        </button>
        <aside
          ref={asideRef}
          className={`fixed z-1000 flex flex-col left-0 top-0 w-[256px] h-full bg-[#EEEEEE] text-black transition duration-300 ease-in-out transform ${
            toggle ? "translate-x-0" : "-translate-x-full"
          } xl:transform-none xl:translate-x-0`}
        >
          <div className="flex items-center justify-center h-[60px]  text-white bg-[#008AD6]">
            <div className="text-white text-4xl border-2 border-blue-300 rounded-full">
              <VscAccount className="p-1" />
            </div>
            <div className="ml-3">
              <p className="text-[.7rem]">Hola Joe</p>
              <Link className="text-sm font-semibold" to="#">
                Nivel 1 - Mercado Puntos &gt;
              </Link>
            </div>
          </div>
          <ul className="border-slate-300 border-r-[1px] pt-5 overflow-y-auto max-h-full pb-4 prevent-copy">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className={`relative ${
                    location.pathname === item.route ? "text-[#44B3E4]" : "text-gray-500"
                  }`}
              >
                <NavLink
                  className={`pl-5 flex items-center hover:bg-[#E5E5E5] min-h-[46px] text-3xl`}
                  to={item.route}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      setToggle(false);
                    }
                  }}
                >
                  {item.icon}
                  <span className="ml-3 text-sm ">{item.title}</span>
                  {location.pathname === item.route && (
                    <div
                      className="absolute left-0 w-1 h-full bg-[#44B3E4]"
                      style={{ top: "50%", transform: "translateY(-50%)" }}
                    ></div>
                  )}
                </NavLink>
              {item.textShadow && <div className="h-[1px] ml-6 my-2 bg-slate-300"/>}
              </li>
            ))}
            <li className="flex pl-6 hover:bg-[#E5E5E5] active:text-[#44B3E4] min-h-[46px] text-[#7E7E7E] text-2xl cursor-pointer">
              <button className="flex items-center" onClick={() => setShowDropdown(!showDropdown)}>
                <BsShop />
                <span className="ml-3 text-sm font-base">Shop</span>
              </button>
            </li>
            <li className="flex pl-6 hover:bg-[#E5E5E5] min-h-[46px] text-[#7E7E7E] text-2xl cursor-pointer active:text-[#44B3E4]">
              <button className="flex items-center">
                <MdOutlineLogout />
                <span className="ml-3 text-sm font-base">Salir</span>
              </button>
            </li>
            <li className="flex pl-6 hover:bg-[#E5E5E5] min-h-[46px] text-[#7E7E7E] text-2xl cursor-pointer active:text-[#44B3E4]">
              <a className="flex items-center" href="https://github.com/nickLoza/mercado-pago-clone-react" target="_blank">
                <AiFillGithub/>
                <span className="ml-3 text-sm font-base">Repository</span>
              </a>
            </li>
          </ul>
        </aside>
      </nav>
      <div
        className={`xl:hidden transition duration-300 ease-in-out ${
          toggle ? "bg-gray-800 opacity-40 translate-x-[256px]" : "opacity-100 translate-x-0"
        } fixed inset-0 z-500 pointer-events-none ${
          window.innerWidth < 1280 ? "block" : "hidden"
        }`}
        onClick={() => setToggle(false)}
      />
    </header>
  );
}

export default Header;
