
  export type carType = {
    brand: string;
    model: string;
    year: number;
    img: string;
    description: string;
    category: string;
    rentalPrice: number;
  }

  export type customerType = {
    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    phoneNumber: string;
  }

  export type rentType = {
    status: string;
    startAt: Date;
    endAt: Date;
    vehicleId: number;
    customerId: number;
  }
