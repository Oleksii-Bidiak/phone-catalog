"use strict";(self.webpackChunkreact_typescript_starter_pack=self.webpackChunkreact_typescript_starter_pack||[]).push([[998],{5488:(e,t,s)=>{s.d(t,{u:()=>b});var a=s(5043),c=s(2640),n=s(1516);const o="pagePartTop_breadcrumbs__w4WWL",r="pagePartTop_breadcrumbs__link__uPm9H",i="pagePartTop_title__cTbty",l="pagePartTop_label__WOTPD",d="pagePartTop_currentBreadcrumb__pf8be",u="pagePartTop_backButton__y2bLU";var _=s(3216),p=s(5475),m=s(3594),h=s(3762),g=s(8139),f=s.n(g),v=s(1596),j=s(579);const b=(0,a.memo)((e=>{let{title:t,isLoadingTitle:s=!1,isLoading:g=!1,productsCount:b=0,tag:x="h1",productName:N}=e;const{itemId:w}=(0,_.g)(),k=(0,_.zy)(),S=(0,_.Zp)(),[T,y]=(0,a.useState)(!1);(0,a.useEffect)((()=>{var e;const t=void 0!==(null===(e=k.state)||void 0===e?void 0:e.fromLocation);y(!!t)}),[k]);const L=(0,a.useMemo)((()=>{const e=k.pathname.split("/");return e.map(((t,s)=>{const a=s===e.length-1,c="".concat(e.slice(0,s+1).join("/"));return 0===s?(0,j.jsx)(p.N_,{to:m.AY.home,className:f()(r,h.A["_icon-home"])},s):"products"===t?null:a?(0,j.jsx)("span",{className:d,children:w?N||"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f...":(0,v.Z)(t)},s):(0,j.jsx)(p.N_,{to:c,className:r,children:(0,v.Z)(t)},s)}))}),[w,k.pathname,N]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("nav",{className:o,children:L.filter(Boolean)}),T&&(0,j.jsx)("button",{className:f()(u,h.A["_icon-arrow"]),onClick:()=>{S(-1)},children:"Back"}),s?(0,j.jsx)(n.m,{height:"h1"===x?56:41,width:"100%",className:i}):(0,j.jsx)(c.v,{Tag:x,title:t,className:i}),g&&(0,j.jsx)(n.m,{height:21,width:"100%"}),!g&&0!==b&&(0,j.jsx)("p",{className:l,children:"".concat(b," models")})]})}))},9998:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(5043),c=s(8115),n=s(5488),o=s(4763);const r=async()=>{let e=await(0,c.j0)();return Array.isArray(e)?(e=[...e].filter((e=>e.favorite)),e):[]};var i=s(4679),l=s(579);function d(){const[e,t]=(0,a.useState)([]),[s,d]=(0,a.useState)([]),[u,_]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{t((e=>e.filter((e=>s.includes(e.itemId)))))}),[s]),(0,a.useEffect)((()=>{_(!0),r().then((e=>t(e))).finally((()=>_(!1)));const e=e=>{const{key:t,value:s}=e.detail;t===c.E7&&d(s)};return window.addEventListener("localStorageChange",e),()=>{window.removeEventListener("localStorageChange",e)}}),[]),(0,l.jsxs)(o.w,{firstSection:!0,lastSection:!0,children:[(0,l.jsx)(n.u,{title:i.Q.favorites,productsCount:e.length}),(0,l.jsx)(c.jR,{isLoading:u,products:e})]})}},4763:(e,t,s)=>{s.d(t,{w:()=>d});const a="section_standartSection__XoKuD",c="section_firstSection__E9ELY",n="section_padding-bottom__Wtqke";var o=s(8139),r=s.n(o),i=s(3774),l=s(579);const d=e=>{let{children:t,className:s,firstSection:o,lastSection:d=!1}=e;return(0,l.jsx)("section",{className:r()(s,a,{[c]:o,[n]:d}),children:(0,l.jsx)(i.m,{children:t})})}},4679:(e,t,s)=>{s.d(t,{Q:()=>a});const a={home:"Welcome to Nice Gadgets store!",phones:"Mobile phones",tablets:"Tablets",accessories:"Accessories",favorites:"Favorites",cart:"Cart"}}}]);
//# sourceMappingURL=998.efa4d135.chunk.js.map