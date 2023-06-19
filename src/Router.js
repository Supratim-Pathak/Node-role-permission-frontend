import DashboardPage from "./Pages/App/Dashboard/DashboardPage";
import LoginPage from "./Pages/Auth/LoginPage";
import Permission from "./Pages/App/Permissions/Permission";
import Role from "./Pages/App/Roles/Role";
import Layout from "./Components/Layouts/Layout";

const routes = [
    {path:'/login', element: <LoginPage/> },

    {
        path:'/', 
        element: <Layout/>,
        children:[
            {index:true, element: <DashboardPage/>},
            {path:'/role', element: <Role/> },
            {path:'/permission', element: <Permission/> },
        ]
    }
]

export default routes;