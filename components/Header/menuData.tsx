import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 4,
    title: "Service",
    path: "/service",
    newTab: false,
  },
  {
    id: 5,
    title: "Training",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Embedded systems",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "AI& Machine Learning",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Embedded software",
        path: "/blog",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
