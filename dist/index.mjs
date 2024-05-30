function C(t,r,c){let e;switch(t.dataset?.xswipeType){case"image":e=document.createElement("img"),e.src=t.getAttribute("href")||"",e.style.pointerEvents="none",e.classList.add("xswipe-loading"),e.classList.remove("xswipe-loaded"),e.style.backgroundPosition="center",e.style.backgroundRepeat="no-repeat",e.style.backgroundImage=`url('data:image/svg+xml;utf8,<svg width="24" height="24" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g class="spinner_V8m1"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle></g></svg>')`,e.onload=()=>{e.classList.remove("xswipe-loading"),e.classList.add("xswipe-loaded"),e.style.backgroundImage="none"};break;case"video":e=document.createElement("video"),e.src=t.getAttribute("href")||"",e.classList.add("xswipe-loading"),e.classList.remove("xswipe-loaded"),e.style.backgroundPosition="center",e.style.backgroundRepeat="no-repeat",e.style.backgroundImage=`url('data:image/svg+xml;utf8,<svg width="24" height="24" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g class="spinner_V8m1"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle></g></svg>')`,e.oncanplaythrough=()=>{e.classList.remove("xswipe-loading"),e.classList.add("xswipe-loaded"),e.style.backgroundImage="none"};break;case"iframe":e=document.createElement("iframe"),e.src=t.getAttribute("href")||"",e.style.border="none",e.style.outline="none",e.classList.add("xswipe-loading"),e.classList.remove("xswipe-loaded"),e.style.backgroundPosition="center",e.style.backgroundRepeat="no-repeat",e.style.backgroundImage=`url('data:image/svg+xml;utf8,<svg width="24" height="24" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g class="spinner_V8m1"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle></g></svg>')`,e.onload=()=>{e.classList.remove("xswipe-loading"),e.classList.add("xswipe-loaded"),e.style.backgroundImage="none"};break;default:e=document.createElement("img"),e.src=t.getAttribute("href")||"",e.style.pointerEvents="none",e.classList.add("xswipe-loading"),e.classList.remove("xswipe-loaded"),e.style.backgroundPosition="center",e.style.backgroundRepeat="no-repeat",e.style.backgroundImage=`url('data:image/svg+xml;utf8,<svg width="24" height="24" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g class="spinner_V8m1"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle></g></svg>')`,e.onload=()=>{e.classList.remove("xswipe-loading"),e.classList.add("xswipe-loaded"),e.style.backgroundImage="none"};break}return t.dataset?.xswipeHeight||t.dataset?.xswipeWidth?(t.dataset?.xswipeHeight?e.style.height=t.dataset.xswipeHeight+"px":e.style.height="auto",t.dataset?.xswipeWidth?(e.style.maxWidth="min(100%, "+t.dataset.xswipeWidth+"px)",e.style.width="100%"):e.style.width="auto"):(!c.allowZoom||r<=0)&&(e.style.maxWidth="100%",e.style.maxHeight="calc(100vh - "+(c.padding+c.padding+c.space+c.actionsSize)+"px)"),c.allowZoom&&r>0&&r<=c.zoomLevel&&(Number(e.width)>0?(e.style.width=Number(e.width)*(r+.5)+"px",e.style.maxWidth="none"):t.dataset?.xswipeWidth?(e.style.maxWidth="none",e.style.width=Number(t.dataset.xswipeWidth)*(r+.5)+"px",t.dataset?.xswipeHeight&&(e.style.height=Number(t.dataset.xswipeHeight)*(r+.5)+"px")):console.error("XSwipe: The image width is not set, so the zoom will not work.")),e.style.borderRadius=c.borderRadius+"px",e}function M(t,r,c,e){let o=document.createElement("button");o.classList.add("xswipe-next-button"),o.style.width="fit-content",o.style.height="100%",o.style.boxSizing="border-box",o.style.paddingLeft=t.padding+"px",o.style.backgroundColor="transparent",o.style.position="absolute",o.style.right="-"+t.padding+"px",o.style.top="50%",o.style.transform="translateY(-50%)",o.style.color="white",o.style.border="none",o.style.cursor="pointer",o.style.outline="none",o.style.display="flex",o.style.justifyContent="center",o.style.alignItems="center",o.style.lineHeight="0",o.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>`;let n=document.createElement("button");return n.classList.add("xswipe-previous-button"),n.style.width="fit-content",n.style.height="100%",n.style.boxSizing="border-box",n.style.paddingRight=t.padding+"px",n.style.backgroundColor="transparent",n.style.position="absolute",n.style.left="-"+t.padding+"px",n.style.top="50%",n.style.transform="translateY(-50%)",n.style.color="white",n.style.border="none",n.style.cursor="pointer",n.style.outline="none",n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.lineHeight="0",n.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>`,c<=0&&(n.style.display="none"),c>=e&&(o.style.display="none"),{next:o,previous:n}}function _(t,r,c,e){let o=document.createElement("div");o.classList.add("xswipe-actions"),o.style.position="absolute",o.style.boxSizing="border-box",o.style.left="50%",o.style.transform="translateX(-50%)",o.style.display="flex",o.style.justifyContent="center",o.style.alignItems="center",o.style.overflow="hidden",t.navigationPosition==="top"?(o.style.top="0",o.style.borderBottomLeftRadius=t.borderRadius+"px",o.style.borderBottomRightRadius=t.borderRadius+"px"):t.navigationPosition==="bottom"?(o.style.bottom="0",o.style.borderTopLeftRadius=t.borderRadius+"px",o.style.borderTopRightRadius=t.borderRadius+"px"):console.error("XSwipe: Invalid navigation position");let n=document.createElement("button");n.classList.add("xswipe-close-button"),n.style.width=t.actionsSize+"px",n.style.height=t.actionsSize+"px",n.style.backgroundColor=t.closeColor,n.style.color="white",n.style.border="none",n.style.cursor="pointer",n.style.outline="none",n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.lineHeight="0",n.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>`;let d=document.createElement("button");d.classList.add("xswipe-fullscreen-button"),d.style.width=t.actionsSize+"px",d.style.height=t.actionsSize+"px",d.style.backgroundColor=t.actionsColor,d.style.color="white",d.style.border="none",d.style.cursor="pointer",d.style.outline="none",d.style.display="flex",d.style.justifyContent="center",d.style.alignItems="center",d.style.lineHeight="0",d.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>`;let a=document.createElement("button");a.classList.add("xswipe-zoom-plus-button"),a.style.width=t.actionsSize+"px",a.style.height=t.actionsSize+"px",a.style.backgroundColor=t.actionsColor,a.style.color="white",a.style.border="none",a.style.cursor="pointer",a.style.outline="none",a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center",a.style.lineHeight="0",a.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
    </svg>`;let y=document.createElement("button");y.classList.add("xswipe-zoom-minus-button"),y.style.width=t.actionsSize+"px",y.style.height=t.actionsSize+"px",y.style.backgroundColor=t.actionsColor,y.style.color="white",y.style.border="none",y.style.cursor="pointer",y.style.outline="none",y.style.display="flex",y.style.justifyContent="center",y.style.alignItems="center",y.style.lineHeight="0",y.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${t.actionsSize/1.5+"px"} height=${t.actionsSize/1.5+"px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6" />
    </svg>`;let s=document.createElement("div");return s.classList.add("xswipe-informations"),s.style.minWidth=t.actionsSize+"px",s.style.boxSizing="border-box",s.style.padding="4px",s.style.height=t.actionsSize+"px",s.style.backgroundColor=t.actionsColor,s.style.color="white",s.style.border="none",s.style.display="flex",s.style.justifyContent="center",s.style.alignItems="center",s.style.lineHeight="1",s.style.fontSize="14px",s.textContent=`${c+1} / ${e+1}`,o.appendChild(s),t.allowZoom&&(o.appendChild(y),o.appendChild(a)),t.allowFullscreen&&o.appendChild(d),o.appendChild(n),{actions:o,zoomMinus:y,zoomPlus:a,fullscreen:d,close:n}}function H(t,r){let c=null;if(t.dataset?.xswipeTitle){let e=document.createElement("div");return e.classList.add("xswipe-title"),e.style.position="absolute",e.style.left="50%",e.style.transform="translateX(-50%)",e.style.maxWidth="100%",e.style.color="white",e.style.fontSize="18px",e.style.fontWeight="500",e.style.textAlign="center",e.style.whiteSpace="wrap",e.style.wordBreak="break-word",e.textContent=t.dataset.xswipeTitle,r.navigationPosition==="top"?e.style.bottom=r.padding/2-r.space/2+"px":r.navigationPosition==="bottom"?e.style.top=r.padding/2-r.space/2+"px":console.error("XSwipe: Invalid navigation position"),e}return c}function W(t,r){if(r.allowZoom){let g=function(i){x=!0,d=i.pageY-t.offsetTop,a=i.pageX-t.offsetLeft,y=t.scrollLeft,s=t.scrollTop},L=function(i){x=!1},z=function(i){x=!1},T=function(i){if(x){i.preventDefault();let m=i.pageY-t.offsetTop-d;t.scrollTop=s-m;let h=i.pageX-t.offsetLeft-a;t.scrollLeft=y-h}};var c=g,e=L,o=z,n=T;let d=0,a=0,y=0,s=0,x=!1;t.addEventListener("mousedown",i=>g(i)),t.addEventListener("mouseup",i=>{L(i)}),t.addEventListener("mouseleave",i=>{z(i)}),t.addEventListener("mousemove",i=>{T(i)})}}function E(t,r){document.dispatchEvent(new Event("xswipe-"+r)),t&&t()}var X=class{constructor({name:r,wrapper:c,elements:e,opts:o,onPrevClick:n,onNextClick:d,onCloseClick:a}){this.initXSwipe({name:r,wrapper:c,elements:e,opts:o,onPrevClick:n,onNextClick:d,onCloseClick:a})}initXSwipe({name:r,wrapper:c,elements:e,opts:o,onPrevClick:n,onNextClick:d,onCloseClick:a}){let y=document.querySelectorAll(c);if(y.length===0){console.error(`XSwipe: Wrapper element "${c}" not found.`);return}let s={name:r??"XSwipe",zoomLevel:o?.zoomLevel??0,allowZoom:o?.allowZoom??!1,zoomDoubleTap:o?.zoomDoubleTap??!1,allowFullscreen:o?.allowFullscreen??!1,allowDownload:o?.allowDownload??!1,allowShare:o?.allowShare??!1,bgColor:o?.bgColor??"rgba(0, 0, 0, 0.9)",navigationPosition:o?.navigationPosition??"bottom",space:10,padding:30,borderRadius:o?.borderRadius??10,closeColor:o?.closeColor??"red",actionsColor:o?.actionsColor??"gray",actionsSize:o?.actionsSize??42};y.forEach(x=>{if(x.classList.contains("xswipe-initialized"))return;x.classList.add("xswipe-initialized");let g=x.querySelectorAll(e);if(g.length===0){console.error(`XSwipe: Elements "${e}" not found.`);return}g.forEach((L,z)=>{L.addEventListener("click",T=>{T.preventDefault();let i=z,S=g.length-1,m=0,l=document.createElement("div");l.classList.add("xswipe-wrapper"),l.style.width="100%",l.style.height="100%",l.style.overflow="hidden",l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.right="0",l.style.bottom="0",l.style.zIndex="9999",l.style.backgroundColor=s.bgColor,l.style.display="flex",l.style.justifyContent="center",l.style.alignItems="center",l.style.paddingLeft=s.padding+"px",l.style.paddingRight=s.padding+"px",l.style.boxSizing="border-box",s.navigationPosition==="top"?(l.style.paddingBottom=s.padding+s.space+"px",l.style.paddingTop=s.padding+s.actionsSize+"px"):s.navigationPosition==="bottom"?(l.style.paddingTop=s.padding+s.space+"px",l.style.paddingBottom=s.padding+s.actionsSize+"px"):console.error("XSwipe: Invalid navigation position");let h=document.createElement("div");h.classList.add("xswipe-container"),h.style.position="relative",h.style.width="fit-content",h.style.height="fit-content",h.style.maxWidth="100%",h.style.maxHeight="100%";let p=document.createElement("div");p.classList.add("xswipe-content-wrapper"),p.style.width="fit-content",p.style.height="fit-content",p.style.maxWidth="100%",p.style.maxHeight="100%",p.style.lineHeight="0",p.style.position="relative",p.style.cursor="pointer",p.style.scrollbarWidth="none",p.style.borderRadius=s.borderRadius+"px",p.style.maxHeight="calc(100vh - "+(s.padding+s.padding+10+s.actionsSize)+"px)",p.style.overflow="auto",W(p,s);let u=C(L,m,s),k=_(s,L,i,S),w=M(s,z,i,S),f=H(L,s);p.appendChild(u),h.appendChild(w.previous),h.appendChild(w.next),h.appendChild(p),l.appendChild(h),l.appendChild(k.actions),f&&l.appendChild(f),document.body.appendChild(l);function I(){k.close.addEventListener("click",()=>{l.remove(),E(a,"close-button")}),k.zoomPlus.addEventListener("click",()=>{m<s.zoomLevel&&(m++,u.remove(),u=C(g[i],m,s),p.appendChild(u))}),k.zoomMinus.addEventListener("click",()=>{m>0&&(m--,u.remove(),u=C(g[i],m,s),p.appendChild(u))}),k.fullscreen.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():l.requestFullscreen()})}function R(){k.actions.remove(),k=_(s,g[i],i,S),l.appendChild(k.actions),I()}function B(){w.next.addEventListener("click",()=>{i<S&&(i++,m=0,u.remove(),u=C(g[i],m,s),p.appendChild(u),f&&f.remove(),f=H(g[i],s),f&&l.appendChild(f),R(),P(),E(d,"click-next"))}),w.previous.addEventListener("click",()=>{i>0&&(i--,m=0,u.remove(),u=C(g[i],m,s),p.appendChild(u),f&&f.remove(),f=H(g[i],s),f&&l.appendChild(f),R(),P(),E(n,"click-prev"))})}function P(){w.previous.remove(),w.next.remove(),w=M(s,z,i,S),h.appendChild(w.previous),h.appendChild(w.next),B()}I(),B(),l.addEventListener("click",V=>{V.target===l&&(l.remove(),E(a,"click-close"))}),s.zoomDoubleTap&&p.addEventListener("dblclick",()=>{m>0?(m=0,u.remove(),u=C(g[i],m,s),p.appendChild(u)):m<s.zoomLevel&&(m++,u.remove(),u=C(g[i],m,s),p.appendChild(u))})})})})}};export{X as XSwipe};
