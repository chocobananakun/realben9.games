(function(g){var window=this;'use strict';var z3=function(a){g.W.call(this,{F:"div",L:"ytp-miniplayer-ui"});this.Te=!1;this.player=a;this.P(a,"minimized",this.fh);this.P(a,"onStateChange",this.GJ)},A3=function(a){g.XI.call(this,a);
this.j=new z3(this.player);this.j.hide();g.JI(this.player,this.j.element,4);a.lf()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(z3,g.W);g.h=z3.prototype;
g.h.jH=function(){this.tooltip=new g.iN(this.player,this);g.J(this,this.tooltip);g.JI(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Dc=new g.SJ(this.player);g.J(this,this.Dc);this.Ih=new g.W({F:"div",L:"ytp-miniplayer-scrim"});g.J(this,this.Ih);this.Ih.ya(this.element);this.P(this.Ih.element,"click",this.IC);var a=new g.W({F:"button",Ca:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.EG()]});g.J(this,a);a.ya(this.Ih.element);this.P(a.element,"click",this.Oj);
a=new g.IZ(this.player,this);g.J(this,a);a.ya(this.Ih.element);this.vr=new g.W({F:"div",L:"ytp-miniplayer-controls"});g.J(this,this.vr);this.vr.ya(this.Ih.element);this.P(this.vr.element,"click",this.IC);var b=new g.W({F:"div",L:"ytp-miniplayer-button-container"});g.J(this,b);b.ya(this.vr.element);a=new g.W({F:"div",L:"ytp-miniplayer-play-button-container"});g.J(this,a);a.ya(this.vr.element);var c=new g.W({F:"div",L:"ytp-miniplayer-button-container"});g.J(this,c);c.ya(this.vr.element);this.BQ=new g.GL(this.player,
this,!1);g.J(this,this.BQ);this.BQ.ya(b.element);b=new g.EL(this.player,this);g.J(this,b);b.ya(a.element);this.nextButton=new g.GL(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.ya(c.element);this.Mh=new g.VM(this.player,this);g.J(this,this.Mh);this.Mh.ya(this.Ih.element);this.vc=new g.RL(this.player,this);g.J(this,this.vc);g.JI(this.player,this.vc.element,4);this.yC=new g.W({F:"div",L:"ytp-miniplayer-buttons"});g.J(this,this.yC);g.JI(this.player,this.yC.element,4);a=new g.W({F:"button",
Ca:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.EG()]});g.J(this,a);a.ya(this.yC.element);this.P(a.element,"click",this.Oj);a=new g.W({F:"button",Ca:["ytp-miniplayer-replay-button","ytp-button"],T:{"aria-label":"Close"},R:[g.KG()]});g.J(this,a);a.ya(this.yC.element);this.P(a.element,"click",this.f_);this.P(this.player,"presentingplayerstatechange",this.Xc);this.P(this.player,"appresize",this.wb);this.P(this.player,"fullscreentoggled",this.wb);this.wb()};
g.h.show=function(){this.pe=new g.Fn(this.rs,null,this);this.pe.start();this.Te||(this.jH(),this.Te=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.vc.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.pe&&(this.pe.dispose(),this.pe=void 0);g.W.prototype.hide.call(this);this.player.lf()||(this.Te&&this.vc.hide(),this.player.loadModule("annotations_module"))};
g.h.ea=function(){this.pe&&(this.pe.dispose(),this.pe=void 0);g.W.prototype.ea.call(this)};
g.h.Oj=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.h.f_=function(){this.player.playVideo()};
g.h.IC=function(a){if(a.target===this.Ih.element||a.target===this.vr.element)this.player.S().K("kevlar_miniplayer_play_pause_on_scrim")?g.GF(this.player.yb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.h.fh=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.lf())};
g.h.Pd=function(){this.vc.Sb();this.Mh.Sb()};
g.h.rs=function(){this.Pd();this.pe&&this.pe.start()};
g.h.Xc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.h.wb=function(){g.gM(this.vc,0,this.player.Ya().getPlayerSize().width,!1);g.UL(this.vc)};
g.h.GJ=function(a){this.player.lf()&&(0===a?this.hide():this.show())};
g.h.jc=function(){return this.tooltip};
g.h.Kf=function(){return!1};
g.h.hg=function(){return!1};
g.h.Hj=function(){return!1};
g.h.Ez=function(){};
g.h.hp=function(){};
g.h.yu=function(){};
g.h.Dp=function(){return null};
g.h.by=function(){return null};
g.h.Fj=function(){return new g.$k(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Cs=function(a,b,c,d,e){var f=0,k=d=0,l=g.nl(a);if(b){c=g.go(b,"ytp-prev-button")||g.go(b,"ytp-next-button");var m=g.go(b,"ytp-play-button"),n=g.go(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.ll(b,this.element),k=b.x,f=b.y-12):n&&(k=g.go(b,"ytp-miniplayer-button-top-left"),f=g.ll(b,this.element),b=g.nl(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.Ya().getPlayerSize().width;e=f+(e||0);l=g.ag(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Pm=function(){};
g.h.hm=function(){return!1};g.w(A3,g.XI);A3.prototype.create=function(){};
A3.prototype.gj=function(){return!1};
A3.prototype.load=function(){this.player.hideControls();this.j.show()};
A3.prototype.unload=function(){this.player.showControls();this.j.hide()};g.WI("miniplayer",A3);})(_yt_player);