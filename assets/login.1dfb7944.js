import{Q as de}from"./QImg.c4db01a4.js";import{_ as ue,bV as ce,bU as me,r as d,c as Q,w,b6 as q,B as u,ar as f,bs as t,aR as z,C as M,d as o,as as c,E as k,cV as _,ad as g,bP as pe,bO as ve,cW as G,aw as fe,bX as I,bR as D,G as ge,cX as ye,ay as R,cU as he}from"./index.f532dd3a.js";import{Q as be}from"./QForm.75a0f1ba.js";import{Q as we}from"./QPage.a33d076d.js";import{u as ke}from"./use-quasar.45d0ed96.js";import{u as H}from"./vee-validate.esm.f12921ec.js";import{p as _e}from"./VueTelInput.86eaef25.js";import{_ as xe}from"./languageSelector.e6f4f9f8.js";import{c as S}from"./array.59f93f43.js";import{c as Ce}from"./carousel.e5a31ca9.js";import{b as Te,q as W,h as Pe}from"./app.c2decb41.js";import{u as qe}from"./i18n.c56fe056.js";import{h as Y}from"./HelpDeskTicket.0e5586d9.js";import"./QSelect.40ac6683.js";import"./QChip.055ed411.js";import"./QMenu.219b0d4b.js";import"./position-engine.9267cf84.js";import"./selection.36689ad5.js";import"./rtl.b51694b1.js";import"./_commonjsHelpers.a26ce4be.js";import"./use-panel.dd7168d3.js";import"./touch.3df10340.js";import"./use-fullscreen.714ccbfc.js";import"./dayjs.bb7adb48.js";import"./localForage.627988b4.js";import"./api.df6fe10b.js";import"./index.04bc0a32.js";import"./QTooltip.3a6805dc.js";import"./QFile.f0ca71c6.js";import"./QSpinnerGears.57d3dbb7.js";const Me={name:"Login",components:{phoneNumberInput:_e,carousel:Ce,languageSelector:xe,helpDeskTicket:Y},setup(){const l=ke(),s=ce(),x=me(),{locale:e,t:C}=qe(),{currentUserType:T,currentPageType:A}=Te(),n=d(!1),i=d(!1),P=d(10),p=d(!1),r=d(null),E=d(!1),J=d("first"),y=d("username"),K=d(null),L=d(null),N=d(!1),V=d(!1),$=d(!1);s.query.redirect&&(L.value=s.query.redirect,x.replace({query:{}}));const ee=Q(()=>n.value?S().email(`${C("validEmailIsRequired")}`).nullable():S().email(`${C("validEmailIsRequired")}`).nullable()),ae=Q(()=>{if(i.value)return S().nullable();{const a=new RegExp("^[0-9]{"+P.value+"}","g");return S().matches(a,{excludeEmptyString:!0,message:`${C("validPhoneIsRequired")}`}).nullable()}}),le=Q(()=>S().required().min(8).matches(/^(?=.*\d)(?=.*[A-Za-z])(?=.*[a-zA-Z]).{8,}$/,{excludeEmptyString:!0,message:`${C("passwordRules")}`}).nullable()),{errorMessage:j,value:h}=H("email",ee),{errorMessage:B,value:v}=H("phone",ae),{errorMessage:O,value:b,validate:oe}=H("password",le),se=d(!0);w(j,a=>{a||h.value===""?i.value=!1:i.value=!0}),w(h,a=>{!a||a===""?i.value=!1:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a)&&!j.value&&(i.value=!0)}),w(B,a=>{a||v.value===""?n.value=!1:n.value=!0}),w(v,a=>{!a||a===""?n.value=!1:a.length===P.value&&!B.value&&(n.value=!0)}),w(O,a=>{a||b.value===""?p.value=!1:p.value=!0}),w(b,a=>{E.value=!1,!a||a===""?p.value=!1:oe().then(m=>{p.value=m.valid})});const te=a=>{P.value=a},F=Q(()=>!(n.value||i.value)),re=a=>{r.value=a},ne=()=>{y.value="username",b.value=null,z(()=>{document.querySelector("#email").focus()})},ie=()=>{y.value="username",b.value=null,z(()=>{document.querySelector("#phoneNumber").focus()})},X=async()=>{V.value=!0;const a={userType:T};n.value?a.phoneNumber=`+${r.value?r.value.dialCode:"1"}${v.value}`:i.value&&(a.email=h.value);try{const m=await W.checkIfUserExist(a);V.value=!1,m?(y.value="password",z(()=>{document.querySelector("#password").focus()})):T==="Candidate"?x.push({name:"register",params:{...n.value&&{phoneTemp:v.value},...i.value&&{emailTemp:a.email}}}):l.dialog({title:"Alert",message:n.value?"That phone number does not exist. Try again.":"That email does not exist. Try again."}).onOk(()=>{v.value="",n.value=!1,h.value="",i.value=!1})}catch(m){V.value=!1,console.log(m)}},Z=async()=>{N.value=!0,clearTimeout(K.value);const a={password:Pe.encodeHTML(b.value),userType:T};n.value?a.phoneNumber=`+${r.value?r.value.dialCode:"1"}${v.value}`:i.value&&(a.email=h.value);try{const m=await W.login(a);N.value=!1,m&&(L.value?x.push(L.value):x.push({path:"/"}))}catch(m){N.value=!1,K.value=setTimeout(function(){E.value=!1},7e3);const{response:U}=m;U&&U.data.errtext&&U.data.errdetail?l.notify({type:"negative",message:U.data.errdetail,timeout:7e3,position:l.screen.lt.md?"top":"top-right"}):(console.log(m),l.notify({type:"negative",message:"An error occurred, please try again later",timeout:7e3,position:l.screen.lt.md?"top":"top-right"}))}};return{email:h,phone:v,password:b,isPwd:se,validPhone:n,validEmail:i,step:y,validPassword:p,invalidLogin:E,continueProgress:V,loginProgress:N,passwordMessage:O,phoneMessage:B,emailMessage:j,userNameInvalid:F,updatePhoneMaxLength:te,continueAction:X,editUserNameEmail:ne,editUserNamePhoneNumber:ie,slide:J,login:Z,updateCountry:re,onSubmit:a=>{y.value==="username"&&!F.value?X():y.value==="password"&&!(!p.value||E.value)?Z():a.preventDefault()},locale:e,currentUserType:T,currentPageType:A,helpDeskTicket:Y,addTicket:$}}},Se={key:0,class:"col-md-7 col-lg-8 col-lx-8"},Ee={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},Ne={class:"text-dark"},Ve={key:1,class:"divider"},Ue={class:"divider-text"},Qe={key:0,class:"text-grey-6",tabindex:"4"},Ie={key:1,class:"text-grey-6"},Re={key:2,class:"text-grey-6"},Ae={class:"row justify-center"},Le={class:"row justify-center"};function je(l,s,x,e,C,T){const A=q("carousel"),n=q("phone-number-input"),i=q("router-link"),P=q("languageSelector"),p=q("helpDeskTicket");return u(),f(we,{class:"window-height window-width row"},{default:t(()=>[l.$q.screen.lt.md?c("",!0):(u(),M("div",Se,[o(A)])),k("div",Ee,[o(he,{class:"auth-card",flat:""},{default:t(()=>[o(_,{style:{"padding-left":"30px","padding-right":"30px"}},{default:t(()=>[o(de,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"auth-logo full-width"})]),_:1}),o(_,{class:"text-center auth-description"},{default:t(()=>[k("p",Ne,g(l.$t("pleaseSignInToYourAccount")),1)]),_:1}),o(_,null,{default:t(()=>[o(be,{class:"q-px-sm q-pt-sm",onSubmit:s[4]||(s[4]=pe(()=>{},["prevent"])),onKeyup:ve(e.onSubmit,["enter"])},{default:t(()=>[!e.validEmail&&!e.validPhone||e.validEmail?(u(),f(G,{key:0,for:"email",style:{"padding-bottom":"0px"},autocomplete:"username",clearable:"",outlined:"",modelValue:e.email,"onUpdate:modelValue":s[0]||(s[0]=r=>e.email=r),type:"email",label:l.$t("email"),tabindex:"1",error:!!e.emailMessage,"error-message":e.emailMessage,readonly:e.step!=="username"},fe({prepend:t(()=>[o(D,{name:"email"})]),_:2},[e.step!=="username"?{name:"append",fn:t(()=>[o(I,{round:"",dense:"",flat:"",icon:"edit",onClick:e.editUserNameEmail},null,8,["onClick"])]),key:"0"}:void 0]),1032,["modelValue","label","error","error-message","readonly"])):c("",!0),!e.validEmail&&!e.validPhone&&e.currentUserType==="Candidate"?(u(),M("div",Ve,[k("div",Ue,g(l.$t("or")),1)])):c("",!0),(!e.validEmail&&!e.validPhone||e.validPhone)&&e.currentUserType==="Candidate"?(u(),f(n,{key:2,outlined:"",for:"phoneNumber",modelValue:e.phone,"onUpdate:modelValue":s[1]||(s[1]=r=>e.phone=r),label:l.$t("phoneNumber"),tabindex:"1",autocomplete:"username",onMaxLengthChanged:e.updatePhoneMaxLength,style:ge(e.phoneMessage?"padding-bottom: 20px;":"padding-bottom: 0px;"),error:!!e.phoneMessage,"error-message":e.phoneMessage,readonly:e.step!=="username",editIcon:e.step!=="username",onEditClicked:e.editUserNamePhoneNumber,onCountryChanged:e.updateCountry},null,8,["modelValue","label","onMaxLengthChanged","style","error","error-message","readonly","editIcon","onEditClicked","onCountryChanged"])):c("",!0),e.step==="password"?(u(),f(G,{key:3,for:"password",class:"q-mt-lg",outlined:"",modelValue:e.password,"onUpdate:modelValue":s[3]||(s[3]=r=>e.password=r),type:e.isPwd?"password":"text",label:l.$t("password"),autocomplete:"current-password",tabindex:"2",error:!!e.passwordMessage,"error-message":e.passwordMessage},{append:t(()=>[o(D,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[2]||(s[2]=r=>e.isPwd=!e.isPwd)},null,8,["name"])]),prepend:t(()=>[o(D,{name:"lock"})]),_:1},8,["modelValue","type","label","error","error-message"])):c("",!0)]),_:1},8,["onKeyup"])]),_:1}),o(ye,{class:"q-px-lg"},{default:t(()=>[e.step==="username"?(u(),f(I,{key:0,loading:e.continueProgress,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:l.$t("continue"),tabindex:"3",disabled:e.userNameInvalid,onClick:e.continueAction},null,8,["loading","label","disabled","onClick"])):c("",!0),e.step==="password"?(u(),f(I,{key:1,loading:e.loginProgress,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:l.$t("login"),tabindex:"3",disabled:!e.validPassword||e.invalidLogin,onClick:e.login},null,8,["loading","label","disabled","onClick"])):c("",!0)]),_:1}),o(_,{class:"text-center q-pa-sm"},{default:t(()=>[e.currentUserType==="Candidate"?(u(),M("p",Qe,[R(g(l.$t("needAnAccountQuestion"))+" ",1),o(i,{to:"/register",class:"text-grey-6"},{default:t(()=>[R(g(l.$t("register")),1)]),_:1})])):c("",!0),e.currentUserType==="Candidate"?(u(),M("p",Ie,[o(i,{to:"/forgot-password",class:"text-grey-6"},{default:t(()=>[R(g(l.$t("forgotPasswordQuestion")),1)]),_:1})])):c("",!0),e.currentUserType!=="Candidate"?(u(),M("p",Re,[R(g(l.$t("needHelpQuestion"))+" ",1),k("a",{class:"text-grey-6",href:"javascript:void(0);",onClick:s[5]||(s[5]=r=>e.addTicket=!0)},g(l.$t("addHelpDeskTicket")),1)])):c("",!0)]),_:1}),o(_,{class:"q-pl-lg q-pa-sm"},{default:t(()=>[k("div",Ae,[o(P,{dense:"",borderless:""})])]),_:1}),e.currentPageType==="Candidate Kiosk"?(u(),f(_,{key:0,class:"q-pl-lg q-pa-sm"},{default:t(()=>[k("div",Le,[o(I,{label:"Bookmarks",color:"primary",size:"md",class:"text-white q-mt-xl",to:{name:"bookmarks"}})])]),_:1})):c("",!0)]),_:1})]),o(p,{modelValue:e.addTicket,"onUpdate:modelValue":s[6]||(s[6]=r=>e.addTicket=r)},null,8,["modelValue"])]),_:1})}var ya=ue(Me,[["render",je],["__scopeId","data-v-26f52b0e"]]);export{ya as default};
