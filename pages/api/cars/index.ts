import fs from 'fs'
import path from 'path'
import { carType } from '../../../utils/types'
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

// imagem da massa de dados de testes está bugada, não é tentativa de invasão

// TODO : >>   Fix image upload    <<
// Open INSOMNIA to test the endpoint ( http://localhost:3000/api/ingredients ),  use   sampleData.json
// Expected behaviour : write the image to File System and store the image relative path in the database
const saveCar = async (req: NextApiRequest, res: NextApiResponse) => {
    const { brand, model, year, description, category, rentalPrice, imageFormat, imageData } = req.body;
 
	const nextNumber = Math.round(Math.random() * 99999);
	const timeStampSalt = `NaN${Date.now()}`;
	const dir = '/img/cars/';
	const filename = `vehicle_${timeStampSalt}_${nextNumber.toString()}.jpg`;
	const buffer = Buffer.from(imageData, 'base64');
	const filePath: fs.PathLike = path.resolve(`./public${dir}`, filename);
	console.log(`FilePath is ${filePath}`);
	fs.open(filePath, "w", (err, fd) => {
		fs.write(fd, buffer, 0, buffer.length, (err, writtenBytes, buffer) => {
			console.log(`Wrote ${writtenBytes} bytes to file`);
		});
	});

	const img: string = dir + filename;
	const newCar: carType = { brand, model, year, img, description, category, rentalPrice };

    prisma.car.create({ data: newCar })
    .then((result) => res.send(result))
	.catch((error) => res.status(500).send("Error: " + error.message))
}

const getCars = async (req: NextApiRequest, res: NextApiResponse) => {
    prisma.car.findMany()
    .then((cars) => res.send(cars))
    .catch((error) => res.status(500).send("Error: " + error.message))
}
