import { NextApiRequest, NextApiResponse } from "next";


export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method == "GET") {
		return res.status(200)
			.json({values: [
				{
					statisticTypeName: "Humidity",
					statisticNumber: 40.50
				},
				{
					statisticTypeName: "Temperature",
					statisticNumber: 29
				},
				{
					statisticTypeName: "Luminosity",
					statisticNumber: 52
				},
			]});
	}

	return res.status(505)
		.json({message: "method not allowed"})
}