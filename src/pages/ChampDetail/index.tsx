import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    Title
} from './styles'

interface RouteParams {
    championName: string
}

const ChampDetail = () => {
    const params: RouteParams = useParams()
    return (
        <>
            <Title>
                {params.championName}
            </Title>
        </>
    )
}

export default ChampDetail