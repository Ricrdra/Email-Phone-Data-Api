(()=>{"use strict";const e=function(e){return e.slice(0,1).toUpperCase()+e.toLowerCase().split("_").join(" ").slice(1)},t=function t(n){return Object.keys(n).filter((e=>null!==n[e]&&void 0!==n[e]&&""!==n[e])).map((i=>{if("[object Object]"===n[i].toString()){let o=`\n            <div>\n            <p> <strong>${e(i)}:</strong> </p>`;return o+=t(n[i]),o+"</div>"}return n[i].text?`: ${n[i].value}</p>`:`<p>${e(i)}: ${n[i]}</p>`})).join("")},n="47ec6b5efac94b058837d6d6daf09365",i="54070a71261847c5a5422628107c89ff",o=document.querySelector("#email"),c=document.querySelector("#phone"),a=document.querySelector("#submit"),r=document.querySelector(".content--email"),s=document.querySelector(".content--phone");a.addEventListener("click",(async()=>{a.disabled=!0,a.innerHTML="Fetching...",async function(e){return new Promise((async(t,n)=>{const o=function(e){return`https://emailvalidation.abstractapi.com/v1/?api_key=${i}&email=${e}`}(e),c=await fetch(o);t(await c.json())}))}(o.value).then((e=>{r.innerHTML=t(e)})).finally((()=>{setTimeout((()=>{(async function(e){return new Promise((async(t,i)=>{const o=function(e){return`https://phonevalidation.abstractapi.com/v1/?api_key=${n}&phone=${e}`}(e),c=await fetch(o);t(await c.json())}))})(c.value).then((e=>{console.log(e),s.innerHTML=t(e)}))}),1550),setTimeout((()=>{a.disabled=!1,a.innerHTML="Check Data"}),3e3)}))}))})();