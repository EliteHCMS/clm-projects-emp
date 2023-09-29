import{Q as A,a as G}from"./QTable.d845a145.js";import{Q}from"./QTr.d6da9795.js";import{Q as w}from"./QTd.a02323b5.js";import{l as H,bT as K,r as f,c as $,_ as X,y as Z,b5 as _,A as m,B as k,d as u,av as ee,br as d,F as I,b4 as Y,aq as p,cU as b,ar as le,ax as T,ac as D,bQ as j,D as R,bW as z}from"./index.ed1cd1a8.js";import{a as te}from"./QSelect.d18b0263.js";import{Q as oe}from"./QInnerLoading.273de71a.js";import{u as ae}from"./use-quasar.0680e35f.js";import{e as re}from"./export-file.dc78ba05.js";import{dayjs as q}from"./dayjs.d6c6127f.js";import{u as se}from"./index.89794de1.js";import{A as ne}from"./arrivalDate.376a1405.js";const ie=H({components:{ArrivalDate:ne},emits:["refreshData"],props:{rows:Array,title:String},setup(t,s){const h=ae(),U=K(),{can:N}=se(),{capitalize:y}=Z,L=f(!1),a=f(null),r=f(null),n=f(null),g=f(null),v=f(null),F=f(null),V=f(null),C=f(null),x=$(()=>[{name:1,label:"Name",align:"left",field:e=>e.employee[22],format:(e,o)=>`${S(o.employee)}`,sortable:!0,sortOrder:"ad"},{name:7,label:"Phone #",align:"left",field:e=>e.employee[25],format:e=>`${e}`,sortable:!1},{name:2,label:"Workday ID",align:"left",field:e=>e.employee[378],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:3,label:"Payroll ID",align:"left",field:e=>e.employee[213],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[20],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:116,label:"Rate",align:"left",field:e=>e[116],format:e=>`${e===""||!e||e===0?"N/A":`$${Number(e).toFixed(2)}`}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e[105],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0}]),B=$(()=>h.screen.gt.sm?[1,7,2,3,4,N("read","rates")?116:[],5]:[1,7,2,3,4,N("read","rates")?116:[],5]),P=$(()=>[...new Set(t.rows.map(e=>e[105]===""||!e[105]?"Not Assigned":e[105]))]),E=$(()=>{let e=t.rows;if(a.value&&a.value.trim().length>0){const o=a.value.trim().toLowerCase();e=e.filter(l=>l.employee&&S(l.employee).toLowerCase().includes(o))}if(r.value&&r.value.trim().length>0){const o=r.value.trim().toLowerCase();e=e.filter(l=>l.employee&&l.employee[25]&&l.employee[25].toLowerCase().includes(o))}if(n.value&&n.value.trim().length>0){const o=n.value.trim().toLowerCase();e=e.filter(l=>l.employee&&l.employee[378]&&l.employee[378].toLowerCase().includes(o))}if(g.value&&g.value.trim().length>0){const o=g.value.trim().toLowerCase();e=e.filter(l=>l.employee&&(l.employee[213]===""?"not available".includes(o):l.employee[213]&&l.employee[213].toLowerCase().includes(o)))}if(v.value&&v.value.trim().length>0){const o=v.value.trim().toLowerCase();e=e.filter(l=>!l[20]||l[20]===""?"Not Assigned".toLowerCase().includes(o):l[20]&&l[20].toLowerCase().includes(o))}if(F.value&&F.value.trim().length>0){const o=F.value.trim().toLowerCase();e=e.filter(l=>l[116]===""||!l[116]||l[116]===0?"N/A".toLowerCase().includes(o):l[116]&&"$".concat(Number(l[116]).toFixed(2).toString()).toLowerCase().includes(o))}if(V.value&&V.value.trim().length>0){const o=V.value.trim().toLowerCase();e=e.filter(l=>l[105]===""||!l[105]?"Not Assigned".toLowerCase().includes(o):l[105]&&l[105].toLowerCase().includes(o))}if(C.value&&C.value.trim().length>0){const o=q(C.value.trim()).format("MM/DD/YYYY");e=e.filter(l=>J(l)===o)}return e}),S=e=>{const o=e[20]!==""?y(e[20].toLowerCase().trim()):"",l=e[22]!==""?y(e[22].toLowerCase().trim()):"",i=e[21]!==""?` ${y(e[21].toLowerCase().trim())}`:"",c=e[23]!==""?` ${y(e[23])}`:"";return`${l}${c}, ${o}${i}`};function O(e){U.push({name:"ee-summary",params:{id:e[18]}})}function M(e,o,l){let i=o!==void 0?o(e,l):e;return i=i==null?"":String(i),i=i.split('"').join('""'),`"${i}"`}function W(){const e=x.value.filter(i=>!!B.value.includes(i.name)),o=[e.map(i=>M(i.label))].concat(E.value.map(i=>e.map(c=>M(typeof c.field=="function"?c.field(i):i[c.field===void 0?c.name:c.field],c.format,i)).join(","))).join(`\r
`);re(`${q().format("MM.DD.YYYY")} Employees-Export.csv`,o,"text/csv")!==!0&&h.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}const J=e=>{const o=e[145]&&e[145].$d?e[145].$d:e[1].$d;return q(o).format("MM/DD/YYYY")};return{columns:x,visibleColumns:B,props:t,exportAllEmployees:W,viewEmployee:O,showFilter:L,nameFilter:a,phoneNumberFilter:r,workdayIDFilter:n,payrollIDFilter:g,classificationFilter:v,rateFilter:F,jobNumberFilter:V,arrivalDateFilter:C,jobNumbers:P,filteredRows:E}}}),ue={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},me={class:"text-dark text-caption text-italic"};function de(t,s,h,U,N,y){const L=_("arrival-date");return m(),k("div",null,[u(G,{title:t.title,"title-class":"text-h5 text-primary",columns:t.columns,"visible-columns":t.visibleColumns,rows:t.filteredRows,"row-key":a=>a[3],class:"q-pa-sm",pagination:{rowsPerPage:25},"table-header-class":"bg-dark text-white","no-data-label":"There are no employees in the roster",dense:""},ee({header:d(a=>[u(Q,{class:"bg-dark text-white",props:a},{default:d(()=>[u(A,{"auto-width":""}),(m(!0),k(I,null,Y(a.cols,r=>(m(),p(A,{key:r.name,props:a},{default:d(()=>[T(D(r.label),1)]),_:2},1032,["props"]))),128)),u(A,{class:"text-left","auto-width":""},{default:d(()=>[T("Arrival Date")]),_:1})]),_:2},1032,["props"])]),body:d(a=>[u(Q,{props:a},{default:d(()=>[u(w,{"auto-width":""},{default:d(()=>[u(j,{class:"cursor-pointer",size:t.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:r=>t.viewEmployee(a.row),name:a.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024),(m(!0),k(I,null,Y(a.cols,r=>(m(),p(w,{key:r.name,props:a},{default:d(()=>[T(D(r.value),1)]),_:2},1032,["props"]))),128)),(m(),p(L,{class:"text-left",rowType:"assignment",row:a.row,key:a.row[3]},null,8,["row"]))]),_:2},1032,["props"])]),"no-data":d(({message:a})=>[R("div",ue,[u(j,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),R("span",null,D(a),1)])]),"top-right":d(()=>[R("div",me,"(Total: "+D(t.filteredRows.length)+" employees)",1),u(j,{class:"q-pl-md",size:"xs",color:t.showFilter?"info":"grey-7",name:"fa-solid fa-filter",onClick:s[8]||(s[8]=a=>t.showFilter=!t.showFilter)},null,8,["color"]),u(z,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:s[9]||(s[9]=a=>t.$emit("refreshData"))}),u(z,{dense:t.$q.screen.lt.md,class:"q-ml-sm",color:"primary",label:"Download",onClick:t.exportAllEmployees,disable:t.filteredRows.length<1},null,8,["dense","onClick","disable"])]),loading:d(()=>[u(oe,{showing:"",color:"primary"})]),_:2},[t.showFilter?{name:"top-row",fn:d(a=>[u(Q,{props:a},{default:d(()=>[u(w,{"auto-width":""}),(m(!0),k(I,null,Y(a.cols,r=>(m(),p(w,{key:r.name},{default:d(()=>[r.name===1?(m(),p(b,{key:0,outlined:"",dense:"","bg-color":"grey-2",clearable:"","input-class":"text-caption",modelValue:t.nameFilter,"onUpdate:modelValue":s[0]||(s[0]=n=>t.nameFilter=n)},null,8,["modelValue"])):r.name===7?(m(),p(b,{key:1,outlined:"",dense:"","bg-color":"grey-2",clearable:"","input-class":"text-caption",modelValue:t.phoneNumberFilter,"onUpdate:modelValue":s[1]||(s[1]=n=>t.phoneNumberFilter=n)},null,8,["modelValue"])):r.name===2?(m(),p(b,{key:2,outlined:"",dense:"","bg-color":"grey-2",clearable:"","input-class":"text-caption",modelValue:t.workdayIDFilter,"onUpdate:modelValue":s[2]||(s[2]=n=>t.workdayIDFilter=n)},null,8,["modelValue"])):r.name===3?(m(),p(b,{key:3,outlined:"",dense:"","bg-color":"grey-2",clearable:"","input-class":"text-caption",modelValue:t.payrollIDFilter,"onUpdate:modelValue":s[3]||(s[3]=n=>t.payrollIDFilter=n)},null,8,["modelValue"])):r.name===4?(m(),p(b,{key:4,outlined:"",dense:"","bg-color":"grey-2",clearable:"","input-class":"text-caption",modelValue:t.classificationFilter,"onUpdate:modelValue":s[4]||(s[4]=n=>t.classificationFilter=n)},null,8,["modelValue"])):r.name===116?(m(),p(b,{key:5,outlined:"",dense:"","bg-color":"grey-2",clearable:"","input-class":"text-caption",modelValue:t.rateFilter,"onUpdate:modelValue":s[5]||(s[5]=n=>t.rateFilter=n)},null,8,["modelValue"])):r.name===5?(m(),p(te,{key:6,outlined:"",dense:"","bg-color":"grey-2",clearable:"",class:"text-caption","popup-content-class":"text-caption",options:t.jobNumbers,"options-dense":"",modelValue:t.jobNumberFilter,"onUpdate:modelValue":s[6]||(s[6]=n=>t.jobNumberFilter=n)},null,8,["options","modelValue"])):le("",!0)]),_:2},1024))),128)),u(w,{"auto-width":""},{default:d(()=>[u(b,{outlined:"",dense:"","bg-color":"grey-2","input-class":"text-caption",clearable:"",type:"date",modelValue:t.arrivalDateFilter,"onUpdate:modelValue":s[7]||(s[7]=r=>t.arrivalDateFilter=r)},null,8,["modelValue"])]),_:1})]),_:2},1032,["props"])]),key:"0"}:void 0]),1032,["title","columns","visible-columns","rows","row-key"])])}var $e=X(ie,[["render",de],["__scopeId","data-v-3920a04a"]]);export{$e as R};
