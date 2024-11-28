import {createBrowserRouter} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import remoteARoutes from "remote_a_app/remoteARouts";
import remoteBRoutes from "remote_b_app/remoteBRouters";
console.log("remoteRoutes", remoteBRoutes);

export const routers = createBrowserRouter([
    {
        path:"/",
        element : <Home />
    },
    {
        path:"/about",
        element : <About/>
    },
    {
        path:"/contact",
        element : <Contact/>
    },
    ...remoteARoutes,
    ...remoteBRoutes
])
