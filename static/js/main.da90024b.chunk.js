(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=a(17),s=a(4),l=a(5),u=a(7),h=a(6),d=a(29),g=a(30),m=a.n(g),p=a(1),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={largeImage:e.props.largeImageURL},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.webformatURL,a=e.tags,n=e.onClick,r=e.updateData,c=this.state.largeImage;return Object(p.jsx)("li",{className:"ImageGalleryItem",onClick:function(){n(),r(c)},children:Object(p.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image"})})}}]),a}(n.Component),f=function(e){var t=e.images,a=e.onClick,n=e.updateData;return Object(p.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.webformatURL,r=e.tags,c=e.id,o=e.largeImageURL;return Object(p.jsx)(b,{webformatURL:t,tags:r,onClick:a,updateData:n,largeImageURL:o},c)}))})},O=function(e){var t=e.onClick;return Object(p.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})},y=document.querySelector("#modal-root"),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(p.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{src:this.props.largeImage,alt:""})})}),y)}}]),a}(n.Component),k=function(e){var t=e.children;return Object(p.jsx)("div",{className:"Container",children:t})},x=a(16),C=a.n(x);C.a.defaults.baseURL="https://pixabay.com";var w="21175244-7c66133e2371767f9955ec31b",S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return C.a.get("/api/?q=".concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=15&key=").concat(w)).then((function(e){return e.data}))},I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!1,isOpen:!1,currentPage:1,seachQuery:"",images:[],largeImage:""},e.onChangeQuery=function(t){e.setState({seachQuery:t,currentPage:1,images:[]})},e.fetchData=function(){var t=e.state,a=t.seachQuery,n=t.currentPage;e.setState({isLoading:!0}),S(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t.hits)),currentPage:e.currentPage+1}}))})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(){e.setState((function(e){return{isOpen:!e.isOpen}}))},e.updateData=function(t){e.setState({largeImage:t})},e.scrollToBottom=function(){d.animateScroll.scrollToBottom({containerId:"endView"})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.seachQuery!==this.state.seachQuery&&this.fetchData(),t.currentPage!==this.state.currentPage&&this.scrollToBottom()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.largeImage;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(j,{onSubmit:this.onChangeQuery}),Object(p.jsx)(f,{images:t,onClick:this.toggleModal,updateData:this.updateData}),Object(p.jsx)(k,{children:this.state.isLoading&&Object(p.jsx)(m.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100,timeout:3e3})}),t.length>0&&Object(p.jsx)(O,{onClick:this.fetchData,id:"endView"}),this.state.isOpen&&Object(p.jsx)(v,{onClose:this.toggleModal,largeImage:a})]})}}]),a}(n.Component);a(82),a(83);o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.da90024b.chunk.js.map