import{bY as g,c2 as v,c3 as f,c5 as S,c8 as m,c as t,h as n,bx as y,g as C,cl as h}from"./index.f532dd3a.js";var k=g({name:"QInnerLoading",props:{...v,...f,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:a}){const s=C(),r=S(e,s.proxy.$q),{transitionProps:i,transitionStyle:o}=m(e),c=t(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(r.value===!0?" q-inner-loading--dark":"")),u=t(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function d(){const l=[n(h,{size:e.size,color:e.color})];return e.label!==void 0&&l.push(n("div",{class:u.value,style:e.labelStyle},[e.label])),l}function b(){return e.showing===!0?n("div",{class:c.value,style:o.value},a.default!==void 0?a.default():d()):null}return()=>n(y,i.value,b)}});export{k as Q};
