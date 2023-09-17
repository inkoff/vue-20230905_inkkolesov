(()=>{"use strict";var n,e={701:(n,e,t)=>{var r=t(963),o=t(252),i={class:"sample"},a=(0,o._)("h1",{style:{"text-align":"center"}},"С изображением",-1),l=(0,o._)("h1",{style:{"text-align":"center"}},"Без изображения",-1),s=t(577),f={class:"meetup-cover"},c={class:"meetup-cover__title"},u={name:"MeetupCover",props:{title:{type:String},image:{type:String}},computed:{computedImage:function(){return this.image?"url('".concat(this.image,"')"):"var(--default-cover)"}}},p=function(){(0,r.sj)((function(n){return{c93690a6:n.computedImage}}))},d=u.setup;u.setup=d?function(n,e){return p(),d(n,e)}:p;const m=u;var g=t(379),v=t.n(g),h=t(795),b=t.n(h),y=t(569),U=t.n(y),w=t(565),x=t.n(w),F=t(216),Z=t.n(F),_=t(589),A=t.n(_),C=t(981),E={};E.styleTagTransform=A(),E.setAttributes=x(),E.insert=U().bind(null,"head"),E.domAPI=b(),E.insertStyleElement=Z(),v()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals;var I=t(744);const N={name:"App",components:{MeetupCover:(0,I.Z)(m,[["render",function(n,e,t,r,i,a){return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("h1",c,(0,s.zw)(t.title),1)])}],["__scopeId","data-v-0dfff1f2"]])},data:function(){return{meetupWithImage:{title:"VueConf US",image:"https://course-vue.javascript.ru/api/images/5"},meetupWithoutImage:{title:"Demo meetup",image:null}}}},O=(0,I.Z)(N,[["render",function(n,e,t,r,s,f){var c=(0,o.up)("MeetupCover");return(0,o.wg)(),(0,o.iD)("div",i,[a,(0,o.Wm)(c,{title:s.meetupWithImage.title,image:s.meetupWithImage.image},null,8,["title","image"]),l,(0,o.Wm)(c,{title:s.meetupWithoutImage.title,image:s.meetupWithoutImage.image},null,8,["title","image"])])}]]);var j=t(285),k={};k.styleTagTransform=A(),k.setAttributes=x(),k.insert=U().bind(null,"head"),k.domAPI=b(),k.insertStyleElement=Z(),v()(j.Z,k),j.Z&&j.Z.locals&&j.Z.locals;var D=t(489),S={};S.styleTagTransform=A(),S.setAttributes=x(),S.insert=U().bind(null,"head"),S.domAPI=b(),S.insertStyleElement=Z(),v()(D.Z,S),D.Z&&D.Z.locals&&D.Z.locals,(0,r.ri)(O).mount("#app")},981:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"\n.meetup-cover[data-v-0dfff1f2] {\n  background-size: cover;\n  background-position: center;\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--c93690a6);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 410px;\n  max-width: 1216px;\n  margin: 0 auto;\n}\n.meetup-cover__title[data-v-0dfff1f2] {\n  color: var(--white);\n  font-family: Roboto, sans-serif;\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 48px;\n  padding: 0 16px;\n  text-align: center;\n}\n@media all and (min-width: 992px) {\n.meetup-cover__title[data-v-0dfff1f2] {\n    font-size: 72px;\n    line-height: 84px;\n}\n}\n",""]);const l=a},987:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Nunito', sans-serif;\n  color: var(--body-color);\n}\n",""]);const l=a},773:(n,e,t)=>{t.d(e,{Z:()=>b});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),l=t(667),s=t.n(l),f=new URL(t(497),t.b),c=new URL(t(451),t.b),u=new URL(t(859),t.b),p=new URL(t(506),t.b),d=a()(o()),m=s()(f),g=s()(c),v=s()(u),h=s()(p);d.push([n.id,`/* https://fonts.googleapis.com/css?family=Nunito&display=swap */\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(${m}) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(${g}) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(${v}) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(${h}) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,\n    U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n`,""]);const b=d},647:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),l=t(667),s=t.n(l),f=new URL(t(939),t.b),c=a()(o()),u=s()(f);c.push([n.id,`:root {\n  --body-color: #34423f;\n  --white: #fff;\n  --grey: #cbd4e9;\n  --grey-light: #f8f9fc;\n  --grey-2: #dee1e1;\n  --grey-3: #ced4d3;\n  --grey-8: #5e706c;\n  --blue: #4c6bb6;\n  --blue-2: #688dc0;\n  --blue-light: #b8c5e2;\n  --blue-extra: #eaedf7;\n  --red: #db3851;\n  --red-light: #e8656f;\n  --green: #24a37e;\n  --green-light: #dff2ec;\n  --default-cover: url(${u});\n}\n`,""]);const p=c},285:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),l=t(647),s=t(773),f=t(987),c=a()(o());c.i(l.Z),c.i(s.Z),c.i(f.Z),c.push([n.id,"\n",""]);const u=c},489:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,".sample {\n  padding-top: 48px;\n}\n\np {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n",""]);const l=a},497:(n,e,t)=>{n.exports=t.p+"fonts/Nunito-cyrillic-ext.e974cc.woff2"},451:(n,e,t)=>{n.exports=t.p+"fonts/Nunito-cyrillic.0aa787.woff2"},859:(n,e,t)=>{n.exports=t.p+"fonts/Nunito-latin-ext.f513a9.woff2"},506:(n,e,t)=>{n.exports=t.p+"fonts/Nunito-latin.39a18f.woff2"},939:(n,e,t)=>{n.exports=t.p+"images/undraw_conference_speaker_6nt7.9b42fb.svg"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,n=[],r.O=(e,t,o,i)=>{if(!t){var a=1/0;for(c=0;c<n.length;c++){for(var[t,o,i]=n[c],l=!0,s=0;s<t.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((n=>r.O[n](t[s])))?t.splice(s--,1):(l=!1,i<a&&(a=i));if(l){n.splice(c--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[t,o,i]},r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{r.b=document.baseURI||self.location.href;var n={179:0};r.O.j=e=>0===n[e];var e=(e,t)=>{var o,i,[a,l,s]=t,f=0;if(a.some((e=>0!==n[e]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(e&&e(t);f<a.length;f++)i=a[f],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(c)},t=self.webpackChunk_01_vbindcover=self.webpackChunk_01_vbindcover||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),r.nc=void 0;var o=r.O(void 0,[216],(()=>r(701)));o=r.O(o)})();