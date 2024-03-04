import{Q as j}from"./QImg.c4db01a4.js";import{_ as z,bV as A,bU as F,r as h,c as X,b6 as O,B as l,ar as m,bs as s,a9 as t,C as T,d as e,as as w,E as r,cU as Z,cV as f,bP as H,cW as R,b as S,bR as x,cX as W,bX as G,ay as y,b2 as J,b0 as K}from"./index.f532dd3a.js";import{Q as Y}from"./QForm.75a0f1ba.js";import{Q as ee}from"./QPage.a33d076d.js";import{u as se}from"./use-quasar.45d0ed96.js";import{a as ae,u as C}from"./vee-validate.esm.f12921ec.js";import{q as k,j as M}from"./app.c2decb41.js";import{a as te,e as oe,c as P,d as re}from"./array.59f93f43.js";import{c as le}from"./carousel.e5a31ca9.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.bb7adb48.js";import"./localForage.627988b4.js";import"./api.df6fe10b.js";import"./index.04bc0a32.js";import"./i18n.c56fe056.js";import"./use-panel.dd7168d3.js";import"./touch.3df10340.js";import"./selection.36689ad5.js";import"./use-fullscreen.714ccbfc.js";const de=d=>(J("data-v-24eb4a9c"),d=d(),K(),d),ie={key:0,class:"col-md-7 col-lg-8 col-lx-8"},ne={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},ue=de(()=>r("p",{class:"text-dark"},"Update Password",-1)),pe={class:"row"},ce={class:"row"},me={class:"text-grey-6"},we={class:"text-grey-6"},fe={__name:"passwordUpdate",setup(d){const g=se(),Q=A(),v=F(),_=h("update-password"),i=h(!1),$=X(()=>te({userRID:oe().required(),password:P().required().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,{excludeEmptyString:!0,message:"Must Contain at least 8 Characters, at least 1 Uppercase, 1 Lowercase, and 1 Number"}).nullable(),passwordConfirmation:P().oneOf([re("password"),null],"Passwords must match")})),{errors:ge,meta:B}=ae({validationSchema:$,initialValues:{password:"",passwordConfirmation:""}}),{value:n}=C("userRID"),{value:u,errorMessage:V,meta:D}=C("password"),{value:b,errorMessage:q,meta:L}=C("passwordConfirmation"),p=h(!0);Q.query.rid?(n.value=Q.query.rid,v.replace({query:{}})):v.push("/");const N=async()=>{if(!n.value||n.value==="")return!1;i.value=!0;const I=await k.isUserLoggedIn(),a=await M.genSalt(10),c=M.hashSync(u.value,a),o=new Date,U={3:{value:n.value},7:{value:c},26:{value:o}};try{I?await k.updateUserData({fields:U}):(await k.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:[U],formatObject:76}),g.notify({position:"top-right",type:"info",message:"Login with new password!"})),i.value=!1,v.push("/")}catch(E){i.value=!1,g.notify({position:"top-right",type:"negative",message:E.message||"Error updating password"})}};return(I,a)=>{const c=O("router-link");return l(),m(ee,{class:"window-height window-width row"},{default:s(()=>[t(g).screen.lt.md?w("",!0):(l(),T("div",ie,[e(le)])),r("div",ne,[e(Z,{class:"auth-card",flat:""},{default:s(()=>[e(f,{style:{"padding-left":"30px","padding-right":"30px"}},{default:s(()=>[e(j,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"auth-logo full-width"})]),_:1}),e(f,{class:"text-center auth-description"},{default:s(()=>[ue]),_:1}),e(f,null,{default:s(()=>[e(Y,{class:"q-px-sm q-pt-sm",onSubmit:a[3]||(a[3]=H(()=>{},["prevent"]))},{default:s(()=>[r("div",pe,[_.value==="update-password"?(l(),m(R,{key:0,class:"col-xs-12",outlined:"",modelValue:t(u),"onUpdate:modelValue":a[1]||(a[1]=o=>S(u)?u.value=o:null),type:p.value?"password":"text",autocomplete:"current-password",label:"Password",tabindex:"1",error:!!(t(V)&&t(D).validated),"error-message":t(V)},{append:s(()=>[e(x,{name:p.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[0]||(a[0]=o=>p.value=!p.value)},null,8,["name"])]),prepend:s(()=>[e(x,{name:"lock"})]),_:1},8,["modelValue","type","error","error-message"])):w("",!0)]),r("div",ce,[_.value==="update-password"?(l(),m(R,{key:0,class:"col-xs-12",outlined:"",modelValue:t(b),"onUpdate:modelValue":a[2]||(a[2]=o=>S(b)?b.value=o:null),type:"password",autocomplete:"new-password",label:"Confirm Password",tabindex:"2",error:!!(t(q)&&t(L).validated),"error-message":t(q)},{prepend:s(()=>[e(x,{name:"lock"})]),_:1},8,["modelValue","error","error-message"])):w("",!0)])]),_:1})]),_:1}),e(W,{class:"q-px-lg"},{default:s(()=>[_.value==="update-password"?(l(),m(G,{key:0,loading:i.value,disable:!t(B).valid,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:"Update Password",tabindex:"3",onClick:N},null,8,["loading","disable"])):w("",!0)]),_:1}),e(f,{class:"text-center q-pa-sm"},{default:s(()=>[r("p",me,[e(c,{to:"/login",class:"text-grey-6",tabindex:"4"},{default:s(()=>[y("Return to Login")]),_:1})]),r("p",we,[y("Need an account? "),e(c,{to:"/register",class:"text-grey-6",tabindex:"5"},{default:s(()=>[y("Register")]),_:1})])]),_:1})]),_:1})])]),_:1})}}};var De=z(fe,[["__scopeId","data-v-24eb4a9c"]]);export{De as default};
