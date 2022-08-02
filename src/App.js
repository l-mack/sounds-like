import { useState, useEffect } from 'react';

import Header from './components/header/header.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx';
import ArtistDisplay from './components/artist-display/artist-display.component.jsx';

import { getSimilarArtist, getArtistDetails } from './services/get-artists.js'

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [similarArtists, setSimilarArtists] = useState([])
  const [artist, setArtist] = useState('')
  const [tags, setTags] = useState([])
  const [artistSearch, setAristSearch] = useState('')

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  useEffect(()=> {

    if (artistSearch === '') {
      return 
    }
    getSimilarArtist(artistSearch).then(resp => {
      console.log('similar arist array', resp.data.similarartists.artist)
      setSimilarArtists(resp.data.similarartists.artist)
    })

    getArtistDetails(artistSearch).then(resp => {
      console.log('artist details', resp.data.artist)
      setArtist(resp.data.artist.name)
      setTags(resp.data.artist.tags.tag)

    })
    
    }, [artistSearch])

  const handleSubmit = (event) => {
      event.preventDefault()

      setAristSearch(searchField)

      setSearchField('')


    }

    const artistList = similarArtists.map((artist, i) => {
      return (
        <li key={i} className='simArtistCard'>
        <h3 className='simArtistName'>{artist.name}</h3>
    </li>
      )
    })

  return (
    <div className='App'>
      <div className='wrapper'>
      
        <Header />

        <SearchBox submitHandler={handleSubmit} onChangeHandler={onSearchChange} searchField={searchField}/>

        <main>
              <ArtistDisplay artistList={artistList} artist={artist} tags={tags}/>
        </main>
        
      </div>
    </div>
    
    
  )


}

export default App;
