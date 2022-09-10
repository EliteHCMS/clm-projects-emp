import{Q}from"./QSpace.0aefa4da.js";import{c1 as z,r as m,w as A,aK as Y,c as _,z as g,A as w,d as a,bh as n,c2 as E,C as d,E as h,a6 as o,aa as u,c3 as O,cx as M,bX as R,c6 as V}from"./index.52c71ca6.js";import{Q as $}from"./QTd.be89a153.js";import{u as U}from"./use-quasar.8076b8cd.js";import{e as K}from"./export-file.6b95af49.js";import{R as W,c as X}from"./quickbase.0d6b62e6.js";import{dayjs as F}from"./dayjs.7e2f14dc.js";import{_ as G}from"./hiringTabs.511d2e09.js";import{_ as H,a as J}from"./aTable.0ed71fc6.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.83b50c47.js";import"./index.7dbe61ef.js";import"./i18n.3d69f992.js";import"./api.14a19609.js";import"./QBadge.58e5f8ba.js";import"./QRouteTab.81b0e7cb.js";import"./QTabs.b09ba654.js";import"./QResizeObserver.cd0d3c43.js";import"./rtl.a367ced8.js";import"./QSelect.02464590.js";import"./QChip.bee081d7.js";import"./QMenu.b5435217.js";import"./position-engine.901fa583.js";import"./selection.445971ab.js";import"./QTable.34b4b377.js";import"./QList.dade0d45.js";import"./QMarkupTable.6709601e.js";import"./use-fullscreen.57b102bc.js";const Z={class:"q-pa-md"},ee={class:"row items-center"},te={class:"col-12 col-md-5 q-px-sm"},ae={class:"col-12 col-md-4 q-px-sm"},le={class:"col-12 col-md-5 q-px-sm"},oe={key:0},se={key:1},Ne={__name:"index",setup(ne){const i=U(),x=W(),{openWindow:B}=X(),{fetchProfiles:y,fetchAllProfiles:S}=x,{getProfiles:D,getSelectedOffice:r,getLoadingState:T}=z(x),c=m(r.value?r.value[8]:null),p=m("Profiles"),q=m("profiles"),v=m(""),C=m({sortBy:"1",descending:!1,rowsPerPage:150});c.value?y({selectedId:c.value,refresh:!0}):S({can:"read"}),A(r,()=>{c.value=r.value?r.value[8]:null,c.value?y({selectedId:c.value}):S({can:"read"})});const I=m(new Date),N=setInterval(()=>{I.value=new Date},1e3);Y(()=>{clearInterval(N)});const j=_(()=>["index","submissionTime","name","phoneNumber","craft","latestScore","employmentStatus","action",...r.value?[]:["office"]]),b=_(()=>[{name:"index",align:"left",label:"#",sortable:!1},{name:"submissionTime",align:"left",label:"Time",field:"78",sortable:!1},{name:"name",align:"left",label:"Name",field:"24",sortable:!1},{name:"phoneNumber",align:"center",label:"Phone Number",field:"25",sortable:!1},{name:"craft",align:"center",label:"Craft",field:"52",sortable:!1},{name:"latestScore",align:"center",label:"Latest Score",field:"155",sortable:!1},{name:"employmentStatus",align:"center",label:"Employment Status",field:"56",sortable:!1},{name:"office",align:"center",label:"Office",field:"191",sortable:!1},{name:"action",align:"center",label:"",sortable:!1}]),f=_(()=>D.value(c.value).filter(l=>!0).sort((l,s)=>C.value.descending?l[1].isBefore(s[1]):l[1].isAfter(s[1]))),k=(l,s,e)=>{let t=s!==void 0?s(l,e):l;return t=t==null?"":String(t),t=t.split('"').join('""'),`"${t}"`},L=l=>{B(null,{url:`https://elitehcms.quickbase.com/db/bpzpy6n3x?a=dbpage&pageID=2&ee=${l[3]}`,name:"View Profile"})},P=()=>{const l=[b.value.map(e=>k(e.label))].concat(f.value.map(e=>b.value.map(t=>k(typeof t.field=="function"?t.field(e):e[t.field===void 0?t.name:t.field],t.format,e)).join(","))).join(`\r
`);K(`${p.value} ${F().format("MM.DD.YYYY")}.csv`,l,"text/csv")!==!0&&i.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})};return(l,s)=>(g(),w("div",Z,[a(G),a(O,{flat:"",class:"q-pt-none"},{default:n(()=>[a(E,null,{default:n(()=>[d("div",ee,[d("div",te,[d("div",{class:h(["text-dark",o(i).screen.lt.md?"text-body1":"text-h5"])},u(p.value),3)]),a(Q),d("div",ae,[a(H,{styleSelection:!0})])])]),_:1})]),_:1}),a(J,{rows:o(f),columns:o(b),pagination:C.value,filter:v.value,title:p.value,separator:"vertical","row-key":"3",loading:o(T)(q.value),"visible-columns":o(j),downloadButton:!0,onDownload:P},{top:n(()=>[d("div",le,[a(M,{dense:o(i).screen.lt.md,modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=e=>v.value=e),label:"Search...",clearable:""},{prepend:n(()=>[a(R,{name:"search"})]),_:1},8,["dense","modelValue"])]),a(Q),d("div",{class:h(["text-dark text-caption text-italic",o(i).screen.lt.md?"offset-xs-5":""])},"(Total: "+u(o(f).length)+")",3),a(V,{dense:o(i).screen.lt.md,class:h(["q-ml-sm",o(i).screen.lt.md?"full-width":""]),color:"primary",label:"Download",disable:o(f).length<1,onClick:P},null,8,["dense","class","disable"])]),"body-cell-submissionTime":n(e=>[a($,{props:e},{default:n(()=>[l.$dayjs(e.value).isValid()?(g(),w("div",oe,u(e.value.format("L LT")),1)):(g(),w("div",se,u(e.row[1].format("L LT")),1))]),_:2},1032,["props"])]),"body-cell-action":n(e=>[a($,{props:e},{default:n(()=>[a(V,{color:"primary",label:"View Profile",onClick:t=>L(e.row),size:".75rem"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","filter","title","loading","visible-columns"])]))}};export{Ne as default};
