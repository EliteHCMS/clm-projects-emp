import{k as S,_ as w,A as i,an as _,bi as l,d as t,cw as r,D as e,ab as o,bK as h,cz as q,c as m,B as g,F as j,aY as I,bk as B,bJ as E,bH as C,au as z,bI as F,cZ as L,r as O,bM as P,aZ as D,cy as U,bO as M,ao as k,y as A}from"./index.d1c181c3.js";import{Q as H}from"./QPage.e47b8ec6.js";import{u as T}from"./use-quasar.84fab411.js";import{u as J}from"./useQuerySaver.e863619d.js";import{u as K,q as W}from"./quickbase.ce853ee0.js";import{dayjs as f}from"./dayjs.bd173ce4.js";import{u as Z}from"./dataStore.b98c5e65.js";import{Q as x,d as G}from"./helpers.8f7ed831.js";import{Q as X}from"./QList.2f6b1f21.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./localForage.58931a6f.js";import"./i18n.f1b02bf1.js";import"./api.3303dbf0.js";const ee=S({props:{employee:Object,assignment:Object,release:Object},setup(s){return{dayjs:f}}}),se=e("div",{class:"text-primary text-h6 text-bold"},"Employee Information",-1),te={class:"row q-py-sm"},oe={class:"col-12 col-md-3"},ae=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Last Name")],-1),le={class:"text-body2 q-pl-md"},de={class:"col-12 col-md-3"},ne=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"First Name")],-1),ce={class:"text-body2 q-pl-md"},ie={class:"col-12 col-md-3"},re=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Last 4 Digits of SS#")],-1),me={class:"text-body2 q-pl-md"},_e={class:"col-12 col-md-3"},pe=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Payroll ID")],-1),ue={class:"text-body2 q-pl-md"},ve={class:"row q-py-sm"},ye={class:"col-12 col-md-3"},be=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Phone")],-1),he={class:"text-body2 q-pl-md"},fe={class:"col-12 col-md-3"},qe=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"First Day Worked")],-1),$e={class:"text-body2 q-pl-md"},xe={class:"col-12 col-md-3"},ge=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Last Day Worked")],-1),we={class:"text-body2 q-pl-md"},De={class:"col-12 col-md-3"},ke=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Effective Date")],-1),Se={class:"text-body2 q-pl-md"},Ne={class:"row q-py-sm"},Ce={class:"col-12 col-md-4"},Qe=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Job Site/ Location")],-1),Ve={class:"text-body2 q-pl-md"},Ye={class:"col-12 col-md-6"},Re=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Job Title")],-1),je={class:"text-body2 q-pl-md"},Ie={class:"col-12 col-md-2"},Be=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Pay Rate")],-1),Ee={class:"text-body2 q-pl-md"};function ze(s,d,p,a,v,y){return i(),_(q,null,{default:l(()=>[t(r,{class:"text-center q-py-sm"},{default:l(()=>[se]),_:1}),t(r,{class:"q-py-none"},{default:l(()=>[e("div",te,[e("div",oe,[ae,e("div",le,[e("span",null,o(s.employee[22]),1)])]),e("div",de,[ne,e("div",ce,[e("span",null,o(s.employee[20]),1)])]),e("div",ie,[re,e("div",me,[e("span",null,o(s.employee[188].substring(s.employee[188].length-4)),1)])]),e("div",_e,[pe,e("div",ue,[e("span",null,o(s.employee[208]!==""?s.employee[208]:"Not Available"),1)])])]),t(h),e("div",ve,[e("div",ye,[be,e("div",he,[e("span",null,o(s.employee[25]),1)])]),e("div",fe,[qe,e("div",$e,[e("span",null,o(s.dayjs(s.employee[397].$d).format("MM/DD/YYYY")),1)])]),e("div",xe,[ge,e("div",we,[e("span",null,o(s.dayjs(s.release[36].$d).format("MM/DD/YYYY")),1)])]),e("div",De,[ke,e("div",Se,[e("span",null,o(s.dayjs(s.release[36].$d).format("MM/DD/YYYY")),1)])])]),t(h),e("div",Ne,[e("div",Ce,[Qe,e("div",Ve,[e("span",null,o(s.assignment[141]),1)])]),e("div",Ye,[Re,e("div",je,[e("span",null,o(s.assignment[20]),1)])]),e("div",Ie,[Be,e("div",Ee,[e("span",null,"$ "+o(s.assignment[116].toFixed(2)),1)])])])]),_:1})]),_:1})}var Fe=w(ee,[["render",ze]]);const Le=S({props:{data:Object},setup(s){return{evaluation:m(()=>s.data),convertScore:a=>({1:"Strongly Disagreed",2:"Disagreed",3:"Neutral",4:"Agreed",5:"Strongly Agreed",0:"Did Not Know"})[a]}}}),Oe=e("div",{class:"text-primary text-h6 text-bold"},"Employee Performance Evaluation",-1),Pe={class:"row q-py-sm"},Ue={class:"col-12 col-md-3"},Me=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Has good attendance")],-1),Ae={class:"text-body2 q-pl-md"},He={class:"q-mr-md"},Te={class:"col-12 col-md-3"},Je=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Has a good attitude")],-1),Ke={class:"text-body2 q-pl-md"},We={class:"q-mr-md"},Ze={class:"col-12 col-md-3"},Ge=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Can do their job")],-1),Xe={class:"text-body2 q-pl-md"},es={class:"q-mr-md"},ss={class:"col-12 col-md-3"},ts=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Can be promoted in the future")],-1),os={class:"text-body2 q-pl-md"},as={class:"q-mr-md"};function ls(s,d,p,a,v,y){return i(),_(q,null,{default:l(()=>[t(r,{class:"text-center q-py-sm"},{default:l(()=>[Oe]),_:1}),t(r,{class:"q-py-none"},{default:l(()=>[e("div",Pe,[e("div",Ue,[Me,e("div",Ae,[e("span",He,o(s.convertScore(s.evaluation.attendance)),1),t(x,{modelValue:s.evaluation.attendance,"onUpdate:modelValue":d[0]||(d[0]=n=>s.evaluation.attendance=n),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])]),e("div",Te,[Je,e("div",Ke,[e("span",We,o(s.convertScore(s.evaluation.attitude)),1),t(x,{modelValue:s.evaluation.attitude,"onUpdate:modelValue":d[1]||(d[1]=n=>s.evaluation.attitude=n),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])]),e("div",Ze,[Ge,e("div",Xe,[e("span",es,o(s.convertScore(s.evaluation.capable)),1),t(x,{modelValue:s.evaluation.capable,"onUpdate:modelValue":d[2]||(d[2]=n=>s.evaluation.capable=n),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])]),e("div",ss,[ts,e("div",os,[e("span",as,o(s.convertScore(s.evaluation.promotion)),1),t(x,{modelValue:s.evaluation.promotion,"onUpdate:modelValue":d[3]||(d[3]=n=>s.evaluation.promotion=n),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])])])]),_:1})]),_:1})}var ds=w(Le,[["render",ls]]);const ns=S({props:{release:Object,employee:Object},setup(s){return{deductNeeded:m(()=>!s.release[72]&&f.duration(f(s.release[36].$d).diff(f(s.employee[397].$d))).asDays()<30?"Yes":"No"),downloadFile:G}}}),cs=e("div",{class:"text-primary text-h6 text-bold"},"Departure Information",-1),is={class:"row"},rs={class:"col-12 col-md-9"},ms={class:"row q-py-sm"},_s={class:"col-12 col-md-6"},ps={class:"text-body2"},us=e("span",{class:"text-bold q-mr-md"},"Return Company Equipment and/or PPE",-1),vs={class:"col-12 col-md-6"},ys={class:"text-body2"},bs=e("span",{class:"text-bold q-mr-md"},"Payroll Deduction Needed",-1),hs={class:"row q-py-sm"},fs={class:"col-12"},qs={class:"text-body2"},$s=e("span",{class:"text-bold q-mr-md"},"Reason",-1),xs=e("div",{class:"row q-py-sm"},[e("div",{class:"col-12"},[e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Recommendation for Rehire / Reassignment"),e("span",null,"Need to add this to form")])])],-1),gs={class:"row q-py-sm"},ws={class:"col-12"},Ds=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Comments")],-1),ks={class:"text-body2 text-italic q-pl-md"},Ss={class:"col-12 col-md-3 q-pl-sm"},Ns=e("div",{class:"text-body2 text-bold text-center q-mb-sm"},"Supporting Documents",-1),Cs={key:1,class:"text-body2 text-italic text-center"},Qs=e("span",null,"No Supporting Documents",-1),Vs=[Qs];function Ys(s,d,p,a,v,y){return i(),_(q,null,{default:l(()=>[t(r,{class:"text-center q-py-sm"},{default:l(()=>[cs]),_:1}),t(r,{class:"q-py-none"},{default:l(()=>[e("div",is,[e("div",rs,[e("div",ms,[e("div",_s,[e("div",ps,[us,e("span",null,o(s.release[72]?"Yes":"No"),1)])]),e("div",vs,[e("div",ys,[bs,e("span",null,o(s.deductNeeded),1)])])]),t(h),e("div",hs,[e("div",fs,[e("div",qs,[$s,e("span",null,o(s.release[32]),1)])])]),t(h),xs,t(h),e("div",gs,[e("div",ws,[Ds,e("div",ks,[e("span",null,o(s.release[60]===""?"No Comments":s.release[60]),1)])])])]),e("div",Ss,[Ns,s.release[70].length>0?(i(),_(X,{key:0},{default:l(()=>[(i(!0),g(j,null,I(s.release[70],(n,u)=>B((i(),_(E,{key:u,clickable:"",class:"text-body2",onClick:c=>s.downloadFile({tableId:"bsstsai5d",recordId:n[3],fieldId:6,versionNumber:1,name:n[7]})},{default:l(()=>[t(C,null,{default:l(()=>[z(o(u+1)+". "+o(n[7]),1)]),_:2},1024),t(C,{avatar:""},{default:l(()=>[t(F,{color:"info",name:"file_download"})]),_:1})]),_:2},1032,["onClick"])),[[L]])),128))]),_:1})):(i(),g("div",Cs,Vs))])])]),_:1})]),_:1})}var Rs=w(ns,[["render",Ys]]);const js={name:"View Release",components:{EmployeeInformation:Fe,Evaluation:ds,DepartureInformation:Rs},setup(){const s=O(!1),d=T(),p=P(),{capitalize:a}=A,{userData:v,getUserType:y}=K(),{getReleases:n,setReleases:u}=Z(),c=m(()=>n(p.params.release)),N=m(()=>c.value?c.value[66]:null),Q=m(()=>c.value?c.value[67]:null),b=m(()=>c.value[59]&&c.value[59][0]?c.value[59][0]:null),V=m(()=>{const{data:$}=b.value?b.value:{data:null};return $}),Y=m(()=>c.value?c.value[38]:null),R=m(()=>b.value&&b.value[44]?b.value[44]:null);return(async()=>{if(d.loading.show(),!n(p.params.release)){const{data:$}=await W.fetchFromHiringApp({fields:[J({type:"releases",query:"",id:p.params.release})]});u({id:$[3],data:$})}d.loading.hide()})(),{release:c,employee:N,assignment:Q,evaluation:V,evaluator:R,getUserType:y,fab:s,dayjs:f,submitter:Y,capitalize:a}}},Is={class:"q-px-sm"},Bs={class:"row q-py-sm"},Es={class:"col-12 col-md-3"},zs=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Submitted By")],-1),Fs={class:"text-body2 q-pl-md"},Ls={class:"col-12 col-md-3"},Os=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Evaluated By")],-1),Ps={class:"text-body2 q-pl-md"},Us={key:0},Ms={key:1},As=e("div",{class:"col-12 col-md-3"},[e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Reviewed By")]),e("div",{class:"text-body2 q-pl-md"},[e("span",null,"Need to Capture")])],-1);function Hs(s,d,p,a,v,y){const n=D("employee-information"),u=D("evaluation"),c=D("departure-information");return i(),_(H,{style:{"max-width":"100vw"}},{default:l(()=>[e("div",Is,[a.release?(i(),_(q,{key:0,flat:"",class:"text-dark"},{default:l(()=>[s.$route.name==="view-release"?(i(),_(U,{key:0,class:"q-pb-xs",align:"right"},{default:l(()=>[t(M,{icon:"close",label:"Close",color:"dark",onClick:d[0]||(d[0]=N=>a.getUserType==="QuickBase User"?s.window.close():s.$router.replace({name:"employees"}))})]),_:1})):k("",!0),t(r,{class:"q-pb-sm"},{default:l(()=>[t(n,{assignment:a.assignment,employee:a.employee,release:a.release},null,8,["assignment","employee","release"])]),_:1}),a.evaluation?(i(),_(r,{key:1,class:"q-pb-sm"},{default:l(()=>[t(u,{data:a.evaluation},null,8,["data"])]),_:1})):k("",!0),t(r,{class:"q-pb-sm"},{default:l(()=>[t(c,{employee:a.employee,release:a.release},null,8,["employee","release"])]),_:1}),t(r,{class:"q-pb-sm"},{default:l(()=>[t(q,null,{default:l(()=>[t(r,{class:"q-py-none"},{default:l(()=>[e("div",Bs,[e("div",Es,[zs,e("div",Fs,[e("span",null,o(a.submitter[37])+", "+o(a.submitter[35]),1)])]),e("div",Ls,[Os,e("div",Ps,[a.evaluator?(i(),g("span",Us,o(a.capitalize(a.evaluator[22].toLowerCase()))+", "+o(a.capitalize(a.evaluator[20].toLowerCase())),1)):(i(),g("span",Ms,"Not Specified"))])]),As])]),_:1})]),_:1})]),_:1})]),_:1})):k("",!0)])]),_:1})}var ct=w(js,[["render",Hs]]);export{ct as default};
