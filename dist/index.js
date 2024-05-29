"use strict";var S=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var X=Object.prototype.hasOwnProperty;var T=(t,l)=>{for(var i in l)S(t,i,{get:l[i],enumerable:!0})},P=(t,l,i,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let e of I(l))!X.call(t,e)&&e!==i&&S(t,e,{get:()=>l[e],enumerable:!(a=B(l,e))||a.enumerable});return t};var N=t=>P(S({},"__esModule",{value:!0}),t);var Z={};T(Z,{XSwipe:()=>z});module.exports=N(Z);function v(t,l){let i=t.children[0].cloneNode(!0);return i.src=t.getAttribute("href")||"",i.style.maxWidth="100%",i.style.maxHeight="100%",i.style.borderRadius=l.borderRadius+"px",i}function k(t,l,i,a){let e=document.createElement("button");e.classList.add("xswipe-next-button"),e.style.width="fit-content",e.style.height="100%",e.style.boxSizing="border-box",e.style.paddingLeft=t.padding+"px",e.style.backgroundColor="transparent",e.style.position="absolute",e.style.right="-"+t.padding+"px",e.style.top="50%",e.style.transform="translateY(-50%)",e.style.color="white",e.style.border="none",e.style.cursor="pointer",e.style.outline="none",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.lineHeight="0",e.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>`;let o=document.createElement("button");return o.classList.add("xswipe-previous-button"),o.style.width="fit-content",o.style.height="100%",o.style.boxSizing="border-box",o.style.paddingRight=t.padding+"px",o.style.backgroundColor="transparent",o.style.position="absolute",o.style.left="-"+t.padding+"px",o.style.top="50%",o.style.transform="translateY(-50%)",o.style.color="white",o.style.border="none",o.style.cursor="pointer",o.style.outline="none",o.style.display="flex",o.style.justifyContent="center",o.style.alignItems="center",o.style.lineHeight="0",o.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>`,i<=0&&(o.style.display="none"),i>=a&&(e.style.display="none"),{next:e,previous:o}}function L(t,l,i,a){let e=document.createElement("div");e.classList.add("xswipe-actions"),e.style.position="absolute",e.style.boxSizing="border-box",e.style.bottom="0",e.style.left="50%",e.style.transform="translateX(-50%)",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.borderTopLeftRadius=t.borderRadius+"px",e.style.borderTopRightRadius=t.borderRadius+"px",e.style.overflow="hidden";let o=document.createElement("button");o.classList.add("xswipe-close-button"),o.style.width=t.actionsSize+"px",o.style.height=t.actionsSize+"px",o.style.backgroundColor=t.closeColor,o.style.color="white",o.style.border="none",o.style.cursor="pointer",o.style.outline="none",o.style.display="flex",o.style.justifyContent="center",o.style.alignItems="center",o.style.lineHeight="0",o.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>`;let r=document.createElement("button");r.classList.add("xswipe-fullscreen-button"),r.style.width=t.actionsSize+"px",r.style.height=t.actionsSize+"px",r.style.backgroundColor=t.actionsColor,r.style.color="white",r.style.border="none",r.style.cursor="pointer",r.style.outline="none",r.style.display="flex",r.style.justifyContent="center",r.style.alignItems="center",r.style.lineHeight="0",r.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>`;let s=document.createElement("button");s.classList.add("xswipe-fullscreen-button"),s.style.width=t.actionsSize+"px",s.style.height=t.actionsSize+"px",s.style.backgroundColor=t.actionsColor,s.style.color="white",s.style.border="none",s.style.cursor="pointer",s.style.outline="none",s.style.display="flex",s.style.justifyContent="center",s.style.alignItems="center",s.style.lineHeight="0",s.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
    </svg>`;let d=document.createElement("div");return d.classList.add("xswipe-informations"),d.style.minWidth=t.actionsSize+"px",d.style.boxSizing="border-box",d.style.padding="4px",d.style.height=t.actionsSize+"px",d.style.backgroundColor=t.actionsColor,d.style.color="white",d.style.border="none",d.style.display="flex",d.style.justifyContent="center",d.style.alignItems="center",d.style.lineHeight="1",d.style.fontSize="14px",d.textContent=`${i+1} / ${a+1}`,e.appendChild(d),t.allowZoom&&e.appendChild(s),t.allowFullscreen&&e.appendChild(r),e.appendChild(o),{actions:e,close:o}}function C(t,l){document.dispatchEvent(new Event("xswipe-"+l)),t&&t()}var z=class{constructor({name:l,wrapper:i,elements:a,opts:e,onPrevClick:o,onNextClick:r,onCloseClick:s}){this.initXSwipe({name:l,wrapper:i,elements:a,opts:e,onPrevClick:o,onNextClick:r,onCloseClick:s})}initXSwipe({name:l,wrapper:i,elements:a,opts:e,onPrevClick:o,onNextClick:r,onCloseClick:s}){let d=document.querySelector(i),g=document.querySelectorAll(a);if(d===null){console.error(`XSwipe: Wrapper element "${i}" not found.`);return}if(g.length===0){console.error(`XSwipe: Elements "${a}" not found.`);return}let p={name:l??"XSwipe",zoomLevel:e?.zoomLevel??1,allowZoom:e?.allowZoom??!1,allowFullscreen:e?.allowFullscreen??!1,allowDownload:e?.allowDownload??!1,allowShare:e?.allowShare??!1,bgColor:e?.bgColor??"rgba(0, 0, 0, 0.9)",navigationPosition:e?.navigationPosition??"bottom",padding:30,borderRadius:10,closeColor:"red",actionsColor:"gray",actionsSize:42};g.forEach((E,b)=>{E.addEventListener("click",R=>{R.preventDefault();let c=b,m=g.length-1,n=document.createElement("div");n.classList.add("xswipe-wrapper"),n.style.width="100%",n.style.height="100%",n.style.overflow="hidden",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.right="0",n.style.bottom="0",n.style.zIndex="9999",n.style.backgroundColor=p.bgColor,n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.paddingTop=p.padding+"px",n.style.paddingLeft=p.padding+"px",n.style.paddingRight=p.padding+"px",n.style.paddingBottom=p.padding+p.actionsSize+"px",n.style.boxSizing="border-box";let u=document.createElement("div");u.classList.add("xswipe-container"),u.style.position="relative",u.style.width="fit-content",u.style.height="fit-content";let y=document.createElement("div");y.classList.add("xswipe-content-wrapper"),y.style.width="fit-content",y.style.height="fit-content",y.style.lineHeight="0",y.style.borderRadius=p.borderRadius+"px",y.style.maxHeight="calc(100vh - "+p.padding*2+"px)",y.style.overflow="auto";let x=v(E,p),f=L(p,b,c,m),h=k(p,b,c,m);y.appendChild(x),u.appendChild(h.previous),u.appendChild(h.next),u.appendChild(y),n.appendChild(u),n.appendChild(f.actions),document.body.appendChild(n);function H(){f.close.addEventListener("click",()=>{n.remove(),C(s,"close-button")})}function $(){f.actions.remove(),f=L(p,c,c,m),n.appendChild(f.actions),H()}function j(){h.next.addEventListener("click",()=>{c<m&&(c++,x.remove(),x=v(g[c],p),y.appendChild(x),$(),M(),C(r,"click-next"))}),h.previous.addEventListener("click",()=>{c>0&&(c--,x.remove(),x=v(g[c],p),y.appendChild(x),$(),M(),C(o,"click-prev"))})}function M(){h.previous.remove(),h.next.remove(),h=k(p,b,c,m),u.appendChild(h.previous),u.appendChild(h.next),j()}H(),j(),n.addEventListener("click",A=>{A.target===n&&(n.remove(),C(s,"click-close"))})})})}};0&&(module.exports={XSwipe});
