(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[57],{1010:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(61),c=n(0),l=n.n(c),i=n(39),u=n(94),o=n(14),s=n(134),d=n.n(s),m=n(711),f=n(99),p=n(618),h=n(684),E=n(346),b=n(665),g=n(717),y=n(756),v=n(218),j=n(690),x=n(685),O=n(689),k=n(692),_=n(691),S=n(722),C=n(723),w=n(724),T=n(700),z=n(725),A=n(688),W=n(588),N=n(654),R=n(747),q=n(734),B=Object(o.c)(m.a)(W.a,N.a),P=Object(o.c)(f.a)(W.a,N.a),U=Object(o.c)(p.a)(W.a,N.a),I=(Object(o.c)(h.a)(W.a,N.a),Object(o.c)(E.a)(W.a,N.a)),F=Object(o.c)(b.a)(W.a,N.a),L=Object(A.a)((function(e){return{formControl:{minWidth:250},root:{flexGrow:1,width:"100%"},edit:{width:"100%"},link:{cursor:"pointer"}}}));t.default=Object(i.b)((function(e){return Object(a.a)(Object(a.a)({authUser:e.dsearchReducers.authUser},e.collectionReducers),e.indexTemplateReducers)}))((function(e){var t=e.dispatch,n=e.authUser,i=e.indexSuffixA,o=e.indexSuffixB,s=e.collectionList,m=e.catIndexTemplateList,f=Object(u.f)(),p=L(),h=Object(c.useState)(!1),E=Object(r.a)(h,2),b=E[0],A=E[1],W=Object(c.useState)(""),N=Object(r.a)(W,2),J=N[0],Z=N[1],D=Object(c.useState)(""),G=Object(r.a)(D,2),H=G[0],K=G[1],M=Object(c.useState)(""),Q=Object(r.a)(M,2),V=Q[0],X=Q[1],Y=Object(c.useState)(!1),$=Object(r.a)(Y,2),ee=$[0],te=$[1],ne=Object(c.useState)(!1),ae=Object(r.a)(ne,2),re=ae[0],ce=ae[1],le=Object(c.useState)(null),ie=Object(r.a)(le,2),ue=ie[0],oe=ie[1],se=Object(c.useState)(!1),de=Object(r.a)(se,2),me=de[0],fe=de[1],pe=Object(c.useState)(!0),he=Object(r.a)(pe,2),Ee=he[0],be=he[1];function ge(){be(!0),fe(!1),oe(null),te(!1),ce(!1),X(""),Z(""),K(""),A(!b)}function ye(e){f.push("./indices-collections/".concat(e))}function ve(e){if(void 0===e||null===e||""===e)return!1;f.push("./indices/".concat(e))}return Object(c.useEffect)((function(){t(Object(R.i)()),t(Object(q.d)()),t(Object(R.k)()),t(Object(R.g)())}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{title:"\uceec\ub809\uc158"}),l.a.createElement("br",null),l.a.createElement(P,{variant:"h3",gutterBottom:!0,display:"inline"},"\uceec\ub809\uc158"),l.a.createElement(B,{my:6}),l.a.createElement(U,{align:"right"},n.role.index?l.a.createElement(g.a,{className:p.link,onClick:ge,color:"primary"},"\uceec\ub809\uc158 \uc0dd\uc131"):l.a.createElement(l.a.Fragment,null)),l.a.createElement("br",null),l.a.createElement(y.a,{component:v.a},l.a.createElement(j.a,{className:p.table,"aria-label":"simple table"},l.a.createElement(x.a,null,l.a.createElement(O.a,null,l.a.createElement(k.a,{align:"center"},"#"),l.a.createElement(k.a,{align:"center"},"\uc774\ub984"),l.a.createElement(k.a,{align:"center"},"\uc544\uc774\ub514"),l.a.createElement(k.a,{align:"center"},"\uc120\ud0dd \uc778\ub371\uc2a4"),l.a.createElement(k.a,{align:"center"},"\uc0e4\ub4dc"),l.a.createElement(k.a,{align:"center"},"\ubb38\uc11c \uc218"),l.a.createElement(k.a,{align:"center"},"\uc6a9\ub7c9"),l.a.createElement(k.a,{align:"center"},"\uc790\ub3d9\uc2dc\uc791"))),l.a.createElement(_.a,null,s.map((function(e,t){var n=e.id,a=e.name,r=e.baseId,c=e.indexA||{},i=e.indexB||{},u=c.aliases&&Object.keys(c.aliases).find((function(e){return e===r})),o=void 0!==u&&null!==u,s=i.aliases&&Object.keys(i.aliases).find((function(e){return e===r})),d=void 0!==s&&null!==s;return l.a.createElement(O.a,{key:e.id},l.a.createElement(k.a,{align:"center"},t+1),l.a.createElement(k.a,{align:"center"},l.a.createElement(g.a,{className:p.link,onClick:function(){return ye(n)}},a)),l.a.createElement(k.a,{align:"center"},l.a.createElement(g.a,{className:p.link,onClick:function(){return ye(n)}},r)),l.a.createElement(k.a,{align:"center"},l.a.createElement(g.a,{style:{display:o?"block":"none"},onClick:function(){return ve(c.uuid)},className:p.link},c.index),l.a.createElement(g.a,{style:{display:d?"block":"none"},onClick:function(){return ve(i.uuid)},className:p.link},i.index),l.a.createElement(U,{style:{display:!1===o&&!1===d?"block":"none"}}," - ")),l.a.createElement(k.a,{align:"center"},l.a.createElement(U,{style:{display:o?"block":"none"}},"P[",c.pri||"-","] R[",c.rep||"-","]"),l.a.createElement(U,{style:{display:d?"block":"none"}},"P[",i.pri||"-","] R[",i.rep||"-","]"),l.a.createElement(U,{style:{display:!1===o&&!1===d?"block":"none"}}," - ")),l.a.createElement(k.a,{align:"center"},l.a.createElement(U,{style:{display:o?"block":"none"}},c.docsCount||"-"),l.a.createElement(U,{style:{display:d?"block":"none"}},i.docsCount||"-"),l.a.createElement(U,{style:{display:!1===o&&!1===d?"block":"none"}}," - ")),l.a.createElement(k.a,{align:"center"},l.a.createElement(U,{style:{display:o?"block":"none"}},c.storeSize||"-"),l.a.createElement(U,{style:{display:d?"block":"none"}},i.storeSize||"-"),l.a.createElement(U,{style:{display:!1===o&&!1===d?"block":"none"}}," - ")),l.a.createElement(k.a,{align:"center"},l.a.createElement(U,null,e.scheduled||"false")))}))))),l.a.createElement(S.a,{open:b,fullWidth:!0,onClose:ge},l.a.createElement(C.a,null,"\uceec\ub809\uc158 \ucd94\uac00"),l.a.createElement(w.a,null,l.a.createElement(F,{container:!0,my:3},l.a.createElement(F,{item:!0,xs:4,mt:2},"\uceec\ub809\uc158 \uc774\ub984"),l.a.createElement(F,{item:!0,xs:8},l.a.createElement(T.a,{fullWidth:!0,autoFocus:!0,value:J,onChange:function(e){te(!1),Z(e.target.value),0!==e.target.value.length&&0!==H.length&&!1===re?be(!1):be(!0)},placeholder:"\uc0c1\ud488\uceec\ub809\uc158",error:ee}))),l.a.createElement(F,{container:!0,my:3},l.a.createElement(F,{item:!0,xs:4,mt:2},"\uceec\ub809\uc158 \uc544\uc774\ub514"),l.a.createElement(F,{item:!0,xs:8},l.a.createElement(T.a,{fullWidth:!0,value:H,onChange:function(e){ce(!1),K(e.target.value);var t=!1;if((e.target.value.length>1&&!/^[a-z]+[a-z0-9-_]/g.test(e.target.value)||1===e.target.value.length&&/[0-9]/g.test(e.target.value)||e.target.value.startsWith(".")||/[A-Z]/g.test(e.target.value)||/[\u3131-\u314e\uac00-\ud7a3]/g.test(e.target.value))&&(ce(!0),t=!0),""!==e.target.value){var n=[];m.forEach((function(t){var r=t.index_patterns;(r=r.substring(1,r.length-1).split(", ")).forEach((function(c){var l=new RegExp(c.replace(/\*/gi,"\\S*"),"gi");if(null!==e.target.value.match(l)||e.target.value+i===c||e.target.value+o===c)return n.push(Object(a.a)(Object(a.a)({},t),{},{index_patterns:r})),!1}))})),n.find((function(t){return t.name===e.target.value+i}))||n.push({name:e.target.value+i,index_patterns:[e.target.value+i]}),n.find((function(t){return t.name===e.target.value+o}))||n.push({name:e.target.value+i,index_patterns:[e.target.value+o]}),X(e.target.value),0!==J.trim().length&&!1===t?be(!1):be(!0)}else be(!0),X("")},placeholder:"product-collection",error:re}))),l.a.createElement(F,{container:!0,my:3},l.a.createElement(F,{item:!0,xs:4},"\uc778\ub371\uc2a4 \ud15c\ud50c\ub9bf"),l.a.createElement(F,{item:!0,xs:8},V||"")),l.a.createElement(F,{container:!0,my:3},l.a.createElement(F,{item:!0,xs:4},"\uc778\ub371\uc2a4 \ud328\ud134"),l.a.createElement(F,{item:!0,xs:8},""!==H?H+i+", ":"",""!==H?H+o:"")),l.a.createElement(F,{container:!0,my:3,style:{display:ue?"none":"block",color:"red",textAlign:"center"}},l.a.createElement(F,{item:!0,xs:12},ue))),l.a.createElement(z.a,null,l.a.createElement(I,{onClick:function(){return""===J?(te(!0),!1):H.length>1&&!/^[a-z]+[a-z0-9-_]/g.test(H)||1===H.length&&/[0-9]/g.test(H)||H.startsWith(".")||/[A-Z]/g.test(H)||/[\u3131-\u314e\uac00-\ud7a3]/g.test(H)?(ce(!0),!1):(fe(!0),void t(Object(R.a)({name:J,baseId:H})).then((function(e){ge(),setTimeout((function(){t(Object(R.k)()),setTimeout((function(){t(Object(R.k)())}),500)}),500),fe(!1)})).catch((function(e){ce(!0),oe("\ucd94\uac00 \uc2e4\ud328."),console.log("error",e),fe(!1)})))},disabled:me||Ee,variant:"outlined",color:"primary"},"\ucd94\uac00"),l.a.createElement(I,{onClick:ge,variant:"outlined",color:"default"},"\ucde8\uc18c"))))}))},734:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o}));var a=n(71),r=n(4),c=new a.a,l=function(){return function(e){return c.call({uri:"/elasticsearch/_cat/templates?format=json"}).then((function(t){return e({type:r.I,payload:t.data.filter((function(e){return!e.name.startsWith(".")}))})}))}},i=function(e){var t=e.template,n=e.index_patterns,a=e.settings,r=e.mappings;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t),method:"PUT",data:{index_patterns:n,settings:a,mappings:r}})}},u=function(e){var t=e.template;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t),method:"DELETE"})}},o=function(e){var t=e.template;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t)}).then((function(n){return e({type:r.H,payload:n.data[t]})}))}}},747:function(e,t,n){"use strict";n.d(t,"k",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"i",(function(){return i})),n.d(t,"h",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"l",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"g",(function(){return p})),n.d(t,"j",(function(){return h})),n.d(t,"d",(function(){return E}));var a=n(4),r=new(n(71).a),c=function(){return function(e){return r.call({uri:"/collections"}).then((function(t){return e({type:a.o,payload:t.data})}))}},l=function(e){return function(t){return r.call({uri:"/collections",method:"POST",data:e})}},i=function(){return function(e){return r.call({uri:"/collections",params:{action:"indexSuffix"}}).then((function(t){return e({type:a.m,payload:t.data})}))}},u=function(e){return function(t){return r.call({uri:"/collections/".concat(e)}).then((function(e){return t({type:a.k,payload:e.data})}))}},o=function(e){return function(t){return r.call({uri:"/collections/".concat(e),method:"delete"})}},s=function(e,t){return function(n){return r.call({uri:"/collections/".concat(e),method:"put",params:{action:"source"},data:t}).then((function(e){return e.data}))}},d=function(e,t){return function(n){return r.call({uri:"/collections/".concat(e),method:"put",params:{action:"schedule"},data:{scheduled:t}}).then((function(e){return e.data}))}},m=function(e){var t=e.indexA,n=e.indexB,c=e.from,l=e.size;return function(e){return r.call({uri:"/elasticsearch/.dsearch_index_history/_search",method:"post",params:{pretty:!0,filter_path:"hits"},data:{query:{bool:{should:[{term:{index:{value:t}}},{term:{index:{value:n}}},{term:{"index.keyword":{value:t}}},{term:{"index.keyword":{value:n}}}],minimum_should_match:1}},sort:[{startTime:{order:"desc"},_score:{order:"desc"}}],from:c,size:l}}).then((function(t){return e({type:a.l,payload:t.data})}))}},f=function(e){var t=e.indexA,n=e.indexB,a=e.time;return function(e){return r.call({uri:"/elasticsearch/.dsearch_index_history/_delete_by_query",method:"post",data:{query:{bool:{should:[{match:{index:{query:t,boost:1}}},{match:{index:{query:n,boost:1}}}],minimum_should_match:1,filter:{range:{startTime:{lte:a}}}}}}}).then((function(e){return e.data}))}},p=function(){return function(e){return r.call({uri:"/elasticsearch/_cat/templates?format=json"}).then((function(t){return e({type:a.f,payload:t.data})}))}},h=function(e){return function(t){return r.call({uri:"/collections/".concat(e,"/job")}).then((function(e){return e.data?t({type:a.n,payload:e.data}):t({type:a.n,payload:{}}),e.data}))}},E=function(e,t){return function(n){return r.call({uri:"/collections/".concat(e,"/action"),method:"PUT",params:{action:t}}).then((function(e){return e.data}))}}}}]);
//# sourceMappingURL=57.1e35cd5f.chunk.js.map