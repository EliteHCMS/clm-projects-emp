import{Q as b,a as k}from"./QHeader.d8c1d265.js";import{Q as S}from"./QToolbar.1236ea00.js";import{b as Q,a as w}from"./QLayout.59a3dbfc.js";import{_ as x,c3 as H,c0 as C,aX as i,y as e,al as c,bg as t,d as o,z as a,am as u,a9 as T,a5 as p}from"./index.b3e75908.js";import{u as q}from"./i18n.6357316e.js";import{u as B,c as I}from"./quickbase.002c2695.js";import"./QResizeObserver.cb43d377.js";import"./_commonjsHelpers.dfee5925.js";import"./dayjs.d2fb0443.js";import"./localForage.69471374.js";import"./index.7dbe61ef.js";import"./api.4d9372cc.js";const U={key:0,class:"q-mr-sm q-ml-sm",src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo-white.png",alt:"BrandSafway Logo",height:"25"},E={key:0},R={key:1},W={__name:"fullWithHeader",setup(L){const s=H(),{locale:r}=q(),{logout:m}=B(),_=I(),{onKiosk:l,toolbarTitle:d,startPageEnabled:f}=C(_),h=async()=>{m().then(()=>{f.value&&l.value?s.replace({name:"start"}):s.replace({name:"login"})})},g=()=>{r.value!=="en-US"&&(r.value="en-US"),h()};return(n,N)=>{const v=i("router-view"),y=i("v-idle");return e(),c(w,{view:"hHh lpR fFf"},{default:t(()=>[o(k,{elevated:""},{default:t(()=>[o(S,{style:{height:"62px"}},{default:t(()=>[n.$q.screen.gt.sm?(e(),a("img",U)):u("",!0),o(b,null,{default:t(()=>[n.$q.screen.lt.sm?(e(),a("span",E)):(e(),a("span",R,T(p(d)),1))]),_:1})]),_:1})]),_:1}),o(Q,null,{default:t(()=>[o(v)]),_:1}),p(l)?(e(),c(y,{key:0,onIdle:g,duration:300,style:{display:"none"}})):u("",!0)]),_:1})}}};var J=x(W,[["__scopeId","data-v-96561baa"]]);export{J as default};
