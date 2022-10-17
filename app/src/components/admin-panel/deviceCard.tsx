import {useState} from "react";
import {animated, useSpring} from "react-spring";

export default function DeviceCard(props : any) {
	const [enableState, setEnableState] = useState("Enabled");
	const [color, setColor] = useState("#6839EF")
	const load = useSpring({
		from : {
			opacity: 0,
			y : props.time
		},
		to : {
			opacity: 1,
			y: 0
		},
		config : {tension: 150}
	})
	return <animated.div className={"device-card"} style={{...load}}>
		<p className={"device-card--icon"}>Icon</p>
		{/*<img src={props.icon} alt=""/>*/}
		<div className="device-card--content">
			<h2 className="device-card--content--name">{props.name || "Device name"}</h2>
			<button className="device-card--content--btn" onClick={(e) => {
				if (enableState == "Disabled") {
					setEnableState("Enabled")
					setColor("#6839EF")
				} else {
					setColor("#21232E")
					setEnableState("Disabled")
				}
			}} style={
				{
					backgroundColor: color
				}
			}>{enableState}</button>
		</div>
	</animated.div>
}