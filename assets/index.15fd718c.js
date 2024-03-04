import{_ as A,r as g,bW as L,c as r,b6 as y,B as Q,ar as B,bs as i,E as a,d as n,cU as E,cV as x,ay as T,ad as k,cW as N}from"./index.f532dd3a.js";import{Q as F}from"./QPage.a33d076d.js";import{u as U}from"./use-quasar.45d0ed96.js";import{c as W}from"./app.c2decb41.js";import"./dayjs.bb7adb48.js";import{u as $}from"./dataStore.6c36f61d.js";import{P as z}from"./projectPipeline.0dbd403d.js";import{_ as G}from"./projectSelector.ef5d8b1c.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.627988b4.js";import"./api.df6fe10b.js";import"./index.04bc0a32.js";import"./i18n.c56fe056.js";import"./QInnerLoading.10bc7485.js";import"./QTable.0549a35a.js";import"./QList.2a81b73f.js";import"./QMarkupTable.155ed162.js";import"./QSelect.40ac6683.js";import"./QChip.055ed411.js";import"./QMenu.219b0d4b.js";import"./position-engine.9267cf84.js";import"./selection.36689ad5.js";import"./rtl.b51694b1.js";import"./use-fullscreen.714ccbfc.js";import"./QTr.3fa521d6.js";import"./QTd.4c1c696b.js";import"./export-file.dc78ba05.js";const H={name:"Pipeline",components:{ProjectPipelineTable:z,projectSelector:G},setup(){const p=U(),l=W(),h=g(null),o=g(""),{getSelectedProject:d}=L(l),{fetchAllDeployments:v,fetchDeployments:u,fetchAllInProcess:m,fetchInProcess:c,fetchAllPending:j,fetchPending:q,getDeployments:P,getInProcess:D,getPending:b}=$(),s=r(()=>d.value?d.value[3]:null),C=r(()=>P(s.value).filter(e=>e[20]==="Complete")),S=r(()=>{const e=[];return P(s.value).forEach(t=>{t[31].toLowerCase().includes(o.value.toLowerCase())&&e.push(t)}),e}),I=r(()=>{const e=[];return b(s.value).forEach(t=>{t[25].toLowerCase().includes(o.value.toLowerCase())&&e.push(t)}),e}),R=r(()=>{const e=[];return D(s.value).forEach(t=>{t[39].toLowerCase().includes(o.value.toLowerCase())&&e.push(t)}),e}),V=r(()=>R.value.concat(I.value.concat(S.value)));async function w(e){if(p.loading.show(),s.value){const t=u({projectId:s.value,refresh:e}),f=c({projectId:s.value,refresh:e}),_=q({projectId:s.value,refresh:e});await t,await f,await _}else{const t=v({refresh:e}),f=m({refresh:e}),_=j({refresh:e});await t,await f,await _}p.loading.hide()}return w(),{projectFilter:h,arrived:C,allPipeline:V,search:o,loadData:w}}},J={class:"q-pt-sm"},K={class:"text-h5 text-dark"},M={class:"text-body2 text-italic q-ml-sm"},O=a("div",{class:"text-subtitle2 text-accent"},"The following people are currently in process or deployed for your job site(s).",-1),X={class:"row items-center"},Y={class:"col-12 col-md-3 q-px-sm"},Z={class:"col-12 col-md-3 q-px-sm"};function ee(p,l,h,o,d,v){const u=y("projectSelector"),m=y("project-pipeline-table");return Q(),B(F,{style:{"max-width":"100vw"}},{default:i(()=>[a("div",J,[n(E,{flat:""},{default:i(()=>[n(x,{class:"q-pb-none"},{default:i(()=>[a("div",K,[T(" Staffing Pipeline "),a("span",M,"("+k(o.allPipeline.length)+" total)",1)]),O]),_:1}),n(x,null,{default:i(()=>[a("div",X,[a("div",Y,[n(u,{dense:""})]),a("div",Z,[n(N,{dense:"",modelValue:o.search,"onUpdate:modelValue":l[0]||(l[0]=c=>o.search=c),label:"Search"},null,8,["modelValue"])])])]),_:1})]),_:1}),n(m,{rows:o.allPipeline,onRefreshData:l[1]||(l[1]=c=>o.loadData(!0))},null,8,["rows"])])]),_:1})}var Se=A(H,[["render",ee]]);export{Se as default};
