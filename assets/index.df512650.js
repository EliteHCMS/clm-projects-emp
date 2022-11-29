import{Q as H}from"./QPage.bcc16f77.js";import{u as B}from"./use-quasar.e40d42b5.js";import{k as F,bL as R,c as d,_ as C,A as r,an as b,bi as g,d as M,cw as $,B as x,F as I,aY as Q,D as n,ab as E,cz as L,bM as W,w as j,aZ as S,ao as k}from"./index.54a03736.js";import{u as A,a as w}from"./dataStore.9691b81f.js";import{u as N,q as Y}from"./quickbase.d7761f7e.js";import{dayjs as u}from"./dayjs.282c293e.js";import"./workday.dc8f4f3d.js";import{a as O}from"./syncEmployeeWithWorkday.488d4e07.js";import{d as P}from"./decode.593c6ccc.js";import{E as V}from"./employeeJobDetails.221d882a.js";import"./localForage.0e31c343.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./i18n.3c07d652.js";import"./api.ce91f01c.js";import"./workdayAPI.acb187c2.js";const z=F({props:{employee:Object},setup(a){R();const{setEmployees:i,setWorkdayData:y,getWorkdayData:s}=A(),p=({id:e,idType:o})=>o.includes("J&amp;E")?e.slice(-5):e,v=d(()=>{const e=s(a.employee[3]);let o;if(e&&!a.employee[207]){const{employmentData:h,personalData:D}=e,{workerStatus:c}=h,{identificationData:f}=D;o=[{label:P(f.customIds[0].idType),value:p(f.customIds[0])},{label:"Hire Date",value:u(c.hireDate).format("MM/DD/YYYY")},{label:"Original Hire Date",value:u(c.originalHireDate).format("MM/DD/YYYY")},{label:"Years Since Last Hire",value:u().diff(c.hireDate,"year",!0).toFixed(2)}]}else o=[];return o}),l=d(()=>[{label:"Name",value:a.employee[24]},{label:"ID",value:a.employee[378]},{label:"Phone",value:a.employee[25]}].concat(v.value));return(async()=>{const{clm:e,sync:o}=await O({clm:a.employee});i({id:a.employee[3],data:e}),y({id:a.employee[3],data:o})})(),{props:a,details:l}}}),J=n("div",{class:"text-h6 text-weight-bold"},"Employee Info",-1),T={class:"row"},G={class:"col-12 col-md-4"},U={class:"text-body2"},Z={class:"col-12 col-md-8"},K={class:"text-body2 text-weight-light"};function X(a,i,y,s,p,v){return r(),b(L,{class:"q-my-md q-pt-none"},{default:g(()=>[M($,{class:"q-pb-sm"},{default:g(()=>[J]),_:1}),(r(!0),x(I,null,Q(a.details,l=>(r(),b($,{key:l,class:"q-py-sm"},{default:g(()=>[n("div",T,[n("div",G,[n("div",U,E(l.label),1)]),n("div",Z,[n("div",K,E(l.value),1)])])]),_:2},1024))),128))]),_:1})}var ee=C(z,[["render",X]]);const ae={name:"View Release",components:{EmployeeJobDetails:V,FullEmployeeCard:ee},setup(){const a=B(),i=W();N();const{getReleases:y,setReleases:s,getEmployee:p,setEmployees:v,getAssignmentsByEmployee:l,setAssignmentsByEmployee:_}=A(),e=d(()=>y(i.params.id)),o=d(()=>e.value&&e.value[25]?p(e.value[25]):null),h=d(()=>o.value?l(o.value[3]):null),D=d(()=>{let t;return e.value&&e.value[3]?t=[{label:"Reason",value:e.value[32]},{label:"Last Day On Site",value:u(e.value[36].$d).format("MM/DD/YYYY")},{label:"CAAP Rating",value:e.value[59][0][37],type:"rating"},{label:"Submitted By",value:`${e.value[38][35]} ${e.value[38][37]}`},{label:"Submitted On",value:u(e.value[1].$d).tz(u.tz.guess()).format("MM/DD/YYYY hh:mm a")},{label:"Comments",value:e.value[60],type:"comments"}]:t=[],t}),c=async()=>{if(a.loading.show(),e.value)f(e.value[25]),q(e.value[28]);else{const{data:t}=await Y.fetchFromHiringApp({fields:[w({type:"releases",query:"",id:i.params.id})]});s({id:t[3],data:t}),f(t[25]),q(t[28])}a.loading.hide()},f=async t=>{if(!o.value){const{data:m}=await Y.fetchFromHiringApp({fields:[w({type:"employee",query:"",id:t})]});v({id:m[3],data:m})}},q=async t=>{if(!h.value&&t){const{data:m}=await Y.fetchFromHiringApp({fields:[w({type:"assignments",query:"",id:t})]});_({id:m[18],data:m})}};return c(),j(e,(t,m)=>{t&&c()}),{releaseDetails:D,release:e,employee:o,assignment:h}}},te={key:0,class:"q-pa-sm"},se={class:"row"},oe={class:"col-12 col-md-6 q-px-xs"},le={key:0};function ne(a,i,y,s,p,v){const l=S("full-employee-card"),_=S("employee-job-details");return r(),b(H,{style:{"max-width":"100vw"}},{default:g(()=>[s.release?(r(),x("div",te,[n("div",se,[n("div",oe,[s.employee&&s.assignment?(r(),x("div",le,[M(l,{employee:s.employee},null,8,["employee"]),s.assignment[21]==="In Process"?(r(),b(_,{key:0,class:"q-mt-md",assignment:s.assignment,employee:s.employee},null,8,["assignment","employee"])):k("",!0)])):k("",!0)])])])):k("",!0)]),_:1})}var we=C(ae,[["render",ne]]);export{we as default};
