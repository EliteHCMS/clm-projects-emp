import{k as re,c0 as D,c as J,_ as ie,v as d,aj as k,be as n,x as E,z as t,d as l,a7 as a,A as Re,c1 as V,bB as ve,ak as c,r as M,o as ze,cy as O,bY as ne,aV as de,cx as _,aq as ae,B as C,cA as ue,aU as Ee,F as Se,b_ as De,w as Qe,ck as He}from"./index.3eeef2e1.js";import{Q as Te}from"./QPage.3e8c465d.js";import{Q as be,a as ye,b as Be}from"./QStep.3c19f8ba.js";import{b as Ye,g as ce,i as ge,d as fe,h as he,c as Fe,e as Le}from"./quickbase.bbce1ca9.js";import{a as j}from"./QSelect.ce6478b1.js";import{u as Ce}from"./i18n.5f5b9ab4.js";import{a as R,b as qe,u as p,c as q}from"./array.0ed5cfd4.js";import{u as Ne}from"./use-quasar.8b9eb101.js";import{Q as we}from"./QTooltip.c8700232.js";import"./use-panel.95b8d642.js";import"./touch.d8ab472d.js";import"./selection.13bd015d.js";import"./QSlideTransition.474206ff.js";import"./_commonjsHelpers.dfee5925.js";import"./dayjs.281b68b5.js";import"./localForage.ba82a4c8.js";import"./index.7dbe61ef.js";import"./api.865b2f54.js";import"./QMenu.da0b9218.js";import"./position-engine.783907a3.js";import"./rtl.65b79c69.js";const je=re({props:{title:String,step:Number,name:Number},setup(){const{checkedIn:e,onKiosk:s}=Ye(),{profile:h,updateProfile:u}=ce(),S=ge(),{evergreenJobOptions:f}=D(S),{t:o}=Ce(),b=J(()=>e?R({selection:R().required(`${o("pleaseSelectAJob")}`).nullable()}):!1),{meta:i,errors:T,handleSubmit:Q,isSubmitting:F}=qe({validationSchema:b,initialValues:{selection:h[19].value?{value:h[19].value,label:h[19].label}:null}}),{value:L}=p("selection"),B=Q(N=>{const I={19:{value:N.selection.value,label:N.selection.label},40:{value:N.selection[13],label:N.selection[12]}};u({next:1,values:I})});return{checkedIn:e,onKiosk:s,selection:L,formMeta:i,formErrors:T,isSubmitting:F,submitUpdate:B,evergreenJobOptions:f}}}),Je={key:0},Ze={class:"text-caption"};function Ke(e,s,h,u,S,f){return d(),k(ye,{name:e.name,title:e.title,done:e.step>0},{default:n(()=>[e.checkedIn||e.onKiosk?(d(),E("div",Je,[t("form",{onSubmit:s[1]||(s[1]=ve((...o)=>e.submitUpdate&&e.submitUpdate(...o),["prevent"]))},[l(j,{autofocus:"",label:e.$t("selectAJob"),modelValue:e.selection,"onUpdate:modelValue":s[0]||(s[0]=o=>e.selection=o),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",options:e.evergreenJobOptions,style:Re(e.$q.screen.gt.md?"width: 50%":"width: 100%"),error:!!e.formErrors.selection,"bottom-slots":"",dense:""},{error:n(()=>[t("div",Ze,a(e.formErrors.selection),1)]),_:1},8,["label","modelValue","options","style","error"]),l(be,{class:"text-right"},{default:n(()=>[l(V,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)])):c("",!0)]),_:1},8,["name","title","done"])}var We=ie(je,[["render",Ke]]);const Ge=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],Xe=["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon Territory"],_e=re({props:{title:String,step:Number,name:Number},components:{},setup(){const{employee:e}=D(fe()),s=[{label:"Call",value:1},{label:"Text",value:2},{label:"Email",value:3},{label:"Call, Text, or Email",value:4},{label:"Do Not Contact Me",value:5}],h=[{label:"United States",value:"United States"},{label:"Canada",value:"Canada"}],u=M(!1),S=M(!1),f=M(null),o=ce(),{onJobBoard:b}=D(o),i=R({first:q().required("First name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),middle:q().matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}).nullable().notRequired(),last:q().required("Last name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),suffix:q().nullable().notRequired(),street1:q().required(),street2:q().nullable().notRequired(),city:q().required(),state:q().required(),postal:q().required(),addressCountry:R().required(),contact:R().nullable().notRequired()}),{meta:T,errors:Q,handleSubmit:F,isSubmitting:L}=qe({validationSchema:i,initialValues:{first:e.value[20]?e.value[20]:"",middle:e.value[21]?e.value[21]:"",last:e.value[22]?e.value[22]:"",suffix:e.value[23]?e.value[23]:"",contact:e.value[57]?{value:e.value[57],label:e.value[58]}:null,street1:e.value[41]?e.value[41]:"",street2:e.value[42]?e.value[42]:"",city:e.value[43]?e.value[43]:"",state:e.value[44]?e.value[44]:"",postal:e.value[45]?e.value[45]:"",addressCountry:e.value[46]?{value:e.value[46],label:e.value[46]}:null}}),{value:B,meta:N}=p("first"),{value:I,meta:x}=p("middle"),{value:ee,meta:Z}=p("last"),{value:te}=p("suffix"),{value:oe}=p("contact"),{value:le}=p("street1"),{value:U}=p("street2"),{value:K}=p("city"),{value:A}=p("state"),{value:z}=p("postal"),{value:r}=p("addressCountry"),y=J(()=>{const g=`${B.value} ${ee.value} ${te.value}`;return he.formatName(g)}),$=J(()=>`${le.value}${U.value===""?"":` ${U.value}`}, ${K.value}, ${A.value}, ${z.value}, ${r.value.value}`);function Y(){const g={next:2};o.updateProfile(g)}function W(){u.value=!0}const G=F(async g=>{const me={23:g.first,24:g.middle,25:g.last,26:g.suffix,27:e.value[27],28:e.value[26],46:g.contact,32:g.street1,33:g.street2,34:g.city,35:g.state,36:g.postal,37:g.addressCountry.value},H={next:2,values:me};u.value=!1;const $e=await o.updateProfile(H);console.log($e)});function se(){const g={next:0};o.updateProfile(g)}const X=g=>{f.value=g};return ze(()=>{console.log(e.value)}),{submitUpdate:G,isSubmitting:L,save:Y,back:se,updateCountry:X,first:B,middle:I,last:ee,suffix:te,contact:oe,street1:le,street2:U,city:K,state:A,postal:z,addressCountry:r,hasPersonalInfo:S,showEdit:u,firstMeta:N,middleMeta:x,lastMeta:Z,formMeta:T,formErrors:Q,options:s,countries:h,fullName:y,fullAddress:$,employee:e,showEditFunction:W,onJobBoard:b,states:Ge,provinces:Xe}}}),xe={class:"row justify-between"},et={class:"col-12 col-md-5"},tt={class:"text-caption"},ot={class:"text-caption"},lt={class:"text-caption"},st={class:"text-caption"},at={class:"text-caption"},nt={class:"col-12 col-md-6"},rt={class:"text-caption"},it={class:"text-caption"};function dt(e,s,h,u,S,f){return d(),E("form",{onSubmit:s[12]||(s[12]=ve((...o)=>e.submitUpdate&&e.submitUpdate(...o),["prevent"]))},[t("div",xe,[t("div",et,[l(O,{dense:"",modelValue:e.first,"onUpdate:modelValue":s[0]||(s[0]=o=>e.first=o),label:`${e.$t("firstName")} *`,error:!!e.formErrors.first,"bottom-slots":""},{error:n(()=>[t("div",tt,a(e.formErrors.first),1)]),_:1},8,["modelValue","label","error"]),l(O,{dense:"",modelValue:e.middle,"onUpdate:modelValue":s[1]||(s[1]=o=>e.middle=o),label:e.$t("middleName"),error:!!e.formErrors.middle,"bottom-slots":""},{error:n(()=>[t("div",ot,a(e.formErrors.middle),1)]),_:1},8,["modelValue","label","error"]),l(O,{dense:"",modelValue:e.last,"onUpdate:modelValue":s[2]||(s[2]=o=>e.last=o),label:`${e.$t("lastName")} *`,error:!!e.formErrors.last,"bottom-slots":""},{error:n(()=>[t("div",lt,a(e.formErrors.last),1)]),_:1},8,["modelValue","label","error"]),l(O,{dense:"",modelValue:e.suffix,"onUpdate:modelValue":s[3]||(s[3]=o=>e.suffix=o),label:e.$t("suffix"),error:!!e.formErrors.suffix,"bottom-slots":""},{error:n(()=>[t("div",st,a(e.formErrors.suffix),1)]),_:1},8,["modelValue","label","error"]),l(j,{dense:"",modelValue:e.contact,"onUpdate:modelValue":s[4]||(s[4]=o=>e.contact=o),label:e.$t("preferredContactMethod"),options:e.options,error:!!e.formErrors.contact,"bottom-slots":""},{error:n(()=>[t("div",at,a(e.formErrors.contact),1)]),_:1},8,["modelValue","label","options","error"])]),e.$q.screen.gt.sm?(d(),k(ne,{key:0,vertical:""})):c("",!0),t("div",nt,[l(j,{dense:"",modelValue:e.addressCountry,"onUpdate:modelValue":s[5]||(s[5]=o=>e.addressCountry=o),label:`${e.$t("country")} *`,options:e.countries,error:!!e.formErrors.addressCountry,"bottom-slots":""},{error:n(()=>[t("div",rt,a(e.formErrors.addressCountry),1)]),_:1},8,["modelValue","label","options","error"]),l(O,{dense:"",modelValue:e.street1,"onUpdate:modelValue":s[6]||(s[6]=o=>e.street1=o),label:`${e.$t("streetAddress1")} *`,error:!!e.formErrors.street1,"bottom-slots":""},null,8,["modelValue","label","error"]),l(O,{dense:"",modelValue:e.street2,"onUpdate:modelValue":s[7]||(s[7]=o=>e.street2=o),label:e.$t("streetAddress2"),error:!!e.formErrors.street2,"bottom-slots":""},null,8,["modelValue","label","error"]),l(O,{dense:"",modelValue:e.city,"onUpdate:modelValue":s[8]||(s[8]=o=>e.city=o),label:`${e.$t("city")} *`,error:!!e.formErrors.city,"bottom-slots":""},null,8,["modelValue","label","error"]),l(j,{dense:"",modelValue:e.state,"onUpdate:modelValue":s[9]||(s[9]=o=>e.state=o),label:`${e.$t("stateRegion")} *`,options:e.addressCountry?e.addressCountry.value==="United States"?e.states:e.provinces:e.states,error:!!e.formErrors.state,"bottom-slots":""},{error:n(()=>[t("div",it,a(e.formErrors.state),1)]),_:1},8,["modelValue","label","options","error"]),l(O,{dense:"",modelValue:e.postal,"onUpdate:modelValue":s[10]||(s[10]=o=>e.postal=o),label:`${e.$t("zipCode")} *`,error:!!e.formErrors.postal,"bottom-slots":""},null,8,["modelValue","label","error"])])]),l(be,{class:"text-right"},{default:n(()=>[e.onJobBoard?c("",!0):(d(),k(V,{key:0,onClick:s[11]||(s[11]=o=>e.$emit("back")),color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["label"])),l(V,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)}var ut=ie(_e,[["render",dt]]);const ct=/^[0-9]{10}/g,mt=re({props:{title:String,step:Number,name:Number},components:{editPersonalInfo:ut},setup(){const{employee:e}=D(fe()),s=[{label:"Call",value:0},{label:"Text",value:1},{label:"Email",value:2}],h=[{label:"United States",value:"United States"},{label:"Canada",value:"Canada"}],u=M(!1),S=M(!1),f=M(null),o=ce(),{onJobBoard:b,personalInfoNeeded:i}=D(o),T=R({first:q().required("First name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),middle:q().matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}).nullable().notRequired(),last:q().required("Last name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),suffix:q().nullable().notRequired(),email:q().required("Email is required!").email("You must provide a valid email!"),phone:q().matches(ct,{message:"Valid Phone Number Required!"}).required("Phone number is required!"),street1:q().required(),street2:q().nullable().notRequired(),city:q().required(),state:q().required(),postal:q().required(),addressCountry:R().required(),contact:R().nullable().notRequired()}),{meta:Q,errors:F,handleSubmit:L,isSubmitting:B}=qe({validationSchema:T,initialValues:{first:e.value[20]?e.value[20]:"",middle:e.value[21]?e.value[21]:"",last:e.value[22]?e.value[22]:"",suffix:e.value[23]?e.value[23]:"",phone:e.value[27]?e.value[27]:"",email:e.value[26]?e.value[26]:"",contact:e.value[57]?{value:e.value[57],label:e.value[58]}:null,street1:e.value[41]?e.value[41]:"",street2:e.value[42]?e.value[42]:"",city:e.value[43]?e.value[43]:"",state:e.value[44]?e.value[44]:"",postal:e.value[45]?e.value[45]:"",addressCountry:e.value[46]?{value:e.value[46],label:e.value[46]}:null}}),{value:N,meta:I}=p("first"),{value:x,meta:ee}=p("middle"),{value:Z,meta:te}=p("last"),{value:oe}=p("suffix"),{value:le}=p("email"),{value:U}=p("phone"),{value:K}=p("contact"),{value:A}=p("street1"),{value:z}=p("street2"),{value:r}=p("city"),{value:y}=p("state"),{value:$}=p("postal"),{value:Y}=p("addressCountry"),W=J(()=>{const v=`${N.value} ${Z.value} ${oe.value}`;return he.formatName(v)}),G=J(()=>`${A.value}${z.value===""?"":` ${z.value}`}, ${r.value}, ${y.value}, ${$.value}, ${Y.value.value}`),se=J(()=>{let v="";return U.value.length===11?v=U.value.substring(1):v=U.value,he.formatPhone(v)});async function X(){const v={23:e.value[20],24:e.value[21],25:e.value[22],26:e.value[23],27:e.value[27],28:e.value[26],46:e.value[57],32:e.value[41],33:e.value[42],34:e.value[43],35:e.value[44],36:e.value[45],37:e.value[46]},pe={next:2,values:v};o.updateProfile(pe)}function g(){u.value=!0}const me=L(v=>{const pe={23:v.first,24:v.middle,25:v.last,26:v.suffix,27:v.phone,28:v.email,46:v.contact,32:v.street1,33:v.street2,34:v.city,35:v.state,36:v.postal,37:v.addressCountry.name},ke={next:2,values:pe};u.value=!1,o.updateProfile(ke)});function H(){u.value=!1;const v={next:0};o.updateProfile(v)}return{submitUpdate:me,isSubmitting:B,save:X,back:H,updateCountry:v=>{f.value=v},first:N,middle:x,last:Z,suffix:oe,email:le,phone:U,contact:K,street1:A,street2:z,city:r,state:y,postal:$,addressCountry:Y,hasPersonalInfo:S,showEdit:u,firstMeta:I,middleMeta:ee,lastMeta:te,formMeta:Q,formErrors:F,options:s,countries:h,fullName:W,fullAddress:G,formatPhone:se,employee:e,showEditFunction:g,onJobBoard:b,personalInfoNeeded:i}}}),pt={key:1},vt={class:"col-12 col-md-3 q-py-sm"},ft={class:"text-primary"},bt={class:"text-dark q-pl-sm"},$t={class:"col-12 col-md-6 q-py-sm"},ht={class:"text-primary"},yt={class:"text-dark q-pl-sm"},gt={class:"col-12 col-md-3 q-py-sm"},qt={class:"text-primary"},kt={class:"text-dark q-pl-sm"};function Vt(e,s,h,u,S,f){const o=de("edit-personal-info");return d(),k(ye,{name:e.name,title:e.title,done:e.step>1},{default:n(()=>[e.showEdit||e.personalInfoNeeded?(d(),k(o,{key:0,onBack:e.back},null,8,["onBack"])):c("",!0),!e.showEdit&&!e.personalInfoNeeded?(d(),E("div",pt,[l(ue,null,{default:n(()=>[l(_,null,{default:n(()=>[t("div",{class:C(["text-dark",e.$q.screen.gt.sm?"text-h6":"text-body2"])},[ae(a(e.$q.screen.gt.sm?`${e.$t("personalInfo")}`:`${e.$t("personal")}`)+" ",1),l(V,{class:"q-ml-sm",round:"",size:e.$q.screen.gt.sm?"sm":"xs",color:"accent",icon:"edit",onClick:e.showEditFunction},null,8,["size","onClick"])],2),t("div",{class:C(["row q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[t("div",vt,[t("div",ft,a(e.$t("name")),1),t("div",bt,a(e.employee[24]),1)]),t("div",$t,[t("div",ht,a(e.$t("address")),1),t("div",yt,a(e.employee[40]),1)]),t("div",gt,[t("div",qt,a(e.$t("preferredContactMethod")),1),t("div",kt,a(e.employee[58]),1)])],2)]),_:1})]),_:1}),l(be,{class:"text-right"},{default:n(()=>[e.onJobBoard?c("",!0):(d(),k(V,{key:0,onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"])),l(V,{onClick:e.save,color:"info",label:e.$t("continue")},null,8,["onClick","label"])]),_:1})])):c("",!0)]),_:1},8,["name","title","done"])}var Ct=ie(mt,[["render",Vt]]);const wt=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,Et=re({props:{title:String,step:Number,name:Number},setup(){const e=Ne(),s=ce(),h=ge(),{t:u}=Ce(),{relationshipOptions:S}=D(h),{savedEmergencyContacts:f}=D(fe()),{removeContact:o,addContact:b,updateContact:i,employeeData:T}=fe(),Q=M({name:"first",value:null}),F=M({name:"last",value:null}),L=M({name:"phone",value:null}),B=M({name:"relationship",value:null}),N=M([]),I=J(()=>{const r=f.value.concat(N.value);return r.sort(function(y,$){return y.editing&&!$.editing?-1:!y.editing&&$.editing?1:0}),r}),x=J(()=>I.value.filter(y=>y.editing).length>0);function ee(){const r={next:3};s.updateProfile(r)}function Z(){const r={next:1};s.updateProfile(r)}function te(){const r={3:I.value.length+1,6:"",7:"",8:"",11:"",12:"",16:"",editing:!0,new:!0,contact:null};N.value.push(r),console.log(I.value)}function oe(r){f.value[r].editing=!0}function le(r){const y=I.value[r];console.log(y),e.dialog({title:"Alert",message:`Are you sure you want to remove ${y[6]} ${y[7]}?`,cancel:!0,persistent:!0}).onOk(()=>{o(y[3])})}const U=R({relationship:R().required("Relationship is required.").nullable(),phone:q().matches(wt,{message:`${u("validPhoneIsRequired")}`}).length(10,{message:`${u("validPhoneIsRequired")}`}).required("Phone is required.").label(`${u("phoneNumber")}`),last:q().required().label(`${u("lastName")}`),first:q().required().label(`${u("firstName")}`)}).required();function K(r){const y=[Q.value,F.value,L.value,B.value];r?y.forEach($=>{$.name===r.name?$.value=r.message:$.value=null}):y.forEach($=>{$.value=null})}async function A(r,y){console.log(r);const $=I.value[y];try{await U.validate({relationship:r.contact,phone:r[16],last:r[7],first:r[6]}),$[11]=r.contact.value,$[12]=r.contact.label,$.editing=!1,K(),$.new?($.new=!1,b($),N.value.forEach((Y,W)=>{Y[3]===$[3]&&N.value.splice(W,1)})):i($)}catch({name:Y,path:W,errors:G,inner:se}){let X="";G[0]instanceof Object?X=G[0].message:X=G[0],K({name:W,message:X})}}function z(r){const y=I.value[r];console.log(y),y.new?N.value.forEach(($,Y)=>{$[3]===y[3]&&N.value.splice(Y,1)}):I.value[r].editing=!1}return{save:ee,back:Z,savedEmergencyContacts:f,allContacts:I,editing:x,relationshipOptions:S,editItem:oe,removeItem:le,saveItem:A,cancelEdit:z,addNewContactRow:te,addContact:b,updateContact:i,firstError:Q,lastError:F,phoneError:L,relationshipError:B,helpers:he,employeeData:T}}}),St={class:"col-12 col-md-4"},Nt={class:"text-primary"},Ut={class:"text-dark q-pl-sm"},It={class:"col-12 col-md-4"},Mt={class:"text-primary"},Pt={class:"text-dark q-pl-sm"},Ot={key:0,class:"text-body2 text-dark"},At={class:"row q-py-sm"},Rt={class:"col-12 col-md-6 text-left"},zt={key:0,class:"text-body2 text-primary text-italic q-pb-sm q-pl-md"},Dt=["id"],Qt={class:"col-12 col-md-4"},Ht={class:"text-primary"},Tt={class:"text-dark q-pl-sm"},Bt={class:"text-primary"},Yt={class:"text-dark q-pl-sm"},Ft={class:"text-primary"},Lt={class:"text-dark q-pl-sm"},jt={key:1,class:"items-center"},Jt=["onSubmit"],Zt={class:"row"},Kt={class:"col-12 col-md-3 q-pr-md"},Wt={class:"col-12 col-md-3 q-pr-md"},Gt={class:"col-12 col-md-3 q-pr-md"},Xt={class:"col-12 col-md-3"},_t={class:"row q-mt-md"},xt={class:"col text-right"};function eo(e,s,h,u,S,f){return d(),k(ye,{name:e.name,title:e.title},{default:n(()=>[t("div",null,[l(ue,{class:"q-px-xs"},{default:n(()=>[l(_,null,{default:n(()=>[t("div",{class:C(["text-dark",e.$q.screen.gt.sm?"text-h6":"text-body2"])},[ae(a(e.$q.screen.gt.sm?`${e.$t("personalContactInfo")}`:`${e.$t("personal")}`)+" ",1),l(V,{class:"q-ml-sm",round:"",size:e.$q.screen.gt.sm?"sm":"xs",color:"accent",icon:"edit"},null,8,["size"])],2),t("div",{class:C(["row q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[t("div",St,[t("div",Nt,a(e.$t("phoneNumber")),1),t("div",Ut,a(e.employeeData[25]),1)]),t("div",It,[t("div",Mt,a(e.$t("email")),1),t("div",Pt,a(e.employeeData[26]),1)])],2)]),_:1}),e.$q.screen.gt.sm?c("",!0):(d(),k(ne,{key:0})),e.editing?c("",!0):(d(),k(_,{key:1,class:C(e.$q.screen.lt.md?"q-px-xs":"")},{default:n(()=>[e.$q.screen.gt.sm?c("",!0):(d(),E("div",Ot,a(e.$t("emergencyContacts")),1)),t("div",At,[t("div",Rt,[l(V,{size:e.$q.screen.gt.sm?"md":"sm",color:"accent",label:(e.allContacts.length>0,e.$t("addEmergencyContact")),onClick:e.addNewContactRow,icon:"add"},null,8,["size","label","onClick"])])])]),_:1},8,["class"])),e.editing?(d(),k(ne,{key:2})):c("",!0),l(_,{class:C([e.editing?"q-pt-sm":"q-pt-none",e.$q.screen.gt.sm?"":"q-px-xs"])},{default:n(()=>[e.allContacts.length===0?(d(),E("div",zt,a(e.$t("addEmergencyContactRequired")),1)):c("",!0),(d(!0),E(Se,null,Ee(e.allContacts,(o,b)=>(d(),E("div",{id:o[3],key:o[3]},[l(ue,{class:"q-pa-sm",flat:""},{default:n(()=>[o.editing?c("",!0):(d(),E("div",{key:0,class:C(["row items-center",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[t("div",Qt,[t("div",null,[t("div",Ht,a(e.$t("name")),1),t("div",Tt,a(e.helpers.formatName(o[6]))+" "+a(e.helpers.formatName(o[7])),1)])]),t("div",{class:C(e.$q.screen.gt.sm?"col-3":"col-12 q-pt-sm")},[t("div",null,[t("div",Bt,a(e.$t("phoneNumber")),1),t("div",Yt,a(e.helpers.formatPhone(o[8])),1)])],2),t("div",{class:C(e.$q.screen.gt.sm?"col-3":"col-12 q-pt-sm")},[t("div",null,[t("div",Ft,a(e.$t("relationship")),1),t("div",Lt,a(o[12]),1)])],2),t("div",{class:C(e.$q.screen.gt.sm?"col-2 text-right":"col-12 q-pt-md text-right")},[t("div",null,[l(V,{size:"sm",round:"",onClick:i=>e.editItem(b),color:"secondary",icon:"edit",class:"q-mr-sm"},null,8,["onClick"]),l(V,{size:"sm",round:"",onClick:i=>e.removeItem(b),color:"primary",icon:"delete"},null,8,["onClick"])])],2)],2)),o.editing?(d(),E("div",jt,[t("form",{onSubmit:ve(i=>e.saveItem(o,b),["prevent"])},[t("div",Zt,[t("div",Kt,[l(O,{modelValue:o[6],"onUpdate:modelValue":i=>o[6]=i,dense:"",label:e.$t("firstName"),error:!!e.firstError.value,"bottom-slots":""},{error:n(()=>[ae(a(e.firstError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","error"])]),t("div",Wt,[l(O,{modelValue:o[7],"onUpdate:modelValue":i=>o[7]=i,dense:"",label:e.$t("lastName"),error:!!e.lastError.value,"bottom-slots":""},{error:n(()=>[ae(a(e.lastError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","error"])]),t("div",Gt,[l(O,{modelValue:o[16],"onUpdate:modelValue":i=>o[16]=i,dense:"",label:e.$t("phoneNumber"),error:!!e.phoneError.value,"bottom-slots":""},{error:n(()=>[ae(a(e.phoneError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","error"])]),t("div",Xt,[l(j,{behavior:"menu",position:"top middle",modelValue:o.contact,"onUpdate:modelValue":i=>o.contact=i,dense:"",label:e.$t("relationship"),options:e.relationshipOptions,error:!!e.relationshipError.value,"bottom-slots":""},{error:n(()=>[ae(a(e.relationshipError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","options","error"])])]),t("div",_t,[t("div",xt,[l(V,{onClick:i=>e.cancelEdit(b),color:"secondary",label:e.$t("cancel"),class:"q-mr-sm"},null,8,["onClick","label"]),l(V,{type:"submit",color:"info",label:e.$t("save")},null,8,["label"])])])],40,Jt)])):c("",!0)]),_:2},1024),b<e.allContacts.length-1?(d(),k(ne,{key:0})):c("",!0)],8,Dt))),128))]),_:1},8,["class"])]),_:1}),e.editing?c("",!0):(d(),k(be,{key:0,class:"text-right"},{default:n(()=>[l(V,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(V,{onClick:e.save,color:"info",label:e.$t("continue"),disabled:e.savedEmergencyContacts.length===0},null,8,["onClick","label","disabled"])]),_:1}))])]),_:1},8,["name","title"])}var to=ie(Et,[["render",eo]]);const oo=re({props:{title:String,step:Number,name:Number},setup(){const{t:e}=Ce(),s=De(),h=M(3),u=M(!1),S=Ne(),f=ce(),o=ge(),b=Fe(),i=fe(),{fetchVoluntaryForms:T}=o,{experienceOptions:Q,companyOptions:F,craftOptions:L,employmentOptions:B}=D(o),{hasAffirmative:N,hasVets:I,hasDisability:x,goToVoluntary:ee}=D(b),{savedHistory:Z}=D(i),{addHistory:te,updateHistory:oe,removeHistory:le,employeeData:U,updateEmployeeData:K}=i,A=M([]),{toggleLoader:z,profile:r}=f,{proceedToTest:y}=D(f),$=R({craft:R().required(`${e("selectACraft")}`).nullable(),experience:R().required(`${e("selectExperience")}`).nullable(),employment:R().required(`${e("selectEmploymentStatus")}`).nullable()}),{meta:Y,errors:W,handleSubmit:G}=qe({validationSchema:$,initialValues:{craft:r[40]?{value:r[40].value,label:r[40].label}:null,experience:U[53]?{value:U[53],label:U[54]}:null,employment:U[55]?{value:U[55],label:U[56]}:null}}),{value:se}=p("craft"),{value:X}=p("experience"),{value:g}=p("employment");Qe(r,()=>{r[40].value!==se.value.value&&(se.value={value:r[40].value,label:r[40].label})});const me=G(async m=>{const P={40:{value:m.craft.value,label:m.craft.label},42:{value:m.experience.value,label:m.experience.label},44:{value:m.employment.value,label:m.employment.label},39:{value:new Date}};if(ee.value){const w={next:x.value?6:N.value?7:I.value?8:0,values:P,completed:!0};z(!0),await T(),await f.updateProfile(w),await f.submitProfileToQB(),z(!1),s.push({name:"voluntary"})}else{const w={next:0,values:P,completed:!0};z(!0),await f.updateProfile(w),await f.submitProfileToQB(),y.value?(K({fields:{122:{value:8}}}),s.replace({name:"assessment"})):(s.replace({name:"thanks"}),z(!1))}}),H=J(()=>{const m=Z.value.concat(A.value);return m.sort(function(P,w){return P.editing&&!w.editing?-1:!P.editing&&w.editing?1:0}),m}),$e=J(()=>H.value.filter(P=>P.editing).length>0);function v(){const m={3:H.value.length+1,6:"",7:"",10:"",11:"",12:"",13:"",15:"",16:"",editing:!0,new:!0,company:null,craft:null};A.value.push(m)}function pe(){const m={next:4};f.updateProfile(m)}function ke(){const m={next:2};f.updateProfile(m)}function Ue(m){Z.value[m].editing=!0}function Ie(m){const P=H.value[m];console.log(P),S.dialog({title:`${e("alert")}`,message:`${e("areYouSureYouWantToRemove")}`,cancel:!0,persistent:!0}).onOk(()=>{le(P[3])})}function Me(m,P){const w=H.value[P];w[6]=m.company.value,w[7]=m.company.label,w[15]=m.craft.value,w[16]=m.craft.label,w.editing=!1,w.new?(w.new=!1,A.value.forEach((Ve,Ae)=>{Ve[3]===w[3]&&A.value.splice(Ae,1)}),te(w)):oe(w)}function Pe(m){const P=H.value[m];P.new?A.value.forEach((w,Ve)=>{w[3]===P[3]&&A.value.splice(Ve,1)}):H.value[m].editing=!1}function Oe(){u.value?(h.value=3,u.value=!1):(u.value=!0,h.value=H.value.length)}return{save:pe,back:ke,allHistory:H,addNewRow:v,editItem:Ue,removeItem:Ie,saveItem:Me,cancelEdit:Pe,editing:$e,date:Le,show:h,expanded:u,adjustRows:Oe,formMeta:Y,formErrors:W,submitUpdate:me,craft:se,experience:X,employment:g,experienceOptions:Q,companyOptions:F,craftOptions:L,employmentOptions:B}}}),lo={class:"text-body2 text-dark"},so={class:"row"},ao={class:"col-12 col-md-4 q-px-xs"},no={class:"text-caption"},ro={class:"col-12 col-md-4 q-px-xs"},io={class:"text-caption"},uo={class:"col-12 col-md-4 q-px-xs"},co={class:"text-caption"},mo={class:"text-body2 text-dark"},po={class:"row q-py-sm"},vo={class:"col-12 col-md-6"},fo={key:0,class:"text-body2 text-primary text-italic q-pb-sm q-pl-md"},bo=["id"],$o={class:"col-12 col-md-3"},ho={class:"text-primary"},yo={class:"text-dark q-pl-sm"},go={class:"text-primary"},qo={class:"text-dark q-pl-sm"},ko={class:"text-primary"},Vo={class:"text-dark q-pl-sm"},Co={class:"text-primary"},wo={class:"text-dark q-pl-sm"},Eo={class:"text-primary"},So={class:"text-dark q-pl-sm"},No={key:1,class:"items-center"},Uo=["onSubmit"],Io={class:"row"},Mo={class:"col-12 col-md-2 q-pr-md"},Po={class:"col-12 col-md-2 q-pr-md"},Oo={class:"col-12 col-md-2 q-pr-md"},Ao={class:"col-12 col-md-2 q-pr-md"},Ro={class:"col-12 col-md-2 q-pr-md"},zo={class:"col-12 col-md-2 q-pr-md"},Do={class:"row q-mt-md"},Qo={class:"col text-right"},Ho={class:"row q-pt-md"},To={key:0,class:"col-12 text-right"};function Bo(e,s,h,u,S,f){return d(),k(ye,{name:e.name,title:e.title,done:e.step>3},{default:n(()=>[t("div",null,[t("form",{onSubmit:s[3]||(s[3]=ve((...o)=>e.submitUpdate&&e.submitUpdate(...o),["prevent"]))},[l(ue,{class:"q-px-xs"},{default:n(()=>[l(_,{class:"q-pb-none q-mb-sm"},{default:n(()=>[t("div",lo,a(e.$t("applyingFor"))+":",1),t("div",so,[t("div",ao,[l(j,{behavior:"menu",position:"top middle",disable:!0,dense:"",modelValue:e.craft,"onUpdate:modelValue":s[0]||(s[0]=o=>e.craft=o),label:e.$t("primaryCraft"),options:e.craftOptions,error:!!e.formErrors.craft,"bottom-slots":""},{error:n(()=>[t("div",no,a(e.formErrors.craft),1)]),_:1},8,["modelValue","label","options","error"])]),t("div",ro,[l(j,{behavior:"menu",position:"top middle",dense:"",modelValue:e.experience,"onUpdate:modelValue":s[1]||(s[1]=o=>e.experience=o),label:e.$t("yearsOfExperience"),options:e.experienceOptions,error:!!e.formErrors.experience,"bottom-slots":""},{error:n(()=>[t("div",io,a(e.formErrors.experience),1)]),_:1},8,["modelValue","label","options","error"])]),t("div",uo,[l(j,{behavior:"menu",position:"top middle",dense:"",modelValue:e.employment,"onUpdate:modelValue":s[2]||(s[2]=o=>e.employment=o),label:e.$t("currentEmploymentStatus"),options:e.employmentOptions,error:!!e.formErrors.employment,"bottom-slots":""},{error:n(()=>[t("div",co,a(e.formErrors.employment),1)]),_:1},8,["modelValue","label","options","error"])])])]),_:1}),l(ne),e.editing?c("",!0):(d(),k(_,{key:0,class:C(e.$q.screen.lt.md?"q-px-xs":"")},{default:n(()=>[t("div",mo,a(e.$t("workHistory"))+":",1),t("div",po,[t("div",vo,[l(V,{size:e.$q.screen.gt.sm?"md":"sm",color:"accent",label:e.allHistory.length>0?`${e.$t("addMoreHistory")}`:`${e.$t("addEmploymentHistory")}`,onClick:e.addNewRow,icon:"add"},null,8,["size","label","onClick"])])])]),_:1},8,["class"])),e.editing?(d(),k(ne,{key:1})):c("",!0),l(_,{class:C([e.editing?"q-pt-sm":"q-pt-none",e.$q.screen.gt.sm?"":"q-px-xs"])},{default:n(()=>[e.allHistory.length===0?(d(),E("div",fo,a(e.$t("addYourEmploymentHistoryLater")),1)):c("",!0),(d(!0),E(Se,null,Ee(e.allHistory,(o,b)=>(d(),E("div",{id:o[3],key:b},[e.expanded||b+1<=e.show?(d(),k(ue,{key:0,class:"q-px-sm q-pt-xs q-pb-sm",flat:""},{default:n(()=>[o.editing?c("",!0):(d(),E("div",{key:0,class:C(["row items-center",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[t("div",$o,[t("div",null,[t("div",ho,a(e.$t("company")),1),t("div",yo,a(o[7]),1)])]),t("div",{class:C(e.$q.screen.gt.sm?"col-2":"hidden")},[t("div",null,[t("div",go,a(e.$t("location")),1),t("div",qo,a(o[10]!==""?o[10]:"N/A"),1)])],2),t("div",{class:C(e.$q.screen.gt.sm?"col-2":"col-12 q-pt-md")},[t("div",null,[t("div",ko,a(e.$t("jobTitle")),1),t("div",Vo,a(o[16])+" "+a(o[11]),1)])],2),t("div",{class:C(e.$q.screen.gt.sm?"col-2":"col-6 q-pt-md")},[t("div",null,[t("div",Co,a(e.$t("startDate")),1),t("div",wo,a(e.date.formatDate(o[12],"MM-DD-YYYY")),1)])],2),t("div",{class:C(e.$q.screen.gt.sm?"col-2":"col-6 q-pt-md")},[t("div",null,[t("div",Eo,a(e.$t("endDate")),1),t("div",So,a(e.date.formatDate(o[13],"MM-DD-YYYY")),1)])],2),t("div",{class:C(e.$q.screen.gt.sm?"col-1 text-right":"col-12 q-pt-md text-right")},[t("div",null,[l(V,{size:"sm",round:"",onClick:i=>e.editItem(b),color:"secondary",icon:"edit",class:"q-mr-sm"},null,8,["onClick"]),l(V,{size:"sm",round:"",onClick:i=>e.removeItem(b),color:"primary",icon:"delete"},null,8,["onClick"])])],2)],2)),o.editing?(d(),E("div",No,[t("form",{onSubmit:ve(i=>e.saveItem(o,b),["prevent"])},[t("div",Io,[t("div",Mo,[l(j,{modelValue:o.company,"onUpdate:modelValue":i=>o.company=i,dense:"",label:e.$t("company"),options:e.companyOptions},null,8,["modelValue","onUpdate:modelValue","label","options"])]),t("div",Po,[l(j,{modelValue:o.craft,"onUpdate:modelValue":i=>o.craft=i,dense:"",label:e.$t("craft"),options:e.craftOptions},null,8,["modelValue","onUpdate:modelValue","label","options"])]),t("div",Oo,[l(O,{modelValue:o[11],"onUpdate:modelValue":i=>o[11]=i,dense:"",label:e.$t("jobTitle")},null,8,["modelValue","onUpdate:modelValue","label"])]),t("div",Ao,[l(O,{modelValue:o[10],"onUpdate:modelValue":i=>o[10]=i,dense:"",label:e.$t("location")},null,8,["modelValue","onUpdate:modelValue","label"])]),t("div",Ro,[l(O,{type:"date",modelValue:o[12],"onUpdate:modelValue":i=>o[12]=i,dense:"",filled:"",hint:e.$t("startDate")},null,8,["modelValue","onUpdate:modelValue","hint"])]),t("div",zo,[l(O,{type:"date",modelValue:o[13],"onUpdate:modelValue":i=>o[13]=i,dense:"",filled:"",hint:e.$t("endDate")},null,8,["modelValue","onUpdate:modelValue","hint"])])]),t("div",Do,[t("div",Qo,[l(V,{onClick:i=>e.cancelEdit(b),color:"secondary",label:e.$t("cancel"),class:"q-mr-sm"},null,8,["onClick","label"]),l(V,{type:"submit",color:"info",label:e.$t("save")},null,8,["label"])])])],40,Uo)])):c("",!0)]),_:2},1024)):c("",!0),b<e.allHistory.length-1?(d(),k(ne,{key:1})):c("",!0)],8,bo))),128)),e.allHistory.length>e.show||e.expanded?(d(),k(ne,{key:1})):c("",!0),t("div",Ho,[e.allHistory.length>e.show||e.expanded?(d(),E("div",To,[l(V,{round:"",color:"secondary",onClick:e.adjustRows,icon:e.expanded?"expand_less":"expand_more"},{default:n(()=>[e.expanded?(d(),k(we,{key:0,anchor:"top middle"},{default:n(()=>[ae(a(e.$t("showLess")),1)]),_:1})):c("",!0),e.expanded?c("",!0):(d(),k(we,{key:1,anchor:"top middle"},{default:n(()=>[ae(a(e.$t("showMore")),1)]),_:1}))]),_:1},8,["onClick","icon"])])):c("",!0)])]),_:1},8,["class"])]),_:1}),e.editing?c("",!0):(d(),k(be,{key:0,class:"text-right"},{default:n(()=>[l(V,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(V,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1}))],32)])]),_:1},8,["name","title","done"])}var Yo=ie(oo,[["render",Bo]]);const Fo=re({components:{selectJob:We,personalInfo:Ct,emergencyContact:to,workHistory:Yo},setup(){const e=ce(),{resetProfile:s}=e,{step:h}=D(e);s();const u=M(null);return{step:h,jobSelection:u,jobOptions:[{label:"Default Job",value:0}]}}});function Lo(e,s,h,u,S,f){const o=de("select-job"),b=de("personal-info"),i=de("emergency-contact"),T=de("work-history");return d(),E("div",null,[l(Be,{modelValue:e.step,"onUpdate:modelValue":s[0]||(s[0]=Q=>e.step=Q),vertical:"",animated:"","done-color":"info","active-color":"dark","inactive-color":"secondary",class:C(e.$q.screen.lt.md?"q-px-none q-mx-none":"")},{default:n(()=>[l(o,{title:e.$t("selectAJob"),step:e.step,name:0,done:e.step>0},null,8,["title","step","done"]),l(b,{title:e.$t("personalInformation"),step:e.step,name:1,done:e.step>1},null,8,["title","step","done"]),l(i,{title:e.$t("contactInformation"),step:e.step,name:2,done:e.step>2},null,8,["title","step","done"]),l(T,{title:e.$t("employmentInformation"),step:e.step,name:3,done:e.step>3},null,8,["title","step","done"])]),_:1},8,["modelValue","class"])])}var jo=ie(Fo,[["render",Lo]]);const Jo=re({components:{profileStepper:jo},setup(){}});function Zo(e,s,h,u,S,f){const o=de("profile-stepper");return d(),E("div",null,[l(o)])}var Ko=ie(Jo,[["render",Zo]]);const Wo=re({components:{Profile:Ko},setup(){const e=M(0),s=ge(),{fetchFormOptions:h}=s,{formOptionsLoadingState:u}=D(s);return h(),{step:e,formOptionsLoadingState:u}}}),Go={key:0,class:"absolute-center"},Xo={key:1,class:"row"},_o={class:"col-12 q-pt-sm"},xo={class:"q-pl-sm"},el={class:"text-h6 text-dark"},tl={class:"text-body1 text-secondary text-italic"};function ol(e,s,h,u,S,f){const o=de("profile");return d(),k(Te,{style:{"max-width":"100vw"}},{default:n(()=>[e.formOptionsLoadingState?(d(),E("div",Go,[l(He,{color:"primary",size:"5em"})])):c("",!0),e.formOptionsLoadingState?c("",!0):(d(),E("div",Xo,[t("div",_o,[l(ue,{flat:""},{default:n(()=>[l(_,{class:C(e.$q.screen.lt.md?"q-px-xs":"")},{default:n(()=>[t("div",xo,[t("div",el,a(e.$t("completeApplication")),1),t("div",tl,a(e.$t("pleaseCompleteYourApplication")),1)])]),_:1},8,["class"]),l(_,null,{default:n(()=>[l(o)]),_:1})]),_:1})])]))]),_:1})}var Cl=ie(Wo,[["render",ol]]);export{Cl as default};
