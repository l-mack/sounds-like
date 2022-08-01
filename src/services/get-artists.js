import axios from "axios"

const apiKey = '3ad87c5b4402ae7e0e0ff19da288d7d2'

const url = 'http://ws.audioscrobbler.com/2.0/'


export async function getSimilarArtist (artistSearch) {
        return await axios.get(`${url}/?method=artist.getsimilar&artist=${artistSearch}&api_key=${apiKey}&format=json`, 
        
        { params: { limit: 5 } })
}

export async function getArtistDetails (artistSearch) {

        return await axios.get(`${url}?method=artist.getinfo&artist=${artistSearch}&api_key=${apiKey}&format=json`)

}