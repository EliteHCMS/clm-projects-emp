import{Q as P}from"./QSpace.0aefa4da.js";import{c1 as z,r as m,w as A,aK as Y,c as g,z as _,A as w,d as a,bh as n,c2 as O,C as d,E as h,a6 as o,aa as u,c3 as E,cx as M,bX as R,c6 as Q}from"./index.52c71ca6.js";import{Q as V}from"./QTd.be89a153.js";import{u as U}from"./use-quasar.8076b8cd.js";import{e as J}from"./export-file.6b95af49.js";import{R as K,c as W}from"./quickbase.0d6b62e6.js";import{dayjs as X}from"./dayjs.7e2f14dc.js";import{_ as F}from"./hiringTabs.511d2e09.js";import{_ as G,a as H}from"./aTable.0ed71fc6.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.83b50c47.js";import"./index.7dbe61ef.js";import"./i18n.3d69f992.js";import"./api.14a19609.js";import"./QBadge.58e5f8ba.js";import"./QRouteTab.81b0e7cb.js";import"./QTabs.b09ba654.js";import"./QResizeObserver.cd0d3c43.js";import"./rtl.a367ced8.js";import"./QSelect.02464590.js";import"./QChip.bee081d7.js";import"./QMenu.b5435217.js";import"./position-engine.901fa583.js";import"./selection.445971ab.js";import"./QTable.34b4b377.js";import"./QList.dade0d45.js";import"./QMarkupTable.6709601e.js";import"./use-fullscreen.57b102bc.js";const Z={class:"q-pa-md"},ee={class:"row items-center"},te={class:"col-12 col-md-5 q-px-sm"},ae={class:"col-12 col-md-4 q-px-sm"},le={class:"col-12 col-md-5 q-px-sm"},oe={key:0},se={key:1},qe={__name:"index",setup(ne){const i=U(),x=K(),{openWindow:$}=W(),{fetchPending:y,fetchAllPending:C}=x,{getPending:B,getSelectedOffice:r,getLoadingState:D}=z(x),c=m(r.value?r.value[8]:null),p=m("Pending"),N=m("pending"),v=m(""),S=m({sortBy:"1",descending:!1,rowsPerPage:150});c.value?y({selectedId:c.value,refresh:!0}):C({can:"read"}),A(r,()=>{c.value=r.value?r.value[8]:null,c.value?y({selectedId:c.value}):C({can:"read"})});const T=m(new Date),q=setInterval(()=>{T.value=new Date},1e3);Y(()=>{clearInterval(q)});const I=g(()=>["startTimestamp","name","phoneNumber","project","jobNumber","classification","action",...r.value?[]:["office"]]),b=g(()=>[{name:"startTimestamp",align:"left",label:"Time",field:"70",sortable:!1},{name:"name",align:"left",label:"Name",field:"25",sortable:!1},{name:"phoneNumber",align:"center",label:"Phone Number",field:"14",sortable:!1},{name:"project",align:"center",label:"Project",field:"184",sortable:!1},{name:"jobNumber",align:"center",label:"Job #",field:"63",sortable:!1},{name:"classification",align:"center",label:"Classification",field:"45",sortable:!1},{name:"office",align:"center",label:"Office",field:"61",sortable:!1},{name:"action",align:"center",label:"",sortable:!1}]),f=g(()=>B.value(c.value).filter(l=>!0).sort((l,s)=>S.value.descending?l[1].isBefore(s[1]):l[1].isAfter(s[1]))),j=(l,s,e)=>{let t=s!==void 0?s(l,e):l;return t=t==null?"":String(t),t=t.split('"').join('""'),`"${t}"`},L=l=>{$(null,{url:`https://elitehcms.quickbase.com/db/bpzpy6n3x?a=dbpage&pageID=2&ee=${l[16]}`,name:"View Profile"})},k=()=>{const l=[b.value.map(e=>j(e.label))].concat(f.value.map(e=>b.value.map(t=>j(typeof t.field=="function"?t.field(e):e[t.field===void 0?t.name:t.field],t.format,e)).join(","))).join(`\r
`);J(`${p.value} ${X().format("MM.DD.YYYY")}.csv`,l,"text/csv")!==!0&&i.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})};return(l,s)=>(_(),w("div",Z,[a(F),a(E,{flat:"",class:"q-pt-none"},{default:n(()=>[a(O,null,{default:n(()=>[d("div",ee,[d("div",te,[d("div",{class:h(["text-dark",o(i).screen.lt.md?"text-body1":"text-h5"])},u(p.value),3)]),a(P),d("div",ae,[a(G,{styleSelection:!0})])])]),_:1})]),_:1}),a(H,{rows:o(f),columns:o(b),pagination:S.value,filter:v.value,title:p.value,separator:"vertical","row-key":"3",loading:o(D)(N.value),"visible-columns":o(I),downloadButton:!0,onDownload:k},{top:n(()=>[d("div",le,[a(M,{dense:o(i).screen.lt.md,modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=e=>v.value=e),label:"Search...",clearable:""},{prepend:n(()=>[a(R,{name:"search"})]),_:1},8,["dense","modelValue"])]),a(P),d("div",{class:h(["text-dark text-caption text-italic",o(i).screen.lt.md?"offset-xs-5":""])},"(Total: "+u(o(f).length)+")",3),a(Q,{dense:o(i).screen.lt.md,class:h(["q-ml-sm",o(i).screen.lt.md?"full-width":""]),color:"primary",label:"Download",disable:o(f).length<1,onClick:k},null,8,["dense","class","disable"])]),"body-cell-startTimestamp":n(e=>[a(V,{props:e},{default:n(()=>[l.$dayjs(e.value).isValid()?(_(),w("div",oe,u(e.value.format("L LT")),1)):(_(),w("div",se,u(e.row[1].format("L LT")),1))]),_:2},1032,["props"])]),"body-cell-action":n(e=>[a(V,{props:e},{default:n(()=>[a(Q,{color:"primary",label:"View Profile",onClick:t=>L(e.row),size:".75rem"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","filter","title","loading","visible-columns"])]))}};export{qe as default};
