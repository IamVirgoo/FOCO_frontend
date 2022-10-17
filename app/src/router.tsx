import {createBrowserRouter} from "react-router-dom";
import Index from "./pages/landing";
import AppOutlet from "./layout/AppOutlet";
import Panel from "./pages/admin-panel/adminPanel";
import Error from "./pages/ErrorPage";
import Devices from "./pages/admin-panel/devices";
import Login from "./pages/admin-panel/login";
import Register from './pages/admin-panel/register';

export const Route = createBrowserRouter([
	{
		index: true,
		path: '/',
		element: <Index />,
		errorElement: <Error />,
	},
	{
		path: '/login',
		element: <Login/>
	},
	{
		path: '/register',
		element: <Register/>
	},
	{
		path: "admin",
		element: <Panel/>,
		/*children: [
			{
				index: true,
				element: <Devices />
			},
			{
				path: "/panel",
				element: <Panel />
			}
		]*/
	},
	{
		path: 'devices',
		element: <Devices/>
	}
], {
	basename: "/"
});