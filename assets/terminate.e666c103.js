import{r as z,c as b,g as be,cQ as Ue,cj as ge,cN as De,h as L,bX as ke,cR as Ne,cV as Re,cS as $e,cU as Ee,cW as Qe,dy as Ie,c_ as ue,dz as je,dd as ze,cT as Pe,cJ as Oe,l as ye,bT as Ve,w as he,_ as Se,A as R,B as j,d as a,br as d,cE as ie,cF as re,D as n,ac as B,bR as _,bP as G,ax as X,cG as de,bW as ee,F as me,b4 as Te,bS as ce,ar as qe,dA as f,cH as Be,bO as Le,bU as We,b5 as Ke,aq as pe}from"./index.e8fb2253.js";import{Q as He}from"./QPage.d147e8f9.js";import{u as Fe}from"./use-quasar.0aa2fc3d.js";import{u as we}from"./useQuerySaver.d29ff9ee.js";import{q as Ae}from"./app.00bf1e10.js";import{u as Ce}from"./dataStore.0af02e2e.js";import{a as te,Q as Me}from"./QSelect.c4b0a406.js";import{Q as Xe}from"./QChip.178232ad.js";import{Q as Ye}from"./QList.d18fd6ea.js";import{Q as Ge}from"./QForm.bc1b5926.js";import{a as Je,u as k}from"./vee-validate.esm.f9a9192e.js";import{a as le,b as Ze,c as fe,e as ae}from"./array.6a8b7cfb.js";import{dayjs as ve}from"./dayjs.d1250a8a.js";import{s as xe}from"./submitRelease.92eb20e8.js";import{u as _e}from"./dataStore.4cb31a18.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.8666a90b.js";import"./api.e92e8aaa.js";import"./index.04bc0a32.js";import"./i18n.2814a62c.js";import"./QMenu.b4300bfa.js";import"./position-engine.d748a9db.js";import"./selection.1f477e95.js";import"./rtl.b51694b1.js";function M(e,l,A,h){const m=[];return e.forEach(c=>{h(c)===!0?m.push(c):l.push({failedPropValidation:A,file:c})}),m}function oe(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),ge(e)}const et={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},tt=["rejected"];function lt({editable:e,dnd:l,getFileInput:A,addFilesToQueue:h}){const{props:m,emit:c,proxy:t}=be(),V=z(null),C=b(()=>m.accept!==void 0?m.accept.split(",").map(o=>(o=o.trim(),o==="*"?"*/":(o.endsWith("/*")&&(o=o.slice(0,o.length-1)),o.toUpperCase()))):null),$=b(()=>parseInt(m.maxFiles,10)),E=b(()=>parseInt(m.maxTotalSize,10));function F(o){if(e.value)if(o!==Object(o)&&(o={target:null}),o.target!==null&&o.target.matches('input[type="file"]')===!0)o.clientX===0&&o.clientY===0&&Ue(o);else{const S=A();S&&S!==o.target&&S.click(o)}}function Q(o){e.value&&o&&h(null,o)}function P(o,S,O,T){let u=Array.from(S||o.target.files);const w=[],N=()=>{w.length>0&&c("rejected",w)};if(m.accept!==void 0&&C.value.indexOf("*/")===-1&&(u=M(u,w,"accept",p=>C.value.some(g=>p.type.toUpperCase().startsWith(g)||p.name.toUpperCase().endsWith(g))),u.length===0))return N();if(m.maxFileSize!==void 0){const p=parseInt(m.maxFileSize,10);if(u=M(u,w,"max-file-size",g=>g.size<=p),u.length===0)return N()}if(m.multiple!==!0&&u.length>0&&(u=[u[0]]),u.forEach(p=>{p.__key=p.webkitRelativePath+p.lastModified+p.name+p.size}),T===!0){const p=O.map(g=>g.__key);u=M(u,w,"duplicate",g=>p.includes(g.__key)===!1)}if(u.length===0)return N();if(m.maxTotalSize!==void 0){let p=T===!0?O.reduce((g,Y)=>g+Y.size,0):0;if(u=M(u,w,"max-total-size",g=>(p+=g.size,p<=E.value)),u.length===0)return N()}if(typeof m.filter=="function"){const p=m.filter(u);u=M(u,w,"filter",g=>p.includes(g))}if(m.maxFiles!==void 0){let p=T===!0?O.length:0;if(u=M(u,w,"max-files",()=>(p++,p<=$.value)),u.length===0)return N()}if(N(),u.length>0)return u}function W(o){oe(o),l.value!==!0&&(l.value=!0)}function s(o){ge(o),(o.relatedTarget!==null||De.is.safari!==!0?o.relatedTarget!==V.value:document.elementsFromPoint(o.clientX,o.clientY).includes(V.value)===!1)===!0&&(l.value=!1)}function v(o){oe(o);const S=o.dataTransfer.files;S.length>0&&h(null,S),l.value=!1}function U(o){if(l.value===!0)return L("div",{ref:V,class:`q-${o}__dnd absolute-full`,onDragenter:oe,onDragover:oe,onDragleave:s,onDrop:v})}return Object.assign(t,{pickFiles:F,addFiles:Q}),{pickFiles:F,addFiles:Q,onDragover:W,onDragleave:s,processFiles:P,getDndNode:U,maxFilesNumber:$,maxTotalSizeNumber:E}}var at=ke({name:"QFile",inheritAttrs:!1,props:{...Ne,...Re,...et,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...$e,...tt],setup(e,{slots:l,emit:A,attrs:h}){const{proxy:m}=be(),c=Ee(),t=z(null),V=z(!1),C=Qe(e),{pickFiles:$,onDragover:E,onDragleave:F,processFiles:Q,getDndNode:P}=lt({editable:c.editable,dnd:V,getFileInput:J,addFilesToQueue:Z}),W=Ie(e),s=b(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),v=b(()=>ue(s.value)),U=b(()=>s.value.map(i=>i.name).join(", ")),o=b(()=>je(s.value.reduce((i,q)=>i+q.size,0))),S=b(()=>({totalSize:o.value,filesNumber:s.value.length,maxFiles:e.maxFiles})),O=b(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:C.value,...h,id:c.targetUid.value,disabled:c.editable.value!==!0})),T=b(()=>"q-file q-field--auto-height"+(V.value===!0?" q-file--dnd":"")),u=b(()=>e.multiple===!0&&e.append===!0);function w(i){const q=s.value.slice();q.splice(i,1),p(q)}function N(i){const q=s.value.findIndex(i);q>-1&&w(q)}function p(i){A("update:modelValue",e.multiple===!0?i:i[0])}function g(i){i.keyCode===13&&Oe(i)}function Y(i){(i.keyCode===13||i.keyCode===32)&&$(i)}function J(){return t.value}function Z(i,q){const D=Q(i,q,s.value,u.value),r=J();r!=null&&(r.value=""),D!==void 0&&((e.multiple===!0?e.modelValue&&D.every(y=>s.value.includes(y)):e.modelValue===D[0])||p(u.value===!0?s.value.concat(D):D))}function K(){return[L("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function x(){if(l.file!==void 0)return s.value.length===0?K():s.value.map((q,D)=>l.file({index:D,file:q,ref:this}));if(l.selected!==void 0)return s.value.length===0?K():l.selected({files:s.value,ref:this});if(e.useChips===!0)return s.value.length===0?K():s.value.map((q,D)=>L(Xe,{key:"file-"+D,removable:c.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{w(D)}},()=>L("span",{class:"ellipsis",textContent:q.name})));const i=e.displayValue!==void 0?e.displayValue:U.value;return i.length>0?[L("div",{class:e.inputClass,style:e.inputStyle,textContent:i})]:K()}function ne(){const i={ref:t,...O.value,...W.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:Z};return e.multiple===!0&&(i.multiple=!0),L("input",i)}return Object.assign(c,{fieldClass:T,emitValue:p,hasValue:v,inputRef:t,innerValue:s,floatingLabel:b(()=>v.value===!0||ue(e.displayValue)),computedCounter:b(()=>{if(e.counterLabel!==void 0)return e.counterLabel(S.value);const i=e.maxFiles;return`${s.value.length}${i!==void 0?" / "+i:""} (${o.value})`}),getControlChild:()=>P("file"),getControl:()=>{const i={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return c.editable.value===!0&&Object.assign(i,{onDragover:E,onDragleave:F,onKeydown:g,onKeyup:Y}),L("div",i,[ne()].concat(x()))}}),Object.assign(m,{removeAtIndex:w,removeFile:N,getNativeElement:()=>t.value}),ze(m,"nativeEl",()=>t.value),Pe(c)}});const ot=ye({emits:["releaseSubmitted"],props:{record:Object,employee:Object},setup(e,{emit:l}){const A=z(!1),h=z(!1),m=z(null),c=z([]),t=Fe(),V=Ve(),{getTermReasons:C,setTermReasons:$}=Ce(),{getAssignments:E,fetchAssignments:F}=_e(),Q=b(()=>le({selection:le().required().nullable().label("Reason"),effective:Ze().required().label("Last Day On Site"),category:fe().nullable(),attendance:ae().required().label("Attendance"),capability:ae().required().label("Capability"),attitude:ae().required().label("Attitude"),promotable:ae().required().label("Promotability"),comments:fe().nullable().label("Comments"),equipment:le().required().nullable().label("Equipment Returned"),supervisor:le().nullable().label("Supervisor")})),{errors:P,handleSubmit:W,handleReset:s}=Je({validationSchema:Q,initialValues:{}}),{value:v}=k("selection"),{value:U}=k("effective"),{value:o}=k("category"),{value:S}=k("attachments"),{value:O}=k("capability"),{value:T}=k("attendance"),{value:u}=k("attitude"),{value:w}=k("promotable"),{value:N}=k("comments"),{value:p}=k("equipment"),{value:g}=k("supervisor"),Y=b(()=>{const r=C();return o.value?r.filter(y=>y[6]===o.value).sort((y,I)=>y[12]>I[12]?1:-1):r.sort((y,I)=>y[12]>I[12]?1:-1)}),J=W(async r=>{if(h.value&&c.value.length===0)t.dialog({title:"Alert",message:"Supporting documents are required for this reason!"});else{const y={capability:r.capability,attendance:r.attendance,attitude:r.attitude,promotable:r.promotable,comments:r.comments?r.comments.replace(/(\r\n|\n|\r)/gm," "):null};t.dialog({title:"Confirm",message:"Are you sure you want to release this employee?",cancel:!0,persistent:!0}).onOk(async()=>{try{A.value=!0;const{release:I,employee:H,assignment:se}=await xe({employee:e.employee,assignment:e.record,values:r,effectiveNow:!x.value,attachments:c.value,ratings:y,supervisor:r.supervisor});l("releaseSubmitted",{release:I,employee:H,assignment:se,effectiveNow:!x.value}),s()}catch{A.value=!1,t.notify({type:"negative",message:"Cannot submit release."})}})}}),Z=()=>{t.dialog({title:"Confirm",message:"Are you sure you want to cancel?",cancel:!0,persistent:!0}).onOk(()=>{s(),V.go(-1)})};he(v,(r,y)=>{r&&r[19]?(h.value=!0,S.value=!0):(S.value=!1,h.value=!1)});const K=b(()=>{const r=C();return[...new Map(r.map(y=>[y[6],y[6]])).values()]}),x=b(()=>U.value&&U.value!==""?ve().isBefore(ve(U.value)):!1),ne=r=>new Promise((y,I)=>{const H=new FileReader;H.readAsDataURL(r),H.onload=()=>y(H.result.replace(/^data:.+;base64,/,"")),H.onerror=se=>I(se)}),i=()=>{m.value&&m.value.forEach(async r=>{const y={6:{value:await ne(r),filename:r.name},7:{value:r.name}};c.value.push(y),m.value=null}),console.log(c.value)},q=r=>{console.log(c.value[r]),c.value.splice(r,1)};return(async()=>{if(C().length===0){const{data:r}=await Ae.fetchFromHiringApp({fields:[we({type:"termReasons",query:"{'11'.EX.'true'}"})]});$({reasons:r})}F({projectId:e.record[74]})})(),{props:e,options:Y,primaryReasons:K,category:o,selection:v,effective:U,attachments:S,capability:O,attendance:T,attitude:u,promotable:w,comments:N,equipment:p,supervisor:g,attachmentsRequired:h,fileAttachment:m,attachedFiles:c,submit:J,formErrors:P,handleReset:s,cancelRelease:Z,showFiles:i,deleteFile:q,getAssignments:E,disableSubmit:A}}}),nt={class:"row"},st={class:"col-12 col-md-4 q-px-sm"},it=n("div",{class:"text-caption"},"Is this release voluntary or involuntary?",-1),rt={class:"text-caption"},ut={class:"col-12 col-md-4 q-pl-xs q-pr-sm"},dt=n("div",{class:"text-caption"},"What is the reason for this release?",-1),mt={class:"text-caption"},ct={class:"row"},pt={class:"col-12 col-md-4 q-pl-xs q-pr-sm"},ft=n("div",{class:"text-caption"},"When is the employee's last day on site?",-1),vt={class:"text-caption"},bt={class:"col-12 col-md-4 q-pl-xs q-pr-sm"},gt=n("div",{class:"text-caption"},"Has all Company Equipment been returned?",-1),yt={class:"text-caption"},Vt={class:"row items-top justify-between q-mt-sm"},ht={class:"col-4 q-pl-xs q-pr-sm"},St={key:0,class:"text-body2 text-negative text-italic"},qt={key:0},Ft={key:1},wt={key:1,class:"text-body2 text-dark text-italic"},At=n("span",null,"**Supporting documents are optional for this reason.",-1),Ct=[At],Ut={key:0,class:"col-6 q-pl-xs q-pr-sm"},Dt=n("div",{class:"text-body1 text-info q-mb-sm"},"Attached Documents",-1),kt={class:"row q-my-md"},Nt={class:"col-12"},Rt=n("div",{class:"q-pa-sm"},[n("div",{class:"text-h6 text-bold"},"CAAP Rating"),n("div",{class:"text-body1 text-dark text-italic"},"Capability, Attendance, Attitude, and Promotability"),n("div",{class:"text-body2 text-accent q-mt-sm"},"Select how much you agree with each of the following statements.")],-1),$t={class:"q-pb-sm"},Et=n("div",{class:"text-body2 text-info text-bold q-mb-sm"},"This employee is capable of performing their assigned job.",-1),Qt={class:"q-pb-sm"},It=n("div",{class:"text-body2 text-info text-bold q-mb-sm"},"This employee regularly shows up to work on time.",-1),jt={class:"q-pb-sm"},zt=n("div",{class:"text-body2 text-info text-bold q-mb-sm"},"This employee has a good attitude.",-1),Pt={class:"q-pb-sm"},Ot=n("div",{class:"text-body2 text-info text-bold q-mb-sm"},"I am confident that this employee can be promoted in the future.",-1),Tt={class:"row q-mt-md"},Bt={class:"col-12 col-md-5"},Lt=n("div",{class:"text-body2 text-weight-bold text-info"},[X(" Who conducted this evaluation? "),n("span",{class:"text-italic text-weight-light text-dark"},"(recommended)")],-1),Wt={class:"text-caption"},Kt={class:"row q-py-sm"},Ht={class:"col-12"};function Mt(e,l,A,h,m,c){return R(),j("div",null,[a(Ge,{onSubmit:Le(e.submit,["prevent"])},{default:d(()=>[a(ie,null,{default:d(()=>[a(re,null,{default:d(()=>[n("div",nt,[n("div",st,[it,a(te,{dense:"","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.category,"onUpdate:modelValue":l[0]||(l[0]=t=>e.category=t),options:e.primaryReasons},{error:d(()=>[n("div",rt,B(e.formErrors.selection),1)]),"no-option":d(()=>[a(_,null,{default:d(()=>[a(G,{class:"text-grey"},{default:d(()=>[X(" No Options Available ")]),_:1})]),_:1})]),_:1},8,["modelValue","options"])]),n("div",ut,[dt,a(te,{dense:"","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.selection,"onUpdate:modelValue":l[1]||(l[1]=t=>e.selection=t),options:e.options,"option-label":"12","display-value":`${e.selection?e.selection[12]:""}`,"bottom-slots":"",error:!!e.formErrors.selection,disable:!e.category},{error:d(()=>[n("div",mt,B(e.formErrors.selection),1)]),"no-option":d(()=>[a(_,null,{default:d(()=>[a(G,{class:"text-grey"},{default:d(()=>[X(" No Options Available ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","display-value","error","disable"])])]),n("div",ct,[n("div",pt,[ft,a(de,{dense:"",type:"date",modelValue:e.effective,"onUpdate:modelValue":l[2]||(l[2]=t=>e.effective=t),error:!!e.formErrors.effective,"bottom-slots":""},{error:d(()=>[n("div",vt,B(e.formErrors.effective),1)]),_:1},8,["modelValue","error"])]),n("div",bt,[gt,a(te,{dense:"","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.equipment,"onUpdate:modelValue":l[3]||(l[3]=t=>e.equipment=t),options:[{value:!0,label:"Yes"},{value:!1,label:"No"},{value:!0,label:"None Issued"}],"bottom-slots":"",error:!!e.formErrors.equipment},{error:d(()=>[n("div",yt,B(e.formErrors.equipment),1)]),_:1},8,["modelValue","error"])])]),n("div",Vt,[n("div",ht,[a(at,{dense:"","bottom-slots":"",modelValue:e.fileAttachment,"onUpdate:modelValue":l[4]||(l[4]=t=>e.fileAttachment=t),multiple:"",append:"",label:"Attach Supporting Documents"},{after:d(()=>[a(ee,{dense:"",color:"info",round:"",flat:"",icon:"cloud_upload",onClick:e.showFiles},null,8,["onClick"])]),_:1},8,["modelValue"]),e.attachmentsRequired?(R(),j("div",St,[X("!! "),e.selection[12].toLowerCase().includes("attendance")?(R(),j("span",qt,"Supporting attendance records must be attached.")):(R(),j("span",Ft,"Supporting documents are required for this reason."))])):(R(),j("div",wt,Ct))]),e.attachedFiles.length>0?(R(),j("div",Ut,[Dt,a(Ye,{dense:""},{default:d(()=>[(R(!0),j(me,null,Te(e.attachedFiles,(t,V)=>(R(),j(me,{key:t},[a(_,null,{default:d(()=>[a(G,null,{default:d(()=>[a(Me,null,{default:d(()=>[X(B(V+1)+". "+B(t[6].filename),1)]),_:2},1024)]),_:2},1024),a(G,{side:""},{default:d(()=>[a(ee,{color:"accent",round:"",flat:"",class:"cursor-pointer",icon:"delete",size:"md",onClick:C=>e.deleteFile(V)},null,8,["onClick"])]),_:2},1024)]),_:2},1024),a(ce)],64))),128))]),_:1})])):qe("",!0)])]),_:1})]),_:1}),a(ce),n("div",kt,[n("div",Nt,[Rt,a(ie,null,{default:d(()=>[a(re,null,{default:d(()=>[n("div",null,[n("div",$t,[Et,a(f,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":l[5]||(l[5]=t=>e.capability=t),val:"1",label:"Strongly Disagree"},null,8,["modelValue"]),a(f,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":l[6]||(l[6]=t=>e.capability=t),val:"2",label:"Disagree"},null,8,["modelValue"]),a(f,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":l[7]||(l[7]=t=>e.capability=t),val:"3",label:"Neutral"},null,8,["modelValue"]),a(f,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":l[8]||(l[8]=t=>e.capability=t),val:"4",label:"Agree"},null,8,["modelValue"]),a(f,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":l[9]||(l[9]=t=>e.capability=t),val:"5",label:"Strongly Agree"},null,8,["modelValue"]),a(f,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":l[10]||(l[10]=t=>e.capability=t),val:"0",label:"I Do Not Know"},null,8,["modelValue"])]),n("div",Qt,[It,a(f,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":l[11]||(l[11]=t=>e.attendance=t),val:"1",label:"Strongly Disagree"},null,8,["modelValue"]),a(f,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":l[12]||(l[12]=t=>e.attendance=t),val:"2",label:"Disagree"},null,8,["modelValue"]),a(f,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":l[13]||(l[13]=t=>e.attendance=t),val:"3",label:"Neutral"},null,8,["modelValue"]),a(f,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":l[14]||(l[14]=t=>e.attendance=t),val:"4",label:"Agree"},null,8,["modelValue"]),a(f,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":l[15]||(l[15]=t=>e.attendance=t),val:"5",label:"Strongly Agree"},null,8,["modelValue"]),a(f,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":l[16]||(l[16]=t=>e.attendance=t),val:"0",label:"I Do Not Know"},null,8,["modelValue"])]),n("div",jt,[zt,a(f,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":l[17]||(l[17]=t=>e.attitude=t),val:"1",label:"Strongly Disagree"},null,8,["modelValue"]),a(f,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":l[18]||(l[18]=t=>e.attitude=t),val:"2",label:"Disagree"},null,8,["modelValue"]),a(f,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":l[19]||(l[19]=t=>e.attitude=t),val:"3",label:"Neutral"},null,8,["modelValue"]),a(f,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":l[20]||(l[20]=t=>e.attitude=t),val:"4",label:"Agree"},null,8,["modelValue"]),a(f,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":l[21]||(l[21]=t=>e.attitude=t),val:"5",label:"Strongly Agree"},null,8,["modelValue"]),a(f,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":l[22]||(l[22]=t=>e.attitude=t),val:"0",label:"I Do Not Know"},null,8,["modelValue"])]),n("div",Pt,[Ot,a(f,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":l[23]||(l[23]=t=>e.promotable=t),val:"1",label:"Strongly Disagree"},null,8,["modelValue"]),a(f,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":l[24]||(l[24]=t=>e.promotable=t),val:"2",label:"Disagree"},null,8,["modelValue"]),a(f,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":l[25]||(l[25]=t=>e.promotable=t),val:"3",label:"Neutral"},null,8,["modelValue"]),a(f,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":l[26]||(l[26]=t=>e.promotable=t),val:"4",label:"Agree"},null,8,["modelValue"]),a(f,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":l[27]||(l[27]=t=>e.promotable=t),val:"5",label:"Strongly Agree"},null,8,["modelValue"]),a(f,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":l[28]||(l[28]=t=>e.promotable=t),val:"0",label:"I Do Not Know"},null,8,["modelValue"])])]),n("div",Tt,[n("div",Bt,[Lt,a(te,{dense:"",clearable:"","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.supervisor,"onUpdate:modelValue":l[29]||(l[29]=t=>e.supervisor=t),options:e.getAssignments(e.props.record[74]).length>0?e.getAssignments(e.props.record[74]).filter(t=>t[3]!==e.props.record[3]).sort((t,V)=>t[75]>V[75]?1:-1):[],"option-label":t=>`${t[75]} - ${t[104]}`,"display-value":`${e.supervisor?e.supervisor[75]:""}`,"bottom-slots":"",error:!!e.formErrors.supervisor,hint:"Ex: Employee's Supervisor"},{error:d(()=>[n("div",Wt,B(e.formErrors.supervisor),1)]),"no-option":d(()=>[a(_,null,{default:d(()=>[a(G,{class:"text-grey"},{default:d(()=>[X(" No Options Available ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label","display-value","error"])])])]),_:1})]),_:1})])]),n("div",Kt,[n("div",Ht,[a(de,{filled:"",type:"textarea",modelValue:e.comments,"onUpdate:modelValue":l[30]||(l[30]=t=>e.comments=t),label:"Comments"},null,8,["modelValue"])])]),a(Be,{align:"right"},{default:d(()=>[a(ee,{disable:e.disableSubmit,color:"info",label:"Submit",type:"submit"},null,8,["disable"]),a(ee,{color:"secondary",label:"Cancel",onClick:e.cancelRelease},null,8,["onClick"])]),_:1})]),_:1},8,["onSubmit"])])}var Xt=Se(ot,[["render",Mt]]);const Yt=ye({components:{ReleaseForm:Xt},setup(){const e=z(0),l=We(),A=Ve(),h=Fe(),{getEmployee:m,getAssignmentsByEmployee:c,setAssignmentsByEmployee:t,setEmployees:V,setReleases:C,setReleasesByAssignment:$,setReleasesByEmployee:E}=Ce(),F=b(()=>m(l.params.id)),Q=b(()=>F.value?c(F.value[3]):null),P=async()=>{if(!Q.value&&F.value[577]){const{data:s}=await Ae.fetchFromHiringApp({fields:[we({type:"assignments",query:"",id:F.value[577]})]});console.log(s),t({id:F.value[3],data:s})}};return he(F,(s,v)=>{s&&P()}),{employee:F,assignment:Q,releaseSubmitted:({employee:s,release:v,assignment:U,effectiveNow:o})=>{h.notify({type:"positive",message:"Release successfully submitted."}),o?(s[581]=v[3],C({id:v[3],data:v}),V({id:s[3],data:s}),t({id:s[3],assignment:U}),$({id:U[3],data:v}),E({id:s[3],data:v})):(s[581]=v[3],V({id:s[3],data:s}),C({id:v[3],data:v}),$({id:U[3],data:v}),E({id:s[3],data:v})),A.replace({name:"view-ee-release",params:{id:s[3],release:v[3]}})},step:e}}}),Gt={class:"q-pa-sm"},Jt={class:"row"},Zt={class:"col-12"},xt=n("div",{class:"text-h6 text-weight-bold q-mb-md"},"Please complete the following to submit this release.",-1);function _t(e,l,A,h,m,c){const t=Ke("release-form");return R(),pe(He,{style:{"max-width":"100vw"}},{default:d(()=>[n("div",Gt,[n("div",Jt,[n("div",Zt,[a(ie,{flat:""},{default:d(()=>[e.assignment?(R(),pe(re,{key:0},{default:d(()=>[xt,a(t,{record:e.assignment,employee:e.employee,onReleaseSubmitted:e.releaseSubmitted},null,8,["record","employee","onReleaseSubmitted"])]),_:1})):qe("",!0)]),_:1})])])])]),_:1})}var wl=Se(Yt,[["render",_t]]);export{wl as default};
