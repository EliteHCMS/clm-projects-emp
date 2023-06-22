import{Q as q,a as se,b as M}from"./QTabPanels.34664ba9.js";import{Q as L}from"./QTabs.b8e3dc2d.js";import{Q as le}from"./QToolbar.30b493d3.js";import{Q as re}from"./QPage.d147e8f9.js";import{q as X,u as ne}from"./app.00bf1e10.js";import{l as U,bU as N,r as _,c as g,_ as E,b5 as P,A as y,B as Y,d as t,br as n,cF as T,D as u,cG as k,cE as S,bT as ie,F as x,b4 as H,aq as Q,ax as B,ac as F,bQ as G,bW as W,y as de,ar as J}from"./index.e8fb2253.js";import{a as ae}from"./QSelect.c4b0a406.js";import{u as I}from"./use-quasar.0aa2fc3d.js";import{u as O}from"./dataStore.0af02e2e.js";import{dayjs as V}from"./dayjs.d1250a8a.js";import{u as z}from"./useQuerySaver.d29ff9ee.js";import{R as te}from"./rosterTable.2f202c41.js";import{Q as K,a as ue}from"./QTable.1fcb10b7.js";import{Q as Z}from"./QTr.0507fcae.js";import{Q as ee}from"./QTd.a9c509ec.js";import{Q as pe}from"./QInnerLoading.52e3072b.js";import{e as me}from"./export-file.dc78ba05.js";import{g as ce}from"./quickbaseDataHelpers.8da188d0.js";import{P as fe}from"./projectPipeline.4649bb70.js";import"./use-panel.0e4ac6ef.js";import"./touch.70a9dd44.js";import"./selection.1f477e95.js";import"./QResizeObserver.e0fe0d9d.js";import"./rtl.b51694b1.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.8666a90b.js";import"./api.e92e8aaa.js";import"./index.04bc0a32.js";import"./i18n.2814a62c.js";import"./QChip.178232ad.js";import"./QMenu.b4300bfa.js";import"./position-engine.d748a9db.js";import"./arrivalDate.462d5c36.js";import"./QTooltip.604a832b.js";import"./QForm.bc1b5926.js";import"./vee-validate.esm.f9a9192e.js";import"./array.6a8b7cfb.js";import"./QList.d18fd6ea.js";import"./QMarkupTable.167b6050.js";import"./use-fullscreen.b1caa6d3.js";const be=U({props:{},components:{RosterTable:te},setup(e){const a=I(),v=N(),d=_(""),c=_(null),p=_(null),{getManpowerData:s,setRosters:r}=O(),b=g(()=>v.params.id?v.params.id:null),m=g(()=>(s({dataset:"rosters",id:b.value})||[]).sort(($,h)=>$[1].$d<h[1].$d?1:-1).filter($=>!$[112]&&$.latest&&$[102]==="Active")),w=g(()=>{let l=[];return m.value.forEach(i=>{i[75].toLowerCase().includes(d.value.toLowerCase())&&l.push(i)}),l=c.value?l.filter(i=>V(i[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===V(c.value).tz("America/Chicago").format("MM/DD/YYYY")):l,l=p.value?l.filter(i=>i[68]===p.value):l,l.sort((i,$)=>i.employee[22]>$.employee[22]?1:-1)}),j=g(()=>[...new Map(m.value.map(l=>[l[68],l[68]])).values()]),C=async l=>{(l||!s({dataset:"rosters",id:b.value}))&&(a.loading.show(),await R(),a.loading.hide())},R=async()=>{const l=`{'74'.EX.'${b.value}'}AND{'21'.EX.'In Process'}AND{'102'.EX.'Active'}`,{data:i}=await X.fetchFromHiringApp({fields:[z({type:"assignments",query:l})]});r({id:b.value,data:i})};return C(!1),{allAssignments:m,search:d,startDateFilter:c,craftFilter:p,craftOptions:j,rows:w,loadData:C}}}),ve={class:"row items-center"},we={class:"col-12 col-md-3 q-px-sm"},$e={class:"col-12 col-md-3 q-px-sm"},ye={class:"col-12 col-md-3 q-px-sm"};function ge(e,a,v,d,c,p){const s=P("roster-table");return y(),Y("div",null,[t(S,{flat:""},{default:n(()=>[t(T,null,{default:n(()=>[u("div",ve,[u("div",we,[t(k,{dense:"",modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=r=>e.search=r),label:"Search"},null,8,["modelValue"])]),u("div",$e,[t(k,{dense:"",modelValue:e.startDateFilter,"onUpdate:modelValue":a[1]||(a[1]=r=>e.startDateFilter=r),label:"Arrival Date",type:"date","stack-label":""},null,8,["modelValue"])]),u("div",ye,[t(ae,{dense:"",label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craftFilter,"onUpdate:modelValue":a[2]||(a[2]=r=>e.craftFilter=r),options:e.craftOptions,"use-chips":""},null,8,["modelValue","options"])])])]),_:1})]),_:1}),t(s,{rows:e.rows,onRefreshData:a[3]||(a[3]=r=>e.loadData(!0)),title:"Active Roster"},null,8,["rows"])])}var he=E(be,[["render",ge]]);const De=U({props:{},components:{RosterTable:te},setup(e){const a=I(),v=N(),d=_(""),c=_(null),p=_(null),{getManpowerData:s,setRosters:r}=O(),b=g(()=>v.params.id?v.params.id:null),m=g(()=>{const l=V().subtract(14,"day");return(s({dataset:"rosters",id:b.value})||[]).sort((h,o)=>h[1].$d<o[1].$d?1:-1).filter(h=>!h[112]&&h.latest&&h[102]==="Active"&&V(h[1].$d).isSameOrAfter(l)&&V(h[1].$d).isSameOrBefore(V()))}),w=g(()=>{let l=[];return m.value.forEach(i=>{i[75].toLowerCase().includes(d.value.toLowerCase())&&l.push(i)}),l=c.value?l.filter(i=>V(i[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===V(c.value).tz("America/Chicago").format("MM/DD/YYYY")):l,l=p.value?l.filter(i=>i[68]===p.value):l,l.sort((i,$)=>i.employee[22]>$.employee[22]?1:-1)}),j=g(()=>[...new Map(m.value.map(l=>[l[68],l[68]])).values()]),C=async l=>{(l||!s({dataset:"rosters",id:b.value}))&&(a.loading.show(),await R(),a.loading.hide())},R=async()=>{const l=`{'74'.EX.'${b.value}'}AND{'21'.EX.'In Process'}AND{'102'.EX.'Active'}`,{data:i}=await X.fetchFromProjectsApp({fields:[z({type:"assignments",query:l})]});r({id:b.value,data:i})};return{allAssignments:m,search:d,startDateFilter:c,craftFilter:p,craftOptions:j,rows:w,loadData:C}}}),Ve={class:"row items-center"},_e={class:"col-12 col-md-3 q-px-sm"},Ae={class:"col-12 col-md-3 q-px-sm"},qe={class:"col-12 col-md-3 q-px-sm"};function Qe(e,a,v,d,c,p){const s=P("roster-table");return y(),Y("div",null,[t(S,{flat:""},{default:n(()=>[t(T,null,{default:n(()=>[u("div",Ve,[u("div",_e,[t(k,{dense:"",modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=r=>e.search=r),label:"Search"},null,8,["modelValue"])]),u("div",Ae,[t(k,{dense:"",modelValue:e.startDateFilter,"onUpdate:modelValue":a[1]||(a[1]=r=>e.startDateFilter=r),label:"Arrival Date",type:"date","stack-label":""},null,8,["modelValue"])]),u("div",qe,[t(ae,{dense:"",label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craftFilter,"onUpdate:modelValue":a[2]||(a[2]=r=>e.craftFilter=r),options:e.craftOptions,"use-chips":""},null,8,["modelValue","options"])])])]),_:1})]),_:1}),t(s,{rows:e.rows,onRefresh:a[3]||(a[3]=r=>e.loadData(!0)),title:"New Arrivals"},null,8,["rows"])])}var Pe=E(De,[["render",Qe]]);const ke=U({props:{},components:{},setup(e){const a=I(),v=ie(),d=N(),{capitalize:c}=de,p=_(""),s=_(null),{getManpowerData:r,setDepartures:b}=O(),m=g(()=>d.params.id?d.params.id:null),w=[{name:1,label:"Name",align:"left",field:o=>o[49],format:o=>`${j(o)}`,sortable:!0,sortOrder:"ad"},{name:7,label:"Phone #",align:"left",field:o=>o[56],sortable:!1},{name:2,label:"Workday ID",align:"left",field:o=>o[50],format:o=>`${o}`,sortable:!0,sortOrder:"ad"},{name:3,label:"Payroll ID",align:"left",field:o=>o[51],format:o=>o===""?"not available":o,sortable:!0},{name:4,label:"Classification",align:"left",field:o=>o[82],format:o=>`${!o||o===""?"Not Assigned":o}`,sortable:!0},{name:5,label:"Job #",align:"left",field:o=>o[81],format:o=>`${o===""||!o?"Not Assigned":o}`,sortable:!0},{name:6,label:"Depature Date",align:"left",field:o=>o[36].$d,format:o=>`${V(o).format("MM/DD/YYYY")}`,sortable:!0}],j=o=>{const A=o.split(" ");let D="";return A.forEach((f,oe)=>{D+=oe>0?` ${c(f.toLowerCase())}`:c(f.toLowerCase())}),D};function C(o){v.push({name:"view-release",params:{release:o[3]}})}function R(o,A,D){let f=A!==void 0?A(o,D):o;return f=f==null?"":String(f),f=f.split('"').join('""'),`"${f}"`}function l(){const o=[w.value.map(D=>R(D.label))].concat(i.value.map(D=>w.value.map(f=>R(typeof f.field=="function"?f.field(D):D[f.field===void 0?f.name:f.field],f.format,D)).join(","))).join(`\r
`);me(`${V().format("MM.DD.YYYY")} Releases-Export.csv`,o,"text/csv")!==!0&&a.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}const i=g(()=>r({dataset:"departures",id:m.value})||[]),$=async o=>{(o||!r({dataset:"departures",id:m.value}))&&(a.loading.show(),await h(),a.loading.hide())},h=async()=>{const o=`{'41'.EX.'${m.value}'}AND{'42'.XEX.'Complete'}AND({'36'.OAF.'today'}OR{'36'.IR.'last 30 d'}OR{'1'.IR.'last 30 d'})`,{data:A}=await X.fetchFromHiringApp({fields:[z({type:"releases",query:o})]});b({id:m.value,data:A})};return $(),{search:p,dateFilter:s,loadData:$,columns:w,viewRelease:C,exportAllReleases:l,rows:i}}}),Ce={class:"row items-center"},Re={class:"col-12 col-md-3 q-px-sm"},Ye={class:"col-12 col-md-3 q-px-sm"},je={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},Fe={class:"text-dark text-caption text-italic"};function Te(e,a,v,d,c,p){return y(),Y("div",null,[t(S,{flat:""},{default:n(()=>[t(T,null,{default:n(()=>[u("div",Ce,[u("div",Re,[t(k,{dense:"",modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=s=>e.search=s),label:"Search"},null,8,["modelValue"])]),u("div",Ye,[t(k,{dense:"",modelValue:e.dateFilter,"onUpdate:modelValue":a[1]||(a[1]=s=>e.dateFilter=s),label:"Departure Date",type:"date","stack-label":""},null,8,["modelValue"])])])]),_:1})]),_:1}),u("div",null,[t(ue,{title:"Recent Departures","title-class":"text-h5 text-primary",columns:e.columns,rows:e.rows,"row-key":s=>s[3],class:"q-pa-sm",pagination:{rowsPerPage:25},"table-header-class":"bg-dark text-white","no-data-label":"There are no recent departures",dense:""},{header:n(s=>[t(Z,{class:"bg-dark text-white",props:s},{default:n(()=>[t(K,{"auto-width":""}),(y(!0),Y(x,null,H(s.cols,r=>(y(),Q(K,{key:r.name,props:s},{default:n(()=>[B(F(r.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:n(s=>[t(Z,{props:s},{default:n(()=>[t(ee,{"auto-width":""},{default:n(()=>[t(G,{class:"cursor-pointer",size:e.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:r=>e.viewRelease(s.row),name:s.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024),(y(!0),Y(x,null,H(s.cols,r=>(y(),Q(ee,{key:r.name,props:s},{default:n(()=>[B(F(r.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":n(({message:s})=>[u("div",je,[t(G,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),u("span",null,F(s),1)])]),"top-right":n(()=>[u("div",Fe,"(Total: "+F(e.rows.length)+" departures)",1),t(W,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:a[2]||(a[2]=s=>e.loadData(!0))}),t(W,{dense:e.$q.screen.lt.md,class:"q-ml-sm",color:"primary",label:"Download",onClick:e.exportAllReleases,disable:e.rows.length<1},null,8,["dense","onClick","disable"])]),loading:n(()=>[t(pe,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key"])])])}var Ee=E(ke,[["render",Te]]);const Me={name:"Pipeline",components:{ProjectPipelineTable:fe},setup(){const e=I(),a=N(),v=_(""),{getManpowerData:d,setPipelines:c}=O(),p=g(()=>a.params.id?a.params.id:null),s=g(()=>d({dataset:"pipelines",id:p.value})||[]),r=async m=>{(m||!d({dataset:"pipelines",id:p.value}))&&(e.loading.show(),await b(),e.loading.hide())},b=async()=>{const m=await ce(p.value);c({id:p.value,data:m})};return r(),{allPipeline:s,search:v,loadData:r}}},Ue={class:"text-h5 text-dark"},Ne={class:"text-body2 text-italic q-ml-sm"},Se=u("div",{class:"text-subtitle2 text-accent"},"The following people are currently in process or deployed for your job site(s).",-1),Ie={class:"row items-center"},Oe={class:"col-12 col-md-3 q-px-sm"};function Be(e,a,v,d,c,p){const s=P("project-pipeline-table");return y(),Y("div",null,[t(S,{flat:""},{default:n(()=>[t(T,{class:"q-pb-none"},{default:n(()=>[u("div",Ue,[B(" Staffing Pipeline "),u("span",Ne,"("+F(d.allPipeline.length)+" total)",1)]),Se]),_:1}),t(T,null,{default:n(()=>[u("div",Ie,[u("div",Oe,[t(k,{dense:"",modelValue:d.search,"onUpdate:modelValue":a[0]||(a[0]=r=>d.search=r),label:"Search"},null,8,["modelValue"])])])]),_:1})]),_:1}),t(s,{rows:d.allPipeline,onRefresh:a[1]||(a[1]=r=>d.loadData(!0))},null,8,["rows"])])}var Xe=E(Me,[["render",Be]]);const ze=U({name:"Employees",components:{RosterTab:he,NewArrivalsTab:Pe,ReleasesTab:Ee,PipelineTab:Xe},setup(){const e=_(0),{getUserType:a}=ne();return a==="QuickBase User"&&(e.value=3),{tab:e,getUserType:a}}}),Le={class:"q-pa-md"};function xe(e,a,v,d,c,p){const s=P("roster-tab"),r=P("new-arrivals-tab"),b=P("pipeline-tab"),m=P("releases-tab");return y(),Q(re,{style:{"max-width":"100vw"}},{default:n(()=>[u("div",Le,[t(le,{class:"bg-info text-white shadow-2 rounded-borders"},{default:n(()=>[e.getUserType==="QuickBase User"?(y(),Q(L,{key:0,modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=w=>e.tab=w),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:n(()=>[e.$route.name==="project-manpower"?(y(),Q(q,{key:0,name:3,label:"Pipeline"})):J("",!0),t(q,{name:2,label:"Departures"}),t(q,{name:0,label:e.$q.screen.gt.xs?"All Employees":"Employees"},null,8,["label"])]),_:1},8,["modelValue"])):(y(),Q(L,{key:1,modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=w=>e.tab=w),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:n(()=>[t(q,{name:0,label:e.$q.screen.gt.xs?"All Employees":"Employees"},null,8,["label"]),t(q,{name:1,label:"New Arrivals"}),e.$route.name==="project-manpower"?(y(),Q(q,{key:0,name:3,label:"Pipeline"})):J("",!0),t(q,{name:2,label:"Departures"})]),_:1},8,["modelValue"]))]),_:1}),t(se,{modelValue:e.tab,"onUpdate:modelValue":a[2]||(a[2]=w=>e.tab=w),animated:""},{default:n(()=>[t(M,{name:0},{default:n(()=>[t(s)]),_:1}),t(M,{name:1},{default:n(()=>[t(r)]),_:1}),t(M,{name:3},{default:n(()=>[t(b)]),_:1}),t(M,{name:2},{default:n(()=>[t(m)]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var Fa=E(ze,[["render",xe]]);export{Fa as default};
