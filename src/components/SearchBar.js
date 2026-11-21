
function SearchBar(props){
    return(
        <div className="search_box">
            <input  type="text" placeholder="Enter city name..." value={props.city}onChange={props.handleChange}/>
            <button onClick={props.handleSearch}>Search  </button>
        </div>
    )
}

export default SearchBar
