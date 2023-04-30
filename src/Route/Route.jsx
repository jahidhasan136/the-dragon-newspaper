import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categories from "../Pages/Home/Categories/Categories";
import NewsLayout from "../Layout/NewsLayout";
import SingleNews from "../Share/SingleNews/SingleNews";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Terms from "../Pages/Terms/Terms";
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
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
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
                loader: ({ params }) => fetch(`https://the-dragon-newspaper-server-nurmorshed7987-gmailcom.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><SingleNews></SingleNews></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-dragon-newspaper-server-nurmorshed7987-gmailcom.vercel.app/news/${params.id}`)
            }
        ]
    }
]);

export default router;