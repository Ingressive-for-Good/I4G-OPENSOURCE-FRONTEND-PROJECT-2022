import chatIcon from '../icons/Chat.svg'
import dashboardIcon from '../../assets/icons/dashboard.svg'
import helpIcon from '../icons/help.svg'
import wishlistIcon from '../icons/wishlistIcon.svg'
import productIcon from '../icons/box.svg'
import logoutIcon from '../icons/logout.svg'
import profileIcon from '../icons/profile.svg'

export const data = [
  {
    id: 1,
    image: "../images/image1.png",
    nav: "../images/vector2.png",
    discription: "Workspace Equipment",
    category: "Product Category",
    price: "₦25,000.00",
    available: "Unavailable",
    icon: "../images/trash-can.png",
  },
  {
    id: 2,
    image: "../images/image2.png",
    nav: "../images/vector2.png",
    discription: "Workspace Equipment",
    category: "Product Category",
    price: "₦25,000.00",
    available: "Unavailable",
    icon: "../images/trash-can.png",
  },
  {
    id: 3,
    image: "../images/image3.png",
    nav: "../images/vector2.png",
    discription: "Workspace Equipment",
    category: "Product Category",
    price: "₦25,000.00",
    available: "Unavailable",
    icon: "../images/trash-can.png",
  },
  {
    id: 4,
    image: "../images/image4.png",
    nav: "../images/vector2.png",
    discription: "Workspace Equipment",
    category: "Product Category",
    price: "₦25,000.00",
    available: "Unavailable",
    icon: "../images/trash-can.png",
  },
];
export const nav = [
  {
    id: 1,
    image: "../images/element-4.png",
    name: "Dashboard",
  },
  {
    id: 2,
    image: "../images/chat.png",
    name: "Messages",
  },
  {
    id: 3,
    image: "../images/box.png",
    name: "Products",
  },
  {
    id: 4,
    image: "../images/wishlist.png",
    name: "Wishlist",
  },
  {
    id: 5,
    image: "../images/Group.png",
    name: "Help & Support",
  },
  {
    id: 6,
    image: "../images/logout.png",
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
    text: 'Dashboard',
    icon: dashboardIcon,
    link: '/admin/dashboard'
  },
  {
    id: 3332,
    text: 'Messages',
    icon: chatIcon,
    link: '/admin/messages',
  },
  {
    id: 3233,
    text: 'Products',
    icon: productIcon,
    link: '/admin/products',
  },
  {
    id: 323243,
    text: 'Users',
    icon: helpIcon,
    link: '/admin/users',
  }, 
  {
    id: 322,
    text: 'Profile',
    icon: profileIcon,
    link: '/admin/profile',
  }
]