import{Q,a as V}from"./QLayout.4b919ba9.js";import{_ as g,bW as B,bU as C,bV as I,r as U,w as d,b6 as k,B as r,ar as s,bs as v,d as n,a9 as a,as as c,bX as F}from"./index.f532dd3a.js";import{u as L}from"./i18n.c56fe056.js";import{b as R,q as y}from"./app.c2decb41.js";import{_ as K}from"./KioskLogin.5640b025.js";import{_ as P}from"./version.e8f56180.js";import"./QResizeObserver.fdf89ea6.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.bb7adb48.js";import"./localForage.627988b4.js";import"./api.df6fe10b.js";import"./index.04bc0a32.js";import"./use-quasar.45d0ed96.js";import"./vee-validate.esm.f12921ec.js";import"./array.59f93f43.js";import"./QList.2a81b73f.js";import"./QMenu.219b0d4b.js";import"./position-engine.9267cf84.js";import"./selection.36689ad5.js";import"./ClosePopup.49b5470b.js";const j={__name:"FullLayout",setup(z){const b=R(),{onKiosk:t,kioskActive:q,startPageEnabled:p,homeButtonEnabled:h}=B(b),i=C(),o=I(),{locale:m}=L(),u=U(!1),l=async()=>{await y.checkKioskStatus()||(u.value=!0)};if(t.value&&l(),o.query.office_id){const e=Object.assign({},o.query);delete e.office_id,delete e.qr,i.replace({query:e})}d(q,e=>{!e&&t.value&&l()}),d(()=>o.query,()=>{if(t.value&&l(),o.query.office_id){const e=Object.assign({},o.query);delete e.office_id,e.qr&&(y.checkInUser(),delete e.qr),i.replace({query:e})}});const _=()=>{m.value!=="en-US"&&(m.value="en-US"),p.value&&i.replace({name:"start"})};return(e,f)=>{const S=k("router-view"),w=k("v-idle");return r(),s(V,{view:"hHh lpR fFf"},{default:v(()=>[n(Q,null,{default:v(()=>[n(S)]),_:1}),a(t)?(r(),s(K,{key:0,modelValue:u.value,"onUpdate:modelValue":f[0]||(f[0]=x=>u.value=x)},null,8,["modelValue"])):c("",!0),a(t)?(r(),s(w,{key:1,onIdle:_,duration:300,style:{display:"none"}})):c("",!0),n(P),a(t)&&a(p)&&a(h)?(r(),s(F,{key:2,icon:"o_home",onClick:_,class:"z-max home-button-full",size:"xl",ripple:!0})):c("",!0)]),_:1})}}};var se=g(j,[["__scopeId","data-v-5c819b5c"]]);export{se as default};
