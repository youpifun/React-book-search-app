import React from 'react'
import '../styles/SearchResult.css'
import placeholderImage from '../assets/noimage.jpg'
type SearchResultProps = {
    searchResult: Array <any>
}

class SearchResult extends React.Component <SearchResultProps> {
    constructor(props: SearchResultProps) {
        super(props);
    }

    getImage(cover_i:number, index:number) {
        let url = "http://covers.openlibrary.org/b/id/"+cover_i+"-S.jpg";
        if (cover_i!=undefined && cover_i>0) {
            let request = new XMLHttpRequest();  
            request.open("GET", url, false);   
            request.send(null);  

            if (request.status === 200) 
            {  
                let img = document.getElementById("picture_"+index) as HTMLImageElement;
                return  url;
            }
        }
        return placeholderImage;
    }

    render() {
        return(
            <div className="resultBlock hidden" >
                {this.props.searchResult.map((element : any, index : number) => (
                    <div className="resultRow" key={index}>
                        <img id={"picture_"+index} className="resultRow__thumb" src={this.getImage(element.cover_i, index)}/>
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