import React from 'react'
import '../styles/SearchResult.css'
import placeholderImage from '../assets/noimage.jpg'
type SearchResultProps = {
    searchResult: Array <any>,
    onRowClick: Function
}


type BookData = {
    title: string,
    author_name: string,
    cover_i: number,
    publish_year : Array<number>,
    isbn : number,
}

class SearchResult extends React.Component <SearchResultProps> {
    constructor (props: SearchResultProps) {
        super(props);
        this.handleRowClick = this.handleRowClick.bind(this);
    }

    getImage(cover_i:number) : string {
        let url = "http://covers.openlibrary.org/b/id/"+cover_i+"-S.jpg";
        if (cover_i!==undefined && cover_i>0) {
            let request = new XMLHttpRequest();
            request.open("GET", url, false);
            request.send(null);

            if (request.status === 200) 
            {
                return  url;
            }
        }
        return placeholderImage;
    }

    handleRowClick(bookData : BookData) {
        this.props.onRowClick(bookData);
    }

    render() {
        return(
            <div id="some" className="resultBlock" >
                {this.props.searchResult.map((element : any, index : number) => (
                    <div className="resultRow" key={index} onClick={() => this.handleRowClick(element)}>
                        <img id={"picture_"+index} className="resultRow__thumb" src={this.getImage(element.cover_i)} alt={element.title}/>
                        <p>Заголовок: {element.title}</p>
                        <p>Имя автора: {element.author_name}</p>
                        <p>Год издательства: {Math.min.apply(null, element.publish_year)}</p>
                    </div>
                ))}
            </div>
        )
    }
}
export default SearchResult