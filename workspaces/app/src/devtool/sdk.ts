export function getImg(name : string) {
	switch (name) {
		case "Humidity" : return "../../public/admin-panel/icons/humidity.svg";
		case "Temperature" : return "../../public/admin-panel/icons/temperature.svg";
		case "Luminosity" : return "../../public/admin-panel/icons/sun.svg";
		case "Voltage" : return "../../public/admin-panel/icons/voltage.svg"
	}
}

export function getMetric(name : string) {
	switch (name) {
		case "Humidity" : return "%";
		case "Luminosity" : return "%";
		case "Temperature" : return "";
		case "Voltage" : return "V"
	}
}