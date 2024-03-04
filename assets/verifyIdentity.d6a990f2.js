import{Q as z}from"./QImg.c4db01a4.js";import{_ as G,bW as J,bV as Z,bU as ee,r as S,c as ae,w as te,B as b,ar as I,bs as l,C as se,d as r,as as U,E as m,cU as re,cV as h,ad as Q,bP as le,bO as oe,cW as L,a9 as i,b as X,bR as $,cX as ie,bX as ne}from"./index.f532dd3a.js";import{Q as ue}from"./QForm.75a0f1ba.js";import{Q as ce}from"./QPage.a33d076d.js";import{a as de,u as k}from"./vee-validate.esm.f12921ec.js";import{u as me}from"./i18n.c56fe056.js";import{u as pe,e as fe,b as ve,q as u}from"./app.c2decb41.js";import{_ as ge}from"./languageSelector.e6f4f9f8.js";import{a as ye,e as be,c as j,d as he}from"./array.59f93f43.js";import{c as _e}from"./carousel.e5a31ca9.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.bb7adb48.js";import"./localForage.627988b4.js";import"./api.df6fe10b.js";import"./index.04bc0a32.js";import"./QSelect.40ac6683.js";import"./QChip.055ed411.js";import"./QMenu.219b0d4b.js";import"./position-engine.9267cf84.js";import"./selection.36689ad5.js";import"./rtl.b51694b1.js";import"./use-quasar.45d0ed96.js";import"./use-panel.dd7168d3.js";import"./touch.3df10340.js";import"./use-fullscreen.714ccbfc.js";const we={key:0,class:"col-md-7 col-lg-8 col-lx-8"},Ce={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},Ie={class:"text-dark"},Ue={class:"row"},qe={class:"row"},Ne={class:"text-grey-6"},xe={class:"row justify-center"},Se={__name:"verifyIdentity",setup($e){const s=pe(),{employeeData:_,socialRequired:R,updateEmployeeData:B,setEmployee:O}=fe(),D=ve(),{getCountry:n,currentLang:w}=J(D),f=Z(),v=ee(),{t:c}=me(),d=S(!1),q=S("confirm-identity"),F=ae(()=>ye({userRID:be().required(),ssn:j().required().matches(/^[0-9]{9}/g,{excludeEmptyString:!0,message:`${c("nineDigitsRequired")}`}).nullable().label(`${n.value==="CA"?c("socialInsuranceNumber"):c("socialSecurityNumber")}`),ssnConfirmation:j().oneOf([he("ssn"),null],`${n.value==="CA",c("socialInsuranceNumberMustMatch")}`).required().nullable().label(`${n.value==="CA"?c("socialInsuranceNumberConfirmation"):c("socialSecurityNumberConfirmation")}`)})),{errors:ke,meta:E}=de({validationSchema:F,initialValues:{ssn:"",ssnConfirmation:""}}),{value:g}=k("userRID"),{value:o,errorMessage:M,meta:T}=k("ssn"),{value:y,errorMessage:V,meta:Y}=k("ssnConfirmation"),C=S(!0);f.query.rid?(g.value=f.query.rid,o.value="",y.value="",v.replace({query:{}})):v.push("/"),te(()=>f.query,()=>{f.query.rid&&(g.value=f.query.rid,o.value="",y.value="",v.replace({query:{}}))});const K=async()=>{const e=u.getOfficeLocation();let a=1;w.value==="en-US"?a=1:w.value==="es"&&(a=2);const t=[{20:{value:s.getUser[35]},22:{value:s.getUser[37]},...n.value==="CA"?{564:{value:o.value}}:{109:{value:o.value}},25:{value:s.getUser[9]?s.getUser[9].phoneNumber:s.getUser[8].replace(/[^0-9]/g,"")},28:{value:s.getUser[50]?"Yes":"No"},26:{value:s.getUser[6]},34:{value:s.getUser[49]?"Yes":"No"},16:{value:e?e.rid:""},339:{value:a}}],{data:p}=await u.upsertRecordsXML({to:"bp3gb7ng2",fieldsToReturn:[500],data:t,formatObject:500}),x=p[0][500];return s.userLoggedIn&&O(x,!0),x[3]},N=async e=>{const a=u.getOfficeLocation();let t=1;w.value==="en-US"?t=1:w.value==="es"&&(t=2);const p={3:{value:e},20:{value:s.getUser[35]},22:{value:s.getUser[37]},...n.value==="CA"?{564:{value:o.value}}:{109:{value:o.value}},25:{value:s.getUser[9]?s.getUser[9].phoneNumber:s.getUser[8].replace(/[^0-9]/g,"")},28:{value:s.getUser[50]?"Yes":"No"},26:{value:s.getUser[6]},34:{value:s.getUser[49]?"Yes":"No"},...a&&{16:{value:a.rid}},339:{value:t}};return(await B({fields:p}))[3]},P=async e=>{const a=[{3:{value:s.getUser[86]},16:{value:e}}],{data:t}=await u.upsertRecordsXML({to:"br26nivmr",fieldsToReturn:[76],data:a,formatObject:76});return u.setCheckInData(t[0][76]),t[3]},H=async()=>{const a=[{8:{value:`${n.value==="CA"?`{'564'.EX.'${o.value}'}`:`{'188'.EX.'${o.value}'}`}AND{'509'.EX.'false'} `},7:{value:"Employees"},9:{value:12}}],{data:t}=await u.fetchFromHiringApp({fields:a});return t[0]?t[0][3]:null},A=async()=>{if(d.value=!0,!E.value.valid||!g.value||g.value==="")return d.value=!1,!1;let e=await H();const a=new Date,t={3:{value:Number(g.value)},26:{value:a}};R&&e?(_[3]&&await u.softDeleteEmployee(_[3]),await N(e)):R&&!e&&_[3]?e=await N(_[3]):e?await N(e):e||(e=await K()),D.checkedIn&&P(e),t[80]={value:e},t[85]={value:!1};try{await u.updateUserData({fields:t}),d.value=!1,v.push({path:"/",query:{verify:!0,...e&&{rid:e}}})}catch(p){d.value=!1,console.log(p)}d.value=!1},W=()=>{s.logout().then(()=>{v.replace({name:"login"})})};return(e,a)=>(b(),I(ce,{class:"window-height window-width row"},{default:l(()=>[e.$q.screen.lt.md?U("",!0):(b(),se("div",we,[r(_e)])),m("div",Ce,[r(re,{class:"auth-card",flat:""},{default:l(()=>[r(h,{style:{"padding-left":"30px","padding-right":"30px"}},{default:l(()=>[r(z,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"auth-logo full-width"})]),_:1}),r(h,{class:"text-center auth-description"},{default:l(()=>[m("p",Ie,Q(e.$t("pleaseVerifyInfoToCompleteRegistration")),1)]),_:1}),r(h,null,{default:l(()=>[r(ue,{class:"q-px-sm q-pt-sm",onSubmit:a[3]||(a[3]=le(()=>{},["prevent"])),onKeyup:oe(A,["enter"])},{default:l(()=>[m("div",Ue,[q.value==="confirm-identity"?(b(),I(L,{key:0,class:"col-xs-12",outlined:"",mask:"#########",modelValue:i(o),"onUpdate:modelValue":a[0]||(a[0]=t=>X(o)?o.value=t:null),maxlength:"9",minlength:"9",type:"password",label:i(n)==="CA"?e.$t("socialInsuranceNumber"):e.$t("socialSecurityNumber"),tabindex:"1",error:!!(i(M)&&i(T).validated),"error-message":i(M)},{prepend:l(()=>[r($,{name:"lock"})]),_:1},8,["modelValue","label","error","error-message"])):U("",!0)]),m("div",qe,[q.value==="confirm-identity"?(b(),I(L,{key:0,class:"col-xs-12",outlined:"",mask:"#########",modelValue:i(y),"onUpdate:modelValue":a[2]||(a[2]=t=>X(y)?y.value=t:null),maxlength:"9",minlength:"9",type:C.value?"password":"text",label:i(n)==="CA"?e.$t("confirmSIN"):e.$t("confirmSSN"),tabindex:"2",error:!!(i(V)&&i(Y).validated),"error-message":i(V)},{prepend:l(()=>[r($,{name:"lock"})]),append:l(()=>[r($,{name:C.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[1]||(a[1]=t=>C.value=!C.value)},null,8,["name"])]),_:1},8,["modelValue","type","label","error","error-message"])):U("",!0)])]),_:1},8,["onKeyup"])]),_:1}),r(ie,{class:"q-px-lg"},{default:l(()=>[q.value==="confirm-identity"?(b(),I(ne,{key:0,loading:d.value,disable:!i(E).valid,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:e.$t("confirm"),tabindex:"3",onClick:A},null,8,["loading","disable","label"])):U("",!0)]),_:1}),r(h,{class:"text-center q-pa-sm"},{default:l(()=>[m("p",Ne,[m("a",{onClick:W,class:"text-grey-6",href:"javascript:void(0);",tabindex:"4"},Q(e.$t("logout")),1)])]),_:1}),r(h,{class:"q-pl-lg q-pa-sm"},{default:l(()=>[m("div",xe,[r(ge,{dense:"",borderless:""})])]),_:1})]),_:1})])]),_:1}))}};var ta=G(Se,[["__scopeId","data-v-83795308"]]);export{ta as default};
