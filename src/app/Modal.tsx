import React from 'react'
import placeholderImage from '../assets/noimage.jpg'

interface BookDataProps {
    bookData: {
        title: string,
        author_name: string,
        cover_i: number,
        publish_year : Array<number>,
        isbn : Array<number>
    },
    onCloseModal: Function
}

class Modal extends React.Component <BookDataProps> {
    constructor(props:BookDataProps) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        let img = new Image();
        img.id = "largeCover"
        img.src = this.getImage(img, this.props.bookData.cover_i);
        document.getElementsByClassName("modalWindow__image")[0].appendChild(img);
    }

    componentWillUnmount() {
        document.getElementById("largeCover")?.remove();
    }

    shouldComponentUpdate(){
        return true;
    }

    getImage(img:HTMLImageElement, cover_i:number) : string {
        let url = "http://covers.openlibrary.org/b/id/"+cover_i+"-L.jpg";
        if (cover_i!==undefined && cover_i>0) {
            let request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.onload = function (e) {
                if (request.readyState === 4) {
                  if (request.status === 200) {
                    img!.src = url
                  }
                }
              };
        request.send(null);
        }
        return placeholderImage;
    }

    closeModal() {
        this.props.onCloseModal();
    }

    getInfoString(arr:Array<number>) :string {
        let res = '';
        arr.forEach(e => res+=e+', ')
        res = res.slice(0, -2);
        return res;
    }

    render() {
        return(
            <div className="modalWindow">
                <div className="info-wrapper">
                    <div className="modalWindow__image"></div>
                    <div className="modalWindow__information">
                        <div>Заголовок: {this.props.bookData.title}</div>
                        <div>Имя автора: {this.props.bookData.author_name}</div>
                        <div>Годы издательства: {this.getInfoString(this.props.bookData.publish_year)}</div>
                        <div>ISBN: {this.getInfoString(this.props.bookData.isbn)}</div>
                    </div>
                    <div className="modalWindow__close" onClick={()=>{this.closeModal()}}>X</div>
                </div>
            </div>
        )
    }
}

export default Modal;