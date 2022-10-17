import React,{useEffect, useState} from 'react'

const useScreensizeHook = () => {
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
  return mobileText
}

export default useScreensizeHook