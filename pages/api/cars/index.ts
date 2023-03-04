import { prisma } from '../../../utils/connection'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "POST": {
			return saveCar(req, res);
		}
		case "GET": {
			return getCars(req, res);
		}
	}
}

const saveCar = async (req: NextApiRequest, res: NextApiResponse) => {
    prisma.car.create({ data: req.body })
    .then((result) => res.send(result))
	.catch((error) => res.status(500).send("Error: " + error.message))
}

const getCars = async (req: NextApiRequest, res: NextApiResponse) => {
    prisma.car.findMany()
    .then((cars) => res.send(cars))
    .catch((error) => res.status(500).send("Error: " + error.message))
}
