import Home from "./Home"
import About from "./About"

const routes = [
    {
      path: "/",
      component: Home,
      exact: true,
      loadData: Home.getSomeData
    },
    {
        path: "/about",
        exact: true,
        component: About,
      }
    // etc.
  ];

  export default routes