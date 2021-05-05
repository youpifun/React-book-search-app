import React from 'react';

type searchBarProps = {
    searchText: string,
    onSearchTextChange: Function
}

class SearchBar extends React.Component <searchBarProps> {
    constructor(props: searchBarProps) {
        super(props);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleSearchTextChange (e: any) {
        this.props.onSearchTextChange(e.target.value);
    }

    render() {
        return (
            <input 
                type="text"
                placeholder="Search"
                value={this.props.searchText}
                onChange={this.handleSearchTextChange}
            />
        )
    }
}



export default SearchBar;