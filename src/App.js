import { useState, useEffect } from 'react';

import Header from './components/header/header.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx';

import { getSimilarArtist } from './services/get-artists.js'

const App = () => {

  const [searchField, setSearchField] = useState('')
  const artistSearch = searchField

  console.log('artist search', artistSearch)

  const [similarArtists, setSimilarArtists] = useState([])

  useEffect(()=> {
    // getSimilarArtist(artistSearch).then(artists => {
    //   setSimilarArtists(artists)
    // })
    if (artistSearch === '') {
      return 
    }

    getSimilarArtist(artistSearch)


      // fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artistSearch}&api_key=3ad87c5b4402ae7e0e0ff19da288d7d2&format=json`)
      // .then(response => console.log(response.json()))
      //.then((artists) => setArtists(artists));
    
    }, [artistSearch])

    
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)

    console.log('searchfield', searchField)
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      setSearchField('')


    }

  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <SearchBox submitHandler={handleSubmit} onChangeHandler={onSearchChange} artistSearch={artistSearch}/>
      </div>
    </div>
  )


}

export default App;
