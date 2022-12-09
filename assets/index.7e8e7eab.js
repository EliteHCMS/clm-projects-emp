import{Q as V,b as h,a as Y}from"./QTabPanels.58820590.js";import{Q as E}from"./QTabs.f8fab5e6.js";import{Q as q}from"./QToolbar.47cbef76.js";import{Q as B}from"./QPage.85fd4be8.js";import{R as k,E as M}from"./roster.4591a327.js";import{k as g,r as u,bN as N,c as b,_ as y,aZ as v,A,B as P,d as t,bi as n,cw as R,D as d,cx as Q,cz as U,an as O}from"./index.3bd8bff3.js";import{Q as z}from"./QSelect.8411b3cd.js";import{u as I}from"./use-quasar.94e7f076.js";import{u as L}from"./dataStore.8ec64a1e.js";import{I as Z}from"./quickbase.7e9e049d.js";import{dayjs as p}from"./dayjs.238de433.js";import{_ as x}from"./projectSelector.fbac68a3.js";import"./use-panel.d71ec7cf.js";import"./touch.60582172.js";import"./selection.d55c238c.js";import"./QResizeObserver.d5cca528.js";import"./rtl.cf9bbe47.js";import"./QTable.fa96a81a.js";import"./QList.3180ed89.js";import"./QMarkupTable.2024054c.js";import"./use-fullscreen.9bbdec53.js";import"./QTr.aadecaac.js";import"./QTd.8bfe7241.js";import"./QInnerLoading.3103f2e0.js";import"./export-file.eb604dd4.js";import"./QChip.fff575e1.js";import"./QItemLabel.349706c0.js";import"./QMenu.ade1759f.js";import"./position-engine.6bd25d23.js";import"./localForage.cfd98bcf.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./i18n.475c5698.js";import"./api.a28dd52c.js";const G=g({props:{},components:{RosterTable:k,projectSelector:x},setup(e){const o=I(),_=Z(),w=u(null),f=u(""),c=u(null),i=u(null),{getSelectedProject:m}=N(_),{getAssignments:r,fetchAllAssignments:D}=L(),S=b(()=>m.value?m.value[3]:null),$=b(()=>{const a=p().subtract(14,"day");return r(S.value).sort((l,F)=>l[1].$d<F[1].$d?1:-1).filter(l=>!l[112]&&l.latest&&l[102]==="Active"&&p(l[1].$d).isSameOrAfter(a)&&p(l[1].$d).isSameOrBefore(p()))}),C=b(()=>{let a=[];return $.value.forEach(s=>{s[75].toLowerCase().includes(f.value.toLowerCase())&&a.push(s)}),a=c.value?a.filter(s=>p(s[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===p(c.value).tz("America/Chicago").format("MM/DD/YYYY")):a,a=i.value?a.filter(s=>s[68]===i.value):a,a.sort((s,l)=>s.employee[22]>l.employee[22]?1:-1)}),j=b(()=>[...new Map($.value.map(a=>[a[68],a[68]])).values()]);async function T(){o.loading.show(),await D(),o.loading.hide()}return T(),{allAssignments:$,projectFilter:w,search:f,startDateFilter:c,craftFilter:i,craftOptions:j,rows:C}}}),H={class:"row items-center"},J={class:"col-12 col-md-3"},K={class:"col-12 col-md-3 q-px-sm"},W={class:"col-12 col-md-3 q-px-sm"},X={class:"col-12 col-md-3 q-px-sm"};function ee(e,o,_,w,f,c){const i=v("projectSelector"),m=v("roster-table");return A(),P("div",null,[t(U,{flat:""},{default:n(()=>[t(R,null,{default:n(()=>[d("div",H,[d("div",J,[t(i,{dense:""})]),d("div",K,[t(Q,{dense:"",modelValue:e.search,"onUpdate:modelValue":o[0]||(o[0]=r=>e.search=r),label:"Search"},null,8,["modelValue"])]),d("div",W,[t(Q,{dense:"",modelValue:e.startDateFilter,"onUpdate:modelValue":o[1]||(o[1]=r=>e.startDateFilter=r),label:"Arrival Date",type:"date","stack-label":""},null,8,["modelValue"])]),d("div",X,[t(z,{dense:"",label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craftFilter,"onUpdate:modelValue":o[2]||(o[2]=r=>e.craftFilter=r),options:e.craftOptions,"use-chips":""},null,8,["modelValue","options"])])])]),_:1})]),_:1}),t(m,{rows:e.rows},null,8,["rows"])])}var te=y(G,[["render",ee]]);const oe=g({name:"Employees",components:{RosterTab:M,NewArrivalsTab:te},setup(){return{tab:u(0)}}}),ae={class:"q-pa-md"};function re(e,o,_,w,f,c){const i=v("roster-tab"),m=v("new-arrivals-tab");return A(),O(B,{style:{"max-width":"100vw"}},{default:n(()=>[d("div",ae,[t(q,{class:"bg-info text-white shadow-2 rounded-borders"},{default:n(()=>[t(E,{modelValue:e.tab,"onUpdate:modelValue":o[0]||(o[0]=r=>e.tab=r),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:n(()=>[t(V,{name:0,label:e.$q.screen.gt.xs?"All Employees":"Employees"},null,8,["label"]),t(V,{name:1,label:"New Arrivals"})]),_:1},8,["modelValue"])]),_:1}),t(Y,{modelValue:e.tab,"onUpdate:modelValue":o[1]||(o[1]=r=>e.tab=r),animated:""},{default:n(()=>[t(h,{name:0},{default:n(()=>[t(i)]),_:1}),t(h,{name:1},{default:n(()=>[t(m)]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var Pe=y(oe,[["render",re]]);export{Pe as default};
