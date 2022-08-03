import axios from "axios"

const apiKey = '3ad87c5b4402ae7e0e0ff19da288d7d2'

const url = 'http://ws.audioscrobbler.com/2.0/'


export async function getSimilarArtist (artistSearch) {
        try {
                return await axios.get(`${url}/?method=artist.getsimilar&artist=${artistSearch}&api_key=${apiKey}&format=json`,

                        { params: { limit: 5 } })
        } catch (err) {
                console.log('catch error', err)
        }

}

export async function getArtistDetails (artistSearch) {
        try {
                return await axios.get(`${url}?method=artist.getinfo&artist=${artistSearch}&api_key=${apiKey}&format=json`)
        }

        catch (err) {
                console.log(err)
        }

}