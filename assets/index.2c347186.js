import{Q as M}from"./QPage.d147e8f9.js";import{u as U}from"./use-quasar.0aa2fc3d.js";import{l as g,bU as N,c as u,_ as C,A as m,B as _,d as a,br as b,cG as V,D as F,bW as R,bO as A,r as G,b5 as B,cF as E,F as O,b4 as W,aq as j,cE as z,ar as H}from"./index.e8fb2253.js";import{q as J}from"./app.00bf1e10.js";import{a as K}from"./useQuerySaver.d29ff9ee.js";import{u as P}from"./dataStore.0af02e2e.js";import{a as D,c as d}from"./array.6a8b7cfb.js";import{a as I,u as p}from"./vee-validate.esm.f9a9192e.js";import{Q as T}from"./QForm.bc1b5926.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.d1250a8a.js";import"./localForage.8666a90b.js";import"./api.e92e8aaa.js";import"./index.04bc0a32.js";import"./i18n.2814a62c.js";const X=g({components:{},props:{columns:Array},setup(e,{emit:r}){const o=N(),{getViewedProjects:n,updateViewedProjects:i}=P(),t=u(()=>o.params.id?o.params.id:null),s=u(()=>t.value?n(t.value):null),c=u(()=>s.value&&s.value.crafts?s.value.crafts:[]),f=D({ssn:d().required().length(9).matches("^[0-9]*$").label("Social Security Number"),first:d().required().label("First Name"),last:d().required().label("Last Name")}),{errors:l,handleSubmit:v,handleReset:y}=I({validationSchema:f}),q=v(async Q=>{console.log(Q)}),{value:$}=p("ssn"),{value:S}=p("first"),{value:w}=p("last");return{crafts:c,ssn:$,first:S,last:w,formErrors:l,submit:q,handleReset:y}}}),Y={class:"q-pa-none q-ma-none",style:{display:"inline-block"}};function Z(e,r,o,n,i,t){return m(),_("div",null,[a(T,{onSubmit:A(e.submit,["prevent"])},{default:b(()=>[a(V,{style:{display:"inline-block"},dense:"",modelValue:e.ssn,"onUpdate:modelValue":r[0]||(r[0]=s=>e.ssn=s),square:"",outlined:"",label:"Social Security Number","stack-label":"",error:!!e.formErrors.ssn,class:"q-ma-none q-pa-none"},null,8,["modelValue","error"]),a(V,{style:{display:"inline-block"},dense:"",modelValue:e.first,"onUpdate:modelValue":r[1]||(r[1]=s=>e.first=s),square:"",outlined:"",label:"First Name","stack-label":"",error:!!e.formErrors.first,class:"q-ma-none q-pa-none"},null,8,["modelValue","error"]),a(V,{style:{display:"inline-block"},dense:"",modelValue:e.last,"onUpdate:modelValue":r[2]||(r[2]=s=>e.last=s),square:"",outlined:"",label:"Last Name","stack-label":"",error:!!e.formErrors.last,class:"q-ma-none q-pa-none"},null,8,["modelValue","error"]),F("div",Y,[a(R,{class:"q-my-none q-py-none",color:"info",label:"Submit",type:"submit",dense:"",onClick:e.submit},null,8,["onClick"]),a(R,{class:"q-my-none q-py-none",color:"secondary",label:"Reset",dense:"",onClick:e.handleReset},null,8,["onClick"])])]),_:1},8,["onSubmit"])])}var x=C(X,[["render",Z]]);const ee=g({components:{RosterRow:x},props:{},setup(e,{emit:r}){const o=N(),n=G([]),{getViewedProjects:i,updateViewedProjects:t}=P(),s=u(()=>o.params.id?o.params.id:null),c=u(()=>s.value?i(s.value):null),f=D({ssn:d().required().length(9).matches("^[0-9]*$").label("Social Security Number"),first:d().required(),last:d().required()}),{errors:l,handleSubmit:v}=I({validationSchema:f}),y=v(async h=>{console.log(h)}),{value:q}=p("ssn"),{value:$}=p("first"),{value:S}=p("last"),w=u(()=>[{label:"Social Security Number",type:"input",model:q,error:!!l.ssn,errorMessage:l.ssn},{label:"First Name",type:"input",model:$,error:!!l.first,errorMessage:l.first},{label:"Last Name",type:"input",model:S,error:!!l.last,errorMessage:l.last}]);return(()=>{for(let k=0;k<25;k++){const L={key:k};n.value.push(L)}})(),{project:c,columns:w,submit:y,rows:n}}}),se=F("div",{class:"text-h6 font-weight-bold"},"Roster Setup",-1);function re(e,r,o,n,i,t){const s=B("roster-row");return m(),_("div",null,[a(z,null,{default:b(()=>[a(E,null,{default:b(()=>[se]),_:1}),a(E,null,{default:b(()=>[(m(!0),_(O,null,W(e.rows,c=>(m(),j(s,{key:c.key,class:"q-ma-none q-pa-none"}))),128))]),_:1})]),_:1})])}var te=C(ee,[["render",re]]);const oe=g({name:"Setup",components:{RosterSetup:te},setup(){const e=U(),r=N(),{getViewedProjects:o,updateViewedProjects:n,setViewedProjects:i}=P(),t=u(()=>r.params.id?r.params.id:null),s=u(()=>t.value?o(t.value):null);return(async()=>{if(e.loading.show(),t.value&&!s.value){const{data:f}=await J.fetchFromProjectsApp({fields:[K({type:"projects",id:t.value})]});i({id:t.value,data:f})}e.loading.hide()})(),{project:s}}}),ae={class:"q-pa-md"};function ne(e,r,o,n,i,t){const s=B("roster-setup");return m(),j(M,{style:{"max-width":"100vw"}},{default:b(()=>[F("div",ae,[e.project?(m(),j(s,{key:0})):H("",!0)])]),_:1})}var he=C(oe,[["render",ne]]);export{he as default};
