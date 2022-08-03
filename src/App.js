import { useState, useEffect } from 'react'

import Header from './components/header/header.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'
import Preloader from './components/preloader/preloader.component.jsx'
import ArtistDisplay from './components/artist-display/artist-display.component.jsx'
import Footer from './components/footer/footer.component.jsx'

import { getSimilarArtist, getArtistDetails } from './services/get-artists.js'

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [similarArtists, setSimilarArtists] = useState([])
  const [artist, setArtist] = useState('')
  const [tags, setTags] = useState([])
  const [artistSearch, setAristSearch] = useState('')
  const [errorState, setErrorState] = useState('')
  const [loading, setLoading] = useState('')

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  useEffect(()=> {

    if (artistSearch === '') {
      return 
    }

    setLoading(true)

    setTimeout(() => {
      setLoading(false);
      console.log('loading')
    }, 2500)
    
    getSimilarArtist(artistSearch).then(resp => {
      try {
        const similarArtistsArray = resp.data.similarartists.artist
        setSimilarArtists(similarArtistsArray)
      } catch (err) {
        setErrorState('Oops!  Something went wrong.  Please try again.')
        setSimilarArtists([])
      }
    })

    getArtistDetails(artistSearch).then(resp => {
      try {
        const artistDetails = resp.data.artist
        if (artistDetails === undefined) setErrorState('Oops!  Something went wrong.  Please try again.')
        setArtist(artistDetails.name)
        setTags(artistDetails.tags.tag)

      } catch (err) {
        setErrorState('Oops!  Something went wrong.  Please try again.')
        setArtist('')
        setTags([])
      }
    })

    }, [artistSearch])

  const handleSubmit = (event) => {
      event.preventDefault()
      setAristSearch(searchField)
      setSearchField('')
      setErrorState('')
    }

  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <main>
          <SearchBox 
            submitHandler={ handleSubmit } 
            onChangeHandler={ onSearchChange } 
            searchField={searchField}/>
          <> 
            { loading === true ? <Preloader /> : <ArtistDisplay
              similarArtists={ similarArtists }
              artist={ artist }
              tags={ tags }
              errorState={ errorState } /> }
          </> 
        </main>
        <Footer />
      </div>
    </div>
    
  )
}

export default App
