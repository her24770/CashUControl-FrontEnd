import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const LoginView = lazy(()=> import("../layouts/Login.js"))

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Users = lazy(()=> import("../components/user/users.js"))
const ProfileUser = lazy(() => import("../components/user/profile.js"));
const UpdateUser = lazy(() => import("../components/user/userUpdate.js"));
const HistoryFinances = lazy(()=>import("../components/finance/historyFinances.js"))
const AddIngreso = lazy(()=>import("../components/finance/addIngreso.js"))
const AddEgreso = lazy(()=>import("../components/finance/addEgreso.js"))
const Recompensas = lazy(()=>import("../components/recompensas/insignias.js"))
const AddMeta = lazy(()=>import("../components/metas/addMeta.js"))
const Metas = lazy(()=>import("../components/metas/metas.js"))
const UpdateMeta = lazy(()=>import("../components/metas/updateMeta.js"))
const AddConsejos = lazy(()=>import("../components/consejos/addConsejo.js"))
const Consejos = lazy(()=>import("../components/consejos/consejos.js"))

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <LoginView />
  },
  {
    path: "/home",
    element: <FullLayout />,
    children: [
      { path: "", element: <Navigate to="starter" /> },
      { path: "starter", element: <Starter /> },
      { path: "profile",element:<ProfileUser/>},
      { path: "users", element:<Users/>},
      { path: "updateUser",element:<UpdateUser/>},
      { path: "historyFinances",element:<HistoryFinances/>},
      { path: "addIngreso", element:<AddIngreso/>},
      { path: "addEgreso", element:<AddEgreso/>},
      { path: "recompensas", element:<Recompensas/>},
      { path: "addMeta", element:<AddMeta/>},
      { path: "metas", element:<Metas/>},
      { path: "updateMeta", element:<UpdateMeta/>},
      { path: "addConsejos", element:<AddConsejos/>},
      { path: "consejos", element:<Consejos/>},

      { path: "about", element: <About /> },
      { path: "alerts", element: <Alerts /> },
      { path: "badges", element: <Badges /> },
      { path: "buttons", element: <Buttons /> },
      { path: "cards", element: <Cards /> },
      { path: "grid", element: <Grid /> },
      { path: "table", element: <Tables /> },
      { path: "forms", element: <Forms /> },
      { path: "breadcrumbs", element: <Breadcrumbs /> },
    ],
  }
];


export default ThemeRoutes;
