import"./index.04bc0a32.js";import{q as d,T as p}from"./app.00bf1e10.js";const w=(c,l)=>{l=l||"";const e=1024,o=window.atob(c),i=o.length,s=Math.ceil(i/e),h=new Array(s);for(let t=0;t<s;++t){const r=t*e,a=Math.min(r+e,i),f=new Array(a-r);for(let n=r,u=0;n<a;++u,++n)f[u]=o[n].charCodeAt(0);h[t]=new Uint8Array(f)}return new Blob(h,{type:l})},b=(c,l="file.pdf")=>{const e=URL.createObjectURL(c),o=document.createElement("a");o.href=e,o.download=l,document.body.appendChild(o),o.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),document.body.removeChild(o)},m=async c=>{const{tableId:l,recordId:e,fieldId:o,versionNumber:i,name:s}=c,h=await d.downloadBase64({tableId:l,recordId:e,fieldId:o,versionNumber:i}),t=await w(h);b(t,s)},C=c=>{(c.fullScreen===null||c.fullScreen===void 0)&&(c.fullScreen=!0),c.name==="Full Profile"&&!c.height&&(c.height=775),c.width=c.width?c.width:screen.availWidth&&c.fullScreen?screen.availWidth:1450,c.height=c.height?c.height:screen.availHeight&&c.fullScreen?screen.availHeight:700;const l=window.top.outerHeight/2+window.top.screenY-c.height/2,e=window.top.outerWidth/2+window.top.screenX-c.width/2;`${c.width}`,`${c.height}`,c.fullScreen,p(c.url,null,{width:c.width,height:c.height,top:l,left:e,popup:!0,fullscreen:c.fullScreen||!0,menubar:!1,toolbar:!1})},U=c=>{if(typeof c!="string")return"";const l=c.trim().split(" ");if(l.length===1){if(c=c.toLowerCase(),c==="de"||c==="dela"||c==="del"||c==="las"||c==="y"||c==="la")return c;try{c=c.charAt(0).toUpperCase()+c.slice(1)}catch{c=c.charAt(0)+c.slice(1)}if(c.startsWith("Mc"))try{c=c.slice(0,2)+c.charAt(2).toUpperCase()+c.slice(3)}catch{c=c.slice(0,2)+c.charAt(2)+c.slice(3)}if(c.includes("'")){const e=c.indexOf("'");try{c=c.slice(0,e+1)+c.charAt(e+1).toUpperCase()+c.slice(e+2)}catch{c=c.slice(0,e+1)+c.charAt(e+1)+(c.slice(e+2)?c.slice(e+2):"")}}if(c.includes("-")){const e=c.indexOf("-");try{c=c.slice(0,e+1)+c.charAt(e+1).toUpperCase()+c.slice(e+2)}catch{c=c.slice(0,e+1)+c.charAt(e+1)+(c.slice(e+2)?c.slice(e+2):"")}}return c}else{for(let e=l.length-1;e>=0;e--)if(l[e]===""){l.splice(e);continue}else{try{l[e]=l[e].toLowerCase()}catch{return l[e]}if(l[e]==="de"||l[e]==="dela"||l[e]==="del"||l[e]==="la"||l[e]==="las"||l[e]==="y")if(e===0&&l[e]==="la"){try{l[e]=l[e].charAt(0).toUpperCase()+l[e].slice(1)}catch{l[e]=l[e].charAt(0)+l[e].slice(1)}continue}else continue;else{try{l[e]=l[e].charAt(0).toUpperCase()+l[e].slice(1)}catch{l[e]=l[e].charAt(0)+l[e].slice(1)}if(l[e].startsWith("Mc"))try{l[e]=l[e].slice(0,2)+l[e][2].toUpperCase()+l[e].slice(3)}catch{l[e]=l[e].slice(0,2)+l[e][2]+l[e].slice(3)}if(l[e].includes("'")){const o=l[e].indexOf("'");try{l[e]=l[e].slice(0,o+1)+l[e][o+1].toUpperCase()+(l[e].slice(o+2)?l[e].slice(o+2):"")}catch{l[e]=l[e].slice(0,o+1)+(l[e][o+1]?l[e][o+1]:"")+(l[e].slice(o+2)?l[e].slice(o+2):"")}}if(l[e].includes("-")){const o=l[e].indexOf("-");try{l[e]=l[e].slice(0,o+1)+l[e][o+1].toUpperCase()+l[e].slice(o+2)}catch{l[e]=l[e].slice(0,o+1)+(l[e][o+1]?l[e][o+1]:"")+(l[e].slice(o+2)?l[e].slice(o+2):"")}}}}return l.join(" ")}};export{m as d,U as f,C as o};
