"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{2168:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(9439),a=n(7689),c=n(2791),u=n(7596),i=n(2795),s=n(8809),o="Reviews_container__2j80+",p="Reviews_author__list__FoTP8",f="Reviews_author__item__PkjvB",h="Reviews_author__name__02VjA",_="Reviews_author__content__Rv1xk",l="Reviews_text__data__xATBF",v="Reviews_non__reviews__MyQsB",d=n(184),m=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],m=t[1],g=(0,c.useState)(!1),w=(0,r.Z)(g,2),x=w[0],y=w[1],b=(0,a.UO)().movieId;return(0,c.useEffect)((function(){y(!0),(0,i.JS)(b).then((function(e){var t=e.results;m(t)})).catch((function(e){return u.Am.error(e.message,"Something went wrong!")})).finally((function(){return y(!1)}))}),[b]),(0,d.jsxs)("section",{className:o,children:[n&&n.length>0?(0,d.jsx)("ul",{className:p,children:null===n||void 0===n?void 0:n.map((function(e,t){var n=e.author,r=e.content,a=e.updated_at;return(0,d.jsxs)("li",{className:f,children:[(0,d.jsx)("p",{className:h,children:n}),(0,d.jsx)("p",{className:_,children:r}),(0,d.jsx)("p",{className:l,children:a&&a.slice(0,10)})]},t)}))}):(0,d.jsx)("p",{className:v,children:"We don't have any reviews for this movie."}),x&&(0,d.jsx)(s.Z,{})]})}},2795:function(e,t,n){n.d(t,{JS:function(){return v},XC:function(){return _},Y7:function(){return o},_c:function(){return i},du:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),u=n(1243);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=3146c777d7ac16a246449915cf00b285");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=3146c777d7ac16a246449915cf00b285&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=3146c777d7ac16a246449915cf00b285&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=168.f3d31062.chunk.js.map