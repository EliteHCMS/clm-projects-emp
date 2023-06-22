import{Q as y,a as U,b as N}from"./QTabPanels.34664ba9.js";import{Q as L}from"./QTabs.b8e3dc2d.js";import{Q as z}from"./QSpace.b7f45cf7.js";import{l as w,r as j,bV as D,c as b,_ as h,b5 as _,A as $,B as Q,d as o,br as l,cF as P,D as v,cE as T,bU as E,w as K,y as M,bT as W,aq as R,ar as C,bW as X}from"./index.e8fb2253.js";import{Q as G}from"./QToolbar.30b493d3.js";import{Q as H}from"./QPage.d147e8f9.js";import{u as V}from"./use-quasar.0aa2fc3d.js";import{u as k}from"./dataStore.4cb31a18.js";import{I as A,u as J,q as Y}from"./app.00bf1e10.js";import{R as O,a as Z}from"./requestDataAlt.dfdc4e97.js";import{_ as F}from"./projectSelector.e66d4c95.js";import{dayjs as x}from"./dayjs.d1250a8a.js";import{N as ee}from"./nameRequestData.45d73268.js";import"./use-panel.0e4ac6ef.js";import"./touch.70a9dd44.js";import"./selection.1f477e95.js";import"./QResizeObserver.e0fe0d9d.js";import"./rtl.b51694b1.js";import"./localForage.8666a90b.js";import"./_commonjsHelpers.a26ce4be.js";import"./useQuerySaver.d29ff9ee.js";import"./api.e92e8aaa.js";import"./index.04bc0a32.js";import"./i18n.2814a62c.js";import"./QTd.a9c509ec.js";import"./QTable.1fcb10b7.js";import"./QList.d18fd6ea.js";import"./QMarkupTable.167b6050.js";import"./QSelect.c4b0a406.js";import"./QChip.178232ad.js";import"./QMenu.b4300bfa.js";import"./position-engine.d748a9db.js";import"./use-fullscreen.b1caa6d3.js";import"./QTooltip.604a832b.js";import"./workday.a5450778.js";import"./syncEmployeeWithWorkday.e74b71ed.js";import"./workdayAPI.2e48c893.js";import"./dataStore.0af02e2e.js";const te=w({props:{},components:{RequestDataTable:O,projectSelector:F},setup(e){const t=V(),u=A(),i=j(null),{getSelectedProject:c}=D(u),{getOpenRequest:d,fetchOpenRequest:a,fetchAllOpenRequest:s}=k(),n=b(()=>c.value?c.value[3]:null),p=b(()=>d(n.value).sort((r,f)=>r[1].$d<f[1].$d?1:-1));async function m(r){t.loading.show(),n.value?await a({projectId:n.value,refresh:r}):await s({refresh:r}),t.loading.hide()}return m(!1),{openRequests:p,projectFilter:i,loadData:m}}}),oe={class:"row items-center"},ae={class:"col-12 col-md-4"};function se(e,t,u,i,c,d){const a=_("projectSelector"),s=_("request-data-table");return $(),Q("div",null,[o(T,{flat:""},{default:l(()=>[o(P,null,{default:l(()=>[v("div",oe,[v("div",ae,[o(a,{dense:""})])])]),_:1})]),_:1}),o(s,{requests:e.openRequests,status:"Open",onRefreshData:t[0]||(t[0]=n=>e.loadData(!0))},null,8,["requests"])])}var ne=h(te,[["render",se]]);const re=w({props:{},components:{RequestDataTable:O,projectSelector:F},setup(e){const t=V(),u=E(),i=A(),c=j(null),{getSelectedProject:d}=D(i),{getPendingRequest:a,fetchPendingRequest:s,fetchAllPendingRequest:n}=k(),p=b(()=>d.value?d.value[3]:null),m=b(()=>a(p.value).sort((f,S)=>f[1].$d<S[1].$d?1:-1));async function r(f){t.loading.show(),p.value?await s({projectId:p.value,refresh:f}):await n({refresh:f}),t.loading.hide()}return K(()=>u.from,f=>{f.name==="new-request"&&(p.value?s({projectId:p.value,refresh:!0}):n({refresh:!0}))}),r(!1),{pendingRequests:m,projectFilter:c,loadData:r}}}),le={class:"row items-center"},ue={class:"col-12 col-md-4"};function ce(e,t,u,i,c,d){const a=_("projectSelector"),s=_("request-data-table");return $(),Q("div",null,[o(T,{flat:""},{default:l(()=>[o(P,null,{default:l(()=>[v("div",le,[v("div",ue,[o(a,{dense:""})])])]),_:1})]),_:1}),o(s,{requests:e.pendingRequests,status:"Pending",onRefreshData:t[0]||(t[0]=n=>e.loadData(!0))},null,8,["requests"])])}var de=h(re,[["render",ce]]);const ie=w({props:{},components:{RequestDataTableAlt:Z,projectSelector:F},setup(e){const t=V(),u=A(),i=j(null),{getSelectedProject:c}=D(u),{getClosedRequest:d,fetchClosedRequest:a,fetchAllClosedRequest:s}=k(),n=b(()=>c.value?c.value[3]:null),p=b(()=>d(n.value).sort((r,f)=>r[1].$d<f[1].$d?1:-1));async function m(r){t.loading.show(),n.value?await a({projectId:n.value,refresh:r}):await s({refresh:r}),t.loading.hide()}return m(),{closedRequests:p,projectFilter:i,loadData:m}}}),pe={class:"row items-center"},me={class:"col-12 col-md-4"};function fe(e,t,u,i,c,d){const a=_("projectSelector"),s=_("request-data-table-alt");return $(),Q("div",null,[o(T,{flat:""},{default:l(()=>[o(P,null,{default:l(()=>[v("div",pe,[v("div",me,[o(a,{dense:""})])])]),_:1})]),_:1}),o(s,{requests:e.closedRequests,status:"Completed",onRefreshData:t[0]||(t[0]=n=>e.loadData(!0))},null,8,["requests"])])}var _e=h(ie,[["render",fe]]);const qe=w({props:{},components:{NameRequestDataTable:ee,projectSelector:F},setup(e){const t=V(),u=A(),{capitalize:i}=M,c=j(null),{userData:d}=J(),{getSelectedProject:a}=D(u),{getNameRequest:s,fetchAllNameRequest:n,removeData:p,fetchNameRequest:m}=k(),r=b(()=>a.value?a.value[3]:null),f=b(()=>s(r.value).sort((q,g)=>q[1].$d<g[1].$d?1:-1));async function S(q){t.loading.show(),r.value?await m({projectId:r.value,refresh:q}):await n({refresh:q}),t.loading.hide()}function B(q){return`${i(q[6].toLowerCase())} ${i(q[7].toLowerCase())}`}async function I(q){t.dialog({title:"Confirm",message:`Are you sure you want to remove ${B(q)} from request# ${q[18]}?`,cancel:!0,persistent:!0}).onOk(async()=>{try{const{data:g}=await Y.upsertRecordsXML({to:"bsg4yb4wa",data:[{3:{value:q[3]},11:{value:!0},12:{value:x().tz("America/Chicago")},13:{value:`${d[35]} ${d[37]}`}}],fieldsToReturn:[15],formatObject:15});p({type:"nameRequest",key:g[0][15][38],item:g[0][15],storageKey:"storageNameRequest"})}catch(g){t.notify({type:"negative",message:"Cannot remove name request"}),console.log(g)}})}return S(),{nameRequests:f,projectFilter:c,removeName:I,loadData:S}}}),$e={class:"row items-center"},ve={class:"col-12 col-md-4"};function be(e,t,u,i,c,d){const a=_("projectSelector"),s=_("name-request-data-table");return $(),Q("div",null,[o(T,{flat:""},{default:l(()=>[o(P,null,{default:l(()=>[v("div",$e,[v("div",ve,[o(a,{dense:""})])])]),_:1})]),_:1}),o(s,{requests:e.nameRequests,status:"Named",onRemoveName:e.removeName,onRefreshData:t[0]||(t[0]=n=>e.loadData(!0))},null,8,["requests","onRemoveName"])])}var ge=h(qe,[["render",be]]);const Re=w({name:"Requests",components:{OpenTab:ne,PendingTab:de,CompleteTab:_e,NamesTab:ge},setup(){const e=W(),t=j(0);function u(){e.push({name:"new-request"})}return{tab:t,addNewRequest:u}}}),we={class:"q-pa-md"};function je(e,t,u,i,c,d){const a=_("open-tab"),s=_("pending-tab"),n=_("names-tab"),p=_("complete-tab");return $(),R(H,{style:{"max-width":"100vw"}},{default:l(()=>[v("div",we,[o(G,{class:"bg-info text-white shadow-2 rounded-borders"},{default:l(()=>[o(L,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=m=>e.tab=m),"bg-color":"none","indicator-color":"accent",dense:e.$q.screen.lt.md},{default:l(()=>[o(y,{name:0,label:e.$q.screen.gt.xs?"Open Requests":"Open"},null,8,["label"]),e.$q.screen.gt.sm?($(),R(y,{key:0,name:1,label:e.$q.screen.gt.xs?"Pending Requests":"Pending"},null,8,["label"])):C("",!0),e.$can("read","nameRequests")?($(),R(y,{key:1,name:2,label:e.$q.screen.gt.xs?"Named Requests":"Named"},null,8,["label"])):C("",!0),e.$q.screen.gt.sm?($(),R(y,{key:2,name:3,label:e.$q.screen.gt.xs?"Completed Requests":"Completed"},null,8,["label"])):C("",!0)]),_:1},8,["modelValue","dense"]),o(z),e.$q.screen.gt.sm?($(),R(X,{key:0,dense:"",color:"accent",icon:"add",label:e.$q.screen.lt.md?"Add New":"Add New Request",onClick:e.addNewRequest},null,8,["label","onClick"])):C("",!0)]),_:1}),o(U,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=m=>e.tab=m),animated:""},{default:l(()=>[o(N,{name:0},{default:l(()=>[o(a)]),_:1}),o(N,{name:1},{default:l(()=>[o(s)]),_:1}),o(N,{name:2},{default:l(()=>[o(n)]),_:1}),o(N,{name:3},{default:l(()=>[o(p)]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var ut=h(Re,[["render",je]]);export{ut as default};
