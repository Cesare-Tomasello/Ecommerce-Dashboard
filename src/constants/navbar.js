import {
  GrHomeRounded,
  GrList,
  GrRobot,
  GrCreditCard,
  GrUser,
} from "react-icons/gr";

export const navBarLinks = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <GrHomeRounded />,
  },
  {
    id: 2,
    label: "Categories",
    route: "categories",
    icon: <GrList />,
  },
  {
    id: 3,
    label: "Products",
    route: "products",
    icon: <GrRobot />,
  },
  {
    id: 4,
    label: "Orders",
    route: "orders",
    icon: <GrCreditCard />,
  },
  {
    id: 5,
    label: "User",
    route: "user",
    icon: <GrUser />,
  },
];
