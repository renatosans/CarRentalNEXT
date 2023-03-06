import CarDetails from './CarDetails'
import { carType } from '../utils/types'
import styles from '../styles/CarList.module.scss'


type props = {
  items: carType[] | undefined;
  desc: string;
}

const CarList = ({items, desc}: props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Deal Guarantee</h1>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.wrapper}>{
        (items)
        ? items.map((car: carType) => <CarDetails car={car} currency={"U$"} adv={""} />)
        : <p>No item to display</p>
      }
    </div>
    </div>
  )
}

export default CarList
