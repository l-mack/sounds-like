import './search-box.styles.scss'

const SearchBox = ({submitHandler, onChangeHandler, artistSearch}) => {

      return (

        <section className='formSection'>
        <form onSubmit={submitHandler}>
            <label 
                className='search-label' 
                for='artist-search'> 
                Search Artists:
            </label>
            <input 
                type="search" 
                name='search' 
                className='search-input' 
                placeholder='e.g. Nirvana' 
                onChange={onChangeHandler}
                value={artistSearch}>
            </input>
            <input 
                type="submit" 
                className='submit-button' 
                value="enter">
            </input>
        </form>
    </section>
      
    )


}

export default SearchBox;