import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/index'
import ChampDetail from './pages/ChampDetail/index'

const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={HomePage} exact />
            <Route path='/detail/:championName' component={ChampDetail} />
        </BrowserRouter>
    )
}

export default Router