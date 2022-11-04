import { useSelector } from "react-redux";
import { AppState } from "../../stores/appStore";

import DataCard from "../../components/admin-panel/dataCard";

import * as sdk from '../../devtool/sdk';
import { getStat } from "../../middleware/dataMiddleware";

import devices from "../../../public/admin-panel/icons/devices.svg";
import wifi from "../../../public/admin-panel/icons/wifi.svg";
import IndicatorCard from "../../components/admin-panel/indicatorCard";

export default function Panel(props: any) {
	const stat = useSelector((state : AppState) => state.statistic)
	const { data, error, isLoading } = getStat();
	return <>
		<main className="admin">
			<div className="admin--heading">
				<h1 className="admin--heading--hello">Hello, {props.username || "{User}"}</h1>
				<div className="admin--heading--user">
					<div className="admin--heading--user--photo-wrapper">
						<img src="https://upload.wikimedia.org/wikipedia/ru/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg" alt=""/>
					</div>
				</div>
			</div>
			<div className="admin--content">
				{
					stat.values.map(
						(value) => <DataCard 
							Name={value.statisticTypeName}
							dataIcon={sdk.getImg(value.statisticTypeName)}
							statNumber={value.statisticNumber}
							metric={sdk.getMetric(value.statisticTypeName)}
						/>
					)
				}
				{/*{
				isLoading ? 
					<h1>Loading</h1> :
					<h1>{data?.values.at(0)?.statisticNumber}</h1>
				}*/}
			</div>
			<div className="admin--indicators">
				<IndicatorCard
					icon={devices}
					count={20}
					description={"Devices connected"}
				/>
				<IndicatorCard
					icon={wifi}
					count={20}
					description={"Devices are online"}
				/>
			</div>
		</main>
	</>
}