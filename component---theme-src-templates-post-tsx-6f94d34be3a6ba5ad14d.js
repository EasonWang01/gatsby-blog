(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{209:function(e,t,a){"use strict";a.r(t);a(92);var n=a(0),o=a.n(n),i=a(221),r=a(214),l=a(211),d=a(274),c=a.n(d),p=l.default.nav.withConfig({displayName:"toc__StyledNav",componentId:"sc-1hwup8p-0"})([".toc-list{list-style-type:none;margin:0;padding:0;.toc-list{padding-left:17px;padding-top:10px;}}.toc-list-item{line-height:1.2em;padding-bottom:10px;&:last-child{padding-bottom:0;}}.toc-link{color:#808080;text-decoration:none;}.is-active-link{color:#404040;font-weight:700;}"]),s=function(e){var t=e.onClick;return Object(n.useEffect)(function(){return c.a.init({tocSelector:".toc",contentSelector:".post",headingSelector:"h2,h3",scrollSmooth:!0,scrollSmoothDuration:1}),function(){return c.a.destroy()}}),o.a.createElement(p,{className:"toc",onClick:t})},m=a(216),g=a.n(m),u=a(212),f=l.default.div.withConfig({displayName:"reading-progress__ReadingProgressBar",componentId:"vxjjnv-0"})(["position:sticky;height:5px;top:70px;background-color:",";z-index:500;"],function(e){return e.color?e.color:u.a.layout.primaryColor}),h=function(e){var t=e.color,a=e.target,i=Object(n.useState)(0),r=i[0],l=i[1],d=function(){if(a.current){var e=a.current,t=e.clientHeight-e.offsetTop-window.innerHeight,n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return 0===n?l(0):n>t?l(100):void l(n/t*100)}};return Object(n.useEffect)(function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),o.a.createElement(f,{style:{width:r+"%"},color:t})},b=a(213),x=a(224),y=a.n(x),w=a(233),E=function(){return o.a.createElement(o.a.Fragment,null)},k=a(218),A=a(227);a.d(t,"query",function(){return P});var C=Object(l.default)(r.a).withConfig({displayName:"post__PostContainer",componentId:"h8gzap-0"})(["display:flex;justify-content:center;padding:0 !important;"]),I=l.default.div.withConfig({displayName:"post__LeftSidebar",componentId:"h8gzap-1"})(["min-width:255px;max-width:225px;transition:opacity .5s;@media (max-width:","){position:fixed;opacity:",";z-index:1000;background-color:#fff;width:100% !important;max-width:100%;padding:0 20px;margin-top:-5px;height:calc(100vh - 70px);}"],u.a.breakpoints.xl,function(e){return e.show?1:0}),_=l.default.div.withConfig({displayName:"post__PostContent",componentId:"h8gzap-2"})(["margin-top:-5px;border-right:1px #e5eff5 solid;border-left:1px #e5eff5 solid;background-color:#fff;box-shadow:0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.1);z-index:10;width:1035px;max-width:100%;li > a,p > a{color:",";border-bottom:2px "," solid;}pre{margin:30px 0;}blockquote{border-left:4px "," solid;background-color:",';margin:30px 0;padding:5px 20px;border-radius:.3em;}h3::before,h4::before,h5::before,h6::before{display:block;content:" ";height:90px;margin-top:-90px;visibility:hidden;}h2{border-top:1px solid #ececec;margin-top:44px;padding-top:40px;line-height:1.2;}code[class*="language-text"]{padding:5px;}p > img{max-width:100%;border-radius:.3em;margin:30px 0;}hr{border-top:1px solid #ececec;border-bottom:0;margin-top:44px;margin-bottom:40px;}.gatsby-resp-image-link{margin:30px 0;max-width:100%;.gatsby-resp-image-image{border-radius:.3em;}}'],u.a.layout.linkColor,u.a.layout.linkColor,u.a.layout.primaryColor,u.a.layout.backgroundColor),N=l.default.div.withConfig({displayName:"post__TocWrapper",componentId:"h8gzap-3"})(["position:sticky;top:70px;padding:40px 30px 40px 0;"]),v=l.default.header.withConfig({displayName:"post__PostHeader",componentId:"h8gzap-4"})(["padding:40px;@media (max-width:","){padding:20px;}"],u.a.breakpoints.sm),z=Object(l.default)(g.a).withConfig({displayName:"post__FeaturedImage",componentId:"h8gzap-5"})(["border-radius:0;@media (max-width:","){margin-left:-1px;margin-right:-1px;}"],u.a.breakpoints.xl),S=l.default.section.withConfig({displayName:"post__StyledPost",componentId:"h8gzap-6"})(["padding:40px;@media (max-width:","){padding:20px;}"],u.a.breakpoints.sm),T=l.default.section.withConfig({displayName:"post__PostMeta",componentId:"h8gzap-7"})(["display:flex;justify-content:space-between;opacity:.8;font-size:.9em;"]),j=l.default.h1.withConfig({displayName:"post__PostTitle",componentId:"h8gzap-8"})(["margin:0;padding:0;"]),B=l.default.footer.withConfig({displayName:"post__PostFooter",componentId:"h8gzap-9"})(["background-color:#fafafa;font-size:.8em;color:#666;padding:40px;line-height:1em;p{margin:5px 0;}"]),O=Object(l.default)(b.a).withConfig({displayName:"post__FooterTagLink",componentId:"h8gzap-10"})(["color:#000 !important;text-decoration:none;border-bottom:0 !important;"]),L=l.default.section.withConfig({displayName:"post__PostAddition",componentId:"h8gzap-11"})(["background-color:#fff;border-top:1px #e5eff5 solid;border-bottom:1px #e5eff5 solid;z-index:700;position:relative;padding:40px;"]),X=Object(l.default)(r.a).withConfig({displayName:"post__PostAdditionContent",componentId:"h8gzap-12"})(["display:flex;justify-content:space-between;"]),F=l.default.div.withConfig({displayName:"post__BioWrapper",componentId:"h8gzap-13"})(["width:50%;margin:auto;@media (max-width:","){width:100%;}"],u.a.breakpoints.sm),G=l.default.button.withConfig({displayName:"post__ToggleTocButton",componentId:"h8gzap-14"})(["display:flex;position:fixed;justify-content:center;right:20px;bottom:20px;border-radius:100%;box-shadow:0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.1);border:0;z-index:5000;width:50px;height:50px;background-color:#20232a;color:#fff;outline:none;@media (min-width:","){display:none;}"],u.a.breakpoints.xl),P=(t.default=function(e){var t=e.data,a=e.location,r=Object(n.useState)(!1),l=r[0],d=r[1],c=t.post,p=Object(n.createRef)(),m=t.primaryTag,g=function(){return d(!l)};return o.a.createElement(i.a,{bigHeader:!1},o.a.createElement(k.a,{location:a,title:c.frontmatter.title,publishedAt:c.frontmatter.created,updatedAt:c.frontmatter.updated,tags:c.frontmatter.tags,description:c.frontmatter.excerpt,image:c.frontmatter.featuredImage?c.frontmatter.featuredImage.childImageSharp.sizes.src:null}),o.a.createElement(h,{target:p,color:m?m.color:void 0}),o.a.createElement(C,null,c.headings.find(function(e){return e.depth>1})&&o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{show:l},o.a.createElement(N,null,o.a.createElement(s,{onClick:g}))),o.a.createElement(G,{role:"button","aria-label":"Toggle table of contents",onClick:g},l?o.a.createElement(A.h,null):o.a.createElement(A.a,null))),o.a.createElement(_,null,o.a.createElement("article",{className:"post",ref:p},o.a.createElement(v,null,o.a.createElement(T,null,c.frontmatter.tags.length>0&&o.a.createElement(b.a,{to:"/tag/"+y()(c.frontmatter.tags[0],{lower:!0})},c.frontmatter.tags[0]),o.a.createElement("time",{dateTime:c.frontmatter.created},c.frontmatter.createdPretty)),o.a.createElement(j,null,c.frontmatter.title)),c.frontmatter.featuredImage&&o.a.createElement(z,{sizes:c.frontmatter.featuredImage.childImageSharp.sizes}),o.a.createElement(S,{dangerouslySetInnerHTML:{__html:c.html},className:"post"}),o.a.createElement(B,null,o.a.createElement("p",null,"Published under ",c.frontmatter.tags.map(function(e,t){return o.a.createElement("span",{key:t},o.a.createElement(O,{to:"/tag/"+y()(e,{lower:!0})},e),c.frontmatter.tags.length>t+1&&o.a.createElement(o.a.Fragment,null,", "))})," on ",o.a.createElement("time",{dateTime:c.frontmatter.created},c.frontmatter.createdPretty),"."),c.frontmatter.updated!==c.frontmatter.created&&o.a.createElement("p",null,"Last updated on ",o.a.createElement("time",{dateTime:c.frontmatter.updated},c.frontmatter.updatedPretty),"."))))),o.a.createElement(L,null,o.a.createElement(X,null,o.a.createElement(F,null,o.a.createElement(w.a,{textAlign:"center",showName:!0})))),o.a.createElement(E,null))},"357387307")},230:function(e){e.exports={data:{site:{siteMetadata:{author:{name:"nehalem",description:'I\'m <strong>nehalem</strong>, a Gatsby theme by \n        <a href="https://nehalist.io" rel="noopener" target="_blank">nehalist.io</a>. If you like what you see feel free to give a \n        <a href="https://github.com/nehalist/gatsby-theme-nehalem" rel="noopener" target="_blank">star on GitHub!</a>',social:{facebook:"",twitter:"https://twitter.com/nehalist",linkedin:"https://www.linkedin.com/in/kevin-hirczy-7a9377106/",instagram:"",youtube:"",github:"https://github.com/nehalist",twitch:""}}}}}}},231:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADZElEQVQ4y12UTyzcQRTHf7tWSZCupmSttVq0tiEaSsjSSiONaPxJI9nEhUoaEScJIr1Iy8FBekDaht6aSGR733LZih4cnCQuKoo9kRAsi+7v93uv742Z9WOSl/nN/GY+833vzRsNETVuAKDF43E7f09NTjpovt0wzDnq/5LFyXSyXcMwgufn5x0XFxepvJbGdt7LTbHEh5qMnZ0103j94OAAhwYG8G1nJ/b19uK3mRnc2tpC1UzT3Px3eRnQZKP9toQyBdN1/SMvPjw8xLaWFr28rEwvKykxH3q94MrKgnyPx+T5n6GQrsCkcFJBhULlpoLx4aTG8FdXw6uGBnju9wOBobqyEp6WlkJBfj7cz8yEN21txp+NDV1CpyVQsBjarGAnJydmrsvFfyAlKQnupqXhg7w8LPB6kcDIB72sr4ec7Gx83dgIMrZIXnYK2I9gkBOwvrO9jUODg4a/pgaTCOagA9koMBxpYfzNBzwqKMBn5eXQ3NSER0dHhgRGyNK109PTdp74MDKic0g1C0xZss0mzHELXkjuRyIRVCqpveOEzMmB/nt5Ge45nZwuVpkwBpH7eMduvz7gCgxetxt2dnYMGctFTd4zEb/x8XFIKKBNmkWRVZldGo/fDw9DNBoF6XaUFcYlEIqKimCA7l5XV5dYnESqFKinpwcDgUBirP6NjY4KGCVW9BpdUOE/xQLcJJ+/p6amxOKUlBTRN1HwVfN4PGLO4XCInpMj1XFDLp1dnqAqMAkA3d3dWFxcfEOFz+dDrpy1tTVMoyzznJ3iyf3jwkI4Pj4GWT0xBgZ5sL+/r7tcLpCZTsRQ9U6nMwGzAKGCFFJTVyfMMexQWW5tbRXA5OTkm4mwJEh9yzXQ39+P8vHg1sdZTiWVmzxaWVkx5EZQLllBCibjBxkZGUhXxpTu7pG4TFXUAaVydnYW1AblvnCRYBxTOgjUgaFQCCzqetVrIwqaTpi8ujygNzU2GhRPzjKQKrDAhdXW1uLq6qppgX2XwmzXj+LVxDS9OpiXk8OT+ou6OuOJzwe5bjdWVFTg2NgYLC0tGRZQAnb7TbRZoJ2LCwuRr5+/YHB+HmuqqoT7nyYmwALhMttLuGllKIXcq/eM+nQudLLFWCwW/RUOi0eXNsWoIsIUnj76l6lAwlXJ+A+SN2XSfi988QAAAABJRU5ErkJggg==",width:55,height:55,src:"/gatsby-blog/static/eb69cec1bb7991ff33aeff8b18fb4015/9b54c/nehalist-gatsby.png",srcSet:"/gatsby-blog/static/eb69cec1bb7991ff33aeff8b18fb4015/9b54c/nehalist-gatsby.png 1x,\n/gatsby-blog/static/eb69cec1bb7991ff33aeff8b18fb4015/81c10/nehalist-gatsby.png 1.5x,\n/gatsby-blog/static/eb69cec1bb7991ff33aeff8b18fb4015/46a49/nehalist-gatsby.png 2x"}}}}}},233:function(e,t,a){"use strict";a(26);var n=a(230),o=a(0),i=a.n(o),r=a(211),l=(a(19),a(17),a(8),a(29),a(227)),d=r.default.ul.withConfig({displayName:"social-channel-list__StyledSocialChannels",componentId:"sc-16w9pwh-0"})(["list-style-type:none;margin:0;padding:0;"]),c=r.default.li.withConfig({displayName:"social-channel-list__StyledSocialChannel",componentId:"sc-16w9pwh-1"})(["display:inline-block;margin:0 10px;font-size:1.6em;opacity:.7;transition:opacity .5s;&:hover{opacity:1;}"]),p=function(e){var t=e.channels;return i.a.createElement(d,null,Object.keys(t).filter(function(e){return""!==t[e]}).map(function(e,a){return i.a.createElement(c,{key:a},i.a.createElement("a",{href:t[e],target:"_blank",rel:"noopener","aria-label":e},function(e){switch(e){case"twitter":return i.a.createElement(l.j,null);case"facebook":return i.a.createElement(l.b,null);case"github":return i.a.createElement(l.c,null);case"instagram":return i.a.createElement(l.d,null);case"linkedin":return i.a.createElement(l.e,null);case"twitch":return i.a.createElement(l.i,null);case"youtube":return i.a.createElement(l.k,null)}return i.a.createElement(l.f,null)}(e)))}))},s=(a(215),a(231)),m=a(216),g=a.n(m),u=Object(r.default)(g.a).withConfig({displayName:"avatar__StyledAvatar",componentId:"sc-1v6bq9n-0"})(["max-width:55px;border-radius:100%;"]),f=function(e){var t=e.alt,a=e.style,n=s.data;return i.a.createElement(u,{fixed:n.file.childImageSharp.fixed,alt:t,style:a})},h=r.default.section.withConfig({displayName:"bio__StyledBio",componentId:"sc-19adui4-0"})(["margin:auto;text-align:",";width:100%;"],function(e){return e.textAlign}),b=r.default.p.withConfig({displayName:"bio__AuthorDescription",componentId:"sc-19adui4-1"})(["margin:10px 0 13px;a{color:#000;text-decoration:underline;}"]),x=r.default.h3.withConfig({displayName:"bio__AuthorName",componentId:"sc-19adui4-2"})(["margin:10px;"]);t.a=function(e){var t=e.textAlign,a=void 0===t?"center":t,o=e.avatarStyle,r=e.showName,l=void 0!==r&&r,d=n.data.site.siteMetadata.author;return i.a.createElement(h,{textAlign:a},i.a.createElement(f,{alt:d.name,style:o}),l&&i.a.createElement(x,null,d.name),i.a.createElement(b,{dangerouslySetInnerHTML:{__html:d.description}}),i.a.createElement(p,{channels:d.social}))}}}]);
//# sourceMappingURL=component---theme-src-templates-post-tsx-6f94d34be3a6ba5ad14d.js.map