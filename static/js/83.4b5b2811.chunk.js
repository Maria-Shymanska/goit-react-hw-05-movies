(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[83],{4254:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(1087),a=n(2007),i=n.n(a),c=n(6263),o={movcard__list:"MovieCard_movcard__list__Nvqci",movcard__item:"MovieCard_movcard__item__BfRtc",film__name:"MovieCard_film__name__48e-E",film__poster:"MovieCard_film__poster__GccE3"},s=n(184),u=function(e){var t=e.id,n=e.original_title,a=e.poster_path,i=e.activeId,u=e.location;return(0,s.jsx)("section",{className:o.container,children:(0,s.jsx)("ul",{className:o.movcard__list,children:(0,s.jsx)("li",{className:o.movcard__item,children:(0,s.jsxs)(r.rU,{to:"/movies/".concat(i),state:{from:u},children:[(0,s.jsx)("img",{className:o.film__poster,src:a?"https://image.tmdb.org/t/p/w500".concat(a):c,alt:n}),(0,s.jsx)("p",{className:o.film__name,children:n||(0,s.jsx)("span",{className:o.non__title,children:"Movie without a title"})})]})},t)})})};u.prototype={id:i().number,title:i().string,poster_path:i().string,activeId:i().number.isRequired,location:i().shape({state:i().string})};var p=u},2083:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(3433),a=n(9439),i=n(2791),c=n(1087),o=n(7596),s=n(2795),u=n(7689),p=n(4254),l="SearchMoviesList_movlist__list__7iNoV",f=n(184),m=function(e){var t=e.movies,n=(e.value,(0,u.TH)());return(0,f.jsx)(f.Fragment,{children:t&&t.length>0&&(0,f.jsx)("ul",{className:l,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,r=e.original_title,a=e.poster_path,i=e.vote_average;return(0,f.jsx)(p.Z,{location:n,title:r,poster_path:a,voteAverage:i,activeId:t},t)}))})})},_=n(2007),d={container:"SearchBar_container__xwaer",btn__form:"SearchBar_btn__form__G74b+"},h=function(e){var t=e.onSubmit,n=(0,i.useState)(""),r=(0,a.Z)(n,2),c=r[0],s=r[1];return(0,f.jsx)("div",{className:d.container,children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),s("")):o.Am.error("Enter the title of the movie to search")},children:[(0,f.jsx)("input",{className:d.input,type:"text",value:c,autoComplete:"off",autoFocus:!0,placeholder:"Search film",onChange:function(e){s(e.currentTarget.value.trim())}}),(0,f.jsx)("button",{className:d.btn__form,type:"submit",children:"Search"})]})})};h.propType={onSubmit:n.n(_)().func.isRequired};var v=h,g=function(){var e,t=(0,i.useState)([]),n=(0,a.Z)(t,2),u=n[0],p=n[1],l=(0,c.lr)(""),_=(0,a.Z)(l,2),d=_[0],h=_[1],g=null!==(e=d.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){g&&(0,s.Y7)(g).then((function(e){var t=e.results;p((0,r.Z)(t))})).catch((function(e){return o.Am.error(e.message,"Something went wrong!")}))}),[g]);return(0,f.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",paddingTop:"30px",paddingLeft:"30px",paddingRight:"30px"},children:[(0,f.jsx)(v,{onSubmit:function(e){h({query:e})}}),u&&(0,f.jsx)(m,{movies:u,value:g})]})}},2795:function(e,t,n){"use strict";n.d(t,{JS:function(){return d},XC:function(){return m},Y7:function(){return u},_c:function(){return o},du:function(){return l}});var r=n(5861),a=n(7757),i=n.n(a),c=n(1243);function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=3146c777d7ac16a246449915cf00b285");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=3146c777d7ac16a246449915cf00b285&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=3146c777d7ac16a246449915cf00b285&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,c){if(c!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6263:function(e,t,n){"use strict";e.exports=n.p+"static/media/meh2.9d6aef3acf8e372c9aa3.png"}}]);
//# sourceMappingURL=83.4b5b2811.chunk.js.map