import React from 'react'

type props = {
    returnClick: () => void,
    menuClick: () => void,
    cartClick: () => void,
    showCart: boolean,
}

const Navbar:React.FC<props> = ({returnClick, menuClick, cartClick, showCart=false}) => {
    return (
        <>
        </>
    )
}


export default Navbar
