import{a as g}from"./QSelect.40ac6683.js";import{a6 as y,bW as f,B,ar as O,aw as h,b5 as _,bs as u,D as w,ac as $,aI as k,a9 as e,E as D,H as P,ad as R,I as z}from"./index.f532dd3a.js";import{u as C,c as I}from"./app.c2decb41.js";const E={__name:"officeSelector",props:{can:{type:String,default:"read"},twilio:{type:Boolean,default:!1},styleSelection:{type:Boolean,default:!1}},setup(p){const d=p,{can:t,twilio:o,styleSelection:m}=y(d),S=C(),l=I(),{userOffices:s}=f(S),{setSelectedOffice:r}=l,{getSelectedOffice:n}=f(l);s.value(t.value,o.value).length===1&&r(s.value(t.value)[0],!0);const v=a=>{r(a,!0)};return(a,U)=>(B(),O(g,z({"model-value":e(n),options:e(s)(e(t),e(o))},a.$attrs,{"onUpdate:modelValue":v,label:e(n)?"Office":"Select Office","option-label":"11","option-value":"8",clearable:e(s)(e(t),e(o)).length>1,dense:""}),h({_:2},[_(a.$slots,(c,i)=>({name:i,fn:u(b=>[w(a.$slots,i,$(k(b)))])})),e(m)?{name:"selected-item",fn:u(c=>[D("span",{class:P(["text-primary",a.$q.screen.gt.sm?"text-h6":""])},R(c.opt[11]),3)]),key:"0"}:void 0]),1040,["model-value","options","label","clearable"]))}};export{E as _};
