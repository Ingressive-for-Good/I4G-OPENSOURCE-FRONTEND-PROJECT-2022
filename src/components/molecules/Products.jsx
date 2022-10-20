import React from 'react'
import ProductDesktop from './ProductDesktop';
import ProductMobile from './ProductMobile';
import useScreensizeHook from './ScreensizeHook';


const ViewProducts = () => {

    const mobileText = useScreensizeHook()
    

  return (
    <div className=''>
        {mobileText ? (<ProductMobile mobileText={mobileText}/>) :
            (<ProductDesktop/>)
        }
    </div>
  )
}

export default ViewProducts