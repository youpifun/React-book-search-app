(this["webpackJsonpbook-searcher"]=this["webpackJsonpbook-searcher"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(8),i=a.n(o),r=(a(13),a(2)),c=a(3),l=a(6),h=a(5),u=a(4),d=a(0),j=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(d.jsx)("input",{id:"searchInput",type:"text",placeholder:"Search",onInput:this.props.onSearchTextChange.bind(this)})}}]),a}(s.a.Component),m=(a(15),a.p+"static/media/noimage.e1ce751e.jpg"),p=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"getImage",value:function(e){var t="https://covers.openlibrary.org/b/id/"+e+"-S.jpg";if(void 0!==e&&e>0){var a=new XMLHttpRequest;if(a.open("GET",t,!1),a.send(null),200===a.status)return t}return m}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.resultRow!==e.resultRow}},{key:"render",value:function(){var e=this,t=this.props.resultRow,a=t.title,n=t.author_name,s=t.cover_i,o=t.publish_year,i=n.join(", "),r=this.getImage(s),c=Math.min.apply(null,o);return Object(d.jsxs)("div",{className:"resultRow",onClick:function(){return e.props.onRowClick()},children:[Object(d.jsx)("img",{className:"resultRow__thumb",src:r,alt:a}),Object(d.jsxs)("div",{className:"resultRow__info-block",children:[Object(d.jsxs)("p",{children:["\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a: ",a]}),Object(d.jsxs)("p",{children:["\u0418\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430: ",i]}),Object(d.jsxs)("p",{children:["\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430: ",c]})]})]})}}]),a}(s.a.Component),v=a.p+"static/media/preloader.d3fbaf2b.gif",b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isVisible:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=new Image;e.id="largeCover",e.src=this.getImage(e,this.props.bookData.cover_i),document.getElementsByClassName("modalWindow__image")[0].appendChild(e)}},{key:"componentWillUnmount",value:function(){var e;null===(e=document.getElementById("largeCover"))||void 0===e||e.remove()}},{key:"getImage",value:function(e,t){var a="https://covers.openlibrary.org/b/id/"+t+"-L.jpg";if(!(void 0!==t&&t>0))return m;var n=new XMLHttpRequest;return n.open("GET",a,!0),n.onload=function(t){4===n.readyState&&200===n.status&&(e.src=a)},n.send(null),v}},{key:"closeModal",value:function(){this.props.onCloseModal()}},{key:"render",value:function(){var e=this,t=this.props.bookData,a=t.title,n=t.author_name,s=(t.cover_i,t.publish_year),o=t.isbn,i=n.join(", "),r=s.sort().join(", "),c=o.join(", ");return Object(d.jsx)("div",{className:"modalWindow",children:Object(d.jsxs)("div",{className:"info-wrapper",children:[Object(d.jsx)("div",{className:"modalWindow__image"}),Object(d.jsxs)("div",{className:"modalWindow__information",children:[Object(d.jsxs)("div",{className:"information__row",children:["\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a: ",a]}),Object(d.jsxs)("div",{className:"information__row",children:["\u0418\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430: ",i]}),Object(d.jsxs)("div",{className:"information__row",children:["\u0413\u043e\u0434\u044b \u0438\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430: ",r]}),Object(d.jsxs)("div",{className:"information__row",children:["ISBN: ",c]})]}),Object(d.jsx)("div",{className:"modalWindow__close",onClick:function(){return e.closeModal()},children:"X"})]})})}}]),a}(s.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={searchText:"",searchResult:[],bookData:{},isSearchResultActive:!1,isModalActive:!1},n.handleSearchTextChange=n.handleSearchTextChange.bind(Object(l.a)(n)),n.handleCloseModal=n.handleCloseModal.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"handleSearchTextChange",value:function(e){var t,a,n=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";"input"===s?(t=e.target.value,a=10):(t=e.value,a=30),clearTimeout(this.lastCallTimer),this.lastCallTimer=setTimeout((function(){return n.getBooks(t,a)}),1e3)}},{key:"getBooks",value:function(e,t){var a=this;if(e){this.setState({searchText:e,searchResult:[],isSearchResultActive:!0});var n=new Image,s=document.getElementsByClassName("resultBlock")[0];n.src=v,n.classList.add("resultBlock__preloader"),s.appendChild(n);var o="https://openlibrary.org/search.json?q=";o+=encodeURI(e.trim())+"*&fields=title,author_name,cover_i,publish_year,isbn&limit="+t;var i=[];fetch(o).then((function(e){return e.json()})).then((function(e){e.docs.forEach((function(e,t){i[t]=e})),i=""!=i?i:"empty",a.setState({searchResult:i}),n.remove(n)}))}else this.setState({searchResult:[],isSearchResultActive:!1})}},{key:"handleRowClick",value:function(e){this.setState({bookData:e,isModalActive:!0})}},{key:"handleCloseModal",value:function(){this.setState({isModalActive:!1})}},{key:"render",value:function(){var e=this,t=document.getElementById("searchInput");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"contentBlock",children:[Object(d.jsxs)("div",{className:"searchWrapper",children:[Object(d.jsx)(j,{onSearchTextChange:this.handleSearchTextChange}),Object(d.jsx)("button",{className:"searchWrapper__btn",onClick:function(){return e.handleSearchTextChange(t,"click")},children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]}),this.state.isSearchResultActive&&Object(d.jsxs)("div",{className:"resultBlock",children:["empty"!=this.state.searchResult&&this.state.searchResult.map((function(t){return Object(d.jsx)(p,{resultRow:t,onRowClick:function(){return e.handleRowClick(t)}})})),"empty"==this.state.searchResult&&Object(d.jsxs)("div",{className:"resultBlock__notFound",children:["\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",this.state.searchText," \u043a\u043d\u0438\u0433 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e =("]})]})]}),this.state.isModalActive&&Object(d.jsx)(b,{bookData:this.state.bookData,onCloseModal:this.handleCloseModal})]})}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f810a6cb.chunk.js.map