import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage";

const routes = createBrowserRouter([{
    path: "/",
    element: <Main/>,
    children:[
        {
            path: "/",
            element: <HomePage/>
        }
    ]
}])

export default routes;