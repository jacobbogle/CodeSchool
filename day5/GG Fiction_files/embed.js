(function(g){var window=this;'use strict';var tYa=function(a,b){var c=(b-a.j)/(a.u-a.j);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.no(a,c);var l=(g.no(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.no(a,c);return c},n2=function(){return{F:"svg",
T:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},R:[{F:"path",Hb:!0,L:"ytp-svg-fill",T:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
o2=function(a){g.I.call(this);
this.callback=a;this.u=new g.mo(0,0,.4,0,.2,1,1,1);this.delay=new g.xn(this.next,window,this);this.startTime=this.duration=this.j=this.from=NaN;g.J(this,this.delay)},p2=function(a){g.W.call(this,{F:"div",
L:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.D=this.j=0;this.C=new g.ez(this);this.B=[];this.suggestionData=[];this.containerWidth=0;this.title=new g.W({F:"h2",L:"ytp-related-title",X:"{{title}}"});this.previous=new g.W({F:"button",Aa:["ytp-button","ytp-previous"],T:{"aria-label":"Show previous suggested videos"},R:[g.sG()]});this.P=new o2(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.u=0;this.I=!0;this.next=new g.W({F:"button",Aa:["ytp-button","ytp-next"],T:{"aria-label":"Show more suggested videos"},R:[g.tG()]});g.J(this,this.C);a=a.S();this.J=a.j;g.J(this,this.title);this.title.ra(this.element);this.suggestions=new g.W({F:"div",L:"ytp-suggestions"});g.J(this,this.suggestions);this.suggestions.ra(this.element);g.J(this,this.previous);this.previous.ra(this.element);this.previous.Ka("click",this.tU,this);g.J(this,this.P);for(var c={Xs:0};16>c.Xs;c={Xs:c.Xs},
c.Xs++){var d=new g.W({F:"a",L:"ytp-suggestion-link",T:{href:"{{link}}",target:a.J,"aria-label":"{{aria_label}}"},R:[{F:"div",L:"ytp-suggestion-image",R:[{F:"div",T:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",X:"{{duration}}"}]},{F:"div",L:"ytp-suggestion-title",T:{title:"{{hover_title}}"},X:"{{title}}"},{F:"div",L:"ytp-suggestion-author",X:"{{views_or_author}}"}]});g.J(this,d);d.ra(this.suggestions.element);var e=d.va("ytp-suggestion-link");g.Sk(e,"transitionDelay",c.Xs/20+"s");this.C.N(e,
"click",function(f){return function(h){var l=b.suggestionData[f.Xs],m=l.sessionData;g.nJ(h,b.api,b.J,m||void 0)&&b.api.ll(l.videoId,m,l.playlistId)}}(c));
this.B.push(d)}g.J(this,this.next);this.next.ra(this.element);this.next.Ka("click",this.sU,this);this.C.N(this.api,"videodatachange",this.onVideoDataChange);this.resize(this.api.Wa().getPlayerSize());this.onVideoDataChange();this.show()},q2=function(a){a.next.element.style.bottom=a.D+"px";
a.previous.element.style.bottom=a.D+"px";var b=a.u,c=a.containerWidth-a.suggestionData.length*(a.tileWidth+a.j);g.O(a.element,"ytp-scroll-min",0<=b);g.O(a.element,"ytp-scroll-max",b<=c)},uYa=function(a){for(var b=0;b<a.suggestionData.length;b++){var c=a.suggestionData[b],d=a.B[b],e=c.shortViewCount?c.shortViewCount:c.author,f=c.gm(),h=a.api.S();
if(g.SA(h)){var l={};h.ea&&g.eI(l,h.loaderUrl);f=g.Fh(f,g.dI(l,"emb_rel_err"))}d.element.style.display="";h=d.va("ytp-suggestion-title");g.ko.test(c.title)?h.dir="rtl":g.LTa.test(c.title)&&(h.dir="ltr");h=d.va("ytp-suggestion-author");g.ko.test(e)?h.dir="rtl":g.LTa.test(e)&&(h.dir="ltr");d.update({views_or_author:e,duration:c.isLivePlayback?"Live":c.lengthSeconds?g.mH(c.lengthSeconds):"",link:f,hover_title:c.title,title:c.title,aria_label:c.ariaLabel||null,is_live:c.isLivePlayback});d=d.va("ytp-suggestion-image");
c=c.uf();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";q2(a)},r2=function(a){g.sJ.call(this,a);
var b=this;this.j=null;var c=a.S(),d={F:"svg",T:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},R:[{F:"path",T:{d:"M0 0h24v24H0V0z",fill:"none"}},{F:"path",T:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]};c.isMusic()&&(d={F:"svg",T:{fill:"none",height:"100%",
viewBox:"0 0 25 25",width:"100%"},R:[{F:"g",T:{"clip-path":"url(#clip0)",fill:"#fff"},R:[{F:"path",T:{d:"M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"}},{F:"path",T:{d:"M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"}}]},
{F:"defs",R:[{F:"clipPath",T:{id:"clip0"},R:[{F:"path",T:{d:"M0 0h24v24H0z",fill:"#fff",transform:"translate(.57 .5)"}}]}]}]});var e={target:c.J},f=["ytp-small-redirect"];if(c.C)f.push("no-link");else{var h=g.AB(c);c.ea&&(h=vYa(h,c.loaderUrl));e.href=h;e["aria-label"]="Visit YouTube to search for more videos"}c=new g.W({F:"a",Aa:f,T:e,R:[d]});c.ra(this.element);g.J(this,c);a.S().C||(this.j=new p2(a),this.j.ra(this.element),g.J(this,this.j));this.iconSize=1;this.N(a,"videodatachange",function(){b.show()});
this.resize(this.api.Wa().getPlayerSize())},wYa=function(a,b){a.va("ytp-error-content").style.paddingTop="0px";
var c=a.va("ytp-error-content"),d=c.clientHeight;a.j.resize(b,b.height-d);c.style.paddingTop=(b.height-a.j.element.clientHeight)/2-d/2+"px"},xYa=function(a,b){var c;
b.reason&&(s2(b.reason)?c=g.Dv(b.reason):c=g.tJ(g.Cv(b.reason)),a.Gd(c,"content"));var d;b.subreason&&(s2(b.subreason)?d=g.Dv(b.subreason):d=g.tJ(g.Cv(b.subreason)),a.Gd(d,"subreason"));if(b.proceedButton&&b.proceedButton.buttonRenderer&&(c=a.va("ytp-error-content-wrap-subreason"),d=b.proceedButton.buttonRenderer,b=g.tg("A"),d.text&&d.text.simpleText)){var e=d.text.simpleText;b.textContent=e;a:{for(var f=g.lg("A",c),h=0;h<f.length;h++)if(f[h].textContent===e){e=!0;break a}e=!1}if(!e){var l,m;e=null==
d?void 0:null==(l=d.navigationEndpoint)?void 0:null==(m=l.urlEndpoint)?void 0:m.url;var n,p;l=null==d?void 0:null==(n=d.navigationEndpoint)?void 0:null==(p=n.urlEndpoint)?void 0:p.target;e&&(a=a.api.S(),a.ea&&(e=vYa(e,a.loaderUrl)),b.setAttribute("href",e));l&&b.setAttribute("target",l);a=g.tg("DIV");a.appendChild(b);c.appendChild(a)}}},s2=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},vYa=function(a,b){var c={};
g.eI(c,b);return g.Fh(a,c)},t2=function(a,b){g.W.call(this,{F:"a",
Aa:["ytp-impression-link"],T:{target:"{{target}}",href:"{{url}}","aria-label":"Watch on YouTube"},R:[{F:"div",L:"ytp-impression-link-content",T:{"aria-hidden":"true"},R:[{F:"div",L:"ytp-impression-link-text",X:"Watch on"},{F:"div",L:"ytp-impression-link-logo",R:[n2()]}]}]});this.api=a;this.u=b;this.updateValue("target",a.S().J);this.api.zb(this.element,this,96714);this.N(this.api,"presentingplayerstatechange",this.Zg);this.N(this.api,"videoplayerreset",this.j);this.N(this.element,"click",this.onClick);
this.j()},yYa=function(a){var b={};
a.api.S().ea&&g.eI(b,a.api.S().loaderUrl);return g.Fh(a.api.getVideoUrl(),g.dI(b,"emb_imp_woyt"))},u2=function(a){g.W.call(this,{F:"div",
Aa:["ytp-mobile-a11y-hidden-seek-button"],R:[{F:"button",Aa:["ytp-mobile-a11y-hidden-seek-button-rewind","ytp-button"],T:{"aria-label":"Rewind 10 seconds","aria-hidden":"false"}},{F:"button",Aa:["ytp-mobile-a11y-hidden-seek-button-forward","ytp-button"],T:{"aria-label":"Fast forward 10 seconds","aria-hidden":"false"}}]});this.api=a;this.j=this.va("ytp-mobile-a11y-hidden-seek-button-rewind");this.forwardButton=this.va("ytp-mobile-a11y-hidden-seek-button-forward");this.api.zb(this.j,this,141902);this.api.zb(this.forwardButton,
this,141903);this.N(this.api,"presentingplayerstatechange",this.Zg);this.N(this.j,"click",this.u);this.N(this.forwardButton,"click",this.B);this.Zg()},v2=function(a){g.W.call(this,{F:"div",
L:"ytp-muted-autoplay-endscreen-overlay",R:[{F:"div",L:"ytp-muted-autoplay-end-panel",R:[{F:"div",L:"ytp-muted-autoplay-end-text",X:"{{text}}"}]}]});this.api=a;this.B=this.va("ytp-muted-autoplay-end-panel");this.j=new g.lJ(this.api);g.J(this,this.j);this.j.ra(this.B,0);this.api.zb(this.element,this,52428);this.N(this.api,"presentingplayerstatechange",this.u);this.Ka("click",this.onClick);this.hide()},w2=function(a){g.W.call(this,{F:"div",
L:"ytp-muted-autoplay-overlay",R:[{F:"div",L:"ytp-muted-autoplay-bottom-buttons",R:[{F:"button",Aa:["ytp-muted-autoplay-equalizer","ytp-button"],R:[{F:"div",Aa:["ytp-muted-autoplay-equalizer-icon"],R:[{F:"svg",T:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},R:[{F:"g",T:{fill:"#fff"},R:[{F:"rect",L:"ytp-equalizer-bar-left",T:{height:"9",width:"4",x:"1",y:"7"}},{F:"rect",L:"ytp-equalizer-bar-middle",T:{height:"14",width:"4",x:"6",y:"2"}},{F:"rect",L:"ytp-equalizer-bar-right",T:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.va("ytp-muted-autoplay-bottom-buttons");this.va("ytp-muted-autoplay-equalizer");this.B=new g.K(this.u,4E3,this);a.zb(this.element,this,39306);this.N(a,"presentingplayerstatechange",this.j);this.N(a,"onMutedAutoplayStarts",this.j);this.Ka("click",this.onClick);this.hide()},x2=function(a,b){g.W.call(this,{F:"div",
L:"ytp-pause-overlay",T:{tabIndex:"-1"}});var c=this;this.api=a;this.I=b;this.j=new g.ez(this);this.C=new g.ZG(this,1E3,!1,100);this.B=[];this.suggestionData=[];this.containerWidth=0;this.D=!1;this.U=0;this.title=new g.W({F:"h2",L:"ytp-related-title",X:"{{title}}"});this.previous=new g.W({F:"button",Aa:["ytp-button","ytp-previous"],T:{"aria-label":"Show previous suggested videos"},R:[g.sG()]});this.P=new o2(function(f){c.suggestions.element.scrollLeft=-f});
this.tileHeight=this.tileWidth=this.u=0;this.next=new g.W({F:"button",Aa:["ytp-button","ytp-next"],T:{"aria-label":"Show more suggested videos"},R:[g.tG()]});this.expandButton=new g.W({F:"button",Aa:["ytp-button","ytp-expand"],X:"More videos"});g.J(this,this.j);g.J(this,this.C);b=a.S();"0"===b.controlsType&&g.N(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.J=b.j;g.J(this,this.title);this.title.ra(this.element);this.suggestions=new g.W({F:"div",L:"ytp-suggestions"});g.J(this,this.suggestions);
this.suggestions.ra(this.element);g.J(this,this.previous);this.previous.ra(this.element);this.previous.Ka("click",this.vU,this);g.J(this,this.P);for(a={Ys:0};16>a.Ys;a={Ys:a.Ys},a.Ys++){var d=new g.W({F:"a",L:"ytp-suggestion-link",T:{href:"{{link}}",target:b.J,"aria-label":"{{aria_label}}"},R:[{F:"div",L:"ytp-suggestion-image"},{F:"div",L:"ytp-suggestion-overlay",T:{style:"{{blink_rendering_hack}}","aria-hidden":"{{aria_hidden}}"},R:[{F:"div",L:"ytp-suggestion-title",X:"{{title}}"},{F:"div",L:"ytp-suggestion-author",
X:"{{author_and_views}}"},{F:"div",T:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",X:"{{duration}}"}]}]});g.J(this,d);d.ra(this.suggestions.element);var e=d.va("ytp-suggestion-link");g.Sk(e,"transitionDelay",a.Ys/20+"s");this.j.N(e,"click",function(f){return function(h){var l=f.Ys;if(1E3>(0,g.R)()-c.U)g.ht(h),document.activeElement.blur();else{l=c.suggestionData[l];var m=l.sessionData;g.nJ(h,c.api,c.J,m||void 0)&&c.api.ll(l.videoId,m,l.playlistId)}}}(a));
this.B.push(d)}g.J(this,this.next);this.next.ra(this.element);this.next.Ka("click",this.uU,this);b=new g.W({F:"button",Aa:["ytp-button","ytp-collapse"],T:{"aria-label":"Hide more videos"},R:[g.sBa()]});g.J(this,b);b.ra(this.element);b.Ka("click",this.kY,this);g.J(this,this.expandButton);this.expandButton.ra(this.element);this.expandButton.Ka("click",this.lY,this);this.j.N(this.api,"appresize",this.ub);this.j.N(this.api,"fullscreentoggled",this.Qn);this.j.N(this.api,"presentingplayerstatechange",this.Tc);
this.j.N(this.api,"videodatachange",this.onVideoDataChange);this.ub(this.api.Wa().getPlayerSize());this.onVideoDataChange()},y2=function(a){var b=a.I.Gf()?32:16;
b=a.tileHeight/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.u;var c=a.containerWidth-a.suggestionData.length*(a.tileWidth+8);g.O(a.element,"ytp-scroll-min",0<=b);g.O(a.element,"ytp-scroll-max",b<=c)},zYa=function(a){for(var b=0;b<a.suggestionData.length;b++){var c=a.suggestionData[b],d=a.B[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.KTa.test(c.title)&&(d.va("ytp-suggestion-title").dir="rtl");g.KTa.test(e)&&(d.va("ytp-suggestion-author").dir="rtl");var f=c.isLivePlayback?"Live":c.lengthSeconds?g.mH(c.lengthSeconds):"";var h=c.gm();if(g.SA(a.api.S())){var l={};a.api.S().ea&&g.eI(l,a.api.S().loaderUrl);h=g.Fh(h,g.dI(l,"emb_rel_pause"))}d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.ariaLabel||null,is_live:c.isLivePlayback,aria_hidden:!(!c.ariaLabel||a.api.S().K("embeds_rv_aria_hidden_killswitch")),
blink_rendering_hack:g.iz||g.QA?"will-change: opacity":void 0});d=d.va("ytp-suggestion-image");c=c.uf();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";y2(a)},z2=function(a){var b=a.S();
g.W.call(this,{F:"a",Aa:["ytp-watermark","yt-uix-sessionlink"],T:{target:b.J,href:"{{url}}","aria-label":g.YE("Watch on $WEBSITE",{WEBSITE:g.mB(b)}),"data-sessionlink":"feature=player-watermark"},R:[n2()]});this.api=a;this.j=null;this.u=!1;this.state=a.vb();a.zb(this.element,this,76758);this.N(a,"videodatachange",this.cK);this.N(a,"videodatachange",this.onVideoDataChange);this.N(a,"presentingplayerstatechange",this.onStateChange);this.N(a,"appresize",this.ub);b=this.state;this.state!==b&&(this.state=
b);this.cK();this.onVideoDataChange();this.ub(a.Wa().getPlayerSize())},A2=function(a){g.PI.call(this,a);
this.G=a;this.j=new g.ez(this);g.J(this,this.j);this.load()},B2=function(a,b){a={adSource:"EMBEDS_AD_SOURCE_YOUTUBE",
breakType:0===a.G.getCurrentTime()?"EMBEDS_AD_BREAK_TYPE_PRE_ROLL":0===a.G.getPlayerState()?"EMBEDS_AD_BREAK_TYPE_POST_ROLL":"EMBEDS_AD_BREAK_TYPE_MID_ROLL",embedUrl:g.bea(a.G.S().loaderUrl),eventType:b,youtubeHost:g.zh(a.G.S().Z)||""};g.mr("embedsAdEvent",a)};
g.w(o2,g.I);o2.prototype.start=function(a,b,c){this.from=a;this.j=b;this.duration=c;this.startTime=(0,g.R)();this.next()};
o2.prototype.next=function(){var a=(0,g.R)()-this.startTime;var b=this.u;a=tYa(b,a/this.duration);if(0==a)b=b.J;else if(1==a)b=b.P;else{var c=g.Wf(b.J,b.D,a),d=g.Wf(b.D,b.I,a);b=g.Wf(b.I,b.P,a);c=g.Wf(c,d,a);d=g.Wf(d,b,a);b=g.Wf(c,d,a)}b=g.Qf(b,0,1);this.callback((this.j-this.from)*b+this.from);1>b&&this.delay.start()};g.w(p2,g.W);g.k=p2.prototype;g.k.hide=function(){this.I=!0;g.W.prototype.hide.call(this)};
g.k.show=function(){this.I=!1;g.W.prototype.show.call(this)};
g.k.isHidden=function(){return this.I};
g.k.sU=function(){this.scrollTo(this.u-this.containerWidth)};
g.k.tU=function(){this.scrollTo(this.u+this.containerWidth)};
g.k.resize=function(a,b){var c=this.api.S(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.suggestionData.length,this.B.length);if(150>=Math.min(a.width,a.height)||0===h||!c.Gc)this.hide();else{var l;if(e){var m=l=28;this.j=16}else this.j=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;a=a.width-(48+l+m);l=Math.ceil(a/150);l=Math.min(3,l);l=a/l-this.j;m=Math.floor(l/d);b&&m+100>b&&50<l&&(m=Math.max(b,50/d),l=Math.ceil(a/(d*(m-100)+this.j)),l=a/l-this.j,
m=Math.floor(l/d));50>l||g.wI(this.api)?this.hide():this.show();for(b=0;b<h;b++){d=this.B[b];var q=d.va("ytp-suggestion-image");q.style.width=l+"px";q.style.height=m+"px";d.va("ytp-suggestion-title").style.width=l+"px";d.va("ytp-suggestion-author").style.width=l+"px";d=d.va("ytp-suggestion-duration");d.style.display=d&&100>l?"none":""}h=e+n+p+4;this.D=h+c+(m-f)/2;this.suggestions.element.style.height=m+h+"px";this.tileWidth=l;this.containerWidth=a;this.u=0;this.suggestions.element.scrollLeft=-0;q2(this)}};
g.k.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.S();this.J=a.D?!1:b.j;a.suggestions?this.suggestionData=g.Nl(a.suggestions,function(c){return c&&!c.playlistId}):this.suggestionData.length=0;
uYa(this);a.D?this.title.update({title:g.YE("More videos from $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:a.author})}):this.title.update({title:"More videos on YouTube"})};
g.k.scrollTo=function(a){a=g.Qf(a,this.containerWidth-this.suggestionData.length*(this.tileWidth+this.j),0);this.P.start(this.u,a,1E3);this.u=a;q2(this)};g.w(r2,g.sJ);r2.prototype.show=function(){g.sJ.prototype.show.call(this);wYa(this,this.api.Wa().getPlayerSize())};
r2.prototype.resize=function(a){g.sJ.prototype.resize.call(this,a);this.j&&(wYa(this,a),g.O(this.element,"related-on-error-overlay-visible",!this.j.isHidden()))};
r2.prototype.u=function(a){g.sJ.prototype.u.call(this,a);var b=this.api.getVideoData();if(b.dG||b.playerErrorMessageRenderer)(a=b.dG)?xYa(this,a):b.playerErrorMessageRenderer&&xYa(this,b.playerErrorMessageRenderer);else{var c;a.Ak&&(b.Kr?s2(b.Kr)?c=g.Dv(b.Kr):c=g.tJ(g.Cv(b.Kr)):c=g.tJ(a.Ak),this.Gd(c,"subreason"))}};g.w(t2,g.W);t2.prototype.Zg=function(){this.api.vb().isCued()||(this.hide(),this.api.Ua(this.element,!1))};
t2.prototype.j=function(){var a=this.api.getVideoData(),b=this.api.S(),c=this.api.getVideoData().D,d=b.Kc,e=!b.Gc,f=this.u.dg(),h=b.isMusic();b=b.C;d||f||c||e||h||b||!a.videoId?(this.hide(),this.api.Ua(this.element,!1)):(a=yYa(this),this.updateValue("url",a),this.show())};
t2.prototype.onClick=function(a){var b=yYa(this);g.oJ(b,this.api,a);this.api.qb(this.element)};
t2.prototype.show=function(){this.api.vb().isCued()&&(g.W.prototype.show.call(this),this.api.Dn(this.element)&&this.api.Ua(this.element,!0))};g.w(u2,g.W);u2.prototype.Zg=function(){var a=this.api.vb();!this.api.Of()||g.V(a,2)&&g.tI(this.api)||g.V(a,64)?(this.api.Ua(this.j,!1),this.api.Ua(this.forwardButton,!1),this.hide()):(this.show(),this.api.Ua(this.j,!0),this.api.Ua(this.forwardButton,!0))};
u2.prototype.u=function(){this.api.seekBy(-10*this.api.getPlaybackRate());this.api.qb(this.j)};
u2.prototype.B=function(){this.api.seekBy(10*this.api.getPlaybackRate());this.api.qb(this.forwardButton)};g.w(v2,g.W);v2.prototype.u=function(){var a=this.api.vb(),b=this.api.getVideoData();this.api.S().K("embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.V(a,2)&&!this.kb?(this.show(),this.j.show(),a=this.api.getVideoData(),this.updateValue("text",a.GL),g.O(this.element,"ytp-muted-autoplay-show-end-panel",!0),this.api.Ua(this.element,this.kb),this.api.Ia("onMutedAutoplayEnds")):this.hide())};
v2.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.fD(a);this.api.loadVideoById(a.videoId,b);this.api.qb(this.element);this.hide()};g.w(w2,g.W);w2.prototype.j=function(){var a=this.api.vb(),b=this.api.getVideoData();this.api.S().K("embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.V(a,2)?this.kb||(g.W.prototype.show.call(this),this.B.start(),this.api.Ua(this.element,this.kb)):this.hide()};
w2.prototype.u=function(){g.O(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
w2.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.fD(a);this.api.loadVideoById(a.videoId,b);this.api.qb(this.element)};g.w(x2,g.W);g.k=x2.prototype;g.k.hide=function(){g.Hn(this.api.getRootNode(),"ytp-expand-pause-overlay");g.W.prototype.hide.call(this)};
g.k.kY=function(){this.D=!0;g.Hn(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.lY=function(){this.D=!1;g.N(this.api.getRootNode(),"ytp-expand-pause-overlay");this.focus()};
g.k.uU=function(){this.scrollTo(this.u-this.containerWidth)};
g.k.vU=function(){this.scrollTo(this.u+this.containerWidth)};
g.k.Qn=function(){this.ub(this.api.Wa().getPlayerSize())};
g.k.Tc=function(a){if(!(g.V(a.state,1)||g.V(a.state,16)||g.V(a.state,32))){var b=!this.api.S().K("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.V(a.state,1024);!g.V(a.state,4)||g.V(a.state,2)||b?this.C.hide():this.suggestionData.length&&(this.D||(g.N(this.api.getRootNode(),"ytp-expand-pause-overlay"),y2(this)),this.C.show(),this.U=(0,g.R)())}};
g.k.ub=function(a){var b=16/9,c=this.I.Gf();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.B.length;d++){var e=this.B[d].va("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.tileHeight=b;this.containerWidth=a;this.u=0;this.suggestions.element.scrollLeft=-0;y2(this)};
g.k.onVideoDataChange=function(){var a=this.api.S(),b=this.api.getVideoData();this.J=b.D?!1:a.j;b.suggestions?this.suggestionData=g.Nl(b.suggestions,function(c){return c&&!c.playlistId}):this.suggestionData.length=0;
zYa(this);b.D?this.title.update({title:g.YE("More videos from $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"More videos"})};
g.k.scrollTo=function(a){a=g.Qf(a,this.containerWidth-this.suggestionData.length*(this.tileWidth+8),0);this.P.start(this.u,a,1E3);this.u=a;y2(this)};g.w(z2,g.W);g.k=z2.prototype;g.k.cK=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).D,c=this.api.S();a=(a.mutedAutoplay||c.Kc&&!g.V(this.state,2))&&!(b&&c.pfpChazalUi);g.nG(this,a);this.api.Ua(this.element,a)};
g.k.onStateChange=function(a){a=a.state;this.state!==a&&(this.state=a);this.cK()};
g.k.onVideoDataChange=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.updateValue("url",a);this.j||(this.j=this.Ka("click",this.onClick))}else this.j&&(this.updateValue("url",null),this.pc(this.j),this.j=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.nH(a),!1,!0,!0);g.oJ(b,this.api,a);this.api.qb(this.element)};
g.k.ub=function(a){if((a=480>a.width)&&!this.u||!a&&this.u){var b=new g.W(n2()),c=this.va("ytp-watermark");g.O(c,"ytp-watermark-small",a);g.vg(c);b.ra(c);this.u=a}};g.w(A2,g.PI);g.k=A2.prototype;g.k.ij=function(){return!1};
g.k.create=function(){var a=this.G.S(),b=g.pI(this.G),c,d=null==(c=this.G.getVideoData())?void 0:c.clientPlaybackNonce;d&&g.jw("cpn",d);a.Gc&&!a.C&&(this.I=new x2(this.G,b),g.J(this,this.I),g.zI(this.G,this.I.element,4));a.K("embeds_enable_muted_autoplay")&&(this.u=new w2(this.G),g.J(this,this.u),g.zI(this.G,this.u.element,4),this.D=new v2(this.G),g.J(this,this.D),g.zI(this.G,this.D.element,4));if(a.Kc||this.u)this.watermark=new z2(this.G),g.J(this,this.watermark),g.zI(this.G,this.watermark.element,
8);this.B=new t2(this.G,b);g.J(this,this.B);g.zI(this.G,this.B.element,8);a.isMobile&&(this.C=new u2(this.G),g.J(this,this.C),g.zI(this.G,this.C.element,4));this.j.N(this.G,"appresize",this.ub);this.j.N(this.G,"presentingplayerstatechange",this.Zg);this.j.N(this.G,"videodatachange",this.f1);this.j.N(this.G,"onMutedAutoplayStarts",this.onMutedAutoplayStarts);this.j.N(this.G,"onAdStart",this.onAdStart);this.j.N(this.G,"onAdComplete",this.onAdComplete);this.j.N(this.G,"onAdSkip",this.onAdSkip);this.j.N(this.G,
"onAdStateChange",this.onAdStateChange);this.Pb(this.G.vb());this.player.cf("embed")};
g.k.ub=function(){var a=this.G.Wa().getPlayerSize();this.jf&&this.jf.resize(a)};
g.k.Zg=function(a){this.Pb(a.state)};
g.k.Pb=function(a){g.V(a,128)?(this.jf||(this.jf=new r2(this.G),g.J(this,this.jf),g.zI(this.G,this.jf.element,4)),this.jf.u(a.getData()),this.jf.show(),g.N(this.G.getRootNode(),"ytp-embed-error")):this.jf&&(this.jf.dispose(),this.jf=null,g.Hn(this.G.getRootNode(),"ytp-embed-error"))};
g.k.onMutedAutoplayStarts=function(){this.G.getVideoData().mutedAutoplay&&this.u&&this.watermark&&this.watermark.ra(this.u.bottomButtons,0)};
g.k.f1=function(){var a=this.G.getVideoData();this.watermark&&this.u&&!a.mutedAutoplay&&g.zg(this.u.element,this.watermark.element)&&g.zI(this.G,this.watermark.element,8)};
g.k.onAdStart=function(){B2(this,"EMBEDS_AD_EVENT_TYPE_AD_STARTED")};
g.k.onAdComplete=function(){B2(this,"EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")};
g.k.onAdSkip=function(){B2(this,"EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")};
g.k.onAdStateChange=function(a){2===a&&B2(this,"EMBEDS_AD_EVENT_TYPE_AD_PAUSED")};g.OI("embed",A2);})(_yt_player);