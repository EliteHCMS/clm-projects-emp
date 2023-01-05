import{l as j,_ as M,A as r,an as m,bi as o,d as t,cw as L,D as a,ab as n,cz as q,r as c,bL as T,bM as N,c as z,aZ as v,bO as w,B as b,ao as y,bI as k,bk as A,aY as R,H as E,F,cy as I}from"./index.9762efb3.js";import{Q as S,a as W}from"./QHeader.0dc2e629.js";import{Q as G}from"./QMenu.6d936437.js";import{Q as $}from"./QToolbar.e3e89c52.js";import{Q as Y}from"./QImg.c0adae46.js";import{Q as Z}from"./QList.eefd78b8.js";import{Q as J,a as K}from"./QDrawer.82cb0dba.js";import{a as X,Q as x}from"./QLayout.cce60c1a.js";import{C as ee}from"./ClosePopup.6144f9ad.js";import{u as te}from"./use-quasar.1a2013e3.js";import{u as oe,b as se}from"./quickbase.0330480d.js";import{u as re}from"./dataStore.13d3cdd5.js";import{_ as ae}from"./version.164b55e5.js";import{M as ne}from"./MenuNav.d0915b8e.js";import{_ as ie}from"./languageSelector.1551b17e.js";import"./QResizeObserver.ae660eeb.js";import"./position-engine.e9001b32.js";import"./selection.2be80553.js";import"./TouchPan.5c2b5c98.js";import"./touch.60582172.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.b06c0c0b.js";import"./index.7dbe61ef.js";import"./localForage.591f4db3.js";import"./i18n.d2983beb.js";import"./api.5a7b34fc.js";import"./useQuerySaver.4199d87d.js";import"./QItemLabel.a7bd6a61.js";import"./QBadge.8a48a097.js";import"./MenuSubLink.577e55a3.js";import"./QSlideTransition.0b01abd8.js";import"./QSelect.4c250828.js";import"./QChip.deeb90cb.js";import"./rtl.cf9bbe47.js";const le=j({props:{project:Object,mini:Boolean},setup(e){return{props:e}}}),ce={class:"text-h6 text-white"},ue={class:"text-body1 text-white q-mb-md"},me={class:"text-body1 text-dark"};function pe(e,i,p,d,s,f){return r(),m(q,{class:"bg-accent q-mt-lg q-pt-none q-px-xs",flat:"",square:""},{default:o(()=>[t(L,{class:"text-center"},{default:o(()=>[a("div",ce,n(e.project[20]),1),a("div",ue,"@ "+n(e.project[24]),1),a("div",me,"Manager: "+n(e.project[245]!==""?e.project[245]:"Unassigned"),1)]),_:1})]),_:1})}var de=M(le,[["render",pe]]);const fe=j({name:"View Project",components:{MenuNav:ne,version:ae,languageSelector:ie,BasicProjectCard:de},setup(){const e=c(null),i=c(!1),p=te(),d=c(!1),s=c(!1),f=c(!1),u=c(!1),h=T(),_=N(),g=oe(),{getUserType:C}=g,{toolbarTitle:l,viewProjectMenu:D}=se(),{fetchProjectData:B,getViewedProjects:O}=re(),P=async()=>{const{state:Q}=h.options.history;e.value=Q.back,p.loading.show(),await B(_.params.id),p.loading.hide()},U=z(()=>O(_.params.id)),V=async()=>{g.logout().then(()=>{h.replace({name:"login"})})},H=()=>{window.close()};return P(),{tab:c("mails"),fab:i,userStore:g,leftDrawerOpen:d,rightDrawerOpen:f,miniState:s,miniHover:u,miniMouseOver(){s.value===!0&&(u.value=!1)},miniMouseOut(){s.value===!0&&(u.value=!0)},toggleLeftDrawer(){p.screen.gt.sm?(s.value=!s.value,s.value===!0&&(u.value=!0)):d.value=!d.value},toggleRightDrawer(){f.value=!f.value},drawerClick(Q){s.value&&(s.value=!1,Q.stopPropagation())},logout:V,toolbarTitle:l,viewProjectMenu:D,getUserType:C,project:U,closeWindow:H,opener:e}}}),ge={key:0,class:"q-mr-sm q-ml-sm",src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo-white.png",alt:"BrandSafway Logo",height:"25"},ve={key:0},he={key:1},_e={class:"q-gutter-sm row items-center no-wrap"},we={class:"row no-wrap q-pa-md"},be={class:"column items-center"},ye={class:"text-subtitle1 q-mt-md q-mb-xs"};function Ce(e,i,p,d,s,f){const u=v("languageSelector"),h=v("basic-project-card"),_=v("MenuNav"),g=v("router-view"),C=v("version");return r(),m(x,{view:"hHh lpR fFf"},{default:o(()=>[t(W,{elevated:""},{default:o(()=>[t($,{style:{height:"62px"}},{default:o(()=>[t(w,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),e.$q.screen.gt.sm?(r(),b("img",ge)):y("",!0),t(S,null,{default:o(()=>[e.$q.screen.lt.sm?(r(),b("span",ve)):(r(),b("span",he,n(e.toolbarTitle),1))]),_:1}),a("div",_e,[t(u,{dense:"",borderless:"",class:"lang-white"}),t(w,{flat:"",dense:"",color:"white"},{default:o(()=>[a("div",null,n(e.userStore.getUser[35])+" "+n(e.userStore.getUser[37]),1),t(k,{right:"",size:"2.2em",name:"account_circle"}),t(G,null,{default:o(()=>[a("div",we,[a("div",be,[t(k,{right:"",size:"72px",name:"account_circle",class:"q-mr-md"}),a("div",ye,n(e.userStore.getUser[35])+" "+n(e.userStore.getUser[37]),1),A(t(w,{color:"primary",label:e.$t("logout"),push:"",size:"sm",onClick:e.logout},null,8,["label","onClick"]),[[ee]])])])]),_:1})]),_:1})])]),_:1})]),_:1}),t(K,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[0]||(i[0]=l=>e.leftDrawerOpen=l),side:"left","show-if-above":"",bordered:"",mini:e.miniState&&e.miniHover,onMouseover:e.miniMouseOver,onMouseout:e.miniMouseOut,onClickCapture:e.drawerClick,class:"text-primary bg-accent print-hide"},{default:o(()=>[e.project?(r(),m(J,{key:0,class:"fit"},{default:o(()=>[e.$q.screen.lt.sm?(r(),m($,{key:0,class:"bg-white",style:{height:"64px"}},{default:o(()=>[t(S,{class:"items-center"},{default:o(()=>[t(Y,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",style:{"max-width":"245px"},fit:"center",class:"q-ml-md"})]),_:1})]),_:1})):y("",!0),e.miniState?y("",!0):(r(),m(h,{key:1,project:e.project,mini:e.miniState},null,8,["project","mini"])),t(Z,{class:"q-mt-sm"},{default:o(()=>[(r(!0),b(F,null,R(e.viewProjectMenu,l=>(r(),m(_,E({key:l.title},l,{mini:e.miniState}),null,16,["mini"]))),128))]),_:1})]),_:1})):y("",!0)]),_:1},8,["modelValue","mini","onMouseover","onMouseout","onClickCapture"]),t(X,null,{default:o(()=>[t(q,{class:"print-hide",flat:""},{default:o(()=>[t(I,{class:"q-pb-none",align:"right"},{default:o(()=>[t(w,{dense:"",icon:"close",label:"Close",color:"dark",onClick:i[1]||(i[1]=l=>e.getUserType==="QuickBase User"?e.closeWindow():e.$router.replace({path:e.opener?e.opener:"/"}))})]),_:1})]),_:1}),t(g)]),_:1}),t(C)]),_:1})}var st=M(fe,[["render",Ce]]);export{st as default};
