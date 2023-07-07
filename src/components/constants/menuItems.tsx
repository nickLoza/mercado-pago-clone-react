import { AiOutlineHome,AiOutlineLink } from "react-icons/ai"
import { CgProfile } from "react-icons/cg";
import { BiHelpCircle } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { RiFolderTransferLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaHandHoldingUsd,FaCashRegister } from "react-icons/fa";
import { PiArchive, PiNewspaperClippingThin } from "react-icons/pi";


export const menuItems = [
  {
    title: 'Inicio',
    route: '/home',
    icon: <AiOutlineHome />,
    textShadow: false
  },
  {
    title: 'Tu perfil',
    route: '/profile',
    icon: <CgProfile />,
    textShadow: false
  },
  {
    title: 'Ayuda',
    route: '/help',
    icon: <BiHelpCircle />,
    textShadow: true
  },
  {
    title: 'Tu dinero',
    route: '/money',
    icon: <CiWallet />,
    textShadow: false
  },
  {
    title: 'Actividad',
    route: '/activity',
    icon: <PiArchive />,
    textShadow: false
  },
  {
    title: 'Enviar dinero',
    route: '/send',
    icon: <RiFolderTransferLine />,
    textShadow: true
  },
  {
    title: 'Préstamos',
    route: '/loan',
    icon: <FaHandHoldingUsd />,
    textShadow: true
  },
  {
    title: 'Cobrar en tu local',
    route: '/local',
    icon: <FaCashRegister />,
    textShadow: false
  },
  {
    title: 'Link de pago',
    route: '/link',
    icon: <AiOutlineLink />,
    textShadow: false
  },
  {
    title: 'Informes y facturacíón',
    route: '/inform',
    icon: <PiNewspaperClippingThin />,
    textShadow: false
  },
  {
    title: 'Planes de subscripción',
    route: '/subscription',
    icon: <RiMoneyDollarCircleLine />,
    textShadow: false
  }
];
