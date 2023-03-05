import { carType, customerType, rentType } from './types'


export const allCars: carType[] = [
    {
      brand: "Hyundai",
      model: "i30",
      year: 2016,
      img: "/img/cars/hyundai_i30.png",
      description: "1.8 MPI 16V GASOLINA 4P AUTOMATICO",
      category: "hatch",
      rentalPrice: 81
    },
    {
      brand: "Fiat",
      model: "cronos",
      year: 2021,
      img: "img/cars/fiat_cronos.png",
      description: "1.8 E.Torq Flex Precision AT6",
      category: "sedan",
      rentalPrice: 77,
    },
    {
      brand: "Toyota",
      model: "yaris",
      year: 2019,
      img: "/img/cars/toyota_yaris.png",
      description: "1.3 16V XL Multidrive",
      category: "hatch",
      rentalPrice: 84
    },
    {
      brand: "Volkswagen",
      model: "golf",
      year: 2017,
      img: "/img/cars/volkswagen_golf.png",
      description: "1.4 Tsi Highline Flex Aut.5p",
      category: "hatch",
      rentalPrice: 79
    },
    {
      brand: "Honda",
      model: "fit",
      year: 2019,
      img: "/img/cars/honda_fit.png",
      description: "1.5 LX 16V FLEX 4P AUTOMÁTICO",
      category: "hatch",
      rentalPrice: 76
    }
  ]

  export const allCustomers: customerType[] = [
    {
      firstName: "Herbert",  
      lastName: "Olga",
      birthDate: new Date("1982-11-10"),
      email:  "herbertolga@gmail.com.ca",
      phoneNumber: "99727701"
    }
  ]

  export const allRents: rentType[] = [
    {
      status: "Completed",
      startAt: new Date("2023-03-06"),
      endAt: new Date("2023-03-10"),
      vehicleId: -1,
      customerId: -1
    }
  ]
