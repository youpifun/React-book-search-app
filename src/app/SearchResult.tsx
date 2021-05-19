import React from 'react'
import '../styles/SearchResult.css'
import placeholderImage from '../assets/noimage.jpg'
type SearchResultProps = {
    resultRow: BookData,
    onRowClick: Function,
}


type BookData = {
    title: string,
    author_name: Array<string>,
    cover_i: number,
    publish_year : Array<number>,
    isbn : number,
}

class SearchResult extends React.Component <SearchResultProps> {
    getImage(cover_i:number) : string {
        let url = "https://covers.openlibrary.org/b/id/"+cover_i+"-S.jpg";
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

    shouldComponentUpdate(newProps : any, newState:any) : boolean {
        return this.props.resultRow !== newProps.resultRow;
    }

    render() {
        let name = this.props.resultRow.author_name?.join(', ');
        let imgSrc = this.getImage(this.props.resultRow.cover_i);
        let title = this.props.resultRow.title;
        let firstYearOfPulish = Math.min.apply(null, this.props.resultRow.publish_year);
        const rowClick = () =>this.props.onRowClick()
        return(
                <div className="resultRow" onClick={rowClick}>
                    <img className="resultRow__thumb" src={imgSrc} alt={title}/>
                    <div className="resultRow__info-block">
                        <p>Заголовок: {title}</p>
                        {(name)&&(<p>Имя автора: {name}</p>)}
                        <p>Год издательства: {firstYearOfPulish}</p>
                    </div>
                </div>
        )
    }
}
export default SearchResult