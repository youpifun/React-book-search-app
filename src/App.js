import React from 'react';
import SearchBar from './app/SearchBar.tsx'
import SearchResult from './app/SearchResult.tsx'
import Modal from './app/Modal.tsx'
import preloaderUrl from './assets/preloader.gif'

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
        this.handleCloseModal = this.handleCloseModal.bind(this);
    };

    handleSearchTextChange(searchTextEvent, type = "input") {
        let searchText, num;
        if (type === "input") {
            searchText = searchTextEvent.target.value;
            num = 10;
        } else {
            searchText = searchTextEvent.value;
            num = 30;
        }
        clearTimeout(this.lastCallTimer);
        this.lastCallTimer = setTimeout(() => this.getBooks(searchText, num), 1000);
    };

    getBooks(searchText, num) {
        if (!searchText) {
            this.setState({
                searchResult: [],
                isSearchResultActive: false
            })
            return
        };
        this.setState({
            searchResult: [],
            isSearchResultActive: true
        })
        let preloader = new Image();
        let resultBlock = document.getElementsByClassName("resultBlock")[0]
        preloader.src = preloaderUrl;
        preloader.classList.add("resultBlock__preloader");
        resultBlock.appendChild(preloader);
        let url = "http://openlibrary.org/search.json?q=";
        url += encodeURI(searchText.trim());
        url += "*&fields=title,author_name,cover_i,publish_year,isbn&limit="+num;
        let result = [];
        fetch(url).then(response => response.json()).then(data => {
            data.docs.forEach((el,i) => {
                result[i] = el;
            });
            this.setState({
                searchResult: result
            });
            preloader.remove(preloader);
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
        let text = document.getElementById("searchInput");
        const searchBtnClick = () => this.handleSearchTextChange(text, "click");
        return (
            <>
            <div className="contentBlock">
                <div className="searchWrapper">
                    <SearchBar
                        onSearchTextChange = {this.handleSearchTextChange}
                    />
                    <button className="searchWrapper__btn" onClick={searchBtnClick}>Искать</button>
                </div>
                {(this.state.isSearchResultActive)&&(
                <div className="resultBlock">
                    {this.state.searchResult.map((resultRow) => (
                    <SearchResult 
                        resultRow = {resultRow}
                        onRowClick = {() => this.handleRowClick(resultRow)}
                    />
                    ))}
                </div>
                )}
            </div>
            { (this.state.isModalActive) && (<Modal bookData = {this.state.bookData} onCloseModal = {this.handleCloseModal}/>)}
            </>
        )
    }
}

export default App;
