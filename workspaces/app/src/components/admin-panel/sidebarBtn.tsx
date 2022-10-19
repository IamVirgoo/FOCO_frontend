import {Link} from "react-router-dom";

export default function Button(props : any) {
	return <Link to={props.href}>
		<p className="sidebar-button">
			<img src={props.buttonIcon || ""} alt=""/>
			{props.buttonContent || ""}
		</p>
	</Link>
}