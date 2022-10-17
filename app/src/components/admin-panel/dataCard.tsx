import {animated, useSpring} from "react-spring";

export default function DataCard(props : any) {
	const anim = useSpring({
		from : {
			opacity: 0
		},
		to : {
			opacity: 1
		},
		config: {tension: 150}
	})
	return <animated.div className="data-card"
		style={{...anim}}
	>
		<h4 className="data-card--heading">
			{props.Name}
		</h4>
		<div className="data-card--body">
			<img src={props.dataIcon} alt=""/>
			<p>{props.statNumber}</p>
		</div>
		<p className="data-card--footer">
			{props.metric}
		</p>
	</animated.div>
}