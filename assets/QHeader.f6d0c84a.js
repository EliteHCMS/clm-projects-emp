import{bC as q,c as o,h as c,bR as H,i as p,bN as B,r as g,w as s,aH as _,c2 as O,g as C}from"./index.3eeef2e1.js";import{Q as T}from"./QResizeObserver.ea13df87.js";var L=q({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:f}){const i=o(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>c("div",{class:i.value},H(f.default))}}),N=q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:f,emit:i}){const{proxy:{$q:v}}=C(),a=p(B,()=>{console.error("QHeader needs to be child of QLayout")}),d=g(parseInt(t.heightHint,10)),r=g(!0),h=o(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||v.platform.is.ios&&a.isContainer.value===!0),m=o(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return r.value===!0?d.value:0;const e=d.value-a.scroll.value.position;return e>0?e:0}),b=o(()=>t.modelValue!==!0||h.value===!0&&r.value!==!0),Q=o(()=>t.modelValue===!0&&b.value===!0&&t.reveal===!0),V=o(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(b.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),z=o(()=>{const e=a.rows.value.top,u={};return e[0]==="l"&&a.left.space===!0&&(u[v.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(u[v.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),u});function l(e,u){a.update("header",e,u)}function n(e,u){e.value!==u&&(e.value=u)}function w({height:e}){n(d,e),l("size",e)}function x(e){Q.value===!0&&n(r,!0),i("focusin",e)}s(()=>t.modelValue,e=>{l("space",e),n(r,!0),a.animate()}),s(m,e=>{l("offset",e)}),s(()=>t.reveal,e=>{e===!1&&n(r,t.modelValue)}),s(r,e=>{a.animate(),i("reveal",e)}),s(a.scroll,e=>{t.reveal===!0&&n(r,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const y={};return a.instances.header=y,t.modelValue===!0&&l("size",d.value),l("space",t.modelValue),l("offset",m.value),_(()=>{a.instances.header===y&&(a.instances.header=void 0,l("size",0),l("offset",0),l("space",!1))}),()=>{const e=O(f.default,[]);return t.elevated===!0&&e.push(c("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(c(T,{debounce:0,onResize:w})),c("header",{class:V.value,style:z.value,onFocusin:x},e)}}});export{L as Q,N as a};
