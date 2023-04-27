import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categories from "../Pages/Home/Categories/Categories";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Share/News/News";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'category/:id',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <News></News>,
            }
        ]
    }
]);

export default router;