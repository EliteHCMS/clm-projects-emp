import{Q as O}from"./QTd.29e76dcc.js";import{Q as N}from"./QTable.798085b6.js";import{c0 as d,aJ as k,y as w,al as T,E as P,a5 as i,r as u,w as Q,c as g,z as x,d as p,bg as _,B as h,a9 as S}from"./index.b3e75908.js";import{u as A,r as I}from"./quickbase.002c2695.js";import{a as D}from"./QSelect.f41b057f.js";import{dayjs as U}from"./dayjs.d2fb0443.js";import"./QList.54b3498e.js";import"./QMarkupTable.f25c18f2.js";import"./use-fullscreen.7a786134.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.69471374.js";import"./index.7dbe61ef.js";import"./i18n.6357316e.js";import"./api.4d9372cc.js";import"./QMenu.c7af2595.js";import"./position-engine.dc1fa88b.js";import"./selection.f696f409.js";import"./rtl.65b79c69.js";const V={__name:"officeSelector",setup(B){const s=A(),o=I(),{userOffices:r,primaryOffice:n}=d(s),{setSelectedOffice:e}=o,{getSelectedOffice:a}=d(o);k(()=>{e(n.value)}),a.value||e(n.value);const c=t=>{e(t)};return(t,v)=>(w(),T(D,P({"model-value":i(a),options:i(r)},t.$attrs,{"onUpdate:modelValue":c,label:"Office","option-label":"11","option-value":"8",clearable:""}),null,16,["model-value","options"]))}},$={class:"q-pa-md"},te={__name:"index",setup(B){const s=I(),{fetchSelfCheckIns:o,fetchAllSelfCheckIns:r}=s,{getSelfCheckIns:n,getSelectedOffice:e}=d(s),a=u(e.value?e.value[8]:null),c=u({sortBy:"13",descending:!1,rowsPerPage:100});a.value?o({officeId:a.value}):r(),Q(e,()=>{a.value=e.value?e.value[8]:null,a.value?o({officeId:a.value}):r()});const t=u(new Date),v=setInterval(()=>{t.value=new Date},1e3);k(()=>{clearInterval(v)});const C=[{name:"timeCheckIn",align:"left",label:"Time Check-In",field:"13",sortable:!1},{name:"name",align:"left",label:"Name",field:"17",sortable:!1},{name:"phoneNumber",align:"center",label:"Phone Number",field:"6",sortable:!1},{name:"reason",align:"center",label:"Reason",field:"10",sortable:!1},{name:"status",align:"center",label:"Status",field:"15",sortable:!1},{name:"task",align:"center",label:"Task",field:"27",sortable:!1}],b=g(()=>n.value(a.value).sort((l,f)=>c.value.descending?l[13].isBefore(f[13]):l[13].isAfter(f[13]))),y=g(()=>b.value.map(l=>U(t.value).to(l[13])));return(l,f)=>(w(),x("div",$,[p(V),p(N,{dense:l.$q.screen.lt.md,title:"Self Check Ins",rows:i(b),columns:C,pagination:c.value,"row-key":"3"},{"body-cell-timeCheckIn":_(m=>[p(O,{props:m},{default:_(()=>[h("div",null,S(m.value.format("h:mm:ss A")),1),h("div",null,S(i(y)[m.rowIndex]),1)]),_:2},1032,["props"])]),_:1},8,["dense","rows","pagination"])]))}};export{te as default};
