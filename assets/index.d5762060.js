import{k as w,_ as q,A as l,an as r,bi as d,d as o,cw as i,D as s,ab as t,bK as _,cz as h,c as u,B as $,F as R,aY as E,bk as L,bJ as Q,bH as C,au as V,bI as M,cZ as O,r as j,bM as W,w as K,aZ as g,cy as Z,bO as I,ao as k,y as G}from"./index.61fe6e1c.js";import{Q as X}from"./QPage.bcf9b23c.js";import{u as ss}from"./use-quasar.4ee78fe6.js";import{u as es}from"./useQuerySaver.e863619d.js";import{u as ts,q as os}from"./quickbase.7f66a5fd.js";import{dayjs as b}from"./dayjs.07775a6d.js";import{u as as}from"./dataStore.116b3066.js";import{Q as S,d as B}from"./helpers.79f8082e.js";import{Q as F}from"./QList.ecce4ac7.js";import{d as z}from"./decode.593c6ccc.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./localForage.81cbb332.js";import"./i18n.b5aeee55.js";import"./api.75a5bd03.js";const ds=w({props:{employee:Object,assignment:Object,release:Object},setup(e){return{dayjs:b}}}),ls=s("div",{class:"text-primary text-h6 text-bold"},"Employee Information",-1),ns={class:"row q-py-sm"},is={class:"col-12 col-md-3"},cs=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Last Name")],-1),rs={class:"text-body2 q-pl-md"},ms={class:"col-12 col-md-3"},_s=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"First Name")],-1),ps={class:"text-body2 q-pl-md"},us={class:"col-12 col-md-3"},vs=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Last 4 Digits of SS#")],-1),ys={class:"text-body2 q-pl-md"},hs={class:"col-12 col-md-3"},bs=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Payroll ID")],-1),$s={class:"text-body2 q-pl-md"},fs={class:"row q-py-sm"},qs={class:"col-12 col-md-3"},xs=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Phone")],-1),gs={class:"text-body2 q-pl-md"},ws={class:"col-12 col-md-3"},Ds=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"First Day Worked")],-1),Ns={class:"text-body2 q-pl-md"},ks={class:"col-12 col-md-3"},Ss=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Last Day Worked")],-1),Cs={class:"text-body2 q-pl-md"},Ys={class:"col-12 col-md-3"},Ps=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Effective Date")],-1),js={class:"text-body2 q-pl-md"},Is={class:"row q-py-sm"},Rs={class:"col-12 col-md-4"},Es=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Job Site/ Location")],-1),Ls={class:"text-body2 q-pl-md"},Qs={class:"col-12 col-md-6"},Vs=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Job Title")],-1),Ms={class:"text-body2 q-pl-md"},Os={class:"col-12 col-md-2"},Bs=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Pay Rate")],-1),Fs={class:"text-body2 q-pl-md"};function zs(e,n,p,a,v,f){return l(),r(h,null,{default:d(()=>[o(i,{class:"text-center q-py-sm"},{default:d(()=>[ls]),_:1}),o(i,{class:"q-py-none"},{default:d(()=>[s("div",ns,[s("div",is,[cs,s("div",rs,[s("span",null,t(e.employee[22]),1)])]),s("div",ms,[_s,s("div",ps,[s("span",null,t(e.employee[20]),1)])]),s("div",us,[vs,s("div",ys,[s("span",null,t(e.employee[188].substring(e.employee[188].length-4)),1)])]),s("div",hs,[bs,s("div",$s,[s("span",null,t(e.employee[208]!==""?e.employee[208]:"Not Available"),1)])])]),o(_),s("div",fs,[s("div",qs,[xs,s("div",gs,[s("span",null,t(e.employee[25]),1)])]),s("div",ws,[Ds,s("div",Ns,[s("span",null,t(e.dayjs(e.employee[397].$d).format("MM/DD/YYYY")),1)])]),s("div",ks,[Ss,s("div",Cs,[s("span",null,t(e.dayjs(e.release[36].$d).format("MM/DD/YYYY")),1)])]),s("div",Ys,[Ps,s("div",js,[s("span",null,t(e.dayjs(e.release[36].$d).format("MM/DD/YYYY")),1)])])]),o(_),s("div",Is,[s("div",Rs,[Es,s("div",Ls,[s("span",null,t(e.assignment[141]),1)])]),s("div",Qs,[Vs,s("div",Ms,[s("span",null,t(e.assignment[20]),1)])]),s("div",Os,[Bs,s("div",Fs,[s("span",null,"$ "+t(e.assignment[116].toFixed(2)),1)])])])]),_:1})]),_:1})}var As=q(ds,[["render",zs]]);const Hs=w({props:{data:Object},setup(e){return{evaluation:u(()=>e.data),convertScore:a=>({1:"Strongly Disagreed",2:"Disagreed",3:"Neutral",4:"Agreed",5:"Strongly Agreed",0:"Did Not Know"})[a]}}}),Ts=s("div",{class:"text-primary text-h6 text-bold"},"Employee Performance Evaluation",-1),Us={class:"row q-py-sm"},Js={class:"col-12 col-md-3"},Ws=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Has good attendance")],-1),Ks={class:"text-body2 q-pl-md"},Zs={class:"q-mr-md"},Gs={class:"col-12 col-md-3"},Xs=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Has a good attitude")],-1),se={class:"text-body2 q-pl-md"},ee={class:"q-mr-md"},te={class:"col-12 col-md-3"},oe=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Can do their job")],-1),ae={class:"text-body2 q-pl-md"},de={class:"q-mr-md"},le={class:"col-12 col-md-3"},ne=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Can be promoted in the future")],-1),ie={class:"text-body2 q-pl-md"},ce={class:"q-mr-md"};function re(e,n,p,a,v,f){return l(),r(h,null,{default:d(()=>[o(i,{class:"text-center q-py-sm"},{default:d(()=>[Ts]),_:1}),o(i,{class:"q-py-none"},{default:d(()=>[s("div",Us,[s("div",Js,[Ws,s("div",Ks,[s("span",Zs,t(e.convertScore(e.evaluation.attendance)),1),o(S,{modelValue:e.evaluation.attendance,"onUpdate:modelValue":n[0]||(n[0]=c=>e.evaluation.attendance=c),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])]),s("div",Gs,[Xs,s("div",se,[s("span",ee,t(e.convertScore(e.evaluation.attitude)),1),o(S,{modelValue:e.evaluation.attitude,"onUpdate:modelValue":n[1]||(n[1]=c=>e.evaluation.attitude=c),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])]),s("div",te,[oe,s("div",ae,[s("span",de,t(e.convertScore(e.evaluation.capable)),1),o(S,{modelValue:e.evaluation.capable,"onUpdate:modelValue":n[2]||(n[2]=c=>e.evaluation.capable=c),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])]),s("div",le,[ne,s("div",ie,[s("span",ce,t(e.convertScore(e.evaluation.promotion)),1),o(S,{modelValue:e.evaluation.promotion,"onUpdate:modelValue":n[3]||(n[3]=c=>e.evaluation.promotion=c),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])])])]),_:1})]),_:1})}var me=q(Hs,[["render",re]]);const _e=w({props:{release:Object,employee:Object},setup(e){return{deductNeeded:u(()=>!e.release[72]&&b.duration(b(e.release[36].$d).diff(b(e.employee[397].$d))).asDays()<30?"Yes":"No"),downloadFile:B,decodeHTML:z}}}),pe=s("div",{class:"text-primary text-h6 text-bold"},"Departure Information",-1),ue={class:"row"},ve={class:"col-12 col-md-9"},ye={class:"row q-py-sm"},he={class:"col-12 col-md-6"},be={class:"text-body2"},$e=s("span",{class:"text-bold q-mr-md"},"Return Company Equipment and/or PPE",-1),fe={class:"col-12 col-md-6"},qe={class:"text-body2"},xe=s("span",{class:"text-bold q-mr-md"},"Payroll Deduction Needed",-1),ge={class:"row q-py-sm"},we={class:"col-12"},De={class:"text-body2"},Ne=s("span",{class:"text-bold q-mr-md"},"Reason",-1),ke=s("div",{class:"row q-py-sm"},[s("div",{class:"col-12"},[s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Recommendation for Rehire / Reassignment"),s("span",null,"Need to add this to form")])])],-1),Se={class:"row q-py-sm"},Ce={class:"col-12"},Ye=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Comments")],-1),Pe={class:"text-body2 text-italic q-pl-md"},je={class:"col-12 col-md-3 q-pl-sm"},Ie=s("div",{class:"text-body2 text-bold text-center q-mb-sm"},"Supporting Documents",-1),Re={key:1,class:"text-body2 text-italic text-center"},Ee=s("span",null,"No Supporting Documents",-1),Le=[Ee];function Qe(e,n,p,a,v,f){return l(),r(h,null,{default:d(()=>[o(i,{class:"text-center q-py-sm"},{default:d(()=>[pe]),_:1}),o(i,{class:"q-py-none"},{default:d(()=>[s("div",ue,[s("div",ve,[s("div",ye,[s("div",he,[s("div",be,[$e,s("span",null,t(e.release[72]?"Yes":"No"),1)])]),s("div",fe,[s("div",qe,[xe,s("span",null,t(e.deductNeeded),1)])])]),o(_),s("div",ge,[s("div",we,[s("div",De,[Ne,s("span",null,t(e.release[32]),1)])])]),o(_),ke,o(_),s("div",Se,[s("div",Ce,[Ye,s("div",Pe,[s("span",null,t(e.release[60]===""?"No Comments":e.decodeHTML(e.release[60])),1)])])])]),s("div",je,[Ie,e.release[70].length>0?(l(),r(F,{key:0},{default:d(()=>[(l(!0),$(R,null,E(e.release[70],(c,y)=>L((l(),r(Q,{key:y,clickable:"",class:"text-body2",onClick:D=>e.downloadFile({tableId:"bsstsai5d",recordId:c[3],fieldId:6,versionNumber:1,name:c[7]})},{default:d(()=>[o(C,null,{default:d(()=>[V(t(y+1)+". "+t(c[7]),1)]),_:2},1024),o(C,{avatar:""},{default:d(()=>[o(M,{color:"info",name:"file_download"})]),_:1})]),_:2},1032,["onClick"])),[[O]])),128))]),_:1})):(l(),$("div",Re,Le))])])]),_:1})]),_:1})}var Ve=q(_e,[["render",Qe]]);const Me=w({props:{employee:Object,assignment:Object,release:Object},setup(e){return{dayjs:b}}}),Oe=s("div",{class:"text-h6 text-bold"},"Employee Information",-1),Be={class:"row q-py-sm"},Fe={class:"col-3"},ze=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Last Name")],-1),Ae={class:"text-body2 q-pl-md"},He={class:"col-3"},Te=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"First Name")],-1),Ue={class:"text-body2 q-pl-md"},Je={class:"col-3"},We=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Last 4 Digits of SS#")],-1),Ke={class:"text-body2 q-pl-md"},Ze={class:"col-3"},Ge=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Payroll ID")],-1),Xe={class:"text-body2 q-pl-md"},st={class:"row q-py-sm"},et={class:"col-3"},tt=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Phone")],-1),ot={class:"text-body2 q-pl-md"},at={class:"col-3"},dt=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"First Day Worked")],-1),lt={class:"text-body2 q-pl-md"},nt={class:"col-3"},it=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Last Day Worked")],-1),ct={class:"text-body2 q-pl-md"},rt={class:"col-3"},mt=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Effective Date")],-1),_t={class:"text-body2 q-pl-md"},pt={class:"row q-py-sm"},ut={class:"col-4"},vt=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Job Site/ Location")],-1),yt={class:"text-body2 q-pl-md"},ht={class:"col-6"},bt=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Job Title")],-1),$t={class:"text-body2 q-pl-md"},ft={class:"col-2"},qt=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Pay Rate")],-1),xt={class:"text-body2 q-pl-md"};function gt(e,n,p,a,v,f){return l(),r(h,{flat:""},{default:d(()=>[o(i,{class:"q-py-sm"},{default:d(()=>[Oe]),_:1}),o(i,{class:"q-py-none"},{default:d(()=>[s("div",Be,[s("div",Fe,[ze,s("div",Ae,[s("span",null,t(e.employee[22]),1)])]),s("div",He,[Te,s("div",Ue,[s("span",null,t(e.employee[20]),1)])]),s("div",Je,[We,s("div",Ke,[s("span",null,t(e.employee[188].substring(e.employee[188].length-4)),1)])]),s("div",Ze,[Ge,s("div",Xe,[s("span",null,t(e.employee[208]!==""?e.employee[208]:"Not Available"),1)])])]),o(_),s("div",st,[s("div",et,[tt,s("div",ot,[s("span",null,t(e.employee[25]),1)])]),s("div",at,[dt,s("div",lt,[s("span",null,t(e.dayjs(e.employee[397].$d).format("MM/DD/YYYY")),1)])]),s("div",nt,[it,s("div",ct,[s("span",null,t(e.dayjs(e.release[36].$d).format("MM/DD/YYYY")),1)])]),s("div",rt,[mt,s("div",_t,[s("span",null,t(e.dayjs(e.release[36].$d).format("MM/DD/YYYY")),1)])])]),o(_),s("div",pt,[s("div",ut,[vt,s("div",yt,[s("span",null,t(e.assignment[141]),1)])]),s("div",ht,[bt,s("div",$t,[s("span",null,t(e.assignment[20]),1)])]),s("div",ft,[qt,s("div",xt,[s("span",null,"$ "+t(e.assignment[116].toFixed(2)),1)])])])]),_:1})]),_:1})}var wt=q(Me,[["render",gt]]);const Dt=w({props:{data:Object},setup(e){return{evaluation:u(()=>e.data),convertScore:a=>({1:"Strongly Disagreed",2:"Disagreed",3:"Neutral",4:"Agreed",5:"Strongly Agreed",0:"Did Not Know"})[a]}}}),Nt=s("div",{class:"text-h6 text-bold"},"Employee Performance Evaluation",-1),kt={class:"row q-py-sm"},St={class:"col-3"},Ct=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Has good attendance")],-1),Yt={class:"text-body2 q-pl-md"},Pt={class:"q-mr-md"},jt={class:"col-3"},It=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Has a good attitude")],-1),Rt={class:"text-body2 q-pl-md"},Et={class:"q-mr-md"},Lt={class:"col-3"},Qt=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Can do their job")],-1),Vt={class:"text-body2 q-pl-md"},Mt={class:"q-mr-md"},Ot={class:"col-3"},Bt=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Can be promoted in the future")],-1),Ft={class:"text-body2 q-pl-md"},zt={class:"q-mr-md"};function At(e,n,p,a,v,f){return l(),r(h,{flat:"",class:"q-my-none q-py-none"},{default:d(()=>[o(i,{class:"q-py-sm"},{default:d(()=>[Nt]),_:1}),o(i,{class:"q-py-none"},{default:d(()=>[s("div",kt,[s("div",St,[Ct,s("div",Yt,[s("span",Pt,t(e.evaluation.attendance)+" / 5 - "+t(e.convertScore(e.evaluation.attendance)),1)])]),s("div",jt,[It,s("div",Rt,[s("span",Et,t(e.evaluation.attitude)+" / 5 - "+t(e.convertScore(e.evaluation.attitude)),1)])]),s("div",Lt,[Qt,s("div",Vt,[s("span",Mt,t(e.evaluation.capable)+" / 5 - "+t(e.convertScore(e.evaluation.capable)),1)])]),s("div",Ot,[Bt,s("div",Ft,[s("span",zt,t(e.evaluation.promotion)+" / 5 - "+t(e.convertScore(e.evaluation.promotion)),1)])])])]),_:1})]),_:1})}var Ht=q(Dt,[["render",At]]);const Tt=w({props:{release:Object,employee:Object},setup(e){return{deductNeeded:u(()=>!e.release[72]&&b.duration(b(e.release[36].$d).diff(b(e.employee[397].$d))).asDays()<30?"Yes":"No"),downloadFile:B,decodeHTML:z}}}),Ut=s("div",{class:"text-h6 text-bold"},"Departure Information",-1),Jt={class:"row"},Wt={class:"col-9"},Kt={class:"row q-py-sm"},Zt={class:"col-6"},Gt={class:"text-body2"},Xt=s("span",{class:"text-bold q-mr-md"},"Return Company Equipment and/or PPE",-1),so={class:"col-6"},eo={class:"text-body2"},to=s("span",{class:"text-bold q-mr-md"},"Payroll Deduction Needed",-1),oo={class:"row q-py-sm"},ao={class:"col-12"},lo={class:"text-body2"},no=s("span",{class:"text-bold q-mr-md"},"Reason",-1),io=s("div",{class:"row q-py-sm"},[s("div",{class:"col-12"},[s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Recommendation for Rehire / Reassignment"),s("span",null,"Need to add this to form")])])],-1),co={class:"row q-py-sm"},ro={class:"col-12"},mo=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Comments")],-1),_o={class:"text-body2 text-italic q-pl-md"},po={class:"col-3 q-pl-sm"},uo=s("div",{class:"text-body2 text-bold text-center q-mb-sm"},"Supporting Documents",-1),vo={key:1,class:"text-body2 text-italic text-center"},yo=s("span",null,"No Supporting Documents",-1),ho=[yo];function bo(e,n,p,a,v,f){return l(),r(h,{flat:""},{default:d(()=>[o(i,{class:"q-py-sm"},{default:d(()=>[Ut]),_:1}),o(i,{class:"q-py-none"},{default:d(()=>[s("div",Jt,[s("div",Wt,[s("div",Kt,[s("div",Zt,[s("div",Gt,[Xt,s("span",null,t(e.release[72]?"Yes":"No"),1)])]),s("div",so,[s("div",eo,[to,s("span",null,t(e.deductNeeded),1)])])]),o(_),s("div",oo,[s("div",ao,[s("div",lo,[no,s("span",null,t(e.release[32]),1)])])]),o(_),io,o(_),s("div",co,[s("div",ro,[mo,s("div",_o,[s("span",null,t(e.release[60]===""?"No Comments":e.decodeHTML(e.release[60])),1)])])])]),s("div",po,[uo,e.release[70].length>0?(l(),r(F,{key:0},{default:d(()=>[(l(!0),$(R,null,E(e.release[70],(c,y)=>L((l(),r(Q,{key:y,clickable:"",class:"text-body2",onClick:D=>e.downloadFile({tableId:"bsstsai5d",recordId:c[3],fieldId:6,versionNumber:1,name:c[7]})},{default:d(()=>[o(C,null,{default:d(()=>[V(t(y+1)+". "+t(c[7]),1)]),_:2},1024),o(C,{avatar:""},{default:d(()=>[o(M,{color:"info",name:"file_download"})]),_:1})]),_:2},1032,["onClick"])),[[O]])),128))]),_:1})):(l(),$("div",vo,ho))])])]),_:1})]),_:1})}var $o=q(Tt,[["render",bo]]);const fo={name:"View Release",directives:{},components:{EmployeeInformation:As,Evaluation:me,DepartureInformation:Ve,PrintDepartureInformation:$o,PrintEmployeeInformation:wt,PrintEvaluation:Ht},setup(){const e=j(!1),n=j(!1),p=ss(),a=W(),{capitalize:v}=G,{userData:f,getUserType:c}=ts(),{getReleases:y,setReleases:D}=as(),m=u(()=>y(a.params.release)),Y=u(()=>m.value?m.value[66]:null),P=u(()=>m.value?m.value[67]:null),x=u(()=>m.value[59]&&m.value[59][0]?m.value[59][0]:null),A=u(()=>{const{data:N}=x.value?x.value:{data:null};return N}),H=u(()=>m.value?m.value[38]:null),T=u(()=>x.value&&x.value[44]?x.value[44]:null),U=async()=>{if(p.loading.show(),!y(a.params.release)){const{data:N}=await os.fetchFromHiringApp({fields:[es({type:"releases",query:"",id:a.params.release})]});D({id:N[3],data:N})}p.loading.hide()},J=()=>{e.value=!0};return K(e,(N,zo)=>{e.value&&setTimeout(()=>{print(),setTimeout(()=>{e.value=!1},500)},200)}),U(),{release:m,employee:Y,assignment:P,evaluation:A,evaluator:T,getUserType:c,fab:n,dayjs:b,submitter:H,capitalize:v,showPrint:e,printPage:J}}},qo={class:"q-px-sm"},xo={class:"row q-py-sm"},go={class:"col-12 col-md-3"},wo=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Submitted By")],-1),Do={class:"text-body2 q-pl-md"},No={class:"col-12 col-md-3"},ko=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Evaluated By")],-1),So={class:"text-body2 q-pl-md"},Co={key:0},Yo={key:1},Po=s("div",{class:"col-12 col-md-3"},[s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Reviewed By")]),s("div",{class:"text-body2 q-pl-md"},[s("span",null,"Need to Capture")])],-1),jo={class:"row q-py-sm"},Io={class:"col-3"},Ro=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Submitted By")],-1),Eo={class:"text-body2 q-pl-md"},Lo={class:"col-3"},Qo=s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Evaluated By")],-1),Vo={class:"text-body2 q-pl-md"},Mo={key:0},Oo={key:1},Bo=s("div",{class:"col-3"},[s("div",{class:"text-body2"},[s("span",{class:"text-bold q-mr-md"},"Reviewed By")]),s("div",{class:"text-body2 q-pl-md"},[s("span",null,"Need to Capture")])],-1);function Fo(e,n,p,a,v,f){const c=g("employee-information"),y=g("evaluation"),D=g("departure-information"),m=g("print-employee-information"),Y=g("print-evaluation"),P=g("print-departure-information");return l(),r(X,{style:{"max-width":"100vw"}},{default:d(()=>[s("div",qo,[a.release&&!a.showPrint?(l(),r(h,{key:0,flat:"",class:"text-dark"},{default:d(()=>[e.$route.name==="view-release"?(l(),r(Z,{key:0,class:"q-pb-xs print-hide",align:"right"},{default:d(()=>[o(I,{icon:"print",label:"Print",color:"info",onClick:a.printPage},null,8,["onClick"]),o(I,{icon:"close",label:"Close",color:"dark",onClick:n[0]||(n[0]=x=>a.getUserType==="QuickBase User"?e.window.close():e.$router.replace({name:"employees"}))})]),_:1})):k("",!0),o(i,{class:"q-pb-sm"},{default:d(()=>[o(c,{assignment:a.assignment,employee:a.employee,release:a.release},null,8,["assignment","employee","release"])]),_:1}),a.evaluation?(l(),r(i,{key:1,class:"q-pb-sm"},{default:d(()=>[o(y,{data:a.evaluation},null,8,["data"])]),_:1})):k("",!0),o(i,{class:"q-pb-sm"},{default:d(()=>[o(D,{employee:a.employee,release:a.release},null,8,["employee","release"])]),_:1}),o(i,{class:"q-pb-sm"},{default:d(()=>[o(h,null,{default:d(()=>[o(i,{class:"q-py-none"},{default:d(()=>[s("div",xo,[s("div",go,[wo,s("div",Do,[s("span",null,t(a.submitter[37])+", "+t(a.submitter[35]),1)])]),s("div",No,[ko,s("div",So,[a.evaluator?(l(),$("span",Co,t(a.capitalize(a.evaluator[22].toLowerCase()))+", "+t(a.capitalize(a.evaluator[20].toLowerCase())),1)):(l(),$("span",Yo,"Not Specified"))])]),Po])]),_:1})]),_:1})]),_:1})]),_:1})):k("",!0),a.release&&a.showPrint?(l(),r(h,{key:1,id:"printArea",flat:"",class:"text-body2"},{default:d(()=>[o(i,{class:"q-py-xs"},{default:d(()=>[o(m,{assignment:a.assignment,employee:a.employee,release:a.release},null,8,["assignment","employee","release"])]),_:1}),o(_),a.evaluation?(l(),r(i,{key:0,class:"q-py-xs"},{default:d(()=>[o(Y,{data:a.evaluation},null,8,["data"])]),_:1})):k("",!0),o(_),o(i,{class:"q-py-xs"},{default:d(()=>[o(P,{employee:a.employee,release:a.release},null,8,["employee","release"])]),_:1}),o(i,{class:"q-pb-sm"},{default:d(()=>[o(h,{flat:""},{default:d(()=>[o(i,{class:"q-py-none"},{default:d(()=>[s("div",jo,[s("div",Io,[Ro,s("div",Eo,[s("span",null,t(a.submitter[37])+", "+t(a.submitter[35]),1)])]),s("div",Lo,[Qo,s("div",Vo,[a.evaluator?(l(),$("span",Mo,t(a.capitalize(a.evaluator[22].toLowerCase()))+", "+t(a.capitalize(a.evaluator[20].toLowerCase())),1)):(l(),$("span",Oo,"Not Specified"))])]),Bo])]),_:1})]),_:1})]),_:1})]),_:1})):k("",!0)])]),_:1})}var da=q(fo,[["render",Fo]]);export{da as default};
