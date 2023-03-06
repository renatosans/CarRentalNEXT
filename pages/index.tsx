import Head from 'next/head'
import { carType } from '../utils/types'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import Draggable from 'react-draggable'
import { Button, Dialog } from '@mui/material'
import Slogan from '../components/Slogan'
import Banner from '../components/Banner'
import CarList from '../components/CarList'
import CarForm from '../components/CarForm'
import toast, { Toaster } from "react-hot-toast"


export default function Home() {
  const [open, setOpen] = useState(false);
  const [cars, setCars] = useState<carType[]>();

  useEffect(() => {
    fetch('api/cars')
    .then(resp => resp.json())
    .then(resultSet => setCars(resultSet))
    .catch(error => console.error(error))
  }, []);

  const toggle = () => {
    setOpen(current => !current);
  }

  const addCar = () => {
    setOpen(true);
  }

  const addCustomer = () => {
    toast.success(`NEW customer`);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Car Rental</title>
        <meta name="description" content="Best Deal Guarantee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster/>
			<Draggable>
        <Dialog open={open} onClose={toggle} BackdropProps={{ style: { backgroundColor: "transparent" } }} >
          <CarForm dialogRef={{ toggle }} />
        </Dialog>
			</Draggable>

      <video preload="auto" autoPlay loop muted><source src='/video.mp4' type="video/mp4"/></video>
      <Slogan message='For memorable trips'>The cheapest rates</Slogan>
      <div className={styles.actions}>
        <button className={styles.button} onClick={addCar}>Add Car</button>
        <button className={styles.button} onClick={addCustomer}>Add Customer</button>
      </div>
      <CarList items={cars} desc={'Car for rent. Available'} />
      <Banner title='Our mission' offerings='🚗 Car rental 🔧 Services 📝 Info'>
        Provide the best experience to our customers
      </Banner>
    </div>
  )
}
