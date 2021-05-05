import React from 'react';
import SearchBar from './app/SearchBar.tsx'
import SearchResult from './app/SearchResult.tsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    };

    handleSearchTextChange(searchText) {
        this.setState({
            searchText: searchText
        });
    };

    render() {
        return (
            <div>
                <SearchBar 
                    searchText = {this.state.searchText}
                    onSearchTextChange = {this.handleSearchTextChange}
                />
                <SearchResult 
                    searchText = {this.state.searchText}
                />
            </div>
        )
    }
}

export default App;
