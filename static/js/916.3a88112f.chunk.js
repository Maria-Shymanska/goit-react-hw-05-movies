(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[916],{4254:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(1087),a=n(2007),i=n.n(a),c=n(6263),o={movcard__list:"MovieCard_movcard__list__Nvqci",movcard__item:"MovieCard_movcard__item__BfRtc",film__name:"MovieCard_film__name__48e-E",film__poster:"MovieCard_film__poster__GccE3"},s=n(184),u=function(t){var e=t.id,n=t.original_title,a=t.poster_path,i=t.activeId,u=t.location;return(0,s.jsx)("section",{className:o.container,children:(0,s.jsx)("ul",{className:o.movcard__list,children:(0,s.jsx)("li",{className:o.movcard__item,children:(0,s.jsxs)(r.rU,{to:"/movies/".concat(i),state:{from:u},children:[(0,s.jsx)("img",{className:o.film__poster,src:a?"https://image.tmdb.org/t/p/w500".concat(a):c,alt:n}),(0,s.jsx)("p",{className:o.film__name,children:n||(0,s.jsx)("span",{className:o.non__title,children:"Movie without a title"})})]})},e)})})};u.prototype={id:i().number,title:i().string,poster_path:i().string,activeId:i().number.isRequired,location:i().shape({state:i().string})};var p=u},916:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var r=n(3433),a=n(9439),i=n(2791),c=n(7596),o=n(2795),s=n(7689),u=n(2007),p=n.n(u),f=n(4254),l="MoviesList_movies__list__omDb8",_=n(184),d=function(t){var e=t.movies,n=(0,s.TH)();return(0,_.jsx)("ul",{className:l,children:null===e||void 0===e?void 0:e.map((function(t,e){var r=t.id,a=t.original_title,i=t.poster_path;return(0,_.jsx)(f.Z,{location:n,id:r,original_title:a,poster_path:i,activeId:r},e)}))})};d.propType={movies:p().arrayOf(p().shape).isRequired};var m=d,h=n(8809),v=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],s=e[1],u=(0,i.useState)(!1),p=(0,a.Z)(u,2),f=p[0],l=p[1];return(0,i.useEffect)((function(){l(!0),(0,o._c)().then((function(t){var e=t.results;s((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(e))}))})).catch((function(t){return c.Am.error(t.message,"Something went wrong!")})).finally((function(){return l(!1)}))}),[]),(0,_.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",padding:"30px"},children:[(0,_.jsx)("h1",{style:{marginLeft:"100px",textTransform:"uppercase",fontWeight:"500",fontSize:"30px",color:"rgb(64, 63, 153)"},children:"Trending today"}),n&&(0,_.jsx)(m,{movies:n}),f&&(0,_.jsx)(h.Z,{})]})}},2795:function(t,e,n){"use strict";n.d(e,{JS:function(){return m},XC:function(){return _},Y7:function(){return u},_c:function(){return o},du:function(){return f}});var r=n(5861),a=n(7757),i=n.n(a),c=n(1243);function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=3146c777d7ac16a246449915cf00b285");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=3146c777d7ac16a246449915cf00b285&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=3146c777d7ac16a246449915cf00b285&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},888:function(t,e,n){"use strict";var r=n(9047);function a(){}function i(){}i.resetWarningCache=a,t.exports=function(){function t(t,e,n,a,i,c){if(c!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(t,e,n){t.exports=n(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6263:function(t,e,n){"use strict";t.exports=n.p+"static/media/meh2.9d6aef3acf8e372c9aa3.png"}}]);
//# sourceMappingURL=916.3a88112f.chunk.js.map