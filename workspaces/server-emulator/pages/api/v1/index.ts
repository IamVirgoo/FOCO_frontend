import { NextApiRequest, NextApiResponse } from "next";

const debugTrace = (req: NextApiRequest) => {
	console.log(new Date().toUTCString(), req.headers, req.method);
}

export default (req: NextApiRequest, res: NextApiResponse) => {
	debugTrace(req);

	if (req.method == "GET") {
		return res.status(200)
			.setHeader("Access-Control-Allow-Origin", "*")
			.setHeader("Access-Control-Allow-Headers", "*")
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

	if (req.method == "OPTIONS") {
		return res.status(200)
					.json(null);
	}

	return res.status(505)
		.json({message: "method not allowed"})
}