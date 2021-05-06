import React from 'react';
import SearchBar from './app/SearchBar.tsx'
import SearchResult from './app/SearchResult.tsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchResult: []
        }
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.getBooks = this.getBooks.bind(this);
    };

    handleSearchTextChange(searchText) {
        this.setState({
            searchText: searchText
        });
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && ((this.lastCall - previousCall) <= 1000)) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => this.getBooks(searchText), 1000);
        
    };

    getBooks(searchText) {
        let container = document.getElementsByClassName('resultBlock')[0];
        if (!searchText) {
            container.classList.toggle('hidden');
            return
        };
        container.classList.toggle('hidden');
        let url = "http://openlibrary.org/search.json?title=";
        url += encodeURI(searchText.trim());
        url += "*&fields=title,author_name,cover_i,publish_year,isbn";
        let result = [];
        fetch(url).then(response => response.json()).then(data => {
            data.docs.map((el,i) => {
                result[i] = el;
            });
            this.setState({
                searchResult: result
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar 
                    searchText = {this.state.searchText}
                    onSearchTextChange = {this.handleSearchTextChange}
                />
                <SearchResult 
                    searchResult = {this.state.searchResult}
                />
            </div>
        )
    }
}

export default App;
