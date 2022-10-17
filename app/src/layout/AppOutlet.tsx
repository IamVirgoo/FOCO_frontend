import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin-panel/sidebar";

export default function AppOutlet() {
	return <>
		<Sidebar/>
		<Outlet/>
	</>
}