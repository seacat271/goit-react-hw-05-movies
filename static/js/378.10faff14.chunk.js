"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[378],{9809:function(e,n,t){t.d(n,{K:function(){return A}});var r=t(885),i=t(2791),c=t(5861),s=t(7757),p=t.n(s),a=t(4569),o=t.n(a);o().defaults.baseURL="https://api.themoviedb.org/3";var l={params:{api_key:"4e997d9f74601693c84e243277b61d66",language:"en-US"}},u=function(){var e=(0,c.Z)(p().mark((function e(n,t){var r,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){switch(n){case"trending":return"".concat(n,"/movie/").concat(t);case"search":return"".concat(n,"/movie?query=").concat(t);case"credits":case"reviews":return"movie/".concat(t,"/").concat(n);default:return"movie/".concat(t)}},e.prev=1,e.next=4,o().get(r(),l);case 4:return i=e.sent,e.abrupt("return",i.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t){return e.apply(this,arguments)}}(),A=function(e,n){var t=(0,i.useState)(null),c=(0,r.Z)(t,2),s=c[0],p=c[1];return(0,i.useEffect)((function(){n&&u(e,n).then(p)}),[e,n]),[s,p]}},2378:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,i,c,s,p=t(885),a=t(9809),o=t(470),l=t(168),u=t(6444),A=u.ZP.div(r||(r=(0,l.Z)(["\npadding: 20px;\n"]))),x=(u.ZP.button(i||(i=(0,l.Z)(["\n    width: 140px;\n    height: 30px;\n    margin-bottom: 20px;\n"]))),u.ZP.div(c||(c=(0,l.Z)(["\npadding: 20px;\ndisplay: flex;\nalign-items: center;\njustify-content: start;\ngap: 20px;\n"]))),u.ZP.p(s||(s=(0,l.Z)(["\nfont-weight: 700;\nfont-size: 20px;\n"])))),g=t(6731),d=t(184),f=function(e){var n=e.pathButton;return(0,d.jsx)(g.rU,{to:n,children:"Go back"})},k=function(e){var n=e.state;return(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsx)(g.rU,{to:"cast",state:n,children:"Cast"}),(0,d.jsx)(g.rU,{to:"reviews",state:n,children:"Reviews"})]})},v=t(8766),j=function(e){var n=e.data,t=n.poster_path,r=n.title,i=n.vote_average,c=n.overview,s=n.genres;return(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+(t||v),alt:"movie poster",width:"200",height:"300"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:r}),(0,d.jsxs)("p",{children:["User score: ",Math.round(10*i)+"%"]}),(0,d.jsx)(x,{children:"Overview"}),(0,d.jsx)("p",{children:c}),(0,d.jsx)(x,{children:"Genres"}),(0,d.jsx)("p",{children:s.map((function(e){return e.name})).join(",")})]})]})},Z=function(){var e,n,t=(0,o.UO)().movieId,r=(0,o.TH)(),i=(0,a.K)(null,t),c=(0,p.Z)(i,1)[0],s=null!==(e=r.state)&&void 0!==e&&e.from?r.state.from:"/movies";if(console.log(c),c)return(0,d.jsxs)(A,{children:[(0,d.jsx)(f,{pathButton:s}),(0,d.jsx)(j,{data:c}),(0,d.jsx)(k,{state:{from:null===(n=r.state)||void 0===n?void 0:n.from}}),(0,d.jsx)(o.j3,{context:t})]})}},8766:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=378.10faff14.chunk.js.map