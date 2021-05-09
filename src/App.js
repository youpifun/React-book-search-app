import React from 'react';
import SearchBar from './app/SearchBar.tsx'
import SearchResult from './app/SearchResult.tsx'
import Modal from './app/Modal.tsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchResult: [],
            bookData: {},
            isSearchResultActive: false,
            isModalActive: false
        }
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.getBooks = this.getBooks.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
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
        if (!searchText) {
            this.setState({
                searchResult: [],
                isSearchResultActive: false
            })
            return
        };
        this.setState({
            isSearchResultActive: true
        })
        let url = "http://openlibrary.org/search.json?q=";
        url += encodeURI(searchText.trim());
        url += "*&fields=title,author_name,cover_i,publish_year,isbn&limit=10";
        let result = [];
        fetch(url).then(response => response.json()).then(data => {
            data.docs.forEach((el,i) => {
                result[i] = el;
            });
            this.setState({
                searchResult: result
            });
        });
    }

    handleRowClick(bookData) {
        this.setState({
            bookData: bookData,
            isModalActive: true
        });
    }

    handleCloseModal() {
        this.setState({
            isModalActive: false
        })
    }

    render() {
        return (
            <div>
                <SearchBar 
                    searchText = {this.state.searchText}
                    onSearchTextChange = {this.handleSearchTextChange}
                />
                {(this.state.isSearchResultActive)&&(<SearchResult 
                    searchResult = {this.state.searchResult}
                    onRowClick = {this.handleRowClick}
                />)}
                { (this.state.isModalActive) && (<Modal bookData = {this.state.bookData} onCloseModal = {this.handleCloseModal}/>)}
            </div>
        )
    }
}

export default App;
