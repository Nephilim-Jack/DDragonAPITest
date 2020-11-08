import React, { useEffect, useState } from 'react'
import {
    ChampionImage,
    PageContainer, SearchContainer,
    SearchInput, ChampionImageContainer,
} from './styles'
import { getSplashArtUrlOf, getDetailOf } from '../../services/ddragon/api'
import { ChampionData } from '../../services/ddragon/interfaces'
import { FaSearch } from 'react-icons/fa'
import Lore from '../../components/ChampDescription/index'

const HomePage = () => {
    const [championName, setChampionName] = useState('')
    const [championData, setChampionData] = useState<ChampionData>()
    const [championImage, setChampionImage] = useState<string>()
    const [activeState, setActiveState] = useState(false)

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
        setActiveState(false)
        const changeChampionImage = () => {
            setChampionImage(getSplashArtUrlOf(championName))
        }
        changeChampionImage()
        loadChampionData()
        setTimeout(() => { setActiveState(true) }, 500)
    }, [championName])

    return (
        <PageContainer>
            <SearchContainer>
                <SearchInput type="text" onKeyPress={event => { handleInputChange(event) }} />
                <FaSearch />
            </SearchContainer>
            {championData ?
                <>
                    <ChampionImage hidden={!activeState} src={championImage} alt={`Imagem do(a) ${championName}`} width="100%" />
                    <ChampionImageContainer />

                    <Lore lore={championData.lore} hidden={!activeState} />
                </>
                : null}
        </PageContainer>
    )
}
// on main

export default HomePage