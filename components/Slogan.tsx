import React from 'react'
import styles from '../styles/Home.module.scss'


type props = {
  message: string;
}

const Slogan = ({message, children}: React.PropsWithChildren<props>) => {
    return (
        <div className={styles.gradient_text}>
            <div className={styles.txt}>
                <h1>{message}</h1>
            </div>
            <div className={styles.hero_lines}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Slogan
