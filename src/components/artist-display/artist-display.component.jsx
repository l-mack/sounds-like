import './artist-display.styles.scss'

const ArtistDisplay = ({ similarArtists, artist, tags }) => {

    const artistList = similarArtists.map((artist, i) => {
        return (
          <li key={i} className='simArtistCard'>
          <h3 className='simArtistName'>{artist.name}</h3>
      </li>
        )
      })

    const taglist = tags.map((item, index) => {
        return (
            <div>
                <div className='tagFlex1'>
                    { index === 0 && <p key={index} className='tags'>{item.name}</p> }
                    { index === 1 && <p key={index} className='tags'>{item.name}</p> }
                </div>
                
                <div className='tagFlex2'>
                    { index === 2 && <p key={index} className='tags'>{item.name}</p> }
                    { index === 3 && <p key={index} className='tags'>{item.name}</p> }
                </div>
                <>
                    { index < 3 ? <p className='after'></p> : '' }
                </>
            </div>
        )
      })

    return (
        <div className='resultsFlex'>
            <div className='searchResultCont'>
                <>
                    { !artist ? '' : <h3 className='artistDetailsName'>{artist}</h3> }
                </>
                

                <ul className='simArtistContainer'>{taglist}</ul>
                </div>
                <div className='simArtistMatchCont'>{artistList}</div>
        </div>
    )

}

export default ArtistDisplay