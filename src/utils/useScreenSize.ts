import { useState, useEffect } from "react"

export const useScreenSize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleDetermineScreenSize = () => {
           setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleDetermineScreenSize);

        return () => {window.removeEventListener('resize', handleDetermineScreenSize)}
    }, [])

    return {windowWidth}
}