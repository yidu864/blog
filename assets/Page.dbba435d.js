import{W as A,X as z,Y as q,_ as D,f as N,u as C,G as I,Z as Q,r as T,o as s,c as r,h as e,q as U,s as u,b as h,F as w,D as R,g as O,w as j,d as G,t as _,x as F,a as k,j as x,S as W,E as B,i as P,Q as X,B as Y,L as Z,M as J,$ as K,k as ee,y as S}from"./app.c1896ca6.js";import{f as te}from"./resolveTime.ab972cb9.js";const ae=o=>!A(o)||/github\.com/.test(o)?"GitHub":/bitbucket\.org/.test(o)?"Bitbucket":/gitlab\.com/.test(o)?"GitLab":/gitee\.com/.test(o)?"Gitee":null,se={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ne=({docsRepo:o,editLinkPattern:l})=>{if(l)return l;const t=ae(o);return t!==null?se[t]:null},re=({docsRepo:o,docsBranch:l,docsDir:t,filePathRelative:p,editLinkPattern:v})=>{if(!p)return null;const c=ne({docsRepo:o,editLinkPattern:v});return c?c.replace(/:repo/,A(o)?o:`https://github.com/${o}`).replace(/:branch/,l).replace(/:path/,z(`${q(t)}/${p}`)):null},oe={class:"article-header-content"},ie={key:0,class:"article-tags"},le={class:"article-title"},ce={key:1,class:"article-subtitle"},ue={class:"article-icons"},de={key:0,class:"article-icon"},me={key:1,class:"article-icon"},_e={key:2,class:"article-icon"},he={key:1,class:"article-image-credit"},pe=["href"],ge={key:1},ve=N({__name:"ArticleHeader",props:{currentTag:{type:String,default:""}},setup(o){const l=C(),t=I(),p=x(),v=Q(),c=a=>v.value.map[a].path,b=()=>{const a={};return t.value.layout==="Post"&&t.value.useHeaderImage&&t.value.headerImage&&(a.backgroundImage=`url(${W(t.value.headerImage)})`),a},d=l.value.personalInfo;return(a,g)=>{const m=T("RouterLink"),f=T("VIcon");return s(),r("div",{class:F(["article-header",{"use-image":e(t).useHeaderImage}]),style:U(b())},[e(t).useHeaderImage&&e(t).headerMask?(s(),r("div",{key:0,class:"article-header-mask",style:U({background:e(t).headerMask})},null,4)):u("",!0),h("div",oe,[e(t).tags?(s(),r("div",ie,[(s(!0),r(w,null,R(e(t).tags,(n,i)=>(s(),O(m,{key:i,class:F(["article-tag",{active:o.currentTag==n}]),to:c(n)},{default:j(()=>[G(_(n),1)]),_:2},1032,["class","to"]))),128))])):u("",!0),h("h1",le,_(e(t).title),1),e(t).subtitle?(s(),r("p",ce,_(e(t).subtitle),1)):u("",!0),h("div",ue,[e(t).author||e(d).name?(s(),r("div",de,[k(f,{name:"fa-regular-user"}),h("span",null,_(e(t).author||e(d).name),1)])):u("",!0),e(t).date?(s(),r("div",me,[k(f,{name:"fa-regular-calendar"}),h("span",null,_(e(te)(e(t).date)),1)])):u("",!0),e(p).readingTime?(s(),r("div",_e,[k(f,{name:"ri-timer-line"}),h("span",null,_(e(p).readingTime.minutes)+" min",1)])):u("",!0)])]),e(t).useHeaderImage&&e(t).headerImageCredit?(s(),r("div",he,[G(_(e(l).headerImageCredit)+" ",1),e(t).headerImageCreditLink?(s(),r("a",{key:0,href:e(t).headerImageCreditLink,target:"_blank",rel:"noopener noreferrer"},_(e(t).headerImageCredit),9,pe)):(s(),r("span",ge,_(e(t).headerImageCredit),1))])):u("",!0)],6)}}});var Fe=D(ve,[["__file","ArticleHeader.vue"]]);const fe={class:"page-meta"},ke={key:0,class:"meta-item edit-link"},be={key:1,class:"meta-item last-updated"},Le={class:"meta-item-label"},ye={class:"meta-item-info"},$e={key:2,class:"meta-item contributors"},Ce={class:"meta-item-label"},Ie={class:"meta-item-info"},Pe=["title"],Te=N({__name:"PageMeta",setup(o){const l=()=>{const a=C(),g=x(),m=I();return P(()=>{var M,E,V;if(!((E=(M=m.value.editLink)!=null?M:a.value.editLink)!=null?E:!0))return null;const{repo:n,docsRepo:i=n,docsBranch:L="main",docsDir:y="",editLinkText:$}=a.value;if(!i)return null;const H=re({docsRepo:i,docsBranch:L,docsDir:y,filePathRelative:g.value.filePathRelative,editLinkPattern:(V=m.value.editLinkPattern)!=null?V:a.value.editLinkPattern});return H?{text:$!=null?$:"Edit this page",link:H}:null})},t=()=>{const a=C(),g=x(),m=I();return P(()=>{var i,L,y,$;return!((L=(i=m.value.lastUpdated)!=null?i:a.value.lastUpdated)!=null?L:!0)||!((y=g.value.git)!=null&&y.updatedTime)?null:new Date(($=g.value.git)==null?void 0:$.updatedTime).toLocaleString()})},p=()=>{const a=C(),g=x(),m=I();return P(()=>{var n,i,L,y;return((i=(n=m.value.contributors)!=null?n:a.value.contributors)!=null?i:!0)&&(y=(L=g.value.git)==null?void 0:L.contributors)!=null?y:null})},v=C(),c=l(),b=t(),d=p();return(a,g)=>{const m=T("VIcon"),f=T("ClientOnly");return s(),r("footer",fe,[e(c)?(s(),r("div",ke,[k(m,{name:"fa-pencil-alt"}),k(B,{class:"meta-item-label",item:e(c)},null,8,["item"])])):u("",!0),e(b)?(s(),r("div",be,[h("span",Le,_(e(v).lastUpdatedText)+": ",1),k(f,null,{default:j(()=>[h("span",ye,_(e(b)),1)]),_:1})])):u("",!0),e(d)&&e(d).length?(s(),r("div",$e,[h("span",Ce,_(e(v).contributorsText)+": ",1),h("span",Ie,[(s(!0),r(w,null,R(e(d),(n,i)=>(s(),r(w,{key:i},[h("span",{class:"contributor",title:`email: ${n.email}`},_(n.name),9,Pe),i!==e(d).length-1?(s(),r(w,{key:0},[G(", ")],64)):u("",!0)],64))),128))])])):u("",!0)])}}});var Se=D(Te,[["__file","PageMeta.vue"]]);const we={key:0,class:"page-nav"},xe={class:"inner"},De={key:0,class:"prev"},Ne={key:1,class:"next"},Ge=N({__name:"PageNav",setup(o){const l=a=>a===!1?null:Z(a)?J(a):K(a)?a:!1,t=(a,g,m)=>{const f=a.findIndex(n=>n.link===g);if(f!==-1){const n=a[f+m];return n!=null&&n.link?n:null}for(const n of a)if(n.children){const i=t(n.children,g,m);if(i)return i}return null},p=I(),v=X(),c=Y(),b=P(()=>{const a=l(p.value.prev);return a!==!1?a:t(v.value,c.path,-1)}),d=P(()=>{const a=l(p.value.next);return a!==!1?a:t(v.value,c.path,1)});return(a,g)=>e(b)||e(d)?(s(),r("nav",we,[h("p",xe,[e(b)?(s(),r("span",De,[k(B,{item:e(b)},null,8,["item"])])):u("",!0),e(d)?(s(),r("span",Ne,[k(B,{item:e(d)},null,8,["item"])])):u("",!0)])])):u("",!0)}});var Be=D(Ge,[["__file","PageNav.vue"]]);const He={class:"page"},Me={class:"theme-gungnir-content"},Ee=N({__name:"Page",setup(o){const l=C(),t=I(),{isDarkMode:p}=ee(),v=P(()=>p.value?l.value.giscusDarkTheme:l.value.giscusLightTheme);return(c,b)=>{const d=T("Content"),a=T("GungnirGiscus");return s(),r("main",He,[S(c.$slots,"top"),h("div",Me,[S(c.$slots,"content-top"),k(d),S(c.$slots,"content-bottom")]),k(Se),k(Be),S(c.$slots,"bottom"),e(t).giscus!==!1?(s(),O(a,{key:0,theme:e(v)},null,8,["theme"])):u("",!0)])}}});var Ae=D(Ee,[["__file","Page.vue"]]);export{Fe as A,Ae as P};
