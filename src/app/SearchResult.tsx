import React from 'react'

type SearchResultProps = {
    searchResult: Array <any>
}

class SearchResult extends React.Component <SearchResultProps> {
    constructor(props: SearchResultProps) {
        super(props);
    }

    render() {
        return(
            <div className="results">
                {this.props.searchResult.map((element : any, index : number) => (
                    <div key={index}>
                        {element.title}
                    </div>
                ))}
            </div>
        )
    }
}
export default SearchResult