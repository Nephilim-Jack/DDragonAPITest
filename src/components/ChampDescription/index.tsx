import React from 'react'
import {
    ChampionDescription, DescriptionContainer,
    DescriptionInnerBar
} from './styles'

interface DataLore {
    lore: string,
    hidden: boolean
}

const Lore = (data: DataLore) => {
    return (
        <DescriptionContainer hidden={data.hidden}>
            <DescriptionInnerBar />
            <ChampionDescription >{data.lore}</ChampionDescription>
            <DescriptionInnerBar />
        </DescriptionContainer>
    )
}

export default Lore