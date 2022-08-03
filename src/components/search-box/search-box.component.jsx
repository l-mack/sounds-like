import './search-box.styles.scss'

const SearchBox = ({ submitHandler, onChangeHandler, searchField }) => {

    return (
        <section>
            <form onSubmit={submitHandler} action="#">
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
                    value={searchField}>
                </input>
                <button 
                    type="submit" 
                    className='submit-button' 
                    value="enter">
                    Enter
                </button>
            </form>
        </section>
    )


}

export default SearchBox;