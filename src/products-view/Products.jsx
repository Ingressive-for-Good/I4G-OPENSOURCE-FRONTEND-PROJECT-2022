import React from 'react'
import ProductDesktop from './ProductDesktop';
import ProductMobile from './ProductMobile';
import {useState, useEffect} from 'react'


const Products = () => {

    const [mobileText, setMoblieText] = useState(getWindow())
    // const [isEmpty, setIsEmpty] = useState(true)

    function getWindow () {
        const {innerWidth} = window
        if(innerWidth > 1280){
            return false
        }else{
            return true
        }
    }

    useEffect(() => {
        //check for screen size
        const switchView = () => {
            setMoblieText(getWindow())
        } 
        window.addEventListener('resize', switchView)
        return () => {
            window.removeEventListener('resize', switchView)
        }
    },[])
    

  return (
    <div>
        {mobileText ? (<ProductMobile mobileText={mobileText}/>) :
            (<ProductDesktop/>)
        }
    </div>
  )
}

export default Products