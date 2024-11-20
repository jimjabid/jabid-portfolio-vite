(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Mi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Tf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ms={duration:.5,overwrite:!1,delay:0},Lc,qt,bt,Fn=1e8,ct=1/Fn,Yl=Math.PI*2,Op=Yl/4,Np=0,bf=Math.sqrt,Fp=Math.cos,zp=Math.sin,Ft=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},Ci=function(e){return typeof e=="number"},Dc=function(e){return typeof e>"u"},di=function(e){return typeof e=="object"},cn=function(e){return e!==!1},Ic=function(){return typeof window<"u"},Mo=function(e){return xt(e)||Ft(e)},wf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yt=Array.isArray,$l=/(?:-?\.?\d|\.)+/gi,Af=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cf=/[+-]=-?[.\d]+/,Pf=/[^,'"\[\]\s]+/gi,Bp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,In,jl,Uc,Pn={},_a={},Rf,Lf=function(e){return(_a=Er(e,Pn))&&mn},Oc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},va=function(e,t){return!t&&console.warn(e)},Df=function(e,t){return e&&(Pn[e]=t)&&_a&&(_a[e]=t)||Pn},io=function(){return 0},kp={suppressEvents:!0,isStart:!0,kill:!1},sa={suppressEvents:!0,kill:!1},Gp={suppressEvents:!0},Nc={},Vi=[],Kl={},If,yn={},Ya={},du=30,oa=[],Fc="",zc=function(e){var t=e[0],n,i;if(di(t)||xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=oa.length;i--&&!oa[i].targetTest(t););n=oa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ih(e[i],n)))||e.splice(i,1);return e},pr=function(e){return e._gsap||zc(zn(e))[0]._gsap},Uf=function(e,t,n){return(n=e[t])&&xt(n)?e[t]():Dc(n)&&e.getAttribute&&e.getAttribute(t)||n},un=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},as=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Hp=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},xa=function(){var e=Vi.length,t=Vi.slice(0),n,i;for(Kl={},Vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Of=function(e,t,n,i){Vi.length&&!qt&&xa(),e.render(t,n,i||qt&&t<0&&(e._initted||e._startAt)),Vi.length&&!qt&&xa()},Nf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Pf).length<2?t:Ft(e)?e.trim():e},Ff=function(e){return e},Gn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Vp=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Er=function(e,t){for(var n in t)e[n]=t[n];return e},fu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=di(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Sa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Xs=function(e){var t=e.parent||mt,n=e.keyframes?Vp(Yt(e.keyframes)):Gn;if(cn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Wp=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},zf=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Oa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Xp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zl=function(e,t,n,i){return e._startAt&&(qt?e._startAt.revert(sa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},qp=function r(e){return!e||e._ts&&r(e.parent)},hu=function(e){return e._repeat?gs(e._tTime,e=e.duration()+e._rDelay)*e:0},gs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ma=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Na=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},Fa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Na(e),n._dirty||mr(n,e)),e},Bf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Ma(e.rawTime(),t),(!t._dur||mo(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},si=function(e,t,n,i){return t.parent&&Yi(t),t._start=Bt((Ci(n)?n:n||e!==mt?Dn(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),zf(e,t,"_first","_last",e._sort?"_start":0),Jl(t)||(e._recent=t),i||Bf(e,t),e._ts<0&&Fa(e,e._tTime),e},kf=function(e,t){return(Pn.ScrollTrigger||Oc("scrollTrigger",t))&&Pn.ScrollTrigger.create(t,e)},Gf=function(e,t,n,i,s){if(kc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&If!==wn.frame)return Vi.push(e),e._lazy=[s,i],1},Yp=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Jl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},$p=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Yp(e)&&!(!e._initted&&Jl(e))||(e._ts<0||e._dp._ts<0)&&!Jl(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=mo(0,e._tDur,t),u=gs(l,o),e._yoyo&&u&1&&(a=1-a),u!==gs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||qt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&Gf(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Zl(e,t,n,!0),e._onUpdate&&!n&&Bn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Yi(e,1),!n&&!qt&&(Bn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},jp=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},_s=function(e,t,n,i){var s=e._repeat,a=Bt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Bt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Fa(e,e._tTime=e._tDur*o),e.parent&&Na(e),n||mr(e.parent,e),e},pu=function(e){return e instanceof ln?mr(e):_s(e,e._dur)},Kp={_start:0,endTime:io,totalDuration:io},Dn=function r(e,t,n){var i=e.labels,s=e._recent||Kp,a=e.duration()>=Fn?s.endTime(!1):e._dur,o,l,c;return Ft(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Yt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},qs=function(e,t,n){var i=Ci(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=cn(l.vars.inherit)&&l.parent;a.immediateRender=cn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new At(t[0],a,t[s+1])},Zi=function(e,t){return e||e===0?t(e):t},mo=function(e,t,n){return n<e?e:n>t?t:n},Xt=function(e,t){return!Ft(e)||!(t=Bp.exec(e))?"":t[1]},Zp=function(e,t,n){return Zi(n,function(i){return mo(e,t,i)})},Ql=[].slice,Hf=function(e,t){return e&&di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&di(e[0]))&&!e.nodeType&&e!==In},Jp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ft(i)&&!t||Hf(i,1)?(s=n).push.apply(s,zn(i)):n.push(i)})||n},zn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):Ft(e)&&!n&&(jl||!vs())?Ql.call((t||Uc).querySelectorAll(e),0):Yt(e)?Jp(e,n):Hf(e)?Ql.call(e,0):e?[e]:[]},ec=function(e){return e=zn(e)[0]||va("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return zn(t,n.querySelectorAll?n:n===e?va("Invalid scope")||Uc.createElement("div"):e)}},Vf=function(e){return e.sort(function(){return .5-Math.random()})},Wf=function(e){if(xt(e))return e;var t=di(e)?e:{each:e},n=gr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return Ft(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(f,h,_){var m=(_||t).length,g=a[m],p,x,v,M,S,T,b,C,y;if(!g){if(y=t.grid==="auto"?0:(t.grid||[1,Fn])[1],!y){for(b=-Fn;b<(b=_[y++].getBoundingClientRect().left)&&y<m;);y--}for(g=a[m]=[],p=l?Math.min(y,m)*u-.5:i%y,x=y===Fn?0:l?m*d/y-.5:i/y|0,b=0,C=Fn,T=0;T<m;T++)v=T%y-p,M=x-(T/y|0),g[T]=S=c?Math.abs(c==="y"?M:v):bf(v*v+M*M),S>b&&(b=S),S<C&&(C=S);i==="random"&&Vf(g),g.max=b-C,g.min=C,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(y>m?m-1:c?c==="y"?m/y:y:Math.max(y,m/y))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Xt(t.amount||t.each)||0,n=n&&m<0?eh(n):n}return m=(g[f]-g.min)/g.max||0,Bt(g.b+(n?n(m):m)*g.v)+g.u}},tc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ci(n)?0:Xt(n))}},Xf=function(e,t){var n=Yt(e),i,s;return!n&&di(e)&&(i=n=e.radius||Fn,e.values?(e=zn(e.values),(s=!Ci(e[0]))&&(i*=i)):e=tc(e.increment)),Zi(t,n?xt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Fn,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:a,s||u===a||Ci(a)?u:u+Xt(a)}:tc(e))},qf=function(e,t,n,i){return Zi(Yt(e)?!t:n===!0?!!(n=0):!i,function(){return Yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Qp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},em=function(e,t){return function(n){return e(parseFloat(n))+(t||Xt(n))}},tm=function(e,t,n){return $f(e,t,0,1,n)},Yf=function(e,t,n){return Zi(n,function(i){return e[~~t(i)]})},nm=function r(e,t,n){var i=t-e;return Yt(e)?Yf(e,r(0,e.length),t):Zi(n,function(s){return(i+(s-e)%i)%i+e})},im=function r(e,t,n){var i=t-e,s=i*2;return Yt(e)?Yf(e,r(0,e.length-1),t):Zi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ro=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Pf:$l),n+=e.substr(t,i-t)+qf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},$f=function(e,t,n,i,s){var a=t-e,o=i-n;return Zi(s,function(l){return n+((l-e)/a*o||0)})},rm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=Ft(e),o={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Yt(e)&&!Yt(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var m=Math.min(f,~~_);return u[m](_-m)},n=t}else i||(e=Er(Yt(e)?[]:{},e));if(!u){for(l in t)Bc.call(o,e,l,"get",t[l]);s=function(_){return Vc(_,o)||(a?e.p:e)}}}return Zi(n,s)},mu=function(e,t,n){var i=e.labels,s=Fn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Bn=function(e,t,n){var i=e.vars,s=i[t],a=bt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Vi.length&&xa(),o&&(bt=o),u=l?s.apply(c,l):s.call(c),bt=a,u},zs=function(e){return Yi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&Bn(e,"onInterrupt"),e},is,jf=[],Kf=function(e){if(!Ic()){jf.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:io,render:Vc,add:Bc,kill:Sm,modifier:xm,rawVars:0},a={targetTest:0,get:0,getSetter:Hc,aliases:{},register:0};if(vs(),e!==i){if(yn[t])return;Gn(i,Gn(Sa(e,s),a)),Er(i.prototype,Er(s,Sa(e,a))),yn[i.prop=t]=i,e.targetTest&&(oa.push(i),Nc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Df(t,i),e.register&&e.register(mn,i,dn)},lt=255,Bs={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},$a=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},Zf=function(e,t,n){var i=e?Ci(e)?[e>>16,e>>8&lt,e&lt]:0:Bs.black,s,a,o,l,c,u,d,f,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Bs[e])i=Bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match($l),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=$a(l+1/3,s,a),i[1]=$a(l,s,a),i[2]=$a(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Af),n&&i.length<4&&(i[3]=1),i}else i=e.match($l)||Bs.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/lt,a=i[1]/lt,o=i[2]/lt,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Jf=function(e){var t=[],n=[],i=-1;return e.split(Wi).forEach(function(s){var a=s.match(ns)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},gu=function(e,t,n){var i="",s=(e+i).match(Wi),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=Zf(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Jf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Wi,"1").split(ns),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Wi),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Wi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Bs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),sm=/hsl[a]?\(/,Qf=function(e){var t=e.join(" "),n;if(Wi.lastIndex=0,Wi.test(t))return n=sm.test(t),e[1]=gu(e[1],n),e[0]=gu(e[0],n,Jf(e[1])),!0},so,wn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,_=function m(g){var p=r()-i,x=g===!0,v,M,S,T;if(p>e&&(n+=p-t),i+=p,S=i-n,v=S-a,(v>0||x)&&(T=++d.frame,f=S-d.time*1e3,d.time=S=S/1e3,a+=v+(v>=s?4:s-v),M=1),x||(l=c(m)),M)for(h=0;h<o.length;h++)o[h](S,f,T,g)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Rf&&(!jl&&Ic()&&(In=jl=window,Uc=In.document||{},Pn.gsap=mn,(In.gsapVersions||(In.gsapVersions=[])).push(mn.version),Lf(_a||In.GreenSockGlobals||!In.gsap&&In||{}),u=In.requestAnimationFrame,jf.forEach(Kf)),l&&d.sleep(),c=u||function(g){return setTimeout(g,a-d.time*1e3+1|0)},so=1,_(2))},sleep:function(){(u?In.cancelAnimationFrame:clearTimeout)(l),so=0,c=io},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),a=d.time*1e3+s},add:function(g,p,x){var v=p?function(M,S,T,b){g(M,S,T,b),d.remove(v)}:g;return d.remove(g),o[x?"unshift":"push"](v),vs(),v},remove:function(g,p){~(p=o.indexOf(g))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},d}(),vs=function(){return!so&&wn.wake()},et={},om=/^[\d.\-M][\d.\-,\s]/,am=/["']/g,lm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(am,"").trim():+c,i=l.substr(o+1).trim();return t},cm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},um=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[lm(t[1])]:cm(e).split(",").map(Nf)):et._CE&&om.test(e)?et._CE("",e):n},eh=function(e){return function(t){return 1-e(1-t)}},th=function r(e,t){for(var n=e._first,i;n;)n instanceof ln?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},gr=function(e,t){return e&&(xt(e)?e:et[e]||um(e))||t},Rr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return un(e,function(o){et[o]=Pn[o]=s,et[a=o.toLowerCase()]=n;for(var l in s)et[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[o+"."+l]=s[l]}),s},nh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ja=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Yl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*zp((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:nh(o);return s=Yl/s,l.config=function(c,u){return r(e,c,u)},l},Ka=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:nh(n);return i.config=function(s){return r(e,s)},i};un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Rr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;Rr("Elastic",ja("in"),ja("out"),ja());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Rr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Rr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Rr("Circ",function(r){return-(bf(1-r*r)-1)});Rr("Sine",function(r){return r===1?1:-Fp(r*Op)+1});Rr("Back",Ka("in"),Ka("out"),Ka());et.SteppedEase=et.steps=Pn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ct;return function(o){return((i*mo(0,a,o)|0)+s)*n}}};ms.ease=et["quad.out"];un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Fc+=r+","+r+"Params,"});var ih=function(e,t){this.id=Np++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Uf,this.set=t?t.getSetter:Hc},xs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_s(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),so||wn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_s(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fa(this,n),!s._dp||s.parent||Bf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Of(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?gs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(mo(-Math.abs(this._delay),this._tDur,i),!0),Na(this),Xp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&si(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ma(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Gp);var i=qt;return qt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),qt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,pu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Dn(this,n),cn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,cn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ct)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=xt(n)?n:Ff,o=function(){var c=i.then;i.then=null,xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){zs(this)},r}();Gn(xs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var ln=function(r){Tf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=cn(n.sortChildren),mt&&si(n.parent||mt,Mi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kf(Mi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return qs(0,arguments,this),this},t.from=function(i,s,a){return qs(1,arguments,this),this},t.fromTo=function(i,s,a,o){return qs(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Xs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new At(i,s,Dn(this,a),1),this},t.call=function(i,s,a){return si(this,At.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new At(i,a,Dn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Xs(a).immediateRender=cn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,Xs(o).immediateRender=cn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Bt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,_,m,g,p,x,v,M,S,T,b;if(this!==mt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,v=this._ts,p=!v,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,a);if(f=Bt(u%g),u===l?(m=this._repeat,f=c):(m=~~(u/g),m&&m===u/g&&(f=c,m--),f>c&&(f=c)),S=gs(this._tTime,g),!o&&this._tTime&&S!==m&&this._tTime-S*g-this._dur<=0&&(S=m),T&&m&1&&(f=c-f,b=1),m!==S&&!this._lock){var C=T&&S&1,y=C===(T&&m&1);if(m<S&&(C=!C),o=C?0:c,this._lock=1,this.render(o||(b?0:Bt(m*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;th(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=jp(this,Bt(o),Bt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!m&&(Bn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=-ct);break}}h=_}else{h=this._last;for(var E=i<0?i:f;h;){if(_=h._prev,(h._act||E<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(E-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(E-h._start)*h._ts,s,a||qt&&(h._initted||h._startAt)),f!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=E?-ct:ct);break}}h=_}}if(x&&!s&&(this.pause(),x.render(f>=o?0:-ct)._zTime=f>=o?1:-1,this._ts))return this._start=M,Na(this),this.render(i,s,a);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Bn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Ci(s)||(s=Dn(this,s,i)),!(i instanceof xs)){if(Yt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ft(i))return this.addLabel(i,s);if(xt(i))i=At.delayedCall(0,i);else return this}return this!==i?si(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Fn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof At?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Ft(i)?this.removeLabel(i):xt(i)?this.killTweensOf(i):(Oa(this,i),i===this._recent&&(this._recent=this._last),mr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(wn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Dn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=At.delayedCall(0,s||io,a);return o.data="isPause",this._hasPause=1,si(this,o,Dn(this,i))},t.removePause=function(i){var s=this._first;for(i=Dn(this,i);s;)s._start===i&&s.data==="isPause"&&Yi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ni!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=zn(i),l=this._first,c=Ci(s),u;l;)l instanceof At?Hp(l._targets,o)&&(c?(!Ni||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Dn(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=At.to(a,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!h){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==g&&_s(_,g,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Gn({startAt:{time:Dn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),mu(this,Dn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),mu(this,Dn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return mr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Fn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,si(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;_s(a,a===mt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(mt._ts&&(Of(mt,Ma(i,mt)),If=wn.frame),wn.frame>=du){du+=Cn.autoSleep||120;var s=mt._first;if((!s||!s._ts)&&Cn.autoSleep&&wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||wn.sleep()}}},e}(xs);Gn(ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var dm=function(e,t,n,i,s,a,o){var l=new dn(this._pt,e,t,0,1,ch,null,s),c=0,u=0,d,f,h,_,m,g,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ro(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),f=n.match(qa)||[];d=qa.exec(i);)_=d[0],m=i.substring(c,d.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:_.charAt(1)==="="?as(g,_)-g:parseFloat(_)-g,m:h&&h<4?Math.round:0},c=qa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Cf.test(i)||p)&&(l.e=0),this._pt=l,l},Bc=function(e,t,n,i,s,a,o,l,c,u){xt(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:xt(d)?c?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=xt(d)?c?gm:ah:Gc,_;if(Ft(i)&&(~i.indexOf("random(")&&(i=ro(i)),i.charAt(1)==="="&&(_=as(f,i)+(Xt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||nc)return!isNaN(f*i)&&i!==""?(_=new dn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?vm:lh,0,h),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&Oc(t,i),dm.call(this,e,t,f,i,h,l||Cn.stringFilter,c))},fm=function(e,t,n,i,s){if(xt(e)&&(e=Ys(e,s,t,n,i)),!di(e)||e.style&&e.nodeType||Yt(e)||wf(e))return Ft(e)?Ys(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ys(e[o],s,t,n,i);return a},rh=function(e,t,n,i,s,a){var o,l,c,u;if(yn[e]&&(o=new yn[e]).init(s,o.rawVars?t[e]:fm(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new dn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==is))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ni,nc,kc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,d=i.callbackScope,f=i.runBackwards,h=i.yoyoEase,_=i.keyframes,m=i.autoRevert,g=e._dur,p=e._startAt,x=e._targets,v=e.parent,M=v&&v.data==="nested"?v.vars.targets:x,S=e._overwrite==="auto"&&!Lc,T=e.timeline,b,C,y,E,I,D,P,O,z,W,H,V,Q;if(T&&(!_||!s)&&(s="none"),e._ease=gr(s,ms.ease),e._yEase=h?eh(gr(h===!0?s:h,ms.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!T&&!!i.runBackwards,!T||_&&!i.stagger){if(O=x[0]?pr(x[0]).harness:0,V=O&&i[O.prop],b=Sa(i,Nc),p&&(p._zTime<0&&p.progress(1),t<0&&f&&o&&!m?p.render(-1,!0):p.revert(f&&g?sa:kp),p._lazy=0),a){if(Yi(e._startAt=At.set(x,Gn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&cn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:d,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!o&&!m)&&e._startAt.revert(sa),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&g&&!p){if(t&&(o=!1),y=Gn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&cn(l),immediateRender:o,stagger:0,parent:v},b),V&&(y[O.prop]=V),Yi(e._startAt=At.set(x,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(sa):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&cn(l)||l&&!g,C=0;C<x.length;C++){if(I=x[C],P=I._gsap||zc(x)[C]._gsap,e._ptLookup[C]=W={},Kl[P.id]&&Vi.length&&xa(),H=M===x?C:M.indexOf(I),O&&(z=new O).init(I,V||b,e,H,M)!==!1&&(e._pt=E=new dn(e._pt,I,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(L){W[L]=E}),z.priority&&(D=1)),!O||V)for(y in b)yn[y]&&(z=rh(y,b,e,H,I,M))?z.priority&&(D=1):W[y]=E=Bc.call(e,I,y,"get",b[y],H,M,0,i.stringFilter);e._op&&e._op[C]&&e.kill(I,e._op[C]),S&&e._pt&&(Ni=e,mt.killTweensOf(I,W,e.globalTime(t)),Q=!e.parent,Ni=0),e._pt&&l&&(Kl[P.id]=1)}D&&uh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,_&&t<=0&&T.render(Fn,!0,!0)},hm=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(c=d[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return nc=1,e.vars[t]="+=0",kc(e,o),nc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=yt(n)+Xt(u.e)),u.b&&(u.b=c.s+Xt(u.b))},pm=function(e,t){var n=e[0]?pr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Er({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},mm=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Yt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ys=function(e,t,n,i,s){return xt(e)?e.call(t,n,i,s):Ft(e)&&~e.indexOf("random(")?ro(e):e},sh=Fc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",oh={};un(sh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return oh[r]=1});var At=function(r){Tf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Xs(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,x=i.parent||mt,v=(Yt(n)||wf(n)?Ci(n[0]):"length"in i)?[n]:zn(n),M,S,T,b,C,y,E,I;if(o._targets=v.length?zc(v):va("GSAP target "+n+" not found. https://greensock.com",!Cn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,_||f||Mo(c)||Mo(u)){if(i=o.vars,M=o.timeline=new ln({data:"nested",defaults:m||{},targets:x&&x.data==="nested"?x.vars.targets:v}),M.kill(),M.parent=M._dp=Mi(o),M._start=0,f||Mo(c)||Mo(u)){if(b=v.length,E=f&&Wf(f),di(f))for(C in f)~sh.indexOf(C)&&(I||(I={}),I[C]=f[C]);for(S=0;S<b;S++)T=Sa(i,oh),T.stagger=0,p&&(T.yoyoEase=p),I&&Er(T,I),y=v[S],T.duration=+Ys(c,Mi(o),S,y,v),T.delay=(+Ys(u,Mi(o),S,y,v)||0)-o._delay,!f&&b===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),M.to(y,T,E?E(S,y,v):0),M._ease=et.none;M.duration()?c=u=0:o.timeline=0}else if(_){Xs(Gn(M.vars.defaults,{ease:"none"})),M._ease=gr(_.ease||i.ease||"none");var D=0,P,O,z;if(Yt(_))_.forEach(function(W){return M.to(v,W,">")}),M.duration();else{T={};for(C in _)C==="ease"||C==="easeEach"||mm(C,_[C],T,_.easeEach);for(C in T)for(P=T[C].sort(function(W,H){return W.t-H.t}),D=0,S=0;S<P.length;S++)O=P[S],z={ease:O.e,duration:(O.t-(S?P[S-1].t:0))/100*c},z[C]=O.v,M.to(v,z,D),D+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return h===!0&&!Lc&&(Ni=Mi(o),mt.killTweensOf(v),Ni=0),si(x,Mi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===Bt(x._time)&&cn(d)&&qp(Mi(o))&&x.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-u)||0)),g&&kf(Mi(o),g),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-ct&&!u?l:i<ct?0:i,f,h,_,m,g,p,x,v,M;if(!c)$p(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=d,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,s,a);if(f=Bt(d%m),d===l?(_=this._repeat,f=c):(_=~~(d/m),_&&_===d/m&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(M=this._yEase,f=c-f),g=gs(this._tTime,m),f===o&&!a&&this._initted)return this._tTime=d,this;_!==g&&(v&&this._yEase&&th(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(Bt(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Gf(this,u?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!o&&!s&&!_&&(Bn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;v&&v.render(i<0?i:!f&&p?-ct:v._dur*v._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Zl(this,i,s,a),Bn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Zl(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Yi(this,1),!s&&!(u&&!o)&&(d||o||p)&&(Bn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){so||wn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||kc(this,l),c=this._ease(l/this._dur),hm(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(Fa(this,0),this.parent||zf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?zs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ni&&Ni.vars.overwrite!==!0)._first||zs(this),this.parent&&a!==this.timeline.totalDuration()&&_s(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?zn(i):o,c=this._ptLookup,u=this._pt,d,f,h,_,m,g,p;if((!s||s==="all")&&Wp(o,l))return s==="all"&&(this._pt=0),zs(this);for(d=this._op=this._op||[],s!=="all"&&(Ft(s)&&(m={},un(s,function(x){return m[x]=1}),s=m),s=pm(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(d[p]=s,_=f,h={}):(h=d[p]=d[p]||{},_=s);for(m in _)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Oa(this,g,"_pt"),delete f[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&zs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return qs(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return qs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return mt.killTweensOf(i,s,a)},e}(xs);Gn(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});un("staggerTo,staggerFrom,staggerFromTo",function(r){At[r]=function(){var e=new ln,t=Ql.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Gc=function(e,t,n){return e[t]=n},ah=function(e,t,n){return e[t](n)},gm=function(e,t,n,i){return e[t](i.fp,n)},_m=function(e,t,n){return e.setAttribute(t,n)},Hc=function(e,t){return xt(e[t])?ah:Dc(e[t])&&e.setAttribute?_m:Gc},lh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},vm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ch=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Vc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},xm=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Sm=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Oa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Mm=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},uh=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},dn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||lh,this.d=l||this,this.set=c||Gc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Mm,this.m=n,this.mt=s,this.tween=i},r}();un(Fc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Nc[r]=1});Pn.TweenMax=Pn.TweenLite=At;Pn.TimelineLite=Pn.TimelineMax=ln;mt=new ln({sortChildren:!1,defaults:ms,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Cn.stringFilter=Qf;var Ss=[],aa={},ym=[],_u=0,Za=function(e){return(aa[e]||ym).map(function(t){return t()})},ic=function(){var e=Date.now(),t=[];e-_u>2&&(Za("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=In.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Za("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),_u=e,Za("matchMedia"))},dh=function(){function r(t,n){this.selector=n&&ec(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){xt(n)&&(s=i,i=n,n=xt);var a=this,o=function(){var c=bt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=ec(s)),bt=a,d=i.apply(a,arguments),xt(d)&&a._r.push(d),bt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===xt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=bt;bt=null,n(this),bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof At&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof xs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Ss.indexOf(this);~o&&Ss.splice(o,1)}},e.revert=function(n){this.kill(n||{})},r}(),Em=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){di(n)||(n={matches:n});var a=new dh(0,s||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=In.matchMedia(n[c]),l&&(Ss.indexOf(a)<0&&Ss.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ic):l.addEventListener("change",ic)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ya={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Kf(i)})},timeline:function(e){return new ln(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ft(e)&&(e=zn(e)[0]);var s=pr(e||{}).get,a=n?Ff:Nf;return n==="native"&&(n=""),e&&(t?a((yn[t]&&yn[t].get||s)(e,t,n,i)):function(o,l,c){return a((yn[o]&&yn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=zn(e),e.length>1){var i=e.map(function(u){return mn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=yn[t],o=pr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;is._pt=0,d.init(e,n?u+n:u,is,0,[e]),d.render(1,d),is._pt&&Vc(1,is)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=mn.to(e,Er((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gr(e.ease,ms.ease)),fu(ms,e||{})},config:function(e){return fu(Cn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!yn[o]&&!Pn[o]&&va(t+" effect requires "+o+" plugin.")}),Ya[t]=function(o,l,c){return n(zn(o),Gn(l||{},s),c)},a&&(ln.prototype[t]=function(o,l,c){return this.add(Ya[t](o,di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){et[e]=gr(t)},parseEase:function(e,t){return arguments.length?gr(e,t):et},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ln(e),i,s;for(n.smoothChildTiming=cn(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof At&&i.vars.onComplete===i._targets[0]))&&si(n,i,i._start-i._delay),i=s;return si(mt,n,0),n},context:function(e,t){return e?new dh(e,t):bt},matchMedia:function(e){return new Em(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ic()},addEventListener:function(e,t){var n=aa[e]||(aa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=aa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:nm,wrapYoyo:im,distribute:Wf,random:qf,snap:Xf,normalize:tm,getUnit:Xt,clamp:Zp,splitColor:Zf,toArray:zn,selector:ec,mapRange:$f,pipe:Qp,unitize:em,interpolate:rm,shuffle:Vf},install:Lf,effects:Ya,ticker:wn,updateRoot:ln.updateRoot,plugins:yn,globalTimeline:mt,core:{PropTween:dn,globals:Df,Tween:At,Timeline:ln,Animation:xs,getCache:pr,_removeLinkedListItem:Oa,reverting:function(){return qt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return Lc=e}}};un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ya[r]=At[r]});wn.add(ln.updateRoot);is=ya.to({},{duration:0});var Tm=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},bm=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Tm(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ja=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ft(s)&&(l={},un(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}bm(o,s)}}}},mn=ya.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ja("roundProps",tc),Ja("modifiers"),Ja("snap",Xf))||ya;At.version=ln.version=mn.version="3.11.5";Rf=1;Ic()&&vs();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vu,Fi,ls,Wc,ur,xu,Xc,wm=function(){return typeof window<"u"},Pi={},sr=180/Math.PI,cs=Math.PI/180,Dr=Math.atan2,Su=1e8,qc=/([A-Z])/g,Am=/(left|right|width|margin|padding|x)/i,Cm=/[\s,\(]\S/,oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Pm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Rm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Lm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},fh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Dm=function(e,t,n){return e.style[t]=n},Im=function(e,t,n){return e.style.setProperty(t,n)},Um=function(e,t,n){return e._gsap[t]=n},Om=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Nm=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Fm=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},gt="transform",ei=gt+"Origin",zm=function r(e,t){var n=this,i=this.target,s=i.style;if(e in Pi){if(this.tfm=this.tfm||{},e!=="transform")e=oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=yi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:yi(i,e);else return oi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(gt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ei,t,"")),e=gt}(s||t)&&this.props.push(e,t,s[e])},ph=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Bm=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(qc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Xc(),(!s||!s.isStart)&&!n[gt]&&(ph(n),i.uncache=1)}},mh=function(e,t){var n={target:e,props:[],revert:Bm,save:zm};return e._gsap||mn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},gh,sc=function(e,t){var n=Fi.createElementNS?Fi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fi.createElement(e);return n.style?n:Fi.createElement(e)},ci=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(qc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ms(t)||t,1)||""},Mu="O,Moz,ms,Ms,Webkit".split(","),Ms=function(e,t,n){var i=t||ur,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Mu[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Mu[a]:"")+e},oc=function(){wm()&&window.document&&(vu=window,Fi=vu.document,ls=Fi.documentElement,ur=sc("div")||{style:{}},sc("div"),gt=Ms(gt),ei=gt+"Origin",ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gh=!!Ms("perspective"),Xc=mn.core.reverting,Wc=1)},Qa=function r(e){var t=sc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(ls.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ls.removeChild(t),this.style.cssText=s,a},yu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_h=function(e){var t;try{t=e.getBBox()}catch{t=Qa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Qa||(t=Qa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+yu(e,["x","cx","x1"])||0,y:+yu(e,["y","cy","y1"])||0,width:0,height:0}:t},vh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_h(e))},oo=function(e,t){if(t){var n=e.style;t in Pi&&t!==ei&&(t=gt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(qc,"-$1").toLowerCase())):n.removeAttribute(t)}},zi=function(e,t,n,i,s,a){var o=new dn(e._pt,t,n,0,1,a?hh:fh);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Eu={deg:1,rad:1,turn:1},km={grid:1,flex:1},$i=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ur.style,l=Am.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",_,m,g,p;return i===a||!s||Eu[i]||Eu[a]?s:(a!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&vh(e),(h||a==="%")&&(Pi[t]||~t.indexOf("adius"))?(_=p?e.getBBox()[l?"width":"height"]:e[u],yt(h?s/_*d:s/100*_)):(o[l?"width":"height"]=d+(f?a:i),m=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Fi||!m.appendChild)&&(m=Fi.body),g=m._gsap,g&&h&&g.width&&l&&g.time===wn.time&&!g.uncache?yt(s/g.width*d):((h||a==="%")&&!km[ci(m,"display")]&&(o.position=ci(e,"position")),m===e&&(o.position="static"),m.appendChild(ur),_=ur[u],m.removeChild(ur),o.position="absolute",l&&h&&(g=pr(m),g.time=wn.time,g.width=m[u]),yt(f?_*s/d:_&&s?d/_*s:0))))},yi=function(e,t,n,i){var s;return Wc||oc(),t in oi&&t!=="transform"&&(t=oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pi[t]&&t!=="transform"?(s=lo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ta(ci(e,ei))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ea[t]&&Ea[t](e,t,n)||ci(e,t)||Uf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?$i(e,t,s,n)+n:s},Gm=function(e,t,n,i){if(!n||n==="none"){var s=Ms(t,e,1),a=s&&ci(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ci(e,"borderTopColor"))}var o=new dn(this._pt,e.style,t,0,1,ch),l=0,c=0,u,d,f,h,_,m,g,p,x,v,M,S;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ci(e,t)||i,e.style[t]=n),u=[n,i],Qf(u),n=u[0],i=u[1],f=n.match(ns)||[],S=i.match(ns)||[],S.length){for(;d=ns.exec(i);)g=d[0],x=i.substring(l,d.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(m=f[c++]||"")&&(h=parseFloat(m)||0,M=m.substr((h+"").length),g.charAt(1)==="="&&(g=as(h,g)+M),p=parseFloat(g),v=g.substr((p+"").length),l=ns.lastIndex-v.length,v||(v=v||Cn.units[t]||M,l===i.length&&(i+=v,o.e+=v)),M!==v&&(h=$i(e,t,m,v)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:h,c:p-h,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?hh:fh;return Cf.test(i)&&(o.e=0),this._pt=o,o},Tu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hm=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Tu[n]||n,t[1]=Tu[i]||i,t.join(" ")},Vm=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Pi[o]&&(l=1,o=o==="transformOrigin"?ei:gt),oo(n,o);l&&(oo(n,gt),a&&(a.svg&&n.removeAttribute("transform"),lo(n,1),a.uncache=1,ph(i)))}},Ea={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new dn(e._pt,t,n,0,0,Vm);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ao=[1,0,0,1,0,0],xh={},Sh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bu=function(e){var t=ci(e,gt);return Sh(t)?ao:t.substr(7).match(Af).map(yt)},Yc=function(e,t){var n=e._gsap||pr(e),i=e.style,s=bu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ao:s):(s===ao&&!e.offsetParent&&e!==ls&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,ls.appendChild(e)),s=bu(e),l?i.display=l:oo(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ls.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ac=function(e,t,n,i,s,a){var o=e._gsap,l=s||Yc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],_=l[1],m=l[2],g=l[3],p=l[4],x=l[5],v=t.split(" "),M=parseFloat(v[0])||0,S=parseFloat(v[1])||0,T,b,C,y;n?l!==ao&&(b=h*g-_*m)&&(C=M*(g/b)+S*(-m/b)+(m*x-g*p)/b,y=M*(-_/b)+S*(h/b)-(h*x-_*p)/b,M=C,S=y):(T=_h(e),M=T.x+(~v[0].indexOf("%")?M/100*T.width:M),S=T.y+(~(v[1]||v[0]).indexOf("%")?S/100*T.height:S)),i||i!==!1&&o.smooth?(p=M-c,x=S-u,o.xOffset=d+(p*h+x*m)-p,o.yOffset=f+(p*_+x*g)-x):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ei]="0px 0px",a&&(zi(a,o,"xOrigin",c,M),zi(a,o,"yOrigin",u,S),zi(a,o,"xOffset",d,o.xOffset),zi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+S)},lo=function(e,t){var n=e._gsap||new ih(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ci(e,ei)||"0",u,d,f,h,_,m,g,p,x,v,M,S,T,b,C,y,E,I,D,P,O,z,W,H,V,Q,L,de,re,$,J,ae;return u=d=f=m=g=p=x=v=M=0,h=_=1,n.svg=!!(e.getCTM&&vh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),b=Yc(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),ac(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,b)),S=n.xOrigin||0,T=n.yOrigin||0,b!==ao&&(I=b[0],D=b[1],P=b[2],O=b[3],u=z=b[4],d=W=b[5],b.length===6?(h=Math.sqrt(I*I+D*D),_=Math.sqrt(O*O+P*P),m=I||D?Dr(D,I)*sr:0,x=P||O?Dr(P,O)*sr+m:0,x&&(_*=Math.abs(Math.cos(x*cs))),n.svg&&(u-=S-(S*I+T*P),d-=T-(S*D+T*O))):(ae=b[6],$=b[7],L=b[8],de=b[9],re=b[10],J=b[11],u=b[12],d=b[13],f=b[14],C=Dr(ae,re),g=C*sr,C&&(y=Math.cos(-C),E=Math.sin(-C),H=z*y+L*E,V=W*y+de*E,Q=ae*y+re*E,L=z*-E+L*y,de=W*-E+de*y,re=ae*-E+re*y,J=$*-E+J*y,z=H,W=V,ae=Q),C=Dr(-P,re),p=C*sr,C&&(y=Math.cos(-C),E=Math.sin(-C),H=I*y-L*E,V=D*y-de*E,Q=P*y-re*E,J=O*E+J*y,I=H,D=V,P=Q),C=Dr(D,I),m=C*sr,C&&(y=Math.cos(C),E=Math.sin(C),H=I*y+D*E,V=z*y+W*E,D=D*y-I*E,W=W*y-z*E,I=H,z=V),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),h=yt(Math.sqrt(I*I+D*D+P*P)),_=yt(Math.sqrt(W*W+ae*ae)),C=Dr(z,W),x=Math.abs(C)>2e-4?C*sr:0,M=J?1/(J<0?-J:J):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Sh(ci(e,gt)),H&&e.setAttribute("transform",H))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=yt(h),n.scaleY=yt(_),n.rotation=yt(m)+o,n.rotationX=yt(g)+o,n.rotationY=yt(p)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ei]=Ta(c)),n.xOffset=n.yOffset=0,n.force3D=Cn.force3D,n.renderTransform=n.svg?Xm:gh?Mh:Wm,n.uncache=0,n},Ta=function(e){return(e=e.split(" "))[0]+" "+e[1]},el=function(e,t,n){var i=Xt(t);return yt(parseFloat(t)+parseFloat($i(e,"x",n+"px",i)))+i},Wm=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Mh(e,t)},er="0deg",Rs="0px",tr=") ",Mh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,_=n.scaleX,m=n.scaleY,g=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,M="",S=p==="auto"&&e&&e!==1||p===!0;if(v&&(d!==er||u!==er)){var T=parseFloat(u)*cs,b=Math.sin(T),C=Math.cos(T),y;T=parseFloat(d)*cs,y=Math.cos(T),a=el(x,a,b*y*-v),o=el(x,o,-Math.sin(T)*-v),l=el(x,l,C*y*-v+v)}g!==Rs&&(M+="perspective("+g+tr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(S||a!==Rs||o!==Rs||l!==Rs)&&(M+=l!==Rs||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+tr),c!==er&&(M+="rotate("+c+tr),u!==er&&(M+="rotateY("+u+tr),d!==er&&(M+="rotateX("+d+tr),(f!==er||h!==er)&&(M+="skew("+f+", "+h+tr),(_!==1||m!==1)&&(M+="scale("+_+", "+m+tr),x.style[gt]=M||"translate(0, 0)"},Xm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,_=n.xOrigin,m=n.yOrigin,g=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(a),M=parseFloat(o),S,T,b,C,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=cs,c*=cs,S=Math.cos(l)*d,T=Math.sin(l)*d,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=cs,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,C*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),S*=y,T*=y)),S=yt(S),T=yt(T),b=yt(b),C=yt(C)):(S=d,C=f,T=b=0),(v&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(v=$i(h,"x",a,"px"),M=$i(h,"y",o,"px")),(_||m||g||p)&&(v=yt(v+_-(_*S+m*b)+g),M=yt(M+m-(_*T+m*C)+p)),(i||s)&&(y=h.getBBox(),v=yt(v+i/100*y.width),M=yt(M+s/100*y.height)),y="matrix("+S+","+T+","+b+","+C+","+v+","+M+")",h.setAttribute("transform",y),x&&(h.style[gt]=y)},qm=function(e,t,n,i,s){var a=360,o=Ft(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?sr:1),c=l-i,u=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Su)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Su)%a-~~(c/a)*a)),e._pt=f=new dn(e._pt,t,n,i,c,Pm),f.e=u,f.u="deg",e._props.push(n),f},wu=function(e,t){for(var n in t)e[n]=t[n];return e},Ym=function(e,t,n){var i=wu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gt]=t,o=lo(n,1),oo(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],a[gt]=t,o=lo(n,1),a[gt]=c);for(l in Pi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=Xt(c),_=Xt(u),d=h!==_?$i(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new dn(e._pt,o,l,d,f-d,rc),e._pt.u=_||0,e._props.push(l));wu(o,i)};un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Ea[e>1?"border"+r:r]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(_){return yi(o,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(_,m){return h[_]=f[m]=f[m]||f[(m-1)/2|0]}),o.init(l,h,d)}});var yh={name:"css",register:oc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,f,h,_,m,g,p,x,v,M,S,T,b,C;Wc||oc(),this.styles=this.styles||mh(e),C=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(yn[m]&&rh(m,t,n,i,e,s)))){if(h=typeof u,_=Ea[m],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ro(u)),_)_(this,e,m,u,n)&&(b=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Wi.lastIndex=0,Wi.test(c)||(g=Xt(c),p=Xt(u)),p?g!==p&&(c=$i(e,m,c,p)+p):g&&(u+=g),this.add(o,"setProperty",c,u,i,s,0,0,m),a.push(m),C.push(m,0,o[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,e,s):l[m],Ft(c)&&~c.indexOf("random(")&&(c=ro(c)),Xt(c+"")||(c+=Cn.units[m]||Xt(yi(e,m))||""),(c+"").charAt(1)==="="&&(c=yi(e,m))):c=yi(e,m),f=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),m in oi&&(m==="autoAlpha"&&(f===1&&yi(e,"visibility")==="hidden"&&d&&(f=0),C.push("visibility",0,o.visibility),zi(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=oi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in Pi,v){if(this.styles.save(m),M||(S=e._gsap,S.renderTransform&&!t.parseTransform||lo(e,t.parseTransform),T=t.smoothOrigin!==!1&&S.smooth,M=this._pt=new dn(this._pt,o,gt,0,1,S.renderTransform,S,0,-1),M.dep=1),m==="scale")this._pt=new dn(this._pt,S,"scaleY",S.scaleY,(x?as(S.scaleY,x+d):d)-S.scaleY||0,rc),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){C.push(ei,0,o[ei]),u=Hm(u),S.svg?ac(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&zi(this,S,"zOrigin",S.zOrigin,p),zi(this,o,m,Ta(c),Ta(u)));continue}else if(m==="svgOrigin"){ac(e,u,1,T,0,this);continue}else if(m in xh){qm(this,S,m,f,x?as(f,x+u):u);continue}else if(m==="smoothOrigin"){zi(this,S,"smooth",S.smooth,u);continue}else if(m==="force3D"){S[m]=u;continue}else if(m==="transform"){Ym(this,u,e);continue}}else m in o||(m=Ms(m)||m);if(v||(d||d===0)&&(f||f===0)&&!Cm.test(u)&&m in o)g=(c+"").substr((f+"").length),d||(d=0),p=Xt(u)||(m in Cn.units?Cn.units[m]:g),g!==p&&(f=$i(e,m,c,p)),this._pt=new dn(this._pt,v?S:o,m,f,(x?as(f,x+d):d)-f,!v&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?Lm:rc),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Rm);else if(m in o)Gm.call(this,e,m,c,x?x+u:u);else if(m in e)this.add(e,m,c||e[m],x?x+u:u,i,s);else if(m!=="parseTransform"){Oc(m,u);continue}v||(m in o?C.push(m,0,o[m]):C.push(m,1,c||e[m])),a.push(m)}}b&&uh(this)},render:function(e,t){if(t.tween._time||!Xc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:yi,aliases:oi,getSetter:function(e,t,n){var i=oi[t];return i&&i.indexOf(",")<0&&(t=i),t in Pi&&t!==ei&&(e._gsap.x||yi(e,"x"))?n&&xu===n?t==="scale"?Om:Um:(xu=n||{})&&(t==="scale"?Nm:Fm):e.style&&!Dc(e.style[t])?Dm:~t.indexOf("-")?Im:Hc(e,t)},core:{_removeProperty:oo,_getMatrix:Yc}};mn.utils.checkPrefix=Ms;mn.core.getStyleSaver=mh;(function(r,e,t,n){var i=un(r+","+e+","+t,function(s){Pi[s]=1});un(e,function(s){Cn.units[s]="deg",xh[s]=1}),oi[i[13]]=r+","+e,un(n,function(s){var a=s.split(":");oi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Cn.units[r]="px"});mn.registerPlugin(yh);var nt=mn.registerPlugin(yh)||mn;nt.core.Tween;function Au(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function $m(r,e,t){return e&&Au(r.prototype,e),t&&Au(r,t),r}/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kt,lc,An,Bi,ki,us,Eh,or,$s,Th,bi,Yn,bh,wh=function(){return kt||typeof window<"u"&&(kt=window.gsap)&&kt.registerPlugin&&kt},Ah=1,rs=[],Ke=[],ui=[],js=Date.now,cc=function(e,t){return t},jm=function(){var e=$s.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ke),i.push.apply(i,ui),Ke=n,ui=i,cc=function(a,o){return t[a](o)}},Xi=function(e,t){return~ui.indexOf(e)&&ui[ui.indexOf(e)+1][t]},Ks=function(e){return!!~Th.indexOf(e)},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Zt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},yo="scrollLeft",Eo="scrollTop",uc=function(){return bi&&bi.isPressed||Ke.cache++},ba=function(e,t){var n=function i(s){if(s||s===0){Ah&&(An.history.scrollRestoration="manual");var a=bi&&bi.isPressed;s=i.v=Math.round(s)||(bi&&bi.iOS?1:0),e(s),i.cacheID=Ke.cache,a&&cc("ss",s)}else(t||Ke.cache!==i.cacheID||cc("ref"))&&(i.cacheID=Ke.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},rn={s:yo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ba(function(r){return arguments.length?An.scrollTo(r,Ct.sc()):An.pageXOffset||Bi[yo]||ki[yo]||us[yo]||0})},Ct={s:Eo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:rn,sc:ba(function(r){return arguments.length?An.scrollTo(rn.sc(),r):An.pageYOffset||Bi[Eo]||ki[Eo]||us[Eo]||0})},an=function(e){return kt.utils.toArray(e)[0]||(typeof e=="string"&&kt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ji=function(e,t){var n=t.s,i=t.sc;Ks(e)&&(e=Bi.scrollingElement||ki);var s=Ke.indexOf(e),a=i===Ct.sc?1:2;!~s&&(s=Ke.push(e)-1),Ke[s+a]||e.addEventListener("scroll",uc);var o=Ke[s+a],l=o||(Ke[s+a]=ba(Xi(e,n),!0)||(Ks(e)?i:ba(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=kt.getProperty(e,"scrollBehavior")==="smooth"),l},dc=function(e,t,n){var i=e,s=e,a=js(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,m){var g=js();m||g-a>l?(s=i,i=_,o=a,a=g):n?i+=_:i=s+(_-s)/(g-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(_){var m=o,g=s,p=js();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?g:-g))/((n?p:a)-m)*1e3};return{update:u,reset:d,getVelocity:f}},Ls=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Cu=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Ch=function(){$s=kt.core.globals().ScrollTrigger,$s&&$s.core&&jm()},Ph=function(e){return kt=e||wh(),kt&&typeof document<"u"&&document.body&&(An=window,Bi=document,ki=Bi.documentElement,us=Bi.body,Th=[An,Bi,ki,us],kt.utils.clamp,bh=kt.core.context||function(){},or="onpointerenter"in us?"pointer":"mouse",Eh=wt.isTouch=An.matchMedia&&An.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in An||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yn=wt.eventTypes=("ontouchstart"in ki?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ki?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ah=0},500),Ch(),lc=1),lc};rn.op=Ct;Ke.cache=0;var wt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){lc||Ph(kt)||console.warn("Please gsap.registerPlugin(Observer)"),$s||Ch();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,m=n.event,g=n.onDragStart,p=n.onDragEnd,x=n.onDrag,v=n.onPress,M=n.onRelease,S=n.onRight,T=n.onLeft,b=n.onUp,C=n.onDown,y=n.onChangeX,E=n.onChangeY,I=n.onChange,D=n.onToggleX,P=n.onToggleY,O=n.onHover,z=n.onHoverEnd,W=n.onMove,H=n.ignoreCheck,V=n.isNormalizer,Q=n.onGestureStart,L=n.onGestureEnd,de=n.onWheel,re=n.onEnable,$=n.onDisable,J=n.onClick,ae=n.scrollSpeed,oe=n.capture,N=n.allowClicks,Ce=n.lockAxis,Ie=n.onLockAxis;this.target=o=an(o)||ki,this.vars=n,h&&(h=kt.utils.toArray(h)),i=i||1e-9,s=s||0,_=_||1,ae=ae||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(An.getComputedStyle(us).lineHeight)||22);var le,we,xe,ge,Ue,it,qe,Y=this,st=0,Re=0,Je=ji(o,rn),ft=ji(o,Ct),R=Je(),w=ft(),K=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Yn[0]==="pointerdown",ie=Ks(o),te=o.ownerDocument||Bi,ce=[0,0,0],U=[0,0,0],ee=0,X=function(){return ee=js()},ue=function(_e,se){return(Y.event=_e)&&h&&~h.indexOf(_e.target)||se&&K&&_e.pointerType!=="touch"||H&&H(_e,se)},ve=function(){Y._vx.reset(),Y._vy.reset(),we.pause(),d&&d(Y)},Te=function(){var _e=Y.deltaX=Cu(ce),se=Y.deltaY=Cu(U),Ae=Math.abs(_e)>=i,Oe=Math.abs(se)>=i;I&&(Ae||Oe)&&I(Y,_e,se,ce,U),Ae&&(S&&Y.deltaX>0&&S(Y),T&&Y.deltaX<0&&T(Y),y&&y(Y),D&&Y.deltaX<0!=st<0&&D(Y),st=Y.deltaX,ce[0]=ce[1]=ce[2]=0),Oe&&(C&&Y.deltaY>0&&C(Y),b&&Y.deltaY<0&&b(Y),E&&E(Y),P&&Y.deltaY<0!=Re<0&&P(Y),Re=Y.deltaY,U[0]=U[1]=U[2]=0),(ge||xe)&&(W&&W(Y),xe&&(x(Y),xe=!1),ge=!1),it&&!(it=!1)&&Ie&&Ie(Y),Ue&&(de(Y),Ue=!1),le=0},me=function(_e,se,Ae){ce[Ae]+=_e,U[Ae]+=se,Y._vx.update(_e),Y._vy.update(se),c?le||(le=requestAnimationFrame(Te)):Te()},ye=function(_e,se){Ce&&!qe&&(Y.axis=qe=Math.abs(_e)>Math.abs(se)?"x":"y",it=!0),qe!=="y"&&(ce[2]+=_e,Y._vx.update(_e,!0)),qe!=="x"&&(U[2]+=se,Y._vy.update(se,!0)),c?le||(le=requestAnimationFrame(Te)):Te()},Ne=function(_e){if(!ue(_e,1)){_e=Ls(_e,u);var se=_e.clientX,Ae=_e.clientY,Oe=se-Y.x,Ve=Ae-Y.y,Et=Y.isDragging;Y.x=se,Y.y=Ae,(Et||Math.abs(Y.startX-se)>=s||Math.abs(Y.startY-Ae)>=s)&&(x&&(xe=!0),Et||(Y.isDragging=!0),ye(Oe,Ve),Et||g&&g(Y))}},pe=Y.onPress=function(Fe){ue(Fe,1)||Fe&&Fe.button||(Y.axis=qe=null,we.pause(),Y.isPressed=!0,Fe=Ls(Fe),st=Re=0,Y.startX=Y.x=Fe.clientX,Y.startY=Y.y=Fe.clientY,Y._vx.reset(),Y._vy.reset(),on(V?o:te,Yn[1],Ne,u,!0),Y.deltaX=Y.deltaY=0,v&&v(Y))},ot=Y.onRelease=function(Fe){if(!ue(Fe,1)){Zt(V?o:te,Yn[1],Ne,!0);var _e=!isNaN(Y.y-Y.startY),se=Y.isDragging&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Ae=Ls(Fe);!se&&_e&&(Y._vx.reset(),Y._vy.reset(),u&&N&&kt.delayedCall(.08,function(){if(js()-ee>300&&!Fe.defaultPrevented){if(Fe.target.click)Fe.target.click();else if(te.createEvent){var Oe=te.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,An,1,Ae.screenX,Ae.screenY,Ae.clientX,Ae.clientY,!1,!1,!1,!1,0,null),Fe.target.dispatchEvent(Oe)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&!V&&we.restart(!0),p&&se&&p(Y),M&&M(Y,se)}},F=function(_e){return _e.touches&&_e.touches.length>1&&(Y.isGesturing=!0)&&Q(_e,Y.isDragging)},j=function(){return(Y.isGesturing=!1)||L(Y)},ne=function(_e){if(!ue(_e)){var se=Je(),Ae=ft();me((se-R)*ae,(Ae-w)*ae,1),R=se,w=Ae,d&&we.restart(!0)}},fe=function(_e){if(!ue(_e)){_e=Ls(_e,u),de&&(Ue=!0);var se=(_e.deltaMode===1?l:_e.deltaMode===2?An.innerHeight:1)*_;me(_e.deltaX*se,_e.deltaY*se,0),d&&!V&&we.restart(!0)}},be=function(_e){if(!ue(_e)){var se=_e.clientX,Ae=_e.clientY,Oe=se-Y.x,Ve=Ae-Y.y;Y.x=se,Y.y=Ae,ge=!0,(Oe||Ve)&&ye(Oe,Ve)}},tt=function(_e){Y.event=_e,O(Y)},je=function(_e){Y.event=_e,z(Y)},_t=function(_e){return ue(_e)||Ls(_e,u)&&J(Y)};we=Y._dc=kt.delayedCall(f||.25,ve).pause(),Y.deltaX=Y.deltaY=0,Y._vx=dc(0,50,!0),Y._vy=dc(0,50,!0),Y.scrollX=Je,Y.scrollY=ft,Y.isDragging=Y.isGesturing=Y.isPressed=!1,bh(this),Y.enable=function(Fe){return Y.isEnabled||(on(ie?te:o,"scroll",uc),a.indexOf("scroll")>=0&&on(ie?te:o,"scroll",ne,u,oe),a.indexOf("wheel")>=0&&on(o,"wheel",fe,u,oe),(a.indexOf("touch")>=0&&Eh||a.indexOf("pointer")>=0)&&(on(o,Yn[0],pe,u,oe),on(te,Yn[2],ot),on(te,Yn[3],ot),N&&on(o,"click",X,!1,!0),J&&on(o,"click",_t),Q&&on(te,"gesturestart",F),L&&on(te,"gestureend",j),O&&on(o,or+"enter",tt),z&&on(o,or+"leave",je),W&&on(o,or+"move",be)),Y.isEnabled=!0,Fe&&Fe.type&&pe(Fe),re&&re(Y)),Y},Y.disable=function(){Y.isEnabled&&(rs.filter(function(Fe){return Fe!==Y&&Ks(Fe.target)}).length||Zt(ie?te:o,"scroll",uc),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Zt(V?o:te,Yn[1],Ne,!0)),Zt(ie?te:o,"scroll",ne,oe),Zt(o,"wheel",fe,oe),Zt(o,Yn[0],pe,oe),Zt(te,Yn[2],ot),Zt(te,Yn[3],ot),Zt(o,"click",X,!0),Zt(o,"click",_t),Zt(te,"gesturestart",F),Zt(te,"gestureend",j),Zt(o,or+"enter",tt),Zt(o,or+"leave",je),Zt(o,or+"move",be),Y.isEnabled=Y.isPressed=Y.isDragging=!1,$&&$(Y))},Y.kill=Y.revert=function(){Y.disable();var Fe=rs.indexOf(Y);Fe>=0&&rs.splice(Fe,1),bi===Y&&(bi=0)},rs.push(Y),V&&Ks(o)&&(bi=Y),Y.enable(m)},$m(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();wt.version="3.11.5";wt.create=function(r){return new wt(r)};wt.register=Ph;wt.getAll=function(){return rs.slice()};wt.getById=function(r){return rs.filter(function(e){return e.vars.id===r})[0]};wh()&&kt.registerPlugin(wt);/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,Qr,Ze,pt,jn,vt,Rh,wa,Aa,ss,la,To,Wt,za,fc,Qt,Pu,Ru,es,Lh,tl,Dh,Sn,Ih,Uh,Oh,Oi,hc,$c,nl,bo=1,en=Date.now,il=en(),kn=0,ks=0,Km=function r(){return ks&&requestAnimationFrame(r)},Lu=function(){return za=1},Du=function(){return za=0},ii=function(e){return e},Gs=function(e){return Math.round(e*1e5)/1e5||0},Nh=function(){return typeof window<"u"},Fh=function(){return Pe||Nh()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},Tr=function(e){return!!~Rh.indexOf(e)},zh=function(e){return Xi(e,"getBoundingClientRect")||(Tr(e)?function(){return pa.width=Ze.innerWidth,pa.height=Ze.innerHeight,pa}:function(){return Ei(e)})},Zm=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Xi(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Ze["inner"+s]:e["client"+s])||0}},Jm=function(e,t){return!t||~ui.indexOf(e)?zh(e):function(){return pa}},Gi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Xi(e,n))?a()-zh(e)()[s]:Tr(e)?(jn[n]||vt[n])-(Ze["inner"+i]||jn["client"+i]||vt["client"+i]):e[n]-e["offset"+i])},wo=function(e,t){for(var n=0;n<es.length;n+=3)(!t||~t.indexOf(es[n+1]))&&e(es[n],es[n+1],es[n+2])},$n=function(e){return typeof e=="string"},sn=function(e){return typeof e=="function"},Hs=function(e){return typeof e=="number"},ca=function(e){return typeof e=="object"},Ds=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},rl=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ir=Math.abs,Bh="left",kh="top",jc="right",Kc="bottom",_r="width",vr="height",Zs="Right",Js="Left",Qs="Top",eo="Bottom",Mt="padding",On="margin",ys="Width",Zc="Height",zt="px",Zn=function(e){return Ze.getComputedStyle(e)},Qm=function(e){var t=Zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Iu=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ei=function(e,t){var n=t&&Zn(e)[fc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},pc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Gh=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},eg=function(e){return function(t){return Pe.utils.snap(Gh(e),t)}},Jc=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},tg=function(e){return function(t,n){return Jc(Gh(e))(t,n.direction)}},Ao=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Ut=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},It=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Co=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Uu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Po={toggleActions:"play",anticipatePin:0},Ca={top:0,left:0,center:.5,bottom:1,right:1},ua=function(e,t){if($n(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ca?Ca[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ro=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,_=pt.createElement("div"),m=Tr(n)||Xi(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=m?vt:n,x=e.indexOf("start")!==-1,v=x?c:u,M="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(M+=(i===Ct?jc:Kc)+":"+(a+parseFloat(f))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],da(_,0,i,x),_},da=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ys]=1,s["border"+o+ys]=0,s[n.p]=t+"px",Pe.set(e,s)},$e=[],mc={},co,Ou=function(){return en()-kn>34&&(co||(co=requestAnimationFrame(wi)))},Ur=function(){(!Sn||!Sn.isPressed||Sn.startX>vt.clientWidth)&&(Ke.cache++,Sn?co||(co=requestAnimationFrame(wi)):wi(),kn||wr("scrollStart"),kn=en())},sl=function(){Oh=Ze.innerWidth,Uh=Ze.innerHeight},Vs=function(){Ke.cache++,!Wt&&!Dh&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!Ih||Oh!==Ze.innerWidth||Math.abs(Ze.innerHeight-Uh)>Ze.innerHeight*.25)&&wa.restart(!0)},br={},ng=[],Hh=function r(){return It(ze,"scrollEnd",r)||dr(!0)},wr=function(e){return br[e]&&br[e].map(function(t){return t()})||ng},Mn=[],Vh=function(e){for(var t=0;t<Mn.length;t+=5)(!e||Mn[t+4]&&Mn[t+4].query===e)&&(Mn[t].style.cssText=Mn[t+1],Mn[t].getBBox&&Mn[t].setAttribute("transform",Mn[t+2]||""),Mn[t+3].uncache=1)},Qc=function(e,t){var n;for(Qt=0;Qt<$e.length;Qt++)n=$e[Qt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Vh(t),t||wr("revert")},Wh=function(e,t){Ke.cache++,(t||!En)&&Ke.forEach(function(n){return sn(n)&&n.cacheID++&&(n.rec=0)}),$n(e)&&(Ze.history.scrollRestoration=$c=e)},En,xr=0,Nu,ig=function(){if(Nu!==xr){var e=Nu=xr;requestAnimationFrame(function(){return e===xr&&dr(!0)})}},dr=function(e,t){if(kn&&!e){Ut(ze,"scrollEnd",Hh);return}En=ze.isRefreshing=!0,Ke.forEach(function(i){return sn(i)&&i.cacheID++&&(i.rec=i())});var n=wr("refreshInit");Lh&&ze.sort(),t||Qc(),Ke.forEach(function(i){sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$e.slice(0).forEach(function(i){return i.refresh()}),$e.forEach(function(i,s){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.refresh()}}),$e.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Gi(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ke.forEach(function(i){sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Wh($c,1),wa.pause(),xr++,En=2,wi(2),$e.forEach(function(i){return sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=ze.isRefreshing=!1,wr("refresh")},gc=0,fa=1,to,wi=function(e){if(!En||e===2){ze.isUpdating=!0,to&&to.update(0);var t=$e.length,n=en(),i=n-il>=50,s=t&&$e[0].scroll();if(fa=gc>s?-1:1,En||(gc=s),i&&(kn&&!za&&n-kn>200&&(kn=0,wr("scrollEnd")),la=il,il=n),fa<0){for(Qt=t;Qt-- >0;)$e[Qt]&&$e[Qt].update(0,i);fa=1}else for(Qt=0;Qt<t;Qt++)$e[Qt]&&$e[Qt].update(0,i);ze.isUpdating=!1}co=0},_c=[Bh,kh,Kc,jc,On+eo,On+Zs,On+Qs,On+Js,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ha=_c.concat([_r,vr,"boxSizing","max"+ys,"max"+Zc,"position",On,Mt,Mt+Qs,Mt+Zs,Mt+eo,Mt+Js]),rg=function(e,t,n){ds(n);var i=e._gsap;if(i.spacerIsNative)ds(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ol=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=_c.length,a=t.style,o=e.style,l;s--;)l=_c[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Kc]=o[jc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[_r]=pc(e,rn)+zt,a[vr]=pc(e,Ct)+zt,a[Mt]=o[On]=o[kh]=o[Bh]="0",ds(i),o[_r]=o["max"+ys]=n[_r],o[vr]=o["max"+Zc]=n[vr],o[Mt]=n[Mt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},sg=/([A-Z])/g,ds=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(sg,"-$1").toLowerCase())}},Lo=function(e){for(var t=ha.length,n=e.style,i=[],s=0;s<t;s++)i.push(ha[s],n[ha[s]]);return i.t=e,i},og=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},pa={left:0,top:0},Fu=function(e,t,n,i,s,a,o,l,c,u,d,f,h){sn(e)&&(e=e(l)),$n(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ua("0"+e.substr(3),n):0));var _=h?h.time():0,m,g,p;if(h&&h.seek(0),Hs(e))h&&(e=Pe.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&da(o,n,i,!0);else{sn(t)&&(t=t(l));var x=(e||"0").split(" "),v,M,S,T;p=an(t)||vt,v=Ei(p)||{},(!v||!v.left&&!v.top)&&Zn(p).display==="none"&&(T=p.style.display,p.style.display="block",v=Ei(p),T?p.style.display=T:p.style.removeProperty("display")),M=ua(x[0],v[i.d]),S=ua(x[1]||"0",n),e=v[i.p]-c[i.p]-u+M+s-S,o&&da(o,S,i,n-S<20||o._isStart&&S>20),n-=n-S}if(a){var b=e+n,C=a._isStart;m="scroll"+i.d2,da(a,b,i,C&&b>20||!C&&(d?Math.max(vt[m],jn[m]):a.parentNode[m])<=b+1),d&&(c=Ei(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+zt))}return h&&p&&(m=Ei(p),h.seek(f),g=Ei(p),h._caScrollDist=m[i.p]-g[i.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},ag=/(webkit|moz|length|cssText|inset)/i,zu=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===vt){e._stOrig=s.cssText,o=Zn(e);for(a in o)!+a&&!ag.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},Xh=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},Bu=function(e,t){var n=ji(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,_={};c=c||n();var m=Xh(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[i]=o,l.modifiers=_,_[i]=function(){return m(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Ke.cache++,wi()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=Pe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ut(e,"wheel",n.wheelHandler),ze.isTouch&&Ut(e,"touchmove",n.wheelHandler),s},ze=function(){function r(t,n){Qr||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ks){this.update=this.refresh=this.kill=ii;return}n=Iu($n(n)||Hs(n)||n.nodeType?{trigger:n}:n,Po);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,v=s.once,M=s.snap,S=s.pinReparent,T=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,y=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?rn:Ct,I=!d&&d!==0,D=an(n.scroller||Ze),P=Pe.core.getCache(D),O=Tr(D),z=("pinType"in n?n.pinType:Xi(D,"pinType")||O&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=I&&n.toggleActions.split(" "),V="markers"in n?n.markers:Po.markers,Q=O?0:parseFloat(Zn(D)["border"+E.p2+ys])||0,L=this,de=n.onRefreshInit&&function(){return n.onRefreshInit(L)},re=Zm(D,O,E),$=Jm(D,O),J=0,ae=0,oe=ji(D,E),N,Ce,Ie,le,we,xe,ge,Ue,it,qe,Y,st,Re,Je,ft,R,w,K,ie,te,ce,U,ee,X,ue,ve,Te,me,ye,Ne,pe,ot,F,j,ne,fe,be,tt,je;if(hc(L),L._dir=E,g*=45,L.scroller=D,L.scroll=b?b.time.bind(b):oe,le=oe(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Lh=1,n.refreshPriority===-9999&&(to=L)),P.tweenScroll=P.tweenScroll||{top:Bu(D,Ct),left:Bu(D,rn)},L.tweenTo=N=P.tweenScroll[E.p],L.scrubDuration=function(se){ot=Hs(se)&&se,ot?pe?pe.duration(se):pe=Pe.to(i,{ease:"expo",totalProgress:"+=0.001",duration:ot,paused:!0,onComplete:function(){return p&&p(L)}}):(pe&&pe.progress(1).kill(),pe=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(d),pe&&pe.resetTo&&pe.resetTo("totalProgress",0),ye=0,l||(l=i.vars.id)),$e.push(L),M&&((!ca(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in vt.style&&Pe.set(O?[vt,jn]:D,{scrollBehavior:"auto"}),Ke.forEach(function(se){return sn(se)&&se.target===(O?pt.scrollingElement||jn:D)&&(se.smooth=!1)}),Ie=sn(M.snapTo)?M.snapTo:M.snapTo==="labels"?eg(i):M.snapTo==="labelsDirectional"?tg(i):M.directional!==!1?function(se,Ae){return Jc(M.snapTo)(se,en()-ae<500?0:Ae.direction)}:Pe.utils.snap(M.snapTo),F=M.duration||{min:.1,max:2},F=ca(F)?ss(F.min,F.max):ss(F,F),j=Pe.delayedCall(M.delay||ot/2||.1,function(){var se=oe(),Ae=en()-ae<500,Oe=N.tween;if((Ae||Math.abs(L.getVelocity())<10)&&!Oe&&!za&&J!==se){var Ve=(se-xe)/Re,Et=i&&!I?i.totalProgress():Ve,rt=Ae?0:(Et-Ne)/(en()-la)*1e3||0,ht=Pe.utils.clamp(-Ve,1-Ve,Ir(rt/2)*rt/.185),A=Ve+(M.inertia===!1?0:ht),k=ss(0,1,Ie(A,L)),q=Math.round(xe+k*Re),B=M,Z=B.onStart,Se=B.onInterrupt,Me=B.onComplete;if(se<=ge&&se>=xe&&q!==se){if(Oe&&!Oe._initted&&Oe.data<=Ir(q-se))return;M.inertia===!1&&(ht=k-Ve),N(q,{duration:F(Ir(Math.max(Ir(A-Et),Ir(k-Et))*.185/rt/.05||0)),ease:M.ease||"power3",data:Ir(q-se),onInterrupt:function(){return j.restart(!0)&&Se&&Se(L)},onComplete:function(){L.update(),J=oe(),ye=Ne=i&&!I?i.totalProgress():L.progress,x&&x(L),Me&&Me(L)}},se,ht*Re,q-se-ht*Re),Z&&Z(L,N.tween)}}else L.isActive&&J!==se&&j.restart(!0)}).pause()),l&&(mc[l]=L),f=L.trigger=an(f||h),je=f&&f._gsap&&f._gsap.stRevert,je&&(je=je(L)),h=h===!0?f:an(h),$n(o)&&(o={targets:f,className:o}),h&&(_===!1||_===On||(_=!_&&h.parentNode&&h.parentNode.style&&Zn(h.parentNode).display==="flex"?!1:Mt),L.pin=h,Ce=Pe.core.getCache(h),Ce.spacer?Je=Ce.pinState:(T&&(T=an(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ce.spacerIsNative=!!T,T&&(Ce.spacerState=Lo(T))),Ce.spacer=w=T||pt.createElement("div"),w.classList.add("pin-spacer"),l&&w.classList.add("pin-spacer-"+l),Ce.pinState=Je=Lo(h)),n.force3D!==!1&&Pe.set(h,{force3D:!0}),L.spacer=w=Ce.spacer,me=Zn(h),ee=me[_+E.os2],ie=Pe.getProperty(h),te=Pe.quickSetter(h,E.a,zt),ol(h,w,me),R=Lo(h)),V){st=ca(V)?Iu(V,Uu):Uu,qe=Ro("scroller-start",l,D,E,st,0),Y=Ro("scroller-end",l,D,E,st,0,qe),K=qe["offset"+E.op.d2];var _t=an(Xi(D,"content")||D);Ue=this.markerStart=Ro("start",l,_t,E,st,K,0,b),it=this.markerEnd=Ro("end",l,_t,E,st,K,0,b),b&&(tt=Pe.quickSetter([Ue,it],E.a,zt)),!z&&!(ui.length&&Xi(D,"fixedMarkers")===!0)&&(Qm(O?vt:D),Pe.set([qe,Y],{force3D:!0}),ue=Pe.quickSetter(qe,E.a,zt),Te=Pe.quickSetter(Y,E.a,zt))}if(b){var Fe=b.vars.onUpdate,_e=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),Fe&&Fe.apply(b,_e||[])})}L.previous=function(){return $e[$e.indexOf(L)-1]},L.next=function(){return $e[$e.indexOf(L)+1]},L.revert=function(se,Ae){if(!Ae)return L.kill(!0);var Oe=se!==!1||!L.enabled,Ve=Wt;Oe!==L.isReverted&&(Oe&&(fe=Math.max(oe(),L.scroll.rec||0),ne=L.progress,be=i&&i.progress()),Ue&&[Ue,it,qe,Y].forEach(function(Et){return Et.style.display=Oe?"none":"block"}),Oe&&(Wt=L,L.update(Oe)),h&&(!S||!L.isActive)&&(Oe?rg(h,w,Je):ol(h,w,Zn(h),X)),Oe||L.update(Oe),Wt=Ve,L.isReverted=Oe)},L.refresh=function(se,Ae){if(!((Wt||!L.enabled)&&!Ae)){if(h&&se&&kn){Ut(r,"scrollEnd",Hh);return}!En&&de&&de(L),Wt=L,ae=en(),N.tween&&(N.tween.kill(),N.tween=0),pe&&pe.pause(),m&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;for(var Oe=re(),Ve=$(),Et=b?b.duration():Gi(D,E),rt=Re<=.01,ht=0,A=0,k=n.end,q=n.endTrigger||f,B=n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),Z=L.pinnedContainer=n.pinnedContainer&&an(n.pinnedContainer),Se=f&&Math.max(0,$e.indexOf(L))||0,Me=Se,Ee,De,He,ke,Le,Be,ut,jt,ti,dt,Ge;Me--;)Be=$e[Me],Be.end||Be.refresh(0,1)||(Wt=L),ut=Be.pin,ut&&(ut===f||ut===h||ut===Z)&&!Be.isReverted&&(dt||(dt=[]),dt.unshift(Be),Be.revert(!0,!0)),Be!==$e[Me]&&(Se--,Me--);for(sn(B)&&(B=B(L)),xe=Fu(B,f,Oe,E,oe(),Ue,qe,L,Ve,Q,z,Et,b)||(h?-.001:0),sn(k)&&(k=k(L)),$n(k)&&!k.indexOf("+=")&&(~k.indexOf(" ")?k=($n(B)?B.split(" ")[0]:"")+k:(ht=ua(k.substr(2),Oe),k=$n(B)?B:(b?Pe.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,xe):xe)+ht,q=f)),ge=Math.max(xe,Fu(k||(q?"100% 0":Et),q,Oe,E,oe()+ht,it,Y,L,Ve,Q,z,Et,b))||-.001,Re=ge-xe||(xe-=.01)&&.001,ht=0,Me=Se;Me--;)Be=$e[Me],ut=Be.pin,ut&&Be.start-Be._pinPush<=xe&&!b&&Be.end>0&&(Ee=Be.end-Be.start,(ut===f&&Be.start-Be._pinPush<xe||ut===Z)&&!Hs(B)&&(ht+=Ee*(1-Be.progress)),ut===h&&(A+=Ee));if(xe+=ht,ge+=ht,rt&&(ne=Pe.utils.clamp(0,1,Pe.utils.normalize(xe,ge,fe))),L._pinPush=A,Ue&&ht&&(Ee={},Ee[E.a]="+="+ht,Z&&(Ee[E.p]="-="+oe()),Pe.set([Ue,it],Ee)),h)Ee=Zn(h),ke=E===Ct,He=oe(),ce=parseFloat(ie(E.a))+A,!Et&&ge>1&&(Ge=(O?pt.scrollingElement||jn:D).style,Ge={style:Ge,value:Ge["overflow"+E.a.toUpperCase()]},Ge.style["overflow"+E.a.toUpperCase()]="scroll"),ol(h,w,Ee),R=Lo(h),De=Ei(h,!0),jt=z&&ji(D,ke?rn:Ct)(),_&&(X=[_+E.os2,Re+A+zt],X.t=w,Me=_===Mt?pc(h,E)+Re+A:0,Me&&X.push(E.d,Me+zt),ds(X),Z&&$e.forEach(function(hi){hi.pin===Z&&hi.vars.pinSpacing!==!1&&(hi._subPinOffset=!0)}),z&&oe(fe)),z&&(Le={top:De.top+(ke?He-xe:jt)+zt,left:De.left+(ke?jt:He-xe)+zt,boxSizing:"border-box",position:"fixed"},Le[_r]=Le["max"+ys]=Math.ceil(De.width)+zt,Le[vr]=Le["max"+Zc]=Math.ceil(De.height)+zt,Le[On]=Le[On+Qs]=Le[On+Zs]=Le[On+eo]=Le[On+Js]="0",Le[Mt]=Ee[Mt],Le[Mt+Qs]=Ee[Mt+Qs],Le[Mt+Zs]=Ee[Mt+Zs],Le[Mt+eo]=Ee[Mt+eo],Le[Mt+Js]=Ee[Mt+Js],ft=og(Je,Le,S),En&&oe(0)),i?(ti=i._initted,tl(1),i.render(i.duration(),!0,!0),U=ie(E.a)-ce+Re+A,ve=Math.abs(Re-U)>1,z&&ve&&ft.splice(ft.length-2,2),i.render(0,!0,!0),ti||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),tl(0)):U=Re,Ge&&(Ge.value?Ge.style["overflow"+E.a.toUpperCase()]=Ge.value:Ge.style.removeProperty("overflow-"+E.a));else if(f&&oe()&&!b)for(De=f.parentNode;De&&De!==vt;)De._pinOffset&&(xe-=De._pinOffset,ge-=De._pinOffset),De=De.parentNode;dt&&dt.forEach(function(hi){return hi.revert(!1,!0)}),L.start=xe,L.end=ge,le=we=En?fe:oe(),!b&&!En&&(le<fe&&oe(fe),L.scroll.rec=0),L.revert(!1,!0),j&&(J=-1,L.isActive&&oe(xe+Re*ne),j.restart(!0)),Wt=0,i&&I&&(i._initted||be)&&i.progress()!==be&&i.progress(be,!0).render(i.time(),!0,!0),(rt||ne!==L.progress||b)&&(i&&!I&&i.totalProgress(b&&xe<-.001&&!ne?Pe.utils.normalize(xe,ge,0):ne,!0),L.progress=(le-xe)/Re===ne?0:ne),h&&_&&(w._pinOffset=Math.round(L.progress*U)),pe&&pe.invalidate(),u&&!En&&u(L)}},L.getVelocity=function(){return(oe()-we)/(en()-la)*1e3||0},L.endAnimation=function(){Ds(L.callbackAnimation),i&&(pe?pe.progress(1):i.paused()?I||Ds(i,L.direction<0,1):Ds(i,i.reversed()))},L.labelToScroll=function(se){return i&&i.labels&&(xe||L.refresh()||xe)+i.labels[se]/i.duration()*Re||0},L.getTrailing=function(se){var Ae=$e.indexOf(L),Oe=L.direction>0?$e.slice(0,Ae).reverse():$e.slice(Ae+1);return($n(se)?Oe.filter(function(Ve){return Ve.vars.preventOverlaps===se}):Oe).filter(function(Ve){return L.direction>0?Ve.end<=xe:Ve.start>=ge})},L.update=function(se,Ae,Oe){if(!(b&&!Oe&&!se)){var Ve=En===!0?fe:L.scroll(),Et=se?0:(Ve-xe)/Re,rt=Et<0?0:Et>1?1:Et||0,ht=L.progress,A,k,q,B,Z,Se,Me,Ee;if(Ae&&(we=le,le=b?oe():Ve,M&&(Ne=ye,ye=i&&!I?i.totalProgress():rt)),g&&!rt&&h&&!Wt&&!bo&&kn&&xe<Ve+(Ve-we)/(en()-la)*g&&(rt=1e-4),rt!==ht&&L.enabled){if(A=L.isActive=!!rt&&rt<1,k=!!ht&&ht<1,Se=A!==k,Z=Se||!!rt!=!!ht,L.direction=rt>ht?1:-1,L.progress=rt,Z&&!Wt&&(q=rt&&!ht?0:rt===1?1:ht===1?2:3,I&&(B=!Se&&H[q+1]!=="none"&&H[q+1]||H[q],Ee=i&&(B==="complete"||B==="reset"||B in i))),y&&(Se||Ee)&&(Ee||d||!i)&&(sn(y)?y(L):L.getTrailing(y).forEach(function(Le){return Le.endAnimation()})),I||(pe&&!Wt&&!bo?(pe._dp._time-pe._start!==pe._time&&pe.render(pe._dp._time-pe._start),pe.resetTo?pe.resetTo("totalProgress",rt,i._tTime/i._tDur):(pe.vars.totalProgress=rt,pe.invalidate().restart())):i&&i.totalProgress(rt,!!Wt)),h){if(se&&_&&(w.style[_+E.os2]=ee),!z)te(Gs(ce+U*rt));else if(Z){if(Me=!se&&rt>ht&&ge+1>Ve&&Ve+1>=Gi(D,E),S)if(!se&&(A||Me)){var De=Ei(h,!0),He=Ve-xe;zu(h,vt,De.top+(E===Ct?He:0)+zt,De.left+(E===Ct?0:He)+zt)}else zu(h,w);ds(A||Me?ft:R),ve&&rt<1&&A||te(ce+(rt===1&&!Me?U:0))}}M&&!N.tween&&!Wt&&!bo&&j.restart(!0),o&&(Se||v&&rt&&(rt<1||!nl))&&Aa(o.targets).forEach(function(Le){return Le.classList[A||v?"add":"remove"](o.className)}),a&&!I&&!se&&a(L),Z&&!Wt?(I&&(Ee&&(B==="complete"?i.pause().totalProgress(1):B==="reset"?i.restart(!0).pause():B==="restart"?i.restart(!0):i[B]()),a&&a(L)),(Se||!nl)&&(c&&Se&&rl(L,c),W[q]&&rl(L,W[q]),v&&(rt===1?L.kill(!1,1):W[q]=0),Se||(q=rt===1?1:3,W[q]&&rl(L,W[q]))),C&&!A&&Math.abs(L.getVelocity())>(Hs(C)?C:2500)&&(Ds(L.callbackAnimation),pe?pe.progress(1):Ds(i,B==="reverse"?1:!rt,1))):I&&a&&!Wt&&a(L)}if(Te){var ke=b?Ve/b.duration()*(b._caScrollDist||0):Ve;ue(ke+(qe._isFlipped?1:0)),Te(ke)}tt&&tt(-Ve/b.duration()*(b._caScrollDist||0))}},L.enable=function(se,Ae){L.enabled||(L.enabled=!0,Ut(D,"resize",Vs),Ut(O?pt:D,"scroll",Ur),de&&Ut(r,"refreshInit",de),se!==!1&&(L.progress=ne=0,le=we=J=oe()),Ae!==!1&&L.refresh())},L.getTween=function(se){return se&&N?N.tween:pe},L.setPositions=function(se,Ae){h&&(ce+=se-xe,U+=Ae-se-Re,_===Mt&&L.adjustPinSpacing(Ae-se-Re)),L.start=xe=se,L.end=ge=Ae,Re=Ae-se,L.update()},L.adjustPinSpacing=function(se){if(X&&se){var Ae=X.indexOf(E.d)+1;X[Ae]=parseFloat(X[Ae])+se+zt,X[1]=parseFloat(X[1])+se+zt,ds(X)}},L.disable=function(se,Ae){if(L.enabled&&(se!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Ae||pe&&pe.pause(),fe=0,Ce&&(Ce.uncache=1),de&&It(r,"refreshInit",de),j&&(j.pause(),N.tween&&N.tween.kill()&&(N.tween=0)),!O)){for(var Oe=$e.length;Oe--;)if($e[Oe].scroller===D&&$e[Oe]!==L)return;It(D,"resize",Vs),It(D,"scroll",Ur)}},L.kill=function(se,Ae){L.disable(se,Ae),pe&&!Ae&&pe.kill(),l&&delete mc[l];var Oe=$e.indexOf(L);Oe>=0&&$e.splice(Oe,1),Oe===Qt&&fa>0&&Qt--,Oe=0,$e.forEach(function(Ve){return Ve.scroller===L.scroller&&(Oe=1)}),Oe||En||(L.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Ae||i.kill()),Ue&&[Ue,it,qe,Y].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),to===L&&(to=0),h&&(Ce&&(Ce.uncache=1),Oe=0,$e.forEach(function(Ve){return Ve.pin===h&&Oe++}),Oe||(Ce.spacer=0)),n.onKill&&n.onKill(L)},L.enable(!1,!1),je&&je(L),!i||!i.add||Re?L.refresh():Pe.delayedCall(.01,function(){return xe||ge||L.refresh()})&&(Re=.01)&&(xe=ge=0),h&&ig()},r.register=function(n){return Qr||(Pe=n||Fh(),Nh()&&window.document&&r.enable(),Qr=ks),Qr},r.defaults=function(n){if(n)for(var i in n)Po[i]=n[i];return Po},r.disable=function(n,i){ks=0,$e.forEach(function(a){return a[i?"kill":"disable"](n)}),It(Ze,"wheel",Ur),It(pt,"scroll",Ur),clearInterval(To),It(pt,"touchcancel",ii),It(vt,"touchstart",ii),Ao(It,pt,"pointerdown,touchstart,mousedown",Lu),Ao(It,pt,"pointerup,touchend,mouseup",Du),wa.kill(),wo(It);for(var s=0;s<Ke.length;s+=3)Co(It,Ke[s],Ke[s+1]),Co(It,Ke[s],Ke[s+2])},r.enable=function(){if(Ze=window,pt=document,jn=pt.documentElement,vt=pt.body,Pe&&(Aa=Pe.utils.toArray,ss=Pe.utils.clamp,hc=Pe.core.context||ii,tl=Pe.core.suppressOverwrites||ii,$c=Ze.history.scrollRestoration||"auto",gc=Ze.pageYOffset,Pe.core.globals("ScrollTrigger",r),vt)){ks=1,Km(),wt.register(Pe),r.isTouch=wt.isTouch,Oi=wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ut(Ze,"wheel",Ur),Rh=[Ze,pt,jn,vt],Pe.matchMedia?(r.matchMedia=function(l){var c=Pe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Pe.addEventListener("matchMediaInit",function(){return Qc()}),Pe.addEventListener("matchMediaRevert",function(){return Vh()}),Pe.addEventListener("matchMedia",function(){dr(0,1),wr("matchMedia")}),Pe.matchMedia("(orientation: portrait)",function(){return sl(),sl})):console.warn("Requires GSAP 3.11.0 or later"),sl(),Ut(pt,"scroll",Ur);var n=vt.style,i=n.borderTopStyle,s=Pe.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ei(vt),Ct.m=Math.round(a.top+Ct.sc())||0,rn.m=Math.round(a.left+rn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),To=setInterval(Ou,250),Pe.delayedCall(.5,function(){return bo=0}),Ut(pt,"touchcancel",ii),Ut(vt,"touchstart",ii),Ao(Ut,pt,"pointerdown,touchstart,mousedown",Lu),Ao(Ut,pt,"pointerup,touchend,mouseup",Du),fc=Pe.utils.checkPrefix("transform"),ha.push(fc),Qr=en(),wa=Pe.delayedCall(.2,dr).pause(),es=[pt,"visibilitychange",function(){var l=Ze.innerWidth,c=Ze.innerHeight;pt.hidden?(Pu=l,Ru=c):(Pu!==l||Ru!==c)&&Vs()},pt,"DOMContentLoaded",dr,Ze,"load",dr,Ze,"resize",Vs],wo(Ut),$e.forEach(function(l){return l.enable(0,1)}),o=0;o<Ke.length;o+=3)Co(It,Ke[o],Ke[o+1]),Co(It,Ke[o],Ke[o+2])}},r.config=function(n){"limitCallbacks"in n&&(nl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(To)||(To=i)&&setInterval(Ou,i),"ignoreMobileResize"in n&&(Ih=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(wo(It)||wo(Ut,n.autoRefreshEvents||"none"),Dh=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=an(n),a=Ke.indexOf(s),o=Tr(s);~a&&Ke.splice(a,o?6:2),i&&(o?ui.unshift(Ze,i,vt,i,jn,i):ui.unshift(s,i))},r.clearMatchMedia=function(n){$e.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=($n(n)?an(n):n).getBoundingClientRect(),o=a[s?_r:vr]*i||0;return s?a.right-o>0&&a.left+o<Ze.innerWidth:a.bottom-o>0&&a.top+o<Ze.innerHeight},r.positionInViewport=function(n,i,s){$n(n)&&(n=an(n));var a=n.getBoundingClientRect(),o=a[s?_r:vr],l=i==null?o/2:i in Ca?Ca[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Ze.innerWidth:(a.top+l)/Ze.innerHeight},r.killAll=function(n){if($e.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=br.killAll||[];br={},i.forEach(function(s){return s()})}},r}();ze.version="3.11.5";ze.saveStyles=function(r){return r?Aa(r).forEach(function(e){if(e&&e.style){var t=Mn.indexOf(e);t>=0&&Mn.splice(t,5),Mn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),hc())}}):Mn};ze.revert=function(r,e){return Qc(!r,e)};ze.create=function(r,e){return new ze(r,e)};ze.refresh=function(r){return r?Vs():(Qr||ze.register())&&dr(!0)};ze.update=function(r){return++Ke.cache&&wi(r===!0?2:0)};ze.clearScrollMemory=Wh;ze.maxScroll=function(r,e){return Gi(r,e?rn:Ct)};ze.getScrollFunc=function(r,e){return ji(an(r),e?rn:Ct)};ze.getById=function(r){return mc[r]};ze.getAll=function(){return $e.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ze.isScrolling=function(){return!!kn};ze.snapDirectional=Jc;ze.addEventListener=function(r,e){var t=br[r]||(br[r]=[]);~t.indexOf(e)||t.push(e)};ze.removeEventListener=function(r,e){var t=br[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ze.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=Pe.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&sn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return sn(s)&&(s=s(),Ut(ze,"refresh",function(){return s=e.batchMax()})),Aa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(ze.create(c))}),t};var ku=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},al=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(wt.isTouch?" pinch-zoom":""):"none",e===jn&&r(vt,t)},Do={auto:1,scroll:1},lg=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Pe.core.getCache(s),o=en(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Do[(l=Zn(s)).overflowY]||Do[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Tr(s)&&(Do[(l=Zn(s)).overflowY]||Do[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},qh=function(e,t,n,i){return wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&lg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ut(pt,wt.eventTypes[0],Hu,!1,!0)},onDisable:function(){return It(pt,wt.eventTypes[0],Hu,!0)}})},cg=/(input|label|select|textarea)/i,Gu,Hu=function(e){var t=cg.test(e.target.tagName);(t||Gu)&&(e._gsapAllow=!0,Gu=t)},ug=function(e){ca(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=an(e.target)||jn,u=Pe.core.globals().ScrollSmoother,d=u&&u.get(),f=Oi&&(e.content&&an(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=ji(c,Ct),_=ji(c,rn),m=1,g=(wt.isTouch&&Ze.visualViewport?Ze.visualViewport.scale*Ze.visualViewport.width:Ze.outerWidth)/Ze.innerWidth,p=0,x=sn(i)?function(){return i(o)}:function(){return i||2.8},v,M,S=qh(c,e.type,!0,s),T=function(){return M=!1},b=ii,C=ii,y=function(){l=Gi(c,Ct),C=ss(Oi?1:0,l),n&&(b=ss(0,Gi(c,rn))),v=xr},E=function(){f._gsap.y=Gs(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},I=function(){if(M){requestAnimationFrame(T);var V=Gs(o.deltaY/2),Q=C(h.v-V);if(f&&Q!==h.v+h.offset){h.offset=Q-h.v;var L=Gs((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",h.cacheID=Ke.cache,wi()}return!0}h.offset&&E(),M=!0},D,P,O,z,W=function(){y(),D.isActive()&&D.vars.scrollY>l&&(h()>l?D.progress(1)&&h(l):D.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(H){return Oi&&H.type==="touchmove"&&I()||m>1.05&&H.type!=="touchstart"||o.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){M=!1;var H=m;m=Gs((Ze.visualViewport&&Ze.visualViewport.scale||1)/g),D.pause(),H!==m&&al(c,m>1.01?!0:n?!1:"x"),P=_(),O=h(),y(),v=xr},e.onRelease=e.onGestureStart=function(H,V){if(h.offset&&E(),!V)z.restart(!0);else{Ke.cache++;var Q=x(),L,de;n&&(L=_(),de=L+Q*.05*-H.velocityX/.227,Q*=ku(_,L,de,Gi(c,rn)),D.vars.scrollX=b(de)),L=h(),de=L+Q*.05*-H.velocityY/.227,Q*=ku(h,L,de,Gi(c,Ct)),D.vars.scrollY=C(de),D.invalidate().duration(Q).play(.01),(Oi&&D.vars.scrollY>=l||L>=l-1)&&Pe.to({},{onUpdate:W,duration:Q})}a&&a(H)},e.onWheel=function(){D._ts&&D.pause(),en()-p>1e3&&(v=0,p=en())},e.onChange=function(H,V,Q,L,de){if(xr!==v&&y(),V&&n&&_(b(L[2]===V?P+(H.startX-H.x):_()+V-L[1])),Q){h.offset&&E();var re=de[2]===Q,$=re?O+H.startY-H.y:h()+Q-de[1],J=C($);re&&$!==J&&(O+=J-$),h(J)}(Q||V)&&wi()},e.onEnable=function(){al(c,n?!1:"x"),ze.addEventListener("refresh",W),Ut(Ze,"resize",W),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),S.enable()},e.onDisable=function(){al(c,!0),It(Ze,"resize",W),ze.removeEventListener("refresh",W),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new wt(e),o.iOS=Oi,Oi&&!h()&&h(1),Oi&&Pe.ticker.add(ii),z=o._dc,D=Pe.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Xh(h,h(),function(){return D.pause()})},onUpdate:wi,onComplete:z.vars.onComplete}),o};ze.sort=function(r){return $e.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};ze.observe=function(r){return new wt(r)};ze.normalizeScroll=function(r){if(typeof r>"u")return Sn;if(r===!0&&Sn)return Sn.enable();if(r===!1)return Sn&&Sn.kill();var e=r instanceof wt?r:ug(r);return Sn&&Sn.target===e.target&&Sn.kill(),Tr(e.target)&&(Sn=e),e};ze.core={_getVelocityProp:dc,_inputObserver:qh,_scrollers:Ke,_proxies:ui,bridge:{ss:function(){kn||wr("scrollStart"),kn=en()},ref:function(){return Wt}}};Fh()&&Pe.registerPlugin(ze);nt.registerPlugin(ze);function dg(){const r=nt.timeline({defaults:{ease:"power2.inOut"}}),e=nt.timeline({defaults:{ease:"power2.inOut"}});nt.set(".loading-text",{yPercent:100,opacity:0}),nt.set(".loader",{width:"0%",opacity:0}),nt.set(".loader-container",{opacity:0}),nt.set([".block-top",".block-bottom"],{yPercent:0});const t=document.querySelector(".loading-text").textContent.split("");return document.querySelector(".loading-text").innerHTML=t.map(i=>`<span class="letter">${i}</span>`).join(""),nt.set(".letter",{opacity:0,y:20}),r.to(".loading-text",{yPercent:0,opacity:1,duration:.8,ease:"power3.out"}).to(".letter",{opacity:1,y:0,duration:.4,stagger:.03,ease:"power2.out"}).to(".loading-text",{opacity:1,duration:.8}),e.to(".loader-container",{opacity:1,duration:.3}).to(".loader",{opacity:1,duration:.2},"<").to(".loader",{width:"100%",duration:1.5,ease:"power4.inOut"}).to(".loading-text",{yPercent:-100,duration:1.2,ease:"power2.inOut"}).to({},{duration:.3}).to([".block-top",".block-bottom"],{yPercent:i=>i===0?-100:100,duration:1.8,ease:"power3.inOut",stagger:.15}).to(".blocks",{display:"none",duration:.1}),(async()=>{r.play(),await Promise.all([new Promise(i=>{document.readyState==="complete"?i():window.addEventListener("load",i)}),new Promise(i=>setTimeout(i,2e3))]),e.play()})(),{welcomeTimeline:r,loadingTimeline:e}}function vc(){return vc=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},vc.apply(this,arguments)}function Pa(r,e,t){return Math.max(r,Math.min(e,t))}class fg{advance(e){var t;if(!this.isRunning)return;let n=!1;if(this.lerp)this.value=(i=this.value,s=this.to,(1-(a=1-Math.exp(-60*this.lerp*e)))*i+a*s),Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=e;const o=Pa(0,this.currentTime/this.duration,1);n=o>=1;const l=n?1:this.easing(o);this.value=this.from+(this.to-this.from)*l}var i,s,a;(t=this.onUpdate)==null||t.call(this,this.value,{completed:n}),n&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:s=o=>o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,this.onUpdate=a}}function Vu(r,e){let t;return function(){let n=arguments,i=this;clearTimeout(t),t=setTimeout(function(){r.apply(i,n)},e)}}class hg{constructor(e,t){this.onWindowResize=()=>{this.width=window.innerWidth,this.height=window.innerHeight},this.onWrapperResize=()=>{this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight},this.onContentResize=()=>{const n=this.wrapper===window?document.documentElement:this.wrapper;this.scrollHeight=n.scrollHeight,this.scrollWidth=n.scrollWidth},this.wrapper=e,this.content=t,this.wrapper===window?(window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize()):(this.wrapperResizeObserver=new ResizeObserver(Vu(this.onWrapperResize,100)),this.wrapperResizeObserver.observe(this.wrapper),this.onWrapperResize()),this.contentResizeObserver=new ResizeObserver(Vu(this.onContentResize,100)),this.contentResizeObserver.observe(this.content),this.onContentResize()}destroy(){var e,t;window.removeEventListener("resize",this.onWindowResize,!1),(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}let Yh=()=>({events:{},emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n](...e)},on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>e!==i)}}});class pg{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=2,normalizeWheel:i=!1}){this.onTouchStart=s=>{const{clientX:a,clientY:o}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=a,this.touchStart.y=o,this.lastDelta={x:0,y:0}},this.onTouchMove=s=>{const{clientX:a,clientY:o}=s.targetTouches?s.targetTouches[0]:s,l=-(a-this.touchStart.x)*this.touchMultiplier,c=-(o-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=a,this.touchStart.y=o,this.lastDelta={x:l,y:c},this.emitter.emit("scroll",{type:"touch",deltaX:l,deltaY:c,event:s})},this.onTouchEnd=s=>{this.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})},this.onWheel=s=>{let{deltaX:a,deltaY:o}=s;this.normalizeWheel&&(a=Pa(-100,a,100),o=Pa(-100,o,100)),a*=this.wheelMultiplier,o*=this.wheelMultiplier,this.emitter.emit("scroll",{type:"wheel",deltaX:a,deltaY:o,event:s})},this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.normalizeWheel=i,this.touchStart={x:null,y:null},this.emitter=Yh(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.events={},this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class mg{constructor({direction:e,gestureDirection:t,mouseMultiplier:n,smooth:i,wrapper:s=window,content:a=document.documentElement,wheelEventsTarget:o=s,smoothWheel:l=i==null||i,smoothTouch:c=!1,syncTouch:u=!1,syncTouchLerp:d=.1,touchInertiaMultiplier:f=35,duration:h,easing:_=T=>Math.min(1,1.001-Math.pow(2,-10*T)),lerp:m=h?null:.1,infinite:g=!1,orientation:p=e??"vertical",gestureOrientation:x=t??"vertical",touchMultiplier:v=1,wheelMultiplier:M=n??1,normalizeWheel:S=!1}={}){this.onVirtualScroll=({type:T,inertia:b,deltaX:C,deltaY:y,event:E})=>{if(E.ctrlKey)return;const I=T==="touch",D=T==="wheel";if(this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&C===0||I&&this.options.gestureOrientation==="vertical"&&this.scroll===0&&!this.options.infinite&&y<=0||E.composedPath().find(W=>W==null||W.hasAttribute==null?void 0:W.hasAttribute("data-lenis-prevent")))return;if(this.isStopped||this.isLocked)return void E.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&I||this.options.smoothWheel&&D,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();E.preventDefault();let P=y;this.options.gestureOrientation==="both"?P=Math.abs(y)>Math.abs(C)?y:C:this.options.gestureOrientation==="horizontal"&&(P=C);const O=I&&this.options.syncTouch,z=I&&b&&Math.abs(P)>1;z&&(P=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+P,vc({programmatic:!1},O&&{lerp:z?this.syncTouchLerp:.4}))},this.onScroll=()=>{if(!this.isScrolling){const T=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-T),this.emit()}},e&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),t&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),n&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),i&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion="1.0.12",s!==document.documentElement&&s!==document.body||(s=window),this.options={wrapper:s,content:a,wheelEventsTarget:o,smoothWheel:l,smoothTouch:c,syncTouch:u,syncTouchLerp:d,touchInertiaMultiplier:f,duration:h,easing:_,lerp:m,infinite:g,gestureOrientation:x,orientation:p,touchMultiplier:v,wheelMultiplier:M,normalizeWheel:S},this.dimensions=new hg(s,a),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=l||c,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new fg,this.emitter=Yh(),this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new pg(o,{touchMultiplier:v,wheelMultiplier:M,normalizeWheel:S}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.events={},this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy()}on(e,t){return this.emitter.on(e,t)}off(e,t){var n;this.emitter.events[e]=(n=this.emitter.events[e])==null?void 0:n.filter(i=>t!==i)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:a=this.options.easing,lerp:o=!s&&this.options.lerp,onComplete:l=null,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{var d;let f;if(typeof e=="string"?f=document.querySelector(e):(d=e)!=null&&d.nodeType&&(f=e),f){if(this.options.wrapper!==window){const _=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}const h=f.getBoundingClientRect();e=(this.isHorizontal?h.left:h.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=Pa(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.emit(),void(l==null||l());if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:a,lerp:o,onUpdate:(f,{completed:h})=>{i&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),h&&(i&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,l==null||l()),this.emit()}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.isHorizontal?this.dimensions.limit.x:this.dimensions.limit.y}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(e=this.limit)+e)%e:this.animatedScroll;var e}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.rootElement.classList.toggle("lenis-smooth",e),this.__isSmooth=e)}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.rootElement.classList.toggle("lenis-scrolling",e),this.__isScrolling=e)}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.rootElement.classList.toggle("lenis-stopped",e),this.__isStopped=e)}}function gg(){const r=new mg({duration:2.5,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n)),wheelMultiplier:navigator.userAgent.includes("Safari")?.5:1,touchMultiplier:navigator.userAgent.includes("Safari")?1.5:1,smoothTouch:!1});let e=null;function t(n){r.raf(n),e=requestAnimationFrame(t)}return e=requestAnimationFrame(t),r.on("scroll",ze.update),nt.ticker.add(n=>{r.raf(n*1e3)}),()=>{e&&cancelAnimationFrame(e)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eu="152",Or={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_g=0,Wu=1,vg=2,$h=1,xg=2,Si=3,Ki=0,fn=1,Ti=2,qi=0,fs=1,Ra=2,Xu=3,qu=4,Sg=5,ts=100,Mg=101,yg=102,Yu=103,$u=104,Eg=200,Tg=201,bg=202,wg=203,jh=204,Kh=205,Ag=206,Cg=207,Pg=208,Rg=209,Lg=210,Dg=0,Ig=1,Ug=2,xc=3,Og=4,Ng=5,Fg=6,zg=7,Zh=0,Bg=1,kg=2,Ai=0,Gg=1,Hg=2,Vg=3,Wg=4,Xg=5,Jh=300,Es=301,Ts=302,Sc=303,Mc=304,Ba=306,yc=1e3,Jn=1001,Ec=1002,tn=1003,ju=1004,ll=1005,Nn=1006,qg=1007,uo=1008,Ar=1009,Yg=1010,$g=1011,Qh=1012,jg=1013,fr=1014,hr=1015,fo=1016,Kg=1017,Zg=1018,hs=1020,Jg=1021,Qn=1023,Qg=1024,e_=1025,Sr=1026,bs=1027,t_=1028,n_=1029,i_=1030,r_=1031,s_=1033,cl=33776,ul=33777,dl=33778,fl=33779,Ku=35840,Zu=35841,Ju=35842,Qu=35843,o_=36196,ed=37492,td=37496,nd=37808,id=37809,rd=37810,sd=37811,od=37812,ad=37813,ld=37814,cd=37815,ud=37816,dd=37817,fd=37818,hd=37819,pd=37820,md=37821,hl=36492,a_=36283,gd=36284,_d=36285,vd=36286,ep=3e3,Mr=3001,l_=3200,c_=3201,u_=0,d_=1,yr="",We="srgb",fi="srgb-linear",tp="display-p3",pl=7680,f_=519,xd=35044,Sd="300 es",Tc=1035;class Lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ml=Math.PI/180,bc=180/Math.PI;function go(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[r&255]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function nn(r,e,t){return Math.max(e,Math.min(t,r))}function h_(r,e){return(r%e+e)%e}function gl(r,e,t){return(1-t)*r+t*e}function Md(r){return(r&r-1)===0&&r!==0}function p_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Io(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _n(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],m=i[0],g=i[3],p=i[6],x=i[1],v=i[4],M=i[7],S=i[2],T=i[5],b=i[8];return s[0]=a*m+o*x+l*S,s[3]=a*g+o*v+l*T,s[6]=a*p+o*M+l*b,s[1]=c*m+u*x+d*S,s[4]=c*g+u*v+d*T,s[7]=c*p+u*M+d*b,s[2]=f*m+h*x+_*S,s[5]=f*g+h*v+_*T,s[8]=f*p+h*M+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*d+n*f+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=d*m,e[1]=(i*c-u*n)*m,e[2]=(o*n-i*a)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*s-o*t)*m,e[6]=h*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new Qe;function np(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ho(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const yd={};function no(r){r in yd||(yd[r]=!0,console.warn(r))}function ps(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const m_=new Qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),g_=new Qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function __(r){return r.convertSRGBToLinear().applyMatrix3(g_)}function v_(r){return r.applyMatrix3(m_).convertLinearToSRGB()}const x_={[fi]:r=>r,[We]:r=>r.convertSRGBToLinear(),[tp]:__},S_={[fi]:r=>r,[We]:r=>r.convertLinearToSRGB(),[tp]:v_},Vn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return fi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=x_[e],i=S_[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Fr;class ip{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=ho("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ho("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ps(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ps(t[n]/255)*255):t[n]=ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class rp{constructor(e=null){this.isSource=!0,this.uuid=go(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(xl(i[a].image)):s.push(xl(i[a]))}else s=xl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function xl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ip.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let M_=0;class hn extends Lr{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Jn,i=Jn,s=Nn,a=uo,o=Qn,l=Ar,c=hn.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=go(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mr?We:yr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?Mr:ep}set encoding(e){no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mr?We:yr}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Jh;hn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+m)<.1&&Math.abs(_+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(h+1)/2,S=(p+1)/2,T=(u+f)/4,b=(d+m)/4,C=(_+g)/4;return v>M&&v>S?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=b/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=C/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=b/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-_)*(g-_)+(d-m)*(d-m)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(d-m)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cr extends Lr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(no("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mr?We:yr),this.texture=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sp extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class y_ extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=s[a+0],h=s[a+1],_=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=_,e[t+3]=m;return}if(d!==m||l!==f||c!==h||u!==_){let g=1-o;const p=l*f+c*h+u*_+d*m,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),T=Math.atan2(S,p*x);g=Math.sin(g*T)/S,o=Math.sin(o*T)/S}const M=o*x;if(l=l*g+f*M,c=c*g+h*M,u=u*g+_*M,d=d*g+m*M,g===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-o*h,e[t+2]=c*_+u*h+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),f=l(n/2),h=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ed.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,d=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=c*l+f*-s+u*-o-d*-a,this.y=u*l+f*-a+d*-s-c*-o,this.z=d*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new G,Ed=new Pr;class _o{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox),zr.applyMatrix4(e.matrixWorld),this.union(zr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)mi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(mi)}else i.boundingBox===null&&i.computeBoundingBox(),zr.copy(i.boundingBox),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Uo.subVectors(this.max,Is),Br.subVectors(e.a,Is),kr.subVectors(e.b,Is),Gr.subVectors(e.c,Is),Li.subVectors(kr,Br),Di.subVectors(Gr,kr),nr.subVectors(Br,Gr);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-nr.z,nr.y,Li.z,0,-Li.x,Di.z,0,-Di.x,nr.z,0,-nr.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-nr.y,nr.x,0];return!Ml(t,Br,kr,Gr,Uo)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Br,kr,Gr,Uo))?!1:(Oo.crossVectors(Li,Di),t=[Oo.x,Oo.y,Oo.z],Ml(t,Br,kr,Gr,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new G,new G,new G,new G,new G,new G,new G,new G],mi=new G,zr=new _o,Br=new G,kr=new G,Gr=new G,Li=new G,Di=new G,nr=new G,Is=new G,Uo=new G,Oo=new G,ir=new G;function Ml(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ir.fromArray(r,s);const o=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=n.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const E_=new _o,Us=new G,yl=new G;class ka{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):E_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(yl)),this.expandByPoint(Us.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new G,El=new G,No=new G,Ii=new G,Tl=new G,Fo=new G,bl=new G;class op{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){El.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(El);const s=e.distanceTo(t)*.5,a=-this.direction.dot(No),o=Ii.dot(this.direction),l=-Ii.dot(No),c=Ii.lengthSq(),u=Math.abs(1-a*a);let d,f,h,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const m=1/u;d*=m,f*=m,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(El).addScaledVector(No,f),h}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),i=gi.dot(gi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,i,s){Tl.subVectors(t,e),Fo.subVectors(n,e),bl.crossVectors(Tl,Fo);let a=this.direction.dot(bl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);const l=o*this.direction.dot(Fo.crossVectors(Ii,Fo));if(l<0)return null;const c=o*this.direction.dot(Tl.cross(Ii));if(c<0||l+c>a)return null;const u=-o*Ii.dot(bl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,m,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,_=o*u,m=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,m=c*d;t[0]=f+m*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=m+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,m=c*d;t[0]=f-m*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=m-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,_=o*u,m=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+m,t[1]=l*d,t[5]=m*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,m=o*c;t[0]=l*u,t[4]=m-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-m*d}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,m=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+m,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T_,e,b_)}lookAt(e,t,n){const i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ui.crossVectors(n,vn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ui.crossVectors(n,vn)),Ui.normalize(),zo.crossVectors(vn,Ui),i[0]=Ui.x,i[4]=zo.x,i[8]=vn.x,i[1]=Ui.y,i[5]=zo.y,i[9]=vn.y,i[2]=Ui.z,i[6]=zo.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],m=n[6],g=n[10],p=n[14],x=n[3],v=n[7],M=n[11],S=n[15],T=i[0],b=i[4],C=i[8],y=i[12],E=i[1],I=i[5],D=i[9],P=i[13],O=i[2],z=i[6],W=i[10],H=i[14],V=i[3],Q=i[7],L=i[11],de=i[15];return s[0]=a*T+o*E+l*O+c*V,s[4]=a*b+o*I+l*z+c*Q,s[8]=a*C+o*D+l*W+c*L,s[12]=a*y+o*P+l*H+c*de,s[1]=u*T+d*E+f*O+h*V,s[5]=u*b+d*I+f*z+h*Q,s[9]=u*C+d*D+f*W+h*L,s[13]=u*y+d*P+f*H+h*de,s[2]=_*T+m*E+g*O+p*V,s[6]=_*b+m*I+g*z+p*Q,s[10]=_*C+m*D+g*W+p*L,s[14]=_*y+m*P+g*H+p*de,s[3]=x*T+v*E+M*O+S*V,s[7]=x*b+v*I+M*z+S*Q,s[11]=x*C+v*D+M*W+S*L,s[15]=x*y+v*P+M*H+S*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],m=e[7],g=e[11],p=e[15];return _*(+s*l*d-i*c*d-s*o*f+n*c*f+i*o*h-n*l*h)+m*(+t*l*h-t*c*f+s*a*f-i*a*h+i*c*u-s*l*u)+g*(+t*c*d-t*o*h-s*a*d+n*a*h+s*o*u-n*c*u)+p*(-i*o*u-t*l*d+t*o*f+i*a*d-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],m=e[13],g=e[14],p=e[15],x=d*g*c-m*f*c+m*l*h-o*g*h-d*l*p+o*f*p,v=_*f*c-u*g*c-_*l*h+a*g*h+u*l*p-a*f*p,M=u*m*c-_*d*c+_*o*h-a*m*h-u*o*p+a*d*p,S=_*d*l-u*m*l-_*o*f+a*m*f+u*o*g-a*d*g,T=t*x+n*v+i*M+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=x*b,e[1]=(m*f*s-d*g*s-m*i*h+n*g*h+d*i*p-n*f*p)*b,e[2]=(o*g*s-m*l*s+m*i*c-n*g*c-o*i*p+n*l*p)*b,e[3]=(d*l*s-o*f*s-d*i*c+n*f*c+o*i*h-n*l*h)*b,e[4]=v*b,e[5]=(u*g*s-_*f*s+_*i*h-t*g*h-u*i*p+t*f*p)*b,e[6]=(_*l*s-a*g*s-_*i*c+t*g*c+a*i*p-t*l*p)*b,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*h+t*l*h)*b,e[8]=M*b,e[9]=(_*d*s-u*m*s-_*n*h+t*m*h+u*n*p-t*d*p)*b,e[10]=(a*m*s-_*o*s+_*n*c-t*m*c-a*n*p+t*o*p)*b,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*h-t*o*h)*b,e[12]=S*b,e[13]=(u*m*i-_*d*i+_*n*f-t*m*f-u*n*g+t*d*g)*b,e[14]=(_*o*i-a*m*i-_*n*l+t*m*l+a*n*g-t*o*g)*b,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,_=s*d,m=a*u,g=a*d,p=o*d,x=l*c,v=l*u,M=l*d,S=n.x,T=n.y,b=n.z;return i[0]=(1-(m+p))*S,i[1]=(h+M)*S,i[2]=(_-v)*S,i[3]=0,i[4]=(h-M)*T,i[5]=(1-(f+p))*T,i[6]=(g+x)*T,i[7]=0,i[8]=(_+v)*b,i[9]=(g-x)*b,i[10]=(1-(f+m))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Hr.set(i[0],i[1],i[2]).length();const a=Hr.set(i[4],i[5],i[6]).length(),o=Hr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Wn.copy(this);const c=1/s,u=1/a,d=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f=-(a+s)/(a-s),h=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=h,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),d=(t+e)*l,f=(n+i)*c,h=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-h,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hr=new G,Wn=new St,T_=new G(0,0,0),b_=new G(1,1,1),Ui=new G,zo=new G,vn=new G,Td=new St,bd=new Pr;class vo{constructor(e=0,t=0,n=0,i=vo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Td,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bd.setFromEuler(this),this.setFromQuaternion(bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vo.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w_=0;const wd=new G,Vr=new Pr,_i=new St,Bo=new G,Os=new G,A_=new G,C_=new Pr,Ad=new G(1,0,0),Cd=new G(0,1,0),Pd=new G(0,0,1),P_={type:"added"},Rd={type:"removed"};class Gt extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new G,t=new vo,n=new Pr,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new Qe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Ad,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Pd,e)}translateOnAxis(e,t){return wd.copy(e).applyQuaternion(this.quaternion),this.position.add(wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ad,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Os,Bo,this.up):_i.lookAt(Bo,Os,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),Vr.setFromRotationMatrix(_i),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(P_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Rd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,A_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,C_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new G(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new G,vi=new G,wl=new G,xi=new G,Wr=new G,Xr=new G,Ld=new G,Al=new G,Cl=new G,Pl=new G;let ko=!1;class Kn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Xn.subVectors(i,t),vi.subVectors(n,t),wl.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(vi),l=Xn.dot(wl),c=vi.dot(vi),u=vi.dot(wl),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xi),xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(e,t,n,i,s,a,o,l){return ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ko=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,xi),l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),vi.subVectors(e,t),Xn.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Xn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ko=!0),Kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Wr.subVectors(i,n),Xr.subVectors(s,n),Al.subVectors(e,n);const l=Wr.dot(Al),c=Xr.dot(Al);if(l<=0&&c<=0)return t.copy(n);Cl.subVectors(e,i);const u=Wr.dot(Cl),d=Xr.dot(Cl);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Wr,a);Pl.subVectors(e,s);const h=Wr.dot(Pl),_=Xr.dot(Pl);if(_>=0&&h<=_)return t.copy(s);const m=h*c-l*_;if(m<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Xr,o);const g=u*_-h*d;if(g<=0&&d-u>=0&&h-_>=0)return Ld.subVectors(s,i),o=(d-u)/(d-u+(h-_)),t.copy(i).addScaledVector(Ld,o);const p=1/(g+m+f);return a=m*p,o=f*p,t.copy(n).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let R_=0;class xo extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=go(),this.name="",this.type="Material",this.blending=fs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jh,this.blendDst=Kh,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pl,this.stencilZFail=pl,this.stencilZPass=pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Rl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Vn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Vn.workingColorSpace){if(e=h_(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Rl(a,s,e+1/3),this.g=Rl(a,s,e),this.b=Rl(a,s,e-1/3)}return Vn.toWorkingColorSpace(this,i),this}setStyle(e,t=We){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=We){const n=lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=vl(e.r),this.g=vl(e.g),this.b=vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return Vn.fromWorkingColorSpace(Vt.copy(this),e),Math.round(nn(Vt.r*255,0,255))*65536+Math.round(nn(Vt.g*255,0,255))*256+Math.round(nn(Vt.b*255,0,255))}getHexString(e=We){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vn.workingColorSpace){Vn.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,s=Vt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Vn.workingColorSpace){return Vn.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=We){Vn.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==We?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),qn.h+=e,qn.s+=t,qn.l+=n,this.setHSL(qn.h,qn.s,qn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Go);const n=gl(qn.h,Go.h,t),i=gl(qn.s,Go.s,t),s=gl(qn.l,Go.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new at;at.NAMES=lp;class La extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new G,Ho=new Xe;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Io(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Io(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Io(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class cp extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class up extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let L_=0;const Ln=new St,Ll=new Gt,qr=new G,xn=new _o,Ns=new _o,Dt=new G;class Hn extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(np(e)?up:cp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(xn.min,Ns.min),xn.expandByPoint(Dt),Dt.addVectors(xn.max,Ns.max),xn.expandByPoint(Dt)):(xn.expandByPoint(Ns.min),xn.expandByPoint(Ns.max))}xn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),Dt.add(qr)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<o;E++)c[E]=new G,u[E]=new G;const d=new G,f=new G,h=new G,_=new Xe,m=new Xe,g=new Xe,p=new G,x=new G;function v(E,I,D){d.fromArray(i,E*3),f.fromArray(i,I*3),h.fromArray(i,D*3),_.fromArray(a,E*2),m.fromArray(a,I*2),g.fromArray(a,D*2),f.sub(d),h.sub(d),m.sub(_),g.sub(_);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),x.copy(h).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(P),c[E].add(p),c[I].add(p),c[D].add(p),u[E].add(x),u[I].add(x),u[D].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,I=M.length;E<I;++E){const D=M[E],P=D.start,O=D.count;for(let z=P,W=P+O;z<W;z+=3)v(n[z+0],n[z+1],n[z+2])}const S=new G,T=new G,b=new G,C=new G;function y(E){b.fromArray(s,E*3),C.copy(b);const I=c[E];S.copy(I),S.sub(b.multiplyScalar(b.dot(I))).normalize(),T.crossVectors(C,I);const P=T.dot(u[E])<0?-1:1;l[E*4]=S.x,l[E*4+1]=S.y,l[E*4+2]=S.z,l[E*4+3]=P}for(let E=0,I=M.length;E<I;++E){const D=M[E],P=D.start,O=D.count;for(let z=P,W=P+O;z<W;z+=3)y(n[z+0]),y(n[z+1]),y(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),m=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?h=l[m]*o.data.stride+o.offset:h=l[m]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new pn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dd=new St,ni=new op,Vo=new ka,Id=new G,Yr=new G,$r=new G,jr=new G,Dl=new G,Wo=new G,Xo=new Xe,qo=new Xe,Yo=new Xe,Ud=new G,Od=new G,Nd=new G,$o=new G,jo=new G;class ai extends Gt{constructor(e=new Hn,t=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Dl.fromBufferAttribute(d,e),a?Wo.addScaledVector(Dl,u):Wo.addScaledVector(Dl.sub(t),u))}t.add(Wo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(Vo.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Vo,Id)===null||ni.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Dd.copy(s).invert(),ni.copy(e.ray).applyMatrix4(Dd),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,s=this.material,a=i.index,o=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(s))for(let h=0,_=d.length;h<_;h++){const m=d[h],g=s[m.materialIndex],p=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=p,M=x;v<M;v+=3){const S=a.getX(v),T=a.getX(v+1),b=a.getX(v+2);n=Ko(this,g,e,ni,l,c,u,S,T,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const h=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=h,g=_;m<g;m+=3){const p=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);n=Ko(this,s,e,ni,l,c,u,p,x,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let h=0,_=d.length;h<_;h++){const m=d[h],g=s[m.materialIndex],p=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=p,M=x;v<M;v+=3){const S=v,T=v+1,b=v+2;n=Ko(this,g,e,ni,l,c,u,S,T,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const h=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=h,g=_;m<g;m+=3){const p=m,x=m+1,v=m+2;n=Ko(this,s,e,ni,l,c,u,p,x,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function D_(r,e,t,n,i,s,a,o){let l;if(e.side===fn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ki,o),l===null)return null;jo.copy(o),jo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(jo);return c<t.near||c>t.far?null:{distance:c,point:jo.clone(),object:r}}function Ko(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Yr),r.getVertexPosition(l,$r),r.getVertexPosition(c,jr);const u=D_(r,e,t,n,Yr,$r,jr,$o);if(u){i&&(Xo.fromBufferAttribute(i,o),qo.fromBufferAttribute(i,l),Yo.fromBufferAttribute(i,c),u.uv=Kn.getInterpolation($o,Yr,$r,jr,Xo,qo,Yo,new Xe)),s&&(Xo.fromBufferAttribute(s,o),qo.fromBufferAttribute(s,l),Yo.fromBufferAttribute(s,c),u.uv1=Kn.getInterpolation($o,Yr,$r,jr,Xo,qo,Yo,new Xe),u.uv2=u.uv1),a&&(Ud.fromBufferAttribute(a,o),Od.fromBufferAttribute(a,l),Nd.fromBufferAttribute(a,c),u.normal=Kn.getInterpolation($o,Yr,$r,jr,Ud,Od,Nd,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};Kn.getNormal(Yr,$r,jr,d.normal),u.face=d}return u}class So extends Hn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function _(m,g,p,x,v,M,S,T,b,C,y){const E=M/b,I=S/C,D=M/2,P=S/2,O=T/2,z=b+1,W=C+1;let H=0,V=0;const Q=new G;for(let L=0;L<W;L++){const de=L*I-P;for(let re=0;re<z;re++){const $=re*E-D;Q[m]=$*x,Q[g]=de*v,Q[p]=O,c.push(Q.x,Q.y,Q.z),Q[m]=0,Q[g]=0,Q[p]=T>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(re/b),d.push(1-L/C),H+=1}}for(let L=0;L<C;L++)for(let de=0;de<b;de++){const re=f+de+z*L,$=f+de+z*(L+1),J=f+(de+1)+z*(L+1),ae=f+(de+1)+z*L;l.push(re,$,ae),l.push($,J,ae),V+=6}o.addGroup(h,V,y),h+=V,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Jt(r){const e={};for(let t=0;t<r.length;t++){const n=ws(r[t]);for(const i in n)e[i]=n[i]}return e}function I_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function dp(r){return r.getRenderTarget()===null?r.outputColorSpace:fi}const U_={clone:ws,merge:Jt};var O_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O_,this.fragmentShader=N_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=I_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fp extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends fp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ml*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Zr=1;class F_ extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new bn(Kr,Zr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new bn(Kr,Zr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new bn(Kr,Zr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new bn(Kr,Zr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new bn(Kr,Zr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new bn(Kr,Zr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ai,e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class hp extends hn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z_ extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(no("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mr?We:yr),this.texture=new hp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new So(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:qi});s.uniforms.tEquirect.value=t;const a=new ai(i,s),o=t.minFilter;return t.minFilter===uo&&(t.minFilter=Nn),new F_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Il=new G,B_=new G,k_=new Qe;class ar{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Il.subVectors(n,t).cross(B_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Il),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||k_.getNormalMatrix(e),i=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new ka,Zo=new G;class tu{constructor(e=new ar,t=new ar,n=new ar,i=new ar,s=new ar,a=new ar){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],d=n[7],f=n[8],h=n[9],_=n[10],m=n[11],g=n[12],p=n[13],x=n[14],v=n[15];return t[0].setComponents(o-i,d-l,m-f,v-g).normalize(),t[1].setComponents(o+i,d+l,m+f,v+g).normalize(),t[2].setComponents(o+s,d+c,m+h,v+p).normalize(),t[3].setComponents(o-s,d-c,m-h,v-p).normalize(),t[4].setComponents(o-a,d-u,m-_,v-x).normalize(),t[5].setComponents(o+a,d+u,m+_,v+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zo.x=i.normal.x>0?e.max.x:e.min.x,Zo.y=i.normal.y>0?e.max.y:e.min.y,Zo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function G_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,f=c.usage,h=r.createBuffer();r.bindBuffer(u,h),r.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=r.SHORT;else if(d instanceof Uint32Array)_=r.UNSIGNED_INT;else if(d instanceof Int32Array)_=r.INT;else if(d instanceof Int8Array)_=r.BYTE;else if(d instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const f=u.array,h=u.updateRange;r.bindBuffer(d,c),h.count===-1?r.bufferSubData(d,0,f):(t?r.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count):r.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class nu extends Hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,h=[],_=[],m=[],g=[];for(let p=0;p<u;p++){const x=p*f-a;for(let v=0;v<c;v++){const M=v*d-s;_.push(M,-x,0),m.push(0,0,1),g.push(v/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const v=x+c*p,M=x+c*(p+1),S=x+1+c*(p+1),T=x+1+c*p;h.push(v,M,T),h.push(M,S,T)}this.setIndex(h),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}var H_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,X_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$_="vec3 transformed = vec3( position );",j_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Z_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,a0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,D0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,F0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,X0=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ov=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Dv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Iv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ov=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,mx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ye={alphamap_fragment:H_,alphamap_pars_fragment:V_,alphatest_fragment:W_,alphatest_pars_fragment:X_,aomap_fragment:q_,aomap_pars_fragment:Y_,begin_vertex:$_,beginnormal_vertex:j_,bsdfs:K_,iridescence_fragment:Z_,bumpmap_pars_fragment:J_,clipping_planes_fragment:Q_,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:r0,color_pars_vertex:s0,color_vertex:o0,common:a0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:u0,displacementmap_vertex:d0,emissivemap_fragment:f0,emissivemap_pars_fragment:h0,encodings_fragment:p0,encodings_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:_0,envmap_pars_fragment:v0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:L0,envmap_vertex:S0,fog_vertex:M0,fog_pars_vertex:y0,fog_fragment:E0,fog_pars_fragment:T0,gradientmap_pars_fragment:b0,lightmap_fragment:w0,lightmap_pars_fragment:A0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:P0,lights_pars_begin:R0,lights_toon_fragment:D0,lights_toon_pars_fragment:I0,lights_phong_fragment:U0,lights_phong_pars_fragment:O0,lights_physical_fragment:N0,lights_physical_pars_fragment:F0,lights_fragment_begin:z0,lights_fragment_maps:B0,lights_fragment_end:k0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:W0,map_fragment:X0,map_pars_fragment:q0,map_particle_fragment:Y0,map_particle_pars_fragment:$0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:K0,morphcolor_vertex:Z0,morphnormal_vertex:J0,morphtarget_pars_vertex:Q0,morphtarget_vertex:ev,normal_fragment_begin:tv,normal_fragment_maps:nv,normal_pars_fragment:iv,normal_pars_vertex:rv,normal_vertex:sv,normalmap_pars_fragment:ov,clearcoat_normal_fragment_begin:av,clearcoat_normal_fragment_maps:lv,clearcoat_pars_fragment:cv,iridescence_pars_fragment:uv,output_fragment:dv,packing:fv,premultiplied_alpha_fragment:hv,project_vertex:pv,dithering_fragment:mv,dithering_pars_fragment:gv,roughnessmap_fragment:_v,roughnessmap_pars_fragment:vv,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:Sv,shadowmap_vertex:Mv,shadowmask_pars_fragment:yv,skinbase_vertex:Ev,skinning_pars_vertex:Tv,skinning_vertex:bv,skinnormal_vertex:wv,specularmap_fragment:Av,specularmap_pars_fragment:Cv,tonemapping_fragment:Pv,tonemapping_pars_fragment:Rv,transmission_fragment:Lv,transmission_pars_fragment:Dv,uv_pars_fragment:Iv,uv_pars_vertex:Uv,uv_vertex:Ov,worldpos_vertex:Nv,background_vert:Fv,background_frag:zv,backgroundCube_vert:Bv,backgroundCube_frag:kv,cube_vert:Gv,cube_frag:Hv,depth_vert:Vv,depth_frag:Wv,distanceRGBA_vert:Xv,distanceRGBA_frag:qv,equirect_vert:Yv,equirect_frag:$v,linedashed_vert:jv,linedashed_frag:Kv,meshbasic_vert:Zv,meshbasic_frag:Jv,meshlambert_vert:Qv,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:rx,meshphong_vert:sx,meshphong_frag:ox,meshphysical_vert:ax,meshphysical_frag:lx,meshtoon_vert:cx,meshtoon_frag:ux,points_vert:dx,points_frag:fx,shadow_vert:hx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},he={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaTest:{value:0}}},ri={basic:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new at(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new at(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Jt([he.points,he.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Jt([he.common,he.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Jt([he.sprite,he.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Jt([he.common,he.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Jt([he.lights,he.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ri.physical={uniforms:Jt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Jo={r:0,b:0,g:0};function _x(r,e,t,n,i,s,a){const o=new at(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function _(g,p){let x=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?m(o,l):v&&v.isColor&&(m(v,1),x=!0),r.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),x=!0;break}(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ba)?(u===void 0&&(u=new ai(new So(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ws(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==We,(d!==v||f!==v.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,h=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ai(new nu(2,2),new Ri({name:"BackgroundMaterial",uniforms:ws(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.colorSpace!==We,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,h=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,p){g.getRGB(Jo,dp(r)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),l=p,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(o,l)},render:_}}function vx(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=g(null);let c=l,u=!1;function d(O,z,W,H,V){let Q=!1;if(a){const L=m(H,W,z);c!==L&&(c=L,h(c.object)),Q=p(O,H,W,V),Q&&x(O,H,W,V)}else{const L=z.wireframe===!0;(c.geometry!==H.id||c.program!==W.id||c.wireframe!==L)&&(c.geometry=H.id,c.program=W.id,c.wireframe=L,Q=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,C(O,z,W,H),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function h(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function m(O,z,W){const H=W.wireframe===!0;let V=o[O.id];V===void 0&&(V={},o[O.id]=V);let Q=V[z.id];Q===void 0&&(Q={},V[z.id]=Q);let L=Q[H];return L===void 0&&(L=g(f()),Q[H]=L),L}function g(O){const z=[],W=[],H=[];for(let V=0;V<i;V++)z[V]=0,W[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:H,object:O,attributes:{},index:null}}function p(O,z,W,H){const V=c.attributes,Q=z.attributes;let L=0;const de=W.getAttributes();for(const re in de)if(de[re].location>=0){const J=V[re];let ae=Q[re];if(ae===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;L++}return c.attributesNum!==L||c.index!==H}function x(O,z,W,H){const V={},Q=z.attributes;let L=0;const de=W.getAttributes();for(const re in de)if(de[re].location>=0){let J=Q[re];J===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),V[re]=ae,L++}c.attributes=V,c.attributesNum=L,c.index=H}function v(){const O=c.newAttributes;for(let z=0,W=O.length;z<W;z++)O[z]=0}function M(O){S(O,0)}function S(O,z){const W=c.newAttributes,H=c.enabledAttributes,V=c.attributeDivisors;W[O]=1,H[O]===0&&(r.enableVertexAttribArray(O),H[O]=1),V[O]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),V[O]=z)}function T(){const O=c.newAttributes,z=c.enabledAttributes;for(let W=0,H=z.length;W<H;W++)z[W]!==O[W]&&(r.disableVertexAttribArray(W),z[W]=0)}function b(O,z,W,H,V,Q){n.isWebGL2===!0&&(W===r.INT||W===r.UNSIGNED_INT)?r.vertexAttribIPointer(O,z,W,V,Q):r.vertexAttribPointer(O,z,W,H,V,Q)}function C(O,z,W,H){if(n.isWebGL2===!1&&(O.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=H.attributes,Q=W.getAttributes(),L=z.defaultAttributeValues;for(const de in Q){const re=Q[de];if(re.location>=0){let $=V[de];if($===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){const J=$.normalized,ae=$.itemSize,oe=t.get($);if(oe===void 0)continue;const N=oe.buffer,Ce=oe.type,Ie=oe.bytesPerElement;if($.isInterleavedBufferAttribute){const le=$.data,we=le.stride,xe=$.offset;if(le.isInstancedInterleavedBuffer){for(let ge=0;ge<re.locationSize;ge++)S(re.location+ge,le.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<re.locationSize;ge++)M(re.location+ge);r.bindBuffer(r.ARRAY_BUFFER,N);for(let ge=0;ge<re.locationSize;ge++)b(re.location+ge,ae/re.locationSize,Ce,J,we*Ie,(xe+ae/re.locationSize*ge)*Ie)}else{if($.isInstancedBufferAttribute){for(let le=0;le<re.locationSize;le++)S(re.location+le,$.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<re.locationSize;le++)M(re.location+le);r.bindBuffer(r.ARRAY_BUFFER,N);for(let le=0;le<re.locationSize;le++)b(re.location+le,ae/re.locationSize,Ce,J,ae*Ie,ae/re.locationSize*le*Ie)}}else if(L!==void 0){const J=L[de];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(re.location,J);break;case 3:r.vertexAttrib3fv(re.location,J);break;case 4:r.vertexAttrib4fv(re.location,J);break;default:r.vertexAttrib1fv(re.location,J)}}}}T()}function y(){D();for(const O in o){const z=o[O];for(const W in z){const H=z[W];for(const V in H)_(H[V].object),delete H[V];delete z[W]}delete o[O]}}function E(O){if(o[O.id]===void 0)return;const z=o[O.id];for(const W in z){const H=z[W];for(const V in H)_(H[V].object),delete H[V];delete z[W]}delete o[O.id]}function I(O){for(const z in o){const W=o[z];if(W[O.id]===void 0)continue;const H=W[O.id];for(const V in H)_(H[V].object),delete H[V];delete W[O.id]}}function D(){P(),u=!0,c!==l&&(c=l,h(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:P,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function xx(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,h;if(i)f=r,h="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](s,c,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function Sx(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=a||e.has("OES_texture_float"),S=v&&M,T=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:h,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:T}}function Mx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ar,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,m=d.clipIntersection,g=d.clipShadows,p=r.get(d);if(!i||_===null||_.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,v=x*4;let M=p.clippingState||null;l.value=M,M=u(_,f,v,h);for(let S=0;S!==v;++S)M[S]=t[S];p.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){const m=d!==null?d.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const p=h+m*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,M=h;v!==m;++v,M+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function yx(r){let e=new WeakMap;function t(a,o){return o===Sc?a.mapping=Es:o===Mc&&(a.mapping=Ts),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Sc||o===Mc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new z_(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class mp extends fp{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,Fd=[.125,.215,.35,.446,.526,.582],cr=20,Ul=new mp,zd=new at;let Ol=null;const lr=(1+Math.sqrt(5))/2,Jr=1/lr,Bd=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,lr,Jr),new G(0,lr,-Jr),new G(Jr,0,lr),new G(-Jr,0,lr),new G(lr,Jr,0),new G(-lr,Jr,0)];class kd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ol=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol),e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:fo,format:Qn,colorSpace:fi,depthBuffer:!1},i=Gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(s)),this._blurMaterial=Tx(s,e,t)}return i}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,Ul)}_sceneToCubeUV(e,t,n,i){const o=new bn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(zd),u.toneMapping=Ai,u.autoClear=!1;const h=new La({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new ai(new So,h);let m=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,m=!0):(h.color.copy(zd),m=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Qo(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Es||e.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ai(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ul)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Bd[(i-1)%Bd.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ai(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*cr-1),m=s/_,g=isFinite(s)?1+Math.floor(u*m):cr;g>cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cr}`);const p=[];let x=0;for(let b=0;b<cr;++b){const C=b/m,y=Math.exp(-C*C/2);p.push(y),b===0?x+=y:b<g&&(x+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const M=this._sizeLods[i],S=3*M*(i>v-os?i-v+os:0),T=4*(this._cubeSize-M);Qo(t,S,T,3*M,2*M),l.setRenderTarget(t),l.render(d,Ul)}}function Ex(r){const e=[],t=[],n=[];let i=r;const s=r-os+1+Fd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-os?l=Fd[a-r+os-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,m=3,g=2,p=1,x=new Float32Array(m*_*h),v=new Float32Array(g*_*h),M=new Float32Array(p*_*h);for(let T=0;T<h;T++){const b=T%3*2/3-1,C=T>2?0:-1,y=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];x.set(y,m*_*T),v.set(f,g*_*T);const E=[T,T,T,T,T,T];M.set(E,p*_*T)}const S=new Hn;S.setAttribute("position",new pn(x,m)),S.setAttribute("uv",new pn(v,g)),S.setAttribute("faceIndex",new pn(M,p)),e.push(S),i>os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gd(r,e,t){const n=new Cr(r,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Tx(r,e,t){const n=new Float32Array(cr),i=new G(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Hd(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Vd(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bx(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sc||l===Mc,u=l===Es||l===Ts;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new kd(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new kd(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ax(r,e,t,n){const i={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const h=d.morphAttributes;for(const _ in h){const m=h[_];for(let g=0,p=m.length;g<p;g++)e.update(m[g],r.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,_=d.attributes.position;let m=0;if(h!==null){const x=h.array;m=h.version;for(let v=0,M=x.length;v<M;v+=3){const S=x[v+0],T=x[v+1],b=x[v+2];f.push(S,T,T,b,b,S)}}else{const x=_.array;m=_.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const S=v+0,T=v+1,b=v+2;f.push(S,T,T,b,b,S)}}const g=new(np(f)?up:cp)(f,1);g.version=m;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Cx(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,h){r.drawElements(s,h,o,f*l),t.update(h,s,1)}function d(f,h,_){if(_===0)return;let m,g;if(i)m=r,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,o,f*l,_),t.update(h,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function Px(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Rx(r,e){return r[0]-e[0]}function Lx(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Dx(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Nt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=_!==void 0?_.length:0;let g=s.get(u);if(g===void 0||g.count!==m){let z=function(){P.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var h=z;g!==void 0&&g.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),S===!0&&(y=3);let E=u.attributes.position.count*y,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*I*4*m),P=new sp(D,E,I,m);P.type=hr,P.needsUpdate=!0;const O=y*4;for(let W=0;W<m;W++){const H=T[W],V=b[W],Q=C[W],L=E*I*4*W;for(let de=0;de<H.count;de++){const re=de*O;v===!0&&(a.fromBufferAttribute(H,de),D[L+re+0]=a.x,D[L+re+1]=a.y,D[L+re+2]=a.z,D[L+re+3]=0),M===!0&&(a.fromBufferAttribute(V,de),D[L+re+4]=a.x,D[L+re+5]=a.y,D[L+re+6]=a.z,D[L+re+7]=0),S===!0&&(a.fromBufferAttribute(Q,de),D[L+re+8]=a.x,D[L+re+9]=a.y,D[L+re+10]=a.z,D[L+re+11]=Q.itemSize===4?a.w:1)}}g={count:m,texture:P,size:new Xe(E,I)},s.set(u,g),u.addEventListener("dispose",z)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const x=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const _=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==_){m=[];for(let M=0;M<_;M++)m[M]=[M,0];n[u.id]=m}for(let M=0;M<_;M++){const S=m[M];S[0]=M,S[1]=f[M]}m.sort(Lx);for(let M=0;M<8;M++)M<_&&m[M][1]?(o[M][0]=m[M][0],o[M][1]=m[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Rx);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const S=o[M],T=S[0],b=S[1];T!==Number.MAX_SAFE_INTEGER&&b?(g&&u.getAttribute("morphTarget"+M)!==g[T]&&u.setAttribute("morphTarget"+M,g[T]),p&&u.getAttribute("morphNormal"+M)!==p[T]&&u.setAttribute("morphNormal"+M,p[T]),i[M]=b,x+=b):(g&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const v=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Ix(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const gp=new hn,_p=new sp,vp=new y_,xp=new hp,Wd=[],Xd=[],qd=new Float32Array(16),Yd=new Float32Array(9),$d=new Float32Array(4);function As(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wd[i];if(s===void 0&&(s=new Float32Array(i),Wd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Rt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ga(r,e){let t=Xd[e];t===void 0&&(t=new Int32Array(e),Xd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ux(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2fv(this.addr,e),Rt(t,e)}}function Nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;r.uniform3fv(this.addr,e),Rt(t,e)}}function Fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4fv(this.addr,e),Rt(t,e)}}function zx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,n))return;$d.set(n),r.uniformMatrix2fv(this.addr,!1,$d),Rt(t,n)}}function Bx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,n))return;Yd.set(n),r.uniformMatrix3fv(this.addr,!1,Yd),Rt(t,n)}}function kx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,n))return;qd.set(n),r.uniformMatrix4fv(this.addr,!1,qd),Rt(t,n)}}function Gx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Hx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2iv(this.addr,e),Rt(t,e)}}function Vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3iv(this.addr,e),Rt(t,e)}}function Wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4iv(this.addr,e),Rt(t,e)}}function Xx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2uiv(this.addr,e),Rt(t,e)}}function Yx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3uiv(this.addr,e),Rt(t,e)}}function $x(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4uiv(this.addr,e),Rt(t,e)}}function jx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||gp,i)}function Kx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vp,i)}function Zx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xp,i)}function Jx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_p,i)}function Qx(r){switch(r){case 5126:return Ux;case 35664:return Ox;case 35665:return Nx;case 35666:return Fx;case 35674:return zx;case 35675:return Bx;case 35676:return kx;case 5124:case 35670:return Gx;case 35667:case 35671:return Hx;case 35668:case 35672:return Vx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}function eS(r,e){r.uniform1fv(this.addr,e)}function tS(r,e){const t=As(e,this.size,2);r.uniform2fv(this.addr,t)}function nS(r,e){const t=As(e,this.size,3);r.uniform3fv(this.addr,t)}function iS(r,e){const t=As(e,this.size,4);r.uniform4fv(this.addr,t)}function rS(r,e){const t=As(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sS(r,e){const t=As(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function oS(r,e){const t=As(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function aS(r,e){r.uniform1iv(this.addr,e)}function lS(r,e){r.uniform2iv(this.addr,e)}function cS(r,e){r.uniform3iv(this.addr,e)}function uS(r,e){r.uniform4iv(this.addr,e)}function dS(r,e){r.uniform1uiv(this.addr,e)}function fS(r,e){r.uniform2uiv(this.addr,e)}function hS(r,e){r.uniform3uiv(this.addr,e)}function pS(r,e){r.uniform4uiv(this.addr,e)}function mS(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gp,s[a])}function gS(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||vp,s[a])}function _S(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||xp,s[a])}function vS(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_p,s[a])}function xS(r){switch(r){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return rS;case 35675:return sS;case 35676:return oS;case 5124:case 35670:return aS;case 35667:case 35671:return lS;case 35668:case 35672:return cS;case 35669:case 35673:return uS;case 5125:return dS;case 36294:return fS;case 36295:return hS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return vS}}class SS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Qx(t.type)}}class MS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xS(t.type)}}class yS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function jd(r,e){r.seq.push(e),r.map[e.id]=e}function ES(r,e,t){const n=r.name,i=n.length;for(Nl.lastIndex=0;;){const s=Nl.exec(n),a=Nl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){jd(t,c===void 0?new SS(o,r,e):new MS(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new yS(o),jd(t,d)),t=d}}}class ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);ES(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Kd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let TS=0;function bS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function wS(r){switch(r){case fi:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Zd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+bS(r.getShaderSource(e),a)}else return i}function AS(r,e){const t=wS(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function CS(r,e){let t;switch(e){case Gg:t="Linear";break;case Hg:t="Reinhard";break;case Vg:t="OptimizedCineon";break;case Wg:t="ACESFilmic";break;case Xg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function PS(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function RS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ws(r){return r!==""}function Jd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DS=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(r){return r.replace(DS,IS)}function IS(r,e){const t=Ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wc(t)}const US=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(r){return r.replace(US,OS)}function OS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function tf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===xg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function FS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function BS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Bg:e="ENVMAP_BLENDING_MIX";break;case kg:e="ENVMAP_BLENDING_ADD";break}return e}function kS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function GS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=NS(t),c=FS(t),u=zS(t),d=BS(t),f=kS(t),h=t.isWebGL2?"":PS(t),_=RS(s),m=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[_].filter(Ws).join(`
`),g.length>0&&(g+=`
`),p=[h,_].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(g=[tf(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[h,tf(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ai?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.encodings_pars_fragment,AS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=wc(a),a=Jd(a,t),a=Qd(a,t),o=wc(o),o=Jd(o,t),o=Qd(o,t),a=ef(a),o=ef(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+a,M=x+p+o,S=Kd(i,i.VERTEX_SHADER,v),T=Kd(i,i.FRAGMENT_SHADER,M);if(i.attachShader(m,S),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const y=i.getProgramInfoLog(m).trim(),E=i.getShaderInfoLog(S).trim(),I=i.getShaderInfoLog(T).trim();let D=!0,P=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,S,T);else{const O=Zd(i,S,"vertex"),z=Zd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+O+`
`+z)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(E===""||I==="")&&(P=!1);P&&(this.diagnostics={runnable:D,programLog:y,vertexShader:{log:E,prefix:g},fragmentShader:{log:I,prefix:p}})}i.deleteShader(S),i.deleteShader(T);let b;this.getUniforms=function(){return b===void 0&&(b=new ma(i,m)),b};let C;return this.getAttributes=function(){return C===void 0&&(C=LS(i,m)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=TS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=T,this}let HS=0;class VS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new WS(e),t.set(e,n)),n}}class WS{constructor(e){this.id=HS++,this.code=e,this.usedTimes=0}}function XS(r,e,t,n,i,s,a){const o=new ap,l=new VS,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return y===1?"uv1":y===2?"uv2":y===3?"uv3":"uv"}function g(y,E,I,D,P){const O=D.fog,z=P.geometry,W=y.isMeshStandardMaterial?D.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),V=H&&H.mapping===Ba?H.image.height:null,Q=_[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const L=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=L!==void 0?L.length:0;let re=0;z.morphAttributes.position!==void 0&&(re=1),z.morphAttributes.normal!==void 0&&(re=2),z.morphAttributes.color!==void 0&&(re=3);let $,J,ae,oe;if(Q){const tt=ri[Q];$=tt.vertexShader,J=tt.fragmentShader}else $=y.vertexShader,J=y.fragmentShader,l.update(y),ae=l.getVertexShaderID(y),oe=l.getFragmentShaderID(y);const N=r.getRenderTarget(),Ce=P.isInstancedMesh===!0,Ie=!!y.map,le=!!y.matcap,we=!!H,xe=!!y.aoMap,ge=!!y.lightMap,Ue=!!y.bumpMap,it=!!y.normalMap,qe=!!y.displacementMap,Y=!!y.emissiveMap,st=!!y.metalnessMap,Re=!!y.roughnessMap,Je=y.clearcoat>0,ft=y.iridescence>0,R=y.sheen>0,w=y.transmission>0,K=Je&&!!y.clearcoatMap,ie=Je&&!!y.clearcoatNormalMap,te=Je&&!!y.clearcoatRoughnessMap,ce=ft&&!!y.iridescenceMap,U=ft&&!!y.iridescenceThicknessMap,ee=R&&!!y.sheenColorMap,X=R&&!!y.sheenRoughnessMap,ue=!!y.specularMap,ve=!!y.specularColorMap,Te=!!y.specularIntensityMap,me=w&&!!y.transmissionMap,ye=w&&!!y.thicknessMap,Ne=!!y.gradientMap,pe=!!y.alphaMap,ot=y.alphaTest>0,F=!!y.extensions,j=!!z.attributes.uv1,ne=!!z.attributes.uv2,fe=!!z.attributes.uv3;return{isWebGL2:u,shaderID:Q,shaderName:y.type,vertexShader:$,fragmentShader:J,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,instancing:Ce,instancingColor:Ce&&P.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:N===null?r.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fi,map:Ie,matcap:le,envMap:we,envMapMode:we&&H.mapping,envMapCubeUVHeight:V,aoMap:xe,lightMap:ge,bumpMap:Ue,normalMap:it,displacementMap:f&&qe,emissiveMap:Y,normalMapObjectSpace:it&&y.normalMapType===d_,normalMapTangentSpace:it&&y.normalMapType===u_,metalnessMap:st,roughnessMap:Re,clearcoat:Je,clearcoatMap:K,clearcoatNormalMap:ie,clearcoatRoughnessMap:te,iridescence:ft,iridescenceMap:ce,iridescenceThicknessMap:U,sheen:R,sheenColorMap:ee,sheenRoughnessMap:X,specularMap:ue,specularColorMap:ve,specularIntensityMap:Te,transmission:w,transmissionMap:me,thicknessMap:ye,gradientMap:Ne,opaque:y.transparent===!1&&y.blending===fs,alphaMap:pe,alphaTest:ot,combine:y.combine,mapUv:Ie&&m(y.map.channel),aoMapUv:xe&&m(y.aoMap.channel),lightMapUv:ge&&m(y.lightMap.channel),bumpMapUv:Ue&&m(y.bumpMap.channel),normalMapUv:it&&m(y.normalMap.channel),displacementMapUv:qe&&m(y.displacementMap.channel),emissiveMapUv:Y&&m(y.emissiveMap.channel),metalnessMapUv:st&&m(y.metalnessMap.channel),roughnessMapUv:Re&&m(y.roughnessMap.channel),clearcoatMapUv:K&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:U&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:X&&m(y.sheenRoughnessMap.channel),specularMapUv:ue&&m(y.specularMap.channel),specularColorMapUv:ve&&m(y.specularColorMap.channel),specularIntensityMapUv:Te&&m(y.specularIntensityMap.channel),transmissionMapUv:me&&m(y.transmissionMap.channel),thicknessMapUv:ye&&m(y.thicknessMap.channel),alphaMapUv:pe&&m(y.alphaMap.channel),vertexTangents:it&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:ne,vertexUv3s:fe,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(Ie||pe),fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:Ai,useLegacyLights:r.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ti,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:F&&y.extensions.derivatives===!0,extensionFragDepth:F&&y.extensions.fragDepth===!0,extensionDrawBuffers:F&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:F&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(E,y),v(E,y),E.push(r.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),y.push(o.mask)}function M(y){const E=_[y.type];let I;if(E){const D=ri[E];I=U_.clone(D.uniforms)}else I=y.uniforms;return I}function S(y,E){let I;for(let D=0,P=c.length;D<P;D++){const O=c[D];if(O.cacheKey===E){I=O,++I.usedTimes;break}}return I===void 0&&(I=new GS(r,E,y,s),c.push(I)),I}function T(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:C}}function qS(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function YS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,h,_,m,g){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},r[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=m,p.group=g),e++,p}function o(d,f,h,_,m,g){const p=a(d,f,h,_,m,g);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(d,f,h,_,m,g){const p=a(d,f,h,_,m,g);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||YS),n.length>1&&n.sort(f||nf),i.length>1&&i.sort(f||nf)}function u(){for(let d=e,f=r.length;d<f;d++){const h=r[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function $S(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new rf,r.set(n,[a])):i>=s.length?(a=new rf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function jS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new at};break;case"SpotLight":t={position:new G,direction:new G,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function KS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ZS=0;function JS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function QS(r,e){const t=new jS,n=KS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new G);const s=new G,a=new St,o=new St;function l(u,d){let f=0,h=0,_=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,g=0,p=0,x=0,v=0,M=0,S=0,T=0,b=0,C=0;u.sort(JS);const y=d===!0?Math.PI:1;for(let I=0,D=u.length;I<D;I++){const P=u[I],O=P.color,z=P.intensity,W=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*z*y,h+=O.g*z*y,_+=O.b*z*y;else if(P.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],z);else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=P.shadow.matrix,M++}i.directional[m]=V,m++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(O).multiplyScalar(z*y),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[p]=V;const Q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[p]=Q.matrix,P.castShadow){const L=n.get(P);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[p]=L,i.spotShadowMap[p]=H,T++}p++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(O).multiplyScalar(z),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=V,x++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*y),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(z*y),V.groundColor.copy(P.groundColor).multiplyScalar(z*y),i.hemi[v]=V,v++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=_;const E=i.hash;(E.directionalLength!==m||E.pointLength!==g||E.spotLength!==p||E.rectAreaLength!==x||E.hemiLength!==v||E.numDirectionalShadows!==M||E.numPointShadows!==S||E.numSpotShadows!==T||E.numSpotMaps!==b)&&(i.directional.length=m,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,E.directionalLength=m,E.pointLength=g,E.spotLength=p,E.rectAreaLength=x,E.hemiLength=v,E.numDirectionalShadows=M,E.numPointShadows=S,E.numSpotShadows=T,E.numSpotMaps=b,i.version=ZS++)}function c(u,d){let f=0,h=0,_=0,m=0,g=0;const p=d.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const M=u[x];if(M.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(M.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function sf(r,e){const t=new QS(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function eM(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new sf(r,e),t.set(s,[l])):a>=o.length?(l=new sf(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class tM extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nM extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sM(r,e,t){let n=new tu;const i=new Xe,s=new Xe,a=new Nt,o=new tM({depthPacking:c_}),l=new nM,c={},u=t.maxTextureSize,d={[Ki]:fn,[fn]:Ki,[Ti]:Ti},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:iM,fragmentShader:rM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ai(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let p=this.type;this.render=function(S,T,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const C=r.getRenderTarget(),y=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),I=r.state;I.setBlending(qi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=p!==Si&&this.type===Si,P=p===Si&&this.type!==Si;for(let O=0,z=S.length;O<z;O++){const W=S[O],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const V=H.getFrameExtents();if(i.multiply(V),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/V.x),i.x=s.x*V.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/V.y),i.y=s.y*V.y,H.mapSize.y=s.y)),H.map===null||D===!0||P===!0){const L=this.type!==Si?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new Cr(i.x,i.y,L),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const Q=H.getViewportCount();for(let L=0;L<Q;L++){const de=H.getViewport(L);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),I.viewport(a),H.updateMatrices(W,L),n=H.getFrustum(),M(T,b,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Si&&x(H,b),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(C,y,E)};function x(S,T){const b=e.update(m);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Cr(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,b,f,m,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,b,h,m,null)}function v(S,T,b,C){let y=null;const E=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)y=E;else if(y=b.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=y.uuid,D=T.uuid;let P=c[I];P===void 0&&(P={},c[I]=P);let O=P[D];O===void 0&&(O=y.clone(),P[D]=O),y=O}if(y.visible=T.visible,y.wireframe=T.wireframe,C===Si?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=r.properties.get(y);I.light=b}return y}function M(S,T,b,C,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Si)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const D=e.update(S),P=S.material;if(Array.isArray(P)){const O=D.groups;for(let z=0,W=O.length;z<W;z++){const H=O[z],V=P[H.materialIndex];if(V&&V.visible){const Q=v(S,V,C,y);r.renderBufferDirect(b,null,D,Q,S,H)}}}else if(P.visible){const O=v(S,P,C,y);r.renderBufferDirect(b,null,D,O,S,null)}}const I=S.children;for(let D=0,P=I.length;D<P;D++)M(I[D],T,b,C,y)}}function oM(r,e,t){const n=t.isWebGL2;function i(){let F=!1;const j=new Nt;let ne=null;const fe=new Nt(0,0,0,0);return{setMask:function(be){ne!==be&&!F&&(r.colorMask(be,be,be,be),ne=be)},setLocked:function(be){F=be},setClear:function(be,tt,je,_t,Fe){Fe===!0&&(be*=_t,tt*=_t,je*=_t),j.set(be,tt,je,_t),fe.equals(j)===!1&&(r.clearColor(be,tt,je,_t),fe.copy(j))},reset:function(){F=!1,ne=null,fe.set(-1,0,0,0)}}}function s(){let F=!1,j=null,ne=null,fe=null;return{setTest:function(be){be?N(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(be){j!==be&&!F&&(r.depthMask(be),j=be)},setFunc:function(be){if(ne!==be){switch(be){case Dg:r.depthFunc(r.NEVER);break;case Ig:r.depthFunc(r.ALWAYS);break;case Ug:r.depthFunc(r.LESS);break;case xc:r.depthFunc(r.LEQUAL);break;case Og:r.depthFunc(r.EQUAL);break;case Ng:r.depthFunc(r.GEQUAL);break;case Fg:r.depthFunc(r.GREATER);break;case zg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=be}},setLocked:function(be){F=be},setClear:function(be){fe!==be&&(r.clearDepth(be),fe=be)},reset:function(){F=!1,j=null,ne=null,fe=null}}}function a(){let F=!1,j=null,ne=null,fe=null,be=null,tt=null,je=null,_t=null,Fe=null;return{setTest:function(_e){F||(_e?N(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(_e){j!==_e&&!F&&(r.stencilMask(_e),j=_e)},setFunc:function(_e,se,Ae){(ne!==_e||fe!==se||be!==Ae)&&(r.stencilFunc(_e,se,Ae),ne=_e,fe=se,be=Ae)},setOp:function(_e,se,Ae){(tt!==_e||je!==se||_t!==Ae)&&(r.stencilOp(_e,se,Ae),tt=_e,je=se,_t=Ae)},setLocked:function(_e){F=_e},setClear:function(_e){Fe!==_e&&(r.clearStencil(_e),Fe=_e)},reset:function(){F=!1,j=null,ne=null,fe=null,be=null,tt=null,je=null,_t=null,Fe=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let f={},h={},_=new WeakMap,m=[],g=null,p=!1,x=null,v=null,M=null,S=null,T=null,b=null,C=null,y=!1,E=null,I=null,D=null,P=null,O=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,H=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=H>=2);let Q=null,L={};const de=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),$=new Nt().fromArray(de),J=new Nt().fromArray(re);function ae(F,j,ne,fe){const be=new Uint8Array(4),tt=r.createTexture();r.bindTexture(F,tt),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<ne;je++)n&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(j,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(j+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return tt}const oe={};oe[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(oe[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(r.DEPTH_TEST),l.setFunc(xc),qe(!1),Y(Wu),N(r.CULL_FACE),Ue(qi);function N(F){f[F]!==!0&&(r.enable(F),f[F]=!0)}function Ce(F){f[F]!==!1&&(r.disable(F),f[F]=!1)}function Ie(F,j){return h[F]!==j?(r.bindFramebuffer(F,j),h[F]=j,n&&(F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=j),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=j)),!0):!1}function le(F,j){let ne=m,fe=!1;if(F)if(ne=_.get(j),ne===void 0&&(ne=[],_.set(j,ne)),F.isWebGLMultipleRenderTargets){const be=F.texture;if(ne.length!==be.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,je=be.length;tt<je;tt++)ne[tt]=r.COLOR_ATTACHMENT0+tt;ne.length=be.length,fe=!0}}else ne[0]!==r.COLOR_ATTACHMENT0&&(ne[0]=r.COLOR_ATTACHMENT0,fe=!0);else ne[0]!==r.BACK&&(ne[0]=r.BACK,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function we(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const xe={[ts]:r.FUNC_ADD,[Mg]:r.FUNC_SUBTRACT,[yg]:r.FUNC_REVERSE_SUBTRACT};if(n)xe[Yu]=r.MIN,xe[$u]=r.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(xe[Yu]=F.MIN_EXT,xe[$u]=F.MAX_EXT)}const ge={[Eg]:r.ZERO,[Tg]:r.ONE,[bg]:r.SRC_COLOR,[jh]:r.SRC_ALPHA,[Lg]:r.SRC_ALPHA_SATURATE,[Pg]:r.DST_COLOR,[Ag]:r.DST_ALPHA,[wg]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[Rg]:r.ONE_MINUS_DST_COLOR,[Cg]:r.ONE_MINUS_DST_ALPHA};function Ue(F,j,ne,fe,be,tt,je,_t){if(F===qi){p===!0&&(Ce(r.BLEND),p=!1);return}if(p===!1&&(N(r.BLEND),p=!0),F!==Sg){if(F!==x||_t!==y){if((v!==ts||T!==ts)&&(r.blendEquation(r.FUNC_ADD),v=ts,T=ts),_t)switch(F){case fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ra:r.blendFunc(r.ONE,r.ONE);break;case Xu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ra:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,S=null,b=null,C=null,x=F,y=_t}return}be=be||j,tt=tt||ne,je=je||fe,(j!==v||be!==T)&&(r.blendEquationSeparate(xe[j],xe[be]),v=j,T=be),(ne!==M||fe!==S||tt!==b||je!==C)&&(r.blendFuncSeparate(ge[ne],ge[fe],ge[tt],ge[je]),M=ne,S=fe,b=tt,C=je),x=F,y=!1}function it(F,j){F.side===Ti?Ce(r.CULL_FACE):N(r.CULL_FACE);let ne=F.side===fn;j&&(ne=!ne),qe(ne),F.blending===fs&&F.transparent===!1?Ue(qi):Ue(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const fe=F.stencilWrite;c.setTest(fe),fe&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){E!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),E=F)}function Y(F){F!==_g?(N(r.CULL_FACE),F!==I&&(F===Wu?r.cullFace(r.BACK):F===vg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),I=F}function st(F){F!==D&&(W&&r.lineWidth(F),D=F)}function Re(F,j,ne){F?(N(r.POLYGON_OFFSET_FILL),(P!==j||O!==ne)&&(r.polygonOffset(j,ne),P=j,O=ne)):Ce(r.POLYGON_OFFSET_FILL)}function Je(F){F?N(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function ft(F){F===void 0&&(F=r.TEXTURE0+z-1),Q!==F&&(r.activeTexture(F),Q=F)}function R(F,j,ne){ne===void 0&&(Q===null?ne=r.TEXTURE0+z-1:ne=Q);let fe=L[ne];fe===void 0&&(fe={type:void 0,texture:void 0},L[ne]=fe),(fe.type!==F||fe.texture!==j)&&(Q!==ne&&(r.activeTexture(ne),Q=ne),r.bindTexture(F,j||oe[F]),fe.type=F,fe.texture=j)}function w(){const F=L[Q];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(F){$.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),$.copy(F))}function ye(F){J.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),J.copy(F))}function Ne(F,j){let ne=d.get(j);ne===void 0&&(ne=new WeakMap,d.set(j,ne));let fe=ne.get(F);fe===void 0&&(fe=r.getUniformBlockIndex(j,F.name),ne.set(F,fe))}function pe(F,j){const fe=d.get(j).get(F);u.get(j)!==fe&&(r.uniformBlockBinding(j,fe,F.__bindingPointIndex),u.set(j,fe))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Q=null,L={},h={},_=new WeakMap,m=[],g=null,p=!1,x=null,v=null,M=null,S=null,T=null,b=null,C=null,y=!1,E=null,I=null,D=null,P=null,O=null,$.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:N,disable:Ce,bindFramebuffer:Ie,drawBuffers:le,useProgram:we,setBlending:Ue,setMaterial:it,setFlipSided:qe,setCullFace:Y,setLineWidth:st,setPolygonOffset:Re,setScissorTest:Je,activeTexture:ft,bindTexture:R,unbindTexture:w,compressedTexImage2D:K,compressedTexImage3D:ie,texImage2D:ve,texImage3D:Te,updateUBOMapping:Ne,uniformBlockBinding:pe,texStorage2D:X,texStorage3D:ue,texSubImage2D:te,texSubImage3D:ce,compressedTexSubImage2D:U,compressedTexSubImage3D:ee,scissor:me,viewport:ye,reset:ot}}function aM(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,w){return p?new OffscreenCanvas(R,w):ho("canvas")}function v(R,w,K,ie){let te=1;if((R.width>ie||R.height>ie)&&(te=ie/Math.max(R.width,R.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=w?p_:Math.floor,U=ce(te*R.width),ee=ce(te*R.height);m===void 0&&(m=x(U,ee));const X=K?x(U,ee):m;return X.width=U,X.height=ee,X.getContext("2d").drawImage(R,0,0,U,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+U+"x"+ee+")."),X}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return Md(R.width)&&Md(R.height)}function S(R){return o?!1:R.wrapS!==Jn||R.wrapT!==Jn||R.minFilter!==tn&&R.minFilter!==Nn}function T(R,w){return R.generateMipmaps&&w&&R.minFilter!==tn&&R.minFilter!==Nn}function b(R){r.generateMipmap(R)}function C(R,w,K,ie,te=!1){if(o===!1)return w;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=w;return w===r.RED&&(K===r.FLOAT&&(ce=r.R32F),K===r.HALF_FLOAT&&(ce=r.R16F),K===r.UNSIGNED_BYTE&&(ce=r.R8)),w===r.RG&&(K===r.FLOAT&&(ce=r.RG32F),K===r.HALF_FLOAT&&(ce=r.RG16F),K===r.UNSIGNED_BYTE&&(ce=r.RG8)),w===r.RGBA&&(K===r.FLOAT&&(ce=r.RGBA32F),K===r.HALF_FLOAT&&(ce=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ce=ie===We&&te===!1?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)),(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(R,w,K){return T(R,K)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==Nn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){return R===tn||R===ju||R===ll?r.NEAREST:r.LINEAR}function I(R){const w=R.target;w.removeEventListener("dispose",I),P(w),w.isVideoTexture&&_.delete(w)}function D(R){const w=R.target;w.removeEventListener("dispose",D),z(w)}function P(R){const w=n.get(R);if(w.__webglInit===void 0)return;const K=R.source,ie=g.get(K);if(ie){const te=ie[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&O(R),Object.keys(ie).length===0&&g.delete(K)}n.remove(R)}function O(R){const w=n.get(R);r.deleteTexture(w.__webglTexture);const K=R.source,ie=g.get(K);delete ie[w.__cacheKey],a.memory.textures--}function z(R){const w=R.texture,K=n.get(R),ie=n.get(w);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(K.__webglFramebuffer[te]),K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&r.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let te=0;te<K.__webglColorRenderbuffer.length;te++)K.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(K.__webglColorRenderbuffer[te]);K.__webglDepthRenderbuffer&&r.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,ce=w.length;te<ce;te++){const U=n.get(w[te]);U.__webglTexture&&(r.deleteTexture(U.__webglTexture),a.memory.textures--),n.remove(w[te])}n.remove(w),n.remove(R)}let W=0;function H(){W=0}function V(){const R=W;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),W+=1,R}function Q(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function L(R,w){const K=n.get(R);if(R.isVideoTexture&&Je(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(K,R,w);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+w)}function de(R,w){const K=n.get(R);if(R.version>0&&K.__version!==R.version){Ce(K,R,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+w)}function re(R,w){const K=n.get(R);if(R.version>0&&K.__version!==R.version){Ce(K,R,w);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+w)}function $(R,w){const K=n.get(R);if(R.version>0&&K.__version!==R.version){Ie(K,R,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+w)}const J={[yc]:r.REPEAT,[Jn]:r.CLAMP_TO_EDGE,[Ec]:r.MIRRORED_REPEAT},ae={[tn]:r.NEAREST,[ju]:r.NEAREST_MIPMAP_NEAREST,[ll]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[qg]:r.LINEAR_MIPMAP_NEAREST,[uo]:r.LINEAR_MIPMAP_LINEAR};function oe(R,w,K){if(K?(r.texParameteri(R,r.TEXTURE_WRAP_S,J[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,J[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,J[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ae[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ae[w.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==Jn||w.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,E(w.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==tn&&w.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===tn||w.minFilter!==ll&&w.minFilter!==uo||w.type===hr&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===fo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function N(R,w){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",I));const ie=w.source;let te=g.get(ie);te===void 0&&(te={},g.set(ie,te));const ce=Q(w);if(ce!==R.__cacheKey){te[ce]===void 0&&(te[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,K=!0),te[ce].usedTimes++;const U=te[R.__cacheKey];U!==void 0&&(te[R.__cacheKey].usedTimes--,U.usedTimes===0&&O(w)),R.__cacheKey=ce,R.__webglTexture=te[ce].texture}return K}function Ce(R,w,K){let ie=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=r.TEXTURE_3D);const te=N(R,w),ce=w.source;t.bindTexture(ie,R.__webglTexture,r.TEXTURE0+K);const U=n.get(ce);if(ce.version!==U.__version||te===!0){t.activeTexture(r.TEXTURE0+K),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ee=S(w)&&M(w.image)===!1;let X=v(w.image,ee,!1,u);X=ft(w,X);const ue=M(X)||o,ve=s.convert(w.format,w.colorSpace);let Te=s.convert(w.type),me=C(w.internalFormat,ve,Te,w.colorSpace);oe(ie,w,ue);let ye;const Ne=w.mipmaps,pe=o&&w.isVideoTexture!==!0,ot=U.__version===void 0||te===!0,F=y(w,X,ue);if(w.isDepthTexture)me=r.DEPTH_COMPONENT,o?w.type===hr?me=r.DEPTH_COMPONENT32F:w.type===fr?me=r.DEPTH_COMPONENT24:w.type===hs?me=r.DEPTH24_STENCIL8:me=r.DEPTH_COMPONENT16:w.type===hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Sr&&me===r.DEPTH_COMPONENT&&w.type!==Qh&&w.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=fr,Te=s.convert(w.type)),w.format===bs&&me===r.DEPTH_COMPONENT&&(me=r.DEPTH_STENCIL,w.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=hs,Te=s.convert(w.type))),ot&&(pe?t.texStorage2D(r.TEXTURE_2D,1,me,X.width,X.height):t.texImage2D(r.TEXTURE_2D,0,me,X.width,X.height,0,ve,Te,null));else if(w.isDataTexture)if(Ne.length>0&&ue){pe&&ot&&t.texStorage2D(r.TEXTURE_2D,F,me,Ne[0].width,Ne[0].height);for(let j=0,ne=Ne.length;j<ne;j++)ye=Ne[j],pe?t.texSubImage2D(r.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,Te,ye.data):t.texImage2D(r.TEXTURE_2D,j,me,ye.width,ye.height,0,ve,Te,ye.data);w.generateMipmaps=!1}else pe?(ot&&t.texStorage2D(r.TEXTURE_2D,F,me,X.width,X.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,X.width,X.height,ve,Te,X.data)):t.texImage2D(r.TEXTURE_2D,0,me,X.width,X.height,0,ve,Te,X.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){pe&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,F,me,Ne[0].width,Ne[0].height,X.depth);for(let j=0,ne=Ne.length;j<ne;j++)ye=Ne[j],w.format!==Qn?ve!==null?pe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,X.depth,ve,ye.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,me,ye.width,ye.height,X.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,X.depth,ve,Te,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,me,ye.width,ye.height,X.depth,0,ve,Te,ye.data)}else{pe&&ot&&t.texStorage2D(r.TEXTURE_2D,F,me,Ne[0].width,Ne[0].height);for(let j=0,ne=Ne.length;j<ne;j++)ye=Ne[j],w.format!==Qn?ve!==null?pe?t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,j,me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(r.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,Te,ye.data):t.texImage2D(r.TEXTURE_2D,j,me,ye.width,ye.height,0,ve,Te,ye.data)}else if(w.isDataArrayTexture)pe?(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,F,me,X.width,X.height,X.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ve,Te,X.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,X.width,X.height,X.depth,0,ve,Te,X.data);else if(w.isData3DTexture)pe?(ot&&t.texStorage3D(r.TEXTURE_3D,F,me,X.width,X.height,X.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ve,Te,X.data)):t.texImage3D(r.TEXTURE_3D,0,me,X.width,X.height,X.depth,0,ve,Te,X.data);else if(w.isFramebufferTexture){if(ot)if(pe)t.texStorage2D(r.TEXTURE_2D,F,me,X.width,X.height);else{let j=X.width,ne=X.height;for(let fe=0;fe<F;fe++)t.texImage2D(r.TEXTURE_2D,fe,me,j,ne,0,ve,Te,null),j>>=1,ne>>=1}}else if(Ne.length>0&&ue){pe&&ot&&t.texStorage2D(r.TEXTURE_2D,F,me,Ne[0].width,Ne[0].height);for(let j=0,ne=Ne.length;j<ne;j++)ye=Ne[j],pe?t.texSubImage2D(r.TEXTURE_2D,j,0,0,ve,Te,ye):t.texImage2D(r.TEXTURE_2D,j,me,ve,Te,ye);w.generateMipmaps=!1}else pe?(ot&&t.texStorage2D(r.TEXTURE_2D,F,me,X.width,X.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Te,X)):t.texImage2D(r.TEXTURE_2D,0,me,ve,Te,X);T(w,ue)&&b(ie),U.__version=ce.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Ie(R,w,K){if(w.image.length!==6)return;const ie=N(R,w),te=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+K);const ce=n.get(te);if(te.version!==ce.__version||ie===!0){t.activeTexture(r.TEXTURE0+K),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const U=w.isCompressedTexture||w.image[0].isCompressedTexture,ee=w.image[0]&&w.image[0].isDataTexture,X=[];for(let j=0;j<6;j++)!U&&!ee?X[j]=v(w.image[j],!1,!0,c):X[j]=ee?w.image[j].image:w.image[j],X[j]=ft(w,X[j]);const ue=X[0],ve=M(ue)||o,Te=s.convert(w.format,w.colorSpace),me=s.convert(w.type),ye=C(w.internalFormat,Te,me,w.colorSpace),Ne=o&&w.isVideoTexture!==!0,pe=ce.__version===void 0||ie===!0;let ot=y(w,ue,ve);oe(r.TEXTURE_CUBE_MAP,w,ve);let F;if(U){Ne&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ye,ue.width,ue.height);for(let j=0;j<6;j++){F=X[j].mipmaps;for(let ne=0;ne<F.length;ne++){const fe=F[ne];w.format!==Qn?Te!==null?Ne?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,fe.width,fe.height,Te,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,fe.width,fe.height,Te,me,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,ye,fe.width,fe.height,0,Te,me,fe.data)}}}else{F=w.mipmaps,Ne&&pe&&(F.length>0&&ot++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ye,X[0].width,X[0].height));for(let j=0;j<6;j++)if(ee){Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,X[j].width,X[j].height,Te,me,X[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ye,X[j].width,X[j].height,0,Te,me,X[j].data);for(let ne=0;ne<F.length;ne++){const be=F[ne].image[j].image;Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,be.width,be.height,Te,me,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,ye,be.width,be.height,0,Te,me,be.data)}}else{Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,me,X[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ye,Te,me,X[j]);for(let ne=0;ne<F.length;ne++){const fe=F[ne];Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,Te,me,fe.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,ye,Te,me,fe.image[j])}}}T(w,ve)&&b(r.TEXTURE_CUBE_MAP),ce.__version=te.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function le(R,w,K,ie,te){const ce=s.convert(K.format,K.colorSpace),U=s.convert(K.type),ee=C(K.internalFormat,ce,U,K.colorSpace);n.get(w).__hasExternalTextures||(te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,0,ee,w.width,w.height,w.depth,0,ce,U,null):t.texImage2D(te,0,ee,w.width,w.height,0,ce,U,null)),t.bindFramebuffer(r.FRAMEBUFFER,R),Re(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,te,n.get(K).__webglTexture,0,st(w)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,te,n.get(K).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,w,K){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let ie=r.DEPTH_COMPONENT16;if(K||Re(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===hr?ie=r.DEPTH_COMPONENT32F:te.type===fr&&(ie=r.DEPTH_COMPONENT24));const ce=st(w);Re(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,ie,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,ie,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const ie=st(w);K&&Re(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,w.width,w.height):Re(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<ie.length;te++){const ce=ie[te],U=s.convert(ce.format,ce.colorSpace),ee=s.convert(ce.type),X=C(ce.internalFormat,U,ee,ce.colorSpace),ue=st(w);K&&Re(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,X,w.width,w.height):Re(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,X,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,X,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);const ie=n.get(w.depthTexture).__webglTexture,te=st(w);if(w.depthTexture.format===Sr)Re(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(w.depthTexture.format===bs)Re(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ge(R){const w=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");xe(w.__webglFramebuffer,R)}else if(K){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=r.createRenderbuffer(),we(w.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),we(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,w,K){const ie=n.get(R);w!==void 0&&le(ie.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),K!==void 0&&ge(R)}function it(R){const w=R.texture,K=n.get(R),ie=n.get(w);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=w.version,a.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,U=M(R)||o;if(te){K.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)K.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(K.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const ee=R.texture;for(let X=0,ue=ee.length;X<ue;X++){const ve=n.get(ee[X]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Re(R)===!1){const ee=ce?w:[w];K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let X=0;X<ee.length;X++){const ue=ee[X];K.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[X]);const ve=s.convert(ue.format,ue.colorSpace),Te=s.convert(ue.type),me=C(ue.internalFormat,ve,Te,ue.colorSpace,R.isXRRenderTarget===!0),ye=st(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,me,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,K.__webglColorRenderbuffer[X])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),we(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),oe(r.TEXTURE_CUBE_MAP,w,U);for(let ee=0;ee<6;ee++)le(K.__webglFramebuffer[ee],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee);T(w,U)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ee=R.texture;for(let X=0,ue=ee.length;X<ue;X++){const ve=ee[X],Te=n.get(ve);t.bindTexture(r.TEXTURE_2D,Te.__webglTexture),oe(r.TEXTURE_2D,ve,U),le(K.__webglFramebuffer,R,ve,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D),T(ve,U)&&b(r.TEXTURE_2D)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ee=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ee,ie.__webglTexture),oe(ee,w,U),le(K.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,ee),T(w,U)&&b(ee),t.unbindTexture()}R.depthBuffer&&ge(R)}function qe(R){const w=M(R)||o,K=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,te=K.length;ie<te;ie++){const ce=K[ie];if(T(ce,w)){const U=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ee=n.get(ce).__webglTexture;t.bindTexture(U,ee),b(U),t.unbindTexture()}}}function Y(R){if(o&&R.samples>0&&Re(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],K=R.width,ie=R.height;let te=r.COLOR_BUFFER_BIT;const ce=[],U=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=n.get(R),X=R.isWebGLMultipleRenderTargets===!0;if(X)for(let ue=0;ue<w.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){ce.push(r.COLOR_ATTACHMENT0+ue),R.depthBuffer&&ce.push(U);const ve=ee.__ignoreDepthValues!==void 0?ee.__ignoreDepthValues:!1;if(ve===!1&&(R.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),X&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ue]),ve===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[U]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[U])),X){const Te=n.get(w[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Te,0)}r.blitFramebuffer(0,0,K,ie,0,0,K,ie,te,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),X)for(let ue=0;ue<w.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ue]);const ve=n.get(w[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}}function st(R){return Math.min(d,R.samples)}function Re(R){const w=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Je(R){const w=a.render.frame;_.get(R)!==w&&(_.set(R,w),R.update())}function ft(R,w){const K=R.colorSpace,ie=R.format,te=R.type;return R.isCompressedTexture===!0||R.format===Tc||K!==fi&&K!==yr&&(K===We?o===!1?e.has("EXT_sRGB")===!0&&ie===Qn?(R.format=Tc,R.minFilter=Nn,R.generateMipmaps=!1):w=ip.sRGBToLinear(w):(ie!==Qn||te!==Ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=L,this.setTexture2DArray=de,this.setTexture3D=re,this.setTextureCube=$,this.rebindTextures=Ue,this.setupRenderTarget=it,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Re}function lM(r,e,t){const n=t.isWebGL2;function i(s,a=yr){let o;if(s===Ar)return r.UNSIGNED_BYTE;if(s===Kg)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Zg)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Yg)return r.BYTE;if(s===$g)return r.SHORT;if(s===Qh)return r.UNSIGNED_SHORT;if(s===jg)return r.INT;if(s===fr)return r.UNSIGNED_INT;if(s===hr)return r.FLOAT;if(s===fo)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Jg)return r.ALPHA;if(s===Qn)return r.RGBA;if(s===Qg)return r.LUMINANCE;if(s===e_)return r.LUMINANCE_ALPHA;if(s===Sr)return r.DEPTH_COMPONENT;if(s===bs)return r.DEPTH_STENCIL;if(s===Tc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===t_)return r.RED;if(s===n_)return r.RED_INTEGER;if(s===i_)return r.RG;if(s===r_)return r.RG_INTEGER;if(s===s_)return r.RGBA_INTEGER;if(s===cl||s===ul||s===dl||s===fl)if(a===We)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===cl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===cl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ul)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===dl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ku||s===Zu||s===Ju||s===Qu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ku)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ju)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===o_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ed||s===td)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ed)return a===We?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===td)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nd||s===id||s===rd||s===sd||s===od||s===ad||s===ld||s===cd||s===ud||s===dd||s===fd||s===hd||s===pd||s===md)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===nd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===id)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===od)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ad)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ld)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ud)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===md)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===hl)return a===We?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===a_||s===gd||s===_d||s===vd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===hl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===gd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_d)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hs?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class cM extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ea extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ea;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dM extends hn{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Sr,u!==Sr&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sr&&(n=fr),n===void 0&&u===bs&&(n=hs),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1}}class fM extends Lr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const m=t.getContextAttributes();let g=null,p=null;const x=[],v=[],M=new Set,S=new Map,T=new bn;T.layers.enable(1),T.viewport=new Nt;const b=new bn;b.layers.enable(2),b.viewport=new Nt;const C=[T,b],y=new cM;y.layers.enable(1),y.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=x[$];return J===void 0&&(J=new Fl,x[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=x[$];return J===void 0&&(J=new Fl,x[$]=J),J.getGripSpace()},this.getHand=function($){let J=x[$];return J===void 0&&(J=new Fl,x[$]=J),J.getHandSpace()};function D($){const J=v.indexOf($.inputSource);if(J===-1)return;const ae=x[J];ae!==void 0&&(ae.update($.inputSource,$.frame,c||a),ae.dispatchEvent({type:$.type,data:$.inputSource}))}function P(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",O);for(let $=0;$<x.length;$++){const J=v[$];J!==null&&(v[$]=null,x[$].disconnect(J))}E=null,I=null,e.setRenderTarget(g),h=null,f=null,d=null,i=null,p=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",P),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:h}),p=new Cr(h.framebufferWidth,h.framebufferHeight,{format:Qn,type:Ar,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ae=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?bs:Sr,ae=m.stencil?hs:fr);const N={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(N),i.updateRenderState({layers:[f]}),p=new Cr(f.textureWidth,f.textureHeight,{format:Qn,type:Ar,depthTexture:new dM(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ce=e.properties.get(p);Ce.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O($){for(let J=0;J<$.removed.length;J++){const ae=$.removed[J],oe=v.indexOf(ae);oe>=0&&(v[oe]=null,x[oe].disconnect(ae))}for(let J=0;J<$.added.length;J++){const ae=$.added[J];let oe=v.indexOf(ae);if(oe===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=v.length){v.push(ae),oe=Ce;break}else if(v[Ce]===null){v[Ce]=ae,oe=Ce;break}if(oe===-1)break}const N=x[oe];N&&N.connect(ae)}}const z=new G,W=new G;function H($,J,ae){z.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(ae.matrixWorld);const oe=z.distanceTo(W),N=J.projectionMatrix.elements,Ce=ae.projectionMatrix.elements,Ie=N[14]/(N[10]-1),le=N[14]/(N[10]+1),we=(N[9]+1)/N[5],xe=(N[9]-1)/N[5],ge=(N[8]-1)/N[0],Ue=(Ce[8]+1)/Ce[0],it=Ie*ge,qe=Ie*Ue,Y=oe/(-ge+Ue),st=Y*-ge;J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(st),$.translateZ(Y),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const Re=Ie+Y,Je=le+Y,ft=it-st,R=qe+(oe-st),w=we*le/Je*Re,K=xe*le/Je*Re;$.projectionMatrix.makePerspective(ft,R,w,K,Re,Je),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function V($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;y.near=b.near=T.near=$.near,y.far=b.far=T.far=$.far,(E!==y.near||I!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,I=y.far);const J=$.parent,ae=y.cameras;V(y,J);for(let oe=0;oe<ae.length;oe++)V(ae[oe],J);ae.length===2?H(y,T,b):y.projectionMatrix.copy(T.projectionMatrix),Q($,y,J)};function Q($,J,ae){ae===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0);const oe=$.children;for(let N=0,Ce=oe.length;N<Ce;N++)oe[N].updateMatrixWorld(!0);$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.getPlanes=function(){return M};let L=null;function de($,J){if(u=J.getViewerPose(c||a),_=J,u!==null){const ae=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let oe=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let N=0;N<ae.length;N++){const Ce=ae[N];let Ie=null;if(h!==null)Ie=h.getViewport(Ce);else{const we=d.getViewSubImage(f,Ce);Ie=we.viewport,N===0&&(e.setRenderTargetTextures(p,we.colorTexture,f.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(p))}let le=C[N];le===void 0&&(le=new bn,le.layers.enable(N),le.viewport=new Nt,C[N]=le),le.matrix.fromArray(Ce.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ce.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),N===0&&(y.matrix.copy(le.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(le)}}for(let ae=0;ae<x.length;ae++){const oe=v[ae],N=x[ae];oe!==null&&N!==void 0&&N.update(oe,J,c||a)}if(L&&L($,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let ae=null;for(const oe of M)J.detectedPlanes.has(oe)||(ae===null&&(ae=[]),ae.push(oe));if(ae!==null)for(const oe of ae)M.delete(oe),S.delete(oe),n.dispatchEvent({type:"planeremoved",data:oe});for(const oe of J.detectedPlanes)if(!M.has(oe))M.add(oe),S.set(oe,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:oe});else{const N=S.get(oe);oe.lastChangedTime>N&&(S.set(oe,oe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:oe}))}}_=null}const re=new pp;re.setAnimationLoop(de),this.setAnimationLoop=function($){L=$},this.dispose=function(){}}}function hM(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,dp(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),m(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pM(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(_(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",g));const S=v.program;n.updateUBOMapping(x,S);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function u(x){const v=d();x.__bindingPointIndex=v;const M=r.createBuffer(),S=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,S,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],M=x.uniforms,S=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let T=0,b=M.length;T<b;T++){const C=M[T];if(h(C,T,S)===!0){const y=C.__offset,E=Array.isArray(C.value)?C.value:[C.value];let I=0;for(let D=0;D<E.length;D++){const P=E[D],O=m(P);typeof P=="number"?(C.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,y+I,C.__data)):P.isMatrix3?(C.__data[0]=P.elements[0],C.__data[1]=P.elements[1],C.__data[2]=P.elements[2],C.__data[3]=P.elements[0],C.__data[4]=P.elements[3],C.__data[5]=P.elements[4],C.__data[6]=P.elements[5],C.__data[7]=P.elements[0],C.__data[8]=P.elements[6],C.__data[9]=P.elements[7],C.__data[10]=P.elements[8],C.__data[11]=P.elements[0]):(P.toArray(C.__data,I),I+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,y,C.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(x,v,M){const S=x.value;if(M[v]===void 0){if(typeof S=="number")M[v]=S;else{const T=Array.isArray(S)?S:[S],b=[];for(let C=0;C<T.length;C++)b.push(T[C].clone());M[v]=b}return!0}else if(typeof S=="number"){if(M[v]!==S)return M[v]=S,!0}else{const T=Array.isArray(M[v])?M[v]:[M[v]],b=Array.isArray(S)?S:[S];for(let C=0;C<T.length;C++){const y=T[C];if(y.equals(b[C])===!1)return y.copy(b[C]),!0}}return!1}function _(x){const v=x.uniforms;let M=0;const S=16;let T=0;for(let b=0,C=v.length;b<C;b++){const y=v[b],E={boundary:0,storage:0},I=Array.isArray(y.value)?y.value:[y.value];for(let D=0,P=I.length;D<P;D++){const O=I[D],z=m(O);E.boundary+=z.boundary,E.storage+=z.storage}if(y.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=M,b>0){T=M%S;const D=S-T;T!==0&&D-E.boundary<0&&(M+=S-T,y.__offset=M)}M+=E.storage}return T=M%S,T>0&&(M+=S-T),x.__size=M,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}function mM(){const r=ho("canvas");return r.style.display="block",r}class ru{constructor(e={}){const{canvas:t=mM(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let h=null,_=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=We,this.useLegacyLights=!0,this.toneMapping=Ai,this.toneMappingExposure=1;const p=this;let x=!1,v=0,M=0,S=null,T=-1,b=null;const C=new Nt,y=new Nt;let E=null,I=t.width,D=t.height,P=1,O=null,z=null;const W=new Nt(0,0,I,D),H=new Nt(0,0,I,D);let V=!1;const Q=new tu;let L=!1,de=!1,re=null;const $=new St,J=new G,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return S===null?P:1}let N=n;function Ce(A,k){for(let q=0;q<A.length;q++){const B=A[q],Z=t.getContext(B,k);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eu}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),N=Ce(k,A),N===null)throw Ce(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ie,le,we,xe,ge,Ue,it,qe,Y,st,Re,Je,ft,R,w,K,ie,te,ce,U,ee,X,ue,ve;function Te(){Ie=new wx(N),le=new Sx(N,Ie,e),Ie.init(le),X=new lM(N,Ie,le),we=new oM(N,Ie,le),xe=new Px(N),ge=new qS,Ue=new aM(N,Ie,we,ge,le,X,xe),it=new yx(p),qe=new bx(p),Y=new G_(N,le),ue=new vx(N,Ie,Y,le),st=new Ax(N,Y,xe,ue),Re=new Ix(N,st,Y,xe),ce=new Dx(N,le,Ue),K=new Mx(ge),Je=new XS(p,it,qe,Ie,le,ue,K),ft=new hM(p,ge),R=new $S,w=new eM(Ie,le),te=new _x(p,it,qe,we,Re,f,l),ie=new sM(p,Re,le),ve=new pM(N,xe,le,we),U=new xx(N,Ie,xe,le),ee=new Cx(N,Ie,xe,le),xe.programs=Je.programs,p.capabilities=le,p.extensions=Ie,p.properties=ge,p.renderLists=R,p.shadowMap=ie,p.state=we,p.info=xe}Te();const me=new fM(p,N);this.xr=me,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(I,D,!1))},this.getSize=function(A){return A.set(I,D)},this.setSize=function(A,k,q=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,D=k,t.width=Math.floor(A*P),t.height=Math.floor(k*P),q===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(I*P,D*P).floor()},this.setDrawingBufferSize=function(A,k,q){I=A,D=k,P=q,t.width=Math.floor(A*q),t.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,k,q,B){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,k,q,B),we.viewport(C.copy(W).multiplyScalar(P).floor())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,k,q,B){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,k,q,B),we.scissor(y.copy(H).multiplyScalar(P).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(A){we.setScissorTest(V=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,k=!0,q=!0){let B=0;A&&(B|=N.COLOR_BUFFER_BIT),k&&(B|=N.DEPTH_BUFFER_BIT),q&&(B|=N.STENCIL_BUFFER_BIT),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),R.dispose(),w.dispose(),ge.dispose(),it.dispose(),qe.dispose(),Re.dispose(),ue.dispose(),ve.dispose(),Je.dispose(),me.dispose(),me.removeEventListener("sessionstart",be),me.removeEventListener("sessionend",tt),re&&(re.dispose(),re=null),je.stop()};function ye(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=xe.autoReset,k=ie.enabled,q=ie.autoUpdate,B=ie.needsUpdate,Z=ie.type;Te(),xe.autoReset=A,ie.enabled=k,ie.autoUpdate=q,ie.needsUpdate=B,ie.type=Z}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const k=A.target;k.removeEventListener("dispose",ot),F(k)}function F(A){j(A),ge.remove(A)}function j(A){const k=ge.get(A).programs;k!==void 0&&(k.forEach(function(q){Je.releaseProgram(q)}),A.isShaderMaterial&&Je.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,B,Z,Se){k===null&&(k=ae);const Me=Z.isMesh&&Z.matrixWorld.determinant()<0,Ee=Et(A,k,q,B,Z);we.setMaterial(B,Me);let De=q.index,He=1;B.wireframe===!0&&(De=st.getWireframeAttribute(q),He=2);const ke=q.drawRange,Le=q.attributes.position;let Be=ke.start*He,ut=(ke.start+ke.count)*He;Se!==null&&(Be=Math.max(Be,Se.start*He),ut=Math.min(ut,(Se.start+Se.count)*He)),De!==null?(Be=Math.max(Be,0),ut=Math.min(ut,De.count)):Le!=null&&(Be=Math.max(Be,0),ut=Math.min(ut,Le.count));const jt=ut-Be;if(jt<0||jt===1/0)return;ue.setup(Z,B,Ee,q,De);let ti,dt=U;if(De!==null&&(ti=Y.get(De),dt=ee,dt.setIndex(ti)),Z.isMesh)B.wireframe===!0?(we.setLineWidth(B.wireframeLinewidth*oe()),dt.setMode(N.LINES)):dt.setMode(N.TRIANGLES);else if(Z.isLine){let Ge=B.linewidth;Ge===void 0&&(Ge=1),we.setLineWidth(Ge*oe()),Z.isLineSegments?dt.setMode(N.LINES):Z.isLineLoop?dt.setMode(N.LINE_LOOP):dt.setMode(N.LINE_STRIP)}else Z.isPoints?dt.setMode(N.POINTS):Z.isSprite&&dt.setMode(N.TRIANGLES);if(Z.isInstancedMesh)dt.renderInstances(Be,jt,Z.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,hi=Math.min(q.instanceCount,Ge);dt.renderInstances(Be,jt,hi)}else dt.render(Be,jt)},this.compile=function(A,k){function q(B,Z,Se){B.transparent===!0&&B.side===Ti&&B.forceSinglePass===!1?(B.side=fn,B.needsUpdate=!0,Oe(B,Z,Se),B.side=Ki,B.needsUpdate=!0,Oe(B,Z,Se),B.side=Ti):Oe(B,Z,Se)}_=w.get(A),_.init(),g.push(_),A.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights(p.useLegacyLights),A.traverse(function(B){const Z=B.material;if(Z)if(Array.isArray(Z))for(let Se=0;Se<Z.length;Se++){const Me=Z[Se];q(Me,A,B)}else q(Z,A,B)}),g.pop(),_=null};let ne=null;function fe(A){ne&&ne(A)}function be(){je.stop()}function tt(){je.start()}const je=new pp;je.setAnimationLoop(fe),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(A){ne=A,me.setAnimationLoop(A),A===null?je.stop():je.start()},me.addEventListener("sessionstart",be),me.addEventListener("sessionend",tt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,k,S),_=w.get(A,g.length),_.init(),g.push(_),$.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix($),de=this.localClippingEnabled,L=K.init(this.clippingPlanes,de),h=R.get(A,m.length),h.init(),m.push(h),_t(A,k,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(O,z),L===!0&&K.beginShadows();const q=_.state.shadowsArray;if(ie.render(q,A,k),L===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,A),_.setupLights(p.useLegacyLights),k.isArrayCamera){const B=k.cameras;for(let Z=0,Se=B.length;Z<Se;Z++){const Me=B[Z];Fe(h,A,Me,Me.viewport)}}else Fe(h,A,k);S!==null&&(Ue.updateMultisampleRenderTarget(S),Ue.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(p,A,k),ue.resetDefaultState(),T=-1,b=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function _t(A,k,q,B){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){B&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);const Me=Re.update(A),Ee=A.material;Ee.visible&&h.push(A,Me,Ee,q,J.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==xe.render.frame&&(A.skeleton.update(),A.skeleton.frame=xe.render.frame);const Me=Re.update(A),Ee=A.material;if(B&&(Me.boundingSphere===null&&Me.computeBoundingSphere(),J.copy(Me.boundingSphere.center).applyMatrix4(A.matrixWorld).applyMatrix4($)),Array.isArray(Ee)){const De=Me.groups;for(let He=0,ke=De.length;He<ke;He++){const Le=De[He],Be=Ee[Le.materialIndex];Be&&Be.visible&&h.push(A,Me,Be,q,J.z,Le)}}else Ee.visible&&h.push(A,Me,Ee,q,J.z,null)}}const Se=A.children;for(let Me=0,Ee=Se.length;Me<Ee;Me++)_t(Se[Me],k,q,B)}function Fe(A,k,q,B){const Z=A.opaque,Se=A.transmissive,Me=A.transparent;_.setupLightsView(q),L===!0&&K.setGlobalState(p.clippingPlanes,q),Se.length>0&&_e(Z,Se,k,q),B&&we.viewport(C.copy(B)),Z.length>0&&se(Z,k,q),Se.length>0&&se(Se,k,q),Me.length>0&&se(Me,k,q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function _e(A,k,q,B){if(re===null){const Ee=le.isWebGL2;re=new Cr(1024,1024,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?fo:Ar,minFilter:uo,samples:Ee&&o===!0?4:0})}const Z=p.getRenderTarget();p.setRenderTarget(re),p.clear();const Se=p.toneMapping;p.toneMapping=Ai,se(A,q,B),Ue.updateMultisampleRenderTarget(re),Ue.updateRenderTargetMipmap(re);let Me=!1;for(let Ee=0,De=k.length;Ee<De;Ee++){const He=k[Ee],ke=He.object,Le=He.geometry,Be=He.material,ut=He.group;if(Be.side===Ti&&ke.layers.test(B.layers)){const jt=Be.side;Be.side=fn,Be.needsUpdate=!0,Ae(ke,q,B,Le,Be,ut),Be.side=jt,Be.needsUpdate=!0,Me=!0}}Me===!0&&(Ue.updateMultisampleRenderTarget(re),Ue.updateRenderTargetMipmap(re)),p.setRenderTarget(Z),p.toneMapping=Se}function se(A,k,q){const B=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Se=A.length;Z<Se;Z++){const Me=A[Z],Ee=Me.object,De=Me.geometry,He=B===null?Me.material:B,ke=Me.group;Ee.layers.test(q.layers)&&Ae(Ee,k,q,De,He,ke)}}function Ae(A,k,q,B,Z,Se){A.onBeforeRender(p,k,q,B,Z,Se),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(p,k,q,B,A,Se),Z.transparent===!0&&Z.side===Ti&&Z.forceSinglePass===!1?(Z.side=fn,Z.needsUpdate=!0,p.renderBufferDirect(q,k,B,Z,A,Se),Z.side=Ki,Z.needsUpdate=!0,p.renderBufferDirect(q,k,B,Z,A,Se),Z.side=Ti):p.renderBufferDirect(q,k,B,Z,A,Se),A.onAfterRender(p,k,q,B,Z,Se)}function Oe(A,k,q){k.isScene!==!0&&(k=ae);const B=ge.get(A),Z=_.state.lights,Se=_.state.shadowsArray,Me=Z.state.version,Ee=Je.getParameters(A,Z.state,Se,k,q),De=Je.getProgramCacheKey(Ee);let He=B.programs;B.environment=A.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(A.isMeshStandardMaterial?qe:it).get(A.envMap||B.environment),He===void 0&&(A.addEventListener("dispose",ot),He=new Map,B.programs=He);let ke=He.get(De);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===Me)return Ve(A,Ee),ke}else Ee.uniforms=Je.getUniforms(A),A.onBuild(q,Ee,p),A.onBeforeCompile(Ee,p),ke=Je.acquireProgram(Ee,De),He.set(De,ke),B.uniforms=Ee.uniforms;const Le=B.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=K.uniform),Ve(A,Ee),B.needsLights=ht(A),B.lightsStateVersion=Me,B.needsLights&&(Le.ambientLightColor.value=Z.state.ambient,Le.lightProbe.value=Z.state.probe,Le.directionalLights.value=Z.state.directional,Le.directionalLightShadows.value=Z.state.directionalShadow,Le.spotLights.value=Z.state.spot,Le.spotLightShadows.value=Z.state.spotShadow,Le.rectAreaLights.value=Z.state.rectArea,Le.ltc_1.value=Z.state.rectAreaLTC1,Le.ltc_2.value=Z.state.rectAreaLTC2,Le.pointLights.value=Z.state.point,Le.pointLightShadows.value=Z.state.pointShadow,Le.hemisphereLights.value=Z.state.hemi,Le.directionalShadowMap.value=Z.state.directionalShadowMap,Le.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Le.spotShadowMap.value=Z.state.spotShadowMap,Le.spotLightMatrix.value=Z.state.spotLightMatrix,Le.spotLightMap.value=Z.state.spotLightMap,Le.pointShadowMap.value=Z.state.pointShadowMap,Le.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Be=ke.getUniforms(),ut=ma.seqWithValue(Be.seq,Le);return B.currentProgram=ke,B.uniformsList=ut,ke}function Ve(A,k){const q=ge.get(A);q.outputColorSpace=k.outputColorSpace,q.instancing=k.instancing,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Et(A,k,q,B,Z){k.isScene!==!0&&(k=ae),Ue.resetTextureUnits();const Se=k.fog,Me=B.isMeshStandardMaterial?k.environment:null,Ee=S===null?p.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:fi,De=(B.isMeshStandardMaterial?qe:it).get(B.envMap||Me),He=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!B.normalMap&&!!q.attributes.tangent,Le=!!q.morphAttributes.position,Be=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color,jt=B.toneMapped?p.toneMapping:Ai,ti=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=ti!==void 0?ti.length:0,Ge=ge.get(B),hi=_.state.lights;if(L===!0&&(de===!0||A!==b)){const gn=A===b&&B.id===T;K.setState(B,A,gn)}let Lt=!1;B.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==hi.state.version||Ge.outputColorSpace!==Ee||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==De||B.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==K.numPlanes||Ge.numIntersection!==K.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==ke||Ge.morphTargets!==Le||Ge.morphNormals!==Be||Ge.morphColors!==ut||Ge.toneMapping!==jt||le.isWebGL2===!0&&Ge.morphTargetsCount!==dt)&&(Lt=!0):(Lt=!0,Ge.__version=B.version);let Ji=Ge.currentProgram;Lt===!0&&(Ji=Oe(B,k,Z));let cu=!1,Ps=!1,Va=!1;const Kt=Ji.getUniforms(),Qi=Ge.uniforms;if(we.useProgram(Ji.program)&&(cu=!0,Ps=!0,Va=!0),B.id!==T&&(T=B.id,Ps=!0),cu||b!==A){if(Kt.setValue(N,"projectionMatrix",A.projectionMatrix),le.logarithmicDepthBuffer&&Kt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),b!==A&&(b=A,Ps=!0,Va=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const gn=Kt.map.cameraPosition;gn!==void 0&&gn.setValue(N,J.setFromMatrixPosition(A.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Kt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Z.isSkinnedMesh)&&Kt.setValue(N,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){Kt.setOptional(N,Z,"bindMatrix"),Kt.setOptional(N,Z,"bindMatrixInverse");const gn=Z.skeleton;gn&&(le.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Kt.setValue(N,"boneTexture",gn.boneTexture,Ue),Kt.setValue(N,"boneTextureSize",gn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wa=q.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0&&le.isWebGL2===!0)&&ce.update(Z,q,Ji),(Ps||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,Kt.setValue(N,"receiveShadow",Z.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Qi.envMap.value=De,Qi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ps&&(Kt.setValue(N,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&rt(Qi,Va),Se&&B.fog===!0&&ft.refreshFogUniforms(Qi,Se),ft.refreshMaterialUniforms(Qi,B,P,D,re),ma.upload(N,Ge.uniformsList,Qi,Ue)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ma.upload(N,Ge.uniformsList,Qi,Ue),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Kt.setValue(N,"center",Z.center),Kt.setValue(N,"modelViewMatrix",Z.modelViewMatrix),Kt.setValue(N,"normalMatrix",Z.normalMatrix),Kt.setValue(N,"modelMatrix",Z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const gn=B.uniformsGroups;for(let Xa=0,Up=gn.length;Xa<Up;Xa++)if(le.isWebGL2){const uu=gn[Xa];ve.update(uu,Ji),ve.bind(uu,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function rt(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ht(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,k,q){ge.get(A.texture).__webglTexture=k,ge.get(A.depthTexture).__webglTexture=q;const B=ge.get(A);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=q===void 0,B.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const q=ge.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,q=0){S=A,v=k,M=q;let B=!0,Z=null,Se=!1,Me=!1;if(A){const De=ge.get(A);De.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(N.FRAMEBUFFER,null),B=!1):De.__webglFramebuffer===void 0?Ue.setupRenderTarget(A):De.__hasExternalTextures&&Ue.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture);const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const ke=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=ke[k],Se=!0):le.isWebGL2&&A.samples>0&&Ue.useMultisampledRTT(A)===!1?Z=ge.get(A).__webglMultisampledFramebuffer:Z=ke,C.copy(A.viewport),y.copy(A.scissor),E=A.scissorTest}else C.copy(W).multiplyScalar(P).floor(),y.copy(H).multiplyScalar(P).floor(),E=V;if(we.bindFramebuffer(N.FRAMEBUFFER,Z)&&le.drawBuffers&&B&&we.drawBuffers(A,Z),we.viewport(C),we.scissor(y),we.setScissorTest(E),Se){const De=ge.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,q)}else if(Me){const De=ge.get(A.texture),He=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,q||0,He)}T=-1},this.readRenderTargetPixels=function(A,k,q,B,Z,Se,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){we.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const De=A.texture,He=De.format,ke=De.type;if(He!==Qn&&X.convert(He)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=ke===fo&&(Ie.has("EXT_color_buffer_half_float")||le.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(ke!==Ar&&X.convert(ke)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===hr&&(le.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-B&&q>=0&&q<=A.height-Z&&N.readPixels(k,q,B,Z,X.convert(He),X.convert(ke),Se)}finally{const De=S!==null?ge.get(S).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(A,k,q=0){const B=Math.pow(2,-q),Z=Math.floor(k.image.width*B),Se=Math.floor(k.image.height*B);Ue.setTexture2D(k,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,A.x,A.y,Z,Se),we.unbindTexture()},this.copyTextureToTexture=function(A,k,q,B=0){const Z=k.image.width,Se=k.image.height,Me=X.convert(q.format),Ee=X.convert(q.type);Ue.setTexture2D(q,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,A.x,A.y,Z,Se,Me,Ee,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Me,k.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,B,A.x,A.y,Me,Ee,k.image),B===0&&q.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(A,k,q,B,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,Ee=A.max.z-A.min.z+1,De=X.convert(B.format),He=X.convert(B.type);let ke;if(B.isData3DTexture)Ue.setTexture3D(B,0),ke=N.TEXTURE_3D;else if(B.isDataArrayTexture)Ue.setTexture2DArray(B,0),ke=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Le=N.getParameter(N.UNPACK_ROW_LENGTH),Be=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ut=N.getParameter(N.UNPACK_SKIP_PIXELS),jt=N.getParameter(N.UNPACK_SKIP_ROWS),ti=N.getParameter(N.UNPACK_SKIP_IMAGES),dt=q.isCompressedTexture?q.mipmaps[0]:q.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,dt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,A.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,A.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?N.texSubImage3D(ke,Z,k.x,k.y,k.z,Se,Me,Ee,De,He,dt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(ke,Z,k.x,k.y,k.z,Se,Me,Ee,De,dt.data)):N.texSubImage3D(ke,Z,k.x,k.y,k.z,Se,Me,Ee,De,He,dt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Le),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Be),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,jt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ti),Z===0&&B.generateMipmaps&&N.generateMipmap(ke),we.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){v=0,M=0,S=null,we.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===We?Mr:ep}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mr?We:fi}}class gM extends ru{}gM.prototype.isWebGL1Renderer=!0;class Sp extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class _M extends xo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const of=new St,Ac=new op,ta=new ka,na=new G;class Mp extends Gt{constructor(e=new Hn,t=new _M){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(i),ta.radius+=s,e.ray.intersectsSphere(ta)===!1)return;of.copy(i).invert(),Ac.copy(e.ray).applyMatrix4(of);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=f,m=h;_<m;_++){const g=c.getX(_);na.fromBufferAttribute(d,g),af(na,g,l,i,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let _=f,m=h;_<m;_++)na.fromBufferAttribute(d,_),af(na,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function af(r,e,t,n,i,s,a){const o=Ac.distanceSqToPoint(r);if(o<t){const l=new G;Ac.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class su extends Hn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new G,M=new G,S=new G;for(let T=0;T<t.length;T+=3)h(t[T+0],v),h(t[T+1],M),h(t[T+2],S),l(v,M,S,x)}function l(x,v,M,S){const T=S+1,b=[];for(let C=0;C<=T;C++){b[C]=[];const y=x.clone().lerp(M,C/T),E=v.clone().lerp(M,C/T),I=T-C;for(let D=0;D<=I;D++)D===0&&C===T?b[C][D]=y:b[C][D]=y.clone().lerp(E,D/I)}for(let C=0;C<T;C++)for(let y=0;y<2*(T-C)-1;y++){const E=Math.floor(y/2);y%2===0?(f(b[C][E+1]),f(b[C+1][E]),f(b[C][E])):(f(b[C][E+1]),f(b[C+1][E+1]),f(b[C+1][E]))}}function c(x){const v=new G;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(x),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function u(){const x=new G;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const M=g(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;a.push(M,1-S)}_(),d()}function d(){for(let x=0;x<a.length;x+=6){const v=a[x+0],M=a[x+2],S=a[x+4],T=Math.max(v,M,S),b=Math.min(v,M,S);T>.9&&b<.1&&(v<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),S<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function h(x,v){const M=x*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function _(){const x=new G,v=new G,M=new G,S=new G,T=new Xe,b=new Xe,C=new Xe;for(let y=0,E=0;y<s.length;y+=9,E+=6){x.set(s[y+0],s[y+1],s[y+2]),v.set(s[y+3],s[y+4],s[y+5]),M.set(s[y+6],s[y+7],s[y+8]),T.set(a[E+0],a[E+1]),b.set(a[E+2],a[E+3]),C.set(a[E+4],a[E+5]),S.copy(x).add(v).add(M).divideScalar(3);const I=g(S);m(T,E+0,x,I),m(b,E+2,v,I),m(C,E+4,M,I)}}function m(x,v,M,S){S<0&&x.x===1&&(a[v]=x.x-1),M.x===0&&M.z===0&&(a[v]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.vertices,e.indices,e.radius,e.details)}}class Ha extends su{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ha(e.radius,e.detail)}}class ou extends Hn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new G,f=new G,h=[],_=[],m=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){const T=S/t;d.x=-e*Math.cos(i+T*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(i+T*s)*Math.sin(a+v*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),g.push(T+M,1-v),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=u[p][x+1],M=u[p][x],S=u[p+1][x],T=u[p+1][x+1];(p!==0||a>0)&&h.push(v,M,T),(p!==n-1||l<Math.PI)&&h.push(M,S,T)}this.setIndex(h),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const lf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class vM{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],_=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null}}}const xM=new vM;class yp{constructor(e){this.manager=e!==void 0?e:xM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class SM extends yp{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=lf.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ho("img");function l(){u(),lf.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class MM extends yp{constructor(e){super(e)}load(e,t,n,i){const s=new hn,a=new SM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ep extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const zl=new St,cf=new G,uf=new G;class yM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tu,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(cf),uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uf),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EM extends yM{constructor(){super(new mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TM extends Ep{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new EM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bM extends Ep{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=df(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=df();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function df(){return(typeof performance>"u"?Date:performance).now()}class ff{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);var wM=`vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
}

uniform float time;
varying vec2 vUv;
varying float vNoise;
varying float vColorRandom;
attribute float randoms;
attribute float colorRandom;

void main() {
    vUv = uv;
    vColorRandom = colorRandom;
    
    
    float noiseFreq = 0.8;
    float timeScale = 8.0;
    
    #ifdef IS_MOBILE
        noiseFreq = 0.6;
        timeScale = 10.0;
    #endif
    
    
    float noise = cnoise(noiseFreq * vec3(
        position.x + time/timeScale,
        position.y + time/timeScale,
        position.z + time/timeScale
    ));
    
    vec3 newposition = position;
    float displacement = 0.25;
    
    #ifdef IS_MOBILE
        displacement = 0.2; 
    #endif
    
    
    newposition += displacement * normal * noise * (0.8 + randoms * 0.4);
    
    vec4 mvPosition = modelViewMatrix * vec4(newposition, 1.0);
    vNoise = noise;
    
    
    float size = 50.0;
    #ifdef IS_MOBILE
        size = 40.0;
    #endif
    
    gl_PointSize = (size * randoms) * (1.0/-mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}`,AM=`varying vec2 vUv;
varying float vColorRandom;
varying float vNoise;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

void main() {
    
    float dist = length(gl_PointCoord - vec2(0.5));
    float alpha = 1.0 - smoothstep(-0.2, 0.5, dist);
    
    
    vec3 finalColor = uColor1;
    
    
    if(vColorRandom > 0.99 && vColorRandom < 0.66) {
        finalColor = uColor2;
    } else if(vColorRandom > 0.66) {
        finalColor = uColor3;
    }

    
    finalColor += vNoise * 0.05; 
    
    
    #ifdef IS_MOBILE
        alpha *= 0.9; 
        
    #endif

    gl_FragColor = vec4(finalColor, alpha * 0.8); 
}`;nt.registerPlugin(ze);ze.normalizeScroll(!0);class CM{constructor(e){this.scene=new Sp,this.container=e.dom,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer=new ru({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor("#0a151f",1),this.container.appendChild(this.renderer.domElement),this.camera=new bn(65,this.width/this.height,1,1e3),this.camera.position.set(0,0,2.5),this.camera.zoom=1.2,this.camera.updateProjectionMatrix(),this.clock=new Tp,this.isPlaying=!0,this.render=this.render.bind(this),this.renderer.powerPreference="high-performance",this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera.frustumCulled=!0,this.isMobile=window.innerWidth<768,this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),this.renderer.domElement.addEventListener("webglcontextlost",this.handleContextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.handleContextRestored),this.resources=new Set,this.boundEvents=new Set,this.addObjects(),this.resize(),this.render(),this.setupResize(),this.handleScrollAnimation()}setupResize(){const e=this.resize.bind(this);window.addEventListener("resize",e),this.boundEvents.add([window,"resize",e])}resize(){const e=window.innerWidth<768;if(this.mesh){const t=e?.7:1.15;this.mesh.scale.set(t,t,t)}this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,e?this.camera.position.z=2.8:this.camera.position.z=2.5,this.camera.updateProjectionMatrix()}addObjects(){const e=window.innerWidth<768,t=this.trackResource(new Ha(e?.9:1.1,e?20:25)),n=this.trackResource(new Ri({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},defines:{IS_MOBILE:e},uniforms:{time:{value:0},uColor1:{value:new at(660767)},uColor2:{value:new at(11326710)},uColor3:{value:new at(1652818)}},vertexShader:wM,fragmentShader:AM,transparent:!0,depthWrite:!1,blending:Ra}));this.material=n,this.vertices=t.attributes.position.array.length;let i=new Float32Array(this.vertices/3),s=new Float32Array(this.vertices/3);for(let a=0;a<this.vertices/3;a++)i.set([Math.random()],a),s.set([Math.random()],a);t.setAttribute("randoms",new pn(i,1)),t.setAttribute("colorRandom",new pn(s,1)),this.mesh=new Mp(t,n),this.scene.add(this.mesh)}stop(){this.isPlaying=!1}play(){this.isPlaying||(this.isPlaying=!0,this.render())}render(){if(!this.isPlaying)return;const e=this.clock.getElapsedTime(),t=window.innerWidth<768;if(this.mesh){const n=t?.008:.01;this.mesh.position.y=Math.cos(e)*n,this.mesh.position.z=Math.cos(e)*n,this.mesh.rotation.y=Math.sin(e*.1)*.02}this.material&&this.material.uniforms&&(this.material.uniforms.time.value=e),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render)}handleScrollAnimation(){const e=document.querySelector("#body"),t=window.innerWidth<768;ze.create({trigger:e,start:"top top",end:()=>"+="+e.offsetHeight*1.25,onUpdate:i=>{if(!this.mesh)return;const s=i.progress,a=Math.PI*2*s,o=t?-.8:-1;this.mesh.rotation.x=a*o;const l=t?1.1:1.2,u=l+s*((t?1.8:2.2)-l);this.camera.zoom=u,this.camera.updateProjectionMatrix()},invalidateOnRefresh:!0});const n=document.querySelectorAll("#myThreeJsCanvas");nt.from(n,{duration:2,opacity:0,delay:3.2,ease:"back.out"})}handleContextLost(e){e.preventDefault(),this.stop(),console.log("WebGL context lost")}handleContextRestored(){console.log("WebGL context restored"),this.setupRenderer(),this.addObjects(),this.play()}trackResource(e){return this.resources.add(e),e}dispose(){this.stop(),this.resources.forEach(e=>{e.dispose&&e.dispose()}),this.boundEvents.forEach(([e,t,n])=>{e.removeEventListener(t,n)}),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.renderer.domElement.removeEventListener("webglcontextlost",this.handleContextLost),this.renderer.domElement.removeEventListener("webglcontextrestored",this.handleContextRestored),this.renderer.dispose(),this.resources.clear(),this.boundEvents.clear(),this.scene=null,this.camera=null,this.renderer=null}}class PM{constructor(e){return this.result=new Object,this.result.originalText=e.innerText,this.result.splitted=this.split(e),this.result.words=this.result.splitted.querySelectorAll(".SplitTextJS-wrapper"),this.result.chars=this.result.splitted.querySelectorAll(".SplitTextJS-char"),this.result.spaces=this.result.splitted.querySelectorAll(".SplitTextJS-spacer"),this.result}createSpan(e){let t=document.createElement("span");return t.style.display="inline-block",t.className=e,t}split(e){let t=new Array;const n=e.innerText.split(" ");let i=n.length;return n.map(s=>{const a=this.createSpan("SplitTextJS-wrapper");if(s.split(/(?!^)/).map(o=>{let l=this.createSpan("SplitTextJS-char");l.innerText=o,a.appendChild(l)}),i--,t.push(a),i>0){let o=this.createSpan("SplitTextJS-char SplitTextJS-spacer");o.innerHTML="&nbsp;",t.push(o)}}),e.innerHTML="",t.forEach(s=>{e.appendChild(s)}),e}}nt.registerPlugin(ze);ze.normalizeScroll(!0);function RM(){const r=document.querySelectorAll(".hero-title");var e=nt.timeline({repeat:-1});r.forEach(a=>{const o=new PM(a);e.from(o.chars,{y:16,opacity:0,rotateX:-90,stagger:.02},"<0.8"),e.to(o.chars,{y:-16,opacity:0,rotateX:90,stagger:.02},"<2")});const n=document.querySelector(".home-left-col").querySelectorAll(":scope > *");nt.from(n,{duration:2,yPercent:-100,opacity:0,delay:2.9,stagger:.2,ease:"back.out"});const i=document.querySelector(".home-container"),s=document.querySelector(".home");nt.to(i,{duration:3.25,yPercent:-100,ease:"powe3.out",scrollTrigger:{trigger:s,anticipatePin:1,start:"80% 20%",end:()=>"+="+s.offsetHeight,scrub:!0}})}nt.registerPlugin(ze);ze.normalizeScroll(!0);function LM(){const r=window.innerWidth<768,e=document.querySelector(".about > .title-container"),t=document.querySelectorAll(".about-title"),n=document.querySelector(".about"),i=nt.utils.toArray(".about-box");document.querySelector(".about-box").clientHeight;const s=document.querySelector(".about-container");nt.from(t,{duration:r?1.5:3.5,xPercent:r?-50:-100,opacity:0,ease:"power2.out",stagger:r?.2:.5,scrollTrigger:{trigger:e,start:"top 80%",end:"top 60%",scrub:r?1:!0}});let a=nt.matchMedia();return a.add({isDesktop:"(min-width: 768px)",isMobile:"(max-width: 767px)"},o=>{let{isDesktop:l,isMobile:c}=o.conditions;if(c){nt.set(i,{xPercent:100,yPercent:d=>d*-5,rotation:d=>d*2,opacity:1,zIndex:d=>i.length-d});let u=nt.timeline({scrollTrigger:{trigger:s,start:"top 60%",end:"bottom 20%",scrub:1}});i.forEach((d,f)=>{u.to(d,{xPercent:0,yPercent:f*110,rotation:0,duration:1,ease:"power2.out"},f*.1)}),i.forEach(d=>{d.addEventListener("touchstart",()=>{nt.to(d,{scale:1.05,duration:.3,ease:"power2.out"})}),d.addEventListener("touchend",()=>{nt.to(d,{scale:1,duration:.3,ease:"power2.in"})})})}else nt.timeline({scrollTrigger:{trigger:e,start:"top 60%",end:"top top",scrub:!0}}).from(i,{duration:2.25,yPercent:100,opacity:0,stagger:.5,ease:"power2.out"});nt.to(n,{yPercent:-50,ease:"none",scrollTrigger:{trigger:n,start:"top top",end:"bottom top",scrub:!0}})}),()=>{a.revert(),ze.getAll().forEach(o=>o.kill())}}const DM="/jabid-portfolio-vite/img/figma.png",IM="/jabid-portfolio-vite/img/git.png",UM="/jabid-portfolio-vite/img/github.png",OM="/jabid-portfolio-vite/img/html.png",NM="/jabid-portfolio-vite/img/javascript.png",FM="/jabid-portfolio-vite/img/mongodb.png",zM="/jabid-portfolio-vite/img/nodejs.png",BM="/jabid-portfolio-vite/img/reactjs.png",kM="/jabid-portfolio-vite/img/tailwind.png",GM="/jabid-portfolio-vite/img/threejs.svg",hf={type:"change"},Bl={type:"start"},pf={type:"end"};class HM extends Lr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Je),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Je),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(hf),n.update(),s=i.NONE},this.update=function(){const U=new G,ee=new Pr().setFromUnitVectors(e.up,new G(0,1,0)),X=ee.clone().invert(),ue=new G,ve=new Pr,Te=2*Math.PI;return function(){const ye=n.object.position;U.copy(ye).sub(n.target),U.applyQuaternion(ee),o.setFromVector3(U),n.autoRotate&&s===i.NONE&&y(b()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ne=n.minAzimuthAngle,pe=n.maxAzimuthAngle;return isFinite(Ne)&&isFinite(pe)&&(Ne<-Math.PI?Ne+=Te:Ne>Math.PI&&(Ne-=Te),pe<-Math.PI?pe+=Te:pe>Math.PI&&(pe-=Te),Ne<=pe?o.theta=Math.max(Ne,Math.min(pe,o.theta)):o.theta=o.theta>(Ne+pe)/2?Math.max(Ne,o.theta):Math.min(pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),U.setFromSpherical(o),U.applyQuaternion(X),ye.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||ue.distanceToSquared(n.object.position)>a||8*(1-ve.dot(n.object.quaternion))>a?(n.dispatchEvent(hf),ue.copy(n.object.position),ve.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",qe),n.domElement.removeEventListener("wheel",Re),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",qe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Je),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new ff,l=new ff;let c=1;const u=new G;let d=!1;const f=new Xe,h=new Xe,_=new Xe,m=new Xe,g=new Xe,p=new Xe,x=new Xe,v=new Xe,M=new Xe,S=[],T={};function b(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function y(U){l.theta-=U}function E(U){l.phi-=U}const I=function(){const U=new G;return function(X,ue){U.setFromMatrixColumn(ue,0),U.multiplyScalar(-X),u.add(U)}}(),D=function(){const U=new G;return function(X,ue){n.screenSpacePanning===!0?U.setFromMatrixColumn(ue,1):(U.setFromMatrixColumn(ue,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(X),u.add(U)}}(),P=function(){const U=new G;return function(X,ue){const ve=n.domElement;if(n.object.isPerspectiveCamera){const Te=n.object.position;U.copy(Te).sub(n.target);let me=U.length();me*=Math.tan(n.object.fov/2*Math.PI/180),I(2*X*me/ve.clientHeight,n.object.matrix),D(2*ue*me/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(X*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),D(ue*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(U){n.object.isPerspectiveCamera?c/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(U){n.object.isPerspectiveCamera?c*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(U){f.set(U.clientX,U.clientY)}function H(U){x.set(U.clientX,U.clientY)}function V(U){m.set(U.clientX,U.clientY)}function Q(U){h.set(U.clientX,U.clientY),_.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ee=n.domElement;y(2*Math.PI*_.x/ee.clientHeight),E(2*Math.PI*_.y/ee.clientHeight),f.copy(h),n.update()}function L(U){v.set(U.clientX,U.clientY),M.subVectors(v,x),M.y>0?O(C()):M.y<0&&z(C()),x.copy(v),n.update()}function de(U){g.set(U.clientX,U.clientY),p.subVectors(g,m).multiplyScalar(n.panSpeed),P(p.x,p.y),m.copy(g),n.update()}function re(U){U.deltaY<0?z(C()):U.deltaY>0&&O(C()),n.update()}function $(U){let ee=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),ee=!0;break}ee&&(U.preventDefault(),n.update())}function J(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const U=.5*(S[0].pageX+S[1].pageX),ee=.5*(S[0].pageY+S[1].pageY);f.set(U,ee)}}function ae(){if(S.length===1)m.set(S[0].pageX,S[0].pageY);else{const U=.5*(S[0].pageX+S[1].pageX),ee=.5*(S[0].pageY+S[1].pageY);m.set(U,ee)}}function oe(){const U=S[0].pageX-S[1].pageX,ee=S[0].pageY-S[1].pageY,X=Math.sqrt(U*U+ee*ee);x.set(0,X)}function N(){n.enableZoom&&oe(),n.enablePan&&ae()}function Ce(){n.enableZoom&&oe(),n.enableRotate&&J()}function Ie(U){if(S.length==1)h.set(U.pageX,U.pageY);else{const X=ce(U),ue=.5*(U.pageX+X.x),ve=.5*(U.pageY+X.y);h.set(ue,ve)}_.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ee=n.domElement;y(2*Math.PI*_.x/ee.clientHeight),E(2*Math.PI*_.y/ee.clientHeight),f.copy(h)}function le(U){if(S.length===1)g.set(U.pageX,U.pageY);else{const ee=ce(U),X=.5*(U.pageX+ee.x),ue=.5*(U.pageY+ee.y);g.set(X,ue)}p.subVectors(g,m).multiplyScalar(n.panSpeed),P(p.x,p.y),m.copy(g)}function we(U){const ee=ce(U),X=U.pageX-ee.x,ue=U.pageY-ee.y,ve=Math.sqrt(X*X+ue*ue);v.set(0,ve),M.set(0,Math.pow(v.y/x.y,n.zoomSpeed)),O(M.y),x.copy(v)}function xe(U){n.enableZoom&&we(U),n.enablePan&&le(U)}function ge(U){n.enableZoom&&we(U),n.enableRotate&&Ie(U)}function Ue(U){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",it),n.domElement.addEventListener("pointerup",qe)),K(U),U.pointerType==="touch"?ft(U):Y(U))}function it(U){n.enabled!==!1&&(U.pointerType==="touch"?R(U):st(U))}function qe(U){ie(U),S.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",qe)),n.dispatchEvent(pf),s=i.NONE}function Y(U){let ee;switch(U.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Or.DOLLY:if(n.enableZoom===!1)return;H(U),s=i.DOLLY;break;case Or.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;V(U),s=i.PAN}else{if(n.enableRotate===!1)return;W(U),s=i.ROTATE}break;case Or.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;W(U),s=i.ROTATE}else{if(n.enablePan===!1)return;V(U),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Bl)}function st(U){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Q(U);break;case i.DOLLY:if(n.enableZoom===!1)return;L(U);break;case i.PAN:if(n.enablePan===!1)return;de(U);break}}function Re(U){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(U.preventDefault(),n.dispatchEvent(Bl),re(U),n.dispatchEvent(pf))}function Je(U){n.enabled===!1||n.enablePan===!1||$(U)}function ft(U){switch(te(U),S.length){case 1:switch(n.touches.ONE){case Nr.ROTATE:if(n.enableRotate===!1)return;J(),s=i.TOUCH_ROTATE;break;case Nr.PAN:if(n.enablePan===!1)return;ae(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Nr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(),s=i.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Bl)}function R(U){switch(te(U),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ie(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(U),n.update();break;default:s=i.NONE}}function w(U){n.enabled!==!1&&U.preventDefault()}function K(U){S.push(U)}function ie(U){delete T[U.pointerId];for(let ee=0;ee<S.length;ee++)if(S[ee].pointerId==U.pointerId){S.splice(ee,1);return}}function te(U){let ee=T[U.pointerId];ee===void 0&&(ee=new Xe,T[U.pointerId]=ee),ee.set(U.pageX,U.pageY)}function ce(U){const ee=U.pointerId===S[0].pointerId?S[1]:S[0];return T[ee.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",qe),n.domElement.addEventListener("wheel",Re,{passive:!1}),this.update()}}class VM extends Hn{constructor(e,t,n,i){super();const s=[],a=[],o=[],l=new G,c=new St;c.makeRotationFromEuler(n),c.setPosition(t);const u=new St;u.copy(c).invert(),d(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(o,2));function d(){let m=[];const g=new G,p=new G,x=e.geometry,v=x.attributes.position,M=x.attributes.normal;if(x.index!==null){const S=x.index;for(let T=0;T<S.count;T++)g.fromBufferAttribute(v,S.getX(T)),p.fromBufferAttribute(M,S.getX(T)),f(m,g,p)}else for(let S=0;S<v.count;S++)g.fromBufferAttribute(v,S),p.fromBufferAttribute(M,S),f(m,g,p);m=h(m,l.set(1,0,0)),m=h(m,l.set(-1,0,0)),m=h(m,l.set(0,1,0)),m=h(m,l.set(0,-1,0)),m=h(m,l.set(0,0,1)),m=h(m,l.set(0,0,-1));for(let S=0;S<m.length;S++){const T=m[S];o.push(.5+T.position.x/i.x,.5+T.position.y/i.y),T.position.applyMatrix4(c),s.push(T.position.x,T.position.y,T.position.z),a.push(T.normal.x,T.normal.y,T.normal.z)}}function f(m,g,p){g.applyMatrix4(e.matrixWorld),g.applyMatrix4(u),p.transformDirection(e.matrixWorld),m.push(new mf(g.clone(),p.clone()))}function h(m,g){const p=[],x=.5*Math.abs(i.dot(g));for(let v=0;v<m.length;v+=3){let M=0,S,T,b,C;const y=m[v+0].position.dot(g)-x,E=m[v+1].position.dot(g)-x,I=m[v+2].position.dot(g)-x,D=y>0,P=E>0,O=I>0;switch(M=(D?1:0)+(P?1:0)+(O?1:0),M){case 0:{p.push(m[v]),p.push(m[v+1]),p.push(m[v+2]);break}case 1:{if(D&&(S=m[v+1],T=m[v+2],b=_(m[v],S,g,x),C=_(m[v],T,g,x)),P){S=m[v],T=m[v+2],b=_(m[v+1],S,g,x),C=_(m[v+1],T,g,x),p.push(b),p.push(T.clone()),p.push(S.clone()),p.push(T.clone()),p.push(b.clone()),p.push(C);break}O&&(S=m[v],T=m[v+1],b=_(m[v+2],S,g,x),C=_(m[v+2],T,g,x)),p.push(S.clone()),p.push(T.clone()),p.push(b),p.push(C),p.push(b.clone()),p.push(T.clone());break}case 2:{D||(S=m[v].clone(),T=_(S,m[v+1],g,x),b=_(S,m[v+2],g,x),p.push(S),p.push(T),p.push(b)),P||(S=m[v+1].clone(),T=_(S,m[v+2],g,x),b=_(S,m[v],g,x),p.push(S),p.push(T),p.push(b)),O||(S=m[v+2].clone(),T=_(S,m[v],g,x),b=_(S,m[v+1],g,x),p.push(S),p.push(T),p.push(b));break}}}return p}function _(m,g,p,x){const v=m.position.dot(p)-x,M=g.position.dot(p)-x,S=v/(v-M);return new mf(new G(m.position.x+S*(g.position.x-m.position.x),m.position.y+S*(g.position.y-m.position.y),m.position.z+S*(g.position.z-m.position.z)),new G(m.normal.x+S*(g.normal.x-m.normal.x),m.normal.y+S*(g.normal.y-m.normal.y),m.normal.z+S*(g.normal.z-m.normal.z)))}}}class mf{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}class WM{constructor(e){if(!e.dom){console.error("No DOM element provided for BallAbout");return}this.scene=new Sp,this.container=e.dom;const t=this.container.getBoundingClientRect();(t.width===0||t.height===0)&&console.warn("Container has zero dimensions:",t),this.width=t.width||240,this.height=t.height||176,this.renderer=new ru({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.LinearEncoding=We,this.container.appendChild(this.renderer.domElement),this.camera=new bn(70,this.width/this.height,1,1e3),this.camera.position.set(-.3,-.1,3),this.camera.zoom=1.2,this.camera.updateProjectionMatrix(),this.clock=new Tp,this.isPlaying=!0,this.addObjects(e.imageURL),this.addLights(),this.enableOrbitControls(),this.resize(),this.render(),this.setupResize()}setupResize(){window.addEventListener("resize",this.resize.bind(this))}resize(){this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}addObjects(e){this.geometry=new Ha(1,4);const t=new Hn,n=this.geometry.attributes.position.count,i=new Float32Array(n*3),s=new Float32Array(n);for(let h=0;h<n;h++)i[h*3]=this.geometry.attributes.position.array[h*3],i[h*3+1]=this.geometry.attributes.position.array[h*3+1],i[h*3+2]=this.geometry.attributes.position.array[h*3+2],s[h]=Math.random();t.setAttribute("position",new pn(i,3)),t.setAttribute("random",new pn(s,1));const a=new Ri({vertexShader:`
        uniform float time;
        attribute float random;
        varying float vRandom;
        varying float vNoise;
        
        void main() {
          vRandom = random;
          vec3 pos = position;
          
          // Add subtle movement
          float noise = sin(time * 2.0 + random * 10.0) * 0.03;
          pos += normal * noise;
          vNoise = noise;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Adjust point size based on distance and device
          float size = 6.0;
          #ifdef IS_MOBILE
            size = 4.0;
          #endif
          gl_PointSize = size * (1.0 / -mvPosition.z);
        }
      `,fragmentShader:`
        varying float vRandom;
        varying float vNoise;
        
        void main() {
            // Keep the original smooth circle calculation
            float dist = length(gl_PointCoord - vec2(0.5));
            float alpha = 1.0 - smoothstep(-0.2, 0.5, dist);
            
            // Match background colors
            vec3 color1 = vec3(0.102,0.216,0.318); // #0a151f
            vec3 color2 = vec3(0.675, 0.831, 0.965); // #acd4f6
            vec3 color3 = vec3(0.098, 0.220, 0.322); // #193852
            
            // Color selection logic matching fragmentBg.glsl
            vec3 finalColor = color1;
            if(vRandom > 0.99 && vRandom < 0.66) {
                finalColor = color2;
            } else if(vRandom > 0.66) {
                finalColor = color3;
            }
            
            // Add noise influence
            finalColor += vNoise * 0.05;
            
            // Adjust mobile rendering
            #ifdef IS_MOBILE
                alpha *= 0.9;
            #endif
            
            gl_FragColor = vec4(finalColor, alpha * 0.9);
        }
      `,transparent:!0,uniforms:{time:{value:0}},depthWrite:!1,blending:Ra});this.particles=new Mp(t,a),this.scene.add(this.particles);const o=new ou(.9,32,32),l=new ai(o,new La({visible:!1,transparent:!0,opacity:0}));this.scene.add(l);const u=new MM().load(e),d=new La({map:u,transparent:!0,opacity:1,depthWrite:!1,depthTest:!0,emissive:new at(16777215),emissiveIntensity:.2}),f=new VM(l,new G(0,0,.1),new vo(0,0,0),new G(1.7,1.7,1.7));this.decal=new ai(f,d),this.decal.renderOrder=1,this.particles.renderOrder=0,this.scene.add(this.decal)}addLights(){let e=new bM(13421772,1),t=new TM(16777215,5);t.position.set(200,200,200),this.scene.add(e,t)}stop(){this.isPlaying=!1}play(){this.isPlaying||(this.render(),this.isPlaying=!0)}enableOrbitControls(){this.controls=new HM(this.camera,this.renderer.domElement),this.controls.enableZoom=!1,this.controls.enableDamping=!0,this.controls.update()}render(){if(!this.isPlaying)return;const e=this.clock.getElapsedTime();this.particles&&this.particles.material.uniforms&&(this.particles.material.uniforms.time.value=e);const t=Math.cos(e)*.05,n=Math.sin(e)*.05;this.particles&&(this.particles.position.y=t,this.particles.position.z=n),this.decal&&(this.decal.position.y=t,this.decal.position.z=n,this.decal.rotation.y=Math.sin(e*.5)*.1),this.controls.update(),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.render.bind(this))}}function bp(){const r=document.querySelectorAll(".tech-ball"),e=[DM,IM,UM,OM,NM,FM,zM,BM,kM,GM];try{r.forEach((t,n)=>{n<e.length&&(console.log(`Initializing ball ${n} with image: ${e[n]}`),new WM({dom:t,imageURL:e[n]}))})}catch(t){console.error("Error initializing tech balls:",t)}}function gf(r){return r!==null&&typeof r=="object"&&"constructor"in r&&r.constructor===Object}function au(r,e){r===void 0&&(r={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof r[t]>"u"?r[t]=e[t]:gf(e[t])&&gf(r[t])&&Object.keys(e[t]).length>0&&au(r[t],e[t])})}const wp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Cs(){const r=typeof document<"u"?document:{};return au(r,wp),r}const XM={document:wp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(r){return typeof setTimeout>"u"?(r(),null):setTimeout(r,0)},cancelAnimationFrame(r){typeof setTimeout>"u"||clearTimeout(r)}};function Rn(){const r=typeof window<"u"?window:{};return au(r,XM),r}function qM(r){return r===void 0&&(r=""),r.trim().split(" ").filter(e=>!!e.trim())}function YM(r){const e=r;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Cc(r,e){return e===void 0&&(e=0),setTimeout(r,e)}function Da(){return Date.now()}function $M(r){const e=Rn();let t;return e.getComputedStyle&&(t=e.getComputedStyle(r,null)),!t&&r.currentStyle&&(t=r.currentStyle),t||(t=r.style),t}function jM(r,e){e===void 0&&(e="x");const t=Rn();let n,i,s;const a=$M(r);return t.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(o=>o.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(i==="none"?"":i)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=s.m41:n.length===16?i=parseFloat(n[12]):i=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?i=s.m42:n.length===16?i=parseFloat(n[13]):i=parseFloat(n[5])),i||0}function ia(r){return typeof r=="object"&&r!==null&&r.constructor&&Object.prototype.toString.call(r).slice(8,-1)==="Object"}function KM(r){return typeof window<"u"&&typeof window.HTMLElement<"u"?r instanceof HTMLElement:r&&(r.nodeType===1||r.nodeType===11)}function Tn(){const r=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const n=t<0||arguments.length<=t?void 0:arguments[t];if(n!=null&&!KM(n)){const i=Object.keys(Object(n)).filter(s=>e.indexOf(s)<0);for(let s=0,a=i.length;s<a;s+=1){const o=i[s],l=Object.getOwnPropertyDescriptor(n,o);l!==void 0&&l.enumerable&&(ia(r[o])&&ia(n[o])?n[o].__swiper__?r[o]=n[o]:Tn(r[o],n[o]):!ia(r[o])&&ia(n[o])?(r[o]={},n[o].__swiper__?r[o]=n[o]:Tn(r[o],n[o])):r[o]=n[o])}}}return r}function ra(r,e,t){r.style.setProperty(e,t)}function Ap(r){let{swiper:e,targetPosition:t,side:n}=r;const i=Rn(),s=-e.translate;let a=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",u=(f,h)=>c==="next"&&f>=h||c==="prev"&&f<=h,d=()=>{o=new Date().getTime(),a===null&&(a=o);const f=Math.max(Math.min((o-a)/l,1),0),h=.5-Math.cos(f*Math.PI)/2;let _=s+h*(t-s);if(u(_,t)&&(_=t),e.wrapperEl.scrollTo({[n]:_}),u(_,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:_})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(d)};d()}function lu(r){return r.querySelector(".swiper-slide-transform")||r.shadowRoot&&r.shadowRoot.querySelector(".swiper-slide-transform")||r}function li(r,e){e===void 0&&(e="");const t=[...r.children];return r instanceof HTMLSlotElement&&t.push(...r.assignedElements()),e?t.filter(n=>n.matches(e)):t}function ZM(r,e){const t=e.contains(r);return!t&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(r):t}function Ia(r){try{console.warn(r);return}catch{}}function po(r,e){e===void 0&&(e=[]);const t=document.createElement(r);return t.classList.add(...Array.isArray(e)?e:qM(e)),t}function JM(r,e){const t=[];for(;r.previousElementSibling;){const n=r.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),r=n}return t}function QM(r,e){const t=[];for(;r.nextElementSibling;){const n=r.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),r=n}return t}function Hi(r,e){return Rn().getComputedStyle(r,null).getPropertyValue(e)}function Ua(r){let e=r,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Cp(r,e){const t=[];let n=r.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function Pc(r,e,t){const n=Rn();return t?r[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):r.offsetWidth}function Ot(r){return(Array.isArray(r)?r:[r]).filter(e=>!!e)}function ey(r){return e=>Math.abs(e)>0&&r.browser&&r.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}let kl;function ty(){const r=Rn(),e=Cs();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in r||r.DocumentTouch&&e instanceof r.DocumentTouch)}}function Pp(){return kl||(kl=ty()),kl}let Gl;function ny(r){let{userAgent:e}=r===void 0?{}:r;const t=Pp(),n=Rn(),i=n.navigator.platform,s=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,l=n.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let u=s.match(/(iPad).*OS\s([\d_]+)/);const d=s.match(/(iPod)(.*OS\s([\d_]+))?/),f=!u&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=i==="Win32";let _=i==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&_&&t.touch&&m.indexOf(`${o}x${l}`)>=0&&(u=s.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),_=!1),c&&!h&&(a.os="android",a.android=!0),(u||f||d)&&(a.os="ios",a.ios=!0),a}function Rp(r){return r===void 0&&(r={}),Gl||(Gl=ny(r)),Gl}let Hl;function iy(){const r=Rn(),e=Rp();let t=!1;function n(){const o=r.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(n()){const o=String(r.navigator.userAgent);if(o.includes("Version/")){const[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent),s=n(),a=s||i&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:a,isWebView:i}}function ry(){return Hl||(Hl=iy()),Hl}function sy(r){let{swiper:e,on:t,emit:n}=r;const i=Rn();let s=null,a=null;const o=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(d=>{a=i.requestAnimationFrame(()=>{const{width:f,height:h}=e;let _=f,m=h;d.forEach(g=>{let{contentBoxSize:p,contentRect:x,target:v}=g;v&&v!==e.el||(_=x?x.width:(p[0]||p).inlineSize,m=x?x.height:(p[0]||p).blockSize)}),(_!==f||m!==h)&&o()})}),s.observe(e.el))},c=()=>{a&&i.cancelAnimationFrame(a),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",u)}),t("destroy",()=>{c(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",u)})}function oy(r){let{swiper:e,extendParams:t,on:n,emit:i}=r;const s=[],a=Rn(),o=function(u,d){d===void 0&&(d={});const f=a.MutationObserver||a.WebkitMutationObserver,h=new f(_=>{if(e.__preventObserver__)return;if(_.length===1){i("observerUpdate",_[0]);return}const m=function(){i("observerUpdate",_[0])};a.requestAnimationFrame?a.requestAnimationFrame(m):a.setTimeout(m,0)});h.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),s.push(h)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Cp(e.hostEl);for(let d=0;d<u.length;d+=1)o(u[d])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(u=>{u.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var ay={on(r,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const i=t?"unshift":"push";return r.split(" ").forEach(s=>{n.eventsListeners[s]||(n.eventsListeners[s]=[]),n.eventsListeners[s][i](e)}),n},once(r,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function i(){n.off(r,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];e.apply(n,a)}return i.__emitterProxy=e,n.on(r,i,t)},onAny(r,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof r!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(r)<0&&t.eventsAnyListeners[n](r),t},offAny(r){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(r);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(r,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||r.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[n].splice(s,1)})}),t},emit(){const r=this;if(!r.eventsListeners||r.destroyed||!r.eventsListeners)return r;let e,t,n;for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),n=r):(e=s[0].events,t=s[0].data,n=s[0].context||r),t.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{r.eventsAnyListeners&&r.eventsAnyListeners.length&&r.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...t])}),r.eventsListeners&&r.eventsListeners[l]&&r.eventsListeners[l].forEach(c=>{c.apply(n,t)})}),r}};function ly(){const r=this;let e,t;const n=r.el;typeof r.params.width<"u"&&r.params.width!==null?e=r.params.width:e=n.clientWidth,typeof r.params.height<"u"&&r.params.height!==null?t=r.params.height:t=n.clientHeight,!(e===0&&r.isHorizontal()||t===0&&r.isVertical())&&(e=e-parseInt(Hi(n,"padding-left")||0,10)-parseInt(Hi(n,"padding-right")||0,10),t=t-parseInt(Hi(n,"padding-top")||0,10)-parseInt(Hi(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(r,{width:e,height:t,size:r.isHorizontal()?e:t}))}function cy(){const r=this;function e(E,I){return parseFloat(E.getPropertyValue(r.getDirectionLabel(I))||0)}const t=r.params,{wrapperEl:n,slidesEl:i,size:s,rtlTranslate:a,wrongRTL:o}=r,l=r.virtual&&t.virtual.enabled,c=l?r.virtual.slides.length:r.slides.length,u=li(i,`.${r.params.slideClass}, swiper-slide`),d=l?r.virtual.slides.length:u.length;let f=[];const h=[],_=[];let m=t.slidesOffsetBefore;typeof m=="function"&&(m=t.slidesOffsetBefore.call(r));let g=t.slidesOffsetAfter;typeof g=="function"&&(g=t.slidesOffsetAfter.call(r));const p=r.snapGrid.length,x=r.slidesGrid.length;let v=t.spaceBetween,M=-m,S=0,T=0;if(typeof s>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*s:typeof v=="string"&&(v=parseFloat(v)),r.virtualSize=-v,u.forEach(E=>{a?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(ra(n,"--swiper-centered-offset-before",""),ra(n,"--swiper-centered-offset-after",""));const b=t.grid&&t.grid.rows>1&&r.grid;b?r.grid.initSlides(u):r.grid&&r.grid.unsetSlides();let C;const y=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(E=>typeof t.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<d;E+=1){C=0;let I;if(u[E]&&(I=u[E]),b&&r.grid.updateSlide(E,I,u),!(u[E]&&Hi(I,"display")==="none")){if(t.slidesPerView==="auto"){y&&(u[E].style[r.getDirectionLabel("width")]="");const D=getComputedStyle(I),P=I.style.transform,O=I.style.webkitTransform;if(P&&(I.style.transform="none"),O&&(I.style.webkitTransform="none"),t.roundLengths)C=r.isHorizontal()?Pc(I,"width",!0):Pc(I,"height",!0);else{const z=e(D,"width"),W=e(D,"padding-left"),H=e(D,"padding-right"),V=e(D,"margin-left"),Q=e(D,"margin-right"),L=D.getPropertyValue("box-sizing");if(L&&L==="border-box")C=z+V+Q;else{const{clientWidth:de,offsetWidth:re}=I;C=z+W+H+V+Q+(re-de)}}P&&(I.style.transform=P),O&&(I.style.webkitTransform=O),t.roundLengths&&(C=Math.floor(C))}else C=(s-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(C=Math.floor(C)),u[E]&&(u[E].style[r.getDirectionLabel("width")]=`${C}px`);u[E]&&(u[E].swiperSlideSize=C),_.push(C),t.centeredSlides?(M=M+C/2+S/2+v,S===0&&E!==0&&(M=M-s/2-v),E===0&&(M=M-s/2-v),Math.abs(M)<1/1e3&&(M=0),t.roundLengths&&(M=Math.floor(M)),T%t.slidesPerGroup===0&&f.push(M),h.push(M)):(t.roundLengths&&(M=Math.floor(M)),(T-Math.min(r.params.slidesPerGroupSkip,T))%r.params.slidesPerGroup===0&&f.push(M),h.push(M),M=M+C+v),r.virtualSize+=C+v,S=C,T+=1}}if(r.virtualSize=Math.max(r.virtualSize,s)+g,a&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${r.virtualSize+v}px`),t.setWrapperSize&&(n.style[r.getDirectionLabel("width")]=`${r.virtualSize+v}px`),b&&r.grid.updateWrapperSize(C,f),!t.centeredSlides){const E=[];for(let I=0;I<f.length;I+=1){let D=f[I];t.roundLengths&&(D=Math.floor(D)),f[I]<=r.virtualSize-s&&E.push(D)}f=E,Math.floor(r.virtualSize-s)-Math.floor(f[f.length-1])>1&&f.push(r.virtualSize-s)}if(l&&t.loop){const E=_[0]+v;if(t.slidesPerGroup>1){const I=Math.ceil((r.virtual.slidesBefore+r.virtual.slidesAfter)/t.slidesPerGroup),D=E*t.slidesPerGroup;for(let P=0;P<I;P+=1)f.push(f[f.length-1]+D)}for(let I=0;I<r.virtual.slidesBefore+r.virtual.slidesAfter;I+=1)t.slidesPerGroup===1&&f.push(f[f.length-1]+E),h.push(h[h.length-1]+E),r.virtualSize+=E}if(f.length===0&&(f=[0]),v!==0){const E=r.isHorizontal()&&a?"marginLeft":r.getDirectionLabel("marginRight");u.filter((I,D)=>!t.cssMode||t.loop?!0:D!==u.length-1).forEach(I=>{I.style[E]=`${v}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let E=0;_.forEach(D=>{E+=D+(v||0)}),E-=v;const I=E>s?E-s:0;f=f.map(D=>D<=0?-m:D>I?I+g:D)}if(t.centerInsufficientSlides){let E=0;_.forEach(D=>{E+=D+(v||0)}),E-=v;const I=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(E+I<s){const D=(s-E-I)/2;f.forEach((P,O)=>{f[O]=P-D}),h.forEach((P,O)=>{h[O]=P+D})}}if(Object.assign(r,{slides:u,snapGrid:f,slidesGrid:h,slidesSizesGrid:_}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){ra(n,"--swiper-centered-offset-before",`${-f[0]}px`),ra(n,"--swiper-centered-offset-after",`${r.size/2-_[_.length-1]/2}px`);const E=-r.snapGrid[0],I=-r.slidesGrid[0];r.snapGrid=r.snapGrid.map(D=>D+E),r.slidesGrid=r.slidesGrid.map(D=>D+I)}if(d!==c&&r.emit("slidesLengthChange"),f.length!==p&&(r.params.watchOverflow&&r.checkOverflow(),r.emit("snapGridLengthChange")),h.length!==x&&r.emit("slidesGridLengthChange"),t.watchSlidesProgress&&r.updateSlidesOffset(),r.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const E=`${t.containerModifierClass}backface-hidden`,I=r.el.classList.contains(E);d<=t.maxBackfaceHiddenSlides?I||r.el.classList.add(E):I&&r.el.classList.remove(E)}}function uy(r){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof r=="number"?e.setTransition(r):r===!0&&e.setTransition(e.params.speed);const a=o=>n?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const o=e.activeIndex+s;if(o>e.slides.length&&!n)break;t.push(a(o))}else t.push(a(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const o=t[s].offsetHeight;i=o>i?o:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function dy(){const r=this,e=r.slides,t=r.isElement?r.isHorizontal()?r.wrapperEl.offsetLeft:r.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(r.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-r.cssOverflowAdjustment()}const _f=(r,e,t)=>{e&&!r.classList.contains(t)?r.classList.add(t):!e&&r.classList.contains(t)&&r.classList.remove(t)};function fy(r){r===void 0&&(r=this&&this.translate||0);const e=this,t=e.params,{slides:n,rtlTranslate:i,snapGrid:s}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-r;i&&(a=r),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<n.length;l+=1){const c=n[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=n[0].swiperSlideOffset);const d=(a+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),f=(a-s[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),h=-(a-u),_=h+e.slidesSizesGrid[l],m=h>=0&&h<=e.size-e.slidesSizesGrid[l],g=h>=0&&h<e.size-1||_>1&&_<=e.size||h<=0&&_>=e.size;g&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),_f(c,g,t.slideVisibleClass),_f(c,m,t.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-f:f}}function hy(r){const e=this;if(typeof r>"u"){const u=e.rtlTranslate?-1:1;r=e&&e.translate&&e.translate*u||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:a,progressLoop:o}=e;const l=s,c=a;if(n===0)i=0,s=!0,a=!0;else{i=(r-e.minTranslate())/n;const u=Math.abs(r-e.minTranslate())<1,d=Math.abs(r-e.maxTranslate())<1;s=u||i<=0,a=d||i>=1,u&&(i=0),d&&(i=1)}if(t.loop){const u=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),f=e.slidesGrid[u],h=e.slidesGrid[d],_=e.slidesGrid[e.slidesGrid.length-1],m=Math.abs(r);m>=f?o=(m-f)/_:o=(m+_-h)/_,o>1&&(o-=1)}Object.assign(e,{progress:i,progressLoop:o,isBeginning:s,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(r),s&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!a)&&e.emit("fromEdge"),e.emit("progress",i)}const Vl=(r,e,t)=>{e&&!r.classList.contains(t)?r.classList.add(t):!e&&r.classList.contains(t)&&r.classList.remove(t)};function py(){const r=this,{slides:e,params:t,slidesEl:n,activeIndex:i}=r,s=r.virtual&&t.virtual.enabled,a=r.grid&&t.grid&&t.grid.rows>1,o=d=>li(n,`.${t.slideClass}${d}, swiper-slide${d}`)[0];let l,c,u;if(s)if(t.loop){let d=i-r.virtual.slidesBefore;d<0&&(d=r.virtual.slides.length+d),d>=r.virtual.slides.length&&(d-=r.virtual.slides.length),l=o(`[data-swiper-slide-index="${d}"]`)}else l=o(`[data-swiper-slide-index="${i}"]`);else a?(l=e.filter(d=>d.column===i)[0],u=e.filter(d=>d.column===i+1)[0],c=e.filter(d=>d.column===i-1)[0]):l=e[i];l&&(a||(u=QM(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=JM(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(d=>{Vl(d,d===l,t.slideActiveClass),Vl(d,d===u,t.slideNextClass),Vl(d,d===c,t.slidePrevClass)}),r.emitSlidesClasses()}const ga=(r,e)=>{if(!r||r.destroyed||!r.params)return;const t=()=>r.isElement?"swiper-slide":`.${r.params.slideClass}`,n=e.closest(t());if(n){let i=n.querySelector(`.${r.params.lazyPreloaderClass}`);!i&&r.isElement&&(n.shadowRoot?i=n.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(i=n.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Wl=(r,e)=>{if(!r.slides[e])return;const t=r.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Rc=r=>{if(!r||r.destroyed||!r.params)return;let e=r.params.lazyPreloadPrevNext;const t=r.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(r.params.slidesPerView),i=r.activeIndex;if(r.params.grid&&r.params.grid.rows>1){const a=i,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+n+c)),r.slides.forEach((l,c)=>{o.includes(l.column)&&Wl(r,c)});return}const s=i+n-1;if(r.params.rewind||r.params.loop)for(let a=i-e;a<=s+e;a+=1){const o=(a%t+t)%t;(o<i||o>s)&&Wl(r,o)}else for(let a=Math.max(i-e,0);a<=Math.min(s+e,t-1);a+=1)a!==i&&(a>s||a<i)&&Wl(r,a)};function my(r){const{slidesGrid:e,params:t}=r,n=r.rtlTranslate?r.translate:-r.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?n>=e[s]&&n<e[s+1]-(e[s+1]-e[s])/2?i=s:n>=e[s]&&n<e[s+1]&&(i=s+1):n>=e[s]&&(i=s);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function gy(r){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:i,activeIndex:s,realIndex:a,snapIndex:o}=e;let l=r,c;const u=h=>{let _=h-e.virtual.slidesBefore;return _<0&&(_=e.virtual.slides.length+_),_>=e.virtual.slides.length&&(_-=e.virtual.slides.length),_};if(typeof l>"u"&&(l=my(e)),n.indexOf(t)>=0)c=n.indexOf(t);else{const h=Math.min(i.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/i.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===s&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const d=e.grid&&i.grid&&i.grid.rows>1;let f;if(e.virtual&&i.virtual.enabled&&i.loop)f=u(l);else if(d){const h=e.slides.filter(m=>m.column===l)[0];let _=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(_)&&(_=Math.max(e.slides.indexOf(h),0)),f=Math.floor(_/i.grid.rows)}else if(e.slides[l]){const h=e.slides[l].getAttribute("data-swiper-slide-index");h?f=parseInt(h,10):f=l}else f=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:f,previousIndex:s,activeIndex:l}),e.initialized&&Rc(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==f&&e.emit("realIndexChange"),e.emit("slideChange"))}function _y(r,e){const t=this,n=t.params;let i=r.closest(`.${n.slideClass}, swiper-slide`);!i&&t.isElement&&e&&e.length>1&&e.includes(r)&&[...e.slice(e.indexOf(r)+1,e.length)].forEach(o=>{!i&&o.matches&&o.matches(`.${n.slideClass}, swiper-slide`)&&(i=o)});let s=!1,a;if(i){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===i){s=!0,a=o;break}}if(i&&s)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var vy={updateSize:ly,updateSlides:cy,updateAutoHeight:uy,updateSlidesOffset:dy,updateSlidesProgress:fy,updateProgress:hy,updateSlidesClasses:py,updateActiveIndex:gy,updateClickedSlide:_y};function xy(r){r===void 0&&(r=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:n,translate:i,wrapperEl:s}=e;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let a=jM(s,r);return a+=e.cssOverflowAdjustment(),n&&(a=-a),a||0}function Sy(r,e){const t=this,{rtlTranslate:n,params:i,wrapperEl:s,progress:a}=t;let o=0,l=0;const c=0;t.isHorizontal()?o=n?-r:r:l=r,i.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,i.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:i.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let u;const d=t.maxTranslate()-t.minTranslate();d===0?u=0:u=(r-t.minTranslate())/d,u!==a&&t.updateProgress(r),t.emit("setTranslate",t.translate,e)}function My(){return-this.snapGrid[0]}function yy(){return-this.snapGrid[this.snapGrid.length-1]}function Ey(r,e,t,n,i){r===void 0&&(r=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),n===void 0&&(n=!0);const s=this,{params:a,wrapperEl:o}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(n&&r>l?u=l:n&&r<c?u=c:u=r,s.updateProgress(u),a.cssMode){const d=s.isHorizontal();if(e===0)o[d?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return Ap({swiper:s,targetPosition:-u,side:d?"left":"top"}),!0;o.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(f){!s||s.destroyed||f.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Ty={getTranslate:xy,setTranslate:Sy,minTranslate:My,maxTranslate:yy,translateTo:Ey};function by(r,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${r}ms`,t.wrapperEl.style.transitionDelay=r===0?"0ms":""),t.emit("setTransition",r,e)}function Lp(r){let{swiper:e,runCallbacks:t,direction:n,step:i}=r;const{activeIndex:s,previousIndex:a}=e;let o=n;if(o||(s>a?o="next":s<a?o="prev":o="reset"),e.emit(`transition${i}`),t&&s!==a){if(o==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),o==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function wy(r,e){r===void 0&&(r=!0);const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),Lp({swiper:t,runCallbacks:r,direction:e,step:"Start"}))}function Ay(r,e){r===void 0&&(r=!0);const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),Lp({swiper:t,runCallbacks:r,direction:e,step:"End"}))}var Cy={setTransition:by,transitionStart:wy,transitionEnd:Ay};function Py(r,e,t,n,i){r===void 0&&(r=0),t===void 0&&(t=!0),typeof r=="string"&&(r=parseInt(r,10));const s=this;let a=r;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:h,enabled:_}=s;if(!_&&!n&&!i||s.destroyed||s.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const m=Math.min(s.params.slidesPerGroupSkip,a);let g=m+Math.floor((a-m)/s.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const p=-l[g];if(o.normalizeSlideIndex)for(let S=0;S<c.length;S+=1){const T=-Math.floor(p*100),b=Math.floor(c[S]*100),C=Math.floor(c[S+1]*100);typeof c[S+1]<"u"?T>=b&&T<C-(C-b)/2?a=S:T>=b&&T<C&&(a=S+1):T>=b&&(a=S)}if(s.initialized&&a!==d&&(!s.allowSlideNext&&(f?p>s.translate&&p>s.minTranslate():p<s.translate&&p<s.minTranslate())||!s.allowSlidePrev&&p>s.translate&&p>s.maxTranslate()&&(d||0)!==a))return!1;a!==(u||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(p);let x;a>d?x="next":a<d?x="prev":x="reset";const v=s.virtual&&s.params.virtual.enabled;if(!(v&&i)&&(f&&-p===s.translate||!f&&p===s.translate))return s.updateActiveIndex(a),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),o.effect!=="slide"&&s.setTranslate(p),x!=="reset"&&(s.transitionStart(t,x),s.transitionEnd(t,x)),!1;if(o.cssMode){const S=s.isHorizontal(),T=f?p:-p;if(e===0)v&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),v&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[S?"scrollLeft":"scrollTop"]=T})):h[S?"scrollLeft":"scrollTop"]=T,v&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1});else{if(!s.support.smoothScroll)return Ap({swiper:s,targetPosition:T,side:S?"left":"top"}),!0;h.scrollTo({[S?"left":"top"]:T,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(p),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,n),s.transitionStart(t,x),e===0?s.transitionEnd(t,x):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(T){!s||s.destroyed||T.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,x))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Ry(r,e,t,n){r===void 0&&(r=0),t===void 0&&(t=!0),typeof r=="string"&&(r=parseInt(r,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=r;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let o;if(s){const f=a*i.params.grid.rows;o=i.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===f)[0].column}else o=i.getSlideIndexByData(a);const l=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let u=i.params.slidesPerView;u==="auto"?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let d=l-o<u;if(c&&(d=d||o<Math.ceil(u/2)),n&&c&&i.params.slidesPerView!=="auto"&&!s&&(d=!1),d){const f=c?o<i.activeIndex?"prev":"next":o-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?o+1:o-l+1,slideRealIndex:f==="next"?i.realIndex:void 0})}if(s){const f=a*i.params.grid.rows;a=i.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===f)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,e,t,n)}),i}function Ly(r,e,t){e===void 0&&(e=!0);const n=this,{enabled:i,params:s,animating:a}=n;if(!i||n.destroyed)return n;typeof r>"u"&&(r=n.params.speed);let o=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(o=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<s.slidesPerGroupSkip?1:o,c=n.virtual&&s.virtual.enabled;if(s.loop){if(a&&!c&&s.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,r,e,t)}),!0}return s.rewind&&n.isEnd?n.slideTo(0,r,e,t):n.slideTo(n.activeIndex+l,r,e,t)}function Dy(r,e,t){e===void 0&&(e=!0);const n=this,{params:i,snapGrid:s,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof r>"u"&&(r=n.params.speed);const u=n.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const d=o?n.translate:-n.translate;function f(p){return p<0?-Math.floor(Math.abs(p)):Math.floor(p)}const h=f(d),_=s.map(p=>f(p));let m=s[_.indexOf(h)-1];if(typeof m>"u"&&i.cssMode){let p;s.forEach((x,v)=>{h>=x&&(p=v)}),typeof p<"u"&&(m=s[p>0?p-1:p])}let g=0;if(typeof m<"u"&&(g=a.indexOf(m),g<0&&(g=n.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(g=g-n.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),i.rewind&&n.isBeginning){const p=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(p,r,e,t)}else if(i.loop&&n.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{n.slideTo(g,r,e,t)}),!0;return n.slideTo(g,r,e,t)}function Iy(r,e,t){e===void 0&&(e=!0);const n=this;if(!n.destroyed)return typeof r>"u"&&(r=n.params.speed),n.slideTo(n.activeIndex,r,e,t)}function Uy(r,e,t,n){e===void 0&&(e=!0),n===void 0&&(n=.5);const i=this;if(i.destroyed)return;typeof r>"u"&&(r=i.params.speed);let s=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,s),o=a+Math.floor((s-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[o]){const c=i.snapGrid[o],u=i.snapGrid[o+1];l-c>(u-c)*n&&(s+=i.params.slidesPerGroup)}else{const c=i.snapGrid[o-1],u=i.snapGrid[o];l-c<=(u-c)*n&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,r,e,t)}function Oy(){const r=this;if(r.destroyed)return;const{params:e,slidesEl:t}=r,n=e.slidesPerView==="auto"?r.slidesPerViewDynamic():e.slidesPerView;let i=r.clickedIndex,s;const a=r.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(r.animating)return;s=parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<r.loopedSlides-n/2||i>r.slides.length-r.loopedSlides+n/2?(r.loopFix(),i=r.getSlideIndex(li(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),Cc(()=>{r.slideTo(i)})):r.slideTo(i):i>r.slides.length-n?(r.loopFix(),i=r.getSlideIndex(li(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),Cc(()=>{r.slideTo(i)})):r.slideTo(i)}else r.slideTo(i)}var Ny={slideTo:Py,slideToLoop:Ry,slideNext:Ly,slidePrev:Dy,slideReset:Iy,slideToClosest:Uy,slideToClickedSlide:Oy};function Fy(r){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{li(n,`.${t.slideClass}, swiper-slide`).forEach((d,f)=>{d.setAttribute("data-swiper-slide-index",f)})},s=e.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(s?t.grid.rows:1),o=e.slides.length%a!==0,l=s&&e.slides.length%t.grid.rows!==0,c=u=>{for(let d=0;d<u;d+=1){const f=e.isElement?po("swiper-slide",[t.slideBlankClass]):po("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(f)}};if(o){if(t.loopAddBlankSlides){const u=a-e.slides.length%a;c(u),e.recalcSlides(),e.updateSlides()}else Ia("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(t.loopAddBlankSlides){const u=t.grid.rows-e.slides.length%t.grid.rows;c(u),e.recalcSlides(),e.updateSlides()}else Ia("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:r,direction:t.centeredSlides?void 0:"next"})}function zy(r){let{slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:i,activeSlideIndex:s,byController:a,byMousewheel:o}=r===void 0?{}:r;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:h}=l,{centeredSlides:_}=h;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&h.virtual.enabled){t&&(!h.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):h.centeredSlides&&l.snapIndex<h.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,l.emit("loopFix");return}let m=h.slidesPerView;m==="auto"?m=l.slidesPerViewDynamic():(m=Math.ceil(parseFloat(h.slidesPerView,10)),_&&m%2===0&&(m=m+1));const g=h.slidesPerGroupAuto?m:h.slidesPerGroup;let p=g;p%g!==0&&(p+=g-p%g),p+=h.loopAdditionalSlides,l.loopedSlides=p;const x=l.grid&&h.grid&&h.grid.rows>1;c.length<m+p?Ia("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):x&&h.grid.fill==="row"&&Ia("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const v=[],M=[];let S=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.filter(P=>P.classList.contains(h.slideActiveClass))[0]):S=s;const T=n==="next"||!n,b=n==="prev"||!n;let C=0,y=0;const E=x?Math.ceil(c.length/h.grid.rows):c.length,D=(x?c[s].column:s)+(_&&typeof i>"u"?-m/2+.5:0);if(D<p){C=Math.max(p-D,g);for(let P=0;P<p-D;P+=1){const O=P-Math.floor(P/E)*E;if(x){const z=E-O-1;for(let W=c.length-1;W>=0;W-=1)c[W].column===z&&v.push(W)}else v.push(E-O-1)}}else if(D+m>E-p){y=Math.max(D-(E-p*2),g);for(let P=0;P<y;P+=1){const O=P-Math.floor(P/E)*E;x?c.forEach((z,W)=>{z.column===O&&M.push(W)}):M.push(O)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),b&&v.forEach(P=>{c[P].swiperLoopMoveDOM=!0,f.prepend(c[P]),c[P].swiperLoopMoveDOM=!1}),T&&M.forEach(P=>{c[P].swiperLoopMoveDOM=!0,f.append(c[P]),c[P].swiperLoopMoveDOM=!1}),l.recalcSlides(),h.slidesPerView==="auto"?l.updateSlides():x&&(v.length>0&&b||M.length>0&&T)&&l.slides.forEach((P,O)=>{l.grid.updateSlide(O,P,l.slides)}),h.watchSlidesProgress&&l.updateSlidesOffset(),t){if(v.length>0&&b){if(typeof e>"u"){const P=l.slidesGrid[S],z=l.slidesGrid[S+C]-P;o?l.setTranslate(l.translate-z):(l.slideTo(S+Math.ceil(C),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else if(i){const P=x?v.length/h.grid.rows:v.length;l.slideTo(l.activeIndex+P,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(M.length>0&&T)if(typeof e>"u"){const P=l.slidesGrid[S],z=l.slidesGrid[S-y]-P;o?l.setTranslate(l.translate-z):(l.slideTo(S-y,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else{const P=x?M.length/h.grid.rows:M.length;l.slideTo(l.activeIndex-P,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(O=>{!O.destroyed&&O.params.loop&&O.loopFix({...P,slideTo:O.params.slidesPerView===h.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...P,slideTo:l.controller.control.params.slidesPerView===h.slidesPerView?t:!1})}l.emit("loopFix")}function By(){const r=this,{params:e,slidesEl:t}=r;if(!e.loop||r.virtual&&r.params.virtual.enabled)return;r.recalcSlides();const n=[];r.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;n[s]=i}),r.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),n.forEach(i=>{t.append(i)}),r.recalcSlides(),r.slideTo(r.realIndex,0)}var ky={loopCreate:Fy,loopFix:zy,loopDestroy:By};function Gy(r){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=r?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Hy(){const r=this;r.params.watchOverflow&&r.isLocked||r.params.cssMode||(r.isElement&&(r.__preventObserver__=!0),r[r.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",r.isElement&&requestAnimationFrame(()=>{r.__preventObserver__=!1}))}var Vy={setGrabCursor:Gy,unsetGrabCursor:Hy};function Wy(r,e){e===void 0&&(e=this);function t(n){if(!n||n===Cs()||n===Rn())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(r);return!i&&!n.getRootNode?null:i||t(n.getRootNode().host)}return t(e)}function vf(r,e,t){const n=Rn(),{params:i}=r,s=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return s&&(t<=a||t>=n.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function Xy(r){const e=this,t=Cs();let n=r;n.originalEvent&&(n=n.originalEvent);const i=e.touchEventsData;if(n.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==n.pointerId)return;i.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(i.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){vf(e,n,n.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:o}=e;if(!o||!s.simulateTouch&&n.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=n.target;if(s.touchEventsTarget==="wrapper"&&!ZM(l,e.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||i.isTouched&&i.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",u=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&u&&(l=u[0]);const d=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,f=!!(n.target&&n.target.shadowRoot);if(s.noSwiping&&(f?Wy(d,l):l.closest(d))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;a.currentX=n.pageX,a.currentY=n.pageY;const h=a.currentX,_=a.currentY;if(!vf(e,n,h))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=h,a.startY=_,i.touchStartTime=Da(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let m=!0;l.matches(i.focusableElements)&&(m=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==l&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&t.activeElement.blur();const g=m&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||g)&&!l.isContentEditable&&n.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function qy(r){const e=Cs(),t=this,n=t.touchEventsData,{params:i,touches:s,rtlTranslate:a,enabled:o}=t;if(!o||!i.simulateTouch&&r.pointerType==="mouse")return;let l=r;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(T=>T.identifier===n.touchId)[0],!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,d=c.pageY;if(l.preventedByNestedSwiper){s.startX=u,s.startY=d;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(s,{startX:u,startY:d,currentX:u,currentY:d}),n.touchStartTime=Da());return}if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(d<s.startY&&t.translate<=t.maxTranslate()||d>s.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(u<s.startX&&t.translate<=t.maxTranslate()||u>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&e.activeElement.matches(n.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=u,s.currentY=d;const f=s.currentX-s.startX,h=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(f**2+h**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let T;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:f*f+h*h>=25&&(T=Math.atan2(Math.abs(h),Math.abs(f))*180/Math.PI,n.isScrolling=t.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let _=t.isHorizontal()?f:h,m=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(_=Math.abs(_)*(a?1:-1),m=Math.abs(m)*(a?1:-1)),s.diff=_,_*=i.touchRatio,a&&(_=-_,m=-m);const g=t.touchesDirection;t.swipeDirection=_>0?"prev":"next",t.touchesDirection=m>0?"prev":"next";const p=t.params.loop&&!i.cssMode,x=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(p&&x&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(T)}n.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let v;if(new Date().getTime(),n.isMoved&&n.allowThresholdMove&&g!==t.touchesDirection&&p&&x&&Math.abs(_)>=1){Object.assign(s,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=_+n.startTranslate;let M=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),_>0?(p&&x&&!v&&n.allowThresholdMove&&n.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(M=!1,i.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+_)**S))):_<0&&(p&&x&&!v&&n.allowThresholdMove&&n.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(M=!1,i.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-_)**S))),M&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),i.threshold>0)if(Math.abs(_)>i.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{n.currentTranslate=n.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function Yy(r){const e=this,t=e.touchEventsData;let n=r;n.originalEvent&&(n=n.originalEvent);let i;if(n.type==="touchend"||n.type==="touchcancel"){if(i=[...n.changedTouches].filter(S=>S.identifier===t.touchId)[0],!i||i.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;i=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!a.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=Da(),f=d-t.touchStartTime;if(e.allowClick){const S=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(S&&S[0]||n.target,S),e.emit("tap click",n),f<300&&d-t.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(t.lastClickTime=Da(),Cc(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(a.followFinger?h=l?e.translate:-e.translate:h=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}const _=h>=-e.maxTranslate()&&!e.params.loop;let m=0,g=e.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[S+T]<"u"?(_||h>=c[S]&&h<c[S+T])&&(m=S,g=c[S+T]-c[S]):(_||h>=c[S])&&(m=S,g=c[c.length-1]-c[c.length-2])}let p=null,x=null;a.rewind&&(e.isBeginning?x=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(p=0));const v=(h-c[m])/g,M=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(f>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?p:m+M):e.slideTo(m)),e.swipeDirection==="prev"&&(v>1-a.longSwipesRatio?e.slideTo(m+M):x!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?e.slideTo(x):e.slideTo(m))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(m+M):e.slideTo(m):(e.swipeDirection==="next"&&e.slideTo(p!==null?p:m+M),e.swipeDirection==="prev"&&e.slideTo(x!==null?x:m))}}function xf(){const r=this,{params:e,el:t}=r;if(t&&t.offsetWidth===0)return;e.breakpoints&&r.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:i,snapGrid:s}=r,a=r.virtual&&r.params.virtual.enabled;r.allowSlideNext=!0,r.allowSlidePrev=!0,r.updateSize(),r.updateSlides(),r.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&r.isEnd&&!r.isBeginning&&!r.params.centeredSlides&&!o?r.slideTo(r.slides.length-1,0,!1,!0):r.params.loop&&!a?r.slideToLoop(r.realIndex,0,!1,!0):r.slideTo(r.activeIndex,0,!1,!0),r.autoplay&&r.autoplay.running&&r.autoplay.paused&&(clearTimeout(r.autoplay.resizeTimeout),r.autoplay.resizeTimeout=setTimeout(()=>{r.autoplay&&r.autoplay.running&&r.autoplay.paused&&r.autoplay.resume()},500)),r.allowSlidePrev=i,r.allowSlideNext=n,r.params.watchOverflow&&s!==r.snapGrid&&r.checkOverflow()}function $y(r){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&r.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(r.stopPropagation(),r.stopImmediatePropagation())))}function jy(){const r=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=r;if(!n)return;r.previousTranslate=r.translate,r.isHorizontal()?r.translate=-e.scrollLeft:r.translate=-e.scrollTop,r.translate===0&&(r.translate=0),r.updateActiveIndex(),r.updateSlidesClasses();let i;const s=r.maxTranslate()-r.minTranslate();s===0?i=0:i=(r.translate-r.minTranslate())/s,i!==r.progress&&r.updateProgress(t?-r.translate:r.translate),r.emit("setTranslate",r.translate,!1)}function Ky(r){const e=this;ga(e,r.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Zy(){const r=this;r.documentTouchHandlerProceeded||(r.documentTouchHandlerProceeded=!0,r.params.touchReleaseOnEdges&&(r.el.style.touchAction="auto"))}const Dp=(r,e)=>{const t=Cs(),{params:n,el:i,wrapperEl:s,device:a}=r,o=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!i||typeof i=="string"||(t[l]("touchstart",r.onDocumentTouchStart,{passive:!1,capture:o}),i[l]("touchstart",r.onTouchStart,{passive:!1}),i[l]("pointerdown",r.onTouchStart,{passive:!1}),t[l]("touchmove",r.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",r.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",r.onTouchEnd,{passive:!0}),t[l]("pointerup",r.onTouchEnd,{passive:!0}),t[l]("pointercancel",r.onTouchEnd,{passive:!0}),t[l]("touchcancel",r.onTouchEnd,{passive:!0}),t[l]("pointerout",r.onTouchEnd,{passive:!0}),t[l]("pointerleave",r.onTouchEnd,{passive:!0}),t[l]("contextmenu",r.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&i[l]("click",r.onClick,!0),n.cssMode&&s[l]("scroll",r.onScroll),n.updateOnWindowResize?r[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",xf,!0):r[c]("observerUpdate",xf,!0),i[l]("load",r.onLoad,{capture:!0}))};function Jy(){const r=this,{params:e}=r;r.onTouchStart=Xy.bind(r),r.onTouchMove=qy.bind(r),r.onTouchEnd=Yy.bind(r),r.onDocumentTouchStart=Zy.bind(r),e.cssMode&&(r.onScroll=jy.bind(r)),r.onClick=$y.bind(r),r.onLoad=Ky.bind(r),Dp(r,"on")}function Qy(){Dp(this,"off")}var eE={attachEvents:Jy,detachEvents:Qy};const Sf=(r,e)=>r.grid&&e.grid&&e.grid.rows>1;function tE(){const r=this,{realIndex:e,initialized:t,params:n,el:i}=r,s=n.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=r.getBreakpoint(s,r.params.breakpointsBase,r.el);if(!a||r.currentBreakpoint===a)return;const l=(a in s?s[a]:void 0)||r.originalParams,c=Sf(r,n),u=Sf(r,l),d=r.params.grabCursor,f=l.grabCursor,h=n.enabled;c&&!u?(i.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),r.emitContainerClasses()):!c&&u&&(i.classList.add(`${n.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&n.grid.fill==="column")&&i.classList.add(`${n.containerModifierClass}grid-column`),r.emitContainerClasses()),d&&!f?r.unsetGrabCursor():!d&&f&&r.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(v=>{if(typeof l[v]>"u")return;const M=n[v]&&n[v].enabled,S=l[v]&&l[v].enabled;M&&!S&&r[v].disable(),!M&&S&&r[v].enable()});const _=l.direction&&l.direction!==n.direction,m=n.loop&&(l.slidesPerView!==n.slidesPerView||_),g=n.loop;_&&t&&r.changeDirection(),Tn(r.params,l);const p=r.params.enabled,x=r.params.loop;Object.assign(r,{allowTouchMove:r.params.allowTouchMove,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev}),h&&!p?r.disable():!h&&p&&r.enable(),r.currentBreakpoint=a,r.emit("_beforeBreakpoint",l),t&&(m?(r.loopDestroy(),r.loopCreate(e),r.updateSlides()):!g&&x?(r.loopCreate(e),r.updateSlides()):g&&!x&&r.loopDestroy()),r.emit("breakpoint",l)}function nE(r,e,t){if(e===void 0&&(e="window"),!r||e==="container"&&!t)return;let n=!1;const i=Rn(),s=e==="window"?i.innerHeight:t.clientHeight,a=Object.keys(r).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:s*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:c}=a[o];e==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=t.clientWidth&&(n=l)}return n||"max"}var iE={setBreakpoint:tE,getBreakpoint:nE};function rE(r,e){const t=[];return r.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(i=>{n[i]&&t.push(e+i)}):typeof n=="string"&&t.push(e+n)}),t}function sE(){const r=this,{classNames:e,params:t,rtl:n,el:i,device:s}=r,a=rE(["initialized",t.direction,{"free-mode":r.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),i.classList.add(...e),r.emitContainerClasses()}function oE(){const r=this,{el:e,classNames:t}=r;!e||typeof e=="string"||(e.classList.remove(...t),r.emitContainerClasses())}var aE={addClasses:sE,removeClasses:oE};function lE(){const r=this,{isLocked:e,params:t}=r,{slidesOffsetBefore:n}=t;if(n){const i=r.slides.length-1,s=r.slidesGrid[i]+r.slidesSizesGrid[i]+n*2;r.isLocked=r.size>s}else r.isLocked=r.snapGrid.length===1;t.allowSlideNext===!0&&(r.allowSlideNext=!r.isLocked),t.allowSlidePrev===!0&&(r.allowSlidePrev=!r.isLocked),e&&e!==r.isLocked&&(r.isEnd=!1),e!==r.isLocked&&r.emit(r.isLocked?"lock":"unlock")}var cE={checkOverflow:lE},Mf={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function uE(r,e){return function(n){n===void 0&&(n={});const i=Object.keys(n)[0],s=n[i];if(typeof s!="object"||s===null){Tn(e,n);return}if(r[i]===!0&&(r[i]={enabled:!0}),i==="navigation"&&r[i]&&r[i].enabled&&!r[i].prevEl&&!r[i].nextEl&&(r[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&r[i]&&r[i].enabled&&!r[i].el&&(r[i].auto=!0),!(i in r&&"enabled"in s)){Tn(e,n);return}typeof r[i]=="object"&&!("enabled"in r[i])&&(r[i].enabled=!0),r[i]||(r[i]={enabled:!1}),Tn(e,n)}}const Xl={eventsEmitter:ay,update:vy,translate:Ty,transition:Cy,slide:Ny,loop:ky,grabCursor:Vy,events:eE,breakpoints:iE,checkOverflow:cE,classes:aE},ql={};class Un{constructor(){let e,t;for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?t=i[0]:[e,t]=i,t||(t={}),t=Tn({},t),e&&!t.el&&(t.el=e);const a=Cs();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){const u=[];return a.querySelectorAll(t.el).forEach(d=>{const f=Tn({},t,{el:d});u.push(new Un(f))}),u}const o=this;o.__swiper__=!0,o.support=Pp(),o.device=Rp({userAgent:t.userAgent}),o.browser=ry(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);const l={};o.modules.forEach(u=>{u({params:t,swiper:o,extendParams:uE(t,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const c=Tn({},Mf,l);return o.params=Tn({},c,ql,t),o.originalParams=Tn({},o.params),o.passedParams=Tn({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach(u=>{o.on(u,o.params.on[u])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,i=li(t,`.${n.slideClass}, swiper-slide`),s=Ua(i[0]);return Ua(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=li(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),a=(n.maxTranslate()-i)*e+i;n.translateTo(a,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const n=this,{params:i,slides:s,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=n;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=s[c]?Math.ceil(s[c].swiperSlideSize):0,f;for(let h=c+1;h<s.length;h+=1)s[h]&&!f&&(d+=Math.ceil(s[h].swiperSlideSize),u+=1,d>l&&(f=!0));for(let h=c-1;h>=0;h-=1)s[h]&&!f&&(d+=s[h].swiperSlideSize,u+=1,d>l&&(f=!0))}else if(e==="current")for(let d=c+1;d<s.length;d+=1)(t?a[d]+o[d]-a[c]<l:a[d]-a[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&ga(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)i(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const a=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const n=this,i=n.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(i()):li(n,i())[0])();return!a&&t.params.createElements&&(a=po("div",t.params.wrapperClass),n.append(a),li(n,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:n,wrapperEl:a,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:a,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Hi(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Hi(n,"direction")==="rtl"),wrongRTL:Hi(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?ga(t,s):s.addEventListener("load",a=>{ga(t,a.target)})}),Rc(t),t.initialized=!0,Rc(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const n=this,{params:i,el:s,wrapperEl:a,slides:o}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),YM(n)),n.destroyed=!0),null}static extendDefaults(e){Tn(ql,e)}static get extendedDefaults(){return ql}static get defaults(){return Mf}static installModule(e){Un.prototype.__modules__||(Un.prototype.__modules__=[]);const t=Un.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Un.installModule(t)),Un):(Un.installModule(e),Un)}}Object.keys(Xl).forEach(r=>{Object.keys(Xl[r]).forEach(e=>{Un.prototype[e]=Xl[r][e]})});Un.use([sy,oy]);function Ip(r,e,t,n){return r.params.createElements&&Object.keys(n).forEach(i=>{if(!t[i]&&t.auto===!0){let s=li(r.el,`.${n[i]}`)[0];s||(s=po("div",n[i]),s.className=n[i],r.el.append(s)),t[i]=s,e[i]=s}}),t}function dE(r){let{swiper:e,extendParams:t,on:n,emit:i}=r;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(_){let m;return _&&typeof _=="string"&&e.isElement&&(m=e.el.querySelector(_)||e.hostEl.querySelector(_),m)?m:(_&&(typeof _=="string"&&(m=[...document.querySelectorAll(_)]),e.params.uniqueNavElements&&typeof _=="string"&&m&&m.length>1&&e.el.querySelectorAll(_).length===1?m=e.el.querySelector(_):m&&m.length===1&&(m=m[0])),_&&!m?_:m)}function a(_,m){const g=e.params.navigation;_=Ot(_),_.forEach(p=>{p&&(p.classList[m?"add":"remove"](...g.disabledClass.split(" ")),p.tagName==="BUTTON"&&(p.disabled=m),e.params.watchOverflow&&e.enabled&&p.classList[e.isLocked?"add":"remove"](g.lockClass))})}function o(){const{nextEl:_,prevEl:m}=e.navigation;if(e.params.loop){a(m,!1),a(_,!1);return}a(m,e.isBeginning&&!e.params.rewind),a(_,e.isEnd&&!e.params.rewind)}function l(_){_.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function c(_){_.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function u(){const _=e.params.navigation;if(e.params.navigation=Ip(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(_.nextEl||_.prevEl))return;let m=s(_.nextEl),g=s(_.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:g}),m=Ot(m),g=Ot(g);const p=(x,v)=>{x&&x.addEventListener("click",v==="next"?c:l),!e.enabled&&x&&x.classList.add(..._.lockClass.split(" "))};m.forEach(x=>p(x,"next")),g.forEach(x=>p(x,"prev"))}function d(){let{nextEl:_,prevEl:m}=e.navigation;_=Ot(_),m=Ot(m);const g=(p,x)=>{p.removeEventListener("click",x==="next"?c:l),p.classList.remove(...e.params.navigation.disabledClass.split(" "))};_.forEach(p=>g(p,"next")),m.forEach(p=>g(p,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?h():(u(),o())}),n("toEdge fromEdge lock unlock",()=>{o()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:_,prevEl:m}=e.navigation;if(_=Ot(_),m=Ot(m),e.enabled){o();return}[..._,...m].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),n("click",(_,m)=>{let{nextEl:g,prevEl:p}=e.navigation;g=Ot(g),p=Ot(p);const x=m.target;let v=p.includes(x)||g.includes(x);if(e.isElement&&!v){const M=m.path||m.composedPath&&m.composedPath();M&&(v=M.find(S=>g.includes(S)||p.includes(S)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===x||e.pagination.el.contains(x)))return;let M;g.length?M=g[0].classList.contains(e.params.navigation.hiddenClass):p.length&&(M=p[0].classList.contains(e.params.navigation.hiddenClass)),i(M===!0?"navigationShow":"navigationHide"),[...g,...p].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const f=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),o()},h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:f,disable:h,update:o,init:u,destroy:d})}function Fs(r){return r===void 0&&(r=""),`.${r.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function fE(r){let{swiper:e,extendParams:t,on:n,emit:i}=r;const s="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:x=>x,formatFractionTotal:x=>x,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(x,v){const{bulletActiveClass:M}=e.params.pagination;x&&(x=x[`${v==="prev"?"previous":"next"}ElementSibling`],x&&(x.classList.add(`${M}-${v}`),x=x[`${v==="prev"?"previous":"next"}ElementSibling`],x&&x.classList.add(`${M}-${v}-${v}`)))}function u(x,v,M){if(x=x%M,v=v%M,v===x+1)return"next";if(v===x-1)return"previous"}function d(x){const v=x.target.closest(Fs(e.params.pagination.bulletClass));if(!v)return;x.preventDefault();const M=Ua(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===M)return;const S=u(e.realIndex,M,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(M)}else e.slideTo(M)}function f(){const x=e.rtl,v=e.params.pagination;if(l())return;let M=e.pagination.el;M=Ot(M);let S,T;const b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,C=e.params.loop?Math.ceil(b/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(T=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,T=e.previousSnapIndex):(T=e.previousIndex||0,S=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const y=e.pagination.bullets;let E,I,D;if(v.dynamicBullets&&(a=Pc(y[0],e.isHorizontal()?"width":"height",!0),M.forEach(P=>{P.style[e.isHorizontal()?"width":"height"]=`${a*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&T!==void 0&&(o+=S-(T||0),o>v.dynamicMainBullets-1?o=v.dynamicMainBullets-1:o<0&&(o=0)),E=Math.max(S-o,0),I=E+(Math.min(y.length,v.dynamicMainBullets)-1),D=(I+E)/2),y.forEach(P=>{const O=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(z=>`${v.bulletActiveClass}${z}`)].map(z=>typeof z=="string"&&z.includes(" ")?z.split(" "):z).flat();P.classList.remove(...O)}),M.length>1)y.forEach(P=>{const O=Ua(P);O===S?P.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&P.setAttribute("part","bullet"),v.dynamicBullets&&(O>=E&&O<=I&&P.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),O===E&&c(P,"prev"),O===I&&c(P,"next"))});else{const P=y[S];if(P&&P.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&y.forEach((O,z)=>{O.setAttribute("part",z===S?"bullet-active":"bullet")}),v.dynamicBullets){const O=y[E],z=y[I];for(let W=E;W<=I;W+=1)y[W]&&y[W].classList.add(...`${v.bulletActiveClass}-main`.split(" "));c(O,"prev"),c(z,"next")}}if(v.dynamicBullets){const P=Math.min(y.length,v.dynamicMainBullets+4),O=(a*P-a)/2-D*a,z=x?"right":"left";y.forEach(W=>{W.style[e.isHorizontal()?z:"top"]=`${O}px`})}}M.forEach((y,E)=>{if(v.type==="fraction"&&(y.querySelectorAll(Fs(v.currentClass)).forEach(I=>{I.textContent=v.formatFractionCurrent(S+1)}),y.querySelectorAll(Fs(v.totalClass)).forEach(I=>{I.textContent=v.formatFractionTotal(C)})),v.type==="progressbar"){let I;v.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const D=(S+1)/C;let P=1,O=1;I==="horizontal"?P=D:O=D,y.querySelectorAll(Fs(v.progressbarFillClass)).forEach(z=>{z.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${O})`,z.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(y.innerHTML=v.renderCustom(e,S+1,C),E===0&&i("paginationRender",y)):(E===0&&i("paginationRender",y),i("paginationUpdate",y)),e.params.watchOverflow&&e.enabled&&y.classList[e.isLocked?"add":"remove"](v.lockClass)})}function h(){const x=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let M=e.pagination.el;M=Ot(M);let S="";if(x.type==="bullets"){let T=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&T>v&&(T=v);for(let b=0;b<T;b+=1)x.renderBullet?S+=x.renderBullet.call(e,b,x.bulletClass):S+=`<${x.bulletElement} ${e.isElement?'part="bullet"':""} class="${x.bulletClass}"></${x.bulletElement}>`}x.type==="fraction"&&(x.renderFraction?S=x.renderFraction.call(e,x.currentClass,x.totalClass):S=`<span class="${x.currentClass}"></span> / <span class="${x.totalClass}"></span>`),x.type==="progressbar"&&(x.renderProgressbar?S=x.renderProgressbar.call(e,x.progressbarFillClass):S=`<span class="${x.progressbarFillClass}"></span>`),e.pagination.bullets=[],M.forEach(T=>{x.type!=="custom"&&(T.innerHTML=S||""),x.type==="bullets"&&e.pagination.bullets.push(...T.querySelectorAll(Fs(x.bulletClass)))}),x.type!=="custom"&&i("paginationRender",M[0])}function _(){e.params.pagination=Ip(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const x=e.params.pagination;if(!x.el)return;let v;typeof x.el=="string"&&e.isElement&&(v=e.el.querySelector(x.el)),!v&&typeof x.el=="string"&&(v=[...document.querySelectorAll(x.el)]),v||(v=x.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof x.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(x.el)],v.length>1&&(v=v.filter(M=>Cp(M,".swiper")[0]===e.el)[0])),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Ot(v),v.forEach(M=>{x.type==="bullets"&&x.clickable&&M.classList.add(...(x.clickableClass||"").split(" ")),M.classList.add(x.modifierClass+x.type),M.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.type==="bullets"&&x.dynamicBullets&&(M.classList.add(`${x.modifierClass}${x.type}-dynamic`),o=0,x.dynamicMainBullets<1&&(x.dynamicMainBullets=1)),x.type==="progressbar"&&x.progressbarOpposite&&M.classList.add(x.progressbarOppositeClass),x.clickable&&M.addEventListener("click",d),e.enabled||M.classList.add(x.lockClass)}))}function m(){const x=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=Ot(v),v.forEach(M=>{M.classList.remove(x.hiddenClass),M.classList.remove(x.modifierClass+x.type),M.classList.remove(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.clickable&&(M.classList.remove(...(x.clickableClass||"").split(" ")),M.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(M=>M.classList.remove(...x.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const x=e.params.pagination;let{el:v}=e.pagination;v=Ot(v),v.forEach(M=>{M.classList.remove(x.horizontalClass,x.verticalClass),M.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?p():(_(),h(),f())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&f()}),n("snapIndexChange",()=>{f()}),n("snapGridLengthChange",()=>{h(),f()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:x}=e.pagination;x&&(x=Ot(x),x.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{f()}),n("click",(x,v)=>{const M=v.target,S=Ot(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!M.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&M===e.navigation.nextEl||e.navigation.prevEl&&M===e.navigation.prevEl))return;const T=S[0].classList.contains(e.params.pagination.hiddenClass);i(T===!0?"paginationShow":"paginationHide"),S.forEach(b=>b.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=Ot(x),x.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),_(),h(),f()},p=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=Ot(x),x.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:g,disable:p,render:h,update:f,init:_,destroy:m})}function hE(r){const{effect:e,swiper:t,on:n,setTranslate:i,setTransition:s,overwriteParams:a,perspective:o,recreateShadows:l,getEffectParams:c}=r;n("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),o&&o()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const d=a?a():{};Object.assign(t.params,d),Object.assign(t.originalParams,d)}),n("setTranslate",()=>{t.params.effect===e&&i()}),n("setTransition",(d,f)=>{t.params.effect===e&&s(f)}),n("transitionEnd",()=>{if(t.params.effect===e&&l){if(!c||!c().slideShadows)return;t.slides.forEach(d=>{d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let u;n("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(u=!0),requestAnimationFrame(()=>{u&&t.slides&&t.slides.length&&(i(),u=!1)}))})}function pE(r,e){const t=lu(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function yf(r,e,t){const n=`swiper-slide-shadow${t?`-${t}`:""}${r?` swiper-slide-shadow-${r}`:""}`,i=lu(e);let s=i.querySelector(`.${n.split(" ").join(".")}`);return s||(s=po("div",n.split(" ")),i.append(s)),s}function mE(r){let{swiper:e,extendParams:t,on:n}=r;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),hE({effect:"coverflow",swiper:e,on:n,setTranslate:()=>{const{width:a,height:o,slides:l,slidesSizesGrid:c}=e,u=e.params.coverflowEffect,d=e.isHorizontal(),f=e.translate,h=d?-f+a/2:-f+o/2,_=d?u.rotate:-u.rotate,m=u.depth,g=ey(e);for(let p=0,x=l.length;p<x;p+=1){const v=l[p],M=c[p],S=v.swiperSlideOffset,T=(h-S-M/2)/M,b=typeof u.modifier=="function"?u.modifier(T):T*u.modifier;let C=d?_*b:0,y=d?0:_*b,E=-m*Math.abs(b),I=u.stretch;typeof I=="string"&&I.indexOf("%")!==-1&&(I=parseFloat(u.stretch)/100*M);let D=d?0:I*b,P=d?I*b:0,O=1-(1-u.scale)*Math.abs(b);Math.abs(P)<.001&&(P=0),Math.abs(D)<.001&&(D=0),Math.abs(E)<.001&&(E=0),Math.abs(C)<.001&&(C=0),Math.abs(y)<.001&&(y=0),Math.abs(O)<.001&&(O=0);const z=`translate3d(${P}px,${D}px,${E}px)  rotateX(${g(y)}deg) rotateY(${g(C)}deg) scale(${O})`,W=pE(u,v);if(W.style.transform=z,v.style.zIndex=-Math.abs(Math.round(b))+1,u.slideShadows){let H=d?v.querySelector(".swiper-slide-shadow-left"):v.querySelector(".swiper-slide-shadow-top"),V=d?v.querySelector(".swiper-slide-shadow-right"):v.querySelector(".swiper-slide-shadow-bottom");H||(H=yf("coverflow",v,d?"left":"top")),V||(V=yf("coverflow",v,d?"right":"bottom")),H&&(H.style.opacity=b>0?b:0),V&&(V.style.opacity=-b>0?-b:0)}}},setTransition:a=>{e.slides.map(l=>lu(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function gE(){nt.from(".project-title",{duration:1.5,xPercent:-100,opacity:0,scrollTrigger:{trigger:".projects",start:"top 70%",end:"top 60%",scrub:!0}});const r=new Un(".projects-container",{modules:[dE,fE,mE],effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",initialSlide:1,loop:!0,spaceBetween:30,coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5,slideShadows:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,effect:"slide"},768:{slidesPerView:2,effect:"coverflow"},1024:{slidesPerView:3,effect:"coverflow"}},on:{init:function(){e()}}});function e(){document.querySelectorAll(".slider-content").forEach(i=>{const s=i.querySelector(".show-project");i.addEventListener("mouseenter",()=>{nt.to(s,{scaleY:1,duration:.5,ease:"power3.out"})}),i.addEventListener("mouseleave",()=>{nt.to(s,{scaleY:0,duration:.3,ease:"power3.in"})}),i.addEventListener("click",()=>{window.innerWidth<768&&nt.to(s,{scaleY:s.scaleY===1?0:1,duration:.5,ease:"power3.inOut"})})})}const t=document.createElement("style");return t.textContent=`
    .swiper-pagination-bullet {
      background: var(--primary-color, #fff);
      opacity: 0.5;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: var(--primary-color, #fff);
    }
    .swiper-slide {
      opacity: 0.4;
      transition: opacity 0.3s;
    }
    .swiper-slide-active {
      opacity: 1;
    }
  `,document.head.appendChild(t),()=>{r&&r.destroy(),t.remove()}}nt.registerPlugin(ze);ze.normalizeScroll(!0);function _E(){const r=document.querySelector(".contact > .title-container"),e=document.querySelectorAll(" .contact-title");nt.from(e,{duration:3.5,xPercent:-100,opacity:0,ease:"powe3.out",stagger:.25,scrollTrigger:{trigger:r,start:"top 70%",end:"top 60%",scrub:!0}});const t=document.querySelector(".contact-container"),n=t.querySelectorAll(":scope > *");nt.from(n,{duration:3.5,yPercent:100,opacity:0,ease:"powe3.out",stagger:.25,scrollTrigger:{trigger:t,start:"top 70%",end:"top 50%",scrub:!0}})}function vE(){const r=document.querySelectorAll("img[data-src]"),e=new IntersectionObserver((t,n)=>{t.forEach(i=>{if(i.isIntersecting){const s=i.target;s.src=s.dataset.src,s.onload=()=>s.classList.remove("lazy"),n.unobserve(s)}})});r.forEach(t=>e.observe(t))}function xE(r){const e=document.querySelector("#tech-container"),t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(r(),t.unobserve(i.target))})},{threshold:.1});e&&t.observe(e)}nt.registerPlugin(ze);ze.normalizeScroll(!0);ze.config({limitCallbacks:!0,ignoreMobileResize:!0});function SE(){if(!document.querySelector(".tech-container")){console.error("Tech container not found");return}requestAnimationFrame(()=>{bp()})}function Ef(){vE(),dg();const r=gg(),e=new CM({dom:document.querySelector("#myThreeJsCanvas")});window.addEventListener("resize",()=>{e&&e.resize()}),xE(()=>{bp()}),RM(),LM(),gE(),_E(),setTimeout(SE,100),window.addEventListener("unload",()=>{r&&r(),e&&e.dispose()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ef):Ef();
