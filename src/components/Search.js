function Search({updateSearchText, searchText}) {
    return (
        <div className="searchbar">
            <span htmlFor="search">Search Cars: </span>
            <input
                type="text"
                id="search"
                placeholder="Ex: 2012 Ford Explorer"
                onChange={updateSearchText}
                value={searchText}
            />
        </div>
    )
}

export default Search