(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define([],b):'object'==typeof exports?exports.PDFAnnoCore=b():a.PDFAnnoCore=b()})(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=90)}({90:function(){'use strict';var a=function(){function a(){for(var a,b=document.querySelectorAll('div['+g+']'),c=0,d=b.length;c<d;++c)a=b[c],a.className=''}function b(){for(var a,b=document.querySelectorAll('div['+g+']'),c=0,d=b.length;c<d;++c)a=b[c],a.className='debuggerHideText'}function c(a,b){for(var c,d=document.querySelectorAll('div['+g+'='+a+']'),e=0,f=d.length;e<f;++e)c=d[e],c.className=b?'debuggerShowText':'debuggerHideText'}function d(a){if(a.target.dataset.fontName&&'DIV'===a.target.tagName.toUpperCase())for(var b,d=a.target.dataset.fontName,e=document.getElementsByTagName('input'),f=0;f<e.length;++f)(b=e[f],b.dataset.fontName===d)&&(b.checked=!b.checked,c(d,b.checked),b.scrollIntoView())}var e,f=!1,g='data-font-name';return{id:'FontInspector',name:'Font Inspector',panel:null,manager:null,init:function(){var a=this.panel;a.setAttribute('style','padding: 5px;');var c=document.createElement('button');c.addEventListener('click',b),c.textContent='Refresh',a.appendChild(c),e=document.createElement('div'),a.appendChild(e)},cleanup:function(){e.textContent=''},enabled:!1,get active(){return f},set active(c){f=c,f?(document.body.addEventListener('click',d,!0),b()):(document.body.removeEventListener('click',d,!0),a())},fontAdded:function(a,d){var f=function(a,b){for(var c=document.createElement('table'),d=0;d<b.length;d++){var e=document.createElement('tr'),f=document.createElement('td');f.textContent=b[d],e.appendChild(f);var g=document.createElement('td');g.textContent=a[b[d]].toString(),e.appendChild(g),c.appendChild(e)}return c}(a,['name','type']),g=a.loadedName,h=document.createElement('div'),i=document.createElement('span');i.textContent=g;var j=document.createElement('a');d?(d=/url\(['"]?([^\)"']+)/.exec(d),j.href=d[1]):a.data&&(d=URL.createObjectURL(new Blob([a.data],{type:a.mimeType})),j.href=d),j.textContent='Download';var k=document.createElement('a');k.href='',k.textContent='Log',k.addEventListener('click',function(b){b.preventDefault(),console.log(a)});var l=document.createElement('input');l.setAttribute('type','checkbox'),l.dataset.fontName=g,l.addEventListener('click',function(a,b){return function(){c(b,a.checked)}}(l,g)),h.appendChild(l),h.appendChild(i),h.appendChild(document.createTextNode(' ')),h.appendChild(j),h.appendChild(document.createTextNode(' ')),h.appendChild(k),h.appendChild(f),e.appendChild(h),setTimeout(function(){this.active&&b()}.bind(this),2e3)}}}(),b=function(){var a=[],d=null,b=null,e=null,f={};return{id:'Stepper',name:'Stepper',panel:null,manager:null,init:function(){var a=this;this.panel.setAttribute('style','padding: 5px;'),b=document.createElement('div'),e=document.createElement('select'),e.addEventListener('change',function(){a.selectStepper(this.value)}),b.appendChild(e),d=document.createElement('div'),this.panel.appendChild(b),this.panel.appendChild(d),sessionStorage.getItem('pdfjsBreakPoints')&&(f=JSON.parse(sessionStorage.getItem('pdfjsBreakPoints')))},cleanup:function(){e.textContent='',d.textContent='',a=[]},enabled:!1,active:!1,create:function(g){var h=document.createElement('div');h.id='stepper'+g,h.setAttribute('hidden',!0),h.className='stepper',d.appendChild(h);var i=document.createElement('option');i.textContent='Page '+(g+1),i.value=g,e.appendChild(i);var b=f[g]||[],j=new c(h,g,b);return a.push(j),1===a.length&&this.selectStepper(g,!1),j},selectStepper:function(b,c){var d;for(b|=0,c&&this.manager.selectPanel(this),d=0;d<a.length;++d){var f=a[d];f.pageIndex===b?f.panel.removeAttribute('hidden'):f.panel.setAttribute('hidden',!0)}var g=e.options;for(d=0;d<g.length;++d){var h=g[d];h.selected=(0|h.value)===b}},saveBreakPoints:function(a,b){f[a]=b,sessionStorage.setItem('pdfjsBreakPoints',JSON.stringify(f))}}}(),c=function(){function a(a,b){var c=document.createElement(a);return b&&(c.textContent=b),c}function c(a){if('string'==typeof a){var b=75;return a.length<=b?a:a.substr(0,b)+'...'}if('object'!=typeof a||null===a)return a;if('length'in a){var d,f,g=[];for(d=0,f=e(10,a.length);d<f;d++)g.push(c(a[d]));return d<a.length&&g.push('...'),g}var h={};for(var i in a)h[i]=c(a[i]);return h}function d(a,b,c){this.panel=a,this.breakPoint=0,this.nextBreakPoint=null,this.pageIndex=b,this.breakPoints=c,this.currentIdx=-1,this.operatorListIdx=0}var e=Math.min,f=null;return d.prototype={init:function(){var b=this.panel,c=a('div','c=continue, s=step'),d=a('table');c.appendChild(d),d.cellSpacing=0;var e=a('tr');if(d.appendChild(e),e.appendChild(a('th','Break')),e.appendChild(a('th','Idx')),e.appendChild(a('th','fn')),e.appendChild(a('th','args')),b.appendChild(c),this.table=d,!f)for(var g in f=Object.create(null),PDFJS.OPS)f[PDFJS.OPS[g]]=g},updateOperatorList:function(d){function g(){var a=+this.dataset.idx;this.checked?h.breakPoints.push(a):h.breakPoints.splice(h.breakPoints.indexOf(a),1),b.saveBreakPoints(h.pageIndex,h.breakPoints)}var h=this,k=15e3;if(!(this.operatorListIdx>k)){for(var l,m=document.createDocumentFragment(),n=e(k,d.fnArray.length),o=this.operatorListIdx;o<n;o++){l=a('tr'),l.className='line',l.dataset.idx=o,m.appendChild(l);var i=-1!==this.breakPoints.indexOf(o),p=d.argsArray[o]||[],q=a('td'),r=a('input');r.type='checkbox',r.className='points',r.checked=i,r.dataset.idx=o,r.onclick=g,q.appendChild(r),l.appendChild(q),l.appendChild(a('td',o.toString()));var s=f[d.fnArray[o]],t=p;if('showText'===s){for(var u,v=p[0],w=[],x=[],y=0;y<v.length;y++)u=v[y],'object'==typeof u&&null!==u?x.push(u.fontChar):(0<x.length&&(w.push(x.join('')),x=[]),w.push(u));0<x.length&&w.push(x.join('')),t=[w]}l.appendChild(a('td',s)),l.appendChild(a('td',JSON.stringify(c(t))))}if(n<d.fnArray.length){l=a('tr');var j=a('td','...');j.colspan=4,m.appendChild(j)}this.operatorListIdx=d.fnArray.length,this.table.appendChild(m)}},getNextBreakPoint:function(){this.breakPoints.sort(function(c,a){return c-a});for(var a=0;a<this.breakPoints.length;a++)if(this.breakPoints[a]>this.currentIdx)return this.breakPoints[a];return null},breakIt:function(a,c){b.selectStepper(this.pageIndex,!0);var d=this,f=document;d.currentIdx=a;var g=function(a){switch(a.keyCode){case 83:f.removeEventListener('keydown',g,!1),d.nextBreakPoint=d.currentIdx+1,d.goTo(-1),c();break;case 67:f.removeEventListener('keydown',g,!1);var b=d.getNextBreakPoint();d.nextBreakPoint=b,d.goTo(-1),c();}};f.addEventListener('keydown',g,!1),d.goTo(a)},goTo:function(a){for(var b,c=this.panel.getElementsByClassName('line'),d=0,e=c.length;d<e;++d)b=c[d],(0|b.dataset.idx)===a?(b.style.backgroundColor='rgb(251,250,207)',b.scrollIntoView()):b.style.backgroundColor=null}},d}(),d=function(){function a(a){for(;a.hasChildNodes();)a.removeChild(a.lastChild)}function c(a){for(var b=0,c=d.length;b<c;++b)if(d[b].pageNumber===a)return b;return!1}var d=[];return{id:'Stats',name:'Stats',panel:null,manager:null,init:function(){this.panel.setAttribute('style','padding: 5px;'),PDFJS.enableStats=!0},enabled:!1,active:!1,add:function(e,f){if(f){var g=c(e);if(!1!==g){var h=d[g];this.panel.removeChild(h.div),d.splice(g,1)}var b=document.createElement('div');b.className='stats';var j=document.createElement('div');j.className='title',j.textContent='Page: '+e;var k=document.createElement('div');k.textContent=f.toString(),b.appendChild(j),b.appendChild(k),d.push({pageNumber:e,div:b}),d.sort(function(c,a){return c.pageNumber-a.pageNumber}),a(this.panel);for(var l=0,i=d.length;l<i;++l)this.panel.appendChild(d[l].div)}},cleanup:function(){d=[],a(this.panel)}}}(),e=function(){var c=[],e=null;return{tools:[a,b,d],enable:function(c){var a=!1,d=this.tools;1===c.length&&'all'===c[0]&&(a=!0);for(var b,e=0;e<d.length;++e)b=d[e],(a||-1!==c.indexOf(b.id))&&(b.enabled=!0);a||d.sort(function(e,a){var b=c.indexOf(e.id);b=0>b?d.length:b;var f=c.indexOf(a.id);return f=0>f?d.length:f,b-f})},init:function(){var a=document.createElement('div');a.id='PDFBug';var b=document.createElement('div');b.setAttribute('class','controls'),a.appendChild(b);var d=document.createElement('div');d.setAttribute('class','panels'),a.appendChild(d);var e=document.getElementById('viewerContainer');e.appendChild(a),e.style.right=300+'px';for(var f=this.tools,g=this,h=0;h<f.length;++h){var i=f[h],j=document.createElement('div'),k=document.createElement('button');k.textContent=i.name,k.addEventListener('click',function(a){return function(b){b.preventDefault(),g.selectPanel(a)}}(h)),b.appendChild(k),d.appendChild(j),i.panel=j,i.manager=this,i.enabled?i.init():j.textContent=i.name+' is disabled. To enable add  "'+i.id+'" to the pdfBug parameter and refresh (seperate multiple by commas).',c.push(k)}this.selectPanel(0)},cleanup:function(){for(var a=0,b=this.tools.length;a<b;a++)this.tools[a].enabled&&this.tools[a].cleanup()},selectPanel:function(a){if('number'!=typeof a&&(a=this.tools.indexOf(a)),a!==e){e=a;for(var b=this.tools,d=0;d<b.length;++d)d===a?(c[d].setAttribute('class','active'),b[d].active=!0,b[d].panel.removeAttribute('hidden')):(c[d].setAttribute('class',''),b[d].active=!1,b[d].panel.setAttribute('hidden','true'))}}}}()}})});
//# sourceMappingURL=debugger.bundle.js.map