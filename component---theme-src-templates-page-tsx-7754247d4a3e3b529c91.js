(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{210:function(A,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),i=t(221),r=t(219),o=t(212),c=t(214),d=t(211),l=t(292),s=t(217),m=d.default.div.withConfig({displayName:"page-sidebar-content__LatestPosts",componentId:"dtjaqy-0"})(["display:grid;grid-template-columns:1fr;grid-gap:30px;width:310px;@media (max-width:","){grid-template-columns:1fr 1fr;}@media (max-width:700px){grid-template-columns:1fr;}"],o.a.breakpoints.md),E=function(){var A=l.data.posts.edges.map(function(A){return A.node});return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Latest posts"),n.a.createElement(m,null,A.map(function(A,e){return n.a.createElement(s.a,{title:A.frontmatter.title,featuredImage:A.frontmatter.featuredImage.childImageSharp,path:A.frontmatter.path,key:e,compact:!0,meta:{time:A.frontmatter.created,timePretty:A.frontmatter.createdPretty,tag:A.frontmatter.tags.length>0?A.frontmatter.tags[0]:null}})})))},f=t(218),g=Object(d.default)(c.a).withConfig({displayName:"page__PageContainer",componentId:"uxc52n-0"})(["display:flex;justify-content:space-between;@media (max-width:","){display:block;}p:first-child{margin-top:0;}"],o.a.breakpoints.md),p=d.default.aside.withConfig({displayName:"page__PageSidebar",componentId:"uxc52n-1"})(["margin-left:50px;@media (max-width:","){margin-left:0;}"],o.a.breakpoints.md);e.default=function(A){var e=A.pathContext,t=A.location,a=e.page;return n.a.createElement(i.a,{bigHeader:!1},n.a.createElement(f.a,{title:a.frontmatter.title,description:a.frontmatter.excerpt,location:t}),n.a.createElement(r.a,{title:a.frontmatter.title,backgroundColor:o.a.layout.primaryColor}),n.a.createElement(g,null,n.a.createElement("section",{dangerouslySetInnerHTML:{__html:a.html}}),n.a.createElement(p,null,n.a.createElement(E,null))))}},217:function(A,e,t){"use strict";t(215);var a=t(0),n=t.n(a),i=t(211),r=t(213),o=t(212),c=t(216),d=t.n(c),l=Object(i.default)(r.a).withConfig({displayName:"style__StyledCard",componentId:"sc-7a2jjo-0"})(["display:block;background-color:#fff;border-radius:3px;box-shadow:0 1px 1px #e6e6e6,0 2px 4px #e6e6e6;transition:.5s all;width:100%;height:100%;overflow:hidden;&:hover{transform:translate3d(0,-5px,0);box-shadow:0 1px 1px #ccc,0 4px 4px #ccc;}"]),s=i.default.article.withConfig({displayName:"style__StyledArticle",componentId:"sc-7a2jjo-1"})(["display:inline-block;width:100%;@media (max-width:","){grid-area:unset !important;}"],o.a.breakpoints.sm),m=Object(i.default)(d.a).withConfig({displayName:"style__FeaturedImage",componentId:"sc-7a2jjo-2"})(["background-position:center;background-size:cover;max-width:100%;border-top-left-radius:3px;",";"],function(A){return A.halfImage?"\n    width: 50%;\n    float: left;\n    margin-right: 30px;\n    height: 320px;\n    border-bottom-left-radius: 3px;\n\n    @media (max-width: "+o.a.breakpoints.sm+") {\n      width: 100%;\n      float: none;\n      height: 190px;\n    }\n  ":"\n    height: 190px;\n    max-height: 190px;\n    width: 100%;\n    border-top-right-radius: 3px;\n  "}),E=i.default.section.withConfig({displayName:"style__CardContent",componentId:"sc-7a2jjo-3"})(["padding:",";p{margin:15px 0;}h2{font-size:1.2em;}"],function(A){return A.compact?"10px":"40px"}),f=i.default.section.withConfig({displayName:"style__CardMeta",componentId:"sc-7a2jjo-4"})(["display:flex;justify-content:space-between;margin-bottom:8px;font-size:.8em;opacity:.8;line-height:1em;"]),g=i.default.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-7a2jjo-5"})(["margin:0;padding:0;"]);t.d(e,"a",function(){return p});var p=function(A){var e=A.title,t=A.meta,a=A.path,i=A.featuredImage,r=A.content,o=A.halfImage,c=void 0!==o&&o,d=A.compact,p=void 0!==d&&d,h=A.style,u=A.children;return n.a.createElement(s,{style:h},n.a.createElement(l,{to:a},i&&i.fixed&&n.a.createElement(m,{fixed:i.fixed,halfImage:c}),i&&i.sizes&&n.a.createElement(m,{sizes:i.sizes,halfImage:c}),n.a.createElement(E,{compact:p},u,n.a.createElement("header",null,t&&n.a.createElement(f,null,t.tag&&n.a.createElement(n.a.Fragment,null,t.tag),t.time&&n.a.createElement("time",{dateTime:t.time},t.timePretty)),e&&n.a.createElement(g,null,e)),r&&n.a.createElement("p",{dangerouslySetInnerHTML:{__html:r}}))))}},219:function(A,e,t){"use strict";t(220);var a=t(0),n=t.n(a),i=t(211),r=t(214),o=i.default.div.withConfig({displayName:"subheader__StyledSubheader",componentId:"sc-113zvsz-0"})(["background-color:",";color:",";display:flex;align-items:center;height:90px;margin-bottom:30px;"],function(A){return A.backgroundColor?A.backgroundColor:"#000"},function(A){return A.textColor?A.textColor:"#fff"}),c=i.default.h1.withConfig({displayName:"subheader__SubheaderTitle",componentId:"sc-113zvsz-1"})(["font-size:1.2em;font-weight:bold;color:#fff;margin:0;line-height:1em;"]),d=i.default.small.withConfig({displayName:"subheader__SubheaderSubtitle",componentId:"sc-113zvsz-2"})(["font-weight:normal;display:block;opacity:.9;"]);e.a=function(A){var e=A.title,t=A.subtitle,a=A.backgroundColor,i=A.textColor;return n.a.createElement(o,{backgroundColor:a,textColor:i},n.a.createElement(r.a,null,n.a.createElement(c,null,e,n.a.createElement(d,null,t))))}},220:function(A,e,t){"use strict";t(222)("small",function(A){return function(){return A(this,"small","","")}})},292:function(A){A.exports={data:{posts:{edges:[{node:{id:"e18fa0ec-c72f-52c2-ad1a-a5a872929e0a",frontmatter:{title:"Getting started",path:"/getting-started",tags:["Theme"],created:"2019-07-30T00:00:00.000Z",createdPretty:"30 July, 2019",excerpt:"Nehalem is easy to install due to its packaged nature. Learn how to install it and the basics of the configuration capabilities.",featuredImage:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACA//EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAASFbqNiXaH//xAAbEAEAAgIDAAAAAAAAAAAAAAABAhIAAxMhMf/aAAgBAQABBQLZ4QsSJD1nGVqZ/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECERIh/9oACAEDAQE/AXG30yf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGq/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQESEx/9oACAEBAAY/AqRnVGouP//EABwQAQACAgMBAAAAAAAAAAAAAAEAESExQVFhcf/aAAgBAQABPyFrU3FsAUc1cwYc5fsbaWI166nhP//aAAwDAQACAAMAAAAQv+//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFR/9oACAEDAQE/EF0Uvt//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EFCwg//EAB4QAQEAAgEFAQAAAAAAAAAAAAERACExYXGhscHx/9oACAEBAAE/EELhNto9O+sMgARHBtygEkA3wj6y0WzhkfGSLKlH3Pxrn//Z",width:315,height:100,src:"/static/e7dd834504c9cac54f64c575b529524e/4f793/cover.jpg",srcSet:"/static/e7dd834504c9cac54f64c575b529524e/4f793/cover.jpg 1x,\n/static/e7dd834504c9cac54f64c575b529524e/9d244/cover.jpg 1.5x,\n/static/e7dd834504c9cac54f64c575b529524e/2c8a1/cover.jpg 2x"}}}}}},{node:{id:"c4d74d26-8ddb-50f3-843a-5f377c249fb1",frontmatter:{title:"Features",path:"/features",tags:["Theme"],created:"2019-07-29T00:00:00.000Z",createdPretty:"29 July, 2019",excerpt:"Nehalem provides an extensive set of features out of the box. It's fully responsive, SEO optimized, customizable and even more!",featuredImage:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECA//EABUBAQEAAAAAAAAAAAAAAAAAAAEE/9oADAMBAAIQAxAAAAEV4yVWIH//xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIREiIy/9oACAEBAAEFAhztDjRhtyf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGH/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bp//EABsQAAICAwEAAAAAAAAAAAAAAAABEWEQITHR/9oACAEBAAY/Aovjx6UNEaP/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhUUFhcYHh/9oACAEBAAE/Ibt7dg8QalvtMkw69qYQ3p9lWxiHAKuUn//aAAwDAQACAAMAAAAQp8//xAAWEQADAAAAAAAAAAAAAAAAAAAQETH/2gAIAQMBAT8QSj//xAAXEQEAAwAAAAAAAAAAAAAAAAAAASFR/9oACAECAQE/EMyp/8QAHRABAQACAgMBAAAAAAAAAAAAAREAITFBcZGxwf/aAAgBAQABPxAqsSy8A2UfuHEkdRS6157y8ipr6wYqFjwNJiuwDkI+8MNjm2uf/9k=",width:315,height:100,src:"/static/120ee3dd1ae4f0913235ce679ee49dbd/4f793/cover.jpg",srcSet:"/static/120ee3dd1ae4f0913235ce679ee49dbd/4f793/cover.jpg 1x,\n/static/120ee3dd1ae4f0913235ce679ee49dbd/9d244/cover.jpg 1.5x,\n/static/120ee3dd1ae4f0913235ce679ee49dbd/2c8a1/cover.jpg 2x"}}}}}},{node:{id:"cde0fecc-15fe-5ad9-8ac0-beb31348aeff",frontmatter:{title:"Creating custom pages",path:"/custom-pages",tags:["Programming"],created:"2019-07-23T00:00:00.000Z",createdPretty:"23 July, 2019",excerpt:"Creating custom pages is easy in Nehalem - let's take a brief look.",featuredImage:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHR+euBSpP/xAAZEAEAAwEBAAAAAAAAAAAAAAACAQMRABL/2gAIAQEAAQUCV52+YQntzon0Fayv/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Bh//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAABESExcf/aAAgBAQAGPwKm2SYKtF0hOj//xAAaEAACAwEBAAAAAAAAAAAAAAABEQAhMUFx/9oACAEBAAE/IUQZjxQQw1TgYuJUYCnfYQoq8CHB4DBU/9oADAMBAAIAAwAAABA83//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ECP/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QNX//xAAbEAEAAwEBAQEAAAAAAAAAAAABABEhMZFRcf/aAAgBAQABPxAbLsoafr5su/R6WRpyYlnFtPY2oNr1ojPICIOBQdjiFQDB5P/Z",width:315,height:100,src:"/static/f942cc0ae9bb12a1329c617c6ef17079/4f793/cover.jpg",srcSet:"/static/f942cc0ae9bb12a1329c617c6ef17079/4f793/cover.jpg 1x,\n/static/f942cc0ae9bb12a1329c617c6ef17079/9d244/cover.jpg 1.5x,\n/static/f942cc0ae9bb12a1329c617c6ef17079/2c8a1/cover.jpg 2x"}}}}}}]}}}}}]);
//# sourceMappingURL=component---theme-src-templates-page-tsx-7754247d4a3e3b529c91.js.map