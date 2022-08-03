import { v4 as v4 } from 'uuid'

import './artist-display.styles.scss'

const ArtistDisplay = ({ similarArtists, artist, tags, errorState }) => {

    const artistList = similarArtists.map(artist => {
        return (
            <li key={v4()}>
          <h3>{artist.name}</h3>
      </li>
        )
      })

    const taglist = tags.map((item, index) => {
        return (
            <li key={v4()}>
                <div className='tag-flex-one' key={v4()}>
                    {index === 0 && <p className='tags'>{item.name}</p> }
                    {index === 1 && <p className='tags'>{item.name}</p> }
                </div>
                
                <div className='tag-flex-two' key={v4()}>
                    {index === 2 && <p className='tags'>{item.name}</p> }
                    {index === 3 && <p className='tags'>{item.name}</p> }
                </div>
                <>
                    { index < 3 ? <p className='after'></p> : '' }
                </>
            </li>
        )
      })

    return (
        <div className='results-flex'>
            <div>
                <>
                    { errorState !== '' ? <h3 className='error-state'>{errorState}</h3> 
                    : (!artist ? '': <h3 className='artist-details-name'>{artist}</h3>) }
                </>
                
                
                { errorState === '' ? <ul className='sim-artist-container'>{taglist}</ul> : ''}
            </div>
                { errorState === '' && artistList.length !== 0 ? <div>{artistList}</div> 
                : (artistList.length === 0 && artist !== '' && errorState === '' ? <h3 className='no-similar-artists'>Sorry,<br></br>no similar artits found.</h3> : '')}
        </div>
    )

}

export default ArtistDisplay