import devices from "../../../public/admin-panel/icons/devices.svg";

export default function IndicatorCard(props: any) {
	return <div className="admin--indicators--enabling">
		<div className="admin--indicators--enabling--content">
			<div className="admin--indicators--enabling--content--wrapper">
				<img src={props.icon} alt=""/>
				<p className="admin--indicators--enabling--content--wrapper--count">{props.count}</p>
			</div>
			<p className="admin--indicators--enabling--content--title">{props.description}</p>
		</div>
	</div>
}