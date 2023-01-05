import{Q as ne,b as ie,a as de}from"./QTabPanels.b9ad1004.js";import{Q as ue}from"./QTabs.c2494432.js";import{l as F,r as h,c as T,_ as X,A as s,B as q,D as f,d as o,bi as l,cz as M,cw as D,ab as V,bO as j,ao as k,an as y,cx as ae,bK as ce,cy as z,bF as W,cA as _,bM as oe,aZ as B,F as I,aY as Y,au as U}from"./index.9762efb3.js";import{Q as fe}from"./QPage.1078672d.js";import{u as L}from"./use-quasar.1a2013e3.js";import{q as Q}from"./quickbase.0330480d.js";import"./dayjs.b06c0c0b.js";import{b as H,a as le}from"./useQuerySaver.4199d87d.js";import{u as re}from"./dataStore.13d3cdd5.js";import{Q as me}from"./QInnerLoading.9f020a3c.js";import{Q as K,a as be}from"./QTable.0077212c.js";import{Q as te}from"./QTr.d46e16b6.js";import{Q as Z}from"./QTd.337029ba.js";import{Q as G}from"./QSelect.4c250828.js";import{Q as x}from"./QForm.b01fba36.js";import{a as P,e as pe,b as ee,u as O,c as ve}from"./array.97318880.js";import"./use-panel.77030442.js";import"./touch.60582172.js";import"./selection.2be80553.js";import"./QResizeObserver.ae660eeb.js";import"./rtl.cf9bbe47.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./localForage.591f4db3.js";import"./i18n.d2983beb.js";import"./api.5a7b34fc.js";import"./QList.eefd78b8.js";import"./QMarkupTable.1f939997.js";import"./use-fullscreen.7c1ef657.js";import"./QChip.deeb90cb.js";import"./QItemLabel.a7bd6a61.js";import"./QMenu.6d936437.js";import"./position-engine.e9001b32.js";const we=F({props:{job:Object,craft:Object},setup(e,{emit:a}){const n=L(),c=h(!1),u=h(""),d=h(null),r=h([]),i=h([]),t=T(()=>P({alias:P().required().label("Custom Job Title"),fixedRate:pe().moreThan(7.25,"Fixed rate must be greater than minimum wage.").lessThan(1e3).label("Fixed Rate").nullable()})),{meta:b,errors:R,handleSubmit:g,handleReset:A}=ee({validationSchema:t,initialValues:{fixedRate:e.job.fixedRate>0?e.job.fixedRate:null}}),{value:m}=O("alias"),{value:p}=O("fixedRate"),J=g(async w=>{n.loading.show();const S={3:{value:e.job[3]}};m.value!=={3:e.job[9],7:e.job[18]}&&Object.assign(S,{9:{value:w.alias[3]}}),p.value&&p.value!==e.job.fixedRate&&Object.assign(S,{155:{value:w.fixedRate}});try{const{data:N}=await Q.upsertRecordsXML({to:"bpzpx5m7x",data:[S],fieldsToReturn:[153],formatObject:153});N.length>0&&(A(),n.loading.hide(),a("editJobComplete",{craft:N[0][153]}))}catch{n.notify({type:"negative",message:"Something went wrong"})}}),$=async()=>{console.log(u.value),console.log(i.value);const w=i.value.find(N=>N[7].toLowerCase()===u.value.toLowerCase());console.log(w),await ve().required().isValid(u.value)?w?d.value="Custom Job Title already exists!":d.value=null:d.value="Custom Job Title is required!"},C=()=>{c.value=!1,u.value="",d.value=null},v=(w,S)=>{if(!w||w===""){S(()=>{r.value=i.value});return}S(()=>{const N=w.toLowerCase();r.value=i.value.filter(se=>se[7].toLowerCase().indexOf(N)>-1)})};return(async()=>{const{data:w}=await Q.fetchFromStructureApp({fields:[H({type:"jobAliases",query:`{'6'.EX.'${e.job[13]}'}AND{'15'.XEX.'Yes'}`})]});console.log(w),i.value=w,r.value=i.value,m.value={3:e.job[9],7:e.job[18]}})(),{formMeta:b,formErrors:R,submit:J,alias:m,fixedRate:p,addNew:c,closeAddNew:C,newCategory:u,newCatError:d,filterOptions:v,validateNewCategory:$,options:r,rawOptions:i}}}),ye={class:"text-body1 text-white"},ge={class:"text-caption"},Ce={key:0,class:"text-center bg-info"},he={class:"text-center bg-info"},$e={class:"text-caption"},je={class:"text-caption"};function Ae(e,a,n,c,u,d){return s(),q("div",null,[f("div",null,[o(x,{onSubmit:W(e.submit,["prevent"])},{default:l(()=>[o(M,{style:{width:"400px"}},{default:l(()=>[o(D,{class:"bg-dark"},{default:l(()=>[f("div",ye,"Edit "+V(e.job[21])+" "+V(e.job[18]),1)]),_:1}),o(D,null,{default:l(()=>[o(G,{class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":a[2]||(a[2]=r=>e.alias=r),options:e.options,"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias},{error:l(()=>[f("div",ge,V(e.formErrors.alias),1)]),"after-options":l(()=>[e.options.length>0?(s(),q("div",Ce,[o(j,{flat:"",color:"white",label:"Add a New Custom Job Title",onClick:a[0]||(a[0]=r=>e.addNew=!0)})])):k("",!0)]),"no-option":l(()=>[f("div",he,[o(j,{flat:"",color:"white",label:"Add a New Custom Job Title",onClick:a[1]||(a[1]=r=>e.addNew=!0)})])]),_:1},8,["modelValue","options","display-value","error"]),e.$can("manage","rates")?(s(),y(ae,{key:0,step:"any",prefix:"$",type:"number",dense:"",label:"Fixed Rate",modelValue:e.fixedRate,"onUpdate:modelValue":a[3]||(a[3]=r=>e.fixedRate=r),error:!!e.formErrors.fixedRate,"bottom-slots":""},{error:l(()=>[f("div",$e,V(e.formErrors.fixedRate),1)]),_:1},8,["modelValue","error"])):k("",!0)]),_:1}),o(ce),o(z,{class:"bg-accent",align:"right"},{default:l(()=>[o(j,{size:e.$q.screen.lt.md?"sm":"",color:"secondary",label:"Cancel",onClick:a[4]||(a[4]=r=>e.$emit("closeEditJob"))},null,8,["size"]),o(j,{type:"submit",size:e.$q.screen.lt.md?"sm":"",color:"primary",label:"Save"},null,8,["size"])]),_:1})]),_:1})]),_:1},8,["onSubmit"]),o(_,{modelValue:e.addNew,"onUpdate:modelValue":a[6]||(a[6]=r=>e.addNew=r)},{default:l(()=>[o(M,null,{default:l(()=>[o(D,null,{default:l(()=>[o(ae,{style:{width:"250px"},dense:"",label:"Custom Job Title",modelValue:e.newCategory,"onUpdate:modelValue":a[5]||(a[5]=r=>e.newCategory=r),error:!!e.newCatError,"bottom-slots":""},{error:l(()=>[f("div",je,V(e.newCatError),1)]),_:1},8,["modelValue","error"])]),_:1}),o(z,{align:"right"},{default:l(()=>[o(j,{color:"secondary",label:"Cancel",onClick:e.closeAddNew},null,8,["onClick"]),o(j,{color:"primary",label:"Submit",type:"submit",onClick:e.validateNewCategory},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])}var Je=X(we,[["render",Ae]]);const Se=F({props:{craft:Object},setup(e,a){const n=L(),c=P({job:P().required("Job is required."),alias:P().required("Alias is required.").nullable()}),{meta:u,errors:d,handleSubmit:r,handleReset:i}=ee({validationSchema:c}),{value:t}=O("job"),{value:b}=O("alias"),R=r(async m=>{try{const{data:p}=await Q.upsertRecordsXML({to:"bpzpx5m7x",data:[{9:{value:m.alias[3]},13:{value:m.job[3]},20:{value:e.craft[3]}}],fieldsToReturn:[153],formatObject:153});p.length>0&&(a.emit("newJobAdded",{craft:p[0][153]}),i())}catch{n.notify({type:"negative",message:"Something went wrong"})}});async function g(m,p){n.dialog({title:"Confirm",message:`Confirm you want to add "${m}" as a new alias.`,cancel:!0,persistent:!0}).onOk(async()=>{try{const{data:J}=await Q.upsertRecordsXML({to:"bpzpi5rjh",data:[{6:{value:t.value[3]},7:{value:m},11:{value:"No"}}],fieldsToReturn:[25],formatObject:25});J.length>0&&(b.value=J[0][25],p(J[0][25]))}catch{n.notify({type:"negative",message:"Something went wrong"})}}).onCancel(()=>{p()})}function A(){a.emit("cancelAddJob"),i()}return{formErrors:d,formMeta:u,submitJob:R,submitAlias:g,cancelAddJob:A,job:t,alias:b,props:e}}}),ke={class:"row justify-between"},Ve={class:"col-5"},Ee={class:"text-caption"},qe={class:"col-6"},Qe={class:"text-caption"};function Re(e,a,n,c,u,d){return s(),q("div",null,[o(x,{onSubmit:W(e.submitJob,["prevent"])},{default:l(()=>[o(M,{flat:""},{default:l(()=>[o(D,null,{default:l(()=>[f("div",ke,[f("div",Ve,[o(G,{class:"q-mb-sm",dense:"",label:"Select Default Job","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.job,"onUpdate:modelValue":a[0]||(a[0]=r=>e.job=r),options:e.props.craft.options.jobs,"option-label":"9","display-value":`${e.job?e.job[9]:""}`,"bottom-slots":"",error:!!e.formErrors.job},{error:l(()=>[f("div",Ee,V(e.formErrors.job),1)]),_:1},8,["modelValue","options","display-value","error"])]),f("div",qe,[o(G,{disable:!e.job,class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":a[1]||(a[1]=r=>e.alias=r),options:e.job?e.job.aliases:[],"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias,onNewValue:e.submitAlias,"use-input":""},{error:l(()=>[f("div",Qe,V(e.formErrors.alias),1)]),_:1},8,["disable","modelValue","options","display-value","error","onNewValue"])])])]),_:1}),o(z,{align:"right"},{default:l(()=>[o(j,{color:"secondary",label:"Cancel",onClick:e.cancelAddJob},null,8,["onClick"]),o(j,{color:"primary",label:"Submit Job",type:"submit"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var Ne=X(Se,[["render",Re]]);const Te=[{name:0,label:"Default Classification",align:"left",field:e=>e[17],format:e=>`${e}`,sortable:!0,required:!0},{name:1,label:"Vanity Job Title (Alias)",align:"left",field:e=>e[18],format:e=>`${e}`,sortable:!0}],Pe=F({props:{category:Object,projectData:Object},components:{EditJobDialog:Je,AddNewJob:Ne},setup(e){const a=L(),n=oe(),c=h(!1),u=h(!1),d=h(null),r=h(null),i=h(!1),{getViewedProjects:t,updateViewedProjects:b,upsertProjectCraft:R}=re(),g=T(()=>t(n.params.id)),A=T(()=>(e.category.classifications?e.category.classifications:[]).sort((E,w)=>E.order>w.order?-1:1)),m=async v=>{if(c.value=!0,g.value&&(v||!g.value[e.category.key]||g.value[e.category.key].length===0)){const{data:E}=await Q.fetchFromProjectsApp({fields:[le({type:e.category.key,query:e.category.query})]});console.log(E),b({id:n.params.id,dataset:e.category.key,data:E})}c.value=!1};function p(v,E){d.value=v,r.value=E,u.value=!0}function J(){u.value=!1,d.value=null,r.value=null}function $({craft:v}){R({craft:v}),u.value=!1,d.value=null,r.value=null,a.notify({type:"positive",message:"Job successfully updated!"})}function C({craft:v}){R({craft:v}),i.value=!1,a.notify({type:"positive",message:"New job added!"})}return{props:e,loading:c,loadData:m,rows:A,initialPagination:h({rowsPerPage:100}),columns:Te,showEditJob:u,showAddJob:i,editJobCraft:d,editJobJob:r,editJob:p,editJobComplete:$,newJobAddComplete:C,closeEditJob:J}}}),De={key:1};function Oe(e,a,n,c,u,d){const r=B("add-new-job"),i=B("edit-job-dialog");return s(),q("div",null,[e.showAddJob?k("",!0):(s(),y(be,{key:0,flat:"",dense:"",columns:e.$q.screen.lt.md?e.columns.filter(t=>t.required):e.columns,rows:e.rows,"row-key":t=>t[3],"table-header-class":"bg-dark text-white",class:"sticky-header-table","hide-pagination":"",pagination:e.initialPagination,"onUpdate:pagination":a[1]||(a[1]=t=>e.initialPagination=t),"rows-per-page-options":[0],loading:e.loading},{"top-left":l(()=>[e.$can("manage","projects")?(s(),y(j,{key:0,icon:"add",color:"accent",label:`Add a new ${e.category[10]} Job`,onClick:a[0]||(a[0]=t=>e.showAddJob=!0)},null,8,["label"])):k("",!0)]),loading:l(()=>[o(me,{showing:e.loading,label:"Loading...","label-class":"text-info"},null,8,["showing"])]),header:l(t=>[o(te,{class:"bg-dark text-white",props:t},{default:l(()=>[(s(!0),q(I,null,Y(t.cols,b=>(s(),y(K,{class:"text-left",key:b.name},{default:l(()=>[U(V(b.label),1)]),_:2},1024))),128)),e.$can("read","rates")?(s(),y(K,{key:0,class:"text-left"},{default:l(()=>[U("Rate")]),_:1})):k("",!0),o(K,{"auto-width":""})]),_:2},1032,["props"])]),body:l(t=>[o(te,{props:t},{default:l(()=>[(s(!0),q(I,null,Y(t.cols,b=>(s(),y(Z,{key:b.name,props:t},{default:l(()=>[U(V(b.value),1)]),_:2},1032,["props"]))),128)),e.$can("read","rates")?(s(),y(Z,{key:0,class:"text-left"},{default:l(()=>[U(V(t.row.hasFixedRate?`$ ${t.row.fixedRate.toFixed(2)}`:"N/A"),1)]),_:2},1024)):k("",!0),o(Z,{"auto-width":""},{default:l(()=>[e.$can("manage","projects")?(s(),y(j,{key:0,size:"sm",label:"edit",color:"primary",onClick:b=>e.editJob(e.category,t.row)},null,8,["onClick"])):k("",!0)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows","row-key","pagination","loading"])),e.showAddJob?(s(),q("div",De,[o(r,{craft:e.category,onCancelAddJob:a[2]||(a[2]=t=>e.showAddJob=!1),onNewJobAdded:e.newJobAddComplete},null,8,["craft","onNewJobAdded"])])):k("",!0),o(_,{modelValue:e.showEditJob,"onUpdate:modelValue":a[3]||(a[3]=t=>e.showEditJob=t),persistent:""},{default:l(()=>[o(i,{craft:e.editJobCraft,job:e.editJobJob,onCloseEditJob:e.closeEditJob,onEditJobComplete:e.editJobComplete},null,8,["craft","job","onCloseEditJob","onEditJobComplete"])]),_:1},8,["modelValue"])])}var Fe=X(Pe,[["render",Oe]]);const Xe=F({emits:["cancelAddCraft","newCraftAdded"],props:{crafts:Array,project:Number},setup(e,{emit:a}){const n=L(),c=h([]),u=T(()=>{const $=new Set(e.crafts.map(v=>v[9]));return c.value.filter(v=>!$.has(v[3]))}),d=P({craftSelection:P().required("Craft is required.")}),{meta:r,errors:i,handleSubmit:t,handleReset:b}=ee({validationSchema:d}),{value:R}=O("craftSelection"),g=t(async $=>{n.loading.show();try{const C=await m($.craftSelection[3]),v=await A(C),E=[];v.forEach(S=>{const N={9:{value:S[93]},13:{value:S[3]},20:{value:C[3]}};E.push(N)});const{data:w}=await Q.upsertRecordsXML({to:"bpzpx5m7x",data:E,fieldsToReturn:[141],formatObject:141});w.forEach(S=>{C.classifications.push(S[141])}),n.loading.hide(),a("newCraftAdded",{craft:C})}catch{n.notify({type:"negative",message:"Something went wrong"})}}),A=async $=>{const{data:C}=await Q.fetchFromStructureApp({fields:[H({type:"availableJobs",query:`{'13'.EX.'${$[9]}'}AND{'71'.XEX.'Pending'}`})]});return C},m=async $=>{try{const{data:C}=await Q.upsertRecordsXML({to:"bp5g8rym8",data:[{6:{value:"Active"},7:{value:e.project},9:{value:$}}],fieldsToReturn:[120],formatObject:120});return C[0][120]}catch{n.notify({type:"negative",message:"Something went wrong"})}},p=async()=>{n.loading.show();const{data:$}=await Q.fetchFromStructureApp({fields:[H({type:"availableCrafts",query:"{'16'.EX.'Yes'}"})]});c.value=$,n.loading.hide()};function J(){a("cancelAddCraft")}return p(),{formErrors:i,formMeta:r,submit:g,cancelAdd:J,props:e,craftSelection:R,availableCrafts:u}}}),Le={class:"text-caption"},Ue=f("div",{class:"text-primary text-body1"},"This project already has all available crafts. Click cancel below to return.",-1);function Me(e,a,n,c,u,d){return s(),q("div",null,[o(x,{onSubmit:W(e.submit,["prevent"])},{default:l(()=>[o(M,{style:{width:"500px"}},{default:l(()=>[e.availableCrafts.length>0?(s(),y(D,{key:0},{default:l(()=>[o(G,{class:"q-mb-sm",dense:"",label:"Select the Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craftSelection,"onUpdate:modelValue":a[0]||(a[0]=r=>e.craftSelection=r),options:e.availableCrafts||[],"option-label":"6","display-value":`${e.craftSelection?e.craftSelection[6]:""}`,"bottom-slots":"",error:!!e.formErrors.craftSelection},{error:l(()=>[f("div",Le,V(e.formErrors.craftSelection),1)]),_:1},8,["modelValue","options","display-value","error"])]),_:1})):(s(),y(D,{key:1},{default:l(()=>[Ue]),_:1})),o(z,{align:"right"},{default:l(()=>[o(j,{color:"secondary",label:"Cancel",onClick:e.cancelAdd},null,8,["onClick"]),e.availableCrafts.length>0?(s(),y(j,{key:0,color:"primary",label:"Submit",type:"submit"})):k("",!0)]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var ze=X(Xe,[["render",Me]]);const Be=F({components:{CraftPanel:Fe,AddNewCraft:ze},setup(){const e=L(),a=h(null),n=h(!1),c=oe(),{getViewedProjects:u,updateViewedProjects:d}=re(),r=T(()=>c.params.id?c.params.id:null),i=T(()=>u(r.value)),t=T(()=>(i.value&&i.value.crafts?i.value.crafts:[]).sort((A,m)=>A.order>m.order?1:-1));function b({craft:g}){d({id:r.value,dataset:"crafts",data:[g],push:!0}),n.value=!1,a.value=g[3],e.notify({type:"positive",message:"New craft added!"})}return(async g=>{if(e.loading.show(),r.value&&(g||t.value.length===0)){const{data:A}=await Q.fetchFromProjectsApp({fields:[le({type:"projectCrafts",query:`{'7'.EX.'${r.value}'}`})]});d({id:r.value,dataset:"crafts",data:A});const m=A.sort((p,J)=>p.order>J.order?1:-1)[0];a.value=m[3]}else a.value=t.value[0][3];e.loading.hide()})(),{tab:a,project:i,crafts:t,splitterModel:h(20),showAddCraft:n,newCraftAddComplete:b}}}),Ie={class:"q-pa-sm"},Ye={class:"row items-center"},Ge={class:"col-10 q-pr-sm"},Ke={class:"col-2 text-center"};function Ze(e,a,n,c,u,d){const r=B("craft-panel"),i=B("add-new-craft");return s(),y(fe,{style:{"max-width":"100vw"}},{default:l(()=>[f("div",Ie,[f("div",null,[f("div",Ye,[f("div",Ge,[o(ue,{class:"q-py-xs bg-info text-white shadow-2 rounded-borders",dense:"",modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=t=>e.tab=t),"indicator-color":"accent","outside-arrows":"","mobile-arrows":"","inline-label":""},{default:l(()=>[(s(!0),q(I,null,Y(e.crafts,t=>(s(),y(ne,{key:t[3],name:t[3],label:t[10]},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),f("div",Ke,[e.$can("manage","projects")?(s(),y(j,{key:0,color:"accent",label:"Add another Craft",onClick:a[1]||(a[1]=t=>e.showAddCraft=!0)})):k("",!0)])]),o(de,{modelValue:e.tab,"onUpdate:modelValue":a[2]||(a[2]=t=>e.tab=t),animated:""},{default:l(()=>[(s(!0),q(I,null,Y(e.crafts,t=>(s(),y(ie,{key:t[3],name:t[3],class:"q-px-xs"},{default:l(()=>[o(r,{category:t,projectData:e.project},null,8,["category","projectData"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),o(_,{modelValue:e.showAddCraft,"onUpdate:modelValue":a[4]||(a[4]=t=>e.showAddCraft=t),persistent:""},{default:l(()=>[e.showAddCraft?(s(),y(i,{key:0,crafts:e.crafts,project:e.project[3]||null,onCancelAddCraft:a[3]||(a[3]=t=>e.showAddCraft=!1),onNewCraftAdded:e.newCraftAddComplete},null,8,["crafts","project","onNewCraftAdded"])):k("",!0)]),_:1},8,["modelValue"])])]),_:1})}var Ea=X(Be,[["render",Ze]]);export{Ea as default};
