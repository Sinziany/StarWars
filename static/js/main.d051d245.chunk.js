(this.webpackJsonpstar_wars=this.webpackJsonpstar_wars||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(2),o=a.n(c),s=(a(13),a(3)),l=a(4),i=a(6),u=a(5),h=a(7),m=(a(14),{"A New Hope":"https://www.youtube.com/watch?v=vZ734NWnAHA","Attack of the Clones":"https://www.youtube.com/watch?v=gYbW1F_c9eM","The Phantom Menace":"https://www.youtube.com/watch?v=bD7bpG-zDJQ","Revenge of the Sith":"https://www.youtube.com/watch?v=5UnjrG_N8hU","Return of the Jedi":"https://www.youtube.com/watch?v=7L8p7_SLzvU","The Empire Strikes Back":"https://www.youtube.com/watch?v=JNwNXF9Y6kY","The Force Awakens":"https://www.youtube.com/watch?v=sGbxmsDFVnE"}),w=function(e){var t=e.title,a=e.opening_crawl,r=e.director,c=e.producer,o=e.release_date;return n.a.createElement("div",{className:"tc bg-dark-blue light-silver br3 pa4 ma3 grow shadow-5 w-30 flex-auto"},n.a.createElement("div",null,n.a.createElement("h2",{className:"b underline"},n.a.createElement("a",{className:"light-purple",href:m[t],target:"_blank",rel:"noopener noreferrer"}," ",t," ")),n.a.createElement("h3",null," Released on ",o," it was directed by ",r," and was proproduced by ",c),n.a.createElement("p",null,a)))},p=function(e){var t=e.films;return n.a.createElement("div",{className:"flex justify-center flex-wrap w-100"},t.map((function(e,a){return n.a.createElement(w,{key:1,title:t[a].title,opening_crawl:t[a].opening_crawl,director:t[a].director,producer:t[a].producer,release_date:t[a].release_date})})))};var d=function(e,t){var a=e.url.toUpperCase(),r=t.url.toUpperCase(),n=0;return a>r?n=1:a<r&&(n=-1),n},f=function(e){return n.a.createElement("div",{style:{overflowY:"scroll",height:"600px"}},e.children)},v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={films:[]},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.co/api/films/").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return e.sort(d)})).then((function(t){return e.setState({films:t})}))}},{key:"render",value:function(){var e=this.state.films;return n.a.createElement("div",{className:"tc"},n.a.createElement("header",{className:"App-header tc"},n.a.createElement("h1",{className:"f1 tc"},"Star  Wars"),n.a.createElement("img",{className:"ma4 br4 w-40 tc",alt:"StarWars",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoozGDrykxkHFNz33fJb7_J9JQuUfCb4SCdU5chl3MotUDtQ_L&s"})),n.a.createElement(f,null,n.a.createElement(p,{films:e})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);o.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.d051d245.chunk.js.map