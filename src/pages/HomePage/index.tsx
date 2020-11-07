import React, { useEffect, useState } from 'react'
import { WelcomeMessage } from './styles'
import { getSplashArtUrlOf } from '../../services/ddragon/api'

const HomePage = () => {
    const champion = 'Nasus'
    const [championImage, setChampionImage] = useState<any>()
    useEffect(() => {
        setChampionImage(getSplashArtUrlOf(champion))
    }, [])

    return (
        <>
            <WelcomeMessage>Data Dragon Api Test</WelcomeMessage>
            {championImage ? <img src={championImage} alt={`Imagem do(a) ${champion}`} /> : null}

        </>
    )
}
// on main

export default HomePage