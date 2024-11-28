import {createBrowserRouter} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

const remoteCRouters = [
    {
        path:"/c/remote-home",
        element : <Home />
    },
    {
        path:"/c/remote-about",
        element : <About/>
    },
    {
        path:"/c/remote-contact",
        element : <Contact/>
    }
]
export const routers = createBrowserRouter(remoteCRouters);

export default remoteCRouters;