import {Link} from "react-router-dom";

export default function Button(props : any) {
	return <Link to={props.href}>
		<div className="sidebar-button">
			<img src={props.buttonIcon || ""} alt=""/>
		</div>
	</Link>
}