import { useSelector } from "react-redux";
import { AppState } from "../../stores/appStore";

import Sidebar from "../../components/admin-panel/sidebar";
import DataCard from "../../components/admin-panel/dataCard";

import * as sdk from '../../devtool/sdk';
import { getStat } from "../../middleware/dataMiddleware";

export default function Panel() {
	const stat = useSelector((state : AppState) => state.statistic)
	const { data, error, isLoading } = getStat();
	return <>
		{
			isLoading ? 
				<h1>Loading</h1> : 
				<script>console.log(data)</script>
		}
		<Sidebar/>
		<main>
			<h1 className="admin--heading">Overview</h1>
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
			</div>
		</main>
	</>
}