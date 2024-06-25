import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage";
import GamesPage from "../pages/GamesPage";
import ProjectPage from "../pages/ProjectPage";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const routes = createBrowserRouter([{
    path: "/",
    element: <Main/>,
    children:[
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/games",
            element: <GamesPage/>
        },
        {
            path: "/play",
            element: <ProjectPage />
        },
        {
            path: "/blog",
            element: <BlogPage />
        },
        {
            path: "/about",
            element: <AboutPage />
        },
        {
            path: "/contact",
            element: <ContactPage />
        },
        {
            path: "/privacy",
            element: <PrivacyPolicy />
        },
    ]
}])

export default routes;