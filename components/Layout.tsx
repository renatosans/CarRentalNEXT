import Footer from './Footer'
import Navbar from './Navbar'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'


const Layout = ({children}: React.PropsWithChildren<{}>) => {

    const [showCart,setShowCart] = useState(false);

    const returnClick = () => {
        toast.success("Goback click");
    }

    const menuClick = () => {
        toast.success("Menu click");
    }

    const cartClick = () => {
        setShowCart(!showCart);
    }

    return (
        <>
            <Toaster/>
            <Navbar returnClick={returnClick} menuClick={menuClick} cartClick={cartClick} showCart={showCart}/>
             {children}
            <Footer/>
        </>
    )
}


export default Layout
