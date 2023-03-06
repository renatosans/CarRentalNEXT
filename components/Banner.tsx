import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


type props = {
  title: string;
  offerings: string;  
}


const Banner = ({title, offerings, children}: React.PropsWithChildren<props>) => {
    return (
    <>
      <div className={styles.ad}>
        <div className={styles.ad_column}>
          <h2>{title}</h2>
          <p>
            We believe that our customers deserve a good experince during trip.
            Our goal is to create responsible filmmakers who care about the world around them and who make
            it a point to give back to their communities. 
            You can see it! We have an open kitchen which means all the action is there
            and you can enjoy it when sitting on your table.<br/><br/>
            {offerings}<br/><br/>
            Of course we do! Actually we have really special ones, whic. Come and try!
          </p>
        </div> 
        <div className={styles.ad_column}>
          <Image src='/img/trip.jpg' alt='ad' layout="fill" objectFit='cover' />
        </div>
      </div>
    </>
    )
}

export default Banner
