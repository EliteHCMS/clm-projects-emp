import{Q as j}from"./QPage.3e8c465d.js";import{k as C,c0 as $,c as b,_ as P,v as x,x as M,z as t,d as r,be as n,a7 as i,c1 as N,bU as Q,B as k,cx as y,bY as A,cA as B,aR as T,aP as I,aV as F,aj as J}from"./index.3eeef2e1.js";import{Q as O}from"./QTable.2c3bfd14.js";import{u as V}from"./use-quasar.8b9eb101.js";import{m as w,l as D,e as g}from"./quickbase.bbce1ca9.js";import{e as z}from"./export-file.deb9806e.js";import{dayjs as R}from"./dayjs.281b68b5.js";import"./QList.7a2a16a4.js";import"./QMarkupTable.d43fb32d.js";import"./QSelect.ce6478b1.js";import"./QMenu.da0b9218.js";import"./position-engine.783907a3.js";import"./selection.13bd015d.js";import"./rtl.65b79c69.js";import"./use-fullscreen.76f771bb.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.ba82a4c8.js";import"./index.7dbe61ef.js";import"./i18n.5f5b9ab4.js";import"./api.865b2f54.js";const _=[{name:1,label:"Name",align:"left",field:e=>e.map.name,format:e=>`${e}`,sortable:!0},{name:7,label:"Status",align:"left",field:e=>e.map.status,format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Offer Date",align:"left",field:e=>e.map.offerDate,format:e=>`${g.formatDate(e,"MM/DD/YYYY")}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.fullJob,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e.map.jobNumber,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e.map.start,format:e=>`${e?g.formatDate(e,"MM/DD/YYYY"):"TBD"}`,sortable:!0}],E=[{name:1,label:"Name",align:"left",field:e=>e.map.name,format:e=>`${e}`,sortable:!0},{name:7,label:"Status",align:"left",field:e=>e.map.status,format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Offer Date",align:"left",field:e=>e.map.offerDate,format:e=>`${g.formatDate(e,"MM/DD/YYYY")}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.fullJob,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e.map.jobNumber,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e.map.start,format:e=>`${e?g.formatDate(e,"MM/DD/YYYY"):"TBD"}`,sortable:!0}],H=C({name:"Pipeline Table",components:{},setup(){const e=V(),m=w(),p=D(),{pipelineForProject:f}=$(m),o=f,{active:u}=$(D()),d=b(()=>o.value.filter(s=>s.map.status==="In Process")),q=b(()=>o.value.filter(s=>s.map.status==="Deployed")),Y=b(()=>o.value.filter(s=>s.status==="Arrived")),S=b(()=>e.screen.lt.md?100:o.value.length>=25?Math.round(o.value.length/5):10);function v(s,h,l){let a=h!==void 0?h(s,l):s;return a=a==null?"":String(a),a=a.split('"').join('""'),`"${a}"`}return{columns:_,mobileColumns:E,rows:o,initialPagination:{rowsPerPage:S},separator:"vertical",projectStore:p,pipelineForProject:f,inProcess:d,deployed:q,arrived:Y,active:u,exportPipeline(){const s=[_.map(l=>v(l.label))].concat(o.value.map(l=>_.map(a=>v(typeof a.field=="function"?a.field(l):l[a.field===void 0?a.name:a.field],a.format,l)).join(","))).join(`\r
`);z(`${R().format("MM.DD.YYYY")} ${u.value[20]} Project-Pipeline-Export.csv`,s,"text/csv")!==!0&&e.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}}}),c=e=>(T("data-v-6cffc5e6"),e=e(),I(),e),L={class:"q-px-sm"},U={class:"row"},G={class:"col-12 col-md-10 q-px-xs"},K={class:"text-dark text-caption text-italic"},W={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},X=c(()=>t("div",{class:"text-body1 text-primary"},"Summary",-1)),Z={class:"text-body2"},ee=c(()=>t("span",{class:"q-mr-md"},"In Process:",-1)),te={class:"text-body2"},ae=c(()=>t("span",{class:"q-mr-md"},"Deployed:",-1)),se={class:"text-body2"},oe=c(()=>t("span",{class:"q-mr-md"},"Arrived:",-1)),re={class:"text-body2"},le=c(()=>t("span",{class:"q-mr-md"},"Total:",-1));function ie(e,m,p,f,o,u){return x(),M("div",L,[t("div",U,[t("div",G,[r(O,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.lt.sm?"Pipeline":`Staffing Pipeline for ${e.active[20]}`,columns:e.$q.screen.lt.md?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There is no one in the pipeline for ${e.active[20]}`,grid:e.$q.screen.lt.sm},{"top-right":n(()=>[t("div",K,"(Total: "+i(e.pipelineForProject.length)+" in pipeline)",1),r(N,{dense:e.$q.screen.lt.md,class:"q-ml-sm",color:"primary",label:"Download",onClick:e.exportPipeline,disable:e.pipelineForProject.length<1},null,8,["dense","onClick","disable"])]),"no-data":n(({message:d})=>[t("div",W,[r(Q,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),t("span",null,i(d),1)])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","grid"])]),t("div",{class:k(e.$q.screen.lt.md?"col-12 q-px-xs q-mt-sm order-first":"col-2 q-px-xs")},[r(B,null,{default:n(()=>[r(y,{class:"q-pb-xs"},{default:n(()=>[X]),_:1}),r(y,{class:"text-right q-pt-xs"},{default:n(()=>[t("div",Z,[ee,t("span",null,i(e.inProcess.length),1)]),t("div",te,[ae,t("span",null,i(e.deployed.length),1)]),t("div",se,[oe,t("span",null,i(e.arrived.length),1)]),r(A,{color:"primary",class:"q-my-sm"}),t("div",re,[le,t("span",null,i(e.pipelineForProject.length),1)])]),_:1})]),_:1})],2)])])}var ne=P(H,[["render",ie],["__scopeId","data-v-6cffc5e6"]]);const me={name:"Pipeline",components:{pipelineTable:ne},setup(){const{getInProcesses:e,getDispatches:m,getDeployments:p}=w();return e(),m(),p(),{}}};function pe(e,m,p,f,o,u){const d=F("pipeline-table");return x(),J(j,{style:{"max-width":"100vw"}},{default:n(()=>[r(d)]),_:1})}var Me=P(me,[["render",pe]]);export{Me as default};
