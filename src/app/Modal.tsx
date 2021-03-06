import React from 'react'
import placeholderImage from '../assets/noimage.jpg'
import preloader from '../assets/preloader.gif'

interface BookDataProps {
    bookData: {
        title: string,
        author_name: Array<string>,
        cover_i: number,
        publish_year : Array<number>,
        isbn : Array<number>
    },
    onCloseModal: Function
}

class Modal extends React.Component <BookDataProps> {
    state = {
        isVisible : false
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

    getImage(img:HTMLImageElement, cover_i:number) : string {
        let url = "https://covers.openlibrary.org/b/id/"+cover_i+"-L.jpg";
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
        } else {
            return placeholderImage
        }
        return preloader;
    }

    closeModal() {
        this.props.onCloseModal();
    }
    
    render() {
        const close = () => this.closeModal();
        let {title , author_name, cover_i, publish_year, isbn} = this.props.bookData;
        let name = author_name.join(", ");
        let years = publish_year.sort().join(", ");
        let bookIsbns = isbn.join(", ");
        return(
            <div className="modalWindow">
                <div className="info-wrapper">
                    <div className="modalWindow__image"></div>
                    <div className="modalWindow__information">
                        <div className="information__row">??????????????????: {title}</div>
                        <div className="information__row">?????? ????????????: {name}</div>
                        <div className="information__row">???????? ????????????????????????: {years}</div>
                        <div className="information__row">ISBN: {bookIsbns}</div>
                    </div>
                    <div className="modalWindow__close" onClick={close}>X</div>
                </div>
            </div>
        )
    }
}

export default Modal;