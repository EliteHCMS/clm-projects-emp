import{Q as y}from"./QTd.536899d0.js";import{Q as N}from"./QTable.d0e75c6a.js";import{c1 as p,aK as k,z as I,am as T,G as Q,a6 as c,r as u,w as x,c as b,A,d,bh as _,C as g,aa as S}from"./index.4c9f8c37.js";import{u as D,r as w}from"./quickbase.d4bab664.js";import{a as P}from"./QSelect.fe159a75.js";import{dayjs as U}from"./dayjs.acb2046f.js";import"./QList.89ca7c97.js";import"./QMarkupTable.070869b6.js";import"./use-fullscreen.ec4e4e2d.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.55355626.js";import"./index.7dbe61ef.js";import"./i18n.7cca90cb.js";import"./api.28aa76b3.js";import"./QChip.431569ac.js";import"./QMenu.4b80824b.js";import"./position-engine.9c2caf08.js";import"./selection.ee298b9a.js";import"./rtl.65b79c69.js";const V={__name:"officeSelector",setup(C){const s=D(),o=w(),{userOffices:r,primaryOffice:n}=p(s),{setSelectedOffice:e}=o,{getSelectedOffice:a}=p(o);k(()=>{e(n.value)}),a.value||e(n.value);const i=t=>{e(t)};return(t,v)=>(I(),T(P,Q({"model-value":c(a),options:c(r)},t.$attrs,{"onUpdate:modelValue":i,label:"Office","option-label":"11","option-value":"8",clearable:""}),null,16,["model-value","options"]))}},$={class:"q-pa-md"},le={__name:"index",setup(C){const s=w(),{fetchSelfCheckIns:o,fetchAllSelfCheckIns:r}=s,{getSelfCheckIns:n,getSelectedOffice:e}=p(s),a=u(e.value?e.value[8]:null),i=u({sortBy:"13",descending:!1,rowsPerPage:100});a.value?(o({officeId:a.value}),fetch({action:"Self Check-Ins"})):r(),x(e,()=>{a.value=e.value?e.value[8]:null,a.value?o({officeId:a.value}):r()});const t=u(new Date),v=setInterval(()=>{t.value=new Date},1e3);k(()=>{clearInterval(v)});const B=[{name:"timeCheckIn",align:"left",label:"Time Check-In",field:"13",sortable:!1},{name:"name",align:"left",label:"Name",field:"17",sortable:!1},{name:"phoneNumber",align:"center",label:"Phone Number",field:"6",sortable:!1},{name:"reason",align:"center",label:"Reason",field:"10",sortable:!1},{name:"status",align:"center",label:"Status",field:"15",sortable:!1},{name:"task",align:"center",label:"Task",field:"27",sortable:!1}],h=b(()=>n.value(a.value).sort((l,f)=>i.value.descending?l[13].isBefore(f[13]):l[13].isAfter(f[13]))),O=b(()=>h.value.map(l=>U(t.value).to(l[13])));return(l,f)=>(I(),A("div",$,[d(V),d(N,{dense:l.$q.screen.lt.md,title:"Self Check Ins",rows:c(h),columns:B,pagination:i.value,"row-key":"3"},{"body-cell-timeCheckIn":_(m=>[d(y,{props:m},{default:_(()=>[g("div",null,S(m.value.format("h:mm:ss A")),1),g("div",null,S(c(O)[m.rowIndex]),1)]),_:2},1032,["props"])]),_:1},8,["dense","rows","pagination"])]))}};export{le as default};
