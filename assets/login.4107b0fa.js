import{Q as re}from"./QImg.528a6e4c.js";import{_ as ne,c4 as ie,c3 as de,r as i,c as E,w as y,aX as U,y as u,al as p,bg as s,z as L,d as l,am as c,B as q,c1 as w,a9 as P,bD as ue,bC as ce,cA as W,aq as me,c5 as I,bW as z,C as pe,cB as ge,as as j,c2 as fe,aG as K}from"./index.b3e75908.js";import{Q as ve}from"./QForm.4299a774.js";import{Q as he}from"./QPage.de043d3b.js";import{u as ye}from"./use-quasar.0709ee11.js";import{c as M,u as D}from"./array.67354d4e.js";import{p as we}from"./VueTelInput.61fbc7eb.js";import{_ as be}from"./languageSelector.47ae2e17.js";import{c as _e}from"./carousel.4ea49972.js";import{c as xe,q as X}from"./quickbase.002c2695.js";import{u as ke}from"./i18n.6357316e.js";import"./_commonjsHelpers.dfee5925.js";import"./QSelect.f41b057f.js";import"./QMenu.c7af2595.js";import"./position-engine.dc1fa88b.js";import"./selection.f696f409.js";import"./rtl.65b79c69.js";import"./use-panel.acfa707c.js";import"./touch.d8ab472d.js";import"./use-fullscreen.7a786134.js";import"./dayjs.d2fb0443.js";import"./localForage.69471374.js";import"./index.7dbe61ef.js";import"./api.4d9372cc.js";const Ce={name:"Login",components:{phoneNumberInput:we,carousel:_e,languageSelector:be},setup(){const o=ye(),n=ie(),b=de(),{locale:e,t:_}=ke(),{currentUserType:x,currentPageType:V}=xe(),t=i(!1),r=i(!1),k=i(10),d=i(!1),C=i(null),T=i(!1),Y=i("first"),f=i("username"),F=i(null),A=i(null),S=i(!1),N=i(!1);n.query.redirect&&(A.value=n.query.redirect,b.replace({query:{}}));const J=E(()=>t.value?M().email(`${_("validEmailIsRequired")}`).nullable():M().email(`${_("validEmailIsRequired")}`).nullable()),$=E(()=>{if(r.value)return M().nullable();{const a=new RegExp("^[0-9]{"+k.value+"}","g");return M().matches(a,{excludeEmptyString:!0,message:`${_("validPhoneIsRequired")}`}).nullable()}}),ee=E(()=>M().required().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,{excludeEmptyString:!0,message:`${_("passwordRules")}`}).nullable()),{errorMessage:B,value:v}=D("email",J),{errorMessage:R,value:g}=D("phone",$),{errorMessage:O,value:h}=D("password",ee),ae=i(!0);y(B,a=>{a||v.value===""?r.value=!1:r.value=!0}),y(v,a=>{!a||a===""?r.value=!1:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a)&&!B.value&&(r.value=!0)}),y(R,a=>{a||g.value===""?t.value=!1:t.value=!0}),y(g,a=>{!a||a===""?t.value=!1:a.length===k.value&&!R.value&&(t.value=!0)}),y(O,a=>{a||h.value===""?d.value=!1:d.value=!0}),y(h,a=>{T.value=!1,(!a||a==="")&&(d.value=!1)});const oe=a=>{k.value=a},Z=E(()=>!(t.value||r.value)),le=a=>{C.value=a},se=()=>{f.value="username",h.value=null,K(()=>{document.querySelector("#email").focus()})},te=()=>{f.value="username",h.value=null,K(()=>{document.querySelector("#phoneNumber").focus()})},G=async()=>{N.value=!0;const a={userType:x};t.value?a.phoneNumber=`+${C.value?C.value.dialCode:"1"}${g.value}`:r.value&&(a.email=v.value);try{const m=await X.checkIfUserExist(a);N.value=!1,m?(f.value="password",K(()=>{document.querySelector("#password").focus()})):x==="Candidate"?b.push({name:"register",params:{...t.value&&{phoneTemp:g.value},...r.value&&{emailTemp:a.email}}}):o.dialog({title:"Alert",message:t.value?"That phone number does not exist. Try again.":"That email does not exist. Try again."}).onOk(()=>{g.value="",t.value=!1,v.value="",r.value=!1})}catch(m){N.value=!1,console.log(m)}},H=async()=>{S.value=!0,clearTimeout(F.value);const a={password:h.value,userType:x};t.value?a.phoneNumber=`+${C.value?C.value.dialCode:"1"}${g.value}`:r.value&&(a.email=v.value);try{const m=await X.login(a);S.value=!1,m&&(A.value?b.push(A.value):b.push({path:"/"}))}catch(m){S.value=!1,F.value=setTimeout(function(){T.value=!1},7e3);const{response:Q}=m;Q&&Q.data.errtext&&Q.data.errdetail?o.notify({type:"negative",message:Q.data.errdetail,timeout:7e3,position:o.screen.lt.md?"top":"top-right"}):(console.log(m),o.notify({type:"negative",message:"An error occurred, please try again later",timeout:7e3,position:o.screen.lt.md?"top":"top-right"}))}};return{email:v,phone:g,password:h,isPwd:ae,validPhone:t,validEmail:r,step:f,validPassword:d,invalidLogin:T,continueProgress:N,loginProgress:S,passwordMessage:O,phoneMessage:R,emailMessage:B,userNameInvalid:Z,updatePhoneMaxLength:oe,continueAction:G,editUserNameEmail:se,editUserNamePhoneNumber:te,slide:Y,login:H,updateCountry:le,onSubmit:a=>{f.value==="username"&&!Z.value?G():f.value==="password"&&!(!d.value||T.value)?H():a.preventDefault()},locale:e,currentUserType:x,currentPageType:V}}},qe={key:0,class:"col-md-7 col-lg-8 col-lx-8"},Pe={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},Me={class:"text-dark"},Te={key:1,class:"divider"},Se={class:"divider-text"},Ne={key:0,class:"text-grey-6",tabindex:"4"},Qe={class:"row justify-center"},Ee={class:"row justify-center"};function Ue(o,n,b,e,_,x){const V=U("carousel"),t=U("phone-number-input"),r=U("router-link"),k=U("languageSelector");return u(),p(he,{class:"window-height window-width row"},{default:s(()=>[o.$q.screen.lt.md?c("",!0):(u(),L("div",qe,[l(V)])),q("div",Pe,[l(fe,{class:"auth-card",flat:""},{default:s(()=>[l(w,{style:{"padding-left":"30px","padding-right":"30px"}},{default:s(()=>[l(re,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"auth-logo full-width"})]),_:1}),l(w,{class:"text-center auth-description"},{default:s(()=>[q("p",Me,P(o.$t("pleaseSignInToYourAccount")),1)]),_:1}),l(w,null,{default:s(()=>[l(ve,{class:"q-px-sm q-pt-sm",onSubmit:n[4]||(n[4]=ue(()=>{},["prevent"])),onKeyup:ce(e.onSubmit,["enter"])},{default:s(()=>[!e.validEmail&&!e.validPhone||e.validEmail?(u(),p(W,{key:0,for:"email",style:{"padding-bottom":"0px"},autocomplete:"username",clearable:"",outlined:"",modelValue:e.email,"onUpdate:modelValue":n[0]||(n[0]=d=>e.email=d),type:"email",label:o.$t("email"),tabindex:"1",error:!!e.emailMessage,"error-message":e.emailMessage,readonly:e.step!=="username"},me({prepend:s(()=>[l(z,{name:"email"})]),_:2},[e.step!=="username"?{name:"append",fn:s(()=>[l(I,{round:"",dense:"",flat:"",icon:"edit",onClick:e.editUserNameEmail},null,8,["onClick"])])}:void 0]),1032,["modelValue","label","error","error-message","readonly"])):c("",!0),!e.validEmail&&!e.validPhone&&e.currentUserType!=="QuickBase User"?(u(),L("div",Te,[q("div",Se,P(o.$t("or")),1)])):c("",!0),(!e.validEmail&&!e.validPhone||e.validPhone)&&e.currentUserType!=="QuickBase User"?(u(),p(t,{key:2,outlined:"",for:"phoneNumber",modelValue:e.phone,"onUpdate:modelValue":n[1]||(n[1]=d=>e.phone=d),label:o.$t("phoneNumber"),tabindex:"1",autocomplete:"username",onMaxLengthChanged:e.updatePhoneMaxLength,style:pe(e.phoneMessage?"padding-bottom: 20px;":"padding-bottom: 0px;"),error:!!e.phoneMessage,"error-message":e.phoneMessage,readonly:e.step!=="username",editIcon:e.step!=="username",onEditClicked:e.editUserNamePhoneNumber,onCountryChanged:e.updateCountry},null,8,["modelValue","label","onMaxLengthChanged","style","error","error-message","readonly","editIcon","onEditClicked","onCountryChanged"])):c("",!0),e.step==="password"?(u(),p(W,{key:3,for:"password",class:"q-mt-lg",outlined:"",modelValue:e.password,"onUpdate:modelValue":n[3]||(n[3]=d=>e.password=d),type:e.isPwd?"password":"text",label:o.$t("password"),autocomplete:"current-password",tabindex:"2",error:!!e.passwordMessage,"error-message":e.passwordMessage},{append:s(()=>[l(z,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:n[2]||(n[2]=d=>e.isPwd=!e.isPwd)},null,8,["name"])]),prepend:s(()=>[l(z,{name:"lock"})]),_:1},8,["modelValue","type","label","error","error-message"])):c("",!0)]),_:1},8,["onKeyup"])]),_:1}),l(ge,{class:"q-px-lg"},{default:s(()=>[e.step==="username"?(u(),p(I,{key:0,loading:e.continueProgress,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:o.$t("continue"),tabindex:"3",disabled:e.userNameInvalid,onClick:e.continueAction},null,8,["loading","label","disabled","onClick"])):c("",!0),e.step==="password"?(u(),p(I,{key:1,loading:e.loginProgress,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:o.$t("login"),tabindex:"3",disabled:!e.validPassword||e.invalidLogin,onClick:e.login},null,8,["loading","label","disabled","onClick"])):c("",!0)]),_:1}),l(w,{class:"text-center q-pa-sm"},{default:s(()=>[e.currentUserType==="Candidate"?(u(),L("p",Ne,[j(P(o.$t("needAnAccountQuestion"))+" ",1),l(r,{to:"/register",class:"text-grey-6"},{default:s(()=>[j(P(o.$t("register")),1)]),_:1})])):c("",!0),e.currentUserType!=="QuickBase User"?(u(),p(r,{key:1,to:"/forgot-password",class:"text-grey-6"},{default:s(()=>[j(P(o.$t("forgotPasswordQuestion")),1)]),_:1})):c("",!0)]),_:1}),l(w,{class:"q-pl-lg q-pa-sm"},{default:s(()=>[q("div",Qe,[l(k,{dense:"",borderless:""})])]),_:1}),e.currentPageType==="Candidate Kiosk"?(u(),p(w,{key:0,class:"q-pl-lg q-pa-sm"},{default:s(()=>[q("div",Ee,[l(I,{label:"Bookmarks",color:"primary",size:"md",class:"text-white q-mt-xl",to:{name:"bookmarks"}})])]),_:1})):c("",!0)]),_:1})])]),_:1})}var ta=ne(Ce,[["render",Ue],["__scopeId","data-v-e9f577da"]]);export{ta as default};
