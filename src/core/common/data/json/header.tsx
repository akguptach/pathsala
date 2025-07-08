import { all_routes } from "../../../../feature-module/router/all_routes";

export const header = [
  {
    tittle: "Explore Schools",
    base: "home",
    showAsTab: false,
    separateRoute: true,
    menu: [
    ],
  },
  {
    tittle: "AddSchools",
    base: "AddSchools",
    showAsTab: false,
    separateRoute: true,
  },
  {
    tittle: "Compare",
    base: "instructor",
    base2: "student",
    showAsTab: false,
    separateRoute: true,
    menu: [

    ],
  },
  {
    tittle: "Add Resource",
    showAsTab: false,
    separateRoute: true,
    base: "pages",
    menu: [

    ],
  },
  {
    tittle: "Blog",
    showAsTab: false,
    separateRoute: true,
    base: "blog",
    menu: [

    ],
  },
];
