(this.webpackJsonpimagehub=this.webpackJsonpimagehub||[]).push([[0],{25:function(e,t,a){e.exports=a(55)},30:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(30),a(10)),u=a(2),s=a(3),i=a(6),d=a(5),m=a(7),h=a.n(m),p=a(4),f=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={result:null,search:null},e.handleChange=function(t){e.setState(Object(o.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),h.a.get("https://api.unsplash.com/search/photos?page=1&per_page=15&query=computer&client_id=".concat("DBR8Klvy3Cd7Qmu7lX_YD9G8Kj8wVm7cDZDTvq5bYok")).then((function(t){e.setState({result:t.data.results})})),e.props.addNewResult(null),e.state.search&&h.a.get("https://api.unsplash.com/search/photos?page=1&per_page=15&query=".concat(e.state.search,"&client_id=").concat("DBR8Klvy3Cd7Qmu7lX_YD9G8Kj8wVm7cDZDTvq5bYok")).then((function(t){0===t.data.total?(document.querySelector("#search").value="",alert("Enter Valid name"),e.props.addNewResult(e.state.result)):e.props.addNewResult(t.data.results)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{id:"search",type:"text",className:"right",placeholder:"Search photo",onChange:this.handleChange}),r.a.createElement("button",{type:"submit",className:"purple center z-depth-1 white-text search-btn"},"Search"))))}}]),a}(n.Component),b=Object(p.b)(null,(function(e){return{addNewResult:function(t){e(function(e){return{type:"ADD_SEARCH_RESULT",result:e}}(t))}}}))(f),v=function(e){var t=e.result,a=e.download;return r.a.createElement("div",{className:"col s12 m6 l4 center grid-content"},r.a.createElement("img",{src:t.urls.small,alt:"",className:"center"}),r.a.createElement("div",{className:"download-link"},r.a.createElement("p",{className:"download-content"},"Download:"),r.a.createElement("div",{className:"download"},r.a.createElement("button",{onClick:function(){a(t.urls.small,t.id)},className:"download-btn waves-effect z-depth-2 purple-text white lighten-2"},"Small"),r.a.createElement("button",{onClick:function(){a(t.urls.regular,t.id)},className:"download-btn waves-effect z-depth-2 purple-text white lighten-2"},"Medium"),r.a.createElement("button",{onClick:function(){a(t.urls.full,t.id)},className:"download-btn waves-effect z-depth-2 purple-text white lighten-2"},"Large"))),r.a.createElement("a",{href:t.urls.full,className:"btn white waves-effect lighten-2 purple-text"},"View Full Size"))},w=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).download=function(e,t){h()({url:e,method:"GET",responseType:"blob"}).then((function(e){var a=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=a,n.setAttribute("download",t+".jpg"),document.body.appendChild(n),n.click()}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.unsplash.com/search/photos?page=1&per_page=15&query=computer&client_id=".concat("DBR8Klvy3Cd7Qmu7lX_YD9G8Kj8wVm7cDZDTvq5bYok")).then((function(t){e.props.addResult(t.data.results)}))}},{key:"render",value:function(){var e=this,t=this.props.result?this.props.result.map((function(t){return r.a.createElement(v,{result:t,download:e.download,key:t.id})})):r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,"Loading....",r.a.createElement("br",null),"Images"));return r.a.createElement("div",null,r.a.createElement("div",{className:"row center container body-container"},t))}}]),a}(n.Component),E=Object(p.b)((function(e){return{result:e.result}}),(function(e){return{addResult:function(t){e(function(e){return{type:"ADD_RESULT",result:e}}(t))}}}))(w),g=(a(54),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"purple center"},r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("div",{className:"container"},"Made with",r.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f"),"by ",r.a.createElement("a",{href:"https://abhijeetkwh.me/"},"Abhijeet.R.Kushwaha"),r.a.createElement("br",null),"\xa9 All Rights Reserved")))}}]),a}(n.Component));var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(11),D=a(8),N={result:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;if("ADD_RESULT"===t.type){var a=t.result;return Object(D.a)(Object(D.a)({},e),{},{result:a})}if("ADD_SEARCH_RESULT"===t.type){var n=t.result;return Object(D.a)(Object(D.a)({},e),{},{result:n})}return e},R=Object(j.b)(O);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:R},r.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.222c9df0.chunk.js.map