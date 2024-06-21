import{Q as ve,a as ye,b as we}from"./QTabPanels.a46e830a.js";import{Q as Ce}from"./QTabs.ca4a6834.js";import{Q as $e}from"./QToolbar.0c85977b.js";import{Q as he}from"./QPage.85b84ca5.js";import{u as J}from"./use-quasar.6cc770ef.js";import{l as K,r as h,_ as Z,B as y,C as L,d as o,bt as l,cV as W,cW as H,E as b,ae as O,cX as P,cY as I,bY as V,bQ as le,z as ie,at as j,cB as me,bW as fe,c as z,b7 as _,as as E,F as Y,b6 as G,az as de,dj as ge,w as Ae}from"./index.52451644.js";import{a as U,c as T}from"./array.164cfe36.js";import{q as A}from"./app.4a1e4074.js";import{d as x,b as ke,a as be}from"./useQuerySaver.d29ff9ee.js";import"./dayjs.3886e7b6.js";import{u as qe}from"./index.94e1fdff.js";import{u as pe}from"./dataStore.328b6498.js";import{Q as ue}from"./QInnerLoading.6fcc845d.js";import{Q as ce,a as ae}from"./QTable.55c57da0.js";import{Q as te}from"./QTr.43f598e7.js";import{Q as oe}from"./QTd.9de883f6.js";import{a as re}from"./QSelect.adcb4524.js";import{Q as ne}from"./QForm.6648b3a5.js";import{a as se,u as D}from"./vee-validate.esm.9fbe7cdf.js";import"./use-panel.cb6503f8.js";import"./touch.3df10340.js";import"./selection.74f79ead.js";import"./QResizeObserver.0d9b95a0.js";import"./rtl.b51694b1.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.b959fbb7.js";import"./index.04bc0a32.js";import"./i18n.d1d95905.js";import"./QList.d49c043d.js";import"./QMarkupTable.7564be81.js";import"./use-fullscreen.1c055a51.js";import"./QChip.f4f09ec6.js";import"./QMenu.32294ecc.js";import"./position-engine.20a5bad0.js";const Ne=K({emits:["cancelAdd","addComplete"],props:{},setup(e,{emit:t}){const w=J(),m=h(null),{capitalize:v}=ie,C=u=>{const p=u.split(" ");let R="";return p.forEach((X,Q)=>{R+=Q>0?` ${v(X.toLowerCase())}`:v(X.toLowerCase())}),R},s=U({name:T().required().label("Course Name"),category:U().required().label("Category").nullable(),code:T().label("Course Code").nullable()}),{meta:r,errors:k,handleSubmit:$,handleReset:N}=se({validationSchema:s}),{value:d}=D("name"),{value:f}=D("category"),{value:a}=D("code"),i=$(async u=>{const p={6:{value:C(u.name)},8:{value:u.code||""},10:{value:u.category[3]}};try{const{data:R}=await A.upsertRecordsXML({to:"bp6rvwu6i",data:[p],fieldsToReturn:[20],formatObject:20});t("addComplete",R[0][20]),N()}catch(R){console.log(R),w.notify({type:"negative",message:"Something went wrong!"})}});return(async()=>{const{data:u}=await A.fetchFromCredentialsAndTrainingApp({fields:[x({type:"requirementCategories",query:"{'7'.EX.'Active'}"})]});m.value=u.sort((p,R)=>p[6]>R[6]?1:-1)})(),{formErrors:k,formMeta:r,submit:i,name:d,category:f,code:a,categories:m}}}),Ve={class:"q-mb-md"},Se={class:"text-caption"},Te={class:"q-mb-md"},Oe={class:"text-caption"},Ee={class:"text-caption"};function Le(e,t,w,m,v,C){return y(),L("div",null,[o(ne,{onSubmit:le(e.submit,["prevent"])},{default:l(()=>[o(W,null,{default:l(()=>[o(H,null,{default:l(()=>[b("div",null,[b("div",Ve,[o(re,{class:"q-mb-sm",dense:"",label:"Select a Category","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.category,"onUpdate:modelValue":t[0]||(t[0]=s=>e.category=s),options:e.categories||[],"option-label":"6","display-value":`${e.category?e.category[6]:""}`,"bottom-slots":"",error:!!e.formErrors.category},{error:l(()=>[b("div",Se,O(e.formErrors.category),1)]),_:1},8,["modelValue","options","display-value","error"])]),b("div",Te,[o(P,{label:"Course Name",dense:"",modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=s=>e.name=s),error:!!e.formErrors.name,"bottom-slots":""},{error:l(()=>[b("div",Oe,O(e.formErrors.name),1)]),_:1},8,["modelValue","error"])]),b("div",null,[o(P,{label:"Course Code",dense:"",modelValue:e.code,"onUpdate:modelValue":t[2]||(t[2]=s=>e.code=s),error:!!e.formErrors.code,"bottom-slots":""},{error:l(()=>[b("div",Ee,O(e.formErrors.code),1)]),_:1},8,["modelValue","error"])])])]),_:1}),o(I,{align:"right"},{default:l(()=>[o(V,{color:"secondary",label:"Cancel",onClick:t[3]||(t[3]=s=>e.$emit("cancelAdd"))}),o(V,{color:"primary",label:"Submit",type:"submit",onClick:e.submit},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var Me=Z(Ne,[["render",Le]]);const Re=K({emits:["cancelAdd","addComplete"],props:{},setup(e,{emit:t}){const w=J(),m=h([]),v=h([]),C=h(!1),s=h(""),r=h(null),{capitalize:k}=ie,$=g=>{const c=g.split(" ");let q="";return c.forEach((M,B)=>{q+=B>0?` ${k(M.toLowerCase())}`:k(M.toLowerCase())}),q},N=U({name:T().required().label("Type"),category:U().required().label("Regulator").nullable(),code:T().required().label("Description").nullable()}),{meta:d,errors:f,handleSubmit:a,handleReset:i}=se({validationSchema:N}),{value:n}=D("name"),{value:u}=D("category"),{value:p}=D("code"),R=a(async g=>{const c={6:{value:$(g.name)},7:{value:g.code},8:{value:g.category[3]}};try{const{data:q}=await A.upsertRecordsXML({to:"bp6rvxmg3",data:[c],fieldsToReturn:[15],formatObject:15});t("addComplete",q[0][15]),i()}catch(q){console.log(q),w.notify({type:"negative",message:"Something went wrong!"})}}),X=(g,c)=>{if(g===""){c(()=>{m.value=v.value});return}c(()=>{const q=g.toLowerCase();m.value=v.value.filter(M=>M[6].toLowerCase().indexOf(q)>-1)})},Q=async()=>{await T().required().label("Regulator Name").isValid(s.value)?(r.value=null,ee(s.value)):r.value="Regulator Name is required!"},ee=async g=>{try{const{data:c}=await A.upsertRecordsXML({to:"bp6r8qzkg",data:[{6:{value:$(g)}}],fieldsToReturn:[12],formatObject:12});v.value.push(c[0][12]),u.value=c[0][12],m.value=v.value,S()}catch(c){w.dialog({title:"Alert",message:c}).onDismiss(()=>{S()})}},S=()=>{s.value="",r.value=!1,C.value=!1};return(async()=>{const{data:g}=await A.fetchFromCredentialsAndTrainingApp({fields:[x({type:"regulators",query:"{'7'.EX.'Active'}"})]});v.value=g.sort((c,q)=>c[6]>q[6]?1:-1),m.value=v.value})(),{formErrors:f,formMeta:d,submit:R,name:n,category:u,code:p,categories:m,filterOptions:X,addNew:C,newCategory:s,newCatError:r,closeAddNew:S,validateNewCategory:Q}}}),je={class:"q-mb-md"},Fe={class:"text-caption"},Xe={key:0,class:"text-center bg-info"},De={class:"text-center bg-info"},Qe={class:"q-mb-md"},Ue={class:"text-caption"},Pe={class:"text-caption"},Be={class:"text-caption"};function ze(e,t,w,m,v,C){return y(),L("div",null,[o(ne,{onSubmit:le(e.submit,["prevent"])},{default:l(()=>[o(W,null,{default:l(()=>[o(H,null,{default:l(()=>[b("div",null,[b("div",je,[o(re,{class:"q-mb-sm",dense:"",label:"Select a Regulator","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.category,"onUpdate:modelValue":t[2]||(t[2]=s=>e.category=s),options:e.categories,"option-label":"6","display-value":`${e.category?e.category[6]:""}`,"bottom-slots":"",error:!!e.formErrors.category,"use-input":"",behavior:e.$q.platform.is.ios===!0?"dialog":"menu","input-debounce":"0",onFilter:e.filterOptions},{error:l(()=>[b("div",Fe,O(e.formErrors.category),1)]),"after-options":l(()=>[e.categories.length>0?(y(),L("div",Xe,[o(V,{flat:"",color:"white",label:"Add a New Regulator",onClick:t[0]||(t[0]=s=>e.addNew=!0)})])):j("",!0)]),"no-option":l(()=>[b("div",De,[o(V,{flat:"",color:"white",label:"Add a New Regulator",onClick:t[1]||(t[1]=s=>e.addNew=!0)})])]),_:1},8,["modelValue","options","display-value","error","behavior","onFilter"])]),b("div",Qe,[o(P,{label:"Test Type",dense:"",modelValue:e.name,"onUpdate:modelValue":t[3]||(t[3]=s=>e.name=s),error:!!e.formErrors.name,"bottom-slots":""},{error:l(()=>[b("div",Ue,O(e.formErrors.name),1)]),_:1},8,["modelValue","error"])]),b("div",null,[o(P,{label:"Description",dense:"",modelValue:e.code,"onUpdate:modelValue":t[4]||(t[4]=s=>e.code=s),error:!!e.formErrors.code,"bottom-slots":""},{error:l(()=>[b("div",Pe,O(e.formErrors.code),1)]),_:1},8,["modelValue","error"])])])]),_:1}),o(I,{align:"right"},{default:l(()=>[o(V,{color:"secondary",label:"Cancel",onClick:t[5]||(t[5]=s=>e.$emit("cancelAdd"))}),o(V,{color:"primary",label:"Submit",type:"submit",onClick:e.submit},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onSubmit"]),o(me,{modelValue:e.addNew,"onUpdate:modelValue":t[7]||(t[7]=s=>e.addNew=s)},{default:l(()=>[o(W,null,{default:l(()=>[o(H,null,{default:l(()=>[o(P,{dense:"",label:"Regulator Name",modelValue:e.newCategory,"onUpdate:modelValue":t[6]||(t[6]=s=>e.newCategory=s),error:!!e.newCatError,"bottom-slots":""},{error:l(()=>[b("div",Be,O(e.newCatError),1)]),_:1},8,["modelValue","error"])]),_:1}),o(I,{align:"right"},{default:l(()=>[o(V,{color:"secondary",label:"Cancel",onClick:e.closeAddNew},null,8,["onClick"]),o(V,{color:"primary",label:"Submit",type:"submit",onClick:e.validateNewCategory},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var He=Z(Re,[["render",ze]]);const Ie=[{label:"Half Face",value:"Half"},{label:"Full Face",value:"Full"}],Ye=K({emits:["cancelAdd","addComplete"],props:{options:Array},setup(e,{emit:t}){const w=J(),m=h([]),v=h([]),C=h(!1),s=h(""),r=h(null),k=U({name:T().required().label("Model"),category:T().required().label("Manufacturer").nullable(),code:U().required().label("Type").nullable()}),{meta:$,errors:N,handleSubmit:d,handleReset:f}=se({validationSchema:k}),{value:a}=D("name"),{value:i}=D("category"),{value:n}=D("code"),u=d(async S=>{const F={8:{value:S.name},11:{value:S.category},13:{value:S.code.value}};try{const{data:g}=await A.upsertRecordsXML({to:"bp6rv4qnn",data:[F],fieldsToReturn:[16],formatObject:16});t("addComplete",g[0][16]),f()}catch(g){console.log(g),w.notify({type:"negative",message:"Something went wrong!"})}}),p=(S,F)=>{if(!S||S===""){F(()=>{m.value=v.value});return}F(()=>{const g=S.toLowerCase();m.value=v.value.filter(c=>c.toLowerCase().indexOf(g)>-1)})},R=async()=>{await T().required().isValid(s.value)?(r.value=null,X(s.value)):r.value="Manufacturer Name is required!"},X=S=>{const F=v.value.find(g=>g===S);F?i.value=F:(v.value.unshift(S),m.value=v.value),Q()},Q=()=>{s.value="",r.value=!1,C.value=!1};return(()=>{const S=e.options;v.value=[...new Map(S.map(F=>[F[11],F[11]])).values()],m.value=v.value})(),{formErrors:N,formMeta:$,submit:u,name:a,category:i,code:n,categories:m,types:Ie,filterOptions:p,addNew:C,newCategory:s,newCatError:r,closeAddNew:Q,validateNewCategory:R}}}),Ge={class:"q-mb-md"},We={class:"text-caption"},Je={key:0,class:"text-center bg-info"},Ke={class:"text-center bg-info"},Ze={class:"q-mb-md"},_e={class:"text-caption"},xe={class:"text-caption"},ea={class:"text-caption"};function aa(e,t,w,m,v,C){return y(),L("div",null,[o(ne,{onSubmit:le(e.submit,["prevent"])},{default:l(()=>[o(W,null,{default:l(()=>[o(H,null,{default:l(()=>[b("div",null,[b("div",Ge,[o(re,{class:"q-mb-sm",dense:"",label:"Select a Manufacturer",modelValue:e.category,"onUpdate:modelValue":t[2]||(t[2]=s=>e.category=s),options:e.categories,"bottom-slots":"",error:!!e.formErrors.category,"use-input":"",behavior:e.$q.platform.is.ios===!0?"dialog":"menu","input-debounce":"0",onFilter:e.filterOptions},{error:l(()=>[b("div",We,O(e.formErrors.category),1)]),"after-options":l(()=>[e.categories.length>0?(y(),L("div",Je,[o(V,{flat:"",color:"white",label:"Add a New Manufacturer",onClick:t[0]||(t[0]=s=>e.addNew=!0)})])):j("",!0)]),"no-option":l(()=>[b("div",Ke,[o(V,{flat:"",color:"white",label:"Add a New Manufacturer",onClick:t[1]||(t[1]=s=>e.addNew=!0)})])]),_:1},8,["modelValue","options","error","behavior","onFilter"])]),b("div",Ze,[o(P,{label:"Model",dense:"",modelValue:e.name,"onUpdate:modelValue":t[3]||(t[3]=s=>e.name=s),error:!!e.formErrors.name,"bottom-slots":""},{error:l(()=>[b("div",_e,O(e.formErrors.name),1)]),_:1},8,["modelValue","error"])]),b("div",null,[o(re,{class:"q-mb-sm",dense:"",label:"Mask Type","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.code,"onUpdate:modelValue":t[4]||(t[4]=s=>e.code=s),options:e.types,"bottom-slots":"",error:!!e.formErrors.code},{error:l(()=>[b("div",xe,O(e.formErrors.code),1)]),_:1},8,["modelValue","options","error"])])])]),_:1}),o(I,{align:"right"},{default:l(()=>[o(V,{color:"secondary",label:"Cancel",onClick:t[5]||(t[5]=s=>e.$emit("cancelAdd"))}),o(V,{color:"primary",label:"Submit",type:"submit",onClick:e.submit},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onSubmit"]),o(me,{modelValue:e.addNew,"onUpdate:modelValue":t[7]||(t[7]=s=>e.addNew=s)},{default:l(()=>[o(W,null,{default:l(()=>[o(H,null,{default:l(()=>[o(P,{dense:"",label:"Manufacturer Name",modelValue:e.newCategory,"onUpdate:modelValue":t[6]||(t[6]=s=>e.newCategory=s),error:!!e.newCatError,"bottom-slots":""},{error:l(()=>[b("div",ea,O(e.newCatError),1)]),_:1},8,["modelValue","error"])]),_:1}),o(I,{align:"right"},{default:l(()=>[o(V,{color:"secondary",label:"Cancel",onClick:e.closeAddNew},null,8,["onClick"]),o(V,{color:"primary",label:"Submit",type:"submit",onClick:e.validateNewCategory},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var ta=Z(Ye,[["render",aa]]);const oa=K({emits:["cancelAdd","addComplete"],props:{options:Array},setup(e,{emit:t}){const w=J(),{capitalize:m}=ie,v=f=>{const a=f.split(" ");let i="";return a.forEach((n,u)=>{i+=u>0?` ${m(n.toLowerCase())}`:m(n.toLowerCase())}),i},C=U({code:T().label("Course Code").nullable()}),{meta:s,errors:r,handleSubmit:k,handleReset:$}=se({validationSchema:C}),{value:N}=D("code"),d=k(async f=>{if(e.options.find(n=>n[6].toLowerCase()===f.code.toLowerCase())){w.notify({type:"negative",message:"Medical Screen already exists!"}),t("cancelAdd");return}const i={6:{value:v(f.code)}};try{const{data:n}=await A.upsertRecordsXML({to:"bp6rv3ne3",data:[i],fieldsToReturn:[12],formatObject:12});t("addComplete",n[0][12]),$()}catch(n){console.log(n),w.notify({type:"negative",message:"Something went wrong!"})}});return{formErrors:r,formMeta:s,submit:d,code:N}}}),ra={class:"text-caption"};function la(e,t,w,m,v,C){return y(),L("div",null,[o(ne,{onSubmit:le(e.submit,["prevent"])},{default:l(()=>[o(W,null,{default:l(()=>[o(H,null,{default:l(()=>[b("div",null,[b("div",null,[o(P,{label:"Medical Screen Type",dense:"",modelValue:e.code,"onUpdate:modelValue":t[0]||(t[0]=s=>e.code=s),error:!!e.formErrors.code,"bottom-slots":""},{error:l(()=>[b("div",ra,O(e.formErrors.code),1)]),_:1},8,["modelValue","error"])])])]),_:1}),o(I,{align:"right"},{default:l(()=>[o(V,{color:"secondary",label:"Cancel",onClick:t[1]||(t[1]=s=>e.$emit("cancelAdd"))}),o(V,{color:"primary",label:"Submit",type:"submit",onClick:e.submit},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var na=Z(oa,[["render",la]]);const sa=[{label:"Half Face",value:"Half"},{label:"Full Face",value:"Full"}],ia=K({emits:["cancelAdd","addComplete"],props:{options:Array},setup(e,{emit:t}){const w=J(),m=h([]),v=h([]),C=h(!1),s=h(""),r=h(null),{capitalize:k}=ie,$=g=>{const c=g.split(" ");let q="";return c.forEach((M,B)=>{q+=B>0?` ${k(M.toLowerCase())}`:k(M.toLowerCase())}),q},N=U({name:T().required().label("Model"),category:T().required().label("Manufacturer").nullable()}),{meta:d,errors:f,handleSubmit:a,handleReset:i}=se({validationSchema:N}),{value:n}=D("name"),{value:u}=D("category"),p=async g=>{const{data:c}=await A.upsertRecordsXML({to:"bp6sjuy5b",data:[{6:{value:$(g)}}],fieldsToReturn:[3]});return console.log(c),c[0][3]},R=a(async g=>{if(g.category==="Yes"){if(e.options.find(M=>M[8].toLowerCase()===g.name.toLowerCase())){w.notify({type:"negative",message:"Owner already exists!"}),t("cancelAdd");return}const q={6:{value:1},8:{value:g.name}};try{const{data:M}=await A.upsertRecordsXML({to:"bp6rvyr7k",data:[q],fieldsToReturn:[17],formatObject:17});t("addComplete",M[0][17]),i()}catch(M){console.log(M),w.notify({type:"negative",message:"Something went wrong!"})}}else{if(e.options.find(B=>B[8].toLowerCase()===g.name.toLowerCase())){w.notify({type:"negative",message:"Background Type already exists!"}),t("cancelAdd");return}w.loading.show();const M={6:{value:await p(g.name)},8:{value:$(g.name)}};try{const{data:B}=await A.upsertRecordsXML({to:"bp6rvyr7k",data:[M],fieldsToReturn:[17],formatObject:17});t("addComplete",B[0][17]),i()}catch(B){console.log(B),w.notify({type:"negative",message:"Something went wrong!"})}w.loading.hide()}}),X=(g,c)=>{if(!g||g===""){c(()=>{m.value=v.value});return}c(()=>{const q=g.toLowerCase();m.value=v.value.filter(M=>M.toLowerCase().indexOf(q)>-1)})},Q=async()=>{await T().required().isValid(s.value)?(r.value=null,ee(s.value)):r.value="Manufacturer Name is required!"},ee=g=>{const c=v.value.find(q=>q===g);c?u.value=c:(v.value.unshift(g),m.value=v.value),S()},S=()=>{s.value="",r.value=!1,C.value=!1};return(()=>{const g=e.options;v.value=[...new Map(g.map(c=>[c[11],c[11]])).values()],m.value=v.value})(),{formErrors:f,formMeta:d,submit:R,name:n,category:u,categories:m,types:sa,filterOptions:X,addNew:C,newCategory:s,newCatError:r,closeAddNew:S,validateNewCategory:Q}}}),da={class:"q-mb-sm"},ua=b("div",{class:"text-body2 q-pb-md q-pr-md"}," Is this background Disa Express DCC Order? ",-1),ca={class:"text-caption"},ma={key:0,class:"q-mb-md"},fa={class:"text-caption"};function pa(e,t,w,m,v,C){return y(),L("div",null,[o(ne,{onSubmit:le(e.submit,["prevent"])},{default:l(()=>[o(W,null,{default:l(()=>[o(H,null,{default:l(()=>[b("div",null,[b("div",da,[ua,o(re,{dense:"",modelValue:e.category,"onUpdate:modelValue":t[0]||(t[0]=s=>e.category=s),label:"Make a Selection",options:["No","Yes"],"bottom-slots":"",error:!!e.formErrors.category,style:{width:"200px"}},{error:l(()=>[b("div",ca,O(e.formErrors.category),1)]),_:1},8,["modelValue","error"])]),e.category?(y(),L("div",ma,[o(P,{label:e.category==="Yes"?"Owner Name":"Background Check Type",dense:"",modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=s=>e.name=s),error:!!e.formErrors.name,"bottom-slots":""},{error:l(()=>[b("div",fa,O(e.formErrors.name),1)]),_:1},8,["label","modelValue","error"])])):j("",!0)])]),_:1}),o(I,{align:"right"},{default:l(()=>[o(V,{color:"secondary",label:"Cancel",onClick:t[2]||(t[2]=s=>e.$emit("cancelAdd"))}),o(V,{color:"primary",label:"Submit",type:"submit",onClick:e.submit},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var ga=Z(ia,[["render",pa]]);const ba=K({components:{AddAvailableOrientation:Me,AddAvailableDrugScreen:He,AddAvailableFitTest:ta,AddAvailableMedical:na,AddAvailableBackground:ga},emits:["hideAdd"],props:{config:Object},setup(e,{emit:t}){const w=J(),m=fe(),{getViewedProjects:v,updateViewedProjects:C}=pe(),s=h(""),r=h([]),k=h(!1),$=h([]),N=h(null),d=h(!1),f=h(!1),a=h(null),i=z(()=>m.params.id?m.params.id:e.project),n=z(()=>v(i.value)),u=z(()=>n.value&&n.value.meetingLocations?n.value.meetingLocations:[]),p=z(()=>[{3:"",6:"All Locations"},...u.value]),R=async c=>{if(f.value=!0,(u.value.length===0||c)&&n.value){const{data:q}=await A.fetchFromStructureApp({fields:[ke({type:"meetingLocations",query:`{'15'.EX.'${n.value[8]}'}AND{'14'.EX.'Active'}`})]});C({id:i.value,dataset:"meetingLocations",data:q})}n.value[393]===!1&&p.value.length>0&&(a.value=p.value[0]),f.value=!1},X=c=>{w.dialog({title:"Alert",message:c}).onOk(()=>{t("hideAdd")}).onCancel(()=>{t("hideAdd")})},Q=c=>{const{filter:q}=e.config;if(c){const M=c.toLowerCase();$.value=q(N.value,M)}else $.value=N.value},ee=async()=>{const{getter:c,tableColumns:q}=e.config;c?q?(d.value=!0,N.value=await c(),$.value=N.value,d.value=!1):X("Table columns are required in config props!"):X("A getter is required in config props!")},S=()=>{r.value.length===0?t("hideAdd"):w.dialog({title:"Confirm",message:"Are you sure? All your selections will be lost.",cancel:!0,persistent:!0}).onOk(()=>{t("hideAdd")})},F=async()=>{const{setter:c}=e.config;c?(d.value=!0,await c({selections:r.value,location:a.value}),t("hideAdd"),d.value=!1):X("A setter is required in config props!")},g=c=>{N.value.push(c),r.value.push(c),Q(null),k.value=!1};return ee(),R(),{options:$,rawOptions:N,selection:r,addNew:k,search:s,filterOptions:Q,loading:d,initialPagination:{rowsPerPage:h(10)},cancelAdd:S,submit:F,newOptionAdded:g,locations:p,location:a,projectData:n}}}),va={class:"row justify-between"},ya={class:"col-12 col-sm-4"},wa={class:"col-4 text-right"},Ca={class:"row"},$a={class:"col-12 col-md-8 q-px-xs"},ha={class:"text-caption"},Aa={key:0,class:"col-12 col-md-4 q-px-xs"},ka={class:"text-caption"},qa={class:"full-width text-dark text-italic"},Na={key:1,class:"text-primary"};function Va(e,t,w,m,v,C){const s=_("add-available-orientation"),r=_("add-available-drug-screen"),k=_("add-available-fit-test"),$=_("add-available-medical"),N=_("add-available-background");return y(),L("div",null,[o(W,{flat:""},{default:l(()=>[o(H,{class:"q-pa-sm"},{default:l(()=>[b("div",va,[b("div",ya,[o(P,{outlined:"",filled:"",clearable:"",dense:"",modelValue:e.search,"onUpdate:modelValue":[t[0]||(t[0]=d=>e.search=d),t[1]||(t[1]=d=>e.filterOptions(d))],placeholder:"Search"},null,8,["modelValue"])]),b("div",wa,[o(V,{color:"dark",label:"Cancel",icon:"arrow_back",onClick:e.cancelAdd},null,8,["onClick"])])])]),_:1}),o(H,{class:"q-pa-xs"},{default:l(()=>[b("div",Ca,[b("div",$a,[o(ce,{title:"Available Options","title-class":"text-body1 text-primary",dense:"",columns:e.config.tableColumns,rows:e.options,"row-key":d=>d[3],"table-header-class":"bg-dark text-white text-caption",pagination:e.initialPagination,loading:e.loading,selection:"multiple",selected:e.selection,"onUpdate:selected":t[3]||(t[3]=d=>e.selection=d)},{"top-right":l(()=>[e.config.allowNew?(y(),E(V,{key:0,color:"accent",size:"sm",label:"Add Another Option",onClick:t[2]||(t[2]=d=>e.addNew=!0)})):j("",!0)]),header:l(d=>[o(te,{class:"bg-dark text-white",props:d},{default:l(()=>[o(ae,{"auto-width":""}),(y(!0),L(Y,null,G(d.cols,f=>(y(),E(ae,{class:"text-left",key:f.name},{default:l(()=>[de(O(f.label),1)]),_:2},1024))),128))]),_:2},1032,["props"])]),body:l(d=>[o(te,{"no-hover":"",props:d},{default:l(()=>[o(oe,{"auto-width":""},{default:l(()=>[o(ge,{class:"q-pa-none q-ma-none",size:"xs",modelValue:d.selected,"onUpdate:modelValue":f=>d.selected=f},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),(y(!0),L(Y,null,G(d.cols,f=>(y(),E(oe,{key:f.name,props:d},{default:l(()=>[b("span",ha,O(f.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),loading:l(()=>[o(ue,{showing:e.loading,label:"Loading...","label-class":"text-info"},null,8,["showing"])]),_:1},8,["columns","rows","row-key","pagination","loading","selected"])]),e.loading?j("",!0):(y(),L("div",Aa,[o(re,{dense:"",label:"Location","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.location,"onUpdate:modelValue":t[4]||(t[4]=d=>e.location=d),options:e.locations,"option-label":"6",error:e.projectData[393]===!0&&e.selection.length>0&&!e.location,"error-message":"Please select a location!"},null,8,["modelValue","options","error"]),o(ce,{title:"Selections","title-class":"text-body1 text-primary",dense:"",columns:e.config.tableColumns.filter(d=>d.showOnSelection),rows:e.selection,"row-key":d=>d[3],"table-header-class":"bg-dark text-white text-caption",loading:e.loading,"hide-pagination":"",pagination:{rowsPerPage:25},"rows-per-page-options":[0],"no-data-label":"No options have been selected",selection:"multiple",selected:e.selection,"onUpdate:selected":t[5]||(t[5]=d=>e.selection=d)},{header:l(d=>[o(te,{class:"bg-dark text-white",props:d},{default:l(()=>[(y(!0),L(Y,null,G(d.cols,f=>(y(),E(ae,{class:"text-left",key:f.name},{default:l(()=>[de(O(f.label),1)]),_:2},1024))),128)),o(ae,{"auto-width":""})]),_:2},1032,["props"])]),body:l(d=>[o(te,{"no-hover":"",props:d},{default:l(()=>[(y(!0),L(Y,null,G(d.cols,f=>(y(),E(oe,{key:f.name,props:d},{default:l(()=>[b("span",ka,O(f.value),1)]),_:2},1032,["props"]))),128)),o(oe,{class:"q-pa-none","auto-width":""},{default:l(()=>[o(ge,{class:"q-pa-none q-ma-none",size:"xs",modelValue:d.selected,"onUpdate:modelValue":f=>d.selected=f},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["props"])]),"no-data":l(({message:d})=>[b("div",qa,[b("span",null,O(d),1)])]),loading:l(()=>[o(ue,{showing:e.loading,label:"Loading...","label-class":"text-info"},null,8,["showing"])]),_:1},8,["columns","rows","row-key","loading","selected"]),o(I,{align:"right"},{default:l(()=>[(e.projectData[393]===!0?e.selection.length>0&&e.location:e.selection.length>0)?(y(),E(V,{key:0,dense:"",color:"info",label:"Submit",onClick:e.submit},null,8,["onClick"])):j("",!0),e.projectData[393]===!0&&e.selection.length>0&&!e.location?(y(),L("span",Na,"Please select a location!")):j("",!0)]),_:1})]))])]),_:1}),o(I,{align:"right"})]),_:1}),o(me,{persistent:"",modelValue:e.addNew,"onUpdate:modelValue":t[11]||(t[11]=d=>e.addNew=d)},{default:l(()=>[e.config.newType==="orientation"?(y(),E(s,{key:0,onCancelAdd:t[6]||(t[6]=d=>e.addNew=!1),onAddComplete:e.newOptionAdded},null,8,["onAddComplete"])):j("",!0),e.config.newType==="drugScreen"?(y(),E(r,{key:1,onCancelAdd:t[7]||(t[7]=d=>e.addNew=!1),onAddComplete:e.newOptionAdded},null,8,["onAddComplete"])):j("",!0),e.config.newType==="fitTest"?(y(),E(k,{key:2,options:e.rawOptions,onCancelAdd:t[8]||(t[8]=d=>e.addNew=!1),onAddComplete:e.newOptionAdded},null,8,["options","onAddComplete"])):j("",!0),e.config.newType==="medical"?(y(),E($,{key:3,options:e.rawOptions,onCancelAdd:t[9]||(t[9]=d=>e.addNew=!1),onAddComplete:e.newOptionAdded},null,8,["options","onAddComplete"])):j("",!0),e.config.newType==="background"?(y(),E(N,{key:4,options:e.rawOptions,onCancelAdd:t[10]||(t[10]=d=>e.addNew=!1),onAddComplete:e.newOptionAdded},null,8,["options","onAddComplete"])):j("",!0)]),_:1},8,["modelValue"])])}var Sa=Z(ba,[["render",Va]]);const Ta=K({props:{category:Object,formConfig:Object},components:{AddMoreRequirements:Sa},setup(e){const t=J(),w=fe(),m=h(!0),v=h(!1),{getViewedProjects:C,updateViewedProjects:s}=pe(),r=z(()=>C(w.params.id)),k=z(()=>r.value?r.value[e.category.key]?r.value[e.category.key]:[]:[]),$=async f=>{if(m.value=!0,r.value&&(f||!r.value[e.category.key]||r.value[e.category.key].length===0)){const{data:a}=await A.fetchFromProjectsApp({fields:[be({type:e.category.key,query:e.category.query})]});s({id:w.params.id,dataset:e.category.key,data:a})}m.value=!1};function N(f){const{removeMessage:a}=e.category;t.dialog({title:"Confirm",message:a(f),cancel:!0,persistent:!0}).onOk(()=>{d(f)})}const d=async f=>{const{remover:a}=e.category;m.value=!0,await a({row:f,current:k.value}),m.value=!1};return $(),Ae(r,()=>{r.value&&$()}),{props:e,loading:m,loadData:$,rows:k,initialPagination:h({rowsPerPage:100}),removeRow:N,addNew:v}}}),Oa={class:"text-caption"};function Ea(e,t,w,m,v,C){const s=_("add-more-requirements");return y(),L("div",null,[e.addNew?j("",!0):(y(),E(ce,{key:0,dense:"",columns:e.category.columns,rows:e.rows,"row-key":r=>r[3],"table-header-class":"bg-dark text-white",class:"sticky-header-table","hide-pagination":"",pagination:e.initialPagination,"onUpdate:pagination":t[2]||(t[2]=r=>e.initialPagination=r),"rows-per-page-options":[0],loading:e.loading},{"top-left":l(()=>[e.$can("manage","projects")||e.$can("create","projectRequirements")?(y(),E(V,{key:0,onClick:t[0]||(t[0]=r=>e.addNew=!0),color:"accent",label:`Add new ${e.category.label}`},null,8,["label"])):j("",!0)]),"top-right":l(()=>[o(V,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:t[1]||(t[1]=r=>e.loadData(!0))})]),loading:l(()=>[o(ue,{showing:e.loading,label:"Loading...","label-class":"text-info"},null,8,["showing"])]),header:l(r=>[o(te,{class:"bg-dark text-white",props:r},{default:l(()=>[(y(!0),L(Y,null,G(r.cols,k=>(y(),E(ae,{class:"text-left",key:k.name},{default:l(()=>[de(O(k.label),1)]),_:2},1024))),128)),o(ae,{"auto-width":""})]),_:2},1032,["props"])]),body:l(r=>[o(te,{props:r},{default:l(()=>[(y(!0),L(Y,null,G(r.cols,k=>(y(),E(oe,{key:k.name,props:r},{default:l(()=>[b("span",Oa,O(k.value),1)]),_:2},1032,["props"]))),128)),o(oe,{"auto-width":""},{default:l(()=>[e.$can("manage","projectRequirements")||e.$can("manage","projects")?(y(),E(V,{key:0,color:"accent",dense:"",flat:"",round:"",icon:"delete",onClick:k=>e.removeRow(r.row)},null,8,["onClick"])):j("",!0)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows","row-key","pagination","loading"])),e.addNew?(y(),E(s,{key:1,config:e.formConfig,onHideAdd:t[3]||(t[3]=r=>e.addNew=!1)},null,8,["config"])):j("",!0)])}var La=Z(Ta,[["render",Ea]]);const Ma=K({components:{RequirementPanel:La},setup(){const e=h("orientations"),t=J(),w=fe(),{can:m}=qe(),{getViewedProjects:v,updateViewedProjects:C,setViewedProjects:s}=pe(),r=z(()=>v(w.params.id));(async()=>{if(!r.value){const{data:f}=await A.fetchFromProjectsApp({fields:[be({type:"projects",id:w.params.id})]});s({id:w.params.id,data:f})}})();const $=z(()=>r.value?r.value[3]:w.params.id),N=(f,a,i)=>f!==a[i]?`${f} - ${a[i]}`:f,d=z(()=>[{label:"Orientation",key:"orientations",fields:[8,9,28],columns:[{name:0,label:"Course Code",align:"left",field:a=>a[8],format:a=>a===""?"N/A":`${a}`,sortable:!0,required:!0},{name:1,label:"Course Name",align:"left",field:a=>a[9],format:a=>a===""?"N/A":`${a}`,sortable:!0},...r.value&&r.value[393]===!0?[{name:28,label:"Location",align:"left",field:a=>a[28],format:a=>a===""?"All":`${a}`,sortable:!0}]:[]],query:`{'13'.EX.'${$.value}'}AND{'25'.XEX.true}`,formSchema:{category:U().required().label("Category").nullable(),name:T().required().label("Course Name").nullable(),code:T().label("Course Code").nullable()},remover:async({row:a,current:i})=>{const{data:n}=await A.upsertRecordsXML({to:"bp6rvdha2",data:[{3:{value:a[3]},25:{value:!0}}],fieldsToReturn:[24],formatObject:24}),u=i.filter(p=>p[3]!==n[0][24][3]);C({id:$.value,dataset:"orientations",data:u})},removeMessage:a=>`Are you sure you want to remove ${a[9]} from the required orientations?`,addMoreFormConfig:{tableColumns:[{name:0,label:"Course Code",align:"left",field:a=>a[8],format:a=>a===""?"N/A":`${a}`,sortable:!0},{name:1,label:"Course Name",align:"left",field:a=>a[6],format:a=>a===""?"N/A":`${a}`,sortable:!0,required:!0,showOnSelection:!0},{name:2,label:"Category",align:"left",field:a=>a[11],format:a=>a===""?"N/A":`${a}`,sortable:!0,required:!0,showOnSelection:!1}],getter:async()=>{const{data:a}=await A.fetchFromCredentialsAndTrainingApp({fields:[x({type:"availableOrientations",query:"{'7'.EX.'Active'}"})]});return a.sort((i,n)=>i[6]>n[6]?1:-1)},setter:async({selections:a,location:i})=>{const n=[];a.forEach(u=>{const p={6:{value:r.value[84]},7:{value:u[3]},27:{value:i[3]}};n.push(p)});try{const{data:u}=await A.upsertRecordsXML({to:"bp6rvdha2",data:n,fieldsToReturn:[24],formatObject:24});C({id:r.value[3],dataset:"orientations",data:u.map(p=>p[24]),push:!0}),t.notify({type:"positive",message:"Orientations successfully updated"})}catch{t.notify({type:"negative",message:"Error updating Orientations"})}},filter:(a,i)=>a.filter(n=>n[6].toLowerCase().indexOf(i)>-1||n[8].toLowerCase().indexOf(i)>-1||n[11].toLowerCase().indexOf(i)>-1),allowNew:m("create","availableRequirements"),newType:"orientation",addNewFormConfig:{}}},{label:"D&A Screen",key:"drugScreens",fields:[10,8],columns:[{name:0,label:"Test Type",align:"left",field:a=>a[8],format:a=>a===""?"N/A":`${a}`,sortable:!0,required:!0},{name:1,label:"Description",align:"left",field:a=>a[10],format:a=>`${a}`,sortable:!0},...r.value&&r.value[393]===!0?[{name:26,label:"Location",align:"left",field:a=>a[26],format:a=>a===""?"All":`${a}`,sortable:!0}]:[]],query:`{'14'.EX.'${$.value}'}AND{'23'.XEX.true}`,formSchema:{category:U().required().label("Category").nullable(),name:T().required().label("Course Name").nullable(),code:T().label("Course Code").nullable()},remover:async({row:a,current:i})=>{const{data:n}=await A.upsertRecordsXML({to:"bp6rvd7zc",data:[{3:{value:a[3]},23:{value:!0}}],fieldsToReturn:[22],formatObject:22}),u=i.filter(p=>p[3]!==n[0][22][3]);C({id:$.value,dataset:"drugScreens",data:u})},removeMessage:a=>`Are you sure you want to remove ${a[10]} ${a[8]} from the required drug and alcohol screens?`,addMoreFormConfig:{tableColumns:[{name:0,label:"Category",align:"left",field:a=>a[9],format:a=>`${a}`,sortable:!0},{name:1,label:"Type",align:"left",field:a=>a[6],format:a=>a===""?"N/A":`${a}`,sortable:!0,required:!0,showOnSelection:!0},{name:2,label:"Description",align:"left",field:a=>a[7],format:a=>a===""?"N/A":`${a}`,sortable:!0,required:!0,showOnSelection:!0}],getter:async()=>{const{data:a}=await A.fetchFromCredentialsAndTrainingApp({fields:[x({type:"availableDrugScreens",query:"{'10'.EX.'Active'}"})]});return a.sort((i,n)=>i[6]>n[6]?1:-1)},setter:async({selections:a,location:i})=>{const n=[];a.forEach(u=>{const p={6:{value:r.value[84]},7:{value:u[3]},25:{value:i[3]}};n.push(p)});try{const{data:u}=await A.upsertRecordsXML({to:"bp6rvd7zc",data:n,fieldsToReturn:[22],formatObject:22});C({id:r.value[3],dataset:"drugScreens",data:u.map(p=>p[22]),push:!0}),t.notify({type:"positive",message:"Drug Screens successfully updated"})}catch{t.notify({type:"negative",message:"Error updating Drug Screens"})}},filter:(a,i)=>a.filter(n=>n[6].toLowerCase().indexOf(i)>-1||n[7].toLowerCase().indexOf(i)>-1||n[9].toLowerCase().indexOf(i)>-1),allowNew:m("create","availableRequirements"),newType:"drugScreen",addNewFormConfig:{}}},{label:"Background",key:"backgrounds",fields:[8,9],columns:[{name:0,label:"Background Type",align:"left",field:a=>a[8],format:(a,i)=>N(a,i,9),sortable:!0,required:!0},...r.value&&r.value[393]===!0?[{name:30,label:"Location",align:"left",field:a=>a[30],format:a=>a===""?"All":`${a}`,sortable:!0}]:[]],query:`{'13'.EX.'${$.value}'}AND{'26'.XEX.true}`,formSchema:{category:U().required().label("Category").nullable(),name:T().required().label("Course Name").nullable(),code:T().label("Course Code").nullable()},remover:async({row:a,current:i})=>{const{data:n}=await A.upsertRecordsXML({to:"bp6rvfzpj",data:[{3:{value:a[3]},26:{value:!0}}],fieldsToReturn:[25],formatObject:25}),u=i.filter(p=>p[3]!==n[0][25][3]);C({id:$.value,dataset:"backgrounds",data:u})},removeMessage:a=>`Are you sure you want to remove ${N(a[8],a,9)} from the required background checks?`,addMoreFormConfig:{tableColumns:[{name:0,label:"Background Type",align:"left",field:a=>a[7],format:(a,i)=>N(a,i,8),sortable:!0,required:!0,showOnSelection:!0}],getter:async()=>{const{data:a}=await A.fetchFromCredentialsAndTrainingApp({fields:[x({type:"availableBackgrounds",query:"{'6'.GT.0}"})]});return a.sort((i,n)=>i[7]>n[7]?1:-1)},setter:async({selections:a,location:i})=>{const n=[];a.forEach(u=>{const p={6:{value:r.value[84]},7:{value:u[3]},29:{value:i[3]}};n.push(p)});try{const{data:u}=await A.upsertRecordsXML({to:"bp6rvfzpj",data:n,fieldsToReturn:[25],formatObject:25});C({id:r.value[3],dataset:"backgrounds",data:u.map(p=>p[25]),push:!0}),t.notify({type:"positive",message:"Backgrounds successfully updated"})}catch{t.notify({type:"negative",message:"Error updating Backgrounds"})}},filter:(a,i)=>a.filter(n=>n[7].toLowerCase().indexOf(i)>-1||n[8].toLowerCase().indexOf(i)>-1),allowNew:m("create","availableRequirements"),newType:"background",addNewFormConfig:{}}},{label:"Fit Test",key:"fitTests",fields:[18],columns:[{name:0,label:"Mask",align:"left",field:a=>a[18],format:a=>a===""?"N/A":`${a}`,sortable:!0,required:!0},{name:1,label:"Manufacturer",align:"left",field:a=>a[20],format:a=>a===""?"N/A":`${a}`,sortable:!0},...r.value&&r.value[393]===!0?[{name:27,label:"Location",align:"left",field:a=>a[27],format:a=>a===""?"All":`${a}`,sortable:!0}]:[]],query:`{'12'.EX.'${$.value}'}AND{'25'.XEX.true}`,formSchema:{category:T().required().label("Manufacturer").nullable(),name:T().required().label("Model").nullable(),code:T().required().label("Type").nullable()},remover:async({row:a,current:i})=>{const{data:n}=await A.upsertRecordsXML({to:"bp6rvmzc6",data:[{3:{value:a[3]},25:{value:!0}}],fieldsToReturn:[24],formatObject:24}),u=i.filter(p=>p[3]!==n[0][24][3]);C({id:$.value,dataset:"fitTests",data:u})},removeMessage:a=>`Are you sure you want to remove ${a[18]} from the required fit tests?`,addMoreFormConfig:{tableColumns:[{name:0,label:"Manufacturer",align:"left",field:a=>a[11],format:a=>`${a}`,sortable:!0,showOnSelection:!0},{name:1,label:"Model",align:"left",field:a=>a[8],format:a=>a===""?"N/A":`${a}`,sortable:!0,required:!0,showOnSelection:!0},{name:2,label:"Type",align:"left",field:a=>a[13],format:a=>a===""?"N/A":`${a} Face`,sortable:!0,required:!0}],getter:async()=>{const{data:a}=await A.fetchFromCredentialsAndTrainingApp({fields:[x({type:"availableFitTests",query:"{'9'.EX.'Active'}"})]});return a.sort((i,n)=>i[11]>n[11]?1:-1)},setter:async({selections:a,location:i})=>{const n=[];a.forEach(u=>{const p={6:{value:r.value[84]},7:{value:u[3]},26:{value:i[3]}};n.push(p)});try{const{data:u}=await A.upsertRecordsXML({to:"bp6rvmzc6",data:n,fieldsToReturn:[24],formatObject:24});C({id:r.value[3],dataset:"fitTests",data:u.map(p=>p[24]),push:!0}),t.notify({type:"positive",message:"Fit Tests successfully updated"})}catch{t.notify({type:"negative",message:"Error updating Fit Tests"})}},filter:(a,i)=>a.filter(n=>n[8].toLowerCase().indexOf(i)>-1||n[11].toLowerCase().indexOf(i)>-1||n[13].toLowerCase().indexOf(i)>-1),allowNew:m("create","availableRequirements"),newType:"fitTest",addNewFormConfig:{}}},{label:"Medical Screen",key:"medical",fields:[10],columns:[{name:0,label:"Screen Type",align:"left",field:a=>a[10],format:a=>a===""?"N/A":`${a}`,sortable:!0,required:!0},...r.value&&r.value[393]===!0?[{name:21,label:"Location",align:"left",field:a=>a[21],format:a=>a===""?"All":`${a}`,sortable:!0}]:[]],query:`{'12'.EX.'${$.value}'}AND{'19'.XEX.true}`,formSchema:{category:T().required().label("Screen Type").nullable()},remover:async({row:a,current:i})=>{const{data:n}=await A.upsertRecordsXML({to:"bp6rvj39b",data:[{3:{value:a[3]},19:{value:!0}}],fieldsToReturn:[18],formatObject:18}),u=i.filter(p=>p[3]!==n[0][18][3]);C({id:$.value,dataset:"medical",data:u})},removeMessage:a=>`Are you sure you want to remove ${a[10]} from the required medical screens?`,addMoreFormConfig:{tableColumns:[{name:0,label:"Medical Screen Type",align:"left",field:a=>a[6],format:a=>`${a}`,sortable:!0,showOnSelection:!0}],getter:async()=>{const{data:a}=await A.fetchFromCredentialsAndTrainingApp({fields:[x({type:"availableMedical",query:"{'7'.EX.'Active'}"})]});return a.sort((i,n)=>i[6]>n[6]?1:-1)},setter:async({selections:a,location:i})=>{const n=[];a.forEach(u=>{const p={6:{value:r.value[84]},7:{value:u[3]},20:{value:i[3]}};n.push(p)});try{const{data:u}=await A.upsertRecordsXML({to:"bp6rvj39b",data:n,fieldsToReturn:[18],formatObject:18});C({id:r.value[3],dataset:"medical",data:u.map(p=>p[18]),push:!0}),t.notify({type:"positive",message:"Medical Screens successfully updated"})}catch{t.notify({type:"negative",message:"Error updating Medical Screens"})}},filter:(a,i)=>a.filter(n=>n[6].toLowerCase().indexOf(i)>-1),allowNew:m("create","availableRequirements"),newType:"medical",addNewFormConfig:{}}}]);return{tab:e,project:r,categories:d}}}),Ra={class:"q-pa-sm"};function ja(e,t,w,m,v,C){const s=_("requirement-panel");return y(),E(he,{style:{"max-width":"100vw"}},{default:l(()=>[b("div",Ra,[o($e,{class:"bg-info text-white shadow-2 rounded-borders"},{default:l(()=>[o(Ce,{dense:"",modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=r=>e.tab=r),align:"left","indicator-color":"accent"},{default:l(()=>[(y(!0),L(Y,null,G(e.categories,r=>(y(),E(ve,{key:r.key,name:r.key,label:`${r.label}s`},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(ye,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=r=>e.tab=r),animated:""},{default:l(()=>[(y(!0),L(Y,null,G(e.categories,r=>(y(),E(we,{key:r.key,name:r.key,class:"q-px-xs"},{default:l(()=>[o(s,{category:r,formConfig:r.addMoreFormConfig},null,8,["category","formConfig"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])]),_:1})}var bt=Z(Ma,[["render",ja]]);export{bt as default};
