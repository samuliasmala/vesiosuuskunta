import{j as f,r as h,R as b,a as y}from"./vendor.8a70a102.js";const x=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};x();const t=f.exports.jsx,a=f.exports.jsxs;function C(){var p;const s=window.location.search,n=new URLSearchParams(s),[o,l]=h.exports.useState((p=n.get("prevCount"))!=null?p:""),[e,r]=h.exports.useState(""),u=1.6,m=50,c=e!==""&&o!==""?Number(e)-Number(o):"",d=c!==""?u*c:"",v=d!==""?d+m:"";return t("div",{className:"App",children:a("div",{className:"container",children:[t("h1",{children:"Pinsi\xF6n alueen vesiosuuskunnan vesilaskuri"}),a(i,{name:"prevAmount",text:"Edellinen lukema: ",type:"number",value:o,setValue:l,children:["m",t("sup",{children:"2"})]}),a(i,{name:"currAmount",text:"Nykyinen lukema: ",type:"number",value:e,setValue:r,children:["m",t("sup",{children:"2"})]}),a(i,{name:"usage",text:"Kulutus: ",type:"number",value:c,disabled:!0,children:["m",t("sup",{children:"2"})]}),a(i,{name:"unitPrice",text:"Veden yksikk\xF6hinta: ",type:"number",value:u,disabled:!0,children:["\u20AC/m",t("sup",{children:"2"})]}),t(i,{name:"waterFee",text:"Veden hinta: ",type:"number",value:d,disabled:!0,children:"\u20AC"}),t(i,{name:"baseFee",text:"Perusmaksu: ",type:"number",value:m,disabled:!0,children:"\u20AC"}),t(i,{name:"totalFee",text:"Yhteens\xE4: ",type:"number",value:v,disabled:!0,children:"\u20AC"})]})})}const i=({children:s,name:n,text:o,type:l,value:e,setValue:r,disabled:u})=>a("div",{className:`row formRow ${n}Row`,children:[t(g,{name:n,text:o}),t(N,{type:l,name:n,value:String(e),setValue:r,disabled:u}),t(A,{children:s})]}),g=({name:s,text:n})=>t("div",{className:"col labelCol",children:t("label",{htmlFor:s,children:n})}),N=({type:s,name:n,value:o,setValue:l,disabled:e})=>t("div",{className:"col valueCol",children:t("input",{type:s,name:n,value:o,onChange:r=>l&&l(r.target.value),disabled:e,className:`inputField ${n}Field`})}),A=({children:s})=>t("div",{className:"col unitCol",children:s});b.render(t(y.StrictMode,{children:t(C,{})}),document.getElementById("root"));