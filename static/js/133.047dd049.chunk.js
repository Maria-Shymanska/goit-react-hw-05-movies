"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[133],{2795:function(t,e,n){n.d(e,{_k:function(){return i},sv:function(){return f},xc:function(){return o}});var r=n(5861),a=n(7757),u=n.n(a),c=n(1243);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=3146c777d7ac16a246449915cf00b285");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=3146c777d7ac16a246449915cf00b285&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},3133:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(9439),a=n(2791),u=n(2795),c=n(7689),i=n(184);function s(){var t=(0,c.UO)().movieId,e=(0,a.useState)(null),n=(0,r.Z)(e,2),s=n[0],o=n[1];return(0,a.useEffect)((function(){(0,u.sv)(t).then((function(t){var e=t.results;return o(e)}))}),[t]),(0,i.jsx)(i.Fragment,{children:s&&s.length>0?(0,i.jsx)("ul",{children:s.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:n}),(0,i.jsx)("p",{children:r})]},e)}))}):(0,i.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=133.047dd049.chunk.js.map