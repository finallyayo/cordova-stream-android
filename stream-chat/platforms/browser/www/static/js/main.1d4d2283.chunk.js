(this["webpackJsonpweb-notifications"]=this["webpackJsonpweb-notifications"]||[]).push([[0],{224:function(e,t,n){e.exports=n(601)},229:function(e,t,n){},231:function(e,t,n){},453:function(e,t){},601:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(23),i=n.n(o),s=(n(229),n(4)),l=n.n(s),u=n(206),m=n(223),h=(n(231),n(20)),p=n(31),f=n(221),b=n.n(f),w=n(222),d=n.n(w);n(600);var v=function(){var e=Object(r.useState)(null),t=Object(m.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)((function(){var e=b.a.generate();function t(){return(t=Object(u.a)(l.a.mark((function t(){var n,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.post("https://160c338b.ngrok.io/join",{username:e});case 3:return n=t.sent,r=n.data.token,c=n.data.api_key,a=new p.a(c),t.next=9,a.setUser({id:e,name:e},r);case 9:return i=a.channel("team","general"),t.next=12,i.watch();case 12:o(i),t.next=19;break;case 15:return t.prev=15,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return");case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),n?c.a.createElement(h.e,{client:a,theme:"team light"},c.a.createElement(h.c,{options:{subscribe:!0,state:!0},List:h.d}),c.a.createElement(h.a,{channel:n},c.a.createElement(h.j,null,c.a.createElement(h.b,null),c.a.createElement(h.g,{Message:h.h}),c.a.createElement(h.f,{focus:!0})),c.a.createElement(h.i,{Message:h.h}))):c.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[224,1,2]]]);
//# sourceMappingURL=main.1d4d2283.chunk.js.map