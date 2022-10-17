import chatIcon from "../icons/Chat.svg";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import helpIcon from "../icons/help.svg";
import wishlistIcon from "../icons/wishlistIcon.svg";
import productIcon from "../icons/box.svg";
import logoutIcon from "../icons/logout.svg";
import profileIcon from "../icons/profile.svg";
import image from "../icons/image1.png";
import image2 from "../icons/image2.png";
import image3 from "../icons/image3.png";
import image4 from "../icons/image4.png";
import trash from "../icons/trash-can.png";
import dashboard from "../icons/element-4.png";
import chat from "../icons/Chat.png";
import box from "../icons/box.png";
import logOut from "../icons/logout.png";
import group from "../icons/Group.png";
import wishlist from "../icons/wishlist.png";
export const data = [
  {
    id: 1,
    image: image,
    nav: "../images/vector2.png",
    discription: "Workspace Equipment",
    category: "Product Category",
    price: "₦25,000.00",
    available: "Unavailable",
    icon: trash,
  },
  {
    id: 2,
    image: image2,
    nav: "../images/vector2.png",
    discription: "Workspace Equipment",
    category: "Product Category",
    price: "₦25,000.00",
    available: "Unavailable",
    icon: trash,
  },
  {
    id: 3,
    image: image3,
    nav: "../images/vector2.png",
    discription: "Workspace Equipment",
    category: "Product Category",
    price: "₦25,000.00",
    available: "Unavailable",
    icon: trash,
  },
  {
    id: 4,
    image: image4,
    nav: "../images/vector2.png",
    discription: "Workspace Equipment",
    category: "Product Category",
    price: "₦25,000.00",
    available: "Unavailable",
    icon: trash,
  },
];
export const nav = [
  {
    id: 1,
    image: dashboard,
    name: "Dashboard",
  },
  {
    id: 2,
    image: chat,
    name: "Messages",
  },
  {
    id: 3,
    image: box,
    name: "Products",
  },
  {
    id: 4,
    image: wishlist,
    name: "Wishlist",
  },
  {
    id: 5,
    image: group,
    name: "Help & Support",
  },
  {
    id: 6,
    image: logOut,
    name: "Log Out",
  },
];
export const sideNav = [
  {
    id: 1,
    icon: dashboardIcon,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: chatIcon,
    text: "Messages",
  },
  {
    id: 3,
    icon: productIcon,
    text: "Products",
  },
  {
    id: 4,
    icon: wishlistIcon,
    text: "Wishlist",
  },
  {
    id: 5,
    icon: helpIcon,
    text: "Help & Support",
  },
];
export const adminNav = [
  {
    id: 231,
    text: "Dashboard",
    icon: dashboardIcon,
    link: "/admin/dashboard",
  },
  {
    id: 3332,
    text: "Messages",
    icon: chatIcon,
    link: "/admin/messages",
  },
  {
    id: 3233,
    text: "Products",
    icon: productIcon,
    link: "/admin/products",
  },
  {
    id: 323243,
    text: "Users",
    icon: helpIcon,
    link: "/admin/users",
  },
  {
    id: 322,
    text: "Profile",
    icon: profileIcon,
    link: "/admin/profile",
  },
];
