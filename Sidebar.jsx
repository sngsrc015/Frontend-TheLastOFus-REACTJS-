import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
  
export const SidebarData = [
  {
    title: "About Us",
    path: "/services",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
   
  },
  {
    title: "Services",
    path: "/services",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
   
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Events",
    path: "/events",
    icon: <FaIcons.FaEnvelopeOpenText />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];