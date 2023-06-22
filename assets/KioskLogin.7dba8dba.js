import{bT as U,bV as L,r as g,c as _,A as D,aq as E,br as t,d as s,cE as I,cF as p,cG as q,a8 as i,b as x,bQ as k,cH as N,bW as Q,D as c,ac as O,H as $,bO as z,bN as F,cI as H}from"./index.e8fb2253.js";import{u as T}from"./use-quasar.0aa2fc3d.js";import{u as V}from"./vee-validate.esm.f9a9192e.js";import{c as B}from"./array.6a8b7cfb.js";import{c as j,q as G}from"./app.00bf1e10.js";const W=c("div",{class:"text-h6"},"Kiosk Login",-1),J={class:"divider"},X={class:"divider-text"},Y={class:"text-h6"},le={__name:"KioskLogin",setup(Z){const{screen:n,notify:u}=T(),f=U(),v=j(),{fetchKioskAccount:K,setBookmarks:C,setBookmarksOnly:R,loginKiosk:ee}=v,{getBookMarksOnly:M}=L(v),d=g(!0),b=g(null),o=g(!1),A=_(()=>B().email().required().nullable()),P=_(()=>B().required().nullable()),{errorMessage:y,value:r}=V("email",A),{errorMessage:w,value:l}=V("password",P),h=async()=>{if(r.value===""||l.value===""||!r.value||!l.value){u({type:"negative",message:"Email and password Required!",timeout:7e3,position:n.lt.md?"top":"top-right"});return}o.value=!0;const m={email:r.value,password:l.value};try{const e=await G.nativeQuickbaseLogin(m);if((await K(e,!0)).length===0){u({type:"negative",message:"Valid Kiosk Account Required!",timeout:7e3,position:n.lt.md?"top":"top-right"}),o.value=!1;return}else o.value=!1,b.value.hide(),M.value&&f.push({name:"bookmarks"})}catch(e){o.value=!1;const{response:a}=e;a&&a.data.errtext&&a.data.errdetail?u({type:"negative",message:a.data.errdetail,timeout:7e3,position:n.lt.md?"top":"top-right"}):(console.log(e),u({type:"negative",message:"An error occurred, please try again later",timeout:7e3,position:n.lt.md?"top":"top-right"}))}},S=()=>{C(null,!0),R(!0,!0),f.push({name:"bookmarks"})};return(m,e)=>(D(),E(H,$({persistent:""},m.$attrs,{ref_key:"dialog",ref:b,onSubmit:e[3]||(e[3]=z(()=>{},["prevent"])),onKeyup:F(h,["enter"])}),{default:t(()=>[s(I,{style:{"min-width":"350px"}},{default:t(()=>[s(p,null,{default:t(()=>[W]),_:1}),s(p,{class:"q-pt-none"},{default:t(()=>[s(q,{for:"email-kiosk",style:{"padding-bottom":"0px"},autocomplete:"username",clearable:"",outlined:"",modelValue:i(r),"onUpdate:modelValue":e[0]||(e[0]=a=>x(r)?r.value=a:null),type:"email",label:"Email",tabindex:"1",error:!!i(y),"error-message":i(y)},{prepend:t(()=>[s(k,{name:"email"})]),_:1},8,["modelValue","error","error-message"])]),_:1}),s(p,{class:"q-pt-none"},{default:t(()=>[s(q,{for:"password-kiosk",class:"q-mt-lg",outlined:"",modelValue:i(l),"onUpdate:modelValue":e[2]||(e[2]=a=>x(l)?l.value=a:null),type:d.value?"password":"text",label:"Password",autocomplete:"current-password",tabindex:"2",error:!!i(w),"error-message":i(w)},{append:t(()=>[s(k,{name:d.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[1]||(e[1]=a=>d.value=!d.value)},null,8,["name"])]),prepend:t(()=>[s(k,{name:"lock"})]),_:1},8,["modelValue","type","error","error-message"])]),_:1}),s(N,{align:"right",class:"text-primary"},{default:t(()=>[s(Q,{label:"Login",color:"primary",size:"lg",class:"full-width text-white",onClick:h,loading:o.value,disabled:o.value},null,8,["loading","disabled"])]),_:1}),c("div",J,[c("div",X,O(m.$t("or")),1)]),s(p,{align:"center"},{default:t(()=>[c("div",Y,[s(Q,{label:"Bookmarks",color:"primary",size:"lg",class:"full-width text-white",onClick:S})])]),_:1})]),_:1})]),_:1},16,["onKeyup"]))}};export{le as _};
