import{a as k}from"./QSelect.c4b0a406.js";import{a5 as T,bV as D,r as n,c as w,w as m,A as x,aq as C,av as Q,b4 as R,br as S,C as V,ab as $,aH as A,a8 as u,D as H,ac as q,H as z}from"./index.e8fb2253.js";import{I as L,u as N}from"./app.00bf1e10.js";const O={class:"text-primary"},J={__name:"projectSelector",props:{can:{type:String,default:"read"},styleSelection:{type:Boolean,default:!1}},setup(g){const P=g,{styleSelection:h}=T(P),i=L(),{getUserType:s,getUser:j}=N(),{setSelectedProject:b,fetchProjects:y,fetchAllProjects:U}=i,{getProjects:_,getSelectedProject:t,getSelectedOffice:l}=D(i),d=n(l.value?l.value[8]:null),B=n(t.value?t.value[3]:null),o=n(s==="Project User"?j[3]:d),a=w(()=>_.value({userType:s,selectedId:o.value,can:"read"}).filter(e=>!0).sort((e,p)=>e[298].localeCompare(p[298]))),r=e=>{b(e)};a.value.length===1&&r(a.value[0]);const c=()=>{o.value&&s==="QuickBase User"?y({selectedId:o.value,extendTime:60}):U({can:"read",extendTime:60}).then(()=>{a.value.length===1&&r(a.value[0])})};return s==="QuickBase User"&&m(l,()=>{d.value=l.value?l.value[8]:null,c()}),s==="Project User"&&(a.value.length===0&&c(),m(t,()=>{B.value=t.value?t.value[3]:null,c()})),(e,p)=>(x(),C(k,z({"model-value":u(t),options:a.value},e.$attrs,{"onUpdate:modelValue":r,label:u(t)?"Project":"Select Project","option-label":"298","option-value":"3",clearable:a.value.length>1}),Q({_:2},[R(e.$slots,(f,v)=>({name:v,fn:S(I=>[V(e.$slots,v,$(A(I)))])})),u(h)?{name:"selected-item",fn:S(f=>[H("span",O,q(f.opt[298]),1)]),key:"0"}:void 0]),1040,["model-value","options","label","clearable"]))}};export{J as _};
