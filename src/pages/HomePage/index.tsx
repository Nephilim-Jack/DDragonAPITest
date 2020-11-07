import React, { useEffect, useState } from 'react'
import { WelcomeMessage } from './styles'
import { getSplashArtUrlOf, getDetailOf } from '../../services/ddragon/api'
import { ChampionData } from '../../services/ddragon/interfaces'


const HomePage = () => {
    const [championName, setChampionName] = useState('')
    const [championData, setChampionData] = useState<ChampionData | any>({})
    const [championImage, setChampionImage] = useState<string>('')

    const loadChampionData = async () => {
        const champData = (await getDetailOf(championName)).data
        setChampionData(champData)
    }

    const handleInputChange = (event: any) => {
        if (event.key === 'Enter') {
            if (championName !== event.target.value) {
                setChampionName(event.target.value)
            }
        }
    }

    useEffect(() => {
        setChampionImage(getSplashArtUrlOf(championName))
        loadChampionData()
    }, [championName])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <WelcomeMessage>Data Dragon Api Test</WelcomeMessage>
            <input type="text" onKeyPress={event => { handleInputChange(event) }} />
            {championImage ? <img src={championImage} alt={`Imagem do(a) ${championName}`} width="100%" /> : null}
            {championData ? <p>{championData.lore}</p> : null}
        </div>
    )
}
// on main

export default HomePage