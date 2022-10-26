export function getImg(name : string) {
	switch (name) {
		case "Humidity" : return "../../public/admin-panel/icons/drop.svg";
		case "Temperature" : return "../../public/admin-panel/icons/capsule.svg";
		case "Luminosity" : return "../../public/admin-panel/icons/sun.svg";
	}
}

export function getMetric(name : string) {
	switch (name) {
		case "Humidity" : return "Percent (%)";
		case "Luminosity" : return "Percent (%)";
		case "Temperature" : return "Celsius degree";
	}
}