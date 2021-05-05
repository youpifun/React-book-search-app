import React from 'react'

type SearchResultProps = {
    searchText: string
}

class SearchResult extends React.Component <SearchResultProps> {
    constructor(props: SearchResultProps) {
        super(props);
    }

    render() {
        return(
            <h1>{this.props.searchText}</h1>
        )
    }
}

export default SearchResult