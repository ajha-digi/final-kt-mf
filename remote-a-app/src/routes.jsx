import {createBrowserRouter} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import remoteCRouters from "remote_c_app/remoteCRouters"
const remoteARoutes = [
    {
        path:"/a/remote-home",
        element : <Home />
    },
    {
        path:"/a/remote-about",
        element : <About/>
    },
    {
        path:"/a/remote-contact",
        element : <Contact/>
    },
    ...remoteCRouters
];

export const routers = createBrowserRouter(remoteARoutes)

export default remoteARoutes;