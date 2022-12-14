import Button from "./sidebarBtn";

import exit from "../../../public/admin-panel/icons/exit.svg";
import plus from "../../../public/admin-panel/icons/plus.svg";
import home from "../../../public/admin-panel/icons/home.svg";
import devices from "../../../public/admin-panel/icons/devices.svg";

export default function Sidebar(props : any) {
	return <nav>
		<div className="nav--heading">
			{/*<div className="nav--heading--photo-wrapper">
				<img src="https://upload.wikimedia.org/wikipedia/ru/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg" alt=""/>
			</div>
			<h3 className="nav--heading--username">
				{props.username || "Username"}
			</h3>*/}
			<p className="nav--heading--logo">Foco</p>
		</div>
		<div className="nav--body">
			<Button buttonContent="Home" buttonIcon={home} href="/admin"/>
			<Button buttonContent="Devices" buttonIcon={devices} href="/admin/devices"/>
		</div>
		<div className="nav--footer">
			<Button buttonContent="Exit" buttonIcon={exit} href="/"/>
		</div>
	</nav>
}