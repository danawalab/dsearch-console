(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[64],{1025:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(96),c=a(0),l=a.n(c),i=a(85),u=a(35),o=a(10),m=a(124),s=a.n(m),p=a(711),d=a(613),f=a(89),E=a(716),h=a(757),b=a(208),g=a(687),y=a(682),j=a(686),v=a(689),O=a(688),w=a(371),x=a(685),_=a(582),k=a(744),C=a(733),U=Object(x.a)((function(e){return{formControl:{minWidth:250},root:{flexGrow:1,width:"100%"},edit:{width:"100%"}}})),F=Object(o.c)(p.a)(_.a),T=Object(o.c)(d.a)(_.a,k.a),J=Object(o.c)(f.a)(_.a,k.a);t.default=Object(u.b)((function(e){return Object(n.a)({authUser:e.dsearchReducers.authUser},e.indexTemplateReducers)}))((function(e){var t=e.dispatch,a=e.authUser,n=e.templates,u=Object(i.f)(),o=U();Object(c.useEffect)((function(){t(Object(C.d)())}),[]);var m=n.map((function(e){return t=e.name,a=e.index_patterns,{name:t,pattern:a};var t,a})).sort((function(e,t){return e.name>=t.name?1:-1}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:"\ud15c\ud50c\ub9bf"}),l.a.createElement("br",null),l.a.createElement(J,{variant:"h3",gutterBottom:!0,display:"inline"},"\ud15c\ud50c\ub9bf"),l.a.createElement(F,{my:6}),l.a.createElement(T,{align:"right"},a.role.index?l.a.createElement(E.a,{onClick:function(){return u.push("./indices-templates/new")},style:{cursor:"pointer"},color:"primary"},"\ud15c\ud50c\ub9bf \uc0dd\uc131"):l.a.createElement(l.a.Fragment,null)),l.a.createElement("br",null),l.a.createElement(h.a,{component:b.a},l.a.createElement(g.a,{className:o.table,"aria-label":"simple table"},l.a.createElement(y.a,null,l.a.createElement(j.a,null,l.a.createElement(v.a,{align:"center"},"#"),l.a.createElement(v.a,{align:"center"},"\uc774\ub984"),l.a.createElement(v.a,{align:"center"},"\ud328\ud134"),l.a.createElement(v.a,{align:"center"}))),l.a.createElement(O.a,null,m.map((function(e,t){return l.a.createElement(j.a,{key:e.name},l.a.createElement(v.a,{component:"th",scope:"row",align:"center"},t+1),l.a.createElement(v.a,{align:"center"},l.a.createElement(E.a,{onClick:function(){return u.push("./indices-templates/".concat(e.name))},style:{cursor:"pointer"}},e.name)),l.a.createElement(v.a,{align:"center"},e.pattern),l.a.createElement(v.a,{align:"center"},a.role.index?l.a.createElement(w.a,Object(r.a)({variant:"outlined",color:"primary",onClick:function(){return u.push("./indices-templates/".concat(e.name,"/edit"))},style:{cursor:"pointer"}},"color","primary"),"\uc218\uc815"):l.a.createElement(l.a.Fragment,null)))}))))))}))},733:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return o}));var n=a(64),r=a(4),c=new n.a,l=function(){return function(e){return c.call({uri:"/elasticsearch/_cat/templates?format=json"}).then((function(t){return e({type:r.I,payload:t.data.filter((function(e){return!e.name.startsWith(".")}))})}))}},i=function(e){var t=e.template,a=e.index_patterns,n=e.settings,r=e.mappings;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t),method:"PUT",data:{index_patterns:a,settings:n,mappings:r}})}},u=function(e){var t=e.template;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t),method:"DELETE"})}},o=function(e){var t=e.template;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t)}).then((function(a){return e({type:r.H,payload:a.data[t]})}))}}}}]);
//# sourceMappingURL=64.46660a8d.chunk.js.map