"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[744],{3616:function(n,t,e){e.d(t,{Z:function(){return i}});var r,a=e(168),c=e(6444).ZP.h1(r||(r=(0,a.Z)(["\n  padding: 8px;\n  margin-top: 10px;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-color: green;\n"]))),u=e(184);function i(n){var t=n.children;return(0,u.jsx)(c,{children:t})}},2795:function(n,t,e){e.d(t,{_k:function(){return i},bI:function(){return s},sv:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243);function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=3146c777d7ac16a246449915cf00b285");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6744:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(9439),a=e(2791),c=e(1087),u=e(2795),i=e(3616),o=e(184);function s(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,a.useEffect)((function(){(0,u._k)().then((function(n){var t=n.results;return s(t)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{children:"Trending today"}),e&&(0,o.jsx)("ul",{children:e.map((function(n){return(0,o.jsx)("li",{children:(0,o.jsxs)(c.rU,{to:"movies/".concat(n.id),children:[" ",n.title]})},n.id)}))})]})}}}]);
//# sourceMappingURL=744.77d8496d.chunk.js.map