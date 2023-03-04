import { prisma } from '../utils/connection'
import { allCars, allCustomers, allRents } from '../utils/seedData'


// run the command on terminal to populate data
// >  prisma db seed

async function main() {

    await prisma.car.createMany({ data: allCars })
    await prisma.customer.createMany({ data: allCustomers})
    // await prisma.rent.createMany({ data: allRents })
}

main()
.catch(async (e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
})
