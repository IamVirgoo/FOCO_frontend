import Sidebar from "../../components/admin-panel/sidebar";
import DataCard from "../../components/admin-panel/dataCard";

import * as sdk from '../../devtool/sdk';
import * as types from '../../devtool/types';

const data = sdk.reducer(JSON, types.actionType.RECEIVED)

export default function Panel() {
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