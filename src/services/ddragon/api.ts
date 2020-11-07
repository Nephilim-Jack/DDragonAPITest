import axios from 'axios'

const ddragonBseUrl = 'http://ddragon.leagueoflegends.com/cdn'

const getLastApiVersion = async () => {
    const versionsUrl = 'https://ddragon.leagueoflegends.com/api/versions.json'
    const lastVersion = await axios.get<string[]>(versionsUrl).then(response => {
        return response.data[0]
    })
    return lastVersion
}

const DefaultAPI = () => {
    return axios.create({
        baseURL: ddragonBseUrl
    })
}

export const getAllChampionsNames = async () => {
    const version = await getLastApiVersion()
    const championsListPath = `/${version}/data/pt_BR/champion.json`

    const api = DefaultAPI()
    api.get(championsListPath).then(response => {
        return response.data
    }).catch(error => {
        console.log(error)
    })
}

export const getDetailOf = async (champion: string) => {
    const version = await getLastApiVersion()
    const championDetailPath = `/${version}/data/pt_BR/champion/${champion}.json`

    const api = DefaultAPI()
    api.get(championDetailPath).then(response => {
        return response.data
    }).catch(error => {
        console.log(error)
    })
}

export const getSplashArtUrlOf = (champion: string) => {
    return `${ddragonBseUrl}/img/champion/splash/${champion}_0.jpg`
}