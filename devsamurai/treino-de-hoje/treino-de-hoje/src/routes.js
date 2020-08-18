import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./pages/Main";
import Book from "./pages/Book";
import Disp from "./pages/Disp";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Book,
      Disp
    },{
      initialRouteName: "Main",
      backBehavior: "history"
    }
  )
);

export default Routes;