import React from 'react'
import '../styles/SearchResult.css'
type SearchResultProps = {
    searchResult: Array <any>
}

class SearchResult extends React.Component <SearchResultProps> {
    constructor(props: SearchResultProps) {
        super(props);
    }

    render() {
        return(
            <div className="resultBlock hidden" >
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