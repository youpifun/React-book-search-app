import React from 'react';

type searchBarProps = {
    onSearchTextChange: Function
}

class SearchBar extends React.Component <searchBarProps> {
    render() {
        return (
            <input
                id="searchInput"
                type="text"
                placeholder="Search"
                onInput={this.props.onSearchTextChange.bind(this)}
            />
        )
    }
}



export default SearchBar;