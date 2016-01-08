
/* jquery-2.1.1.min.js */

/* 1 */ /*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
/* 2 */ !function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
/* 3 */ },_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
/* 4 */ },removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/* 5 */ 

;
/* bootstrap.min.js */

/* 1 */ /*!
/* 2 *|  * Bootstrap v3.3.2 (http://getbootstrap.com)
/* 3 *|  * Copyright 2011-2015 Twitter, Inc.
/* 4 *|  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
/* 5 *|  */
/* 6 */ if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.2",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.2",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.2",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.2",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.2",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.2",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()
/* 7 */ }var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.2",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

;
/* libs.js */

/* 1  */ // jQuery Cookie Plugin v1.4.1 | (c)2014 Klaus Hartl 
/* 2  */ (function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a);}else{if(typeof exports==="object"){a(require("jquery"));}else{a(jQuery);}}}(function(f){var a=/\+/g;function d(i){return b.raw?i:encodeURIComponent(i);}function g(i){return b.raw?i:decodeURIComponent(i);}function h(i){return d(b.json?JSON.stringify(i):String(i));}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\");}try{i=decodeURIComponent(i.replace(a," "));return b.json?JSON.parse(i):i;}catch(j){}}function e(j,i){var k=b.raw?j:c(j);return f.isFunction(i)?i(k):k;}var b=f.cookie=function(q,p,v){if(arguments.length>1&&!f.isFunction(p)){v=f.extend({},b.defaults,v);if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();u.setTime(+u+r*86400000);}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""));}var w=q?undefined:{};var s=document.cookie?document.cookie.split("; "):[];for(var o=0,m=s.length;o<m;o++){var n=s[o].split("=");var j=g(n.shift());var k=n.join("=");if(q&&q===j){w=e(k,p);break;}if(!q&&(k=e(k))!==undefined){w[j]=k;}}return w;};b.defaults={};f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false;}f.cookie(j,"",f.extend({},i,{expires:-1}));return !f.cookie(j);};}));
/* 3  */ 
/* 4  */ //jQuery elevateZoom 3.0.8
/* 5  */ "function"!=typeof Object.create&&(Object.create=function(o){function i(){}return i.prototype=o,new i}),function(o){var i={init:function(i,t){var e=this;e.elem=t,e.$elem=o(t),e.imageSrc=e.$elem.data("zoom-image")?e.$elem.data("zoom-image"):e.$elem.attr("src"),e.options=o.extend({},o.fn.elevateZoom.options,i),e.options.tint&&(e.options.lensColour="none",e.options.lensOpacity="1"),"inner"==e.options.zoomType&&(e.options.showLens=!1),e.$elem.parent().removeAttr("title").removeAttr("alt"),e.zoomImage=e.imageSrc,e.refresh(1),o("#"+e.options.gallery+" a").click(function(i){return e.options.galleryActiveClass&&(o("#"+e.options.gallery+" a").removeClass(e.options.galleryActiveClass),o(this).addClass(e.options.galleryActiveClass)),i.preventDefault(),e.zoomImagePre=o(this).data(o(this).data("zoom-image")?"zoom-image":"image"),e.swaptheimage(o(this).data("image"),e.zoomImagePre),!1})},refresh:function(o){var i=this;setTimeout(function(){i.fetch(i.imageSrc)},o||i.options.refresh)},fetch:function(o){var i=this,t=new Image;t.onload=function(){i.largeWidth=t.width,i.largeHeight=t.height,i.startZoom(),i.currentImage=i.imageSrc,i.options.onZoomedImageLoaded(i.$elem)},t.src=o},startZoom:function(){var i=this;if(i.nzWidth=i.$elem.width(),i.nzHeight=i.$elem.height(),i.isWindowActive=!1,i.isLensActive=!1,i.isTintActive=!1,i.overWindow=!1,i.options.imageCrossfade&&(i.zoomWrap=i.$elem.wrap('<div style="height:'+i.nzHeight+"px;width:"+i.nzWidth+'px;" class="zoomWrapper" />'),i.$elem.css("position","absolute")),i.zoomLock=1,i.scrollingLock=!1,i.changeBgSize=!1,i.currentZoomLevel=i.options.zoomLevel,i.nzOffset=i.$elem.offset(),i.widthRatio=i.largeWidth/i.currentZoomLevel/i.nzWidth,i.heightRatio=i.largeHeight/i.currentZoomLevel/i.nzHeight,"window"==i.options.zoomType&&(i.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(i.options.zoomWindowBgColour)+";width: "+String(i.options.zoomWindowWidth)+"px;height: "+String(i.options.zoomWindowHeight)+"px;float: left;background-size: "+i.largeWidth/i.currentZoomLevel+"px "+i.largeHeight/i.currentZoomLevel+"px;display: none;z-index:100;border: "+String(i.options.borderSize)+"px solid "+i.options.borderColour+";background-repeat: no-repeat;position: absolute;"),"inner"==i.options.zoomType){var t=i.$elem.css("border-left-width");i.zoomWindowStyle="overflow: hidden;margin-left: "+String(t)+";margin-top: "+String(t)+";background-position: 0px 0px;width: "+String(i.nzWidth)+"px;height: "+String(i.nzHeight)+"px;float: left;display: none;cursor:"+i.options.cursor+";px solid "+i.options.borderColour+";background-repeat: no-repeat;position: absolute;"}"window"==i.options.zoomType&&(lensHeight=i.nzHeight<i.options.zoomWindowWidth/i.widthRatio?i.nzHeight:String(i.options.zoomWindowHeight/i.heightRatio),lensWidth=i.largeWidth<i.options.zoomWindowWidth?i.nzWidth:i.options.zoomWindowWidth/i.widthRatio,i.lensStyle="background-position: 0px 0px;width: "+String(i.options.zoomWindowWidth/i.widthRatio)+"px;height: "+String(i.options.zoomWindowHeight/i.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+i.options.lensOpacity+";filter: alpha(opacity = "+100*i.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+i.options.lensColour+";cursor:"+i.options.cursor+";border: "+i.options.lensBorderSize+"px solid "+i.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;"),i.tintStyle="display: block;position: absolute;background-color: "+i.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+i.nzWidth+"px;height: "+i.nzHeight+"px;",i.lensRound="","lens"==i.options.zoomType&&(i.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(i.options.borderSize)+"px solid "+i.options.borderColour+";width:"+String(i.options.lensSize)+"px;height:"+String(i.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;"),"round"==i.options.lensShape&&(i.lensRound="border-top-left-radius: "+String(i.options.lensSize/2+i.options.borderSize)+"px;border-top-right-radius: "+String(i.options.lensSize/2+i.options.borderSize)+"px;border-bottom-left-radius: "+String(i.options.lensSize/2+i.options.borderSize)+"px;border-bottom-right-radius: "+String(i.options.lensSize/2+i.options.borderSize)+"px;"),i.zoomContainer=o('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+i.nzOffset.left+"px;top:"+i.nzOffset.top+"px;height:"+i.nzHeight+"px;width:"+i.nzWidth+'px;"></div>'),o("body").append(i.zoomContainer),i.options.containLensZoom&&"lens"==i.options.zoomType&&i.zoomContainer.css("overflow","hidden"),"inner"!=i.options.zoomType&&(i.zoomLens=o("<div class='zoomLens' style='"+i.lensStyle+i.lensRound+"'>&nbsp;</div>").appendTo(i.zoomContainer).click(function(){i.$elem.trigger("click")}),i.options.tint&&(i.tintContainer=o("<div/>").addClass("tintContainer"),i.zoomTint=o("<div class='zoomTint' style='"+i.tintStyle+"'></div>"),i.zoomLens.wrap(i.tintContainer),i.zoomTintcss=i.zoomLens.after(i.zoomTint),i.zoomTintImage=o('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+i.nzWidth+"px; height: "+i.nzHeight+'px;" src="'+i.imageSrc+'">').appendTo(i.zoomLens).click(function(){i.$elem.trigger("click")}))),i.zoomWindow=isNaN(i.options.zoomWindowPosition)?o("<div style='z-index:999;left:"+i.windowOffsetLeft+"px;top:"+i.windowOffsetTop+"px;"+i.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){i.$elem.trigger("click")}):o("<div style='z-index:999;left:"+i.windowOffsetLeft+"px;top:"+i.windowOffsetTop+"px;"+i.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo(i.zoomContainer).click(function(){i.$elem.trigger("click")}),i.zoomWindowContainer=o("<div/>").addClass("zoomWindowContainer").css("width",i.options.zoomWindowWidth),i.zoomWindow.wrap(i.zoomWindowContainer),"lens"==i.options.zoomType&&i.zoomLens.css({backgroundImage:"url('"+i.imageSrc+"')"}),"window"==i.options.zoomType&&i.zoomWindow.css({backgroundImage:"url('"+i.imageSrc+"')"}),"inner"==i.options.zoomType&&i.zoomWindow.css({backgroundImage:"url('"+i.imageSrc+"')"}),i.$elem.bind("touchmove",function(o){o.preventDefault(),i.setPosition(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}),i.zoomContainer.bind("touchmove",function(o){"inner"==i.options.zoomType&&i.showHideWindow("show"),o.preventDefault(),i.setPosition(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}),i.zoomContainer.bind("touchend",function(){i.showHideWindow("hide"),i.options.showLens&&i.showHideLens("hide"),i.options.tint&&"inner"!=i.options.zoomType&&i.showHideTint("hide")}),i.$elem.bind("touchend",function(){i.showHideWindow("hide"),i.options.showLens&&i.showHideLens("hide"),i.options.tint&&"inner"!=i.options.zoomType&&i.showHideTint("hide")}),i.options.showLens&&(i.zoomLens.bind("touchmove",function(o){o.preventDefault(),i.setPosition(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}),i.zoomLens.bind("touchend",function(){i.showHideWindow("hide"),i.options.showLens&&i.showHideLens("hide"),i.options.tint&&"inner"!=i.options.zoomType&&i.showHideTint("hide")})),i.$elem.bind("mousemove",function(o){0==i.overWindow&&i.setElements("show"),(i.lastX!==o.clientX||i.lastY!==o.clientY)&&(i.setPosition(o),i.currentLoc=o),i.lastX=o.clientX,i.lastY=o.clientY}),i.zoomContainer.bind("mousemove",function(o){0==i.overWindow&&i.setElements("show"),(i.lastX!==o.clientX||i.lastY!==o.clientY)&&(i.setPosition(o),i.currentLoc=o),i.lastX=o.clientX,i.lastY=o.clientY}),"inner"!=i.options.zoomType&&i.zoomLens.bind("mousemove",function(o){(i.lastX!==o.clientX||i.lastY!==o.clientY)&&(i.setPosition(o),i.currentLoc=o),i.lastX=o.clientX,i.lastY=o.clientY}),i.options.tint&&"inner"!=i.options.zoomType&&i.zoomTint.bind("mousemove",function(o){(i.lastX!==o.clientX||i.lastY!==o.clientY)&&(i.setPosition(o),i.currentLoc=o),i.lastX=o.clientX,i.lastY=o.clientY}),"inner"==i.options.zoomType&&i.zoomWindow.bind("mousemove",function(o){(i.lastX!==o.clientX||i.lastY!==o.clientY)&&(i.setPosition(o),i.currentLoc=o),i.lastX=o.clientX,i.lastY=o.clientY}),i.zoomContainer.add(i.$elem).mouseenter(function(){0==i.overWindow&&i.setElements("show")}).mouseleave(function(){i.scrollLock||i.setElements("hide")}),"inner"!=i.options.zoomType&&i.zoomWindow.mouseenter(function(){i.overWindow=!0,i.setElements("hide")}).mouseleave(function(){i.overWindow=!1}),i.minZoomLevel=i.options.minZoomLevel?i.options.minZoomLevel:2*i.options.scrollZoomIncrement,i.options.scrollZoom&&i.zoomContainer.add(i.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(t){i.scrollLock=!0,clearTimeout(o.data(this,"timer")),o.data(this,"timer",setTimeout(function(){i.scrollLock=!1},250));var e=t.originalEvent.wheelDelta||-1*t.originalEvent.detail;return t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e/120>0?i.currentZoomLevel>=i.minZoomLevel&&i.changeZoomLevel(i.currentZoomLevel-i.options.scrollZoomIncrement):i.options.maxZoomLevel?i.currentZoomLevel<=i.options.maxZoomLevel&&i.changeZoomLevel(parseFloat(i.currentZoomLevel)+i.options.scrollZoomIncrement):i.changeZoomLevel(parseFloat(i.currentZoomLevel)+i.options.scrollZoomIncrement),!1})},setElements:function(o){return this.options.zoomEnabled?("show"==o&&this.isWindowSet&&("inner"==this.options.zoomType&&this.showHideWindow("show"),"window"==this.options.zoomType&&this.showHideWindow("show"),this.options.showLens&&this.showHideLens("show"),this.options.tint&&"inner"!=this.options.zoomType&&this.showHideTint("show")),void("hide"==o&&("window"==this.options.zoomType&&this.showHideWindow("hide"),this.options.tint||this.showHideWindow("hide"),this.options.showLens&&this.showHideLens("hide"),this.options.tint&&this.showHideTint("hide")))):!1},setPosition:function(o){return this.options.zoomEnabled?(this.nzHeight=this.$elem.height(),this.nzWidth=this.$elem.width(),this.nzOffset=this.$elem.offset(),this.options.tint&&"inner"!=this.options.zoomType&&(this.zoomTint.css({top:0}),this.zoomTint.css({left:0})),this.options.responsive&&!this.options.scrollZoom&&this.options.showLens&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.largeWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,"lens"!=this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.zoomLens.css("width",lensWidth),this.zoomLens.css("height",lensHeight),this.options.tint&&(this.zoomTintImage.css("width",this.nzWidth),this.zoomTintImage.css("height",this.nzHeight))),"lens"==this.options.zoomType&&this.zoomLens.css({width:String(this.options.lensSize)+"px",height:String(this.options.lensSize)+"px"})),this.zoomContainer.css({top:this.nzOffset.top}),this.zoomContainer.css({left:this.nzOffset.left}),this.mouseLeft=parseInt(o.pageX-this.nzOffset.left),this.mouseTop=parseInt(o.pageY-this.nzOffset.top),"window"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.zoomLens.height()/2,this.Eboppos=this.mouseTop>this.nzHeight-this.zoomLens.height()/2-2*this.options.lensBorderSize,this.Eloppos=this.mouseLeft<0+this.zoomLens.width()/2,this.Eroppos=this.mouseLeft>this.nzWidth-this.zoomLens.width()/2-2*this.options.lensBorderSize),"inner"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.nzHeight/2/this.heightRatio,this.Eboppos=this.mouseTop>this.nzHeight-this.nzHeight/2/this.heightRatio,this.Eloppos=this.mouseLeft<0+this.nzWidth/2/this.widthRatio,this.Eroppos=this.mouseLeft>this.nzWidth-this.nzWidth/2/this.widthRatio-2*this.options.lensBorderSize),void(0>=this.mouseLeft||0>this.mouseTop||this.mouseLeft>this.nzWidth||this.mouseTop>this.nzHeight?this.setElements("hide"):(this.options.showLens&&(this.lensLeftPos=String(this.mouseLeft-this.zoomLens.width()/2),this.lensTopPos=String(this.mouseTop-this.zoomLens.height()/2)),this.Etoppos&&(this.lensTopPos=0),this.Eloppos&&(this.tintpos=this.lensLeftPos=this.windowLeftPos=0),"window"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),"inner"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.nzWidth-2*this.options.lensBorderSize)),"lens"==this.options.zoomType&&(this.windowLeftPos=String(-1*((o.pageX-this.nzOffset.left)*this.widthRatio-this.zoomLens.width()/2)),this.windowTopPos=String(-1*((o.pageY-this.nzOffset.top)*this.heightRatio-this.zoomLens.height()/2)),this.zoomLens.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}),this.changeBgSize&&(this.nzHeight>this.nzWidth?("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"})):("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"})),this.changeBgSize=!1),this.setWindowPostition(o)),this.options.tint&&"inner"!=this.options.zoomType&&this.setTintPosition(o),"window"==this.options.zoomType&&this.setWindowPostition(o),"inner"==this.options.zoomType&&this.setWindowPostition(o),this.options.showLens&&(this.fullwidth&&"lens"!=this.options.zoomType&&(this.lensLeftPos=0),this.zoomLens.css({left:this.lensLeftPos+"px",top:this.lensTopPos+"px"}))))):!1},showHideWindow:function(o){"show"!=o||this.isWindowActive||(this.options.zoomWindowFadeIn?this.zoomWindow.stop(!0,!0,!1).fadeIn(this.options.zoomWindowFadeIn):this.zoomWindow.show(),this.isWindowActive=!0),"hide"==o&&this.isWindowActive&&(this.options.zoomWindowFadeOut?this.zoomWindow.stop(!0,!0).fadeOut(this.options.zoomWindowFadeOut):this.zoomWindow.hide(),this.isWindowActive=!1)},showHideLens:function(o){"show"!=o||this.isLensActive||(this.options.lensFadeIn?this.zoomLens.stop(!0,!0,!1).fadeIn(this.options.lensFadeIn):this.zoomLens.show(),this.isLensActive=!0),"hide"==o&&this.isLensActive&&(this.options.lensFadeOut?this.zoomLens.stop(!0,!0).fadeOut(this.options.lensFadeOut):this.zoomLens.hide(),this.isLensActive=!1)},showHideTint:function(o){"show"!=o||this.isTintActive||(this.options.zoomTintFadeIn?this.zoomTint.css({opacity:this.options.tintOpacity}).animate().stop(!0,!0).fadeIn("slow"):(this.zoomTint.css({opacity:this.options.tintOpacity}).animate(),this.zoomTint.show()),this.isTintActive=!0),"hide"==o&&this.isTintActive&&(this.options.zoomTintFadeOut?this.zoomTint.stop(!0,!0).fadeOut(this.options.zoomTintFadeOut):this.zoomTint.hide(),this.isTintActive=!1)},setLensPostition:function(){},setWindowPostition:function(i){var t=this;if(isNaN(t.options.zoomWindowPosition))t.externalContainer=o("#"+t.options.zoomWindowPosition),t.externalContainerWidth=t.externalContainer.width(),t.externalContainerHeight=t.externalContainer.height(),t.externalContainerOffset=t.externalContainer.offset(),t.windowOffsetTop=t.externalContainerOffset.top,t.windowOffsetLeft=t.externalContainerOffset.left;else switch(t.options.zoomWindowPosition){case 1:t.windowOffsetTop=t.options.zoomWindowOffety,t.windowOffsetLeft=+t.nzWidth;break;case 2:t.options.zoomWindowHeight>t.nzHeight&&(t.windowOffsetTop=-1*(t.options.zoomWindowHeight/2-t.nzHeight/2),t.windowOffsetLeft=t.nzWidth);break;case 3:t.windowOffsetTop=t.nzHeight-t.zoomWindow.height()-2*t.options.borderSize,t.windowOffsetLeft=t.nzWidth;break;case 4:t.windowOffsetTop=t.nzHeight,t.windowOffsetLeft=t.nzWidth;break;case 5:t.windowOffsetTop=t.nzHeight,t.windowOffsetLeft=t.nzWidth-t.zoomWindow.width()-2*t.options.borderSize;break;case 6:t.options.zoomWindowHeight>t.nzHeight&&(t.windowOffsetTop=t.nzHeight,t.windowOffsetLeft=-1*(t.options.zoomWindowWidth/2-t.nzWidth/2+2*t.options.borderSize));break;case 7:t.windowOffsetTop=t.nzHeight,t.windowOffsetLeft=0;break;case 8:t.windowOffsetTop=t.nzHeight,t.windowOffsetLeft=-1*(t.zoomWindow.width()+2*t.options.borderSize);break;case 9:t.windowOffsetTop=t.nzHeight-t.zoomWindow.height()-2*t.options.borderSize,t.windowOffsetLeft=-1*(t.zoomWindow.width()+2*t.options.borderSize);break;case 10:t.options.zoomWindowHeight>t.nzHeight&&(t.windowOffsetTop=-1*(t.options.zoomWindowHeight/2-t.nzHeight/2),t.windowOffsetLeft=-1*(t.zoomWindow.width()+2*t.options.borderSize));break;case 11:t.windowOffsetTop=t.options.zoomWindowOffety,t.windowOffsetLeft=-1*(t.zoomWindow.width()+2*t.options.borderSize);break;case 12:t.windowOffsetTop=-1*(t.zoomWindow.height()+2*t.options.borderSize),t.windowOffsetLeft=-1*(t.zoomWindow.width()+2*t.options.borderSize);break;case 13:t.windowOffsetTop=-1*(t.zoomWindow.height()+2*t.options.borderSize),t.windowOffsetLeft=0;break;case 14:t.options.zoomWindowHeight>t.nzHeight&&(t.windowOffsetTop=-1*(t.zoomWindow.height()+2*t.options.borderSize),t.windowOffsetLeft=-1*(t.options.zoomWindowWidth/2-t.nzWidth/2+2*t.options.borderSize));break;case 15:t.windowOffsetTop=-1*(t.zoomWindow.height()+2*t.options.borderSize),t.windowOffsetLeft=t.nzWidth-t.zoomWindow.width()-2*t.options.borderSize;break;case 16:t.windowOffsetTop=-1*(t.zoomWindow.height()+2*t.options.borderSize),t.windowOffsetLeft=t.nzWidth;break;default:t.windowOffsetTop=t.options.zoomWindowOffety,t.windowOffsetLeft=t.nzWidth}t.isWindowSet=!0,t.windowOffsetTop+=t.options.zoomWindowOffety,t.windowOffsetLeft+=t.options.zoomWindowOffetx,t.zoomWindow.css({top:t.windowOffsetTop}),t.zoomWindow.css({left:t.windowOffsetLeft}),"inner"==t.options.zoomType&&(t.zoomWindow.css({top:0}),t.zoomWindow.css({left:0})),t.windowLeftPos=String(-1*((i.pageX-t.nzOffset.left)*t.widthRatio-t.zoomWindow.width()/2)),t.windowTopPos=String(-1*((i.pageY-t.nzOffset.top)*t.heightRatio-t.zoomWindow.height()/2)),t.Etoppos&&(t.windowTopPos=0),t.Eloppos&&(t.windowLeftPos=0),t.Eboppos&&(t.windowTopPos=-1*(t.largeHeight/t.currentZoomLevel-t.zoomWindow.height())),t.Eroppos&&(t.windowLeftPos=-1*(t.largeWidth/t.currentZoomLevel-t.zoomWindow.width())),t.fullheight&&(t.windowTopPos=0),t.fullwidth&&(t.windowLeftPos=0),("window"==t.options.zoomType||"inner"==t.options.zoomType)&&(1==t.zoomLock&&(1>=t.widthRatio&&(t.windowLeftPos=0),1>=t.heightRatio&&(t.windowTopPos=0)),t.largeHeight<t.options.zoomWindowHeight&&(t.windowTopPos=0),t.largeWidth<t.options.zoomWindowWidth&&(t.windowLeftPos=0),t.options.easing?(t.xp||(t.xp=0),t.yp||(t.yp=0),t.loop||(t.loop=setInterval(function(){t.xp+=(t.windowLeftPos-t.xp)/t.options.easingAmount,t.yp+=(t.windowTopPos-t.yp)/t.options.easingAmount,t.scrollingLock?(clearInterval(t.loop),t.xp=t.windowLeftPos,t.yp=t.windowTopPos,t.xp=-1*((i.pageX-t.nzOffset.left)*t.widthRatio-t.zoomWindow.width()/2),t.yp=-1*((i.pageY-t.nzOffset.top)*t.heightRatio-t.zoomWindow.height()/2),t.changeBgSize&&(t.nzHeight>t.nzWidth?("lens"==t.options.zoomType&&t.zoomLens.css({"background-size":t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"}),t.zoomWindow.css({"background-size":t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"})):("lens"!=t.options.zoomType&&t.zoomLens.css({"background-size":t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvalueheight+"px"}),t.zoomWindow.css({"background-size":t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"})),t.changeBgSize=!1),t.zoomWindow.css({backgroundPosition:t.windowLeftPos+"px "+t.windowTopPos+"px"}),t.scrollingLock=!1,t.loop=!1):(t.changeBgSize&&(t.nzHeight>t.nzWidth?("lens"==t.options.zoomType&&t.zoomLens.css({"background-size":t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"}),t.zoomWindow.css({"background-size":t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"})):("lens"!=t.options.zoomType&&t.zoomLens.css({"background-size":t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"}),t.zoomWindow.css({"background-size":t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"})),t.changeBgSize=!1),t.zoomWindow.css({backgroundPosition:t.xp+"px "+t.yp+"px"}))},16))):(t.changeBgSize&&(t.nzHeight>t.nzWidth?("lens"==t.options.zoomType&&t.zoomLens.css({"background-size":t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"}),t.zoomWindow.css({"background-size":t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"})):("lens"==t.options.zoomType&&t.zoomLens.css({"background-size":t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"}),t.zoomWindow.css(t.largeHeight/t.newvaluewidth<t.options.zoomWindowHeight?{"background-size":t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"}:{"background-size":t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"})),t.changeBgSize=!1),t.zoomWindow.css({backgroundPosition:t.windowLeftPos+"px "+t.windowTopPos+"px"})))},setTintPosition:function(o){this.nzOffset=this.$elem.offset(),this.tintpos=String(-1*(o.pageX-this.nzOffset.left-this.zoomLens.width()/2)),this.tintposy=String(-1*(o.pageY-this.nzOffset.top-this.zoomLens.height()/2)),this.Etoppos&&(this.tintposy=0),this.Eloppos&&(this.tintpos=0),this.Eboppos&&(this.tintposy=-1*(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize)),this.Eroppos&&(this.tintpos=-1*(this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),this.options.tint&&(this.fullheight&&(this.tintposy=0),this.fullwidth&&(this.tintpos=0),this.zoomTintImage.css({left:this.tintpos+"px"}),this.zoomTintImage.css({top:this.tintposy+"px"}))},swaptheimage:function(i,t){var e=this,n=new Image;e.options.loadingIcon&&(e.spinner=o("<div style=\"background: url('"+e.options.loadingIcon+"') no-repeat center;height:"+e.nzHeight+"px;width:"+e.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),e.$elem.after(e.spinner)),e.options.onImageSwap(e.$elem),n.onload=function(){e.largeWidth=n.width,e.largeHeight=n.height,e.zoomImage=t,e.zoomWindow.css({"background-size":e.largeWidth+"px "+e.largeHeight+"px"}),e.zoomWindow.css({"background-size":e.largeWidth+"px "+e.largeHeight+"px"}),e.swapAction(i,t)},n.src=t},swapAction:function(i,t){var e=this,n=new Image;if(n.onload=function(){e.nzHeight=n.height,e.nzWidth=n.width,e.options.onImageSwapComplete(e.$elem),e.doneCallback()},n.src=i,e.currentZoomLevel=e.options.zoomLevel,e.options.maxZoomLevel=!1,"lens"==e.options.zoomType&&e.zoomLens.css({backgroundImage:"url('"+t+"')"}),"window"==e.options.zoomType&&e.zoomWindow.css({backgroundImage:"url('"+t+"')"}),"inner"==e.options.zoomType&&e.zoomWindow.css({backgroundImage:"url('"+t+"')"}),e.currentImage=t,e.options.imageCrossfade){var s=e.$elem,h=s.clone();e.$elem.attr("src",i),e.$elem.after(h),h.stop(!0).fadeOut(e.options.imageCrossfade,function(){o(this).remove()}),e.$elem.width("auto").removeAttr("width"),e.$elem.height("auto").removeAttr("height"),s.fadeIn(e.options.imageCrossfade),e.options.tint&&"inner"!=e.options.zoomType&&(s=e.zoomTintImage,h=s.clone(),e.zoomTintImage.attr("src",t),e.zoomTintImage.after(h),h.stop(!0).fadeOut(e.options.imageCrossfade,function(){o(this).remove()}),s.fadeIn(e.options.imageCrossfade),e.zoomTint.css({height:e.$elem.height()}),e.zoomTint.css({width:e.$elem.width()})),e.zoomContainer.css("height",e.$elem.height()),e.zoomContainer.css("width",e.$elem.width()),"inner"!=e.options.zoomType||e.options.constrainType||(e.zoomWrap.parent().css("height",e.$elem.height()),e.zoomWrap.parent().css("width",e.$elem.width()),e.zoomWindow.css("height",e.$elem.height()),e.zoomWindow.css("width",e.$elem.width()))}else e.$elem.attr("src",i),e.options.tint&&(e.zoomTintImage.attr("src",t),e.zoomTintImage.attr("height",e.$elem.height()),e.zoomTintImage.css({height:e.$elem.height()}),e.zoomTint.css({height:e.$elem.height()})),e.zoomContainer.css("height",e.$elem.height()),e.zoomContainer.css("width",e.$elem.width());e.options.imageCrossfade&&(e.zoomWrap.css("height",e.$elem.height()),e.zoomWrap.css("width",e.$elem.width())),e.options.constrainType&&("height"==e.options.constrainType&&(e.zoomContainer.css("height",e.options.constrainSize),e.zoomContainer.css("width","auto"),e.options.imageCrossfade?(e.zoomWrap.css("height",e.options.constrainSize),e.zoomWrap.css("width","auto"),e.constwidth=e.zoomWrap.width()):(e.$elem.css("height",e.options.constrainSize),e.$elem.css("width","auto"),e.constwidth=e.$elem.width()),"inner"==e.options.zoomType&&(e.zoomWrap.parent().css("height",e.options.constrainSize),e.zoomWrap.parent().css("width",e.constwidth),e.zoomWindow.css("height",e.options.constrainSize),e.zoomWindow.css("width",e.constwidth)),e.options.tint&&(e.tintContainer.css("height",e.options.constrainSize),e.tintContainer.css("width",e.constwidth),e.zoomTint.css("height",e.options.constrainSize),e.zoomTint.css("width",e.constwidth),e.zoomTintImage.css("height",e.options.constrainSize),e.zoomTintImage.css("width",e.constwidth))),"width"==e.options.constrainType&&(e.zoomContainer.css("height","auto"),e.zoomContainer.css("width",e.options.constrainSize),e.options.imageCrossfade?(e.zoomWrap.css("height","auto"),e.zoomWrap.css("width",e.options.constrainSize),e.constheight=e.zoomWrap.height()):(e.$elem.css("height","auto"),e.$elem.css("width",e.options.constrainSize),e.constheight=e.$elem.height()),"inner"==e.options.zoomType&&(e.zoomWrap.parent().css("height",e.constheight),e.zoomWrap.parent().css("width",e.options.constrainSize),e.zoomWindow.css("height",e.constheight),e.zoomWindow.css("width",e.options.constrainSize)),e.options.tint&&(e.tintContainer.css("height",e.constheight),e.tintContainer.css("width",e.options.constrainSize),e.zoomTint.css("height",e.constheight),e.zoomTint.css("width",e.options.constrainSize),e.zoomTintImage.css("height",e.constheight),e.zoomTintImage.css("width",e.options.constrainSize))))},doneCallback:function(){this.options.loadingIcon&&this.spinner.hide(),this.nzOffset=this.$elem.offset(),this.nzWidth=this.$elem.width(),this.nzHeight=this.$elem.height(),this.currentZoomLevel=this.options.zoomLevel,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,"window"==this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.zoomLens&&(this.zoomLens.css("width",lensWidth),this.zoomLens.css("height",lensHeight)))},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var i=this;return i.gallerylist=[],i.options.gallery?o("#"+i.options.gallery+" a").each(function(){var t="";o(this).data("zoom-image")?t=o(this).data("zoom-image"):o(this).data("image")&&(t=o(this).data("image")),t==i.zoomImage?i.gallerylist.unshift({href:""+t,title:o(this).find("img").attr("title")}):i.gallerylist.push({href:""+t,title:o(this).find("img").attr("title")})}):i.gallerylist.push({href:""+i.zoomImage,title:o(this).find("img").attr("title")}),i.gallerylist},changeZoomLevel:function(o){this.scrollingLock=!0,this.newvalue=parseFloat(o).toFixed(2),newvalue=parseFloat(o).toFixed(2),maxheightnewvalue=this.largeHeight/(this.options.zoomWindowHeight/this.nzHeight*this.nzHeight),maxwidthtnewvalue=this.largeWidth/(this.options.zoomWindowWidth/this.nzWidth*this.nzWidth),"inner"!=this.options.zoomType&&(maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/maxheightnewvalue/this.nzHeight,this.newvalueheight=maxheightnewvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/maxwidthtnewvalue/this.nzWidth,this.newvaluewidth=maxwidthtnewvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1),"lens"==this.options.zoomType&&(maxheightnewvalue<=newvalue?(this.fullwidth=!0,this.newvaluewidth=maxheightnewvalue):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1))),"inner"==this.options.zoomType&&(maxheightnewvalue=parseFloat(this.largeHeight/this.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(this.largeWidth/this.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue>maxwidthtnewvalue?maxwidthtnewvalue:newvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1)),scrcontinue=!1,"inner"==this.options.zoomType&&(this.nzWidth>this.nzHeight&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)),this.nzHeight>this.nzWidth&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0))),"inner"!=this.options.zoomType&&(scrcontinue=!0),scrcontinue&&(this.zoomLock=0,this.changeZoom=!0,this.options.zoomWindowHeight/this.heightRatio<=this.nzHeight&&(this.currentZoomLevel=this.newvalueheight,"lens"!=this.options.zoomType&&"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({height:String(this.options.zoomWindowHeight/this.heightRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),this.options.zoomWindowWidth/this.widthRatio<=this.nzWidth&&("inner"!=this.options.zoomType&&this.newvaluewidth>this.newvalueheight&&(this.currentZoomLevel=this.newvaluewidth),"lens"!=this.options.zoomType&&"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({width:String(this.options.zoomWindowWidth/this.widthRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),"inner"==this.options.zoomType&&(this.changeBgSize=!0,this.nzWidth>this.nzHeight&&(this.currentZoomLevel=this.newvaluewidth),this.nzHeight>this.nzWidth&&(this.currentZoomLevel=this.newvaluewidth))),this.setPosition(this.currentLoc)},closeAll:function(){self.zoomWindow&&self.zoomWindow.hide(),self.zoomLens&&self.zoomLens.hide(),self.zoomTint&&self.zoomTint.hide()},changeState:function(o){"enable"==o&&(this.options.zoomEnabled=!0),"disable"==o&&(this.options.zoomEnabled=!1)}};o.fn.elevateZoom=function(t){return this.each(function(){var e=Object.create(i);e.init(t,this),o.data(this,"elevateZoom",e)})},o.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:.4,gallery:!1,galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:!1,cursor:"default",responsive:!0,onComplete:o.noop,onZoomedImageLoaded:function(){},onImageSwap:o.noop,onImageSwapComplete:o.noop}}(jQuery,window,document);
/* 6  */ 
/* 7  */ // jQuery jGrowl v1.4.3 | Licensed under the MIT License
/* 8  */ !function(a){a.jGrowl=function(b,c){0===a("#jGrowl").length&&a('<div id="jGrowl"></div>').addClass(c&&c.position?c.position:a.jGrowl.defaults.position).appendTo(c&&c.appendTo?c.appendTo:a.jGrowl.defaults.appendTo),a("#jGrowl").jGrowl(b,c)},a.fn.jGrowl=function(b,c){if(void 0===c&&a.isPlainObject(b)&&(c=b,b=c.message),a.isFunction(this.each)){var d=arguments;return this.each(function(){void 0===a(this).data("jGrowl.instance")&&(a(this).data("jGrowl.instance",a.extend(new a.fn.jGrowl,{notifications:[],element:null,interval:null})),a(this).data("jGrowl.instance").startup(this)),a.isFunction(a(this).data("jGrowl.instance")[b])?a(this).data("jGrowl.instance")[b].apply(a(this).data("jGrowl.instance"),a.makeArray(d).slice(1)):a(this).data("jGrowl.instance").create(b,c)})}},a.extend(a.fn.jGrowl.prototype,{defaults:{pool:0,header:"",group:"",sticky:!1,position:"top-right",appendTo:"body",glue:"after",theme:"default",themeState:"highlight",corners:"10px",check:250,life:3e3,closeDuration:"normal",openDuration:"normal",easing:"swing",closer:!0,closeTemplate:"&times;",closerTemplate:"<div>[ close all ]</div>",log:function(){},beforeOpen:function(){},afterOpen:function(){},open:function(){},beforeClose:function(){},close:function(){},click:function(){},animateOpen:{opacity:"show"},animateClose:{opacity:"hide"}},notifications:[],element:null,interval:null,create:function(b,c){var d=a.extend({},this.defaults,c);"undefined"!=typeof d.speed&&(d.openDuration=d.speed,d.closeDuration=d.speed),this.notifications.push({message:b,options:d}),d.log.apply(this.element,[this.element,b,d])},render:function(b){var c=this,d=b.message,e=b.options;e.themeState=""===e.themeState?"":"ui-state-"+e.themeState;var f=a("<div/>").addClass("jGrowl-notification alert "+e.themeState+" ui-corner-all"+(void 0!==e.group&&""!==e.group?" "+e.group:"")).append(a("<button/>").addClass("jGrowl-close").html(e.closeTemplate)).append(a("<div/>").addClass("jGrowl-header").html(e.header)).append(a("<div/>").addClass("jGrowl-message").html(d)).data("jGrowl",e).addClass(e.theme).children(".jGrowl-close").bind("click.jGrowl",function(){return a(this).parent().trigger("jGrowl.beforeClose"),!1}).parent();a(f).bind("mouseover.jGrowl",function(){a(".jGrowl-notification",c.element).data("jGrowl.pause",!0)}).bind("mouseout.jGrowl",function(){a(".jGrowl-notification",c.element).data("jGrowl.pause",!1)}).bind("jGrowl.beforeOpen",function(){e.beforeOpen.apply(f,[f,d,e,c.element])!==!1&&a(this).trigger("jGrowl.open")}).bind("jGrowl.open",function(){e.open.apply(f,[f,d,e,c.element])!==!1&&("after"==e.glue?a(".jGrowl-notification:last",c.element).after(f):a(".jGrowl-notification:first",c.element).before(f),a(this).animate(e.animateOpen,e.openDuration,e.easing,function(){a.support.opacity===!1&&this.style.removeAttribute("filter"),null!==a(this).data("jGrowl")&&"undefined"!=typeof a(this).data("jGrowl")&&(a(this).data("jGrowl").created=new Date),a(this).trigger("jGrowl.afterOpen")}))}).bind("jGrowl.afterOpen",function(){e.afterOpen.apply(f,[f,d,e,c.element])}).bind("click",function(){e.click.apply(f,[f.message,e,c.element])}).bind("jGrowl.beforeClose",function(){e.beforeClose.apply(f,[f,d,e,c.element])!==!1&&a(this).trigger("jGrowl.close")}).bind("jGrowl.close",function(){a(this).data("jGrowl.pause",!0),a(this).animate(e.animateClose,e.closeDuration,e.easing,function(){a.isFunction(e.close)?e.close.apply(f,[f,d,e,c.element])!==!1&&a(this).remove():a(this).remove()})}).trigger("jGrowl.beforeOpen"),""!==e.corners&&void 0!==a.fn.corner&&a(f).corner(e.corners),a(".jGrowl-notification:parent",c.element).length>1&&0===a(".jGrowl-closer",c.element).length&&this.defaults.closer!==!1&&a(this.defaults.closerTemplate).addClass("jGrowl-closer "+this.defaults.themeState+" ui-corner-all").addClass(this.defaults.theme).appendTo(c.element).animate(this.defaults.animateOpen,this.defaults.speed,this.defaults.easing).bind("click.jGrowl",function(){a(this).siblings().trigger("jGrowl.beforeClose"),a.isFunction(c.defaults.closer)&&c.defaults.closer.apply(a(this).parent()[0],[a(this).parent()[0]])})},update:function(){a(this.element).find(".jGrowl-notification:parent").each(function(){void 0!==a(this).data("jGrowl")&&void 0!==a(this).data("jGrowl").created&&a(this).data("jGrowl").created.getTime()+parseInt(a(this).data("jGrowl").life,10)<(new Date).getTime()&&a(this).data("jGrowl").sticky!==!0&&(void 0===a(this).data("jGrowl.pause")||a(this).data("jGrowl.pause")!==!0)&&a(this).trigger("jGrowl.beforeClose")}),this.notifications.length>0&&(0===this.defaults.pool||a(this.element).find(".jGrowl-notification:parent").length<this.defaults.pool)&&this.render(this.notifications.shift()),a(this.element).find(".jGrowl-notification:parent").length<2&&a(this.element).find(".jGrowl-closer").animate(this.defaults.animateClose,this.defaults.speed,this.defaults.easing,function(){a(this).remove()})},startup:function(b){this.element=a(b).addClass("jGrowl").append('<div class="jGrowl-notification"></div>'),this.interval=setInterval(function(){var c=a(b).data("jGrowl.instance");void 0!==c&&c.update()},parseInt(this.defaults.check,10))},shutdown:function(){a(this.element).removeClass("jGrowl").find(".jGrowl-notification").trigger("jGrowl.close").parent().empty(),clearInterval(this.interval)},close:function(){a(this.element).find(".jGrowl-notification").each(function(){a(this).trigger("jGrowl.beforeClose")})}}),a.jGrowl.defaults=a.fn.jGrowl.prototype.defaults}(jQuery);
/* 9  */ 
/* 10 */ 
/* 11 */ // Magnific Popup - v0.9.9
/* 12 */ (function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",v="."+g,h="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+v,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document.body),o=e(document),t.popupsCache={}},open:function(n){var i;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var r,s=n.items;for(i=0;s.length>i;i++)if(r=s[i],r.parsed&&(r=r.el[0]),r===n.el[0]){t.index=i;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+v,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+v,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(i=0;l.length>i;i++){var c=l[i];c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+v,function(e){27===e.keyCode&&t.close()}),I.on("resize"+v,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var d=t.wH=I.height(),u={};if(t.fixedContentPos&&t._hasScrollBar(d)){var m=t._getScrollbarSize();m&&(u.marginRight=m)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):u.overflow="hidden");var g=t.st.mainClass;return t.isIE7&&(g+=" mfp-ie7"),g&&t._addClassToMFP(g),t.updateItemHTML(),T("BuildControls"),e("html").css(u),t.bgOverlay.add(t.wrap).prependTo(document.body),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(h),t._setFocus()):t.bgOverlay.addClass(h),o.on("focusin"+v,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(d),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+h+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+v+" focusin"+v),t.ev.off(v),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i=t.items[n],o=i.type;if(i=i.tagName?{el:e(i)}:{data:i,src:i.src},i.el){for(var r=t.types,a=0;r.length>a;a++)if(i.el.hasClass("mfp-"+r[a])){o=r[a];break}i.src=i.el.attr("data-mfp-src"),i.src||(i.src=i.el.attr("href"))}return i.type=o||t.st.type||"inline",i.index=n,i.parsed=!0,t.items[n]=i,T("ElementParse",i),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(v+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(v+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(h)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+v)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),n.img[0].naturalWidth>0&&(n.hasSize=!0)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);
/* 13 */ 
/* 14 */ 

;
/* jquery.jcarousellite.js */

/* 1 */ /*!
/* 2 *|  * jCarouselLite - v1.1 - 2014-09-28
/* 3 *|  * http://www.gmarwaha.com/jquery/jcarousellite/
/* 4 *|  * Copyright (c) 2014 Ganeshji Marwaha
/* 5 *|  * Licensed MIT (https://github.com/ganeshmax/jcarousellite/blob/master/LICENSE)
/* 6 *| */
/* 7 */ 
/* 8 */ !function(a){a.jCarouselLite={version:"1.1"},a.fn.jCarouselLite=function(b){return b=a.extend({},a.fn.jCarouselLite.options,b||{}),this.each(function(){function c(a){return n||(clearTimeout(A),z=a,b.beforeStart&&b.beforeStart.call(this,i()),b.circular?j(a):k(a),m({start:function(){n=!0},done:function(){b.afterEnd&&b.afterEnd.call(this,i()),b.auto&&h(),n=!1}}),b.circular||l()),!1}function d(){if(n=!1,o=b.vertical?"top":"left",p=b.vertical?"height":"width",q=B.find(">ul"),r=q.find(">li"),x=r.size(),w=x<b.visible?x:b.visible,b.circular){var c=r.slice(x-w).clone(),d=r.slice(0,w).clone();q.prepend(c).append(d),b.start+=w}s=a("li",q),y=s.size(),z=b.start}function e(){B.css("visibility","visible"),s.css({overflow:"hidden","float":b.vertical?"none":"left"}),q.css({margin:"0",padding:"0",position:"relative","list-style":"none","z-index":"1"}),B.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"}),!b.circular&&b.btnPrev&&0==b.start&&a(b.btnPrev).addClass("disabled")}function f(){t=b.vertical?s.outerHeight(!0):s.outerWidth(!0),u=t*y,v=t*w,s.css({width:s.width(),height:s.height()}),q.css(p,u+"px").css(o,-(z*t)),B.css(p,v+"px")}function g(){b.btnPrev&&a(b.btnPrev).click(function(){return c(z-b.scroll)}),b.btnNext&&a(b.btnNext).click(function(){return c(z+b.scroll)}),b.btnGo&&a.each(b.btnGo,function(d,e){a(e).click(function(){return c(b.circular?w+d:d)})}),b.mouseWheel&&B.mousewheel&&B.mousewheel(function(a,d){return c(d>0?z-b.scroll:z+b.scroll)}),b.auto&&h()}function h(){A=setTimeout(function(){c(z+b.scroll)},b.auto)}function i(){return s.slice(z).slice(0,w)}function j(a){var c;a<=b.start-w-1?(c=a+x+b.scroll,q.css(o,-(c*t)+"px"),z=c-b.scroll):a>=y-w+1&&(c=a-x-b.scroll,q.css(o,-(c*t)+"px"),z=c+b.scroll)}function k(a){0>a?z=0:a>y-w&&(z=y-w)}function l(){a(b.btnPrev+","+b.btnNext).removeClass("disabled"),a(z-b.scroll<0&&b.btnPrev||z+b.scroll>y-w&&b.btnNext||[]).addClass("disabled")}function m(c){n=!0,q.animate("left"==o?{left:-(z*t)}:{top:-(z*t)},a.extend({duration:b.speed,easing:b.easing},c))}var n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=a(this);d(),e(),f(),g()})},a.fn.jCarouselLite.options={btnPrev:null,btnNext:null,btnGo:null,mouseWheel:!1,auto:null,speed:200,easing:null,vertical:!1,circular:!1,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null}}(jQuery);

;
/* jquery.countdown.js */

/* 1   */ /*!
/* 2   *|  * The Final Countdown for jQuery v2.1.0 (http://hilios.github.io/jQuery.countdown/)
/* 3   *|  * Copyright (c) 2015 Edson Hilios
/* 4   *|  * 
/* 5   *|  * Permission is hereby granted, free of charge, to any person obtaining a copy of
/* 6   *|  * this software and associated documentation files (the "Software"), to deal in
/* 7   *|  * the Software without restriction, including without limitation the rights to
/* 8   *|  * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
/* 9   *|  * the Software, and to permit persons to whom the Software is furnished to do so,
/* 10  *|  * subject to the following conditions:
/* 11  *|  * 
/* 12  *|  * The above copyright notice and this permission notice shall be included in all
/* 13  *|  * copies or substantial portions of the Software.
/* 14  *|  * 
/* 15  *|  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/* 16  *|  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
/* 17  *|  * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
/* 18  *|  * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
/* 19  *|  * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
/* 20  *|  * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
/* 21  *|  */
/* 22  */ (function(factory) {
/* 23  */     "use strict";
/* 24  */     if (typeof define === "function" && define.amd) {
/* 25  */         define([ "jquery" ], factory);
/* 26  */     } else {
/* 27  */         factory(jQuery);
/* 28  */     }
/* 29  */ })(function($) {
/* 30  */     "use strict";
/* 31  */     var instances = [], matchers = [], defaultOptions = {
/* 32  */         precision: 100,
/* 33  */         elapse: false
/* 34  */     };
/* 35  */     matchers.push(/^[0-9]*$/.source);
/* 36  */     matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
/* 37  */     matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
/* 38  */     matchers = new RegExp(matchers.join("|"));
/* 39  */     function parseDateString(dateString) {
/* 40  */         if (dateString instanceof Date) {
/* 41  */             return dateString;
/* 42  */         }
/* 43  */         if (String(dateString).match(matchers)) {
/* 44  */             if (String(dateString).match(/^[0-9]*$/)) {
/* 45  */                 dateString = Number(dateString);
/* 46  */             }
/* 47  */             if (String(dateString).match(/\-/)) {
/* 48  */                 dateString = String(dateString).replace(/\-/g, "/");
/* 49  */             }
/* 50  */             return new Date(dateString);

/* jquery.countdown.js */

/* 51  */         } else {
/* 52  */             throw new Error("Couldn't cast `" + dateString + "` to a date object.");
/* 53  */         }
/* 54  */     }
/* 55  */     var DIRECTIVE_KEY_MAP = {
/* 56  */         Y: "years",
/* 57  */         m: "months",
/* 58  */         n: "daysToMonth",
/* 59  */         w: "weeks",
/* 60  */         d: "daysToWeek",
/* 61  */         D: "totalDays",
/* 62  */         H: "hours",
/* 63  */         M: "minutes",
/* 64  */         S: "seconds"
/* 65  */     };
/* 66  */     function escapedRegExp(str) {
/* 67  */         var sanitize = str.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
/* 68  */         return new RegExp(sanitize);
/* 69  */     }
/* 70  */     function strftime(offsetObject) {
/* 71  */         return function(format) {
/* 72  */             var directives = format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
/* 73  */             if (directives) {
/* 74  */                 for (var i = 0, len = directives.length; i < len; ++i) {
/* 75  */                     var directive = directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), regexp = escapedRegExp(directive[0]), modifier = directive[1] || "", plural = directive[3] || "", value = null;
/* 76  */                     directive = directive[2];
/* 77  */                     if (DIRECTIVE_KEY_MAP.hasOwnProperty(directive)) {
/* 78  */                         value = DIRECTIVE_KEY_MAP[directive];
/* 79  */                         value = Number(offsetObject[value]);
/* 80  */                     }
/* 81  */                     if (value !== null) {
/* 82  */                         if (modifier === "!") {
/* 83  */                             value = pluralize(plural, value);
/* 84  */                         }
/* 85  */                         if (modifier === "") {
/* 86  */                             if (value < 10) {
/* 87  */                                 value = "0" + value.toString();
/* 88  */                             }
/* 89  */                         }
/* 90  */                         format = format.replace(regexp, value.toString());
/* 91  */                     }
/* 92  */                 }
/* 93  */             }
/* 94  */             format = format.replace(/%%/, "%");
/* 95  */             return format;
/* 96  */         };
/* 97  */     }
/* 98  */     function pluralize(format, count) {
/* 99  */         var plural = "s", singular = "";
/* 100 */         if (format) {

/* jquery.countdown.js */

/* 101 */             format = format.replace(/(:|;|\s)/gi, "").split(/\,/);
/* 102 */             if (format.length === 1) {
/* 103 */                 plural = format[0];
/* 104 */             } else {
/* 105 */                 singular = format[0];
/* 106 */                 plural = format[1];
/* 107 */             }
/* 108 */         }
/* 109 */         if (Math.abs(count) === 1) {
/* 110 */             return singular;
/* 111 */         } else {
/* 112 */             return plural;
/* 113 */         }
/* 114 */     }
/* 115 */     var Countdown = function(el, finalDate, options) {
/* 116 */         this.el = el;
/* 117 */         this.$el = $(el);
/* 118 */         this.interval = null;
/* 119 */         this.offset = {};
/* 120 */         this.options = $.extend({}, defaultOptions);
/* 121 */         this.instanceNumber = instances.length;
/* 122 */         instances.push(this);
/* 123 */         this.$el.data("countdown-instance", this.instanceNumber);
/* 124 */         if (options) {
/* 125 */             if (typeof options === "function") {
/* 126 */                 this.$el.on("update.countdown", options);
/* 127 */                 this.$el.on("stoped.countdown", options);
/* 128 */                 this.$el.on("finish.countdown", options);
/* 129 */             } else {
/* 130 */                 this.options = $.extend({}, defaultOptions, options);
/* 131 */             }
/* 132 */         }
/* 133 */         this.setFinalDate(finalDate);
/* 134 */         this.start();
/* 135 */     };
/* 136 */     $.extend(Countdown.prototype, {
/* 137 */         start: function() {
/* 138 */             if (this.interval !== null) {
/* 139 */                 clearInterval(this.interval);
/* 140 */             }
/* 141 */             var self = this;
/* 142 */             this.update();
/* 143 */             this.interval = setInterval(function() {
/* 144 */                 self.update.call(self);
/* 145 */             }, this.options.precision);
/* 146 */         },
/* 147 */         stop: function() {
/* 148 */             clearInterval(this.interval);
/* 149 */             this.interval = null;
/* 150 */             this.dispatchEvent("stoped");

/* jquery.countdown.js */

/* 151 */         },
/* 152 */         toggle: function() {
/* 153 */             if (this.interval) {
/* 154 */                 this.stop();
/* 155 */             } else {
/* 156 */                 this.start();
/* 157 */             }
/* 158 */         },
/* 159 */         pause: function() {
/* 160 */             this.stop();
/* 161 */         },
/* 162 */         resume: function() {
/* 163 */             this.start();
/* 164 */         },
/* 165 */         remove: function() {
/* 166 */             this.stop.call(this);
/* 167 */             instances[this.instanceNumber] = null;
/* 168 */             delete this.$el.data().countdownInstance;
/* 169 */         },
/* 170 */         setFinalDate: function(value) {
/* 171 */             this.finalDate = parseDateString(value);
/* 172 */         },
/* 173 */         update: function() {
/* 174 */             if (this.$el.closest("html").length === 0) {
/* 175 */                 this.remove();
/* 176 */                 return;
/* 177 */             }
/* 178 */             var hasEventsAttached = $._data(this.el, "events") !== undefined, now = new Date(), newTotalSecsLeft;
/* 179 */             newTotalSecsLeft = this.finalDate.getTime() - now.getTime();
/* 180 */             newTotalSecsLeft = Math.ceil(newTotalSecsLeft / 1e3);
/* 181 */             newTotalSecsLeft = !this.options.elapse && newTotalSecsLeft < 0 ? 0 : Math.abs(newTotalSecsLeft);
/* 182 */             if (this.totalSecsLeft === newTotalSecsLeft || !hasEventsAttached) {
/* 183 */                 return;
/* 184 */             } else {
/* 185 */                 this.totalSecsLeft = newTotalSecsLeft;
/* 186 */             }
/* 187 */             this.elapsed = now >= this.finalDate;
/* 188 */             this.offset = {
/* 189 */                 seconds: this.totalSecsLeft % 60,
/* 190 */                 minutes: Math.floor(this.totalSecsLeft / 60) % 60,
/* 191 */                 hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
/* 192 */                 days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
/* 193 */                 daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
/* 194 */                 daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
/* 195 */                 totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
/* 196 */                 weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
/* 197 */                 months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
/* 198 */                 years: Math.abs(this.finalDate.getFullYear() - now.getFullYear())
/* 199 */             };
/* 200 */             if (!this.options.elapse && this.totalSecsLeft === 0) {

/* jquery.countdown.js */

/* 201 */                 this.stop();
/* 202 */                 this.dispatchEvent("finish");
/* 203 */             } else {
/* 204 */                 this.dispatchEvent("update");
/* 205 */             }
/* 206 */         },
/* 207 */         dispatchEvent: function(eventName) {
/* 208 */             var event = $.Event(eventName + ".countdown");
/* 209 */             event.finalDate = this.finalDate;
/* 210 */             event.elapsed = this.elapsed;
/* 211 */             event.offset = $.extend({}, this.offset);
/* 212 */             event.strftime = strftime(this.offset);
/* 213 */             this.$el.trigger(event);
/* 214 */         }
/* 215 */     });
/* 216 */     $.fn.countdown = function() {
/* 217 */         var argumentsArray = Array.prototype.slice.call(arguments, 0);
/* 218 */         return this.each(function() {
/* 219 */             var instanceNumber = $(this).data("countdown-instance");
/* 220 */             if (instanceNumber !== undefined) {
/* 221 */                 var instance = instances[instanceNumber], method = argumentsArray[0];
/* 222 */                 if (Countdown.prototype.hasOwnProperty(method)) {
/* 223 */                     instance[method].apply(instance, argumentsArray.slice(1));
/* 224 */                 } else if (String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i) === null) {
/* 225 */                     instance.setFinalDate.call(instance, method);
/* 226 */                     instance.start();
/* 227 */                 } else {
/* 228 */                     $.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, method));
/* 229 */                 }
/* 230 */             } else {
/* 231 */                 new Countdown(this, argumentsArray[0], argumentsArray[1]);
/* 232 */             }
/* 233 */         });
/* 234 */     };
/* 235 */ });

;
/* common.js */

/* 1   */ function getURLVar(key) {
/* 2   */ 	var value = [];
/* 3   */ 
/* 4   */ 	var query = String(document.location).split('?');
/* 5   */ 
/* 6   */ 	if (query[1]) {
/* 7   */ 		var part = query[1].split('&');
/* 8   */ 
/* 9   */ 		for (i = 0; i < part.length; i++) {
/* 10  */ 			var data = part[i].split('=');
/* 11  */ 
/* 12  */ 			if (data[0] && data[1]) {
/* 13  */ 				value[data[0]] = data[1];
/* 14  */ 			}
/* 15  */ 		}
/* 16  */ 
/* 17  */ 		if (value[key]) {
/* 18  */ 			return value[key];
/* 19  */ 		} else {
/* 20  */ 			return '';
/* 21  */ 		}
/* 22  */ 	}
/* 23  */ }
/* 24  */ 
/* 25  */ $(document).ready(function() {
/* 26  */ 	
/* 27  */ 	
/* 28  */ 	// Highlight any found errors
/* 29  */ 	$('.text-danger').each(function() {
/* 30  */ 		var element = $(this).parent().parent();
/* 31  */ 		
/* 32  */ 		if (element.hasClass('form-group')) {
/* 33  */ 			element.addClass('has-error');
/* 34  */ 		}
/* 35  */ 	});
/* 36  */ 		
/* 37  */ 	// Currency
/* 38  */ 	$('#currency .currency-select').on('click', function(e) {
/* 39  */ 		e.preventDefault();
/* 40  */ 
/* 41  */ 		$('#currency input[name=\'code\']').attr('value', $(this).attr('name'));
/* 42  */ 
/* 43  */ 		$('#currency').submit();
/* 44  */ 	});
/* 45  */ 
/* 46  */ 	// Language
/* 47  */ 	$('#language a').on('click', function(e) {
/* 48  */ 		e.preventDefault();
/* 49  */ 
/* 50  */ 		$('#language input[name=\'code\']').attr('value', $(this).attr('href'));

/* common.js */

/* 51  */ 
/* 52  */ 		$('#language').submit();
/* 53  */ 	});
/* 54  */ 
/* 55  */ 	/* Search */
/* 56  */ 	$('#search input[name=\'search\']').parent().find('button').on('click', function() {
/* 57  */ 		url = $('base').attr('href') + 'index.php?route=product/search';
/* 58  */ 
/* 59  */ 		var value = $('header input[name=\'search\']').val();
/* 60  */ 
/* 61  */ 		if (value) {
/* 62  */ 			url += '&search=' + encodeURIComponent(value);
/* 63  */ 		}
/* 64  */ 
/* 65  */ 		location = url;
/* 66  */ 	});
/* 67  */ 
/* 68  */ 	$('#search input[name=\'search\']').on('keydown', function(e) {
/* 69  */ 		if (e.keyCode == 13) {
/* 70  */ 			$('header input[name=\'search\']').parent().find('button').trigger('click');
/* 71  */ 		}
/* 72  */ 	});
/* 73  */ 
/* 74  */ 	// Menu
/* 75  */ 	$('#menu .dropdown-menu').each(function() {
/* 76  */ 		var menu = $('#menu').offset();
/* 77  */ 		var dropdown = $(this).parent().offset();
/* 78  */ 
/* 79  */ 		var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());
/* 80  */ 
/* 81  */ 		if (i > 0) {
/* 82  */ 			$(this).css('margin-left', '-' + (i + 5) + 'px');
/* 83  */ 		}
/* 84  */ 	});
/* 85  */ 
/* 86  */ 	
/* 87  */ 	// tooltips on hover
/* 88  */ 	$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
/* 89  */ 
/* 90  */ 	// Makes tooltips work on ajax generated content
/* 91  */ 	/*$(document).ajaxStop(function() {
/* 92  *| 		$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
/* 93  *| 	});*/
/* 94  */ });
/* 95  */ 
/* 96  */ // Cart add remove functions
/* 97  */ var cart = {
/* 98  */ 	'add': function(product_id, quantity) {
/* 99  */ 		
/* 100 */ 		$.ajax({

/* common.js */

/* 101 */ 			url: 'index.php?route=soconfig/cart/add',
/* 102 */ 			type: 'post',
/* 103 */ 			data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
/* 104 */ 			dataType: 'json',
/* 105 */ 			
/* 106 */ 			success: function(json) {
/* 107 */ 				if (json['redirect']) {
/* 108 */ 					location = json['redirect'];
/* 109 */ 				}
/* 110 */ 				
/* 111 */ 				if (json['success']) {
/* 112 */ 					 addProductNotice(json['title'], json['thumb'], json['success'], 'success');
/* 113 */ 					// Need to set timeout otherwise it wont update the total
/* 114 */ 					setTimeout(function () {
/* 115 */ 						$('#cart  .text-shopping-cart').html(json['total'] );
/* 116 */ 					}, 100);
/* 117 */ 					$('#cart > ul').load('index.php?route=common/cart/info ul li');
/* 118 */ 				}
/* 119 */ 			}
/* 120 */ 		});
/* 121 */ 	},
/* 122 */ 	'update': function(key, quantity) {
/* 123 */ 		$.ajax({
/* 124 */ 			url: 'index.php?route=checkout/cart/edit',
/* 125 */ 			type: 'post',
/* 126 */ 			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
/* 127 */ 			dataType: 'json',
/* 128 */ 				
/* 129 */ 			success: function(json) {
/* 130 */ 				// Need to set timeout otherwise it wont update the total
/* 131 */ 				setTimeout(function () {
/* 132 */ 					$('#cart  .text-shopping-cart').html( json['total'] );
/* 133 */ 				}, 100);
/* 134 */ 
/* 135 */ 				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
/* 136 */ 					location = 'index.php?route=checkout/cart';
/* 137 */ 				} else {
/* 138 */ 					$('#cart > ul').load('index.php?route=common/cart/info ul li');
/* 139 */ 				}
/* 140 */ 			}
/* 141 */ 		});
/* 142 */ 	},
/* 143 */ 	'remove': function(key) {
/* 144 */ 		$.ajax({
/* 145 */ 			url: 'index.php?route=checkout/cart/remove',
/* 146 */ 			type: 'post',
/* 147 */ 			data: 'key=' + key,
/* 148 */ 			dataType: 'json',
/* 149 */ 				
/* 150 */ 			success: function(json) {

/* common.js */

/* 151 */ 				// Need to set timeout otherwise it wont update the total
/* 152 */ 				setTimeout(function () {
/* 153 */ 					$('#cart  .text-shopping-cart').html(json['total'] );
/* 154 */ 				}, 100);
/* 155 */ 					
/* 156 */ 				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
/* 157 */ 					location = 'index.php?route=checkout/cart';
/* 158 */ 				} else {
/* 159 */ 					$('#cart > ul').load('index.php?route=common/cart/info ul li');
/* 160 */ 				}
/* 161 */ 			}
/* 162 */ 		});
/* 163 */ 	}
/* 164 */ }
/* 165 */ 
/* 166 */ var voucher = {
/* 167 */ 	'add': function() {
/* 168 */ 
/* 169 */ 	},
/* 170 */ 	'remove': function(key) {
/* 171 */ 		$.ajax({
/* 172 */ 			url: 'index.php?route=checkout/cart/remove',
/* 173 */ 			type: 'post',
/* 174 */ 			data: 'key=' + key,
/* 175 */ 			dataType: 'json',
/* 176 */ 			beforeSend: function() {
/* 177 */ 				$('#cart > button').button('loading');
/* 178 */ 			},
/* 179 */ 			complete: function() {
/* 180 */ 				$('#cart > button').button('reset');
/* 181 */ 			},
/* 182 */ 			success: function(json) {
/* 183 */ 				// Need to set timeout otherwise it wont update the total
/* 184 */ 				setTimeout(function () {
/* 185 */ 					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
/* 186 */ 				}, 100);
/* 187 */ 
/* 188 */ 				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
/* 189 */ 					location = 'index.php?route=checkout/cart';
/* 190 */ 				} else {
/* 191 */ 					$('#cart > ul').load('index.php?route=common/cart/info ul li');
/* 192 */ 				}
/* 193 */ 			}
/* 194 */ 		});
/* 195 */ 	}
/* 196 */ }
/* 197 */ 
/* 198 */ var wishlist = {
/* 199 */ 	'add': function(product_id) {
/* 200 */ 		$.ajax({

/* common.js */

/* 201 */ 			url: 'index.php?route=soconfig/wishlist/add',
/* 202 */ 			type: 'post',
/* 203 */ 			data: 'product_id=' + product_id,
/* 204 */ 			dataType: 'json',
/* 205 */ 			success: function(json) {
/* 206 */ 				
/* 207 */ 				if (json['success']) {
/* 208 */ 					addProductNotice(json['title'], json['thumb'], json['success'], 'success');
/* 209 */ 				}
/* 210 */ 				if (json['info']) {
/* 211 */ 				  addProductNotice(json['title'], json['thumb'], json['info'], 'warning');
/* 212 */ 				}
/* 213 */ 				$('#wishlist-total').html(json['total']);
/* 214 */ 			}
/* 215 */ 		});
/* 216 */ 	}
/* 217 */ }
/* 218 */ 
/* 219 */ var compare = {
/* 220 */ 	'add': function(product_id) {
/* 221 */ 		$.ajax({
/* 222 */ 			url: 'index.php?route=soconfig/compare/add',
/* 223 */ 			type: 'post',
/* 224 */ 			data: 'product_id=' + product_id,
/* 225 */ 			dataType: 'json',
/* 226 */ 			success: function(json) {
/* 227 */ 				if (json['success']) {
/* 228 */ 					addProductNotice(json['title'], json['thumb'], json['success'], 'success');
/* 229 */ 					$('#compare-total').html(json['total']);
/* 230 */ 				}
/* 231 */ 			}
/* 232 */ 		});
/* 233 */ 	}
/* 234 */ 	
/* 235 */ }
/* 236 */ 
/* 237 */ 
/* 238 */ /* Common alert */
/* 239 */ function addProductNotice(title, thumb, text, type) {
/* 240 */ 	$.jGrowl.defaults.closer = false;
/* 241 */ 	//Stop jGrowl
/* 242 */ 	//$.jGrowl.defaults.sticky = true;
/* 243 */ 	var tpl = thumb + '<h3>'+text+'</h3>';
/* 244 */ 	$.jGrowl(tpl, {		
/* 245 */ 		life: 4000,
/* 246 */ 		header: title,
/* 247 */ 		speed: 'slow',
/* 248 */ 		theme: type
/* 249 */ 	});
/* 250 */ }

/* common.js */

/* 251 */ 
/* 252 */ /* Agree to Terms */
/* 253 */ $(document).delegate('.agree', 'click', function(e) {
/* 254 */ 	e.preventDefault();
/* 255 */ 	$('#modal-agree').remove();
/* 256 */ 
/* 257 */ 	var element = this;
/* 258 */ 	$.ajax({
/* 259 */ 		url: $(element).attr('href'),
/* 260 */ 		type: 'get',
/* 261 */ 		dataType: 'html',
/* 262 */ 		success: function(data) {
/* 263 */ 			html  = '<div id="modal-agree" class="modal">';
/* 264 */ 			html += '  <div class="modal-dialog">';
/* 265 */ 			html += '    <div class="modal-content">';
/* 266 */ 			html += '      <div class="modal-header">';
/* 267 */ 			html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
/* 268 */ 			html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
/* 269 */ 			html += '      </div>';
/* 270 */ 			html += '      <div class="modal-body">' + data + '</div>';
/* 271 */ 			html += '    </div';
/* 272 */ 			html += '  </div>';
/* 273 */ 			html += '</div>';
/* 274 */ 
/* 275 */ 			$('body').append(html);
/* 276 */ 
/* 277 */ 			$('#modal-agree').modal('show');
/* 278 */ 		}
/* 279 */ 	});
/* 280 */ });
/* 281 */ 
/* 282 */ /* Autocomplete */
/* 283 */ (function($) {
/* 284 */ 	function Autocomplete(element, options) {
/* 285 */ 		this.element = element;
/* 286 */ 		this.options = options;
/* 287 */ 		this.timer = null;
/* 288 */ 		this.items = new Array();
/* 289 */ 
/* 290 */ 		$(element).attr('autocomplete', 'off');
/* 291 */ 		$(element).on('focus', $.proxy(this.focus, this));
/* 292 */ 		$(element).on('blur', $.proxy(this.blur, this));
/* 293 */ 		$(element).on('keydown', $.proxy(this.keydown, this));
/* 294 */ 
/* 295 */ 		$(element).after('<ul class="dropdown-menu"></ul>');
/* 296 */ 		$(element).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));
/* 297 */ 	}
/* 298 */ 
/* 299 */ 	Autocomplete.prototype = {
/* 300 */ 		focus: function() {

/* common.js */

/* 301 */ 			this.request();
/* 302 */ 		},
/* 303 */ 		blur: function() {
/* 304 */ 			setTimeout(function(object) {
/* 305 */ 				object.hide();
/* 306 */ 			}, 200, this);
/* 307 */ 		},
/* 308 */ 		click: function(event) {
/* 309 */ 			event.preventDefault();
/* 310 */ 
/* 311 */ 			value = $(event.target).parent().attr('data-value');
/* 312 */ 
/* 313 */ 			if (value && this.items[value]) {
/* 314 */ 				this.options.select(this.items[value]);
/* 315 */ 			}
/* 316 */ 		},
/* 317 */ 		keydown: function(event) {
/* 318 */ 			switch(event.keyCode) {
/* 319 */ 				case 27: // escape
/* 320 */ 					this.hide();
/* 321 */ 					break;
/* 322 */ 				default:
/* 323 */ 					this.request();
/* 324 */ 					break;
/* 325 */ 			}
/* 326 */ 		},
/* 327 */ 		show: function() {
/* 328 */ 			var pos = $(this.element).position();
/* 329 */ 
/* 330 */ 			$(this.element).siblings('ul.dropdown-menu').css({
/* 331 */ 				top: pos.top + $(this.element).outerHeight(),
/* 332 */ 				left: pos.left
/* 333 */ 			});
/* 334 */ 
/* 335 */ 			$(this.element).siblings('ul.dropdown-menu').show();
/* 336 */ 		},
/* 337 */ 		hide: function() {
/* 338 */ 			$(this.element).siblings('ul.dropdown-menu').hide();
/* 339 */ 		},
/* 340 */ 		request: function() {
/* 341 */ 			clearTimeout(this.timer);
/* 342 */ 
/* 343 */ 			this.timer = setTimeout(function(object) {
/* 344 */ 				object.options.source($(object.element).val(), $.proxy(object.response, object));
/* 345 */ 			}, 200, this);
/* 346 */ 		},
/* 347 */ 		response: function(json) {
/* 348 */ 			html = '';
/* 349 */ 
/* 350 */ 			if (json.length) {

/* common.js */

/* 351 */ 				for (i = 0; i < json.length; i++) {
/* 352 */ 					this.items[json[i]['value']] = json[i];
/* 353 */ 				}
/* 354 */ 
/* 355 */ 				for (i = 0; i < json.length; i++) {
/* 356 */ 					if (!json[i]['category']) {
/* 357 */ 						html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
/* 358 */ 					}
/* 359 */ 				}
/* 360 */ 
/* 361 */ 				// Get all the ones with a categories
/* 362 */ 				var category = new Array();
/* 363 */ 
/* 364 */ 				for (i = 0; i < json.length; i++) {
/* 365 */ 					if (json[i]['category']) {
/* 366 */ 						if (!category[json[i]['category']]) {
/* 367 */ 							category[json[i]['category']] = new Array();
/* 368 */ 							category[json[i]['category']]['name'] = json[i]['category'];
/* 369 */ 							category[json[i]['category']]['item'] = new Array();
/* 370 */ 						}
/* 371 */ 
/* 372 */ 						category[json[i]['category']]['item'].push(json[i]);
/* 373 */ 					}
/* 374 */ 				}
/* 375 */ 
/* 376 */ 				for (i in category) {
/* 377 */ 					html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';
/* 378 */ 
/* 379 */ 					for (j = 0; j < category[i]['item'].length; j++) {
/* 380 */ 						html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
/* 381 */ 					}
/* 382 */ 				}
/* 383 */ 			}
/* 384 */ 
/* 385 */ 			if (html) {
/* 386 */ 				this.show();
/* 387 */ 			} else {
/* 388 */ 				this.hide();
/* 389 */ 			}
/* 390 */ 
/* 391 */ 			$(this.element).siblings('ul.dropdown-menu').html(html);
/* 392 */ 		}
/* 393 */ 	};
/* 394 */ 
/* 395 */ 	$.fn.autocomplete = function(option) {
/* 396 */ 		return this.each(function() {
/* 397 */ 			var data = $(this).data('autocomplete');
/* 398 */ 
/* 399 */ 			if (!data) {
/* 400 */ 				data = new Autocomplete(this, option);

/* common.js */

/* 401 */ 
/* 402 */ 				$(this).data('autocomplete', data);
/* 403 */ 			}
/* 404 */ 		});
/* 405 */ 	}
/* 406 */ })(window.jQuery);

;
/* so.custom.js */

/* 1   */ 
/* 2   */ jQuery(function ($) {
/* 3   */     // Related Products Detail 
/* 4   */ 	$('.iframe-link').magnificPopup({
/* 5   */ 		type:'iframe',
/* 6   */ 	    fixedContentPos: true,
/* 7   */         fixedBgPos: true,
/* 8   */         overflowY: 'auto',
/* 9   */         closeBtnInside: true,
/* 10  */ 		closeOnContentClick: true,
/* 11  */         preloader: true,
/* 12  */ 		midClick: true,
/* 13  */ 		removalDelay: 300,
/* 14  */ 		mainClass: 'my-mfp-zoom-in',
/* 15  */ 		callbacks: {
/* 16  */ 			markupParse: function(template, values, item) {
/* 17  */ 			   template.find('iframe').addClass('zoom-anim-dialog ');
/* 18  */ 		   }
/* 19  */ 		}
/* 20  */     });
/* 21  */ 	
/* 22  */ 	$('.closePopup').on( "click", function(e) {
/* 23  */ 	    e.preventDefault();
/* 24  */ 	    if (window.parent == window.top) {
/* 25  */ 			window.open($(this).attr("href"));
/* 26  */ 		    window.parent.$.magnificPopup.close();
/* 27  */ 	    }
/* 28  */ 	});
/* 29  */ });
/* 30  */ 
/* 31  */ jQuery(function ($) {
/* 32  */     "use strict";
/* 33  */ 	//Quantity plus minus 
/* 34  */     $.initQuantity = function ($control) {
/* 35  */         $control.each(function () {
/* 36  */             var $this = $(this),
/* 37  */                 data = $this.data("inited-control"),
/* 38  */                 $plus = $(".input-group-addon:last", $this),
/* 39  */                 $minus = $(".input-group-addon:first", $this),
/* 40  */                 $value = $(".form-control", $this);
/* 41  */             if (!data) {
/* 42  */                 $control.attr("unselectable", "on").css({
/* 43  */                     "-moz-user-select": "none",
/* 44  */                     "-o-user-select": "none",
/* 45  */                     "-khtml-user-select": "none",
/* 46  */                     "-webkit-user-select": "none",
/* 47  */                     "-ms-user-select": "none",
/* 48  */                     "user-select": "none"
/* 49  */                 }).bind("selectstart", function () {
/* 50  */                     return false

/* so.custom.js */

/* 51  */                 });
/* 52  */                 $plus.click(function () {
/* 53  */                     var val =
/* 54  */                         parseInt($value.val()) + 1;
/* 55  */                     $value.val(val);
/* 56  */                     return false
/* 57  */                 });
/* 58  */                 $minus.click(function () {
/* 59  */                     var val = parseInt($value.val()) - 1;
/* 60  */                     $value.val(val > 0 ? val : 1);
/* 61  */                     return false
/* 62  */                 });
/* 63  */                 $value.blur(function () {
/* 64  */                     var val = parseInt($value.val());
/* 65  */                     $value.val(val > 0 ? val : 1)
/* 66  */                 })
/* 67  */             }
/* 68  */         })
/* 69  */     };
/* 70  */     $.initQuantity($(".quantity-control"));
/* 71  */     $.initSelect = function ($select) {
/* 72  */         $select.each(function () {
/* 73  */             var $this = $(this),
/* 74  */                 data = $this.data("inited-select"),
/* 75  */                 $value = $(".value", $this),
/* 76  */                 $hidden = $(".input-hidden", $this),
/* 77  */                 $items = $(".dropdown-menu li > a", $this);
/* 78  */             if (!data) {
/* 79  */                 $items.click(function (e) {
/* 80  */                     if ($(this).closest(".sort-isotope").length >
/* 81  */                         0) e.preventDefault();
/* 82  */                     var data = $(this).attr("data-value"),
/* 83  */                         dataHTML = $(this).html();
/* 84  */                     $this.trigger("change", {
/* 85  */                         value: data,
/* 86  */                         html: dataHTML
/* 87  */                     });
/* 88  */                     $value.html(dataHTML);
/* 89  */                     if ($hidden.length) $hidden.val(data)
/* 90  */                 });
/* 91  */                 $this.data("inited-select", true)
/* 92  */             }
/* 93  */         })
/* 94  */     };
/* 95  */     $.initSelect($(".btn-select"))
/* 96  */ });
/* 97  */ 
/* 98  */ 
/* 99  */ /******** Social Widgets Accounts ********/
/* 100 */ jQuery(function ($) {

/* so.custom.js */

/* 101 */     "use strict";
/* 102 */     var socialItems = $('.social-widgets .items .item');
/* 103 */     var counter = 0;
/* 104 */     socialItems.each(function () {
/* 105 */         counter++;
/* 106 */         var itemclass = "item-0" + counter;
/* 107 */         $(this).addClass(itemclass)
/* 108 */     });
/* 109 */ });
/* 110 */ 
/* 111 */ jQuery(function ($) {
/* 112 */     "use strict";
/* 113 */     $(".social-widgets .item").each(function () {
/* 114 */         var $this = $(this),
/* 115 */             timer;
/* 116 */         $this.on("mouseenter", function () {
/* 117 */             var $this = $(this);
/* 118 */             if (timer) clearTimeout(timer);
/* 119 */             timer = setTimeout(function () {
/* 120 */                 $this.addClass("active")
/* 121 */             }, 200)
/* 122 */         }).on("mouseleave", function () {
/* 123 */             var $this = $(this);
/* 124 */             if (timer) clearTimeout(timer);
/* 125 */             timer = setTimeout(function () {
/* 126 */                 $this.removeClass("active")
/* 127 */             }, 100)
/* 128 */         }).on("click", function (e) {
/* 129 */             e.preventDefault()
/* 130 */         })
/* 131 */     })
/* 132 */ });
/* 133 */ 
/* 134 */ jQuery(function ($) {
/* 135 */     "use strict";
/* 136 */     var loadmap = $(".social-widgets .item a");
/* 137 */     loadmap.click(function (e) {
/* 138 */         e.preventDefault()
/* 139 */     });
/* 140 */     loadmap.hover(function (e) {
/* 141 */         if (!$(this).parent().hasClass("load")) {
/* 142 */             var loadcontainer = $(this).parent().find(".loading");
/* 143 */             $.ajax({
/* 144 */                 url: $(this).attr("href"),
/* 145 */                 cache: false,
/* 146 */                 success: function (data) {
/* 147 */                     setTimeout(function () {
/* 148 */                         loadcontainer.html(data)
/* 149 */                     }, 1000)
/* 150 */                 }

/* so.custom.js */

/* 151 */             });
/* 152 */             $(this).parent().addClass("load")
/* 153 */         }
/* 154 */     })
/* 155 */ });
/* 156 */ /******** End Social Widgets Accounts ********/
/* 157 */ $(window).load(function () {
/* 158 */ 	//loading spinner Website Site
/* 159 */ 	$("#wrapper > .loader").fadeOut("slow");
/* 160 */ });
/* 161 */ $(document).ready(function(){
/* 162 */ 	
/* 163 */ 	/*Scroll to top */
/* 164 */ 	$(".back-to-top").addClass("hidden-top");
/* 165 */ 		$(window).scroll(function () {
/* 166 */ 		if ($(this).scrollTop() === 0) {
/* 167 */ 			$(".back-to-top").addClass("hidden-top")
/* 168 */ 		} else {
/* 169 */ 			$(".back-to-top").removeClass("hidden-top")
/* 170 */ 		}
/* 171 */ 	});
/* 172 */ 
/* 173 */ 	$('.back-to-top').click(function () {
/* 174 */ 		$('body,html').animate({scrollTop:0}, 1200);
/* 175 */ 		return false;
/* 176 */ 	});		
/* 177 */ 	
/* 178 */ 	
/* 179 */ 	/******** Menu Show Hide Sub Menu ********/
/* 180 */ 	$('#menu .nav > li').mouseover(function() {
/* 181 */ 		$screensize = $(window).width();
/* 182 */ 		if ($screensize > 991) {
/* 183 */ 		$(this).find('> div').stop(true, true).slideDown('fast');
/* 184 */ 		}			
/* 185 */ 		$(this).bind('mouseleave', function() {
/* 186 */ 			$screensize = $(window).width();
/* 187 */ 		if ($screensize > 991) {
/* 188 */ 			$(this).find('> div').stop(true, true).css('display', 'none');
/* 189 */ 		}
/* 190 */ 	});});
/* 191 */ 
/* 192 */ 	$('#menu .nav > li.categories > div > .column, #menu .nav > li div > ul > li').mouseover(function() {
/* 193 */ 		$screensize = $(window).width();
/* 194 */ 		if ($screensize > 991) {
/* 195 */ 		$(this).find('> div').css('display', 'block');
/* 196 */ 		}			
/* 197 */ 		$(this).bind('mouseleave', function() {
/* 198 */ 			$screensize = $(window).width();
/* 199 */ 		if ($screensize > 991) {
/* 200 */ 			$(this).find('> div').css('display', 'none');

/* so.custom.js */

/* 201 */ 		}
/* 202 */ 	});});
/* 203 */ 
/* 204 */ 	$('#menu .nav > li > div').closest("li").addClass('sub');
/* 205 */ 
/* 206 */ 	/******** Navigation Menu ********/
/* 207 */ 	$('#menu .navbar-header > span').click(function () {
/* 208 */ 		  $(this).toggleClass("active");  
/* 209 */ 		  $("#menu .navbar-menu").slideToggle('medium');
/* 210 */ 	});
/* 211 */ 	
/* 212 */ 	if($('#menu .navbar-header span').hasClass("active")){
/* 213 */ 		$("#menu .navbar-menu").slideUp('medium');  
/* 214 */ 	}  
/* 215 */ 	
/* 216 */ 	$('#menu .nav > li > div > .column > div, .submenu, #menu .nav > li > div').before('<span class="submore"></span>');
/* 217 */ 			$('span.submore').click(function () {
/* 218 */ 				$(this).next().slideToggle('fast');
/* 219 */ 				$(this).toggleClass('plus');
/* 220 */ 	});
/* 221 */ 	
/* 222 */ 	/******** Language and Currency Dropdowns ********/
/* 223 */ 	$screensize = $(window).width();
/* 224 */ 	if ($screensize > 991) {
/* 225 */ 	$('#currency, #bt-language, #my_account').hover(function() {
/* 226 */ 		$(this).find('ul').stop(true, true).slideDown('fast');
/* 227 */ 	  },function() {
/* 228 */ 		$(this).find('ul').stop(true, true).css('display', 'none');
/* 229 */ 	  });
/* 230 */ 	}
/* 231 */ 	// Product detial reviews button
/* 232 */ 	$(".reviews_button,.write_review_button").click(function (){
/* 233 */         var tabTop = $(".producttab").offset().top;
/* 234 */         $("html, body").animate({ scrollTop:tabTop }, 1000);
/* 235 */     });
/* 236 */    
/* 237 */     // Resonsive Header Top
/* 238 */     $(".collapsed-block .expander").click(function (e) {
/* 239 */         var collapse_content_selector = $(this).attr("href");
/* 240 */         var expander = $(this);
/* 241 */ 		
/* 242 */         if (!$(collapse_content_selector).hasClass("open")) {
/* 243 */ 			expander.addClass("open").html("<i class='fa fa-angle-up'></i>") ;
/* 244 */ 		}
/* 245 */ 		else expander.removeClass("open").html("<i class='fa fa-angle-down'></i>");
/* 246 */ 		
/* 247 */ 		if (!$(collapse_content_selector).hasClass("open")) $(collapse_content_selector).addClass("open").slideDown("normal");
/* 248 */         else $(collapse_content_selector).removeClass("open").slideUp("normal");
/* 249 */         e.preventDefault()
/* 250 */     })

/* so.custom.js */

/* 251 */ 
/* 252 */ 
/* 253 */     
/* 254 */     // style for header top link
/* 255 */ 	$(".header-top-right .top-link > li").mouseenter(function(){
/* 256 */ 		$(".header-top-right .top-link > li.account").addClass('inactive');
/* 257 */ 	});
/* 258 */ 	$(".header-top-right .top-link > li").mouseleave(function(){
/* 259 */ 		$(".header-top-right .top-link > li.account").removeClass('inactive');
/* 260 */ 	});
/* 261 */ 	$(".header-top-right .top-link > li.account").mouseenter(function(){
/* 262 */ 		$(".header-top-right .top-link > li.account").removeClass('inactive');
/* 263 */ 	});
/* 264 */ 	
/* 265 */ 	//Client Say
/* 266 */ 	$('.slider-clients-say').owlCarousel2({
/* 267 */ 		pagination: false,
/* 268 */ 		center: false,
/* 269 */ 		nav: true,
/* 270 */ 		loop: false,
/* 271 */ 		margin: 25,
/* 272 */ 		navText: [ 'prev', 'next' ],
/* 273 */ 		slideBy: 1,
/* 274 */ 		autoplay: false,
/* 275 */ 		autoplayTimeout: 2500,
/* 276 */ 		autoplayHoverPause: true,
/* 277 */ 		autoplaySpeed: 800,
/* 278 */ 		startPosition: 0, 
/* 279 */ 		responsive:{
/* 280 */ 			0:{
/* 281 */ 				items:1
/* 282 */ 			},
/* 283 */ 			480:{
/* 284 */ 				items:1
/* 285 */ 			},
/* 286 */ 			768:{
/* 287 */ 				items:1
/* 288 */ 			},
/* 289 */ 			1200:{
/* 290 */ 				items:1
/* 291 */ 			}
/* 292 */ 		}
/* 293 */ 	});	 
/* 294 */ 
/* 295 */ });
/* 296 */ 
/* 297 */ 

;
/* owl.carousel.min.js */

/* 1 */ "function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,o){var i={init:function(e,o){var i=this;i.$elem=t(o),i.options=t.extend({},t.fn.owlCarousel.options,i.$elem.data(),e),i.userOptions=e,i.loadContent()},loadContent:function(){function e(t){var e,o="";if("function"==typeof i.options.jsonSuccess)i.options.jsonSuccess.apply(this,[t]);else{for(e in t.owl)t.owl.hasOwnProperty(e)&&(o+=t.owl[e].item);i.$elem.html(o)}i.logIn()}var o,i=this;"function"==typeof i.options.beforeInit&&i.options.beforeInit.apply(this,[i.$elem]),"string"==typeof i.options.jsonPath?(o=i.options.jsonPath,t.getJSON(o,e)):i.logIn()},logIn:function(){var t=this;t.$elem.data({"owl-originalStyles":t.$elem.attr("style"),"owl-originalClasses":t.$elem.attr("class")}),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible=null,t.setVars()},setVars:function(){var t=this;return 0===t.$elem.children().length?!1:(t.baseClass(),t.eventTypes(),t.$userItems=t.$elem.children(),t.itemsAmount=t.$userItems.length,t.wrapItems(),t.$owlItems=t.$elem.find(".owl-item"),t.$owlWrapper=t.$elem.find(".owl-wrapper"),t.playDirection="next",t.prevItem=0,t.prevArr=[0],t.currentItem=0,t.customEvents(),void t.onStartup())},onStartup:function(){var t=this;t.updateItems(),t.calculateAll(),t.buildControls(),t.updateControls(),t.response(),t.moveEvents(),t.stopOnHover(),t.owlStatus(),t.options.transitionStyle!==!1&&t.transitionTypes(t.options.transitionStyle),t.options.autoPlay===!0&&(t.options.autoPlay=5e3),t.play(),t.$elem.find(".owl-wrapper").css("display","block"),t.$elem.is(":visible")?t.$elem.css("opacity",1):t.watchVisibility(),t.onstartup=!1,t.eachMoveUpdate(),"function"==typeof t.options.afterInit&&t.options.afterInit.apply(this,[t.$elem])},eachMoveUpdate:function(){var t=this;t.options.lazyLoad===!0&&t.lazyLoad(),t.options.autoHeight===!0&&t.autoHeight(),t.onVisibleItems(),"function"==typeof t.options.afterAction&&t.options.afterAction.apply(this,[t.$elem])},updateVars:function(){var t=this;"function"==typeof t.options.beforeUpdate&&t.options.beforeUpdate.apply(this,[t.$elem]),t.watchVisibility(),t.updateItems(),t.calculateAll(),t.updatePosition(),t.updateControls(),t.eachMoveUpdate(),"function"==typeof t.options.afterUpdate&&t.options.afterUpdate.apply(this,[t.$elem])},reload:function(){var t=this;e.setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var t=this;return t.$elem.is(":visible")!==!1?!1:(t.$elem.css({opacity:0}),e.clearInterval(t.autoPlayInterval),e.clearInterval(t.checkVisible),void(t.checkVisible=e.setInterval(function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),e.clearInterval(t.checkVisible))},500)))},wrapItems:function(){var t=this;t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),t.wrapperOuter=t.$elem.find(".owl-wrapper-outer"),t.$elem.css("display","block")},baseClass:function(){var t=this,e=t.$elem.hasClass(t.options.baseClass),o=t.$elem.hasClass(t.options.theme);e||t.$elem.addClass(t.options.baseClass),o||t.$elem.addClass(t.options.theme)},updateItems:function(){var e,o,i=this;if(i.options.responsive===!1)return!1;if(i.options.singleItem===!0)return i.options.items=i.orignalItems=1,i.options.itemsCustom=!1,i.options.itemsDesktop=!1,i.options.itemsDesktopSmall=!1,i.options.itemsTablet=!1,i.options.itemsTabletSmall=!1,i.options.itemsMobile=!1,!1;if(e=t(i.options.responsiveBaseWidth).width(),e>(i.options.itemsDesktop[0]||i.orignalItems)&&(i.options.items=i.orignalItems),i.options.itemsCustom!==!1)for(i.options.itemsCustom.sort(function(t,e){return t[0]-e[0]}),o=0;o<i.options.itemsCustom.length;o+=1)i.options.itemsCustom[o][0]<=e&&(i.options.items=i.options.itemsCustom[o][1]);else e<=i.options.itemsDesktop[0]&&i.options.itemsDesktop!==!1&&(i.options.items=i.options.itemsDesktop[1]),e<=i.options.itemsDesktopSmall[0]&&i.options.itemsDesktopSmall!==!1&&(i.options.items=i.options.itemsDesktopSmall[1]),e<=i.options.itemsTablet[0]&&i.options.itemsTablet!==!1&&(i.options.items=i.options.itemsTablet[1]),e<=i.options.itemsTabletSmall[0]&&i.options.itemsTabletSmall!==!1&&(i.options.items=i.options.itemsTabletSmall[1]),e<=i.options.itemsMobile[0]&&i.options.itemsMobile!==!1&&(i.options.items=i.options.itemsMobile[1]);i.options.items>i.itemsAmount&&i.options.itemsScaleUp===!0&&(i.options.items=i.itemsAmount)},response:function(){var o,i,n=this;return n.options.responsive!==!0?!1:(i=t(e).width(),n.resizer=function(){t(e).width()!==i&&(n.options.autoPlay!==!1&&e.clearInterval(n.autoPlayInterval),e.clearTimeout(o),o=e.setTimeout(function(){i=t(e).width(),n.updateVars()},n.options.responsiveRefreshRate))},void t(e).resize(n.resizer))},updatePosition:function(){var t=this;t.jumpTo(t.currentItem),t.options.autoPlay!==!1&&t.checkAp()},appendItemsSizes:function(){var e=this,o=0,i=e.itemsAmount-e.options.items;e.$owlItems.each(function(n){var s=t(this);s.css({width:e.itemWidth}).data("owl-item",Number(n)),(n%e.options.items===0||n===i)&&(n>i||(o+=1)),s.data("owl-roundPages",o)})},appendWrapperSizes:function(){var t=this,e=t.$owlItems.length*t.itemWidth;t.$owlWrapper.css({width:2*e,left:0}),t.appendItemsSizes()},calculateAll:function(){var t=this;t.calculateWidth(),t.appendWrapperSizes(),t.loops(),t.max()},calculateWidth:function(){var t=this;t.itemWidth=Math.round(t.$elem.width()/t.options.items)},max:function(){var t=this,e=-1*(t.itemsAmount*t.itemWidth-t.options.items*t.itemWidth);return t.options.items>t.itemsAmount?(t.maximumItem=0,e=0,t.maximumPixels=0):(t.maximumItem=t.itemsAmount-t.options.items,t.maximumPixels=e),e},min:function(){return 0},loops:function(){var e,o,i,n=this,s=0,a=0;for(n.positionsInArray=[0],n.pagesInArray=[],e=0;e<n.itemsAmount;e+=1)a+=n.itemWidth,n.positionsInArray.push(-a),n.options.scrollPerPage===!0&&(o=t(n.$owlItems[e]),i=o.data("owl-roundPages"),i!==s&&(n.pagesInArray[s]=n.positionsInArray[e],s=i))},buildControls:function(){var e=this;(e.options.navigation===!0||e.options.pagination===!0)&&(e.owlControls=t('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)),e.options.pagination===!0&&e.buildPagination(),e.options.navigation===!0&&e.buildButtons()},buildButtons:function(){var e=this,o=t('<div class="owl-buttons"/>');e.owlControls.append(o),e.buttonPrev=t("<div/>",{"class":"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=t("<div/>",{"class":"owl-next",html:e.options.navigationText[1]||""}),o.append(e.buttonPrev).append(e.buttonNext),o.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(t){t.preventDefault()}),o.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(o){o.preventDefault(),t(this).hasClass("owl-next")?e.next():e.prev()})},buildPagination:function(){var e=this;e.paginationWrapper=t('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(o){o.preventDefault(),Number(t(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(t(this).data("owl-page")),!0)})},updatePagination:function(){var e,o,i,n,s,a,r=this;if(r.options.pagination===!1)return!1;for(r.paginationWrapper.html(""),e=0,o=r.itemsAmount-r.itemsAmount%r.options.items,n=0;n<r.itemsAmount;n+=1)n%r.options.items===0&&(e+=1,o===n&&(i=r.itemsAmount-r.options.items),s=t("<div/>",{"class":"owl-page"}),a=t("<span></span>",{text:r.options.paginationNumbers===!0?e:"","class":r.options.paginationNumbers===!0?"owl-numbers":""}),s.append(a),s.data("owl-page",o===n?i:n),s.data("owl-roundPages",e),r.paginationWrapper.append(s));r.checkPagination()},checkPagination:function(){var e=this;return e.options.pagination===!1?!1:void e.paginationWrapper.find(".owl-page").each(function(){t(this).data("owl-roundPages")===t(e.$owlItems[e.currentItem]).data("owl-roundPages")&&(e.paginationWrapper.find(".owl-page").removeClass("active"),t(this).addClass("active"))})},checkNavigation:function(){var t=this;return t.options.navigation===!1?!1:void(t.options.rewindNav===!1&&(0===t.currentItem&&0===t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.addClass("disabled")):0===t.currentItem&&0!==t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.removeClass("disabled")):t.currentItem===t.maximumItem?(t.buttonPrev.removeClass("disabled"),t.buttonNext.addClass("disabled")):0!==t.currentItem&&t.currentItem!==t.maximumItem&&(t.buttonPrev.removeClass("disabled"),t.buttonNext.removeClass("disabled"))))},updateControls:function(){var t=this;t.updatePagination(),t.checkNavigation(),t.owlControls&&(t.options.items>=t.itemsAmount?t.owlControls.hide():t.owlControls.show())},destroyControls:function(){var t=this;t.owlControls&&t.owlControls.remove()},next:function(t){var e=this;if(e.isTransition)return!1;if(e.currentItem+=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem>e.maximumItem+(e.options.scrollPerPage===!0?e.options.items-1:0)){if(e.options.rewindNav!==!0)return e.currentItem=e.maximumItem,!1;e.currentItem=0,t="rewind"}e.goTo(e.currentItem,t)},prev:function(t){var e=this;if(e.isTransition)return!1;if(e.options.scrollPerPage===!0&&e.currentItem>0&&e.currentItem<e.options.items?e.currentItem=0:e.currentItem-=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem<0){if(e.options.rewindNav!==!0)return e.currentItem=0,!1;e.currentItem=e.maximumItem,t="rewind"}e.goTo(e.currentItem,t)},goTo:function(t,o,i){var n,s=this;return s.isTransition?!1:("function"==typeof s.options.beforeMove&&s.options.beforeMove.apply(this,[s.$elem]),t>=s.maximumItem?t=s.maximumItem:0>=t&&(t=0),s.currentItem=s.owl.currentItem=t,s.options.transitionStyle!==!1&&"drag"!==i&&1===s.options.items&&s.browser.support3d===!0?(s.swapSpeed(0),s.browser.support3d===!0?s.transition3d(s.positionsInArray[t]):s.css2slide(s.positionsInArray[t],1),s.afterGo(),s.singleItemTransition(),!1):(n=s.positionsInArray[t],s.browser.support3d===!0?(s.isCss3Finish=!1,o===!0?(s.swapSpeed("paginationSpeed"),e.setTimeout(function(){s.isCss3Finish=!0},s.options.paginationSpeed)):"rewind"===o?(s.swapSpeed(s.options.rewindSpeed),e.setTimeout(function(){s.isCss3Finish=!0},s.options.rewindSpeed)):(s.swapSpeed("slideSpeed"),e.setTimeout(function(){s.isCss3Finish=!0},s.options.slideSpeed)),s.transition3d(n)):o===!0?s.css2slide(n,s.options.paginationSpeed):"rewind"===o?s.css2slide(n,s.options.rewindSpeed):s.css2slide(n,s.options.slideSpeed),void s.afterGo()))},jumpTo:function(t){var e=this;"function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),t>=e.maximumItem||-1===t?t=e.maximumItem:0>=t&&(t=0),e.swapSpeed(0),e.browser.support3d===!0?e.transition3d(e.positionsInArray[t]):e.css2slide(e.positionsInArray[t],1),e.currentItem=e.owl.currentItem=t,e.afterGo()},afterGo:function(){var t=this;t.prevArr.push(t.currentItem),t.prevItem=t.owl.prevItem=t.prevArr[t.prevArr.length-2],t.prevArr.shift(0),t.prevItem!==t.currentItem&&(t.checkPagination(),t.checkNavigation(),t.eachMoveUpdate(),t.options.autoPlay!==!1&&t.checkAp()),"function"==typeof t.options.afterMove&&t.prevItem!==t.currentItem&&t.options.afterMove.apply(this,[t.$elem])},stop:function(){var t=this;t.apStatus="stop",e.clearInterval(t.autoPlayInterval)},checkAp:function(){var t=this;"stop"!==t.apStatus&&t.play()},play:function(){var t=this;return t.apStatus="play",t.options.autoPlay===!1?!1:(e.clearInterval(t.autoPlayInterval),void(t.autoPlayInterval=e.setInterval(function(){t.next(!0)},t.options.autoPlay)))},swapSpeed:function(t){var e=this;"slideSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)):"paginationSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)):"string"!=typeof t&&e.$owlWrapper.css(e.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){var e=this;e.$owlWrapper.css(e.doTranslate(t))},css2move:function(t){var e=this;e.$owlWrapper.css({left:t})},css2slide:function(t,e){var o=this;o.isCssFinish=!1,o.$owlWrapper.stop(!0,!0).animate({left:t},{duration:e||o.options.slideSpeed,complete:function(){o.isCssFinish=!0}})},checkBrowser:function(){var t,i,n,s,a=this,r="translate3d(0px, 0px, 0px)",l=o.createElement("div");l.style.cssText="  -moz-transform:"+r+"; -ms-transform:"+r+"; -o-transform:"+r+"; -webkit-transform:"+r+"; transform:"+r,t=/translate3d\(0px, 0px, 0px\)/g,i=l.style.cssText.match(t),n=null!==i&&i.length>=1,s="ontouchstart"in e||e.navigator.msMaxTouchPoints,a.browser={support3d:n,isTouch:s}},moveEvents:function(){var t=this;(t.options.mouseDrag!==!1||t.options.touchDrag!==!1)&&(t.gestures(),t.disabledEvents())},eventTypes:function(){var t=this,e=["s","e","x"];t.ev_types={},t.options.mouseDrag===!0&&t.options.touchDrag===!0?e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:t.options.mouseDrag===!1&&t.options.touchDrag===!0?e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:t.options.mouseDrag===!0&&t.options.touchDrag===!1&&(e=["mousedown.owl","mousemove.owl","mouseup.owl"]),t.ev_types.start=e[0],t.ev_types.move=e[1],t.ev_types.end=e[2]},disabledEvents:function(){var e=this;e.$elem.on("dragstart.owl",function(t){t.preventDefault()}),e.$elem.on("mousedown.disableTextSelect",function(e){return t(e.target).is("input, textarea, select, option")})},gestures:function(){function i(t){if(void 0!==t.touches)return{x:t.touches[0].pageX,y:t.touches[0].pageY};if(void 0===t.touches){if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY};if(void 0===t.pageX)return{x:t.clientX,y:t.clientY}}}function n(e){"on"===e?(t(o).on(l.ev_types.move,a),t(o).on(l.ev_types.end,r)):"off"===e&&(t(o).off(l.ev_types.move),t(o).off(l.ev_types.end))}function s(o){var s,a=o.originalEvent||o||e.event;if(3===a.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(l.isCssFinish===!1&&!l.options.dragBeforeAnimFinish)return!1;if(l.isCss3Finish===!1&&!l.options.dragBeforeAnimFinish)return!1;l.options.autoPlay!==!1&&e.clearInterval(l.autoPlayInterval),l.browser.isTouch===!0||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,t(this).css(l.removeTransition()),s=t(this).position(),p.relativePos=s.left,p.offsetX=i(a).x-s.left,p.offsetY=i(a).y-s.top,n("on"),p.sliding=!1,p.targetElement=a.target||a.srcElement}}function a(n){var s,a,r=n.originalEvent||n||e.event;l.newPosX=i(r).x-p.offsetX,l.newPosY=i(r).y-p.offsetY,l.newRelativeX=l.newPosX-p.relativePos,"function"==typeof l.options.startDragging&&p.dragging!==!0&&0!==l.newRelativeX&&(p.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&l.browser.isTouch===!0&&(void 0!==r.preventDefault?r.preventDefault():r.returnValue=!1,p.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&p.sliding===!1&&t(o).off("touchmove.owl"),s=function(){return l.newRelativeX/5},a=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,s()),a()),l.browser.support3d===!0?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function r(o){var i,s,a,r=o.originalEvent||o||e.event;r.target=r.target||r.srcElement,p.dragging=!1,l.browser.isTouch!==!0&&l.$owlWrapper.removeClass("grabbing"),l.dragDirection=l.owl.dragDirection=l.newRelativeX<0?"left":"right",0!==l.newRelativeX&&(i=l.getNewPosition(),l.goTo(i,!1,"drag"),p.targetElement===r.target&&l.browser.isTouch!==!0&&(t(r.target).on("click.disable",function(e){e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),t(e.target).off("click.disable")}),s=t._data(r.target,"events").click,a=s.pop(),s.splice(0,0,a))),n("off")}var l=this,p={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",s)},getNewPosition:function(){var t=this,e=t.closestItem();return e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):t.newPosX>=0&&(e=0,t.currentItem=0),e},closestItem:function(){var e=this,o=e.options.scrollPerPage===!0?e.pagesInArray:e.positionsInArray,i=e.newPosX,n=null;return t.each(o,function(s,a){i-e.itemWidth/20>o[s+1]&&i-e.itemWidth/20<a&&"left"===e.moveDirection()?(n=a,e.currentItem=e.options.scrollPerPage===!0?t.inArray(n,e.positionsInArray):s):i+e.itemWidth/20<a&&i+e.itemWidth/20>(o[s+1]||o[s]-e.itemWidth)&&"right"===e.moveDirection()&&(e.options.scrollPerPage===!0?(n=o[s+1]||o[o.length-1],e.currentItem=t.inArray(n,e.positionsInArray)):(n=o[s+1],e.currentItem=s+1))}),e.currentItem},moveDirection:function(){var t,e=this;return e.newRelativeX<0?(t="right",e.playDirection="next"):(t="left",e.playDirection="prev"),t},customEvents:function(){var t=this;t.$elem.on("owl.next",function(){t.next()}),t.$elem.on("owl.prev",function(){t.prev()}),t.$elem.on("owl.play",function(e,o){t.options.autoPlay=o,t.play(),t.hoverStatus="play"}),t.$elem.on("owl.stop",function(){t.stop(),t.hoverStatus="stop"}),t.$elem.on("owl.goTo",function(e,o){t.goTo(o)}),t.$elem.on("owl.jumpTo",function(e,o){t.jumpTo(o)})},stopOnHover:function(){var t=this;t.options.stopOnHover===!0&&t.browser.isTouch!==!0&&t.options.autoPlay!==!1&&(t.$elem.on("mouseover",function(){t.stop()}),t.$elem.on("mouseout",function(){"stop"!==t.hoverStatus&&t.play()}))},lazyLoad:function(){var e,o,i,n,s,a=this;if(a.options.lazyLoad===!1)return!1;for(e=0;e<a.itemsAmount;e+=1)o=t(a.$owlItems[e]),"loaded"!==o.data("owl-loaded")&&(i=o.data("owl-item"),n=o.find(".lazyOwl"),"string"==typeof n.data("src")?(void 0===o.data("owl-loaded")&&(n.hide(),o.addClass("loading").data("owl-loaded","checked")),s=a.options.lazyFollow===!0?i>=a.currentItem:!0,s&&i<a.currentItem+a.options.items&&n.length&&n.each(function(){a.lazyPreload(o,t(this))})):o.data("owl-loaded","loaded"))},lazyPreload:function(t,o){function i(){t.data("owl-loaded","loaded").removeClass("loading"),o.removeAttr("data-src"),"fade"===a.options.lazyEffect?o.fadeIn(400):o.show(),"function"==typeof a.options.afterLazyLoad&&a.options.afterLazyLoad.apply(this,[a.$elem])}function n(){r+=1,a.completeImg(o.get(0))||s===!0?i():100>=r?e.setTimeout(n,100):i()}var s,a=this,r=0;"DIV"===o.prop("tagName")?(o.css("background-image","url("+o.data("src")+")"),s=!0):o[0].src=o.data("src"),n()},autoHeight:function(){function o(){var o=t(s.$owlItems[s.currentItem]).height();s.wrapperOuter.css("height",o+"px"),s.wrapperOuter.hasClass("autoHeight")||e.setTimeout(function(){s.wrapperOuter.addClass("autoHeight")},0)}function i(){n+=1,s.completeImg(a.get(0))?o():100>=n?e.setTimeout(i,100):s.wrapperOuter.css("height","")}var n,s=this,a=t(s.$owlItems[s.currentItem]).find("img");void 0!==a.get(0)?(n=0,i()):o()},completeImg:function(t){var e;return t.complete?(e=typeof t.naturalWidth,"undefined"!==e&&0===t.naturalWidth?!1:!0):!1},onVisibleItems:function(){var e,o=this;for(o.options.addClassActive===!0&&o.$owlItems.removeClass("active"),o.visibleItems=[],e=o.currentItem;e<o.currentItem+o.options.items;e+=1)o.visibleItems.push(e),o.options.addClassActive===!0&&t(o.$owlItems[e]).addClass("active");o.owl.visibleItems=o.visibleItems},transitionTypes:function(t){var e=this;e.outClass="owl-"+t+"-out",e.inClass="owl-"+t+"-in"},singleItemTransition:function(){function t(t){return{position:"relative",left:t+"px"}}var e=this,o=e.outClass,i=e.inClass,n=e.$owlItems.eq(e.currentItem),s=e.$owlItems.eq(e.prevItem),a=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],r=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":r+"px","-moz-perspective-origin":r+"px","perspective-origin":r+"px"}),s.css(t(a,10)).addClass(o).on(l,function(){e.endPrev=!0,s.off(l),e.clearTransStyle(s,o)}),n.addClass(i).on(l,function(){e.endCurrent=!0,n.off(l),e.clearTransStyle(n,i)})},clearTransStyle:function(t,e){var o=this;t.css({position:"",left:""}).removeClass(e),o.endPrev&&o.endCurrent&&(o.$owlWrapper.removeClass("owl-origin"),o.endPrev=!1,o.endCurrent=!1,o.isTransition=!1)},owlStatus:function(){var t=this;t.owl={userOptions:t.userOptions,baseElement:t.$elem,userItems:t.$userItems,owlItems:t.$owlItems,currentItem:t.currentItem,prevItem:t.prevItem,visibleItems:t.visibleItems,isTouch:t.browser.isTouch,browser:t.browser,dragDirection:t.dragDirection}},clearEvents:function(){var i=this;i.$elem.off(".owl owl mousedown.disableTextSelect"),t(o).off(".owl owl"),t(e).off("resize",i.resizer)},unWrap:function(){var t=this;0!==t.$elem.children().length&&(t.$owlWrapper.unwrap(),t.$userItems.unwrap().unwrap(),t.owlControls&&t.owlControls.remove()),t.clearEvents(),t.$elem.attr({style:t.$elem.data("owl-originalStyles")||"","class":t.$elem.data("owl-originalClasses")})},destroy:function(){var t=this;t.stop(),e.clearInterval(t.checkVisible),t.unWrap(),t.$elem.removeData()},reinit:function(e){var o=this,i=t.extend({},o.userOptions,e);o.unWrap(),o.init(i,o.$elem)},addItem:function(t,e){var o,i=this;return t?0===i.$elem.children().length?(i.$elem.append(t),i.setVars(),!1):(i.unWrap(),o=void 0===e||-1===e?-1:e,o>=i.$userItems.length||-1===o?i.$userItems.eq(-1).after(t):i.$userItems.eq(o).before(t),void i.setVars()):!1},removeItem:function(t){var e,o=this;return 0===o.$elem.children().length?!1:(e=void 0===t||-1===t?-1:t,o.unWrap(),o.$userItems.eq(e).remove(),void o.setVars())}};t.fn.owlCarousel=function(e){return this.each(function(){if(t(this).data("owl-init")===!0)return!1;t(this).data("owl-init",!0);var o=Object.create(i);o.init(e,this),t.data(this,"owlCarousel",o)})},t.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:e,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);

;
/* so_megamenu.js */

/* 1   */ var active = false;
/* 2   */ var hover = false;
/* 3   */ $(document).ready(function() {
/* 4   */ 	$("ul.megamenu li .sub-menu .content .hover-menu ul li").hover(function () {
/* 5   */ 		$(this).children("ul").show();
/* 6   */ 
/* 7   */ 	},function () {
/* 8   */ 		$(this).children("ul").hide();
/* 9   */ 	});
/* 10  */ 	
/* 11  */ 	
/* 12  */ 	var wd_width = $(window).width();
/* 13  */ 	if(wd_width <= 991) {
/* 14  */ 		$("ul.megamenu > li.hover").unbind('mouseenter mouseleave');
/* 15  */ 		removeWidthSubmenu();	
/* 16  */ 		clickMegaMenu();
/* 17  */ 	} else {
/* 18  */ 		$( "ul.megamenu > li.hover").unbind( "click" );
/* 19  */ 		hoverMegaMenu();
/* 20  */ 		renderWidthSubmenu();
/* 21  */ 	}
/* 22  */ 	
/* 23  */ 	$(window).resize(function() {
/* 24  */ 		var sp_width = $(window).width();
/* 25  */ 		if(sp_width <= 991){
/* 26  */ 			$("ul.megamenu > li.hover").unbind('mouseenter mouseleave');
/* 27  */ 			removeWidthSubmenu();
/* 28  */ 			clickMegaMenu();
/* 29  */ 		}	
/* 30  */ 		else{
/* 31  */ 			$( "ul.megamenu > li.hover").unbind( "click" );
/* 32  */ 			hoverMegaMenu();
/* 33  */ 			renderWidthSubmenu();
/* 34  */ 		}	
/* 35  */ 	});
/* 36  */ 	
/* 37  */ 	
/* 38  */ 	$("ul.megamenu > li.click").click(function () {
/* 39  */ 		if($(this).find(".content").is(':visible')) { return false; }
/* 40  */ 		active = $(this);
/* 41  */ 		hover = true;
/* 42  */ 		$("ul.megamenu > li").removeClass("active");
/* 43  */ 		$(this).addClass("active");
/* 44  */ 		$("ul.megamenu > li").children(".sub-menu").hide();
/* 45  */ 		$("ul.megamenu > li").find(".content").hide();
/* 46  */ 		$(this).children(".sub-menu").show();
/* 47  */ 		if(transition == 'slide') {
/* 48  */ 			$(this).find(".content").show();
/* 49  */ 			$(this).find(".content").css("height", "auto");
/* 50  */ 			var originalHeight = $(this).find(".content").height();

/* so_megamenu.js */

/* 51  */ 			$(this).find(".content").css("height", 0);
/* 52  */ 			$(this).find(".content").stop(true, true).animate({ height:originalHeight },animation_time);
/* 53  */ 		} else if(transition == 'fade') {
/* 54  */ 			$(this).find(".content").fadeIn(animation_time);
/* 55  */ 		} else {
/* 56  */ 			$(this).find(".content").show();
/* 57  */ 		}		
/* 58  */ 		$(this).children(".sub-menu").css("right", "auto");
/* 59  */ 			if ($("html").css("direction").toLowerCase() == "rtl"){
/* 60  */ 				var $whatever        = $(this).children(".sub-menu");
/* 61  */ 				var $whatever2       =  $($whatever).closest('ul.megamenu');
/* 62  */ 				if($whatever.offset().left < $whatever2.offset().left) {
/* 63  */ 					$(this).children(".sub-menu").css("right", "0");
/* 64  */ 				}				
/* 65  */ 			}else{
/* 66  */ 				var $whatever        = $(this).children(".sub-menu");
/* 67  */ 				var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
/* 68  */ 				var $whatever2       =  $($whatever).closest('ul.megamenu');
/* 69  */ 				var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
/* 70  */ 				if(ending_right2 > ending_right) {
/* 71  */ 					$(this).children(".sub-menu").css("right", "0");
/* 72  */ 				}				
/* 73  */ 			}
/* 74  */ 
/* 75  */ 		return false;
/* 76  */ 	});
/* 77  */ 	
/* 78  */ 	$("#show-megamenu").click(function () {
/* 79  */ 		if($('.megamenu-wrapper').hasClass('so-megamenu-active'))
/* 80  */ 			$('.megamenu-wrapper').removeClass('so-megamenu-active');
/* 81  */ 		else
/* 82  */ 			$('.megamenu-wrapper').addClass('so-megamenu-active');
/* 83  */ 	}); 
/* 84  */ 	$('#remove-megamenu').click(function() {
/* 85  */         $('.megamenu-wrapper').removeClass('so-megamenu-active');
/* 86  */         return false;
/* 87  */     });		
/* 88  */ 	
/* 89  */ 	$("#show-verticalmenu").click(function () {
/* 90  */ 		if($('.vertical-wrapper').hasClass('so-vertical-active'))
/* 91  */ 			$('.vertical-wrapper').removeClass('so-vertical-active');
/* 92  */ 		else
/* 93  */ 			$('.vertical-wrapper').addClass('so-vertical-active');
/* 94  */ 	}); 
/* 95  */ 	$('#remove-verticalmenu').click(function() {
/* 96  */         $('.vertical-wrapper').removeClass('so-vertical-active');
/* 97  */         return false;
/* 98  */     });	
/* 99  */ 	
/* 100 */ 	$('html').on('click', function () {

/* so_megamenu.js */

/* 101 */ 		$("ul.megamenu > li.click").removeClass("active");
/* 102 */ 		$("ul.megamenu > li.click").children(".sub-menu").hide();
/* 103 */ 		$("ul.megamenu > li.click").find(".content").hide();
/* 104 */ 	});
/* 105 */ 	$('.close-menu').on('click', function () {
/* 106 */ 		$(this).parent().removeClass("active");
/* 107 */ 		$(this).parent().children(".sub-menu").hide();
/* 108 */ 		$(this).parent().find(".content").hide();
/* 109 */ 		return false;
/* 110 */ 	});
/* 111 */ });
/* 112 */ 
/* 113 */ function renderWidthSubmenu()
/* 114 */ {
/* 115 */ 	$('.vertical .sub-menu').each(function(){
/* 116 */ 		value = $(this).data("subwidth");
/* 117 */ 		if(value){
/* 118 */ 			var container_width = $('.container').width();
/* 119 */ 			var vertical_width = $('.vertical').width();
/* 120 */ 			var full_width = container_width - vertical_width;
/* 121 */ 			var width_submenu = (full_width*value)/100;
/* 122 */ 			$(this).css('width',width_submenu+'px');
/* 123 */ 		}	
/* 124 */ 	});
/* 125 */ }	
/* 126 */ function removeWidthSubmenu()
/* 127 */ {
/* 128 */ 	$('.vertical .sub-menu').each(function(){
/* 129 */ 		$(this).css('width','100%');
/* 130 */ 	});
/* 131 */ }
/* 132 */ function clickMegaMenu(){
/* 133 */ 	$("ul.megamenu > li.hover").click(function () {
/* 134 */ 		if($(this).find(".content").is(':visible')) { return false; }
/* 135 */ 		active = $(this);
/* 136 */ 		hover = true;
/* 137 */ 		$("ul.megamenu > li").removeClass("active");
/* 138 */ 		$(this).addClass("active");
/* 139 */ 		$("ul.megamenu > li").children(".sub-menu").hide();
/* 140 */ 		$("ul.megamenu > li").find(".content").hide();
/* 141 */ 		$(this).children(".sub-menu").show();
/* 142 */ 		if(transition == 'slide') {
/* 143 */ 			$(this).find(".content").show();
/* 144 */ 			$(this).find(".content").css("height", "auto");
/* 145 */ 			var originalHeight = $(this).find(".content").height();
/* 146 */ 			$(this).find(".content").css("height", 0);
/* 147 */ 			$(this).find(".content").stop(true, true).animate({ height:originalHeight },animation_time);
/* 148 */ 		} else if(transition == 'fade') {
/* 149 */ 			$(this).find(".content").fadeIn(animation_time);
/* 150 */ 		} else {

/* so_megamenu.js */

/* 151 */ 			$(this).find(".content").show();
/* 152 */ 		}		
/* 153 */ 		$(this).children(".sub-menu").css("right", "auto");
/* 154 */ 			if ($("html").css("direction").toLowerCase() == "rtl"){
/* 155 */ 				var $whatever        = $(this).children(".sub-menu");
/* 156 */ 				var $whatever2       =  $($whatever).closest('ul.megamenu');
/* 157 */ 				if($whatever.offset().left < $whatever2.offset().left) {
/* 158 */ 					$(this).children(".sub-menu").css("right", "0");
/* 159 */ 				}				
/* 160 */ 			}else{
/* 161 */ 				var $whatever        = $(this).children(".sub-menu");
/* 162 */ 				var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
/* 163 */ 				var $whatever2       =  $($whatever).closest('ul.megamenu');
/* 164 */ 				var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
/* 165 */ 				if(ending_right2 > ending_right) {
/* 166 */ 					$(this).children(".sub-menu").css("right", "0");
/* 167 */ 				}				
/* 168 */ 			}
/* 169 */ 
/* 170 */ 	});	
/* 171 */ }
/* 172 */ 
/* 173 */ function hoverMegaMenu(){
/* 174 */ 		$("ul.megamenu > li.hover").hover(function () {
/* 175 */ 			active = $(this);
/* 176 */ 			hover = true;
/* 177 */ 			$("ul.megamenu > li").removeClass("active");
/* 178 */ 			$(this).addClass("active");
/* 179 */ 			$("ul.megamenu > li").children(".sub-menu").hide();
/* 180 */ 			$("ul.megamenu > li").find(".content").hide();
/* 181 */ 			$(this).children(".sub-menu").show();
/* 182 */ 			if(transition == 'slide') {
/* 183 */ 				$(this).find(".content").show();
/* 184 */ 				$(this).find(".content").css("height", "auto");
/* 185 */ 				var originalHeight = $(this).find(".content").height();
/* 186 */ 				$(this).find(".content").css("height", 0);
/* 187 */ 				$(this).find(".content").stop(true, true).animate({ height:originalHeight },animation_time);
/* 188 */ 			} else if(transition == 'fade') {
/* 189 */ 				$(this).find(".content").fadeIn(animation_time);
/* 190 */ 			} else {
/* 191 */ 				$(this).find(".content").show();
/* 192 */ 			}	
/* 193 */ 			$(this).children(".sub-menu").css("right", "auto");	
/* 194 */ 			if ($("html").css("direction").toLowerCase() == "rtl"){
/* 195 */ 				var $whatever        = $(this).children(".sub-menu");
/* 196 */ 				var $whatever2       =  $($whatever).closest('ul.megamenu');
/* 197 */ 				if($whatever.offset().left < $whatever2.offset().left) {
/* 198 */ 					$(this).children(".sub-menu").css("right", "0");
/* 199 */ 				}				
/* 200 */ 			}else{

/* so_megamenu.js */

/* 201 */ 				var $whatever        = $(this).children(".sub-menu");
/* 202 */ 				var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
/* 203 */ 				var $whatever2       =  $($whatever).closest('ul.megamenu');
/* 204 */ 				var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
/* 205 */ 				if(ending_right2 > ending_right) {
/* 206 */ 					$(this).children(".sub-menu").css("right", "0");
/* 207 */ 				}				
/* 208 */ 			}
/* 209 */ 
/* 210 */ 		},function () {
/* 211 */ 			var rel = $(this).attr("title");
/* 212 */ 			hover = false;
/* 213 */ 			if(rel == 'hover-intent') {
/* 214 */ 				var hoverintent = $(this);
/* 215 */ 				setTimeout(function (){
/* 216 */ 					if(hover == false) {
/* 217 */ 						if(transition == 'slide') {
/* 218 */ 							$(hoverintent).find(".content").stop(true, true).animate({ height:"hide" },animation_time, function() { if(hover == false) { $(hoverintent).removeClass("active"); $(hoverintent).children(".sub-menu").hide(); } });
/* 219 */ 						} else if(transition == 'fade') {
/* 220 */ 							$(hoverintent).removeClass("active");
/* 221 */ 							$(hoverintent).find(".content").fadeOut(animation_time, function() {
/* 222 */ 								if(hover == false) { $(hoverintent).children(".sub-menu").hide(); }
/* 223 */ 							});
/* 224 */ 						} else {
/* 225 */ 							$(hoverintent).removeClass("active");
/* 226 */ 							$(hoverintent).children(".sub-menu").hide();
/* 227 */ 							$(hoverintent).find(".content").hide();
/* 228 */ 						}
/* 229 */ 					}
/* 230 */ 				}, 500);
/* 231 */ 			} else {
/* 232 */ 				if(transition == 'slide') {
/* 233 */ 					$(this).find(".content").stop(true, true).animate({ height:"hide" },animation_time, function() { if(hover == false) { $(active).removeClass("active"); $(active).children(".sub-menu").hide(); } });
/* 234 */ 				} else if(transition == 'fade') {
/* 235 */ 					$(active).removeClass("active");
/* 236 */ 					$(this).find(".content").fadeOut(animation_time, function() {
/* 237 */ 						if(hover == false) { $(active).children(".sub-menu").hide(); }
/* 238 */ 					});
/* 239 */ 				} else {
/* 240 */ 					$(this).removeClass("active");
/* 241 */ 					$(this).children(".sub-menu").hide();
/* 242 */ 					$(this).find(".content").hide();
/* 243 */ 				}
/* 244 */ 			}
/* 245 */ 		});	
/* 246 */ }

;
/* owl.carousel.js */

/* 1    */ /**
/* 2    *|  * Owl2 carousel2
/* 3    *|  * @version 2.0.0
/* 4    *|  * @author Bartosz Wojciechowski
/* 5    *|  * @license The MIT License (MIT)
/* 6    *|  * @todo Lazy Load Icon
/* 7    *|  * @todo prevent animationend bubling
/* 8    *|  * @todo itemsScaleUp
/* 9    *|  * @todo Test Zepto
/* 10   *|  * @todo stagePadding calculate wrong active classes
/* 11   *|  */
/* 12   */ ;(function($, window, document, undefined) {
/* 13   */ 
/* 14   */     var drag, state, e;
/* 15   */ 
/* 16   */     /**
/* 17   *|      * Template for status information about drag and touch events.
/* 18   *|      * @private
/* 19   *|      */
/* 20   */     drag = {
/* 21   */         start: 0,
/* 22   */         startX: 0,
/* 23   */         startY: 0,
/* 24   */         current: 0,
/* 25   */         currentX: 0,
/* 26   */         currentY: 0,
/* 27   */         offsetX: 0,
/* 28   */         offsetY: 0,
/* 29   */         distance: null,
/* 30   */         startTime: 0,
/* 31   */         endTime: 0,
/* 32   */         updatedX: 0,
/* 33   */         targetEl: null
/* 34   */     };
/* 35   */ 
/* 36   */     /**
/* 37   *|      * Template for some status informations.
/* 38   *|      * @private
/* 39   *|      */
/* 40   */     state = {
/* 41   */         isTouch: false,
/* 42   */         isScrolling: false,
/* 43   */         isSwiping: false,
/* 44   */         direction: false,
/* 45   */         inMotion: false
/* 46   */     };
/* 47   */ 
/* 48   */     /**
/* 49   *|      * Event functions references.
/* 50   *|      * @private

/* owl.carousel.js */

/* 51   *|      */
/* 52   */     e = {
/* 53   */         _onDragStart: null,
/* 54   */         _onDragMove: null,
/* 55   */         _onDragEnd: null,
/* 56   */         _transitionEnd: null,
/* 57   */         _resizer: null,
/* 58   */         _responsiveCall: null,
/* 59   */         _goToLoop: null,
/* 60   */         _checkVisibile: null
/* 61   */     };
/* 62   */ 
/* 63   */     /**
/* 64   *|      * Creates a carousel2.
/* 65   *|      * @class The Owl2 Carousel.
/* 66   *|      * @public
/* 67   *|      * @param {HTMLElement|jQuery} element - The element to create the carousel2 for.
/* 68   *|      * @param {Object} [options] - The options
/* 69   *|      */
/* 70   */     function Owl2(element, options) {
/* 71   */ 
/* 72   */         /**
/* 73   *|          * Current settings for the carousel2.
/* 74   *|          * @public
/* 75   *|          */
/* 76   */         this.settings = null;
/* 77   */ 
/* 78   */         /**
/* 79   *|          * Current options set by the caller including defaults.
/* 80   *|          * @public
/* 81   *|          */
/* 82   */         this.options = $.extend({}, Owl2.Defaults, options);
/* 83   */ 
/* 84   */         /**
/* 85   *|          * Plugin element.
/* 86   *|          * @public
/* 87   *|          */
/* 88   */         this.$element = $(element);
/* 89   */ 
/* 90   */         /**
/* 91   *|          * Caches informations about drag and touch events.
/* 92   *|          */
/* 93   */         this.drag = $.extend({}, drag);
/* 94   */ 
/* 95   */         /**
/* 96   *|          * Caches some status informations.
/* 97   *|          * @protected
/* 98   *|          */
/* 99   */         this.state = $.extend({}, state);
/* 100  */ 

/* owl.carousel.js */

/* 101  */         /**
/* 102  *|          * @protected
/* 103  *|          * @todo Must be documented
/* 104  *|          */
/* 105  */         this.e = $.extend({}, e);
/* 106  */ 
/* 107  */         /**
/* 108  *|          * References to the running plugins of this carousel2.
/* 109  *|          * @protected
/* 110  *|          */
/* 111  */         this._plugins = {};
/* 112  */ 
/* 113  */         /**
/* 114  *|          * Currently suppressed events to prevent them from beeing retriggered.
/* 115  *|          * @protected
/* 116  *|          */
/* 117  */         this._supress = {};
/* 118  */ 
/* 119  */         /**
/* 120  *|          * Absolute current position.
/* 121  *|          * @protected
/* 122  *|          */
/* 123  */         this._current = null;
/* 124  */ 
/* 125  */         /**
/* 126  *|          * Animation speed in milliseconds.
/* 127  *|          * @protected
/* 128  *|          */
/* 129  */         this._speed = null;
/* 130  */ 
/* 131  */         /**
/* 132  *|          * Coordinates of all items in pixel.
/* 133  *|          * @todo The name of this member is missleading.
/* 134  *|          * @protected
/* 135  *|          */
/* 136  */         this._coordinates = [];
/* 137  */ 
/* 138  */         /**
/* 139  *|          * Current breakpoint.
/* 140  *|          * @todo Real media queries would be nice.
/* 141  *|          * @protected
/* 142  *|          */
/* 143  */         this._breakpoint = null;
/* 144  */ 
/* 145  */         /**
/* 146  *|          * Current width of the plugin element.
/* 147  *|          */
/* 148  */         this._width = null;
/* 149  */ 
/* 150  */         /**

/* owl.carousel.js */

/* 151  *|          * All real items.
/* 152  *|          * @protected
/* 153  *|          */
/* 154  */         this._items = [];
/* 155  */ 
/* 156  */         /**
/* 157  *|          * All cloned items.
/* 158  *|          * @protected
/* 159  *|          */
/* 160  */         this._clones = [];
/* 161  */ 
/* 162  */         /**
/* 163  *|          * Merge values of all items.
/* 164  *|          * @todo Maybe this could be part of a plugin.
/* 165  *|          * @protected
/* 166  *|          */
/* 167  */         this._mergers = [];
/* 168  */ 
/* 169  */         /**
/* 170  *|          * Invalidated parts within the update process.
/* 171  *|          * @protected
/* 172  *|          */
/* 173  */         this._invalidated = {};
/* 174  */ 
/* 175  */         /**
/* 176  *|          * Ordered list of workers for the update process.
/* 177  *|          * @protected
/* 178  *|          */
/* 179  */         this._pipe = [];
/* 180  */ 
/* 181  */         $.each(Owl2.Plugins, $.proxy(function(key, plugin) {
/* 182  */             this._plugins[key[0].toLowerCase() + key.slice(1)]
/* 183  */                 = new plugin(this);
/* 184  */         }, this));
/* 185  */ 
/* 186  */         $.each(Owl2.Pipe, $.proxy(function(priority, worker) {
/* 187  */             this._pipe.push({
/* 188  */                 'filter': worker.filter,
/* 189  */                 'run': $.proxy(worker.run, this)
/* 190  */             });
/* 191  */         }, this));
/* 192  */ 
/* 193  */         this.setup();
/* 194  */         this.initialize();
/* 195  */     }
/* 196  */ 
/* 197  */     /**
/* 198  *|      * Default options for the carousel2.
/* 199  *|      * @public
/* 200  *|      */

/* owl.carousel.js */

/* 201  */     Owl2.Defaults = {
/* 202  */         items: 3,
/* 203  */         loop: false,
/* 204  */         center: false,
/* 205  */ 
/* 206  */         mouseDrag: true,
/* 207  */         touchDrag: true,
/* 208  */         pullDrag: true,
/* 209  */         freeDrag: false,
/* 210  */ 
/* 211  */         margin: 0,
/* 212  */         stagePadding: 0,
/* 213  */ 
/* 214  */         merge: false,
/* 215  */         mergeFit: true,
/* 216  */         autoWidth: false,
/* 217  */ 
/* 218  */         startPosition: 0,
/* 219  */         rtl: false,
/* 220  */ 
/* 221  */         smartSpeed: 250,
/* 222  */         fluidSpeed: false,
/* 223  */         dragEndSpeed: false,
/* 224  */ 
/* 225  */         responsive: {},
/* 226  */         responsiveRefreshRate: 200,
/* 227  */         responsiveBaseElement: window,
/* 228  */         responsiveClass: false,
/* 229  */ 
/* 230  */         fallbackEasing: 'swing',
/* 231  */ 
/* 232  */         info: false,
/* 233  */ 
/* 234  */         nestedItemSelector: false,
/* 235  */         itemElement: 'div',
/* 236  */         stageElement: 'div',
/* 237  */ 
/* 238  */         // Classes and Names
/* 239  */         themeClass: 'owl-theme',
/* 240  */         baseClass: 'owl-carousel2',
/* 241  */         itemClass: 'owl-item',
/* 242  */         centerClass: 'center',
/* 243  */         activeClass: 'active'
/* 244  */     };
/* 245  */ 
/* 246  */     /**
/* 247  *|      * Enumeration for width.
/* 248  *|      * @public
/* 249  *|      * @readonly
/* 250  *|      * @enum {String}

/* owl.carousel.js */

/* 251  *|      */
/* 252  */     Owl2.Width = {
/* 253  */         Default: 'default',
/* 254  */         Inner: 'inner',
/* 255  */         Outer: 'outer'
/* 256  */     };
/* 257  */ 
/* 258  */     /**
/* 259  *|      * Contains all registered plugins.
/* 260  *|      * @public
/* 261  *|      */
/* 262  */     Owl2.Plugins = {};
/* 263  */ 
/* 264  */     /**
/* 265  *|      * Update pipe.
/* 266  *|      */
/* 267  */     Owl2.Pipe = [ {
/* 268  */         filter: [ 'width', 'items', 'settings' ],
/* 269  */         run: function(cache) {
/* 270  */             cache.current = this._items && this._items[this.relative(this._current)];
/* 271  */         }
/* 272  */     }, {
/* 273  */         filter: [ 'items', 'settings' ],
/* 274  */         run: function() {
/* 275  */             var cached = this._clones,
/* 276  */                 clones = this.$stage.children('.cloned');
/* 277  */ 
/* 278  */             if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
/* 279  */                 this.$stage.children('.cloned').remove();
/* 280  */                 this._clones = [];
/* 281  */             }
/* 282  */         }
/* 283  */     }, {
/* 284  */         filter: [ 'items', 'settings' ],
/* 285  */         run: function() {
/* 286  */             var i, n,
/* 287  */                 clones = this._clones,
/* 288  */                 items = this._items,
/* 289  */                 delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;
/* 290  */ 
/* 291  */             for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
/* 292  */                 if (delta > 0) {
/* 293  */                     this.$stage.children().eq(items.length + clones.length - 1).remove();
/* 294  */                     clones.pop();
/* 295  */                     this.$stage.children().eq(0).remove();
/* 296  */                     clones.pop();
/* 297  */                 } else {
/* 298  */                     clones.push(clones.length / 2);
/* 299  */                     this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
/* 300  */                     clones.push(items.length - 1 - (clones.length - 1) / 2);

/* owl.carousel.js */

/* 301  */                     this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
/* 302  */                 }
/* 303  */             }
/* 304  */         }
/* 305  */     }, {
/* 306  */         filter: [ 'width', 'items', 'settings' ],
/* 307  */         run: function() {
/* 308  */             var rtl = (this.settings.rtl ? 1 : -1),
/* 309  */                 width = (this.width() / this.settings.items).toFixed(3),
/* 310  */                 coordinate = 0, merge, i, n;
/* 311  */ 
/* 312  */             this._coordinates = [];
/* 313  */             for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
/* 314  */                 merge = this._mergers[this.relative(i)];
/* 315  */                 merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
/* 316  */                 coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;
/* 317  */ 
/* 318  */                 this._coordinates.push(coordinate);
/* 319  */             }
/* 320  */         }
/* 321  */     }, {
/* 322  */         filter: [ 'width', 'items', 'settings' ],
/* 323  */         run: function() {
/* 324  */             var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
/* 325  */                 'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
/* 326  */                 'padding-left': this.settings.stagePadding || '',
/* 327  */                 'padding-right': this.settings.stagePadding || ''
/* 328  */             };
/* 329  */ 
/* 330  */             this.$stage.css(css);
/* 331  */ 
/* 332  */             css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
/* 333  */             css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;
/* 334  */ 
/* 335  */             if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
/* 336  */                 for (i = 0, n = this._coordinates.length; i < n; i++) {
/* 337  */                     css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
/* 338  */                     this.$stage.children().eq(i).css(css);
/* 339  */                 }
/* 340  */             } else {
/* 341  */                 this.$stage.children().css(css);
/* 342  */             }
/* 343  */         }
/* 344  */     }, {
/* 345  */         filter: [ 'width', 'items', 'settings' ],
/* 346  */         run: function(cache) {
/* 347  */             cache.current && this.reset(this.$stage.children().index(cache.current));
/* 348  */         }
/* 349  */     }, {
/* 350  */         filter: [ 'position' ],

/* owl.carousel.js */

/* 351  */         run: function() {
/* 352  */             this.animate(this.coordinates(this._current));
/* 353  */         }
/* 354  */     }, {
/* 355  */         filter: [ 'width', 'position', 'items', 'settings' ],
/* 356  */         run: function() {
/* 357  */             var rtl = this.settings.rtl ? 1 : -1,
/* 358  */                 padding = this.settings.stagePadding * 2,
/* 359  */                 begin = this.coordinates(this.current()) + padding,
/* 360  */                 end = begin + this.width() * rtl,
/* 361  */                 inner, outer, matches = [], i, n;
/* 362  */ 
/* 363  */             for (i = 0, n = this._coordinates.length; i < n; i++) {
/* 364  */                 inner = this._coordinates[i - 1] || 0;
/* 365  */                 outer = Math.abs(this._coordinates[i]) + padding * rtl;
/* 366  */ 
/* 367  */                 if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
/* 368  */                     || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
/* 369  */                     matches.push(i);
/* 370  */                 }
/* 371  */             }
/* 372  */ 
/* 373  */             this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
/* 374  */             this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);
/* 375  */ 
/* 376  */             if (this.settings.center) {
/* 377  */                 this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
/* 378  */                 this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
/* 379  */             }
/* 380  */         }
/* 381  */     } ];
/* 382  */ 
/* 383  */     /**
/* 384  *|      * Initializes the carousel2.
/* 385  *|      * @protected
/* 386  *|      */
/* 387  */     Owl2.prototype.initialize = function() {
/* 388  */         this.trigger('initialize');
/* 389  */ 
/* 390  */         this.$element
/* 391  */             .addClass(this.settings.baseClass)
/* 392  */             .addClass(this.settings.themeClass)
/* 393  */             .toggleClass('owl-rtl', this.settings.rtl);
/* 394  */ 
/* 395  */         // check support
/* 396  */         this.browserSupport();
/* 397  */ 
/* 398  */         if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
/* 399  */             var imgs, nestedSelector, width;
/* 400  */             imgs = this.$element.find('img');

/* owl.carousel.js */

/* 401  */             nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
/* 402  */             width = this.$element.children(nestedSelector).width();
/* 403  */ 
/* 404  */             if (imgs.length && width <= 0) {
/* 405  */                 this.preloadAutoWidthImages(imgs);
/* 406  */                 return false;
/* 407  */             }
/* 408  */         }
/* 409  */ 
/* 410  */         this.$element.addClass('owl-loading');
/* 411  */ 
/* 412  */         // create stage
/* 413  */         this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
/* 414  */             .wrap('<div class="owl-stage-outer">');
/* 415  */ 
/* 416  */         // append stage
/* 417  */         this.$element.append(this.$stage.parent());
/* 418  */ 
/* 419  */         // append content
/* 420  */         this.replace(this.$element.children().not(this.$stage.parent()));
/* 421  */ 
/* 422  */         // set view width
/* 423  */         this._width = this.$element.width();
/* 424  */ 
/* 425  */         // update view
/* 426  */         this.refresh();
/* 427  */ 
/* 428  */         this.$element.removeClass('owl-loading').addClass('owl-loaded');
/* 429  */ 
/* 430  */         // attach generic events
/* 431  */         this.eventsCall();
/* 432  */ 
/* 433  */         // attach generic events
/* 434  */         this.internalEvents();
/* 435  */ 
/* 436  */         // attach custom control events
/* 437  */         this.addTriggerableEvents();
/* 438  */ 
/* 439  */         this.trigger('initialized');
/* 440  */     };
/* 441  */ 
/* 442  */     /**
/* 443  *|      * Setups the current settings.
/* 444  *|      * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
/* 445  *|      * @todo Support for media queries by using `matchMedia` would be nice.
/* 446  *|      * @public
/* 447  *|      */
/* 448  */     Owl2.prototype.setup = function() {
/* 449  */         var viewport = this.viewport(),
/* 450  */             overwrites = this.options.responsive,

/* owl.carousel.js */

/* 451  */             match = -1,
/* 452  */             settings = null;
/* 453  */ 
/* 454  */         if (!overwrites) {
/* 455  */             settings = $.extend({}, this.options);
/* 456  */         } else {
/* 457  */             $.each(overwrites, function(breakpoint) {
/* 458  */                 if (breakpoint <= viewport && breakpoint > match) {
/* 459  */                     match = Number(breakpoint);
/* 460  */                 }
/* 461  */             });
/* 462  */ 
/* 463  */             settings = $.extend({}, this.options, overwrites[match]);
/* 464  */             delete settings.responsive;
/* 465  */ 
/* 466  */             // responsive class
/* 467  */             if (settings.responsiveClass) {
/* 468  */                 this.$element.attr('class', function(i, c) {
/* 469  */                     return c.replace(/\b owl-responsive-\S+/g, '');
/* 470  */                 }).addClass('owl-responsive-' + match);
/* 471  */             }
/* 472  */         }
/* 473  */ 
/* 474  */         if (this.settings === null || this._breakpoint !== match) {
/* 475  */             this.trigger('change', { property: { name: 'settings', value: settings } });
/* 476  */             this._breakpoint = match;
/* 477  */             this.settings = settings;
/* 478  */             this.invalidate('settings');
/* 479  */             this.trigger('changed', { property: { name: 'settings', value: this.settings } });
/* 480  */         }
/* 481  */     };
/* 482  */ 
/* 483  */     /**
/* 484  *|      * Updates option logic if necessery.
/* 485  *|      * @protected
/* 486  *|      */
/* 487  */     Owl2.prototype.optionsLogic = function() {
/* 488  */         // Toggle Center class
/* 489  */         this.$element.toggleClass('owl-center', this.settings.center);
/* 490  */ 
/* 491  */         // if items number is less than in body
/* 492  */         if (this.settings.loop && this._items.length < this.settings.items) {
/* 493  */             this.settings.loop = false;
/* 494  */         }
/* 495  */ 
/* 496  */         if (this.settings.autoWidth) {
/* 497  */             this.settings.stagePadding = false;
/* 498  */             this.settings.merge = false;
/* 499  */         }
/* 500  */     };

/* owl.carousel.js */

/* 501  */ 
/* 502  */     /**
/* 503  *|      * Prepares an item before add.
/* 504  *|      * @todo Rename event parameter `content` to `item`.
/* 505  *|      * @protected
/* 506  *|      * @returns {jQuery|HTMLElement} - The item container.
/* 507  *|      */
/* 508  */     Owl2.prototype.prepare = function(item) {
/* 509  */         var event = this.trigger('prepare', { content: item });
/* 510  */ 
/* 511  */         if (!event.data) {
/* 512  */             event.data = $('<' + this.settings.itemElement + '/>')
/* 513  */                 .addClass(this.settings.itemClass).append(item)
/* 514  */         }
/* 515  */ 
/* 516  */         this.trigger('prepared', { content: event.data });
/* 517  */ 
/* 518  */         return event.data;
/* 519  */     };
/* 520  */ 
/* 521  */     /**
/* 522  *|      * Updates the view.
/* 523  *|      * @public
/* 524  *|      */
/* 525  */     Owl2.prototype.update = function() {
/* 526  */         var i = 0,
/* 527  */             n = this._pipe.length,
/* 528  */             filter = $.proxy(function(p) { return this[p] }, this._invalidated),
/* 529  */             cache = {};
/* 530  */ 
/* 531  */         while (i < n) {
/* 532  */             if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
/* 533  */                 this._pipe[i].run(cache);
/* 534  */             }
/* 535  */             i++;
/* 536  */         }
/* 537  */ 
/* 538  */         this._invalidated = {};
/* 539  */     };
/* 540  */ 
/* 541  */     /**
/* 542  *|      * Gets the width of the view.
/* 543  *|      * @public
/* 544  *|      * @param {Owl2.Width} [dimension=Owl2.Width.Default] - The dimension to return.
/* 545  *|      * @returns {Number} - The width of the view in pixel.
/* 546  *|      */
/* 547  */     Owl2.prototype.width = function(dimension) {
/* 548  */         dimension = dimension || Owl2.Width.Default;
/* 549  */         switch (dimension) {
/* 550  */             case Owl2.Width.Inner:

/* owl.carousel.js */

/* 551  */             case Owl2.Width.Outer:
/* 552  */                 return this._width;
/* 553  */             default:
/* 554  */                 return this._width - this.settings.stagePadding * 2 + this.settings.margin;
/* 555  */         }
/* 556  */     };
/* 557  */ 
/* 558  */     /**
/* 559  *|      * Refreshes the carousel2 primarily for adaptive purposes.
/* 560  *|      * @public
/* 561  *|      */
/* 562  */     Owl2.prototype.refresh = function() {
/* 563  */         if (this._items.length === 0) {
/* 564  */             return false;
/* 565  */         }
/* 566  */ 
/* 567  */         var start = new Date().getTime();
/* 568  */ 
/* 569  */         this.trigger('refresh');
/* 570  */ 
/* 571  */         this.setup();
/* 572  */ 
/* 573  */         this.optionsLogic();
/* 574  */ 
/* 575  */         // hide and show methods helps here to set a proper widths,
/* 576  */         // this prevents scrollbar to be calculated in stage width
/* 577  */         this.$stage.addClass('owl-refresh');
/* 578  */ 
/* 579  */         this.update();
/* 580  */ 
/* 581  */         this.$stage.removeClass('owl-refresh');
/* 582  */ 
/* 583  */         this.state.orientation = window.orientation;
/* 584  */ 
/* 585  */         this.watchVisibility();
/* 586  */ 
/* 587  */         this.trigger('refreshed');
/* 588  */     };
/* 589  */ 
/* 590  */     /**
/* 591  *|      * Save internal event references and add event based functions.
/* 592  *|      * @protected
/* 593  *|      */
/* 594  */     Owl2.prototype.eventsCall = function() {
/* 595  */         // Save events references
/* 596  */         this.e._onDragStart = $.proxy(function(e) {
/* 597  */             this.onDragStart(e);
/* 598  */         }, this);
/* 599  */         this.e._onDragMove = $.proxy(function(e) {
/* 600  */             this.onDragMove(e);

/* owl.carousel.js */

/* 601  */         }, this);
/* 602  */         this.e._onDragEnd = $.proxy(function(e) {
/* 603  */             this.onDragEnd(e);
/* 604  */         }, this);
/* 605  */         this.e._onResize = $.proxy(function(e) {
/* 606  */             this.onResize(e);
/* 607  */         }, this);
/* 608  */         this.e._transitionEnd = $.proxy(function(e) {
/* 609  */             this.transitionEnd(e);
/* 610  */         }, this);
/* 611  */         this.e._preventClick = $.proxy(function(e) {
/* 612  */             this.preventClick(e);
/* 613  */         }, this);
/* 614  */     };
/* 615  */ 
/* 616  */     /**
/* 617  *|      * Checks window `resize` event.
/* 618  *|      * @protected
/* 619  *|      */
/* 620  */     Owl2.prototype.onThrottledResize = function() {
/* 621  */         window.clearTimeout(this.resizeTimer);
/* 622  */         this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
/* 623  */     };
/* 624  */ 
/* 625  */     /**
/* 626  *|      * Checks window `resize` event.
/* 627  *|      * @protected
/* 628  *|      */
/* 629  */     Owl2.prototype.onResize = function() {
/* 630  */         if (!this._items.length) {
/* 631  */             return false;
/* 632  */         }
/* 633  */ 
/* 634  */         if (this._width === this.$element.width()) {
/* 635  */             return false;
/* 636  */         }
/* 637  */ 
/* 638  */         if (this.trigger('resize').isDefaultPrevented()) {
/* 639  */             return false;
/* 640  */         }
/* 641  */ 
/* 642  */         this._width = this.$element.width();
/* 643  */ 
/* 644  */         this.invalidate('width');
/* 645  */ 
/* 646  */         this.refresh();
/* 647  */ 
/* 648  */         this.trigger('resized');
/* 649  */     };
/* 650  */ 

/* owl.carousel.js */

/* 651  */     /**
/* 652  *|      * Checks for touch/mouse drag event type and add run event handlers.
/* 653  *|      * @protected
/* 654  *|      */
/* 655  */     Owl2.prototype.eventsRouter = function(event) {
/* 656  */         var type = event.type;
/* 657  */ 
/* 658  */         if (type === "mousedown" || type === "touchstart") {
/* 659  */             this.onDragStart(event);
/* 660  */         } else if (type === "mousemove" || type === "touchmove") {
/* 661  */             this.onDragMove(event);
/* 662  */         } else if (type === "mouseup" || type === "touchend") {
/* 663  */             this.onDragEnd(event);
/* 664  */         } else if (type === "touchcancel") {
/* 665  */             this.onDragEnd(event);
/* 666  */         }
/* 667  */     };
/* 668  */ 
/* 669  */     /**
/* 670  *|      * Checks for touch/mouse drag options and add necessery event handlers.
/* 671  *|      * @protected
/* 672  *|      */
/* 673  */     Owl2.prototype.internalEvents = function() {
/* 674  */         var isTouch = isTouchSupport(),
/* 675  */             isTouchIE = isTouchSupportIE();
/* 676  */ 
/* 677  */         if (this.settings.mouseDrag){
/* 678  */             this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
/* 679  */             this.$stage.on('dragstart', function() { return false });
/* 680  */             this.$stage.get(0).onselectstart = function() { return false };
/* 681  */         } else {
/* 682  */             this.$element.addClass('owl-text-select-on');
/* 683  */         }
/* 684  */ 
/* 685  */         if (this.settings.touchDrag && !isTouchIE){
/* 686  */             this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
/* 687  */         }
/* 688  */ 
/* 689  */         // catch transitionEnd event
/* 690  */         if (this.transitionEndVendor) {
/* 691  */             this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
/* 692  */         }
/* 693  */ 
/* 694  */         // responsive
/* 695  */         if (this.settings.responsive !== false) {
/* 696  */             this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
/* 697  */         }
/* 698  */     };
/* 699  */ 
/* 700  */     /**

/* owl.carousel.js */

/* 701  *|      * Handles touchstart/mousedown event.
/* 702  *|      * @protected
/* 703  *|      * @param {Event} event - The event arguments.
/* 704  *|      */
/* 705  */     Owl2.prototype.onDragStart = function(event) {
/* 706  */         var ev, isTouchEvent, pageX, pageY, animatedPos;
/* 707  */ 
/* 708  */         ev = event.originalEvent || event || window.event;
/* 709  */ 
/* 710  */         // prevent right click
/* 711  */         if (ev.which === 3 || this.state.isTouch) {
/* 712  */             return false;
/* 713  */         }
/* 714  */ 
/* 715  */         if (ev.type === 'mousedown') {
/* 716  */             this.$stage.addClass('owl-grab');
/* 717  */         }
/* 718  */ 
/* 719  */         this.trigger('drag');
/* 720  */         this.drag.startTime = new Date().getTime();
/* 721  */         this.speed(0);
/* 722  */         this.state.isTouch = true;
/* 723  */         this.state.isScrolling = false;
/* 724  */         this.state.isSwiping = false;
/* 725  */         this.drag.distance = 0;
/* 726  */ 
/* 727  */         pageX = getTouches(ev).x;
/* 728  */         pageY = getTouches(ev).y;
/* 729  */ 
/* 730  */         // get stage position left
/* 731  */         this.drag.offsetX = this.$stage.position().left;
/* 732  */         this.drag.offsetY = this.$stage.position().top;
/* 733  */ 
/* 734  */         if (this.settings.rtl) {
/* 735  */             this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
/* 736  */             + this.settings.margin;
/* 737  */         }
/* 738  */ 
/* 739  */         // catch position // ie to fix
/* 740  */         if (this.state.inMotion && this.support3d) {
/* 741  */             animatedPos = this.getTransformProperty();
/* 742  */             this.drag.offsetX = animatedPos;
/* 743  */             this.animate(animatedPos);
/* 744  */             this.state.inMotion = true;
/* 745  */         } else if (this.state.inMotion && !this.support3d) {
/* 746  */             this.state.inMotion = false;
/* 747  */             return false;
/* 748  */         }
/* 749  */ 
/* 750  */         this.drag.startX = pageX - this.drag.offsetX;

/* owl.carousel.js */

/* 751  */         this.drag.startY = pageY - this.drag.offsetY;
/* 752  */ 
/* 753  */         this.drag.start = pageX - this.drag.startX;
/* 754  */         this.drag.targetEl = ev.target || ev.srcElement;
/* 755  */         this.drag.updatedX = this.drag.start;
/* 756  */ 
/* 757  */         // to do/check
/* 758  */         // prevent links and images dragging;
/* 759  */         if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
/* 760  */             this.drag.targetEl.draggable = false;
/* 761  */         }
/* 762  */ 
/* 763  */         $(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
/* 764  */     };
/* 765  */ 
/* 766  */     /**
/* 767  *|      * Handles the touchmove/mousemove events.
/* 768  *|      * @todo Simplify
/* 769  *|      * @protected
/* 770  *|      * @param {Event} event - The event arguments.
/* 771  *|      */
/* 772  */     Owl2.prototype.onDragMove = function(event) {
/* 773  */         var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;
/* 774  */ 
/* 775  */         if (!this.state.isTouch) {
/* 776  */             return;
/* 777  */         }
/* 778  */ 
/* 779  */         if (this.state.isScrolling) {
/* 780  */             return;
/* 781  */         }
/* 782  */ 
/* 783  */         ev = event.originalEvent || event || window.event;
/* 784  */ 
/* 785  */         pageX = getTouches(ev).x;
/* 786  */         pageY = getTouches(ev).y;
/* 787  */ 
/* 788  */         // Drag Direction
/* 789  */         this.drag.currentX = pageX - this.drag.startX;
/* 790  */         this.drag.currentY = pageY - this.drag.startY;
/* 791  */         this.drag.distance = this.drag.currentX - this.drag.offsetX;
/* 792  */ 
/* 793  */         // Check move direction
/* 794  */         if (this.drag.distance < 0) {
/* 795  */             this.state.direction = this.settings.rtl ? 'right' : 'left';
/* 796  */         } else if (this.drag.distance > 0) {
/* 797  */             this.state.direction = this.settings.rtl ? 'left' : 'right';
/* 798  */         }
/* 799  */         // Loop
/* 800  */         if (this.settings.loop) {

/* owl.carousel.js */

/* 801  */             if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
/* 802  */                 this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
/* 803  */             } else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
/* 804  */                 this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
/* 805  */             }
/* 806  */         } else {
/* 807  */             // pull
/* 808  */             minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
/* 809  */             maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
/* 810  */             pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
/* 811  */             this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
/* 812  */         }
/* 813  */ 
/* 814  */         // Lock browser if swiping horizontal
/* 815  */ 
/* 816  */         if ((this.drag.distance > 8 || this.drag.distance < -8)) {
/* 817  */             if (ev.preventDefault !== undefined) {
/* 818  */                 ev.preventDefault();
/* 819  */             } else {
/* 820  */                 ev.returnValue = false;
/* 821  */             }
/* 822  */             this.state.isSwiping = true;
/* 823  */         }
/* 824  */ 
/* 825  */         this.drag.updatedX = this.drag.currentX;
/* 826  */ 
/* 827  */         // Lock Owl2 if scrolling
/* 828  */         if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
/* 829  */             this.state.isScrolling = true;
/* 830  */             this.drag.updatedX = this.drag.start;
/* 831  */         }
/* 832  */ 
/* 833  */         this.animate(this.drag.updatedX);
/* 834  */     };
/* 835  */ 
/* 836  */     /**
/* 837  *|      * Handles the touchend/mouseup events.
/* 838  *|      * @protected
/* 839  *|      */
/* 840  */     Owl2.prototype.onDragEnd = function(event) {
/* 841  */         var compareTimes, distanceAbs, closest;
/* 842  */ 
/* 843  */         if (!this.state.isTouch) {
/* 844  */             return;
/* 845  */         }
/* 846  */ 
/* 847  */         if (event.type === 'mouseup') {
/* 848  */             this.$stage.removeClass('owl-grab');
/* 849  */         }
/* 850  */ 

/* owl.carousel.js */

/* 851  */         this.trigger('dragged');
/* 852  */ 
/* 853  */         // prevent links and images dragging;
/* 854  */         this.drag.targetEl.removeAttribute("draggable");
/* 855  */ 
/* 856  */         // remove drag event listeners
/* 857  */ 
/* 858  */         this.state.isTouch = false;
/* 859  */         this.state.isScrolling = false;
/* 860  */         this.state.isSwiping = false;
/* 861  */ 
/* 862  */         // to check
/* 863  */         if (this.drag.distance === 0 && this.state.inMotion !== true) {
/* 864  */             this.state.inMotion = false;
/* 865  */             return false;
/* 866  */         }
/* 867  */ 
/* 868  */         // prevent clicks while scrolling
/* 869  */ 
/* 870  */         this.drag.endTime = new Date().getTime();
/* 871  */         compareTimes = this.drag.endTime - this.drag.startTime;
/* 872  */         distanceAbs = Math.abs(this.drag.distance);
/* 873  */ 
/* 874  */         // to test
/* 875  */         if (distanceAbs > 3 || compareTimes > 300) {
/* 876  */             this.removeClick(this.drag.targetEl);
/* 877  */         }
/* 878  */ 
/* 879  */         closest = this.closest(this.drag.updatedX);
/* 880  */ 
/* 881  */         this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
/* 882  */         this.current(closest);
/* 883  */         this.invalidate('position');
/* 884  */         this.update();
/* 885  */ 
/* 886  */         // if pullDrag is off then fire transitionEnd event manually when stick
/* 887  */         // to border
/* 888  */         if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
/* 889  */             this.transitionEnd();
/* 890  */         }
/* 891  */ 
/* 892  */         this.drag.distance = 0;
/* 893  */ 
/* 894  */         $(document).off('.owl.dragEvents');
/* 895  */     };
/* 896  */ 
/* 897  */     /**
/* 898  *|      * Attaches `preventClick` to disable link while swipping.
/* 899  *|      * @protected
/* 900  *|      * @param {HTMLElement} [target] - The target of the `click` event.

/* owl.carousel.js */

/* 901  *|      */
/* 902  */     Owl2.prototype.removeClick = function(target) {
/* 903  */         this.drag.targetEl = target;
/* 904  */         $(target).on('click.preventClick', this.e._preventClick);
/* 905  */         // to make sure click is removed:
/* 906  */         window.setTimeout(function() {
/* 907  */             $(target).off('click.preventClick');
/* 908  */         }, 300);
/* 909  */     };
/* 910  */ 
/* 911  */     /**
/* 912  *|      * Suppresses click event.
/* 913  *|      * @protected
/* 914  *|      * @param {Event} ev - The event arguments.
/* 915  *|      */
/* 916  */     Owl2.prototype.preventClick = function(ev) {
/* 917  */         if (ev.preventDefault) {
/* 918  */             ev.preventDefault();
/* 919  */         } else {
/* 920  */             ev.returnValue = false;
/* 921  */         }
/* 922  */         if (ev.stopPropagation) {
/* 923  */             ev.stopPropagation();
/* 924  */         }
/* 925  */         $(ev.target).off('click.preventClick');
/* 926  */     };
/* 927  */ 
/* 928  */     /**
/* 929  *|      * Catches stage position while animate (only CSS3).
/* 930  *|      * @protected
/* 931  *|      * @returns
/* 932  *|      */
/* 933  */     Owl2.prototype.getTransformProperty = function() {
/* 934  */         var transform, matrix3d;
/* 935  */ 
/* 936  */         transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
/* 937  */         // var transform = this.$stage.css(this.vendorName + 'transform')
/* 938  */         transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
/* 939  */         matrix3d = transform.length === 16;
/* 940  */ 
/* 941  */         return matrix3d !== true ? transform[4] : transform[12];
/* 942  */     };
/* 943  */ 
/* 944  */     /**
/* 945  *|      * Gets absolute position of the closest item for a coordinate.
/* 946  *|      * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
/* 947  *|      * @protected
/* 948  *|      * @param {Number} coordinate - The coordinate in pixel.
/* 949  *|      * @return {Number} - The absolute position of the closest item.
/* 950  *|      */

/* owl.carousel.js */

/* 951  */     Owl2.prototype.closest = function(coordinate) {
/* 952  */         var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();
/* 953  */ 
/* 954  */         if (!this.settings.freeDrag) {
/* 955  */             // check closest item
/* 956  */             $.each(coordinates, $.proxy(function(index, value) {
/* 957  */                 if (coordinate > value - pull && coordinate < value + pull) {
/* 958  */                     position = index;
/* 959  */                 } else if (this.op(coordinate, '<', value)
/* 960  */                     && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
/* 961  */                     position = this.state.direction === 'left' ? index + 1 : index;
/* 962  */                 }
/* 963  */                 return position === -1;
/* 964  */             }, this));
/* 965  */         }
/* 966  */ 
/* 967  */         if (!this.settings.loop) {
/* 968  */             // non loop boundries
/* 969  */             if (this.op(coordinate, '>', coordinates[this.minimum()])) {
/* 970  */                 position = coordinate = this.minimum();
/* 971  */             } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
/* 972  */                 position = coordinate = this.maximum();
/* 973  */             }
/* 974  */         }
/* 975  */ 
/* 976  */         return position;
/* 977  */     };
/* 978  */ 
/* 979  */     /**
/* 980  *|      * Animates the stage.
/* 981  *|      * @public
/* 982  *|      * @param {Number} coordinate - The coordinate in pixels.
/* 983  *|      */
/* 984  */     Owl2.prototype.animate = function(coordinate) {
/* 985  */         this.trigger('translate');
/* 986  */         this.state.inMotion = this.speed() > 0;
/* 987  */ 
/* 988  */         if (this.support3d) {
/* 989  */             this.$stage.css({
/* 990  */                 transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
/* 991  */                 transition: (this.speed() / 1000) + 's'
/* 992  */             });
/* 993  */         } else if (this.state.isTouch) {
/* 994  */             this.$stage.css({
/* 995  */                 left: coordinate + 'px'
/* 996  */             });
/* 997  */         } else {
/* 998  */             this.$stage.animate({
/* 999  */                 left: coordinate
/* 1000 */             }, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {

/* owl.carousel.js */

/* 1001 */                 if (this.state.inMotion) {
/* 1002 */                     this.transitionEnd();
/* 1003 */                 }
/* 1004 */             }, this));
/* 1005 */         }
/* 1006 */     };
/* 1007 */ 
/* 1008 */     /**
/* 1009 *|      * Sets the absolute position of the current item.
/* 1010 *|      * @public
/* 1011 *|      * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
/* 1012 *|      * @returns {Number} - The absolute position of the current item.
/* 1013 *|      */
/* 1014 */     Owl2.prototype.current = function(position) {
/* 1015 */         if (position === undefined) {
/* 1016 */             return this._current;
/* 1017 */         }
/* 1018 */ 
/* 1019 */         if (this._items.length === 0) {
/* 1020 */             return undefined;
/* 1021 */         }
/* 1022 */ 
/* 1023 */         position = this.normalize(position);
/* 1024 */ 
/* 1025 */         if (this._current !== position) {
/* 1026 */             var event = this.trigger('change', { property: { name: 'position', value: position } });
/* 1027 */ 
/* 1028 */             if (event.data !== undefined) {
/* 1029 */                 position = this.normalize(event.data);
/* 1030 */             }
/* 1031 */ 
/* 1032 */             this._current = position;
/* 1033 */ 
/* 1034 */             this.invalidate('position');
/* 1035 */ 
/* 1036 */             this.trigger('changed', { property: { name: 'position', value: this._current } });
/* 1037 */         }
/* 1038 */ 
/* 1039 */         return this._current;
/* 1040 */     };
/* 1041 */ 
/* 1042 */     /**
/* 1043 *|      * Invalidates the given part of the update routine.
/* 1044 *|      * @param {String} part - The part to invalidate.
/* 1045 *|      */
/* 1046 */     Owl2.prototype.invalidate = function(part) {
/* 1047 */         this._invalidated[part] = true;
/* 1048 */     }
/* 1049 */ 
/* 1050 */     /**

/* owl.carousel.js */

/* 1051 *|      * Resets the absolute position of the current item.
/* 1052 *|      * @public
/* 1053 *|      * @param {Number} position - The absolute position of the new item.
/* 1054 *|      */
/* 1055 */     Owl2.prototype.reset = function(position) {
/* 1056 */         position = this.normalize(position);
/* 1057 */ 
/* 1058 */         if (position === undefined) {
/* 1059 */             return;
/* 1060 */         }
/* 1061 */ 
/* 1062 */         this._speed = 0;
/* 1063 */         this._current = position;
/* 1064 */ 
/* 1065 */         this.suppress([ 'translate', 'translated' ]);
/* 1066 */ 
/* 1067 */         this.animate(this.coordinates(position));
/* 1068 */ 
/* 1069 */         this.release([ 'translate', 'translated' ]);
/* 1070 */     };
/* 1071 */ 
/* 1072 */     /**
/* 1073 *|      * Normalizes an absolute or a relative position for an item.
/* 1074 *|      * @public
/* 1075 *|      * @param {Number} position - The absolute or relative position to normalize.
/* 1076 *|      * @param {Boolean} [relative=false] - Whether the given position is relative or not.
/* 1077 *|      * @returns {Number} - The normalized position.
/* 1078 *|      */
/* 1079 */     Owl2.prototype.normalize = function(position, relative) {
/* 1080 */         var n = (relative ? this._items.length : this._items.length + this._clones.length);
/* 1081 */ 
/* 1082 */         if (!$.isNumeric(position) || n < 1) {
/* 1083 */             return undefined;
/* 1084 */         }
/* 1085 */ 
/* 1086 */         if (this._clones.length) {
/* 1087 */             position = ((position % n) + n) % n;
/* 1088 */         } else {
/* 1089 */             position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
/* 1090 */         }
/* 1091 */ 
/* 1092 */         return position;
/* 1093 */     };
/* 1094 */ 
/* 1095 */     /**
/* 1096 *|      * Converts an absolute position for an item into a relative position.
/* 1097 *|      * @public
/* 1098 *|      * @param {Number} position - The absolute position to convert.
/* 1099 *|      * @returns {Number} - The converted position.
/* 1100 *|      */

/* owl.carousel.js */

/* 1101 */     Owl2.prototype.relative = function(position) {
/* 1102 */         position = this.normalize(position);
/* 1103 */         position = position - this._clones.length / 2;
/* 1104 */         return this.normalize(position, true);
/* 1105 */     };
/* 1106 */ 
/* 1107 */     /**
/* 1108 *|      * Gets the maximum position for an item.
/* 1109 *|      * @public
/* 1110 *|      * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
/* 1111 *|      * @returns {Number}
/* 1112 *|      */
/* 1113 */     Owl2.prototype.maximum = function(relative) {
/* 1114 */         var maximum, width, i = 0, coordinate,
/* 1115 */             settings = this.settings;
/* 1116 */ 
/* 1117 */         if (relative) {
/* 1118 */             return this._items.length - 1;
/* 1119 */         }
/* 1120 */ 
/* 1121 */         if (!settings.loop && settings.center) {
/* 1122 */             maximum = this._items.length - 1;
/* 1123 */         } else if (!settings.loop && !settings.center) {
/* 1124 */             maximum = this._items.length - settings.items;
/* 1125 */         } else if (settings.loop || settings.center) {
/* 1126 */             maximum = this._items.length + settings.items;
/* 1127 */         } else if (settings.autoWidth || settings.merge) {
/* 1128 */             revert = settings.rtl ? 1 : -1;
/* 1129 */             width = this.$stage.width() - this.$element.width();
/* 1130 */             while (coordinate = this.coordinates(i)) {
/* 1131 */                 if (coordinate * revert >= width) {
/* 1132 */                     break;
/* 1133 */                 }
/* 1134 */                 maximum = ++i;
/* 1135 */             }
/* 1136 */         } else {
/* 1137 */             throw 'Can not detect maximum absolute position.'
/* 1138 */         }
/* 1139 */ 
/* 1140 */         return maximum;
/* 1141 */     };
/* 1142 */ 
/* 1143 */     /**
/* 1144 *|      * Gets the minimum position for an item.
/* 1145 *|      * @public
/* 1146 *|      * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
/* 1147 *|      * @returns {Number}
/* 1148 *|      */
/* 1149 */     Owl2.prototype.minimum = function(relative) {
/* 1150 */         if (relative) {

/* owl.carousel.js */

/* 1151 */             return 0;
/* 1152 */         }
/* 1153 */ 
/* 1154 */         return this._clones.length / 2;
/* 1155 */     };
/* 1156 */ 
/* 1157 */     /**
/* 1158 *|      * Gets an item at the specified relative position.
/* 1159 *|      * @public
/* 1160 *|      * @param {Number} [position] - The relative position of the item.
/* 1161 *|      * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
/* 1162 *|      */
/* 1163 */     Owl2.prototype.items = function(position) {
/* 1164 */         if (position === undefined) {
/* 1165 */             return this._items.slice();
/* 1166 */         }
/* 1167 */ 
/* 1168 */         position = this.normalize(position, true);
/* 1169 */         return this._items[position];
/* 1170 */     };
/* 1171 */ 
/* 1172 */     /**
/* 1173 *|      * Gets an item at the specified relative position.
/* 1174 *|      * @public
/* 1175 *|      * @param {Number} [position] - The relative position of the item.
/* 1176 *|      * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
/* 1177 *|      */
/* 1178 */     Owl2.prototype.mergers = function(position) {
/* 1179 */         if (position === undefined) {
/* 1180 */             return this._mergers.slice();
/* 1181 */         }
/* 1182 */ 
/* 1183 */         position = this.normalize(position, true);
/* 1184 */         return this._mergers[position];
/* 1185 */     };
/* 1186 */ 
/* 1187 */     /**
/* 1188 *|      * Gets the absolute positions of clones for an item.
/* 1189 *|      * @public
/* 1190 *|      * @param {Number} [position] - The relative position of the item.
/* 1191 *|      * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
/* 1192 *|      */
/* 1193 */     Owl2.prototype.clones = function(position) {
/* 1194 */         var odd = this._clones.length / 2,
/* 1195 */             even = odd + this._items.length,
/* 1196 */             map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
/* 1197 */ 
/* 1198 */         if (position === undefined) {
/* 1199 */             return $.map(this._clones, function(v, i) { return map(i) });
/* 1200 */         }

/* owl.carousel.js */

/* 1201 */ 
/* 1202 */         return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
/* 1203 */     };
/* 1204 */ 
/* 1205 */     /**
/* 1206 *|      * Sets the current animation speed.
/* 1207 *|      * @public
/* 1208 *|      * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
/* 1209 *|      * @returns {Number} - The current animation speed in milliseconds.
/* 1210 *|      */
/* 1211 */     Owl2.prototype.speed = function(speed) {
/* 1212 */         if (speed !== undefined) {
/* 1213 */             this._speed = speed;
/* 1214 */         }
/* 1215 */ 
/* 1216 */         return this._speed;
/* 1217 */     };
/* 1218 */ 
/* 1219 */     /**
/* 1220 *|      * Gets the coordinate of an item.
/* 1221 *|      * @todo The name of this method is missleanding.
/* 1222 *|      * @public
/* 1223 *|      * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
/* 1224 *|      * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
/* 1225 *|      */
/* 1226 */     Owl2.prototype.coordinates = function(position) {
/* 1227 */         var coordinate = null;
/* 1228 */ 
/* 1229 */         if (position === undefined) {
/* 1230 */             return $.map(this._coordinates, $.proxy(function(coordinate, index) {
/* 1231 */                 return this.coordinates(index);
/* 1232 */             }, this));
/* 1233 */         }
/* 1234 */ 
/* 1235 */         if (this.settings.center) {
/* 1236 */             coordinate = this._coordinates[position];
/* 1237 */             coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
/* 1238 */         } else {
/* 1239 */             coordinate = this._coordinates[position - 1] || 0;
/* 1240 */         }
/* 1241 */ 
/* 1242 */         return coordinate;
/* 1243 */     };
/* 1244 */ 
/* 1245 */     /**
/* 1246 *|      * Calculates the speed for a translation.
/* 1247 *|      * @protected
/* 1248 *|      * @param {Number} from - The absolute position of the start item.
/* 1249 *|      * @param {Number} to - The absolute position of the target item.
/* 1250 *|      * @param {Number} [factor=undefined] - The time factor in milliseconds.

/* owl.carousel.js */

/* 1251 *|      * @returns {Number} - The time in milliseconds for the translation.
/* 1252 *|      */
/* 1253 */     Owl2.prototype.duration = function(from, to, factor) {
/* 1254 */         return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
/* 1255 */     };
/* 1256 */ 
/* 1257 */     /**
/* 1258 *|      * Slides to the specified item.
/* 1259 *|      * @public
/* 1260 *|      * @param {Number} position - The position of the item.
/* 1261 *|      * @param {Number} [speed] - The time in milliseconds for the transition.
/* 1262 *|      */
/* 1263 */     Owl2.prototype.to = function(position, speed) {
/* 1264 */         if (this.settings.loop) {
/* 1265 */             var distance = position - this.relative(this.current()),
/* 1266 */                 revert = this.current(),
/* 1267 */                 before = this.current(),
/* 1268 */                 after = this.current() + distance,
/* 1269 */                 direction = before - after < 0 ? true : false,
/* 1270 */                 items = this._clones.length + this._items.length;
/* 1271 */ 
/* 1272 */             if (after < this.settings.items && direction === false) {
/* 1273 */                 revert = before + this._items.length;
/* 1274 */                 this.reset(revert);
/* 1275 */             } else if (after >= items - this.settings.items && direction === true) {
/* 1276 */                 revert = before - this._items.length;
/* 1277 */                 this.reset(revert);
/* 1278 */             }
/* 1279 */             window.clearTimeout(this.e._goToLoop);
/* 1280 */             this.e._goToLoop = window.setTimeout($.proxy(function() {
/* 1281 */                 this.speed(this.duration(this.current(), revert + distance, speed));
/* 1282 */                 this.current(revert + distance);
/* 1283 */                 this.update();
/* 1284 */             }, this), 30);
/* 1285 */         } else {
/* 1286 */             this.speed(this.duration(this.current(), position, speed));
/* 1287 */             this.current(position);
/* 1288 */             this.update();
/* 1289 */         }
/* 1290 */     };
/* 1291 */ 
/* 1292 */     /**
/* 1293 *|      * Slides to the next item.
/* 1294 *|      * @public
/* 1295 *|      * @param {Number} [speed] - The time in milliseconds for the transition.
/* 1296 *|      */
/* 1297 */     Owl2.prototype.next = function(speed) {
/* 1298 */         speed = speed || false;
/* 1299 */         this.to(this.relative(this.current()) + 1, speed);
/* 1300 */     };

/* owl.carousel.js */

/* 1301 */ 
/* 1302 */     /**
/* 1303 *|      * Slides to the previous item.
/* 1304 *|      * @public
/* 1305 *|      * @param {Number} [speed] - The time in milliseconds for the transition.
/* 1306 *|      */
/* 1307 */     Owl2.prototype.prev = function(speed) {
/* 1308 */         speed = speed || false;
/* 1309 */         this.to(this.relative(this.current()) - 1, speed);
/* 1310 */     };
/* 1311 */ 
/* 1312 */     /**
/* 1313 *|      * Handles the end of an animation.
/* 1314 *|      * @protected
/* 1315 *|      * @param {Event} event - The event arguments.
/* 1316 *|      */
/* 1317 */     Owl2.prototype.transitionEnd = function(event) {
/* 1318 */ 
/* 1319 */         // if css2 animation then event object is undefined
/* 1320 */         if (event !== undefined) {
/* 1321 */             event.stopPropagation();
/* 1322 */ 
/* 1323 */             // Catch only owl-stage transitionEnd event
/* 1324 */             if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
/* 1325 */                 return false;
/* 1326 */             }
/* 1327 */         }
/* 1328 */ 
/* 1329 */         this.state.inMotion = false;
/* 1330 */         this.trigger('translated');
/* 1331 */     };
/* 1332 */ 
/* 1333 */     /**
/* 1334 *|      * Gets viewport width.
/* 1335 *|      * @protected
/* 1336 *|      * @return {Number} - The width in pixel.
/* 1337 *|      */
/* 1338 */     Owl2.prototype.viewport = function() {
/* 1339 */         var width;
/* 1340 */         if (this.options.responsiveBaseElement !== window) {
/* 1341 */             width = $(this.options.responsiveBaseElement).width();
/* 1342 */         } else if (window.innerWidth) {
/* 1343 */             width = window.innerWidth;
/* 1344 */         } else if (document.documentElement && document.documentElement.clientWidth) {
/* 1345 */             width = document.documentElement.clientWidth;
/* 1346 */         } else {
/* 1347 */             throw 'Can not detect viewport width.';
/* 1348 */         }
/* 1349 */         return width;
/* 1350 */     };

/* owl.carousel.js */

/* 1351 */ 
/* 1352 */     /**
/* 1353 *|      * Replaces the current content.
/* 1354 *|      * @public
/* 1355 *|      * @param {HTMLElement|jQuery|String} content - The new content.
/* 1356 *|      */
/* 1357 */     Owl2.prototype.replace = function(content) {
/* 1358 */         this.$stage.empty();
/* 1359 */         this._items = [];
/* 1360 */ 
/* 1361 */         if (content) {
/* 1362 */             content = (content instanceof jQuery) ? content : $(content);
/* 1363 */         }
/* 1364 */ 
/* 1365 */         if (this.settings.nestedItemSelector) {
/* 1366 */             content = content.find('.' + this.settings.nestedItemSelector);
/* 1367 */         }
/* 1368 */ 
/* 1369 */         content.filter(function() {
/* 1370 */             return this.nodeType === 1;
/* 1371 */         }).each($.proxy(function(index, item) {
/* 1372 */             item = this.prepare(item);
/* 1373 */             this.$stage.append(item);
/* 1374 */             this._items.push(item);
/* 1375 */             this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
/* 1376 */         }, this));
/* 1377 */ 
/* 1378 */         this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
/* 1379 */ 
/* 1380 */         this.invalidate('items');
/* 1381 */     };
/* 1382 */ 
/* 1383 */     /**
/* 1384 *|      * Adds an item.
/* 1385 *|      * @todo Use `item` instead of `content` for the event arguments.
/* 1386 *|      * @public
/* 1387 *|      * @param {HTMLElement|jQuery|String} content - The item content to add.
/* 1388 *|      * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
/* 1389 *|      */
/* 1390 */     Owl2.prototype.add = function(content, position) {
/* 1391 */         position = position === undefined ? this._items.length : this.normalize(position, true);
/* 1392 */ 
/* 1393 */         this.trigger('add', { content: content, position: position });
/* 1394 */ 
/* 1395 */         if (this._items.length === 0 || position === this._items.length) {
/* 1396 */             this.$stage.append(content);
/* 1397 */             this._items.push(content);
/* 1398 */             this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
/* 1399 */         } else {
/* 1400 */             this._items[position].before(content);

/* owl.carousel.js */

/* 1401 */             this._items.splice(position, 0, content);
/* 1402 */             this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
/* 1403 */         }
/* 1404 */ 
/* 1405 */         this.invalidate('items');
/* 1406 */ 
/* 1407 */         this.trigger('added', { content: content, position: position });
/* 1408 */     };
/* 1409 */ 
/* 1410 */     /**
/* 1411 *|      * Removes an item by its position.
/* 1412 *|      * @todo Use `item` instead of `content` for the event arguments.
/* 1413 *|      * @public
/* 1414 *|      * @param {Number} position - The relative position of the item to remove.
/* 1415 *|      */
/* 1416 */     Owl2.prototype.remove = function(position) {
/* 1417 */         position = this.normalize(position, true);
/* 1418 */ 
/* 1419 */         if (position === undefined) {
/* 1420 */             return;
/* 1421 */         }
/* 1422 */ 
/* 1423 */         this.trigger('remove', { content: this._items[position], position: position });
/* 1424 */ 
/* 1425 */         this._items[position].remove();
/* 1426 */         this._items.splice(position, 1);
/* 1427 */         this._mergers.splice(position, 1);
/* 1428 */ 
/* 1429 */         this.invalidate('items');
/* 1430 */ 
/* 1431 */         this.trigger('removed', { content: null, position: position });
/* 1432 */     };
/* 1433 */ 
/* 1434 */     /**
/* 1435 *|      * Adds triggerable events.
/* 1436 *|      * @protected
/* 1437 *|      */
/* 1438 */     Owl2.prototype.addTriggerableEvents = function() {
/* 1439 */         var handler = $.proxy(function(callback, event) {
/* 1440 */             return $.proxy(function(e) {
/* 1441 */                 if (e.relatedTarget !== this) {
/* 1442 */                     this.suppress([ event ]);
/* 1443 */                     callback.apply(this, [].slice.call(arguments, 1));
/* 1444 */                     this.release([ event ]);
/* 1445 */                 }
/* 1446 */             }, this);
/* 1447 */         }, this);
/* 1448 */ 
/* 1449 */         $.each({
/* 1450 */             'next': this.next,

/* owl.carousel.js */

/* 1451 */             'prev': this.prev,
/* 1452 */             'to': this.to,
/* 1453 */             'destroy': this.destroy,
/* 1454 */             'refresh': this.refresh,
/* 1455 */             'replace': this.replace,
/* 1456 */             'add': this.add,
/* 1457 */             'remove': this.remove
/* 1458 */         }, $.proxy(function(event, callback) {
/* 1459 */             this.$element.on(event + '.owl.carousel2', handler(callback, event + '.owl.carousel2'));
/* 1460 */         }, this));
/* 1461 */ 
/* 1462 */     };
/* 1463 */ 
/* 1464 */     /**
/* 1465 *|      * Watches the visibility of the carousel2 element.
/* 1466 *|      * @protected
/* 1467 *|      */
/* 1468 */     Owl2.prototype.watchVisibility = function() {
/* 1469 */ 
/* 1470 */         // test on zepto
/* 1471 */         if (!isElVisible(this.$element.get(0))) {
/* 1472 */             this.$element.addClass('owl-hidden');
/* 1473 */             window.clearInterval(this.e._checkVisibile);
/* 1474 */             this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
/* 1475 */         }
/* 1476 */ 
/* 1477 */         function isElVisible(el) {
/* 1478 */             return el.offsetWidth > 0 && el.offsetHeight > 0;
/* 1479 */         }
/* 1480 */ 
/* 1481 */         function checkVisible() {
/* 1482 */             if (isElVisible(this.$element.get(0))) {
/* 1483 */                 this.$element.removeClass('owl-hidden');
/* 1484 */                 this.refresh();
/* 1485 */                 window.clearInterval(this.e._checkVisibile);
/* 1486 */             }
/* 1487 */         }
/* 1488 */     };
/* 1489 */ 
/* 1490 */     /**
/* 1491 *|      * Preloads images with auto width.
/* 1492 *|      * @protected
/* 1493 *|      * @todo Still to test
/* 1494 *|      */
/* 1495 */     Owl2.prototype.preloadAutoWidthImages = function(imgs) {
/* 1496 */         var loaded, that, $el, img;
/* 1497 */ 
/* 1498 */         loaded = 0;
/* 1499 */         that = this;
/* 1500 */         imgs.each(function(i, el) {

/* owl.carousel.js */

/* 1501 */             $el = $(el);
/* 1502 */             img = new Image();
/* 1503 */ 
/* 1504 */             img.onload = function() {
/* 1505 */                 loaded++;
/* 1506 */                 $el.attr('src', img.src);
/* 1507 */                 $el.css('opacity', 1);
/* 1508 */                 if (loaded >= imgs.length) {
/* 1509 */                     that.state.imagesLoaded = true;
/* 1510 */                     that.initialize();
/* 1511 */                 }
/* 1512 */             };
/* 1513 */ 
/* 1514 */             img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
/* 1515 */         });
/* 1516 */     };
/* 1517 */ 
/* 1518 */     /**
/* 1519 *|      * Destroys the carousel2.
/* 1520 *|      * @public
/* 1521 *|      */
/* 1522 */     Owl2.prototype.destroy = function() {
/* 1523 */ 
/* 1524 */         if (this.$element.hasClass(this.settings.themeClass)) {
/* 1525 */             this.$element.removeClass(this.settings.themeClass);
/* 1526 */         }
/* 1527 */ 
/* 1528 */         if (this.settings.responsive !== false) {
/* 1529 */             $(window).off('resize.owl.carousel2');
/* 1530 */         }
/* 1531 */ 
/* 1532 */         if (this.transitionEndVendor) {
/* 1533 */             this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
/* 1534 */         }
/* 1535 */ 
/* 1536 */         for ( var i in this._plugins) {
/* 1537 */             this._plugins[i].destroy();
/* 1538 */         }
/* 1539 */ 
/* 1540 */         if (this.settings.mouseDrag || this.settings.touchDrag) {
/* 1541 */             this.$stage.off('mousedown touchstart touchcancel');
/* 1542 */             $(document).off('.owl.dragEvents');
/* 1543 */             this.$stage.get(0).onselectstart = function() {};
/* 1544 */             this.$stage.off('dragstart', function() { return false });
/* 1545 */         }
/* 1546 */ 
/* 1547 */         // remove event handlers in the ".owl.carousel2" namespace
/* 1548 */         this.$element.off('.owl');
/* 1549 */ 
/* 1550 */         this.$stage.children('.cloned').remove();

/* owl.carousel.js */

/* 1551 */         this.e = null;
/* 1552 */         this.$element.removeData('owlCarouseldeals');
/* 1553 */ 
/* 1554 */         this.$stage.children().contents().unwrap();
/* 1555 */         this.$stage.children().unwrap();
/* 1556 */         this.$stage.unwrap();
/* 1557 */     };
/* 1558 */ 
/* 1559 */     /**
/* 1560 *|      * Operators to calculate right-to-left and left-to-right.
/* 1561 *|      * @protected
/* 1562 *|      * @param {Number} [a] - The left side operand.
/* 1563 *|      * @param {String} [o] - The operator.
/* 1564 *|      * @param {Number} [b] - The right side operand.
/* 1565 *|      */
/* 1566 */     Owl2.prototype.op = function(a, o, b) {
/* 1567 */         var rtl = this.settings.rtl;
/* 1568 */         switch (o) {
/* 1569 */             case '<':
/* 1570 */                 return rtl ? a > b : a < b;
/* 1571 */             case '>':
/* 1572 */                 return rtl ? a < b : a > b;
/* 1573 */             case '>=':
/* 1574 */                 return rtl ? a <= b : a >= b;
/* 1575 */             case '<=':
/* 1576 */                 return rtl ? a >= b : a <= b;
/* 1577 */             default:
/* 1578 */                 break;
/* 1579 */         }
/* 1580 */     };
/* 1581 */ 
/* 1582 */     /**
/* 1583 *|      * Attaches to an internal event.
/* 1584 *|      * @protected
/* 1585 *|      * @param {HTMLElement} element - The event source.
/* 1586 *|      * @param {String} event - The event name.
/* 1587 *|      * @param {Function} listener - The event handler to attach.
/* 1588 *|      * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
/* 1589 *|      */
/* 1590 */     Owl2.prototype.on = function(element, event, listener, capture) {
/* 1591 */         if (element.addEventListener) {
/* 1592 */             element.addEventListener(event, listener, capture);
/* 1593 */         } else if (element.attachEvent) {
/* 1594 */             element.attachEvent('on' + event, listener);
/* 1595 */         }
/* 1596 */     };
/* 1597 */ 
/* 1598 */     /**
/* 1599 *|      * Detaches from an internal event.
/* 1600 *|      * @protected

/* owl.carousel.js */

/* 1601 *|      * @param {HTMLElement} element - The event source.
/* 1602 *|      * @param {String} event - The event name.
/* 1603 *|      * @param {Function} listener - The attached event handler to detach.
/* 1604 *|      * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
/* 1605 *|      */
/* 1606 */     Owl2.prototype.off = function(element, event, listener, capture) {
/* 1607 */         if (element.removeEventListener) {
/* 1608 */             element.removeEventListener(event, listener, capture);
/* 1609 */         } else if (element.detachEvent) {
/* 1610 */             element.detachEvent('on' + event, listener);
/* 1611 */         }
/* 1612 */     };
/* 1613 */ 
/* 1614 */     /**
/* 1615 *|      * Triggers an public event.
/* 1616 *|      * @protected
/* 1617 *|      * @param {String} name - The event name.
/* 1618 *|      * @param {*} [data=null] - The event data.
/* 1619 *|      * @param {String} [namespace=.owl.carousel2] - The event namespace.
/* 1620 *|      * @returns {Event} - The event arguments.
/* 1621 *|      */
/* 1622 */     Owl2.prototype.trigger = function(name, data, namespace) {
/* 1623 */         var status = {
/* 1624 */             item: { count: this._items.length, index: this.current() }
/* 1625 */         }, handler = $.camelCase(
/* 1626 */             $.grep([ 'on', name, namespace ], function(v) { return v })
/* 1627 */                 .join('-').toLowerCase()
/* 1628 */         ), event = $.Event(
/* 1629 */             [ name, 'owl', namespace || 'carousel2' ].join('.').toLowerCase(),
/* 1630 */             $.extend({ relatedTarget: this }, status, data)
/* 1631 */         );
/* 1632 */ 
/* 1633 */         if (!this._supress[name]) {
/* 1634 */             $.each(this._plugins, function(name, plugin) {
/* 1635 */                 if (plugin.onTrigger) {
/* 1636 */                     plugin.onTrigger(event);
/* 1637 */                 }
/* 1638 */             });
/* 1639 */ 
/* 1640 */             this.$element.trigger(event);
/* 1641 */ 
/* 1642 */             if (this.settings && typeof this.settings[handler] === 'function') {
/* 1643 */                 this.settings[handler].apply(this, event);
/* 1644 */             }
/* 1645 */         }
/* 1646 */ 
/* 1647 */         return event;
/* 1648 */     };
/* 1649 */ 
/* 1650 */     /**

/* owl.carousel.js */

/* 1651 *|      * Suppresses events.
/* 1652 *|      * @protected
/* 1653 *|      * @param {Array.<String>} events - The events to suppress.
/* 1654 *|      */
/* 1655 */     Owl2.prototype.suppress = function(events) {
/* 1656 */         $.each(events, $.proxy(function(index, event) {
/* 1657 */             this._supress[event] = true;
/* 1658 */         }, this));
/* 1659 */     }
/* 1660 */ 
/* 1661 */     /**
/* 1662 *|      * Releases suppressed events.
/* 1663 *|      * @protected
/* 1664 *|      * @param {Array.<String>} events - The events to release.
/* 1665 *|      */
/* 1666 */     Owl2.prototype.release = function(events) {
/* 1667 */         $.each(events, $.proxy(function(index, event) {
/* 1668 */             delete this._supress[event];
/* 1669 */         }, this));
/* 1670 */     }
/* 1671 */ 
/* 1672 */     /**
/* 1673 *|      * Checks the availability of some browser features.
/* 1674 *|      * @protected
/* 1675 *|      */
/* 1676 */     Owl2.prototype.browserSupport = function() {
/* 1677 */         this.support3d = isPerspective();
/* 1678 */ 
/* 1679 */         if (this.support3d) {
/* 1680 */             this.transformVendor = isTransform();
/* 1681 */ 
/* 1682 */             // take transitionend event name by detecting transition
/* 1683 */             var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
/* 1684 */             this.transitionEndVendor = endVendors[isTransition()];
/* 1685 */ 
/* 1686 */             // take vendor name from transform name
/* 1687 */             this.vendorName = this.transformVendor.replace(/Transform/i, '');
/* 1688 */             this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
/* 1689 */         }
/* 1690 */ 
/* 1691 */         this.state.orientation = window.orientation;
/* 1692 */     };
/* 1693 */ 
/* 1694 */     /**
/* 1695 *|      * Get touch/drag coordinats.
/* 1696 *|      * @private
/* 1697 *|      * @param {event} - mousedown/touchstart event
/* 1698 *|      * @returns {object} - Contains X and Y of current mouse/touch position
/* 1699 *|      */
/* 1700 */ 

/* owl.carousel.js */

/* 1701 */     function getTouches(event) {
/* 1702 */         if (event.touches !== undefined) {
/* 1703 */             return {
/* 1704 */                 x: event.touches[0].pageX,
/* 1705 */                 y: event.touches[0].pageY
/* 1706 */             };
/* 1707 */         }
/* 1708 */ 
/* 1709 */         if (event.touches === undefined) {
/* 1710 */             if (event.pageX !== undefined) {
/* 1711 */                 return {
/* 1712 */                     x: event.pageX,
/* 1713 */                     y: event.pageY
/* 1714 */                 };
/* 1715 */             }
/* 1716 */ 
/* 1717 */             if (event.pageX === undefined) {
/* 1718 */                 return {
/* 1719 */                     x: event.clientX,
/* 1720 */                     y: event.clientY
/* 1721 */                 };
/* 1722 */             }
/* 1723 */         }
/* 1724 */     }
/* 1725 */ 
/* 1726 */     /**
/* 1727 *|      * Checks for CSS support.
/* 1728 *|      * @private
/* 1729 *|      * @param {Array} array - The CSS properties to check for.
/* 1730 *|      * @returns {Array} - Contains the supported CSS property name and its index or `false`.
/* 1731 *|      */
/* 1732 */     function isStyleSupported(array) {
/* 1733 */         var p, s, fake = document.createElement('div'), list = array;
/* 1734 */         for (p in list) {
/* 1735 */             s = list[p];
/* 1736 */             if (typeof fake.style[s] !== 'undefined') {
/* 1737 */                 fake = null;
/* 1738 */                 return [ s, p ];
/* 1739 */             }
/* 1740 */         }
/* 1741 */         return [ false ];
/* 1742 */     }
/* 1743 */ 
/* 1744 */     /**
/* 1745 *|      * Checks for CSS transition support.
/* 1746 *|      * @private
/* 1747 *|      * @todo Realy bad design
/* 1748 *|      * @returns {Number}
/* 1749 *|      */
/* 1750 */     function isTransition() {

/* owl.carousel.js */

/* 1751 */         return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
/* 1752 */     }
/* 1753 */ 
/* 1754 */     /**
/* 1755 *|      * Checks for CSS transform support.
/* 1756 *|      * @private
/* 1757 *|      * @returns {String} The supported property name or false.
/* 1758 *|      */
/* 1759 */     function isTransform() {
/* 1760 */         return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
/* 1761 */     }
/* 1762 */ 
/* 1763 */     /**
/* 1764 *|      * Checks for CSS perspective support.
/* 1765 *|      * @private
/* 1766 *|      * @returns {String} The supported property name or false.
/* 1767 *|      */
/* 1768 */     function isPerspective() {
/* 1769 */         return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
/* 1770 */     }
/* 1771 */ 
/* 1772 */     /**
/* 1773 *|      * Checks wether touch is supported or not.
/* 1774 *|      * @private
/* 1775 *|      * @returns {Boolean}
/* 1776 *|      */
/* 1777 */     function isTouchSupport() {
/* 1778 */         return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
/* 1779 */     }
/* 1780 */ 
/* 1781 */     /**
/* 1782 *|      * Checks wether touch is supported or not for IE.
/* 1783 *|      * @private
/* 1784 *|      * @returns {Boolean}
/* 1785 *|      */
/* 1786 */     function isTouchSupportIE() {
/* 1787 */         return window.navigator.msPointerEnabled;
/* 1788 */     }
/* 1789 */ 
/* 1790 */     /**
/* 1791 *|      * The jQuery Plugin for the Owl2 Carousel
/* 1792 *|      * @public
/* 1793 *|      */
/* 1794 */     $.fn.owlCarouseldeals = function(options) {
/* 1795 */         return this.each(function() {
/* 1796 */             if (!$(this).data('owlCarouseldeals')) {
/* 1797 */                 $(this).data('owlCarouseldeals', new Owl2(this, options));
/* 1798 */             }
/* 1799 */         });
/* 1800 */     };

/* owl.carousel.js */

/* 1801 */ 
/* 1802 */     /**
/* 1803 *|      * The constructor for the jQuery Plugin
/* 1804 *|      * @public
/* 1805 *|      */
/* 1806 */     $.fn.owlCarouseldeals.Constructor = Owl2;
/* 1807 */ 
/* 1808 */ })(window.Zepto || window.jQuery, window, document);
/* 1809 */ 
/* 1810 */ /**
/* 1811 *|  * Lazy Plugin
/* 1812 *|  * @version 2.0.0
/* 1813 *|  * @author Bartosz Wojciechowski
/* 1814 *|  * @license The MIT License (MIT)
/* 1815 *|  */
/* 1816 */ ;(function($, window, document, undefined) {
/* 1817 */ 
/* 1818 */     /**
/* 1819 *|      * Creates the lazy plugin.
/* 1820 *|      * @class The Lazy Plugin
/* 1821 *|      * @param {Owl2} carousel2 - The Owl2 Carousel
/* 1822 *|      */
/* 1823 */     var Lazy = function(carousel2) {
/* 1824 */ 
/* 1825 */         /**
/* 1826 *|          * Reference to the core.
/* 1827 *|          * @protected
/* 1828 *|          * @type {Owl2}
/* 1829 *|          */
/* 1830 */         this._core = carousel2;
/* 1831 */ 
/* 1832 */         /**
/* 1833 *|          * Already loaded items.
/* 1834 *|          * @protected
/* 1835 *|          * @type {Array.<jQuery>}
/* 1836 *|          */
/* 1837 */         this._loaded = [];
/* 1838 */ 
/* 1839 */         /**
/* 1840 *|          * Event handlers.
/* 1841 *|          * @protected
/* 1842 *|          * @type {Object}
/* 1843 *|          */
/* 1844 */         this._handlers = {
/* 1845 */             'initialized.owl.carousel2 change.owl.carousel2': $.proxy(function(e) {
/* 1846 */                 if (!e.namespace) {
/* 1847 */                     return;
/* 1848 */                 }
/* 1849 */ 
/* 1850 */                 if (!this._core.settings || !this._core.settings.lazyLoad) {

/* owl.carousel.js */

/* 1851 */                     return;
/* 1852 */                 }
/* 1853 */ 
/* 1854 */                 if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
/* 1855 */                     var settings = this._core.settings,
/* 1856 */                         n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
/* 1857 */                         i = ((settings.center && n * -1) || 0),
/* 1858 */                         position = ((e.property && e.property.value) || this._core.current()) + i,
/* 1859 */                         clones = this._core.clones().length,
/* 1860 */                         load = $.proxy(function(i, v) { this.load(v) }, this);
/* 1861 */ 
/* 1862 */                     while (i++ < n) {
/* 1863 */                         this.load(clones / 2 + this._core.relative(position));
/* 1864 */                         clones && $.each(this._core.clones(this._core.relative(position++)), load);
/* 1865 */                     }
/* 1866 */                 }
/* 1867 */             }, this)
/* 1868 */         };
/* 1869 */ 
/* 1870 */         // set the default options
/* 1871 */         this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
/* 1872 */ 
/* 1873 */         // register event handler
/* 1874 */         this._core.$element.on(this._handlers);
/* 1875 */     }
/* 1876 */ 
/* 1877 */     /**
/* 1878 *|      * Default options.
/* 1879 *|      * @public
/* 1880 *|      */
/* 1881 */     Lazy.Defaults = {
/* 1882 */         lazyLoad: false
/* 1883 */     }
/* 1884 */ 
/* 1885 */     /**
/* 1886 *|      * Loads all resources of an item at the specified position.
/* 1887 *|      * @param {Number} position - The absolute position of the item.
/* 1888 *|      * @protected
/* 1889 *|      */
/* 1890 */     Lazy.prototype.load = function(position) {
/* 1891 */         var $item = this._core.$stage.children().eq(position),
/* 1892 */             $elements = $item && $item.find('.owl-lazy');
/* 1893 */ 
/* 1894 */         if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
/* 1895 */             return;
/* 1896 */         }
/* 1897 */ 
/* 1898 */         $elements.each($.proxy(function(index, element) {
/* 1899 */             var $element = $(element), image,
/* 1900 */                 url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

/* owl.carousel.js */

/* 1901 */ 
/* 1902 */             this._core.trigger('load', { element: $element, url: url }, 'lazy');
/* 1903 */ 
/* 1904 */             if ($element.is('img')) {
/* 1905 */                 $element.one('load.owl.lazy', $.proxy(function() {
/* 1906 */                     $element.css('opacity', 1);
/* 1907 */                     this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
/* 1908 */                 }, this)).attr('src', url);
/* 1909 */             } else {
/* 1910 */                 image = new Image();
/* 1911 */                 image.onload = $.proxy(function() {
/* 1912 */                     $element.css({
/* 1913 */                         'background-image': 'url(' + url + ')',
/* 1914 */                         'opacity': '1'
/* 1915 */                     });
/* 1916 */                     this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
/* 1917 */                 }, this);
/* 1918 */                 image.src = url;
/* 1919 */             }
/* 1920 */         }, this));
/* 1921 */ 
/* 1922 */         this._loaded.push($item.get(0));
/* 1923 */     }
/* 1924 */ 
/* 1925 */     /**
/* 1926 *|      * Destroys the plugin.
/* 1927 *|      * @public
/* 1928 *|      */
/* 1929 */     Lazy.prototype.destroy = function() {
/* 1930 */         var handler, property;
/* 1931 */ 
/* 1932 */         for (handler in this.handlers) {
/* 1933 */             this._core.$element.off(handler, this.handlers[handler]);
/* 1934 */         }
/* 1935 */         for (property in Object.getOwnPropertyNames(this)) {
/* 1936 */             typeof this[property] != 'function' && (this[property] = null);
/* 1937 */         }
/* 1938 */     }
/* 1939 */ 
/* 1940 */     $.fn.owlCarouseldeals.Constructor.Plugins.Lazy = Lazy;
/* 1941 */ 
/* 1942 */ })(window.Zepto || window.jQuery, window, document);
/* 1943 */ 
/* 1944 */ /**
/* 1945 *|  * AutoHeight Plugin
/* 1946 *|  * @version 2.0.0
/* 1947 *|  * @author Bartosz Wojciechowski
/* 1948 *|  * @license The MIT License (MIT)
/* 1949 *|  */
/* 1950 */ ;(function($, window, document, undefined) {

/* owl.carousel.js */

/* 1951 */ 
/* 1952 */     /**
/* 1953 *|      * Creates the auto height plugin.
/* 1954 *|      * @class The Auto Height Plugin
/* 1955 *|      * @param {Owl2} carousel2 - The Owl2 Carousel
/* 1956 *|      */
/* 1957 */     var AutoHeight = function(carousel2) {
/* 1958 */         /**
/* 1959 *|          * Reference to the core.
/* 1960 *|          * @protected
/* 1961 *|          * @type {Owl2}
/* 1962 *|          */
/* 1963 */         this._core = carousel2;
/* 1964 */ 
/* 1965 */         /**
/* 1966 *|          * All event handlers.
/* 1967 *|          * @protected
/* 1968 *|          * @type {Object}
/* 1969 *|          */
/* 1970 */         this._handlers = {
/* 1971 */             'initialized.owl.carousel2': $.proxy(function() {
/* 1972 */                 if (this._core.settings.autoHeight) {
/* 1973 */                     this.update();
/* 1974 */                 }
/* 1975 */             }, this),
/* 1976 */             'changed.owl.carousel2': $.proxy(function(e) {
/* 1977 */                 if (this._core.settings.autoHeight && e.property.name == 'position'){
/* 1978 */                     this.update();
/* 1979 */                 }
/* 1980 */             }, this),
/* 1981 */             'loaded.owl.lazy': $.proxy(function(e) {
/* 1982 */                 if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
/* 1983 */                     === this._core.$stage.children().eq(this._core.current())) {
/* 1984 */                     this.update();
/* 1985 */                 }
/* 1986 */             }, this)
/* 1987 */         };
/* 1988 */ 
/* 1989 */         // set default options
/* 1990 */         this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
/* 1991 */ 
/* 1992 */         // register event handlers
/* 1993 */         this._core.$element.on(this._handlers);
/* 1994 */     };
/* 1995 */ 
/* 1996 */     /**
/* 1997 *|      * Default options.
/* 1998 *|      * @public
/* 1999 *|      */
/* 2000 */     AutoHeight.Defaults = {

/* owl.carousel.js */

/* 2001 */         autoHeight: false,
/* 2002 */         autoHeightClass: 'owl-height'
/* 2003 */     };
/* 2004 */ 
/* 2005 */     /**
/* 2006 *|      * Updates the view.
/* 2007 *|      */
/* 2008 */     AutoHeight.prototype.update = function() {
/* 2009 */         this._core.$stage.parent()
/* 2010 */             .height(this._core.$stage.children().eq(this._core.current()).height())
/* 2011 */             .addClass(this._core.settings.autoHeightClass);
/* 2012 */     };
/* 2013 */ 
/* 2014 */     AutoHeight.prototype.destroy = function() {
/* 2015 */         var handler, property;
/* 2016 */ 
/* 2017 */         for (handler in this._handlers) {
/* 2018 */             this._core.$element.off(handler, this._handlers[handler]);
/* 2019 */         }
/* 2020 */         for (property in Object.getOwnPropertyNames(this)) {
/* 2021 */             typeof this[property] != 'function' && (this[property] = null);
/* 2022 */         }
/* 2023 */     };
/* 2024 */ 
/* 2025 */     $.fn.owlCarouseldeals.Constructor.Plugins.AutoHeight = AutoHeight;
/* 2026 */ 
/* 2027 */ })(window.Zepto || window.jQuery, window, document);
/* 2028 */ 
/* 2029 */ /**
/* 2030 *|  * Video Plugin
/* 2031 *|  * @version 2.0.0
/* 2032 *|  * @author Bartosz Wojciechowski
/* 2033 *|  * @license The MIT License (MIT)
/* 2034 *|  */
/* 2035 */ ;(function($, window, document, undefined) {
/* 2036 */ 
/* 2037 */     /**
/* 2038 *|      * Creates the video plugin.
/* 2039 *|      * @class The Video Plugin
/* 2040 *|      * @param {Owl2} carousel2 - The Owl2 Carousel
/* 2041 *|      */
/* 2042 */     var Video = function(carousel2) {
/* 2043 */         /**
/* 2044 *|          * Reference to the core.
/* 2045 *|          * @protected
/* 2046 *|          * @type {Owl2}
/* 2047 *|          */
/* 2048 */         this._core = carousel2;
/* 2049 */ 
/* 2050 */         /**

/* owl.carousel.js */

/* 2051 *|          * Cache all video URLs.
/* 2052 *|          * @protected
/* 2053 *|          * @type {Object}
/* 2054 *|          */
/* 2055 */         this._videos = {};
/* 2056 */ 
/* 2057 */         /**
/* 2058 *|          * Current playing item.
/* 2059 *|          * @protected
/* 2060 *|          * @type {jQuery}
/* 2061 *|          */
/* 2062 */         this._playing = null;
/* 2063 */ 
/* 2064 */         /**
/* 2065 *|          * Whether this is in fullscreen or not.
/* 2066 *|          * @protected
/* 2067 *|          * @type {Boolean}
/* 2068 *|          */
/* 2069 */         this._fullscreen = false;
/* 2070 */ 
/* 2071 */         /**
/* 2072 *|          * All event handlers.
/* 2073 *|          * @protected
/* 2074 *|          * @type {Object}
/* 2075 *|          */
/* 2076 */         this._handlers = {
/* 2077 */             'resize.owl.carousel2': $.proxy(function(e) {
/* 2078 */                 if (this._core.settings.video && !this.isInFullScreen()) {
/* 2079 */                     e.preventDefault();
/* 2080 */                 }
/* 2081 */             }, this),
/* 2082 */             'refresh.owl.carousel2 changed.owl.carousel2': $.proxy(function(e) {
/* 2083 */                 if (this._playing) {
/* 2084 */                     this.stop();
/* 2085 */                 }
/* 2086 */             }, this),
/* 2087 */             'prepared.owl.carousel2': $.proxy(function(e) {
/* 2088 */                 var $element = $(e.content).find('.owl-video');
/* 2089 */                 if ($element.length) {
/* 2090 */                     $element.css('display', 'none');
/* 2091 */                     this.fetch($element, $(e.content));
/* 2092 */                 }
/* 2093 */             }, this)
/* 2094 */         };
/* 2095 */ 
/* 2096 */         // set default options
/* 2097 */         this._core.options = $.extend({}, Video.Defaults, this._core.options);
/* 2098 */ 
/* 2099 */         // register event handlers
/* 2100 */         this._core.$element.on(this._handlers);

/* owl.carousel.js */

/* 2101 */ 
/* 2102 */         this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
/* 2103 */             this.play(e);
/* 2104 */         }, this));
/* 2105 */     };
/* 2106 */ 
/* 2107 */     /**
/* 2108 *|      * Default options.
/* 2109 *|      * @public
/* 2110 *|      */
/* 2111 */     Video.Defaults = {
/* 2112 */         video: false,
/* 2113 */         videoHeight: false,
/* 2114 */         videoWidth: false
/* 2115 */     };
/* 2116 */ 
/* 2117 */     /**
/* 2118 *|      * Gets the video ID and the type (YouTube/Vimeo only).
/* 2119 *|      * @protected
/* 2120 *|      * @param {jQuery} target - The target containing the video data.
/* 2121 *|      * @param {jQuery} item - The item containing the video.
/* 2122 *|      */
/* 2123 */     Video.prototype.fetch = function(target, item) {
/* 2124 */ 
/* 2125 */         var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
/* 2126 */             id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
/* 2127 */             width = target.attr('data-width') || this._core.settings.videoWidth,
/* 2128 */             height = target.attr('data-height') || this._core.settings.videoHeight,
/* 2129 */             url = target.attr('href');
/* 2130 */ 
/* 2131 */         if (url) {
/* 2132 */             id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
/* 2133 */ 
/* 2134 */             if (id[3].indexOf('youtu') > -1) {
/* 2135 */                 type = 'youtube';
/* 2136 */             } else if (id[3].indexOf('vimeo') > -1) {
/* 2137 */                 type = 'vimeo';
/* 2138 */             } else {
/* 2139 */                 throw new Error('Video URL not supported.');
/* 2140 */             }
/* 2141 */             id = id[6];
/* 2142 */         } else {
/* 2143 */             throw new Error('Missing video URL.');
/* 2144 */         }
/* 2145 */ 
/* 2146 */         this._videos[url] = {
/* 2147 */             type: type,
/* 2148 */             id: id,
/* 2149 */             width: width,
/* 2150 */             height: height

/* owl.carousel.js */

/* 2151 */         };
/* 2152 */ 
/* 2153 */         item.attr('data-video', url);
/* 2154 */ 
/* 2155 */         this.thumbnail(target, this._videos[url]);
/* 2156 */     };
/* 2157 */ 
/* 2158 */     /**
/* 2159 *|      * Creates video thumbnail.
/* 2160 *|      * @protected
/* 2161 *|      * @param {jQuery} target - The target containing the video data.
/* 2162 *|      * @param {Object} info - The video info object.
/* 2163 *|      * @see `fetch`
/* 2164 *|      */
/* 2165 */     Video.prototype.thumbnail = function(target, video) {
/* 2166 */ 
/* 2167 */         var tnLink,
/* 2168 */             icon,
/* 2169 */             path,
/* 2170 */             dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
/* 2171 */             customTn = target.find('img'),
/* 2172 */             srcType = 'src',
/* 2173 */             lazyClass = '',
/* 2174 */             settings = this._core.settings,
/* 2175 */             create = function(path) {
/* 2176 */                 icon = '<div class="owl-video-play-icon"></div>';
/* 2177 */ 
/* 2178 */                 if (settings.lazyLoad) {
/* 2179 */                     tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
/* 2180 */                 } else {
/* 2181 */                     tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
/* 2182 */                 }
/* 2183 */                 target.after(tnLink);
/* 2184 */                 target.after(icon);
/* 2185 */             };
/* 2186 */ 
/* 2187 */         // wrap video content into owl-video-wrapper div
/* 2188 */         target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
/* 2189 */ 
/* 2190 */         if (this._core.settings.lazyLoad) {
/* 2191 */             srcType = 'data-src';
/* 2192 */             lazyClass = 'owl-lazy';
/* 2193 */         }
/* 2194 */ 
/* 2195 */         // custom thumbnail
/* 2196 */         if (customTn.length) {
/* 2197 */             create(customTn.attr(srcType));
/* 2198 */             customTn.remove();
/* 2199 */             return false;
/* 2200 */         }

/* owl.carousel.js */

/* 2201 */ 
/* 2202 */         if (video.type === 'youtube') {
/* 2203 */             path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
/* 2204 */             create(path);
/* 2205 */         } else if (video.type === 'vimeo') {
/* 2206 */             $.ajax({
/* 2207 */                 type: 'GET',
/* 2208 */                 url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
/* 2209 */                 jsonp: 'callback',
/* 2210 */                 dataType: 'jsonp',
/* 2211 */                 success: function(data) {
/* 2212 */                     path = data[0].thumbnail_large;
/* 2213 */                     create(path);
/* 2214 */                 }
/* 2215 */             });
/* 2216 */         }
/* 2217 */     };
/* 2218 */ 
/* 2219 */     /**
/* 2220 *|      * Stops the current video.
/* 2221 *|      * @public
/* 2222 *|      */
/* 2223 */     Video.prototype.stop = function() {
/* 2224 */         this._core.trigger('stop', null, 'video');
/* 2225 */         this._playing.find('.owl-video-frame').remove();
/* 2226 */         this._playing.removeClass('owl-video-playing');
/* 2227 */         this._playing = null;
/* 2228 */     };
/* 2229 */ 
/* 2230 */     /**
/* 2231 *|      * Starts the current video.
/* 2232 *|      * @public
/* 2233 *|      * @param {Event} ev - The event arguments.
/* 2234 *|      */
/* 2235 */     Video.prototype.play = function(ev) {
/* 2236 */         this._core.trigger('play', null, 'video');
/* 2237 */ 
/* 2238 */         if (this._playing) {
/* 2239 */             this.stop();
/* 2240 */         }
/* 2241 */ 
/* 2242 */         var target = $(ev.target || ev.srcElement),
/* 2243 */             item = target.closest('.' + this._core.settings.itemClass),
/* 2244 */             video = this._videos[item.attr('data-video')],
/* 2245 */             width = video.width || '100%',
/* 2246 */             height = video.height || this._core.$stage.height(),
/* 2247 */             html, wrap;
/* 2248 */ 
/* 2249 */         if (video.type === 'youtube') {
/* 2250 */             html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'

/* owl.carousel.js */

/* 2251 */             + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
/* 2252 */         } else if (video.type === 'vimeo') {
/* 2253 */             html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
/* 2254 */             + '" height="' + height
/* 2255 */             + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
/* 2256 */         }
/* 2257 */ 
/* 2258 */         item.addClass('owl-video-playing');
/* 2259 */         this._playing = item;
/* 2260 */ 
/* 2261 */         wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
/* 2262 */         + html + '</div>');
/* 2263 */         target.after(wrap);
/* 2264 */     };
/* 2265 */ 
/* 2266 */     /**
/* 2267 *|      * Checks whether an video is currently in full screen mode or not.
/* 2268 *|      * @todo Bad style because looks like a readonly method but changes members.
/* 2269 *|      * @protected
/* 2270 *|      * @returns {Boolean}
/* 2271 *|      */
/* 2272 */     Video.prototype.isInFullScreen = function() {
/* 2273 */ 
/* 2274 */         // if Vimeo Fullscreen mode
/* 2275 */         var element = document.fullscreenElement || document.mozFullScreenElement
/* 2276 */             || document.webkitFullscreenElement;
/* 2277 */ 
/* 2278 */         if (element && $(element).parent().hasClass('owl-video-frame')) {
/* 2279 */             this._core.speed(0);
/* 2280 */             this._fullscreen = true;
/* 2281 */         }
/* 2282 */ 
/* 2283 */         if (element && this._fullscreen && this._playing) {
/* 2284 */             return false;
/* 2285 */         }
/* 2286 */ 
/* 2287 */         // comming back from fullscreen
/* 2288 */         if (this._fullscreen) {
/* 2289 */             this._fullscreen = false;
/* 2290 */             return false;
/* 2291 */         }
/* 2292 */ 
/* 2293 */         // check full screen mode and window orientation
/* 2294 */         if (this._playing) {
/* 2295 */             if (this._core.state.orientation !== window.orientation) {
/* 2296 */                 this._core.state.orientation = window.orientation;
/* 2297 */                 return false;
/* 2298 */             }
/* 2299 */         }
/* 2300 */ 

/* owl.carousel.js */

/* 2301 */         return true;
/* 2302 */     };
/* 2303 */ 
/* 2304 */     /**
/* 2305 *|      * Destroys the plugin.
/* 2306 *|      */
/* 2307 */     Video.prototype.destroy = function() {
/* 2308 */         var handler, property;
/* 2309 */ 
/* 2310 */         this._core.$element.off('click.owl.video');
/* 2311 */ 
/* 2312 */         for (handler in this._handlers) {
/* 2313 */             this._core.$element.off(handler, this._handlers[handler]);
/* 2314 */         }
/* 2315 */         for (property in Object.getOwnPropertyNames(this)) {
/* 2316 */             typeof this[property] != 'function' && (this[property] = null);
/* 2317 */         }
/* 2318 */     };
/* 2319 */ 
/* 2320 */     $.fn.owlCarouseldeals.Constructor.Plugins.Video = Video;
/* 2321 */ 
/* 2322 */ })(window.Zepto || window.jQuery, window, document);
/* 2323 */ 
/* 2324 */ /**
/* 2325 *|  * Animate Plugin
/* 2326 *|  * @version 2.0.0
/* 2327 *|  * @author Bartosz Wojciechowski
/* 2328 *|  * @license The MIT License (MIT)
/* 2329 *|  */
/* 2330 */ ;(function($, window, document, undefined) {
/* 2331 */ 
/* 2332 */     /**
/* 2333 *|      * Creates the animate plugin.
/* 2334 *|      * @class The Navigation Plugin
/* 2335 *|      * @param {Owl2} scope - The Owl2 Carousel
/* 2336 *|      */
/* 2337 */     var Animate = function(scope) {
/* 2338 */         this.core = scope;
/* 2339 */         this.core.options = $.extend({}, Animate.Defaults, this.core.options);
/* 2340 */         this.swapping = true;
/* 2341 */         this.previous = undefined;
/* 2342 */         this.next = undefined;
/* 2343 */ 
/* 2344 */         this.handlers = {
/* 2345 */             'change.owl.carousel2': $.proxy(function(e) {
/* 2346 */                 if (e.property.name == 'position') {
/* 2347 */                     this.previous = this.core.current();
/* 2348 */                     this.next = e.property.value;
/* 2349 */                 }
/* 2350 */             }, this),

/* owl.carousel.js */

/* 2351 */             'drag.owl.carousel2 dragged.owl.carousel2 translated.owl.carousel2': $.proxy(function(e) {
/* 2352 */                 this.swapping = e.type == 'translated';
/* 2353 */             }, this),
/* 2354 */             'translate.owl.carousel2': $.proxy(function(e) {
/* 2355 */                 if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
/* 2356 */                     this.swap();
/* 2357 */                 }
/* 2358 */             }, this)
/* 2359 */         };
/* 2360 */ 
/* 2361 */         this.core.$element.on(this.handlers);
/* 2362 */     };
/* 2363 */ 
/* 2364 */     /**
/* 2365 *|      * Default options.
/* 2366 *|      * @public
/* 2367 *|      */
/* 2368 */     Animate.Defaults = {
/* 2369 */         animateOut: false,
/* 2370 */         animateIn: false
/* 2371 */     };
/* 2372 */ 
/* 2373 */     /**
/* 2374 *|      * Toggles the animation classes whenever an translations starts.
/* 2375 *|      * @protected
/* 2376 *|      * @returns {Boolean|undefined}
/* 2377 *|      */
/* 2378 */     Animate.prototype.swap = function() {
/* 2379 */ 
/* 2380 */         if (this.core.settings.items !== 1 || !this.core.support3d) {
/* 2381 */             return;
/* 2382 */         }
/* 2383 */ 
/* 2384 */         this.core.speed(0);
/* 2385 */ 
/* 2386 */         var left,
/* 2387 */             clear = $.proxy(this.clear, this),
/* 2388 */             previous = this.core.$stage.children().eq(this.previous),
/* 2389 */             next = this.core.$stage.children().eq(this.next),
/* 2390 */             incoming = this.core.settings.animateIn,
/* 2391 */             outgoing = this.core.settings.animateOut;
/* 2392 */ 
/* 2393 */         if (this.core.current() === this.previous) {
/* 2394 */             return;
/* 2395 */         }
/* 2396 */ 
/* 2397 */         if (outgoing) {
/* 2398 */             left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
/* 2399 */             previous.css( { 'left': left + 'px' } )
/* 2400 */                 .addClass('animated owl-animated-out')

/* owl.carousel.js */

/* 2401 */                 .addClass(outgoing)
/* 2402 */                 .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
/* 2403 */         }
/* 2404 */ 
/* 2405 */         if (incoming) {
/* 2406 */             next.addClass('animated owl-animated-in')
/* 2407 */                 .addClass(incoming)
/* 2408 */                 .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
/* 2409 */         }
/* 2410 */     };
/* 2411 */ 
/* 2412 */     Animate.prototype.clear = function(e) {
/* 2413 */         $(e.target).css( { 'left': '' } )
/* 2414 */             .removeClass('animated owl-animated-out owl-animated-in')
/* 2415 */             .removeClass(this.core.settings.animateIn)
/* 2416 */             .removeClass(this.core.settings.animateOut);
/* 2417 */         this.core.transitionEnd();
/* 2418 */     }
/* 2419 */ 
/* 2420 */     /**
/* 2421 *|      * Destroys the plugin.
/* 2422 *|      * @public
/* 2423 *|      */
/* 2424 */     Animate.prototype.destroy = function() {
/* 2425 */         var handler, property;
/* 2426 */ 
/* 2427 */         for (handler in this.handlers) {
/* 2428 */             this.core.$element.off(handler, this.handlers[handler]);
/* 2429 */         }
/* 2430 */         for (property in Object.getOwnPropertyNames(this)) {
/* 2431 */             typeof this[property] != 'function' && (this[property] = null);
/* 2432 */         }
/* 2433 */     };
/* 2434 */ 
/* 2435 */     $.fn.owlCarouseldeals.Constructor.Plugins.Animate = Animate;
/* 2436 */ 
/* 2437 */ })(window.Zepto || window.jQuery, window, document);
/* 2438 */ 
/* 2439 */ /**
/* 2440 *|  * Autoplay Plugin
/* 2441 *|  * @version 2.0.0
/* 2442 *|  * @author Bartosz Wojciechowski
/* 2443 *|  * @license The MIT License (MIT)
/* 2444 *|  */
/* 2445 */ ;(function($, window, document, undefined) {
/* 2446 */ 
/* 2447 */     /**
/* 2448 *|      * Creates the autoplay plugin.
/* 2449 *|      * @class The Autoplay Plugin
/* 2450 *|      * @param {Owl2} scope - The Owl2 Carousel

/* owl.carousel.js */

/* 2451 *|      */
/* 2452 */     var Autoplay = function(scope) {
/* 2453 */         this.core = scope;
/* 2454 */         this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);
/* 2455 */ 
/* 2456 */         this.handlers = {
/* 2457 */             'translated.owl.carousel2 refreshed.owl.carousel2': $.proxy(function() {
/* 2458 */                 this.autoplay();
/* 2459 */             }, this),
/* 2460 */             'play.owl.autoplay': $.proxy(function(e, t, s) {
/* 2461 */                 this.play(t, s);
/* 2462 */             }, this),
/* 2463 */             'stop.owl.autoplay': $.proxy(function() {
/* 2464 */                 this.stop();
/* 2465 */             }, this),
/* 2466 */             'mouseover.owl.autoplay': $.proxy(function() {
/* 2467 */                 if (this.core.settings.autoplayHoverPause) {
/* 2468 */                     this.pause();
/* 2469 */                 }
/* 2470 */ 
/* 2471 */             }, this),
/* 2472 */             'mouseleave.owl.autoplay': $.proxy(function() {
/* 2473 */                 if (this.core.settings.autoplayHoverPause) {
/* 2474 */                     this.autoplay();
/* 2475 */                 }
/* 2476 */ 
/* 2477 */             }, this)
/* 2478 */         };
/* 2479 */ 
/* 2480 */         this.core.$element.on(this.handlers);
/* 2481 */     };
/* 2482 */ 
/* 2483 */     /**
/* 2484 *|      * Default options.
/* 2485 *|      * @public
/* 2486 *|      */
/* 2487 */     Autoplay.Defaults = {
/* 2488 */         autoplay: false,
/* 2489 */         autoplayTimeout: 5000,
/* 2490 */         autoplayHoverPause: false,
/* 2491 */         autoplaySpeed: false
/* 2492 */     };
/* 2493 */ 
/* 2494 */     /**
/* 2495 *|      * @protected
/* 2496 *|      * @todo Must be documented.
/* 2497 *|      */
/* 2498 */     Autoplay.prototype.autoplay = function() {
/* 2499 */         if (this.core.options.autoplay) {
/* 2500 */             this.core.settings.autoplay = true;

/* owl.carousel.js */

/* 2501 */         }
/* 2502 */         if (this.core.settings.autoplay && !this.core.state.videoPlay) {
/* 2503 */             window.clearInterval(this.interval);
/* 2504 */ 
/* 2505 */             this.interval = window.setInterval($.proxy(function() {
/* 2506 */                 this.play();
/* 2507 */             }, this), this.core.settings.autoplayTimeout);
/* 2508 */         } else {
/* 2509 */             window.clearInterval(this.interval);
/* 2510 */         }
/* 2511 */     };
/* 2512 */ 
/* 2513 */     /**
/* 2514 *|      * Starts the autoplay.
/* 2515 *|      * @public
/* 2516 *|      * @param {Number} [timeout] - ...
/* 2517 *|      * @param {Number} [speed] - ...
/* 2518 *|      * @returns {Boolean|undefined} - ...
/* 2519 *|      * @todo Must be documented.
/* 2520 *|      */
/* 2521 */     Autoplay.prototype.play = function(timeout, speed) {
/* 2522 */         // if tab is inactive - doesnt work in <IE10
/* 2523 */         if (this.core.options.autoplay) {
/* 2524 */             this.core.settings.autoplay = true;
/* 2525 */         }
/* 2526 */         if (document.hidden === true) {
/* 2527 */             return;
/* 2528 */         }
/* 2529 */ 
/* 2530 */         if (this.core.state.isTouch || this.core.state.isScrolling
/* 2531 */             || this.core.state.isSwiping || this.core.state.inMotion) {
/* 2532 */             return;
/* 2533 */         }
/* 2534 */ 
/* 2535 */         if (this.core.settings.autoplay === false) {
/* 2536 */             window.clearInterval(this.interval);
/* 2537 */             return;
/* 2538 */         }
/* 2539 */ 
/* 2540 */         this.core.next(this.core.settings.autoplaySpeed);
/* 2541 */     };
/* 2542 */ 
/* 2543 */     /**
/* 2544 *|      * Stops the autoplay.
/* 2545 *|      * @public
/* 2546 *|      */
/* 2547 */     Autoplay.prototype.stop = function() {
/* 2548 */         if (this.core.options.autoplay) {
/* 2549 */             this.core.settings.autoplay = false;
/* 2550 */         }

/* owl.carousel.js */

/* 2551 */         window.clearInterval(this.interval);
/* 2552 */     };
/* 2553 */ 
/* 2554 */     /**
/* 2555 *|      * Pauses the autoplay.
/* 2556 *|      * @public
/* 2557 *|      */
/* 2558 */     Autoplay.prototype.pause = function() {
/* 2559 */         if (this.core.options.autoplay) {
/* 2560 */             this.core.settings.autoplay = false;
/* 2561 */         }
/* 2562 */         window.clearInterval(this.interval);
/* 2563 */     };
/* 2564 */ 
/* 2565 */     /**
/* 2566 *|      * Destroys the plugin.
/* 2567 *|      */
/* 2568 */     Autoplay.prototype.destroy = function() {
/* 2569 */         var handler, property;
/* 2570 */ 
/* 2571 */         window.clearInterval(this.interval);
/* 2572 */ 
/* 2573 */         for (handler in this.handlers) {
/* 2574 */             this.core.$element.off(handler, this.handlers[handler]);
/* 2575 */         }
/* 2576 */         for (property in Object.getOwnPropertyNames(this)) {
/* 2577 */             typeof this[property] != 'function' && (this[property] = null);
/* 2578 */         }
/* 2579 */     };
/* 2580 */ 
/* 2581 */     $.fn.owlCarouseldeals.Constructor.Plugins.autoplay = Autoplay;
/* 2582 */ 
/* 2583 */ })(window.Zepto || window.jQuery, window, document);
/* 2584 */ 
/* 2585 */ /**
/* 2586 *|  * Navigation Plugin
/* 2587 *|  * @version 2.0.0
/* 2588 *|  * @author Artus Kolanowski
/* 2589 *|  * @license The MIT License (MIT)
/* 2590 *|  */
/* 2591 */ ;(function($, window, document, undefined) {
/* 2592 */     'use strict';
/* 2593 */ 
/* 2594 */     /**
/* 2595 *|      * Creates the navigation plugin.
/* 2596 *|      * @class The Navigation Plugin
/* 2597 *|      * @param {Owl2} carousel2 - The Owl2 Carousel.
/* 2598 *|      */
/* 2599 */     var Navigation = function(carousel2) {
/* 2600 */         /**

/* owl.carousel.js */

/* 2601 *|          * Reference to the core.
/* 2602 *|          * @protected
/* 2603 *|          * @type {Owl2}
/* 2604 *|          */
/* 2605 */         this._core = carousel2;
/* 2606 */ 
/* 2607 */         /**
/* 2608 *|          * Indicates whether the plugin is initialized or not.
/* 2609 *|          * @protected
/* 2610 *|          * @type {Boolean}
/* 2611 *|          */
/* 2612 */         this._initialized = false;
/* 2613 */ 
/* 2614 */         /**
/* 2615 *|          * The current paging indexes.
/* 2616 *|          * @protected
/* 2617 *|          * @type {Array}
/* 2618 *|          */
/* 2619 */         this._pages = [];
/* 2620 */ 
/* 2621 */         /**
/* 2622 *|          * All DOM elements of the user interface.
/* 2623 *|          * @protected
/* 2624 *|          * @type {Object}
/* 2625 *|          */
/* 2626 */         this._controls = {};
/* 2627 */ 
/* 2628 */         /**
/* 2629 *|          * Markup for an indicator.
/* 2630 *|          * @protected
/* 2631 *|          * @type {Array.<String>}
/* 2632 *|          */
/* 2633 */         this._templates = [];
/* 2634 */ 
/* 2635 */         /**
/* 2636 *|          * The carousel2 element.
/* 2637 *|          * @type {jQuery}
/* 2638 *|          */
/* 2639 */         this.$element = this._core.$element;
/* 2640 */ 
/* 2641 */         /**
/* 2642 *|          * Overridden methods of the carousel2.
/* 2643 *|          * @protected
/* 2644 *|          * @type {Object}
/* 2645 *|          */
/* 2646 */         this._overrides = {
/* 2647 */             next: this._core.next,
/* 2648 */             prev: this._core.prev,
/* 2649 */             to: this._core.to
/* 2650 */         };

/* owl.carousel.js */

/* 2651 */ 
/* 2652 */         /**
/* 2653 *|          * All event handlers.
/* 2654 *|          * @protected
/* 2655 *|          * @type {Object}
/* 2656 *|          */
/* 2657 */         this._handlers = {
/* 2658 */             'prepared.owl.carousel2': $.proxy(function(e) {
/* 2659 */                 if (this._core.settings.dotsData) {
/* 2660 */                     this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
/* 2661 */                 }
/* 2662 */             }, this),
/* 2663 */             'add.owl.carousel2': $.proxy(function(e) {
/* 2664 */                 if (this._core.settings.dotsData) {
/* 2665 */                     this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
/* 2666 */                 }
/* 2667 */             }, this),
/* 2668 */             'remove.owl.carousel2 prepared.owl.carousel2': $.proxy(function(e) {
/* 2669 */                 if (this._core.settings.dotsData) {
/* 2670 */                     this._templates.splice(e.position, 1);
/* 2671 */                 }
/* 2672 */             }, this),
/* 2673 */             'change.owl.carousel2': $.proxy(function(e) {
/* 2674 */                 if (e.property.name == 'position') {
/* 2675 */                     if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
/* 2676 */                         var current = this._core.current(),
/* 2677 */                             maximum = this._core.maximum(),
/* 2678 */                             minimum = this._core.minimum();
/* 2679 */                         e.data = e.property.value > maximum
/* 2680 */                             ? current >= maximum ? minimum : maximum
/* 2681 */                             : e.property.value < minimum ? maximum : e.property.value;
/* 2682 */                     }
/* 2683 */                 }
/* 2684 */             }, this),
/* 2685 */             'changed.owl.carousel2': $.proxy(function(e) {
/* 2686 */                 if (e.property.name == 'position') {
/* 2687 */                     this.draw();
/* 2688 */                 }
/* 2689 */             }, this),
/* 2690 */             'refreshed.owl.carousel2': $.proxy(function() {
/* 2691 */                 if (!this._initialized) {
/* 2692 */                     this.initialize();
/* 2693 */                     this._initialized = true;
/* 2694 */                 }
/* 2695 */                 this._core.trigger('refresh', null, 'navigation');
/* 2696 */                 this.update();
/* 2697 */                 this.draw();
/* 2698 */                 this._core.trigger('refreshed', null, 'navigation');
/* 2699 */             }, this)
/* 2700 */         };

/* owl.carousel.js */

/* 2701 */ 
/* 2702 */         // set default options
/* 2703 */         this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
/* 2704 */ 
/* 2705 */         // register event handlers
/* 2706 */         this.$element.on(this._handlers);
/* 2707 */     }
/* 2708 */ 
/* 2709 */     /**
/* 2710 *|      * Default options.
/* 2711 *|      * @public
/* 2712 *|      * @todo Rename `slideBy` to `navBy`
/* 2713 *|      */
/* 2714 */     Navigation.Defaults = {
/* 2715 */         nav: false,
/* 2716 */         navRewind: true,
/* 2717 */         navText: [ 'prev', 'next' ],
/* 2718 */         navSpeed: false,
/* 2719 */         navElement: 'div',
/* 2720 */         navContainer: false,
/* 2721 */         navContainerClass: 'owl-nav',
/* 2722 */         navClass: [ 'owl-prev', 'owl-next' ],
/* 2723 */         slideBy: 1,
/* 2724 */         dotClass: 'owl-dot',
/* 2725 */         dotsClass: 'owl-dots',
/* 2726 */         dots: true,
/* 2727 */         dotsEach: false,
/* 2728 */         dotData: false,
/* 2729 */         dotsSpeed: false,
/* 2730 */         dotsContainer: false,
/* 2731 */         controlsClass: 'owl-controls'
/* 2732 */     }
/* 2733 */ 
/* 2734 */     /**
/* 2735 *|      * Initializes the layout of the plugin and extends the carousel2.
/* 2736 *|      * @protected
/* 2737 *|      */
/* 2738 */     Navigation.prototype.initialize = function() {
/* 2739 */         var $container, override,
/* 2740 */             options = this._core.settings;
/* 2741 */ 
/* 2742 */         // create the indicator template
/* 2743 */         if (!options.dotsData) {
/* 2744 */             this._templates = [ $('<div>')
/* 2745 */                 .addClass(options.dotClass)
/* 2746 */                 .append($('<span>'))
/* 2747 */                 .prop('outerHTML') ];
/* 2748 */         }
/* 2749 */ 
/* 2750 */         // create controls container if needed

/* owl.carousel.js */

/* 2751 */         if (!options.navContainer || !options.dotsContainer) {
/* 2752 */             this._controls.$container = $('<div>')
/* 2753 */                 .addClass(options.controlsClass)
/* 2754 */                 .appendTo(this.$element);
/* 2755 */         }
/* 2756 */ 
/* 2757 */         // create DOM structure for absolute navigation
/* 2758 */         this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
/* 2759 */             : $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);
/* 2760 */ 
/* 2761 */         this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
/* 2762 */             var index = $(e.target).parent().is(this._controls.$indicators)
/* 2763 */                 ? $(e.target).index() : $(e.target).parent().index();
/* 2764 */ 
/* 2765 */             e.preventDefault();
/* 2766 */ 
/* 2767 */             this.to(index, options.dotsSpeed);
/* 2768 */         }, this));
/* 2769 */ 
/* 2770 */         // create DOM structure for relative navigation
/* 2771 */         $container = options.navContainer ? $(options.navContainer)
/* 2772 */             : $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);
/* 2773 */ 
/* 2774 */         this._controls.$next = $('<' + options.navElement + '>');
/* 2775 */         this._controls.$previous = this._controls.$next.clone();
/* 2776 */ 
/* 2777 */         this._controls.$previous
/* 2778 */             .addClass(options.navClass[0])
/* 2779 */             .html(options.navText[0])
/* 2780 */             .hide()
/* 2781 */             .prependTo($container)
/* 2782 */             .on('click', $.proxy(function(e) {
/* 2783 */                 this.prev(options.navSpeed);
/* 2784 */             }, this));
/* 2785 */         this._controls.$next
/* 2786 */             .addClass(options.navClass[1])
/* 2787 */             .html(options.navText[1])
/* 2788 */             .hide()
/* 2789 */             .appendTo($container)
/* 2790 */             .on('click', $.proxy(function(e) {
/* 2791 */                 this.next(options.navSpeed);
/* 2792 */             }, this));
/* 2793 */ 
/* 2794 */         // override public methods of the carousel2
/* 2795 */         for (override in this._overrides) {
/* 2796 */             this._core[override] = $.proxy(this[override], this);
/* 2797 */         }
/* 2798 */     }
/* 2799 */ 
/* 2800 */     /**

/* owl.carousel.js */

/* 2801 *|      * Destroys the plugin.
/* 2802 *|      * @protected
/* 2803 *|      */
/* 2804 */     Navigation.prototype.destroy = function() {
/* 2805 */         var handler, control, property, override;
/* 2806 */ 
/* 2807 */         for (handler in this._handlers) {
/* 2808 */             this.$element.off(handler, this._handlers[handler]);
/* 2809 */         }
/* 2810 */         for (control in this._controls) {
/* 2811 */             this._controls[control].remove();
/* 2812 */         }
/* 2813 */         for (override in this.overides) {
/* 2814 */             this._core[override] = this._overrides[override];
/* 2815 */         }
/* 2816 */         for (property in Object.getOwnPropertyNames(this)) {
/* 2817 */             typeof this[property] != 'function' && (this[property] = null);
/* 2818 */         }
/* 2819 */     }
/* 2820 */ 
/* 2821 */     /**
/* 2822 *|      * Updates the internal state.
/* 2823 *|      * @protected
/* 2824 *|      */
/* 2825 */     Navigation.prototype.update = function() {
/* 2826 */         var i, j, k,
/* 2827 */             options = this._core.settings,
/* 2828 */             lower = this._core.clones().length / 2,
/* 2829 */             upper = lower + this._core.items().length,
/* 2830 */             size = options.center || options.autoWidth || options.dotData
/* 2831 */                 ? 1 : options.dotsEach || options.items;
/* 2832 */ 
/* 2833 */         if (options.slideBy !== 'page') {
/* 2834 */             options.slideBy = Math.min(options.slideBy, options.items);
/* 2835 */         }
/* 2836 */ 
/* 2837 */         if (options.dots || options.slideBy == 'page') {
/* 2838 */             this._pages = [];
/* 2839 */ 
/* 2840 */             for (i = lower, j = 0, k = 0; i < upper; i++) {
/* 2841 */                 if (j >= size || j === 0) {
/* 2842 */                     this._pages.push({
/* 2843 */                         start: i - lower,
/* 2844 */                         end: i - lower + size - 1
/* 2845 */                     });
/* 2846 */                     j = 0, ++k;
/* 2847 */                 }
/* 2848 */                 j += this._core.mergers(this._core.relative(i));
/* 2849 */             }
/* 2850 */         }

/* owl.carousel.js */

/* 2851 */     }
/* 2852 */ 
/* 2853 */     /**
/* 2854 *|      * Draws the user interface.
/* 2855 *|      * @todo The option `dotData` wont work.
/* 2856 *|      * @protected
/* 2857 *|      */
/* 2858 */     Navigation.prototype.draw = function() {
/* 2859 */         var difference, i, html = '',
/* 2860 */             options = this._core.settings,
/* 2861 */             $items = this._core.$stage.children(),
/* 2862 */             index = this._core.relative(this._core.current());
/* 2863 */ 
/* 2864 */         if (options.nav && !options.loop && !options.navRewind) {
/* 2865 */             this._controls.$previous.toggleClass('disabled', index <= 0);
/* 2866 */             this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
/* 2867 */         }
/* 2868 */ 
/* 2869 */         this._controls.$previous.toggle(options.nav);
/* 2870 */         this._controls.$next.toggle(options.nav);
/* 2871 */ 
/* 2872 */         if (options.dots) {
/* 2873 */             difference = this._pages.length - this._controls.$indicators.children().length;
/* 2874 */ 
/* 2875 */             if (options.dotData && difference !== 0) {
/* 2876 */                 for (i = 0; i < this._controls.$indicators.children().length; i++) {
/* 2877 */                     html += this._templates[this._core.relative(i)];
/* 2878 */                 }
/* 2879 */                 this._controls.$indicators.html(html);
/* 2880 */             } else if (difference > 0) {
/* 2881 */                 html = new Array(difference + 1).join(this._templates[0]);
/* 2882 */                 this._controls.$indicators.append(html);
/* 2883 */             } else if (difference < 0) {
/* 2884 */                 this._controls.$indicators.children().slice(difference).remove();
/* 2885 */             }
/* 2886 */ 
/* 2887 */             this._controls.$indicators.find('.active').removeClass('active');
/* 2888 */             this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
/* 2889 */         }
/* 2890 */ 
/* 2891 */         this._controls.$indicators.toggle(options.dots);
/* 2892 */     }
/* 2893 */ 
/* 2894 */     /**
/* 2895 *|      * Extends event data.
/* 2896 *|      * @protected
/* 2897 *|      * @param {Event} event - The event object which gets thrown.
/* 2898 *|      */
/* 2899 */     Navigation.prototype.onTrigger = function(event) {
/* 2900 */         var settings = this._core.settings;

/* owl.carousel.js */

/* 2901 */ 
/* 2902 */         event.page = {
/* 2903 */             index: $.inArray(this.current(), this._pages),
/* 2904 */             count: this._pages.length,
/* 2905 */             size: settings && (settings.center || settings.autoWidth || settings.dotData
/* 2906 */                 ? 1 : settings.dotsEach || settings.items)
/* 2907 */         };
/* 2908 */     }
/* 2909 */ 
/* 2910 */     /**
/* 2911 *|      * Gets the current page position of the carousel2.
/* 2912 *|      * @protected
/* 2913 *|      * @returns {Number}
/* 2914 *|      */
/* 2915 */     Navigation.prototype.current = function() {
/* 2916 */         var index = this._core.relative(this._core.current());
/* 2917 */         return $.grep(this._pages, function(o) {
/* 2918 */             return o.start <= index && o.end >= index;
/* 2919 */         }).pop();
/* 2920 */     }
/* 2921 */ 
/* 2922 */     /**
/* 2923 *|      * Gets the current succesor/predecessor position.
/* 2924 *|      * @protected
/* 2925 *|      * @returns {Number}
/* 2926 *|      */
/* 2927 */     Navigation.prototype.getPosition = function(successor) {
/* 2928 */         var position, length,
/* 2929 */             options = this._core.settings;
/* 2930 */ 
/* 2931 */         if (options.slideBy == 'page') {
/* 2932 */             position = $.inArray(this.current(), this._pages);
/* 2933 */             length = this._pages.length;
/* 2934 */             successor ? ++position : --position;
/* 2935 */             position = this._pages[((position % length) + length) % length].start;
/* 2936 */         } else {
/* 2937 */             position = this._core.relative(this._core.current());
/* 2938 */             length = this._core.items().length;
/* 2939 */             successor ? position += options.slideBy : position -= options.slideBy;
/* 2940 */         }
/* 2941 */         return position;
/* 2942 */     }
/* 2943 */ 
/* 2944 */     /**
/* 2945 *|      * Slides to the next item or page.
/* 2946 *|      * @public
/* 2947 *|      * @param {Number} [speed=false] - The time in milliseconds for the transition.
/* 2948 *|      */
/* 2949 */     Navigation.prototype.next = function(speed) {
/* 2950 */         $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);

/* owl.carousel.js */

/* 2951 */     }
/* 2952 */ 
/* 2953 */     /**
/* 2954 *|      * Slides to the previous item or page.
/* 2955 *|      * @public
/* 2956 *|      * @param {Number} [speed=false] - The time in milliseconds for the transition.
/* 2957 *|      */
/* 2958 */     Navigation.prototype.prev = function(speed) {
/* 2959 */         $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
/* 2960 */     }
/* 2961 */ 
/* 2962 */     /**
/* 2963 *|      * Slides to the specified item or page.
/* 2964 *|      * @public
/* 2965 *|      * @param {Number} position - The position of the item or page.
/* 2966 *|      * @param {Number} [speed] - The time in milliseconds for the transition.
/* 2967 *|      * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
/* 2968 *|      */
/* 2969 */     Navigation.prototype.to = function(position, speed, standard) {
/* 2970 */         var length;
/* 2971 */ 
/* 2972 */         if (!standard) {
/* 2973 */             length = this._pages.length;
/* 2974 */             $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
/* 2975 */         } else {
/* 2976 */             $.proxy(this._overrides.to, this._core)(position, speed);
/* 2977 */         }
/* 2978 */     }
/* 2979 */ 
/* 2980 */     $.fn.owlCarouseldeals.Constructor.Plugins.Navigation = Navigation;
/* 2981 */ 
/* 2982 */ })(window.Zepto || window.jQuery, window, document);
/* 2983 */ 
/* 2984 */ /**
/* 2985 *|  * Hash Plugin
/* 2986 *|  * @version 2.0.0
/* 2987 *|  * @author Artus Kolanowski
/* 2988 *|  * @license The MIT License (MIT)
/* 2989 *|  */
/* 2990 */ ;(function($, window, document, undefined) {
/* 2991 */     'use strict';
/* 2992 */ 
/* 2993 */     /**
/* 2994 *|      * Creates the hash plugin.
/* 2995 *|      * @class The Hash Plugin
/* 2996 *|      * @param {Owl2} carousel2 - The Owl2 Carousel
/* 2997 *|      */
/* 2998 */     var Hash = function(carousel2) {
/* 2999 */         /**
/* 3000 *|          * Reference to the core.

/* owl.carousel.js */

/* 3001 *|          * @protected
/* 3002 *|          * @type {Owl2}
/* 3003 *|          */
/* 3004 */         this._core = carousel2;
/* 3005 */ 
/* 3006 */         /**
/* 3007 *|          * Hash table for the hashes.
/* 3008 *|          * @protected
/* 3009 *|          * @type {Object}
/* 3010 *|          */
/* 3011 */         this._hashes = {};
/* 3012 */ 
/* 3013 */         /**
/* 3014 *|          * The carousel2 element.
/* 3015 *|          * @type {jQuery}
/* 3016 *|          */
/* 3017 */         this.$element = this._core.$element;
/* 3018 */ 
/* 3019 */         /**
/* 3020 *|          * All event handlers.
/* 3021 *|          * @protected
/* 3022 *|          * @type {Object}
/* 3023 *|          */
/* 3024 */         this._handlers = {
/* 3025 */             'initialized.owl.carousel2': $.proxy(function() {
/* 3026 */                 if (this._core.settings.startPosition == 'URLHash') {
/* 3027 */                     $(window).trigger('hashchange.owl.navigation');
/* 3028 */                 }
/* 3029 */             }, this),
/* 3030 */             'prepared.owl.carousel2': $.proxy(function(e) {
/* 3031 */                 var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
/* 3032 */                 this._hashes[hash] = e.content;
/* 3033 */             }, this)
/* 3034 */         };
/* 3035 */ 
/* 3036 */         // set default options
/* 3037 */         this._core.options = $.extend({}, Hash.Defaults, this._core.options);
/* 3038 */ 
/* 3039 */         // register the event handlers
/* 3040 */         this.$element.on(this._handlers);
/* 3041 */ 
/* 3042 */         // register event listener for hash navigation
/* 3043 */         $(window).on('hashchange.owl.navigation', $.proxy(function() {
/* 3044 */             var hash = window.location.hash.substring(1),
/* 3045 */                 items = this._core.$stage.children(),
/* 3046 */                 position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;
/* 3047 */ 
/* 3048 */             if (!hash) {
/* 3049 */                 return false;
/* 3050 */             }

/* owl.carousel.js */

/* 3051 */ 
/* 3052 */             this._core.to(position, false, true);
/* 3053 */         }, this));
/* 3054 */     }
/* 3055 */ 
/* 3056 */     /**
/* 3057 *|      * Default options.
/* 3058 *|      * @public
/* 3059 *|      */
/* 3060 */     Hash.Defaults = {
/* 3061 */         URLhashListener: false
/* 3062 */     }
/* 3063 */ 
/* 3064 */     /**
/* 3065 *|      * Destroys the plugin.
/* 3066 *|      * @public
/* 3067 *|      */
/* 3068 */     Hash.prototype.destroy = function() {
/* 3069 */         var handler, property;
/* 3070 */ 
/* 3071 */         $(window).off('hashchange.owl.navigation');
/* 3072 */ 
/* 3073 */         for (handler in this._handlers) {
/* 3074 */             this._core.$element.off(handler, this._handlers[handler]);
/* 3075 */         }
/* 3076 */         for (property in Object.getOwnPropertyNames(this)) {
/* 3077 */             typeof this[property] != 'function' && (this[property] = null);
/* 3078 */         }
/* 3079 */     }
/* 3080 */ 
/* 3081 */     $.fn.owlCarouseldeals.Constructor.Plugins.Hash = Hash;
/* 3082 */ 
/* 3083 */ })(window.Zepto || window.jQuery, window, document);
/* 3084 */ ;/**
/* 3085 *|  * Owl2 carousel2
/* 3086 *|  * @version 2.0.0
/* 3087 *|  * @author Bartosz Wojciechowski
/* 3088 *|  * @license The MIT License (MIT)
/* 3089 *|  * @todo Lazy Load Icon
/* 3090 *|  * @todo prevent animationend bubling
/* 3091 *|  * @todo itemsScaleUp
/* 3092 *|  * @todo Test Zepto
/* 3093 *|  * @todo stagePadding calculate wrong active classes
/* 3094 *|  */
/* 3095 */ ;(function($, window, document, undefined) {
/* 3096 */ 
/* 3097 */     var drag, state, e;
/* 3098 */ 
/* 3099 */     /**
/* 3100 *|      * Template for status information about drag and touch events.

/* owl.carousel.js */

/* 3101 *|      * @private
/* 3102 *|      */
/* 3103 */     drag = {
/* 3104 */         start: 0,
/* 3105 */         startX: 0,
/* 3106 */         startY: 0,
/* 3107 */         current: 0,
/* 3108 */         currentX: 0,
/* 3109 */         currentY: 0,
/* 3110 */         offsetX: 0,
/* 3111 */         offsetY: 0,
/* 3112 */         distance: null,
/* 3113 */         startTime: 0,
/* 3114 */         endTime: 0,
/* 3115 */         updatedX: 0,
/* 3116 */         targetEl: null
/* 3117 */     };
/* 3118 */ 
/* 3119 */     /**
/* 3120 *|      * Template for some status informations.
/* 3121 *|      * @private
/* 3122 *|      */
/* 3123 */     state = {
/* 3124 */         isTouch: false,
/* 3125 */         isScrolling: false,
/* 3126 */         isSwiping: false,
/* 3127 */         direction: false,
/* 3128 */         inMotion: false
/* 3129 */     };
/* 3130 */ 
/* 3131 */     /**
/* 3132 *|      * Event functions references.
/* 3133 *|      * @private
/* 3134 *|      */
/* 3135 */     e = {
/* 3136 */         _onDragStart: null,
/* 3137 */         _onDragMove: null,
/* 3138 */         _onDragEnd: null,
/* 3139 */         _transitionEnd: null,
/* 3140 */         _resizer: null,
/* 3141 */         _responsiveCall: null,
/* 3142 */         _goToLoop: null,
/* 3143 */         _checkVisibile: null
/* 3144 */     };
/* 3145 */ 
/* 3146 */     /**
/* 3147 *|      * Creates a carousel2.
/* 3148 *|      * @class The Owl2 Carousel.
/* 3149 *|      * @public
/* 3150 *|      * @param {HTMLElement|jQuery} element - The element to create the carousel2 for.

/* owl.carousel.js */

/* 3151 *|      * @param {Object} [options] - The options
/* 3152 *|      */
/* 3153 */     function Owl2(element, options) {
/* 3154 */ 
/* 3155 */         /**
/* 3156 *|          * Current settings for the carousel2.
/* 3157 *|          * @public
/* 3158 *|          */
/* 3159 */         this.settings = null;
/* 3160 */ 
/* 3161 */         /**
/* 3162 *|          * Current options set by the caller including defaults.
/* 3163 *|          * @public
/* 3164 *|          */
/* 3165 */         this.options = $.extend({}, Owl2.Defaults, options);
/* 3166 */ 
/* 3167 */         /**
/* 3168 *|          * Plugin element.
/* 3169 *|          * @public
/* 3170 *|          */
/* 3171 */         this.$element = $(element);
/* 3172 */ 
/* 3173 */         /**
/* 3174 *|          * Caches informations about drag and touch events.
/* 3175 *|          */
/* 3176 */         this.drag = $.extend({}, drag);
/* 3177 */ 
/* 3178 */         /**
/* 3179 *|          * Caches some status informations.
/* 3180 *|          * @protected
/* 3181 *|          */
/* 3182 */         this.state = $.extend({}, state);
/* 3183 */ 
/* 3184 */         /**
/* 3185 *|          * @protected
/* 3186 *|          * @todo Must be documented
/* 3187 *|          */
/* 3188 */         this.e = $.extend({}, e);
/* 3189 */ 
/* 3190 */         /**
/* 3191 *|          * References to the running plugins of this carousel2.
/* 3192 *|          * @protected
/* 3193 *|          */
/* 3194 */         this._plugins = {};
/* 3195 */ 
/* 3196 */         /**
/* 3197 *|          * Currently suppressed events to prevent them from beeing retriggered.
/* 3198 *|          * @protected
/* 3199 *|          */
/* 3200 */         this._supress = {};

/* owl.carousel.js */

/* 3201 */ 
/* 3202 */         /**
/* 3203 *|          * Absolute current position.
/* 3204 *|          * @protected
/* 3205 *|          */
/* 3206 */         this._current = null;
/* 3207 */ 
/* 3208 */         /**
/* 3209 *|          * Animation speed in milliseconds.
/* 3210 *|          * @protected
/* 3211 *|          */
/* 3212 */         this._speed = null;
/* 3213 */ 
/* 3214 */         /**
/* 3215 *|          * Coordinates of all items in pixel.
/* 3216 *|          * @todo The name of this member is missleading.
/* 3217 *|          * @protected
/* 3218 *|          */
/* 3219 */         this._coordinates = [];
/* 3220 */ 
/* 3221 */         /**
/* 3222 *|          * Current breakpoint.
/* 3223 *|          * @todo Real media queries would be nice.
/* 3224 *|          * @protected
/* 3225 *|          */
/* 3226 */         this._breakpoint = null;
/* 3227 */ 
/* 3228 */         /**
/* 3229 *|          * Current width of the plugin element.
/* 3230 *|          */
/* 3231 */         this._width = null;
/* 3232 */ 
/* 3233 */         /**
/* 3234 *|          * All real items.
/* 3235 *|          * @protected
/* 3236 *|          */
/* 3237 */         this._items = [];
/* 3238 */ 
/* 3239 */         /**
/* 3240 *|          * All cloned items.
/* 3241 *|          * @protected
/* 3242 *|          */
/* 3243 */         this._clones = [];
/* 3244 */ 
/* 3245 */         /**
/* 3246 *|          * Merge values of all items.
/* 3247 *|          * @todo Maybe this could be part of a plugin.
/* 3248 *|          * @protected
/* 3249 *|          */
/* 3250 */         this._mergers = [];

/* owl.carousel.js */

/* 3251 */ 
/* 3252 */         /**
/* 3253 *|          * Invalidated parts within the update process.
/* 3254 *|          * @protected
/* 3255 *|          */
/* 3256 */         this._invalidated = {};
/* 3257 */ 
/* 3258 */         /**
/* 3259 *|          * Ordered list of workers for the update process.
/* 3260 *|          * @protected
/* 3261 *|          */
/* 3262 */         this._pipe = [];
/* 3263 */ 
/* 3264 */         $.each(Owl2.Plugins, $.proxy(function(key, plugin) {
/* 3265 */             this._plugins[key[0].toLowerCase() + key.slice(1)]
/* 3266 */                 = new plugin(this);
/* 3267 */         }, this));
/* 3268 */ 
/* 3269 */         $.each(Owl2.Pipe, $.proxy(function(priority, worker) {
/* 3270 */             this._pipe.push({
/* 3271 */                 'filter': worker.filter,
/* 3272 */                 'run': $.proxy(worker.run, this)
/* 3273 */             });
/* 3274 */         }, this));
/* 3275 */ 
/* 3276 */         this.setup();
/* 3277 */         this.initialize();
/* 3278 */     }
/* 3279 */ 
/* 3280 */     /**
/* 3281 *|      * Default options for the carousel2.
/* 3282 *|      * @public
/* 3283 *|      */
/* 3284 */     Owl2.Defaults = {
/* 3285 */         items: 3,
/* 3286 */         loop: false,
/* 3287 */         center: false,
/* 3288 */ 
/* 3289 */         mouseDrag: true,
/* 3290 */         touchDrag: true,
/* 3291 */         pullDrag: true,
/* 3292 */         freeDrag: false,
/* 3293 */ 
/* 3294 */         margin: 0,
/* 3295 */         stagePadding: 0,
/* 3296 */ 
/* 3297 */         merge: false,
/* 3298 */         mergeFit: true,
/* 3299 */         autoWidth: false,
/* 3300 */ 

/* owl.carousel.js */

/* 3301 */         startPosition: 0,
/* 3302 */         rtl: false,
/* 3303 */ 
/* 3304 */         smartSpeed: 250,
/* 3305 */         fluidSpeed: false,
/* 3306 */         dragEndSpeed: false,
/* 3307 */ 
/* 3308 */         responsive: {},
/* 3309 */         responsiveRefreshRate: 200,
/* 3310 */         responsiveBaseElement: window,
/* 3311 */         responsiveClass: false,
/* 3312 */ 
/* 3313 */         fallbackEasing: 'swing',
/* 3314 */ 
/* 3315 */         info: false,
/* 3316 */ 
/* 3317 */         nestedItemSelector: false,
/* 3318 */         itemElement: 'div',
/* 3319 */         stageElement: 'div',
/* 3320 */ 
/* 3321 */         // Classes and Names
/* 3322 */         themeClass: 'owl2-theme',
/* 3323 */         baseClass: 'owl2-carousel',
/* 3324 */         itemClass: 'owl2-item',
/* 3325 */         centerClass: 'center',
/* 3326 */         activeClass: 'active'
/* 3327 */     };
/* 3328 */ 
/* 3329 */     /**
/* 3330 *|      * Enumeration for width.
/* 3331 *|      * @public
/* 3332 *|      * @readonly
/* 3333 *|      * @enum {String}
/* 3334 *|      */
/* 3335 */     Owl2.Width = {
/* 3336 */         Default: 'default',
/* 3337 */         Inner: 'inner',
/* 3338 */         Outer: 'outer'
/* 3339 */     };
/* 3340 */ 
/* 3341 */     /**
/* 3342 *|      * Contains all registered plugins.
/* 3343 *|      * @public
/* 3344 *|      */
/* 3345 */     Owl2.Plugins = {};
/* 3346 */ 
/* 3347 */     /**
/* 3348 *|      * Update pipe.
/* 3349 *|      */
/* 3350 */     Owl2.Pipe = [ {

/* owl.carousel.js */

/* 3351 */         filter: [ 'width', 'items', 'settings' ],
/* 3352 */         run: function(cache) {
/* 3353 */             cache.current = this._items && this._items[this.relative(this._current)];
/* 3354 */         }
/* 3355 */     }, {
/* 3356 */         filter: [ 'items', 'settings' ],
/* 3357 */         run: function() {
/* 3358 */             var cached = this._clones,
/* 3359 */                 clones = this.$stage.children('.cloned');
/* 3360 */ 
/* 3361 */             if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
/* 3362 */                 this.$stage.children('.cloned').remove();
/* 3363 */                 this._clones = [];
/* 3364 */             }
/* 3365 */         }
/* 3366 */     }, {
/* 3367 */         filter: [ 'items', 'settings' ],
/* 3368 */         run: function() {
/* 3369 */             var i, n,
/* 3370 */                 clones = this._clones,
/* 3371 */                 items = this._items,
/* 3372 */                 delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;
/* 3373 */ 
/* 3374 */             for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
/* 3375 */                 if (delta > 0) {
/* 3376 */                     this.$stage.children().eq(items.length + clones.length - 1).remove();
/* 3377 */                     clones.pop();
/* 3378 */                     this.$stage.children().eq(0).remove();
/* 3379 */                     clones.pop();
/* 3380 */                 } else {
/* 3381 */                     clones.push(clones.length / 2);
/* 3382 */                     this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
/* 3383 */                     clones.push(items.length - 1 - (clones.length - 1) / 2);
/* 3384 */                     this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
/* 3385 */                 }
/* 3386 */             }
/* 3387 */         }
/* 3388 */     }, {
/* 3389 */         filter: [ 'width', 'items', 'settings' ],
/* 3390 */         run: function() {
/* 3391 */             var rtl = (this.settings.rtl ? 1 : -1),
/* 3392 */                 width = (this.width() / this.settings.items).toFixed(3),
/* 3393 */                 coordinate = 0, merge, i, n;
/* 3394 */ 
/* 3395 */             this._coordinates = [];
/* 3396 */             for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
/* 3397 */                 merge = this._mergers[this.relative(i)];
/* 3398 */                 merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
/* 3399 */                 coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;
/* 3400 */ 

/* owl.carousel.js */

/* 3401 */                 this._coordinates.push(coordinate);
/* 3402 */             }
/* 3403 */         }
/* 3404 */     }, {
/* 3405 */         filter: [ 'width', 'items', 'settings' ],
/* 3406 */         run: function() {
/* 3407 */             var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
/* 3408 */                 'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
/* 3409 */                 'padding-left': this.settings.stagePadding || '',
/* 3410 */                 'padding-right': this.settings.stagePadding || ''
/* 3411 */             };
/* 3412 */ 
/* 3413 */             this.$stage.css(css);
/* 3414 */ 
/* 3415 */             css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
/* 3416 */             css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;
/* 3417 */ 
/* 3418 */             if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
/* 3419 */                 for (i = 0, n = this._coordinates.length; i < n; i++) {
/* 3420 */                     css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
/* 3421 */                     this.$stage.children().eq(i).css(css);
/* 3422 */                 }
/* 3423 */             } else {
/* 3424 */                 this.$stage.children().css(css);
/* 3425 */             }
/* 3426 */         }
/* 3427 */     }, {
/* 3428 */         filter: [ 'width', 'items', 'settings' ],
/* 3429 */         run: function(cache) {
/* 3430 */             cache.current && this.reset(this.$stage.children().index(cache.current));
/* 3431 */         }
/* 3432 */     }, {
/* 3433 */         filter: [ 'position' ],
/* 3434 */         run: function() {
/* 3435 */             this.animate(this.coordinates(this._current));
/* 3436 */         }
/* 3437 */     }, {
/* 3438 */         filter: [ 'width', 'position', 'items', 'settings' ],
/* 3439 */         run: function() {
/* 3440 */             var rtl = this.settings.rtl ? 1 : -1,
/* 3441 */                 padding = this.settings.stagePadding * 2,
/* 3442 */                 begin = this.coordinates(this.current()) + padding,
/* 3443 */                 end = begin + this.width() * rtl,
/* 3444 */                 inner, outer, matches = [], i, n;
/* 3445 */ 
/* 3446 */             for (i = 0, n = this._coordinates.length; i < n; i++) {
/* 3447 */                 inner = this._coordinates[i - 1] || 0;
/* 3448 */                 outer = Math.abs(this._coordinates[i]) + padding * rtl;
/* 3449 */ 
/* 3450 */                 if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))

/* owl.carousel.js */

/* 3451 */                     || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
/* 3452 */                     matches.push(i);
/* 3453 */                 }
/* 3454 */             }
/* 3455 */ 
/* 3456 */             this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
/* 3457 */             this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);
/* 3458 */ 
/* 3459 */             if (this.settings.center) {
/* 3460 */                 this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
/* 3461 */                 this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
/* 3462 */             }
/* 3463 */         }
/* 3464 */     } ];
/* 3465 */ 
/* 3466 */     /**
/* 3467 *|      * Initializes the carousel2.
/* 3468 *|      * @protected
/* 3469 *|      */
/* 3470 */     Owl2.prototype.initialize = function() {
/* 3471 */         this.trigger('initialize');
/* 3472 */ 
/* 3473 */         this.$element
/* 3474 */             .addClass(this.settings.baseClass)
/* 3475 */             .addClass(this.settings.themeClass)
/* 3476 */             .toggleClass('owl2-rtl', this.settings.rtl);
/* 3477 */ 
/* 3478 */         // check support
/* 3479 */         this.browserSupport();
/* 3480 */ 
/* 3481 */         if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
/* 3482 */             var imgs, nestedSelector, width;
/* 3483 */             imgs = this.$element.find('img');
/* 3484 */             nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
/* 3485 */             width = this.$element.children(nestedSelector).width();
/* 3486 */ 
/* 3487 */             if (imgs.length && width <= 0) {
/* 3488 */                 this.preloadAutoWidthImages(imgs);
/* 3489 */                 return false;
/* 3490 */             }
/* 3491 */         }
/* 3492 */ 
/* 3493 */         this.$element.addClass('owl2-loading');
/* 3494 */ 
/* 3495 */         // create stage
/* 3496 */         this.$stage = $('<' + this.settings.stageElement + ' class="owl2-stage"/>')
/* 3497 */             .wrap('<div class="owl2-stage-outer">');
/* 3498 */ 
/* 3499 */         // append stage
/* 3500 */         this.$element.append(this.$stage.parent());

/* owl.carousel.js */

/* 3501 */ 
/* 3502 */         // append content
/* 3503 */         this.replace(this.$element.children().not(this.$stage.parent()));
/* 3504 */ 
/* 3505 */         // set view width
/* 3506 */         this._width = this.$element.width();
/* 3507 */ 
/* 3508 */         // update view
/* 3509 */         this.refresh();
/* 3510 */ 
/* 3511 */         this.$element.removeClass('owl2-loading').addClass('owl2-loaded');
/* 3512 */ 
/* 3513 */         // attach generic events
/* 3514 */         this.eventsCall();
/* 3515 */ 
/* 3516 */         // attach generic events
/* 3517 */         this.internalEvents();
/* 3518 */ 
/* 3519 */         // attach custom control events
/* 3520 */         this.addTriggerableEvents();
/* 3521 */ 
/* 3522 */         this.trigger('initialized');
/* 3523 */     };
/* 3524 */ 
/* 3525 */     /**
/* 3526 *|      * Setups the current settings.
/* 3527 *|      * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
/* 3528 *|      * @todo Support for media queries by using `matchMedia` would be nice.
/* 3529 *|      * @public
/* 3530 *|      */
/* 3531 */     Owl2.prototype.setup = function() {
/* 3532 */         var viewport = this.viewport(),
/* 3533 */             overwrites = this.options.responsive,
/* 3534 */             match = -1,
/* 3535 */             settings = null;
/* 3536 */ 
/* 3537 */         if (!overwrites) {
/* 3538 */             settings = $.extend({}, this.options);
/* 3539 */         } else {
/* 3540 */             $.each(overwrites, function(breakpoint) {
/* 3541 */                 if (breakpoint <= viewport && breakpoint > match) {
/* 3542 */                     match = Number(breakpoint);
/* 3543 */                 }
/* 3544 */             });
/* 3545 */ 
/* 3546 */             settings = $.extend({}, this.options, overwrites[match]);
/* 3547 */             delete settings.responsive;
/* 3548 */ 
/* 3549 */             // responsive class
/* 3550 */             if (settings.responsiveClass) {

/* owl.carousel.js */

/* 3551 */                 this.$element.attr('class', function(i, c) {
/* 3552 */                     return c.replace(/\b owl2-responsive-\S+/g, '');
/* 3553 */                 }).addClass('owl2-responsive-' + match);
/* 3554 */             }
/* 3555 */         }
/* 3556 */ 
/* 3557 */         if (this.settings === null || this._breakpoint !== match) {
/* 3558 */             this.trigger('change', { property: { name: 'settings', value: settings } });
/* 3559 */             this._breakpoint = match;
/* 3560 */             this.settings = settings;
/* 3561 */             this.invalidate('settings');
/* 3562 */             this.trigger('changed', { property: { name: 'settings', value: this.settings } });
/* 3563 */         }
/* 3564 */     };
/* 3565 */ 
/* 3566 */     /**
/* 3567 *|      * Updates option logic if necessery.
/* 3568 *|      * @protected
/* 3569 *|      */
/* 3570 */     Owl2.prototype.optionsLogic = function() {
/* 3571 */         // Toggle Center class
/* 3572 */         this.$element.toggleClass('owl2-center', this.settings.center);
/* 3573 */ 
/* 3574 */         // if items number is less than in body
/* 3575 */         if (this.settings.loop && this._items.length < this.settings.items) {
/* 3576 */             this.settings.loop = false;
/* 3577 */         }
/* 3578 */ 
/* 3579 */         if (this.settings.autoWidth) {
/* 3580 */             this.settings.stagePadding = false;
/* 3581 */             this.settings.merge = false;
/* 3582 */         }
/* 3583 */     };
/* 3584 */ 
/* 3585 */     /**
/* 3586 *|      * Prepares an item before add.
/* 3587 *|      * @todo Rename event parameter `content` to `item`.
/* 3588 *|      * @protected
/* 3589 *|      * @returns {jQuery|HTMLElement} - The item container.
/* 3590 *|      */
/* 3591 */     Owl2.prototype.prepare = function(item) {
/* 3592 */         var event = this.trigger('prepare', { content: item });
/* 3593 */ 
/* 3594 */         if (!event.data) {
/* 3595 */             event.data = $('<' + this.settings.itemElement + '/>')
/* 3596 */                 .addClass(this.settings.itemClass).append(item)
/* 3597 */         }
/* 3598 */ 
/* 3599 */         this.trigger('prepared', { content: event.data });
/* 3600 */ 

/* owl.carousel.js */

/* 3601 */         return event.data;
/* 3602 */     };
/* 3603 */ 
/* 3604 */     /**
/* 3605 *|      * Updates the view.
/* 3606 *|      * @public
/* 3607 *|      */
/* 3608 */     Owl2.prototype.update = function() {
/* 3609 */         var i = 0,
/* 3610 */             n = this._pipe.length,
/* 3611 */             filter = $.proxy(function(p) { return this[p] }, this._invalidated),
/* 3612 */             cache = {};
/* 3613 */ 
/* 3614 */         while (i < n) {
/* 3615 */             if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
/* 3616 */                 this._pipe[i].run(cache);
/* 3617 */             }
/* 3618 */             i++;
/* 3619 */         }
/* 3620 */ 
/* 3621 */         this._invalidated = {};
/* 3622 */     };
/* 3623 */ 
/* 3624 */     /**
/* 3625 *|      * Gets the width of the view.
/* 3626 *|      * @public
/* 3627 *|      * @param {Owl2.Width} [dimension=Owl2.Width.Default] - The dimension to return.
/* 3628 *|      * @returns {Number} - The width of the view in pixel.
/* 3629 *|      */
/* 3630 */     Owl2.prototype.width = function(dimension) {
/* 3631 */         dimension = dimension || Owl2.Width.Default;
/* 3632 */         switch (dimension) {
/* 3633 */             case Owl2.Width.Inner:
/* 3634 */             case Owl2.Width.Outer:
/* 3635 */                 return this._width;
/* 3636 */             default:
/* 3637 */                 return this._width - this.settings.stagePadding * 2 + this.settings.margin;
/* 3638 */         }
/* 3639 */     };
/* 3640 */ 
/* 3641 */     /**
/* 3642 *|      * Refreshes the carousel2 primarily for adaptive purposes.
/* 3643 *|      * @public
/* 3644 *|      */
/* 3645 */     Owl2.prototype.refresh = function() {
/* 3646 */         if (this._items.length === 0) {
/* 3647 */             return false;
/* 3648 */         }
/* 3649 */ 
/* 3650 */         var start = new Date().getTime();

/* owl.carousel.js */

/* 3651 */ 
/* 3652 */         this.trigger('refresh');
/* 3653 */ 
/* 3654 */         this.setup();
/* 3655 */ 
/* 3656 */         this.optionsLogic();
/* 3657 */ 
/* 3658 */         // hide and show methods helps here to set a proper widths,
/* 3659 */         // this prevents scrollbar to be calculated in stage width
/* 3660 */         this.$stage.addClass('owl2-refresh');
/* 3661 */ 
/* 3662 */         this.update();
/* 3663 */ 
/* 3664 */         this.$stage.removeClass('owl2-refresh');
/* 3665 */ 
/* 3666 */         this.state.orientation = window.orientation;
/* 3667 */ 
/* 3668 */         this.watchVisibility();
/* 3669 */ 
/* 3670 */         this.trigger('refreshed');
/* 3671 */     };
/* 3672 */ 
/* 3673 */     /**
/* 3674 *|      * Save internal event references and add event based functions.
/* 3675 *|      * @protected
/* 3676 *|      */
/* 3677 */     Owl2.prototype.eventsCall = function() {
/* 3678 */         // Save events references
/* 3679 */         this.e._onDragStart = $.proxy(function(e) {
/* 3680 */             this.onDragStart(e);
/* 3681 */         }, this);
/* 3682 */         this.e._onDragMove = $.proxy(function(e) {
/* 3683 */             this.onDragMove(e);
/* 3684 */         }, this);
/* 3685 */         this.e._onDragEnd = $.proxy(function(e) {
/* 3686 */             this.onDragEnd(e);
/* 3687 */         }, this);
/* 3688 */         this.e._onResize = $.proxy(function(e) {
/* 3689 */             this.onResize(e);
/* 3690 */         }, this);
/* 3691 */         this.e._transitionEnd = $.proxy(function(e) {
/* 3692 */             this.transitionEnd(e);
/* 3693 */         }, this);
/* 3694 */         this.e._preventClick = $.proxy(function(e) {
/* 3695 */             this.preventClick(e);
/* 3696 */         }, this);
/* 3697 */     };
/* 3698 */ 
/* 3699 */     /**
/* 3700 *|      * Checks window `resize` event.

/* owl.carousel.js */

/* 3701 *|      * @protected
/* 3702 *|      */
/* 3703 */     Owl2.prototype.onThrottledResize = function() {
/* 3704 */         window.clearTimeout(this.resizeTimer);
/* 3705 */         this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
/* 3706 */     };
/* 3707 */ 
/* 3708 */     /**
/* 3709 *|      * Checks window `resize` event.
/* 3710 *|      * @protected
/* 3711 *|      */
/* 3712 */     Owl2.prototype.onResize = function() {
/* 3713 */         if (!this._items.length) {
/* 3714 */             return false;
/* 3715 */         }
/* 3716 */ 
/* 3717 */         if (this._width === this.$element.width()) {
/* 3718 */             return false;
/* 3719 */         }
/* 3720 */ 
/* 3721 */         if (this.trigger('resize').isDefaultPrevented()) {
/* 3722 */             return false;
/* 3723 */         }
/* 3724 */ 
/* 3725 */         this._width = this.$element.width();
/* 3726 */ 
/* 3727 */         this.invalidate('width');
/* 3728 */ 
/* 3729 */         this.refresh();
/* 3730 */ 
/* 3731 */         this.trigger('resized');
/* 3732 */     };
/* 3733 */ 
/* 3734 */     /**
/* 3735 *|      * Checks for touch/mouse drag event type and add run event handlers.
/* 3736 *|      * @protected
/* 3737 *|      */
/* 3738 */     Owl2.prototype.eventsRouter = function(event) {
/* 3739 */         var type = event.type;
/* 3740 */ 
/* 3741 */         if (type === "mousedown" || type === "touchstart") {
/* 3742 */             this.onDragStart(event);
/* 3743 */         } else if (type === "mousemove" || type === "touchmove") {
/* 3744 */             this.onDragMove(event);
/* 3745 */         } else if (type === "mouseup" || type === "touchend") {
/* 3746 */             this.onDragEnd(event);
/* 3747 */         } else if (type === "touchcancel") {
/* 3748 */             this.onDragEnd(event);
/* 3749 */         }
/* 3750 */     };

/* owl.carousel.js */

/* 3751 */ 
/* 3752 */     /**
/* 3753 *|      * Checks for touch/mouse drag options and add necessery event handlers.
/* 3754 *|      * @protected
/* 3755 *|      */
/* 3756 */     Owl2.prototype.internalEvents = function() {
/* 3757 */         var isTouch = isTouchSupport(),
/* 3758 */             isTouchIE = isTouchSupportIE();
/* 3759 */ 
/* 3760 */         if (this.settings.mouseDrag){
/* 3761 */             this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
/* 3762 */             this.$stage.on('dragstart', function() { return false });
/* 3763 */             this.$stage.get(0).onselectstart = function() { return false };
/* 3764 */         } else {
/* 3765 */             this.$element.addClass('owl2-text-select-on');
/* 3766 */         }
/* 3767 */ 
/* 3768 */         if (this.settings.touchDrag && !isTouchIE){
/* 3769 */             this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
/* 3770 */         }
/* 3771 */ 
/* 3772 */         // catch transitionEnd event
/* 3773 */         if (this.transitionEndVendor) {
/* 3774 */             this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
/* 3775 */         }
/* 3776 */ 
/* 3777 */         // responsive
/* 3778 */         if (this.settings.responsive !== false) {
/* 3779 */             this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
/* 3780 */         }
/* 3781 */     };
/* 3782 */ 
/* 3783 */     /**
/* 3784 *|      * Handles touchstart/mousedown event.
/* 3785 *|      * @protected
/* 3786 *|      * @param {Event} event - The event arguments.
/* 3787 *|      */
/* 3788 */     Owl2.prototype.onDragStart = function(event) {
/* 3789 */         var ev, isTouchEvent, pageX, pageY, animatedPos;
/* 3790 */ 
/* 3791 */         ev = event.originalEvent || event || window.event;
/* 3792 */ 
/* 3793 */         // prevent right click
/* 3794 */         if (ev.which === 3 || this.state.isTouch) {
/* 3795 */             return false;
/* 3796 */         }
/* 3797 */ 
/* 3798 */         if (ev.type === 'mousedown') {
/* 3799 */             this.$stage.addClass('owl2-grab');
/* 3800 */         }

/* owl.carousel.js */

/* 3801 */ 
/* 3802 */         this.trigger('drag');
/* 3803 */         this.drag.startTime = new Date().getTime();
/* 3804 */         this.speed(0);
/* 3805 */         this.state.isTouch = true;
/* 3806 */         this.state.isScrolling = false;
/* 3807 */         this.state.isSwiping = false;
/* 3808 */         this.drag.distance = 0;
/* 3809 */ 
/* 3810 */         pageX = getTouches(ev).x;
/* 3811 */         pageY = getTouches(ev).y;
/* 3812 */ 
/* 3813 */         // get stage position left
/* 3814 */         this.drag.offsetX = this.$stage.position().left;
/* 3815 */         this.drag.offsetY = this.$stage.position().top;
/* 3816 */ 
/* 3817 */         if (this.settings.rtl) {
/* 3818 */             this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
/* 3819 */             + this.settings.margin;
/* 3820 */         }
/* 3821 */ 
/* 3822 */         // catch position // ie to fix
/* 3823 */         if (this.state.inMotion && this.support3d) {
/* 3824 */             animatedPos = this.getTransformProperty();
/* 3825 */             this.drag.offsetX = animatedPos;
/* 3826 */             this.animate(animatedPos);
/* 3827 */             this.state.inMotion = true;
/* 3828 */         } else if (this.state.inMotion && !this.support3d) {
/* 3829 */             this.state.inMotion = false;
/* 3830 */             return false;
/* 3831 */         }
/* 3832 */ 
/* 3833 */         this.drag.startX = pageX - this.drag.offsetX;
/* 3834 */         this.drag.startY = pageY - this.drag.offsetY;
/* 3835 */ 
/* 3836 */         this.drag.start = pageX - this.drag.startX;
/* 3837 */         this.drag.targetEl = ev.target || ev.srcElement;
/* 3838 */         this.drag.updatedX = this.drag.start;
/* 3839 */ 
/* 3840 */         // to do/check
/* 3841 */         // prevent links and images dragging;
/* 3842 */         if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
/* 3843 */             this.drag.targetEl.draggable = false;
/* 3844 */         }
/* 3845 */ 
/* 3846 */         $(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
/* 3847 */     };
/* 3848 */ 
/* 3849 */     /**
/* 3850 *|      * Handles the touchmove/mousemove events.

/* owl.carousel.js */

/* 3851 *|      * @todo Simplify
/* 3852 *|      * @protected
/* 3853 *|      * @param {Event} event - The event arguments.
/* 3854 *|      */
/* 3855 */     Owl2.prototype.onDragMove = function(event) {
/* 3856 */         var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;
/* 3857 */ 
/* 3858 */         if (!this.state.isTouch) {
/* 3859 */             return;
/* 3860 */         }
/* 3861 */ 
/* 3862 */         if (this.state.isScrolling) {
/* 3863 */             return;
/* 3864 */         }
/* 3865 */ 
/* 3866 */         ev = event.originalEvent || event || window.event;
/* 3867 */ 
/* 3868 */         pageX = getTouches(ev).x;
/* 3869 */         pageY = getTouches(ev).y;
/* 3870 */ 
/* 3871 */         // Drag Direction
/* 3872 */         this.drag.currentX = pageX - this.drag.startX;
/* 3873 */         this.drag.currentY = pageY - this.drag.startY;
/* 3874 */         this.drag.distance = this.drag.currentX - this.drag.offsetX;
/* 3875 */ 
/* 3876 */         // Check move direction
/* 3877 */         if (this.drag.distance < 0) {
/* 3878 */             this.state.direction = this.settings.rtl ? 'right' : 'left';
/* 3879 */         } else if (this.drag.distance > 0) {
/* 3880 */             this.state.direction = this.settings.rtl ? 'left' : 'right';
/* 3881 */         }
/* 3882 */         // Loop
/* 3883 */         if (this.settings.loop) {
/* 3884 */             if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
/* 3885 */                 this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
/* 3886 */             } else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
/* 3887 */                 this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
/* 3888 */             }
/* 3889 */         } else {
/* 3890 */             // pull
/* 3891 */             minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
/* 3892 */             maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
/* 3893 */             pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
/* 3894 */             this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
/* 3895 */         }
/* 3896 */ 
/* 3897 */         // Lock browser if swiping horizontal
/* 3898 */ 
/* 3899 */         if ((this.drag.distance > 8 || this.drag.distance < -8)) {
/* 3900 */             if (ev.preventDefault !== undefined) {

/* owl.carousel.js */

/* 3901 */                 ev.preventDefault();
/* 3902 */             } else {
/* 3903 */                 ev.returnValue = false;
/* 3904 */             }
/* 3905 */             this.state.isSwiping = true;
/* 3906 */         }
/* 3907 */ 
/* 3908 */         this.drag.updatedX = this.drag.currentX;
/* 3909 */ 
/* 3910 */         // Lock Owl2 if scrolling
/* 3911 */         if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
/* 3912 */             this.state.isScrolling = true;
/* 3913 */             this.drag.updatedX = this.drag.start;
/* 3914 */         }
/* 3915 */ 
/* 3916 */         this.animate(this.drag.updatedX);
/* 3917 */     };
/* 3918 */ 
/* 3919 */     /**
/* 3920 *|      * Handles the touchend/mouseup events.
/* 3921 *|      * @protected
/* 3922 *|      */
/* 3923 */     Owl2.prototype.onDragEnd = function(event) {
/* 3924 */         var compareTimes, distanceAbs, closest;
/* 3925 */ 
/* 3926 */         if (!this.state.isTouch) {
/* 3927 */             return;
/* 3928 */         }
/* 3929 */ 
/* 3930 */         if (event.type === 'mouseup') {
/* 3931 */             this.$stage.removeClass('owl2-grab');
/* 3932 */         }
/* 3933 */ 
/* 3934 */         this.trigger('dragged');
/* 3935 */ 
/* 3936 */         // prevent links and images dragging;
/* 3937 */         this.drag.targetEl.removeAttribute("draggable");
/* 3938 */ 
/* 3939 */         // remove drag event listeners
/* 3940 */ 
/* 3941 */         this.state.isTouch = false;
/* 3942 */         this.state.isScrolling = false;
/* 3943 */         this.state.isSwiping = false;
/* 3944 */ 
/* 3945 */         // to check
/* 3946 */         if (this.drag.distance === 0 && this.state.inMotion !== true) {
/* 3947 */             this.state.inMotion = false;
/* 3948 */             return false;
/* 3949 */         }
/* 3950 */ 

/* owl.carousel.js */

/* 3951 */         // prevent clicks while scrolling
/* 3952 */ 
/* 3953 */         this.drag.endTime = new Date().getTime();
/* 3954 */         compareTimes = this.drag.endTime - this.drag.startTime;
/* 3955 */         distanceAbs = Math.abs(this.drag.distance);
/* 3956 */ 
/* 3957 */         // to test
/* 3958 */         if (distanceAbs > 3 || compareTimes > 300) {
/* 3959 */             this.removeClick(this.drag.targetEl);
/* 3960 */         }
/* 3961 */ 
/* 3962 */         closest = this.closest(this.drag.updatedX);
/* 3963 */ 
/* 3964 */         this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
/* 3965 */         this.current(closest);
/* 3966 */         this.invalidate('position');
/* 3967 */         this.update();
/* 3968 */ 
/* 3969 */         // if pullDrag is off then fire transitionEnd event manually when stick
/* 3970 */         // to border
/* 3971 */         if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
/* 3972 */             this.transitionEnd();
/* 3973 */         }
/* 3974 */ 
/* 3975 */         this.drag.distance = 0;
/* 3976 */ 
/* 3977 */         $(document).off('.owl.dragEvents');
/* 3978 */     };
/* 3979 */ 
/* 3980 */     /**
/* 3981 *|      * Attaches `preventClick` to disable link while swipping.
/* 3982 *|      * @protected
/* 3983 *|      * @param {HTMLElement} [target] - The target of the `click` event.
/* 3984 *|      */
/* 3985 */     Owl2.prototype.removeClick = function(target) {
/* 3986 */         this.drag.targetEl = target;
/* 3987 */         $(target).on('click.preventClick', this.e._preventClick);
/* 3988 */         // to make sure click is removed:
/* 3989 */         window.setTimeout(function() {
/* 3990 */             $(target).off('click.preventClick');
/* 3991 */         }, 300);
/* 3992 */     };
/* 3993 */ 
/* 3994 */     /**
/* 3995 *|      * Suppresses click event.
/* 3996 *|      * @protected
/* 3997 *|      * @param {Event} ev - The event arguments.
/* 3998 *|      */
/* 3999 */     Owl2.prototype.preventClick = function(ev) {
/* 4000 */         if (ev.preventDefault) {

/* owl.carousel.js */

/* 4001 */             ev.preventDefault();
/* 4002 */         } else {
/* 4003 */             ev.returnValue = false;
/* 4004 */         }
/* 4005 */         if (ev.stopPropagation) {
/* 4006 */             ev.stopPropagation();
/* 4007 */         }
/* 4008 */         $(ev.target).off('click.preventClick');
/* 4009 */     };
/* 4010 */ 
/* 4011 */     /**
/* 4012 *|      * Catches stage position while animate (only CSS3).
/* 4013 *|      * @protected
/* 4014 *|      * @returns
/* 4015 *|      */
/* 4016 */     Owl2.prototype.getTransformProperty = function() {
/* 4017 */         var transform, matrix3d;
/* 4018 */ 
/* 4019 */         transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
/* 4020 */         // var transform = this.$stage.css(this.vendorName + 'transform')
/* 4021 */         transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
/* 4022 */         matrix3d = transform.length === 16;
/* 4023 */ 
/* 4024 */         return matrix3d !== true ? transform[4] : transform[12];
/* 4025 */     };
/* 4026 */ 
/* 4027 */     /**
/* 4028 *|      * Gets absolute position of the closest item for a coordinate.
/* 4029 *|      * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
/* 4030 *|      * @protected
/* 4031 *|      * @param {Number} coordinate - The coordinate in pixel.
/* 4032 *|      * @return {Number} - The absolute position of the closest item.
/* 4033 *|      */
/* 4034 */     Owl2.prototype.closest = function(coordinate) {
/* 4035 */         var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();
/* 4036 */ 
/* 4037 */         if (!this.settings.freeDrag) {
/* 4038 */             // check closest item
/* 4039 */             $.each(coordinates, $.proxy(function(index, value) {
/* 4040 */                 if (coordinate > value - pull && coordinate < value + pull) {
/* 4041 */                     position = index;
/* 4042 */                 } else if (this.op(coordinate, '<', value)
/* 4043 */                     && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
/* 4044 */                     position = this.state.direction === 'left' ? index + 1 : index;
/* 4045 */                 }
/* 4046 */                 return position === -1;
/* 4047 */             }, this));
/* 4048 */         }
/* 4049 */ 
/* 4050 */         if (!this.settings.loop) {

/* owl.carousel.js */

/* 4051 */             // non loop boundries
/* 4052 */             if (this.op(coordinate, '>', coordinates[this.minimum()])) {
/* 4053 */                 position = coordinate = this.minimum();
/* 4054 */             } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
/* 4055 */                 position = coordinate = this.maximum();
/* 4056 */             }
/* 4057 */         }
/* 4058 */ 
/* 4059 */         return position;
/* 4060 */     };
/* 4061 */ 
/* 4062 */     /**
/* 4063 *|      * Animates the stage.
/* 4064 *|      * @public
/* 4065 *|      * @param {Number} coordinate - The coordinate in pixels.
/* 4066 *|      */
/* 4067 */     Owl2.prototype.animate = function(coordinate) {
/* 4068 */         this.trigger('translate');
/* 4069 */         this.state.inMotion = this.speed() > 0;
/* 4070 */ 
/* 4071 */         if (this.support3d) {
/* 4072 */             this.$stage.css({
/* 4073 */                 transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
/* 4074 */                 transition: (this.speed() / 1000) + 's'
/* 4075 */             });
/* 4076 */         } else if (this.state.isTouch) {
/* 4077 */             this.$stage.css({
/* 4078 */                 left: coordinate + 'px'
/* 4079 */             });
/* 4080 */         } else {
/* 4081 */             this.$stage.animate({
/* 4082 */                 left: coordinate
/* 4083 */             }, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
/* 4084 */                 if (this.state.inMotion) {
/* 4085 */                     this.transitionEnd();
/* 4086 */                 }
/* 4087 */             }, this));
/* 4088 */         }
/* 4089 */     };
/* 4090 */ 
/* 4091 */     /**
/* 4092 *|      * Sets the absolute position of the current item.
/* 4093 *|      * @public
/* 4094 *|      * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
/* 4095 *|      * @returns {Number} - The absolute position of the current item.
/* 4096 *|      */
/* 4097 */     Owl2.prototype.current = function(position) {
/* 4098 */         if (position === undefined) {
/* 4099 */             return this._current;
/* 4100 */         }

/* owl.carousel.js */

/* 4101 */ 
/* 4102 */         if (this._items.length === 0) {
/* 4103 */             return undefined;
/* 4104 */         }
/* 4105 */ 
/* 4106 */         position = this.normalize(position);
/* 4107 */ 
/* 4108 */         if (this._current !== position) {
/* 4109 */             var event = this.trigger('change', { property: { name: 'position', value: position } });
/* 4110 */ 
/* 4111 */             if (event.data !== undefined) {
/* 4112 */                 position = this.normalize(event.data);
/* 4113 */             }
/* 4114 */ 
/* 4115 */             this._current = position;
/* 4116 */ 
/* 4117 */             this.invalidate('position');
/* 4118 */ 
/* 4119 */             this.trigger('changed', { property: { name: 'position', value: this._current } });
/* 4120 */         }
/* 4121 */ 
/* 4122 */         return this._current;
/* 4123 */     };
/* 4124 */ 
/* 4125 */     /**
/* 4126 *|      * Invalidates the given part of the update routine.
/* 4127 *|      * @param {String} part - The part to invalidate.
/* 4128 *|      */
/* 4129 */     Owl2.prototype.invalidate = function(part) {
/* 4130 */         this._invalidated[part] = true;
/* 4131 */     }
/* 4132 */ 
/* 4133 */     /**
/* 4134 *|      * Resets the absolute position of the current item.
/* 4135 *|      * @public
/* 4136 *|      * @param {Number} position - The absolute position of the new item.
/* 4137 *|      */
/* 4138 */     Owl2.prototype.reset = function(position) {
/* 4139 */         position = this.normalize(position);
/* 4140 */ 
/* 4141 */         if (position === undefined) {
/* 4142 */             return;
/* 4143 */         }
/* 4144 */ 
/* 4145 */         this._speed = 0;
/* 4146 */         this._current = position;
/* 4147 */ 
/* 4148 */         this.suppress([ 'translate', 'translated' ]);
/* 4149 */ 
/* 4150 */         this.animate(this.coordinates(position));

/* owl.carousel.js */

/* 4151 */ 
/* 4152 */         this.release([ 'translate', 'translated' ]);
/* 4153 */     };
/* 4154 */ 
/* 4155 */     /**
/* 4156 *|      * Normalizes an absolute or a relative position for an item.
/* 4157 *|      * @public
/* 4158 *|      * @param {Number} position - The absolute or relative position to normalize.
/* 4159 *|      * @param {Boolean} [relative=false] - Whether the given position is relative or not.
/* 4160 *|      * @returns {Number} - The normalized position.
/* 4161 *|      */
/* 4162 */     Owl2.prototype.normalize = function(position, relative) {
/* 4163 */         var n = (relative ? this._items.length : this._items.length + this._clones.length);
/* 4164 */ 
/* 4165 */         if (!$.isNumeric(position) || n < 1) {
/* 4166 */             return undefined;
/* 4167 */         }
/* 4168 */ 
/* 4169 */         if (this._clones.length) {
/* 4170 */             position = ((position % n) + n) % n;
/* 4171 */         } else {
/* 4172 */             position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
/* 4173 */         }
/* 4174 */ 
/* 4175 */         return position;
/* 4176 */     };
/* 4177 */ 
/* 4178 */     /**
/* 4179 *|      * Converts an absolute position for an item into a relative position.
/* 4180 *|      * @public
/* 4181 *|      * @param {Number} position - The absolute position to convert.
/* 4182 *|      * @returns {Number} - The converted position.
/* 4183 *|      */
/* 4184 */     Owl2.prototype.relative = function(position) {
/* 4185 */         position = this.normalize(position);
/* 4186 */         position = position - this._clones.length / 2;
/* 4187 */         return this.normalize(position, true);
/* 4188 */     };
/* 4189 */ 
/* 4190 */     /**
/* 4191 *|      * Gets the maximum position for an item.
/* 4192 *|      * @public
/* 4193 *|      * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
/* 4194 *|      * @returns {Number}
/* 4195 *|      */
/* 4196 */     Owl2.prototype.maximum = function(relative) {
/* 4197 */         var maximum, width, i = 0, coordinate,
/* 4198 */             settings = this.settings;
/* 4199 */ 
/* 4200 */         if (relative) {

/* owl.carousel.js */

/* 4201 */             return this._items.length - 1;
/* 4202 */         }
/* 4203 */ 
/* 4204 */         if (!settings.loop && settings.center) {
/* 4205 */             maximum = this._items.length - 1;
/* 4206 */         } else if (!settings.loop && !settings.center) {
/* 4207 */             maximum = this._items.length - settings.items;
/* 4208 */         } else if (settings.loop || settings.center) {
/* 4209 */             maximum = this._items.length + settings.items;
/* 4210 */         } else if (settings.autoWidth || settings.merge) {
/* 4211 */             revert = settings.rtl ? 1 : -1;
/* 4212 */             width = this.$stage.width() - this.$element.width();
/* 4213 */             while (coordinate = this.coordinates(i)) {
/* 4214 */                 if (coordinate * revert >= width) {
/* 4215 */                     break;
/* 4216 */                 }
/* 4217 */                 maximum = ++i;
/* 4218 */             }
/* 4219 */         } else {
/* 4220 */             throw 'Can not detect maximum absolute position.'
/* 4221 */         }
/* 4222 */ 
/* 4223 */         return maximum;
/* 4224 */     };
/* 4225 */ 
/* 4226 */     /**
/* 4227 *|      * Gets the minimum position for an item.
/* 4228 *|      * @public
/* 4229 *|      * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
/* 4230 *|      * @returns {Number}
/* 4231 *|      */
/* 4232 */     Owl2.prototype.minimum = function(relative) {
/* 4233 */         if (relative) {
/* 4234 */             return 0;
/* 4235 */         }
/* 4236 */ 
/* 4237 */         return this._clones.length / 2;
/* 4238 */     };
/* 4239 */ 
/* 4240 */     /**
/* 4241 *|      * Gets an item at the specified relative position.
/* 4242 *|      * @public
/* 4243 *|      * @param {Number} [position] - The relative position of the item.
/* 4244 *|      * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
/* 4245 *|      */
/* 4246 */     Owl2.prototype.items = function(position) {
/* 4247 */         if (position === undefined) {
/* 4248 */             return this._items.slice();
/* 4249 */         }
/* 4250 */ 

/* owl.carousel.js */

/* 4251 */         position = this.normalize(position, true);
/* 4252 */         return this._items[position];
/* 4253 */     };
/* 4254 */ 
/* 4255 */     /**
/* 4256 *|      * Gets an item at the specified relative position.
/* 4257 *|      * @public
/* 4258 *|      * @param {Number} [position] - The relative position of the item.
/* 4259 *|      * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
/* 4260 *|      */
/* 4261 */     Owl2.prototype.mergers = function(position) {
/* 4262 */         if (position === undefined) {
/* 4263 */             return this._mergers.slice();
/* 4264 */         }
/* 4265 */ 
/* 4266 */         position = this.normalize(position, true);
/* 4267 */         return this._mergers[position];
/* 4268 */     };
/* 4269 */ 
/* 4270 */     /**
/* 4271 *|      * Gets the absolute positions of clones for an item.
/* 4272 *|      * @public
/* 4273 *|      * @param {Number} [position] - The relative position of the item.
/* 4274 *|      * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
/* 4275 *|      */
/* 4276 */     Owl2.prototype.clones = function(position) {
/* 4277 */         var odd = this._clones.length / 2,
/* 4278 */             even = odd + this._items.length,
/* 4279 */             map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
/* 4280 */ 
/* 4281 */         if (position === undefined) {
/* 4282 */             return $.map(this._clones, function(v, i) { return map(i) });
/* 4283 */         }
/* 4284 */ 
/* 4285 */         return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
/* 4286 */     };
/* 4287 */ 
/* 4288 */     /**
/* 4289 *|      * Sets the current animation speed.
/* 4290 *|      * @public
/* 4291 *|      * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
/* 4292 *|      * @returns {Number} - The current animation speed in milliseconds.
/* 4293 *|      */
/* 4294 */     Owl2.prototype.speed = function(speed) {
/* 4295 */         if (speed !== undefined) {
/* 4296 */             this._speed = speed;
/* 4297 */         }
/* 4298 */ 
/* 4299 */         return this._speed;
/* 4300 */     };

/* owl.carousel.js */

/* 4301 */ 
/* 4302 */     /**
/* 4303 *|      * Gets the coordinate of an item.
/* 4304 *|      * @todo The name of this method is missleanding.
/* 4305 *|      * @public
/* 4306 *|      * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
/* 4307 *|      * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
/* 4308 *|      */
/* 4309 */     Owl2.prototype.coordinates = function(position) {
/* 4310 */         var coordinate = null;
/* 4311 */ 
/* 4312 */         if (position === undefined) {
/* 4313 */             return $.map(this._coordinates, $.proxy(function(coordinate, index) {
/* 4314 */                 return this.coordinates(index);
/* 4315 */             }, this));
/* 4316 */         }
/* 4317 */ 
/* 4318 */         if (this.settings.center) {
/* 4319 */             coordinate = this._coordinates[position];
/* 4320 */             coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
/* 4321 */         } else {
/* 4322 */             coordinate = this._coordinates[position - 1] || 0;
/* 4323 */         }
/* 4324 */ 
/* 4325 */         return coordinate;
/* 4326 */     };
/* 4327 */ 
/* 4328 */     /**
/* 4329 *|      * Calculates the speed for a translation.
/* 4330 *|      * @protected
/* 4331 *|      * @param {Number} from - The absolute position of the start item.
/* 4332 *|      * @param {Number} to - The absolute position of the target item.
/* 4333 *|      * @param {Number} [factor=undefined] - The time factor in milliseconds.
/* 4334 *|      * @returns {Number} - The time in milliseconds for the translation.
/* 4335 *|      */
/* 4336 */     Owl2.prototype.duration = function(from, to, factor) {
/* 4337 */         return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
/* 4338 */     };
/* 4339 */ 
/* 4340 */     /**
/* 4341 *|      * Slides to the specified item.
/* 4342 *|      * @public
/* 4343 *|      * @param {Number} position - The position of the item.
/* 4344 *|      * @param {Number} [speed] - The time in milliseconds for the transition.
/* 4345 *|      */
/* 4346 */     Owl2.prototype.to = function(position, speed) {
/* 4347 */         if (this.settings.loop) {
/* 4348 */             var distance = position - this.relative(this.current()),
/* 4349 */                 revert = this.current(),
/* 4350 */                 before = this.current(),

/* owl.carousel.js */

/* 4351 */                 after = this.current() + distance,
/* 4352 */                 direction = before - after < 0 ? true : false,
/* 4353 */                 items = this._clones.length + this._items.length;
/* 4354 */ 
/* 4355 */             if (after < this.settings.items && direction === false) {
/* 4356 */                 revert = before + this._items.length;
/* 4357 */                 this.reset(revert);
/* 4358 */             } else if (after >= items - this.settings.items && direction === true) {
/* 4359 */                 revert = before - this._items.length;
/* 4360 */                 this.reset(revert);
/* 4361 */             }
/* 4362 */             window.clearTimeout(this.e._goToLoop);
/* 4363 */             this.e._goToLoop = window.setTimeout($.proxy(function() {
/* 4364 */                 this.speed(this.duration(this.current(), revert + distance, speed));
/* 4365 */                 this.current(revert + distance);
/* 4366 */                 this.update();
/* 4367 */             }, this), 30);
/* 4368 */         } else {
/* 4369 */             this.speed(this.duration(this.current(), position, speed));
/* 4370 */             this.current(position);
/* 4371 */             this.update();
/* 4372 */         }
/* 4373 */     };
/* 4374 */ 
/* 4375 */     /**
/* 4376 *|      * Slides to the next item.
/* 4377 *|      * @public
/* 4378 *|      * @param {Number} [speed] - The time in milliseconds for the transition.
/* 4379 *|      */
/* 4380 */     Owl2.prototype.next = function(speed) {
/* 4381 */         speed = speed || false;
/* 4382 */         this.to(this.relative(this.current()) + 1, speed);
/* 4383 */     };
/* 4384 */ 
/* 4385 */     /**
/* 4386 *|      * Slides to the previous item.
/* 4387 *|      * @public
/* 4388 *|      * @param {Number} [speed] - The time in milliseconds for the transition.
/* 4389 *|      */
/* 4390 */     Owl2.prototype.prev = function(speed) {
/* 4391 */         speed = speed || false;
/* 4392 */         this.to(this.relative(this.current()) - 1, speed);
/* 4393 */     };
/* 4394 */ 
/* 4395 */     /**
/* 4396 *|      * Handles the end of an animation.
/* 4397 *|      * @protected
/* 4398 *|      * @param {Event} event - The event arguments.
/* 4399 *|      */
/* 4400 */     Owl2.prototype.transitionEnd = function(event) {

/* owl.carousel.js */

/* 4401 */ 
/* 4402 */         // if css2 animation then event object is undefined
/* 4403 */         if (event !== undefined) {
/* 4404 */             event.stopPropagation();
/* 4405 */ 
/* 4406 */             // Catch only owl2-stage transitionEnd event
/* 4407 */             if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
/* 4408 */                 return false;
/* 4409 */             }
/* 4410 */         }
/* 4411 */ 
/* 4412 */         this.state.inMotion = false;
/* 4413 */         this.trigger('translated');
/* 4414 */     };
/* 4415 */ 
/* 4416 */     /**
/* 4417 *|      * Gets viewport width.
/* 4418 *|      * @protected
/* 4419 *|      * @return {Number} - The width in pixel.
/* 4420 *|      */
/* 4421 */     Owl2.prototype.viewport = function() {
/* 4422 */         var width;
/* 4423 */         if (this.options.responsiveBaseElement !== window) {
/* 4424 */             width = $(this.options.responsiveBaseElement).width();
/* 4425 */         } else if (window.innerWidth) {
/* 4426 */             width = window.innerWidth;
/* 4427 */         } else if (document.documentElement && document.documentElement.clientWidth) {
/* 4428 */             width = document.documentElement.clientWidth;
/* 4429 */         } else {
/* 4430 */             throw 'Can not detect viewport width.';
/* 4431 */         }
/* 4432 */         return width;
/* 4433 */     };
/* 4434 */ 
/* 4435 */     /**
/* 4436 *|      * Replaces the current content.
/* 4437 *|      * @public
/* 4438 *|      * @param {HTMLElement|jQuery|String} content - The new content.
/* 4439 *|      */
/* 4440 */     Owl2.prototype.replace = function(content) {
/* 4441 */         this.$stage.empty();
/* 4442 */         this._items = [];
/* 4443 */ 
/* 4444 */         if (content) {
/* 4445 */             content = (content instanceof jQuery) ? content : $(content);
/* 4446 */         }
/* 4447 */ 
/* 4448 */         if (this.settings.nestedItemSelector) {
/* 4449 */             content = content.find('.' + this.settings.nestedItemSelector);
/* 4450 */         }

/* owl.carousel.js */

/* 4451 */ 
/* 4452 */         content.filter(function() {
/* 4453 */             return this.nodeType === 1;
/* 4454 */         }).each($.proxy(function(index, item) {
/* 4455 */             item = this.prepare(item);
/* 4456 */             this.$stage.append(item);
/* 4457 */             this._items.push(item);
/* 4458 */             this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
/* 4459 */         }, this));
/* 4460 */ 
/* 4461 */         this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
/* 4462 */ 
/* 4463 */         this.invalidate('items');
/* 4464 */     };
/* 4465 */ 
/* 4466 */     /**
/* 4467 *|      * Adds an item.
/* 4468 *|      * @todo Use `item` instead of `content` for the event arguments.
/* 4469 *|      * @public
/* 4470 *|      * @param {HTMLElement|jQuery|String} content - The item content to add.
/* 4471 *|      * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
/* 4472 *|      */
/* 4473 */     Owl2.prototype.add = function(content, position) {
/* 4474 */         position = position === undefined ? this._items.length : this.normalize(position, true);
/* 4475 */ 
/* 4476 */         this.trigger('add', { content: content, position: position });
/* 4477 */ 
/* 4478 */         if (this._items.length === 0 || position === this._items.length) {
/* 4479 */             this.$stage.append(content);
/* 4480 */             this._items.push(content);
/* 4481 */             this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
/* 4482 */         } else {
/* 4483 */             this._items[position].before(content);
/* 4484 */             this._items.splice(position, 0, content);
/* 4485 */             this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
/* 4486 */         }
/* 4487 */ 
/* 4488 */         this.invalidate('items');
/* 4489 */ 
/* 4490 */         this.trigger('added', { content: content, position: position });
/* 4491 */     };
/* 4492 */ 
/* 4493 */     /**
/* 4494 *|      * Removes an item by its position.
/* 4495 *|      * @todo Use `item` instead of `content` for the event arguments.
/* 4496 *|      * @public
/* 4497 *|      * @param {Number} position - The relative position of the item to remove.
/* 4498 *|      */
/* 4499 */     Owl2.prototype.remove = function(position) {
/* 4500 */         position = this.normalize(position, true);

/* owl.carousel.js */

/* 4501 */ 
/* 4502 */         if (position === undefined) {
/* 4503 */             return;
/* 4504 */         }
/* 4505 */ 
/* 4506 */         this.trigger('remove', { content: this._items[position], position: position });
/* 4507 */ 
/* 4508 */         this._items[position].remove();
/* 4509 */         this._items.splice(position, 1);
/* 4510 */         this._mergers.splice(position, 1);
/* 4511 */ 
/* 4512 */         this.invalidate('items');
/* 4513 */ 
/* 4514 */         this.trigger('removed', { content: null, position: position });
/* 4515 */     };
/* 4516 */ 
/* 4517 */     /**
/* 4518 *|      * Adds triggerable events.
/* 4519 *|      * @protected
/* 4520 *|      */
/* 4521 */     Owl2.prototype.addTriggerableEvents = function() {
/* 4522 */         var handler = $.proxy(function(callback, event) {
/* 4523 */             return $.proxy(function(e) {
/* 4524 */                 if (e.relatedTarget !== this) {
/* 4525 */                     this.suppress([ event ]);
/* 4526 */                     callback.apply(this, [].slice.call(arguments, 1));
/* 4527 */                     this.release([ event ]);
/* 4528 */                 }
/* 4529 */             }, this);
/* 4530 */         }, this);
/* 4531 */ 
/* 4532 */         $.each({
/* 4533 */             'next': this.next,
/* 4534 */             'prev': this.prev,
/* 4535 */             'to': this.to,
/* 4536 */             'destroy': this.destroy,
/* 4537 */             'refresh': this.refresh,
/* 4538 */             'replace': this.replace,
/* 4539 */             'add': this.add,
/* 4540 */             'remove': this.remove
/* 4541 */         }, $.proxy(function(event, callback) {
/* 4542 */             this.$element.on(event + '.owl.carousel2', handler(callback, event + '.owl.carousel2'));
/* 4543 */         }, this));
/* 4544 */ 
/* 4545 */     };
/* 4546 */ 
/* 4547 */     /**
/* 4548 *|      * Watches the visibility of the carousel2 element.
/* 4549 *|      * @protected
/* 4550 *|      */

/* owl.carousel.js */

/* 4551 */     Owl2.prototype.watchVisibility = function() {
/* 4552 */ 
/* 4553 */         // test on zepto
/* 4554 */         if (!isElVisible(this.$element.get(0))) {
/* 4555 */             this.$element.addClass('owl2-hidden');
/* 4556 */             window.clearInterval(this.e._checkVisibile);
/* 4557 */             this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
/* 4558 */         }
/* 4559 */ 
/* 4560 */         function isElVisible(el) {
/* 4561 */             return el.offsetWidth > 0 && el.offsetHeight > 0;
/* 4562 */         }
/* 4563 */ 
/* 4564 */         function checkVisible() {
/* 4565 */             if (isElVisible(this.$element.get(0))) {
/* 4566 */                 this.$element.removeClass('owl2-hidden');
/* 4567 */                 this.refresh();
/* 4568 */                 window.clearInterval(this.e._checkVisibile);
/* 4569 */             }
/* 4570 */         }
/* 4571 */     };
/* 4572 */ 
/* 4573 */     /**
/* 4574 *|      * Preloads images with auto width.
/* 4575 *|      * @protected
/* 4576 *|      * @todo Still to test
/* 4577 *|      */
/* 4578 */     Owl2.prototype.preloadAutoWidthImages = function(imgs) {
/* 4579 */         var loaded, that, $el, img;
/* 4580 */ 
/* 4581 */         loaded = 0;
/* 4582 */         that = this;
/* 4583 */         imgs.each(function(i, el) {
/* 4584 */             $el = $(el);
/* 4585 */             img = new Image();
/* 4586 */ 
/* 4587 */             img.onload = function() {
/* 4588 */                 loaded++;
/* 4589 */                 $el.attr('src', img.src);
/* 4590 */                 $el.css('opacity', 1);
/* 4591 */                 if (loaded >= imgs.length) {
/* 4592 */                     that.state.imagesLoaded = true;
/* 4593 */                     that.initialize();
/* 4594 */                 }
/* 4595 */             };
/* 4596 */ 
/* 4597 */             img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
/* 4598 */         });
/* 4599 */     };
/* 4600 */ 

/* owl.carousel.js */

/* 4601 */     /**
/* 4602 *|      * Destroys the carousel2.
/* 4603 *|      * @public
/* 4604 *|      */
/* 4605 */     Owl2.prototype.destroy = function() {
/* 4606 */ 
/* 4607 */         if (this.$element.hasClass(this.settings.themeClass)) {
/* 4608 */             this.$element.removeClass(this.settings.themeClass);
/* 4609 */         }
/* 4610 */ 
/* 4611 */         if (this.settings.responsive !== false) {
/* 4612 */             $(window).off('resize.owl.carousel2');
/* 4613 */         }
/* 4614 */ 
/* 4615 */         if (this.transitionEndVendor) {
/* 4616 */             this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
/* 4617 */         }
/* 4618 */ 
/* 4619 */         for ( var i in this._plugins) {
/* 4620 */             this._plugins[i].destroy();
/* 4621 */         }
/* 4622 */ 
/* 4623 */         if (this.settings.mouseDrag || this.settings.touchDrag) {
/* 4624 */             this.$stage.off('mousedown touchstart touchcancel');
/* 4625 */             $(document).off('.owl.dragEvents');
/* 4626 */             this.$stage.get(0).onselectstart = function() {};
/* 4627 */             this.$stage.off('dragstart', function() { return false });
/* 4628 */         }
/* 4629 */ 
/* 4630 */         // remove event handlers in the ".owl.carousel2" namespace
/* 4631 */         this.$element.off('.owl');
/* 4632 */ 
/* 4633 */         this.$stage.children('.cloned').remove();
/* 4634 */         this.e = null;
/* 4635 */         this.$element.removeData('owlCarousel2');
/* 4636 */ 
/* 4637 */         this.$stage.children().contents().unwrap();
/* 4638 */         this.$stage.children().unwrap();
/* 4639 */         this.$stage.unwrap();
/* 4640 */     };
/* 4641 */ 
/* 4642 */     /**
/* 4643 *|      * Operators to calculate right-to-left and left-to-right.
/* 4644 *|      * @protected
/* 4645 *|      * @param {Number} [a] - The left side operand.
/* 4646 *|      * @param {String} [o] - The operator.
/* 4647 *|      * @param {Number} [b] - The right side operand.
/* 4648 *|      */
/* 4649 */     Owl2.prototype.op = function(a, o, b) {
/* 4650 */         var rtl = this.settings.rtl;

/* owl.carousel.js */

/* 4651 */         switch (o) {
/* 4652 */             case '<':
/* 4653 */                 return rtl ? a > b : a < b;
/* 4654 */             case '>':
/* 4655 */                 return rtl ? a < b : a > b;
/* 4656 */             case '>=':
/* 4657 */                 return rtl ? a <= b : a >= b;
/* 4658 */             case '<=':
/* 4659 */                 return rtl ? a >= b : a <= b;
/* 4660 */             default:
/* 4661 */                 break;
/* 4662 */         }
/* 4663 */     };
/* 4664 */ 
/* 4665 */     /**
/* 4666 *|      * Attaches to an internal event.
/* 4667 *|      * @protected
/* 4668 *|      * @param {HTMLElement} element - The event source.
/* 4669 *|      * @param {String} event - The event name.
/* 4670 *|      * @param {Function} listener - The event handler to attach.
/* 4671 *|      * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
/* 4672 *|      */
/* 4673 */     Owl2.prototype.on = function(element, event, listener, capture) {
/* 4674 */         if (element.addEventListener) {
/* 4675 */             element.addEventListener(event, listener, capture);
/* 4676 */         } else if (element.attachEvent) {
/* 4677 */             element.attachEvent('on' + event, listener);
/* 4678 */         }
/* 4679 */     };
/* 4680 */ 
/* 4681 */     /**
/* 4682 *|      * Detaches from an internal event.
/* 4683 *|      * @protected
/* 4684 *|      * @param {HTMLElement} element - The event source.
/* 4685 *|      * @param {String} event - The event name.
/* 4686 *|      * @param {Function} listener - The attached event handler to detach.
/* 4687 *|      * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
/* 4688 *|      */
/* 4689 */     Owl2.prototype.off = function(element, event, listener, capture) {
/* 4690 */         if (element.removeEventListener) {
/* 4691 */             element.removeEventListener(event, listener, capture);
/* 4692 */         } else if (element.detachEvent) {
/* 4693 */             element.detachEvent('on' + event, listener);
/* 4694 */         }
/* 4695 */     };
/* 4696 */ 
/* 4697 */     /**
/* 4698 *|      * Triggers an public event.
/* 4699 *|      * @protected
/* 4700 *|      * @param {String} name - The event name.

/* owl.carousel.js */

/* 4701 *|      * @param {*} [data=null] - The event data.
/* 4702 *|      * @param {String} [namespace=.owl.carousel2] - The event namespace.
/* 4703 *|      * @returns {Event} - The event arguments.
/* 4704 *|      */
/* 4705 */     Owl2.prototype.trigger = function(name, data, namespace) {
/* 4706 */         var status = {
/* 4707 */             item: { count: this._items.length, index: this.current() }
/* 4708 */         }, handler = $.camelCase(
/* 4709 */             $.grep([ 'on', name, namespace ], function(v) { return v })
/* 4710 */                 .join('-').toLowerCase()
/* 4711 */         ), event = $.Event(
/* 4712 */             [ name, 'owl', namespace || 'carousel2' ].join('.').toLowerCase(),
/* 4713 */             $.extend({ relatedTarget: this }, status, data)
/* 4714 */         );
/* 4715 */ 
/* 4716 */         if (!this._supress[name]) {
/* 4717 */             $.each(this._plugins, function(name, plugin) {
/* 4718 */                 if (plugin.onTrigger) {
/* 4719 */                     plugin.onTrigger(event);
/* 4720 */                 }
/* 4721 */             });
/* 4722 */ 
/* 4723 */             this.$element.trigger(event);
/* 4724 */ 
/* 4725 */             if (this.settings && typeof this.settings[handler] === 'function') {
/* 4726 */                 this.settings[handler].apply(this, event);
/* 4727 */             }
/* 4728 */         }
/* 4729 */ 
/* 4730 */         return event;
/* 4731 */     };
/* 4732 */ 
/* 4733 */     /**
/* 4734 *|      * Suppresses events.
/* 4735 *|      * @protected
/* 4736 *|      * @param {Array.<String>} events - The events to suppress.
/* 4737 *|      */
/* 4738 */     Owl2.prototype.suppress = function(events) {
/* 4739 */         $.each(events, $.proxy(function(index, event) {
/* 4740 */             this._supress[event] = true;
/* 4741 */         }, this));
/* 4742 */     }
/* 4743 */ 
/* 4744 */     /**
/* 4745 *|      * Releases suppressed events.
/* 4746 *|      * @protected
/* 4747 *|      * @param {Array.<String>} events - The events to release.
/* 4748 *|      */
/* 4749 */     Owl2.prototype.release = function(events) {
/* 4750 */         $.each(events, $.proxy(function(index, event) {

/* owl.carousel.js */

/* 4751 */             delete this._supress[event];
/* 4752 */         }, this));
/* 4753 */     }
/* 4754 */ 
/* 4755 */     /**
/* 4756 *|      * Checks the availability of some browser features.
/* 4757 *|      * @protected
/* 4758 *|      */
/* 4759 */     Owl2.prototype.browserSupport = function() {
/* 4760 */         this.support3d = isPerspective();
/* 4761 */ 
/* 4762 */         if (this.support3d) {
/* 4763 */             this.transformVendor = isTransform();
/* 4764 */ 
/* 4765 */             // take transitionend event name by detecting transition
/* 4766 */             var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
/* 4767 */             this.transitionEndVendor = endVendors[isTransition()];
/* 4768 */ 
/* 4769 */             // take vendor name from transform name
/* 4770 */             this.vendorName = this.transformVendor.replace(/Transform/i, '');
/* 4771 */             this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
/* 4772 */         }
/* 4773 */ 
/* 4774 */         this.state.orientation = window.orientation;
/* 4775 */     };
/* 4776 */ 
/* 4777 */     /**
/* 4778 *|      * Get touch/drag coordinats.
/* 4779 *|      * @private
/* 4780 *|      * @param {event} - mousedown/touchstart event
/* 4781 *|      * @returns {object} - Contains X and Y of current mouse/touch position
/* 4782 *|      */
/* 4783 */ 
/* 4784 */     function getTouches(event) {
/* 4785 */         if (event.touches !== undefined) {
/* 4786 */             return {
/* 4787 */                 x: event.touches[0].pageX,
/* 4788 */                 y: event.touches[0].pageY
/* 4789 */             };
/* 4790 */         }
/* 4791 */ 
/* 4792 */         if (event.touches === undefined) {
/* 4793 */             if (event.pageX !== undefined) {
/* 4794 */                 return {
/* 4795 */                     x: event.pageX,
/* 4796 */                     y: event.pageY
/* 4797 */                 };
/* 4798 */             }
/* 4799 */ 
/* 4800 */             if (event.pageX === undefined) {

/* owl.carousel.js */

/* 4801 */                 return {
/* 4802 */                     x: event.clientX,
/* 4803 */                     y: event.clientY
/* 4804 */                 };
/* 4805 */             }
/* 4806 */         }
/* 4807 */     }
/* 4808 */ 
/* 4809 */     /**
/* 4810 *|      * Checks for CSS support.
/* 4811 *|      * @private
/* 4812 *|      * @param {Array} array - The CSS properties to check for.
/* 4813 *|      * @returns {Array} - Contains the supported CSS property name and its index or `false`.
/* 4814 *|      */
/* 4815 */     function isStyleSupported(array) {
/* 4816 */         var p, s, fake = document.createElement('div'), list = array;
/* 4817 */         for (p in list) {
/* 4818 */             s = list[p];
/* 4819 */             if (typeof fake.style[s] !== 'undefined') {
/* 4820 */                 fake = null;
/* 4821 */                 return [ s, p ];
/* 4822 */             }
/* 4823 */         }
/* 4824 */         return [ false ];
/* 4825 */     }
/* 4826 */ 
/* 4827 */     /**
/* 4828 *|      * Checks for CSS transition support.
/* 4829 *|      * @private
/* 4830 *|      * @todo Realy bad design
/* 4831 *|      * @returns {Number}
/* 4832 *|      */
/* 4833 */     function isTransition() {
/* 4834 */         return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
/* 4835 */     }
/* 4836 */ 
/* 4837 */     /**
/* 4838 *|      * Checks for CSS transform support.
/* 4839 *|      * @private
/* 4840 *|      * @returns {String} The supported property name or false.
/* 4841 *|      */
/* 4842 */     function isTransform() {
/* 4843 */         return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
/* 4844 */     }
/* 4845 */ 
/* 4846 */     /**
/* 4847 *|      * Checks for CSS perspective support.
/* 4848 *|      * @private
/* 4849 *|      * @returns {String} The supported property name or false.
/* 4850 *|      */

/* owl.carousel.js */

/* 4851 */     function isPerspective() {
/* 4852 */         return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
/* 4853 */     }
/* 4854 */ 
/* 4855 */     /**
/* 4856 *|      * Checks wether touch is supported or not.
/* 4857 *|      * @private
/* 4858 *|      * @returns {Boolean}
/* 4859 *|      */
/* 4860 */     function isTouchSupport() {
/* 4861 */         return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
/* 4862 */     }
/* 4863 */ 
/* 4864 */     /**
/* 4865 *|      * Checks wether touch is supported or not for IE.
/* 4866 *|      * @private
/* 4867 *|      * @returns {Boolean}
/* 4868 *|      */
/* 4869 */     function isTouchSupportIE() {
/* 4870 */         return window.navigator.msPointerEnabled;
/* 4871 */     }
/* 4872 */ 
/* 4873 */     /**
/* 4874 *|      * The jQuery Plugin for the Owl2 Carousel
/* 4875 *|      * @public
/* 4876 *|      */
/* 4877 */     $.fn.owlCarousel2 = function(options) {
/* 4878 */         return this.each(function() {
/* 4879 */             if (!$(this).data('owlCarousel2')) {
/* 4880 */                 $(this).data('owlCarousel2', new Owl2(this, options));
/* 4881 */             }
/* 4882 */         });
/* 4883 */     };
/* 4884 */ 
/* 4885 */     /**
/* 4886 *|      * The constructor for the jQuery Plugin
/* 4887 *|      * @public
/* 4888 *|      */
/* 4889 */     $.fn.owlCarousel2.Constructor = Owl2;
/* 4890 */ 
/* 4891 */ })(window.Zepto || window.jQuery, window, document);
/* 4892 */ 
/* 4893 */ /**
/* 4894 *|  * Lazy Plugin
/* 4895 *|  * @version 2.0.0
/* 4896 *|  * @author Bartosz Wojciechowski
/* 4897 *|  * @license The MIT License (MIT)
/* 4898 *|  */
/* 4899 */ ;(function($, window, document, undefined) {
/* 4900 */ 

/* owl.carousel.js */

/* 4901 */     /**
/* 4902 *|      * Creates the lazy plugin.
/* 4903 *|      * @class The Lazy Plugin
/* 4904 *|      * @param {Owl2} carousel2 - The Owl2 Carousel
/* 4905 *|      */
/* 4906 */     var Lazy = function(carousel2) {
/* 4907 */ 
/* 4908 */         /**
/* 4909 *|          * Reference to the core.
/* 4910 *|          * @protected
/* 4911 *|          * @type {Owl2}
/* 4912 *|          */
/* 4913 */         this._core = carousel2;
/* 4914 */ 
/* 4915 */         /**
/* 4916 *|          * Already loaded items.
/* 4917 *|          * @protected
/* 4918 *|          * @type {Array.<jQuery>}
/* 4919 *|          */
/* 4920 */         this._loaded = [];
/* 4921 */ 
/* 4922 */         /**
/* 4923 *|          * Event handlers.
/* 4924 *|          * @protected
/* 4925 *|          * @type {Object}
/* 4926 *|          */
/* 4927 */         this._handlers = {
/* 4928 */             'initialized.owl.carousel2 change.owl.carousel2': $.proxy(function(e) {
/* 4929 */                 if (!e.namespace) {
/* 4930 */                     return;
/* 4931 */                 }
/* 4932 */ 
/* 4933 */                 if (!this._core.settings || !this._core.settings.lazyLoad) {
/* 4934 */                     return;
/* 4935 */                 }
/* 4936 */ 
/* 4937 */                 if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
/* 4938 */                     var settings = this._core.settings,
/* 4939 */                         n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
/* 4940 */                         i = ((settings.center && n * -1) || 0),
/* 4941 */                         position = ((e.property && e.property.value) || this._core.current()) + i,
/* 4942 */                         clones = this._core.clones().length,
/* 4943 */                         load = $.proxy(function(i, v) { this.load(v) }, this);
/* 4944 */ 
/* 4945 */                     while (i++ < n) {
/* 4946 */                         this.load(clones / 2 + this._core.relative(position));
/* 4947 */                         clones && $.each(this._core.clones(this._core.relative(position++)), load);
/* 4948 */                     }
/* 4949 */                 }
/* 4950 */             }, this)

/* owl.carousel.js */

/* 4951 */         };
/* 4952 */ 
/* 4953 */         // set the default options
/* 4954 */         this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
/* 4955 */ 
/* 4956 */         // register event handler
/* 4957 */         this._core.$element.on(this._handlers);
/* 4958 */     }
/* 4959 */ 
/* 4960 */     /**
/* 4961 *|      * Default options.
/* 4962 *|      * @public
/* 4963 *|      */
/* 4964 */     Lazy.Defaults = {
/* 4965 */         lazyLoad: false
/* 4966 */     }
/* 4967 */ 
/* 4968 */     /**
/* 4969 *|      * Loads all resources of an item at the specified position.
/* 4970 *|      * @param {Number} position - The absolute position of the item.
/* 4971 *|      * @protected
/* 4972 *|      */
/* 4973 */     Lazy.prototype.load = function(position) {
/* 4974 */         var $item = this._core.$stage.children().eq(position),
/* 4975 */             $elements = $item && $item.find('.owl2-lazy');
/* 4976 */ 
/* 4977 */         if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
/* 4978 */             return;
/* 4979 */         }
/* 4980 */ 
/* 4981 */         $elements.each($.proxy(function(index, element) {
/* 4982 */             var $element = $(element), image,
/* 4983 */                 url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
/* 4984 */ 
/* 4985 */             this._core.trigger('load', { element: $element, url: url }, 'lazy');
/* 4986 */ 
/* 4987 */             if ($element.is('img')) {
/* 4988 */                 $element.one('load.owl.lazy', $.proxy(function() {
/* 4989 */                     $element.css('opacity', 1);
/* 4990 */                     this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
/* 4991 */                 }, this)).attr('src', url);
/* 4992 */             } else {
/* 4993 */                 image = new Image();
/* 4994 */                 image.onload = $.proxy(function() {
/* 4995 */                     $element.css({
/* 4996 */                         'background-image': 'url(' + url + ')',
/* 4997 */                         'opacity': '1'
/* 4998 */                     });
/* 4999 */                     this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
/* 5000 */                 }, this);

/* owl.carousel.js */

/* 5001 */                 image.src = url;
/* 5002 */             }
/* 5003 */         }, this));
/* 5004 */ 
/* 5005 */         this._loaded.push($item.get(0));
/* 5006 */     }
/* 5007 */ 
/* 5008 */     /**
/* 5009 *|      * Destroys the plugin.
/* 5010 *|      * @public
/* 5011 *|      */
/* 5012 */     Lazy.prototype.destroy = function() {
/* 5013 */         var handler, property;
/* 5014 */ 
/* 5015 */         for (handler in this.handlers) {
/* 5016 */             this._core.$element.off(handler, this.handlers[handler]);
/* 5017 */         }
/* 5018 */         for (property in Object.getOwnPropertyNames(this)) {
/* 5019 */             typeof this[property] != 'function' && (this[property] = null);
/* 5020 */         }
/* 5021 */     }
/* 5022 */ 
/* 5023 */     $.fn.owlCarousel2.Constructor.Plugins.Lazy = Lazy;
/* 5024 */ 
/* 5025 */ })(window.Zepto || window.jQuery, window, document);
/* 5026 */ 
/* 5027 */ /**
/* 5028 *|  * AutoHeight Plugin
/* 5029 *|  * @version 2.0.0
/* 5030 *|  * @author Bartosz Wojciechowski
/* 5031 *|  * @license The MIT License (MIT)
/* 5032 *|  */
/* 5033 */ ;(function($, window, document, undefined) {
/* 5034 */ 
/* 5035 */     /**
/* 5036 *|      * Creates the auto height plugin.
/* 5037 *|      * @class The Auto Height Plugin
/* 5038 *|      * @param {Owl2} carousel2 - The Owl2 Carousel
/* 5039 *|      */
/* 5040 */     var AutoHeight = function(carousel2) {
/* 5041 */         /**
/* 5042 *|          * Reference to the core.
/* 5043 *|          * @protected
/* 5044 *|          * @type {Owl2}
/* 5045 *|          */
/* 5046 */         this._core = carousel2;
/* 5047 */ 
/* 5048 */         /**
/* 5049 *|          * All event handlers.
/* 5050 *|          * @protected

/* owl.carousel.js */

/* 5051 *|          * @type {Object}
/* 5052 *|          */
/* 5053 */         this._handlers = {
/* 5054 */             'initialized.owl.carousel2': $.proxy(function() {
/* 5055 */                 if (this._core.settings.autoHeight) {
/* 5056 */                     this.update();
/* 5057 */                 }
/* 5058 */             }, this),
/* 5059 */             'changed.owl.carousel2': $.proxy(function(e) {
/* 5060 */                 if (this._core.settings.autoHeight && e.property.name == 'position'){
/* 5061 */                     this.update();
/* 5062 */                 }
/* 5063 */             }, this),
/* 5064 */             'loaded.owl.lazy': $.proxy(function(e) {
/* 5065 */                 if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
/* 5066 */                     === this._core.$stage.children().eq(this._core.current())) {
/* 5067 */                     this.update();
/* 5068 */                 }
/* 5069 */             }, this)
/* 5070 */         };
/* 5071 */ 
/* 5072 */         // set default options
/* 5073 */         this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
/* 5074 */ 
/* 5075 */         // register event handlers
/* 5076 */         this._core.$element.on(this._handlers);
/* 5077 */     };
/* 5078 */ 
/* 5079 */     /**
/* 5080 *|      * Default options.
/* 5081 *|      * @public
/* 5082 *|      */
/* 5083 */     AutoHeight.Defaults = {
/* 5084 */         autoHeight: false,
/* 5085 */         autoHeightClass: 'owl2-height'
/* 5086 */     };
/* 5087 */ 
/* 5088 */     /**
/* 5089 *|      * Updates the view.
/* 5090 *|      */
/* 5091 */     AutoHeight.prototype.update = function() {
/* 5092 */         this._core.$stage.parent()
/* 5093 */             .height(this._core.$stage.children().eq(this._core.current()).height())
/* 5094 */             .addClass(this._core.settings.autoHeightClass);
/* 5095 */     };
/* 5096 */ 
/* 5097 */     AutoHeight.prototype.destroy = function() {
/* 5098 */         var handler, property;
/* 5099 */ 
/* 5100 */         for (handler in this._handlers) {

/* owl.carousel.js */

/* 5101 */             this._core.$element.off(handler, this._handlers[handler]);
/* 5102 */         }
/* 5103 */         for (property in Object.getOwnPropertyNames(this)) {
/* 5104 */             typeof this[property] != 'function' && (this[property] = null);
/* 5105 */         }
/* 5106 */     };
/* 5107 */ 
/* 5108 */     $.fn.owlCarousel2.Constructor.Plugins.AutoHeight = AutoHeight;
/* 5109 */ 
/* 5110 */ })(window.Zepto || window.jQuery, window, document);
/* 5111 */ 
/* 5112 */ /**
/* 5113 *|  * Video Plugin
/* 5114 *|  * @version 2.0.0
/* 5115 *|  * @author Bartosz Wojciechowski
/* 5116 *|  * @license The MIT License (MIT)
/* 5117 *|  */
/* 5118 */ ;(function($, window, document, undefined) {
/* 5119 */ 
/* 5120 */     /**
/* 5121 *|      * Creates the video plugin.
/* 5122 *|      * @class The Video Plugin
/* 5123 *|      * @param {Owl2} carousel2 - The Owl2 Carousel
/* 5124 *|      */
/* 5125 */     var Video = function(carousel2) {
/* 5126 */         /**
/* 5127 *|          * Reference to the core.
/* 5128 *|          * @protected
/* 5129 *|          * @type {Owl2}
/* 5130 *|          */
/* 5131 */         this._core = carousel2;
/* 5132 */ 
/* 5133 */         /**
/* 5134 *|          * Cache all video URLs.
/* 5135 *|          * @protected
/* 5136 *|          * @type {Object}
/* 5137 *|          */
/* 5138 */         this._videos = {};
/* 5139 */ 
/* 5140 */         /**
/* 5141 *|          * Current playing item.
/* 5142 *|          * @protected
/* 5143 *|          * @type {jQuery}
/* 5144 *|          */
/* 5145 */         this._playing = null;
/* 5146 */ 
/* 5147 */         /**
/* 5148 *|          * Whether this is in fullscreen or not.
/* 5149 *|          * @protected
/* 5150 *|          * @type {Boolean}

/* owl.carousel.js */

/* 5151 *|          */
/* 5152 */         this._fullscreen = false;
/* 5153 */ 
/* 5154 */         /**
/* 5155 *|          * All event handlers.
/* 5156 *|          * @protected
/* 5157 *|          * @type {Object}
/* 5158 *|          */
/* 5159 */         this._handlers = {
/* 5160 */             'resize.owl.carousel2': $.proxy(function(e) {
/* 5161 */                 if (this._core.settings.video && !this.isInFullScreen()) {
/* 5162 */                     e.preventDefault();
/* 5163 */                 }
/* 5164 */             }, this),
/* 5165 */             'refresh.owl.carousel2 changed.owl.carousel2': $.proxy(function(e) {
/* 5166 */                 if (this._playing) {
/* 5167 */                     this.stop();
/* 5168 */                 }
/* 5169 */             }, this),
/* 5170 */             'prepared.owl.carousel2': $.proxy(function(e) {
/* 5171 */                 var $element = $(e.content).find('.owl2-video');
/* 5172 */                 if ($element.length) {
/* 5173 */                     $element.css('display', 'none');
/* 5174 */                     this.fetch($element, $(e.content));
/* 5175 */                 }
/* 5176 */             }, this)
/* 5177 */         };
/* 5178 */ 
/* 5179 */         // set default options
/* 5180 */         this._core.options = $.extend({}, Video.Defaults, this._core.options);
/* 5181 */ 
/* 5182 */         // register event handlers
/* 5183 */         this._core.$element.on(this._handlers);
/* 5184 */ 
/* 5185 */         this._core.$element.on('click.owl.video', '.owl2-video-play-icon', $.proxy(function(e) {
/* 5186 */             this.play(e);
/* 5187 */         }, this));
/* 5188 */     };
/* 5189 */ 
/* 5190 */     /**
/* 5191 *|      * Default options.
/* 5192 *|      * @public
/* 5193 *|      */
/* 5194 */     Video.Defaults = {
/* 5195 */         video: false,
/* 5196 */         videoHeight: false,
/* 5197 */         videoWidth: false
/* 5198 */     };
/* 5199 */ 
/* 5200 */     /**

/* owl.carousel.js */

/* 5201 *|      * Gets the video ID and the type (YouTube/Vimeo only).
/* 5202 *|      * @protected
/* 5203 *|      * @param {jQuery} target - The target containing the video data.
/* 5204 *|      * @param {jQuery} item - The item containing the video.
/* 5205 *|      */
/* 5206 */     Video.prototype.fetch = function(target, item) {
/* 5207 */ 
/* 5208 */         var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
/* 5209 */             id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
/* 5210 */             width = target.attr('data-width') || this._core.settings.videoWidth,
/* 5211 */             height = target.attr('data-height') || this._core.settings.videoHeight,
/* 5212 */             url = target.attr('href');
/* 5213 */ 
/* 5214 */         if (url) {
/* 5215 */             id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
/* 5216 */ 
/* 5217 */             if (id[3].indexOf('youtu') > -1) {
/* 5218 */                 type = 'youtube';
/* 5219 */             } else if (id[3].indexOf('vimeo') > -1) {
/* 5220 */                 type = 'vimeo';
/* 5221 */             } else {
/* 5222 */                 throw new Error('Video URL not supported.');
/* 5223 */             }
/* 5224 */             id = id[6];
/* 5225 */         } else {
/* 5226 */             throw new Error('Missing video URL.');
/* 5227 */         }
/* 5228 */ 
/* 5229 */         this._videos[url] = {
/* 5230 */             type: type,
/* 5231 */             id: id,
/* 5232 */             width: width,
/* 5233 */             height: height
/* 5234 */         };
/* 5235 */ 
/* 5236 */         item.attr('data-video', url);
/* 5237 */ 
/* 5238 */         this.thumbnail(target, this._videos[url]);
/* 5239 */     };
/* 5240 */ 
/* 5241 */     /**
/* 5242 *|      * Creates video thumbnail.
/* 5243 *|      * @protected
/* 5244 *|      * @param {jQuery} target - The target containing the video data.
/* 5245 *|      * @param {Object} info - The video info object.
/* 5246 *|      * @see `fetch`
/* 5247 *|      */
/* 5248 */     Video.prototype.thumbnail = function(target, video) {
/* 5249 */ 
/* 5250 */         var tnLink,

/* owl.carousel.js */

/* 5251 */             icon,
/* 5252 */             path,
/* 5253 */             dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
/* 5254 */             customTn = target.find('img'),
/* 5255 */             srcType = 'src',
/* 5256 */             lazyClass = '',
/* 5257 */             settings = this._core.settings,
/* 5258 */             create = function(path) {
/* 5259 */                 icon = '<div class="owl2-video-play-icon"></div>';
/* 5260 */ 
/* 5261 */                 if (settings.lazyLoad) {
/* 5262 */                     tnLink = '<div class="owl2-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
/* 5263 */                 } else {
/* 5264 */                     tnLink = '<div class="owl2-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
/* 5265 */                 }
/* 5266 */                 target.after(tnLink);
/* 5267 */                 target.after(icon);
/* 5268 */             };
/* 5269 */ 
/* 5270 */         // wrap video content into owl2-video-wrapper div
/* 5271 */         target.wrap('<div class="owl2-video-wrapper"' + dimensions + '></div>');
/* 5272 */ 
/* 5273 */         if (this._core.settings.lazyLoad) {
/* 5274 */             srcType = 'data-src';
/* 5275 */             lazyClass = 'owl2-lazy';
/* 5276 */         }
/* 5277 */ 
/* 5278 */         // custom thumbnail
/* 5279 */         if (customTn.length) {
/* 5280 */             create(customTn.attr(srcType));
/* 5281 */             customTn.remove();
/* 5282 */             return false;
/* 5283 */         }
/* 5284 */ 
/* 5285 */         if (video.type === 'youtube') {
/* 5286 */             path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
/* 5287 */             create(path);
/* 5288 */         } else if (video.type === 'vimeo') {
/* 5289 */             $.ajax({
/* 5290 */                 type: 'GET',
/* 5291 */                 url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
/* 5292 */                 jsonp: 'callback',
/* 5293 */                 dataType: 'jsonp',
/* 5294 */                 success: function(data) {
/* 5295 */                     path = data[0].thumbnail_large;
/* 5296 */                     create(path);
/* 5297 */                 }
/* 5298 */             });
/* 5299 */         }
/* 5300 */     };

/* owl.carousel.js */

/* 5301 */ 
/* 5302 */     /**
/* 5303 *|      * Stops the current video.
/* 5304 *|      * @public
/* 5305 *|      */
/* 5306 */     Video.prototype.stop = function() {
/* 5307 */         this._core.trigger('stop', null, 'video');
/* 5308 */         this._playing.find('.owl2-video-frame').remove();
/* 5309 */         this._playing.removeClass('owl2-video-playing');
/* 5310 */         this._playing = null;
/* 5311 */     };
/* 5312 */ 
/* 5313 */     /**
/* 5314 *|      * Starts the current video.
/* 5315 *|      * @public
/* 5316 *|      * @param {Event} ev - The event arguments.
/* 5317 *|      */
/* 5318 */     Video.prototype.play = function(ev) {
/* 5319 */         this._core.trigger('play', null, 'video');
/* 5320 */ 
/* 5321 */         if (this._playing) {
/* 5322 */             this.stop();
/* 5323 */         }
/* 5324 */ 
/* 5325 */         var target = $(ev.target || ev.srcElement),
/* 5326 */             item = target.closest('.' + this._core.settings.itemClass),
/* 5327 */             video = this._videos[item.attr('data-video')],
/* 5328 */             width = video.width || '100%',
/* 5329 */             height = video.height || this._core.$stage.height(),
/* 5330 */             html, wrap;
/* 5331 */ 
/* 5332 */         if (video.type === 'youtube') {
/* 5333 */             html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
/* 5334 */             + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
/* 5335 */         } else if (video.type === 'vimeo') {
/* 5336 */             html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
/* 5337 */             + '" height="' + height
/* 5338 */             + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
/* 5339 */         }
/* 5340 */ 
/* 5341 */         item.addClass('owl2-video-playing');
/* 5342 */         this._playing = item;
/* 5343 */ 
/* 5344 */         wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl2-video-frame">'
/* 5345 */         + html + '</div>');
/* 5346 */         target.after(wrap);
/* 5347 */     };
/* 5348 */ 
/* 5349 */     /**
/* 5350 *|      * Checks whether an video is currently in full screen mode or not.

/* owl.carousel.js */

/* 5351 *|      * @todo Bad style because looks like a readonly method but changes members.
/* 5352 *|      * @protected
/* 5353 *|      * @returns {Boolean}
/* 5354 *|      */
/* 5355 */     Video.prototype.isInFullScreen = function() {
/* 5356 */ 
/* 5357 */         // if Vimeo Fullscreen mode
/* 5358 */         var element = document.fullscreenElement || document.mozFullScreenElement
/* 5359 */             || document.webkitFullscreenElement;
/* 5360 */ 
/* 5361 */         if (element && $(element).parent().hasClass('owl2-video-frame')) {
/* 5362 */             this._core.speed(0);
/* 5363 */             this._fullscreen = true;
/* 5364 */         }
/* 5365 */ 
/* 5366 */         if (element && this._fullscreen && this._playing) {
/* 5367 */             return false;
/* 5368 */         }
/* 5369 */ 
/* 5370 */         // comming back from fullscreen
/* 5371 */         if (this._fullscreen) {
/* 5372 */             this._fullscreen = false;
/* 5373 */             return false;
/* 5374 */         }
/* 5375 */ 
/* 5376 */         // check full screen mode and window orientation
/* 5377 */         if (this._playing) {
/* 5378 */             if (this._core.state.orientation !== window.orientation) {
/* 5379 */                 this._core.state.orientation = window.orientation;
/* 5380 */                 return false;
/* 5381 */             }
/* 5382 */         }
/* 5383 */ 
/* 5384 */         return true;
/* 5385 */     };
/* 5386 */ 
/* 5387 */     /**
/* 5388 *|      * Destroys the plugin.
/* 5389 *|      */
/* 5390 */     Video.prototype.destroy = function() {
/* 5391 */         var handler, property;
/* 5392 */ 
/* 5393 */         this._core.$element.off('click.owl.video');
/* 5394 */ 
/* 5395 */         for (handler in this._handlers) {
/* 5396 */             this._core.$element.off(handler, this._handlers[handler]);
/* 5397 */         }
/* 5398 */         for (property in Object.getOwnPropertyNames(this)) {
/* 5399 */             typeof this[property] != 'function' && (this[property] = null);
/* 5400 */         }

/* owl.carousel.js */

/* 5401 */     };
/* 5402 */ 
/* 5403 */     $.fn.owlCarousel2.Constructor.Plugins.Video = Video;
/* 5404 */ 
/* 5405 */ })(window.Zepto || window.jQuery, window, document);
/* 5406 */ 
/* 5407 */ /**
/* 5408 *|  * Animate Plugin
/* 5409 *|  * @version 2.0.0
/* 5410 *|  * @author Bartosz Wojciechowski
/* 5411 *|  * @license The MIT License (MIT)
/* 5412 *|  */
/* 5413 */ ;(function($, window, document, undefined) {
/* 5414 */ 
/* 5415 */     /**
/* 5416 *|      * Creates the animate plugin.
/* 5417 *|      * @class The Navigation Plugin
/* 5418 *|      * @param {Owl2} scope - The Owl2 Carousel
/* 5419 *|      */
/* 5420 */     var Animate = function(scope) {
/* 5421 */         this.core = scope;
/* 5422 */         this.core.options = $.extend({}, Animate.Defaults, this.core.options);
/* 5423 */         this.swapping = true;
/* 5424 */         this.previous = undefined;
/* 5425 */         this.next = undefined;
/* 5426 */ 
/* 5427 */         this.handlers = {
/* 5428 */             'change.owl.carousel2': $.proxy(function(e) {
/* 5429 */                 if (e.property.name == 'position') {
/* 5430 */                     this.previous = this.core.current();
/* 5431 */                     this.next = e.property.value;
/* 5432 */                 }
/* 5433 */             }, this),
/* 5434 */             'drag.owl.carousel2 dragged.owl.carousel2 translated.owl.carousel2': $.proxy(function(e) {
/* 5435 */                 this.swapping = e.type == 'translated';
/* 5436 */             }, this),
/* 5437 */             'translate.owl.carousel2': $.proxy(function(e) {
/* 5438 */                 if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
/* 5439 */                     this.swap();
/* 5440 */                 }
/* 5441 */             }, this)
/* 5442 */         };
/* 5443 */ 
/* 5444 */         this.core.$element.on(this.handlers);
/* 5445 */     };
/* 5446 */ 
/* 5447 */     /**
/* 5448 *|      * Default options.
/* 5449 *|      * @public
/* 5450 *|      */

/* owl.carousel.js */

/* 5451 */     Animate.Defaults = {
/* 5452 */         animateOut: false,
/* 5453 */         animateIn: false
/* 5454 */     };
/* 5455 */ 
/* 5456 */     /**
/* 5457 *|      * Toggles the animation classes whenever an translations starts.
/* 5458 *|      * @protected
/* 5459 *|      * @returns {Boolean|undefined}
/* 5460 *|      */
/* 5461 */     Animate.prototype.swap = function() {
/* 5462 */ 
/* 5463 */         if (this.core.settings.items !== 1 || !this.core.support3d) {
/* 5464 */             return;
/* 5465 */         }
/* 5466 */ 
/* 5467 */         this.core.speed(0);
/* 5468 */ 
/* 5469 */         var left,
/* 5470 */             clear = $.proxy(this.clear, this),
/* 5471 */             previous = this.core.$stage.children().eq(this.previous),
/* 5472 */             next = this.core.$stage.children().eq(this.next),
/* 5473 */             incoming = this.core.settings.animateIn,
/* 5474 */             outgoing = this.core.settings.animateOut;
/* 5475 */ 
/* 5476 */         if (this.core.current() === this.previous) {
/* 5477 */             return;
/* 5478 */         }
/* 5479 */ 
/* 5480 */         if (outgoing) {
/* 5481 */             left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
/* 5482 */             previous.css( { 'left': left + 'px' } )
/* 5483 */                 .addClass('animated owl2-animated-out')
/* 5484 */                 .addClass(outgoing)
/* 5485 */                 .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
/* 5486 */         }
/* 5487 */ 
/* 5488 */         if (incoming) {
/* 5489 */             next.addClass('animated owl2-animated-in')
/* 5490 */                 .addClass(incoming)
/* 5491 */                 .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
/* 5492 */         }
/* 5493 */     };
/* 5494 */ 
/* 5495 */     Animate.prototype.clear = function(e) {
/* 5496 */         $(e.target).css( { 'left': '' } )
/* 5497 */             .removeClass('animated owl2-animated-out owl2-animated-in')
/* 5498 */             .removeClass(this.core.settings.animateIn)
/* 5499 */             .removeClass(this.core.settings.animateOut);
/* 5500 */         this.core.transitionEnd();

/* owl.carousel.js */

/* 5501 */     }
/* 5502 */ 
/* 5503 */     /**
/* 5504 *|      * Destroys the plugin.
/* 5505 *|      * @public
/* 5506 *|      */
/* 5507 */     Animate.prototype.destroy = function() {
/* 5508 */         var handler, property;
/* 5509 */ 
/* 5510 */         for (handler in this.handlers) {
/* 5511 */             this.core.$element.off(handler, this.handlers[handler]);
/* 5512 */         }
/* 5513 */         for (property in Object.getOwnPropertyNames(this)) {
/* 5514 */             typeof this[property] != 'function' && (this[property] = null);
/* 5515 */         }
/* 5516 */     };
/* 5517 */ 
/* 5518 */     $.fn.owlCarousel2.Constructor.Plugins.Animate = Animate;
/* 5519 */ 
/* 5520 */ })(window.Zepto || window.jQuery, window, document);
/* 5521 */ 
/* 5522 */ /**
/* 5523 *|  * Autoplay Plugin
/* 5524 *|  * @version 2.0.0
/* 5525 *|  * @author Bartosz Wojciechowski
/* 5526 *|  * @license The MIT License (MIT)
/* 5527 *|  */
/* 5528 */ ;(function($, window, document, undefined) {
/* 5529 */ 
/* 5530 */     /**
/* 5531 *|      * Creates the autoplay plugin.
/* 5532 *|      * @class The Autoplay Plugin
/* 5533 *|      * @param {Owl2} scope - The Owl2 Carousel
/* 5534 *|      */
/* 5535 */     var Autoplay = function(scope) {
/* 5536 */         this.core = scope;
/* 5537 */         this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);
/* 5538 */ 
/* 5539 */         this.handlers = {
/* 5540 */             'translated.owl.carousel2 refreshed.owl.carousel2': $.proxy(function() {
/* 5541 */                 this.autoplay();
/* 5542 */             }, this),
/* 5543 */             'play.owl.autoplay': $.proxy(function(e, t, s) {
/* 5544 */                 this.play(t, s);
/* 5545 */             }, this),
/* 5546 */             'stop.owl.autoplay': $.proxy(function() {
/* 5547 */                 this.stop();
/* 5548 */             }, this),
/* 5549 */             'mouseover.owl.autoplay': $.proxy(function() {
/* 5550 */                 if (this.core.settings.autoplayHoverPause) {

/* owl.carousel.js */

/* 5551 */                     this.pause();
/* 5552 */                 }
/* 5553 */ 
/* 5554 */             }, this),
/* 5555 */             'mouseleave.owl.autoplay': $.proxy(function() {
/* 5556 */                 if (this.core.settings.autoplayHoverPause) {
/* 5557 */                     this.autoplay();
/* 5558 */                 }
/* 5559 */ 
/* 5560 */             }, this)
/* 5561 */         };
/* 5562 */ 
/* 5563 */         this.core.$element.on(this.handlers);
/* 5564 */     };
/* 5565 */ 
/* 5566 */     /**
/* 5567 *|      * Default options.
/* 5568 *|      * @public
/* 5569 *|      */
/* 5570 */     Autoplay.Defaults = {
/* 5571 */         autoplay: false,
/* 5572 */         autoplayTimeout: 5000,
/* 5573 */         autoplayHoverPause: false,
/* 5574 */         autoplaySpeed: false
/* 5575 */     };
/* 5576 */ 
/* 5577 */     /**
/* 5578 *|      * @protected
/* 5579 *|      * @todo Must be documented.
/* 5580 *|      */
/* 5581 */     Autoplay.prototype.autoplay = function() {
/* 5582 */         if (this.core.options.autoplay) {
/* 5583 */             this.core.settings.autoplay = true;
/* 5584 */         }
/* 5585 */         if (this.core.settings.autoplay && !this.core.state.videoPlay) {
/* 5586 */             window.clearInterval(this.interval);
/* 5587 */ 
/* 5588 */             this.interval = window.setInterval($.proxy(function() {
/* 5589 */                 this.play();
/* 5590 */             }, this), this.core.settings.autoplayTimeout);
/* 5591 */         } else {
/* 5592 */             window.clearInterval(this.interval);
/* 5593 */         }
/* 5594 */     };
/* 5595 */ 
/* 5596 */     /**
/* 5597 *|      * Starts the autoplay.
/* 5598 *|      * @public
/* 5599 *|      * @param {Number} [timeout] - ...
/* 5600 *|      * @param {Number} [speed] - ...

/* owl.carousel.js */

/* 5601 *|      * @returns {Boolean|undefined} - ...
/* 5602 *|      * @todo Must be documented.
/* 5603 *|      */
/* 5604 */     Autoplay.prototype.play = function(timeout, speed) {
/* 5605 */         // if tab is inactive - doesnt work in <IE10
/* 5606 */         if (this.core.options.autoplay) {
/* 5607 */             this.core.settings.autoplay = true;
/* 5608 */         }
/* 5609 */         if (document.hidden === true) {
/* 5610 */             return;
/* 5611 */         }
/* 5612 */ 
/* 5613 */         if (this.core.state.isTouch || this.core.state.isScrolling
/* 5614 */             || this.core.state.isSwiping || this.core.state.inMotion) {
/* 5615 */             return;
/* 5616 */         }
/* 5617 */ 
/* 5618 */         if (this.core.settings.autoplay === false) {
/* 5619 */             window.clearInterval(this.interval);
/* 5620 */             return;
/* 5621 */         }
/* 5622 */ 
/* 5623 */         this.core.next(this.core.settings.autoplaySpeed);
/* 5624 */     };
/* 5625 */ 
/* 5626 */     /**
/* 5627 *|      * Stops the autoplay.
/* 5628 *|      * @public
/* 5629 *|      */
/* 5630 */     Autoplay.prototype.stop = function() {
/* 5631 */         if (this.core.options.autoplay) {
/* 5632 */             this.core.settings.autoplay = false;
/* 5633 */         }
/* 5634 */         window.clearInterval(this.interval);
/* 5635 */     };
/* 5636 */ 
/* 5637 */     /**
/* 5638 *|      * Pauses the autoplay.
/* 5639 *|      * @public
/* 5640 *|      */
/* 5641 */     Autoplay.prototype.pause = function() {
/* 5642 */         if (this.core.options.autoplay) {
/* 5643 */             this.core.settings.autoplay = false;
/* 5644 */         }
/* 5645 */         window.clearInterval(this.interval);
/* 5646 */     };
/* 5647 */ 
/* 5648 */     /**
/* 5649 *|      * Destroys the plugin.
/* 5650 *|      */

/* owl.carousel.js */

/* 5651 */     Autoplay.prototype.destroy = function() {
/* 5652 */         var handler, property;
/* 5653 */ 
/* 5654 */         window.clearInterval(this.interval);
/* 5655 */ 
/* 5656 */         for (handler in this.handlers) {
/* 5657 */             this.core.$element.off(handler, this.handlers[handler]);
/* 5658 */         }
/* 5659 */         for (property in Object.getOwnPropertyNames(this)) {
/* 5660 */             typeof this[property] != 'function' && (this[property] = null);
/* 5661 */         }
/* 5662 */     };
/* 5663 */ 
/* 5664 */     $.fn.owlCarousel2.Constructor.Plugins.autoplay = Autoplay;
/* 5665 */ 
/* 5666 */ })(window.Zepto || window.jQuery, window, document);
/* 5667 */ 
/* 5668 */ /**
/* 5669 *|  * Navigation Plugin
/* 5670 *|  * @version 2.0.0
/* 5671 *|  * @author Artus Kolanowski
/* 5672 *|  * @license The MIT License (MIT)
/* 5673 *|  */
/* 5674 */ ;(function($, window, document, undefined) {
/* 5675 */     'use strict';
/* 5676 */ 
/* 5677 */     /**
/* 5678 *|      * Creates the navigation plugin.
/* 5679 *|      * @class The Navigation Plugin
/* 5680 *|      * @param {Owl2} carousel2 - The Owl2 Carousel.
/* 5681 *|      */
/* 5682 */     var Navigation = function(carousel2) {
/* 5683 */         /**
/* 5684 *|          * Reference to the core.
/* 5685 *|          * @protected
/* 5686 *|          * @type {Owl2}
/* 5687 *|          */
/* 5688 */         this._core = carousel2;
/* 5689 */ 
/* 5690 */         /**
/* 5691 *|          * Indicates whether the plugin is initialized or not.
/* 5692 *|          * @protected
/* 5693 *|          * @type {Boolean}
/* 5694 *|          */
/* 5695 */         this._initialized = false;
/* 5696 */ 
/* 5697 */         /**
/* 5698 *|          * The current paging indexes.
/* 5699 *|          * @protected
/* 5700 *|          * @type {Array}

/* owl.carousel.js */

/* 5701 *|          */
/* 5702 */         this._pages = [];
/* 5703 */ 
/* 5704 */         /**
/* 5705 *|          * All DOM elements of the user interface.
/* 5706 *|          * @protected
/* 5707 *|          * @type {Object}
/* 5708 *|          */
/* 5709 */         this._controls = {};
/* 5710 */ 
/* 5711 */         /**
/* 5712 *|          * Markup for an indicator.
/* 5713 *|          * @protected
/* 5714 *|          * @type {Array.<String>}
/* 5715 *|          */
/* 5716 */         this._templates = [];
/* 5717 */ 
/* 5718 */         /**
/* 5719 *|          * The carousel2 element.
/* 5720 *|          * @type {jQuery}
/* 5721 *|          */
/* 5722 */         this.$element = this._core.$element;
/* 5723 */ 
/* 5724 */         /**
/* 5725 *|          * Overridden methods of the carousel2.
/* 5726 *|          * @protected
/* 5727 *|          * @type {Object}
/* 5728 *|          */
/* 5729 */         this._overrides = {
/* 5730 */             next: this._core.next,
/* 5731 */             prev: this._core.prev,
/* 5732 */             to: this._core.to
/* 5733 */         };
/* 5734 */ 
/* 5735 */         /**
/* 5736 *|          * All event handlers.
/* 5737 *|          * @protected
/* 5738 *|          * @type {Object}
/* 5739 *|          */
/* 5740 */         this._handlers = {
/* 5741 */             'prepared.owl.carousel2': $.proxy(function(e) {
/* 5742 */                 if (this._core.settings.dotsData) {
/* 5743 */                     this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
/* 5744 */                 }
/* 5745 */             }, this),
/* 5746 */             'add.owl.carousel2': $.proxy(function(e) {
/* 5747 */                 if (this._core.settings.dotsData) {
/* 5748 */                     this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
/* 5749 */                 }
/* 5750 */             }, this),

/* owl.carousel.js */

/* 5751 */             'remove.owl.carousel2 prepared.owl.carousel2': $.proxy(function(e) {
/* 5752 */                 if (this._core.settings.dotsData) {
/* 5753 */                     this._templates.splice(e.position, 1);
/* 5754 */                 }
/* 5755 */             }, this),
/* 5756 */             'change.owl.carousel2': $.proxy(function(e) {
/* 5757 */                 if (e.property.name == 'position') {
/* 5758 */                     if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
/* 5759 */                         var current = this._core.current(),
/* 5760 */                             maximum = this._core.maximum(),
/* 5761 */                             minimum = this._core.minimum();
/* 5762 */                         e.data = e.property.value > maximum
/* 5763 */                             ? current >= maximum ? minimum : maximum
/* 5764 */                             : e.property.value < minimum ? maximum : e.property.value;
/* 5765 */                     }
/* 5766 */                 }
/* 5767 */             }, this),
/* 5768 */             'changed.owl.carousel2': $.proxy(function(e) {
/* 5769 */                 if (e.property.name == 'position') {
/* 5770 */                     this.draw();
/* 5771 */                 }
/* 5772 */             }, this),
/* 5773 */             'refreshed.owl.carousel2': $.proxy(function() {
/* 5774 */                 if (!this._initialized) {
/* 5775 */                     this.initialize();
/* 5776 */                     this._initialized = true;
/* 5777 */                 }
/* 5778 */                 this._core.trigger('refresh', null, 'navigation');
/* 5779 */                 this.update();
/* 5780 */                 this.draw();
/* 5781 */                 this._core.trigger('refreshed', null, 'navigation');
/* 5782 */             }, this)
/* 5783 */         };
/* 5784 */ 
/* 5785 */         // set default options
/* 5786 */         this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
/* 5787 */ 
/* 5788 */         // register event handlers
/* 5789 */         this.$element.on(this._handlers);
/* 5790 */     }
/* 5791 */ 
/* 5792 */     /**
/* 5793 *|      * Default options.
/* 5794 *|      * @public
/* 5795 *|      * @todo Rename `slideBy` to `navBy`
/* 5796 *|      */
/* 5797 */     Navigation.Defaults = {
/* 5798 */         nav: false,
/* 5799 */         navRewind: true,
/* 5800 */         navText: [ 'prev', 'next' ],

/* owl.carousel.js */

/* 5801 */         navSpeed: false,
/* 5802 */         navElement: 'div',
/* 5803 */         navContainer: false,
/* 5804 */         navContainerClass: 'owl2-nav',
/* 5805 */         navClass: [ 'owl2-prev', 'owl2-next' ],
/* 5806 */         slideBy: 1,
/* 5807 */         dotClass: 'owl2-dot',
/* 5808 */         dotsClass: 'owl2-dots',
/* 5809 */         dots: true,
/* 5810 */         dotsEach: false,
/* 5811 */         dotData: false,
/* 5812 */         dotsSpeed: false,
/* 5813 */         dotsContainer: false,
/* 5814 */         controlsClass: 'owl2-controls'
/* 5815 */     }
/* 5816 */ 
/* 5817 */     /**
/* 5818 *|      * Initializes the layout of the plugin and extends the carousel2.
/* 5819 *|      * @protected
/* 5820 *|      */
/* 5821 */     Navigation.prototype.initialize = function() {
/* 5822 */         var $container, override,
/* 5823 */             options = this._core.settings;
/* 5824 */ 
/* 5825 */         // create the indicator template
/* 5826 */         if (!options.dotsData) {
/* 5827 */             this._templates = [ $('<div>')
/* 5828 */                 .addClass(options.dotClass)
/* 5829 */                 .append($('<span>'))
/* 5830 */                 .prop('outerHTML') ];
/* 5831 */         }
/* 5832 */ 
/* 5833 */         // create controls container if needed
/* 5834 */         if (!options.navContainer || !options.dotsContainer) {
/* 5835 */             this._controls.$container = $('<div>')
/* 5836 */                 .addClass(options.controlsClass)
/* 5837 */                 .appendTo(this.$element);
/* 5838 */         }
/* 5839 */ 
/* 5840 */         // create DOM structure for absolute navigation
/* 5841 */         this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
/* 5842 */             : $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);
/* 5843 */ 
/* 5844 */         this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
/* 5845 */             var index = $(e.target).parent().is(this._controls.$indicators)
/* 5846 */                 ? $(e.target).index() : $(e.target).parent().index();
/* 5847 */ 
/* 5848 */             e.preventDefault();
/* 5849 */ 
/* 5850 */             this.to(index, options.dotsSpeed);

/* owl.carousel.js */

/* 5851 */         }, this));
/* 5852 */ 
/* 5853 */         // create DOM structure for relative navigation
/* 5854 */         $container = options.navContainer ? $(options.navContainer)
/* 5855 */             : $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);
/* 5856 */ 
/* 5857 */         this._controls.$next = $('<' + options.navElement + '>');
/* 5858 */         this._controls.$previous = this._controls.$next.clone();
/* 5859 */ 
/* 5860 */         this._controls.$previous
/* 5861 */             .addClass(options.navClass[0])
/* 5862 */             .html(options.navText[0])
/* 5863 */             .hide()
/* 5864 */             .prependTo($container)
/* 5865 */             .on('click', $.proxy(function(e) {
/* 5866 */                 this.prev(options.navSpeed);
/* 5867 */             }, this));
/* 5868 */         this._controls.$next
/* 5869 */             .addClass(options.navClass[1])
/* 5870 */             .html(options.navText[1])
/* 5871 */             .hide()
/* 5872 */             .appendTo($container)
/* 5873 */             .on('click', $.proxy(function(e) {
/* 5874 */                 this.next(options.navSpeed);
/* 5875 */             }, this));
/* 5876 */ 
/* 5877 */         // override public methods of the carousel2
/* 5878 */         for (override in this._overrides) {
/* 5879 */             this._core[override] = $.proxy(this[override], this);
/* 5880 */         }
/* 5881 */     }
/* 5882 */ 
/* 5883 */     /**
/* 5884 *|      * Destroys the plugin.
/* 5885 *|      * @protected
/* 5886 *|      */
/* 5887 */     Navigation.prototype.destroy = function() {
/* 5888 */         var handler, control, property, override;
/* 5889 */ 
/* 5890 */         for (handler in this._handlers) {
/* 5891 */             this.$element.off(handler, this._handlers[handler]);
/* 5892 */         }
/* 5893 */         for (control in this._controls) {
/* 5894 */             this._controls[control].remove();
/* 5895 */         }
/* 5896 */         for (override in this.overides) {
/* 5897 */             this._core[override] = this._overrides[override];
/* 5898 */         }
/* 5899 */         for (property in Object.getOwnPropertyNames(this)) {
/* 5900 */             typeof this[property] != 'function' && (this[property] = null);

/* owl.carousel.js */

/* 5901 */         }
/* 5902 */     }
/* 5903 */ 
/* 5904 */     /**
/* 5905 *|      * Updates the internal state.
/* 5906 *|      * @protected
/* 5907 *|      */
/* 5908 */     Navigation.prototype.update = function() {
/* 5909 */         var i, j, k,
/* 5910 */             options = this._core.settings,
/* 5911 */             lower = this._core.clones().length / 2,
/* 5912 */             upper = lower + this._core.items().length,
/* 5913 */             size = options.center || options.autoWidth || options.dotData
/* 5914 */                 ? 1 : options.dotsEach || options.items;
/* 5915 */ 
/* 5916 */         if (options.slideBy !== 'page') {
/* 5917 */             options.slideBy = Math.min(options.slideBy, options.items);
/* 5918 */         }
/* 5919 */ 
/* 5920 */         if (options.dots || options.slideBy == 'page') {
/* 5921 */             this._pages = [];
/* 5922 */ 
/* 5923 */             for (i = lower, j = 0, k = 0; i < upper; i++) {
/* 5924 */                 if (j >= size || j === 0) {
/* 5925 */                     this._pages.push({
/* 5926 */                         start: i - lower,
/* 5927 */                         end: i - lower + size - 1
/* 5928 */                     });
/* 5929 */                     j = 0, ++k;
/* 5930 */                 }
/* 5931 */                 j += this._core.mergers(this._core.relative(i));
/* 5932 */             }
/* 5933 */         }
/* 5934 */     }
/* 5935 */ 
/* 5936 */     /**
/* 5937 *|      * Draws the user interface.
/* 5938 *|      * @todo The option `dotData` wont work.
/* 5939 *|      * @protected
/* 5940 *|      */
/* 5941 */     Navigation.prototype.draw = function() {
/* 5942 */         var difference, i, html = '',
/* 5943 */             options = this._core.settings,
/* 5944 */             $items = this._core.$stage.children(),
/* 5945 */             index = this._core.relative(this._core.current());
/* 5946 */ 
/* 5947 */         if (options.nav && !options.loop && !options.navRewind) {
/* 5948 */             this._controls.$previous.toggleClass('disabled', index <= 0);
/* 5949 */             this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
/* 5950 */         }

/* owl.carousel.js */

/* 5951 */ 
/* 5952 */         this._controls.$previous.toggle(options.nav);
/* 5953 */         this._controls.$next.toggle(options.nav);
/* 5954 */ 
/* 5955 */         if (options.dots) {
/* 5956 */             difference = this._pages.length - this._controls.$indicators.children().length;
/* 5957 */ 
/* 5958 */             if (options.dotData && difference !== 0) {
/* 5959 */                 for (i = 0; i < this._controls.$indicators.children().length; i++) {
/* 5960 */                     html += this._templates[this._core.relative(i)];
/* 5961 */                 }
/* 5962 */                 this._controls.$indicators.html(html);
/* 5963 */             } else if (difference > 0) {
/* 5964 */                 html = new Array(difference + 1).join(this._templates[0]);
/* 5965 */                 this._controls.$indicators.append(html);
/* 5966 */             } else if (difference < 0) {
/* 5967 */                 this._controls.$indicators.children().slice(difference).remove();
/* 5968 */             }
/* 5969 */ 
/* 5970 */             this._controls.$indicators.find('.active').removeClass('active');
/* 5971 */             this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
/* 5972 */         }
/* 5973 */ 
/* 5974 */         this._controls.$indicators.toggle(options.dots);
/* 5975 */     }
/* 5976 */ 
/* 5977 */     /**
/* 5978 *|      * Extends event data.
/* 5979 *|      * @protected
/* 5980 *|      * @param {Event} event - The event object which gets thrown.
/* 5981 *|      */
/* 5982 */     Navigation.prototype.onTrigger = function(event) {
/* 5983 */         var settings = this._core.settings;
/* 5984 */ 
/* 5985 */         event.page = {
/* 5986 */             index: $.inArray(this.current(), this._pages),
/* 5987 */             count: this._pages.length,
/* 5988 */             size: settings && (settings.center || settings.autoWidth || settings.dotData
/* 5989 */                 ? 1 : settings.dotsEach || settings.items)
/* 5990 */         };
/* 5991 */     }
/* 5992 */ 
/* 5993 */     /**
/* 5994 *|      * Gets the current page position of the carousel2.
/* 5995 *|      * @protected
/* 5996 *|      * @returns {Number}
/* 5997 *|      */
/* 5998 */     Navigation.prototype.current = function() {
/* 5999 */         var index = this._core.relative(this._core.current());
/* 6000 */         return $.grep(this._pages, function(o) {

/* owl.carousel.js */

/* 6001 */             return o.start <= index && o.end >= index;
/* 6002 */         }).pop();
/* 6003 */     }
/* 6004 */ 
/* 6005 */     /**
/* 6006 *|      * Gets the current succesor/predecessor position.
/* 6007 *|      * @protected
/* 6008 *|      * @returns {Number}
/* 6009 *|      */
/* 6010 */     Navigation.prototype.getPosition = function(successor) {
/* 6011 */         var position, length,
/* 6012 */             options = this._core.settings;
/* 6013 */ 
/* 6014 */         if (options.slideBy == 'page') {
/* 6015 */             position = $.inArray(this.current(), this._pages);
/* 6016 */             length = this._pages.length;
/* 6017 */             successor ? ++position : --position;
/* 6018 */             position = this._pages[((position % length) + length) % length].start;
/* 6019 */         } else {
/* 6020 */             position = this._core.relative(this._core.current());
/* 6021 */             length = this._core.items().length;
/* 6022 */             successor ? position += options.slideBy : position -= options.slideBy;
/* 6023 */         }
/* 6024 */         return position;
/* 6025 */     }
/* 6026 */ 
/* 6027 */     /**
/* 6028 *|      * Slides to the next item or page.
/* 6029 *|      * @public
/* 6030 *|      * @param {Number} [speed=false] - The time in milliseconds for the transition.
/* 6031 *|      */
/* 6032 */     Navigation.prototype.next = function(speed) {
/* 6033 */         $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
/* 6034 */     }
/* 6035 */ 
/* 6036 */     /**
/* 6037 *|      * Slides to the previous item or page.
/* 6038 *|      * @public
/* 6039 *|      * @param {Number} [speed=false] - The time in milliseconds for the transition.
/* 6040 *|      */
/* 6041 */     Navigation.prototype.prev = function(speed) {
/* 6042 */         $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
/* 6043 */     }
/* 6044 */ 
/* 6045 */     /**
/* 6046 *|      * Slides to the specified item or page.
/* 6047 *|      * @public
/* 6048 *|      * @param {Number} position - The position of the item or page.
/* 6049 *|      * @param {Number} [speed] - The time in milliseconds for the transition.
/* 6050 *|      * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.

/* owl.carousel.js */

/* 6051 *|      */
/* 6052 */     Navigation.prototype.to = function(position, speed, standard) {
/* 6053 */         var length;
/* 6054 */ 
/* 6055 */         if (!standard) {
/* 6056 */             length = this._pages.length;
/* 6057 */             $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
/* 6058 */         } else {
/* 6059 */             $.proxy(this._overrides.to, this._core)(position, speed);
/* 6060 */         }
/* 6061 */     }
/* 6062 */ 
/* 6063 */     $.fn.owlCarousel2.Constructor.Plugins.Navigation = Navigation;
/* 6064 */ 
/* 6065 */ })(window.Zepto || window.jQuery, window, document);
/* 6066 */ 
/* 6067 */ /**
/* 6068 *|  * Hash Plugin
/* 6069 *|  * @version 2.0.0
/* 6070 *|  * @author Artus Kolanowski
/* 6071 *|  * @license The MIT License (MIT)
/* 6072 *|  */
/* 6073 */ ;(function($, window, document, undefined) {
/* 6074 */     'use strict';
/* 6075 */ 
/* 6076 */     /**
/* 6077 *|      * Creates the hash plugin.
/* 6078 *|      * @class The Hash Plugin
/* 6079 *|      * @param {Owl2} carousel2 - The Owl2 Carousel
/* 6080 *|      */
/* 6081 */     var Hash = function(carousel2) {
/* 6082 */         /**
/* 6083 *|          * Reference to the core.
/* 6084 *|          * @protected
/* 6085 *|          * @type {Owl2}
/* 6086 *|          */
/* 6087 */         this._core = carousel2;
/* 6088 */ 
/* 6089 */         /**
/* 6090 *|          * Hash table for the hashes.
/* 6091 *|          * @protected
/* 6092 *|          * @type {Object}
/* 6093 *|          */
/* 6094 */         this._hashes = {};
/* 6095 */ 
/* 6096 */         /**
/* 6097 *|          * The carousel2 element.
/* 6098 *|          * @type {jQuery}
/* 6099 *|          */
/* 6100 */         this.$element = this._core.$element;

/* owl.carousel.js */

/* 6101 */ 
/* 6102 */         /**
/* 6103 *|          * All event handlers.
/* 6104 *|          * @protected
/* 6105 *|          * @type {Object}
/* 6106 *|          */
/* 6107 */         this._handlers = {
/* 6108 */             'initialized.owl.carousel2': $.proxy(function() {
/* 6109 */                 if (this._core.settings.startPosition == 'URLHash') {
/* 6110 */                     $(window).trigger('hashchange.owl.navigation');
/* 6111 */                 }
/* 6112 */             }, this),
/* 6113 */             'prepared.owl.carousel2': $.proxy(function(e) {
/* 6114 */                 var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
/* 6115 */                 this._hashes[hash] = e.content;
/* 6116 */             }, this)
/* 6117 */         };
/* 6118 */ 
/* 6119 */         // set default options
/* 6120 */         this._core.options = $.extend({}, Hash.Defaults, this._core.options);
/* 6121 */ 
/* 6122 */         // register the event handlers
/* 6123 */         this.$element.on(this._handlers);
/* 6124 */ 
/* 6125 */         // register event listener for hash navigation
/* 6126 */         $(window).on('hashchange.owl.navigation', $.proxy(function() {
/* 6127 */             var hash = window.location.hash.substring(1),
/* 6128 */                 items = this._core.$stage.children(),
/* 6129 */                 position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;
/* 6130 */ 
/* 6131 */             if (!hash) {
/* 6132 */                 return false;
/* 6133 */             }
/* 6134 */ 
/* 6135 */             this._core.to(position, false, true);
/* 6136 */         }, this));
/* 6137 */     }
/* 6138 */ 
/* 6139 */     /**
/* 6140 *|      * Default options.
/* 6141 *|      * @public
/* 6142 *|      */
/* 6143 */     Hash.Defaults = {
/* 6144 */         URLhashListener: false
/* 6145 */     }
/* 6146 */ 
/* 6147 */     /**
/* 6148 *|      * Destroys the plugin.
/* 6149 *|      * @public
/* 6150 *|      */

/* owl.carousel.js */

/* 6151 */     Hash.prototype.destroy = function() {
/* 6152 */         var handler, property;
/* 6153 */ 
/* 6154 */         $(window).off('hashchange.owl.navigation');
/* 6155 */ 
/* 6156 */         for (handler in this._handlers) {
/* 6157 */             this._core.$element.off(handler, this._handlers[handler]);
/* 6158 */         }
/* 6159 */         for (property in Object.getOwnPropertyNames(this)) {
/* 6160 */             typeof this[property] != 'function' && (this[property] = null);
/* 6161 */         }
/* 6162 */     }
/* 6163 */ 
/* 6164 */     $.fn.owlCarousel2.Constructor.Plugins.Hash = Hash;
/* 6165 */ 
/* 6166 */ })(window.Zepto || window.jQuery, window, document);

;
/* shortcodes.js */

/* 1  */ /*
/* 2  *|  * ------------------------------------------------------------------------
/* 3  *|  * Copyright (C) 2009 - 2013 The YouTech JSC. All Rights Reserved.
/* 4  *|  * @license - GNU/GPL, http://www.gnu.org/licenses/gpl.html
/* 5  *|  * Author: The YouTech JSC
/* 6  *|  * Websites: http://www.smartaddons.com - http://www.cmsportal.net
/* 7  *|  * ------------------------------------------------------------------------
/* 8  *| */
/* 9  */ // Correctly calculate dimensions of hidden elements 
/* 10 */ 
/* 11 */ 
/* 12 */ /* Accordion Block */
/* 13 */ jQuery(document).ready(function($) {
/* 14 */ 	$("ul.yt-accordion li").each(function() {
/* 15 */ 		if($(this).index() > 0) {
/* 16 */ 			$(this).children(".accordion-inner").css('display', 'none');
/* 17 */ 		}
/* 18 */ 		else {
/* 19 */ 			$(this).find(".accordion-heading").addClass('active');
/* 20 */ 		}
/* 21 */ 		
/* 22 */ 		var ua = navigator.userAgent,
/* 23 */ 		event = (ua.match(/iPad/i)) ? "touchstart" : "click";
/* 24 */ 		$(this).children(".accordion-heading").bind(event, function() {
/* 25 */ 			$(this).addClass(function() {
/* 26 */ 				if($(this).hasClass("active")) return "";
/* 27 */ 				return "active";
/* 28 */ 			});
/* 29 */ 	
/* 30 */ 			$(this).siblings(".accordion-inner").slideDown(350);
/* 31 */ 			$(this).parent().siblings("li").children(".accordion-inner").slideUp(350);
/* 32 */ 			$(this).parent().siblings("li").find(".active").removeClass("active");
/* 33 */ 		});
/* 34 */ 	});
/* 35 */ 	
/* 36 */ 	
/* 37 */ 	
/* 38 */ });
/* 39 */ 
/* 40 */ 
/* 41 */ /* Gallery Block */
/* 42 */ jQuery(document).ready(function($) {
/* 43 */ 	// MixItUp plugin
/* 44 */ 	
/* 45 */ 	$(".tabnav li").click(function (){
/* 46 */ 			var clas = $(this).attr('class');
/* 47 */ 			if(clas.substr(0,7)=='showall')
/* 48 */ 			{
/* 49 */ 				$('.yt-gallery-tabbed').find('.tabnav .'+clas.substr(8)+'').removeClass('active');
/* 50 */ 			}

/* shortcodes.js */

/* 51 */ 			else
/* 52 */ 			{
/* 53 */ 				$('.yt-gallery-tabbed').find('.tabnav .'+clas+'').removeClass('active');
/* 54 */ 			}
/* 55 */ 			$(this).addClass('active');
/* 56 */ 			var al =$(this).attr('id');
/* 57 */ 			$("."+clas+".masonry-brick ").css('display','none');
/* 58 */ 			if(clas.substr(0,7)=='showall')
/* 59 */ 			{
/* 60 */ 				$("."+clas.substr(8,37)+".masonry-brick").css('display','block');
/* 61 */ 			}
/* 62 */ 			else
/* 63 */ 			{
/* 64 */ 				$('.'+al+'').css('display','block');
/* 65 */ 			}
/* 66 */ 	})
/* 67 */ 	
/* 68 */      
/* 69 */ 	$('.gallery-list').magnificPopup({
/* 70 */ 	  delegate: 'a',
/* 71 */ 	  type: 'image',
/* 72 */ 	  tLoading: 'Loading image #%curr%...',
/* 73 */ 	  mainClass: 'mfp-img-mobile',
/* 74 */ 	  gallery: {
/* 75 */ 		enabled: true,
/* 76 */ 		navigateByImgClick: true,
/* 77 */ 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
/* 78 */ 	  }
/* 79 */ 	});
/* 80 */       
/* 81 */     
/* 82 */ });
/* 83 */ 
/* 84 */ 
