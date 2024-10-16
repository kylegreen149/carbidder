function Search({updateSearchText, searchText}) {
    return (
        <>
            
            <input
                type="text"
                id="search"
                placeholder="Search Cars (Ex: 2012 Ford Explorer)"
                onChange={updateSearchText}
                value={searchText}
            />
        </>
    )
}

export default Search