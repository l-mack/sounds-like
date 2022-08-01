import { useState, useEffect, useRef} from 'react';

import Header from './components/header/header.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx';
import ArtistDisplay from './components/artist-display/artist-display.component.jsx';

import { getSimilarArtist } from './services/get-artists.js'

const App = () => {

  const [searchField, setSearchField] = useState('')
  const artistSearch = searchField
  const artistRef = useRef([])

  console.log('artist search', artistSearch)

  const [similarArtists, setSimilarArtists] = useState([])

  useEffect(()=> {

    if (artistSearch === '') {
      return 
    }

    getSimilarArtist(artistSearch).then(resp => {

      console.log('similar arist array', resp.data.similarartists.artist)
      setSimilarArtists(resp.data.similarartists.artist)


    })
    
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

    const artistList = similarArtists.map((artist, i)=> {
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

        <main className='resultsFlex'>

          <div className='searchResultCont'>
            <SearchBox submitHandler={handleSubmit} onChangeHandler={onSearchChange} artistSearch={artistSearch}/>
          </div>
          
          <div className='simArtistContainer'>
            <ArtistDisplay artistList={artistList} />
          </div>

          
        </main>
        
      </div>
    </div>
    
    
  )


}

export default App;
