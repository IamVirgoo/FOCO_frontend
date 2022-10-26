import Sidebar from "../../components/admin-panel/sidebar";
import DataCard from "../../components/admin-panel/dataCard";

import * as sdk from '../../devtool/sdk';
import * as types from '../../devtool/types';
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../stores/appStore";

const data = sdk.reducer(JSON, types.actionType.RECEIVED)

export default function Panel() {
	const dispath = useDispatch();
	const stat = useSelector((state : AppState) => state.statistic)
	console.log(stat.values);
	return <>
		<Sidebar/>
		<main>
			<h1 className="admin--heading">Overview</h1>
			<div className="admin--content">
				{
					Object.entries(data).map(
						(value) => <DataCard
							Name={value.map((value) => value.name)}
							dataIcon={value.map((value) => value.dataIcon)}
							statNumber={value.map((value) => value.statNumber)}
							metric={value.map((value) => value.metric)}
						/>
					)
				}
			</div>
		</main>
	</>
}