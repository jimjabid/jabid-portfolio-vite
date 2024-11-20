(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function yf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ms={duration:.5,overwrite:!1,delay:0},Rc,Yt,bt,Nn=1e8,ct=1/Nn,Xl=Math.PI*2,Ip=Xl/4,Up=0,Ef=Math.sqrt,Op=Math.cos,Np=Math.sin,Ft=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},Ci=function(e){return typeof e=="number"},Lc=function(e){return typeof e>"u"},di=function(e){return typeof e=="object"},ln=function(e){return e!==!1},Dc=function(){return typeof window<"u"},Sa=function(e){return xt(e)||Ft(e)},Tf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$t=Array.isArray,ql=/(?:-?\.?\d|\.)+/gi,bf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wf=/[+-]=-?[.\d]+/,Af=/[^,'"\[\]\s]+/gi,Fp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,Dn,Yl,Ic,Cn={},_o={},Cf,Pf=function(e){return(_o=Er(e,Cn))&&hn},Uc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},vo=function(e,t){return!t&&console.warn(e)},Rf=function(e,t){return e&&(Cn[e]=t)&&_o&&(_o[e]=t)||Cn},ra=function(){return 0},zp={suppressEvents:!0,isStart:!0,kill:!1},ro={suppressEvents:!0,kill:!1},Bp={suppressEvents:!0},Oc={},Vi=[],$l={},Lf,Sn={},Xo={},cu=30,so=[],Nc="",Fc=function(e){var t=e[0],n,i;if(di(t)||xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=so.length;i--&&!so[i].targetTest(t););n=so[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new th(e[i],n)))||e.splice(i,1);return e},pr=function(e){return e._gsap||Fc(Fn(e))[0]._gsap},Df=function(e,t,n){return(n=e[t])&&xt(n)?e[t]():Lc(n)&&e.getAttribute&&e.getAttribute(t)||n},cn=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},os=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},kp=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},xo=function(){var e=Vi.length,t=Vi.slice(0),n,i;for($l={},Vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},If=function(e,t,n,i){Vi.length&&!Yt&&xo(),e.render(t,n,i||Yt&&t<0&&(e._initted||e._startAt)),Vi.length&&!Yt&&xo()},Uf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Af).length<2?t:Ft(e)?e.trim():e},Of=function(e){return e},Gn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Gp=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Er=function(e,t){for(var n in t)e[n]=t[n];return e},uu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=di(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},So=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},qs=function(e){var t=e.parent||mt,n=e.keyframes?Gp($t(e.keyframes)):Gn;if(ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Hp=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Nf=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Io=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Vp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jl=function(e,t,n,i){return e._startAt&&(Yt?e._startAt.revert(ro):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Wp=function r(e){return!e||e._ts&&r(e.parent)},du=function(e){return e._repeat?gs(e._tTime,e=e.duration()+e._rDelay)*e:0},gs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Mo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Uo=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},Oo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Uo(e),n._dirty||mr(n,e)),e},Ff=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Mo(e.rawTime(),t),(!t._dur||ma(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},ri=function(e,t,n,i){return t.parent&&Yi(t),t._start=Bt((Ci(n)?n:n||e!==mt?Ln(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Nf(e,t,"_first","_last",e._sort?"_start":0),Kl(t)||(e._recent=t),i||Ff(e,t),e._ts<0&&Oo(e,e._tTime),e},zf=function(e,t){return(Cn.ScrollTrigger||Uc("scrollTrigger",t))&&Cn.ScrollTrigger.create(t,e)},Bf=function(e,t,n,i,s){if(Bc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Lf!==Tn.frame)return Vi.push(e),e._lazy=[s,i],1},Xp=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Kl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qp=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Xp(e)&&!(!e._initted&&Kl(e))||(e._ts<0||e._dp._ts<0)&&!Kl(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=ma(0,e._tDur,t),u=gs(l,a),e._yoyo&&u&1&&(o=1-o),u!==gs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Yt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&Bf(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&jl(e,t,n,!0),e._onUpdate&&!n&&zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Yi(e,1),!n&&!Yt&&(zn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Yp=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},_s=function(e,t,n,i){var s=e._repeat,o=Bt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Bt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Oo(e,e._tTime=e._tDur*a),e.parent&&Uo(e),n||mr(e.parent,e),e},fu=function(e){return e instanceof on?mr(e):_s(e,e._dur)},$p={_start:0,endTime:ra,totalDuration:ra},Ln=function r(e,t,n){var i=e.labels,s=e._recent||$p,o=e.duration()>=Nn?s.endTime(!1):e._dur,a,l,c;return Ft(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*($t(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ys=function(e,t,n){var i=Ci(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ln(l.vars.inherit)&&l.parent;o.immediateRender=ln(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new At(t[0],o,t[s+1])},Zi=function(e,t){return e||e===0?t(e):t},ma=function(e,t,n){return n<e?e:n>t?t:n},qt=function(e,t){return!Ft(e)||!(t=Fp.exec(e))?"":t[1]},jp=function(e,t,n){return Zi(n,function(i){return ma(e,t,i)})},Zl=[].slice,kf=function(e,t){return e&&di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&di(e[0]))&&!e.nodeType&&e!==Dn},Kp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ft(i)&&!t||kf(i,1)?(s=n).push.apply(s,Fn(i)):n.push(i)})||n},Fn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):Ft(e)&&!n&&(Yl||!vs())?Zl.call((t||Ic).querySelectorAll(e),0):$t(e)?Kp(e,n):kf(e)?Zl.call(e,0):e?[e]:[]},Jl=function(e){return e=Fn(e)[0]||vo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Fn(t,n.querySelectorAll?n:n===e?vo("Invalid scope")||Ic.createElement("div"):e)}},Gf=function(e){return e.sort(function(){return .5-Math.random()})},Hf=function(e){if(xt(e))return e;var t=di(e)?e:{each:e},n=gr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return Ft(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(f,h,_){var m=(_||t).length,g=o[m],p,x,v,M,S,T,b,C,y;if(!g){if(y=t.grid==="auto"?0:(t.grid||[1,Nn])[1],!y){for(b=-Nn;b<(b=_[y++].getBoundingClientRect().left)&&y<m;);y--}for(g=o[m]=[],p=l?Math.min(y,m)*u-.5:i%y,x=y===Nn?0:l?m*d/y-.5:i/y|0,b=0,C=Nn,T=0;T<m;T++)v=T%y-p,M=x-(T/y|0),g[T]=S=c?Math.abs(c==="y"?M:v):Ef(v*v+M*M),S>b&&(b=S),S<C&&(C=S);i==="random"&&Gf(g),g.max=b-C,g.min=C,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(y>m?m-1:c?c==="y"?m/y:y:Math.max(y,m/y))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=qt(t.amount||t.each)||0,n=n&&m<0?Jf(n):n}return m=(g[f]-g.min)/g.max||0,Bt(g.b+(n?n(m):m)*g.v)+g.u}},Ql=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ci(n)?0:qt(n))}},Vf=function(e,t){var n=$t(e),i,s;return!n&&di(e)&&(i=n=e.radius||Nn,e.values?(e=Fn(e.values),(s=!Ci(e[0]))&&(i*=i)):e=Ql(e.increment)),Zi(t,n?xt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Nn,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:o,s||u===o||Ci(o)?u:u+qt(o)}:Ql(e))},Wf=function(e,t,n,i){return Zi($t(e)?!t:n===!0?!!(n=0):!i,function(){return $t(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Zp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Jp=function(e,t){return function(n){return e(parseFloat(n))+(t||qt(n))}},Qp=function(e,t,n){return qf(e,t,0,1,n)},Xf=function(e,t,n){return Zi(n,function(i){return e[~~t(i)]})},em=function r(e,t,n){var i=t-e;return $t(e)?Xf(e,r(0,e.length),t):Zi(n,function(s){return(i+(s-e)%i)%i+e})},tm=function r(e,t,n){var i=t-e,s=i*2;return $t(e)?Xf(e,r(0,e.length-1),t):Zi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},sa=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Af:ql),n+=e.substr(t,i-t)+Wf(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},qf=function(e,t,n,i,s){var o=t-e,a=i-n;return Zi(s,function(l){return n+((l-e)/o*a||0)})},nm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Ft(e),a={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if($t(e)&&!$t(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var m=Math.min(f,~~_);return u[m](_-m)},n=t}else i||(e=Er($t(e)?[]:{},e));if(!u){for(l in t)zc.call(a,e,l,"get",t[l]);s=function(_){return Hc(_,a)||(o?e.p:e)}}}return Zi(n,s)},hu=function(e,t,n){var i=e.labels,s=Nn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},zn=function(e,t,n){var i=e.vars,s=i[t],o=bt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Vi.length&&xo(),a&&(bt=a),u=l?s.apply(c,l):s.call(c),bt=o,u},Bs=function(e){return Yi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&zn(e,"onInterrupt"),e},is,Yf=[],$f=function(e){if(!Dc()){Yf.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ra,render:Hc,add:zc,kill:vm,modifier:_m,rawVars:0},o={targetTest:0,get:0,getSetter:Gc,aliases:{},register:0};if(vs(),e!==i){if(Sn[t])return;Gn(i,Gn(So(e,s),o)),Er(i.prototype,Er(s,So(e,o))),Sn[i.prop=t]=i,e.targetTest&&(so.push(i),Oc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Rf(t,i),e.register&&e.register(hn,i,un)},lt=255,ks={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},qo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},jf=function(e,t,n){var i=e?Ci(e)?[e>>16,e>>8&lt,e&lt]:0:ks.black,s,o,a,l,c,u,d,f,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ks[e])i=ks[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(ql),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=qo(l+1/3,s,o),i[1]=qo(l,s,o),i[2]=qo(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(bf),n&&i.length<4&&(i[3]=1),i}else i=e.match(ql)||ks.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/lt,o=i[1]/lt,a=i[2]/lt,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Kf=function(e){var t=[],n=[],i=-1;return e.split(Wi).forEach(function(s){var o=s.match(ns)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},pu=function(e,t,n){var i="",s=(e+i).match(Wi),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=jf(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Kf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Wi,"1").split(ns),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Wi),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},Wi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ks)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),im=/hsl[a]?\(/,Zf=function(e){var t=e.join(" "),n;if(Wi.lastIndex=0,Wi.test(t))return n=im.test(t),e[1]=pu(e[1],n),e[0]=pu(e[0],n,Kf(e[1])),!0},aa,Tn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,d,f,h,_=function m(g){var p=r()-i,x=g===!0,v,M,S,T;if(p>e&&(n+=p-t),i+=p,S=i-n,v=S-o,(v>0||x)&&(T=++d.frame,f=S-d.time*1e3,d.time=S=S/1e3,o+=v+(v>=s?4:s-v),M=1),x||(l=c(m)),M)for(h=0;h<a.length;h++)a[h](S,f,T,g)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Cf&&(!Yl&&Dc()&&(Dn=Yl=window,Ic=Dn.document||{},Cn.gsap=hn,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(hn.version),Pf(_o||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),u=Dn.requestAnimationFrame,Yf.forEach($f)),l&&d.sleep(),c=u||function(g){return setTimeout(g,o-d.time*1e3+1|0)},aa=1,_(2))},sleep:function(){(u?Dn.cancelAnimationFrame:clearTimeout)(l),aa=0,c=ra},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=d.time*1e3+s},add:function(g,p,x){var v=p?function(M,S,T,b){g(M,S,T,b),d.remove(v)}:g;return d.remove(g),a[x?"unshift":"push"](v),vs(),v},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),vs=function(){return!aa&&Tn.wake()},et={},rm=/^[\d.\-M][\d.\-,\s]/,sm=/["']/g,am=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(sm,"").trim():+c,i=l.substr(a+1).trim();return t},om=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},lm=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[am(t[1])]:om(e).split(",").map(Uf)):et._CE&&rm.test(e)?et._CE("",e):n},Jf=function(e){return function(t){return 1-e(1-t)}},Qf=function r(e,t){for(var n=e._first,i;n;)n instanceof on?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},gr=function(e,t){return e&&(xt(e)?e:et[e]||lm(e))||t},Rr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return cn(e,function(a){et[a]=Cn[a]=s,et[o=a.toLowerCase()]=n;for(var l in s)et[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[a+"."+l]=s[l]}),s},eh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Yo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Xl*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Np((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:eh(a);return s=Xl/s,l.config=function(c,u){return r(e,c,u)},l},$o=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:eh(n);return i.config=function(s){return r(e,s)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Rr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;Rr("Elastic",Yo("in"),Yo("out"),Yo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Rr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Rr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Rr("Circ",function(r){return-(Ef(1-r*r)-1)});Rr("Sine",function(r){return r===1?1:-Op(r*Ip)+1});Rr("Back",$o("in"),$o("out"),$o());et.SteppedEase=et.steps=Cn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-ct;return function(a){return((i*ma(0,o,a)|0)+s)*n}}};ms.ease=et["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nc+=r+","+r+"Params,"});var th=function(e,t){this.id=Up++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Df,this.set=t?t.getSetter:Gc},xs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_s(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),aa||Tn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_s(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Oo(this,n),!s._dp||s.parent||Ff(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),If(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+du(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+du(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?gs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Mo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(ma(-Math.abs(this._delay),this._tDur,i),!0),Uo(this),Vp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ri(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Bp);var i=Yt;return Yt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Yt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ln(this,n),ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ct)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=xt(n)?n:Of,a=function(){var c=i.then;i.then=null,xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Bs(this)},r}();Gn(xs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var on=function(r){yf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ln(n.sortChildren),mt&&ri(n.parent||mt,yi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&zf(yi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ys(0,arguments,this),this},t.from=function(i,s,o){return Ys(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ys(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,qs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new At(i,s,Ln(this,o),1),this},t.call=function(i,s,o){return ri(this,At.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new At(i,o,Ln(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,qs(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,d){return a.startAt=o,qs(a).immediateRender=ln(a.immediateRender),this.staggerTo(i,s,a,l,c,u,d)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Bt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,_,m,g,p,x,v,M,S,T,b;if(this!==mt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,M=this._start,v=this._ts,p=!v,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=Bt(u%g),u===l?(m=this._repeat,f=c):(m=~~(u/g),m&&m===u/g&&(f=c,m--),f>c&&(f=c)),S=gs(this._tTime,g),!a&&this._tTime&&S!==m&&this._tTime-S*g-this._dur<=0&&(S=m),T&&m&1&&(f=c-f,b=1),m!==S&&!this._lock){var C=T&&S&1,y=C===(T&&m&1);if(m<S&&(C=!C),a=C?0:c,this._lock=1,this.render(a||(b?0:Bt(m*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Qf(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Yp(this,Bt(a),Bt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!m&&(zn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=-ct);break}}h=_}else{h=this._last;for(var E=i<0?i:f;h;){if(_=h._prev,(h._act||E<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(E-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(E-h._start)*h._ts,s,o||Yt&&(h._initted||h._startAt)),f!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=E?-ct:ct);break}}h=_}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-ct)._zTime=f>=a?1:-1,this._ts))return this._start=M,Uo(this),this.render(i,s,o);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yi(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ci(s)||(s=Ln(this,s,i)),!(i instanceof xs)){if($t(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ft(i))return this.addLabel(i,s);if(xt(i))i=At.delayedCall(0,i);else return this}return this!==i?ri(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Nn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof At?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Ft(i)?this.removeLabel(i):xt(i)?this.killTweensOf(i):(Io(this,i),i===this._recent&&(this._recent=this._last),mr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(Tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ln(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=At.delayedCall(0,s||ra,o);return a.data="isPause",this._hasPause=1,ri(this,a,Ln(this,i))},t.removePause=function(i){var s=this._first;for(i=Ln(this,i);s;)s._start===i&&s.data==="isPause"&&Yi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ni!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Fn(i),l=this._first,c=Ci(s),u;l;)l instanceof At?kp(l._targets,a)&&(c?(!Ni||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Ln(o,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=At.to(o,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ct,onStart:function(){if(o.pause(),!h){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==g&&_s(_,g,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Gn({startAt:{time:Ln(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),hu(this,Ln(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),hu(this,Ln(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return mr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Nn,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ri(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;_s(o,o===mt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(mt._ts&&(If(mt,Mo(i,mt)),Lf=Tn.frame),Tn.frame>=cu){cu+=wn.autoSleep||120;var s=mt._first;if((!s||!s._ts)&&wn.autoSleep&&Tn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Tn.sleep()}}},e}(xs);Gn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var cm=function(e,t,n,i,s,o,a){var l=new un(this._pt,e,t,0,1,oh,null,s),c=0,u=0,d,f,h,_,m,g,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=sa(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),f=n.match(Wo)||[];d=Wo.exec(i);)_=d[0],m=i.substring(c,d.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:_.charAt(1)==="="?os(g,_)-g:parseFloat(_)-g,m:h&&h<4?Math.round:0},c=Wo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(wf.test(i)||p)&&(l.e=0),this._pt=l,l},zc=function(e,t,n,i,s,o,a,l,c,u){xt(i)&&(i=i(s||0,e,o));var d=e[t],f=n!=="get"?n:xt(d)?c?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=xt(d)?c?pm:sh:kc,_;if(Ft(i)&&(~i.indexOf("random(")&&(i=sa(i)),i.charAt(1)==="="&&(_=os(f,i)+(qt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||ec)return!isNaN(f*i)&&i!==""?(_=new un(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?gm:ah,0,h),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&Uc(t,i),cm.call(this,e,t,f,i,h,l||wn.stringFilter,c))},um=function(e,t,n,i,s){if(xt(e)&&(e=$s(e,s,t,n,i)),!di(e)||e.style&&e.nodeType||$t(e)||Tf(e))return Ft(e)?$s(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=$s(e[a],s,t,n,i);return o},nh=function(e,t,n,i,s,o){var a,l,c,u;if(Sn[e]&&(a=new Sn[e]).init(s,a.rawVars?t[e]:um(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new un(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==is))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ni,ec,Bc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,d=i.callbackScope,f=i.runBackwards,h=i.yoyoEase,_=i.keyframes,m=i.autoRevert,g=e._dur,p=e._startAt,x=e._targets,v=e.parent,M=v&&v.data==="nested"?v.vars.targets:x,S=e._overwrite==="auto"&&!Rc,T=e.timeline,b,C,y,E,I,D,P,O,z,W,H,V,Q;if(T&&(!_||!s)&&(s="none"),e._ease=gr(s,ms.ease),e._yEase=h?Jf(gr(h===!0?s:h,ms.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!T&&!!i.runBackwards,!T||_&&!i.stagger){if(O=x[0]?pr(x[0]).harness:0,V=O&&i[O.prop],b=So(i,Oc),p&&(p._zTime<0&&p.progress(1),t<0&&f&&a&&!m?p.render(-1,!0):p.revert(f&&g?ro:zp),p._lazy=0),o){if(Yi(e._startAt=At.set(x,Gn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&ln(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!a&&!m)&&e._startAt.revert(ro),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&g&&!p){if(t&&(a=!1),y=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&ln(l),immediateRender:a,stagger:0,parent:v},b),V&&(y[O.prop]=V),Yi(e._startAt=At.set(x,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert(ro):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ln(l)||l&&!g,C=0;C<x.length;C++){if(I=x[C],P=I._gsap||Fc(x)[C]._gsap,e._ptLookup[C]=W={},$l[P.id]&&Vi.length&&xo(),H=M===x?C:M.indexOf(I),O&&(z=new O).init(I,V||b,e,H,M)!==!1&&(e._pt=E=new un(e._pt,I,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(L){W[L]=E}),z.priority&&(D=1)),!O||V)for(y in b)Sn[y]&&(z=nh(y,b,e,H,I,M))?z.priority&&(D=1):W[y]=E=zc.call(e,I,y,"get",b[y],H,M,0,i.stringFilter);e._op&&e._op[C]&&e.kill(I,e._op[C]),S&&e._pt&&(Ni=e,mt.killTweensOf(I,W,e.globalTime(t)),Q=!e.parent,Ni=0),e._pt&&l&&($l[P.id]=1)}D&&lh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,_&&t<=0&&T.render(Nn,!0,!0)},dm=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(c=d[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return ec=1,e.vars[t]="+=0",Bc(e,a),ec=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=yt(n)+qt(u.e)),u.b&&(u.b=c.s+qt(u.b))},fm=function(e,t){var n=e[0]?pr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Er({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},hm=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if($t(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},$s=function(e,t,n,i,s){return xt(e)?e.call(t,n,i,s):Ft(e)&&~e.indexOf("random(")?sa(e):e},ih=Nc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",rh={};cn(ih+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return rh[r]=1});var At=function(r){yf(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:qs(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,x=i.parent||mt,v=($t(n)||Tf(n)?Ci(n[0]):"length"in i)?[n]:Fn(n),M,S,T,b,C,y,E,I;if(a._targets=v.length?Fc(v):vo("GSAP target "+n+" not found. https://greensock.com",!wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,_||f||Sa(c)||Sa(u)){if(i=a.vars,M=a.timeline=new on({data:"nested",defaults:m||{},targets:x&&x.data==="nested"?x.vars.targets:v}),M.kill(),M.parent=M._dp=yi(a),M._start=0,f||Sa(c)||Sa(u)){if(b=v.length,E=f&&Hf(f),di(f))for(C in f)~ih.indexOf(C)&&(I||(I={}),I[C]=f[C]);for(S=0;S<b;S++)T=So(i,rh),T.stagger=0,p&&(T.yoyoEase=p),I&&Er(T,I),y=v[S],T.duration=+$s(c,yi(a),S,y,v),T.delay=(+$s(u,yi(a),S,y,v)||0)-a._delay,!f&&b===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),M.to(y,T,E?E(S,y,v):0),M._ease=et.none;M.duration()?c=u=0:a.timeline=0}else if(_){qs(Gn(M.vars.defaults,{ease:"none"})),M._ease=gr(_.ease||i.ease||"none");var D=0,P,O,z;if($t(_))_.forEach(function(W){return M.to(v,W,">")}),M.duration();else{T={};for(C in _)C==="ease"||C==="easeEach"||hm(C,_[C],T,_.easeEach);for(C in T)for(P=T[C].sort(function(W,H){return W.t-H.t}),D=0,S=0;S<P.length;S++)O=P[S],z={ease:O.e,duration:(O.t-(S?P[S-1].t:0))/100*c},z[C]=O.v,M.to(v,z,D),D+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return h===!0&&!Rc&&(Ni=yi(a),mt.killTweensOf(v),Ni=0),ri(x,yi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!_&&a._start===Bt(x._time)&&ln(d)&&Wp(yi(a))&&x.data!=="nested")&&(a._tTime=-ct,a.render(Math.max(0,-u)||0)),g&&zf(yi(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-ct&&!u?l:i<ct?0:i,f,h,_,m,g,p,x,v,M;if(!c)qp(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=d,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,s,o);if(f=Bt(d%m),d===l?(_=this._repeat,f=c):(_=~~(d/m),_&&_===d/m&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(M=this._yEase,f=c-f),g=gs(this._tTime,m),f===a&&!o&&this._initted)return this._tTime=d,this;_!==g&&(v&&this._yEase&&Qf(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(Bt(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Bf(this,u?i:f,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!a&&!s&&!_&&(zn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;v&&v.render(i<0?i:!f&&p?-ct:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&jl(this,i,s,o),zn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&jl(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Yi(this,1),!s&&!(u&&!a)&&(d||a||p)&&(zn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){aa||Tn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Bc(this,l),c=this._ease(l/this._dur),dm(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(Oo(this,0),this.parent||Nf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Bs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ni&&Ni.vars.overwrite!==!0)._first||Bs(this),this.parent&&o!==this.timeline.totalDuration()&&_s(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Fn(i):a,c=this._ptLookup,u=this._pt,d,f,h,_,m,g,p;if((!s||s==="all")&&Hp(a,l))return s==="all"&&(this._pt=0),Bs(this);for(d=this._op=this._op||[],s!=="all"&&(Ft(s)&&(m={},cn(s,function(x){return m[x]=1}),s=m),s=fm(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(d[p]=s,_=f,h={}):(h=d[p]=d[p]||{},_=s);for(m in _)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Io(this,g,"_pt"),delete f[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&Bs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ys(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ys(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return mt.killTweensOf(i,s,o)},e}(xs);Gn(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(r){At[r]=function(){var e=new on,t=Zl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var kc=function(e,t,n){return e[t]=n},sh=function(e,t,n){return e[t](n)},pm=function(e,t,n,i){return e[t](i.fp,n)},mm=function(e,t,n){return e.setAttribute(t,n)},Gc=function(e,t){return xt(e[t])?sh:Lc(e[t])&&e.setAttribute?mm:kc},ah=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},gm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},oh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Hc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},_m=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},vm=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Io(this,t,"_pt"):t.dep||(n=1),t=i;return!n},xm=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},lh=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},un=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ah,this.d=l||this,this.set=c||kc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=xm,this.m=n,this.mt=s,this.tween=i},r}();cn(Nc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Oc[r]=1});Cn.TweenMax=Cn.TweenLite=At;Cn.TimelineLite=Cn.TimelineMax=on;mt=new on({sortChildren:!1,defaults:ms,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wn.stringFilter=Zf;var Ss=[],ao={},Sm=[],mu=0,jo=function(e){return(ao[e]||Sm).map(function(t){return t()})},tc=function(){var e=Date.now(),t=[];e-mu>2&&(jo("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Dn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),jo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),mu=e,jo("matchMedia"))},ch=function(){function r(t,n){this.selector=n&&Jl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){xt(n)&&(s=i,i=n,n=xt);var o=this,a=function(){var c=bt,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Jl(s)),bt=o,d=i.apply(o,arguments),xt(d)&&o._r.push(d),bt=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===xt?a(o):n?o[n]=a:a},e.ignore=function(n){var i=bt;bt=null,n(this),bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof At&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof xs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=Ss.indexOf(this);~a&&Ss.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),Mm=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){di(n)||(n={matches:n});var o=new ch(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Dn.matchMedia(n[c]),l&&(Ss.indexOf(o)<0&&Ss.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(tc):l.addEventListener("change",tc)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),yo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return $f(i)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ft(e)&&(e=Fn(e)[0]);var s=pr(e||{}).get,o=n?Of:Uf;return n==="native"&&(n=""),e&&(t?o((Sn[t]&&Sn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Sn[a]&&Sn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Fn(e),e.length>1){var i=e.map(function(u){return hn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var o=Sn[t],a=pr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;is._pt=0,d.init(e,n?u+n:u,is,0,[e]),d.render(1,d),is._pt&&Hc(1,is)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=hn.to(e,Er((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gr(e.ease,ms.ease)),uu(ms,e||{})},config:function(e){return uu(wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Sn[a]&&!Cn[a]&&vo(t+" effect requires "+a+" plugin.")}),Xo[t]=function(a,l,c){return n(Fn(a),Gn(l||{},s),c)},o&&(on.prototype[t]=function(a,l,c){return this.add(Xo[t](a,di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){et[e]=gr(t)},parseEase:function(e,t){return arguments.length?gr(e,t):et},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new on(e),i,s;for(n.smoothChildTiming=ln(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof At&&i.vars.onComplete===i._targets[0]))&&ri(n,i,i._start-i._delay),i=s;return ri(mt,n,0),n},context:function(e,t){return e?new ch(e,t):bt},matchMedia:function(e){return new Mm(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||tc()},addEventListener:function(e,t){var n=ao[e]||(ao[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ao[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:em,wrapYoyo:tm,distribute:Hf,random:Wf,snap:Vf,normalize:Qp,getUnit:qt,clamp:jp,splitColor:jf,toArray:Fn,selector:Jl,mapRange:qf,pipe:Zp,unitize:Jp,interpolate:nm,shuffle:Gf},install:Pf,effects:Xo,ticker:Tn,updateRoot:on.updateRoot,plugins:Sn,globalTimeline:mt,core:{PropTween:un,globals:Rf,Tween:At,Timeline:on,Animation:xs,getCache:pr,_removeLinkedListItem:Io,reverting:function(){return Yt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return Rc=e}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return yo[r]=At[r]});Tn.add(on.updateRoot);is=yo.to({},{duration:0});var ym=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Em=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=ym(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Ko=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ft(s)&&(l={},cn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Em(a,s)}}}},hn=yo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Yt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ko("roundProps",Ql),Ko("modifiers"),Ko("snap",Vf))||yo;At.version=on.version=hn.version="3.11.5";Cf=1;Dc()&&vs();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gu,Fi,ls,Vc,ur,_u,Wc,Tm=function(){return typeof window<"u"},Pi={},sr=180/Math.PI,cs=Math.PI/180,Dr=Math.atan2,vu=1e8,Xc=/([A-Z])/g,bm=/(left|right|width|margin|padding|x)/i,wm=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Am=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Cm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Pm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},uh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Rm=function(e,t,n){return e.style[t]=n},Lm=function(e,t,n){return e.style.setProperty(t,n)},Dm=function(e,t,n){return e._gsap[t]=n},Im=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Um=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Om=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},gt="transform",Qn=gt+"Origin",Nm=function r(e,t){var n=this,i=this.target,s=i.style;if(e in Pi){if(this.tfm=this.tfm||{},e!=="transform")e=ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ei(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Ei(i,e);else return ai.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(gt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,t,"")),e=gt}(s||t)&&this.props.push(e,t,s[e])},fh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Fm=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Xc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Wc(),(!s||!s.isStart)&&!n[gt]&&(fh(n),i.uncache=1)}},hh=function(e,t){var n={target:e,props:[],revert:Fm,save:Nm};return e._gsap||hn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},ph,ic=function(e,t){var n=Fi.createElementNS?Fi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fi.createElement(e);return n.style?n:Fi.createElement(e)},ci=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Xc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ms(t)||t,1)||""},xu="O,Moz,ms,Ms,Webkit".split(","),Ms=function(e,t,n){var i=t||ur,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(xu[o]+e in s););return o<0?null:(o===3?"ms":o>=0?xu[o]:"")+e},rc=function(){Tm()&&window.document&&(gu=window,Fi=gu.document,ls=Fi.documentElement,ur=ic("div")||{style:{}},ic("div"),gt=Ms(gt),Qn=gt+"Origin",ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ph=!!Ms("perspective"),Wc=hn.core.reverting,Vc=1)},Zo=function r(e){var t=ic("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ls.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ls.removeChild(t),this.style.cssText=s,o},Su=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},mh=function(e){var t;try{t=e.getBBox()}catch{t=Zo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Zo||(t=Zo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Su(e,["x","cx","x1"])||0,y:+Su(e,["y","cy","y1"])||0,width:0,height:0}:t},gh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&mh(e))},oa=function(e,t){if(t){var n=e.style;t in Pi&&t!==Qn&&(t=gt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Xc,"-$1").toLowerCase())):n.removeAttribute(t)}},zi=function(e,t,n,i,s,o){var a=new un(e._pt,t,n,0,1,o?dh:uh);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Mu={deg:1,rad:1,turn:1},zm={grid:1,flex:1},$i=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ur.style,l=bm.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",_,m,g,p;return i===o||!s||Mu[i]||Mu[o]?s:(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&gh(e),(h||o==="%")&&(Pi[t]||~t.indexOf("adius"))?(_=p?e.getBBox()[l?"width":"height"]:e[u],yt(h?s/_*d:s/100*_)):(a[l?"width":"height"]=d+(f?o:i),m=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Fi||!m.appendChild)&&(m=Fi.body),g=m._gsap,g&&h&&g.width&&l&&g.time===Tn.time&&!g.uncache?yt(s/g.width*d):((h||o==="%")&&!zm[ci(m,"display")]&&(a.position=ci(e,"position")),m===e&&(a.position="static"),m.appendChild(ur),_=ur[u],m.removeChild(ur),a.position="absolute",l&&h&&(g=pr(m),g.time=Tn.time,g.width=m[u]),yt(f?_*s/d:_&&s?d/_*s:0))))},Ei=function(e,t,n,i){var s;return Vc||rc(),t in ai&&t!=="transform"&&(t=ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pi[t]&&t!=="transform"?(s=ca(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:To(ci(e,Qn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Eo[t]&&Eo[t](e,t,n)||ci(e,t)||Df(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?$i(e,t,s,n)+n:s},Bm=function(e,t,n,i){if(!n||n==="none"){var s=Ms(t,e,1),o=s&&ci(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ci(e,"borderTopColor"))}var a=new un(this._pt,e.style,t,0,1,oh),l=0,c=0,u,d,f,h,_,m,g,p,x,v,M,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ci(e,t)||i,e.style[t]=n),u=[n,i],Zf(u),n=u[0],i=u[1],f=n.match(ns)||[],S=i.match(ns)||[],S.length){for(;d=ns.exec(i);)g=d[0],x=i.substring(l,d.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(m=f[c++]||"")&&(h=parseFloat(m)||0,M=m.substr((h+"").length),g.charAt(1)==="="&&(g=os(h,g)+M),p=parseFloat(g),v=g.substr((p+"").length),l=ns.lastIndex-v.length,v||(v=v||wn.units[t]||M,l===i.length&&(i+=v,a.e+=v)),M!==v&&(h=$i(e,t,m,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:h,c:p-h,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?dh:uh;return wf.test(i)&&(a.e=0),this._pt=a,a},yu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},km=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=yu[n]||n,t[1]=yu[i]||i,t.join(" ")},Gm=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Pi[a]&&(l=1,a=a==="transformOrigin"?Qn:gt),oa(n,a);l&&(oa(n,gt),o&&(o.svg&&n.removeAttribute("transform"),ca(n,1),o.uncache=1,fh(i)))}},Eo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new un(e._pt,t,n,0,0,Gm);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},la=[1,0,0,1,0,0],_h={},vh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Eu=function(e){var t=ci(e,gt);return vh(t)?la:t.substr(7).match(bf).map(yt)},qc=function(e,t){var n=e._gsap||pr(e),i=e.style,s=Eu(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?la:s):(s===la&&!e.offsetParent&&e!==ls&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ls.appendChild(e)),s=Eu(e),l?i.display=l:oa(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ls.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sc=function(e,t,n,i,s,o){var a=e._gsap,l=s||qc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],_=l[1],m=l[2],g=l[3],p=l[4],x=l[5],v=t.split(" "),M=parseFloat(v[0])||0,S=parseFloat(v[1])||0,T,b,C,y;n?l!==la&&(b=h*g-_*m)&&(C=M*(g/b)+S*(-m/b)+(m*x-g*p)/b,y=M*(-_/b)+S*(h/b)-(h*x-_*p)/b,M=C,S=y):(T=mh(e),M=T.x+(~v[0].indexOf("%")?M/100*T.width:M),S=T.y+(~(v[1]||v[0]).indexOf("%")?S/100*T.height:S)),i||i!==!1&&a.smooth?(p=M-c,x=S-u,a.xOffset=d+(p*h+x*m)-p,a.yOffset=f+(p*_+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Qn]="0px 0px",o&&(zi(o,a,"xOrigin",c,M),zi(o,a,"yOrigin",u,S),zi(o,a,"xOffset",d,a.xOffset),zi(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+S)},ca=function(e,t){var n=e._gsap||new th(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ci(e,Qn)||"0",u,d,f,h,_,m,g,p,x,v,M,S,T,b,C,y,E,I,D,P,O,z,W,H,V,Q,L,de,re,$,J,oe;return u=d=f=m=g=p=x=v=M=0,h=_=1,n.svg=!!(e.getCTM&&gh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),b=qc(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),sc(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,b)),S=n.xOrigin||0,T=n.yOrigin||0,b!==la&&(I=b[0],D=b[1],P=b[2],O=b[3],u=z=b[4],d=W=b[5],b.length===6?(h=Math.sqrt(I*I+D*D),_=Math.sqrt(O*O+P*P),m=I||D?Dr(D,I)*sr:0,x=P||O?Dr(P,O)*sr+m:0,x&&(_*=Math.abs(Math.cos(x*cs))),n.svg&&(u-=S-(S*I+T*P),d-=T-(S*D+T*O))):(oe=b[6],$=b[7],L=b[8],de=b[9],re=b[10],J=b[11],u=b[12],d=b[13],f=b[14],C=Dr(oe,re),g=C*sr,C&&(y=Math.cos(-C),E=Math.sin(-C),H=z*y+L*E,V=W*y+de*E,Q=oe*y+re*E,L=z*-E+L*y,de=W*-E+de*y,re=oe*-E+re*y,J=$*-E+J*y,z=H,W=V,oe=Q),C=Dr(-P,re),p=C*sr,C&&(y=Math.cos(-C),E=Math.sin(-C),H=I*y-L*E,V=D*y-de*E,Q=P*y-re*E,J=O*E+J*y,I=H,D=V,P=Q),C=Dr(D,I),m=C*sr,C&&(y=Math.cos(C),E=Math.sin(C),H=I*y+D*E,V=z*y+W*E,D=D*y-I*E,W=W*y-z*E,I=H,z=V),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),h=yt(Math.sqrt(I*I+D*D+P*P)),_=yt(Math.sqrt(W*W+oe*oe)),C=Dr(z,W),x=Math.abs(C)>2e-4?C*sr:0,M=J?1/(J<0?-J:J):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vh(ci(e,gt)),H&&e.setAttribute("transform",H))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=yt(h),n.scaleY=yt(_),n.rotation=yt(m)+a,n.rotationX=yt(g)+a,n.rotationY=yt(p)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Qn]=To(c)),n.xOffset=n.yOffset=0,n.force3D=wn.force3D,n.renderTransform=n.svg?Vm:ph?xh:Hm,n.uncache=0,n},To=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jo=function(e,t,n){var i=qt(t);return yt(parseFloat(t)+parseFloat($i(e,"x",n+"px",i)))+i},Hm=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xh(e,t)},er="0deg",Ls="0px",tr=") ",xh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,_=n.scaleX,m=n.scaleY,g=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,M="",S=p==="auto"&&e&&e!==1||p===!0;if(v&&(d!==er||u!==er)){var T=parseFloat(u)*cs,b=Math.sin(T),C=Math.cos(T),y;T=parseFloat(d)*cs,y=Math.cos(T),o=Jo(x,o,b*y*-v),a=Jo(x,a,-Math.sin(T)*-v),l=Jo(x,l,C*y*-v+v)}g!==Ls&&(M+="perspective("+g+tr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(S||o!==Ls||a!==Ls||l!==Ls)&&(M+=l!==Ls||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+tr),c!==er&&(M+="rotate("+c+tr),u!==er&&(M+="rotateY("+u+tr),d!==er&&(M+="rotateX("+d+tr),(f!==er||h!==er)&&(M+="skew("+f+", "+h+tr),(_!==1||m!==1)&&(M+="scale("+_+", "+m+tr),x.style[gt]=M||"translate(0, 0)"},Vm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,_=n.xOrigin,m=n.yOrigin,g=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(o),M=parseFloat(a),S,T,b,C,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=cs,c*=cs,S=Math.cos(l)*d,T=Math.sin(l)*d,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=cs,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,C*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),S*=y,T*=y)),S=yt(S),T=yt(T),b=yt(b),C=yt(C)):(S=d,C=f,T=b=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=$i(h,"x",o,"px"),M=$i(h,"y",a,"px")),(_||m||g||p)&&(v=yt(v+_-(_*S+m*b)+g),M=yt(M+m-(_*T+m*C)+p)),(i||s)&&(y=h.getBBox(),v=yt(v+i/100*y.width),M=yt(M+s/100*y.height)),y="matrix("+S+","+T+","+b+","+C+","+v+","+M+")",h.setAttribute("transform",y),x&&(h.style[gt]=y)},Wm=function(e,t,n,i,s){var o=360,a=Ft(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?sr:1),c=l-i,u=i+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*vu)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*vu)%o-~~(c/o)*o)),e._pt=f=new un(e._pt,t,n,i,c,Am),f.e=u,f.u="deg",e._props.push(n),f},Tu=function(e,t){for(var n in t)e[n]=t[n];return e},Xm=function(e,t,n){var i=Tu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,f,h,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[gt]=t,a=ca(n,1),oa(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],o[gt]=t,a=ca(n,1),o[gt]=c);for(l in Pi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=qt(c),_=qt(u),d=h!==_?$i(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new un(e._pt,a,l,d,f-d,nc),e._pt.u=_||0,e._props.push(l));Tu(a,i)};cn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Eo[e>1?"border"+r:r]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(_){return Ei(a,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(_,m){return h[_]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(l,h,d)}});var Sh={name:"css",register:rc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,h,_,m,g,p,x,v,M,S,T,b,C;Vc||rc(),this.styles=this.styles||hh(e),C=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Sn[m]&&nh(m,t,n,i,e,s)))){if(h=typeof u,_=Eo[m],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=sa(u)),_)_(this,e,m,u,n)&&(b=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Wi.lastIndex=0,Wi.test(c)||(g=qt(c),p=qt(u)),p?g!==p&&(c=$i(e,m,c,p)+p):g&&(u+=g),this.add(a,"setProperty",c,u,i,s,0,0,m),o.push(m),C.push(m,0,a[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,e,s):l[m],Ft(c)&&~c.indexOf("random(")&&(c=sa(c)),qt(c+"")||(c+=wn.units[m]||qt(Ei(e,m))||""),(c+"").charAt(1)==="="&&(c=Ei(e,m))):c=Ei(e,m),f=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),m in ai&&(m==="autoAlpha"&&(f===1&&Ei(e,"visibility")==="hidden"&&d&&(f=0),C.push("visibility",0,a.visibility),zi(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=ai[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in Pi,v){if(this.styles.save(m),M||(S=e._gsap,S.renderTransform&&!t.parseTransform||ca(e,t.parseTransform),T=t.smoothOrigin!==!1&&S.smooth,M=this._pt=new un(this._pt,a,gt,0,1,S.renderTransform,S,0,-1),M.dep=1),m==="scale")this._pt=new un(this._pt,S,"scaleY",S.scaleY,(x?os(S.scaleY,x+d):d)-S.scaleY||0,nc),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){C.push(Qn,0,a[Qn]),u=km(u),S.svg?sc(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&zi(this,S,"zOrigin",S.zOrigin,p),zi(this,a,m,To(c),To(u)));continue}else if(m==="svgOrigin"){sc(e,u,1,T,0,this);continue}else if(m in _h){Wm(this,S,m,f,x?os(f,x+u):u);continue}else if(m==="smoothOrigin"){zi(this,S,"smooth",S.smooth,u);continue}else if(m==="force3D"){S[m]=u;continue}else if(m==="transform"){Xm(this,u,e);continue}}else m in a||(m=Ms(m)||m);if(v||(d||d===0)&&(f||f===0)&&!wm.test(u)&&m in a)g=(c+"").substr((f+"").length),d||(d=0),p=qt(u)||(m in wn.units?wn.units[m]:g),g!==p&&(f=$i(e,m,c,p)),this._pt=new un(this._pt,v?S:a,m,f,(x?os(f,x+d):d)-f,!v&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?Pm:nc),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Cm);else if(m in a)Bm.call(this,e,m,c,x?x+u:u);else if(m in e)this.add(e,m,c||e[m],x?x+u:u,i,s);else if(m!=="parseTransform"){Uc(m,u);continue}v||(m in a?C.push(m,0,a[m]):C.push(m,1,c||e[m])),o.push(m)}}b&&lh(this)},render:function(e,t){if(t.tween._time||!Wc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ei,aliases:ai,getSetter:function(e,t,n){var i=ai[t];return i&&i.indexOf(",")<0&&(t=i),t in Pi&&t!==Qn&&(e._gsap.x||Ei(e,"x"))?n&&_u===n?t==="scale"?Im:Dm:(_u=n||{})&&(t==="scale"?Um:Om):e.style&&!Lc(e.style[t])?Rm:~t.indexOf("-")?Lm:Gc(e,t)},core:{_removeProperty:oa,_getMatrix:qc}};hn.utils.checkPrefix=Ms;hn.core.getStyleSaver=hh;(function(r,e,t,n){var i=cn(r+","+e+","+t,function(s){Pi[s]=1});cn(e,function(s){wn.units[s]="deg",_h[s]=1}),ai[i[13]]=r+","+e,cn(n,function(s){var o=s.split(":");ai[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){wn.units[r]="px"});hn.registerPlugin(Sh);var nt=hn.registerPlugin(Sh)||hn;nt.core.Tween;function bu(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function qm(r,e,t){return e&&bu(r.prototype,e),t&&bu(r,t),r}/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kt,ac,bn,Bi,ki,us,Mh,ar,js,yh,bi,qn,Eh,Th=function(){return kt||typeof window<"u"&&(kt=window.gsap)&&kt.registerPlugin&&kt},bh=1,rs=[],Ke=[],ui=[],Ks=Date.now,oc=function(e,t){return t},Ym=function(){var e=js.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ke),i.push.apply(i,ui),Ke=n,ui=i,oc=function(o,a){return t[o](a)}},Xi=function(e,t){return~ui.indexOf(e)&&ui[ui.indexOf(e)+1][t]},Zs=function(e){return!!~yh.indexOf(e)},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Zt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ma="scrollLeft",ya="scrollTop",lc=function(){return bi&&bi.isPressed||Ke.cache++},bo=function(e,t){var n=function i(s){if(s||s===0){bh&&(bn.history.scrollRestoration="manual");var o=bi&&bi.isPressed;s=i.v=Math.round(s)||(bi&&bi.iOS?1:0),e(s),i.cacheID=Ke.cache,o&&oc("ss",s)}else(t||Ke.cache!==i.cacheID||oc("ref"))&&(i.cacheID=Ke.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},nn={s:Ma,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:bo(function(r){return arguments.length?bn.scrollTo(r,Ct.sc()):bn.pageXOffset||Bi[Ma]||ki[Ma]||us[Ma]||0})},Ct={s:ya,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:nn,sc:bo(function(r){return arguments.length?bn.scrollTo(nn.sc(),r):bn.pageYOffset||Bi[ya]||ki[ya]||us[ya]||0})},an=function(e){return kt.utils.toArray(e)[0]||(typeof e=="string"&&kt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ji=function(e,t){var n=t.s,i=t.sc;Zs(e)&&(e=Bi.scrollingElement||ki);var s=Ke.indexOf(e),o=i===Ct.sc?1:2;!~s&&(s=Ke.push(e)-1),Ke[s+o]||e.addEventListener("scroll",lc);var a=Ke[s+o],l=a||(Ke[s+o]=bo(Xi(e,n),!0)||(Zs(e)?i:bo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=kt.getProperty(e,"scrollBehavior")==="smooth"),l},cc=function(e,t,n){var i=e,s=e,o=Ks(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,m){var g=Ks();m||g-o>l?(s=i,i=_,a=o,o=g):n?i+=_:i=s+(_-s)/(g-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},f=function(_){var m=a,g=s,p=Ks();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-m)*1e3};return{update:u,reset:d,getVelocity:f}},Ds=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},wu=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},wh=function(){js=kt.core.globals().ScrollTrigger,js&&js.core&&Ym()},Ah=function(e){return kt=e||Th(),kt&&typeof document<"u"&&document.body&&(bn=window,Bi=document,ki=Bi.documentElement,us=Bi.body,yh=[bn,Bi,ki,us],kt.utils.clamp,Eh=kt.core.context||function(){},ar="onpointerenter"in us?"pointer":"mouse",Mh=wt.isTouch=bn.matchMedia&&bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qn=wt.eventTypes=("ontouchstart"in ki?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ki?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return bh=0},500),wh(),ac=1),ac};nn.op=Ct;Ke.cache=0;var wt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ac||Ah(kt)||console.warn("Please gsap.registerPlugin(Observer)"),js||wh();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,m=n.event,g=n.onDragStart,p=n.onDragEnd,x=n.onDrag,v=n.onPress,M=n.onRelease,S=n.onRight,T=n.onLeft,b=n.onUp,C=n.onDown,y=n.onChangeX,E=n.onChangeY,I=n.onChange,D=n.onToggleX,P=n.onToggleY,O=n.onHover,z=n.onHoverEnd,W=n.onMove,H=n.ignoreCheck,V=n.isNormalizer,Q=n.onGestureStart,L=n.onGestureEnd,de=n.onWheel,re=n.onEnable,$=n.onDisable,J=n.onClick,oe=n.scrollSpeed,ae=n.capture,N=n.allowClicks,Ce=n.lockAxis,Ie=n.onLockAxis;this.target=a=an(a)||ki,this.vars=n,h&&(h=kt.utils.toArray(h)),i=i||1e-9,s=s||0,_=_||1,oe=oe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(bn.getComputedStyle(us).lineHeight)||22);var le,we,xe,ge,Ue,rt,qe,Y=this,at=0,Re=0,Je=ji(a,nn),ft=ji(a,Ct),R=Je(),w=ft(),K=~o.indexOf("touch")&&!~o.indexOf("pointer")&&qn[0]==="pointerdown",ie=Zs(a),te=a.ownerDocument||Bi,ce=[0,0,0],U=[0,0,0],ee=0,X=function(){return ee=Ks()},ue=function(_e,se){return(Y.event=_e)&&h&&~h.indexOf(_e.target)||se&&K&&_e.pointerType!=="touch"||H&&H(_e,se)},ve=function(){Y._vx.reset(),Y._vy.reset(),we.pause(),d&&d(Y)},Te=function(){var _e=Y.deltaX=wu(ce),se=Y.deltaY=wu(U),Ae=Math.abs(_e)>=i,Oe=Math.abs(se)>=i;I&&(Ae||Oe)&&I(Y,_e,se,ce,U),Ae&&(S&&Y.deltaX>0&&S(Y),T&&Y.deltaX<0&&T(Y),y&&y(Y),D&&Y.deltaX<0!=at<0&&D(Y),at=Y.deltaX,ce[0]=ce[1]=ce[2]=0),Oe&&(C&&Y.deltaY>0&&C(Y),b&&Y.deltaY<0&&b(Y),E&&E(Y),P&&Y.deltaY<0!=Re<0&&P(Y),Re=Y.deltaY,U[0]=U[1]=U[2]=0),(ge||xe)&&(W&&W(Y),xe&&(x(Y),xe=!1),ge=!1),rt&&!(rt=!1)&&Ie&&Ie(Y),Ue&&(de(Y),Ue=!1),le=0},me=function(_e,se,Ae){ce[Ae]+=_e,U[Ae]+=se,Y._vx.update(_e),Y._vy.update(se),c?le||(le=requestAnimationFrame(Te)):Te()},ye=function(_e,se){Ce&&!qe&&(Y.axis=qe=Math.abs(_e)>Math.abs(se)?"x":"y",rt=!0),qe!=="y"&&(ce[2]+=_e,Y._vx.update(_e,!0)),qe!=="x"&&(U[2]+=se,Y._vy.update(se,!0)),c?le||(le=requestAnimationFrame(Te)):Te()},Ne=function(_e){if(!ue(_e,1)){_e=Ds(_e,u);var se=_e.clientX,Ae=_e.clientY,Oe=se-Y.x,Ve=Ae-Y.y,Et=Y.isDragging;Y.x=se,Y.y=Ae,(Et||Math.abs(Y.startX-se)>=s||Math.abs(Y.startY-Ae)>=s)&&(x&&(xe=!0),Et||(Y.isDragging=!0),ye(Oe,Ve),Et||g&&g(Y))}},pe=Y.onPress=function(Fe){ue(Fe,1)||Fe&&Fe.button||(Y.axis=qe=null,we.pause(),Y.isPressed=!0,Fe=Ds(Fe),at=Re=0,Y.startX=Y.x=Fe.clientX,Y.startY=Y.y=Fe.clientY,Y._vx.reset(),Y._vy.reset(),sn(V?a:te,qn[1],Ne,u,!0),Y.deltaX=Y.deltaY=0,v&&v(Y))},ot=Y.onRelease=function(Fe){if(!ue(Fe,1)){Zt(V?a:te,qn[1],Ne,!0);var _e=!isNaN(Y.y-Y.startY),se=Y.isDragging&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Ae=Ds(Fe);!se&&_e&&(Y._vx.reset(),Y._vy.reset(),u&&N&&kt.delayedCall(.08,function(){if(Ks()-ee>300&&!Fe.defaultPrevented){if(Fe.target.click)Fe.target.click();else if(te.createEvent){var Oe=te.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,bn,1,Ae.screenX,Ae.screenY,Ae.clientX,Ae.clientY,!1,!1,!1,!1,0,null),Fe.target.dispatchEvent(Oe)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&!V&&we.restart(!0),p&&se&&p(Y),M&&M(Y,se)}},F=function(_e){return _e.touches&&_e.touches.length>1&&(Y.isGesturing=!0)&&Q(_e,Y.isDragging)},j=function(){return(Y.isGesturing=!1)||L(Y)},ne=function(_e){if(!ue(_e)){var se=Je(),Ae=ft();me((se-R)*oe,(Ae-w)*oe,1),R=se,w=Ae,d&&we.restart(!0)}},fe=function(_e){if(!ue(_e)){_e=Ds(_e,u),de&&(Ue=!0);var se=(_e.deltaMode===1?l:_e.deltaMode===2?bn.innerHeight:1)*_;me(_e.deltaX*se,_e.deltaY*se,0),d&&!V&&we.restart(!0)}},be=function(_e){if(!ue(_e)){var se=_e.clientX,Ae=_e.clientY,Oe=se-Y.x,Ve=Ae-Y.y;Y.x=se,Y.y=Ae,ge=!0,(Oe||Ve)&&ye(Oe,Ve)}},tt=function(_e){Y.event=_e,O(Y)},je=function(_e){Y.event=_e,z(Y)},_t=function(_e){return ue(_e)||Ds(_e,u)&&J(Y)};we=Y._dc=kt.delayedCall(f||.25,ve).pause(),Y.deltaX=Y.deltaY=0,Y._vx=cc(0,50,!0),Y._vy=cc(0,50,!0),Y.scrollX=Je,Y.scrollY=ft,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Eh(this),Y.enable=function(Fe){return Y.isEnabled||(sn(ie?te:a,"scroll",lc),o.indexOf("scroll")>=0&&sn(ie?te:a,"scroll",ne,u,ae),o.indexOf("wheel")>=0&&sn(a,"wheel",fe,u,ae),(o.indexOf("touch")>=0&&Mh||o.indexOf("pointer")>=0)&&(sn(a,qn[0],pe,u,ae),sn(te,qn[2],ot),sn(te,qn[3],ot),N&&sn(a,"click",X,!1,!0),J&&sn(a,"click",_t),Q&&sn(te,"gesturestart",F),L&&sn(te,"gestureend",j),O&&sn(a,ar+"enter",tt),z&&sn(a,ar+"leave",je),W&&sn(a,ar+"move",be)),Y.isEnabled=!0,Fe&&Fe.type&&pe(Fe),re&&re(Y)),Y},Y.disable=function(){Y.isEnabled&&(rs.filter(function(Fe){return Fe!==Y&&Zs(Fe.target)}).length||Zt(ie?te:a,"scroll",lc),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Zt(V?a:te,qn[1],Ne,!0)),Zt(ie?te:a,"scroll",ne,ae),Zt(a,"wheel",fe,ae),Zt(a,qn[0],pe,ae),Zt(te,qn[2],ot),Zt(te,qn[3],ot),Zt(a,"click",X,!0),Zt(a,"click",_t),Zt(te,"gesturestart",F),Zt(te,"gestureend",j),Zt(a,ar+"enter",tt),Zt(a,ar+"leave",je),Zt(a,ar+"move",be),Y.isEnabled=Y.isPressed=Y.isDragging=!1,$&&$(Y))},Y.kill=Y.revert=function(){Y.disable();var Fe=rs.indexOf(Y);Fe>=0&&rs.splice(Fe,1),bi===Y&&(bi=0)},rs.push(Y),V&&Zs(a)&&(bi=Y),Y.enable(m)},qm(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();wt.version="3.11.5";wt.create=function(r){return new wt(r)};wt.register=Ah;wt.getAll=function(){return rs.slice()};wt.getById=function(r){return rs.filter(function(e){return e.vars.id===r})[0]};Th()&&kt.registerPlugin(wt);/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,Qr,Ze,pt,$n,vt,Ch,wo,Ao,ss,oo,Ea,Wt,No,uc,Qt,Au,Cu,es,Ph,Qo,Rh,vn,Lh,Dh,Ih,Oi,dc,Yc,el,Ta=1,en=Date.now,tl=en(),Bn=0,Gs=0,$m=function r(){return Gs&&requestAnimationFrame(r)},Pu=function(){return No=1},Ru=function(){return No=0},ni=function(e){return e},Hs=function(e){return Math.round(e*1e5)/1e5||0},Uh=function(){return typeof window<"u"},Oh=function(){return Pe||Uh()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},Tr=function(e){return!!~Ch.indexOf(e)},Nh=function(e){return Xi(e,"getBoundingClientRect")||(Tr(e)?function(){return po.width=Ze.innerWidth,po.height=Ze.innerHeight,po}:function(){return Ti(e)})},jm=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Xi(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Ze["inner"+s]:e["client"+s])||0}},Km=function(e,t){return!t||~ui.indexOf(e)?Nh(e):function(){return po}},Gi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Xi(e,n))?o()-Nh(e)()[s]:Tr(e)?($n[n]||vt[n])-(Ze["inner"+i]||$n["client"+i]||vt["client"+i]):e[n]-e["offset"+i])},ba=function(e,t){for(var n=0;n<es.length;n+=3)(!t||~t.indexOf(es[n+1]))&&e(es[n],es[n+1],es[n+2])},Yn=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},Vs=function(e){return typeof e=="number"},lo=function(e){return typeof e=="object"},Is=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},nl=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ir=Math.abs,Fh="left",zh="top",$c="right",jc="bottom",_r="width",vr="height",Js="Right",Qs="Left",ea="Top",ta="Bottom",Mt="padding",Un="margin",ys="Width",Kc="Height",zt="px",Kn=function(e){return Ze.getComputedStyle(e)},Zm=function(e){var t=Kn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Lu=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ti=function(e,t){var n=t&&Kn(e)[uc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},fc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Bh=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Jm=function(e){return function(t){return Pe.utils.snap(Bh(e),t)}},Zc=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Qm=function(e){return function(t,n){return Zc(Bh(e))(t,n.direction)}},wa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Ut=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},It=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Aa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Du={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ca={toggleActions:"play",anticipatePin:0},Co={top:0,left:0,center:.5,bottom:1,right:1},co=function(e,t){if(Yn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Co?Co[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Pa=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,_=pt.createElement("div"),m=Tr(n)||Xi(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=m?vt:n,x=e.indexOf("start")!==-1,v=x?c:u,M="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(M+=(i===Ct?$c:jc)+":"+(o+parseFloat(f))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],uo(_,0,i,x),_},uo=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ys]=1,s["border"+a+ys]=0,s[n.p]=t+"px",Pe.set(e,s)},$e=[],hc={},ua,Iu=function(){return en()-Bn>34&&(ua||(ua=requestAnimationFrame(wi)))},Ur=function(){(!vn||!vn.isPressed||vn.startX>vt.clientWidth)&&(Ke.cache++,vn?ua||(ua=requestAnimationFrame(wi)):wi(),Bn||wr("scrollStart"),Bn=en())},il=function(){Ih=Ze.innerWidth,Dh=Ze.innerHeight},Ws=function(){Ke.cache++,!Wt&&!Rh&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!Lh||Ih!==Ze.innerWidth||Math.abs(Ze.innerHeight-Dh)>Ze.innerHeight*.25)&&wo.restart(!0)},br={},eg=[],kh=function r(){return It(ze,"scrollEnd",r)||dr(!0)},wr=function(e){return br[e]&&br[e].map(function(t){return t()})||eg},xn=[],Gh=function(e){for(var t=0;t<xn.length;t+=5)(!e||xn[t+4]&&xn[t+4].query===e)&&(xn[t].style.cssText=xn[t+1],xn[t].getBBox&&xn[t].setAttribute("transform",xn[t+2]||""),xn[t+3].uncache=1)},Jc=function(e,t){var n;for(Qt=0;Qt<$e.length;Qt++)n=$e[Qt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Gh(t),t||wr("revert")},Hh=function(e,t){Ke.cache++,(t||!Mn)&&Ke.forEach(function(n){return rn(n)&&n.cacheID++&&(n.rec=0)}),Yn(e)&&(Ze.history.scrollRestoration=Yc=e)},Mn,xr=0,Uu,tg=function(){if(Uu!==xr){var e=Uu=xr;requestAnimationFrame(function(){return e===xr&&dr(!0)})}},dr=function(e,t){if(Bn&&!e){Ut(ze,"scrollEnd",kh);return}Mn=ze.isRefreshing=!0,Ke.forEach(function(i){return rn(i)&&i.cacheID++&&(i.rec=i())});var n=wr("refreshInit");Ph&&ze.sort(),t||Jc(),Ke.forEach(function(i){rn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$e.slice(0).forEach(function(i){return i.refresh()}),$e.forEach(function(i,s){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.refresh()}}),$e.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Gi(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ke.forEach(function(i){rn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Hh(Yc,1),wo.pause(),xr++,Mn=2,wi(2),$e.forEach(function(i){return rn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Mn=ze.isRefreshing=!1,wr("refresh")},pc=0,fo=1,na,wi=function(e){if(!Mn||e===2){ze.isUpdating=!0,na&&na.update(0);var t=$e.length,n=en(),i=n-tl>=50,s=t&&$e[0].scroll();if(fo=pc>s?-1:1,Mn||(pc=s),i&&(Bn&&!No&&n-Bn>200&&(Bn=0,wr("scrollEnd")),oo=tl,tl=n),fo<0){for(Qt=t;Qt-- >0;)$e[Qt]&&$e[Qt].update(0,i);fo=1}else for(Qt=0;Qt<t;Qt++)$e[Qt]&&$e[Qt].update(0,i);ze.isUpdating=!1}ua=0},mc=[Fh,zh,jc,$c,Un+ta,Un+Js,Un+ea,Un+Qs,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ho=mc.concat([_r,vr,"boxSizing","max"+ys,"max"+Kc,"position",Un,Mt,Mt+ea,Mt+Js,Mt+ta,Mt+Qs]),ng=function(e,t,n){ds(n);var i=e._gsap;if(i.spacerIsNative)ds(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},rl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=mc.length,o=t.style,a=e.style,l;s--;)l=mc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[jc]=a[$c]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[_r]=fc(e,nn)+zt,o[vr]=fc(e,Ct)+zt,o[Mt]=a[Un]=a[zh]=a[Fh]="0",ds(i),a[_r]=a["max"+ys]=n[_r],a[vr]=a["max"+Kc]=n[vr],a[Mt]=n[Mt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ig=/([A-Z])/g,ds=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(ig,"-$1").toLowerCase())}},Ra=function(e){for(var t=ho.length,n=e.style,i=[],s=0;s<t;s++)i.push(ho[s],n[ho[s]]);return i.t=e,i},rg=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},po={left:0,top:0},Ou=function(e,t,n,i,s,o,a,l,c,u,d,f,h){rn(e)&&(e=e(l)),Yn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?co("0"+e.substr(3),n):0));var _=h?h.time():0,m,g,p;if(h&&h.seek(0),Vs(e))h&&(e=Pe.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&uo(a,n,i,!0);else{rn(t)&&(t=t(l));var x=(e||"0").split(" "),v,M,S,T;p=an(t)||vt,v=Ti(p)||{},(!v||!v.left&&!v.top)&&Kn(p).display==="none"&&(T=p.style.display,p.style.display="block",v=Ti(p),T?p.style.display=T:p.style.removeProperty("display")),M=co(x[0],v[i.d]),S=co(x[1]||"0",n),e=v[i.p]-c[i.p]-u+M+s-S,a&&uo(a,S,i,n-S<20||a._isStart&&S>20),n-=n-S}if(o){var b=e+n,C=o._isStart;m="scroll"+i.d2,uo(o,b,i,C&&b>20||!C&&(d?Math.max(vt[m],$n[m]):o.parentNode[m])<=b+1),d&&(c=Ti(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+zt))}return h&&p&&(m=Ti(p),h.seek(f),g=Ti(p),h._caScrollDist=m[i.p]-g[i.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},sg=/(webkit|moz|length|cssText|inset)/i,Nu=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===vt){e._stOrig=s.cssText,a=Kn(e);for(o in a)!+o&&!sg.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},Vh=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Fu=function(e,t){var n=ji(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,h=l.onComplete,_={};c=c||n();var m=Vh(n,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[i]=a,l.modifiers=_,_[i]=function(){return m(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Ke.cache++,wi()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=Pe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ut(e,"wheel",n.wheelHandler),ze.isTouch&&Ut(e,"touchmove",n.wheelHandler),s},ze=function(){function r(t,n){Qr||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Gs){this.update=this.refresh=this.kill=ni;return}n=Lu(Yn(n)||Vs(n)||n.nodeType?{trigger:n}:n,Ca);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,v=s.once,M=s.snap,S=s.pinReparent,T=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,y=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?nn:Ct,I=!d&&d!==0,D=an(n.scroller||Ze),P=Pe.core.getCache(D),O=Tr(D),z=("pinType"in n?n.pinType:Xi(D,"pinType")||O&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=I&&n.toggleActions.split(" "),V="markers"in n?n.markers:Ca.markers,Q=O?0:parseFloat(Kn(D)["border"+E.p2+ys])||0,L=this,de=n.onRefreshInit&&function(){return n.onRefreshInit(L)},re=jm(D,O,E),$=Km(D,O),J=0,oe=0,ae=ji(D,E),N,Ce,Ie,le,we,xe,ge,Ue,rt,qe,Y,at,Re,Je,ft,R,w,K,ie,te,ce,U,ee,X,ue,ve,Te,me,ye,Ne,pe,ot,F,j,ne,fe,be,tt,je;if(dc(L),L._dir=E,g*=45,L.scroller=D,L.scroll=b?b.time.bind(b):ae,le=ae(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ph=1,n.refreshPriority===-9999&&(na=L)),P.tweenScroll=P.tweenScroll||{top:Fu(D,Ct),left:Fu(D,nn)},L.tweenTo=N=P.tweenScroll[E.p],L.scrubDuration=function(se){ot=Vs(se)&&se,ot?pe?pe.duration(se):pe=Pe.to(i,{ease:"expo",totalProgress:"+=0.001",duration:ot,paused:!0,onComplete:function(){return p&&p(L)}}):(pe&&pe.progress(1).kill(),pe=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(d),pe&&pe.resetTo&&pe.resetTo("totalProgress",0),ye=0,l||(l=i.vars.id)),$e.push(L),M&&((!lo(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in vt.style&&Pe.set(O?[vt,$n]:D,{scrollBehavior:"auto"}),Ke.forEach(function(se){return rn(se)&&se.target===(O?pt.scrollingElement||$n:D)&&(se.smooth=!1)}),Ie=rn(M.snapTo)?M.snapTo:M.snapTo==="labels"?Jm(i):M.snapTo==="labelsDirectional"?Qm(i):M.directional!==!1?function(se,Ae){return Zc(M.snapTo)(se,en()-oe<500?0:Ae.direction)}:Pe.utils.snap(M.snapTo),F=M.duration||{min:.1,max:2},F=lo(F)?ss(F.min,F.max):ss(F,F),j=Pe.delayedCall(M.delay||ot/2||.1,function(){var se=ae(),Ae=en()-oe<500,Oe=N.tween;if((Ae||Math.abs(L.getVelocity())<10)&&!Oe&&!No&&J!==se){var Ve=(se-xe)/Re,Et=i&&!I?i.totalProgress():Ve,st=Ae?0:(Et-Ne)/(en()-oo)*1e3||0,ht=Pe.utils.clamp(-Ve,1-Ve,Ir(st/2)*st/.185),A=Ve+(M.inertia===!1?0:ht),k=ss(0,1,Ie(A,L)),q=Math.round(xe+k*Re),B=M,Z=B.onStart,Se=B.onInterrupt,Me=B.onComplete;if(se<=ge&&se>=xe&&q!==se){if(Oe&&!Oe._initted&&Oe.data<=Ir(q-se))return;M.inertia===!1&&(ht=k-Ve),N(q,{duration:F(Ir(Math.max(Ir(A-Et),Ir(k-Et))*.185/st/.05||0)),ease:M.ease||"power3",data:Ir(q-se),onInterrupt:function(){return j.restart(!0)&&Se&&Se(L)},onComplete:function(){L.update(),J=ae(),ye=Ne=i&&!I?i.totalProgress():L.progress,x&&x(L),Me&&Me(L)}},se,ht*Re,q-se-ht*Re),Z&&Z(L,N.tween)}}else L.isActive&&J!==se&&j.restart(!0)}).pause()),l&&(hc[l]=L),f=L.trigger=an(f||h),je=f&&f._gsap&&f._gsap.stRevert,je&&(je=je(L)),h=h===!0?f:an(h),Yn(a)&&(a={targets:f,className:a}),h&&(_===!1||_===Un||(_=!_&&h.parentNode&&h.parentNode.style&&Kn(h.parentNode).display==="flex"?!1:Mt),L.pin=h,Ce=Pe.core.getCache(h),Ce.spacer?Je=Ce.pinState:(T&&(T=an(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ce.spacerIsNative=!!T,T&&(Ce.spacerState=Ra(T))),Ce.spacer=w=T||pt.createElement("div"),w.classList.add("pin-spacer"),l&&w.classList.add("pin-spacer-"+l),Ce.pinState=Je=Ra(h)),n.force3D!==!1&&Pe.set(h,{force3D:!0}),L.spacer=w=Ce.spacer,me=Kn(h),ee=me[_+E.os2],ie=Pe.getProperty(h),te=Pe.quickSetter(h,E.a,zt),rl(h,w,me),R=Ra(h)),V){at=lo(V)?Lu(V,Du):Du,qe=Pa("scroller-start",l,D,E,at,0),Y=Pa("scroller-end",l,D,E,at,0,qe),K=qe["offset"+E.op.d2];var _t=an(Xi(D,"content")||D);Ue=this.markerStart=Pa("start",l,_t,E,at,K,0,b),rt=this.markerEnd=Pa("end",l,_t,E,at,K,0,b),b&&(tt=Pe.quickSetter([Ue,rt],E.a,zt)),!z&&!(ui.length&&Xi(D,"fixedMarkers")===!0)&&(Zm(O?vt:D),Pe.set([qe,Y],{force3D:!0}),ue=Pe.quickSetter(qe,E.a,zt),Te=Pe.quickSetter(Y,E.a,zt))}if(b){var Fe=b.vars.onUpdate,_e=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),Fe&&Fe.apply(b,_e||[])})}L.previous=function(){return $e[$e.indexOf(L)-1]},L.next=function(){return $e[$e.indexOf(L)+1]},L.revert=function(se,Ae){if(!Ae)return L.kill(!0);var Oe=se!==!1||!L.enabled,Ve=Wt;Oe!==L.isReverted&&(Oe&&(fe=Math.max(ae(),L.scroll.rec||0),ne=L.progress,be=i&&i.progress()),Ue&&[Ue,rt,qe,Y].forEach(function(Et){return Et.style.display=Oe?"none":"block"}),Oe&&(Wt=L,L.update(Oe)),h&&(!S||!L.isActive)&&(Oe?ng(h,w,Je):rl(h,w,Kn(h),X)),Oe||L.update(Oe),Wt=Ve,L.isReverted=Oe)},L.refresh=function(se,Ae){if(!((Wt||!L.enabled)&&!Ae)){if(h&&se&&Bn){Ut(r,"scrollEnd",kh);return}!Mn&&de&&de(L),Wt=L,oe=en(),N.tween&&(N.tween.kill(),N.tween=0),pe&&pe.pause(),m&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;for(var Oe=re(),Ve=$(),Et=b?b.duration():Gi(D,E),st=Re<=.01,ht=0,A=0,k=n.end,q=n.endTrigger||f,B=n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),Z=L.pinnedContainer=n.pinnedContainer&&an(n.pinnedContainer),Se=f&&Math.max(0,$e.indexOf(L))||0,Me=Se,Ee,De,He,ke,Le,Be,ut,jt,ei,dt,Ge;Me--;)Be=$e[Me],Be.end||Be.refresh(0,1)||(Wt=L),ut=Be.pin,ut&&(ut===f||ut===h||ut===Z)&&!Be.isReverted&&(dt||(dt=[]),dt.unshift(Be),Be.revert(!0,!0)),Be!==$e[Me]&&(Se--,Me--);for(rn(B)&&(B=B(L)),xe=Ou(B,f,Oe,E,ae(),Ue,qe,L,Ve,Q,z,Et,b)||(h?-.001:0),rn(k)&&(k=k(L)),Yn(k)&&!k.indexOf("+=")&&(~k.indexOf(" ")?k=(Yn(B)?B.split(" ")[0]:"")+k:(ht=co(k.substr(2),Oe),k=Yn(B)?B:(b?Pe.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,xe):xe)+ht,q=f)),ge=Math.max(xe,Ou(k||(q?"100% 0":Et),q,Oe,E,ae()+ht,rt,Y,L,Ve,Q,z,Et,b))||-.001,Re=ge-xe||(xe-=.01)&&.001,ht=0,Me=Se;Me--;)Be=$e[Me],ut=Be.pin,ut&&Be.start-Be._pinPush<=xe&&!b&&Be.end>0&&(Ee=Be.end-Be.start,(ut===f&&Be.start-Be._pinPush<xe||ut===Z)&&!Vs(B)&&(ht+=Ee*(1-Be.progress)),ut===h&&(A+=Ee));if(xe+=ht,ge+=ht,st&&(ne=Pe.utils.clamp(0,1,Pe.utils.normalize(xe,ge,fe))),L._pinPush=A,Ue&&ht&&(Ee={},Ee[E.a]="+="+ht,Z&&(Ee[E.p]="-="+ae()),Pe.set([Ue,rt],Ee)),h)Ee=Kn(h),ke=E===Ct,He=ae(),ce=parseFloat(ie(E.a))+A,!Et&&ge>1&&(Ge=(O?pt.scrollingElement||$n:D).style,Ge={style:Ge,value:Ge["overflow"+E.a.toUpperCase()]},Ge.style["overflow"+E.a.toUpperCase()]="scroll"),rl(h,w,Ee),R=Ra(h),De=Ti(h,!0),jt=z&&ji(D,ke?nn:Ct)(),_&&(X=[_+E.os2,Re+A+zt],X.t=w,Me=_===Mt?fc(h,E)+Re+A:0,Me&&X.push(E.d,Me+zt),ds(X),Z&&$e.forEach(function(pi){pi.pin===Z&&pi.vars.pinSpacing!==!1&&(pi._subPinOffset=!0)}),z&&ae(fe)),z&&(Le={top:De.top+(ke?He-xe:jt)+zt,left:De.left+(ke?jt:He-xe)+zt,boxSizing:"border-box",position:"fixed"},Le[_r]=Le["max"+ys]=Math.ceil(De.width)+zt,Le[vr]=Le["max"+Kc]=Math.ceil(De.height)+zt,Le[Un]=Le[Un+ea]=Le[Un+Js]=Le[Un+ta]=Le[Un+Qs]="0",Le[Mt]=Ee[Mt],Le[Mt+ea]=Ee[Mt+ea],Le[Mt+Js]=Ee[Mt+Js],Le[Mt+ta]=Ee[Mt+ta],Le[Mt+Qs]=Ee[Mt+Qs],ft=rg(Je,Le,S),Mn&&ae(0)),i?(ei=i._initted,Qo(1),i.render(i.duration(),!0,!0),U=ie(E.a)-ce+Re+A,ve=Math.abs(Re-U)>1,z&&ve&&ft.splice(ft.length-2,2),i.render(0,!0,!0),ei||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Qo(0)):U=Re,Ge&&(Ge.value?Ge.style["overflow"+E.a.toUpperCase()]=Ge.value:Ge.style.removeProperty("overflow-"+E.a));else if(f&&ae()&&!b)for(De=f.parentNode;De&&De!==vt;)De._pinOffset&&(xe-=De._pinOffset,ge-=De._pinOffset),De=De.parentNode;dt&&dt.forEach(function(pi){return pi.revert(!1,!0)}),L.start=xe,L.end=ge,le=we=Mn?fe:ae(),!b&&!Mn&&(le<fe&&ae(fe),L.scroll.rec=0),L.revert(!1,!0),j&&(J=-1,L.isActive&&ae(xe+Re*ne),j.restart(!0)),Wt=0,i&&I&&(i._initted||be)&&i.progress()!==be&&i.progress(be,!0).render(i.time(),!0,!0),(st||ne!==L.progress||b)&&(i&&!I&&i.totalProgress(b&&xe<-.001&&!ne?Pe.utils.normalize(xe,ge,0):ne,!0),L.progress=(le-xe)/Re===ne?0:ne),h&&_&&(w._pinOffset=Math.round(L.progress*U)),pe&&pe.invalidate(),u&&!Mn&&u(L)}},L.getVelocity=function(){return(ae()-we)/(en()-oo)*1e3||0},L.endAnimation=function(){Is(L.callbackAnimation),i&&(pe?pe.progress(1):i.paused()?I||Is(i,L.direction<0,1):Is(i,i.reversed()))},L.labelToScroll=function(se){return i&&i.labels&&(xe||L.refresh()||xe)+i.labels[se]/i.duration()*Re||0},L.getTrailing=function(se){var Ae=$e.indexOf(L),Oe=L.direction>0?$e.slice(0,Ae).reverse():$e.slice(Ae+1);return(Yn(se)?Oe.filter(function(Ve){return Ve.vars.preventOverlaps===se}):Oe).filter(function(Ve){return L.direction>0?Ve.end<=xe:Ve.start>=ge})},L.update=function(se,Ae,Oe){if(!(b&&!Oe&&!se)){var Ve=Mn===!0?fe:L.scroll(),Et=se?0:(Ve-xe)/Re,st=Et<0?0:Et>1?1:Et||0,ht=L.progress,A,k,q,B,Z,Se,Me,Ee;if(Ae&&(we=le,le=b?ae():Ve,M&&(Ne=ye,ye=i&&!I?i.totalProgress():st)),g&&!st&&h&&!Wt&&!Ta&&Bn&&xe<Ve+(Ve-we)/(en()-oo)*g&&(st=1e-4),st!==ht&&L.enabled){if(A=L.isActive=!!st&&st<1,k=!!ht&&ht<1,Se=A!==k,Z=Se||!!st!=!!ht,L.direction=st>ht?1:-1,L.progress=st,Z&&!Wt&&(q=st&&!ht?0:st===1?1:ht===1?2:3,I&&(B=!Se&&H[q+1]!=="none"&&H[q+1]||H[q],Ee=i&&(B==="complete"||B==="reset"||B in i))),y&&(Se||Ee)&&(Ee||d||!i)&&(rn(y)?y(L):L.getTrailing(y).forEach(function(Le){return Le.endAnimation()})),I||(pe&&!Wt&&!Ta?(pe._dp._time-pe._start!==pe._time&&pe.render(pe._dp._time-pe._start),pe.resetTo?pe.resetTo("totalProgress",st,i._tTime/i._tDur):(pe.vars.totalProgress=st,pe.invalidate().restart())):i&&i.totalProgress(st,!!Wt)),h){if(se&&_&&(w.style[_+E.os2]=ee),!z)te(Hs(ce+U*st));else if(Z){if(Me=!se&&st>ht&&ge+1>Ve&&Ve+1>=Gi(D,E),S)if(!se&&(A||Me)){var De=Ti(h,!0),He=Ve-xe;Nu(h,vt,De.top+(E===Ct?He:0)+zt,De.left+(E===Ct?0:He)+zt)}else Nu(h,w);ds(A||Me?ft:R),ve&&st<1&&A||te(ce+(st===1&&!Me?U:0))}}M&&!N.tween&&!Wt&&!Ta&&j.restart(!0),a&&(Se||v&&st&&(st<1||!el))&&Ao(a.targets).forEach(function(Le){return Le.classList[A||v?"add":"remove"](a.className)}),o&&!I&&!se&&o(L),Z&&!Wt?(I&&(Ee&&(B==="complete"?i.pause().totalProgress(1):B==="reset"?i.restart(!0).pause():B==="restart"?i.restart(!0):i[B]()),o&&o(L)),(Se||!el)&&(c&&Se&&nl(L,c),W[q]&&nl(L,W[q]),v&&(st===1?L.kill(!1,1):W[q]=0),Se||(q=st===1?1:3,W[q]&&nl(L,W[q]))),C&&!A&&Math.abs(L.getVelocity())>(Vs(C)?C:2500)&&(Is(L.callbackAnimation),pe?pe.progress(1):Is(i,B==="reverse"?1:!st,1))):I&&o&&!Wt&&o(L)}if(Te){var ke=b?Ve/b.duration()*(b._caScrollDist||0):Ve;ue(ke+(qe._isFlipped?1:0)),Te(ke)}tt&&tt(-Ve/b.duration()*(b._caScrollDist||0))}},L.enable=function(se,Ae){L.enabled||(L.enabled=!0,Ut(D,"resize",Ws),Ut(O?pt:D,"scroll",Ur),de&&Ut(r,"refreshInit",de),se!==!1&&(L.progress=ne=0,le=we=J=ae()),Ae!==!1&&L.refresh())},L.getTween=function(se){return se&&N?N.tween:pe},L.setPositions=function(se,Ae){h&&(ce+=se-xe,U+=Ae-se-Re,_===Mt&&L.adjustPinSpacing(Ae-se-Re)),L.start=xe=se,L.end=ge=Ae,Re=Ae-se,L.update()},L.adjustPinSpacing=function(se){if(X&&se){var Ae=X.indexOf(E.d)+1;X[Ae]=parseFloat(X[Ae])+se+zt,X[1]=parseFloat(X[1])+se+zt,ds(X)}},L.disable=function(se,Ae){if(L.enabled&&(se!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Ae||pe&&pe.pause(),fe=0,Ce&&(Ce.uncache=1),de&&It(r,"refreshInit",de),j&&(j.pause(),N.tween&&N.tween.kill()&&(N.tween=0)),!O)){for(var Oe=$e.length;Oe--;)if($e[Oe].scroller===D&&$e[Oe]!==L)return;It(D,"resize",Ws),It(D,"scroll",Ur)}},L.kill=function(se,Ae){L.disable(se,Ae),pe&&!Ae&&pe.kill(),l&&delete hc[l];var Oe=$e.indexOf(L);Oe>=0&&$e.splice(Oe,1),Oe===Qt&&fo>0&&Qt--,Oe=0,$e.forEach(function(Ve){return Ve.scroller===L.scroller&&(Oe=1)}),Oe||Mn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Ae||i.kill()),Ue&&[Ue,rt,qe,Y].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),na===L&&(na=0),h&&(Ce&&(Ce.uncache=1),Oe=0,$e.forEach(function(Ve){return Ve.pin===h&&Oe++}),Oe||(Ce.spacer=0)),n.onKill&&n.onKill(L)},L.enable(!1,!1),je&&je(L),!i||!i.add||Re?L.refresh():Pe.delayedCall(.01,function(){return xe||ge||L.refresh()})&&(Re=.01)&&(xe=ge=0),h&&tg()},r.register=function(n){return Qr||(Pe=n||Oh(),Uh()&&window.document&&r.enable(),Qr=Gs),Qr},r.defaults=function(n){if(n)for(var i in n)Ca[i]=n[i];return Ca},r.disable=function(n,i){Gs=0,$e.forEach(function(o){return o[i?"kill":"disable"](n)}),It(Ze,"wheel",Ur),It(pt,"scroll",Ur),clearInterval(Ea),It(pt,"touchcancel",ni),It(vt,"touchstart",ni),wa(It,pt,"pointerdown,touchstart,mousedown",Pu),wa(It,pt,"pointerup,touchend,mouseup",Ru),wo.kill(),ba(It);for(var s=0;s<Ke.length;s+=3)Aa(It,Ke[s],Ke[s+1]),Aa(It,Ke[s],Ke[s+2])},r.enable=function(){if(Ze=window,pt=document,$n=pt.documentElement,vt=pt.body,Pe&&(Ao=Pe.utils.toArray,ss=Pe.utils.clamp,dc=Pe.core.context||ni,Qo=Pe.core.suppressOverwrites||ni,Yc=Ze.history.scrollRestoration||"auto",pc=Ze.pageYOffset,Pe.core.globals("ScrollTrigger",r),vt)){Gs=1,$m(),wt.register(Pe),r.isTouch=wt.isTouch,Oi=wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ut(Ze,"wheel",Ur),Ch=[Ze,pt,$n,vt],Pe.matchMedia?(r.matchMedia=function(l){var c=Pe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Pe.addEventListener("matchMediaInit",function(){return Jc()}),Pe.addEventListener("matchMediaRevert",function(){return Gh()}),Pe.addEventListener("matchMedia",function(){dr(0,1),wr("matchMedia")}),Pe.matchMedia("(orientation: portrait)",function(){return il(),il})):console.warn("Requires GSAP 3.11.0 or later"),il(),Ut(pt,"scroll",Ur);var n=vt.style,i=n.borderTopStyle,s=Pe.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Ti(vt),Ct.m=Math.round(o.top+Ct.sc())||0,nn.m=Math.round(o.left+nn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ea=setInterval(Iu,250),Pe.delayedCall(.5,function(){return Ta=0}),Ut(pt,"touchcancel",ni),Ut(vt,"touchstart",ni),wa(Ut,pt,"pointerdown,touchstart,mousedown",Pu),wa(Ut,pt,"pointerup,touchend,mouseup",Ru),uc=Pe.utils.checkPrefix("transform"),ho.push(uc),Qr=en(),wo=Pe.delayedCall(.2,dr).pause(),es=[pt,"visibilitychange",function(){var l=Ze.innerWidth,c=Ze.innerHeight;pt.hidden?(Au=l,Cu=c):(Au!==l||Cu!==c)&&Ws()},pt,"DOMContentLoaded",dr,Ze,"load",dr,Ze,"resize",Ws],ba(Ut),$e.forEach(function(l){return l.enable(0,1)}),a=0;a<Ke.length;a+=3)Aa(It,Ke[a],Ke[a+1]),Aa(It,Ke[a],Ke[a+2])}},r.config=function(n){"limitCallbacks"in n&&(el=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ea)||(Ea=i)&&setInterval(Iu,i),"ignoreMobileResize"in n&&(Lh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ba(It)||ba(Ut,n.autoRefreshEvents||"none"),Rh=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=an(n),o=Ke.indexOf(s),a=Tr(s);~o&&Ke.splice(o,a?6:2),i&&(a?ui.unshift(Ze,i,vt,i,$n,i):ui.unshift(s,i))},r.clearMatchMedia=function(n){$e.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Yn(n)?an(n):n).getBoundingClientRect(),a=o[s?_r:vr]*i||0;return s?o.right-a>0&&o.left+a<Ze.innerWidth:o.bottom-a>0&&o.top+a<Ze.innerHeight},r.positionInViewport=function(n,i,s){Yn(n)&&(n=an(n));var o=n.getBoundingClientRect(),a=o[s?_r:vr],l=i==null?a/2:i in Co?Co[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Ze.innerWidth:(o.top+l)/Ze.innerHeight},r.killAll=function(n){if($e.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=br.killAll||[];br={},i.forEach(function(s){return s()})}},r}();ze.version="3.11.5";ze.saveStyles=function(r){return r?Ao(r).forEach(function(e){if(e&&e.style){var t=xn.indexOf(e);t>=0&&xn.splice(t,5),xn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),dc())}}):xn};ze.revert=function(r,e){return Jc(!r,e)};ze.create=function(r,e){return new ze(r,e)};ze.refresh=function(r){return r?Ws():(Qr||ze.register())&&dr(!0)};ze.update=function(r){return++Ke.cache&&wi(r===!0?2:0)};ze.clearScrollMemory=Hh;ze.maxScroll=function(r,e){return Gi(r,e?nn:Ct)};ze.getScrollFunc=function(r,e){return ji(an(r),e?nn:Ct)};ze.getById=function(r){return hc[r]};ze.getAll=function(){return $e.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ze.isScrolling=function(){return!!Bn};ze.snapDirectional=Zc;ze.addEventListener=function(r,e){var t=br[r]||(br[r]=[]);~t.indexOf(e)||t.push(e)};ze.removeEventListener=function(r,e){var t=br[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ze.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],h=Pe.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&h.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&rn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return rn(s)&&(s=s(),Ut(ze,"refresh",function(){return s=e.batchMax()})),Ao(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ze.create(c))}),t};var zu=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},sl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(wt.isTouch?" pinch-zoom":""):"none",e===$n&&r(vt,t)},La={auto:1,scroll:1},ag=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Pe.core.getCache(s),a=en(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(La[(l=Kn(s)).overflowY]||La[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Tr(s)&&(La[(l=Kn(s)).overflowY]||La[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Wh=function(e,t,n,i){return wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ag,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ut(pt,wt.eventTypes[0],ku,!1,!0)},onDisable:function(){return It(pt,wt.eventTypes[0],ku,!0)}})},og=/(input|label|select|textarea)/i,Bu,ku=function(e){var t=og.test(e.target.tagName);(t||Bu)&&(e._gsapAllow=!0,Bu=t)},lg=function(e){lo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=an(e.target)||$n,u=Pe.core.globals().ScrollSmoother,d=u&&u.get(),f=Oi&&(e.content&&an(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=ji(c,Ct),_=ji(c,nn),m=1,g=(wt.isTouch&&Ze.visualViewport?Ze.visualViewport.scale*Ze.visualViewport.width:Ze.outerWidth)/Ze.innerWidth,p=0,x=rn(i)?function(){return i(a)}:function(){return i||2.8},v,M,S=Wh(c,e.type,!0,s),T=function(){return M=!1},b=ni,C=ni,y=function(){l=Gi(c,Ct),C=ss(Oi?1:0,l),n&&(b=ss(0,Gi(c,nn))),v=xr},E=function(){f._gsap.y=Hs(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},I=function(){if(M){requestAnimationFrame(T);var V=Hs(a.deltaY/2),Q=C(h.v-V);if(f&&Q!==h.v+h.offset){h.offset=Q-h.v;var L=Hs((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",h.cacheID=Ke.cache,wi()}return!0}h.offset&&E(),M=!0},D,P,O,z,W=function(){y(),D.isActive()&&D.vars.scrollY>l&&(h()>l?D.progress(1)&&h(l):D.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(H){return Oi&&H.type==="touchmove"&&I()||m>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){M=!1;var H=m;m=Hs((Ze.visualViewport&&Ze.visualViewport.scale||1)/g),D.pause(),H!==m&&sl(c,m>1.01?!0:n?!1:"x"),P=_(),O=h(),y(),v=xr},e.onRelease=e.onGestureStart=function(H,V){if(h.offset&&E(),!V)z.restart(!0);else{Ke.cache++;var Q=x(),L,de;n&&(L=_(),de=L+Q*.05*-H.velocityX/.227,Q*=zu(_,L,de,Gi(c,nn)),D.vars.scrollX=b(de)),L=h(),de=L+Q*.05*-H.velocityY/.227,Q*=zu(h,L,de,Gi(c,Ct)),D.vars.scrollY=C(de),D.invalidate().duration(Q).play(.01),(Oi&&D.vars.scrollY>=l||L>=l-1)&&Pe.to({},{onUpdate:W,duration:Q})}o&&o(H)},e.onWheel=function(){D._ts&&D.pause(),en()-p>1e3&&(v=0,p=en())},e.onChange=function(H,V,Q,L,de){if(xr!==v&&y(),V&&n&&_(b(L[2]===V?P+(H.startX-H.x):_()+V-L[1])),Q){h.offset&&E();var re=de[2]===Q,$=re?O+H.startY-H.y:h()+Q-de[1],J=C($);re&&$!==J&&(O+=J-$),h(J)}(Q||V)&&wi()},e.onEnable=function(){sl(c,n?!1:"x"),ze.addEventListener("refresh",W),Ut(Ze,"resize",W),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),S.enable()},e.onDisable=function(){sl(c,!0),It(Ze,"resize",W),ze.removeEventListener("refresh",W),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new wt(e),a.iOS=Oi,Oi&&!h()&&h(1),Oi&&Pe.ticker.add(ni),z=a._dc,D=Pe.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Vh(h,h(),function(){return D.pause()})},onUpdate:wi,onComplete:z.vars.onComplete}),a};ze.sort=function(r){return $e.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};ze.observe=function(r){return new wt(r)};ze.normalizeScroll=function(r){if(typeof r>"u")return vn;if(r===!0&&vn)return vn.enable();if(r===!1)return vn&&vn.kill();var e=r instanceof wt?r:lg(r);return vn&&vn.target===e.target&&vn.kill(),Tr(e.target)&&(vn=e),e};ze.core={_getVelocityProp:cc,_inputObserver:Wh,_scrollers:Ke,_proxies:ui,bridge:{ss:function(){Bn||wr("scrollStart"),Bn=en()},ref:function(){return Wt}}};Oh()&&Pe.registerPlugin(ze);nt.registerPlugin(ze);function cg(){const r=nt.timeline({defaults:{ease:"power2.inOut"}}),e=nt.timeline({defaults:{ease:"power2.inOut"}});nt.set(".loading-text",{yPercent:100,opacity:0}),nt.set(".loader",{width:"0%",opacity:0}),nt.set(".loader-container",{opacity:0}),nt.set([".block-top",".block-bottom"],{yPercent:0});const t=document.querySelector(".loading-text").textContent.split("");return document.querySelector(".loading-text").innerHTML=t.map(i=>`<span class="letter">${i}</span>`).join(""),nt.set(".letter",{opacity:0,y:20}),r.to(".loading-text",{yPercent:0,opacity:1,duration:.8,ease:"power3.out"}).to(".letter",{opacity:1,y:0,duration:.4,stagger:.03,ease:"power2.out"}).to(".loading-text",{opacity:1,duration:.8}),e.to(".loader-container",{opacity:1,duration:.3}).to(".loader",{opacity:1,duration:.2},"<").to(".loader",{width:"100%",duration:1.5,ease:"power4.inOut"}).to(".loading-text",{yPercent:-100,duration:1.2,ease:"power2.inOut"}).to({},{duration:.3}).to([".block-top",".block-bottom"],{yPercent:i=>i===0?-100:100,duration:1.8,ease:"power3.inOut",stagger:.15}).to(".blocks",{display:"none",duration:.1}),(async()=>{r.play(),await Promise.all([new Promise(i=>{document.readyState==="complete"?i():window.addEventListener("load",i)}),new Promise(i=>setTimeout(i,2e3))]),e.play()})(),{welcomeTimeline:r,loadingTimeline:e}}function gc(){return gc=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},gc.apply(this,arguments)}function Po(r,e,t){return Math.max(r,Math.min(e,t))}class ug{advance(e){var t;if(!this.isRunning)return;let n=!1;if(this.lerp)this.value=(i=this.value,s=this.to,(1-(o=1-Math.exp(-60*this.lerp*e)))*i+o*s),Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=e;const a=Po(0,this.currentTime/this.duration,1);n=a>=1;const l=n?1:this.easing(a);this.value=this.from+(this.to-this.from)*l}var i,s,o;(t=this.onUpdate)==null||t.call(this,this.value,{completed:n}),n&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:s=a=>a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,this.onUpdate=o}}function Gu(r,e){let t;return function(){let n=arguments,i=this;clearTimeout(t),t=setTimeout(function(){r.apply(i,n)},e)}}class dg{constructor(e,t){this.onWindowResize=()=>{this.width=window.innerWidth,this.height=window.innerHeight},this.onWrapperResize=()=>{this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight},this.onContentResize=()=>{const n=this.wrapper===window?document.documentElement:this.wrapper;this.scrollHeight=n.scrollHeight,this.scrollWidth=n.scrollWidth},this.wrapper=e,this.content=t,this.wrapper===window?(window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize()):(this.wrapperResizeObserver=new ResizeObserver(Gu(this.onWrapperResize,100)),this.wrapperResizeObserver.observe(this.wrapper),this.onWrapperResize()),this.contentResizeObserver=new ResizeObserver(Gu(this.onContentResize,100)),this.contentResizeObserver.observe(this.content),this.onContentResize()}destroy(){var e,t;window.removeEventListener("resize",this.onWindowResize,!1),(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}let Xh=()=>({events:{},emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n](...e)},on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>e!==i)}}});class fg{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=2,normalizeWheel:i=!1}){this.onTouchStart=s=>{const{clientX:o,clientY:a}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=o,this.touchStart.y=a,this.lastDelta={x:0,y:0}},this.onTouchMove=s=>{const{clientX:o,clientY:a}=s.targetTouches?s.targetTouches[0]:s,l=-(o-this.touchStart.x)*this.touchMultiplier,c=-(a-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=o,this.touchStart.y=a,this.lastDelta={x:l,y:c},this.emitter.emit("scroll",{type:"touch",deltaX:l,deltaY:c,event:s})},this.onTouchEnd=s=>{this.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})},this.onWheel=s=>{let{deltaX:o,deltaY:a}=s;this.normalizeWheel&&(o=Po(-100,o,100),a=Po(-100,a,100)),o*=this.wheelMultiplier,a*=this.wheelMultiplier,this.emitter.emit("scroll",{type:"wheel",deltaX:o,deltaY:a,event:s})},this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.normalizeWheel=i,this.touchStart={x:null,y:null},this.emitter=Xh(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.events={},this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class hg{constructor({direction:e,gestureDirection:t,mouseMultiplier:n,smooth:i,wrapper:s=window,content:o=document.documentElement,wheelEventsTarget:a=s,smoothWheel:l=i==null||i,smoothTouch:c=!1,syncTouch:u=!1,syncTouchLerp:d=.1,touchInertiaMultiplier:f=35,duration:h,easing:_=T=>Math.min(1,1.001-Math.pow(2,-10*T)),lerp:m=h?null:.1,infinite:g=!1,orientation:p=e??"vertical",gestureOrientation:x=t??"vertical",touchMultiplier:v=1,wheelMultiplier:M=n??1,normalizeWheel:S=!1}={}){this.onVirtualScroll=({type:T,inertia:b,deltaX:C,deltaY:y,event:E})=>{if(E.ctrlKey)return;const I=T==="touch",D=T==="wheel";if(this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&C===0||I&&this.options.gestureOrientation==="vertical"&&this.scroll===0&&!this.options.infinite&&y<=0||E.composedPath().find(W=>W==null||W.hasAttribute==null?void 0:W.hasAttribute("data-lenis-prevent")))return;if(this.isStopped||this.isLocked)return void E.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&I||this.options.smoothWheel&&D,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();E.preventDefault();let P=y;this.options.gestureOrientation==="both"?P=Math.abs(y)>Math.abs(C)?y:C:this.options.gestureOrientation==="horizontal"&&(P=C);const O=I&&this.options.syncTouch,z=I&&b&&Math.abs(P)>1;z&&(P=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+P,gc({programmatic:!1},O&&{lerp:z?this.syncTouchLerp:.4}))},this.onScroll=()=>{if(!this.isScrolling){const T=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-T),this.emit()}},e&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),t&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),n&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),i&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion="1.0.12",s!==document.documentElement&&s!==document.body||(s=window),this.options={wrapper:s,content:o,wheelEventsTarget:a,smoothWheel:l,smoothTouch:c,syncTouch:u,syncTouchLerp:d,touchInertiaMultiplier:f,duration:h,easing:_,lerp:m,infinite:g,gestureOrientation:x,orientation:p,touchMultiplier:v,wheelMultiplier:M,normalizeWheel:S},this.dimensions=new dg(s,o),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=l||c,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new ug,this.emitter=Xh(),this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new fg(a,{touchMultiplier:v,wheelMultiplier:M,normalizeWheel:S}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.events={},this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy()}on(e,t){return this.emitter.on(e,t)}off(e,t){var n;this.emitter.events[e]=(n=this.emitter.events[e])==null?void 0:n.filter(i=>t!==i)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l=null,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{var d;let f;if(typeof e=="string"?f=document.querySelector(e):(d=e)!=null&&d.nodeType&&(f=e),f){if(this.options.wrapper!==window){const _=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}const h=f.getBoundingClientRect();e=(this.isHorizontal?h.left:h.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=Po(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.emit(),void(l==null||l());if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onUpdate:(f,{completed:h})=>{i&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),h&&(i&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,l==null||l()),this.emit()}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.isHorizontal?this.dimensions.limit.x:this.dimensions.limit.y}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(e=this.limit)+e)%e:this.animatedScroll;var e}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.rootElement.classList.toggle("lenis-smooth",e),this.__isSmooth=e)}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.rootElement.classList.toggle("lenis-scrolling",e),this.__isScrolling=e)}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.rootElement.classList.toggle("lenis-stopped",e),this.__isStopped=e)}}function pg(){const r=new hg({duration:2.5,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n)),wheelMultiplier:navigator.userAgent.includes("Safari")?.5:1,touchMultiplier:navigator.userAgent.includes("Safari")?1.5:1,smoothTouch:!1});let e=null;function t(n){r.raf(n),e=requestAnimationFrame(t)}return e=requestAnimationFrame(t),r.on("scroll",ze.update),nt.ticker.add(n=>{r.raf(n*1e3)}),()=>{e&&cancelAnimationFrame(e)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="152",Or={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mg=0,Hu=1,gg=2,qh=1,_g=2,Mi=3,Ki=0,dn=1,si=2,qi=0,fs=1,_c=2,Vu=3,Wu=4,vg=5,ts=100,xg=101,Sg=102,Xu=103,qu=104,Mg=200,yg=201,Eg=202,Tg=203,Yh=204,$h=205,bg=206,wg=207,Ag=208,Cg=209,Pg=210,Rg=0,Lg=1,Dg=2,vc=3,Ig=4,Ug=5,Og=6,Ng=7,jh=0,Fg=1,zg=2,Ai=0,Bg=1,kg=2,Gg=3,Hg=4,Vg=5,Kh=300,Es=301,Ts=302,xc=303,Sc=304,Fo=306,Mc=1e3,Zn=1001,yc=1002,tn=1003,Yu=1004,al=1005,On=1006,Wg=1007,da=1008,Ar=1009,Xg=1010,qg=1011,Zh=1012,Yg=1013,fr=1014,hr=1015,fa=1016,$g=1017,jg=1018,hs=1020,Kg=1021,Jn=1023,Zg=1024,Jg=1025,Sr=1026,bs=1027,Qg=1028,e_=1029,t_=1030,n_=1031,i_=1033,ol=33776,ll=33777,cl=33778,ul=33779,$u=35840,ju=35841,Ku=35842,Zu=35843,r_=36196,Ju=37492,Qu=37496,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,ad=37814,od=37815,ld=37816,cd=37817,ud=37818,dd=37819,fd=37820,hd=37821,dl=36492,s_=36283,pd=36284,md=36285,gd=36286,Jh=3e3,Mr=3001,a_=3200,o_=3201,Qh=0,l_=1,yr="",Xe="srgb",fi="srgb-linear",ep="display-p3",fl=7680,c_=519,_d=35044,vd="300 es",Ec=1035;class Lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hl=Math.PI/180,Tc=180/Math.PI;function ga(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[r&255]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Xt(r,e,t){return Math.max(e,Math.min(t,r))}function u_(r,e){return(r%e+e)%e}function pl(r,e,t){return(1-t)*r+t*e}function xd(r){return(r&r-1)===0&&r!==0}function d_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Da(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],m=i[0],g=i[3],p=i[6],x=i[1],v=i[4],M=i[7],S=i[2],T=i[5],b=i[8];return s[0]=o*m+a*x+l*S,s[3]=o*g+a*v+l*T,s[6]=o*p+a*M+l*b,s[1]=c*m+u*x+d*S,s[4]=c*g+u*v+d*T,s[7]=c*p+u*M+d*b,s[2]=f*m+h*x+_*S,s[5]=f*g+h*v+_*T,s[8]=f*p+h*M+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,_=t*d+n*f+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=d*m,e[1]=(i*c-u*n)*m,e[2]=(a*n-i*o)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*s-a*t)*m,e[6]=h*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ml.makeScale(e,t)),this}rotate(e){return this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ml=new Qe;function tp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ha(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Sd={};function ia(r){r in Sd||(Sd[r]=!0,console.warn(r))}function ps(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const f_=new Qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),h_=new Qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function p_(r){return r.convertSRGBToLinear().applyMatrix3(h_)}function m_(r){return r.applyMatrix3(f_).convertLinearToSRGB()}const g_={[fi]:r=>r,[Xe]:r=>r.convertSRGBToLinear(),[ep]:p_},__={[fi]:r=>r,[Xe]:r=>r.convertLinearToSRGB(),[ep]:m_},Hn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return fi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=g_[e],i=__[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Fr;class np{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=ha("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ps(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ps(t[n]/255)*255):t[n]=ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ip{constructor(e=null){this.isSource=!0,this.uuid=ga(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(_l(i[o].image)):s.push(_l(i[o]))}else s=_l(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _l(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?np.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v_=0;class fn extends Lr{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Zn,i=Zn,s=On,o=da,a=Jn,l=Ar,c=fn.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=ga(),this.name="",this.source=new ip(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mr?Xe:yr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mc:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mc:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xe?Mr:Jh}set encoding(e){ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mr?Xe:yr}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Kh;fn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+m)<.1&&Math.abs(_+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(h+1)/2,S=(p+1)/2,T=(u+f)/4,b=(d+m)/4,C=(_+g)/4;return v>M&&v>S?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=b/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=C/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=b/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-_)*(g-_)+(d-m)*(d-m)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(d-m)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cr extends Lr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ia("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mr?Xe:yr),this.texture=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ip(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rp extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class x_ extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=s[o+0],h=s[o+1],_=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=_,e[t+3]=m;return}if(d!==m||l!==f||c!==h||u!==_){let g=1-a;const p=l*f+c*h+u*_+d*m,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),T=Math.atan2(S,p*x);g=Math.sin(g*T)/S,a=Math.sin(a*T)/S}const M=a*x;if(l=l*g+f*M,c=c*g+h*M,u=u*g+_*M,d=d*g+m*M,g===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],f=s[o+1],h=s[o+2],_=s[o+3];return e[t]=a*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-a*h,e[t+2]=c*_+u*h+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),f=l(n/2),h=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-i)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(s-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,d=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+u*-a-d*-o,this.y=u*l+f*-o+d*-s-c*-a,this.z=d*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new G,Md=new Pr;class _a{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox),zr.applyMatrix4(e.matrixWorld),this.union(zr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)gi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(gi)}else i.boundingBox===null&&i.computeBoundingBox(),zr.copy(i.boundingBox),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Ia.subVectors(this.max,Us),Br.subVectors(e.a,Us),kr.subVectors(e.b,Us),Gr.subVectors(e.c,Us),Li.subVectors(kr,Br),Di.subVectors(Gr,kr),nr.subVectors(Br,Gr);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-nr.z,nr.y,Li.z,0,-Li.x,Di.z,0,-Di.x,nr.z,0,-nr.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-nr.y,nr.x,0];return!xl(t,Br,kr,Gr,Ia)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Br,kr,Gr,Ia))?!1:(Ua.crossVectors(Li,Di),t=[Ua.x,Ua.y,Ua.z],xl(t,Br,kr,Gr,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new G,new G,new G,new G,new G,new G,new G,new G],gi=new G,zr=new _a,Br=new G,kr=new G,Gr=new G,Li=new G,Di=new G,nr=new G,Us=new G,Ia=new G,Ua=new G,ir=new G;function xl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ir.fromArray(r,s);const a=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=n.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const S_=new _a,Os=new G,Sl=new G;class zo{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):S_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Os,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Sl)),this.expandByPoint(Os.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new G,Ml=new G,Oa=new G,Ii=new G,yl=new G,Na=new G,El=new G;class sp{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ml.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Ml);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Oa),a=Ii.dot(this.direction),l=-Ii.dot(Oa),c=Ii.lengthSq(),u=Math.abs(1-o*o);let d,f,h,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const m=1/u;d*=m,f*=m,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ml).addScaledVector(Oa,f),h}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const n=_i.dot(this.direction),i=_i.dot(_i)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,i,s){yl.subVectors(t,e),Na.subVectors(n,e),El.crossVectors(yl,Na);let o=this.direction.dot(El),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Na.crossVectors(Ii,Na));if(l<0)return null;const c=a*this.direction.dot(yl.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(El);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,d,f,h,_,m,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,_=a*u,m=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=_+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,m=c*d;t[0]=f+m*a,t[4]=_*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-_,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,m=c*d;t[0]=f-m*a,t[4]=-o*d,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,_=a*u,m=a*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+m,t[1]=l*d,t[5]=m*c+f,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,_=a*l,m=a*c;t[0]=l*u,t[4]=m-f*d,t[8]=_*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-m*d}else if(e.order==="XZY"){const f=o*l,h=o*c,_=a*l,m=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+m,t[5]=o*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=a*u,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M_,e,y_)}lookAt(e,t,n){const i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ui.crossVectors(n,gn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ui.crossVectors(n,gn)),Ui.normalize(),Fa.crossVectors(gn,Ui),i[0]=Ui.x,i[4]=Fa.x,i[8]=gn.x,i[1]=Ui.y,i[5]=Fa.y,i[9]=gn.y,i[2]=Ui.z,i[6]=Fa.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],m=n[6],g=n[10],p=n[14],x=n[3],v=n[7],M=n[11],S=n[15],T=i[0],b=i[4],C=i[8],y=i[12],E=i[1],I=i[5],D=i[9],P=i[13],O=i[2],z=i[6],W=i[10],H=i[14],V=i[3],Q=i[7],L=i[11],de=i[15];return s[0]=o*T+a*E+l*O+c*V,s[4]=o*b+a*I+l*z+c*Q,s[8]=o*C+a*D+l*W+c*L,s[12]=o*y+a*P+l*H+c*de,s[1]=u*T+d*E+f*O+h*V,s[5]=u*b+d*I+f*z+h*Q,s[9]=u*C+d*D+f*W+h*L,s[13]=u*y+d*P+f*H+h*de,s[2]=_*T+m*E+g*O+p*V,s[6]=_*b+m*I+g*z+p*Q,s[10]=_*C+m*D+g*W+p*L,s[14]=_*y+m*P+g*H+p*de,s[3]=x*T+v*E+M*O+S*V,s[7]=x*b+v*I+M*z+S*Q,s[11]=x*C+v*D+M*W+S*L,s[15]=x*y+v*P+M*H+S*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],m=e[7],g=e[11],p=e[15];return _*(+s*l*d-i*c*d-s*a*f+n*c*f+i*a*h-n*l*h)+m*(+t*l*h-t*c*f+s*o*f-i*o*h+i*c*u-s*l*u)+g*(+t*c*d-t*a*h-s*o*d+n*o*h+s*a*u-n*c*u)+p*(-i*a*u-t*l*d+t*a*f+i*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],m=e[13],g=e[14],p=e[15],x=d*g*c-m*f*c+m*l*h-a*g*h-d*l*p+a*f*p,v=_*f*c-u*g*c-_*l*h+o*g*h+u*l*p-o*f*p,M=u*m*c-_*d*c+_*a*h-o*m*h-u*a*p+o*d*p,S=_*d*l-u*m*l-_*a*f+o*m*f+u*a*g-o*d*g,T=t*x+n*v+i*M+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=x*b,e[1]=(m*f*s-d*g*s-m*i*h+n*g*h+d*i*p-n*f*p)*b,e[2]=(a*g*s-m*l*s+m*i*c-n*g*c-a*i*p+n*l*p)*b,e[3]=(d*l*s-a*f*s-d*i*c+n*f*c+a*i*h-n*l*h)*b,e[4]=v*b,e[5]=(u*g*s-_*f*s+_*i*h-t*g*h-u*i*p+t*f*p)*b,e[6]=(_*l*s-o*g*s-_*i*c+t*g*c+o*i*p-t*l*p)*b,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*h+t*l*h)*b,e[8]=M*b,e[9]=(_*d*s-u*m*s-_*n*h+t*m*h+u*n*p-t*d*p)*b,e[10]=(o*m*s-_*a*s+_*n*c-t*m*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*h-t*a*h)*b,e[12]=S*b,e[13]=(u*m*i-_*d*i+_*n*f-t*m*f-u*n*g+t*d*g)*b,e[14]=(_*a*i-o*m*i-_*n*l+t*m*l+o*n*g-t*a*g)*b,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,_=s*d,m=o*u,g=o*d,p=a*d,x=l*c,v=l*u,M=l*d,S=n.x,T=n.y,b=n.z;return i[0]=(1-(m+p))*S,i[1]=(h+M)*S,i[2]=(_-v)*S,i[3]=0,i[4]=(h-M)*T,i[5]=(1-(f+p))*T,i[6]=(g+x)*T,i[7]=0,i[8]=(_+v)*b,i[9]=(g-x)*b,i[10]=(1-(f+m))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Hr.set(i[0],i[1],i[2]).length();const o=Hr.set(i[4],i[5],i[6]).length(),a=Hr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Vn.copy(this);const c=1/s,u=1/o,d=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+s)/(o-s),h=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=h,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*c,h=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-h,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hr=new G,Vn=new St,M_=new G(0,0,0),y_=new G(1,1,1),Ui=new G,Fa=new G,gn=new G,yd=new St,Ed=new Pr;class va{constructor(e=0,t=0,n=0,i=va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E_=0;const Td=new G,Vr=new Pr,vi=new St,za=new G,Ns=new G,T_=new G,b_=new Pr,bd=new G(1,0,0),wd=new G(0,1,0),Ad=new G(0,0,1),w_={type:"added"},Cd={type:"removed"};class Gt extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new G,t=new va,n=new Pr,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new Qe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(wd,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,t){return Td.copy(e).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(wd,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?za.copy(e):za.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ns,za,this.up):vi.lookAt(za,Ns,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),Vr.setFromRotationMatrix(vi),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(w_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Cd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,T_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,b_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new G(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new G,xi=new G,Tl=new G,Si=new G,Wr=new G,Xr=new G,Pd=new G,bl=new G,wl=new G,Al=new G;let Ba=!1;class jn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wn.subVectors(i,t),xi.subVectors(n,t),Tl.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(xi),l=Wn.dot(Tl),c=xi.dot(xi),u=xi.dot(Tl),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,h=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Si),Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,n,i,s,o,a,l){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Si),l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),xi.subVectors(e,t),Wn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Wn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Wr.subVectors(i,n),Xr.subVectors(s,n),bl.subVectors(e,n);const l=Wr.dot(bl),c=Xr.dot(bl);if(l<=0&&c<=0)return t.copy(n);wl.subVectors(e,i);const u=Wr.dot(wl),d=Xr.dot(wl);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Wr,o);Al.subVectors(e,s);const h=Wr.dot(Al),_=Xr.dot(Al);if(_>=0&&h<=_)return t.copy(s);const m=h*c-l*_;if(m<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Xr,a);const g=u*_-h*d;if(g<=0&&d-u>=0&&h-_>=0)return Pd.subVectors(s,i),a=(d-u)/(d-u+(h-_)),t.copy(i).addScaledVector(Pd,a);const p=1/(g+m+f);return o=m*p,a=f*p,t.copy(n).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let A_=0;class As extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=fs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yh,this.blendDst=$h,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fl,this.stencilZFail=fl,this.stencilZPass=fl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Cl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Hn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Hn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Hn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Hn.workingColorSpace){if(e=u_(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Cl(o,s,e+1/3),this.g=Cl(o,s,e),this.b=Cl(o,s,e-1/3)}return Hn.toWorkingColorSpace(this,i),this}setStyle(e,t=Xe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xe){const n=op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=gl(e.r),this.g=gl(e.g),this.b=gl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xe){return Hn.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Xt(Vt.r*255,0,255))*65536+Math.round(Xt(Vt.g*255,0,255))*256+Math.round(Xt(Vt.b*255,0,255))}getHexString(e=Xe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Hn.workingColorSpace){Hn.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,s=Vt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Hn.workingColorSpace){return Hn.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Xe){Hn.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==Xe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),Xn.h+=e,Xn.s+=t,Xn.l+=n,this.setHSL(Xn.h,Xn.s,Xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(ka);const n=pl(Xn.h,ka.h,t),i=pl(Xn.s,ka.s,t),s=pl(Xn.l,ka.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new it;it.NAMES=op;class lp extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new G,Ga=new We;class kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_d,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Da(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Da(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Da(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_d&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class cp extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class up extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class An extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let C_=0;const Rn=new St,Pl=new Gt,qr=new G,_n=new _a,Fs=new _a,Dt=new G;class hi extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tp(e)?up:cp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(_n.min,Fs.min),_n.expandByPoint(Dt),Dt.addVectors(_n.max,Fs.max),_n.expandByPoint(Dt)):(_n.expandByPoint(Fs.min),_n.expandByPoint(Fs.max))}_n.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),Dt.add(qr)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new G,u[E]=new G;const d=new G,f=new G,h=new G,_=new We,m=new We,g=new We,p=new G,x=new G;function v(E,I,D){d.fromArray(i,E*3),f.fromArray(i,I*3),h.fromArray(i,D*3),_.fromArray(o,E*2),m.fromArray(o,I*2),g.fromArray(o,D*2),f.sub(d),h.sub(d),m.sub(_),g.sub(_);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),x.copy(h).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(P),c[E].add(p),c[I].add(p),c[D].add(p),u[E].add(x),u[I].add(x),u[D].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,I=M.length;E<I;++E){const D=M[E],P=D.start,O=D.count;for(let z=P,W=P+O;z<W;z+=3)v(n[z+0],n[z+1],n[z+2])}const S=new G,T=new G,b=new G,C=new G;function y(E){b.fromArray(s,E*3),C.copy(b);const I=c[E];S.copy(I),S.sub(b.multiplyScalar(b.dot(I))).normalize(),T.crossVectors(C,I);const P=T.dot(u[E])<0?-1:1;l[E*4]=S.x,l[E*4+1]=S.y,l[E*4+2]=S.z,l[E*4+3]=P}for(let E=0,I=M.length;E<I;++E){const D=M[E],P=D.start,O=D.count;for(let z=P,W=P+O;z<W;z+=3)y(n[z+0]),y(n[z+1]),y(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),m=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?h=l[m]*a.data.stride+a.offset:h=l[m]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new kn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rd=new St,ti=new sp,Ha=new zo,Ld=new G,Yr=new G,$r=new G,jr=new G,Rl=new G,Va=new G,Wa=new We,Xa=new We,qa=new We,Dd=new G,Id=new G,Ud=new G,Ya=new G,$a=new G;class oi extends Gt{constructor(e=new hi,t=new lp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Rl.fromBufferAttribute(d,e),o?Va.addScaledVector(Rl,u):Va.addScaledVector(Rl.sub(t),u))}t.add(Va)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Ha.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Ha,Ld)===null||ti.origin.distanceToSquared(Ld)>(e.far-e.near)**2))&&(Rd.copy(s).invert(),ti.copy(e.ray).applyMatrix4(Rd),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,s=this.material,o=i.index,a=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(s))for(let h=0,_=d.length;h<_;h++){const m=d[h],g=s[m.materialIndex],p=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=p,M=x;v<M;v+=3){const S=o.getX(v),T=o.getX(v+1),b=o.getX(v+2);n=ja(this,g,e,ti,l,c,u,S,T,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const h=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=h,g=_;m<g;m+=3){const p=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);n=ja(this,s,e,ti,l,c,u,p,x,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let h=0,_=d.length;h<_;h++){const m=d[h],g=s[m.materialIndex],p=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=p,M=x;v<M;v+=3){const S=v,T=v+1,b=v+2;n=ja(this,g,e,ti,l,c,u,S,T,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const h=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=h,g=_;m<g;m+=3){const p=m,x=m+1,v=m+2;n=ja(this,s,e,ti,l,c,u,p,x,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function P_(r,e,t,n,i,s,o,a){let l;if(e.side===dn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ki,a),l===null)return null;$a.copy(a),$a.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo($a);return c<t.near||c>t.far?null:{distance:c,point:$a.clone(),object:r}}function ja(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Yr),r.getVertexPosition(l,$r),r.getVertexPosition(c,jr);const u=P_(r,e,t,n,Yr,$r,jr,Ya);if(u){i&&(Wa.fromBufferAttribute(i,a),Xa.fromBufferAttribute(i,l),qa.fromBufferAttribute(i,c),u.uv=jn.getInterpolation(Ya,Yr,$r,jr,Wa,Xa,qa,new We)),s&&(Wa.fromBufferAttribute(s,a),Xa.fromBufferAttribute(s,l),qa.fromBufferAttribute(s,c),u.uv1=jn.getInterpolation(Ya,Yr,$r,jr,Wa,Xa,qa,new We),u.uv2=u.uv1),o&&(Dd.fromBufferAttribute(o,a),Id.fromBufferAttribute(o,l),Ud.fromBufferAttribute(o,c),u.normal=jn.getInterpolation(Ya,Yr,$r,jr,Dd,Id,Ud,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new G,materialIndex:0};jn.getNormal(Yr,$r,jr,d.normal),u.face=d}return u}class xa extends hi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(u,3)),this.setAttribute("uv",new An(d,2));function _(m,g,p,x,v,M,S,T,b,C,y){const E=M/b,I=S/C,D=M/2,P=S/2,O=T/2,z=b+1,W=C+1;let H=0,V=0;const Q=new G;for(let L=0;L<W;L++){const de=L*I-P;for(let re=0;re<z;re++){const $=re*E-D;Q[m]=$*x,Q[g]=de*v,Q[p]=O,c.push(Q.x,Q.y,Q.z),Q[m]=0,Q[g]=0,Q[p]=T>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(re/b),d.push(1-L/C),H+=1}}for(let L=0;L<C;L++)for(let de=0;de<b;de++){const re=f+de+z*L,$=f+de+z*(L+1),J=f+(de+1)+z*(L+1),oe=f+(de+1)+z*L;l.push(re,$,oe),l.push($,J,oe),V+=6}a.addGroup(h,V,y),h+=V,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Jt(r){const e={};for(let t=0;t<r.length;t++){const n=ws(r[t]);for(const i in n)e[i]=n[i]}return e}function R_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function dp(r){return r.getRenderTarget()===null?r.outputColorSpace:fi}const L_={clone:ws,merge:Jt};var D_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D_,this.fragmentShader=I_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=R_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fp extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class En extends fp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tc*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Zr=1;class U_ extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new En(Kr,Zr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new En(Kr,Zr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new En(Kr,Zr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new En(Kr,Zr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new En(Kr,Zr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new En(Kr,Zr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ai,e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class hp extends fn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class O_ extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ia("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mr?Xe:yr),this.texture=new hp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xa(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:qi});s.uniforms.tEquirect.value=t;const o=new oi(i,s),a=t.minFilter;return t.minFilter===da&&(t.minFilter=On),new U_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ll=new G,N_=new G,F_=new Qe;class or{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ll.subVectors(n,t).cross(N_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ll),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||F_.getNormalMatrix(e),i=this.coplanarPoint(Ll).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new zo,Ka=new G;class eu{constructor(e=new or,t=new or,n=new or,i=new or,s=new or,o=new or){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7],f=n[8],h=n[9],_=n[10],m=n[11],g=n[12],p=n[13],x=n[14],v=n[15];return t[0].setComponents(a-i,d-l,m-f,v-g).normalize(),t[1].setComponents(a+i,d+l,m+f,v+g).normalize(),t[2].setComponents(a+s,d+c,m+h,v+p).normalize(),t[3].setComponents(a-s,d-c,m-h,v-p).normalize(),t[4].setComponents(a-o,d-u,m-_,v-x).normalize(),t[5].setComponents(a+o,d+u,m+_,v+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ka.x=i.normal.x>0?e.max.x:e.min.x,Ka.y=i.normal.y>0?e.max.y:e.min.y,Ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function z_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,f=c.usage,h=r.createBuffer();r.bindBuffer(u,h),r.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=r.SHORT;else if(d instanceof Uint32Array)_=r.UNSIGNED_INT;else if(d instanceof Int32Array)_=r.INT;else if(d instanceof Int8Array)_=r.BYTE;else if(d instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const f=u.array,h=u.updateRange;r.bindBuffer(d,c),h.count===-1?r.bufferSubData(d,0,f):(t?r.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count):r.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class tu extends hi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,h=[],_=[],m=[],g=[];for(let p=0;p<u;p++){const x=p*f-o;for(let v=0;v<c;v++){const M=v*d-s;_.push(M,-x,0),m.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,M=x+c*(p+1),S=x+1+c*(p+1),T=x+1+c*p;h.push(v,M,T),h.push(M,S,T)}this.setIndex(h),this.setAttribute("position",new An(_,3)),this.setAttribute("normal",new An(m,3)),this.setAttribute("uv",new An(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.width,e.height,e.widthSegments,e.heightSegments)}}var B_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,H_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,W_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X_="vec3 transformed = vec3( position );",q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$_=`#ifdef USE_IRIDESCENCE
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
#endif`,j_=`#ifdef USE_BUMPMAP
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
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r0=`#define PI 3.141592653589793
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
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#endif`,C0=`#if defined( USE_ENVMAP )
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
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
#endif`,U0=`struct PhysicalMaterial {
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
}`,O0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,z0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,H0=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,V0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
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
#endif`,K0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iv=`#ifdef USE_NORMALMAP
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
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xv=`float getShadowMask() {
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
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mv=`#ifdef USE_SKINNING
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
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ev=`#ifdef USE_SKINNING
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
#endif`,Tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Av=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#ifdef USE_TRANSMISSION
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
#endif`,Rv=`#ifdef USE_UV
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
#endif`,Lv=`#ifdef USE_UV
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
#endif`,Dv=`#ifdef USE_UV
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
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ov=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kv=`#include <common>
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
}`,Gv=`#if DEPTH_PACKING == 3200
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
}`,Hv=`#define DISTANCE
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
}`,Vv=`#define DISTANCE
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qv=`uniform float scale;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,jv=`uniform vec3 diffuse;
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
}`,Kv=`#define LAMBERT
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
}`,Zv=`#define LAMBERT
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
}`,Jv=`#define MATCAP
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
}`,Qv=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,ix=`#define PHONG
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
}`,rx=`#define STANDARD
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
}`,sx=`#define STANDARD
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
}`,ax=`#define TOON
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
}`,ox=`#define TOON
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
}`,lx=`uniform float size;
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
}`,cx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,dx=`uniform vec3 color;
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
}`,fx=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,Ye={alphamap_fragment:B_,alphamap_pars_fragment:k_,alphatest_fragment:G_,alphatest_pars_fragment:H_,aomap_fragment:V_,aomap_pars_fragment:W_,begin_vertex:X_,beginnormal_vertex:q_,bsdfs:Y_,iridescence_fragment:$_,bumpmap_pars_fragment:j_,clipping_planes_fragment:K_,clipping_planes_pars_fragment:Z_,clipping_planes_pars_vertex:J_,clipping_planes_vertex:Q_,color_fragment:e0,color_pars_fragment:t0,color_pars_vertex:n0,color_vertex:i0,common:r0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:a0,displacementmap_pars_vertex:o0,displacementmap_vertex:l0,emissivemap_fragment:c0,emissivemap_pars_fragment:u0,encodings_fragment:d0,encodings_pars_fragment:f0,envmap_fragment:h0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:C0,envmap_vertex:_0,fog_vertex:v0,fog_pars_vertex:x0,fog_fragment:S0,fog_pars_fragment:M0,gradientmap_pars_fragment:y0,lightmap_fragment:E0,lightmap_pars_fragment:T0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:w0,lights_pars_begin:A0,lights_toon_fragment:P0,lights_toon_pars_fragment:R0,lights_phong_fragment:L0,lights_phong_pars_fragment:D0,lights_physical_fragment:I0,lights_physical_pars_fragment:U0,lights_fragment_begin:O0,lights_fragment_maps:N0,lights_fragment_end:F0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:G0,map_fragment:H0,map_pars_fragment:V0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:Y0,morphcolor_vertex:$0,morphnormal_vertex:j0,morphtarget_pars_vertex:K0,morphtarget_vertex:Z0,normal_fragment_begin:J0,normal_fragment_maps:Q0,normal_pars_fragment:ev,normal_pars_vertex:tv,normal_vertex:nv,normalmap_pars_fragment:iv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:sv,clearcoat_pars_fragment:av,iridescence_pars_fragment:ov,output_fragment:lv,packing:cv,premultiplied_alpha_fragment:uv,project_vertex:dv,dithering_fragment:fv,dithering_pars_fragment:hv,roughnessmap_fragment:pv,roughnessmap_pars_fragment:mv,shadowmap_pars_fragment:gv,shadowmap_pars_vertex:_v,shadowmap_vertex:vv,shadowmask_pars_fragment:xv,skinbase_vertex:Sv,skinning_pars_vertex:Mv,skinning_vertex:yv,skinnormal_vertex:Ev,specularmap_fragment:Tv,specularmap_pars_fragment:bv,tonemapping_fragment:wv,tonemapping_pars_fragment:Av,transmission_fragment:Cv,transmission_pars_fragment:Pv,uv_pars_fragment:Rv,uv_pars_vertex:Lv,uv_vertex:Dv,worldpos_vertex:Iv,background_vert:Uv,background_frag:Ov,backgroundCube_vert:Nv,backgroundCube_frag:Fv,cube_vert:zv,cube_frag:Bv,depth_vert:kv,depth_frag:Gv,distanceRGBA_vert:Hv,distanceRGBA_frag:Vv,equirect_vert:Wv,equirect_frag:Xv,linedashed_vert:qv,linedashed_frag:Yv,meshbasic_vert:$v,meshbasic_frag:jv,meshlambert_vert:Kv,meshlambert_frag:Zv,meshmatcap_vert:Jv,meshmatcap_frag:Qv,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:rx,meshphysical_frag:sx,meshtoon_vert:ax,meshtoon_frag:ox,points_vert:lx,points_frag:cx,shadow_vert:ux,shadow_frag:dx,sprite_vert:fx,sprite_frag:hx},he={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaTest:{value:0}}},ii={basic:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new it(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new it(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Jt([he.points,he.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Jt([he.common,he.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Jt([he.sprite,he.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Jt([he.common,he.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Jt([he.lights,he.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ii.physical={uniforms:Jt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Za={r:0,b:0,g:0};function px(r,e,t,n,i,s,o){const a=new it(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function _(g,p){let x=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?m(a,l):v&&v.isColor&&(m(v,1),x=!0),r.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Fo)?(u===void 0&&(u=new oi(new xa(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ws(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Xe,(d!==v||f!==v.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,h=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new oi(new tu(2,2),new Ri({name:"BackgroundMaterial",uniforms:ws(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,h=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,p){g.getRGB(Za,dp(r)),n.buffers.color.setClear(Za.r,Za.g,Za.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(a,l)},render:_}}function mx(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function d(O,z,W,H,V){let Q=!1;if(o){const L=m(H,W,z);c!==L&&(c=L,h(c.object)),Q=p(O,H,W,V),Q&&x(O,H,W,V)}else{const L=z.wireframe===!0;(c.geometry!==H.id||c.program!==W.id||c.wireframe!==L)&&(c.geometry=H.id,c.program=W.id,c.wireframe=L,Q=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,C(O,z,W,H),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function h(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function m(O,z,W){const H=W.wireframe===!0;let V=a[O.id];V===void 0&&(V={},a[O.id]=V);let Q=V[z.id];Q===void 0&&(Q={},V[z.id]=Q);let L=Q[H];return L===void 0&&(L=g(f()),Q[H]=L),L}function g(O){const z=[],W=[],H=[];for(let V=0;V<i;V++)z[V]=0,W[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:H,object:O,attributes:{},index:null}}function p(O,z,W,H){const V=c.attributes,Q=z.attributes;let L=0;const de=W.getAttributes();for(const re in de)if(de[re].location>=0){const J=V[re];let oe=Q[re];if(oe===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor)),J===void 0||J.attribute!==oe||oe&&J.data!==oe.data)return!0;L++}return c.attributesNum!==L||c.index!==H}function x(O,z,W,H){const V={},Q=z.attributes;let L=0;const de=W.getAttributes();for(const re in de)if(de[re].location>=0){let J=Q[re];J===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));const oe={};oe.attribute=J,J&&J.data&&(oe.data=J.data),V[re]=oe,L++}c.attributes=V,c.attributesNum=L,c.index=H}function v(){const O=c.newAttributes;for(let z=0,W=O.length;z<W;z++)O[z]=0}function M(O){S(O,0)}function S(O,z){const W=c.newAttributes,H=c.enabledAttributes,V=c.attributeDivisors;W[O]=1,H[O]===0&&(r.enableVertexAttribArray(O),H[O]=1),V[O]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),V[O]=z)}function T(){const O=c.newAttributes,z=c.enabledAttributes;for(let W=0,H=z.length;W<H;W++)z[W]!==O[W]&&(r.disableVertexAttribArray(W),z[W]=0)}function b(O,z,W,H,V,Q){n.isWebGL2===!0&&(W===r.INT||W===r.UNSIGNED_INT)?r.vertexAttribIPointer(O,z,W,V,Q):r.vertexAttribPointer(O,z,W,H,V,Q)}function C(O,z,W,H){if(n.isWebGL2===!1&&(O.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=H.attributes,Q=W.getAttributes(),L=z.defaultAttributeValues;for(const de in Q){const re=Q[de];if(re.location>=0){let $=V[de];if($===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){const J=$.normalized,oe=$.itemSize,ae=t.get($);if(ae===void 0)continue;const N=ae.buffer,Ce=ae.type,Ie=ae.bytesPerElement;if($.isInterleavedBufferAttribute){const le=$.data,we=le.stride,xe=$.offset;if(le.isInstancedInterleavedBuffer){for(let ge=0;ge<re.locationSize;ge++)S(re.location+ge,le.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<re.locationSize;ge++)M(re.location+ge);r.bindBuffer(r.ARRAY_BUFFER,N);for(let ge=0;ge<re.locationSize;ge++)b(re.location+ge,oe/re.locationSize,Ce,J,we*Ie,(xe+oe/re.locationSize*ge)*Ie)}else{if($.isInstancedBufferAttribute){for(let le=0;le<re.locationSize;le++)S(re.location+le,$.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<re.locationSize;le++)M(re.location+le);r.bindBuffer(r.ARRAY_BUFFER,N);for(let le=0;le<re.locationSize;le++)b(re.location+le,oe/re.locationSize,Ce,J,oe*Ie,oe/re.locationSize*le*Ie)}}else if(L!==void 0){const J=L[de];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(re.location,J);break;case 3:r.vertexAttrib3fv(re.location,J);break;case 4:r.vertexAttrib4fv(re.location,J);break;default:r.vertexAttrib1fv(re.location,J)}}}}T()}function y(){D();for(const O in a){const z=a[O];for(const W in z){const H=z[W];for(const V in H)_(H[V].object),delete H[V];delete z[W]}delete a[O]}}function E(O){if(a[O.id]===void 0)return;const z=a[O.id];for(const W in z){const H=z[W];for(const V in H)_(H[V].object),delete H[V];delete z[W]}delete a[O.id]}function I(O){for(const z in a){const W=a[z];if(W[O.id]===void 0)continue;const H=W[O.id];for(const V in H)_(H[V].object),delete H[V];delete W[O.id]}}function D(){P(),u=!0,c!==l&&(c=l,h(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:P,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function gx(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,h;if(i)f=r,h="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](s,c,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function _x(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||e.has("OES_texture_float"),S=v&&M,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:h,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:T}}function vx(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new or,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,m=d.clipIntersection,g=d.clipShadows,p=r.get(d);if(!i||_===null||_.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,v=x*4;let M=p.clippingState||null;l.value=M,M=u(_,f,v,h);for(let S=0;S!==v;++S)M[S]=t[S];p.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){const m=d!==null?d.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const p=h+m*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,M=h;v!==m;++v,M+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function xx(r){let e=new WeakMap;function t(o,a){return a===xc?o.mapping=Es:a===Sc&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===xc||a===Sc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new O_(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class mp extends fp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const as=4,Od=[.125,.215,.35,.446,.526,.582],cr=20,Dl=new mp,Nd=new it;let Il=null;const lr=(1+Math.sqrt(5))/2,Jr=1/lr,Fd=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,lr,Jr),new G(0,lr,-Jr),new G(Jr,0,lr),new G(-Jr,0,lr),new G(lr,Jr,0),new G(-lr,Jr,0)];class zd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Il=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:fa,format:Jn,colorSpace:fi,depthBuffer:!1},i=Bd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sx(s)),this._blurMaterial=Mx(s,e,t)}return i}_compileMaterial(e){const t=new oi(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,n,i){const a=new En(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Nd),u.toneMapping=Ai,u.autoClear=!1;const h=new lp({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new oi(new xa,h);let m=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,m=!0):(h.color.copy(Nd),m=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Ja(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Es||e.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new oi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Fd[(i-1)%Fd.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new oi(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*cr-1),m=s/_,g=isFinite(s)?1+Math.floor(u*m):cr;g>cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cr}`);const p=[];let x=0;for(let b=0;b<cr;++b){const C=b/m,y=Math.exp(-C*C/2);p.push(y),b===0?x+=y:b<g&&(x+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const M=this._sizeLods[i],S=3*M*(i>v-as?i-v+as:0),T=4*(this._cubeSize-M);Ja(t,S,T,3*M,2*M),l.setRenderTarget(t),l.render(d,Dl)}}function Sx(r){const e=[],t=[],n=[];let i=r;const s=r-as+1+Od.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-as?l=Od[o-r+as-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,m=3,g=2,p=1,x=new Float32Array(m*_*h),v=new Float32Array(g*_*h),M=new Float32Array(p*_*h);for(let T=0;T<h;T++){const b=T%3*2/3-1,C=T>2?0:-1,y=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];x.set(y,m*_*T),v.set(f,g*_*T);const E=[T,T,T,T,T,T];M.set(E,p*_*T)}const S=new hi;S.setAttribute("position",new kn(x,m)),S.setAttribute("uv",new kn(v,g)),S.setAttribute("faceIndex",new kn(M,p)),e.push(S),i>as&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bd(r,e,t){const n=new Cr(r,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Mx(r,e,t){const n=new Float32Array(cr),i=new G(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function kd(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Gd(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function nu(){return`

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
	`}function yx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xc||l===Sc,u=l===Es||l===Ts;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new zd(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new zd(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ex(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tx(r,e,t,n){const i={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const h=d.morphAttributes;for(const _ in h){const m=h[_];for(let g=0,p=m.length;g<p;g++)e.update(m[g],r.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,_=d.attributes.position;let m=0;if(h!==null){const x=h.array;m=h.version;for(let v=0,M=x.length;v<M;v+=3){const S=x[v+0],T=x[v+1],b=x[v+2];f.push(S,T,T,b,b,S)}}else{const x=_.array;m=_.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const S=v+0,T=v+1,b=v+2;f.push(S,T,T,b,b,S)}}const g=new(tp(f)?up:cp)(f,1);g.version=m;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function bx(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,h){r.drawElements(s,h,a,f*l),t.update(h,s,1)}function d(f,h,_){if(_===0)return;let m,g;if(i)m=r,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,a,f*l,_),t.update(h,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function wx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ax(r,e){return r[0]-e[0]}function Cx(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Px(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=_!==void 0?_.length:0;let g=s.get(u);if(g===void 0||g.count!==m){let z=function(){P.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var h=z;g!==void 0&&g.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),S===!0&&(y=3);let E=u.attributes.position.count*y,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*I*4*m),P=new rp(D,E,I,m);P.type=hr,P.needsUpdate=!0;const O=y*4;for(let W=0;W<m;W++){const H=T[W],V=b[W],Q=C[W],L=E*I*4*W;for(let de=0;de<H.count;de++){const re=de*O;v===!0&&(o.fromBufferAttribute(H,de),D[L+re+0]=o.x,D[L+re+1]=o.y,D[L+re+2]=o.z,D[L+re+3]=0),M===!0&&(o.fromBufferAttribute(V,de),D[L+re+4]=o.x,D[L+re+5]=o.y,D[L+re+6]=o.z,D[L+re+7]=0),S===!0&&(o.fromBufferAttribute(Q,de),D[L+re+8]=o.x,D[L+re+9]=o.y,D[L+re+10]=o.z,D[L+re+11]=Q.itemSize===4?o.w:1)}}g={count:m,texture:P,size:new We(E,I)},s.set(u,g),u.addEventListener("dispose",z)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const x=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const _=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==_){m=[];for(let M=0;M<_;M++)m[M]=[M,0];n[u.id]=m}for(let M=0;M<_;M++){const S=m[M];S[0]=M,S[1]=f[M]}m.sort(Cx);for(let M=0;M<8;M++)M<_&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Ax);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const S=a[M],T=S[0],b=S[1];T!==Number.MAX_SAFE_INTEGER&&b?(g&&u.getAttribute("morphTarget"+M)!==g[T]&&u.setAttribute("morphTarget"+M,g[T]),p&&u.getAttribute("morphNormal"+M)!==p[T]&&u.setAttribute("morphNormal"+M,p[T]),i[M]=b,x+=b):(g&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const v=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Rx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const gp=new fn,_p=new rp,vp=new x_,xp=new hp,Hd=[],Vd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),qd=new Float32Array(4);function Cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Hd[i];if(s===void 0&&(s=new Float32Array(i),Hd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Rt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bo(r,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Lx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2fv(this.addr,e),Rt(t,e)}}function Ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;r.uniform3fv(this.addr,e),Rt(t,e)}}function Ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4fv(this.addr,e),Rt(t,e)}}function Ox(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,n))return;qd.set(n),r.uniformMatrix2fv(this.addr,!1,qd),Rt(t,n)}}function Nx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,n))return;Xd.set(n),r.uniformMatrix3fv(this.addr,!1,Xd),Rt(t,n)}}function Fx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,n))return;Wd.set(n),r.uniformMatrix4fv(this.addr,!1,Wd),Rt(t,n)}}function zx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Bx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2iv(this.addr,e),Rt(t,e)}}function kx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3iv(this.addr,e),Rt(t,e)}}function Gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4iv(this.addr,e),Rt(t,e)}}function Hx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2uiv(this.addr,e),Rt(t,e)}}function Wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3uiv(this.addr,e),Rt(t,e)}}function Xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4uiv(this.addr,e),Rt(t,e)}}function qx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||gp,i)}function Yx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vp,i)}function $x(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xp,i)}function jx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_p,i)}function Kx(r){switch(r){case 5126:return Lx;case 35664:return Dx;case 35665:return Ix;case 35666:return Ux;case 35674:return Ox;case 35675:return Nx;case 35676:return Fx;case 5124:case 35670:return zx;case 35667:case 35671:return Bx;case 35668:case 35672:return kx;case 35669:case 35673:return Gx;case 5125:return Hx;case 36294:return Vx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return jx}}function Zx(r,e){r.uniform1fv(this.addr,e)}function Jx(r,e){const t=Cs(e,this.size,2);r.uniform2fv(this.addr,t)}function Qx(r,e){const t=Cs(e,this.size,3);r.uniform3fv(this.addr,t)}function eS(r,e){const t=Cs(e,this.size,4);r.uniform4fv(this.addr,t)}function tS(r,e){const t=Cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function nS(r,e){const t=Cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function iS(r,e){const t=Cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rS(r,e){r.uniform1iv(this.addr,e)}function sS(r,e){r.uniform2iv(this.addr,e)}function aS(r,e){r.uniform3iv(this.addr,e)}function oS(r,e){r.uniform4iv(this.addr,e)}function lS(r,e){r.uniform1uiv(this.addr,e)}function cS(r,e){r.uniform2uiv(this.addr,e)}function uS(r,e){r.uniform3uiv(this.addr,e)}function dS(r,e){r.uniform4uiv(this.addr,e)}function fS(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||gp,s[o])}function hS(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vp,s[o])}function pS(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||xp,s[o])}function mS(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_p,s[o])}function gS(r){switch(r){case 5126:return Zx;case 35664:return Jx;case 35665:return Qx;case 35666:return eS;case 35674:return tS;case 35675:return nS;case 35676:return iS;case 5124:case 35670:return rS;case 35667:case 35671:return sS;case 35668:case 35672:return aS;case 35669:case 35673:return oS;case 5125:return lS;case 36294:return cS;case 36295:return uS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return pS;case 36289:case 36303:case 36311:case 36292:return mS}}class _S{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Kx(t.type)}}class vS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=gS(t.type)}}class xS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ul=/(\w+)(\])?(\[|\.)?/g;function Yd(r,e){r.seq.push(e),r.map[e.id]=e}function SS(r,e,t){const n=r.name,i=n.length;for(Ul.lastIndex=0;;){const s=Ul.exec(n),o=Ul.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Yd(t,c===void 0?new _S(a,r,e):new vS(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new xS(a),Yd(t,d)),t=d}}}class mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);SS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function $d(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let MS=0;function yS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ES(r){switch(r){case fi:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function jd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+yS(r.getShaderSource(e),o)}else return i}function TS(r,e){const t=ES(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function bS(r,e){let t;switch(e){case Bg:t="Linear";break;case kg:t="Reinhard";break;case Gg:t="OptimizedCineon";break;case Hg:t="ACESFilmic";break;case Vg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wS(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function AS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function CS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Xs(r){return r!==""}function Kd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(r){return r.replace(PS,RS)}function RS(r,e){const t=Ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return bc(t)}const LS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(r){return r.replace(LS,DS)}function DS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qd(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function US(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function NS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jh:e="ENVMAP_BLENDING_MULTIPLY";break;case Fg:e="ENVMAP_BLENDING_MIX";break;case zg:e="ENVMAP_BLENDING_ADD";break}return e}function FS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IS(t),c=US(t),u=OS(t),d=NS(t),f=FS(t),h=t.isWebGL2?"":wS(t),_=AS(s),m=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[_].filter(Xs).join(`
`),g.length>0&&(g+=`
`),p=[h,_].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(g=[Qd(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[h,Qd(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ai?bS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.encodings_pars_fragment,TS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=bc(o),o=Kd(o,t),o=Zd(o,t),a=bc(a),a=Kd(a,t),a=Zd(a,t),o=Jd(o),a=Jd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+o,M=x+p+a,S=$d(i,i.VERTEX_SHADER,v),T=$d(i,i.FRAGMENT_SHADER,M);if(i.attachShader(m,S),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const y=i.getProgramInfoLog(m).trim(),E=i.getShaderInfoLog(S).trim(),I=i.getShaderInfoLog(T).trim();let D=!0,P=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,S,T);else{const O=jd(i,S,"vertex"),z=jd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+O+`
`+z)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(E===""||I==="")&&(P=!1);P&&(this.diagnostics={runnable:D,programLog:y,vertexShader:{log:E,prefix:g},fragmentShader:{log:I,prefix:p}})}i.deleteShader(S),i.deleteShader(T);let b;this.getUniforms=function(){return b===void 0&&(b=new mo(i,m)),b};let C;return this.getAttributes=function(){return C===void 0&&(C=CS(i,m)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=MS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=T,this}let BS=0;class kS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new GS(e),t.set(e,n)),n}}class GS{constructor(e){this.id=BS++,this.code=e,this.usedTimes=0}}function HS(r,e,t,n,i,s,o){const a=new ap,l=new kS,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return y===1?"uv1":y===2?"uv2":y===3?"uv3":"uv"}function g(y,E,I,D,P){const O=D.fog,z=P.geometry,W=y.isMeshStandardMaterial?D.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),V=H&&H.mapping===Fo?H.image.height:null,Q=_[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const L=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=L!==void 0?L.length:0;let re=0;z.morphAttributes.position!==void 0&&(re=1),z.morphAttributes.normal!==void 0&&(re=2),z.morphAttributes.color!==void 0&&(re=3);let $,J,oe,ae;if(Q){const tt=ii[Q];$=tt.vertexShader,J=tt.fragmentShader}else $=y.vertexShader,J=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const N=r.getRenderTarget(),Ce=P.isInstancedMesh===!0,Ie=!!y.map,le=!!y.matcap,we=!!H,xe=!!y.aoMap,ge=!!y.lightMap,Ue=!!y.bumpMap,rt=!!y.normalMap,qe=!!y.displacementMap,Y=!!y.emissiveMap,at=!!y.metalnessMap,Re=!!y.roughnessMap,Je=y.clearcoat>0,ft=y.iridescence>0,R=y.sheen>0,w=y.transmission>0,K=Je&&!!y.clearcoatMap,ie=Je&&!!y.clearcoatNormalMap,te=Je&&!!y.clearcoatRoughnessMap,ce=ft&&!!y.iridescenceMap,U=ft&&!!y.iridescenceThicknessMap,ee=R&&!!y.sheenColorMap,X=R&&!!y.sheenRoughnessMap,ue=!!y.specularMap,ve=!!y.specularColorMap,Te=!!y.specularIntensityMap,me=w&&!!y.transmissionMap,ye=w&&!!y.thicknessMap,Ne=!!y.gradientMap,pe=!!y.alphaMap,ot=y.alphaTest>0,F=!!y.extensions,j=!!z.attributes.uv1,ne=!!z.attributes.uv2,fe=!!z.attributes.uv3;return{isWebGL2:u,shaderID:Q,shaderName:y.type,vertexShader:$,fragmentShader:J,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,instancing:Ce,instancingColor:Ce&&P.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:N===null?r.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fi,map:Ie,matcap:le,envMap:we,envMapMode:we&&H.mapping,envMapCubeUVHeight:V,aoMap:xe,lightMap:ge,bumpMap:Ue,normalMap:rt,displacementMap:f&&qe,emissiveMap:Y,normalMapObjectSpace:rt&&y.normalMapType===l_,normalMapTangentSpace:rt&&y.normalMapType===Qh,metalnessMap:at,roughnessMap:Re,clearcoat:Je,clearcoatMap:K,clearcoatNormalMap:ie,clearcoatRoughnessMap:te,iridescence:ft,iridescenceMap:ce,iridescenceThicknessMap:U,sheen:R,sheenColorMap:ee,sheenRoughnessMap:X,specularMap:ue,specularColorMap:ve,specularIntensityMap:Te,transmission:w,transmissionMap:me,thicknessMap:ye,gradientMap:Ne,opaque:y.transparent===!1&&y.blending===fs,alphaMap:pe,alphaTest:ot,combine:y.combine,mapUv:Ie&&m(y.map.channel),aoMapUv:xe&&m(y.aoMap.channel),lightMapUv:ge&&m(y.lightMap.channel),bumpMapUv:Ue&&m(y.bumpMap.channel),normalMapUv:rt&&m(y.normalMap.channel),displacementMapUv:qe&&m(y.displacementMap.channel),emissiveMapUv:Y&&m(y.emissiveMap.channel),metalnessMapUv:at&&m(y.metalnessMap.channel),roughnessMapUv:Re&&m(y.roughnessMap.channel),clearcoatMapUv:K&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:U&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:X&&m(y.sheenRoughnessMap.channel),specularMapUv:ue&&m(y.specularMap.channel),specularColorMapUv:ve&&m(y.specularColorMap.channel),specularIntensityMapUv:Te&&m(y.specularIntensityMap.channel),transmissionMapUv:me&&m(y.transmissionMap.channel),thicknessMapUv:ye&&m(y.thicknessMap.channel),alphaMapUv:pe&&m(y.alphaMap.channel),vertexTangents:rt&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:ne,vertexUv3s:fe,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(Ie||pe),fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:Ai,useLegacyLights:r.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===si,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:F&&y.extensions.derivatives===!0,extensionFragDepth:F&&y.extensions.fragDepth===!0,extensionDrawBuffers:F&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:F&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(E,y),v(E,y),E.push(r.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),y.push(a.mask)}function M(y){const E=_[y.type];let I;if(E){const D=ii[E];I=L_.clone(D.uniforms)}else I=y.uniforms;return I}function S(y,E){let I;for(let D=0,P=c.length;D<P;D++){const O=c[D];if(O.cacheKey===E){I=O,++I.usedTimes;break}}return I===void 0&&(I=new zS(r,E,y,s),c.push(I)),I}function T(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:C}}function VS(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function WS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ef(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function tf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,h,_,m,g){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},r[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=m,p.group=g),e++,p}function a(d,f,h,_,m,g){const p=o(d,f,h,_,m,g);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(d,f,h,_,m,g){const p=o(d,f,h,_,m,g);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||WS),n.length>1&&n.sort(f||ef),i.length>1&&i.sort(f||ef)}function u(){for(let d=e,f=r.length;d<f;d++){const h=r[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function XS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new tf,r.set(n,[o])):i>=s.length?(o=new tf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function qS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new it};break;case"SpotLight":t={position:new G,direction:new G,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function YS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let $S=0;function jS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function KS(r,e){const t=new qS,n=YS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new G);const s=new G,o=new St,a=new St;function l(u,d){let f=0,h=0,_=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,g=0,p=0,x=0,v=0,M=0,S=0,T=0,b=0,C=0;u.sort(jS);const y=d===!0?Math.PI:1;for(let I=0,D=u.length;I<D;I++){const P=u[I],O=P.color,z=P.intensity,W=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*z*y,h+=O.g*z*y,_+=O.b*z*y;else if(P.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],z);else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=P.shadow.matrix,M++}i.directional[m]=V,m++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(O).multiplyScalar(z*y),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[p]=V;const Q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[p]=Q.matrix,P.castShadow){const L=n.get(P);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[p]=L,i.spotShadowMap[p]=H,T++}p++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(O).multiplyScalar(z),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=V,x++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*y),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(z*y),V.groundColor.copy(P.groundColor).multiplyScalar(z*y),i.hemi[v]=V,v++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=_;const E=i.hash;(E.directionalLength!==m||E.pointLength!==g||E.spotLength!==p||E.rectAreaLength!==x||E.hemiLength!==v||E.numDirectionalShadows!==M||E.numPointShadows!==S||E.numSpotShadows!==T||E.numSpotMaps!==b)&&(i.directional.length=m,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,E.directionalLength=m,E.pointLength=g,E.spotLength=p,E.rectAreaLength=x,E.hemiLength=v,E.numDirectionalShadows=M,E.numPointShadows=S,E.numSpotShadows=T,E.numSpotMaps=b,i.version=$S++)}function c(u,d){let f=0,h=0,_=0,m=0,g=0;const p=d.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const M=u[x];if(M.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(M.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function nf(r,e){const t=new KS(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ZS(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new nf(r,e),t.set(s,[l])):o>=a.length?(l=new nf(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class JS extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QS extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tM=`uniform sampler2D shadow_pass;
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
}`;function nM(r,e,t){let n=new eu;const i=new We,s=new We,o=new Nt,a=new JS({depthPacking:o_}),l=new QS,c={},u=t.maxTextureSize,d={[Ki]:dn,[dn]:Ki,[si]:si},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:eM,fragmentShader:tM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new hi;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new oi(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let p=this.type;this.render=function(S,T,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const C=r.getRenderTarget(),y=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),I=r.state;I.setBlending(qi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=p!==Mi&&this.type===Mi,P=p===Mi&&this.type!==Mi;for(let O=0,z=S.length;O<z;O++){const W=S[O],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const V=H.getFrameExtents();if(i.multiply(V),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/V.x),i.x=s.x*V.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/V.y),i.y=s.y*V.y,H.mapSize.y=s.y)),H.map===null||D===!0||P===!0){const L=this.type!==Mi?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new Cr(i.x,i.y,L),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const Q=H.getViewportCount();for(let L=0;L<Q;L++){const de=H.getViewport(L);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),I.viewport(o),H.updateMatrices(W,L),n=H.getFrustum(),M(T,b,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Mi&&x(H,b),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(C,y,E)};function x(S,T){const b=e.update(m);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Cr(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,b,f,m,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,b,h,m,null)}function v(S,T,b,C){let y=null;const E=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)y=E;else if(y=b.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=y.uuid,D=T.uuid;let P=c[I];P===void 0&&(P={},c[I]=P);let O=P[D];O===void 0&&(O=y.clone(),P[D]=O),y=O}if(y.visible=T.visible,y.wireframe=T.wireframe,C===Mi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=r.properties.get(y);I.light=b}return y}function M(S,T,b,C,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Mi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const D=e.update(S),P=S.material;if(Array.isArray(P)){const O=D.groups;for(let z=0,W=O.length;z<W;z++){const H=O[z],V=P[H.materialIndex];if(V&&V.visible){const Q=v(S,V,C,y);r.renderBufferDirect(b,null,D,Q,S,H)}}}else if(P.visible){const O=v(S,P,C,y);r.renderBufferDirect(b,null,D,O,S,null)}}const I=S.children;for(let D=0,P=I.length;D<P;D++)M(I[D],T,b,C,y)}}function iM(r,e,t){const n=t.isWebGL2;function i(){let F=!1;const j=new Nt;let ne=null;const fe=new Nt(0,0,0,0);return{setMask:function(be){ne!==be&&!F&&(r.colorMask(be,be,be,be),ne=be)},setLocked:function(be){F=be},setClear:function(be,tt,je,_t,Fe){Fe===!0&&(be*=_t,tt*=_t,je*=_t),j.set(be,tt,je,_t),fe.equals(j)===!1&&(r.clearColor(be,tt,je,_t),fe.copy(j))},reset:function(){F=!1,ne=null,fe.set(-1,0,0,0)}}}function s(){let F=!1,j=null,ne=null,fe=null;return{setTest:function(be){be?N(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(be){j!==be&&!F&&(r.depthMask(be),j=be)},setFunc:function(be){if(ne!==be){switch(be){case Rg:r.depthFunc(r.NEVER);break;case Lg:r.depthFunc(r.ALWAYS);break;case Dg:r.depthFunc(r.LESS);break;case vc:r.depthFunc(r.LEQUAL);break;case Ig:r.depthFunc(r.EQUAL);break;case Ug:r.depthFunc(r.GEQUAL);break;case Og:r.depthFunc(r.GREATER);break;case Ng:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=be}},setLocked:function(be){F=be},setClear:function(be){fe!==be&&(r.clearDepth(be),fe=be)},reset:function(){F=!1,j=null,ne=null,fe=null}}}function o(){let F=!1,j=null,ne=null,fe=null,be=null,tt=null,je=null,_t=null,Fe=null;return{setTest:function(_e){F||(_e?N(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(_e){j!==_e&&!F&&(r.stencilMask(_e),j=_e)},setFunc:function(_e,se,Ae){(ne!==_e||fe!==se||be!==Ae)&&(r.stencilFunc(_e,se,Ae),ne=_e,fe=se,be=Ae)},setOp:function(_e,se,Ae){(tt!==_e||je!==se||_t!==Ae)&&(r.stencilOp(_e,se,Ae),tt=_e,je=se,_t=Ae)},setLocked:function(_e){F=_e},setClear:function(_e){Fe!==_e&&(r.clearStencil(_e),Fe=_e)},reset:function(){F=!1,j=null,ne=null,fe=null,be=null,tt=null,je=null,_t=null,Fe=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},h={},_=new WeakMap,m=[],g=null,p=!1,x=null,v=null,M=null,S=null,T=null,b=null,C=null,y=!1,E=null,I=null,D=null,P=null,O=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,H=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=H>=2);let Q=null,L={};const de=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),$=new Nt().fromArray(de),J=new Nt().fromArray(re);function oe(F,j,ne,fe){const be=new Uint8Array(4),tt=r.createTexture();r.bindTexture(F,tt),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<ne;je++)n&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(j,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(j+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return tt}const ae={};ae[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ae[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(r.DEPTH_TEST),l.setFunc(vc),qe(!1),Y(Hu),N(r.CULL_FACE),Ue(qi);function N(F){f[F]!==!0&&(r.enable(F),f[F]=!0)}function Ce(F){f[F]!==!1&&(r.disable(F),f[F]=!1)}function Ie(F,j){return h[F]!==j?(r.bindFramebuffer(F,j),h[F]=j,n&&(F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=j),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=j)),!0):!1}function le(F,j){let ne=m,fe=!1;if(F)if(ne=_.get(j),ne===void 0&&(ne=[],_.set(j,ne)),F.isWebGLMultipleRenderTargets){const be=F.texture;if(ne.length!==be.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,je=be.length;tt<je;tt++)ne[tt]=r.COLOR_ATTACHMENT0+tt;ne.length=be.length,fe=!0}}else ne[0]!==r.COLOR_ATTACHMENT0&&(ne[0]=r.COLOR_ATTACHMENT0,fe=!0);else ne[0]!==r.BACK&&(ne[0]=r.BACK,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function we(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const xe={[ts]:r.FUNC_ADD,[xg]:r.FUNC_SUBTRACT,[Sg]:r.FUNC_REVERSE_SUBTRACT};if(n)xe[Xu]=r.MIN,xe[qu]=r.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(xe[Xu]=F.MIN_EXT,xe[qu]=F.MAX_EXT)}const ge={[Mg]:r.ZERO,[yg]:r.ONE,[Eg]:r.SRC_COLOR,[Yh]:r.SRC_ALPHA,[Pg]:r.SRC_ALPHA_SATURATE,[Ag]:r.DST_COLOR,[bg]:r.DST_ALPHA,[Tg]:r.ONE_MINUS_SRC_COLOR,[$h]:r.ONE_MINUS_SRC_ALPHA,[Cg]:r.ONE_MINUS_DST_COLOR,[wg]:r.ONE_MINUS_DST_ALPHA};function Ue(F,j,ne,fe,be,tt,je,_t){if(F===qi){p===!0&&(Ce(r.BLEND),p=!1);return}if(p===!1&&(N(r.BLEND),p=!0),F!==vg){if(F!==x||_t!==y){if((v!==ts||T!==ts)&&(r.blendEquation(r.FUNC_ADD),v=ts,T=ts),_t)switch(F){case fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _c:r.blendFunc(r.ONE,r.ONE);break;case Vu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _c:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Vu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,S=null,b=null,C=null,x=F,y=_t}return}be=be||j,tt=tt||ne,je=je||fe,(j!==v||be!==T)&&(r.blendEquationSeparate(xe[j],xe[be]),v=j,T=be),(ne!==M||fe!==S||tt!==b||je!==C)&&(r.blendFuncSeparate(ge[ne],ge[fe],ge[tt],ge[je]),M=ne,S=fe,b=tt,C=je),x=F,y=!1}function rt(F,j){F.side===si?Ce(r.CULL_FACE):N(r.CULL_FACE);let ne=F.side===dn;j&&(ne=!ne),qe(ne),F.blending===fs&&F.transparent===!1?Ue(qi):Ue(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const fe=F.stencilWrite;c.setTest(fe),fe&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){E!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),E=F)}function Y(F){F!==mg?(N(r.CULL_FACE),F!==I&&(F===Hu?r.cullFace(r.BACK):F===gg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),I=F}function at(F){F!==D&&(W&&r.lineWidth(F),D=F)}function Re(F,j,ne){F?(N(r.POLYGON_OFFSET_FILL),(P!==j||O!==ne)&&(r.polygonOffset(j,ne),P=j,O=ne)):Ce(r.POLYGON_OFFSET_FILL)}function Je(F){F?N(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function ft(F){F===void 0&&(F=r.TEXTURE0+z-1),Q!==F&&(r.activeTexture(F),Q=F)}function R(F,j,ne){ne===void 0&&(Q===null?ne=r.TEXTURE0+z-1:ne=Q);let fe=L[ne];fe===void 0&&(fe={type:void 0,texture:void 0},L[ne]=fe),(fe.type!==F||fe.texture!==j)&&(Q!==ne&&(r.activeTexture(ne),Q=ne),r.bindTexture(F,j||ae[F]),fe.type=F,fe.texture=j)}function w(){const F=L[Q];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(F){$.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),$.copy(F))}function ye(F){J.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),J.copy(F))}function Ne(F,j){let ne=d.get(j);ne===void 0&&(ne=new WeakMap,d.set(j,ne));let fe=ne.get(F);fe===void 0&&(fe=r.getUniformBlockIndex(j,F.name),ne.set(F,fe))}function pe(F,j){const fe=d.get(j).get(F);u.get(j)!==fe&&(r.uniformBlockBinding(j,fe,F.__bindingPointIndex),u.set(j,fe))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Q=null,L={},h={},_=new WeakMap,m=[],g=null,p=!1,x=null,v=null,M=null,S=null,T=null,b=null,C=null,y=!1,E=null,I=null,D=null,P=null,O=null,$.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:N,disable:Ce,bindFramebuffer:Ie,drawBuffers:le,useProgram:we,setBlending:Ue,setMaterial:rt,setFlipSided:qe,setCullFace:Y,setLineWidth:at,setPolygonOffset:Re,setScissorTest:Je,activeTexture:ft,bindTexture:R,unbindTexture:w,compressedTexImage2D:K,compressedTexImage3D:ie,texImage2D:ve,texImage3D:Te,updateUBOMapping:Ne,uniformBlockBinding:pe,texStorage2D:X,texStorage3D:ue,texSubImage2D:te,texSubImage3D:ce,compressedTexSubImage2D:U,compressedTexSubImage3D:ee,scissor:me,viewport:ye,reset:ot}}function rM(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,w){return p?new OffscreenCanvas(R,w):ha("canvas")}function v(R,w,K,ie){let te=1;if((R.width>ie||R.height>ie)&&(te=ie/Math.max(R.width,R.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=w?d_:Math.floor,U=ce(te*R.width),ee=ce(te*R.height);m===void 0&&(m=x(U,ee));const X=K?x(U,ee):m;return X.width=U,X.height=ee,X.getContext("2d").drawImage(R,0,0,U,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+U+"x"+ee+")."),X}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return xd(R.width)&&xd(R.height)}function S(R){return a?!1:R.wrapS!==Zn||R.wrapT!==Zn||R.minFilter!==tn&&R.minFilter!==On}function T(R,w){return R.generateMipmaps&&w&&R.minFilter!==tn&&R.minFilter!==On}function b(R){r.generateMipmap(R)}function C(R,w,K,ie,te=!1){if(a===!1)return w;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=w;return w===r.RED&&(K===r.FLOAT&&(ce=r.R32F),K===r.HALF_FLOAT&&(ce=r.R16F),K===r.UNSIGNED_BYTE&&(ce=r.R8)),w===r.RG&&(K===r.FLOAT&&(ce=r.RG32F),K===r.HALF_FLOAT&&(ce=r.RG16F),K===r.UNSIGNED_BYTE&&(ce=r.RG8)),w===r.RGBA&&(K===r.FLOAT&&(ce=r.RGBA32F),K===r.HALF_FLOAT&&(ce=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ce=ie===Xe&&te===!1?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)),(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(R,w,K){return T(R,K)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==On?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){return R===tn||R===Yu||R===al?r.NEAREST:r.LINEAR}function I(R){const w=R.target;w.removeEventListener("dispose",I),P(w),w.isVideoTexture&&_.delete(w)}function D(R){const w=R.target;w.removeEventListener("dispose",D),z(w)}function P(R){const w=n.get(R);if(w.__webglInit===void 0)return;const K=R.source,ie=g.get(K);if(ie){const te=ie[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&O(R),Object.keys(ie).length===0&&g.delete(K)}n.remove(R)}function O(R){const w=n.get(R);r.deleteTexture(w.__webglTexture);const K=R.source,ie=g.get(K);delete ie[w.__cacheKey],o.memory.textures--}function z(R){const w=R.texture,K=n.get(R),ie=n.get(w);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(K.__webglFramebuffer[te]),K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&r.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let te=0;te<K.__webglColorRenderbuffer.length;te++)K.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(K.__webglColorRenderbuffer[te]);K.__webglDepthRenderbuffer&&r.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,ce=w.length;te<ce;te++){const U=n.get(w[te]);U.__webglTexture&&(r.deleteTexture(U.__webglTexture),o.memory.textures--),n.remove(w[te])}n.remove(w),n.remove(R)}let W=0;function H(){W=0}function V(){const R=W;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),W+=1,R}function Q(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function L(R,w){const K=n.get(R);if(R.isVideoTexture&&Je(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(K,R,w);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+w)}function de(R,w){const K=n.get(R);if(R.version>0&&K.__version!==R.version){Ce(K,R,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+w)}function re(R,w){const K=n.get(R);if(R.version>0&&K.__version!==R.version){Ce(K,R,w);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+w)}function $(R,w){const K=n.get(R);if(R.version>0&&K.__version!==R.version){Ie(K,R,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+w)}const J={[Mc]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[yc]:r.MIRRORED_REPEAT},oe={[tn]:r.NEAREST,[Yu]:r.NEAREST_MIPMAP_NEAREST,[al]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Wg]:r.LINEAR_MIPMAP_NEAREST,[da]:r.LINEAR_MIPMAP_LINEAR};function ae(R,w,K){if(K?(r.texParameteri(R,r.TEXTURE_WRAP_S,J[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,J[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,J[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,oe[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,oe[w.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==Zn||w.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,E(w.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==tn&&w.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===tn||w.minFilter!==al&&w.minFilter!==da||w.type===hr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===fa&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function N(R,w){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",I));const ie=w.source;let te=g.get(ie);te===void 0&&(te={},g.set(ie,te));const ce=Q(w);if(ce!==R.__cacheKey){te[ce]===void 0&&(te[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),te[ce].usedTimes++;const U=te[R.__cacheKey];U!==void 0&&(te[R.__cacheKey].usedTimes--,U.usedTimes===0&&O(w)),R.__cacheKey=ce,R.__webglTexture=te[ce].texture}return K}function Ce(R,w,K){let ie=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=r.TEXTURE_3D);const te=N(R,w),ce=w.source;t.bindTexture(ie,R.__webglTexture,r.TEXTURE0+K);const U=n.get(ce);if(ce.version!==U.__version||te===!0){t.activeTexture(r.TEXTURE0+K),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ee=S(w)&&M(w.image)===!1;let X=v(w.image,ee,!1,u);X=ft(w,X);const ue=M(X)||a,ve=s.convert(w.format,w.colorSpace);let Te=s.convert(w.type),me=C(w.internalFormat,ve,Te,w.colorSpace);ae(ie,w,ue);let ye;const Ne=w.mipmaps,pe=a&&w.isVideoTexture!==!0,ot=U.__version===void 0||te===!0,F=y(w,X,ue);if(w.isDepthTexture)me=r.DEPTH_COMPONENT,a?w.type===hr?me=r.DEPTH_COMPONENT32F:w.type===fr?me=r.DEPTH_COMPONENT24:w.type===hs?me=r.DEPTH24_STENCIL8:me=r.DEPTH_COMPONENT16:w.type===hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Sr&&me===r.DEPTH_COMPONENT&&w.type!==Zh&&w.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=fr,Te=s.convert(w.type)),w.format===bs&&me===r.DEPTH_COMPONENT&&(me=r.DEPTH_STENCIL,w.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=hs,Te=s.convert(w.type))),ot&&(pe?t.texStorage2D(r.TEXTURE_2D,1,me,X.width,X.height):t.texImage2D(r.TEXTURE_2D,0,me,X.width,X.height,0,ve,Te,null));else if(w.isDataTexture)if(Ne.length>0&&ue){pe&&ot&&t.texStorage2D(r.TEXTURE_2D,F,me,Ne[0].width,Ne[0].height);for(let j=0,ne=Ne.length;j<ne;j++)ye=Ne[j],pe?t.texSubImage2D(r.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,Te,ye.data):t.texImage2D(r.TEXTURE_2D,j,me,ye.width,ye.height,0,ve,Te,ye.data);w.generateMipmaps=!1}else pe?(ot&&t.texStorage2D(r.TEXTURE_2D,F,me,X.width,X.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,X.width,X.height,ve,Te,X.data)):t.texImage2D(r.TEXTURE_2D,0,me,X.width,X.height,0,ve,Te,X.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){pe&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,F,me,Ne[0].width,Ne[0].height,X.depth);for(let j=0,ne=Ne.length;j<ne;j++)ye=Ne[j],w.format!==Jn?ve!==null?pe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,X.depth,ve,ye.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,me,ye.width,ye.height,X.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,X.depth,ve,Te,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,me,ye.width,ye.height,X.depth,0,ve,Te,ye.data)}else{pe&&ot&&t.texStorage2D(r.TEXTURE_2D,F,me,Ne[0].width,Ne[0].height);for(let j=0,ne=Ne.length;j<ne;j++)ye=Ne[j],w.format!==Jn?ve!==null?pe?t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,j,me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(r.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,Te,ye.data):t.texImage2D(r.TEXTURE_2D,j,me,ye.width,ye.height,0,ve,Te,ye.data)}else if(w.isDataArrayTexture)pe?(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,F,me,X.width,X.height,X.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ve,Te,X.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,X.width,X.height,X.depth,0,ve,Te,X.data);else if(w.isData3DTexture)pe?(ot&&t.texStorage3D(r.TEXTURE_3D,F,me,X.width,X.height,X.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ve,Te,X.data)):t.texImage3D(r.TEXTURE_3D,0,me,X.width,X.height,X.depth,0,ve,Te,X.data);else if(w.isFramebufferTexture){if(ot)if(pe)t.texStorage2D(r.TEXTURE_2D,F,me,X.width,X.height);else{let j=X.width,ne=X.height;for(let fe=0;fe<F;fe++)t.texImage2D(r.TEXTURE_2D,fe,me,j,ne,0,ve,Te,null),j>>=1,ne>>=1}}else if(Ne.length>0&&ue){pe&&ot&&t.texStorage2D(r.TEXTURE_2D,F,me,Ne[0].width,Ne[0].height);for(let j=0,ne=Ne.length;j<ne;j++)ye=Ne[j],pe?t.texSubImage2D(r.TEXTURE_2D,j,0,0,ve,Te,ye):t.texImage2D(r.TEXTURE_2D,j,me,ve,Te,ye);w.generateMipmaps=!1}else pe?(ot&&t.texStorage2D(r.TEXTURE_2D,F,me,X.width,X.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Te,X)):t.texImage2D(r.TEXTURE_2D,0,me,ve,Te,X);T(w,ue)&&b(ie),U.__version=ce.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Ie(R,w,K){if(w.image.length!==6)return;const ie=N(R,w),te=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+K);const ce=n.get(te);if(te.version!==ce.__version||ie===!0){t.activeTexture(r.TEXTURE0+K),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const U=w.isCompressedTexture||w.image[0].isCompressedTexture,ee=w.image[0]&&w.image[0].isDataTexture,X=[];for(let j=0;j<6;j++)!U&&!ee?X[j]=v(w.image[j],!1,!0,c):X[j]=ee?w.image[j].image:w.image[j],X[j]=ft(w,X[j]);const ue=X[0],ve=M(ue)||a,Te=s.convert(w.format,w.colorSpace),me=s.convert(w.type),ye=C(w.internalFormat,Te,me,w.colorSpace),Ne=a&&w.isVideoTexture!==!0,pe=ce.__version===void 0||ie===!0;let ot=y(w,ue,ve);ae(r.TEXTURE_CUBE_MAP,w,ve);let F;if(U){Ne&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ye,ue.width,ue.height);for(let j=0;j<6;j++){F=X[j].mipmaps;for(let ne=0;ne<F.length;ne++){const fe=F[ne];w.format!==Jn?Te!==null?Ne?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,fe.width,fe.height,Te,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,fe.width,fe.height,Te,me,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,ye,fe.width,fe.height,0,Te,me,fe.data)}}}else{F=w.mipmaps,Ne&&pe&&(F.length>0&&ot++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ye,X[0].width,X[0].height));for(let j=0;j<6;j++)if(ee){Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,X[j].width,X[j].height,Te,me,X[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ye,X[j].width,X[j].height,0,Te,me,X[j].data);for(let ne=0;ne<F.length;ne++){const be=F[ne].image[j].image;Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,be.width,be.height,Te,me,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,ye,be.width,be.height,0,Te,me,be.data)}}else{Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,me,X[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ye,Te,me,X[j]);for(let ne=0;ne<F.length;ne++){const fe=F[ne];Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,Te,me,fe.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,ye,Te,me,fe.image[j])}}}T(w,ve)&&b(r.TEXTURE_CUBE_MAP),ce.__version=te.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function le(R,w,K,ie,te){const ce=s.convert(K.format,K.colorSpace),U=s.convert(K.type),ee=C(K.internalFormat,ce,U,K.colorSpace);n.get(w).__hasExternalTextures||(te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,0,ee,w.width,w.height,w.depth,0,ce,U,null):t.texImage2D(te,0,ee,w.width,w.height,0,ce,U,null)),t.bindFramebuffer(r.FRAMEBUFFER,R),Re(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,te,n.get(K).__webglTexture,0,at(w)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,te,n.get(K).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,w,K){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let ie=r.DEPTH_COMPONENT16;if(K||Re(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===hr?ie=r.DEPTH_COMPONENT32F:te.type===fr&&(ie=r.DEPTH_COMPONENT24));const ce=at(w);Re(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,ie,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,ie,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const ie=at(w);K&&Re(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,w.width,w.height):Re(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<ie.length;te++){const ce=ie[te],U=s.convert(ce.format,ce.colorSpace),ee=s.convert(ce.type),X=C(ce.internalFormat,U,ee,ce.colorSpace),ue=at(w);K&&Re(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,X,w.width,w.height):Re(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,X,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,X,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);const ie=n.get(w.depthTexture).__webglTexture,te=at(w);if(w.depthTexture.format===Sr)Re(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(w.depthTexture.format===bs)Re(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ge(R){const w=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");xe(w.__webglFramebuffer,R)}else if(K){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=r.createRenderbuffer(),we(w.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),we(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,w,K){const ie=n.get(R);w!==void 0&&le(ie.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),K!==void 0&&ge(R)}function rt(R){const w=R.texture,K=n.get(R),ie=n.get(w);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=w.version,o.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,U=M(R)||a;if(te){K.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)K.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(K.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const ee=R.texture;for(let X=0,ue=ee.length;X<ue;X++){const ve=n.get(ee[X]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Re(R)===!1){const ee=ce?w:[w];K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let X=0;X<ee.length;X++){const ue=ee[X];K.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[X]);const ve=s.convert(ue.format,ue.colorSpace),Te=s.convert(ue.type),me=C(ue.internalFormat,ve,Te,ue.colorSpace,R.isXRRenderTarget===!0),ye=at(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,me,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,K.__webglColorRenderbuffer[X])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),we(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),ae(r.TEXTURE_CUBE_MAP,w,U);for(let ee=0;ee<6;ee++)le(K.__webglFramebuffer[ee],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee);T(w,U)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ee=R.texture;for(let X=0,ue=ee.length;X<ue;X++){const ve=ee[X],Te=n.get(ve);t.bindTexture(r.TEXTURE_2D,Te.__webglTexture),ae(r.TEXTURE_2D,ve,U),le(K.__webglFramebuffer,R,ve,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D),T(ve,U)&&b(r.TEXTURE_2D)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ee=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ee,ie.__webglTexture),ae(ee,w,U),le(K.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,ee),T(w,U)&&b(ee),t.unbindTexture()}R.depthBuffer&&ge(R)}function qe(R){const w=M(R)||a,K=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,te=K.length;ie<te;ie++){const ce=K[ie];if(T(ce,w)){const U=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ee=n.get(ce).__webglTexture;t.bindTexture(U,ee),b(U),t.unbindTexture()}}}function Y(R){if(a&&R.samples>0&&Re(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],K=R.width,ie=R.height;let te=r.COLOR_BUFFER_BIT;const ce=[],U=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=n.get(R),X=R.isWebGLMultipleRenderTargets===!0;if(X)for(let ue=0;ue<w.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){ce.push(r.COLOR_ATTACHMENT0+ue),R.depthBuffer&&ce.push(U);const ve=ee.__ignoreDepthValues!==void 0?ee.__ignoreDepthValues:!1;if(ve===!1&&(R.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),X&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ue]),ve===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[U]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[U])),X){const Te=n.get(w[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Te,0)}r.blitFramebuffer(0,0,K,ie,0,0,K,ie,te,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),X)for(let ue=0;ue<w.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ue]);const ve=n.get(w[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}}function at(R){return Math.min(d,R.samples)}function Re(R){const w=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Je(R){const w=o.render.frame;_.get(R)!==w&&(_.set(R,w),R.update())}function ft(R,w){const K=R.colorSpace,ie=R.format,te=R.type;return R.isCompressedTexture===!0||R.format===Ec||K!==fi&&K!==yr&&(K===Xe?a===!1?e.has("EXT_sRGB")===!0&&ie===Jn?(R.format=Ec,R.minFilter=On,R.generateMipmaps=!1):w=np.sRGBToLinear(w):(ie!==Jn||te!==Ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=L,this.setTexture2DArray=de,this.setTexture3D=re,this.setTextureCube=$,this.rebindTextures=Ue,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Re}function sM(r,e,t){const n=t.isWebGL2;function i(s,o=yr){let a;if(s===Ar)return r.UNSIGNED_BYTE;if(s===$g)return r.UNSIGNED_SHORT_4_4_4_4;if(s===jg)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Xg)return r.BYTE;if(s===qg)return r.SHORT;if(s===Zh)return r.UNSIGNED_SHORT;if(s===Yg)return r.INT;if(s===fr)return r.UNSIGNED_INT;if(s===hr)return r.FLOAT;if(s===fa)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Kg)return r.ALPHA;if(s===Jn)return r.RGBA;if(s===Zg)return r.LUMINANCE;if(s===Jg)return r.LUMINANCE_ALPHA;if(s===Sr)return r.DEPTH_COMPONENT;if(s===bs)return r.DEPTH_STENCIL;if(s===Ec)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Qg)return r.RED;if(s===e_)return r.RED_INTEGER;if(s===t_)return r.RG;if(s===n_)return r.RG_INTEGER;if(s===i_)return r.RGBA_INTEGER;if(s===ol||s===ll||s===cl||s===ul)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ol)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ol)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ll)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ul)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$u||s===ju||s===Ku||s===Zu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$u)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ju)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ku)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===r_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ju||s===Qu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ju)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qu)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ed||s===td||s===nd||s===id||s===rd||s===sd||s===ad||s===od||s===ld||s===cd||s===ud||s===dd||s===fd||s===hd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ed)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===td)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===id)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ad)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===od)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ld)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ud)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hd)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===dl)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===s_||s===pd||s===md||s===gd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===dl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===pd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===md)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hs?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class aM extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qa extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oM={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lM extends fn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Sr,u!==Sr&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sr&&(n=fr),n===void 0&&u===bs&&(n=hs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1}}class cM extends Lr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const m=t.getContextAttributes();let g=null,p=null;const x=[],v=[],M=new Set,S=new Map,T=new En;T.layers.enable(1),T.viewport=new Nt;const b=new En;b.layers.enable(2),b.viewport=new Nt;const C=[T,b],y=new aM;y.layers.enable(1),y.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=x[$];return J===void 0&&(J=new Ol,x[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=x[$];return J===void 0&&(J=new Ol,x[$]=J),J.getGripSpace()},this.getHand=function($){let J=x[$];return J===void 0&&(J=new Ol,x[$]=J),J.getHandSpace()};function D($){const J=v.indexOf($.inputSource);if(J===-1)return;const oe=x[J];oe!==void 0&&(oe.update($.inputSource,$.frame,c||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function P(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",O);for(let $=0;$<x.length;$++){const J=v[$];J!==null&&(v[$]=null,x[$].disconnect(J))}E=null,I=null,e.setRenderTarget(g),h=null,f=null,d=null,i=null,p=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",P),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:h}),p=new Cr(h.framebufferWidth,h.framebufferHeight,{format:Jn,type:Ar,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,oe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?bs:Sr,oe=m.stencil?hs:fr);const N={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(N),i.updateRenderState({layers:[f]}),p=new Cr(f.textureWidth,f.textureHeight,{format:Jn,type:Ar,depthTexture:new lM(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ce=e.properties.get(p);Ce.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O($){for(let J=0;J<$.removed.length;J++){const oe=$.removed[J],ae=v.indexOf(oe);ae>=0&&(v[ae]=null,x[ae].disconnect(oe))}for(let J=0;J<$.added.length;J++){const oe=$.added[J];let ae=v.indexOf(oe);if(ae===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=v.length){v.push(oe),ae=Ce;break}else if(v[Ce]===null){v[Ce]=oe,ae=Ce;break}if(ae===-1)break}const N=x[ae];N&&N.connect(oe)}}const z=new G,W=new G;function H($,J,oe){z.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(oe.matrixWorld);const ae=z.distanceTo(W),N=J.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,Ie=N[14]/(N[10]-1),le=N[14]/(N[10]+1),we=(N[9]+1)/N[5],xe=(N[9]-1)/N[5],ge=(N[8]-1)/N[0],Ue=(Ce[8]+1)/Ce[0],rt=Ie*ge,qe=Ie*Ue,Y=ae/(-ge+Ue),at=Y*-ge;J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(at),$.translateZ(Y),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const Re=Ie+Y,Je=le+Y,ft=rt-at,R=qe+(ae-at),w=we*le/Je*Re,K=xe*le/Je*Re;$.projectionMatrix.makePerspective(ft,R,w,K,Re,Je),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function V($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;y.near=b.near=T.near=$.near,y.far=b.far=T.far=$.far,(E!==y.near||I!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,I=y.far);const J=$.parent,oe=y.cameras;V(y,J);for(let ae=0;ae<oe.length;ae++)V(oe[ae],J);oe.length===2?H(y,T,b):y.projectionMatrix.copy(T.projectionMatrix),Q($,y,J)};function Q($,J,oe){oe===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0);const ae=$.children;for(let N=0,Ce=ae.length;N<Ce;N++)ae[N].updateMatrixWorld(!0);$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Tc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.getPlanes=function(){return M};let L=null;function de($,J){if(u=J.getViewerPose(c||o),_=J,u!==null){const oe=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let ae=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let N=0;N<oe.length;N++){const Ce=oe[N];let Ie=null;if(h!==null)Ie=h.getViewport(Ce);else{const we=d.getViewSubImage(f,Ce);Ie=we.viewport,N===0&&(e.setRenderTargetTextures(p,we.colorTexture,f.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(p))}let le=C[N];le===void 0&&(le=new En,le.layers.enable(N),le.viewport=new Nt,C[N]=le),le.matrix.fromArray(Ce.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ce.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),N===0&&(y.matrix.copy(le.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(le)}}for(let oe=0;oe<x.length;oe++){const ae=v[oe],N=x[oe];ae!==null&&N!==void 0&&N.update(ae,J,c||o)}if(L&&L($,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let oe=null;for(const ae of M)J.detectedPlanes.has(ae)||(oe===null&&(oe=[]),oe.push(ae));if(oe!==null)for(const ae of oe)M.delete(ae),S.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of J.detectedPlanes)if(!M.has(ae))M.add(ae),S.set(ae,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const N=S.get(ae);ae.lastChangedTime>N&&(S.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}_=null}const re=new pp;re.setAnimationLoop(de),this.setAnimationLoop=function($){L=$},this.dispose=function(){}}}function uM(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,dp(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),m(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dM(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(_(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",g));const S=v.program;n.updateUBOMapping(x,S);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function u(x){const v=d();x.__bindingPointIndex=v;const M=r.createBuffer(),S=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,S,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],M=x.uniforms,S=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let T=0,b=M.length;T<b;T++){const C=M[T];if(h(C,T,S)===!0){const y=C.__offset,E=Array.isArray(C.value)?C.value:[C.value];let I=0;for(let D=0;D<E.length;D++){const P=E[D],O=m(P);typeof P=="number"?(C.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,y+I,C.__data)):P.isMatrix3?(C.__data[0]=P.elements[0],C.__data[1]=P.elements[1],C.__data[2]=P.elements[2],C.__data[3]=P.elements[0],C.__data[4]=P.elements[3],C.__data[5]=P.elements[4],C.__data[6]=P.elements[5],C.__data[7]=P.elements[0],C.__data[8]=P.elements[6],C.__data[9]=P.elements[7],C.__data[10]=P.elements[8],C.__data[11]=P.elements[0]):(P.toArray(C.__data,I),I+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,y,C.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(x,v,M){const S=x.value;if(M[v]===void 0){if(typeof S=="number")M[v]=S;else{const T=Array.isArray(S)?S:[S],b=[];for(let C=0;C<T.length;C++)b.push(T[C].clone());M[v]=b}return!0}else if(typeof S=="number"){if(M[v]!==S)return M[v]=S,!0}else{const T=Array.isArray(M[v])?M[v]:[M[v]],b=Array.isArray(S)?S:[S];for(let C=0;C<T.length;C++){const y=T[C];if(y.equals(b[C])===!1)return y.copy(b[C]),!0}}return!1}function _(x){const v=x.uniforms;let M=0;const S=16;let T=0;for(let b=0,C=v.length;b<C;b++){const y=v[b],E={boundary:0,storage:0},I=Array.isArray(y.value)?y.value:[y.value];for(let D=0,P=I.length;D<P;D++){const O=I[D],z=m(O);E.boundary+=z.boundary,E.storage+=z.storage}if(y.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=M,b>0){T=M%S;const D=S-T;T!==0&&D-E.boundary<0&&(M+=S-T,y.__offset=M)}M+=E.storage}return T=M%S,T>0&&(M+=S-T),x.__size=M,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}function fM(){const r=ha("canvas");return r.style.display="block",r}class iu{constructor(e={}){const{canvas:t=fM(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let h=null,_=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Xe,this.useLegacyLights=!0,this.toneMapping=Ai,this.toneMappingExposure=1;const p=this;let x=!1,v=0,M=0,S=null,T=-1,b=null;const C=new Nt,y=new Nt;let E=null,I=t.width,D=t.height,P=1,O=null,z=null;const W=new Nt(0,0,I,D),H=new Nt(0,0,I,D);let V=!1;const Q=new eu;let L=!1,de=!1,re=null;const $=new St,J=new G,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return S===null?P:1}let N=n;function Ce(A,k){for(let q=0;q<A.length;q++){const B=A[q],Z=t.getContext(B,k);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),N=Ce(k,A),N===null)throw Ce(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ie,le,we,xe,ge,Ue,rt,qe,Y,at,Re,Je,ft,R,w,K,ie,te,ce,U,ee,X,ue,ve;function Te(){Ie=new Ex(N),le=new _x(N,Ie,e),Ie.init(le),X=new sM(N,Ie,le),we=new iM(N,Ie,le),xe=new wx(N),ge=new VS,Ue=new rM(N,Ie,we,ge,le,X,xe),rt=new xx(p),qe=new yx(p),Y=new z_(N,le),ue=new mx(N,Ie,Y,le),at=new Tx(N,Y,xe,ue),Re=new Rx(N,at,Y,xe),ce=new Px(N,le,Ue),K=new vx(ge),Je=new HS(p,rt,qe,Ie,le,ue,K),ft=new uM(p,ge),R=new XS,w=new ZS(Ie,le),te=new px(p,rt,qe,we,Re,f,l),ie=new nM(p,Re,le),ve=new dM(N,xe,le,we),U=new gx(N,Ie,xe,le),ee=new bx(N,Ie,xe,le),xe.programs=Je.programs,p.capabilities=le,p.extensions=Ie,p.properties=ge,p.renderLists=R,p.shadowMap=ie,p.state=we,p.info=xe}Te();const me=new cM(p,N);this.xr=me,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(I,D,!1))},this.getSize=function(A){return A.set(I,D)},this.setSize=function(A,k,q=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,D=k,t.width=Math.floor(A*P),t.height=Math.floor(k*P),q===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(I*P,D*P).floor()},this.setDrawingBufferSize=function(A,k,q){I=A,D=k,P=q,t.width=Math.floor(A*q),t.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,k,q,B){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,k,q,B),we.viewport(C.copy(W).multiplyScalar(P).floor())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,k,q,B){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,k,q,B),we.scissor(y.copy(H).multiplyScalar(P).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(A){we.setScissorTest(V=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,k=!0,q=!0){let B=0;A&&(B|=N.COLOR_BUFFER_BIT),k&&(B|=N.DEPTH_BUFFER_BIT),q&&(B|=N.STENCIL_BUFFER_BIT),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),R.dispose(),w.dispose(),ge.dispose(),rt.dispose(),qe.dispose(),Re.dispose(),ue.dispose(),ve.dispose(),Je.dispose(),me.dispose(),me.removeEventListener("sessionstart",be),me.removeEventListener("sessionend",tt),re&&(re.dispose(),re=null),je.stop()};function ye(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=xe.autoReset,k=ie.enabled,q=ie.autoUpdate,B=ie.needsUpdate,Z=ie.type;Te(),xe.autoReset=A,ie.enabled=k,ie.autoUpdate=q,ie.needsUpdate=B,ie.type=Z}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const k=A.target;k.removeEventListener("dispose",ot),F(k)}function F(A){j(A),ge.remove(A)}function j(A){const k=ge.get(A).programs;k!==void 0&&(k.forEach(function(q){Je.releaseProgram(q)}),A.isShaderMaterial&&Je.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,B,Z,Se){k===null&&(k=oe);const Me=Z.isMesh&&Z.matrixWorld.determinant()<0,Ee=Et(A,k,q,B,Z);we.setMaterial(B,Me);let De=q.index,He=1;B.wireframe===!0&&(De=at.getWireframeAttribute(q),He=2);const ke=q.drawRange,Le=q.attributes.position;let Be=ke.start*He,ut=(ke.start+ke.count)*He;Se!==null&&(Be=Math.max(Be,Se.start*He),ut=Math.min(ut,(Se.start+Se.count)*He)),De!==null?(Be=Math.max(Be,0),ut=Math.min(ut,De.count)):Le!=null&&(Be=Math.max(Be,0),ut=Math.min(ut,Le.count));const jt=ut-Be;if(jt<0||jt===1/0)return;ue.setup(Z,B,Ee,q,De);let ei,dt=U;if(De!==null&&(ei=Y.get(De),dt=ee,dt.setIndex(ei)),Z.isMesh)B.wireframe===!0?(we.setLineWidth(B.wireframeLinewidth*ae()),dt.setMode(N.LINES)):dt.setMode(N.TRIANGLES);else if(Z.isLine){let Ge=B.linewidth;Ge===void 0&&(Ge=1),we.setLineWidth(Ge*ae()),Z.isLineSegments?dt.setMode(N.LINES):Z.isLineLoop?dt.setMode(N.LINE_LOOP):dt.setMode(N.LINE_STRIP)}else Z.isPoints?dt.setMode(N.POINTS):Z.isSprite&&dt.setMode(N.TRIANGLES);if(Z.isInstancedMesh)dt.renderInstances(Be,jt,Z.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,pi=Math.min(q.instanceCount,Ge);dt.renderInstances(Be,jt,pi)}else dt.render(Be,jt)},this.compile=function(A,k){function q(B,Z,Se){B.transparent===!0&&B.side===si&&B.forceSinglePass===!1?(B.side=dn,B.needsUpdate=!0,Oe(B,Z,Se),B.side=Ki,B.needsUpdate=!0,Oe(B,Z,Se),B.side=si):Oe(B,Z,Se)}_=w.get(A),_.init(),g.push(_),A.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights(p.useLegacyLights),A.traverse(function(B){const Z=B.material;if(Z)if(Array.isArray(Z))for(let Se=0;Se<Z.length;Se++){const Me=Z[Se];q(Me,A,B)}else q(Z,A,B)}),g.pop(),_=null};let ne=null;function fe(A){ne&&ne(A)}function be(){je.stop()}function tt(){je.start()}const je=new pp;je.setAnimationLoop(fe),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(A){ne=A,me.setAnimationLoop(A),A===null?je.stop():je.start()},me.addEventListener("sessionstart",be),me.addEventListener("sessionend",tt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,k,S),_=w.get(A,g.length),_.init(),g.push(_),$.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix($),de=this.localClippingEnabled,L=K.init(this.clippingPlanes,de),h=R.get(A,m.length),h.init(),m.push(h),_t(A,k,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(O,z),L===!0&&K.beginShadows();const q=_.state.shadowsArray;if(ie.render(q,A,k),L===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,A),_.setupLights(p.useLegacyLights),k.isArrayCamera){const B=k.cameras;for(let Z=0,Se=B.length;Z<Se;Z++){const Me=B[Z];Fe(h,A,Me,Me.viewport)}}else Fe(h,A,k);S!==null&&(Ue.updateMultisampleRenderTarget(S),Ue.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(p,A,k),ue.resetDefaultState(),T=-1,b=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function _t(A,k,q,B){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){B&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);const Me=Re.update(A),Ee=A.material;Ee.visible&&h.push(A,Me,Ee,q,J.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==xe.render.frame&&(A.skeleton.update(),A.skeleton.frame=xe.render.frame);const Me=Re.update(A),Ee=A.material;if(B&&(Me.boundingSphere===null&&Me.computeBoundingSphere(),J.copy(Me.boundingSphere.center).applyMatrix4(A.matrixWorld).applyMatrix4($)),Array.isArray(Ee)){const De=Me.groups;for(let He=0,ke=De.length;He<ke;He++){const Le=De[He],Be=Ee[Le.materialIndex];Be&&Be.visible&&h.push(A,Me,Be,q,J.z,Le)}}else Ee.visible&&h.push(A,Me,Ee,q,J.z,null)}}const Se=A.children;for(let Me=0,Ee=Se.length;Me<Ee;Me++)_t(Se[Me],k,q,B)}function Fe(A,k,q,B){const Z=A.opaque,Se=A.transmissive,Me=A.transparent;_.setupLightsView(q),L===!0&&K.setGlobalState(p.clippingPlanes,q),Se.length>0&&_e(Z,Se,k,q),B&&we.viewport(C.copy(B)),Z.length>0&&se(Z,k,q),Se.length>0&&se(Se,k,q),Me.length>0&&se(Me,k,q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function _e(A,k,q,B){if(re===null){const Ee=le.isWebGL2;re=new Cr(1024,1024,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?fa:Ar,minFilter:da,samples:Ee&&a===!0?4:0})}const Z=p.getRenderTarget();p.setRenderTarget(re),p.clear();const Se=p.toneMapping;p.toneMapping=Ai,se(A,q,B),Ue.updateMultisampleRenderTarget(re),Ue.updateRenderTargetMipmap(re);let Me=!1;for(let Ee=0,De=k.length;Ee<De;Ee++){const He=k[Ee],ke=He.object,Le=He.geometry,Be=He.material,ut=He.group;if(Be.side===si&&ke.layers.test(B.layers)){const jt=Be.side;Be.side=dn,Be.needsUpdate=!0,Ae(ke,q,B,Le,Be,ut),Be.side=jt,Be.needsUpdate=!0,Me=!0}}Me===!0&&(Ue.updateMultisampleRenderTarget(re),Ue.updateRenderTargetMipmap(re)),p.setRenderTarget(Z),p.toneMapping=Se}function se(A,k,q){const B=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Se=A.length;Z<Se;Z++){const Me=A[Z],Ee=Me.object,De=Me.geometry,He=B===null?Me.material:B,ke=Me.group;Ee.layers.test(q.layers)&&Ae(Ee,k,q,De,He,ke)}}function Ae(A,k,q,B,Z,Se){A.onBeforeRender(p,k,q,B,Z,Se),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(p,k,q,B,A,Se),Z.transparent===!0&&Z.side===si&&Z.forceSinglePass===!1?(Z.side=dn,Z.needsUpdate=!0,p.renderBufferDirect(q,k,B,Z,A,Se),Z.side=Ki,Z.needsUpdate=!0,p.renderBufferDirect(q,k,B,Z,A,Se),Z.side=si):p.renderBufferDirect(q,k,B,Z,A,Se),A.onAfterRender(p,k,q,B,Z,Se)}function Oe(A,k,q){k.isScene!==!0&&(k=oe);const B=ge.get(A),Z=_.state.lights,Se=_.state.shadowsArray,Me=Z.state.version,Ee=Je.getParameters(A,Z.state,Se,k,q),De=Je.getProgramCacheKey(Ee);let He=B.programs;B.environment=A.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(A.isMeshStandardMaterial?qe:rt).get(A.envMap||B.environment),He===void 0&&(A.addEventListener("dispose",ot),He=new Map,B.programs=He);let ke=He.get(De);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===Me)return Ve(A,Ee),ke}else Ee.uniforms=Je.getUniforms(A),A.onBuild(q,Ee,p),A.onBeforeCompile(Ee,p),ke=Je.acquireProgram(Ee,De),He.set(De,ke),B.uniforms=Ee.uniforms;const Le=B.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=K.uniform),Ve(A,Ee),B.needsLights=ht(A),B.lightsStateVersion=Me,B.needsLights&&(Le.ambientLightColor.value=Z.state.ambient,Le.lightProbe.value=Z.state.probe,Le.directionalLights.value=Z.state.directional,Le.directionalLightShadows.value=Z.state.directionalShadow,Le.spotLights.value=Z.state.spot,Le.spotLightShadows.value=Z.state.spotShadow,Le.rectAreaLights.value=Z.state.rectArea,Le.ltc_1.value=Z.state.rectAreaLTC1,Le.ltc_2.value=Z.state.rectAreaLTC2,Le.pointLights.value=Z.state.point,Le.pointLightShadows.value=Z.state.pointShadow,Le.hemisphereLights.value=Z.state.hemi,Le.directionalShadowMap.value=Z.state.directionalShadowMap,Le.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Le.spotShadowMap.value=Z.state.spotShadowMap,Le.spotLightMatrix.value=Z.state.spotLightMatrix,Le.spotLightMap.value=Z.state.spotLightMap,Le.pointShadowMap.value=Z.state.pointShadowMap,Le.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Be=ke.getUniforms(),ut=mo.seqWithValue(Be.seq,Le);return B.currentProgram=ke,B.uniformsList=ut,ke}function Ve(A,k){const q=ge.get(A);q.outputColorSpace=k.outputColorSpace,q.instancing=k.instancing,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Et(A,k,q,B,Z){k.isScene!==!0&&(k=oe),Ue.resetTextureUnits();const Se=k.fog,Me=B.isMeshStandardMaterial?k.environment:null,Ee=S===null?p.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:fi,De=(B.isMeshStandardMaterial?qe:rt).get(B.envMap||Me),He=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!B.normalMap&&!!q.attributes.tangent,Le=!!q.morphAttributes.position,Be=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color,jt=B.toneMapped?p.toneMapping:Ai,ei=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=ei!==void 0?ei.length:0,Ge=ge.get(B),pi=_.state.lights;if(L===!0&&(de===!0||A!==b)){const pn=A===b&&B.id===T;K.setState(B,A,pn)}let Lt=!1;B.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==pi.state.version||Ge.outputColorSpace!==Ee||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==De||B.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==K.numPlanes||Ge.numIntersection!==K.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==ke||Ge.morphTargets!==Le||Ge.morphNormals!==Be||Ge.morphColors!==ut||Ge.toneMapping!==jt||le.isWebGL2===!0&&Ge.morphTargetsCount!==dt)&&(Lt=!0):(Lt=!0,Ge.__version=B.version);let Ji=Ge.currentProgram;Lt===!0&&(Ji=Oe(B,k,Z));let ou=!1,Rs=!1,Go=!1;const Kt=Ji.getUniforms(),Qi=Ge.uniforms;if(we.useProgram(Ji.program)&&(ou=!0,Rs=!0,Go=!0),B.id!==T&&(T=B.id,Rs=!0),ou||b!==A){if(Kt.setValue(N,"projectionMatrix",A.projectionMatrix),le.logarithmicDepthBuffer&&Kt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),b!==A&&(b=A,Rs=!0,Go=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const pn=Kt.map.cameraPosition;pn!==void 0&&pn.setValue(N,J.setFromMatrixPosition(A.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Kt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Z.isSkinnedMesh)&&Kt.setValue(N,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){Kt.setOptional(N,Z,"bindMatrix"),Kt.setOptional(N,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(le.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Kt.setValue(N,"boneTexture",pn.boneTexture,Ue),Kt.setValue(N,"boneTextureSize",pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ho=q.morphAttributes;if((Ho.position!==void 0||Ho.normal!==void 0||Ho.color!==void 0&&le.isWebGL2===!0)&&ce.update(Z,q,Ji),(Rs||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,Kt.setValue(N,"receiveShadow",Z.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Qi.envMap.value=De,Qi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Rs&&(Kt.setValue(N,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&st(Qi,Go),Se&&B.fog===!0&&ft.refreshFogUniforms(Qi,Se),ft.refreshMaterialUniforms(Qi,B,P,D,re),mo.upload(N,Ge.uniformsList,Qi,Ue)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mo.upload(N,Ge.uniformsList,Qi,Ue),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Kt.setValue(N,"center",Z.center),Kt.setValue(N,"modelViewMatrix",Z.modelViewMatrix),Kt.setValue(N,"normalMatrix",Z.normalMatrix),Kt.setValue(N,"modelMatrix",Z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const pn=B.uniformsGroups;for(let Vo=0,Dp=pn.length;Vo<Dp;Vo++)if(le.isWebGL2){const lu=pn[Vo];ve.update(lu,Ji),ve.bind(lu,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function st(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ht(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,k,q){ge.get(A.texture).__webglTexture=k,ge.get(A.depthTexture).__webglTexture=q;const B=ge.get(A);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=q===void 0,B.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const q=ge.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,q=0){S=A,v=k,M=q;let B=!0,Z=null,Se=!1,Me=!1;if(A){const De=ge.get(A);De.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(N.FRAMEBUFFER,null),B=!1):De.__webglFramebuffer===void 0?Ue.setupRenderTarget(A):De.__hasExternalTextures&&Ue.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture);const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const ke=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=ke[k],Se=!0):le.isWebGL2&&A.samples>0&&Ue.useMultisampledRTT(A)===!1?Z=ge.get(A).__webglMultisampledFramebuffer:Z=ke,C.copy(A.viewport),y.copy(A.scissor),E=A.scissorTest}else C.copy(W).multiplyScalar(P).floor(),y.copy(H).multiplyScalar(P).floor(),E=V;if(we.bindFramebuffer(N.FRAMEBUFFER,Z)&&le.drawBuffers&&B&&we.drawBuffers(A,Z),we.viewport(C),we.scissor(y),we.setScissorTest(E),Se){const De=ge.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,q)}else if(Me){const De=ge.get(A.texture),He=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,q||0,He)}T=-1},this.readRenderTargetPixels=function(A,k,q,B,Z,Se,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){we.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const De=A.texture,He=De.format,ke=De.type;if(He!==Jn&&X.convert(He)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=ke===fa&&(Ie.has("EXT_color_buffer_half_float")||le.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(ke!==Ar&&X.convert(ke)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===hr&&(le.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-B&&q>=0&&q<=A.height-Z&&N.readPixels(k,q,B,Z,X.convert(He),X.convert(ke),Se)}finally{const De=S!==null?ge.get(S).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(A,k,q=0){const B=Math.pow(2,-q),Z=Math.floor(k.image.width*B),Se=Math.floor(k.image.height*B);Ue.setTexture2D(k,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,A.x,A.y,Z,Se),we.unbindTexture()},this.copyTextureToTexture=function(A,k,q,B=0){const Z=k.image.width,Se=k.image.height,Me=X.convert(q.format),Ee=X.convert(q.type);Ue.setTexture2D(q,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,A.x,A.y,Z,Se,Me,Ee,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Me,k.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,B,A.x,A.y,Me,Ee,k.image),B===0&&q.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(A,k,q,B,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,Ee=A.max.z-A.min.z+1,De=X.convert(B.format),He=X.convert(B.type);let ke;if(B.isData3DTexture)Ue.setTexture3D(B,0),ke=N.TEXTURE_3D;else if(B.isDataArrayTexture)Ue.setTexture2DArray(B,0),ke=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Le=N.getParameter(N.UNPACK_ROW_LENGTH),Be=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ut=N.getParameter(N.UNPACK_SKIP_PIXELS),jt=N.getParameter(N.UNPACK_SKIP_ROWS),ei=N.getParameter(N.UNPACK_SKIP_IMAGES),dt=q.isCompressedTexture?q.mipmaps[0]:q.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,dt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,A.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,A.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?N.texSubImage3D(ke,Z,k.x,k.y,k.z,Se,Me,Ee,De,He,dt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(ke,Z,k.x,k.y,k.z,Se,Me,Ee,De,dt.data)):N.texSubImage3D(ke,Z,k.x,k.y,k.z,Se,Me,Ee,De,He,dt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Le),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Be),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,jt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ei),Z===0&&B.generateMipmaps&&N.generateMipmap(ke),we.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){v=0,M=0,S=null,we.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xe?Mr:Jh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mr?Xe:fi}}class hM extends iu{}hM.prototype.isWebGL1Renderer=!0;class Sp extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class pM extends As{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rf=new St,wc=new sp,eo=new zo,to=new G;class mM extends Gt{constructor(e=new hi,t=new pM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=s,e.ray.intersectsSphere(eo)===!1)return;rf.copy(i).invert(),wc.copy(e.ray).applyMatrix4(rf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let _=f,m=h;_<m;_++){const g=c.getX(_);to.fromBufferAttribute(d,g),sf(to,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let _=f,m=h;_<m;_++)to.fromBufferAttribute(d,_),sf(to,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sf(r,e,t,n,i,s,o){const a=wc.distanceSqToPoint(r);if(a<t){const l=new G;wc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ru extends hi{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new An(s,3)),this.setAttribute("normal",new An(s.slice(),3)),this.setAttribute("uv",new An(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new G,M=new G,S=new G;for(let T=0;T<t.length;T+=3)h(t[T+0],v),h(t[T+1],M),h(t[T+2],S),l(v,M,S,x)}function l(x,v,M,S){const T=S+1,b=[];for(let C=0;C<=T;C++){b[C]=[];const y=x.clone().lerp(M,C/T),E=v.clone().lerp(M,C/T),I=T-C;for(let D=0;D<=I;D++)D===0&&C===T?b[C][D]=y:b[C][D]=y.clone().lerp(E,D/I)}for(let C=0;C<T;C++)for(let y=0;y<2*(T-C)-1;y++){const E=Math.floor(y/2);y%2===0?(f(b[C][E+1]),f(b[C+1][E]),f(b[C][E])):(f(b[C][E+1]),f(b[C+1][E+1]),f(b[C+1][E]))}}function c(x){const v=new G;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(x),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function u(){const x=new G;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const M=g(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;o.push(M,1-S)}_(),d()}function d(){for(let x=0;x<o.length;x+=6){const v=o[x+0],M=o[x+2],S=o[x+4],T=Math.max(v,M,S),b=Math.min(v,M,S);T>.9&&b<.1&&(v<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),S<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function h(x,v){const M=x*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function _(){const x=new G,v=new G,M=new G,S=new G,T=new We,b=new We,C=new We;for(let y=0,E=0;y<s.length;y+=9,E+=6){x.set(s[y+0],s[y+1],s[y+2]),v.set(s[y+3],s[y+4],s[y+5]),M.set(s[y+6],s[y+7],s[y+8]),T.set(o[E+0],o[E+1]),b.set(o[E+2],o[E+3]),C.set(o[E+4],o[E+5]),S.copy(x).add(v).add(M).divideScalar(3);const I=g(S);m(T,E+0,x,I),m(b,E+2,v,I),m(C,E+4,M,I)}}function m(x,v,M,S){S<0&&x.x===1&&(o[v]=x.x-1),M.x===0&&M.z===0&&(o[v]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.vertices,e.indices,e.radius,e.details)}}class ko extends ru{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ko(e.radius,e.detail)}}class gM extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _M extends gM{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const af={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class vM{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],_=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null}}}const xM=new vM;class Mp{constructor(e){this.manager=e!==void 0?e:xM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class SM extends Mp{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=af.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ha("img");function l(){u(),af.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class MM extends Mp{constructor(e){super(e)}load(e,t,n,i){const s=new fn,o=new SM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class yp extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Nl=new St,of=new G,lf=new G;class yM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eu,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;of.setFromMatrixPosition(e.matrixWorld),t.position.copy(of),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EM extends yM{constructor(){super(new mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TM extends yp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new EM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bM extends yp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cf(){return(typeof performance>"u"?Date:performance).now()}class uf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);var wM=`vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
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
}`;nt.registerPlugin(ze);ze.normalizeScroll(!0);class CM{constructor(e){this.scene=new Sp,this.container=e.dom,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer=new iu({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor("#0a151f",1),this.container.appendChild(this.renderer.domElement),this.camera=new En(65,this.width/this.height,1,1e3),this.camera.position.set(0,0,2.5),this.camera.zoom=1.2,this.camera.updateProjectionMatrix(),this.clock=new Ep,this.isPlaying=!0,this.render=this.render.bind(this),this.renderer.powerPreference="high-performance",this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera.frustumCulled=!0,this.isMobile=window.innerWidth<768,this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),this.renderer.domElement.addEventListener("webglcontextlost",this.handleContextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.handleContextRestored),this.resources=new Set,this.boundEvents=new Set,this.addObjects(),this.resize(),this.render(),this.setupResize(),this.handleScrollAnimation()}setupResize(){const e=this.resize.bind(this);window.addEventListener("resize",e),this.boundEvents.add([window,"resize",e])}resize(){const e=window.innerWidth<768;if(this.mesh){const t=e?.7:1.15;this.mesh.scale.set(t,t,t)}this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,e?this.camera.position.z=2.8:this.camera.position.z=2.5,this.camera.updateProjectionMatrix()}addObjects(){const e=window.innerWidth<768,t=this.trackResource(new ko(e?.9:1.1,e?20:25)),n=this.trackResource(new Ri({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},defines:{IS_MOBILE:e},uniforms:{time:{value:0},uColor1:{value:new it(660767)},uColor2:{value:new it(11326710)},uColor3:{value:new it(1652818)}},vertexShader:wM,fragmentShader:AM,transparent:!0,depthWrite:!1,blending:_c}));this.material=n,this.vertices=t.attributes.position.array.length;let i=new Float32Array(this.vertices/3),s=new Float32Array(this.vertices/3);for(let o=0;o<this.vertices/3;o++)i.set([Math.random()],o),s.set([Math.random()],o);t.setAttribute("randoms",new kn(i,1)),t.setAttribute("colorRandom",new kn(s,1)),this.mesh=new mM(t,n),this.scene.add(this.mesh)}stop(){this.isPlaying=!1}play(){this.isPlaying||(this.isPlaying=!0,this.render())}render(){if(!this.isPlaying)return;const e=this.clock.getElapsedTime(),t=window.innerWidth<768;if(this.mesh){const n=t?.008:.01;this.mesh.position.y=Math.cos(e)*n,this.mesh.position.z=Math.cos(e)*n,this.mesh.rotation.y=Math.sin(e*.1)*.02}this.material&&this.material.uniforms&&(this.material.uniforms.time.value=e),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render)}handleScrollAnimation(){const e=document.querySelector("#body"),t=window.innerWidth<768;ze.create({trigger:e,start:"top top",end:()=>"+="+e.offsetHeight*1.25,onUpdate:i=>{if(!this.mesh)return;const s=i.progress,o=Math.PI*2*s,a=t?-.8:-1;this.mesh.rotation.x=o*a;const l=t?1.1:1.2,u=l+s*((t?1.8:2.2)-l);this.camera.zoom=u,this.camera.updateProjectionMatrix()},invalidateOnRefresh:!0});const n=document.querySelectorAll("#myThreeJsCanvas");nt.from(n,{duration:2,opacity:0,delay:3.2,ease:"back.out"})}handleContextLost(e){e.preventDefault(),this.stop(),console.log("WebGL context lost")}handleContextRestored(){console.log("WebGL context restored"),this.setupRenderer(),this.addObjects(),this.play()}trackResource(e){return this.resources.add(e),e}dispose(){this.stop(),this.resources.forEach(e=>{e.dispose&&e.dispose()}),this.boundEvents.forEach(([e,t,n])=>{e.removeEventListener(t,n)}),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.renderer.domElement.removeEventListener("webglcontextlost",this.handleContextLost),this.renderer.domElement.removeEventListener("webglcontextrestored",this.handleContextRestored),this.renderer.dispose(),this.resources.clear(),this.boundEvents.clear(),this.scene=null,this.camera=null,this.renderer=null}}class PM{constructor(e){return this.result=new Object,this.result.originalText=e.innerText,this.result.splitted=this.split(e),this.result.words=this.result.splitted.querySelectorAll(".SplitTextJS-wrapper"),this.result.chars=this.result.splitted.querySelectorAll(".SplitTextJS-char"),this.result.spaces=this.result.splitted.querySelectorAll(".SplitTextJS-spacer"),this.result}createSpan(e){let t=document.createElement("span");return t.style.display="inline-block",t.className=e,t}split(e){let t=new Array;const n=e.innerText.split(" ");let i=n.length;return n.map(s=>{const o=this.createSpan("SplitTextJS-wrapper");if(s.split(/(?!^)/).map(a=>{let l=this.createSpan("SplitTextJS-char");l.innerText=a,o.appendChild(l)}),i--,t.push(o),i>0){let a=this.createSpan("SplitTextJS-char SplitTextJS-spacer");a.innerHTML="&nbsp;",t.push(a)}}),e.innerHTML="",t.forEach(s=>{e.appendChild(s)}),e}}nt.registerPlugin(ze);ze.normalizeScroll(!0);function RM(){const r=document.querySelectorAll(".hero-title");var e=nt.timeline({repeat:-1});r.forEach(o=>{const a=new PM(o);e.from(a.chars,{y:16,opacity:0,rotateX:-90,stagger:.02},"<0.8"),e.to(a.chars,{y:-16,opacity:0,rotateX:90,stagger:.02},"<2")});const n=document.querySelector(".home-left-col").querySelectorAll(":scope > *");nt.from(n,{duration:2,yPercent:-100,opacity:0,delay:2.9,stagger:.2,ease:"back.out"});const i=document.querySelector(".home-container"),s=document.querySelector(".home");nt.to(i,{duration:3.25,yPercent:-100,ease:"powe3.out",scrollTrigger:{trigger:s,anticipatePin:1,start:"80% 20%",end:()=>"+="+s.offsetHeight,scrub:!0}})}nt.registerPlugin(ze);ze.normalizeScroll(!0);function LM(){const r=window.innerWidth<768,e=document.querySelector(".about > .title-container"),t=document.querySelectorAll(".about-title"),n=document.querySelector(".about"),i=nt.utils.toArray(".about-box");document.querySelector(".about-box").clientHeight;const s=document.querySelector(".about-container");nt.from(t,{duration:r?1.5:3.5,xPercent:r?-50:-100,opacity:0,ease:"power2.out",stagger:r?.2:.5,scrollTrigger:{trigger:e,start:"top 80%",end:"top 60%",scrub:r?1:!0}});let o=nt.matchMedia();return o.add({isDesktop:"(min-width: 768px)",isMobile:"(max-width: 767px)"},a=>{let{isDesktop:l,isMobile:c}=a.conditions;if(c){nt.set(i,{xPercent:100,yPercent:d=>d*-5,rotation:d=>d*2,opacity:1,zIndex:d=>i.length-d});let u=nt.timeline({scrollTrigger:{trigger:s,start:"top 60%",end:"bottom 20%",scrub:1}});i.forEach((d,f)=>{u.to(d,{xPercent:0,yPercent:f*110,rotation:0,duration:1,ease:"power2.out"},f*.1)}),i.forEach(d=>{d.addEventListener("touchstart",()=>{nt.to(d,{scale:1.05,duration:.3,ease:"power2.out"})}),d.addEventListener("touchend",()=>{nt.to(d,{scale:1,duration:.3,ease:"power2.in"})})})}else nt.timeline({scrollTrigger:{trigger:e,start:"top 60%",end:"top top",scrub:!0}}).from(i,{duration:2.25,yPercent:100,opacity:0,stagger:.5,ease:"power2.out"});nt.to(n,{yPercent:-50,ease:"none",scrollTrigger:{trigger:n,start:"top top",end:"bottom top",scrub:!0}})}),()=>{o.revert(),ze.getAll().forEach(a=>a.kill())}}var DM=`uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,IM=`uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    vec4 texColor = texture2D(uTexture, vUv);
    gl_FragColor = texColor;
}`;const UM="/jabid-portfolio-vite/img/figma.png",OM="/jabid-portfolio-vite/img/git.png",NM="/jabid-portfolio-vite/img/github.png",FM="/jabid-portfolio-vite/img/html.png",zM="/jabid-portfolio-vite/img/javascript.png",BM="/jabid-portfolio-vite/img/mongodb.png",kM="/jabid-portfolio-vite/img/nodejs.png",GM="/jabid-portfolio-vite/img/reactjs.png",HM="/jabid-portfolio-vite/img/tailwind.png",VM="/jabid-portfolio-vite/img/threejs.svg",df={type:"change"},Fl={type:"start"},ff={type:"end"};class WM extends Lr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Je),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Je),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(df),n.update(),s=i.NONE},this.update=function(){const U=new G,ee=new Pr().setFromUnitVectors(e.up,new G(0,1,0)),X=ee.clone().invert(),ue=new G,ve=new Pr,Te=2*Math.PI;return function(){const ye=n.object.position;U.copy(ye).sub(n.target),U.applyQuaternion(ee),a.setFromVector3(U),n.autoRotate&&s===i.NONE&&y(b()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ne=n.minAzimuthAngle,pe=n.maxAzimuthAngle;return isFinite(Ne)&&isFinite(pe)&&(Ne<-Math.PI?Ne+=Te:Ne>Math.PI&&(Ne-=Te),pe<-Math.PI?pe+=Te:pe>Math.PI&&(pe-=Te),Ne<=pe?a.theta=Math.max(Ne,Math.min(pe,a.theta)):a.theta=a.theta>(Ne+pe)/2?Math.max(Ne,a.theta):Math.min(pe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),U.setFromSpherical(a),U.applyQuaternion(X),ye.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||ue.distanceToSquared(n.object.position)>o||8*(1-ve.dot(n.object.quaternion))>o?(n.dispatchEvent(df),ue.copy(n.object.position),ve.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",qe),n.domElement.removeEventListener("wheel",Re),n.domElement.removeEventListener("pointermove",rt),n.domElement.removeEventListener("pointerup",qe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Je),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new uf,l=new uf;let c=1;const u=new G;let d=!1;const f=new We,h=new We,_=new We,m=new We,g=new We,p=new We,x=new We,v=new We,M=new We,S=[],T={};function b(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function y(U){l.theta-=U}function E(U){l.phi-=U}const I=function(){const U=new G;return function(X,ue){U.setFromMatrixColumn(ue,0),U.multiplyScalar(-X),u.add(U)}}(),D=function(){const U=new G;return function(X,ue){n.screenSpacePanning===!0?U.setFromMatrixColumn(ue,1):(U.setFromMatrixColumn(ue,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(X),u.add(U)}}(),P=function(){const U=new G;return function(X,ue){const ve=n.domElement;if(n.object.isPerspectiveCamera){const Te=n.object.position;U.copy(Te).sub(n.target);let me=U.length();me*=Math.tan(n.object.fov/2*Math.PI/180),I(2*X*me/ve.clientHeight,n.object.matrix),D(2*ue*me/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(X*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),D(ue*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(U){n.object.isPerspectiveCamera?c/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(U){n.object.isPerspectiveCamera?c*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(U){f.set(U.clientX,U.clientY)}function H(U){x.set(U.clientX,U.clientY)}function V(U){m.set(U.clientX,U.clientY)}function Q(U){h.set(U.clientX,U.clientY),_.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ee=n.domElement;y(2*Math.PI*_.x/ee.clientHeight),E(2*Math.PI*_.y/ee.clientHeight),f.copy(h),n.update()}function L(U){v.set(U.clientX,U.clientY),M.subVectors(v,x),M.y>0?O(C()):M.y<0&&z(C()),x.copy(v),n.update()}function de(U){g.set(U.clientX,U.clientY),p.subVectors(g,m).multiplyScalar(n.panSpeed),P(p.x,p.y),m.copy(g),n.update()}function re(U){U.deltaY<0?z(C()):U.deltaY>0&&O(C()),n.update()}function $(U){let ee=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),ee=!0;break}ee&&(U.preventDefault(),n.update())}function J(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const U=.5*(S[0].pageX+S[1].pageX),ee=.5*(S[0].pageY+S[1].pageY);f.set(U,ee)}}function oe(){if(S.length===1)m.set(S[0].pageX,S[0].pageY);else{const U=.5*(S[0].pageX+S[1].pageX),ee=.5*(S[0].pageY+S[1].pageY);m.set(U,ee)}}function ae(){const U=S[0].pageX-S[1].pageX,ee=S[0].pageY-S[1].pageY,X=Math.sqrt(U*U+ee*ee);x.set(0,X)}function N(){n.enableZoom&&ae(),n.enablePan&&oe()}function Ce(){n.enableZoom&&ae(),n.enableRotate&&J()}function Ie(U){if(S.length==1)h.set(U.pageX,U.pageY);else{const X=ce(U),ue=.5*(U.pageX+X.x),ve=.5*(U.pageY+X.y);h.set(ue,ve)}_.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ee=n.domElement;y(2*Math.PI*_.x/ee.clientHeight),E(2*Math.PI*_.y/ee.clientHeight),f.copy(h)}function le(U){if(S.length===1)g.set(U.pageX,U.pageY);else{const ee=ce(U),X=.5*(U.pageX+ee.x),ue=.5*(U.pageY+ee.y);g.set(X,ue)}p.subVectors(g,m).multiplyScalar(n.panSpeed),P(p.x,p.y),m.copy(g)}function we(U){const ee=ce(U),X=U.pageX-ee.x,ue=U.pageY-ee.y,ve=Math.sqrt(X*X+ue*ue);v.set(0,ve),M.set(0,Math.pow(v.y/x.y,n.zoomSpeed)),O(M.y),x.copy(v)}function xe(U){n.enableZoom&&we(U),n.enablePan&&le(U)}function ge(U){n.enableZoom&&we(U),n.enableRotate&&Ie(U)}function Ue(U){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",rt),n.domElement.addEventListener("pointerup",qe)),K(U),U.pointerType==="touch"?ft(U):Y(U))}function rt(U){n.enabled!==!1&&(U.pointerType==="touch"?R(U):at(U))}function qe(U){ie(U),S.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",rt),n.domElement.removeEventListener("pointerup",qe)),n.dispatchEvent(ff),s=i.NONE}function Y(U){let ee;switch(U.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Or.DOLLY:if(n.enableZoom===!1)return;H(U),s=i.DOLLY;break;case Or.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;V(U),s=i.PAN}else{if(n.enableRotate===!1)return;W(U),s=i.ROTATE}break;case Or.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;W(U),s=i.ROTATE}else{if(n.enablePan===!1)return;V(U),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Fl)}function at(U){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Q(U);break;case i.DOLLY:if(n.enableZoom===!1)return;L(U);break;case i.PAN:if(n.enablePan===!1)return;de(U);break}}function Re(U){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(U.preventDefault(),n.dispatchEvent(Fl),re(U),n.dispatchEvent(ff))}function Je(U){n.enabled===!1||n.enablePan===!1||$(U)}function ft(U){switch(te(U),S.length){case 1:switch(n.touches.ONE){case Nr.ROTATE:if(n.enableRotate===!1)return;J(),s=i.TOUCH_ROTATE;break;case Nr.PAN:if(n.enablePan===!1)return;oe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Nr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(),s=i.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Fl)}function R(U){switch(te(U),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ie(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(U),n.update();break;default:s=i.NONE}}function w(U){n.enabled!==!1&&U.preventDefault()}function K(U){S.push(U)}function ie(U){delete T[U.pointerId];for(let ee=0;ee<S.length;ee++)if(S[ee].pointerId==U.pointerId){S.splice(ee,1);return}}function te(U){let ee=T[U.pointerId];ee===void 0&&(ee=new We,T[U.pointerId]=ee),ee.set(U.pageX,U.pageY)}function ce(U){const ee=U.pointerId===S[0].pointerId?S[1]:S[0];return T[ee.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",qe),n.domElement.addEventListener("wheel",Re,{passive:!1}),this.update()}}class XM extends hi{constructor(e,t,n,i){super();const s=[],o=[],a=[],l=new G,c=new St;c.makeRotationFromEuler(n),c.setPosition(t);const u=new St;u.copy(c).invert(),d(),this.setAttribute("position",new An(s,3)),this.setAttribute("normal",new An(o,3)),this.setAttribute("uv",new An(a,2));function d(){let m=[];const g=new G,p=new G,x=e.geometry,v=x.attributes.position,M=x.attributes.normal;if(x.index!==null){const S=x.index;for(let T=0;T<S.count;T++)g.fromBufferAttribute(v,S.getX(T)),p.fromBufferAttribute(M,S.getX(T)),f(m,g,p)}else for(let S=0;S<v.count;S++)g.fromBufferAttribute(v,S),p.fromBufferAttribute(M,S),f(m,g,p);m=h(m,l.set(1,0,0)),m=h(m,l.set(-1,0,0)),m=h(m,l.set(0,1,0)),m=h(m,l.set(0,-1,0)),m=h(m,l.set(0,0,1)),m=h(m,l.set(0,0,-1));for(let S=0;S<m.length;S++){const T=m[S];a.push(.5+T.position.x/i.x,.5+T.position.y/i.y),T.position.applyMatrix4(c),s.push(T.position.x,T.position.y,T.position.z),o.push(T.normal.x,T.normal.y,T.normal.z)}}function f(m,g,p){g.applyMatrix4(e.matrixWorld),g.applyMatrix4(u),p.transformDirection(e.matrixWorld),m.push(new hf(g.clone(),p.clone()))}function h(m,g){const p=[],x=.5*Math.abs(i.dot(g));for(let v=0;v<m.length;v+=3){let M=0,S,T,b,C;const y=m[v+0].position.dot(g)-x,E=m[v+1].position.dot(g)-x,I=m[v+2].position.dot(g)-x,D=y>0,P=E>0,O=I>0;switch(M=(D?1:0)+(P?1:0)+(O?1:0),M){case 0:{p.push(m[v]),p.push(m[v+1]),p.push(m[v+2]);break}case 1:{if(D&&(S=m[v+1],T=m[v+2],b=_(m[v],S,g,x),C=_(m[v],T,g,x)),P){S=m[v],T=m[v+2],b=_(m[v+1],S,g,x),C=_(m[v+1],T,g,x),p.push(b),p.push(T.clone()),p.push(S.clone()),p.push(T.clone()),p.push(b.clone()),p.push(C);break}O&&(S=m[v],T=m[v+1],b=_(m[v+2],S,g,x),C=_(m[v+2],T,g,x)),p.push(S.clone()),p.push(T.clone()),p.push(b),p.push(C),p.push(b.clone()),p.push(T.clone());break}case 2:{D||(S=m[v].clone(),T=_(S,m[v+1],g,x),b=_(S,m[v+2],g,x),p.push(S),p.push(T),p.push(b)),P||(S=m[v+1].clone(),T=_(S,m[v+2],g,x),b=_(S,m[v],g,x),p.push(S),p.push(T),p.push(b)),O||(S=m[v+2].clone(),T=_(S,m[v],g,x),b=_(S,m[v+1],g,x),p.push(S),p.push(T),p.push(b));break}}}return p}function _(m,g,p,x){const v=m.position.dot(p)-x,M=g.position.dot(p)-x,S=v/(v-M);return new hf(new G(m.position.x+S*(g.position.x-m.position.x),m.position.y+S*(g.position.y-m.position.y),m.position.z+S*(g.position.z-m.position.z)),new G(m.normal.x+S*(g.normal.x-m.normal.x),m.normal.y+S*(g.normal.y-m.normal.y),m.normal.z+S*(g.normal.z-m.normal.z)))}}}class hf{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}class qM{constructor(e){this.scene=new Sp,this.container=e.dom,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer=new iu({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.LinearEncoding=Xe,this.container.appendChild(this.renderer.domElement),this.camera=new En(70,this.width/this.height,1,1e3),this.camera.position.set(-.3,-.1,3),this.camera.zoom=1.2,this.camera.updateProjectionMatrix(),this.clock=new Ep,this.isPlaying=!0,this.addObjects(e.imageURL),this.addLights(),this.enableOrbitControls(),this.resize(),this.render(),this.setupResize()}setupResize(){window.addEventListener("resize",this.resize.bind(this))}resize(){this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}addObjects(e){this.geometry=new ko(1,1),this.material=new _M({color:2247533,roughness:1,metalness:.9,clearcoat:0,clearcoatRoughness:0,flatShading:!0,side:si}),this.mesh=new oi(this.geometry,this.material),this.mesh.scale.set(1,1,1),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);const n=new MM().load(e),i=new Ri({uniforms:{uTexture:{value:n},transparent:!0},transparent:!0,vertexShader:DM,fragmentShader:IM,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:0}),s=new G(0,0,.1),o=new va(2*Math.PI,0,6.25,"XYZ"),a=new G(1,1,5),l=new XM(this.mesh,s,o,a);this.decal=new oi(l,i),this.scene.add(this.decal)}addLights(){let e=new bM(13421772,1),t=new TM(16777215,5);t.position.set(200,200,200),this.scene.add(e,t)}stop(){this.isPlaying=!1}play(){this.isPlaying||(this.render(),this.isPlaying=!0)}enableOrbitControls(){this.controls=new WM(this.camera,this.renderer.domElement),this.controls.enableZoom=!1,this.controls.enableDamping=!0,this.controls.update()}render(){if(!this.isPlaying)return;const e=this.clock.getElapsedTime();this.mesh.position.y=Math.cos(e)*.1,this.decal.position.y=Math.cos(e)*.1,this.mesh.position.z=Math.cos(e)*.1,this.decal.position.z=Math.cos(e)*.1,this.controls.update(),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.render.bind(this))}}function YM(){const r=document.querySelectorAll("#tech"),e=[UM,OM,NM,FM,zM,BM,kM,GM,HM,VM];r.forEach((t,n)=>{new qM({dom:t,imageURL:e[n]})})}function pf(r){return r!==null&&typeof r=="object"&&"constructor"in r&&r.constructor===Object}function su(r,e){r===void 0&&(r={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof r[t]>"u"?r[t]=e[t]:pf(e[t])&&pf(r[t])&&Object.keys(e[t]).length>0&&su(r[t],e[t])})}const Tp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ps(){const r=typeof document<"u"?document:{};return su(r,Tp),r}const $M={document:Tp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(r){return typeof setTimeout>"u"?(r(),null):setTimeout(r,0)},cancelAnimationFrame(r){typeof setTimeout>"u"||clearTimeout(r)}};function Pn(){const r=typeof window<"u"?window:{};return su(r,$M),r}function jM(r){return r===void 0&&(r=""),r.trim().split(" ").filter(e=>!!e.trim())}function KM(r){const e=r;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Ac(r,e){return e===void 0&&(e=0),setTimeout(r,e)}function Ro(){return Date.now()}function ZM(r){const e=Pn();let t;return e.getComputedStyle&&(t=e.getComputedStyle(r,null)),!t&&r.currentStyle&&(t=r.currentStyle),t||(t=r.style),t}function JM(r,e){e===void 0&&(e="x");const t=Pn();let n,i,s;const o=ZM(r);return t.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=s.m41:n.length===16?i=parseFloat(n[12]):i=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?i=s.m42:n.length===16?i=parseFloat(n[13]):i=parseFloat(n[5])),i||0}function no(r){return typeof r=="object"&&r!==null&&r.constructor&&Object.prototype.toString.call(r).slice(8,-1)==="Object"}function QM(r){return typeof window<"u"&&typeof window.HTMLElement<"u"?r instanceof HTMLElement:r&&(r.nodeType===1||r.nodeType===11)}function yn(){const r=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const n=t<0||arguments.length<=t?void 0:arguments[t];if(n!=null&&!QM(n)){const i=Object.keys(Object(n)).filter(s=>e.indexOf(s)<0);for(let s=0,o=i.length;s<o;s+=1){const a=i[s],l=Object.getOwnPropertyDescriptor(n,a);l!==void 0&&l.enumerable&&(no(r[a])&&no(n[a])?n[a].__swiper__?r[a]=n[a]:yn(r[a],n[a]):!no(r[a])&&no(n[a])?(r[a]={},n[a].__swiper__?r[a]=n[a]:yn(r[a],n[a])):r[a]=n[a])}}}return r}function io(r,e,t){r.style.setProperty(e,t)}function bp(r){let{swiper:e,targetPosition:t,side:n}=r;const i=Pn(),s=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",u=(f,h)=>c==="next"&&f>=h||c==="prev"&&f<=h,d=()=>{a=new Date().getTime(),o===null&&(o=a);const f=Math.max(Math.min((a-o)/l,1),0),h=.5-Math.cos(f*Math.PI)/2;let _=s+h*(t-s);if(u(_,t)&&(_=t),e.wrapperEl.scrollTo({[n]:_}),u(_,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:_})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(d)};d()}function au(r){return r.querySelector(".swiper-slide-transform")||r.shadowRoot&&r.shadowRoot.querySelector(".swiper-slide-transform")||r}function li(r,e){e===void 0&&(e="");const t=[...r.children];return r instanceof HTMLSlotElement&&t.push(...r.assignedElements()),e?t.filter(n=>n.matches(e)):t}function ey(r,e){const t=e.contains(r);return!t&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(r):t}function Lo(r){try{console.warn(r);return}catch{}}function pa(r,e){e===void 0&&(e=[]);const t=document.createElement(r);return t.classList.add(...Array.isArray(e)?e:jM(e)),t}function ty(r,e){const t=[];for(;r.previousElementSibling;){const n=r.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),r=n}return t}function ny(r,e){const t=[];for(;r.nextElementSibling;){const n=r.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),r=n}return t}function Hi(r,e){return Pn().getComputedStyle(r,null).getPropertyValue(e)}function Do(r){let e=r,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function wp(r,e){const t=[];let n=r.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function Cc(r,e,t){const n=Pn();return t?r[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):r.offsetWidth}function Ot(r){return(Array.isArray(r)?r:[r]).filter(e=>!!e)}function iy(r){return e=>Math.abs(e)>0&&r.browser&&r.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}let zl;function ry(){const r=Pn(),e=Ps();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in r||r.DocumentTouch&&e instanceof r.DocumentTouch)}}function Ap(){return zl||(zl=ry()),zl}let Bl;function sy(r){let{userAgent:e}=r===void 0?{}:r;const t=Ap(),n=Pn(),i=n.navigator.platform,s=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let u=s.match(/(iPad).*OS\s([\d_]+)/);const d=s.match(/(iPod)(.*OS\s([\d_]+))?/),f=!u&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=i==="Win32";let _=i==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&_&&t.touch&&m.indexOf(`${a}x${l}`)>=0&&(u=s.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),_=!1),c&&!h&&(o.os="android",o.android=!0),(u||f||d)&&(o.os="ios",o.ios=!0),o}function Cp(r){return r===void 0&&(r={}),Bl||(Bl=sy(r)),Bl}let kl;function ay(){const r=Pn(),e=Cp();let t=!1;function n(){const a=r.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(n()){const a=String(r.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent),s=n(),o=s||i&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:o,isWebView:i}}function oy(){return kl||(kl=ay()),kl}function ly(r){let{swiper:e,on:t,emit:n}=r;const i=Pn();let s=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(d=>{o=i.requestAnimationFrame(()=>{const{width:f,height:h}=e;let _=f,m=h;d.forEach(g=>{let{contentBoxSize:p,contentRect:x,target:v}=g;v&&v!==e.el||(_=x?x.width:(p[0]||p).inlineSize,m=x?x.height:(p[0]||p).blockSize)}),(_!==f||m!==h)&&a()})}),s.observe(e.el))},c=()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",u)}),t("destroy",()=>{c(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",u)})}function cy(r){let{swiper:e,extendParams:t,on:n,emit:i}=r;const s=[],o=Pn(),a=function(u,d){d===void 0&&(d={});const f=o.MutationObserver||o.WebkitMutationObserver,h=new f(_=>{if(e.__preventObserver__)return;if(_.length===1){i("observerUpdate",_[0]);return}const m=function(){i("observerUpdate",_[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});h.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),s.push(h)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=wp(e.hostEl);for(let d=0;d<u.length;d+=1)a(u[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(u=>{u.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var uy={on(r,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const i=t?"unshift":"push";return r.split(" ").forEach(s=>{n.eventsListeners[s]||(n.eventsListeners[s]=[]),n.eventsListeners[s][i](e)}),n},once(r,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function i(){n.off(r,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];e.apply(n,o)}return i.__emitterProxy=e,n.on(r,i,t)},onAny(r,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof r!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(r)<0&&t.eventsAnyListeners[n](r),t},offAny(r){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(r);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(r,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||r.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[n].splice(s,1)})}),t},emit(){const r=this;if(!r.eventsListeners||r.destroyed||!r.eventsListeners)return r;let e,t,n;for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),n=r):(e=s[0].events,t=s[0].data,n=s[0].context||r),t.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{r.eventsAnyListeners&&r.eventsAnyListeners.length&&r.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...t])}),r.eventsListeners&&r.eventsListeners[l]&&r.eventsListeners[l].forEach(c=>{c.apply(n,t)})}),r}};function dy(){const r=this;let e,t;const n=r.el;typeof r.params.width<"u"&&r.params.width!==null?e=r.params.width:e=n.clientWidth,typeof r.params.height<"u"&&r.params.height!==null?t=r.params.height:t=n.clientHeight,!(e===0&&r.isHorizontal()||t===0&&r.isVertical())&&(e=e-parseInt(Hi(n,"padding-left")||0,10)-parseInt(Hi(n,"padding-right")||0,10),t=t-parseInt(Hi(n,"padding-top")||0,10)-parseInt(Hi(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(r,{width:e,height:t,size:r.isHorizontal()?e:t}))}function fy(){const r=this;function e(E,I){return parseFloat(E.getPropertyValue(r.getDirectionLabel(I))||0)}const t=r.params,{wrapperEl:n,slidesEl:i,size:s,rtlTranslate:o,wrongRTL:a}=r,l=r.virtual&&t.virtual.enabled,c=l?r.virtual.slides.length:r.slides.length,u=li(i,`.${r.params.slideClass}, swiper-slide`),d=l?r.virtual.slides.length:u.length;let f=[];const h=[],_=[];let m=t.slidesOffsetBefore;typeof m=="function"&&(m=t.slidesOffsetBefore.call(r));let g=t.slidesOffsetAfter;typeof g=="function"&&(g=t.slidesOffsetAfter.call(r));const p=r.snapGrid.length,x=r.slidesGrid.length;let v=t.spaceBetween,M=-m,S=0,T=0;if(typeof s>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*s:typeof v=="string"&&(v=parseFloat(v)),r.virtualSize=-v,u.forEach(E=>{o?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(io(n,"--swiper-centered-offset-before",""),io(n,"--swiper-centered-offset-after",""));const b=t.grid&&t.grid.rows>1&&r.grid;b?r.grid.initSlides(u):r.grid&&r.grid.unsetSlides();let C;const y=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(E=>typeof t.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<d;E+=1){C=0;let I;if(u[E]&&(I=u[E]),b&&r.grid.updateSlide(E,I,u),!(u[E]&&Hi(I,"display")==="none")){if(t.slidesPerView==="auto"){y&&(u[E].style[r.getDirectionLabel("width")]="");const D=getComputedStyle(I),P=I.style.transform,O=I.style.webkitTransform;if(P&&(I.style.transform="none"),O&&(I.style.webkitTransform="none"),t.roundLengths)C=r.isHorizontal()?Cc(I,"width",!0):Cc(I,"height",!0);else{const z=e(D,"width"),W=e(D,"padding-left"),H=e(D,"padding-right"),V=e(D,"margin-left"),Q=e(D,"margin-right"),L=D.getPropertyValue("box-sizing");if(L&&L==="border-box")C=z+V+Q;else{const{clientWidth:de,offsetWidth:re}=I;C=z+W+H+V+Q+(re-de)}}P&&(I.style.transform=P),O&&(I.style.webkitTransform=O),t.roundLengths&&(C=Math.floor(C))}else C=(s-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(C=Math.floor(C)),u[E]&&(u[E].style[r.getDirectionLabel("width")]=`${C}px`);u[E]&&(u[E].swiperSlideSize=C),_.push(C),t.centeredSlides?(M=M+C/2+S/2+v,S===0&&E!==0&&(M=M-s/2-v),E===0&&(M=M-s/2-v),Math.abs(M)<1/1e3&&(M=0),t.roundLengths&&(M=Math.floor(M)),T%t.slidesPerGroup===0&&f.push(M),h.push(M)):(t.roundLengths&&(M=Math.floor(M)),(T-Math.min(r.params.slidesPerGroupSkip,T))%r.params.slidesPerGroup===0&&f.push(M),h.push(M),M=M+C+v),r.virtualSize+=C+v,S=C,T+=1}}if(r.virtualSize=Math.max(r.virtualSize,s)+g,o&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${r.virtualSize+v}px`),t.setWrapperSize&&(n.style[r.getDirectionLabel("width")]=`${r.virtualSize+v}px`),b&&r.grid.updateWrapperSize(C,f),!t.centeredSlides){const E=[];for(let I=0;I<f.length;I+=1){let D=f[I];t.roundLengths&&(D=Math.floor(D)),f[I]<=r.virtualSize-s&&E.push(D)}f=E,Math.floor(r.virtualSize-s)-Math.floor(f[f.length-1])>1&&f.push(r.virtualSize-s)}if(l&&t.loop){const E=_[0]+v;if(t.slidesPerGroup>1){const I=Math.ceil((r.virtual.slidesBefore+r.virtual.slidesAfter)/t.slidesPerGroup),D=E*t.slidesPerGroup;for(let P=0;P<I;P+=1)f.push(f[f.length-1]+D)}for(let I=0;I<r.virtual.slidesBefore+r.virtual.slidesAfter;I+=1)t.slidesPerGroup===1&&f.push(f[f.length-1]+E),h.push(h[h.length-1]+E),r.virtualSize+=E}if(f.length===0&&(f=[0]),v!==0){const E=r.isHorizontal()&&o?"marginLeft":r.getDirectionLabel("marginRight");u.filter((I,D)=>!t.cssMode||t.loop?!0:D!==u.length-1).forEach(I=>{I.style[E]=`${v}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let E=0;_.forEach(D=>{E+=D+(v||0)}),E-=v;const I=E>s?E-s:0;f=f.map(D=>D<=0?-m:D>I?I+g:D)}if(t.centerInsufficientSlides){let E=0;_.forEach(D=>{E+=D+(v||0)}),E-=v;const I=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(E+I<s){const D=(s-E-I)/2;f.forEach((P,O)=>{f[O]=P-D}),h.forEach((P,O)=>{h[O]=P+D})}}if(Object.assign(r,{slides:u,snapGrid:f,slidesGrid:h,slidesSizesGrid:_}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){io(n,"--swiper-centered-offset-before",`${-f[0]}px`),io(n,"--swiper-centered-offset-after",`${r.size/2-_[_.length-1]/2}px`);const E=-r.snapGrid[0],I=-r.slidesGrid[0];r.snapGrid=r.snapGrid.map(D=>D+E),r.slidesGrid=r.slidesGrid.map(D=>D+I)}if(d!==c&&r.emit("slidesLengthChange"),f.length!==p&&(r.params.watchOverflow&&r.checkOverflow(),r.emit("snapGridLengthChange")),h.length!==x&&r.emit("slidesGridLengthChange"),t.watchSlidesProgress&&r.updateSlidesOffset(),r.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const E=`${t.containerModifierClass}backface-hidden`,I=r.el.classList.contains(E);d<=t.maxBackfaceHiddenSlides?I||r.el.classList.add(E):I&&r.el.classList.remove(E)}}function hy(r){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof r=="number"?e.setTransition(r):r===!0&&e.setTransition(e.params.speed);const o=a=>n?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!n)break;t.push(o(a))}else t.push(o(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const a=t[s].offsetHeight;i=a>i?a:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function py(){const r=this,e=r.slides,t=r.isElement?r.isHorizontal()?r.wrapperEl.offsetLeft:r.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(r.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-r.cssOverflowAdjustment()}const mf=(r,e,t)=>{e&&!r.classList.contains(t)?r.classList.add(t):!e&&r.classList.contains(t)&&r.classList.remove(t)};function my(r){r===void 0&&(r=this&&this.translate||0);const e=this,t=e.params,{slides:n,rtlTranslate:i,snapGrid:s}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-r;i&&(o=r),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<n.length;l+=1){const c=n[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=n[0].swiperSlideOffset);const d=(o+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),f=(o-s[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),h=-(o-u),_=h+e.slidesSizesGrid[l],m=h>=0&&h<=e.size-e.slidesSizesGrid[l],g=h>=0&&h<e.size-1||_>1&&_<=e.size||h<=0&&_>=e.size;g&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),mf(c,g,t.slideVisibleClass),mf(c,m,t.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-f:f}}function gy(r){const e=this;if(typeof r>"u"){const u=e.rtlTranslate?-1:1;r=e&&e.translate&&e.translate*u||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=e;const l=s,c=o;if(n===0)i=0,s=!0,o=!0;else{i=(r-e.minTranslate())/n;const u=Math.abs(r-e.minTranslate())<1,d=Math.abs(r-e.maxTranslate())<1;s=u||i<=0,o=d||i>=1,u&&(i=0),d&&(i=1)}if(t.loop){const u=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),f=e.slidesGrid[u],h=e.slidesGrid[d],_=e.slidesGrid[e.slidesGrid.length-1],m=Math.abs(r);m>=f?a=(m-f)/_:a=(m+_-h)/_,a>1&&(a-=1)}Object.assign(e,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(r),s&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&e.emit("fromEdge"),e.emit("progress",i)}const Gl=(r,e,t)=>{e&&!r.classList.contains(t)?r.classList.add(t):!e&&r.classList.contains(t)&&r.classList.remove(t)};function _y(){const r=this,{slides:e,params:t,slidesEl:n,activeIndex:i}=r,s=r.virtual&&t.virtual.enabled,o=r.grid&&t.grid&&t.grid.rows>1,a=d=>li(n,`.${t.slideClass}${d}, swiper-slide${d}`)[0];let l,c,u;if(s)if(t.loop){let d=i-r.virtual.slidesBefore;d<0&&(d=r.virtual.slides.length+d),d>=r.virtual.slides.length&&(d-=r.virtual.slides.length),l=a(`[data-swiper-slide-index="${d}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else o?(l=e.filter(d=>d.column===i)[0],u=e.filter(d=>d.column===i+1)[0],c=e.filter(d=>d.column===i-1)[0]):l=e[i];l&&(o||(u=ny(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=ty(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(d=>{Gl(d,d===l,t.slideActiveClass),Gl(d,d===u,t.slideNextClass),Gl(d,d===c,t.slidePrevClass)}),r.emitSlidesClasses()}const go=(r,e)=>{if(!r||r.destroyed||!r.params)return;const t=()=>r.isElement?"swiper-slide":`.${r.params.slideClass}`,n=e.closest(t());if(n){let i=n.querySelector(`.${r.params.lazyPreloaderClass}`);!i&&r.isElement&&(n.shadowRoot?i=n.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(i=n.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Hl=(r,e)=>{if(!r.slides[e])return;const t=r.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Pc=r=>{if(!r||r.destroyed||!r.params)return;let e=r.params.lazyPreloadPrevNext;const t=r.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(r.params.slidesPerView),i=r.activeIndex;if(r.params.grid&&r.params.grid.rows>1){const o=i,a=[o-e];a.push(...Array.from({length:e}).map((l,c)=>o+n+c)),r.slides.forEach((l,c)=>{a.includes(l.column)&&Hl(r,c)});return}const s=i+n-1;if(r.params.rewind||r.params.loop)for(let o=i-e;o<=s+e;o+=1){const a=(o%t+t)%t;(a<i||a>s)&&Hl(r,a)}else for(let o=Math.max(i-e,0);o<=Math.min(s+e,t-1);o+=1)o!==i&&(o>s||o<i)&&Hl(r,o)};function vy(r){const{slidesGrid:e,params:t}=r,n=r.rtlTranslate?r.translate:-r.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?n>=e[s]&&n<e[s+1]-(e[s+1]-e[s])/2?i=s:n>=e[s]&&n<e[s+1]&&(i=s+1):n>=e[s]&&(i=s);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function xy(r){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:i,activeIndex:s,realIndex:o,snapIndex:a}=e;let l=r,c;const u=h=>{let _=h-e.virtual.slidesBefore;return _<0&&(_=e.virtual.slides.length+_),_>=e.virtual.slides.length&&(_-=e.virtual.slides.length),_};if(typeof l>"u"&&(l=vy(e)),n.indexOf(t)>=0)c=n.indexOf(t);else{const h=Math.min(i.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/i.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===s&&!e.params.loop){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const d=e.grid&&i.grid&&i.grid.rows>1;let f;if(e.virtual&&i.virtual.enabled&&i.loop)f=u(l);else if(d){const h=e.slides.filter(m=>m.column===l)[0];let _=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(_)&&(_=Math.max(e.slides.indexOf(h),0)),f=Math.floor(_/i.grid.rows)}else if(e.slides[l]){const h=e.slides[l].getAttribute("data-swiper-slide-index");h?f=parseInt(h,10):f=l}else f=l;Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:f,previousIndex:s,activeIndex:l}),e.initialized&&Pc(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==f&&e.emit("realIndexChange"),e.emit("slideChange"))}function Sy(r,e){const t=this,n=t.params;let i=r.closest(`.${n.slideClass}, swiper-slide`);!i&&t.isElement&&e&&e.length>1&&e.includes(r)&&[...e.slice(e.indexOf(r)+1,e.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${n.slideClass}, swiper-slide`)&&(i=a)});let s=!1,o;if(i){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===i){s=!0,o=a;break}}if(i&&s)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var My={updateSize:dy,updateSlides:fy,updateAutoHeight:hy,updateSlidesOffset:py,updateSlidesProgress:my,updateProgress:gy,updateSlidesClasses:_y,updateActiveIndex:xy,updateClickedSlide:Sy};function yy(r){r===void 0&&(r=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:n,translate:i,wrapperEl:s}=e;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let o=JM(s,r);return o+=e.cssOverflowAdjustment(),n&&(o=-o),o||0}function Ey(r,e){const t=this,{rtlTranslate:n,params:i,wrapperEl:s,progress:o}=t;let a=0,l=0;const c=0;t.isHorizontal()?a=n?-r:r:l=r,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l,i.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:i.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u;const d=t.maxTranslate()-t.minTranslate();d===0?u=0:u=(r-t.minTranslate())/d,u!==o&&t.updateProgress(r),t.emit("setTranslate",t.translate,e)}function Ty(){return-this.snapGrid[0]}function by(){return-this.snapGrid[this.snapGrid.length-1]}function wy(r,e,t,n,i){r===void 0&&(r=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),n===void 0&&(n=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(n&&r>l?u=l:n&&r<c?u=c:u=r,s.updateProgress(u),o.cssMode){const d=s.isHorizontal();if(e===0)a[d?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return bp({swiper:s,targetPosition:-u,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(f){!s||s.destroyed||f.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Ay={getTranslate:yy,setTranslate:Ey,minTranslate:Ty,maxTranslate:by,translateTo:wy};function Cy(r,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${r}ms`,t.wrapperEl.style.transitionDelay=r===0?"0ms":""),t.emit("setTransition",r,e)}function Pp(r){let{swiper:e,runCallbacks:t,direction:n,step:i}=r;const{activeIndex:s,previousIndex:o}=e;let a=n;if(a||(s>o?a="next":s<o?a="prev":a="reset"),e.emit(`transition${i}`),t&&s!==o){if(a==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),a==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function Py(r,e){r===void 0&&(r=!0);const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),Pp({swiper:t,runCallbacks:r,direction:e,step:"Start"}))}function Ry(r,e){r===void 0&&(r=!0);const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),Pp({swiper:t,runCallbacks:r,direction:e,step:"End"}))}var Ly={setTransition:Cy,transitionStart:Py,transitionEnd:Ry};function Dy(r,e,t,n,i){r===void 0&&(r=0),t===void 0&&(t=!0),typeof r=="string"&&(r=parseInt(r,10));const s=this;let o=r;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:h,enabled:_}=s;if(!_&&!n&&!i||s.destroyed||s.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const m=Math.min(s.params.slidesPerGroupSkip,o);let g=m+Math.floor((o-m)/s.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const p=-l[g];if(a.normalizeSlideIndex)for(let S=0;S<c.length;S+=1){const T=-Math.floor(p*100),b=Math.floor(c[S]*100),C=Math.floor(c[S+1]*100);typeof c[S+1]<"u"?T>=b&&T<C-(C-b)/2?o=S:T>=b&&T<C&&(o=S+1):T>=b&&(o=S)}if(s.initialized&&o!==d&&(!s.allowSlideNext&&(f?p>s.translate&&p>s.minTranslate():p<s.translate&&p<s.minTranslate())||!s.allowSlidePrev&&p>s.translate&&p>s.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(p);let x;o>d?x="next":o<d?x="prev":x="reset";const v=s.virtual&&s.params.virtual.enabled;if(!(v&&i)&&(f&&-p===s.translate||!f&&p===s.translate))return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(p),x!=="reset"&&(s.transitionStart(t,x),s.transitionEnd(t,x)),!1;if(a.cssMode){const S=s.isHorizontal(),T=f?p:-p;if(e===0)v&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),v&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[S?"scrollLeft":"scrollTop"]=T})):h[S?"scrollLeft":"scrollTop"]=T,v&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1});else{if(!s.support.smoothScroll)return bp({swiper:s,targetPosition:T,side:S?"left":"top"}),!0;h.scrollTo({[S?"left":"top"]:T,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(p),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,n),s.transitionStart(t,x),e===0?s.transitionEnd(t,x):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(T){!s||s.destroyed||T.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,x))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Iy(r,e,t,n){r===void 0&&(r=0),t===void 0&&(t=!0),typeof r=="string"&&(r=parseInt(r,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=r;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let a;if(s){const f=o*i.params.grid.rows;a=i.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===f)[0].column}else a=i.getSlideIndexByData(o);const l=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let u=i.params.slidesPerView;u==="auto"?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let d=l-a<u;if(c&&(d=d||a<Math.ceil(u/2)),n&&c&&i.params.slidesPerView!=="auto"&&!s&&(d=!1),d){const f=c?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?a+1:a-l+1,slideRealIndex:f==="next"?i.realIndex:void 0})}if(s){const f=o*i.params.grid.rows;o=i.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===f)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,e,t,n)}),i}function Uy(r,e,t){e===void 0&&(e=!0);const n=this,{enabled:i,params:s,animating:o}=n;if(!i||n.destroyed)return n;typeof r>"u"&&(r=n.params.speed);let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<s.slidesPerGroupSkip?1:a,c=n.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,r,e,t)}),!0}return s.rewind&&n.isEnd?n.slideTo(0,r,e,t):n.slideTo(n.activeIndex+l,r,e,t)}function Oy(r,e,t){e===void 0&&(e=!0);const n=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof r>"u"&&(r=n.params.speed);const u=n.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const d=a?n.translate:-n.translate;function f(p){return p<0?-Math.floor(Math.abs(p)):Math.floor(p)}const h=f(d),_=s.map(p=>f(p));let m=s[_.indexOf(h)-1];if(typeof m>"u"&&i.cssMode){let p;s.forEach((x,v)=>{h>=x&&(p=v)}),typeof p<"u"&&(m=s[p>0?p-1:p])}let g=0;if(typeof m<"u"&&(g=o.indexOf(m),g<0&&(g=n.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(g=g-n.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),i.rewind&&n.isBeginning){const p=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(p,r,e,t)}else if(i.loop&&n.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{n.slideTo(g,r,e,t)}),!0;return n.slideTo(g,r,e,t)}function Ny(r,e,t){e===void 0&&(e=!0);const n=this;if(!n.destroyed)return typeof r>"u"&&(r=n.params.speed),n.slideTo(n.activeIndex,r,e,t)}function Fy(r,e,t,n){e===void 0&&(e=!0),n===void 0&&(n=.5);const i=this;if(i.destroyed)return;typeof r>"u"&&(r=i.params.speed);let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const c=i.snapGrid[a],u=i.snapGrid[a+1];l-c>(u-c)*n&&(s+=i.params.slidesPerGroup)}else{const c=i.snapGrid[a-1],u=i.snapGrid[a];l-c<=(u-c)*n&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,r,e,t)}function zy(){const r=this;if(r.destroyed)return;const{params:e,slidesEl:t}=r,n=e.slidesPerView==="auto"?r.slidesPerViewDynamic():e.slidesPerView;let i=r.clickedIndex,s;const o=r.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(r.animating)return;s=parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<r.loopedSlides-n/2||i>r.slides.length-r.loopedSlides+n/2?(r.loopFix(),i=r.getSlideIndex(li(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ac(()=>{r.slideTo(i)})):r.slideTo(i):i>r.slides.length-n?(r.loopFix(),i=r.getSlideIndex(li(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ac(()=>{r.slideTo(i)})):r.slideTo(i)}else r.slideTo(i)}var By={slideTo:Dy,slideToLoop:Iy,slideNext:Uy,slidePrev:Oy,slideReset:Ny,slideToClosest:Fy,slideToClickedSlide:zy};function ky(r){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{li(n,`.${t.slideClass}, swiper-slide`).forEach((d,f)=>{d.setAttribute("data-swiper-slide-index",f)})},s=e.grid&&t.grid&&t.grid.rows>1,o=t.slidesPerGroup*(s?t.grid.rows:1),a=e.slides.length%o!==0,l=s&&e.slides.length%t.grid.rows!==0,c=u=>{for(let d=0;d<u;d+=1){const f=e.isElement?pa("swiper-slide",[t.slideBlankClass]):pa("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(f)}};if(a){if(t.loopAddBlankSlides){const u=o-e.slides.length%o;c(u),e.recalcSlides(),e.updateSlides()}else Lo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(t.loopAddBlankSlides){const u=t.grid.rows-e.slides.length%t.grid.rows;c(u),e.recalcSlides(),e.updateSlides()}else Lo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:r,direction:t.centeredSlides?void 0:"next"})}function Gy(r){let{slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:i,activeSlideIndex:s,byController:o,byMousewheel:a}=r===void 0?{}:r;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:h}=l,{centeredSlides:_}=h;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&h.virtual.enabled){t&&(!h.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):h.centeredSlides&&l.snapIndex<h.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,l.emit("loopFix");return}let m=h.slidesPerView;m==="auto"?m=l.slidesPerViewDynamic():(m=Math.ceil(parseFloat(h.slidesPerView,10)),_&&m%2===0&&(m=m+1));const g=h.slidesPerGroupAuto?m:h.slidesPerGroup;let p=g;p%g!==0&&(p+=g-p%g),p+=h.loopAdditionalSlides,l.loopedSlides=p;const x=l.grid&&h.grid&&h.grid.rows>1;c.length<m+p?Lo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):x&&h.grid.fill==="row"&&Lo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const v=[],M=[];let S=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.filter(P=>P.classList.contains(h.slideActiveClass))[0]):S=s;const T=n==="next"||!n,b=n==="prev"||!n;let C=0,y=0;const E=x?Math.ceil(c.length/h.grid.rows):c.length,D=(x?c[s].column:s)+(_&&typeof i>"u"?-m/2+.5:0);if(D<p){C=Math.max(p-D,g);for(let P=0;P<p-D;P+=1){const O=P-Math.floor(P/E)*E;if(x){const z=E-O-1;for(let W=c.length-1;W>=0;W-=1)c[W].column===z&&v.push(W)}else v.push(E-O-1)}}else if(D+m>E-p){y=Math.max(D-(E-p*2),g);for(let P=0;P<y;P+=1){const O=P-Math.floor(P/E)*E;x?c.forEach((z,W)=>{z.column===O&&M.push(W)}):M.push(O)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),b&&v.forEach(P=>{c[P].swiperLoopMoveDOM=!0,f.prepend(c[P]),c[P].swiperLoopMoveDOM=!1}),T&&M.forEach(P=>{c[P].swiperLoopMoveDOM=!0,f.append(c[P]),c[P].swiperLoopMoveDOM=!1}),l.recalcSlides(),h.slidesPerView==="auto"?l.updateSlides():x&&(v.length>0&&b||M.length>0&&T)&&l.slides.forEach((P,O)=>{l.grid.updateSlide(O,P,l.slides)}),h.watchSlidesProgress&&l.updateSlidesOffset(),t){if(v.length>0&&b){if(typeof e>"u"){const P=l.slidesGrid[S],z=l.slidesGrid[S+C]-P;a?l.setTranslate(l.translate-z):(l.slideTo(S+Math.ceil(C),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else if(i){const P=x?v.length/h.grid.rows:v.length;l.slideTo(l.activeIndex+P,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(M.length>0&&T)if(typeof e>"u"){const P=l.slidesGrid[S],z=l.slidesGrid[S-y]-P;a?l.setTranslate(l.translate-z):(l.slideTo(S-y,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else{const P=x?M.length/h.grid.rows:M.length;l.slideTo(l.activeIndex-P,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!o){const P={slideRealIndex:e,direction:n,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(O=>{!O.destroyed&&O.params.loop&&O.loopFix({...P,slideTo:O.params.slidesPerView===h.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...P,slideTo:l.controller.control.params.slidesPerView===h.slidesPerView?t:!1})}l.emit("loopFix")}function Hy(){const r=this,{params:e,slidesEl:t}=r;if(!e.loop||r.virtual&&r.params.virtual.enabled)return;r.recalcSlides();const n=[];r.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;n[s]=i}),r.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),n.forEach(i=>{t.append(i)}),r.recalcSlides(),r.slideTo(r.realIndex,0)}var Vy={loopCreate:ky,loopFix:Gy,loopDestroy:Hy};function Wy(r){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=r?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Xy(){const r=this;r.params.watchOverflow&&r.isLocked||r.params.cssMode||(r.isElement&&(r.__preventObserver__=!0),r[r.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",r.isElement&&requestAnimationFrame(()=>{r.__preventObserver__=!1}))}var qy={setGrabCursor:Wy,unsetGrabCursor:Xy};function Yy(r,e){e===void 0&&(e=this);function t(n){if(!n||n===Ps()||n===Pn())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(r);return!i&&!n.getRootNode?null:i||t(n.getRootNode().host)}return t(e)}function gf(r,e,t){const n=Pn(),{params:i}=r,s=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return s&&(t<=o||t>=n.innerWidth-o)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function $y(r){const e=this,t=Ps();let n=r;n.originalEvent&&(n=n.originalEvent);const i=e.touchEventsData;if(n.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==n.pointerId)return;i.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(i.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){gf(e,n,n.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&n.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=n.target;if(s.touchEventsTarget==="wrapper"&&!ey(l,e.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||i.isTouched&&i.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",u=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&u&&(l=u[0]);const d=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,f=!!(n.target&&n.target.shadowRoot);if(s.noSwiping&&(f?Yy(d,l):l.closest(d))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=n.pageX,o.currentY=n.pageY;const h=o.currentX,_=o.currentY;if(!gf(e,n,h))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=_,i.touchStartTime=Ro(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let m=!0;l.matches(i.focusableElements)&&(m=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==l&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&t.activeElement.blur();const g=m&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||g)&&!l.isContentEditable&&n.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function jy(r){const e=Ps(),t=this,n=t.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=t;if(!a||!i.simulateTouch&&r.pointerType==="mouse")return;let l=r;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(T=>T.identifier===n.touchId)[0],!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,d=c.pageY;if(l.preventedByNestedSwiper){s.startX=u,s.startY=d;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(s,{startX:u,startY:d,currentX:u,currentY:d}),n.touchStartTime=Ro());return}if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(d<s.startY&&t.translate<=t.maxTranslate()||d>s.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(u<s.startX&&t.translate<=t.maxTranslate()||u>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&e.activeElement.matches(n.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=u,s.currentY=d;const f=s.currentX-s.startX,h=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(f**2+h**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let T;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:f*f+h*h>=25&&(T=Math.atan2(Math.abs(h),Math.abs(f))*180/Math.PI,n.isScrolling=t.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let _=t.isHorizontal()?f:h,m=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(_=Math.abs(_)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),s.diff=_,_*=i.touchRatio,o&&(_=-_,m=-m);const g=t.touchesDirection;t.swipeDirection=_>0?"prev":"next",t.touchesDirection=m>0?"prev":"next";const p=t.params.loop&&!i.cssMode,x=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(p&&x&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(T)}n.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let v;if(new Date().getTime(),n.isMoved&&n.allowThresholdMove&&g!==t.touchesDirection&&p&&x&&Math.abs(_)>=1){Object.assign(s,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=_+n.startTranslate;let M=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),_>0?(p&&x&&!v&&n.allowThresholdMove&&n.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(M=!1,i.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+_)**S))):_<0&&(p&&x&&!v&&n.allowThresholdMove&&n.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(M=!1,i.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-_)**S))),M&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),i.threshold>0)if(Math.abs(_)>i.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{n.currentTranslate=n.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function Ky(r){const e=this,t=e.touchEventsData;let n=r;n.originalEvent&&(n=n.originalEvent);let i;if(n.type==="touchend"||n.type==="touchcancel"){if(i=[...n.changedTouches].filter(S=>S.identifier===t.touchId)[0],!i||i.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;i=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!o.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=Ro(),f=d-t.touchStartTime;if(e.allowClick){const S=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(S&&S[0]||n.target,S),e.emit("tap click",n),f<300&&d-t.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(t.lastClickTime=Ro(),Ac(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||a.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(o.followFinger?h=l?e.translate:-e.translate:h=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}const _=h>=-e.maxTranslate()&&!e.params.loop;let m=0,g=e.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<o.slidesPerGroupSkip?1:o.slidesPerGroup){const T=S<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[S+T]<"u"?(_||h>=c[S]&&h<c[S+T])&&(m=S,g=c[S+T]-c[S]):(_||h>=c[S])&&(m=S,g=c[c.length-1]-c[c.length-2])}let p=null,x=null;o.rewind&&(e.isBeginning?x=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(p=0));const v=(h-c[m])/g,M=m<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(f>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?p:m+M):e.slideTo(m)),e.swipeDirection==="prev"&&(v>1-o.longSwipesRatio?e.slideTo(m+M):x!==null&&v<0&&Math.abs(v)>o.longSwipesRatio?e.slideTo(x):e.slideTo(m))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(m+M):e.slideTo(m):(e.swipeDirection==="next"&&e.slideTo(p!==null?p:m+M),e.swipeDirection==="prev"&&e.slideTo(x!==null?x:m))}}function _f(){const r=this,{params:e,el:t}=r;if(t&&t.offsetWidth===0)return;e.breakpoints&&r.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:i,snapGrid:s}=r,o=r.virtual&&r.params.virtual.enabled;r.allowSlideNext=!0,r.allowSlidePrev=!0,r.updateSize(),r.updateSlides(),r.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&r.isEnd&&!r.isBeginning&&!r.params.centeredSlides&&!a?r.slideTo(r.slides.length-1,0,!1,!0):r.params.loop&&!o?r.slideToLoop(r.realIndex,0,!1,!0):r.slideTo(r.activeIndex,0,!1,!0),r.autoplay&&r.autoplay.running&&r.autoplay.paused&&(clearTimeout(r.autoplay.resizeTimeout),r.autoplay.resizeTimeout=setTimeout(()=>{r.autoplay&&r.autoplay.running&&r.autoplay.paused&&r.autoplay.resume()},500)),r.allowSlidePrev=i,r.allowSlideNext=n,r.params.watchOverflow&&s!==r.snapGrid&&r.checkOverflow()}function Zy(r){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&r.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(r.stopPropagation(),r.stopImmediatePropagation())))}function Jy(){const r=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=r;if(!n)return;r.previousTranslate=r.translate,r.isHorizontal()?r.translate=-e.scrollLeft:r.translate=-e.scrollTop,r.translate===0&&(r.translate=0),r.updateActiveIndex(),r.updateSlidesClasses();let i;const s=r.maxTranslate()-r.minTranslate();s===0?i=0:i=(r.translate-r.minTranslate())/s,i!==r.progress&&r.updateProgress(t?-r.translate:r.translate),r.emit("setTranslate",r.translate,!1)}function Qy(r){const e=this;go(e,r.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function eE(){const r=this;r.documentTouchHandlerProceeded||(r.documentTouchHandlerProceeded=!0,r.params.touchReleaseOnEdges&&(r.el.style.touchAction="auto"))}const Rp=(r,e)=>{const t=Ps(),{params:n,el:i,wrapperEl:s,device:o}=r,a=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!i||typeof i=="string"||(t[l]("touchstart",r.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",r.onTouchStart,{passive:!1}),i[l]("pointerdown",r.onTouchStart,{passive:!1}),t[l]("touchmove",r.onTouchMove,{passive:!1,capture:a}),t[l]("pointermove",r.onTouchMove,{passive:!1,capture:a}),t[l]("touchend",r.onTouchEnd,{passive:!0}),t[l]("pointerup",r.onTouchEnd,{passive:!0}),t[l]("pointercancel",r.onTouchEnd,{passive:!0}),t[l]("touchcancel",r.onTouchEnd,{passive:!0}),t[l]("pointerout",r.onTouchEnd,{passive:!0}),t[l]("pointerleave",r.onTouchEnd,{passive:!0}),t[l]("contextmenu",r.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&i[l]("click",r.onClick,!0),n.cssMode&&s[l]("scroll",r.onScroll),n.updateOnWindowResize?r[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",_f,!0):r[c]("observerUpdate",_f,!0),i[l]("load",r.onLoad,{capture:!0}))};function tE(){const r=this,{params:e}=r;r.onTouchStart=$y.bind(r),r.onTouchMove=jy.bind(r),r.onTouchEnd=Ky.bind(r),r.onDocumentTouchStart=eE.bind(r),e.cssMode&&(r.onScroll=Jy.bind(r)),r.onClick=Zy.bind(r),r.onLoad=Qy.bind(r),Rp(r,"on")}function nE(){Rp(this,"off")}var iE={attachEvents:tE,detachEvents:nE};const vf=(r,e)=>r.grid&&e.grid&&e.grid.rows>1;function rE(){const r=this,{realIndex:e,initialized:t,params:n,el:i}=r,s=n.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=r.getBreakpoint(s,r.params.breakpointsBase,r.el);if(!o||r.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||r.originalParams,c=vf(r,n),u=vf(r,l),d=r.params.grabCursor,f=l.grabCursor,h=n.enabled;c&&!u?(i.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),r.emitContainerClasses()):!c&&u&&(i.classList.add(`${n.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&n.grid.fill==="column")&&i.classList.add(`${n.containerModifierClass}grid-column`),r.emitContainerClasses()),d&&!f?r.unsetGrabCursor():!d&&f&&r.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(v=>{if(typeof l[v]>"u")return;const M=n[v]&&n[v].enabled,S=l[v]&&l[v].enabled;M&&!S&&r[v].disable(),!M&&S&&r[v].enable()});const _=l.direction&&l.direction!==n.direction,m=n.loop&&(l.slidesPerView!==n.slidesPerView||_),g=n.loop;_&&t&&r.changeDirection(),yn(r.params,l);const p=r.params.enabled,x=r.params.loop;Object.assign(r,{allowTouchMove:r.params.allowTouchMove,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev}),h&&!p?r.disable():!h&&p&&r.enable(),r.currentBreakpoint=o,r.emit("_beforeBreakpoint",l),t&&(m?(r.loopDestroy(),r.loopCreate(e),r.updateSlides()):!g&&x?(r.loopCreate(e),r.updateSlides()):g&&!x&&r.loopDestroy()),r.emit("breakpoint",l)}function sE(r,e,t){if(e===void 0&&(e="window"),!r||e==="container"&&!t)return;let n=!1;const i=Pn(),s=e==="window"?i.innerHeight:t.clientHeight,o=Object.keys(r).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=t.clientWidth&&(n=l)}return n||"max"}var aE={setBreakpoint:rE,getBreakpoint:sE};function oE(r,e){const t=[];return r.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(i=>{n[i]&&t.push(e+i)}):typeof n=="string"&&t.push(e+n)}),t}function lE(){const r=this,{classNames:e,params:t,rtl:n,el:i,device:s}=r,o=oE(["initialized",t.direction,{"free-mode":r.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),i.classList.add(...e),r.emitContainerClasses()}function cE(){const r=this,{el:e,classNames:t}=r;!e||typeof e=="string"||(e.classList.remove(...t),r.emitContainerClasses())}var uE={addClasses:lE,removeClasses:cE};function dE(){const r=this,{isLocked:e,params:t}=r,{slidesOffsetBefore:n}=t;if(n){const i=r.slides.length-1,s=r.slidesGrid[i]+r.slidesSizesGrid[i]+n*2;r.isLocked=r.size>s}else r.isLocked=r.snapGrid.length===1;t.allowSlideNext===!0&&(r.allowSlideNext=!r.isLocked),t.allowSlidePrev===!0&&(r.allowSlidePrev=!r.isLocked),e&&e!==r.isLocked&&(r.isEnd=!1),e!==r.isLocked&&r.emit(r.isLocked?"lock":"unlock")}var fE={checkOverflow:dE},xf={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function hE(r,e){return function(n){n===void 0&&(n={});const i=Object.keys(n)[0],s=n[i];if(typeof s!="object"||s===null){yn(e,n);return}if(r[i]===!0&&(r[i]={enabled:!0}),i==="navigation"&&r[i]&&r[i].enabled&&!r[i].prevEl&&!r[i].nextEl&&(r[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&r[i]&&r[i].enabled&&!r[i].el&&(r[i].auto=!0),!(i in r&&"enabled"in s)){yn(e,n);return}typeof r[i]=="object"&&!("enabled"in r[i])&&(r[i].enabled=!0),r[i]||(r[i]={enabled:!1}),yn(e,n)}}const Vl={eventsEmitter:uy,update:My,translate:Ay,transition:Ly,slide:By,loop:Vy,grabCursor:qy,events:iE,breakpoints:aE,checkOverflow:fE,classes:uE},Wl={};class In{constructor(){let e,t;for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?t=i[0]:[e,t]=i,t||(t={}),t=yn({},t),e&&!t.el&&(t.el=e);const o=Ps();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const u=[];return o.querySelectorAll(t.el).forEach(d=>{const f=yn({},t,{el:d});u.push(new In(f))}),u}const a=this;a.__swiper__=!0,a.support=Ap(),a.device=Cp({userAgent:t.userAgent}),a.browser=oy(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const l={};a.modules.forEach(u=>{u({params:t,swiper:a,extendParams:hE(t,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=yn({},xf,l);return a.params=yn({},c,Wl,t),a.originalParams=yn({},a.params),a.passedParams=yn({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach(u=>{a.on(u,a.params.on[u])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,i=li(t,`.${n.slideClass}, swiper-slide`),s=Do(i[0]);return Do(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=li(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),o=(n.maxTranslate()-i)*e+i;n.translateTo(o,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const n=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=n;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=s[c]?Math.ceil(s[c].swiperSlideSize):0,f;for(let h=c+1;h<s.length;h+=1)s[h]&&!f&&(d+=Math.ceil(s[h].swiperSlideSize),u+=1,d>l&&(f=!0));for(let h=c-1;h>=0;h-=1)s[h]&&!f&&(d+=s[h].swiperSlideSize,u+=1,d>l&&(f=!0))}else if(e==="current")for(let d=c+1;d<s.length;d+=1)(t?o[d]+a[d]-o[c]<l:o[d]-o[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)o[c]-o[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&go(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)i(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const o=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const n=this,i=n.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(i()):li(n,i())[0])();return!o&&t.params.createElements&&(o=pa("div",t.params.wrapperClass),n.append(o),li(n,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:n,wrapperEl:o,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:o,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Hi(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Hi(n,"direction")==="rtl"),wrongRTL:Hi(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?go(t,s):s.addEventListener("load",o=>{go(t,o.target)})}),Pc(t),t.initialized=!0,Pc(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const n=this,{params:i,el:s,wrapperEl:o,slides:a}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),KM(n)),n.destroyed=!0),null}static extendDefaults(e){yn(Wl,e)}static get extendedDefaults(){return Wl}static get defaults(){return xf}static installModule(e){In.prototype.__modules__||(In.prototype.__modules__=[]);const t=In.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>In.installModule(t)),In):(In.installModule(e),In)}}Object.keys(Vl).forEach(r=>{Object.keys(Vl[r]).forEach(e=>{In.prototype[e]=Vl[r][e]})});In.use([ly,cy]);function Lp(r,e,t,n){return r.params.createElements&&Object.keys(n).forEach(i=>{if(!t[i]&&t.auto===!0){let s=li(r.el,`.${n[i]}`)[0];s||(s=pa("div",n[i]),s.className=n[i],r.el.append(s)),t[i]=s,e[i]=s}}),t}function pE(r){let{swiper:e,extendParams:t,on:n,emit:i}=r;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(_){let m;return _&&typeof _=="string"&&e.isElement&&(m=e.el.querySelector(_)||e.hostEl.querySelector(_),m)?m:(_&&(typeof _=="string"&&(m=[...document.querySelectorAll(_)]),e.params.uniqueNavElements&&typeof _=="string"&&m&&m.length>1&&e.el.querySelectorAll(_).length===1?m=e.el.querySelector(_):m&&m.length===1&&(m=m[0])),_&&!m?_:m)}function o(_,m){const g=e.params.navigation;_=Ot(_),_.forEach(p=>{p&&(p.classList[m?"add":"remove"](...g.disabledClass.split(" ")),p.tagName==="BUTTON"&&(p.disabled=m),e.params.watchOverflow&&e.enabled&&p.classList[e.isLocked?"add":"remove"](g.lockClass))})}function a(){const{nextEl:_,prevEl:m}=e.navigation;if(e.params.loop){o(m,!1),o(_,!1);return}o(m,e.isBeginning&&!e.params.rewind),o(_,e.isEnd&&!e.params.rewind)}function l(_){_.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function c(_){_.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function u(){const _=e.params.navigation;if(e.params.navigation=Lp(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(_.nextEl||_.prevEl))return;let m=s(_.nextEl),g=s(_.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:g}),m=Ot(m),g=Ot(g);const p=(x,v)=>{x&&x.addEventListener("click",v==="next"?c:l),!e.enabled&&x&&x.classList.add(..._.lockClass.split(" "))};m.forEach(x=>p(x,"next")),g.forEach(x=>p(x,"prev"))}function d(){let{nextEl:_,prevEl:m}=e.navigation;_=Ot(_),m=Ot(m);const g=(p,x)=>{p.removeEventListener("click",x==="next"?c:l),p.classList.remove(...e.params.navigation.disabledClass.split(" "))};_.forEach(p=>g(p,"next")),m.forEach(p=>g(p,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?h():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:_,prevEl:m}=e.navigation;if(_=Ot(_),m=Ot(m),e.enabled){a();return}[..._,...m].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),n("click",(_,m)=>{let{nextEl:g,prevEl:p}=e.navigation;g=Ot(g),p=Ot(p);const x=m.target;let v=p.includes(x)||g.includes(x);if(e.isElement&&!v){const M=m.path||m.composedPath&&m.composedPath();M&&(v=M.find(S=>g.includes(S)||p.includes(S)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===x||e.pagination.el.contains(x)))return;let M;g.length?M=g[0].classList.contains(e.params.navigation.hiddenClass):p.length&&(M=p[0].classList.contains(e.params.navigation.hiddenClass)),i(M===!0?"navigationShow":"navigationHide"),[...g,...p].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const f=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:f,disable:h,update:a,init:u,destroy:d})}function zs(r){return r===void 0&&(r=""),`.${r.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function mE(r){let{swiper:e,extendParams:t,on:n,emit:i}=r;const s="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:x=>x,formatFractionTotal:x=>x,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(x,v){const{bulletActiveClass:M}=e.params.pagination;x&&(x=x[`${v==="prev"?"previous":"next"}ElementSibling`],x&&(x.classList.add(`${M}-${v}`),x=x[`${v==="prev"?"previous":"next"}ElementSibling`],x&&x.classList.add(`${M}-${v}-${v}`)))}function u(x,v,M){if(x=x%M,v=v%M,v===x+1)return"next";if(v===x-1)return"previous"}function d(x){const v=x.target.closest(zs(e.params.pagination.bulletClass));if(!v)return;x.preventDefault();const M=Do(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===M)return;const S=u(e.realIndex,M,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(M)}else e.slideTo(M)}function f(){const x=e.rtl,v=e.params.pagination;if(l())return;let M=e.pagination.el;M=Ot(M);let S,T;const b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,C=e.params.loop?Math.ceil(b/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(T=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,T=e.previousSnapIndex):(T=e.previousIndex||0,S=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const y=e.pagination.bullets;let E,I,D;if(v.dynamicBullets&&(o=Cc(y[0],e.isHorizontal()?"width":"height",!0),M.forEach(P=>{P.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&T!==void 0&&(a+=S-(T||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),E=Math.max(S-a,0),I=E+(Math.min(y.length,v.dynamicMainBullets)-1),D=(I+E)/2),y.forEach(P=>{const O=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(z=>`${v.bulletActiveClass}${z}`)].map(z=>typeof z=="string"&&z.includes(" ")?z.split(" "):z).flat();P.classList.remove(...O)}),M.length>1)y.forEach(P=>{const O=Do(P);O===S?P.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&P.setAttribute("part","bullet"),v.dynamicBullets&&(O>=E&&O<=I&&P.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),O===E&&c(P,"prev"),O===I&&c(P,"next"))});else{const P=y[S];if(P&&P.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&y.forEach((O,z)=>{O.setAttribute("part",z===S?"bullet-active":"bullet")}),v.dynamicBullets){const O=y[E],z=y[I];for(let W=E;W<=I;W+=1)y[W]&&y[W].classList.add(...`${v.bulletActiveClass}-main`.split(" "));c(O,"prev"),c(z,"next")}}if(v.dynamicBullets){const P=Math.min(y.length,v.dynamicMainBullets+4),O=(o*P-o)/2-D*o,z=x?"right":"left";y.forEach(W=>{W.style[e.isHorizontal()?z:"top"]=`${O}px`})}}M.forEach((y,E)=>{if(v.type==="fraction"&&(y.querySelectorAll(zs(v.currentClass)).forEach(I=>{I.textContent=v.formatFractionCurrent(S+1)}),y.querySelectorAll(zs(v.totalClass)).forEach(I=>{I.textContent=v.formatFractionTotal(C)})),v.type==="progressbar"){let I;v.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const D=(S+1)/C;let P=1,O=1;I==="horizontal"?P=D:O=D,y.querySelectorAll(zs(v.progressbarFillClass)).forEach(z=>{z.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${O})`,z.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(y.innerHTML=v.renderCustom(e,S+1,C),E===0&&i("paginationRender",y)):(E===0&&i("paginationRender",y),i("paginationUpdate",y)),e.params.watchOverflow&&e.enabled&&y.classList[e.isLocked?"add":"remove"](v.lockClass)})}function h(){const x=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let M=e.pagination.el;M=Ot(M);let S="";if(x.type==="bullets"){let T=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&T>v&&(T=v);for(let b=0;b<T;b+=1)x.renderBullet?S+=x.renderBullet.call(e,b,x.bulletClass):S+=`<${x.bulletElement} ${e.isElement?'part="bullet"':""} class="${x.bulletClass}"></${x.bulletElement}>`}x.type==="fraction"&&(x.renderFraction?S=x.renderFraction.call(e,x.currentClass,x.totalClass):S=`<span class="${x.currentClass}"></span> / <span class="${x.totalClass}"></span>`),x.type==="progressbar"&&(x.renderProgressbar?S=x.renderProgressbar.call(e,x.progressbarFillClass):S=`<span class="${x.progressbarFillClass}"></span>`),e.pagination.bullets=[],M.forEach(T=>{x.type!=="custom"&&(T.innerHTML=S||""),x.type==="bullets"&&e.pagination.bullets.push(...T.querySelectorAll(zs(x.bulletClass)))}),x.type!=="custom"&&i("paginationRender",M[0])}function _(){e.params.pagination=Lp(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const x=e.params.pagination;if(!x.el)return;let v;typeof x.el=="string"&&e.isElement&&(v=e.el.querySelector(x.el)),!v&&typeof x.el=="string"&&(v=[...document.querySelectorAll(x.el)]),v||(v=x.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof x.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(x.el)],v.length>1&&(v=v.filter(M=>wp(M,".swiper")[0]===e.el)[0])),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Ot(v),v.forEach(M=>{x.type==="bullets"&&x.clickable&&M.classList.add(...(x.clickableClass||"").split(" ")),M.classList.add(x.modifierClass+x.type),M.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.type==="bullets"&&x.dynamicBullets&&(M.classList.add(`${x.modifierClass}${x.type}-dynamic`),a=0,x.dynamicMainBullets<1&&(x.dynamicMainBullets=1)),x.type==="progressbar"&&x.progressbarOpposite&&M.classList.add(x.progressbarOppositeClass),x.clickable&&M.addEventListener("click",d),e.enabled||M.classList.add(x.lockClass)}))}function m(){const x=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=Ot(v),v.forEach(M=>{M.classList.remove(x.hiddenClass),M.classList.remove(x.modifierClass+x.type),M.classList.remove(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.clickable&&(M.classList.remove(...(x.clickableClass||"").split(" ")),M.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(M=>M.classList.remove(...x.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const x=e.params.pagination;let{el:v}=e.pagination;v=Ot(v),v.forEach(M=>{M.classList.remove(x.horizontalClass,x.verticalClass),M.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?p():(_(),h(),f())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&f()}),n("snapIndexChange",()=>{f()}),n("snapGridLengthChange",()=>{h(),f()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:x}=e.pagination;x&&(x=Ot(x),x.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{f()}),n("click",(x,v)=>{const M=v.target,S=Ot(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!M.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&M===e.navigation.nextEl||e.navigation.prevEl&&M===e.navigation.prevEl))return;const T=S[0].classList.contains(e.params.pagination.hiddenClass);i(T===!0?"paginationShow":"paginationHide"),S.forEach(b=>b.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=Ot(x),x.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),_(),h(),f()},p=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=Ot(x),x.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:g,disable:p,render:h,update:f,init:_,destroy:m})}function gE(r){const{effect:e,swiper:t,on:n,setTranslate:i,setTransition:s,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:c}=r;n("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),a&&a()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const d=o?o():{};Object.assign(t.params,d),Object.assign(t.originalParams,d)}),n("setTranslate",()=>{t.params.effect===e&&i()}),n("setTransition",(d,f)=>{t.params.effect===e&&s(f)}),n("transitionEnd",()=>{if(t.params.effect===e&&l){if(!c||!c().slideShadows)return;t.slides.forEach(d=>{d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let u;n("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(u=!0),requestAnimationFrame(()=>{u&&t.slides&&t.slides.length&&(i(),u=!1)}))})}function _E(r,e){const t=au(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function Sf(r,e,t){const n=`swiper-slide-shadow${t?`-${t}`:""}${r?` swiper-slide-shadow-${r}`:""}`,i=au(e);let s=i.querySelector(`.${n.split(" ").join(".")}`);return s||(s=pa("div",n.split(" ")),i.append(s)),s}function vE(r){let{swiper:e,extendParams:t,on:n}=r;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),gE({effect:"coverflow",swiper:e,on:n,setTranslate:()=>{const{width:o,height:a,slides:l,slidesSizesGrid:c}=e,u=e.params.coverflowEffect,d=e.isHorizontal(),f=e.translate,h=d?-f+o/2:-f+a/2,_=d?u.rotate:-u.rotate,m=u.depth,g=iy(e);for(let p=0,x=l.length;p<x;p+=1){const v=l[p],M=c[p],S=v.swiperSlideOffset,T=(h-S-M/2)/M,b=typeof u.modifier=="function"?u.modifier(T):T*u.modifier;let C=d?_*b:0,y=d?0:_*b,E=-m*Math.abs(b),I=u.stretch;typeof I=="string"&&I.indexOf("%")!==-1&&(I=parseFloat(u.stretch)/100*M);let D=d?0:I*b,P=d?I*b:0,O=1-(1-u.scale)*Math.abs(b);Math.abs(P)<.001&&(P=0),Math.abs(D)<.001&&(D=0),Math.abs(E)<.001&&(E=0),Math.abs(C)<.001&&(C=0),Math.abs(y)<.001&&(y=0),Math.abs(O)<.001&&(O=0);const z=`translate3d(${P}px,${D}px,${E}px)  rotateX(${g(y)}deg) rotateY(${g(C)}deg) scale(${O})`,W=_E(u,v);if(W.style.transform=z,v.style.zIndex=-Math.abs(Math.round(b))+1,u.slideShadows){let H=d?v.querySelector(".swiper-slide-shadow-left"):v.querySelector(".swiper-slide-shadow-top"),V=d?v.querySelector(".swiper-slide-shadow-right"):v.querySelector(".swiper-slide-shadow-bottom");H||(H=Sf("coverflow",v,d?"left":"top")),V||(V=Sf("coverflow",v,d?"right":"bottom")),H&&(H.style.opacity=b>0?b:0),V&&(V.style.opacity=-b>0?-b:0)}}},setTransition:o=>{e.slides.map(l=>au(l)).forEach(l=>{l.style.transitionDuration=`${o}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function xE(){nt.from(".project-title",{duration:1.5,xPercent:-100,opacity:0,scrollTrigger:{trigger:".projects",start:"top 70%",end:"top 60%",scrub:!0}});const r=new In(".projects-container",{modules:[pE,mE,vE],effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",initialSlide:1,loop:!0,spaceBetween:30,coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5,slideShadows:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,effect:"slide"},768:{slidesPerView:2,effect:"coverflow"},1024:{slidesPerView:3,effect:"coverflow"}},on:{init:function(){e()}}});function e(){document.querySelectorAll(".slider-content").forEach(i=>{const s=i.querySelector(".show-project");i.addEventListener("mouseenter",()=>{nt.to(s,{scaleY:1,duration:.5,ease:"power3.out"})}),i.addEventListener("mouseleave",()=>{nt.to(s,{scaleY:0,duration:.3,ease:"power3.in"})}),i.addEventListener("click",()=>{window.innerWidth<768&&nt.to(s,{scaleY:s.scaleY===1?0:1,duration:.5,ease:"power3.inOut"})})})}const t=document.createElement("style");return t.textContent=`
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
  `,document.head.appendChild(t),()=>{r&&r.destroy(),t.remove()}}nt.registerPlugin(ze);ze.normalizeScroll(!0);function SE(){const r=document.querySelector(".contact > .title-container"),e=document.querySelectorAll(" .contact-title");nt.from(e,{duration:3.5,xPercent:-100,opacity:0,ease:"powe3.out",stagger:.25,scrollTrigger:{trigger:r,start:"top 70%",end:"top 60%",scrub:!0}});const t=document.querySelector(".contact-container"),n=t.querySelectorAll(":scope > *");nt.from(n,{duration:3.5,yPercent:100,opacity:0,ease:"powe3.out",stagger:.25,scrollTrigger:{trigger:t,start:"top 70%",end:"top 50%",scrub:!0}})}function ME(){const r=document.querySelectorAll("img[data-src]"),e=new IntersectionObserver((t,n)=>{t.forEach(i=>{if(i.isIntersecting){const s=i.target;s.src=s.dataset.src,s.onload=()=>s.classList.remove("lazy"),n.unobserve(s)}})});r.forEach(t=>e.observe(t))}function yE(r){const e=document.querySelector("#tech-container"),t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(r(),t.unobserve(i.target))})},{threshold:.1});e&&t.observe(e)}nt.registerPlugin(ze);ze.normalizeScroll(!0);ze.config({limitCallbacks:!0,ignoreMobileResize:!0});function Mf(){ME(),cg();const r=pg(),e=new CM({dom:document.querySelector("#myThreeJsCanvas")});window.addEventListener("resize",()=>{e&&e.resize()}),yE(()=>{YM()}),RM(),LM(),xE(),SE(),window.addEventListener("unload",()=>{r&&r(),e&&e.dispose()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Mf):Mf();
