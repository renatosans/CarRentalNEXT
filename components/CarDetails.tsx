import Image from 'next/image'
import { carType } from '../utils/types'
import styles from '../styles/CarDetails.module.scss'


type props = {
  car: carType;
  currency: string;
  adv: string;
}

const CarDetails = ({car, currency, adv}: props) => {

  const getInfo = (car: carType) => {
    return `${car.brand} ${car.model} ${car.year}`;
  }

  return (
    <div className={styles.container}>
      <Image src={car.img} alt={getInfo(car)} width={250} height={250} />
      <h1 className={styles.title}>{getInfo(car)}</h1>
      <span className={styles.price}>{car.rentalPrice} {currency}</span>
      <p className={styles.desc}>{adv} {car.description}</p>
    </div>
  )
}

export default CarDetails
