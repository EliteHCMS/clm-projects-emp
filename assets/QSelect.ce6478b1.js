import{bC as Ne,c as S,h as C,bR as qt,cK as $e,cL as rt,cM as st,cN as ct,cm as Ft,r as q,w as ge,aE as J,bG as Ot,aG as Et,aJ as Bt,aF as Lt,aH as dt,g as ft,cO as Ht,cP as Rt,cQ as nt,cR as Ae,aI as Tt,aO as Pt,cB as Dt,cC as Te,bU as Nt,cS as $t,cJ as me,cT as ot,cv as Kt,cU as Qt,bZ as Se,bT as Ut,bV as jt,bJ as Wt}from"./index.3eeef2e1.js";import{Q as Xt,a as Yt}from"./QMenu.da0b9218.js";import{r as De}from"./rtl.65b79c69.js";var Jt=Ne({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:s}){const i=S(()=>parseInt(e.lines,10)),w=S(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),I=S(()=>e.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>C("div",{style:I.value,class:w.value},qt(s.default))}}),Gt=Ne({name:"QField",inheritAttrs:!1,props:$e,emits:rt,setup(){return st(ct())}});const $=1e3,Zt=["start","center","end","start-force","center-force","end-force"],vt=Array.prototype.filter,el=window.getComputedStyle(document.body).overflowAnchor===void 0?Ft:function(e,s){e!==null&&(cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;const i=e.children||[];vt.call(i,I=>I.dataset&&I.dataset.qVsAnchor!==void 0).forEach(I=>{delete I.dataset.qVsAnchor});const w=i[s];w&&w.dataset&&(w.dataset.qVsAnchor="")}))};function he(e,s){return e+s}function Pe(e,s,i,w,I,a,F,g){const b=e===window?document.scrollingElement||document.documentElement:e,O=I===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-F-g,scrollMaxSize:0,offsetStart:-F,offsetEnd:-g};if(I===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=b.scrollLeft,c.scrollViewSize+=b.clientWidth),c.scrollMaxSize=b.scrollWidth,a===!0&&(c.scrollStart=(De===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=b.scrollTop,c.scrollViewSize+=b.clientHeight),c.scrollMaxSize=b.scrollHeight),i!==null)for(let k=i.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=k[O]);if(w!==null)for(let k=w.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=k[O]);if(s!==e){const k=b.getBoundingClientRect(),z=s.getBoundingClientRect();I===!0?(c.offsetStart+=z.left-k.left,c.offsetEnd-=z.width):(c.offsetStart+=z.top-k.top,c.offsetEnd-=z.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function at(e,s,i,w){s==="end"&&(s=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(w===!0&&(s=(De===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):i===!0?(w===!0&&(s=(De===!0?e.scrollWidth-e.offsetWidth:0)-s),e.scrollLeft=s):e.scrollTop=s}function Ie(e,s,i,w){if(i>=w)return 0;const I=s.length,a=Math.floor(i/$),F=Math.floor((w-1)/$)+1;let g=e.slice(a,F).reduce(he,0);return i%$!==0&&(g-=s.slice(a*$,i).reduce(he,0)),w%$!==0&&w!==I&&(g-=s.slice(w,F*$).reduce(he,0)),g}const mt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},rl=Object.keys(mt),tl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...mt};function ll({virtualScrollLength:e,getVirtualScrollTarget:s,getVirtualScrollEl:i,virtualScrollItemSizeComputed:w}){const I=ft(),{props:a,emit:F,proxy:g}=I,{$q:b}=g;let O,c,k,z=[],y;const P=q(0),H=q(0),U=q({}),X=q(null),T=q(null),j=q(null),_=q({from:0,to:0}),M=S(()=>a.tableColspan!==void 0?a.tableColspan:100);w===void 0&&(w=S(()=>a.virtualScrollItemSize));const W=S(()=>w.value+";"+a.virtualScrollHorizontal),ye=S(()=>W.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(W,ue);function ue(){Z(c,!0)}function be(n){Z(n===void 0?c:n)}function G(n,r){const f=s();if(f==null||f.nodeType===8)return;const x=Pe(f,i(),X.value,T.value,a.virtualScrollHorizontal,b.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);k!==x.scrollViewSize&&Y(x.scrollViewSize),ne(f,x,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,Zt.indexOf(r)>-1?r:c>-1&&n>c?"end":"start")}function K(){const n=s();if(n==null||n.nodeType===8)return;const r=Pe(n,i(),X.value,T.value,a.virtualScrollHorizontal,b.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),f=e.value-1,x=r.scrollMaxSize-r.offsetStart-r.offsetEnd-H.value;if(O===r.scrollStart)return;if(r.scrollMaxSize<=0){ne(n,r,0,0);return}k!==r.scrollViewSize&&Y(r.scrollViewSize),we(_.value.from);const E=Math.floor(r.scrollMaxSize-Math.max(r.scrollViewSize,r.offsetEnd)-Math.min(y[f],r.scrollViewSize/2));if(E>0&&Math.ceil(r.scrollStart)>=E){ne(n,r,f,r.scrollMaxSize-r.offsetEnd-z.reduce(he,0));return}let h=0,v=r.scrollStart-r.offsetStart,L=v;if(v<=x&&v+r.scrollViewSize>=P.value)v-=P.value,h=_.value.from,L=v;else for(let m=0;v>=z[m]&&h<f;m++)v-=z[m],h+=$;for(;v>0&&h<f;)v-=y[h],v>-r.scrollViewSize?(h++,L=v):L=y[h]+v;ne(n,r,h,L)}function ne(n,r,f,x,E){const h=typeof E=="string"&&E.indexOf("-force")>-1,v=h===!0?E.replace("-force",""):E,L=v!==void 0?v:"start";let m=Math.max(0,f-U.value[L]),D=m+U.value.total;D>e.value&&(D=e.value,m=Math.max(0,D-U.value.total)),O=r.scrollStart;const ee=m!==_.value.from||D!==_.value.to;if(ee===!1&&v===void 0){Ce(f);return}const{activeElement:pe}=document,Q=j.value;ee===!0&&Q!==null&&Q!==pe&&Q.contains(pe)===!0&&(Q.addEventListener("focusout",Ve),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",Ve)})),el(Q,f-m);const Me=v!==void 0?y.slice(m,f).reduce(he,0):0;if(ee===!0){const ae=D>=_.value.from&&m<=_.value.to?_.value.to:D;_.value={from:m,to:ae},P.value=Ie(z,y,0,m),H.value=Ie(z,y,D,e.value),requestAnimationFrame(()=>{_.value.to!==D&&O===r.scrollStart&&(_.value={from:_.value.from,to:D},H.value=Ie(z,y,D,e.value))})}requestAnimationFrame(()=>{if(O!==r.scrollStart)return;ee===!0&&we(m);const ae=y.slice(m,f).reduce(he,0),ie=ae+r.offsetStart+P.value,_e=ie+y[f];let xe=ie+x;if(v!==void 0){const N=ae-Me,B=r.scrollStart+N;xe=h!==!0&&B<ie&&_e<B+r.scrollViewSize?B:v==="end"?_e-r.scrollViewSize:ie-(v==="start"?0:Math.round((r.scrollViewSize-y[f])/2))}O=xe,at(n,xe,a.virtualScrollHorizontal,b.lang.rtl),Ce(f)})}function we(n){const r=j.value;if(r){const f=vt.call(r.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),x=f.length,E=a.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let h=n,v,L;for(let m=0;m<x;){for(v=E(f[m]),m++;m<x&&f[m].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=E(f[m]),m++;L=v-y[h],L!==0&&(y[h]+=L,z[Math.floor(h/$)]+=L),h++}}}function Ve(){j.value!==null&&j.value!==void 0&&j.value.focus()}function Z(n,r){const f=1*w.value;(r===!0||Array.isArray(y)===!1)&&(y=[]);const x=y.length;y.length=e.value;for(let h=e.value-1;h>=x;h--)y[h]=f;const E=Math.floor((e.value-1)/$);z=[];for(let h=0;h<=E;h++){let v=0;const L=Math.min((h+1)*$,e.value);for(let m=h*$;m<L;m++)v+=y[m];z.push(v)}c=-1,O=void 0,P.value=Ie(z,y,0,_.value.from),H.value=Ie(z,y,_.value.to,e.value),n>=0?(we(_.value.from),J(()=>{G(n)})):oe()}function Y(n){if(n===void 0&&typeof window!="undefined"){const v=s();v!=null&&v.nodeType!==8&&(n=Pe(v,i(),X.value,T.value,a.virtualScrollHorizontal,b.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}k=n;const r=parseFloat(a.virtualScrollSliceRatioBefore)||0,f=parseFloat(a.virtualScrollSliceRatioAfter)||0,x=1+r+f,E=n===void 0||n<=0?1:Math.ceil(n/w.value),h=Math.max(1,E,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/x));U.value={total:Math.ceil(h*x),start:Math.ceil(h*r),center:Math.ceil(h*(.5+r)),end:Math.ceil(h*(1+r)),view:E}}function ze(n,r){const f=a.virtualScrollHorizontal===!0?"width":"height",x={["--q-virtual-scroll-item-"+f]:w.value+"px"};return[n==="tbody"?C(n,{class:"q-virtual-scroll__padding",key:"before",ref:X},[C("tr",[C("td",{style:{[f]:`${P.value}px`,...x},colspan:M.value})])]):C(n,{class:"q-virtual-scroll__padding",key:"before",ref:X,style:{[f]:`${P.value}px`,...x}}),C(n,{class:"q-virtual-scroll__content",key:"content",ref:j,tabindex:-1},r.flat()),n==="tbody"?C(n,{class:"q-virtual-scroll__padding",key:"after",ref:T},[C("tr",[C("td",{style:{[f]:`${H.value}px`,...x},colspan:M.value})])]):C(n,{class:"q-virtual-scroll__padding",key:"after",ref:T,style:{[f]:`${H.value}px`,...x}})]}function Ce(n){c!==n&&(a.onVirtualScroll!==void 0&&F("virtual-scroll",{index:n,from:_.value.from,to:_.value.to-1,direction:n<c?"decrease":"increase",ref:g}),c=n)}Y();const oe=Ot(K,b.platform.is.ios===!0?120:35);Et(()=>{Y()});let o=!1;return Bt(()=>{o=!0}),Lt(()=>{if(o!==!0)return;const n=s();O!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?at(n,O,a.virtualScrollHorizontal,b.lang.rtl):G(c)}),dt(()=>{oe.cancel()}),Object.assign(g,{scrollTo:G,reset:ue,refresh:be}),{virtualScrollSliceRange:_,virtualScrollSliceSizeComputed:U,setVirtualScrollSize:Y,onVirtualScrollEvt:oe,localResetVirtualScroll:Z,padVirtualScroll:ze,scrollTo:G,reset:ue,refresh:be}}const it=e=>["add","add-unique","toggle"].includes(e),ul=".*+?^${}()|[]\\",nl=Object.keys($e);var sl=Ne({name:"QSelect",inheritAttrs:!1,props:{...tl,...Ht,...$e,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:it},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...rt,"add","remove","input-value","new-value","keyup","keypress","keydown","filter-abort"],setup(e,{slots:s,emit:i}){const{proxy:w}=ft(),{$q:I}=w,a=q(!1),F=q(!1),g=q(-1),b=q(""),O=q(!1),c=q(!1);let k,z,y,P,H,U,X,T,j;const _=q(null),M=q(null),W=q(null),ye=q(null),ue=q(null),be=Rt(e),G=$t(Ze),K=S(()=>Array.isArray(e.options)?e.options.length:0),ne=S(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:we,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:Y,onVirtualScrollEvt:ze,scrollTo:Ce,setVirtualScrollSize:oe}=ll({virtualScrollLength:K,getVirtualScrollTarget:yt,getVirtualScrollEl:Je,virtualScrollItemSizeComputed:ne}),o=ct(),n=S(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&z!==void 0?z:[],d=u.map(p=>ht(p,l));return e.modelValue===null&&t===!0?d.filter(p=>p!==null):d}return u}),r=S(()=>{const t={};return nl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=S(()=>e.optionsDark===null?o.isDark.value:e.optionsDark),x=S(()=>nt(n.value)),E=S(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),h=S(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=S(()=>K.value===0),L=S(()=>n.value.map(t=>B.value(t)).join(", ")),m=S(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),D=S(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(m.value))),ee=S(()=>o.focused.value===!0?e.tabindex:-1),pe=S(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-owns":`${o.targetUid.value}_lb`,"aria-controls":`${o.targetUid.value}_lb`};return g.value>=0&&(t["aria-activedescendant"]=`${o.targetUid.value}_${g.value}`),t}),Q=S(()=>{const t={id:`${o.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"};return g.value>=0&&(t["aria-activedescendant"]=`${o.targetUid.value}_${g.value}`),t}),Me=S(()=>n.value.map((t,u)=>({index:u,opt:t,html:m.value(t),selected:!0,removeAtIndex:gt,toggleOption:te,tabindex:ee.value}))),ae=S(()=>{if(K.value===0)return[];const{from:t,to:u}=we.value;return e.options.slice(t,u).map((l,d)=>{const p=re.value(l)===!0,V=t+d,A={clickable:!0,active:!1,activeClass:xe.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${o.targetUid.value}_${V}`,onClick:()=>{te(l)}};return p!==!0&&(Le(l)===!0&&(A.active=!0),g.value===V&&(A.focused=!0),A["aria-selected"]=A.active===!0?"true":"false",I.platform.is.desktop===!0&&(A.onMousemove=()=>{a.value===!0&&se(V)})),{index:V,opt:l,html:m.value(l),label:B.value(l),selected:A.active,focused:A.focused,toggleOption:te,setOptionIndex:se,itemProps:A}})}),ie=S(()=>e.dropdownIcon!==void 0?e.dropdownIcon:I.iconSet.arrow.dropdown),_e=S(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),xe=S(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),N=S(()=>Be(e.optionValue,"value")),B=S(()=>Be(e.optionLabel,"label")),re=S(()=>Be(e.optionDisable,"disable")),qe=S(()=>n.value.map(t=>N.value(t))),St=S(()=>{const t={onInput:Ze,onChange:G,onKeydown:Ye,onKeyup:We,onKeypress:Xe,onFocus:Ue,onClick(u){y===!0&&me(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=G,t});ge(n,t=>{z=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&o.innerLoading.value!==!0&&(F.value!==!0&&a.value!==!0||x.value!==!0)&&(P!==!0&&ve(),(F.value===!0||a.value===!0)&&ce(""))},{immediate:!0}),ge(()=>e.fillInput,ve),ge(a,He),ge(K,_t);function Ke(t){return e.emitValue===!0?N.value(t):t}function Ee(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function gt(t){Ee(t),o.focus()}function Qe(t,u){const l=Ke(t);if(e.multiple!==!0){e.fillInput===!0&&ke(B.value(t),!0,!0),i("update:modelValue",l);return}if(n.value.length===0){i("add",{index:0,value:l}),i("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&Le(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();i("add",{index:d.length,value:l}),d.push(l),i("update:modelValue",d)}function te(t,u){if(o.editable.value!==!0||t===void 0||re.value(t)===!0)return;const l=N.value(t);if(e.multiple!==!0){u!==!0&&(ke(e.fillInput===!0?B.value(t):"",!0,!0),le()),M.value!==null&&M.value.focus(),(n.value.length===0||Ae(N.value(n.value[0]),l)!==!0)&&i("update:modelValue",e.emitValue===!0?l:t);return}if((y!==!0||O.value===!0)&&o.focus(),Ue(),n.value.length===0){const V=e.emitValue===!0?l:t;i("add",{index:0,value:V}),i("update:modelValue",e.multiple===!0?[V]:V);return}const d=e.modelValue.slice(),p=qe.value.findIndex(V=>Ae(V,l));if(p>-1)i("remove",{index:p,value:d.splice(p,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const V=e.emitValue===!0?l:t;i("add",{index:d.length,value:V}),d.push(V)}i("update:modelValue",d)}function se(t){if(I.platform.is.desktop!==!0)return;const u=t>-1&&t<K.value?t:-1;g.value!==u&&(g.value=u)}function Fe(t=1,u){if(a.value===!0){let l=g.value;do l=ot(l+t,-1,K.value-1);while(l!==-1&&l!==g.value&&re.value(e.options[l])===!0);g.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Oe(l>=0?B.value(e.options[l]):U))}}function ht(t,u){const l=d=>Ae(N.value(d),t);return e.options.find(l)||u.find(l)||t}function Be(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function Le(t){const u=N.value(t);return qe.value.find(l=>Ae(l,u))!==void 0}function Ue(t){e.useInput===!0&&M.value!==null&&(t===void 0||M.value===t.target&&t.target.value===L.value)&&M.value.select()}function je(t){Kt(t,27)===!0&&a.value===!0&&(me(t),le(),ve()),i("keyup",t)}function We(t){const{value:u}=t.target;if(t.keyCode!==void 0){je(t);return}if(t.target.value="",clearTimeout(k),ve(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),d=V=>{const A=e.options.find(R=>V.value(R).toLocaleLowerCase()===l);return A===void 0?!1:(n.value.indexOf(A)===-1?te(A):le(),!0)},p=V=>{d(N)!==!0&&(d(B)===!0||V===!0||ce(u,!0,()=>p(!0)))};p()}else o.clearValue(t)}function Xe(t){i("keypress",t)}function Ye(t){if(i("keydown",t),Qt(t)===!0)return;const u=b.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(g.value>-1||u===!0);if(t.keyCode===27){Te(t);return}if(t.keyCode===9&&l===!1){de();return}if(t.target===void 0||t.target.id!==o.targetUid.value)return;if(t.keyCode===40&&o.innerLoading.value!==!0&&a.value===!1){Se(t),fe();return}if(t.keyCode===8&&e.hideSelected!==!0&&b.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Ee(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof b.value!="string"||b.value.length===0)&&(Se(t),g.value=-1,Fe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(Se(t),g.value=Math.max(-1,Math.min(K.value,g.value+(t.keyCode===33?-1:1)*Ve.value.view)),Fe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(Se(t),Fe(t.keyCode===38?-1:1,e.multiple));const d=K.value;if((T===void 0||j<Date.now())&&(T=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===t.ctrlKey&&(t.keyCode!==32||T.length>0)){a.value!==!0&&fe(t);const p=t.key.toLocaleLowerCase(),V=T.length===1&&T[0]===p;j=Date.now()+1500,V===!1&&(Se(t),T+=p);const A=new RegExp("^"+T.split("").map(Re=>ul.indexOf(Re)>-1?"\\"+Re:Re).join(".*"),"i");let R=g.value;if(V===!0||R<0||A.test(B.value(e.options[R]))!==!0)do R=ot(R+1,-1,d-1);while(R!==g.value&&(re.value(e.options[R])===!0||A.test(B.value(e.options[R]))!==!0));g.value!==R&&J(()=>{se(R),Ce(R),R>=0&&e.useInput===!0&&e.fillInput===!0&&Oe(B.value(e.options[R]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||T!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&Se(t),g.value>-1&&g.value<d){te(e.options[g.value]);return}if(u===!0){const p=(V,A)=>{if(A){if(it(A)!==!0)return}else A=e.newValueMode;if(V==null)return;ke("",e.multiple!==!0,!0),(A==="toggle"?te:Qe)(V,A==="add-unique"),e.multiple!==!0&&(M.value!==null&&M.value.focus(),le())};if(e.onNewValue!==void 0?i("new-value",b.value,p):p(b.value),e.multiple!==!0)return}a.value===!0?de():o.innerLoading.value!==!0&&fe()}}function Je(){return y===!0?ue.value:W.value!==null&&W.value.__qPortalInnerRef.value!==null?W.value.__qPortalInnerRef.value:void 0}function yt(){return Je()}function bt(){return e.hideSelected===!0?[]:s["selected-item"]!==void 0?Me.value.map(t=>s["selected-item"](t)).slice():s.selected!==void 0?[].concat(s.selected()):e.useChips===!0?Me.value.map((t,u)=>C(Yt,{key:"option-"+u,removable:o.editable.value===!0&&re.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ee.value,onRemove(){t.removeAtIndex(u)}},()=>C("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:B.value(t.opt)}))):[C("span",{[D.value===!0?"innerHTML":"textContent"]:e.displayValue!==void 0?e.displayValue:L.value})]}function Ge(){if(v.value===!0)return s["no-option"]!==void 0?s["no-option"]({inputValue:b.value}):void 0;const t=s.option!==void 0?s.option:l=>C(jt,{key:l.index,...l.itemProps},()=>C(Ut,()=>C(Jt,()=>C("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",ae.value.map(t));return s["before-options"]!==void 0&&(u=s["before-options"]().concat(u)),Wt(s["after-options"],u)}function wt(t,u){const l=u===!0?{...pe.value,...o.splitAttrs.attributes.value}:void 0,d={ref:u===!0?M:void 0,key:"i_t",class:E.value,style:e.inputStyle,value:b.value!==void 0?b.value:"",type:"search",...l,id:u===!0?o.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...St.value};return t!==!0&&y===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),C("input",d)}function Ze(t){clearTimeout(k),!(t&&t.target&&t.target.qComposing===!0)&&(Oe(t.target.value||""),P=!0,U=b.value,o.focused.value!==!0&&(y!==!0||O.value===!0)&&o.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{ce(b.value)},e.inputDebounce)))}function Oe(t){b.value!==t&&(b.value=t,i("input-value",t))}function ke(t,u,l){P=l!==!0,e.useInput===!0&&(Oe(t),(u===!0||l!==!0)&&(U=t),u!==!0&&ce(t))}function ce(t,u,l){if(e.onFilter===void 0||u!==!0&&o.focused.value!==!0)return;o.innerLoading.value===!0?i("filter-abort"):(o.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&P!==!0&&t===B.value(n.value[0])&&(t="");const d=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);clearTimeout(H),H=d,i("filter",t,(p,V)=>{(u===!0||o.focused.value===!0)&&H===d&&(clearTimeout(H),typeof p=="function"&&p(),c.value=!1,J(()=>{o.innerLoading.value=!1,o.editable.value===!0&&(u===!0?a.value===!0&&le():a.value===!0?He(!0):a.value=!0),typeof V=="function"&&J(()=>{V(w)}),typeof l=="function"&&J(()=>{l(w)})}))},()=>{o.focused.value===!0&&H===d&&(clearTimeout(H),o.innerLoading.value=!1,c.value=!1),a.value===!0&&(a.value=!1)})}function Vt(){return C(Xt,{ref:W,class:h.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:_e.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Q.value,onScrollPassive:ze,onBeforeShow:tt,onBeforeHide:Ct,onShow:pt},Ge)}function Ct(t){lt(t),de()}function pt(){oe()}function xt(t){me(t),M.value!==null&&M.value.focus(),O.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function kt(t){me(t),J(()=>{O.value=!1})}function At(){const t=[C(Gt,{class:`col-auto ${o.fieldClass.value}`,...r.value,for:o.targetUid.value,dark:f.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:b.value.length>0,...o.splitAttrs.listeners.value,onFocus:xt,onBlur:kt},{...s,rawControl:()=>o.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(C("div",{ref:ue,class:h.value+" scroll",style:e.popupContentStyle,...Q.value,onClick:Te,onScrollPassive:ze},Ge())),C(Dt,{ref:ye,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:X,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:tt,onBeforeHide:It,onHide:zt,onShow:Mt},()=>C("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(O.value===!0?" q-select__dialog--focused":"")},t))}function It(t){lt(t),ye.value!==null&&ye.value.__updateRefocusTarget(o.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),o.focused.value=!1}function zt(t){le(),o.focused.value===!1&&i("blur",t),ve()}function Mt(){const t=document.activeElement;(t===null||t.id!==o.targetUid.value)&&M.value!==null&&M.value!==t&&M.value.focus(),oe()}function de(){F.value!==!0&&(g.value=-1,a.value===!0&&(a.value=!1),o.focused.value===!1&&(clearTimeout(H),H=void 0,o.innerLoading.value===!0&&(i("filter-abort"),o.innerLoading.value=!1,c.value=!1)))}function fe(t){o.editable.value===!0&&(y===!0?(o.onControlFocusin(t),F.value=!0,J(()=>{o.focus()})):o.focus(),e.onFilter!==void 0?ce(b.value):(v.value!==!0||s["no-option"]!==void 0)&&(a.value=!0))}function le(){F.value=!1,de()}function ve(){e.useInput===!0&&ke(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&B.value(n.value[0])||"",!0,!0)}function He(t){let u=-1;if(t===!0){if(n.value.length>0){const l=N.value(n.value[0]);u=e.options.findIndex(d=>Ae(N.value(d),l))}Z(u)}se(u)}function _t(t,u){a.value===!0&&o.innerLoading.value===!1&&(Z(-1,!0),J(()=>{a.value===!0&&o.innerLoading.value===!1&&(t>u?Z():He(!0))}))}function et(){F.value===!1&&W.value!==null&&W.value.updatePosition()}function tt(t){t!==void 0&&me(t),i("popup-show",t),o.hasPopupOpen=!0,o.onControlFocusin(t)}function lt(t){t!==void 0&&me(t),i("popup-hide",t),o.hasPopupOpen=!1,o.onControlFocusout(t)}function ut(){y=I.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?s["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),X=I.platform.is.ios===!0&&y===!0&&e.useInput===!0?"fade":e.transitionShow}return Tt(ut),Pt(et),ut(),dt(()=>{clearTimeout(k)}),Object.assign(w,{showPopup:fe,hidePopup:le,removeAtIndex:Ee,add:Qe,toggleOption:te,getOptionIndex:()=>g.value,setOptionIndex:se,moveOptionSelection:Fe,filter:ce,updateMenuPosition:et,updateInputValue:ke,isOptionSelected:Le,getEmittingOptionValue:Ke,isOptionDisabled:(...t)=>re.value.apply(null,t)===!0,getOptionValue:(...t)=>N.value.apply(null,t),getOptionLabel:(...t)=>B.value.apply(null,t)}),Object.assign(o,{innerValue:n,fieldClass:S(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:_,targetRef:M,hasValue:x,showPopup:fe,floatingLabel:S(()=>e.hideSelected!==!0&&x.value===!0||b.value.length>0||nt(e.displayValue)),getControlChild:()=>{if(o.editable.value!==!1&&(F.value===!0||v.value!==!0||s["no-option"]!==void 0))return y===!0?At():Vt();o.hasPopupOpen===!0&&(o.hasPopupOpen=!1)},controlEvents:{onFocusin(t){o.onControlFocusin(t)},onFocusout(t){o.onControlFocusout(t,()=>{ve(),de()})},onClick(t){if(Te(t),y!==!0&&a.value===!0){de(),M.value!==null&&M.value.focus();return}fe(t)}},getControl:t=>{const u=bt(),l=t===!0||F.value!==!0||y!==!0;if(e.useInput===!0)u.push(wt(t,l));else if(o.editable.value===!0){const p=l===!0?pe.value:void 0;u.push(C("input",{ref:l===!0?M:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?o.targetUid.value:void 0,readonly:!0,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,...p,onKeydown:Ye,onKeyup:je,onKeypress:Xe})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(C("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,onKeyup:We}))}if(be.value!==void 0&&e.disable!==!0&&qe.value.length>0){const p=qe.value.map(V=>C("option",{value:V,selected:!0}));u.push(C("select",{class:"hidden",name:be.value,multiple:e.multiple},p))}const d=e.useInput===!0||l!==!0?void 0:o.splitAttrs.attributes.value;return C("div",{class:"q-field__native row items-center",...d},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[C(Nt,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:ie.value})]:null}),st(o)}});export{Jt as Q,sl as a,ll as b,rl as c,tl as u};
