import{r as w,j as n,u as Ei,a as Di,T as zi,C as Ai,b as Rn,E as si,F as Ii,c as Oi,S as Mn,V as Li,A as Bi,D as Fi,d as oi,R as wr,e as Yi,f as cn,g as qi}from"./vendor-three-_elsi3OQ.js";import{g as T,L as Xi}from"./vendor-animation-BGbbmiRj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function Hi(s,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(s,r.key,r)}}function Gi(s,e,i){return e&&Hi(s.prototype,e),s}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ye,Kr,Ke,Dt,zt,or,ai,Xt,_r,li,jt,lt,ci,di=function(){return ye||typeof window<"u"&&(ye=window.gsap)&&ye.registerPlugin&&ye},ui=1,sr=[],D=[],gt=[],jr=Date.now,vn=function(e,i){return i},Wi=function(){var e=_r.core,i=e.bridge||{},r=e._scrollers,t=e._proxies;r.push.apply(r,D),t.push.apply(t,gt),D=r,gt=t,vn=function(l,a){return i[l](a)}},At=function(e,i){return~gt.indexOf(e)&&gt[gt.indexOf(e)+1][i]},kr=function(e){return!!~li.indexOf(e)},Ie=function(e,i,r,t,o){return e.addEventListener(i,r,{passive:t!==!1,capture:!!o})},Ae=function(e,i,r,t){return e.removeEventListener(i,r,!!t)},Or="scrollLeft",Lr="scrollTop",yn=function(){return jt&&jt.isPressed||D.cache++},rn=function(e,i){var r=function t(o){if(o||o===0){ui&&(Ke.history.scrollRestoration="manual");var l=jt&&jt.isPressed;o=t.v=Math.round(o)||(jt&&jt.iOS?1:0),e(o),t.cacheID=D.cache,l&&vn("ss",o)}else(i||D.cache!==t.cacheID||vn("ref"))&&(t.cacheID=D.cache,t.v=e());return t.v+t.offset};return r.offset=0,e&&r},Fe={s:Or,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rn(function(s){return arguments.length?Ke.scrollTo(s,ue.sc()):Ke.pageXOffset||Dt[Or]||zt[Or]||or[Or]||0})},ue={s:Lr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fe,sc:rn(function(s){return arguments.length?Ke.scrollTo(Fe.sc(),s):Ke.pageYOffset||Dt[Lr]||zt[Lr]||or[Lr]||0})},Xe=function(e,i){return(i&&i._ctx&&i._ctx.selector||ye.utils.toArray)(e)[0]||(typeof e=="string"&&ye.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},$i=function(e,i){for(var r=i.length;r--;)if(i[r]===e||i[r].contains(e))return!0;return!1},It=function(e,i){var r=i.s,t=i.sc;kr(e)&&(e=Dt.scrollingElement||zt);var o=D.indexOf(e),l=t===ue.sc?1:2;!~o&&(o=D.push(e)-1),D[o+l]||Ie(e,"scroll",yn);var a=D[o+l],p=a||(D[o+l]=rn(At(e,r),!0)||(kr(e)?t:rn(function(m){return arguments.length?e[r]=m:e[r]})));return p.target=e,a||(p.smooth=ye.getProperty(e,"scrollBehavior")==="smooth"),p},wn=function(e,i,r){var t=e,o=e,l=jr(),a=l,p=i||50,m=Math.max(500,p*3),z=function(x,H){var q=jr();H||q-l>p?(o=t,t=x,a=l,l=q):r?t+=x:t=o+(x-o)/(q-a)*(l-a)},b=function(){o=t=r?0:t,a=l=0},g=function(x){var H=a,q=o,oe=jr();return(x||x===0)&&x!==t&&z(x),l===a||oe-a>m?0:(t+(r?q:-q))/((r?oe:l)-H)*1e3};return{update:z,reset:b,getVelocity:g}},gr=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Fn=function(e){var i=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(r)?i:r},pi=function(){_r=ye.core.globals().ScrollTrigger,_r&&_r.core&&Wi()},fi=function(e){return ye=e||di(),!Kr&&ye&&typeof document<"u"&&document.body&&(Ke=window,Dt=document,zt=Dt.documentElement,or=Dt.body,li=[Ke,Dt,zt,or],ye.utils.clamp,ci=ye.core.context||function(){},Xt="onpointerenter"in or?"pointer":"mouse",ai=ee.isTouch=Ke.matchMedia&&Ke.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ke||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,lt=ee.eventTypes=("ontouchstart"in zt?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zt?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ui=0},500),pi(),Kr=1),Kr};Fe.op=ue;D.cache=0;var ee=function(){function s(i){this.init(i)}var e=s.prototype;return e.init=function(r){Kr||fi(ye)||console.warn("Please gsap.registerPlugin(Observer)"),_r||pi();var t=r.tolerance,o=r.dragMinimum,l=r.type,a=r.target,p=r.lineHeight,m=r.debounce,z=r.preventDefault,b=r.onStop,g=r.onStopDelay,u=r.ignore,x=r.wheelSpeed,H=r.event,q=r.onDragStart,oe=r.onDragEnd,$=r.onDrag,xe=r.onPress,M=r.onRelease,Ze=r.onRight,G=r.onLeft,C=r.onUp,Re=r.onDown,Ye=r.onChangeX,v=r.onChangeY,pe=r.onChange,k=r.onToggleX,ht=r.onToggleY,ae=r.onHover,Me=r.onHoverEnd,Pe=r.onMove,F=r.ignoreCheck,te=r.isNormalizer,re=r.onGestureStart,c=r.onGestureEnd,le=r.onWheel,Ot=r.onEnable,Ct=r.onDisable,Qe=r.onClick,mt=r.scrollSpeed,we=r.capture,ne=r.allowClicks,Ee=r.lockAxis,_e=r.onLockAxis;this.target=a=Xe(a)||zt,this.vars=r,u&&(u=ye.utils.toArray(u)),t=t||1e-9,o=o||0,x=x||1,mt=mt||1,l=l||"wheel,touch,pointer",m=m!==!1,p||(p=parseFloat(Ke.getComputedStyle(or).lineHeight)||22);var Tt,De,ze,O,Z,qe,He,d=this,Ge=0,xt=0,St=r.passive||!z&&r.passive!==!1,V=It(a,Fe),bt=It(a,ue),Nt=V(),Lt=bt(),fe=~l.indexOf("touch")&&!~l.indexOf("pointer")&&lt[0]==="pointerdown",Rt=kr(a),Q=a.ownerDocument||Dt,nt=[0,0,0],Je=[0,0,0],vt=0,dr=function(){return vt=jr()},ie=function(_,L){return(d.event=_)&&u&&$i(_.target,u)||L&&fe&&_.pointerType!=="touch"||F&&F(_,L)},zr=function(){d._vx.reset(),d._vy.reset(),De.pause(),b&&b(d)},yt=function(){var _=d.deltaX=Fn(nt),L=d.deltaY=Fn(Je),f=Math.abs(_)>=t,S=Math.abs(L)>=t;pe&&(f||S)&&pe(d,_,L,nt,Je),f&&(Ze&&d.deltaX>0&&Ze(d),G&&d.deltaX<0&&G(d),Ye&&Ye(d),k&&d.deltaX<0!=Ge<0&&k(d),Ge=d.deltaX,nt[0]=nt[1]=nt[2]=0),S&&(Re&&d.deltaY>0&&Re(d),C&&d.deltaY<0&&C(d),v&&v(d),ht&&d.deltaY<0!=xt<0&&ht(d),xt=d.deltaY,Je[0]=Je[1]=Je[2]=0),(O||ze)&&(Pe&&Pe(d),ze&&(q&&ze===1&&q(d),$&&$(d),ze=0),O=!1),qe&&!(qe=!1)&&_e&&_e(d),Z&&(le(d),Z=!1),Tt=0},Qt=function(_,L,f){nt[f]+=_,Je[f]+=L,d._vx.update(_),d._vy.update(L),m?Tt||(Tt=requestAnimationFrame(yt)):yt()},Jt=function(_,L){Ee&&!He&&(d.axis=He=Math.abs(_)>Math.abs(L)?"x":"y",qe=!0),He!=="y"&&(nt[2]+=_,d._vx.update(_,!0)),He!=="x"&&(Je[2]+=L,d._vy.update(L,!0)),m?Tt||(Tt=requestAnimationFrame(yt)):yt()},Mt=function(_){if(!ie(_,1)){_=gr(_,z);var L=_.clientX,f=_.clientY,S=L-d.x,y=f-d.y,N=d.isDragging;d.x=L,d.y=f,(N||(S||y)&&(Math.abs(d.startX-L)>=o||Math.abs(d.startY-f)>=o))&&(ze||(ze=N?2:1),N||(d.isDragging=!0),Jt(S,y))}},Bt=d.onPress=function(R){ie(R,1)||R&&R.button||(d.axis=He=null,De.pause(),d.isPressed=!0,R=gr(R),Ge=xt=0,d.startX=d.x=R.clientX,d.startY=d.y=R.clientY,d._vx.reset(),d._vy.reset(),Ie(te?a:Q,lt[1],Mt,St,!0),d.deltaX=d.deltaY=0,xe&&xe(d))},A=d.onRelease=function(R){if(!ie(R,1)){Ae(te?a:Q,lt[1],Mt,!0);var _=!isNaN(d.y-d.startY),L=d.isDragging,f=L&&(Math.abs(d.x-d.startX)>3||Math.abs(d.y-d.startY)>3),S=gr(R);!f&&_&&(d._vx.reset(),d._vy.reset(),z&&ne&&ye.delayedCall(.08,function(){if(jr()-vt>300&&!R.defaultPrevented){if(R.target.click)R.target.click();else if(Q.createEvent){var y=Q.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,Ke,1,S.screenX,S.screenY,S.clientX,S.clientY,!1,!1,!1,!1,0,null),R.target.dispatchEvent(y)}}})),d.isDragging=d.isGesturing=d.isPressed=!1,b&&L&&!te&&De.restart(!0),ze&&yt(),oe&&L&&oe(d),M&&M(d,f)}},Ft=function(_){return _.touches&&_.touches.length>1&&(d.isGesturing=!0)&&re(_,d.isDragging)},it=function(){return(d.isGesturing=!1)||c(d)},st=function(_){if(!ie(_)){var L=V(),f=bt();Qt((L-Nt)*mt,(f-Lt)*mt,1),Nt=L,Lt=f,b&&De.restart(!0)}},ot=function(_){if(!ie(_)){_=gr(_,z),le&&(Z=!0);var L=(_.deltaMode===1?p:_.deltaMode===2?Ke.innerHeight:1)*x;Qt(_.deltaX*L,_.deltaY*L,0),b&&!te&&De.restart(!0)}},Yt=function(_){if(!ie(_)){var L=_.clientX,f=_.clientY,S=L-d.x,y=f-d.y;d.x=L,d.y=f,O=!0,b&&De.restart(!0),(S||y)&&Jt(S,y)}},er=function(_){d.event=_,ae(d)},wt=function(_){d.event=_,Me(d)},ur=function(_){return ie(_)||gr(_,z)&&Qe(d)};De=d._dc=ye.delayedCall(g||.25,zr).pause(),d.deltaX=d.deltaY=0,d._vx=wn(0,50,!0),d._vy=wn(0,50,!0),d.scrollX=V,d.scrollY=bt,d.isDragging=d.isGesturing=d.isPressed=!1,ci(this),d.enable=function(R){return d.isEnabled||(Ie(Rt?Q:a,"scroll",yn),l.indexOf("scroll")>=0&&Ie(Rt?Q:a,"scroll",st,St,we),l.indexOf("wheel")>=0&&Ie(a,"wheel",ot,St,we),(l.indexOf("touch")>=0&&ai||l.indexOf("pointer")>=0)&&(Ie(a,lt[0],Bt,St,we),Ie(Q,lt[2],A),Ie(Q,lt[3],A),ne&&Ie(a,"click",dr,!0,!0),Qe&&Ie(a,"click",ur),re&&Ie(Q,"gesturestart",Ft),c&&Ie(Q,"gestureend",it),ae&&Ie(a,Xt+"enter",er),Me&&Ie(a,Xt+"leave",wt),Pe&&Ie(a,Xt+"move",Yt)),d.isEnabled=!0,d.isDragging=d.isGesturing=d.isPressed=O=ze=!1,d._vx.reset(),d._vy.reset(),Nt=V(),Lt=bt(),R&&R.type&&Bt(R),Ot&&Ot(d)),d},d.disable=function(){d.isEnabled&&(sr.filter(function(R){return R!==d&&kr(R.target)}).length||Ae(Rt?Q:a,"scroll",yn),d.isPressed&&(d._vx.reset(),d._vy.reset(),Ae(te?a:Q,lt[1],Mt,!0)),Ae(Rt?Q:a,"scroll",st,we),Ae(a,"wheel",ot,we),Ae(a,lt[0],Bt,we),Ae(Q,lt[2],A),Ae(Q,lt[3],A),Ae(a,"click",dr,!0),Ae(a,"click",ur),Ae(Q,"gesturestart",Ft),Ae(Q,"gestureend",it),Ae(a,Xt+"enter",er),Ae(a,Xt+"leave",wt),Ae(a,Xt+"move",Yt),d.isEnabled=d.isPressed=d.isDragging=!1,Ct&&Ct(d))},d.kill=d.revert=function(){d.disable();var R=sr.indexOf(d);R>=0&&sr.splice(R,1),jt===d&&(jt=0)},sr.push(d),te&&kr(a)&&(jt=d),d.enable(H)},Gi(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();ee.version="3.14.2";ee.create=function(s){return new ee(s)};ee.register=fi;ee.getAll=function(){return sr.slice()};ee.getById=function(s){return sr.filter(function(e){return e.vars.id===s})[0]};di()&&ye.registerPlugin(ee);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var h,nr,E,X,Ve,B,Pn,nn,Er,Cr,mr,Br,Te,an,_n,Le,Yn,qn,ir,gi,dn,hi,Oe,jn,mi,xi,Et,kn,En,ar,Dn,Tr,Cn,un,Fr=1,Se=Date.now,pn=Se(),rt=0,xr=0,Xn=function(e,i,r){var t=Ue(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return r["_"+i+"Clamp"]=t,t?e.substr(6,e.length-7):e},Hn=function(e,i){return i&&(!Ue(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ui=function s(){return xr&&requestAnimationFrame(s)},Gn=function(){return an=1},Wn=function(){return an=0},pt=function(e){return e},br=function(e){return Math.round(e*1e5)/1e5||0},bi=function(){return typeof window<"u"},vi=function(){return h||bi()&&(h=window.gsap)&&h.registerPlugin&&h},Vt=function(e){return!!~Pn.indexOf(e)},yi=function(e){return(e==="Height"?Dn:E["inner"+e])||Ve["client"+e]||B["client"+e]},wi=function(e){return At(e,"getBoundingClientRect")||(Vt(e)?function(){return tn.width=E.innerWidth,tn.height=Dn,tn}:function(){return _t(e)})},Vi=function(e,i,r){var t=r.d,o=r.d2,l=r.a;return(l=At(e,"getBoundingClientRect"))?function(){return l()[t]}:function(){return(i?yi(o):e["client"+o])||0}},Ki=function(e,i){return!i||~gt.indexOf(e)?wi(e):function(){return tn}},ft=function(e,i){var r=i.s,t=i.d2,o=i.d,l=i.a;return Math.max(0,(r="scroll"+t)&&(l=At(e,r))?l()-wi(e)()[o]:Vt(e)?(Ve[r]||B[r])-yi(t):e[r]-e["offset"+t])},Yr=function(e,i){for(var r=0;r<ir.length;r+=3)(!i||~i.indexOf(ir[r+1]))&&e(ir[r],ir[r+1],ir[r+2])},Ue=function(e){return typeof e=="string"},Ne=function(e){return typeof e=="function"},vr=function(e){return typeof e=="number"},Ht=function(e){return typeof e=="object"},hr=function(e,i,r){return e&&e.progress(i?0:1)&&r&&e.pause()},fn=function(e,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return i(e)}):i(e);r&&r.totalTime&&(e.callbackAnimation=r)}},tr=Math.abs,_i="left",ji="top",zn="right",An="bottom",Wt="width",$t="height",Sr="Right",Nr="Left",Rr="Top",Mr="Bottom",se="padding",et="margin",cr="Width",In="Height",de="px",tt=function(e){return E.getComputedStyle(e)},Zi=function(e){var i=tt(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},$n=function(e,i){for(var r in i)r in e||(e[r]=i[r]);return e},_t=function(e,i){var r=i&&tt(e)[_n]!=="matrix(1, 0, 0, 1, 0, 0)"&&h.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),t=e.getBoundingClientRect();return r&&r.progress(0).kill(),t},sn=function(e,i){var r=i.d2;return e["offset"+r]||e["client"+r]||0},ki=function(e){var i=[],r=e.labels,t=e.duration(),o;for(o in r)i.push(r[o]/t);return i},Qi=function(e){return function(i){return h.utils.snap(ki(e),i)}},On=function(e){var i=h.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(t,o){return t-o});return r?function(t,o,l){l===void 0&&(l=.001);var a;if(!o)return i(t);if(o>0){for(t-=l,a=0;a<r.length;a++)if(r[a]>=t)return r[a];return r[a-1]}else for(a=r.length,t+=l;a--;)if(r[a]<=t)return r[a];return r[0]}:function(t,o,l){l===void 0&&(l=.001);var a=i(t);return!o||Math.abs(a-t)<l||a-t<0==o<0?a:i(o<0?t-e:t+e)}},Ji=function(e){return function(i,r){return On(ki(e))(i,r.direction)}},qr=function(e,i,r,t){return r.split(",").forEach(function(o){return e(i,o,t)})},me=function(e,i,r,t,o){return e.addEventListener(i,r,{passive:!t,capture:!!o})},he=function(e,i,r,t){return e.removeEventListener(i,r,!!t)},Xr=function(e,i,r){r=r&&r.wheelHandler,r&&(e(i,"wheel",r),e(i,"touchmove",r))},Un={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Hr={toggleActions:"play",anticipatePin:0},on={top:0,left:0,center:.5,bottom:1,right:1},Zr=function(e,i){if(Ue(e)){var r=e.indexOf("="),t=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(t*=i/100),e=e.substr(0,r-1)),e=t+(e in on?on[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},Gr=function(e,i,r,t,o,l,a,p){var m=o.startColor,z=o.endColor,b=o.fontSize,g=o.indent,u=o.fontWeight,x=X.createElement("div"),H=Vt(r)||At(r,"pinType")==="fixed",q=e.indexOf("scroller")!==-1,oe=H?B:r,$=e.indexOf("start")!==-1,xe=$?m:z,M="border-color:"+xe+";font-size:"+b+";color:"+xe+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((q||p)&&H?"fixed;":"absolute;"),(q||p||!H)&&(M+=(t===ue?zn:An)+":"+(l+parseFloat(g))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),x._isStart=$,x.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),x.style.cssText=M,x.innerText=i||i===0?e+"-"+i:e,oe.children[0]?oe.insertBefore(x,oe.children[0]):oe.appendChild(x),x._offset=x["offset"+t.op.d2],Qr(x,0,t,$),x},Qr=function(e,i,r,t){var o={display:"block"},l=r[t?"os2":"p2"],a=r[t?"p2":"os2"];e._isFlipped=t,o[r.a+"Percent"]=t?-100:0,o[r.a]=t?"1px":0,o["border"+l+cr]=1,o["border"+a+cr]=0,o[r.p]=i+"px",h.set(e,o)},P=[],Tn={},Dr,Vn=function(){return Se()-rt>34&&(Dr||(Dr=requestAnimationFrame(kt)))},rr=function(){(!Oe||!Oe.isPressed||Oe.startX>B.clientWidth)&&(D.cache++,Oe?Dr||(Dr=requestAnimationFrame(kt)):kt(),rt||Zt("scrollStart"),rt=Se())},gn=function(){xi=E.innerWidth,mi=E.innerHeight},yr=function(e){D.cache++,(e===!0||!Te&&!hi&&!X.fullscreenElement&&!X.webkitFullscreenElement&&(!jn||xi!==E.innerWidth||Math.abs(E.innerHeight-mi)>E.innerHeight*.25))&&nn.restart(!0)},Kt={},es=[],Ci=function s(){return he(j,"scrollEnd",s)||Gt(!0)},Zt=function(e){return Kt[e]&&Kt[e].map(function(i){return i()})||es},$e=[],Ti=function(e){for(var i=0;i<$e.length;i+=5)(!e||$e[i+4]&&$e[i+4].query===e)&&($e[i].style.cssText=$e[i+1],$e[i].getBBox&&$e[i].setAttribute("transform",$e[i+2]||""),$e[i+3].uncache=1)},Si=function(){return D.forEach(function(e){return Ne(e)&&++e.cacheID&&(e.rec=e())})},Ln=function(e,i){var r;for(Le=0;Le<P.length;Le++)r=P[Le],r&&(!i||r._ctx===i)&&(e?r.kill(1):r.revert(!0,!0));Tr=!0,i&&Ti(i),i||Zt("revert")},Ni=function(e,i){D.cache++,(i||!Be)&&D.forEach(function(r){return Ne(r)&&r.cacheID++&&(r.rec=0)}),Ue(e)&&(E.history.scrollRestoration=En=e)},Be,Ut=0,Kn,ts=function(){if(Kn!==Ut){var e=Kn=Ut;requestAnimationFrame(function(){return e===Ut&&Gt(!0)})}},Ri=function(){B.appendChild(ar),Dn=!Oe&&ar.offsetHeight||E.innerHeight,B.removeChild(ar)},Zn=function(e){return Er(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},Gt=function(e,i){if(Ve=X.documentElement,B=X.body,Pn=[E,X,Ve,B],rt&&!e&&!Tr){me(j,"scrollEnd",Ci);return}Ri(),Be=j.isRefreshing=!0,Tr||Si();var r=Zt("refreshInit");gi&&j.sort(),i||Ln(),D.forEach(function(t){Ne(t)&&(t.smooth&&(t.target.style.scrollBehavior="auto"),t(0))}),P.slice(0).forEach(function(t){return t.refresh()}),Tr=!1,P.forEach(function(t){if(t._subPinOffset&&t.pin){var o=t.vars.horizontal?"offsetWidth":"offsetHeight",l=t.pin[o];t.revert(!0,1),t.adjustPinSpacing(t.pin[o]-l),t.refresh()}}),Cn=1,Zn(!0),P.forEach(function(t){var o=ft(t.scroller,t._dir),l=t.vars.end==="max"||t._endClamp&&t.end>o,a=t._startClamp&&t.start>=o;(l||a)&&t.setPositions(a?o-1:t.start,l?Math.max(a?o:t.start+1,o):t.end,!0)}),Zn(!1),Cn=0,r.forEach(function(t){return t&&t.render&&t.render(-1)}),D.forEach(function(t){Ne(t)&&(t.smooth&&requestAnimationFrame(function(){return t.target.style.scrollBehavior="smooth"}),t.rec&&t(t.rec))}),Ni(En,1),nn.pause(),Ut++,Be=2,kt(2),P.forEach(function(t){return Ne(t.vars.onRefresh)&&t.vars.onRefresh(t)}),Be=j.isRefreshing=!1,Zt("refresh")},Sn=0,Jr=1,Pr,kt=function(e){if(e===2||!Be&&!Tr){j.isUpdating=!0,Pr&&Pr.update(0);var i=P.length,r=Se(),t=r-pn>=50,o=i&&P[0].scroll();if(Jr=Sn>o?-1:1,Be||(Sn=o),t&&(rt&&!an&&r-rt>200&&(rt=0,Zt("scrollEnd")),mr=pn,pn=r),Jr<0){for(Le=i;Le-- >0;)P[Le]&&P[Le].update(0,t);Jr=1}else for(Le=0;Le<i;Le++)P[Le]&&P[Le].update(0,t);j.isUpdating=!1}Dr=0},Nn=[_i,ji,An,zn,et+Mr,et+Sr,et+Rr,et+Nr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],en=Nn.concat([Wt,$t,"boxSizing","max"+cr,"max"+In,"position",et,se,se+Rr,se+Sr,se+Mr,se+Nr]),rs=function(e,i,r){lr(r);var t=e._gsap;if(t.spacerIsNative)lr(t.spacerState);else if(e._gsap.swappedIn){var o=i.parentNode;o&&(o.insertBefore(e,i),o.removeChild(i))}e._gsap.swappedIn=!1},hn=function(e,i,r,t){if(!e._gsap.swappedIn){for(var o=Nn.length,l=i.style,a=e.style,p;o--;)p=Nn[o],l[p]=r[p];l.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(l.display="inline-block"),a[An]=a[zn]="auto",l.flexBasis=r.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[Wt]=sn(e,Fe)+de,l[$t]=sn(e,ue)+de,l[se]=a[et]=a[ji]=a[_i]="0",lr(t),a[Wt]=a["max"+cr]=r[Wt],a[$t]=a["max"+In]=r[$t],a[se]=r[se],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},ns=/([A-Z])/g,lr=function(e){if(e){var i=e.t.style,r=e.length,t=0,o,l;for((e.t._gsap||h.core.getCache(e.t)).uncache=1;t<r;t+=2)l=e[t+1],o=e[t],l?i[o]=l:i[o]&&i.removeProperty(o.replace(ns,"-$1").toLowerCase())}},Wr=function(e){for(var i=en.length,r=e.style,t=[],o=0;o<i;o++)t.push(en[o],r[en[o]]);return t.t=e,t},is=function(e,i,r){for(var t=[],o=e.length,l=r?8:0,a;l<o;l+=2)a=e[l],t.push(a,a in i?i[a]:e[l+1]);return t.t=e.t,t},tn={left:0,top:0},Qn=function(e,i,r,t,o,l,a,p,m,z,b,g,u,x){Ne(e)&&(e=e(p)),Ue(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?Zr("0"+e.substr(3),r):0));var H=u?u.time():0,q,oe,$;if(u&&u.seek(0),isNaN(e)||(e=+e),vr(e))u&&(e=h.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,g,e)),a&&Qr(a,r,t,!0);else{Ne(i)&&(i=i(p));var xe=(e||"0").split(" "),M,Ze,G,C;$=Xe(i,p)||B,M=_t($)||{},(!M||!M.left&&!M.top)&&tt($).display==="none"&&(C=$.style.display,$.style.display="block",M=_t($),C?$.style.display=C:$.style.removeProperty("display")),Ze=Zr(xe[0],M[t.d]),G=Zr(xe[1]||"0",r),e=M[t.p]-m[t.p]-z+Ze+o-G,a&&Qr(a,G,t,r-G<20||a._isStart&&G>20),r-=r-G}if(x&&(p[x]=e||-.001,e<0&&(e=0)),l){var Re=e+r,Ye=l._isStart;q="scroll"+t.d2,Qr(l,Re,t,Ye&&Re>20||!Ye&&(b?Math.max(B[q],Ve[q]):l.parentNode[q])<=Re+1),b&&(m=_t(a),b&&(l.style[t.op.p]=m[t.op.p]-t.op.m-l._offset+de))}return u&&$&&(q=_t($),u.seek(g),oe=_t($),u._caScrollDist=q[t.p]-oe[t.p],e=e/u._caScrollDist*g),u&&u.seek(H),u?e:Math.round(e)},ss=/(webkit|moz|length|cssText|inset)/i,Jn=function(e,i,r,t){if(e.parentNode!==i){var o=e.style,l,a;if(i===B){e._stOrig=o.cssText,a=tt(e);for(l in a)!+l&&!ss.test(l)&&a[l]&&typeof o[l]=="string"&&l!=="0"&&(o[l]=a[l]);o.top=r,o.left=t}else o.cssText=e._stOrig;h.core.getCache(e).uncache=1,i.appendChild(e)}},Mi=function(e,i,r){var t=i,o=t;return function(l){var a=Math.round(e());return a!==t&&a!==o&&Math.abs(a-t)>3&&Math.abs(a-o)>3&&(l=a,r&&r()),o=t,t=Math.round(l),t}},$r=function(e,i,r){var t={};t[i.p]="+="+r,h.set(e,t)},ei=function(e,i){var r=It(e,i),t="_scroll"+i.p2,o=function l(a,p,m,z,b){var g=l.tween,u=p.onComplete,x={};m=m||r();var H=Mi(r,m,function(){g.kill(),l.tween=0});return b=z&&b||0,z=z||a-m,g&&g.kill(),p[t]=a,p.inherit=!1,p.modifiers=x,x[t]=function(){return H(m+z*g.ratio+b*g.ratio*g.ratio)},p.onUpdate=function(){D.cache++,l.tween&&kt()},p.onComplete=function(){l.tween=0,u&&u.call(g)},g=l.tween=h.to(e,p),g};return e[t]=r,r.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},me(e,"wheel",r.wheelHandler),j.isTouch&&me(e,"touchmove",r.wheelHandler),o},j=function(){function s(i,r){nr||s.register(h)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),kn(this),this.init(i,r)}var e=s.prototype;return e.init=function(r,t){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xr){this.update=this.refresh=this.kill=pt;return}r=$n(Ue(r)||vr(r)||r.nodeType?{trigger:r}:r,Hr);var o=r,l=o.onUpdate,a=o.toggleClass,p=o.id,m=o.onToggle,z=o.onRefresh,b=o.scrub,g=o.trigger,u=o.pin,x=o.pinSpacing,H=o.invalidateOnRefresh,q=o.anticipatePin,oe=o.onScrubComplete,$=o.onSnapComplete,xe=o.once,M=o.snap,Ze=o.pinReparent,G=o.pinSpacer,C=o.containerAnimation,Re=o.fastScrollEnd,Ye=o.preventOverlaps,v=r.horizontal||r.containerAnimation&&r.horizontal!==!1?Fe:ue,pe=!b&&b!==0,k=Xe(r.scroller||E),ht=h.core.getCache(k),ae=Vt(k),Me=("pinType"in r?r.pinType:At(k,"pinType")||ae&&"fixed")==="fixed",Pe=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],F=pe&&r.toggleActions.split(" "),te="markers"in r?r.markers:Hr.markers,re=ae?0:parseFloat(tt(k)["border"+v.p2+cr])||0,c=this,le=r.onRefreshInit&&function(){return r.onRefreshInit(c)},Ot=Vi(k,ae,v),Ct=Ki(k,ae),Qe=0,mt=0,we=0,ne=It(k,v),Ee,_e,Tt,De,ze,O,Z,qe,He,d,Ge,xt,St,V,bt,Nt,Lt,fe,Rt,Q,nt,Je,vt,dr,ie,zr,yt,Qt,Jt,Mt,Bt,A,Ft,it,st,ot,Yt,er,wt;if(c._startClamp=c._endClamp=!1,c._dir=v,q*=45,c.scroller=k,c.scroll=C?C.time.bind(C):ne,De=ne(),c.vars=r,t=t||r.animation,"refreshPriority"in r&&(gi=1,r.refreshPriority===-9999&&(Pr=c)),ht.tweenScroll=ht.tweenScroll||{top:ei(k,ue),left:ei(k,Fe)},c.tweenTo=Ee=ht.tweenScroll[v.p],c.scrubDuration=function(f){Ft=vr(f)&&f,Ft?A?A.duration(f):A=h.to(t,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ft,paused:!0,onComplete:function(){return oe&&oe(c)}}):(A&&A.progress(1).kill(),A=0)},t&&(t.vars.lazy=!1,t._initted&&!c.isReverted||t.vars.immediateRender!==!1&&r.immediateRender!==!1&&t.duration()&&t.render(0,!0,!0),c.animation=t.pause(),t.scrollTrigger=c,c.scrubDuration(b),Mt=0,p||(p=t.vars.id)),M&&((!Ht(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in B.style&&h.set(ae?[B,Ve]:k,{scrollBehavior:"auto"}),D.forEach(function(f){return Ne(f)&&f.target===(ae?X.scrollingElement||Ve:k)&&(f.smooth=!1)}),Tt=Ne(M.snapTo)?M.snapTo:M.snapTo==="labels"?Qi(t):M.snapTo==="labelsDirectional"?Ji(t):M.directional!==!1?function(f,S){return On(M.snapTo)(f,Se()-mt<500?0:S.direction)}:h.utils.snap(M.snapTo),it=M.duration||{min:.1,max:2},it=Ht(it)?Cr(it.min,it.max):Cr(it,it),st=h.delayedCall(M.delay||Ft/2||.1,function(){var f=ne(),S=Se()-mt<500,y=Ee.tween;if((S||Math.abs(c.getVelocity())<10)&&!y&&!an&&Qe!==f){var N=(f-O)/V,ge=t&&!pe?t.totalProgress():N,I=S?0:(ge-Bt)/(Se()-mr)*1e3||0,J=h.utils.clamp(-N,1-N,tr(I/2)*I/.185),je=N+(M.inertia===!1?0:J),K,W,Y=M,at=Y.onStart,U=Y.onInterrupt,We=Y.onComplete;if(K=Tt(je,c),vr(K)||(K=je),W=Math.max(0,Math.round(O+K*V)),f<=Z&&f>=O&&W!==f){if(y&&!y._initted&&y.data<=tr(W-f))return;M.inertia===!1&&(J=K-N),Ee(W,{duration:it(tr(Math.max(tr(je-ge),tr(K-ge))*.185/I/.05||0)),ease:M.ease||"power3",data:tr(W-f),onInterrupt:function(){return st.restart(!0)&&U&&U(c)},onComplete:function(){c.update(),Qe=ne(),t&&!pe&&(A?A.resetTo("totalProgress",K,t._tTime/t._tDur):t.progress(K)),Mt=Bt=t&&!pe?t.totalProgress():c.progress,$&&$(c),We&&We(c)}},f,J*V,W-f-J*V),at&&at(c,Ee.tween)}}else c.isActive&&Qe!==f&&st.restart(!0)}).pause()),p&&(Tn[p]=c),g=c.trigger=Xe(g||u!==!0&&u),wt=g&&g._gsap&&g._gsap.stRevert,wt&&(wt=wt(c)),u=u===!0?g:Xe(u),Ue(a)&&(a={targets:g,className:a}),u&&(x===!1||x===et||(x=!x&&u.parentNode&&u.parentNode.style&&tt(u.parentNode).display==="flex"?!1:se),c.pin=u,_e=h.core.getCache(u),_e.spacer?bt=_e.pinState:(G&&(G=Xe(G),G&&!G.nodeType&&(G=G.current||G.nativeElement),_e.spacerIsNative=!!G,G&&(_e.spacerState=Wr(G))),_e.spacer=fe=G||X.createElement("div"),fe.classList.add("pin-spacer"),p&&fe.classList.add("pin-spacer-"+p),_e.pinState=bt=Wr(u)),r.force3D!==!1&&h.set(u,{force3D:!0}),c.spacer=fe=_e.spacer,Jt=tt(u),dr=Jt[x+v.os2],Q=h.getProperty(u),nt=h.quickSetter(u,v.a,de),hn(u,fe,Jt),Lt=Wr(u)),te){xt=Ht(te)?$n(te,Un):Un,d=Gr("scroller-start",p,k,v,xt,0),Ge=Gr("scroller-end",p,k,v,xt,0,d),Rt=d["offset"+v.op.d2];var ur=Xe(At(k,"content")||k);qe=this.markerStart=Gr("start",p,ur,v,xt,Rt,0,C),He=this.markerEnd=Gr("end",p,ur,v,xt,Rt,0,C),C&&(er=h.quickSetter([qe,He],v.a,de)),!Me&&!(gt.length&&At(k,"fixedMarkers")===!0)&&(Zi(ae?B:k),h.set([d,Ge],{force3D:!0}),zr=h.quickSetter(d,v.a,de),Qt=h.quickSetter(Ge,v.a,de))}if(C){var R=C.vars.onUpdate,_=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){c.update(0,0,1),R&&R.apply(C,_||[])})}if(c.previous=function(){return P[P.indexOf(c)-1]},c.next=function(){return P[P.indexOf(c)+1]},c.revert=function(f,S){if(!S)return c.kill(!0);var y=f!==!1||!c.enabled,N=Te;y!==c.isReverted&&(y&&(ot=Math.max(ne(),c.scroll.rec||0),we=c.progress,Yt=t&&t.progress()),qe&&[qe,He,d,Ge].forEach(function(ge){return ge.style.display=y?"none":"block"}),y&&(Te=c,c.update(y)),u&&(!Ze||!c.isActive)&&(y?rs(u,fe,bt):hn(u,fe,tt(u),ie)),y||c.update(y),Te=N,c.isReverted=y)},c.refresh=function(f,S,y,N){if(!((Te||!c.enabled)&&!S)){if(u&&f&&rt){me(s,"scrollEnd",Ci);return}!Be&&le&&le(c),Te=c,Ee.tween&&!y&&(Ee.tween.kill(),Ee.tween=0),A&&A.pause(),H&&t&&(t.revert({kill:!1}).invalidate(),t.getChildren?t.getChildren(!0,!0,!1).forEach(function(Pt){return Pt.vars.immediateRender&&Pt.render(0,!0,!0)}):t.vars.immediateRender&&t.render(0,!0,!0)),c.isReverted||c.revert(!0,!0),c._subPinOffset=!1;var ge=Ot(),I=Ct(),J=C?C.duration():ft(k,v),je=V<=.01||!V,K=0,W=N||0,Y=Ht(y)?y.end:r.end,at=r.endTrigger||g,U=Ht(y)?y.start:r.start||(r.start===0||!g?0:u?"0 0":"0 100%"),We=c.pinnedContainer=r.pinnedContainer&&Xe(r.pinnedContainer,c),ct=g&&Math.max(0,P.indexOf(c))||0,be=ct,ve,ke,qt,Ar,Ce,ce,dt,ln,Bn,pr,ut,fr,Ir;for(te&&Ht(y)&&(fr=h.getProperty(d,v.p),Ir=h.getProperty(Ge,v.p));be-- >0;)ce=P[be],ce.end||ce.refresh(0,1)||(Te=c),dt=ce.pin,dt&&(dt===g||dt===u||dt===We)&&!ce.isReverted&&(pr||(pr=[]),pr.unshift(ce),ce.revert(!0,!0)),ce!==P[be]&&(ct--,be--);for(Ne(U)&&(U=U(c)),U=Xn(U,"start",c),O=Qn(U,g,ge,v,ne(),qe,d,c,I,re,Me,J,C,c._startClamp&&"_startClamp")||(u?-.001:0),Ne(Y)&&(Y=Y(c)),Ue(Y)&&!Y.indexOf("+=")&&(~Y.indexOf(" ")?Y=(Ue(U)?U.split(" ")[0]:"")+Y:(K=Zr(Y.substr(2),ge),Y=Ue(U)?U:(C?h.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,O):O)+K,at=g)),Y=Xn(Y,"end",c),Z=Math.max(O,Qn(Y||(at?"100% 0":J),at,ge,v,ne()+K,He,Ge,c,I,re,Me,J,C,c._endClamp&&"_endClamp"))||-.001,K=0,be=ct;be--;)ce=P[be]||{},dt=ce.pin,dt&&ce.start-ce._pinPush<=O&&!C&&ce.end>0&&(ve=ce.end-(c._startClamp?Math.max(0,ce.start):ce.start),(dt===g&&ce.start-ce._pinPush<O||dt===We)&&isNaN(U)&&(K+=ve*(1-ce.progress)),dt===u&&(W+=ve));if(O+=K,Z+=K,c._startClamp&&(c._startClamp+=K),c._endClamp&&!Be&&(c._endClamp=Z||-.001,Z=Math.min(Z,ft(k,v))),V=Z-O||(O-=.01)&&.001,je&&(we=h.utils.clamp(0,1,h.utils.normalize(O,Z,ot))),c._pinPush=W,qe&&K&&(ve={},ve[v.a]="+="+K,We&&(ve[v.p]="-="+ne()),h.set([qe,He],ve)),u&&!(Cn&&c.end>=ft(k,v)))ve=tt(u),Ar=v===ue,qt=ne(),Je=parseFloat(Q(v.a))+W,!J&&Z>1&&(ut=(ae?X.scrollingElement||Ve:k).style,ut={style:ut,value:ut["overflow"+v.a.toUpperCase()]},ae&&tt(B)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ut.style["overflow"+v.a.toUpperCase()]="scroll")),hn(u,fe,ve),Lt=Wr(u),ke=_t(u,!0),ln=Me&&It(k,Ar?Fe:ue)(),x?(ie=[x+v.os2,V+W+de],ie.t=fe,be=x===se?sn(u,v)+V+W:0,be&&(ie.push(v.d,be+de),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=be+de)),lr(ie),We&&P.forEach(function(Pt){Pt.pin===We&&Pt.vars.pinSpacing!==!1&&(Pt._subPinOffset=!0)}),Me&&ne(ot)):(be=sn(u,v),be&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=be+de)),Me&&(Ce={top:ke.top+(Ar?qt-O:ln)+de,left:ke.left+(Ar?ln:qt-O)+de,boxSizing:"border-box",position:"fixed"},Ce[Wt]=Ce["max"+cr]=Math.ceil(ke.width)+de,Ce[$t]=Ce["max"+In]=Math.ceil(ke.height)+de,Ce[et]=Ce[et+Rr]=Ce[et+Sr]=Ce[et+Mr]=Ce[et+Nr]="0",Ce[se]=ve[se],Ce[se+Rr]=ve[se+Rr],Ce[se+Sr]=ve[se+Sr],Ce[se+Mr]=ve[se+Mr],Ce[se+Nr]=ve[se+Nr],Nt=is(bt,Ce,Ze),Be&&ne(0)),t?(Bn=t._initted,dn(1),t.render(t.duration(),!0,!0),vt=Q(v.a)-Je+V+W,yt=Math.abs(V-vt)>1,Me&&yt&&Nt.splice(Nt.length-2,2),t.render(0,!0,!0),Bn||t.invalidate(!0),t.parent||t.totalTime(t.totalTime()),dn(0)):vt=V,ut&&(ut.value?ut.style["overflow"+v.a.toUpperCase()]=ut.value:ut.style.removeProperty("overflow-"+v.a));else if(g&&ne()&&!C)for(ke=g.parentNode;ke&&ke!==B;)ke._pinOffset&&(O-=ke._pinOffset,Z-=ke._pinOffset),ke=ke.parentNode;pr&&pr.forEach(function(Pt){return Pt.revert(!1,!0)}),c.start=O,c.end=Z,De=ze=Be?ot:ne(),!C&&!Be&&(De<ot&&ne(ot),c.scroll.rec=0),c.revert(!1,!0),mt=Se(),st&&(Qe=-1,st.restart(!0)),Te=0,t&&pe&&(t._initted||Yt)&&t.progress()!==Yt&&t.progress(Yt||0,!0).render(t.time(),!0,!0),(je||we!==c.progress||C||H||t&&!t._initted)&&(t&&!pe&&(t._initted||we||t.vars.immediateRender!==!1)&&t.totalProgress(C&&O<-.001&&!we?h.utils.normalize(O,Z,0):we,!0),c.progress=je||(De-O)/V===we?0:we),u&&x&&(fe._pinOffset=Math.round(c.progress*vt)),A&&A.invalidate(),isNaN(fr)||(fr-=h.getProperty(d,v.p),Ir-=h.getProperty(Ge,v.p),$r(d,v,fr),$r(qe,v,fr-(N||0)),$r(Ge,v,Ir),$r(He,v,Ir-(N||0))),je&&!Be&&c.update(),z&&!Be&&!St&&(St=!0,z(c),St=!1)}},c.getVelocity=function(){return(ne()-ze)/(Se()-mr)*1e3||0},c.endAnimation=function(){hr(c.callbackAnimation),t&&(A?A.progress(1):t.paused()?pe||hr(t,c.direction<0,1):hr(t,t.reversed()))},c.labelToScroll=function(f){return t&&t.labels&&(O||c.refresh()||O)+t.labels[f]/t.duration()*V||0},c.getTrailing=function(f){var S=P.indexOf(c),y=c.direction>0?P.slice(0,S).reverse():P.slice(S+1);return(Ue(f)?y.filter(function(N){return N.vars.preventOverlaps===f}):y).filter(function(N){return c.direction>0?N.end<=O:N.start>=Z})},c.update=function(f,S,y){if(!(C&&!y&&!f)){var N=Be===!0?ot:c.scroll(),ge=f?0:(N-O)/V,I=ge<0?0:ge>1?1:ge||0,J=c.progress,je,K,W,Y,at,U,We,ct;if(S&&(ze=De,De=C?ne():N,M&&(Bt=Mt,Mt=t&&!pe?t.totalProgress():I)),q&&u&&!Te&&!Fr&&rt&&(!I&&O<N+(N-ze)/(Se()-mr)*q?I=1e-4:I===1&&Z>N+(N-ze)/(Se()-mr)*q&&(I=.9999)),I!==J&&c.enabled){if(je=c.isActive=!!I&&I<1,K=!!J&&J<1,U=je!==K,at=U||!!I!=!!J,c.direction=I>J?1:-1,c.progress=I,at&&!Te&&(W=I&&!J?0:I===1?1:J===1?2:3,pe&&(Y=!U&&F[W+1]!=="none"&&F[W+1]||F[W],ct=t&&(Y==="complete"||Y==="reset"||Y in t))),Ye&&(U||ct)&&(ct||b||!t)&&(Ne(Ye)?Ye(c):c.getTrailing(Ye).forEach(function(qt){return qt.endAnimation()})),pe||(A&&!Te&&!Fr?(A._dp._time-A._start!==A._time&&A.render(A._dp._time-A._start),A.resetTo?A.resetTo("totalProgress",I,t._tTime/t._tDur):(A.vars.totalProgress=I,A.invalidate().restart())):t&&t.totalProgress(I,!!(Te&&(mt||f)))),u){if(f&&x&&(fe.style[x+v.os2]=dr),!Me)nt(br(Je+vt*I));else if(at){if(We=!f&&I>J&&Z+1>N&&N+1>=ft(k,v),Ze)if(!f&&(je||We)){var be=_t(u,!0),ve=N-O;Jn(u,B,be.top+(v===ue?ve:0)+de,be.left+(v===ue?0:ve)+de)}else Jn(u,fe);lr(je||We?Nt:Lt),yt&&I<1&&je||nt(Je+(I===1&&!We?vt:0))}}M&&!Ee.tween&&!Te&&!Fr&&st.restart(!0),a&&(U||xe&&I&&(I<1||!un))&&Er(a.targets).forEach(function(qt){return qt.classList[je||xe?"add":"remove"](a.className)}),l&&!pe&&!f&&l(c),at&&!Te?(pe&&(ct&&(Y==="complete"?t.pause().totalProgress(1):Y==="reset"?t.restart(!0).pause():Y==="restart"?t.restart(!0):t[Y]()),l&&l(c)),(U||!un)&&(m&&U&&fn(c,m),Pe[W]&&fn(c,Pe[W]),xe&&(I===1?c.kill(!1,1):Pe[W]=0),U||(W=I===1?1:3,Pe[W]&&fn(c,Pe[W]))),Re&&!je&&Math.abs(c.getVelocity())>(vr(Re)?Re:2500)&&(hr(c.callbackAnimation),A?A.progress(1):hr(t,Y==="reverse"?1:!I,1))):pe&&l&&!Te&&l(c)}if(Qt){var ke=C?N/C.duration()*(C._caScrollDist||0):N;zr(ke+(d._isFlipped?1:0)),Qt(ke)}er&&er(-N/C.duration()*(C._caScrollDist||0))}},c.enable=function(f,S){c.enabled||(c.enabled=!0,me(k,"resize",yr),ae||me(k,"scroll",rr),le&&me(s,"refreshInit",le),f!==!1&&(c.progress=we=0,De=ze=Qe=ne()),S!==!1&&c.refresh())},c.getTween=function(f){return f&&Ee?Ee.tween:A},c.setPositions=function(f,S,y,N){if(C){var ge=C.scrollTrigger,I=C.duration(),J=ge.end-ge.start;f=ge.start+J*f/I,S=ge.start+J*S/I}c.refresh(!1,!1,{start:Hn(f,y&&!!c._startClamp),end:Hn(S,y&&!!c._endClamp)},N),c.update()},c.adjustPinSpacing=function(f){if(ie&&f){var S=ie.indexOf(v.d)+1;ie[S]=parseFloat(ie[S])+f+de,ie[1]=parseFloat(ie[1])+f+de,lr(ie)}},c.disable=function(f,S){if(f!==!1&&c.revert(!0,!0),c.enabled&&(c.enabled=c.isActive=!1,S||A&&A.pause(),ot=0,_e&&(_e.uncache=1),le&&he(s,"refreshInit",le),st&&(st.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!ae)){for(var y=P.length;y--;)if(P[y].scroller===k&&P[y]!==c)return;he(k,"resize",yr),ae||he(k,"scroll",rr)}},c.kill=function(f,S){c.disable(f,S),A&&!S&&A.kill(),p&&delete Tn[p];var y=P.indexOf(c);y>=0&&P.splice(y,1),y===Le&&Jr>0&&Le--,y=0,P.forEach(function(N){return N.scroller===c.scroller&&(y=1)}),y||Be||(c.scroll.rec=0),t&&(t.scrollTrigger=null,f&&t.revert({kill:!1}),S||t.kill()),qe&&[qe,He,d,Ge].forEach(function(N){return N.parentNode&&N.parentNode.removeChild(N)}),Pr===c&&(Pr=0),u&&(_e&&(_e.uncache=1),y=0,P.forEach(function(N){return N.pin===u&&y++}),y||(_e.spacer=0)),r.onKill&&r.onKill(c)},P.push(c),c.enable(!1,!1),wt&&wt(c),t&&t.add&&!V){var L=c.update;c.update=function(){c.update=L,D.cache++,O||Z||c.refresh()},h.delayedCall(.01,c.update),V=.01,O=Z=0}else c.refresh();u&&ts()},s.register=function(r){return nr||(h=r||vi(),bi()&&window.document&&s.enable(),nr=xr),nr},s.defaults=function(r){if(r)for(var t in r)Hr[t]=r[t];return Hr},s.disable=function(r,t){xr=0,P.forEach(function(l){return l[t?"kill":"disable"](r)}),he(E,"wheel",rr),he(X,"scroll",rr),clearInterval(Br),he(X,"touchcancel",pt),he(B,"touchstart",pt),qr(he,X,"pointerdown,touchstart,mousedown",Gn),qr(he,X,"pointerup,touchend,mouseup",Wn),nn.kill(),Yr(he);for(var o=0;o<D.length;o+=3)Xr(he,D[o],D[o+1]),Xr(he,D[o],D[o+2])},s.enable=function(){if(E=window,X=document,Ve=X.documentElement,B=X.body,h&&(Er=h.utils.toArray,Cr=h.utils.clamp,kn=h.core.context||pt,dn=h.core.suppressOverwrites||pt,En=E.history.scrollRestoration||"auto",Sn=E.pageYOffset||0,h.core.globals("ScrollTrigger",s),B)){xr=1,ar=document.createElement("div"),ar.style.height="100vh",ar.style.position="absolute",Ri(),Ui(),ee.register(h),s.isTouch=ee.isTouch,Et=ee.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),jn=ee.isTouch===1,me(E,"wheel",rr),Pn=[E,X,Ve,B],h.matchMedia?(s.matchMedia=function(m){var z=h.matchMedia(),b;for(b in m)z.add(b,m[b]);return z},h.addEventListener("matchMediaInit",function(){Si(),Ln()}),h.addEventListener("matchMediaRevert",function(){return Ti()}),h.addEventListener("matchMedia",function(){Gt(0,1),Zt("matchMedia")}),h.matchMedia().add("(orientation: portrait)",function(){return gn(),gn})):console.warn("Requires GSAP 3.11.0 or later"),gn(),me(X,"scroll",rr);var r=B.hasAttribute("style"),t=B.style,o=t.borderTopStyle,l=h.core.Animation.prototype,a,p;for(l.revert||Object.defineProperty(l,"revert",{value:function(){return this.time(-.01,!0)}}),t.borderTopStyle="solid",a=_t(B),ue.m=Math.round(a.top+ue.sc())||0,Fe.m=Math.round(a.left+Fe.sc())||0,o?t.borderTopStyle=o:t.removeProperty("border-top-style"),r||(B.setAttribute("style",""),B.removeAttribute("style")),Br=setInterval(Vn,250),h.delayedCall(.5,function(){return Fr=0}),me(X,"touchcancel",pt),me(B,"touchstart",pt),qr(me,X,"pointerdown,touchstart,mousedown",Gn),qr(me,X,"pointerup,touchend,mouseup",Wn),_n=h.utils.checkPrefix("transform"),en.push(_n),nr=Se(),nn=h.delayedCall(.2,Gt).pause(),ir=[X,"visibilitychange",function(){var m=E.innerWidth,z=E.innerHeight;X.hidden?(Yn=m,qn=z):(Yn!==m||qn!==z)&&yr()},X,"DOMContentLoaded",Gt,E,"load",Gt,E,"resize",yr],Yr(me),P.forEach(function(m){return m.enable(0,1)}),p=0;p<D.length;p+=3)Xr(he,D[p],D[p+1]),Xr(he,D[p],D[p+2])}},s.config=function(r){"limitCallbacks"in r&&(un=!!r.limitCallbacks);var t=r.syncInterval;t&&clearInterval(Br)||(Br=t)&&setInterval(Vn,t),"ignoreMobileResize"in r&&(jn=s.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(Yr(he)||Yr(me,r.autoRefreshEvents||"none"),hi=(r.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(r,t){var o=Xe(r),l=D.indexOf(o),a=Vt(o);~l&&D.splice(l,a?6:2),t&&(a?gt.unshift(E,t,B,t,Ve,t):gt.unshift(o,t))},s.clearMatchMedia=function(r){P.forEach(function(t){return t._ctx&&t._ctx.query===r&&t._ctx.kill(!0,!0)})},s.isInViewport=function(r,t,o){var l=(Ue(r)?Xe(r):r).getBoundingClientRect(),a=l[o?Wt:$t]*t||0;return o?l.right-a>0&&l.left+a<E.innerWidth:l.bottom-a>0&&l.top+a<E.innerHeight},s.positionInViewport=function(r,t,o){Ue(r)&&(r=Xe(r));var l=r.getBoundingClientRect(),a=l[o?Wt:$t],p=t==null?a/2:t in on?on[t]*a:~t.indexOf("%")?parseFloat(t)*a/100:parseFloat(t)||0;return o?(l.left+p)/E.innerWidth:(l.top+p)/E.innerHeight},s.killAll=function(r){if(P.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),r!==!0){var t=Kt.killAll||[];Kt={},t.forEach(function(o){return o()})}},s}();j.version="3.14.2";j.saveStyles=function(s){return s?Er(s).forEach(function(e){if(e&&e.style){var i=$e.indexOf(e);i>=0&&$e.splice(i,5),$e.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),h.core.getCache(e),kn())}}):$e};j.revert=function(s,e){return Ln(!s,e)};j.create=function(s,e){return new j(s,e)};j.refresh=function(s){return s?yr(!0):(nr||j.register())&&Gt(!0)};j.update=function(s){return++D.cache&&kt(s===!0?2:0)};j.clearScrollMemory=Ni;j.maxScroll=function(s,e){return ft(s,e?Fe:ue)};j.getScrollFunc=function(s,e){return It(Xe(s),e?Fe:ue)};j.getById=function(s){return Tn[s]};j.getAll=function(){return P.filter(function(s){return s.vars.id!=="ScrollSmoother"})};j.isScrolling=function(){return!!rt};j.snapDirectional=On;j.addEventListener=function(s,e){var i=Kt[s]||(Kt[s]=[]);~i.indexOf(e)||i.push(e)};j.removeEventListener=function(s,e){var i=Kt[s],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)};j.batch=function(s,e){var i=[],r={},t=e.interval||.016,o=e.batchMax||1e9,l=function(m,z){var b=[],g=[],u=h.delayedCall(t,function(){z(b,g),b=[],g=[]}).pause();return function(x){b.length||u.restart(!0),b.push(x.trigger),g.push(x),o<=b.length&&u.progress(1)}},a;for(a in e)r[a]=a.substr(0,2)==="on"&&Ne(e[a])&&a!=="onRefreshInit"?l(a,e[a]):e[a];return Ne(o)&&(o=o(),me(j,"refresh",function(){return o=e.batchMax()})),Er(s).forEach(function(p){var m={};for(a in r)m[a]=r[a];m.trigger=p,i.push(j.create(m))}),i};var ti=function(e,i,r,t){return i>t?e(t):i<0&&e(0),r>t?(t-i)/(r-i):r<0?i/(i-r):1},mn=function s(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(ee.isTouch?" pinch-zoom":""):"none",e===Ve&&s(B,i)},Ur={auto:1,scroll:1},os=function(e){var i=e.event,r=e.target,t=e.axis,o=(i.changedTouches?i.changedTouches[0]:i).target,l=o._gsap||h.core.getCache(o),a=Se(),p;if(!l._isScrollT||a-l._isScrollT>2e3){for(;o&&o!==B&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(Ur[(p=tt(o)).overflowY]||Ur[p.overflowX]));)o=o.parentNode;l._isScroll=o&&o!==r&&!Vt(o)&&(Ur[(p=tt(o)).overflowY]||Ur[p.overflowX]),l._isScrollT=a}(l._isScroll||t==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},Pi=function(e,i,r,t){return ee.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:t=t&&os,onPress:t,onDrag:t,onScroll:t,onEnable:function(){return r&&me(X,ee.eventTypes[0],ni,!1,!0)},onDisable:function(){return he(X,ee.eventTypes[0],ni,!0)}})},as=/(input|label|select|textarea)/i,ri,ni=function(e){var i=as.test(e.target.tagName);(i||ri)&&(e._gsapAllow=!0,ri=i)},ls=function(e){Ht(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,r=i.normalizeScrollX,t=i.momentum,o=i.allowNestedScroll,l=i.onRelease,a,p,m=Xe(e.target)||Ve,z=h.core.globals().ScrollSmoother,b=z&&z.get(),g=Et&&(e.content&&Xe(e.content)||b&&e.content!==!1&&!b.smooth()&&b.content()),u=It(m,ue),x=It(m,Fe),H=1,q=(ee.isTouch&&E.visualViewport?E.visualViewport.scale*E.visualViewport.width:E.outerWidth)/E.innerWidth,oe=0,$=Ne(t)?function(){return t(a)}:function(){return t||2.8},xe,M,Ze=Pi(m,e.type,!0,o),G=function(){return M=!1},C=pt,Re=pt,Ye=function(){p=ft(m,ue),Re=Cr(Et?1:0,p),r&&(C=Cr(0,ft(m,Fe))),xe=Ut},v=function(){g._gsap.y=br(parseFloat(g._gsap.y)+u.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},pe=function(){if(M){requestAnimationFrame(G);var te=br(a.deltaY/2),re=Re(u.v-te);if(g&&re!==u.v+u.offset){u.offset=re-u.v;var c=br((parseFloat(g&&g._gsap.y)||0)-u.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+c+", 0, 1)",g._gsap.y=c+"px",u.cacheID=D.cache,kt()}return!0}u.offset&&v(),M=!0},k,ht,ae,Me,Pe=function(){Ye(),k.isActive()&&k.vars.scrollY>p&&(u()>p?k.progress(1)&&u(p):k.resetTo("scrollY",p))};return g&&h.set(g,{y:"+=0"}),e.ignoreCheck=function(F){return Et&&F.type==="touchmove"&&pe()||H>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){M=!1;var F=H;H=br((E.visualViewport&&E.visualViewport.scale||1)/q),k.pause(),F!==H&&mn(m,H>1.01?!0:r?!1:"x"),ht=x(),ae=u(),Ye(),xe=Ut},e.onRelease=e.onGestureStart=function(F,te){if(u.offset&&v(),!te)Me.restart(!0);else{D.cache++;var re=$(),c,le;r&&(c=x(),le=c+re*.05*-F.velocityX/.227,re*=ti(x,c,le,ft(m,Fe)),k.vars.scrollX=C(le)),c=u(),le=c+re*.05*-F.velocityY/.227,re*=ti(u,c,le,ft(m,ue)),k.vars.scrollY=Re(le),k.invalidate().duration(re).play(.01),(Et&&k.vars.scrollY>=p||c>=p-1)&&h.to({},{onUpdate:Pe,duration:re})}l&&l(F)},e.onWheel=function(){k._ts&&k.pause(),Se()-oe>1e3&&(xe=0,oe=Se())},e.onChange=function(F,te,re,c,le){if(Ut!==xe&&Ye(),te&&r&&x(C(c[2]===te?ht+(F.startX-F.x):x()+te-c[1])),re){u.offset&&v();var Ot=le[2]===re,Ct=Ot?ae+F.startY-F.y:u()+re-le[1],Qe=Re(Ct);Ot&&Ct!==Qe&&(ae+=Qe-Ct),u(Qe)}(re||te)&&kt()},e.onEnable=function(){mn(m,r?!1:"x"),j.addEventListener("refresh",Pe),me(E,"resize",Pe),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=x.smooth=!1),Ze.enable()},e.onDisable=function(){mn(m,!0),he(E,"resize",Pe),j.removeEventListener("refresh",Pe),Ze.kill()},e.lockAxis=e.lockAxis!==!1,a=new ee(e),a.iOS=Et,Et&&!u()&&u(1),Et&&h.ticker.add(pt),Me=a._dc,k=h.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Mi(u,u(),function(){return k.pause()})},onUpdate:kt,onComplete:Me.vars.onComplete}),a};j.sort=function(s){if(Ne(s))return P.sort(s);var e=E.pageYOffset||0;return j.getAll().forEach(function(i){return i._sortY=i.trigger?e+i.trigger.getBoundingClientRect().top:i.start+E.innerHeight}),P.sort(s||function(i,r){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})};j.observe=function(s){return new ee(s)};j.normalizeScroll=function(s){if(typeof s>"u")return Oe;if(s===!0&&Oe)return Oe.enable();if(s===!1){Oe&&Oe.kill(),Oe=s;return}var e=s instanceof ee?s:ls(s);return Oe&&Oe.target===e.target&&Oe.kill(),Vt(e.target)&&(Oe=e),e};j.core={_getVelocityProp:wn,_inputObserver:Pi,_scrollers:D,_proxies:gt,bridge:{ss:function(){rt||Zt("scrollStart"),rt=Se()},ref:function(){return Te}}};vi()&&h.registerPlugin(j);const ii=[{name:"الرئيسية",href:"#home"},{name:"لماذا لازورد",href:"#about"},{name:"خدمات المختبرات",href:"#services"},{name:"الحلول",href:"#solutions"},{name:"التسعير",href:"#pricing"},{name:"التعلم",href:"#learning"}],cs=()=>{const[s,e]=w.useState(!1),[i,r]=w.useState(!1),[t,o]=w.useState("home");w.useEffect(()=>{const a=()=>{e(window.scrollY>50)},p={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},m=b=>{b.forEach(g=>{g.isIntersecting&&o(g.target.id)})},z=new IntersectionObserver(m,p);return ii.forEach(b=>{const g=document.getElementById(b.href.substring(1));g&&z.observe(g)}),window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a),z.disconnect()}},[]);const l=a=>{o(a),r(!1)};return n.jsxs("nav",{className:`navbar glass-panel ${s?"scrolled":""}`,children:[n.jsxs("div",{className:"navbar-container",children:[n.jsxs("div",{className:"logo",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[n.jsx("div",{className:"logo-icon",children:n.jsxs("svg",{width:"42",height:"42",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:"logoGrad",x1:"20",y1:"10",x2:"80",y2:"90",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#0A1922"}),n.jsx("stop",{offset:"0.5",stopColor:"#6fa8dc"}),n.jsx("stop",{offset:"1",stopColor:"#7ec8b8"})]}),n.jsxs("filter",{id:"glow",children:[n.jsx("feGaussianBlur",{stdDeviation:"2",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:"M50 8 L85 28 L85 72 L50 92 L15 72 L15 28 Z",fill:"url(#logoGrad)",opacity:"0.8"}),n.jsx("path",{d:"M50 18 L72 32 L72 68 L50 82 L28 68 L28 32 Z",stroke:"#7ec8b8",strokeWidth:"1.5",fill:"none",filter:"url(#glow)"}),n.jsx("path",{d:"M50 30 L62 38 L62 62 L50 70 L38 62 L38 38 Z",stroke:"rgba(126,200,184,0.4)",strokeWidth:"1",fill:"none"}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"#7ec8b8",filter:"url(#glow)"}),n.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fff"})]})}),n.jsx("span",{className:"logo-text",children:"لازورد"})]}),n.jsx("div",{className:`nav-links ${i?"open":""}`,children:ii.map(a=>n.jsx("a",{href:a.href,className:t===a.href.substring(1)?"active":"",onClick:()=>l(a.href.substring(1)),children:a.name},a.href))}),n.jsxs("div",{className:"nav-actions",children:[n.jsx("span",{className:"nav-phone",style:{marginLeft:"15px",color:"var(--text-muted)",fontSize:"0.9rem"},children:"هاتف: 0599998531-(970)"}),n.jsx("a",{href:"#",className:"login-link",children:"تسجيل الدخول"}),n.jsx("button",{className:"btn-primary",children:"ابدأ الآن"})]}),n.jsxs("button",{className:"menu-toggle","aria-label":"القائمة","aria-expanded":i,onClick:()=>r(!i),children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]})]}),n.jsx("style",{children:`
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
      `})]})},ds=()=>{const s=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.timeline({defaults:{ease:"power4.out"}}).from(".hero-badge",{opacity:0,y:30,duration:1.2,delay:.5}).from(".hero-title .brand",{opacity:0,y:80,duration:1.5,scale:.95},"-=0.8").from(".hero-subtitle",{opacity:0,y:50,duration:1.2},"-=1").from(".hero-description",{opacity:0,scale:.9,duration:1.2},"-=1").from(".hero-actions button",{opacity:0,y:30,duration:1,stagger:.2},"-=0.8").from(".hero-ui-line",{width:0,duration:1.5,opacity:0},"-=1.2")},s);return()=>e.revert()},[]),n.jsxs("section",{id:"home",className:"hero-section",ref:s,children:[n.jsxs("div",{className:"hero-ui-decor",children:[n.jsx("div",{className:"hero-ui-line",style:{position:"absolute",top:"20%",left:"10%",height:"1px",background:"rgba(126, 200, 184, 0.15)",opacity:.3}}),n.jsx("div",{className:"hero-ui-line",style:{position:"absolute",bottom:"20%",right:"10%",height:"1px",background:"rgba(111, 168, 220, 0.15)",opacity:.3}})]}),n.jsxs("div",{className:"hero-content container",children:[n.jsxs("div",{className:"hero-badge",children:[n.jsx("span",{className:"badge-dot"}),n.jsx("span",{className:"badge-text",children:"مستقبل طب الأسنان الرقمي"})]}),n.jsx("h1",{className:"hero-title",children:n.jsx("span",{className:"brand glow-text",children:"مختبر الأسنان الرقمي مع التواصل في الوقت الحقيقي"})}),n.jsx("p",{className:"hero-description reveal",style:{opacity:1,transform:"none"},children:"نحن نعمل على تمكين الآلاف من عيادات طب الأسنان من خلال تدفقات عمل مبتكرة لتعزيز رعاية المرضى وإحداث ثورة في طريقة فحصهم وطلبهم والتعاون في العمل المختبري."}),n.jsxs("div",{className:"hero-actions",children:[n.jsx("button",{className:"btn-primary",children:"ابدأ الآن"}),n.jsx("button",{className:"btn-secondary",children:"شاهد الفيديو"})]})]}),n.jsxs("div",{className:"scroll-indicator",children:[n.jsx("div",{className:"mouse"}),n.jsx("span",{style:{letterSpacing:"2px",textTransform:"uppercase"},children:"SCROLL TO EXPLORE"})]}),n.jsx("style",{children:`
        .hero-ui-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .hero-ui-line {
          width: 250px;
        }
      `})]})};T.registerPlugin(j);const xn=({target:s,prefix:e="",suffix:i=""})=>{const[r,t]=w.useState(0),o=w.useRef(null);return w.useEffect(()=>{if(!o.current)return;const l={val:0};j.create({trigger:o.current,start:"top 90%",once:!0,onEnter:()=>{T.to(l,{val:s,duration:2.5,ease:"power3.out",onUpdate:()=>{const p=s%1!==0?l.val.toFixed(1):Math.round(l.val).toString();o.current.innerText=`${e}${p}${i}`}})}})},[s,e,i]),n.jsxs("h2",{className:"stat-value",ref:o,style:{direction:"ltr",display:"inline-block"},children:[e,"0",i]})},us=()=>{const s=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".stat-card",{y:60,opacity:0,duration:.9,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 80%"}}),T.from(".stats-title",{y:30,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 85%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{className:"stats-section container",ref:s,children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{className:"stats-title",style:{maxWidth:"800px",margin:"0 auto",lineHeight:"1.4"},children:"الآلاف من الممارسات تثق في لازورد في أعمالها المخبرية"})}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card glass-panel breathable-card",children:[n.jsx(xn,{target:50,prefix:"+",suffix:"K"}),n.jsx("p",{className:"stat-label",children:"تقييمات حالة 5 نجوم"})]}),n.jsxs("div",{className:"stat-card glass-panel breathable-card",children:[n.jsx(xn,{target:30,prefix:"$",suffix:"K"}),n.jsx("p",{className:"stat-label",children:"تم الحفظ مقدماً"})]}),n.jsxs("div",{className:"stat-card glass-panel breathable-card",children:[n.jsx(xn,{target:1.5,prefix:"+",suffix:"M"}),n.jsx("p",{className:"stat-label",children:"تم تسليم الابتسامات السعيدة"})]})]}),n.jsx("style",{children:`
        .stats-section {
          padding: 140px 0; /* Plenty of whitespace */
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
          font-family: 'Inter', sans-serif; /* High contrast numbers */
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
      `})]})},ps="/lazord-Clinic-Tasky/assets/best1-DfajEmOa.webp",fs="/lazord-Clinic-Tasky/assets/best2-JT9ua9gk.webp",gs="/lazord-Clinic-Tasky/assets/best3--AzQRpIA.webp";T.registerPlugin(j);const hs=[{title:"تطوير مهارات كل عضو من الموظفين",description:"اجعل مساعديك يقومون بالمسح بثقة لكل سير عمل رقمي - استفد من التدريب غير المحدود لفريقك كلما دعت الحاجة.",image:ps},{title:"تحسين تجربة المريض",description:"ارفع مستوى رعاية المرضى من خلال ابتكارات مثل أطقم الأسنان ذات الموعد النهائي، والأجزاء الجزئية المباشرة إلى النهاية، والماسح الضوئي رقم 1 في طب الأسنان الترميمي.",image:fs},{title:"زيادة القدرة على التنبؤ بالعلاج",description:"استخدم أدوات المسح المتقدمة - تصور التصميمات الرقمية والموافقة عليها، وتعزيز نتائج قبول الحالة، وتقديم نتائج ناجحة للمرضى مع التحكم المطلق.",image:gs}],ms=()=>{const s=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".about-card-rich",{y:60,opacity:0,duration:.8,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"about",ref:s,className:"about-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"تحقيق نتائج أفضل لممارستك ومرضاك"})}),n.jsx("div",{className:"about-rich-grid",children:hs.map((e,i)=>n.jsxs("div",{className:"about-card-rich glass-panel",children:[n.jsx("div",{className:"image-glow-backdrop"}),n.jsx("div",{className:"about-card-image-wrapper",children:n.jsx("img",{src:e.image,alt:e.title,className:"about-card-img"})}),n.jsxs("div",{className:"about-card-content",children:[n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.description})]})]},i))}),n.jsx("style",{children:`
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
          background: rgba(10, 25, 34, 0.5); /* Deep dark navy base */
          border: 1px solid rgba(126, 200, 184, 0.1);
        }

        .about-card-rich:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(126, 200, 184, 0.08);
          border-color: rgba(126, 200, 184, 0.3);
        }

        /* Soft glow behind the image for high-tech aesthetic */
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

        /* Adding the subtle floating element animation */
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
          color: var(--text-main); /* White/very light grey for body text as requested */
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
      `})]})},xs="/lazord-Clinic-Tasky/assets/Collaborative%20Workflow-Dnta-28t.webp",bs="/lazord-Clinic-Tasky/assets/Innovative%20Products-8XIxuSOz.webp",vs="/lazord-Clinic-Tasky/assets/Fully%20Digital%20Lab-C5FHI0nh.webp",ys="/lazord-Clinic-Tasky/assets/Expertise%20on%20Demand-C0_TgalG.webp";T.registerPlugin(j);const ws=[{title:"سير العمل التعاوني",text:"احصل على مراجعات المسح في الوقت الفعلي واعتمد تصميمات الحالات ثلاثية الأبعاد للتحكم النهائي في عملك المختبري.",image:xs},{title:"المنتجات المبتكرة",text:"قم بتقديم خدمات تغير قواعد اللعبة مثل التيجان لمدة 5 أيام، وأطقم الأسنان ذات الموعد النهائي، والأجزاء الجزئية المباشرة حتى النهاية.",image:bs},{title:"مختبر رقمي بالكامل",text:"يمكنك الوصول إلى فنيينا ذوي المستوى العالمي الذين يتمتعون بأحدث تقنيات طب الأسنان وأوقات التسليم الرائدة في الصناعة.",image:vs},{title:"الخبرة عند الطلب",text:"يمكنك الوصول إلى خبراتنا السريريين للحصول على إرشادات ودعم شخصيين عبر الهاتف أو الرسائل النصية أو البريد الإلكتروني أو الدردشة المباشرة خلال دقائق.",image:ys}],_s=()=>{const s=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".feature-card-cinematic",{y:60,opacity:0,duration:.8,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"solutions",ref:s,className:"innovation-section container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"الابتكار"}),n.jsx("h2",{children:"تعزيز مستقبل طب الأسنان الرقمي"}),n.jsx("p",{children:"لا يمكن تحقيق ترميمات متسقة وملائمة إلا من خلال التواصل القوي. في لازورد، قمنا بتطوير طرق مبتكرة للتعاون مع أطباء الأسنان لدينا باستخدام قوة التكنولوجيا لإعادة تعريف ما هو ممكن لكل مريض."})]}),n.jsx("div",{className:"about-grid innovation-cards-grid",children:ws.map((e,i)=>n.jsxs("div",{className:"feature-card-cinematic glass-panel",children:[n.jsx("div",{className:"card-highlight"}),n.jsx("div",{className:"card-image-wrapper",children:n.jsx("img",{src:e.image,alt:e.title,className:"card-image"})}),n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.text})]},i))}),n.jsx("style",{children:`
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
      `})]})},js="/lazord-Clinic-Tasky/assets/digital%20scanlond-dk82BWch.webp";T.registerPlugin(j);const ks=[{num:"١",title:"المسح الضوئي بدقة و ثقة ودقة",desc:"استخدم الماسح الضوئي 3Shape TRIOS المجاني للحصول على مسح رقمي دقيق مع مراجعات فورية."},{num:"٢",title:"اطلب العمل المختبري باستخدام الوصفات الطبية الرقمية",desc:"إرسال طلبات العمل المخبري بسهولة مع وصفات رقمية متكاملة وكاملة."},{num:"٣",title:"الموافقة على التصاميم الرقمية قبل التصنيع",desc:"راجع ووافق على التصميمات ثلاثية الأبعاد للحالات قبل عملية التصنيع."},{num:"٤",title:"تتبع الحالات في الوقت الفعلي",desc:"متابعة حالة العمل المخبري وتقدمه في أي وقت ومن أي مكان."},{num:"٥",title:"تسليم العلاج للمريض في أيام",desc:"تسليم نتائج عالية الجودة في فترة زمنية قصيرة مع ضمان رضا المريض."},{num:"٦",title:"كيف يتم مقارنة لازورد مع مختبرات الأسنان الأخرى",desc:"اكتشف الفرق في الجودة والسرعة والتواصل الرقمي المتكامل."}],Cs=()=>{const s=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".workflow-image-wrapper",{x:60,opacity:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 70%"}}),T.from(".workflow-step",{x:-40,opacity:0,duration:.7,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 70%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"workflow",ref:s,className:"workflow-section container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"سير العمل"}),n.jsx("h2",{children:"قم بتحويل ممارساتك باستخدام سير عمل رقمي مثبت"}),n.jsx("p",{children:"استمتع بمستوى من التحكم لم يكن ممكنًا من قبل."}),n.jsx("p",{style:{marginTop:"15px"},children:"لا يمكن تحقيق ترميمات متسقة وملائمة إلا من خلال التواصل القوي. في لازورد، قمنا بتطوير طرق مبتكرة للتعاون مع أطباء الأسنان لدينا باستخدام قوة التكنولوجيا لإعادة تعريف ما هو ممكن لكل مريض."})]}),n.jsxs("div",{className:"workflow-layout",children:[n.jsx("div",{className:"workflow-image-column",children:n.jsx("div",{className:"workflow-image-wrapper glass-panel",children:n.jsx("img",{src:js,alt:"سير العمل الرقمي والتواصل",className:"workflow-img"})})}),n.jsx("div",{className:"workflow-steps-column",children:n.jsx("div",{className:"workflow-steps",children:ks.map((e,i)=>n.jsxs("div",{className:"workflow-step",children:[n.jsx("div",{className:"workflow-step-number",children:e.num}),n.jsxs("div",{className:"workflow-step-content",children:[n.jsx("h4",{children:e.title}),n.jsx("p",{children:e.desc})]})]},i))})})]}),n.jsx("style",{children:`
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
      `})]})},Ts="/lazord-Clinic-Tasky/assets/Zirconia%20Crowns-DFXSpLZH.webp",Ss="/lazord-Clinic-Tasky/assets/Implant%20Solutions-DNSkKUND.webp",Ns="/lazord-Clinic-Tasky/assets/Full%20Dentures-DqhujTu-.webp",Rs="/lazord-Clinic-Tasky/assets/Removable%20Partial%20Dentures-C8n4-3Oq.webp",Ms="/lazord-Clinic-Tasky/assets/3D%20Printed%20Night%20Guards-By2kBMm8.webp",Ps="/lazord-Clinic-Tasky/assets/Clear%20Aligners-BPjZRSah.webp",Es="/lazord-Clinic-Tasky/assets/Sleep%20Apnea%20Devices-BZgyswOK.webp";T.registerPlugin(j);const Ds=[{name:"تيجان الزركونيا لمدة 5 أيام",image:Ts},{name:"حلول زراعة الأسنان الشاملة",image:Ss},{name:"طقم الأسنان ذو الموعد الثاني",image:Ns},{name:"أجزاء مباشرة إلى النهاية",image:Rs},{name:"واقيات ليلية مطبوعة بتقنية ثلاثية الأبعاد",image:Ms},{name:"تقويم الأسنان الشفاف",image:Ps},{name:"أجهزة علاج انقطاع التنفس أثناء النوم",image:Es}],zs=()=>{const s=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".product-card",{y:40,opacity:0,duration:.7,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"services",ref:s,className:"services-section container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"المنتجات"}),n.jsx("h2",{children:"أطلق العنان للابتكار الرائد في السوق مع مختبر طب الأسنان الخاص بنا"}),n.jsx("p",{children:"لا يمكن تحقيق ترميمات متسقة وملائمة إلا من خلال التواصل القوي. في لازورد، قمنا بتطوير طرق مبتكرة للتعاون مع أطباء الأسنان لدينا باستخدام قوة التكنولوجيا لإعادة تعريف ما هو ممكن لكل مريض."})]}),n.jsx("div",{className:"services-grid products-grid",children:Ds.map((e,i)=>n.jsxs("div",{className:"product-card glass-panel flex-card",children:[n.jsx("div",{className:"card-image-wrapper",children:n.jsx("img",{src:e.image,alt:e.name,className:"card-image"})}),n.jsx("div",{className:"card-content",children:n.jsx("h4",{children:e.name})})]},i))}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:n.jsx("button",{className:"btn-primary",children:"استكشف جميع منتجات المختبر"})}),n.jsx("style",{children:`
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
      `})]})};T.registerPlugin(j);const As=()=>{const s=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".restorative-card",{x:i=>i===0?50:-50,opacity:0,duration:1,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"restorative",ref:s,className:"restorative-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"حلول طب الأسنان الترميمية لتناسب احتياجاتك"})}),n.jsxs("div",{className:"restorative-grid",children:[n.jsxs("div",{className:"restorative-card glass-panel highlight",children:[n.jsx("h3",{children:"هل أنت جديد في مجال المسح الضوئي؟"}),n.jsx("p",{children:"تقديم نتائج متوقعة للمرضى باستخدام التكنولوجيا والأدوات المبتكرة التي تمنحك التحكم النهائي."}),n.jsxs("ul",{children:[n.jsx("li",{children:"✓ الماسح الضوئي 3Shape TRIOS المجاني"}),n.jsx("li",{children:"✓ سير عمل المسح الرقمي الموجه"}),n.jsx("li",{children:"✓ تدفقات العمل الرقمية لأطقم الأسنان وأكثر من ذلك"}),n.jsx("li",{children:"✓ معاينات تصميم مجانية لإضفاء اللمسات النهائية على القضايا المهمة"})]}),n.jsx("button",{className:"btn-primary",children:"سجل الآن"})]}),n.jsxs("div",{className:"restorative-card glass-panel",children:[n.jsx("h3",{children:"هل تقوم بالمسح الضوئي بالفعل؟"}),n.jsx("p",{children:"قم بتنمية ممارستك من خلال الانتقال إلى سير العمل الرقمي باستخدام مجموعة أدوات طب الأسنان الرقمية المثبتة لدينا."}),n.jsxs("ul",{children:[n.jsx("li",{children:"✓ الماسح الضوئي 3Shape TRIOS المجاني"}),n.jsx("li",{children:"✓ سير عمل المسح الرقمي الموجه"}),n.jsx("li",{children:"✓ مراجعات المسح المباشرة لمزيد من الثقة"}),n.jsx("li",{children:"✓ تدريب ودعم غير محدود"})]}),n.jsx("button",{className:"btn-secondary",children:"احصل على الماسح الضوئي المجاني الخاص بك"})]})]}),n.jsx("style",{children:`
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
      `})]})},Is="/lazord-Clinic-Tasky/assets/labs-DWg3vErN.webp",Os="/lazord-Clinic-Tasky/assets/team-nni6chU6.webp",Ls="/lazord-Clinic-Tasky/assets/before-CUkNKgvK.webp",Bs="/lazord-Clinic-Tasky/assets/After-C0y4nHaj.webp";T.registerPlugin(j);const Fs=({before:s,after:e})=>{const[i,r]=w.useState(50),t=w.useRef(null),o=w.useRef(!1),l=b=>{if(!o.current||!t.current)return;const g=t.current.getBoundingClientRect(),x=Math.max(0,Math.min(b-g.left,g.width))/g.width*100;r(x)},a=b=>{o.current=!0,l(b.clientX),t.current&&(t.current.style.touchAction="none")},p=b=>{l(b.clientX)},m=()=>{o.current=!1,t.current&&(t.current.style.touchAction="auto")},z=b=>{b.key==="ArrowLeft"?r(Math.max(0,i-5)):b.key==="ArrowRight"&&r(Math.min(100,i+5))};return n.jsxs("div",{ref:t,className:"slider-container",onPointerDown:a,onPointerMove:p,onPointerUp:m,onPointerLeave:m,role:"slider",tabIndex:0,"aria-valuenow":Math.round(i),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Before and after comparison slider",onKeyDown:z,children:[n.jsx("div",{className:"slider-image after-img",style:{backgroundImage:`url(${e})`},children:n.jsx("div",{className:"slider-badge",style:{right:"20px"},children:"AFTER"})}),n.jsx("div",{className:"slider-image before-img",style:{backgroundImage:`url(${s})`,clipPath:`inset(0 ${100-i}% 0 0)`},children:n.jsx("div",{className:"slider-badge",style:{left:"20px"},children:"BEFORE"})}),n.jsx("div",{className:"slider-divider",style:{left:`${i}%`},children:n.jsxs("div",{className:"slider-handle",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"15 18 9 12 15 6"})}),n.jsx("svg",{style:{transform:"rotate(180deg)"},width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"15 18 9 12 15 6"})})]})}),n.jsx("style",{children:`
        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: ew-resize;
          user-select: none;
          touch-action: pan-y; /* Allow vertical scroll unless dragging */
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
          background: rgba(10, 25, 34, 0.85); /* Warm navy */
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(126, 200, 184, 0.3); /* Teal border */
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
      `})]})},Ys=()=>{const s=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".article-layout-card",{y:50,opacity:0,duration:.9,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"articles",ref:s,className:"articles-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"تعرف على المزيد حول مستقبل طب الأسنان وكيف يشكله لازورد."})}),n.jsxs("div",{className:"articles-layout",children:[n.jsxs("div",{className:"article-layout-card case-study-card glass-panel",children:[n.jsx("div",{className:"case-study-media",children:n.jsx(Fs,{before:Ls,after:Bs})}),n.jsxs("div",{className:"article-card-content",children:[n.jsx("h3",{children:"دراسة حالة: 10 وحدات لتحويل ابتسامة الزركونيا"}),n.jsx("button",{className:"login-link",children:"اقرأ المزيد ←"})]})]}),n.jsxs("div",{className:"side-articles",children:[n.jsxs("div",{className:"article-layout-card side-card glass-panel",children:[n.jsx("div",{className:"side-card-media",children:n.jsx("img",{src:Is,alt:"داخل معمل لازورد للمستقبل",loading:"lazy"})}),n.jsxs("div",{className:"article-card-content",children:[n.jsx("h3",{children:"داخل معمل لازورد للمستقبل"}),n.jsx("button",{className:"login-link",children:"اقرأ المزيد ←"})]})]}),n.jsxs("div",{className:"article-layout-card side-card glass-panel",children:[n.jsx("div",{className:"side-card-media",children:n.jsx("img",{src:Os,alt:"كيف يعمل لازورد",loading:"lazy"})}),n.jsxs("div",{className:"article-card-content",children:[n.jsx("h3",{children:"كيف يعمل لازورد"}),n.jsx("button",{className:"login-link",children:"اقرأ المزيد ←"})]})]})]})]}),n.jsx("style",{children:`
        .articles-layout {
          display: grid;
          grid-template-columns: 1.8fr 1fr; /* Emphasis on the slider card */
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
          height: 480px; /* Large height for the Before/After comparison */
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
      `})]})};T.registerPlugin(j);const qs=[{q:"ما هو لازورد؟",a:"لازورد هو مختبر أسنان رقمي متكامل يوفر تواصلاً في الوقت الحقيقي بين أطباء الأسنان والمختبر، مع تقنيات مبتكرة لتحسين جودة العمل وسرعة التسليم."},{q:"ما هي فوائد طب الأسنان الرقمي؟",a:"طب الأسنان الرقمي يوفر دقة أعلى في التصميم والتصنيع، أوقات تسليم أسرع، تكاليف أقل، وتجربة أفضل للمريض مع إمكانية المعاينة قبل التصنيع."},{q:"ما هو مختبر الأسنان الرقمي؟",a:"هو مختبر يستخدم التقنيات الرقمية المتقدمة مثل المسح الضوئي داخل الفم والتصميم بمساعدة الكمبيوتر (CAD) والتصنيع بمساعدة الكمبيوتر (CAM) لإنتاج ترميمات أسنان دقيقة للغاية."},{q:"ما هي سير العمل المبتكرة التي تقدمها لازورد؟",a:"نقدم سير عمل رقمي موجه يشمل المسح الضوئي الدقيق، الوصفات الرقمية، معاينة التصاميم ثلاثية الأبعاد، تتبع الحالات في الوقت الفعلي، والتسليم السريع."},{q:"ما هي منتجات مختبر الأسنان التي تقدمها لازورد؟",a:"نقدم مجموعة واسعة تشمل تيجان الزركونيا، حلول زراعة الأسنان، أطقم الأسنان الرقمية، الواقيات الليلية، والتقويم الشفاف."},{q:"كيف يتم مقارنة لازورد مع مختبرات الأسنان الأخرى؟",a:"لازورد يتميز بالتواصل في الوقت الحقيقي، مختبر رقمي بالكامل، منتجات مبتكرة، خبرة عند الطلب، وأوقات تسليم رائدة في الصناعة مقارنة بالمختبرات التقليدية."}],Xs=()=>{const[s,e]=w.useState(null),i=w.useRef(null),r=t=>{e(s===t?null:t)};return w.useEffect(()=>{const t=T.context(()=>{T.fromTo(".faq-item",{y:40,opacity:0},{y:0,opacity:1,duration:.6,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:i.current,start:"top 80%"}})},i);return()=>t.revert()},[]),n.jsxs("section",{id:"learning",ref:i,className:"faq-section container",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"الأسئلة الشائعة حول لازورد"})}),n.jsx("div",{className:"faq-list",children:qs.map((t,o)=>n.jsxs("div",{className:`faq-item glass-panel ${s===o?"active":""}`,children:[n.jsxs("button",{className:"faq-question",onClick:()=>r(o),"aria-expanded":s===o,"aria-controls":`faq-answer-${o}`,id:`faq-question-${o}`,children:[n.jsx("span",{children:t.q}),n.jsx("span",{className:"faq-toggle",children:s===o?"−":"+"})]}),n.jsx("div",{id:`faq-answer-${o}`,role:"region","aria-labelledby":`faq-question-${o}`,className:"faq-answer",children:n.jsx("p",{children:t.a})})]},o))})]})};T.registerPlugin(j);const Hs=()=>{const s=w.useRef(null);return w.useEffect(()=>{const e=T.context(()=>{T.from(".contact-content",{y:60,opacity:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 75%"}})},s);return()=>e.revert()},[]),n.jsxs("section",{id:"contact",ref:s,className:"contact-section container",children:[n.jsxs("div",{className:"contact-content glass-panel",style:{padding:"50px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[n.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"20px"},children:"تواصل معنا"}),n.jsx("p",{style:{color:"var(--text-muted)",maxWidth:"700px",margin:"0 auto"},children:"قم بتطوير ممارساتك مع لازورد - الشريك الرقمي الوحيد المتكامل وقم بتحسين تجربة المريض والحلول السريرية ونمو الأعمال."}),n.jsx("h3",{style:{marginTop:"20px",color:"#fff"},children:"ابدأ اليوم عن طريق ملء النموذج."})]}),n.jsxs("form",{className:"contact-form",onSubmit:e=>e.preventDefault(),style:{maxWidth:"800px",margin:"0 auto"},children:[n.jsxs("div",{className:"form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[n.jsx("input",{type:"text",placeholder:"الاسم الأول",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"text",placeholder:"اسم العائلة",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"email",placeholder:"عنوان البريد الإلكتروني",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"tel",placeholder:"رقم الهاتف",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"text",placeholder:" دورك في العيادة",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}}),n.jsx("input",{type:"text",placeholder:"اسم عيادتك",required:!0,style:{padding:"16px",borderRadius:"14px",background:"rgba(126,200,184,0.03)",border:"1px solid rgba(126,200,184,0.08)",color:"var(--text-main)"}})]}),n.jsx("p",{style:{marginTop:"30px",fontSize:"0.9rem",color:"var(--text-muted)",textAlign:"center",lineHeight:"1.6"},children:"من خلال تقديم النموذج أعلاه، أؤكد على شروط الاستخدام وسياسة الخصوصية الخاصة بشركة لازورد وأوافق، على أنه يمكن الاتصال بي من قبل شركة لازورد عبر رسالة نصية باستخدام معلومات الاتصال التي قدمتها. قد يتم تطبيق أسعار الرسائل والبيانات ويمكنني الرد بـ STOP لإلغاء الاشتراك في أي وقت."}),n.jsx("div",{style:{textAlign:"center",marginTop:"30px"},children:n.jsx("button",{type:"submit",className:"btn-primary",style:{padding:"15px 60px"},children:"ابدأ الآن"})})]})]}),n.jsx("style",{children:`
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})},Gs=()=>n.jsxs("footer",{className:"footer-section",children:[n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"footer-header",style:{textAlign:"center",marginBottom:"60px"},children:[n.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"20px"},children:"هل مازلت تأخذ الانطباعات الجسدية؟"}),n.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.2rem"},children:"نقدم لك كل ما تحتاجه للبدء في طب الأسنان الرقمي — بما في ذلك الماسح الضوئي داخل الفم"})]}),n.jsxs("div",{className:"footer-grid",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"40px"},children:[n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"لازورد"}),n.jsx("a",{href:"#",children:"الصفحة الرئيسية"}),n.jsx("a",{href:"#",children:"تقييمات"}),n.jsx("a",{href:"#",children:"وظائف"}),n.jsx("a",{href:"#",children:"سياسة الخصوصية"})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"منتجات"}),n.jsx("a",{href:"#",children:"منتجات"}),n.jsx("a",{href:"#",children:"إتقان والتعلم"}),n.jsx("a",{href:"#",children:"أطقم الأسنان الرقمية"}),n.jsx("a",{href:"#",children:"أقيم الأسنان الفرع"}),n.jsx("a",{href:"#",children:"حلول الزرع"})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"ممارسات"}),n.jsx("a",{href:"#",children:"هل بدأت؟ ابدأ هنا"}),n.jsx("a",{href:"#",children:"قصص النجاح"}),n.jsx("a",{href:"#",children:"أقيم إن الممارسة"}),n.jsx("a",{href:"#",children:"تسجيل الدخول"})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{children:"موارد"}),n.jsx("a",{href:"#",children:"جديد في ممارسات المسح"}),n.jsx("a",{href:"#",children:"سار مسح شامل"}),n.jsx("a",{href:"#",children:"راجع دليل خدمات مختبر داندي"}),n.jsx("a",{href:"#",children:"خذ ممارستك الرقمية"}),n.jsx("a",{href:"#",children:"اتصل على جميع شيوخ"})]})]}),n.jsx("div",{className:"footer-divider",style:{margin:"60px 0 30px",borderTop:"1px solid rgba(126,200,184,0.04)"}}),n.jsx("div",{className:"footer-bottom",children:n.jsxs("p",{className:"footer-copyright",children:["© ",new Date().getFullYear()," لازورد. جميع الحقوق محفوظة."]})})]}),n.jsx("style",{children:`
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
      `})]}),Ws="/lazord-Clinic-Tasky/assets/clinic-interior-C6MKxaFq.webp",$s="/lazord-Clinic-Tasky/assets/dental-technology-DwA3xOPY.webp",Us="/lazord-Clinic-Tasky/assets/smile-closeup-VAs7J29S.webp",Vs="/lazord-Clinic-Tasky/assets/dental-crown-3SIQg1EQ.webp";T.registerPlugin(j);const Vr=({position:s,texture:e,title:i,delay:r=0})=>{const t=w.useRef(null),o=w.useRef(null);return Rn(l=>{t.current&&(t.current.position.y+=Math.sin(l.clock.elapsedTime+r)*8e-4,t.current.rotation.y=Math.sin(l.clock.elapsedTime*.4+r)*.03)}),n.jsxs("group",{position:s,children:[n.jsxs("mesh",{ref:o,children:[n.jsx("planeGeometry",{args:[1.6,1]}),n.jsx("meshBasicMaterial",{color:"#7ec8b8",wireframe:!0,transparent:!0,opacity:.1})]}),n.jsxs("mesh",{ref:t,children:[n.jsx("planeGeometry",{args:[1.5,.9]}),n.jsx("meshBasicMaterial",{map:e,transparent:!0,opacity:.4,side:Fi,blending:Bi})]}),n.jsxs("mesh",{position:[0,-.55,0],children:[n.jsx("planeGeometry",{args:[1.5,.015]}),n.jsx("meshBasicMaterial",{color:"#7ec8b8",transparent:!0,opacity:.2})]})]})},Ks=()=>n.jsxs("group",{rotation:[-Math.PI/2,0,0],position:[0,-2,0],children:[n.jsx("gridHelper",{args:[40,40,"#1a3a4a","#0d1a2a"]}),n.jsx(Mn,{count:60,scale:20,size:.8,speed:.15,color:"#7ec8b8"})]}),Zs=()=>{const{camera:s}=Ei(),e=w.useRef(null),i=w.useRef(null),r=w.useRef(null),t=w.useRef(null),o=w.useRef(null),l=Di({clinic:Ws,tech:$s,smile:Us,crown:Vs}),a=w.useMemo(()=>{const p=[];for(let b=0;b<=8*32;b++){const g=b/256,u=g*8*Math.PI*2,x=.2-g*.08,H=-g*1.4+1.4/2;p.push(new Li(Math.cos(u)*x,H,Math.sin(u)*x))}return new zi(new Ai(p),128,.03,8,!1)},[]);return w.useEffect(()=>{const p=T.timeline({scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:1.5}});e.current&&i.current&&r.current&&t.current&&(p.to(i.current.position,{y:3.5,z:.5,duration:2},0).to(r.current.position,{y:1.8,duration:2},0).to(t.current.position,{y:-1.2,duration:2},0).to(e.current.rotation,{y:Math.PI*1.5,duration:4},0),p.to(s.position,{x:2,z:8,duration:2},0).to(s.position,{x:-2,y:1,duration:2},2),o.current&&p.to(o.current.position,{y:-1,z:2,duration:2},1).to(o.current.rotation,{y:Math.PI*.2,duration:4},0))},[s]),Rn(p=>{const m=p.clock.elapsedTime;e.current&&(e.current.rotation.y+=.0015,e.current.position.y=Math.sin(m*.3)*.08)}),n.jsxs(n.Fragment,{children:[n.jsx(si,{preset:"night"}),n.jsx("ambientLight",{intensity:.15}),n.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,intensity:1.2,color:"#7ec8b8",castShadow:!0}),n.jsx("spotLight",{position:[-10,5,5],angle:.2,penumbra:1,intensity:.8,color:"#6fa8dc"}),n.jsx("pointLight",{position:[0,2,5],intensity:.6,color:"#e8e5e0"}),n.jsx(Ks,{}),n.jsxs("group",{ref:e,position:[0,0,0],children:[n.jsx(Ii,{speed:1.2,rotationIntensity:.15,floatIntensity:.3,children:n.jsxs("group",{children:[n.jsxs("mesh",{ref:i,position:[0,1.4,0],children:[n.jsx("cylinderGeometry",{args:[.6,.45,.9,32]}),n.jsx("meshPhysicalMaterial",{color:"#f0ede8",metalness:.05,roughness:.12,clearcoat:1,transmission:.1,thickness:.5})]}),n.jsxs("mesh",{ref:r,position:[0,.5,0],children:[n.jsx("cylinderGeometry",{args:[.3,.2,.7,32]}),n.jsx("meshPhysicalMaterial",{color:"#c0cdd8",metalness:.85,roughness:.15})]}),n.jsx("mesh",{ref:t,position:[0,-.6,0],geometry:a,children:n.jsx("meshPhysicalMaterial",{color:"#95a5b0",metalness:.95,roughness:.2})}),n.jsxs("mesh",{position:[0,-.6,0],children:[n.jsx("cylinderGeometry",{args:[.15,.08,1.4,32]}),n.jsx("meshPhysicalMaterial",{color:"#95a5b0",metalness:.95,roughness:.2})]})]})}),n.jsxs("group",{ref:o,children:[n.jsx(Vr,{position:[-3,1,-2],texture:l.tech,delay:0}),n.jsx(Vr,{position:[3,2,-3],texture:l.clinic,delay:1}),n.jsx(Vr,{position:[-2.5,-1.5,-1],texture:l.smile,delay:2}),n.jsx(Vr,{position:[3.5,-1,-2],texture:l.crown,delay:3})]})]}),n.jsx(Oi,{position:[0,-2,0],opacity:.25,scale:20,blur:2.5,far:4.5}),n.jsx(Mn,{count:180,scale:15,size:1,speed:.25,opacity:.15,color:"#7ec8b8"})]})},Qs="/lazord-Clinic-Tasky/assets/dental-implant-CRMGFVIr.webp",bn=({position:s,rotation:e,color:i,metalness:r,roughness:t,geometry:o,delay:l,name:a})=>{const p=w.useRef(null);return w.useEffect(()=>{p.current&&(T.to(p.current.position,{x:s[0]*3,y:s[1]*2.5,z:s[2]*2,duration:2.5,delay:1+l,ease:"expo.out"}),T.to(p.current.rotation,{x:(Math.random()-.5)*2,y:(Math.random()-.5)*2,duration:3,delay:1+l,ease:"power2.out"}))},[s,l]),n.jsxs("mesh",{ref:p,position:[0,0,0],rotation:e,children:[n.jsx("primitive",{object:o,attach:"geometry"}),n.jsx("meshPhysicalMaterial",{color:i,metalness:r,roughness:t,clearcoat:1,emissive:i,emissiveIntensity:.03})]})},Js=()=>{const s=w.useRef(null);Rn(t=>{s.current&&(s.current.rotation.y+=.004)});const e=new cn(.6,.45,.8,32),i=new cn(.3,.2,.6,32),r=new cn(.2,.1,1.2,32);return n.jsxs("group",{ref:s,children:[n.jsx(bn,{name:"Crown",geometry:e,position:[0,1.2,0],rotation:[0,0,0],color:"#f0ede8",metalness:.1,roughness:.15,delay:.2}),n.jsx(bn,{name:"Abutment",geometry:i,position:[0,.2,0],rotation:[0,0,0],color:"#c0cdd8",metalness:.85,roughness:.2,delay:.4}),n.jsx(bn,{name:"Screw",geometry:r,position:[0,-1,0],rotation:[0,0,0],color:"#95a5b0",metalness:.95,roughness:.3,delay:.6})]})},eo=({onComplete:s})=>{const[e,i]=w.useState(!0),r=w.useRef(null),t=w.useRef(null);return w.useEffect(()=>{const o=T.context(()=>{const l=T.timeline();l.fromTo(t.current,{opacity:0,scale:.8,letterSpacing:"20px"},{opacity:1,scale:1,letterSpacing:"5px",duration:1.2,ease:"power4.out"}),l.to(r.current,{opacity:0,duration:.8,delay:2.2,onComplete:()=>{i(!1),s()}})},r);return()=>o.revert()},[s]),e?n.jsxs("div",{ref:r,className:"splash-screen",children:[n.jsx("div",{className:"splash-img-bg",style:{backgroundImage:`url(${Qs})`,opacity:.03,position:"absolute",inset:0,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",filter:"grayscale(1) brightness(1.5)"}}),n.jsx("div",{className:"splash-bg"}),n.jsx("div",{className:"splash-canvas",children:n.jsx(oi,{camera:{position:[0,0,5],fov:45},children:n.jsxs(wr.Suspense,{fallback:null,children:[n.jsx("color",{attach:"background",args:["#0A1922"]}),n.jsx("ambientLight",{intensity:.4}),n.jsx("pointLight",{position:[10,10,10],intensity:1.5,color:"#7ec8b8"}),n.jsx("pointLight",{position:[-10,-10,-10],intensity:.8,color:"#6fa8dc"}),n.jsx(si,{preset:"city"}),n.jsx(Yi,{children:n.jsx(Js,{})}),n.jsx(Mn,{count:150,scale:10,size:1.5,speed:.3,opacity:.3,color:"#7ec8b8"})]})})}),n.jsx("div",{className:"splash-content",children:n.jsxs("div",{ref:t,className:"splash-logo",children:[n.jsx("h1",{children:"LAZORD"}),n.jsx("div",{className:"splash-loader",children:n.jsx("div",{className:"loader-bar"})}),n.jsx("p",{children:"M O D E R N   D E N T A L   L A B"})]})}),n.jsx("style",{children:`
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
      `})]}):null};T.registerPlugin(j);function to(){const[s,e]=wr.useState(!0),i=w.useRef(null),r=wr.useCallback(()=>{e(!1)},[]);return w.useEffect(()=>{s||window.scrollTo(0,0)},[s]),w.useEffect(()=>{const t=new Xi({duration:1.8,easing:l=>Math.min(1,1.001-Math.pow(2,-10*l)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:.7,touchMultiplier:2});function o(l){t.raf(l),requestAnimationFrame(o)}return requestAnimationFrame(o),()=>{t.destroy()}},[]),w.useEffect(()=>{if(s)return;const t=setTimeout(()=>{const o=T.context(()=>{T.utils.toArray("main > section").forEach((a,p)=>{if(p===0){T.set(a,{opacity:1,y:0});return}T.fromTo(a,{opacity:0,y:60},{opacity:1,y:0,duration:1.4,ease:"power2.out",scrollTrigger:{trigger:a,start:"top 92%",end:"top 40%",toggleActions:"play none none none"}});const m=a.querySelector(".section-header");m&&T.fromTo(m,{y:30,opacity:0},{y:0,opacity:1,duration:1.2,ease:"power2.out",scrollTrigger:{trigger:a,start:"top 85%",toggleActions:"play none none none"}})})},i.current);return()=>o.revert()},100);return()=>clearTimeout(t)},[s]),n.jsxs(n.Fragment,{children:[n.jsxs(wr.Suspense,{fallback:null,children:[s&&n.jsx(eo,{onComplete:r}),n.jsx("div",{className:"canvas-container",children:n.jsx(oi,{camera:{position:[0,0,6],fov:40},dpr:[1,2],gl:{antialias:!0,alpha:!0},children:n.jsx(Zs,{})})})]}),n.jsxs("div",{className:`app-content ${s?"hidden":"visible"}`,children:[n.jsx(cs,{}),n.jsxs("main",{ref:i,children:[n.jsx(ds,{}),n.jsx(_s,{})," ",n.jsx(As,{})," ",n.jsx(zs,{})," ",n.jsx(Cs,{})," ",n.jsx(ms,{})," ",n.jsx(us,{})," ",n.jsx(Hs,{})," ",n.jsx(Ys,{})," ",n.jsx(Xs,{})," "]}),n.jsx(Gs,{})]}),n.jsx("style",{children:`
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
      `})]})}qi.createRoot(document.getElementById("root")).render(n.jsx(wr.StrictMode,{children:n.jsx(to,{})}));
