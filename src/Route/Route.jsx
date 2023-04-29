import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categories from "../Pages/Home/Categories/Categories";
import NewsLayout from "../Layout/NewsLayout";
import SingleNews from "../Share/SingleNews/SingleNews";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: "/category",
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <SingleNews></SingleNews>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;