import{r as x,j as n,u as Pi,a as zi,V as Di,T as Ai,C as Ii,b as Nn,E as si,F as Li,c as Oi,S as Rn,A as Bi,D as Fi,d as oi,e as Yi,f as ln,R as En,g as Hi}from"./vendor-three-_elsi3OQ.js";import{g as L,L as Xi}from"./vendor-animation-BGbbmiRj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function qi(s,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(s,r.key,r)}}function Gi(s,e,i){return e&&qi(s.prototype,e),s}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ye,Vr,Ke,zt,Dt,or,ai,Xt,wr,li,jt,lt,ci,di=function(){return ye||typeof window<"u"&&(ye=window.gsap)&&ye.registerPlugin&&ye},ui=1,sr=[],z=[],gt=[],_r=Date.now,bn=function(e,i){return i},Wi=function(){var e=wr.core,i=e.bridge||{},r=e._scrollers,t=e._proxies;r.push.apply(r,z),t.push.apply(t,gt),z=r,gt=t,bn=function(c,a){return i[c](a)}},At=function(e,i){return~gt.indexOf(e)&&gt[gt.indexOf(e)+1][i]},jr=function(e){return!!~li.indexOf(e)},Ie=function(e,i,r,t,o){return e.addEventListener(i,r,{passive:t!==!1,capture:!!o})},Ae=function(e,i,r,t){return e.removeEventListener(i,r,!!t)},Ir="scrollLeft",Lr="scrollTop",vn=function(){return jt&&jt.isPressed||z.cache++},tn=function(e,i){var r=function t(o){if(o||o===0){ui&&(Ke.history.scrollRestoration="manual");var c=jt&&jt.isPressed;o=t.v=Math.round(o)||(jt&&jt.iOS?1:0),e(o),t.cacheID=z.cache,c&&bn("ss",o)}else(i||z.cache!==t.cacheID||bn("ref"))&&(t.cacheID=z.cache,t.v=e());return t.v+t.offset};return r.offset=0,e&&r},Fe={s:Ir,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tn(function(s){return arguments.length?Ke.scrollTo(s,ue.sc()):Ke.pageXOffset||zt[Ir]||Dt[Ir]||or[Ir]||0})},ue={s:Lr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fe,sc:tn(function(s){return arguments.length?Ke.scrollTo(Fe.sc(),s):Ke.pageYOffset||zt[Lr]||Dt[Lr]||or[Lr]||0})},Xe=function(e,i){return(i&&i._ctx&&i._ctx.selector||ye.utils.toArray)(e)[0]||(typeof e=="string"&&ye.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},$i=function(e,i){for(var r=i.length;r--;)if(i[r]===e||i[r].contains(e))return!0;return!1},It=function(e,i){var r=i.s,t=i.sc;jr(e)&&(e=zt.scrollingElement||Dt);var o=z.indexOf(e),c=t===ue.sc?1:2;!~o&&(o=z.push(e)-1),z[o+c]||Ie(e,"scroll",vn);var a=z[o+c],p=a||(z[o+c]=tn(At(e,r),!0)||(jr(e)?t:tn(function(m){return arguments.length?e[r]=m:e[r]})));return p.target=e,a||(p.smooth=ye.getProperty(e,"scrollBehavior")==="smooth"),p},yn=function(e,i,r){var t=e,o=e,c=_r(),a=c,p=i||50,m=Math.max(500,p*3),R=function(b,q){var H=_r();q||H-c>p?(o=t,t=b,a=c,c=H):r?t+=b:t=o+(b-o)/(H-a)*(c-a)},v=function(){o=t=r?0:t,a=c=0},g=function(b){var q=a,H=o,oe=_r();return(b||b===0)&&b!==t&&R(b),c===a||oe-a>m?0:(t+(r?H:-H))/((r?oe:c)-q)*1e3};return{update:R,reset:v,getVelocity:g}},gr=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Fn=function(e){var i=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(r)?i:r},pi=function(){wr=ye.core.globals().ScrollTrigger,wr&&wr.core&&Wi()},fi=function(e){return ye=e||di(),!Vr&&ye&&typeof document<"u"&&document.body&&(Ke=window,zt=document,Dt=zt.documentElement,or=zt.body,li=[Ke,zt,Dt,or],ye.utils.clamp,ci=ye.core.context||function(){},Xt="onpointerenter"in or?"pointer":"mouse",ai=ee.isTouch=Ke.matchMedia&&Ke.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ke||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,lt=ee.eventTypes=("ontouchstart"in Dt?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Dt?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ui=0},500),pi(),Vr=1),Vr};Fe.op=ue;z.cache=0;var ee=function(){function s(i){this.init(i)}var e=s.prototype;return e.init=function(r){Vr||fi(ye)||console.warn("Please gsap.registerPlugin(Observer)"),wr||pi();var t=r.tolerance,o=r.dragMinimum,c=r.type,a=r.target,p=r.lineHeight,m=r.debounce,R=r.preventDefault,v=r.onStop,g=r.onStopDelay,u=r.ignore,b=r.wheelSpeed,q=r.event,H=r.onDragStart,oe=r.onDragEnd,$=r.onDrag,xe=r.onPress,N=r.onRelease,Ze=r.onRight,G=r.onLeft,k=r.onUp,Re=r.onDown,Ye=r.onChangeX,y=r.onChangeY,pe=r.onChange,j=r.onToggleX,ht=r.onToggleY,ae=r.onHover,Ee=r.onHoverEnd,Me=r.onMove,F=r.ignoreCheck,te=r.isNormalizer,re=r.onGestureStart,l=r.onGestureEnd,le=r.onWheel,Lt=r.onEnable,Ct=r.onDisable,Qe=r.onClick,mt=r.scrollSpeed,we=r.capture,ne=r.allowClicks,Pe=r.lockAxis,_e=r.onLockAxis;this.target=a=Xe(a)||Dt,this.vars=r,u&&(u=ye.utils.toArray(u)),t=t||1e-9,o=o||0,b=b||1,mt=mt||1,c=c||"wheel,touch,pointer",m=m!==!1,p||(p=parseFloat(Ke.getComputedStyle(or).lineHeight)||22);var Tt,ze,De,I,Z,He,qe,d=this,Ge=0,xt=0,St=r.passive||!R&&r.passive!==!1,V=It(a,Fe),bt=It(a,ue),Nt=V(),Ot=bt(),fe=~c.indexOf("touch")&&!~c.indexOf("pointer")&&lt[0]==="pointerdown",Rt=jr(a),Q=a.ownerDocument||zt,nt=[0,0,0],Je=[0,0,0],vt=0,dr=function(){return vt=_r()},ie=function(_,O){return(d.event=_)&&u&&$i(_.target,u)||O&&fe&&_.pointerType!=="touch"||F&&F(_,O)},zr=function(){d._vx.reset(),d._vy.reset(),ze.pause(),v&&v(d)},yt=function(){var _=d.deltaX=Fn(nt),O=d.deltaY=Fn(Je),f=Math.abs(_)>=t,C=Math.abs(O)>=t;pe&&(f||C)&&pe(d,_,O,nt,Je),f&&(Ze&&d.deltaX>0&&Ze(d),G&&d.deltaX<0&&G(d),Ye&&Ye(d),j&&d.deltaX<0!=Ge<0&&j(d),Ge=d.deltaX,nt[0]=nt[1]=nt[2]=0),C&&(Re&&d.deltaY>0&&Re(d),k&&d.deltaY<0&&k(d),y&&y(d),ht&&d.deltaY<0!=xt<0&&ht(d),xt=d.deltaY,Je[0]=Je[1]=Je[2]=0),(I||De)&&(Me&&Me(d),De&&(H&&De===1&&H(d),$&&$(d),De=0),I=!1),He&&!(He=!1)&&_e&&_e(d),Z&&(le(d),Z=!1),Tt=0},Qt=function(_,O,f){nt[f]+=_,Je[f]+=O,d._vx.update(_),d._vy.update(O),m?Tt||(Tt=requestAnimationFrame(yt)):yt()},Jt=function(_,O){Pe&&!qe&&(d.axis=qe=Math.abs(_)>Math.abs(O)?"x":"y",He=!0),qe!=="y"&&(nt[2]+=_,d._vx.update(_,!0)),qe!=="x"&&(Je[2]+=O,d._vy.update(O,!0)),m?Tt||(Tt=requestAnimationFrame(yt)):yt()},Et=function(_){if(!ie(_,1)){_=gr(_,R);var O=_.clientX,f=_.clientY,C=O-d.x,w=f-d.y,T=d.isDragging;d.x=O,d.y=f,(T||(C||w)&&(Math.abs(d.startX-O)>=o||Math.abs(d.startY-f)>=o))&&(De||(De=T?2:1),T||(d.isDragging=!0),Jt(C,w))}},Bt=d.onPress=function(S){ie(S,1)||S&&S.button||(d.axis=qe=null,ze.pause(),d.isPressed=!0,S=gr(S),Ge=xt=0,d.startX=d.x=S.clientX,d.startY=d.y=S.clientY,d._vx.reset(),d._vy.reset(),Ie(te?a:Q,lt[1],Et,St,!0),d.deltaX=d.deltaY=0,xe&&xe(d))},D=d.onRelease=function(S){if(!ie(S,1)){Ae(te?a:Q,lt[1],Et,!0);var _=!isNaN(d.y-d.startY),O=d.isDragging,f=O&&(Math.abs(d.x-d.startX)>3||Math.abs(d.y-d.startY)>3),C=gr(S);!f&&_&&(d._vx.reset(),d._vy.reset(),R&&ne&&ye.delayedCall(.08,function(){if(_r()-vt>300&&!S.defaultPrevented){if(S.target.click)S.target.click();else if(Q.createEvent){var w=Q.createEvent("MouseEvents");w.initMouseEvent("click",!0,!0,Ke,1,C.screenX,C.screenY,C.clientX,C.clientY,!1,!1,!1,!1,0,null),S.target.dispatchEvent(w)}}})),d.isDragging=d.isGesturing=d.isPressed=!1,v&&O&&!te&&ze.restart(!0),De&&yt(),oe&&O&&oe(d),N&&N(d,f)}},Ft=function(_){return _.touches&&_.touches.length>1&&(d.isGesturing=!0)&&re(_,d.isDragging)},it=function(){return(d.isGesturing=!1)||l(d)},st=function(_){if(!ie(_)){var O=V(),f=bt();Qt((O-Nt)*mt,(f-Ot)*mt,1),Nt=O,Ot=f,v&&ze.restart(!0)}},ot=function(_){if(!ie(_)){_=gr(_,R),le&&(Z=!0);var O=(_.deltaMode===1?p:_.deltaMode===2?Ke.innerHeight:1)*b;Qt(_.deltaX*O,_.deltaY*O,0),v&&!te&&ze.restart(!0)}},Yt=function(_){if(!ie(_)){var O=_.clientX,f=_.clientY,C=O-d.x,w=f-d.y;d.x=O,d.y=f,I=!0,v&&ze.restart(!0),(C||w)&&Jt(C,w)}},er=function(_){d.event=_,ae(d)},wt=function(_){d.event=_,Ee(d)},ur=function(_){return ie(_)||gr(_,R)&&Qe(d)};ze=d._dc=ye.delayedCall(g||.25,zr).pause(),d.deltaX=d.deltaY=0,d._vx=yn(0,50,!0),d._vy=yn(0,50,!0),d.scrollX=V,d.scrollY=bt,d.isDragging=d.isGesturing=d.isPressed=!1,ci(this),d.enable=function(S){return d.isEnabled||(Ie(Rt?Q:a,"scroll",vn),c.indexOf("scroll")>=0&&Ie(Rt?Q:a,"scroll",st,St,we),c.indexOf("wheel")>=0&&Ie(a,"wheel",ot,St,we),(c.indexOf("touch")>=0&&ai||c.indexOf("pointer")>=0)&&(Ie(a,lt[0],Bt,St,we),Ie(Q,lt[2],D),Ie(Q,lt[3],D),ne&&Ie(a,"click",dr,!0,!0),Qe&&Ie(a,"click",ur),re&&Ie(Q,"gesturestart",Ft),l&&Ie(Q,"gestureend",it),ae&&Ie(a,Xt+"enter",er),Ee&&Ie(a,Xt+"leave",wt),Me&&Ie(a,Xt+"move",Yt)),d.isEnabled=!0,d.isDragging=d.isGesturing=d.isPressed=I=De=!1,d._vx.reset(),d._vy.reset(),Nt=V(),Ot=bt(),S&&S.type&&Bt(S),Lt&&Lt(d)),d},d.disable=function(){d.isEnabled&&(sr.filter(function(S){return S!==d&&jr(S.target)}).length||Ae(Rt?Q:a,"scroll",vn),d.isPressed&&(d._vx.reset(),d._vy.reset(),Ae(te?a:Q,lt[1],Et,!0)),Ae(Rt?Q:a,"scroll",st,we),Ae(a,"wheel",ot,we),Ae(a,lt[0],Bt,we),Ae(Q,lt[2],D),Ae(Q,lt[3],D),Ae(a,"click",dr,!0),Ae(a,"click",ur),Ae(Q,"gesturestart",Ft),Ae(Q,"gestureend",it),Ae(a,Xt+"enter",er),Ae(a,Xt+"leave",wt),Ae(a,Xt+"move",Yt),d.isEnabled=d.isPressed=d.isDragging=!1,Ct&&Ct(d))},d.kill=d.revert=function(){d.disable();var S=sr.indexOf(d);S>=0&&sr.splice(S,1),jt===d&&(jt=0)},sr.push(d),te&&jr(a)&&(jt=d),d.enable(q)},Gi(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();ee.version="3.14.2";ee.create=function(s){return new ee(s)};ee.register=fi;ee.getAll=function(){return sr.slice()};ee.getById=function(s){return sr.filter(function(e){return e.vars.id===s})[0]};di()&&ye.registerPlugin(ee);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var h,nr,P,X,Ve,B,Mn,rn,Mr,kr,mr,Or,Te,on,wn,Oe,Yn,Hn,ir,gi,cn,hi,Le,_n,mi,xi,Pt,jn,Pn,ar,zn,Cr,kn,dn,Br=1,Se=Date.now,un=Se(),rt=0,xr=0,Xn=function(e,i,r){var t=Ue(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return r["_"+i+"Clamp"]=t,t?e.substr(6,e.length-7):e},qn=function(e,i){return i&&(!Ue(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ui=function s(){return xr&&requestAnimationFrame(s)},Gn=function(){return on=1},Wn=function(){return on=0},pt=function(e){return e},br=function(e){return Math.round(e*1e5)/1e5||0},bi=function(){return typeof window<"u"},vi=function(){return h||bi()&&(h=window.gsap)&&h.registerPlugin&&h},Vt=function(e){return!!~Mn.indexOf(e)},yi=function(e){return(e==="Height"?zn:P["inner"+e])||Ve["client"+e]||B["client"+e]},wi=function(e){return At(e,"getBoundingClientRect")||(Vt(e)?function(){return en.width=P.innerWidth,en.height=zn,en}:function(){return _t(e)})},Vi=function(e,i,r){var t=r.d,o=r.d2,c=r.a;return(c=At(e,"getBoundingClientRect"))?function(){return c()[t]}:function(){return(i?yi(o):e["client"+o])||0}},Ki=function(e,i){return!i||~gt.indexOf(e)?wi(e):function(){return en}},ft=function(e,i){var r=i.s,t=i.d2,o=i.d,c=i.a;return Math.max(0,(r="scroll"+t)&&(c=At(e,r))?c()-wi(e)()[o]:Vt(e)?(Ve[r]||B[r])-yi(t):e[r]-e["offset"+t])},Fr=function(e,i){for(var r=0;r<ir.length;r+=3)(!i||~i.indexOf(ir[r+1]))&&e(ir[r],ir[r+1],ir[r+2])},Ue=function(e){return typeof e=="string"},Ne=function(e){return typeof e=="function"},vr=function(e){return typeof e=="number"},qt=function(e){return typeof e=="object"},hr=function(e,i,r){return e&&e.progress(i?0:1)&&r&&e.pause()},pn=function(e,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return i(e)}):i(e);r&&r.totalTime&&(e.callbackAnimation=r)}},tr=Math.abs,_i="left",ji="top",Dn="right",An="bottom",Wt="width",$t="height",Tr="Right",Sr="Left",Nr="Top",Rr="Bottom",se="padding",et="margin",cr="Width",In="Height",de="px",tt=function(e){return P.getComputedStyle(e)},Zi=function(e){var i=tt(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},$n=function(e,i){for(var r in i)r in e||(e[r]=i[r]);return e},_t=function(e,i){var r=i&&tt(e)[wn]!=="matrix(1, 0, 0, 1, 0, 0)"&&h.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),t=e.getBoundingClientRect();return r&&r.progress(0).kill(),t},nn=function(e,i){var r=i.d2;return e["offset"+r]||e["client"+r]||0},ki=function(e){var i=[],r=e.labels,t=e.duration(),o;for(o in r)i.push(r[o]/t);return i},Qi=function(e){return function(i){return h.utils.snap(ki(e),i)}},Ln=function(e){var i=h.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(t,o){return t-o});return r?function(t,o,c){c===void 0&&(c=.001);var a;if(!o)return i(t);if(o>0){for(t-=c,a=0;a<r.length;a++)if(r[a]>=t)return r[a];return r[a-1]}else for(a=r.length,t+=c;a--;)if(r[a]<=t)return r[a];return r[0]}:function(t,o,c){c===void 0&&(c=.001);var a=i(t);return!o||Math.abs(a-t)<c||a-t<0==o<0?a:i(o<0?t-e:t+e)}},Ji=function(e){return function(i,r){return Ln(ki(e))(i,r.direction)}},Yr=function(e,i,r,t){return r.split(",").forEach(function(o){return e(i,o,t)})},me=function(e,i,r,t,o){return e.addEventListener(i,r,{passive:!t,capture:!!o})},he=function(e,i,r,t){return e.removeEventListener(i,r,!!t)},Hr=function(e,i,r){r=r&&r.wheelHandler,r&&(e(i,"wheel",r),e(i,"touchmove",r))},Un={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xr={toggleActions:"play",anticipatePin:0},sn={top:0,left:0,center:.5,bottom:1,right:1},Kr=function(e,i){if(Ue(e)){var r=e.indexOf("="),t=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(t*=i/100),e=e.substr(0,r-1)),e=t+(e in sn?sn[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},qr=function(e,i,r,t,o,c,a,p){var m=o.startColor,R=o.endColor,v=o.fontSize,g=o.indent,u=o.fontWeight,b=X.createElement("div"),q=Vt(r)||At(r,"pinType")==="fixed",H=e.indexOf("scroller")!==-1,oe=q?B:r,$=e.indexOf("start")!==-1,xe=$?m:R,N="border-color:"+xe+";font-size:"+v+";color:"+xe+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return N+="position:"+((H||p)&&q?"fixed;":"absolute;"),(H||p||!q)&&(N+=(t===ue?Dn:An)+":"+(c+parseFloat(g))+"px;"),a&&(N+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),b._isStart=$,b.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),b.style.cssText=N,b.innerText=i||i===0?e+"-"+i:e,oe.children[0]?oe.insertBefore(b,oe.children[0]):oe.appendChild(b),b._offset=b["offset"+t.op.d2],Zr(b,0,t,$),b},Zr=function(e,i,r,t){var o={display:"block"},c=r[t?"os2":"p2"],a=r[t?"p2":"os2"];e._isFlipped=t,o[r.a+"Percent"]=t?-100:0,o[r.a]=t?"1px":0,o["border"+c+cr]=1,o["border"+a+cr]=0,o[r.p]=i+"px",h.set(e,o)},E=[],Cn={},Pr,Vn=function(){return Se()-rt>34&&(Pr||(Pr=requestAnimationFrame(kt)))},rr=function(){(!Le||!Le.isPressed||Le.startX>B.clientWidth)&&(z.cache++,Le?Pr||(Pr=requestAnimationFrame(kt)):kt(),rt||Zt("scrollStart"),rt=Se())},fn=function(){xi=P.innerWidth,mi=P.innerHeight},yr=function(e){z.cache++,(e===!0||!Te&&!hi&&!X.fullscreenElement&&!X.webkitFullscreenElement&&(!_n||xi!==P.innerWidth||Math.abs(P.innerHeight-mi)>P.innerHeight*.25))&&rn.restart(!0)},Kt={},es=[],Ci=function s(){return he(M,"scrollEnd",s)||Gt(!0)},Zt=function(e){return Kt[e]&&Kt[e].map(function(i){return i()})||es},$e=[],Ti=function(e){for(var i=0;i<$e.length;i+=5)(!e||$e[i+4]&&$e[i+4].query===e)&&($e[i].style.cssText=$e[i+1],$e[i].getBBox&&$e[i].setAttribute("transform",$e[i+2]||""),$e[i+3].uncache=1)},Si=function(){return z.forEach(function(e){return Ne(e)&&++e.cacheID&&(e.rec=e())})},On=function(e,i){var r;for(Oe=0;Oe<E.length;Oe++)r=E[Oe],r&&(!i||r._ctx===i)&&(e?r.kill(1):r.revert(!0,!0));Cr=!0,i&&Ti(i),i||Zt("revert")},Ni=function(e,i){z.cache++,(i||!Be)&&z.forEach(function(r){return Ne(r)&&r.cacheID++&&(r.rec=0)}),Ue(e)&&(P.history.scrollRestoration=Pn=e)},Be,Ut=0,Kn,ts=function(){if(Kn!==Ut){var e=Kn=Ut;requestAnimationFrame(function(){return e===Ut&&Gt(!0)})}},Ri=function(){B.appendChild(ar),zn=!Le&&ar.offsetHeight||P.innerHeight,B.removeChild(ar)},Zn=function(e){return Mr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},Gt=function(e,i){if(Ve=X.documentElement,B=X.body,Mn=[P,X,Ve,B],rt&&!e&&!Cr){me(M,"scrollEnd",Ci);return}Ri(),Be=M.isRefreshing=!0,Cr||Si();var r=Zt("refreshInit");gi&&M.sort(),i||On(),z.forEach(function(t){Ne(t)&&(t.smooth&&(t.target.style.scrollBehavior="auto"),t(0))}),E.slice(0).forEach(function(t){return t.refresh()}),Cr=!1,E.forEach(function(t){if(t._subPinOffset&&t.pin){var o=t.vars.horizontal?"offsetWidth":"offsetHeight",c=t.pin[o];t.revert(!0,1),t.adjustPinSpacing(t.pin[o]-c),t.refresh()}}),kn=1,Zn(!0),E.forEach(function(t){var o=ft(t.scroller,t._dir),c=t.vars.end==="max"||t._endClamp&&t.end>o,a=t._startClamp&&t.start>=o;(c||a)&&t.setPositions(a?o-1:t.start,c?Math.max(a?o:t.start+1,o):t.end,!0)}),Zn(!1),kn=0,r.forEach(function(t){return t&&t.render&&t.render(-1)}),z.forEach(function(t){Ne(t)&&(t.smooth&&requestAnimationFrame(function(){return t.target.style.scrollBehavior="smooth"}),t.rec&&t(t.rec))}),Ni(Pn,1),rn.pause(),Ut++,Be=2,kt(2),E.forEach(function(t){return Ne(t.vars.onRefresh)&&t.vars.onRefresh(t)}),Be=M.isRefreshing=!1,Zt("refresh")},Tn=0,Qr=1,Er,kt=function(e){if(e===2||!Be&&!Cr){M.isUpdating=!0,Er&&Er.update(0);var i=E.length,r=Se(),t=r-un>=50,o=i&&E[0].scroll();if(Qr=Tn>o?-1:1,Be||(Tn=o),t&&(rt&&!on&&r-rt>200&&(rt=0,Zt("scrollEnd")),mr=un,un=r),Qr<0){for(Oe=i;Oe-- >0;)E[Oe]&&E[Oe].update(0,t);Qr=1}else for(Oe=0;Oe<i;Oe++)E[Oe]&&E[Oe].update(0,t);M.isUpdating=!1}Pr=0},Sn=[_i,ji,An,Dn,et+Rr,et+Tr,et+Nr,et+Sr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Jr=Sn.concat([Wt,$t,"boxSizing","max"+cr,"max"+In,"position",et,se,se+Nr,se+Tr,se+Rr,se+Sr]),rs=function(e,i,r){lr(r);var t=e._gsap;if(t.spacerIsNative)lr(t.spacerState);else if(e._gsap.swappedIn){var o=i.parentNode;o&&(o.insertBefore(e,i),o.removeChild(i))}e._gsap.swappedIn=!1},gn=function(e,i,r,t){if(!e._gsap.swappedIn){for(var o=Sn.length,c=i.style,a=e.style,p;o--;)p=Sn[o],c[p]=r[p];c.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(c.display="inline-block"),a[An]=a[Dn]="auto",c.flexBasis=r.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Wt]=nn(e,Fe)+de,c[$t]=nn(e,ue)+de,c[se]=a[et]=a[ji]=a[_i]="0",lr(t),a[Wt]=a["max"+cr]=r[Wt],a[$t]=a["max"+In]=r[$t],a[se]=r[se],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},ns=/([A-Z])/g,lr=function(e){if(e){var i=e.t.style,r=e.length,t=0,o,c;for((e.t._gsap||h.core.getCache(e.t)).uncache=1;t<r;t+=2)c=e[t+1],o=e[t],c?i[o]=c:i[o]&&i.removeProperty(o.replace(ns,"-$1").toLowerCase())}},Gr=function(e){for(var i=Jr.length,r=e.style,t=[],o=0;o<i;o++)t.push(Jr[o],r[Jr[o]]);return t.t=e,t},is=function(e,i,r){for(var t=[],o=e.length,c=r?8:0,a;c<o;c+=2)a=e[c],t.push(a,a in i?i[a]:e[c+1]);return t.t=e.t,t},en={left:0,top:0},Qn=function(e,i,r,t,o,c,a,p,m,R,v,g,u,b){Ne(e)&&(e=e(p)),Ue(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?Kr("0"+e.substr(3),r):0));var q=u?u.time():0,H,oe,$;if(u&&u.seek(0),isNaN(e)||(e=+e),vr(e))u&&(e=h.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,g,e)),a&&Zr(a,r,t,!0);else{Ne(i)&&(i=i(p));var xe=(e||"0").split(" "),N,Ze,G,k;$=Xe(i,p)||B,N=_t($)||{},(!N||!N.left&&!N.top)&&tt($).display==="none"&&(k=$.style.display,$.style.display="block",N=_t($),k?$.style.display=k:$.style.removeProperty("display")),Ze=Kr(xe[0],N[t.d]),G=Kr(xe[1]||"0",r),e=N[t.p]-m[t.p]-R+Ze+o-G,a&&Zr(a,G,t,r-G<20||a._isStart&&G>20),r-=r-G}if(b&&(p[b]=e||-.001,e<0&&(e=0)),c){var Re=e+r,Ye=c._isStart;H="scroll"+t.d2,Zr(c,Re,t,Ye&&Re>20||!Ye&&(v?Math.max(B[H],Ve[H]):c.parentNode[H])<=Re+1),v&&(m=_t(a),v&&(c.style[t.op.p]=m[t.op.p]-t.op.m-c._offset+de))}return u&&$&&(H=_t($),u.seek(g),oe=_t($),u._caScrollDist=H[t.p]-oe[t.p],e=e/u._caScrollDist*g),u&&u.seek(q),u?e:Math.round(e)},ss=/(webkit|moz|length|cssText|inset)/i,Jn=function(e,i,r,t){if(e.parentNode!==i){var o=e.style,c,a;if(i===B){e._stOrig=o.cssText,a=tt(e);for(c in a)!+c&&!ss.test(c)&&a[c]&&typeof o[c]=="string"&&c!=="0"&&(o[c]=a[c]);o.top=r,o.left=t}else o.cssText=e._stOrig;h.core.getCache(e).uncache=1,i.appendChild(e)}},Ei=function(e,i,r){var t=i,o=t;return function(c){var a=Math.round(e());return a!==t&&a!==o&&Math.abs(a-t)>3&&Math.abs(a-o)>3&&(c=a,r&&r()),o=t,t=Math.round(c),t}},Wr=function(e,i,r){var t={};t[i.p]="+="+r,h.set(e,t)},ei=function(e,i){var r=It(e,i),t="_scroll"+i.p2,o=function c(a,p,m,R,v){var g=c.tween,u=p.onComplete,b={};m=m||r();var q=Ei(r,m,function(){g.kill(),c.tween=0});return v=R&&v||0,R=R||a-m,g&&g.kill(),p[t]=a,p.inherit=!1,p.modifiers=b,b[t]=function(){return q(m+R*g.ratio+v*g.ratio*g.ratio)},p.onUpdate=function(){z.cache++,c.tween&&kt()},p.onComplete=function(){c.tween=0,u&&u.call(g)},g=c.tween=h.to(e,p),g};return e[t]=r,r.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},me(e,"wheel",r.wheelHandler),M.isTouch&&me(e,"touchmove",r.wheelHandler),o},M=function(){function s(i,r){nr||s.register(h)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),jn(this),this.init(i,r)}var e=s.prototype;return e.init=function(r,t){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xr){this.update=this.refresh=this.kill=pt;return}r=$n(Ue(r)||vr(r)||r.nodeType?{trigger:r}:r,Xr);var o=r,c=o.onUpdate,a=o.toggleClass,p=o.id,m=o.onToggle,R=o.onRefresh,v=o.scrub,g=o.trigger,u=o.pin,b=o.pinSpacing,q=o.invalidateOnRefresh,H=o.anticipatePin,oe=o.onScrubComplete,$=o.onSnapComplete,xe=o.once,N=o.snap,Ze=o.pinReparent,G=o.pinSpacer,k=o.containerAnimation,Re=o.fastScrollEnd,Ye=o.preventOverlaps,y=r.horizontal||r.containerAnimation&&r.horizontal!==!1?Fe:ue,pe=!v&&v!==0,j=Xe(r.scroller||P),ht=h.core.getCache(j),ae=Vt(j),Ee=("pinType"in r?r.pinType:At(j,"pinType")||ae&&"fixed")==="fixed",Me=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],F=pe&&r.toggleActions.split(" "),te="markers"in r?r.markers:Xr.markers,re=ae?0:parseFloat(tt(j)["border"+y.p2+cr])||0,l=this,le=r.onRefreshInit&&function(){return r.onRefreshInit(l)},Lt=Vi(j,ae,y),Ct=Ki(j,ae),Qe=0,mt=0,we=0,ne=It(j,y),Pe,_e,Tt,ze,De,I,Z,He,qe,d,Ge,xt,St,V,bt,Nt,Ot,fe,Rt,Q,nt,Je,vt,dr,ie,zr,yt,Qt,Jt,Et,Bt,D,Ft,it,st,ot,Yt,er,wt;if(l._startClamp=l._endClamp=!1,l._dir=y,H*=45,l.scroller=j,l.scroll=k?k.time.bind(k):ne,ze=ne(),l.vars=r,t=t||r.animation,"refreshPriority"in r&&(gi=1,r.refreshPriority===-9999&&(Er=l)),ht.tweenScroll=ht.tweenScroll||{top:ei(j,ue),left:ei(j,Fe)},l.tweenTo=Pe=ht.tweenScroll[y.p],l.scrubDuration=function(f){Ft=vr(f)&&f,Ft?D?D.duration(f):D=h.to(t,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ft,paused:!0,onComplete:function(){return oe&&oe(l)}}):(D&&D.progress(1).kill(),D=0)},t&&(t.vars.lazy=!1,t._initted&&!l.isReverted||t.vars.immediateRender!==!1&&r.immediateRender!==!1&&t.duration()&&t.render(0,!0,!0),l.animation=t.pause(),t.scrollTrigger=l,l.scrubDuration(v),Et=0,p||(p=t.vars.id)),N&&((!qt(N)||N.push)&&(N={snapTo:N}),"scrollBehavior"in B.style&&h.set(ae?[B,Ve]:j,{scrollBehavior:"auto"}),z.forEach(function(f){return Ne(f)&&f.target===(ae?X.scrollingElement||Ve:j)&&(f.smooth=!1)}),Tt=Ne(N.snapTo)?N.snapTo:N.snapTo==="labels"?Qi(t):N.snapTo==="labelsDirectional"?Ji(t):N.directional!==!1?function(f,C){return Ln(N.snapTo)(f,Se()-mt<500?0:C.direction)}:h.utils.snap(N.snapTo),it=N.duration||{min:.1,max:2},it=qt(it)?kr(it.min,it.max):kr(it,it),st=h.delayedCall(N.delay||Ft/2||.1,function(){var f=ne(),C=Se()-mt<500,w=Pe.tween;if((C||Math.abs(l.getVelocity())<10)&&!w&&!on&&Qe!==f){var T=(f-I)/V,ge=t&&!pe?t.totalProgress():T,A=C?0:(ge-Bt)/(Se()-mr)*1e3||0,J=h.utils.clamp(-T,1-T,tr(A/2)*A/.185),je=T+(N.inertia===!1?0:J),K,W,Y=N,at=Y.onStart,U=Y.onInterrupt,We=Y.onComplete;if(K=Tt(je,l),vr(K)||(K=je),W=Math.max(0,Math.round(I+K*V)),f<=Z&&f>=I&&W!==f){if(w&&!w._initted&&w.data<=tr(W-f))return;N.inertia===!1&&(J=K-T),Pe(W,{duration:it(tr(Math.max(tr(je-ge),tr(K-ge))*.185/A/.05||0)),ease:N.ease||"power3",data:tr(W-f),onInterrupt:function(){return st.restart(!0)&&U&&U(l)},onComplete:function(){l.update(),Qe=ne(),t&&!pe&&(D?D.resetTo("totalProgress",K,t._tTime/t._tDur):t.progress(K)),Et=Bt=t&&!pe?t.totalProgress():l.progress,$&&$(l),We&&We(l)}},f,J*V,W-f-J*V),at&&at(l,Pe.tween)}}else l.isActive&&Qe!==f&&st.restart(!0)}).pause()),p&&(Cn[p]=l),g=l.trigger=Xe(g||u!==!0&&u),wt=g&&g._gsap&&g._gsap.stRevert,wt&&(wt=wt(l)),u=u===!0?g:Xe(u),Ue(a)&&(a={targets:g,className:a}),u&&(b===!1||b===et||(b=!b&&u.parentNode&&u.parentNode.style&&tt(u.parentNode).display==="flex"?!1:se),l.pin=u,_e=h.core.getCache(u),_e.spacer?bt=_e.pinState:(G&&(G=Xe(G),G&&!G.nodeType&&(G=G.current||G.nativeElement),_e.spacerIsNative=!!G,G&&(_e.spacerState=Gr(G))),_e.spacer=fe=G||X.createElement("div"),fe.classList.add("pin-spacer"),p&&fe.classList.add("pin-spacer-"+p),_e.pinState=bt=Gr(u)),r.force3D!==!1&&h.set(u,{force3D:!0}),l.spacer=fe=_e.spacer,Jt=tt(u),dr=Jt[b+y.os2],Q=h.getProperty(u),nt=h.quickSetter(u,y.a,de),gn(u,fe,Jt),Ot=Gr(u)),te){xt=qt(te)?$n(te,Un):Un,d=qr("scroller-start",p,j,y,xt,0),Ge=qr("scroller-end",p,j,y,xt,0,d),Rt=d["offset"+y.op.d2];var ur=Xe(At(j,"content")||j);He=this.markerStart=qr("start",p,ur,y,xt,Rt,0,k),qe=this.markerEnd=qr("end",p,ur,y,xt,Rt,0,k),k&&(er=h.quickSetter([He,qe],y.a,de)),!Ee&&!(gt.length&&At(j,"fixedMarkers")===!0)&&(Zi(ae?B:j),h.set([d,Ge],{force3D:!0}),zr=h.quickSetter(d,y.a,de),Qt=h.quickSetter(Ge,y.a,de))}if(k){var S=k.vars.onUpdate,_=k.vars.onUpdateParams;k.eventCallback("onUpdate",function(){l.update(0,0,1),S&&S.apply(k,_||[])})}if(l.previous=function(){return E[E.indexOf(l)-1]},l.next=function(){return E[E.indexOf(l)+1]},l.revert=function(f,C){if(!C)return l.kill(!0);var w=f!==!1||!l.enabled,T=Te;w!==l.isReverted&&(w&&(ot=Math.max(ne(),l.scroll.rec||0),we=l.progress,Yt=t&&t.progress()),He&&[He,qe,d,Ge].forEach(function(ge){return ge.style.display=w?"none":"block"}),w&&(Te=l,l.update(w)),u&&(!Ze||!l.isActive)&&(w?rs(u,fe,bt):gn(u,fe,tt(u),ie)),w||l.update(w),Te=T,l.isReverted=w)},l.refresh=function(f,C,w,T){if(!((Te||!l.enabled)&&!C)){if(u&&f&&rt){me(s,"scrollEnd",Ci);return}!Be&&le&&le(l),Te=l,Pe.tween&&!w&&(Pe.tween.kill(),Pe.tween=0),D&&D.pause(),q&&t&&(t.revert({kill:!1}).invalidate(),t.getChildren?t.getChildren(!0,!0,!1).forEach(function(Mt){return Mt.vars.immediateRender&&Mt.render(0,!0,!0)}):t.vars.immediateRender&&t.render(0,!0,!0)),l.isReverted||l.revert(!0,!0),l._subPinOffset=!1;var ge=Lt(),A=Ct(),J=k?k.duration():ft(j,y),je=V<=.01||!V,K=0,W=T||0,Y=qt(w)?w.end:r.end,at=r.endTrigger||g,U=qt(w)?w.start:r.start||(r.start===0||!g?0:u?"0 0":"0 100%"),We=l.pinnedContainer=r.pinnedContainer&&Xe(r.pinnedContainer,l),ct=g&&Math.max(0,E.indexOf(l))||0,be=ct,ve,ke,Ht,Dr,Ce,ce,dt,an,Bn,pr,ut,fr,Ar;for(te&&qt(w)&&(fr=h.getProperty(d,y.p),Ar=h.getProperty(Ge,y.p));be-- >0;)ce=E[be],ce.end||ce.refresh(0,1)||(Te=l),dt=ce.pin,dt&&(dt===g||dt===u||dt===We)&&!ce.isReverted&&(pr||(pr=[]),pr.unshift(ce),ce.revert(!0,!0)),ce!==E[be]&&(ct--,be--);for(Ne(U)&&(U=U(l)),U=Xn(U,"start",l),I=Qn(U,g,ge,y,ne(),He,d,l,A,re,Ee,J,k,l._startClamp&&"_startClamp")||(u?-.001:0),Ne(Y)&&(Y=Y(l)),Ue(Y)&&!Y.indexOf("+=")&&(~Y.indexOf(" ")?Y=(Ue(U)?U.split(" ")[0]:"")+Y:(K=Kr(Y.substr(2),ge),Y=Ue(U)?U:(k?h.utils.mapRange(0,k.duration(),k.scrollTrigger.start,k.scrollTrigger.end,I):I)+K,at=g)),Y=Xn(Y,"end",l),Z=Math.max(I,Qn(Y||(at?"100% 0":J),at,ge,y,ne()+K,qe,Ge,l,A,re,Ee,J,k,l._endClamp&&"_endClamp"))||-.001,K=0,be=ct;be--;)ce=E[be]||{},dt=ce.pin,dt&&ce.start-ce._pinPush<=I&&!k&&ce.end>0&&(ve=ce.end-(l._startClamp?Math.max(0,ce.start):ce.start),(dt===g&&ce.start-ce._pinPush<I||dt===We)&&isNaN(U)&&(K+=ve*(1-ce.progress)),dt===u&&(W+=ve));if(I+=K,Z+=K,l._startClamp&&(l._startClamp+=K),l._endClamp&&!Be&&(l._endClamp=Z||-.001,Z=Math.min(Z,ft(j,y))),V=Z-I||(I-=.01)&&.001,je&&(we=h.utils.clamp(0,1,h.utils.normalize(I,Z,ot))),l._pinPush=W,He&&K&&(ve={},ve[y.a]="+="+K,We&&(ve[y.p]="-="+ne()),h.set([He,qe],ve)),u&&!(kn&&l.end>=ft(j,y)))ve=tt(u),Dr=y===ue,Ht=ne(),Je=parseFloat(Q(y.a))+W,!J&&Z>1&&(ut=(ae?X.scrollingElement||Ve:j).style,ut={style:ut,value:ut["overflow"+y.a.toUpperCase()]},ae&&tt(B)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ut.style["overflow"+y.a.toUpperCase()]="scroll")),gn(u,fe,ve),Ot=Gr(u),ke=_t(u,!0),an=Ee&&It(j,Dr?Fe:ue)(),b?(ie=[b+y.os2,V+W+de],ie.t=fe,be=b===se?nn(u,y)+V+W:0,be&&(ie.push(y.d,be+de),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=be+de)),lr(ie),We&&E.forEach(function(Mt){Mt.pin===We&&Mt.vars.pinSpacing!==!1&&(Mt._subPinOffset=!0)}),Ee&&ne(ot)):(be=nn(u,y),be&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=be+de)),Ee&&(Ce={top:ke.top+(Dr?Ht-I:an)+de,left:ke.left+(Dr?an:Ht-I)+de,boxSizing:"border-box",position:"fixed"},Ce[Wt]=Ce["max"+cr]=Math.ceil(ke.width)+de,Ce[$t]=Ce["max"+In]=Math.ceil(ke.height)+de,Ce[et]=Ce[et+Nr]=Ce[et+Tr]=Ce[et+Rr]=Ce[et+Sr]="0",Ce[se]=ve[se],Ce[se+Nr]=ve[se+Nr],Ce[se+Tr]=ve[se+Tr],Ce[se+Rr]=ve[se+Rr],Ce[se+Sr]=ve[se+Sr],Nt=is(bt,Ce,Ze),Be&&ne(0)),t?(Bn=t._initted,cn(1),t.render(t.duration(),!0,!0),vt=Q(y.a)-Je+V+W,yt=Math.abs(V-vt)>1,Ee&&yt&&Nt.splice(Nt.length-2,2),t.render(0,!0,!0),Bn||t.invalidate(!0),t.parent||t.totalTime(t.totalTime()),cn(0)):vt=V,ut&&(ut.value?ut.style["overflow"+y.a.toUpperCase()]=ut.value:ut.style.removeProperty("overflow-"+y.a));else if(g&&ne()&&!k)for(ke=g.parentNode;ke&&ke!==B;)ke._pinOffset&&(I-=ke._pinOffset,Z-=ke._pinOffset),ke=ke.parentNode;pr&&pr.forEach(function(Mt){return Mt.revert(!1,!0)}),l.start=I,l.end=Z,ze=De=Be?ot:ne(),!k&&!Be&&(ze<ot&&ne(ot),l.scroll.rec=0),l.revert(!1,!0),mt=Se(),st&&(Qe=-1,st.restart(!0)),Te=0,t&&pe&&(t._initted||Yt)&&t.progress()!==Yt&&t.progress(Yt||0,!0).render(t.time(),!0,!0),(je||we!==l.progress||k||q||t&&!t._initted)&&(t&&!pe&&(t._initted||we||t.vars.immediateRender!==!1)&&t.totalProgress(k&&I<-.001&&!we?h.utils.normalize(I,Z,0):we,!0),l.progress=je||(ze-I)/V===we?0:we),u&&b&&(fe._pinOffset=Math.round(l.progress*vt)),D&&D.invalidate(),isNaN(fr)||(fr-=h.getProperty(d,y.p),Ar-=h.getProperty(Ge,y.p),Wr(d,y,fr),Wr(He,y,fr-(T||0)),Wr(Ge,y,Ar),Wr(qe,y,Ar-(T||0))),je&&!Be&&l.update(),R&&!Be&&!St&&(St=!0,R(l),St=!1)}},l.getVelocity=function(){return(ne()-De)/(Se()-mr)*1e3||0},l.endAnimation=function(){hr(l.callbackAnimation),t&&(D?D.progress(1):t.paused()?pe||hr(t,l.direction<0,1):hr(t,t.reversed()))},l.labelToScroll=function(f){return t&&t.labels&&(I||l.refresh()||I)+t.labels[f]/t.duration()*V||0},l.getTrailing=function(f){var C=E.indexOf(l),w=l.direction>0?E.slice(0,C).reverse():E.slice(C+1);return(Ue(f)?w.filter(function(T){return T.vars.preventOverlaps===f}):w).filter(function(T){return l.direction>0?T.end<=I:T.start>=Z})},l.update=function(f,C,w){if(!(k&&!w&&!f)){var T=Be===!0?ot:l.scroll(),ge=f?0:(T-I)/V,A=ge<0?0:ge>1?1:ge||0,J=l.progress,je,K,W,Y,at,U,We,ct;if(C&&(De=ze,ze=k?ne():T,N&&(Bt=Et,Et=t&&!pe?t.totalProgress():A)),H&&u&&!Te&&!Br&&rt&&(!A&&I<T+(T-De)/(Se()-mr)*H?A=1e-4:A===1&&Z>T+(T-De)/(Se()-mr)*H&&(A=.9999)),A!==J&&l.enabled){if(je=l.isActive=!!A&&A<1,K=!!J&&J<1,U=je!==K,at=U||!!A!=!!J,l.direction=A>J?1:-1,l.progress=A,at&&!Te&&(W=A&&!J?0:A===1?1:J===1?2:3,pe&&(Y=!U&&F[W+1]!=="none"&&F[W+1]||F[W],ct=t&&(Y==="complete"||Y==="reset"||Y in t))),Ye&&(U||ct)&&(ct||v||!t)&&(Ne(Ye)?Ye(l):l.getTrailing(Ye).forEach(function(Ht){return Ht.endAnimation()})),pe||(D&&!Te&&!Br?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",A,t._tTime/t._tDur):(D.vars.totalProgress=A,D.invalidate().restart())):t&&t.totalProgress(A,!!(Te&&(mt||f)))),u){if(f&&b&&(fe.style[b+y.os2]=dr),!Ee)nt(br(Je+vt*A));else if(at){if(We=!f&&A>J&&Z+1>T&&T+1>=ft(j,y),Ze)if(!f&&(je||We)){var be=_t(u,!0),ve=T-I;Jn(u,B,be.top+(y===ue?ve:0)+de,be.left+(y===ue?0:ve)+de)}else Jn(u,fe);lr(je||We?Nt:Ot),yt&&A<1&&je||nt(Je+(A===1&&!We?vt:0))}}N&&!Pe.tween&&!Te&&!Br&&st.restart(!0),a&&(U||xe&&A&&(A<1||!dn))&&Mr(a.targets).forEach(function(Ht){return Ht.classList[je||xe?"add":"remove"](a.className)}),c&&!pe&&!f&&c(l),at&&!Te?(pe&&(ct&&(Y==="complete"?t.pause().totalProgress(1):Y==="reset"?t.restart(!0).pause():Y==="restart"?t.restart(!0):t[Y]()),c&&c(l)),(U||!dn)&&(m&&U&&pn(l,m),Me[W]&&pn(l,Me[W]),xe&&(A===1?l.kill(!1,1):Me[W]=0),U||(W=A===1?1:3,Me[W]&&pn(l,Me[W]))),Re&&!je&&Math.abs(l.getVelocity())>(vr(Re)?Re:2500)&&(hr(l.callbackAnimation),D?D.progress(1):hr(t,Y==="reverse"?1:!A,1))):pe&&c&&!Te&&c(l)}if(Qt){var ke=k?T/k.duration()*(k._caScrollDist||0):T;zr(ke+(d._isFlipped?1:0)),Qt(ke)}er&&er(-T/k.duration()*(k._caScrollDist||0))}},l.enable=function(f,C){l.enabled||(l.enabled=!0,me(j,"resize",yr),ae||me(j,"scroll",rr),le&&me(s,"refreshInit",le),f!==!1&&(l.progress=we=0,ze=De=Qe=ne()),C!==!1&&l.refresh())},l.getTween=function(f){return f&&Pe?Pe.tween:D},l.setPositions=function(f,C,w,T){if(k){var ge=k.scrollTrigger,A=k.duration(),J=ge.end-ge.start;f=ge.start+J*f/A,C=ge.start+J*C/A}l.refresh(!1,!1,{start:qn(f,w&&!!l._startClamp),end:qn(C,w&&!!l._endClamp)},T),l.update()},l.adjustPinSpacing=function(f){if(ie&&f){var C=ie.indexOf(y.d)+1;ie[C]=parseFloat(ie[C])+f+de,ie[1]=parseFloat(ie[1])+f+de,lr(ie)}},l.disable=function(f,C){if(f!==!1&&l.revert(!0,!0),l.enabled&&(l.enabled=l.isActive=!1,C||D&&D.pause(),ot=0,_e&&(_e.uncache=1),le&&he(s,"refreshInit",le),st&&(st.pause(),Pe.tween&&Pe.tween.kill()&&(Pe.tween=0)),!ae)){for(var w=E.length;w--;)if(E[w].scroller===j&&E[w]!==l)return;he(j,"resize",yr),ae||he(j,"scroll",rr)}},l.kill=function(f,C){l.disable(f,C),D&&!C&&D.kill(),p&&delete Cn[p];var w=E.indexOf(l);w>=0&&E.splice(w,1),w===Oe&&Qr>0&&Oe--,w=0,E.forEach(function(T){return T.scroller===l.scroller&&(w=1)}),w||Be||(l.scroll.rec=0),t&&(t.scrollTrigger=null,f&&t.revert({kill:!1}),C||t.kill()),He&&[He,qe,d,Ge].forEach(function(T){return T.parentNode&&T.parentNode.removeChild(T)}),Er===l&&(Er=0),u&&(_e&&(_e.uncache=1),w=0,E.forEach(function(T){return T.pin===u&&w++}),w||(_e.spacer=0)),r.onKill&&r.onKill(l)},E.push(l),l.enable(!1,!1),wt&&wt(l),t&&t.add&&!V){var O=l.update;l.update=function(){l.update=O,z.cache++,I||Z||l.refresh()},h.delayedCall(.01,l.update),V=.01,I=Z=0}else l.refresh();u&&ts()},s.register=function(r){return nr||(h=r||vi(),bi()&&window.document&&s.enable(),nr=xr),nr},s.defaults=function(r){if(r)for(var t in r)Xr[t]=r[t];return Xr},s.disable=function(r,t){xr=0,E.forEach(function(c){return c[t?"kill":"disable"](r)}),he(P,"wheel",rr),he(X,"scroll",rr),clearInterval(Or),he(X,"touchcancel",pt),he(B,"touchstart",pt),Yr(he,X,"pointerdown,touchstart,mousedown",Gn),Yr(he,X,"pointerup,touchend,mouseup",Wn),rn.kill(),Fr(he);for(var o=0;o<z.length;o+=3)Hr(he,z[o],z[o+1]),Hr(he,z[o],z[o+2])},s.enable=function(){if(P=window,X=document,Ve=X.documentElement,B=X.body,h&&(Mr=h.utils.toArray,kr=h.utils.clamp,jn=h.core.context||pt,cn=h.core.suppressOverwrites||pt,Pn=P.history.scrollRestoration||"auto",Tn=P.pageYOffset||0,h.core.globals("ScrollTrigger",s),B)){xr=1,ar=document.createElement("div"),ar.style.height="100vh",ar.style.position="absolute",Ri(),Ui(),ee.register(h),s.isTouch=ee.isTouch,Pt=ee.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_n=ee.isTouch===1,me(P,"wheel",rr),Mn=[P,X,Ve,B],h.matchMedia?(s.matchMedia=function(m){var R=h.matchMedia(),v;for(v in m)R.add(v,m[v]);return R},h.addEventListener("matchMediaInit",function(){Si(),On()}),h.addEventListener("matchMediaRevert",function(){return Ti()}),h.addEventListener("matchMedia",function(){Gt(0,1),Zt("matchMedia")}),h.matchMedia().add("(orientation: portrait)",function(){return fn(),fn})):console.warn("Requires GSAP 3.11.0 or later"),fn(),me(X,"scroll",rr);var r=B.hasAttribute("style"),t=B.style,o=t.borderTopStyle,c=h.core.Animation.prototype,a,p;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),t.borderTopStyle="solid",a=_t(B),ue.m=Math.round(a.top+ue.sc())||0,Fe.m=Math.round(a.left+Fe.sc())||0,o?t.borderTopStyle=o:t.removeProperty("border-top-style"),r||(B.setAttribute("style",""),B.removeAttribute("style")),Or=setInterval(Vn,250),h.delayedCall(.5,function(){return Br=0}),me(X,"touchcancel",pt),me(B,"touchstart",pt),Yr(me,X,"pointerdown,touchstart,mousedown",Gn),Yr(me,X,"pointerup,touchend,mouseup",Wn),wn=h.utils.checkPrefix("transform"),Jr.push(wn),nr=Se(),rn=h.delayedCall(.2,Gt).pause(),ir=[X,"visibilitychange",function(){var m=P.innerWidth,R=P.innerHeight;X.hidden?(Yn=m,Hn=R):(Yn!==m||Hn!==R)&&yr()},X,"DOMContentLoaded",Gt,P,"load",Gt,P,"resize",yr],Fr(me),E.forEach(function(m){return m.enable(0,1)}),p=0;p<z.length;p+=3)Hr(he,z[p],z[p+1]),Hr(he,z[p],z[p+2])}},s.config=function(r){"limitCallbacks"in r&&(dn=!!r.limitCallbacks);var t=r.syncInterval;t&&clearInterval(Or)||(Or=t)&&setInterval(Vn,t),"ignoreMobileResize"in r&&(_n=s.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(Fr(he)||Fr(me,r.autoRefreshEvents||"none"),hi=(r.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(r,t){var o=Xe(r),c=z.indexOf(o),a=Vt(o);~c&&z.splice(c,a?6:2),t&&(a?gt.unshift(P,t,B,t,Ve,t):gt.unshift(o,t))},s.clearMatchMedia=function(r){E.forEach(function(t){return t._ctx&&t._ctx.query===r&&t._ctx.kill(!0,!0)})},s.isInViewport=function(r,t,o){var c=(Ue(r)?Xe(r):r).getBoundingClientRect(),a=c[o?Wt:$t]*t||0;return o?c.right-a>0&&c.left+a<P.innerWidth:c.bottom-a>0&&c.top+a<P.innerHeight},s.positionInViewport=function(r,t,o){Ue(r)&&(r=Xe(r));var c=r.getBoundingClientRect(),a=c[o?Wt:$t],p=t==null?a/2:t in sn?sn[t]*a:~t.indexOf("%")?parseFloat(t)*a/100:parseFloat(t)||0;return o?(c.left+p)/P.innerWidth:(c.top+p)/P.innerHeight},s.killAll=function(r){if(E.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),r!==!0){var t=Kt.killAll||[];Kt={},t.forEach(function(o){return o()})}},s}();M.version="3.14.2";M.saveStyles=function(s){return s?Mr(s).forEach(function(e){if(e&&e.style){var i=$e.indexOf(e);i>=0&&$e.splice(i,5),$e.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),h.core.getCache(e),jn())}}):$e};M.revert=function(s,e){return On(!s,e)};M.create=function(s,e){return new M(s,e)};M.refresh=function(s){return s?yr(!0):(nr||M.register())&&Gt(!0)};M.update=function(s){return++z.cache&&kt(s===!0?2:0)};M.clearScrollMemory=Ni;M.maxScroll=function(s,e){return ft(s,e?Fe:ue)};M.getScrollFunc=function(s,e){return It(Xe(s),e?Fe:ue)};M.getById=function(s){return Cn[s]};M.getAll=function(){return E.filter(function(s){return s.vars.id!=="ScrollSmoother"})};M.isScrolling=function(){return!!rt};M.snapDirectional=Ln;M.addEventListener=function(s,e){var i=Kt[s]||(Kt[s]=[]);~i.indexOf(e)||i.push(e)};M.removeEventListener=function(s,e){var i=Kt[s],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)};M.batch=function(s,e){var i=[],r={},t=e.interval||.016,o=e.batchMax||1e9,c=function(m,R){var v=[],g=[],u=h.delayedCall(t,function(){R(v,g),v=[],g=[]}).pause();return function(b){v.length||u.restart(!0),v.push(b.trigger),g.push(b),o<=v.length&&u.progress(1)}},a;for(a in e)r[a]=a.substr(0,2)==="on"&&Ne(e[a])&&a!=="onRefreshInit"?c(a,e[a]):e[a];return Ne(o)&&(o=o(),me(M,"refresh",function(){return o=e.batchMax()})),Mr(s).forEach(function(p){var m={};for(a in r)m[a]=r[a];m.trigger=p,i.push(M.create(m))}),i};var ti=function(e,i,r,t){return i>t?e(t):i<0&&e(0),r>t?(t-i)/(r-i):r<0?i/(i-r):1},hn=function s(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(ee.isTouch?" pinch-zoom":""):"none",e===Ve&&s(B,i)},$r={auto:1,scroll:1},os=function(e){var i=e.event,r=e.target,t=e.axis,o=(i.changedTouches?i.changedTouches[0]:i).target,c=o._gsap||h.core.getCache(o),a=Se(),p;if(!c._isScrollT||a-c._isScrollT>2e3){for(;o&&o!==B&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!($r[(p=tt(o)).overflowY]||$r[p.overflowX]));)o=o.parentNode;c._isScroll=o&&o!==r&&!Vt(o)&&($r[(p=tt(o)).overflowY]||$r[p.overflowX]),c._isScrollT=a}(c._isScroll||t==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},Mi=function(e,i,r,t){return ee.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:t=t&&os,onPress:t,onDrag:t,onScroll:t,onEnable:function(){return r&&me(X,ee.eventTypes[0],ni,!1,!0)},onDisable:function(){return he(X,ee.eventTypes[0],ni,!0)}})},as=/(input|label|select|textarea)/i,ri,ni=function(e){var i=as.test(e.target.tagName);(i||ri)&&(e._gsapAllow=!0,ri=i)},ls=function(e){qt(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,r=i.normalizeScrollX,t=i.momentum,o=i.allowNestedScroll,c=i.onRelease,a,p,m=Xe(e.target)||Ve,R=h.core.globals().ScrollSmoother,v=R&&R.get(),g=Pt&&(e.content&&Xe(e.content)||v&&e.content!==!1&&!v.smooth()&&v.content()),u=It(m,ue),b=It(m,Fe),q=1,H=(ee.isTouch&&P.visualViewport?P.visualViewport.scale*P.visualViewport.width:P.outerWidth)/P.innerWidth,oe=0,$=Ne(t)?function(){return t(a)}:function(){return t||2.8},xe,N,Ze=Mi(m,e.type,!0,o),G=function(){return N=!1},k=pt,Re=pt,Ye=function(){p=ft(m,ue),Re=kr(Pt?1:0,p),r&&(k=kr(0,ft(m,Fe))),xe=Ut},y=function(){g._gsap.y=br(parseFloat(g._gsap.y)+u.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},pe=function(){if(N){requestAnimationFrame(G);var te=br(a.deltaY/2),re=Re(u.v-te);if(g&&re!==u.v+u.offset){u.offset=re-u.v;var l=br((parseFloat(g&&g._gsap.y)||0)-u.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+l+", 0, 1)",g._gsap.y=l+"px",u.cacheID=z.cache,kt()}return!0}u.offset&&y(),N=!0},j,ht,ae,Ee,Me=function(){Ye(),j.isActive()&&j.vars.scrollY>p&&(u()>p?j.progress(1)&&u(p):j.resetTo("scrollY",p))};return g&&h.set(g,{y:"+=0"}),e.ignoreCheck=function(F){return Pt&&F.type==="touchmove"&&pe()||q>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){N=!1;var F=q;q=br((P.visualViewport&&P.visualViewport.scale||1)/H),j.pause(),F!==q&&hn(m,q>1.01?!0:r?!1:"x"),ht=b(),ae=u(),Ye(),xe=Ut},e.onRelease=e.onGestureStart=function(F,te){if(u.offset&&y(),!te)Ee.restart(!0);else{z.cache++;var re=$(),l,le;r&&(l=b(),le=l+re*.05*-F.velocityX/.227,re*=ti(b,l,le,ft(m,Fe)),j.vars.scrollX=k(le)),l=u(),le=l+re*.05*-F.velocityY/.227,re*=ti(u,l,le,ft(m,ue)),j.vars.scrollY=Re(le),j.invalidate().duration(re).play(.01),(Pt&&j.vars.scrollY>=p||l>=p-1)&&h.to({},{onUpdate:Me,duration:re})}c&&c(F)},e.onWheel=function(){j._ts&&j.pause(),Se()-oe>1e3&&(xe=0,oe=Se())},e.onChange=function(F,te,re,l,le){if(Ut!==xe&&Ye(),te&&r&&b(k(l[2]===te?ht+(F.startX-F.x):b()+te-l[1])),re){u.offset&&y();var Lt=le[2]===re,Ct=Lt?ae+F.startY-F.y:u()+re-le[1],Qe=Re(Ct);Lt&&Ct!==Qe&&(ae+=Qe-Ct),u(Qe)}(re||te)&&kt()},e.onEnable=function(){hn(m,r?!1:"x"),M.addEventListener("refresh",Me),me(P,"resize",Me),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=b.smooth=!1),Ze.enable()},e.onDisable=function(){hn(m,!0),he(P,"resize",Me),M.removeEventListener("refresh",Me),Ze.kill()},e.lockAxis=e.lockAxis!==!1,a=new ee(e),a.iOS=Pt,Pt&&!u()&&u(1),Pt&&h.ticker.add(pt),Ee=a._dc,j=h.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ei(u,u(),function(){return j.pause()})},onUpdate:kt,onComplete:Ee.vars.onComplete}),a};M.sort=function(s){if(Ne(s))return E.sort(s);var e=P.pageYOffset||0;return M.getAll().forEach(function(i){return i._sortY=i.trigger?e+i.trigger.getBoundingClientRect().top:i.start+P.innerHeight}),E.sort(s||function(i,r){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})};M.observe=function(s){return new ee(s)};M.normalizeScroll=function(s){if(typeof s>"u")return Le;if(s===!0&&Le)return Le.enable();if(s===!1){Le&&Le.kill(),Le=s;return}var e=s instanceof ee?s:ls(s);return Le&&Le.target===e.target&&Le.kill(),Vt(e.target)&&(Le=e),e};M.core={_getVelocityProp:yn,_inputObserver:Mi,_scrollers:z,_proxies:gt,bridge:{ss:function(){rt||Zt("scrollStart"),rt=Se()},ref:function(){return Te}}};vi()&&h.registerPlugin(M);const ii=[{name:"ط§ظ„ط±ط¦ظٹط³ظٹط©",href:"#home"},{name:"ظ„ظ…ط§ط°ط§ ظ„ط§ط²ظˆط±ط¯",href:"#about"},{name:"ط®ط¯ظ…ط§طھ ط§ظ„ظ…ط®طھط¨ط±ط§طھ",href:"#services"},{name:"ط§ظ„ط­ظ„ظˆظ„",href:"#solutions"},{name:"ط§ظ„طھط³ط¹ظٹط±",href:"#pricing"},{name:"ط§ظ„طھط¹ظ„ظ…",href:"#learning"}],cs=()=>{const[s,e]=x.useState(!1),[i,r]=x.useState(!1),[t,o]=x.useState("home");x.useEffect(()=>{const a=()=>{e(window.scrollY>50)},p={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},m=v=>{v.forEach(g=>{g.isIntersecting&&o(g.target.id)})},R=new IntersectionObserver(m,p);return ii.forEach(v=>{const g=document.getElementById(v.href.substring(1));g&&R.observe(g)}),window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a),R.disconnect()}},[]);const c=a=>{o(a),r(!1)};return n.jsxs("nav",{className:`navbar glass-panel ${s?"scrolled":""}`,children:[n.jsxs("div",{className:"navbar-container",children:[n.jsxs("div",{className:"logo",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[n.jsx("div",{className:"logo-icon",children:n.jsxs("svg",{width:"42",height:"42",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:"logoGrad",x1:"20",y1:"10",x2:"80",y2:"90",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#0A1922"}),n.jsx("stop",{offset:"0.5",stopColor:"#6fa8dc"}),n.jsx("stop",{offset:"1",stopColor:"#7ec8b8"})]}),n.jsxs("filter",{id:"glow",children:[n.jsx("feGaussianBlur",{stdDeviation:"2",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:"M50 8 L85 28 L85 72 L50 92 L15 72 L15 28 Z",fill:"url(#logoGrad)",opacity:"0.8"}),n.jsx("path",{d:"M50 18 L72 32 L72 68 L50 82 L28 68 L28 32 Z",stroke:"#7ec8b8",strokeWidth:"1.5",fill:"none",filter:"url(#glow)"}),n.jsx("path",{d:"M50 30 L62 38 L62 62 L50 70 L38 62 L38 38 Z",stroke:"rgba(126,200,184,0.4)",strokeWidth:"1",fill:"none"}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"#7ec8b8",filter:"url(#glow)"}),n.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fff"})]})}),n.jsx("span",{className:"logo-text",children:"ظ„ط§ط²ظˆط±ط¯"})]}),n.jsx("div",{className:`nav-links ${i?"open":""}`,children:ii.map(a=>n.jsx("a",{href:a.href,className:t===a.href.substring(1)?"active":"",onClick:()=>c(a.href.substring(1)),children:a.name},a.href))}),n.jsxs("div",{className:"nav-actions",children:[n.jsx("span",{className:"nav-phone",style:{marginLeft:"15px",color:"var(--text-muted)",fontSize:"0.9rem"},children:"ظ‡ط§طھظپ: 0599998531-(970)"}),n.jsx("a",{href:"#",className:"login-link",children:"طھط³ط¬ظٹظ„ ط§ظ„ط¯ط®ظˆظ„"}),n.jsx("button",{className:"btn-primary",children:"ط§ط¨ط¯ط£ ط§ظ„ط¢ظ†"})]}),n.jsxs("button",{className:"menu-toggle","aria-label":"ط§ظ„ظ‚ط§ط¦ظ…ط©","aria-expanded":i,onClick:()=>r(!i),children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]})]}),n.jsx("style",{children:`
        .nav-links a.active {
          color: var(--accent-cyan) !important;
        }
        .nav-links a.active::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-links.open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(10, 25, 34, 0.95);
            padding: 20px;
            border-radius: var(--border-radius-sm);
            border: 1px solid rgba(126, 200, 184, 0.2);
            gap: 15px;
            text-align: center;
          }
        }
      `})]})},ds=()=>{const s=x.useRef(null);return x.useEffect(()=>{const e=L.context(()=>{L.timeline({defaults:{ease:"power4.out"}}).from(".hero-badge",{opacity:0,y:30,duration:1.2,delay:.5}).from(".hero-title .brand",{opacity:0,y:80,duration:1.5,scale:.95},"-=0.8").from(".hero-description",{opacity:0,scale:.9,duration:1.2},"-=1").from(".hero-actions button",{opacity:0,y:30,duration:1,stagger:.2},"-=0.8").from(".hero-ui-line",{width:0,duration:1.5,opacity:0},"-=1.2")},s);return()=>e.revert()},[]),n.jsxs("section",{id:"home",className:"hero-section",ref:s,children:[n.jsxs("div",{className:"hero-ui-decor",children:[n.jsx("div",{className:"hero-ui-line",style:{position:"absolute",top:"20%",left:"10%",height:"1px",background:"rgba(126, 200, 184, 0.15)",opacity:.3}}),n.jsx("div",{className:"hero-ui-line",style:{position:"absolute",bottom:"20%",right:"10%",height:"1px",background:"rgba(111, 168, 220, 0.15)",opacity:.3}})]}),n.jsxs("div",{className:"hero-content container",children:[n.jsx("div",{className:"hero-badge",children:"ظ…ط³طھظ‚ط¨ظ„ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹ"}),n.jsx("h1",{className:"hero-title",children:n.jsx("span",{className:"brand glow-text",children:"ظ…ط®طھط¨ط± ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹ ظ…ط¹ ط§ظ„طھظˆط§طµظ„ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ط­ظ‚ظٹظ‚ظٹ"})}),n.jsx("p",{className:"hero-description reveal",style:{opacity:1,transform:"none"},children:"ظ†ط­ظ† ظ†ط¹ظ…ظ„ ط¹ظ„ظ‰ طھظ…ظƒظٹظ† ط§ظ„ط¢ظ„ط§ظپ ظ…ظ† ط¹ظٹط§ط¯ط§طھ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ظ…ظ† ط®ظ„ط§ظ„ طھط¯ظپظ‚ط§طھ ط¹ظ…ظ„ ظ…ط¨طھظƒط±ط© ظ„طھط¹ط²ظٹط² ط±ط¹ط§ظٹط© ط§ظ„ظ…ط±ط¶ظ‰ ظˆط¥ط­ط¯ط§ط« ط«ظˆط±ط© ظپظٹ ط·ط±ظٹظ‚ط© ظپط­طµظ‡ظ… ظˆط·ظ„ط¨ظ‡ظ… ظˆط§ظ„طھط¹ط§ظˆظ† ظپظٹ ط§ظ„ط¹ظ…ظ„ ط§ظ„ظ…ط®طھط¨ط±ظٹ."}),n.jsxs("div",{className:"hero-actions",children:[n.jsx("button",{className:"btn-primary",children:"ط§ط¨ط¯ط£ ط§ظ„ط¢ظ†"}),n.jsx("button",{className:"btn-secondary",children:"ط´ط§ظ‡ط¯ ط§ظ„ظپظٹط¯ظٹظˆ"})]})]}),n.jsxs("div",{className:"scroll-indicator",children:[n.jsx("div",{className:"mouse"}),n.jsx("span",{style:{letterSpacing:"2px",textTransform:"uppercase"},children:"SCROLL TO EXPLORE"})]}),n.jsx("style",{children:`
        .hero-ui-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .hero-ui-line {
          width: 250px;
        }
      `})]})},mn=({target:s,prefix:e="",suffix:i=""})=>{const r=x.useRef(null);return x.useEffect(()=>{if(!r.current)return;const t=r.current,o={val:0};M.create({trigger:t,start:"top 90%",once:!0,onEnter:()=>{L.to(o,{val:s,duration:2.5,ease:"power3.out",onUpdate:()=>{const a=s%1!==0?o.val.toFixed(1):Math.round(o.val).toString();t&&(t.innerText=`${e}${a}${i}`)}})}})},[s,e,i]),n.jsxs("h2",{className:"stat-value",ref:r,style:{direction:"ltr",display:"inline-block"},children:[e,"0",i]})},us=()=>{const s=x.useRef(null);return x.useEffect(()=>{const e=L.context(()=>{L.from(".stat-card",{y:60,opacity:0,duration:.9,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 80%"}}),L.from(".stats-title",{y:30,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 85%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{className:"stats-section container",ref:s,children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{className:"stats-title",style:{maxWidth:"800px",margin:"0 auto",lineHeight:"1.4"},children:"ط§ظ„ط¢ظ„ط§ظپ ظ…ظ† ط§ظ„ظ…ظ…ط§ط±ط³ط§طھ طھط«ظ‚ ظپظٹ ظ„ط§ط²ظˆط±ط¯ ظپظٹ ط£ط¹ظ…ط§ظ„ظ‡ط§ ط§ظ„ظ…ط®ط¨ط±ظٹط©"})}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card glass-panel breathable-card",children:[n.jsx(mn,{target:50,prefix:"+",suffix:"K"}),n.jsx("p",{className:"stat-label",children:"طھظ‚ظٹظٹظ…ط§طھ ط­ط§ظ„ط© 5 ظ†ط¬ظˆظ…"})]}),n.jsxs("div",{className:"stat-card glass-panel breathable-card",children:[n.jsx(mn,{target:30,prefix:"$",suffix:"K"}),n.jsx("p",{className:"stat-label",children:"طھظ… ط§ظ„ط­ظپط¸ ظ…ظ‚ط¯ظ…ط§ظ‹"})]}),n.jsxs("div",{className:"stat-card glass-panel breathable-card",children:[n.jsx(mn,{target:1.5,prefix:"+",suffix:"M"}),n.jsx("p",{className:"stat-label",children:"طھظ… طھط³ظ„ظٹظ… ط§ظ„ط§ط¨طھط³ط§ظ…ط§طھ ط§ظ„ط³ط¹ظٹط¯ط©"})]})]}),n.jsx("style",{children:`
        .stats-section {
          padding: 140px 0;
        }

        .breathable-card {
          padding: 60px 40px !important;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          background: rgba(10, 25, 34, 0.6) !important;
          border-color: rgba(126, 200, 184, 0.15) !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2) !important;
        }

        .breathable-card:hover {
          border-color: rgba(126, 200, 184, 0.4) !important;
          box-shadow: 0 20px 50px rgba(126, 200, 184, 0.1) !important;
        }

        .stat-value {
          font-size: 4.5rem !important;
          font-weight: 800 !important;
          margin: 0;
          line-height: 1;
          color: var(--accent-cyan) !important;
          background: none !important;
          -webkit-text-fill-color: var(--accent-cyan) !important;
          text-shadow: 0 0 30px rgba(126, 200, 184, 0.2);
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 1.25rem !important;
          color: var(--text-main) !important;
          font-weight: 500;
          margin: 0;
          opacity: 0.95;
        }

        .stats-title {
          font-size: 2.8rem;
          color: var(--text-main);
          margin-bottom: 70px;
        }

        @media (max-width: 1024px) {
          .stat-value {
            font-size: 3.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .stats-section {
            padding: 100px 0;
          }
          .stats-title {
            font-size: 2.2rem;
            margin-bottom: 50px;
          }
          .breathable-card {
            padding: 45px 30px !important;
          }
        }
      `})]})},ps="/lazord-Clinic-Task/assets/best1-BdXNPnIu.png",fs="/lazord-Clinic-Task/assets/best2-C45whcBq.png",gs="/lazord-Clinic-Task/assets/best3-DwcBH6Cm.png",hs=[{title:"طھط·ظˆظٹط± ظ…ظ‡ط§ط±ط§طھ ظƒظ„ ط¹ط¶ظˆ ظ…ظ† ط§ظ„ظ…ظˆط¸ظپظٹظ†",description:"ط§ط¬ط¹ظ„ ظ…ط³ط§ط¹ط¯ظٹظƒ ظٹظ‚ظˆظ…ظˆظ† ط¨ط§ظ„ظ…ط³ط­ ط¨ط«ظ‚ط© ظ„ظƒظ„ ط³ظٹط± ط¹ظ…ظ„ ط±ظ‚ظ…ظٹ - ط§ط³طھظپط¯ ظ…ظ† ط§ظ„طھط¯ط±ظٹط¨ ط؛ظٹط± ط§ظ„ظ…ط­ط¯ظˆط¯ ظ„ظپط±ظٹظ‚ظƒ ظƒظ„ظ…ط§ ط¯ط¹طھ ط§ظ„ط­ط§ط¬ط©.",image:ps},{title:"طھط­ط³ظٹظ† طھط¬ط±ط¨ط© ط§ظ„ظ…ط±ظٹط¶",description:"ط§ط±ظپط¹ ظ…ط³طھظˆظ‰ ط±ط¹ط§ظٹط© ط§ظ„ظ…ط±ط¶ظ‰ ظ…ظ† ط®ظ„ط§ظ„ ط§ط¨طھظƒط§ط±ط§طھ ظ…ط«ظ„ ط£ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ط°ط§طھ ط§ظ„ظ…ظˆط¹ط¯ ط§ظ„ظ†ظ‡ط§ط¦ظٹطŒ ظˆط§ظ„ط£ط¬ط²ط§ط، ط§ظ„ط¬ط²ط¦ظٹط© ط§ظ„ظ…ط¨ط§ط´ط±ط© ط¥ظ„ظ‰ ط§ظ„ظ†ظ‡ط§ظٹط©طŒ ظˆط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط±ظ‚ظ… 1 ظپظٹ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„طھط±ظ…ظٹظ…ظٹ.",image:fs},{title:"ط²ظٹط§ط¯ط© ط§ظ„ظ‚ط¯ط±ط© ط¹ظ„ظ‰ ط§ظ„طھظ†ط¨ط¤ ط¨ط§ظ„ط¹ظ„ط§ط¬",description:"ط§ط³طھط®ط¯ظ… ط£ط¯ظˆط§طھ ط§ظ„ظ…ط³ط­ ط§ظ„ظ…طھظ‚ط¯ظ…ط© - طھطµظˆط± ط§ظ„طھطµظ…ظٹظ…ط§طھ ط§ظ„ط±ظ‚ظ…ظٹط© ظˆط§ظ„ظ…ظˆط§ظپظ‚ط© ط¹ظ„ظٹظ‡ط§طŒ ظˆطھط¹ط²ظٹط² ظ†طھط§ط¦ط¬ ظ‚ط¨ظˆظ„ ط§ظ„ط­ط§ظ„ط©طŒ ظˆطھظ‚ط¯ظٹظ… ظ†طھط§ط¦ط¬ ظ†ط§ط¬ط­ط© ظ„ظ„ظ…ط±ط¶ظ‰ ظ…ط¹ ط§ظ„طھط­ظƒظ… ط§ظ„ظ…ط·ظ„ظ‚.",image:gs}],ms=()=>{const s=x.useRef(null);return x.useEffect(()=>{const e=L.context(()=>{L.from(".about-card-rich",{y:60,opacity:0,duration:.8,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"about",ref:s,className:"about-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"طھط­ظ‚ظٹظ‚ ظ†طھط§ط¦ط¬ ط£ظپط¶ظ„ ظ„ظ…ظ…ط§ط±ط³طھظƒ ظˆظ…ط±ط¶ط§ظƒ"})}),n.jsx("div",{className:"about-rich-grid",children:hs.map(e=>n.jsxs("div",{className:"about-card-rich glass-panel",children:[n.jsx("div",{className:"image-glow-backdrop"}),n.jsx("div",{className:"about-card-image-wrapper",children:n.jsx("img",{src:e.image,alt:e.title,className:"about-card-img",loading:"lazy"})}),n.jsxs("div",{className:"about-card-content",children:[n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.description})]})]},e.title))}),n.jsx("style",{children:`
        .about-rich-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .about-card-rich {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: var(--border-radius);
          overflow: hidden;
          padding: 0;
          transition: transform 0.6s var(--transition-smooth), box-shadow 0.6s;
          background: rgba(10, 25, 34, 0.5);
          border: 1px solid rgba(126, 200, 184, 0.1);
        }

        .about-card-rich:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(126, 200, 184, 0.08);
          border-color: rgba(126, 200, 184, 0.3);
        }

        .image-glow-backdrop {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 180px;
          background: radial-gradient(ellipse at center, rgba(126, 200, 184, 0.15) 0%, transparent 70%);
          filter: blur(20px);
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.6s;
        }

        .about-card-rich:hover .image-glow-backdrop {
          opacity: 1;
          background: radial-gradient(ellipse at center, rgba(126, 200, 184, 0.25) 0%, transparent 70%);
        }

        .about-card-image-wrapper {
          width: 100%;
          height: 220px;
          position: relative;
          z-index: 1;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .about-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: calc(var(--border-radius) - 2px) calc(var(--border-radius) - 2px) 0 0;
          transition: transform 0.8s var(--transition-smooth);
        }

        @keyframes float-img {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-4px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }

        .about-card-rich:hover .about-card-img {
          animation: float-img 4s ease-in-out infinite;
        }

        .about-card-content {
          padding: 25px 30px 35px;
          text-align: center;
          position: relative;
          z-index: 2;
          background: linear-gradient(to bottom, transparent, rgba(10, 25, 34, 0.8));
          flex-grow: 1;
        }

        .about-card-content h3 {
          color: var(--accent-cyan);
          font-size: 1.25rem;
          margin-bottom: 15px;
          font-weight: 700;
          transition: color 0.4s;
        }

        .about-card-content p {
          color: var(--text-main);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .about-rich-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-rich-grid {
            grid-template-columns: 1fr;
          }
          .about-card-image-wrapper {
            height: 200px;
          }
        }
      `})]})},xs="/lazord-Clinic-Task/assets/Collaborative%20Workflow-DNgr2HsI.png",bs="/lazord-Clinic-Task/assets/Innovative%20Products-DoSiVwE4.png",vs="/lazord-Clinic-Task/assets/Fully%20Digital%20Lab-DE_9_uxZ.png",ys="/lazord-Clinic-Task/assets/Expertise%20on%20Demand-yRwmJxkd.png",ws=[{title:"ط³ظٹط± ط§ظ„ط¹ظ…ظ„ ط§ظ„طھط¹ط§ظˆظ†ظٹ",text:"ط§ط­طµظ„ ط¹ظ„ظ‰ ظ…ط±ط§ط¬ط¹ط§طھ ط§ظ„ظ…ط³ط­ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ظپط¹ظ„ظٹ ظˆط§ط¹طھظ…ط¯ طھطµظ…ظٹظ…ط§طھ ط§ظ„ط­ط§ظ„ط§طھ ط«ظ„ط§ط«ظٹط© ط§ظ„ط£ط¨ط¹ط§ط¯ ظ„ظ„طھط­ظƒظ… ط§ظ„ظ†ظ‡ط§ط¦ظٹ ظپظٹ ط¹ظ…ظ„ظƒ ط§ظ„ظ…ط®طھط¨ط±ظٹ.",image:xs},{title:"ط§ظ„ظ…ظ†طھط¬ط§طھ ط§ظ„ظ…ط¨طھظƒط±ط©",text:"ظ‚ظ… ط¨طھظ‚ط¯ظٹظ… ط®ط¯ظ…ط§طھ طھط؛ظٹط± ظ‚ظˆط§ط¹ط¯ ط§ظ„ظ„ط¹ط¨ط© ظ…ط«ظ„ ط§ظ„طھظٹط¬ط§ظ† ظ„ظ…ط¯ط© 5 ط£ظٹط§ظ…طŒ ظˆط£ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ط°ط§طھ ط§ظ„ظ…ظˆط¹ط¯ ط§ظ„ظ†ظ‡ط§ط¦ظٹطŒ ظˆط§ظ„ط£ط¬ط²ط§ط، ط§ظ„ط¬ط²ط¦ظٹط© ط§ظ„ظ…ط¨ط§ط´ط±ط© ط­طھظ‰ ط§ظ„ظ†ظ‡ط§ظٹط©.",image:bs},{title:"ظ…ط®طھط¨ط± ط±ظ‚ظ…ظٹ ط¨ط§ظ„ظƒط§ظ…ظ„",text:"ظٹظ…ظƒظ†ظƒ ط§ظ„ظˆطµظˆظ„ ط¥ظ„ظ‰ ظپظ†ظٹظٹظ†ط§ ط°ظˆظٹ ط§ظ„ظ…ط³طھظˆظ‰ ط§ظ„ط¹ط§ظ„ظ…ظٹ ط§ظ„ط°ظٹظ† ظٹطھظ…طھط¹ظˆظ† ط¨ط£ط­ط¯ط« طھظ‚ظ†ظٹط§طھ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ظˆط£ظˆظ‚ط§طھ ط§ظ„طھط³ظ„ظٹظ… ط§ظ„ط±ط§ط¦ط¯ط© ظپظٹ ط§ظ„طµظ†ط§ط¹ط©.",image:vs},{title:"ط§ظ„ط®ط¨ط±ط© ط¹ظ†ط¯ ط§ظ„ط·ظ„ط¨",text:"ظٹظ…ظƒظ†ظƒ ط§ظ„ظˆطµظˆظ„ ط¥ظ„ظ‰ ط®ط¨ط±ط§طھظ†ط§ ط§ظ„ط³ط±ظٹط±ظٹظٹظ† ظ„ظ„ط­طµظˆظ„ ط¹ظ„ظ‰ ط¥ط±ط´ط§ط¯ط§طھ ظˆط¯ط¹ظ… ط´ط®طµظٹظٹظ† ط¹ط¨ط± ط§ظ„ظ‡ط§طھظپ ط£ظˆ ط§ظ„ط±ط³ط§ط¦ظ„ ط§ظ„ظ†طµظٹط© ط£ظˆ ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ ط£ظˆ ط§ظ„ط¯ط±ط¯ط´ط© ط§ظ„ظ…ط¨ط§ط´ط±ط© ط®ظ„ط§ظ„ ط¯ظ‚ط§ط¦ظ‚.",image:ys}],_s=()=>{const s=x.useRef(null);return x.useEffect(()=>{const e=L.context(()=>{L.from(".feature-card-cinematic",{y:60,opacity:0,duration:.8,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"solutions",ref:s,className:"innovation-section container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"ط§ظ„ط§ط¨طھظƒط§ط±"}),n.jsx("h2",{children:"طھط¹ط²ظٹط² ظ…ط³طھظ‚ط¨ظ„ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹ"}),n.jsx("p",{children:"ظ„ط§ ظٹظ…ظƒظ† طھط­ظ‚ظٹظ‚ طھط±ظ…ظٹظ…ط§طھ ظ…طھط³ظ‚ط© ظˆظ…ظ„ط§ط¦ظ…ط© ط¥ظ„ط§ ظ…ظ† ط®ظ„ط§ظ„ ط§ظ„طھظˆط§طµظ„ ط§ظ„ظ‚ظˆظٹ. ظپظٹ ظ„ط§ط²ظˆط±ط¯طŒ ظ‚ظ…ظ†ط§ ط¨طھط·ظˆظٹط± ط·ط±ظ‚ ظ…ط¨طھظƒط±ط© ظ„ظ„طھط¹ط§ظˆظ† ظ…ط¹ ط£ط·ط¨ط§ط، ط§ظ„ط£ط³ظ†ط§ظ† ظ„ط¯ظٹظ†ط§ ط¨ط§ط³طھط®ط¯ط§ظ… ظ‚ظˆط© ط§ظ„طھظƒظ†ظˆظ„ظˆط¬ظٹط§ ظ„ط¥ط¹ط§ط¯ط© طھط¹ط±ظٹظپ ظ…ط§ ظ‡ظˆ ظ…ظ…ظƒظ† ظ„ظƒظ„ ظ…ط±ظٹط¶."})]}),n.jsx("div",{className:"about-grid innovation-cards-grid",children:ws.map(e=>n.jsxs("div",{className:"feature-card-cinematic glass-panel",children:[n.jsx("div",{className:"card-highlight"}),n.jsx("div",{className:"card-image-wrapper",children:n.jsx("img",{src:e.image,alt:e.title,className:"card-image",loading:"lazy"})}),n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.text})]},e.title))}),n.jsx("style",{children:`
        .innovation-cards-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 28px !important;
        }
        .feature-card-cinematic {
          padding: 0;
          position: relative;
          overflow: hidden;
          transition: transform 0.5s var(--transition-smooth), border-color 0.5s;
          display: flex;
          flex-direction: column;
        }
        .feature-card-cinematic:hover {
          transform: translateY(-4px);
          border-color: rgba(126, 200, 184, 0.2);
        }
        .card-image-wrapper {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: var(--border-radius) var(--border-radius) 0 0;
          position: relative;
        }
        .card-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 25, 34, 0.5), transparent 50%);
          pointer-events: none;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s var(--transition-smooth);
          display: block;
        }
        .feature-card-cinematic:hover .card-image {
          transform: scale(1.05);
        }
        .feature-card-cinematic h3 {
          color: var(--accent-cyan);
          margin-bottom: 12px;
          font-size: 1.3rem;
          padding: 0 30px;
          padding-top: 24px;
        }
        .feature-card-cinematic p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 0.95rem;
          padding: 0 30px;
          padding-bottom: 30px;
        }
        .card-highlight {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(126, 200, 184, 0.3), transparent);
          opacity: 0.6;
          z-index: 2;
        }
        @media (max-width: 768px) {
          .innovation-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .card-image-wrapper {
            height: 180px;
          }
        }
      `})]})},js="/lazord-Clinic-Task/assets/digital%20scanlond-9d4MXyOt.png",ks=[{num:"ظ،",title:"ط§ظ„ظ…ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط¨ط¯ظ‚ط© ظˆ ط«ظ‚ط© ظˆط¯ظ‚ط©",desc:"ط§ط³طھط®ط¯ظ… ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ 3Shape TRIOS ط§ظ„ظ…ط¬ط§ظ†ظٹ ظ„ظ„ط­طµظˆظ„ ط¹ظ„ظ‰ ظ…ط³ط­ ط±ظ‚ظ…ظٹ ط¯ظ‚ظٹظ‚ ظ…ط¹ ظ…ط±ط§ط¬ط¹ط§طھ ظپظˆط±ظٹط©."},{num:"ظ¢",title:"ط§ط·ظ„ط¨ ط§ظ„ط¹ظ…ظ„ ط§ظ„ظ…ط®طھط¨ط±ظٹ ط¨ط§ط³طھط®ط¯ط§ظ… ط§ظ„ظˆطµظپط§طھ ط§ظ„ط·ط¨ظٹط© ط§ظ„ط±ظ‚ظ…ظٹط©",desc:"ط¥ط±ط³ط§ظ„ ط·ظ„ط¨ط§طھ ط§ظ„ط¹ظ…ظ„ ط§ظ„ظ…ط®ط¨ط±ظٹ ط¨ط³ظ‡ظˆظ„ط© ظ…ط¹ ظˆطµظپط§طھ ط±ظ‚ظ…ظٹط© ظ…طھظƒط§ظ…ظ„ط© ظˆظƒط§ظ…ظ„ط©."},{num:"ظ£",title:"ط§ظ„ظ…ظˆط§ظپظ‚ط© ط¹ظ„ظ‰ ط§ظ„طھطµط§ظ…ظٹظ… ط§ظ„ط±ظ‚ظ…ظٹط© ظ‚ط¨ظ„ ط§ظ„طھطµظ†ظٹط¹",desc:"ط±ط§ط¬ط¹ ظˆظˆط§ظپظ‚ ط¹ظ„ظ‰ ط§ظ„طھطµظ…ظٹظ…ط§طھ ط«ظ„ط§ط«ظٹط© ط§ظ„ط£ط¨ط¹ط§ط¯ ظ„ظ„ط­ط§ظ„ط§طھ ظ‚ط¨ظ„ ط¹ظ…ظ„ظٹط© ط§ظ„طھطµظ†ظٹط¹."},{num:"ظ¤",title:"طھطھط¨ط¹ ط§ظ„ط­ط§ظ„ط§طھ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ظپط¹ظ„ظٹ",desc:"ظ…طھط§ط¨ط¹ط© ط­ط§ظ„ط© ط§ظ„ط¹ظ…ظ„ ط§ظ„ظ…ط®ط¨ط±ظٹ ظˆطھظ‚ط¯ظ…ظ‡ ظپظٹ ط£ظٹ ظˆظ‚طھ ظˆظ…ظ† ط£ظٹ ظ…ظƒط§ظ†."},{num:"ظ¥",title:"طھط³ظ„ظٹظ… ط§ظ„ط¹ظ„ط§ط¬ ظ„ظ„ظ…ط±ظٹط¶ ظپظٹ ط£ظٹط§ظ…",desc:"طھط³ظ„ظٹظ… ظ†طھط§ط¦ط¬ ط¹ط§ظ„ظٹط© ط§ظ„ط¬ظˆط¯ط© ظپظٹ ظپطھط±ط© ط²ظ…ظ†ظٹط© ظ‚طµظٹط±ط© ظ…ط¹ ط¶ظ…ط§ظ† ط±ط¶ط§ ط§ظ„ظ…ط±ظٹط¶."},{num:"ظ¦",title:"ظƒظٹظپ ظٹطھظ… ظ…ظ‚ط§ط±ظ†ط© ظ„ط§ط²ظˆط±ط¯ ظ…ط¹ ظ…ط®طھط¨ط±ط§طھ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط£ط®ط±ظ‰",desc:"ط§ظƒطھط´ظپ ط§ظ„ظپط±ظ‚ ظپظٹ ط§ظ„ط¬ظˆط¯ط© ظˆط§ظ„ط³ط±ط¹ط© ظˆط§ظ„طھظˆط§طµظ„ ط§ظ„ط±ظ‚ظ…ظٹ ط§ظ„ظ…طھظƒط§ظ…ظ„."}],Cs=()=>{const s=x.useRef(null);return x.useEffect(()=>{const e=L.context(()=>{L.from(".workflow-image-wrapper",{x:60,opacity:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 70%"}}),L.from(".workflow-step",{x:-40,opacity:0,duration:.7,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 70%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"workflow",ref:s,className:"workflow-section container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"ط³ظٹط± ط§ظ„ط¹ظ…ظ„"}),n.jsx("h2",{children:"ظ‚ظ… ط¨طھط­ظˆظٹظ„ ظ…ظ…ط§ط±ط³ط§طھظƒ ط¨ط§ط³طھط®ط¯ط§ظ… ط³ظٹط± ط¹ظ…ظ„ ط±ظ‚ظ…ظٹ ظ…ط«ط¨طھ"}),n.jsx("p",{children:"ط§ط³طھظ…طھط¹ ط¨ظ…ط³طھظˆظ‰ ظ…ظ† ط§ظ„طھط­ظƒظ… ظ„ظ… ظٹظƒظ† ظ…ظ…ظƒظ†ظ‹ط§ ظ…ظ† ظ‚ط¨ظ„."}),n.jsx("p",{style:{marginTop:"15px"},children:"ظ„ط§ ظٹظ…ظƒظ† طھط­ظ‚ظٹظ‚ طھط±ظ…ظٹظ…ط§طھ ظ…طھط³ظ‚ط© ظˆظ…ظ„ط§ط¦ظ…ط© ط¥ظ„ط§ ظ…ظ† ط®ظ„ط§ظ„ ط§ظ„طھظˆط§طµظ„ ط§ظ„ظ‚ظˆظٹ. ظپظٹ ظ„ط§ط²ظˆط±ط¯طŒ ظ‚ظ…ظ†ط§ ط¨طھط·ظˆظٹط± ط·ط±ظ‚ ظ…ط¨طھظƒط±ط© ظ„ظ„طھط¹ط§ظˆظ† ظ…ط¹ ط£ط·ط¨ط§ط، ط§ظ„ط£ط³ظ†ط§ظ† ظ„ط¯ظٹظ†ط§ ط¨ط§ط³طھط®ط¯ط§ظ… ظ‚ظˆط© ط§ظ„طھظƒظ†ظˆظ„ظˆط¬ظٹط§ ظ„ط¥ط¹ط§ط¯ط© طھط¹ط±ظٹظپ ظ…ط§ ظ‡ظˆ ظ…ظ…ظƒظ† ظ„ظƒظ„ ظ…ط±ظٹط¶."})]}),n.jsxs("div",{className:"workflow-layout",children:[n.jsx("div",{className:"workflow-image-column",children:n.jsx("div",{className:"workflow-image-wrapper glass-panel",style:{position:"relative"},children:n.jsx("img",{src:js,alt:"ط³ظٹط± ط§ظ„ط¹ظ…ظ„ ط§ظ„ط±ظ‚ظ…ظٹ ظˆط§ظ„طھظˆط§طµظ„",className:"workflow-img",loading:"lazy"})})}),n.jsx("div",{className:"workflow-steps-column",children:n.jsx("div",{className:"workflow-steps",children:ks.map(e=>n.jsxs("div",{className:"workflow-step",children:[n.jsx("div",{className:"workflow-step-number",children:e.num}),n.jsxs("div",{className:"workflow-step-content",children:[n.jsx("h4",{children:e.title}),n.jsx("p",{children:e.desc})]})]},e.num))})})]}),n.jsx("style",{children:`
        .workflow-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-top: 50px;
        }

        .workflow-image-wrapper {
          width: 100%;
          border-radius: var(--border-radius);
          overflow: hidden;
          padding: 0;
          border: 1px solid rgba(126, 200, 184, 0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2), 0 0 40px rgba(126, 200, 184, 0.05);
        }

        .workflow-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(126, 200, 184, 0.05), transparent 50%);
          pointer-events: none;
        }

        .workflow-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: var(--border-radius);
          transition: transform 1s var(--transition-smooth);
        }

        .workflow-image-wrapper:hover .workflow-img {
          transform: scale(1.03);
        }

        .workflow-steps-column {
          position: relative;
        }

        .workflow-steps {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .workflow-steps::before {
          content: '';
          position: absolute;
          right: 28px;
          top: 20px;
          bottom: 40px;
          width: 1.5px;
          background: linear-gradient(to bottom, transparent, rgba(126, 200, 184, 0.3), rgba(111, 168, 220, 0.2), transparent);
          z-index: 1;
        }

        .workflow-step {
          display: flex;
          gap: 25px;
          padding: 24px 0;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        .workflow-step-number {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--bg-dark);
          border: 1px solid rgba(126, 200, 184, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--accent-cyan);
          position: relative;
          z-index: 3;
          box-shadow: 0 0 20px rgba(126, 200, 184, 0.05);
          transition: all 0.5s var(--transition-smooth);
        }

        .workflow-step:hover .workflow-step-number {
          background: rgba(126, 200, 184, 0.1);
          box-shadow: 0 0 30px rgba(126, 200, 184, 0.15);
          transform: scale(1.1);
          border-color: var(--accent-cyan);
        }

        .workflow-step-content {
          flex: 1;
          padding-top: 8px;
        }

        .workflow-step-content h4 {
          font-size: 1.25rem;
          color: var(--text-main);
          margin-bottom: 8px;
          transition: color 0.4s;
        }

        .workflow-step:hover h4 {
          color: var(--accent-cyan);
        }

        .workflow-step-content p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .workflow-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .workflow-image-column {
            order: -1;
          }
        }
      `})]})},Ts="/lazord-Clinic-Task/assets/Zirconia%20Crowns-ua-TryUW.png",Ss="/lazord-Clinic-Task/assets/Implant%20Solutions-dFtQr6W5.png",Ns="/lazord-Clinic-Task/assets/Full%20Dentures-9fJQE7NI.png",Rs="/lazord-Clinic-Task/assets/Removable%20Partial%20Dentures-BSIfQsfS.png",Es="/lazord-Clinic-Task/assets/3D%20Printed%20Night%20Guards-Bkw7xPMZ.png",Ms="/lazord-Clinic-Task/assets/Clear%20Aligners-DvbczjPD.png",Ps="/lazord-Clinic-Task/assets/Sleep%20Apnea%20Devices-BjC_lTTD.png",zs=[{name:"طھظٹط¬ط§ظ† ط§ظ„ط²ط±ظƒظˆظ†ظٹط§ ظ„ظ…ط¯ط© 5 ط£ظٹط§ظ…",image:Ts},{name:"ط­ظ„ظˆظ„ ط²ط±ط§ط¹ط© ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط´ط§ظ…ظ„ط©",image:Ss},{name:"ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ط°ظˆ ط§ظ„ظ…ظˆط¹ط¯ ط§ظ„ط«ط§ظ†ظٹ",image:Ns},{name:"ط£ط¬ط²ط§ط، ظ…ط¨ط§ط´ط±ط© ط¥ظ„ظ‰ ط§ظ„ظ†ظ‡ط§ظٹط©",image:Rs},{name:"ظˆط§ظ‚ظٹط§طھ ظ„ظٹظ„ظٹط© ظ…ط·ط¨ظˆط¹ط© ط¨طھظ‚ظ†ظٹط© ط«ظ„ط§ط«ظٹط© ط§ظ„ط£ط¨ط¹ط§ط¯",image:Es},{name:"طھظ‚ظˆظٹظ… ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط´ظپط§ظپ",image:Ms},{name:"ط£ط¬ظ‡ط²ط© ط¹ظ„ط§ط¬ ط§ظ†ظ‚ط·ط§ط¹ ط§ظ„طھظ†ظپط³ ط£ط«ظ†ط§ط، ط§ظ„ظ†ظˆظ…",image:Ps}],Ds=()=>{const s=x.useRef(null);return x.useEffect(()=>{const e=L.context(()=>{L.from(".product-card",{y:40,opacity:0,duration:.7,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"services",ref:s,className:"services-section container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"ط§ظ„ظ…ظ†طھط¬ط§طھ"}),n.jsx("h2",{children:"ط£ط·ظ„ظ‚ ط§ظ„ط¹ظ†ط§ظ† ظ„ظ„ط§ط¨طھظƒط§ط± ط§ظ„ط±ط§ط¦ط¯ ظپظٹ ط§ظ„ط³ظˆظ‚ ظ…ط¹ ظ…ط®طھط¨ط± ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط®ط§طµ ط¨ظ†ط§"}),n.jsx("p",{children:"ظ„ط§ ظٹظ…ظƒظ† طھط­ظ‚ظٹظ‚ طھط±ظ…ظٹظ…ط§طھ ظ…طھط³ظ‚ط© ظˆظ…ظ„ط§ط¦ظ…ط© ط¥ظ„ط§ ظ…ظ† ط®ظ„ط§ظ„ ط§ظ„طھظˆط§طµظ„ ط§ظ„ظ‚ظˆظٹ. ظپظٹ ظ„ط§ط²ظˆط±ط¯طŒ ظ‚ظ…ظ†ط§ ط¨طھط·ظˆظٹط± ط·ط±ظ‚ ظ…ط¨طھظƒط±ط© ظ„ظ„طھط¹ط§ظˆظ† ظ…ط¹ ط£ط·ط¨ط§ط، ط§ظ„ط£ط³ظ†ط§ظ† ظ„ط¯ظٹظ†ط§ ط¨ط§ط³طھط®ط¯ط§ظ… ظ‚ظˆط© ط§ظ„طھظƒظ†ظˆظ„ظˆط¬ظٹط§ ظ„ط¥ط¹ط§ط¯ط© طھط¹ط±ظٹظپ ظ…ط§ ظ‡ظˆ ظ…ظ…ظƒظ† ظ„ظƒظ„ ظ…ط±ظٹط¶."})]}),n.jsx("div",{className:"services-grid products-grid",children:zs.map(e=>n.jsxs("div",{className:"product-card glass-panel flex-card",children:[n.jsx("div",{className:"card-image-wrapper",children:n.jsx("img",{src:e.image,alt:e.name,className:"card-image",loading:"lazy"})}),n.jsx("div",{className:"card-content",children:n.jsx("h4",{children:e.name})})]},e.name))}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:n.jsx("button",{className:"btn-primary",children:"ط§ط³طھظƒط´ظپ ط¬ظ…ظٹط¹ ظ…ظ†طھط¬ط§طھ ط§ظ„ظ…ط®طھط¨ط±"})}),n.jsx("style",{children:`
        .products-grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 28px !important;
        }
        .product-card.flex-card {
          padding: 0 !important;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.5s var(--transition-smooth), border-color 0.5s;
        }
        .product-card.flex-card:hover {
          transform: translateY(-4px);
          border-color: rgba(126, 200, 184, 0.2);
        }
        .product-card .card-image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-radius: var(--border-radius) var(--border-radius) 0 0;
          position: relative;
        }
        .product-card .card-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 25, 34, 0.5), transparent 60%);
          pointer-events: none;
        }
        .product-card .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s var(--transition-smooth);
          display: block;
        }
        .product-card.flex-card:hover .card-image {
          transform: scale(1.05);
        }
        .product-card .card-content {
          padding: 24px;
          text-align: center;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-card .card-content h4 {
          margin: 0;
          color: var(--text-main);
          font-size: 1.15rem;
          line-height: 1.5;
        }
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
          .product-card .card-image-wrapper {
            height: 200px;
          }
        }
      `})]})},As=()=>{const s=x.useRef(null);return x.useEffect(()=>{const e=L.context(()=>{L.from(".restorative-card",{x:i=>i===0?50:-50,opacity:0,duration:1,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"restorative",ref:s,className:"restorative-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"ط­ظ„ظˆظ„ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„طھط±ظ…ظٹظ…ظٹط© ظ„طھظ†ط§ط³ط¨ ط§ط­طھظٹط§ط¬ط§طھظƒ"})}),n.jsxs("div",{className:"restorative-grid",children:[n.jsxs("div",{className:"restorative-card glass-panel highlight",children:[n.jsx("h3",{children:"ظ‡ظ„ ط£ظ†طھ ط¬ط¯ظٹط¯ ظپظٹ ظ…ط¬ط§ظ„ ط§ظ„ظ…ط³ط­ ط§ظ„ط¶ظˆط¦ظٹطں"}),n.jsx("p",{children:"طھظ‚ط¯ظٹظ… ظ†طھط§ط¦ط¬ ظ…طھظˆظ‚ط¹ط© ظ„ظ„ظ…ط±ط¶ظ‰ ط¨ط§ط³طھط®ط¯ط§ظ… ط§ظ„طھظƒظ†ظˆظ„ظˆط¬ظٹط§ ظˆط§ظ„ط£ط¯ظˆط§طھ ط§ظ„ظ…ط¨طھظƒط±ط© ط§ظ„طھظٹ طھظ…ظ†ط­ظƒ ط§ظ„طھط­ظƒظ… ط§ظ„ظ†ظ‡ط§ط¦ظٹ."}),n.jsxs("ul",{children:[n.jsx("li",{children:"âœ“ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ 3Shape TRIOS ط§ظ„ظ…ط¬ط§ظ†ظٹ"}),n.jsx("li",{children:"âœ“ ط³ظٹط± ط¹ظ…ظ„ ط§ظ„ظ…ط³ط­ ط§ظ„ط±ظ‚ظ…ظٹ ط§ظ„ظ…ظˆط¬ظ‡"}),n.jsx("li",{children:"âœ“ طھط¯ظپظ‚ط§طھ ط§ظ„ط¹ظ…ظ„ ط§ظ„ط±ظ‚ظ…ظٹط© ظ„ط£ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ظˆط£ظƒط«ط± ظ…ظ† ط°ظ„ظƒ"}),n.jsx("li",{children:"âœ“ ظ…ط¹ط§ظٹظ†ط§طھ طھطµظ…ظٹظ… ظ…ط¬ط§ظ†ظٹط© ظ„ط¥ط¶ظپط§ط، ط§ظ„ظ„ظ…ط³ط§طھ ط§ظ„ظ†ظ‡ط§ط¦ظٹط© ط¹ظ„ظ‰ ط§ظ„ظ‚ط¶ط§ظٹط§ ط§ظ„ظ…ظ‡ظ…ط©"})]}),n.jsx("button",{className:"btn-primary",children:"ط³ط¬ظ„ ط§ظ„ط¢ظ†"})]}),n.jsxs("div",{className:"restorative-card glass-panel",children:[n.jsx("h3",{children:"ظ‡ظ„ طھظ‚ظˆظ… ط¨ط§ظ„ظ…ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط¨ط§ظ„ظپط¹ظ„طں"}),n.jsx("p",{children:"ظ‚ظ… ط¨طھظ†ظ…ظٹط© ظ…ظ…ط§ط±ط³طھظƒ ظ…ظ† ط®ظ„ط§ظ„ ط§ظ„ط§ظ†طھظ‚ط§ظ„ ط¥ظ„ظ‰ ط³ظٹط± ط§ظ„ط¹ظ…ظ„ ط§ظ„ط±ظ‚ظ…ظٹ ط¨ط§ط³طھط®ط¯ط§ظ… ظ…ط¬ظ…ظˆط¹ط© ط£ط¯ظˆط§طھ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹط© ط§ظ„ظ…ط«ط¨طھط© ظ„ط¯ظٹظ†ط§."}),n.jsxs("ul",{children:[n.jsx("li",{children:"âœ“ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ 3Shape TRIOS ط§ظ„ظ…ط¬ط§ظ†ظٹ"}),n.jsx("li",{children:"âœ“ ط³ظٹط± ط¹ظ…ظ„ ط§ظ„ظ…ط³ط­ ط§ظ„ط±ظ‚ظ…ظٹ ط§ظ„ظ…ظˆط¬ظ‡"}),n.jsx("li",{children:"âœ“ ظ…ط±ط§ط¬ط¹ط§طھ ط§ظ„ظ…ط³ط­ ط§ظ„ظ…ط¨ط§ط´ط±ط© ظ„ظ…ط²ظٹط¯ ظ…ظ† ط§ظ„ط«ظ‚ط©"}),n.jsx("li",{children:"âœ“ طھط¯ط±ظٹط¨ ظˆط¯ط¹ظ… ط؛ظٹط± ظ…ط­ط¯ظˆط¯"})]}),n.jsx("button",{className:"btn-secondary",children:"ط§ط­طµظ„ ط¹ظ„ظ‰ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط§ظ„ظ…ط¬ط§ظ†ظٹ ط§ظ„ط®ط§طµ ط¨ظƒ"})]})]}),n.jsx("style",{children:`
        .restorative-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 48px;
        }
        .restorative-card {
          padding: 42px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border: 1px solid rgba(126, 200, 184, 0.06);
          transition: border-color 0.5s, transform 0.5s var(--transition-smooth);
        }
        .restorative-card:hover {
          transform: translateY(-4px);
        }
        .restorative-card.highlight {
          border-color: rgba(126, 200, 184, 0.2);
          background: rgba(126, 200, 184, 0.02);
        }
        .restorative-card h3 {
          font-size: 1.5rem;
          color: var(--text-main);
        }
        .restorative-card p {
          color: var(--text-muted);
          line-height: 1.75;
        }
        .restorative-card ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .restorative-card li {
          color: var(--accent-cyan);
          font-weight: 500;
          font-size: 0.95rem;
        }
        .restorative-card button {
          margin-top: auto;
          width: fit-content;
        }
        @media (max-width: 768px) {
          .restorative-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Is="/lazord-Clinic-Task/assets/labs-BQjGWLhv.png",Ls="/lazord-Clinic-Task/assets/team-CQ9K8RDc.png",Os="/lazord-Clinic-Task/assets/before-BvA3lgK4.png",Bs="/lazord-Clinic-Task/assets/After-Czowy5Kj.png",Fs=({before:s,after:e})=>{const[i,r]=x.useState(50),t=x.useRef(null),o=x.useRef(!1),c=v=>{if(!o.current||!t.current)return;const g=t.current.getBoundingClientRect(),b=Math.max(0,Math.min(v-g.left,g.width))/g.width*100;r(b)},a=v=>{o.current=!0,c(v.clientX),t.current&&(t.current.style.touchAction="none")},p=v=>{c(v.clientX)},m=()=>{o.current=!1,t.current&&(t.current.style.touchAction="auto")},R=v=>{v.key==="ArrowLeft"?r(g=>Math.max(0,g-5)):v.key==="ArrowRight"&&r(g=>Math.min(100,g+5))};return n.jsxs("div",{ref:t,className:"slider-container",onPointerDown:a,onPointerMove:p,onPointerUp:m,onPointerLeave:m,role:"slider",tabIndex:0,"aria-valuenow":Math.round(i),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Before and after comparison slider",onKeyDown:R,children:[n.jsx("div",{className:"slider-image after-img",style:{backgroundImage:`url(${e})`},children:n.jsx("div",{className:"slider-badge",style:{right:"20px"},children:"AFTER"})}),n.jsx("div",{className:"slider-image before-img",style:{backgroundImage:`url(${s})`,clipPath:`inset(0 ${100-i}% 0 0)`},children:n.jsx("div",{className:"slider-badge",style:{left:"20px"},children:"BEFORE"})}),n.jsx("div",{className:"slider-divider",style:{left:`${i}%`},children:n.jsxs("div",{className:"slider-handle",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"15 18 9 12 15 6"})}),n.jsx("svg",{style:{transform:"rotate(180deg)"},width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"15 18 9 12 15 6"})})]})}),n.jsx("style",{children:`
        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: ew-resize;
          user-select: none;
          touch-action: pan-y;
          border-radius: var(--border-radius);
          overflow: hidden;
        }

        .slider-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .slider-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--text-main);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .slider-handle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(10, 25, 34, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(126, 200, 184, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          gap: 2px;
          transition: transform 0.2s, background 0.2s;
        }

        .slider-handle svg {
          width: 16px;
          height: 16px;
        }

        .slider-container:active .slider-handle {
          transform: scale(0.95);
          background: rgba(10, 25, 34, 1);
        }

        .slider-badge {
          position: absolute;
          bottom: 25px;
          background: rgba(10, 25, 34, 0.8);
          backdrop-filter: blur(4px);
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--text-main);
          border: 1px solid rgba(126, 200, 184, 0.2);
          z-index: 5;
        }
      `})]})},Ys=()=>{const s=x.useRef(null);return x.useEffect(()=>{const e=L.context(()=>{L.from(".article-layout-card",{y:50,opacity:0,duration:.9,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"articles",ref:s,className:"articles-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"طھط¹ط±ظپ ط¹ظ„ظ‰ ط§ظ„ظ…ط²ظٹط¯ ط­ظˆظ„ ظ…ط³طھظ‚ط¨ظ„ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ظˆظƒظٹظپ ظٹط´ظƒظ„ظ‡ ظ„ط§ط²ظˆط±ط¯."})}),n.jsxs("div",{className:"articles-layout",children:[n.jsxs("div",{className:"article-layout-card case-study-card glass-panel",children:[n.jsx("div",{className:"case-study-media",children:n.jsx(Fs,{before:Os,after:Bs})}),n.jsxs("div",{className:"article-card-content",children:[n.jsx("h3",{children:"ط¯ط±ط§ط³ط© ط­ط§ظ„ط©: 10 ظˆط­ط¯ط§طھ ظ„طھط­ظˆظٹظ„ ط§ط¨طھط³ط§ظ…ط© ط§ظ„ط²ط±ظƒظˆظ†ظٹط§"}),n.jsx("button",{className:"login-link",children:"ط§ظ‚ط±ط£ ط§ظ„ظ…ط²ظٹط¯ â†گ"})]})]}),n.jsxs("div",{className:"side-articles",children:[n.jsxs("div",{className:"article-layout-card side-card glass-panel",children:[n.jsx("div",{className:"side-card-media",children:n.jsx("img",{src:Is,alt:"ط¯ط§ط®ظ„ ظ…ط¹ظ…ظ„ ظ„ط§ط²ظˆط±ط¯ ظ„ظ„ظ…ط³طھظ‚ط¨ظ„",loading:"lazy"})}),n.jsxs("div",{className:"article-card-content",children:[n.jsx("h3",{children:"ط¯ط§ط®ظ„ ظ…ط¹ظ…ظ„ ظ„ط§ط²ظˆط±ط¯ ظ„ظ„ظ…ط³طھظ‚ط¨ظ„"}),n.jsx("button",{className:"login-link",children:"ط§ظ‚ط±ط£ ط§ظ„ظ…ط²ظٹط¯ â†گ"})]})]}),n.jsxs("div",{className:"article-layout-card side-card glass-panel",children:[n.jsx("div",{className:"side-card-media",children:n.jsx("img",{src:Ls,alt:"ظƒظٹظپ ظٹط¹ظ…ظ„ ظ„ط§ط²ظˆط±ط¯",loading:"lazy"})}),n.jsxs("div",{className:"article-card-content",children:[n.jsx("h3",{children:"ظƒظٹظپ ظٹط¹ظ…ظ„ ظ„ط§ط²ظˆط±ط¯"}),n.jsx("button",{className:"login-link",children:"ط§ظ‚ط±ط£ ط§ظ„ظ…ط²ظٹط¯ â†گ"})]})]})]})]}),n.jsx("style",{children:`
        .articles-layout {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 30px;
          margin-top: 40px;
        }

        .article-layout-card {
          display: flex;
          flex-direction: column;
          padding: 24px;
          transition: transform 0.5s var(--transition-smooth), border-color 0.5s;
        }

        .article-layout-card:hover {
          transform: translateY(-4px);
          border-color: rgba(126, 200, 184, 0.2);
        }

        .case-study-media {
          width: 100%;
          height: 480px;
          border-radius: var(--border-radius);
          overflow: hidden;
          margin-bottom: 24px;
          position: relative;
        }

        .side-articles {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .side-card-media {
          width: 100%;
          height: 180px;
          border-radius: var(--border-radius);
          overflow: hidden;
          margin-bottom: 20px;
        }

        .side-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s var(--transition-smooth);
        }

        .side-card:hover .side-card-media img {
          transform: scale(1.05);
        }

        .article-card-content {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-grow: 1;
        }

        .article-card-content h3 {
          font-size: 1.35rem;
          color: var(--text-main);
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .login-link {
          margin-top: auto;
          color: var(--accent-cyan);
          background: none;
          border: none;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }

        @media (max-width: 1024px) {
          .articles-layout {
            grid-template-columns: 1fr;
          }
          .case-study-media {
            height: 400px;
          }
          .side-articles {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .side-articles {
            grid-template-columns: 1fr;
          }
          .case-study-media {
            height: 300px;
          }
        }
      `})]})},Hs=[{q:"ظ…ط§ ظ‡ظˆ ظ„ط§ط²ظˆط±ط¯طں",a:"ظ„ط§ط²ظˆط±ط¯ ظ‡ظˆ ظ…ط®طھط¨ط± ط£ط³ظ†ط§ظ† ط±ظ‚ظ…ظٹ ظ…طھظƒط§ظ…ظ„ ظٹظˆظپط± طھظˆط§طµظ„ط§ظ‹ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ط­ظ‚ظٹظ‚ظٹ ط¨ظٹظ† ط£ط·ط¨ط§ط، ط§ظ„ط£ط³ظ†ط§ظ† ظˆط§ظ„ظ…ط®طھط¨ط±طŒ ظ…ط¹ طھظ‚ظ†ظٹط§طھ ظ…ط¨طھظƒط±ط© ظ„طھط­ط³ظٹظ† ط¬ظˆط¯ط© ط§ظ„ط¹ظ…ظ„ ظˆط³ط±ط¹ط© ط§ظ„طھط³ظ„ظٹظ…."},{q:"ظ…ط§ ظ‡ظٹ ظپظˆط§ط¦ط¯ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹطں",a:"ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹ ظٹظˆظپط± ط¯ظ‚ط© ط£ط¹ظ„ظ‰ ظپظٹ ط§ظ„طھطµظ…ظٹظ… ظˆط§ظ„طھطµظ†ظٹط¹طŒ ط£ظˆظ‚ط§طھ طھط³ظ„ظٹظ… ط£ط³ط±ط¹طŒ طھظƒط§ظ„ظٹظپ ط£ظ‚ظ„طŒ ظˆطھط¬ط±ط¨ط© ط£ظپط¶ظ„ ظ„ظ„ظ…ط±ظٹط¶ ظ…ط¹ ط¥ظ…ظƒط§ظ†ظٹط© ط§ظ„ظ…ط¹ط§ظٹظ†ط© ظ‚ط¨ظ„ ط§ظ„طھطµظ†ظٹط¹."},{q:"ظ…ط§ ظ‡ظˆ ظ…ط®طھط¨ط± ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹطں",a:"ظ‡ظˆ ظ…ط®طھط¨ط± ظٹط³طھط®ط¯ظ… ط§ظ„طھظ‚ظ†ظٹط§طھ ط§ظ„ط±ظ‚ظ…ظٹط© ط§ظ„ظ…طھظ‚ط¯ظ…ط© ظ…ط«ظ„ ط§ظ„ظ…ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط¯ط§ط®ظ„ ط§ظ„ظپظ… ظˆط§ظ„طھطµظ…ظٹظ… ط¨ظ…ط³ط§ط¹ط¯ط© ط§ظ„ظƒظ…ط¨ظٹظˆطھط± (CAD) ظˆط§ظ„طھطµظ†ظٹط¹ ط¨ظ…ط³ط§ط¹ط¯ط© ط§ظ„ظƒظ…ط¨ظٹظˆطھط± (CAM) ظ„ط¥ظ†طھط§ط¬ طھط±ظ…ظٹظ…ط§طھ ط£ط³ظ†ط§ظ† ط¯ظ‚ظٹظ‚ط© ظ„ظ„ط؛ط§ظٹط©."},{q:"ظ…ط§ ظ‡ظٹ ط³ظٹط± ط§ظ„ط¹ظ…ظ„ ط§ظ„ظ…ط¨طھظƒط±ط© ط§ظ„طھظٹ طھظ‚ط¯ظ…ظ‡ط§ ظ„ط§ط²ظˆط±ط¯طں",a:"ظ†ظ‚ط¯ظ… ط³ظٹط± ط¹ظ…ظ„ ط±ظ‚ظ…ظٹ ظ…ظˆط¬ظ‡ ظٹط´ظ…ظ„ ط§ظ„ظ…ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط§ظ„ط¯ظ‚ظٹظ‚طŒ ط§ظ„ظˆطµظپط§طھ ط§ظ„ط±ظ‚ظ…ظٹط©طŒ ظ…ط¹ط§ظٹظ†ط© ط§ظ„طھطµط§ظ…ظٹظ… ط«ظ„ط§ط«ظٹط© ط§ظ„ط£ط¨ط¹ط§ط¯طŒ طھطھط¨ط¹ ط§ظ„ط­ط§ظ„ط§طھ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ظپط¹ظ„ظٹطŒ ظˆط§ظ„طھط³ظ„ظٹظ… ط§ظ„ط³ط±ظٹط¹."},{q:"ظ…ط§ ظ‡ظٹ ظ…ظ†طھط¬ط§طھ ظ…ط®طھط¨ط± ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„طھظٹ طھظ‚ط¯ظ…ظ‡ط§ ظ„ط§ط²ظˆط±ط¯طں",a:"ظ†ظ‚ط¯ظ… ظ…ط¬ظ…ظˆط¹ط© ظˆط§ط³ط¹ط© طھط´ظ…ظ„ طھظٹط¬ط§ظ† ط§ظ„ط²ط±ظƒظˆظ†ظٹط§طŒ ط­ظ„ظˆظ„ ط²ط±ط§ط¹ط© ط§ظ„ط£ط³ظ†ط§ظ†طŒ ط£ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹط©طŒ ط§ظ„ظˆط§ظ‚ظٹط§طھ ط§ظ„ظ„ظٹظ„ظٹط©طŒ ظˆط§ظ„طھظ‚ظˆظٹظ… ط§ظ„ط´ظپط§ظپ."},{q:"ظƒظٹظپ ظٹطھظ… ظ…ظ‚ط§ط±ظ†ط© ظ„ط§ط²ظˆط±ط¯ ظ…ط¹ ظ…ط®طھط¨ط±ط§طھ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط£ط®ط±ظ‰طں",a:"ظ„ط§ط²ظˆط±ط¯ ظٹطھظ…ظٹط² ط¨ط§ظ„طھظˆط§طµظ„ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ط­ظ‚ظٹظ‚ظٹطŒ ظ…ط®طھط¨ط± ط±ظ‚ظ…ظٹ ط¨ط§ظ„ظƒط§ظ…ظ„طŒ ظ…ظ†طھط¬ط§طھ ظ…ط¨طھظƒط±ط©طŒ ط®ط¨ط±ط© ط¹ظ†ط¯ ط§ظ„ط·ظ„ط¨طŒ ظˆط£ظˆظ‚ط§طھ طھط³ظ„ظٹظ… ط±ط§ط¦ط¯ط© ظپظٹ ط§ظ„طµظ†ط§ط¹ط© ظ…ظ‚ط§ط±ظ†ط© ط¨ط§ظ„ظ…ط®طھط¨ط±ط§طھ ط§ظ„طھظ‚ظ„ظٹط¯ظٹط©."}],Xs=()=>{const[s,e]=x.useState(null),i=x.useRef(null),r=t=>{e(s===t?null:t)};return x.useEffect(()=>{const t=L.context(()=>{L.fromTo(".faq-item",{y:40,opacity:0},{y:0,opacity:1,duration:.6,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:i.current,start:"top 80%"}})},i);return()=>t.revert()},[]),n.jsxs("section",{id:"learning",ref:i,className:"faq-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"ط§ظ„ط£ط³ط¦ظ„ط© ط§ظ„ط´ط§ط¦ط¹ط© ط­ظˆظ„ ظ„ط§ط²ظˆط±ط¯"})}),n.jsx("div",{className:"faq-list",children:Hs.map((t,o)=>n.jsxs("div",{className:`faq-item glass-panel ${s===o?"active":""}`,children:[n.jsxs("button",{className:"faq-question",onClick:()=>r(o),"aria-expanded":s===o,"aria-controls":`faq-answer-${o}`,id:`faq-question-${o}`,children:[n.jsx("span",{children:t.q}),n.jsx("span",{className:"faq-toggle",children:s===o?"âˆ’":"+"})]}),n.jsx("div",{id:`faq-answer-${o}`,role:"region","aria-labelledby":`faq-question-${o}`,className:"faq-answer",children:n.jsx("p",{children:t.a})})]},t.q))})]})},qs=()=>{const s=x.useRef(null);x.useEffect(()=>{const i=L.context(()=>{L.from(".contact-content",{y:60,opacity:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>i.revert()},[]);const e=i=>{i.preventDefault(),alert("ط´ظƒط±ط§ظ‹ ظ„ظƒ! ط³ظ†طھظˆط§طµظ„ ظ…ط¹ظƒ ظ‚ط±ظٹط¨ط§ظ‹.")};return n.jsxs("section",{id:"contact",ref:s,className:"contact-section container",children:[n.jsxs("div",{className:"contact-content glass-panel",style:{padding:"50px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[n.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"20px"},children:"طھظˆط§طµظ„ ظ…ط¹ظ†ط§"}),n.jsx("p",{style:{color:"var(--text-muted)",maxWidth:"700px",margin:"0 auto"},children:"ظ‚ظ… ط¨طھط·ظˆظٹط± ظ…ظ…ط§ط±ط³ط§طھظƒ ظ…ط¹ ظ„ط§ط²ظˆط±ط¯ - ط§ظ„ط´ط±ظٹظƒ ط§ظ„ط±ظ‚ظ…ظٹ ط§ظ„ظˆط­ظٹط¯ ط§ظ„ظ…طھظƒط§ظ…ظ„ ظˆظ‚ظ… ط¨طھط­ط³ظٹظ† طھط¬ط±ط¨ط© ط§ظ„ظ…ط±ظٹط¶ ظˆط§ظ„ط­ظ„ظˆظ„ ط§ظ„ط³ط±ظٹط±ظٹط© ظˆظ†ظ…ظˆ ط§ظ„ط£ط¹ظ…ط§ظ„."}),n.jsx("h3",{style:{marginTop:"20px",color:"#fff"},children:"ط§ط¨ط¯ط£ ط§ظ„ظٹظˆظ… ط¹ظ† ط·ط±ظٹظ‚ ظ…ظ„ط، ط§ظ„ظ†ظ…ظˆط°ط¬."})]}),n.jsxs("form",{className:"contact-form",onSubmit:e,style:{maxWidth:"800px",margin:"0 auto"},children:[n.jsxs("div",{className:"form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[n.jsx("input",{type:"text",placeholder:"ط§ظ„ط§ط³ظ… ط§ظ„ط£ظˆظ„",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"text",placeholder:"ط§ط³ظ… ط§ظ„ط¹ط§ط¦ظ„ط©",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"email",placeholder:"ط¹ظ†ظˆط§ظ† ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"tel",placeholder:"ط±ظ‚ظ… ط§ظ„ظ‡ط§طھظپ",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"text",placeholder:"ط¯ظˆط±ظƒ ظپظٹ ط§ظ„ط¹ظٹط§ط¯ط©",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"text",placeholder:"ط§ط³ظ… ط¹ظٹط§ط¯طھظƒ",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}})]}),n.jsx("p",{style:{marginTop:"30px",fontSize:"0.9rem",color:"var(--text-muted)",textAlign:"center",lineHeight:"1.6"},children:"ظ…ظ† ط®ظ„ط§ظ„ طھظ‚ط¯ظٹظ… ط§ظ„ظ†ظ…ظˆط°ط¬ ط£ط¹ظ„ط§ظ‡طŒ ط£ط¤ظƒط¯ ط¹ظ„ظ‰ ط´ط±ظˆط· ط§ظ„ط§ط³طھط®ط¯ط§ظ… ظˆط³ظٹط§ط³ط© ط§ظ„ط®طµظˆطµظٹط© ط§ظ„ط®ط§طµط© ط¨ط´ط±ظƒط© ظ„ط§ط²ظˆط±ط¯ ظˆط£ظˆط§ظپظ‚ ط¹ظ„ظ‰ ط£ظ†ظ‡ ظٹظ…ظƒظ† ط§ظ„ط§طھطµط§ظ„ ط¨ظٹ ظ…ظ† ظ‚ط¨ظ„ ط´ط±ظƒط© ظ„ط§ط²ظˆط±ط¯."}),n.jsx("div",{style:{textAlign:"center",marginTop:"30px"},children:n.jsx("button",{type:"submit",className:"btn-primary",style:{padding:"15px 60px"},children:"ط§ط¨ط¯ط£ ط§ظ„ط¢ظ†"})})]})]}),n.jsx("style",{children:`
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})},Gs=()=>n.jsxs("footer",{className:"footer-section",children:[n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"footer-header",style:{textAlign:"center",marginBottom:"60px"},children:[n.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"20px"},children:"ظ‡ظ„ ظ…ط§ط²ظ„طھ طھط£ط®ط° ط§ظ„ط§ظ†ط·ط¨ط§ط¹ط§طھ ط§ظ„ط¬ط³ط¯ظٹط©طں"}),n.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.2rem"},children:"ظ†ظ‚ط¯ظ… ظ„ظƒ ظƒظ„ ظ…ط§ طھط­طھط§ط¬ظ‡ ظ„ظ„ط¨ط¯ط، ظپظٹ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹ â€” ط¨ظ…ط§ ظپظٹ ط°ظ„ظƒ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط¯ط§ط®ظ„ ط§ظ„ظپظ…"})]}),n.jsxs("div",{className:"footer-grid",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"40px"},children:[n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"ظ„ط§ط²ظˆط±ط¯"}),n.jsx("a",{href:"#",children:"ط§ظ„طµظپط­ط© ط§ظ„ط±ط¦ظٹط³ظٹط©"}),n.jsx("a",{href:"#",children:"طھظ‚ظٹظٹظ…ط§طھ"}),n.jsx("a",{href:"#",children:"ظˆط¸ط§ط¦ظپ"}),n.jsx("a",{href:"#",children:"ط³ظٹط§ط³ط© ط§ظ„ط®طµظˆطµظٹط©"})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"ظ…ظ†طھط¬ط§طھ"}),n.jsx("a",{href:"#",children:"ظ…ظ†طھط¬ط§طھ"}),n.jsx("a",{href:"#",children:"ط¥طھظ‚ط§ظ† ظˆط§ظ„طھط¹ظ„ظ…"}),n.jsx("a",{href:"#",children:"ط£ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹط©"}),n.jsx("a",{href:"#",children:"ط£ظ‚ظٹظ… ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ظپط±ط¹"}),n.jsx("a",{href:"#",children:"ط­ظ„ظˆظ„ ط§ظ„ط²ط±ط¹"})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"ظ…ظ…ط§ط±ط³ط§طھ"}),n.jsx("a",{href:"#",children:"ظ‡ظ„ ط¨ط¯ط£طھطں ط§ط¨ط¯ط£ ظ‡ظ†ط§"}),n.jsx("a",{href:"#",children:"ظ‚طµطµ ط§ظ„ظ†ط¬ط§ط­"}),n.jsx("a",{href:"#",children:"ط£ظ‚ظٹظ… ط¥ظ† ط§ظ„ظ…ظ…ط§ط±ط³ط©"}),n.jsx("a",{href:"#",children:"طھط³ط¬ظٹظ„ ط§ظ„ط¯ط®ظˆظ„"})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"ظ…ظˆط§ط±ط¯"}),n.jsx("a",{href:"#",children:"ط¬ط¯ظٹط¯ ظپظٹ ظ…ظ…ط§ط±ط³ط§طھ ط§ظ„ظ…ط³ط­"}),n.jsx("a",{href:"#",children:"ط³ط§ط± ظ…ط³ط­ ط´ط§ظ…ظ„"}),n.jsx("a",{href:"#",children:"ط±ط§ط¬ط¹ ط¯ظ„ظٹظ„ ط®ط¯ظ…ط§طھ ظ…ط®طھط¨ط± ط¯ط§ظ†ط¯ظٹ"}),n.jsx("a",{href:"#",children:"ط®ط° ظ…ظ…ط§ط±ط³طھظƒ ط§ظ„ط±ظ‚ظ…ظٹط©"}),n.jsx("a",{href:"#",children:"ط§طھطµظ„ ط¹ظ„ظ‰ ط¬ظ…ظٹط¹ ط´ظٹظˆط®"})]})]}),n.jsx("div",{className:"footer-divider",style:{margin:"60px 0 30px",borderTop:"1px solid rgba(126,200,184,0.04)"}}),n.jsx("div",{className:"footer-bottom",children:n.jsxs("p",{className:"footer-copyright",children:["آ© ",new Date().getFullYear()," ظ„ط§ط²ظˆط±ط¯. ط¬ظ…ظٹط¹ ط§ظ„ط­ظ‚ظˆظ‚ ظ…ط­ظپظˆط¸ط©."]})})]}),n.jsx("style",{children:`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]}),Ws="/lazord-Clinic-Task/assets/clinic-interior-HdfRhmrN.png",$s="/lazord-Clinic-Task/assets/dental-technology-CLtNz40G.png",Us="/lazord-Clinic-Task/assets/smile-closeup-_5Ese0H7.png",Vs="/lazord-Clinic-Task/assets/dental-crown-BbCLrrNr.png",Ur=({position:s,texture:e,delay:i=0})=>{const r=x.useRef(null);return Nn(t=>{r.current&&(r.current.position.y+=Math.sin(t.clock.elapsedTime+i)*8e-4,r.current.rotation.y=Math.sin(t.clock.elapsedTime*.4+i)*.03)}),n.jsxs("group",{position:s,children:[n.jsxs("mesh",{children:[n.jsx("planeGeometry",{args:[1.6,1]}),n.jsx("meshBasicMaterial",{color:"#7ec8b8",wireframe:!0,transparent:!0,opacity:.1})]}),n.jsxs("mesh",{ref:r,children:[n.jsx("planeGeometry",{args:[1.5,.9]}),n.jsx("meshBasicMaterial",{map:e,transparent:!0,opacity:.4,side:Fi,blending:Bi})]}),n.jsxs("mesh",{position:[0,-.55,0],children:[n.jsx("planeGeometry",{args:[1.5,.015]}),n.jsx("meshBasicMaterial",{color:"#7ec8b8",transparent:!0,opacity:.2})]})]})},Ks=()=>n.jsxs("group",{rotation:[-Math.PI/2,0,0],position:[0,-2,0],children:[n.jsx("gridHelper",{args:[40,40,"#1a3a4a","#0d1a2a"]}),n.jsx(Rn,{count:60,scale:20,size:.8,speed:.15,color:"#7ec8b8"})]}),Zs=()=>{const{camera:s}=Pi(),e=x.useRef(null),i=x.useRef(null),r=x.useRef(null),t=x.useRef(null),o=x.useRef(null),c=zi({clinic:Ws,tech:$s,smile:Us,crown:Vs}),a=x.useMemo(()=>{const p=[];for(let v=0;v<=8*32;v++){const g=v/256,u=g*8*Math.PI*2,b=.2-g*.08,q=-g*1.4+1.4/2;p.push(new Di(Math.cos(u)*b,q,Math.sin(u)*b))}return new Ai(new Ii(p),128,.03,8,!1)},[]);return x.useEffect(()=>{const p=L.timeline({scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:1.5}});return e.current&&i.current&&r.current&&t.current&&(p.to(i.current.position,{y:3.5,z:.5,duration:2},0).to(r.current.position,{y:1.8,duration:2},0).to(t.current.position,{y:-1.2,duration:2},0).to(e.current.rotation,{y:Math.PI*1.5,duration:4},0),p.to(s.position,{x:2,z:8,duration:2},0).to(s.position,{x:-2,y:1,duration:2},2),o.current&&p.to(o.current.position,{y:-1,z:2,duration:2},1).to(o.current.rotation,{y:Math.PI*.2,duration:4},0)),()=>{p.kill(),M.getAll().forEach(m=>{m.vars.trigger==="body"&&m.kill()})}},[s]),Nn(p=>{const m=p.clock.elapsedTime;e.current&&(e.current.rotation.y+=.0015,e.current.position.y=Math.sin(m*.3)*.08)}),n.jsxs(n.Fragment,{children:[n.jsx(si,{preset:"night"}),n.jsx("ambientLight",{intensity:.15}),n.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,intensity:1.2,color:"#7ec8b8",castShadow:!0}),n.jsx("spotLight",{position:[-10,5,5],angle:.2,penumbra:1,intensity:.8,color:"#6fa8dc"}),n.jsx("pointLight",{position:[0,2,5],intensity:.6,color:"#e8e5e0"}),n.jsx(Ks,{}),n.jsxs("group",{ref:e,position:[0,0,0],children:[n.jsx(Li,{speed:1.2,rotationIntensity:.15,floatIntensity:.3,children:n.jsxs("group",{children:[n.jsxs("mesh",{ref:i,position:[0,1.4,0],children:[n.jsx("cylinderGeometry",{args:[.6,.45,.9,32]}),n.jsx("meshPhysicalMaterial",{color:"#f0ede8",metalness:.05,roughness:.12,clearcoat:1,transmission:.1,thickness:.5})]}),n.jsxs("mesh",{ref:r,position:[0,.5,0],children:[n.jsx("cylinderGeometry",{args:[.3,.2,.7,32]}),n.jsx("meshPhysicalMaterial",{color:"#c0cdd8",metalness:.85,roughness:.15})]}),n.jsx("mesh",{ref:t,position:[0,-.6,0],geometry:a,children:n.jsx("meshPhysicalMaterial",{color:"#95a5b0",metalness:.95,roughness:.2})}),n.jsxs("mesh",{position:[0,-.6,0],children:[n.jsx("cylinderGeometry",{args:[.15,.08,1.4,32]}),n.jsx("meshPhysicalMaterial",{color:"#95a5b0",metalness:.95,roughness:.2})]})]})}),n.jsxs("group",{ref:o,children:[n.jsx(Ur,{position:[-3,1,-2],texture:c.tech,delay:0}),n.jsx(Ur,{position:[3,2,-3],texture:c.clinic,delay:1}),n.jsx(Ur,{position:[-2.5,-1.5,-1],texture:c.smile,delay:2}),n.jsx(Ur,{position:[3.5,-1,-2],texture:c.crown,delay:3})]})]}),n.jsx(Oi,{position:[0,-2,0],opacity:.25,scale:20,blur:2.5,far:4.5}),n.jsx(Rn,{count:180,scale:15,size:1,speed:.25,opacity:.15,color:"#7ec8b8"})]})},Qs=()=>n.jsx(x.Suspense,{fallback:null,children:n.jsx(Zs,{})}),Js="/lazord-Clinic-Task/assets/dental-implant-B18ykhAq.png",xn=({position:s,rotation:e,color:i,metalness:r,roughness:t,geometry:o,delay:c})=>{const a=x.useRef(null);return x.useEffect(()=>{a.current&&(L.to(a.current.position,{x:s[0]*3,y:s[1]*2.5,z:s[2]*2,duration:2.5,delay:1+c,ease:"expo.out"}),L.to(a.current.rotation,{x:(Math.random()-.5)*2,y:(Math.random()-.5)*2,duration:3,delay:1+c,ease:"power2.out"}))},[s,c]),n.jsxs("mesh",{ref:a,position:[0,0,0],rotation:e,children:[n.jsx("primitive",{object:o,attach:"geometry"}),n.jsx("meshPhysicalMaterial",{color:i,metalness:r,roughness:t,clearcoat:1,emissive:i,emissiveIntensity:.03})]})},eo=()=>{const s=x.useRef(null),e=x.useMemo(()=>new ln(.6,.45,.8,32),[]),i=x.useMemo(()=>new ln(.3,.2,.6,32),[]),r=x.useMemo(()=>new ln(.2,.1,1.2,32),[]);return x.useEffect(()=>()=>{e.dispose(),i.dispose(),r.dispose()},[e,i,r]),Nn(()=>{s.current&&(s.current.rotation.y+=.004)}),n.jsxs("group",{ref:s,children:[n.jsx(xn,{name:"Crown",geometry:e,position:[0,1.2,0],rotation:[0,0,0],color:"#f0ede8",metalness:.1,roughness:.15,delay:.2}),n.jsx(xn,{name:"Abutment",geometry:i,position:[0,.2,0],rotation:[0,0,0],color:"#c0cdd8",metalness:.85,roughness:.2,delay:.4}),n.jsx(xn,{name:"Screw",geometry:r,position:[0,-1,0],rotation:[0,0,0],color:"#95a5b0",metalness:.95,roughness:.3,delay:.6})]})},to=({onComplete:s})=>{const[e,i]=x.useState(!0),r=x.useRef(null),t=x.useRef(null);return x.useEffect(()=>{const o=L.timeline();return o.fromTo(t.current,{opacity:0,scale:.8,letterSpacing:"20px"},{opacity:1,scale:1,letterSpacing:"5px",duration:1.5,ease:"power4.out"}),o.to(r.current,{opacity:0,duration:1,delay:3.5,onComplete:()=>{i(!1),s()}}),()=>{o.kill()}},[s]),e?n.jsxs("div",{ref:r,className:"splash-screen",children:[n.jsx("div",{className:"splash-img-bg",style:{backgroundImage:`url(${Js})`,opacity:.03,position:"absolute",inset:0,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",filter:"grayscale(1) brightness(1.5)"}}),n.jsx("div",{className:"splash-bg"}),n.jsx("div",{className:"splash-canvas",children:n.jsxs(oi,{camera:{position:[0,0,5],fov:45},children:[n.jsx("color",{attach:"background",args:["#0A1922"]}),n.jsx("ambientLight",{intensity:.4}),n.jsx("pointLight",{position:[10,10,10],intensity:1.5,color:"#7ec8b8"}),n.jsx("pointLight",{position:[-10,-10,-10],intensity:.8,color:"#6fa8dc"}),n.jsx(x.Suspense,{fallback:null,children:n.jsx(si,{preset:"city"})}),n.jsx(Yi,{children:n.jsx(eo,{})}),n.jsx(Rn,{count:150,scale:10,size:1.5,speed:.3,opacity:.3,color:"#7ec8b8"})]})}),n.jsx("div",{className:"splash-content",children:n.jsxs("div",{ref:t,className:"splash-logo",children:[n.jsx("h1",{children:"LAZORD"}),n.jsx("div",{className:"splash-loader",children:n.jsx("div",{className:"loader-bar"})}),n.jsx("p",{children:"M O D E R N   D E N T A L   L A B"})]})}),n.jsx("style",{children:`
        .splash-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0A1922;
          overflow: hidden;
        }

        .splash-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, #0F2430 0%, #0A1922 100%);
          opacity: 0.85;
        }

        .splash-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .splash-content {
          position: relative;
          z-index: 2;
          text-align: center;
          pointer-events: none;
        }

        .splash-logo h1 {
          font-family: 'Inter', 'Tajawal', sans-serif;
          font-size: 4.5rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #e8e5e0, #7ec8b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 30px rgba(126, 200, 184, 0.2));
          letter-spacing: 8px;
        }

        .splash-logo p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 15px;
          opacity: 0.7;
          letter-spacing: 3px;
        }

        .splash-loader {
          width: 180px;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.06);
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border-radius: 2px;
        }

        .loader-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #7ec8b8, #6fa8dc);
          box-shadow: 0 0 12px rgba(126, 200, 184, 0.3);
          animation: load 3s ease-in-out forwards;
        }

        @keyframes load {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `})]}):null};class ro extends En.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,i){console.error("[ErrorBoundary] Caught error:",e,i)}render(){return this.state.hasError?this.props.fallback??n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"200px",color:"rgba(126,200,184,0.6)",fontFamily:"Inter, sans-serif",fontSize:"0.9rem"},children:"⚠️ تعذّر تحميل هذا القسم"}):this.props.children}}L.registerPlugin(M);function no(){const[s,e]=En.useState(!0),i=x.useRef(null),r=x.useRef(0),t=x.useRef(null);return x.useEffect(()=>{s||window.scrollTo({top:0})},[s]),x.useEffect(()=>{const o=new Xi({duration:1.8,easing:a=>Math.min(1,1.001-Math.pow(2,-10*a)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:.7,touchMultiplier:2});function c(a){o.raf(a),r.current=requestAnimationFrame(c)}return r.current=requestAnimationFrame(c),()=>{cancelAnimationFrame(r.current),o.destroy()}},[]),x.useEffect(()=>{if(s)return;const o=setTimeout(()=>{const c=L.context(()=>{L.utils.toArray("main > section").forEach((p,m)=>{if(m===0){L.set(p,{opacity:1,y:0});return}L.fromTo(p,{opacity:0,y:60},{opacity:1,y:0,duration:1.4,ease:"power2.out",scrollTrigger:{trigger:p,start:"top 92%",end:"top 40%",toggleActions:"play none none none"}});const R=p.querySelector(".section-header");R&&L.fromTo(R,{y:30,opacity:0},{y:0,opacity:1,duration:1.2,ease:"power2.out",scrollTrigger:{trigger:p,start:"top 85%",toggleActions:"play none none none"}})})},i.current);t.current=c},100);return()=>{clearTimeout(o),t.current&&(t.current.revert(),t.current=null)}},[s]),n.jsxs(n.Fragment,{children:[s&&n.jsx(to,{onComplete:()=>e(!1)}),!s&&n.jsx("div",{className:"canvas-container",children:n.jsx(ro,{fallback:null,children:n.jsx(oi,{camera:{position:[0,0,6],fov:40},dpr:[1,2],gl:{antialias:!0,alpha:!0},children:n.jsx(x.Suspense,{fallback:null,children:n.jsx(Qs,{})})})})}),n.jsxs("div",{className:`app-content ${s?"hidden":"visible"}`,children:[n.jsx(cs,{}),n.jsxs("main",{ref:i,children:[n.jsx(ds,{}),n.jsx(_s,{}),n.jsx(As,{}),n.jsx(Ds,{}),n.jsx(Cs,{}),n.jsx(ms,{}),n.jsx(us,{}),n.jsx(qs,{}),n.jsx(Ys,{}),n.jsx(Xs,{})]}),n.jsx(Gs,{})]}),n.jsx("style",{children:`
        .app-content.hidden {
          opacity: 0;
          pointer-events: none;
        }
        .app-content.visible {
          opacity: 1;
          transition: opacity 2s var(--transition-smooth);
        }

        /* Sections start invisible — GSAP ScrollTrigger handles reveal */
        main > section {
          opacity: 0;
          will-change: opacity, transform;
        }

        /* Hero always visible immediately after splash */
        main > section:first-child {
          opacity: 1;
        }
      `})]})}Hi.createRoot(document.getElementById("root")).render(n.jsx(En.StrictMode,{children:n.jsx(no,{})}));
