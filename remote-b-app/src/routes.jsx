import {createBrowserRouter} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

const remoteBRouters = [
    {
        path:"/b/remote-home",
        element : <Home />
    },
    {
        path:"/b/remote-about",
        element : <About/>
    },
    {
        path:"/b/remote-contact",
        element : <Contact/>
    }
]
export const routers = createBrowserRouter(remoteBRouters);

export default remoteBRouters;