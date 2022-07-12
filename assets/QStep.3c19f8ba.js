import{bC as S,r as x,c as l,h as n,bU as w,bg as N,c6 as A,g as P,bD as D,bE as T,aQ as B,d2 as y,bJ as K,bR as m,bQ as $,i as E,ab as R}from"./index.3eeef2e1.js";import{a as W,b as U,c as V,u as j,d as L}from"./use-panel.95b8d642.js";import{Q as z}from"./QSlideTransition.474206ff.js";var Q=S({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:o}){const{proxy:{$q:i}}=P(),s=x(null),r=l(()=>e.stepper.modelValue===e.step.name),c=l(()=>{const t=e.step.disable;return t===!0||t===""}),p=l(()=>{const t=e.step.error;return t===!0||t===""}),u=l(()=>{const t=e.step.done;return c.value===!1&&(t===!0||t==="")}),_=l(()=>{const t=e.step.headerNav,a=t===!0||t===""||t===void 0;return c.value===!1&&e.stepper.headerNav&&a}),d=l(()=>e.step.prefix&&(r.value===!1||e.stepper.activeIcon==="none")&&(p.value===!1||e.stepper.errorIcon==="none")&&(u.value===!1||e.stepper.doneIcon==="none")),f=l(()=>{const t=e.step.icon||e.stepper.inactiveIcon;if(r.value===!0){const a=e.step.activeIcon||e.stepper.activeIcon;return a==="none"?t:a||i.iconSet.stepper.active}if(p.value===!0){const a=e.step.errorIcon||e.stepper.errorIcon;return a==="none"?t:a||i.iconSet.stepper.error}if(c.value===!1&&u.value===!0){const a=e.step.doneIcon||e.stepper.doneIcon;return a==="none"?t:a||i.iconSet.stepper.done}return t}),v=l(()=>{const t=p.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(r.value===!0){const a=e.step.activeColor||e.stepper.activeColor||e.step.color;return a!==void 0?a:t}return t!==void 0?t:c.value===!1&&u.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),g=l(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(v.value!==void 0?` text-${v.value}`:"")+(p.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(d.value===!0?"prefix":"icon"):"")+(r.value===!0?" q-stepper__tab--active":"")+(u.value===!0?" q-stepper__tab--done":"")+(_.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(c.value===!0?" q-stepper__tab--disabled":"")),q=l(()=>e.stepper.headerNav!==!0?!1:_.value);function h(){s.value!==null&&s.value.focus(),r.value===!1&&e.goToPanel(e.step.name)}function C(t){t.keyCode===13&&r.value===!1&&e.goToPanel(e.step.name)}return()=>{const t={class:g.value};_.value===!0&&(t.onClick=h,t.onKeyup=C,Object.assign(t,c.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:o.tabindex||0}));const a=[n("div",{class:"q-focus-helper",tabindex:-1,ref:s}),n("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[n("span",{class:"row flex-center"},[d.value===!0?e.step.prefix:n(w,{name:f.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const b=[n("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&b.push(n("div",{class:"q-stepper__caption"},e.step.caption)),a.push(n("div",{class:"q-stepper__label q-stepper__line relative-position"},b))}return N(n("div",t,a),[[A,q.value]])}}});const F=/(-\w)/g;function H(e){const o={};for(const i in e){const s=i.replace(F,r=>r[1].toUpperCase());o[s]=e[i]}return o}var G=S({name:"QStepper",props:{...D,...W,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:U,setup(e,{slots:o}){const i=P(),s=T(e,i.proxy.$q),{updatePanelsList:r,isValidPanelName:c,updatePanelIndex:p,getPanelContent:u,getPanels:_,panelDirectives:d,goToPanel:f,keepAliveProps:v,needsUniqueKeepAliveWrapper:g}=V();B(y,l(()=>({goToPanel:f,keepAliveProps:v,needsUniqueKeepAliveWrapper:g,...e})));const q=l(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0||s.value===!0?" q-stepper--flat no-shadow":"")+(e.bordered===!0||s.value===!0&&e.flat===!1?" q-stepper--bordered":"")+(s.value===!0?" q-stepper--dark q-dark":"")),h=l(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function C(){const t=m(o.message,[]);if(e.vertical===!0){c(e.modelValue)&&p();const a=n("div",{class:"q-stepper__content"},m(o.default));return t===void 0?[a]:t.concat(a)}return[n("div",{class:h.value},_().map(a=>{const b=H(a.props);return n(Q,{key:b.name,stepper:e,step:b,goToPanel:f})})),t,$("div",{class:"q-stepper__content q-panel-parent"},u(),"cont",e.swipeable,()=>d.value)]}return()=>(r(o),n("div",{class:q.value},K(o.navigation,C())))}}),X=S({name:"QStepperNavigation",setup(e,{slots:o}){return()=>n("div",{class:"q-stepper__nav"},m(o.default))}});function k(e){return n("div",{class:"q-stepper__step-content"},[n("div",{class:"q-stepper__step-inner"},m(e.default))])}const I={setup(e,{slots:o}){return()=>k(o)}};var Y=S({name:"QStep",props:{...j,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean},setup(e,{attrs:o,slots:i}){const{proxy:{$q:s}}=P(),r=E(y,()=>{console.error("QStep needs to be child of QStepper")}),{getCacheWithFn:c}=L(),p=x(null),u=l(()=>r.value.modelValue===e.name),_=l(()=>s.platform.is.ios!==!0&&s.platform.is.chrome===!0||u.value!==!0||r.value.vertical!==!0?{}:{onScroll(v){const{target:g}=v;g.scrollTop>0&&(g.scrollTop=0),o.onScroll!==void 0&&o.onScroll(v)}}),d=l(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function f(){const v=r.value.vertical;return v===!0&&r.value.keepAlive===!0?n(R,r.value.keepAliveProps.value,u.value===!0?[n(r.value.needsUniqueKeepAliveWrapper.value===!0?c(d.value,()=>({...I,name:d.value})):I,{key:d.value},i.default)]:void 0):v!==!0||u.value===!0?k(i):void 0}return()=>n("div",{ref:p,class:"q-stepper__step",..._.value},r.value.vertical===!0?[n(Q,{stepper:r.value,step:e,goToPanel:r.value.goToPanel}),r.value.animated===!0?n(z,f):f()]:[f()])}});export{X as Q,Y as a,G as b};
