import{k as g,r as m,i as b,f as h,l as v}from"./index.3eeef2e1.js";import{o as w,z as q,a as l,q as n}from"./quickbase.bbce1ca9.js";import"./_commonjsHelpers.dfee5925.js";import"./dayjs.281b68b5.js";import"./localForage.ba82a4c8.js";import"./index.7dbe61ef.js";import"./i18n.5f5b9ab4.js";import"./api.865b2f54.js";function I(e){if(e.hasOwnProperty("possibleRulesFor"))return e;var i=m(!0);e.on("updated",function(){i.value=!i.value});var r=e.possibleRulesFor.bind(e);return e.possibleRulesFor=function(o,t){return i.value=i.value,r(o,t)},e.can=e.can.bind(e),e.cannot=e.cannot.bind(e),e}var d=Symbol("ability");function S(){var e=b(d);if(!e)throw new Error("Cannot inject Ability instance because it was not provided");return e}function P(e){return"a"in e?"a":"this"in e?"this":"an"in e?"an":""}g({name:"Can",props:{I:String,do:String,a:[String,Function],an:[String,Function],this:[String,Function,Object],on:[String,Function,Object],not:Boolean,passThrough:Boolean,field:String},setup:function(i,r){var o=r.slots,t=i,a="do",s="on";if(a in i||(a="I",s=P(i)),!t[a])throw new Error("Neither `I` nor `do` prop was passed in <Can>");if(!o.default)throw new Error("Expects to receive default slot");var c=S();return function(){var f=c.can(t[a],t[s],t.field),u=i.not?!f:f;return i.passThrough?o.default({allowed:u,ability:c}):u?o.default():null}}});function R(e,i,r){if(!i||!(i instanceof w))throw new Error("Please provide an Ability instance to abilitiesPlugin plugin");e.provide(d,I(i)),r&&r.useGlobalProperties&&(e.config.globalProperties.$ability=i,e.config.globalProperties.$can=i.can.bind(i))}const F=e=>e.matched.some(i=>l.can(i.meta.action||"read",i.meta.resource));var N=h(({app:e,router:i})=>{e.config.globalProperties.$subject=q,e.use(R,l,{useGlobalProperties:!0}),i.beforeEach(async(r,o,t)=>{const a=await n.isUserLoggedIn(),s=Object.assign({},r.query);if(a||n.logout(),s.office_id&&(n.setOfficeLocation({rid:s.office_id}),s.qr&&n.setCheckIn(!0)),o.fullPath==="/"&&!o.name&&(a?await n.reloadUserInfo({reAuthenticate:!0}):v.pageType==="Candidate Kiosk"&&await n.updateStore()),!F(r)){const y=r.path!=="/";return t(a?{name:"not-authorized"}:{name:"login",query:{...y&&{redirect:r.path}}})}if(r.meta.redirectIfLoggedIn&&a)return t("/");const c=await n.verifyRequired(a),f=await n.employeeLinkRequired(a),u=await n.getUserFromStore(a),p=await n.getSocialRequired(a);if(c)return o.name==="code-confirmation"&&a&&r.query.code?(await n.setVerified(!0),t({path:"/"})):r.name!=="code-confirmation"?t({name:"code-confirmation",query:{p:u[9]?u[9].phoneNumber:u[8].replace(/[^0-9]/g,""),rid:u[3]}}):t();if(f||p)return o.name==="verify-identity"&&a&&r.query.verify?(r.query.rid?await n.setIdentityVerified(r.query.rid):await n.setIdentityVerified(!1),t({path:"/",query:{}})):r.name!=="verify-identity"?t({name:"verify-identity",query:{rid:u[3]}}):t();if(r.name==="verify-identity"){if(!f)return t({path:"/"})}else if(r.name==="code-confirmation")return!a&&r.query.ac?t():t({path:"/"});return t()}),i.afterEach(async(r,o)=>{const t=await n.isUserLoggedIn();o.fullPath==="/"&&!o.name&&t&&await n.updateStore({reAuthenticate:!1})})});export{N as default};
