"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[8326],{14911:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return m}});var o=a(87462),p=a(63366),n=(a(15007),a(64983)),r=a(91515),s=["components"],d={},i={_frontmatter:d},l=r.Z;function m(e){var t=e.components,a=(0,p.Z)(e,s);return(0,n.mdx)(l,(0,o.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",null,"Test the worker"),(0,n.mdx)("p",null,"Just run the following command."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"$> aio app run\n")),(0,n.mdx)("p",null,"After a couple of seconds, it will open Asset Compute Devtool in your browser. Within that tool, you can test your\nworker without the AEM."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.5%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/6e1b308749917983146d2a908ea97d3a/5530d/asset-compute-devtool.webp 320w","/app-builder/static/6e1b308749917983146d2a908ea97d3a/0c8fb/asset-compute-devtool.webp 640w","/app-builder/static/6e1b308749917983146d2a908ea97d3a/94b1e/asset-compute-devtool.webp 1280w","/app-builder/static/6e1b308749917983146d2a908ea97d3a/220e1/asset-compute-devtool.webp 1489w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/6e1b308749917983146d2a908ea97d3a/dd4a7/asset-compute-devtool.png 320w","/app-builder/static/6e1b308749917983146d2a908ea97d3a/0f09e/asset-compute-devtool.png 640w","/app-builder/static/6e1b308749917983146d2a908ea97d3a/bbbf7/asset-compute-devtool.png 1280w","/app-builder/static/6e1b308749917983146d2a908ea97d3a/bf9c5/asset-compute-devtool.png 1489w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/6e1b308749917983146d2a908ea97d3a/bbbf7/asset-compute-devtool.png",alt:"Asset Compute Devtool",title:"Asset Compute Devtool",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Since our worker requires ",(0,n.mdx)("inlineCode",{parentName:"p"},"imgix")," parameter (as you can see at line 34 in the worker code), you need to provide it in\nthe worker request object as shown on the screenshot. That parameter must be an escaped JSON. For instance, use the\nbelow parameter to just resize an image to 300x300px."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'"imgix": "{ \\"h\\": 300, \\"w\\": 300}"\n')),(0,n.mdx)("p",null,"Then you run your worker and observe results on the right-hand side of the Asset Compute Devtool."),(0,n.mdx)("p",null,"To let AEM use our worker, deploy the app by running the command."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"$> aio app deploy\n")),(0,n.mdx)("p",null,"As a result of that command, you will get the URL of your worker, similar to the below. Write down that URL as we need\nto put it in AEM configuration."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"Your deployed actions:\n  -> dx-asset-compute-worker-1/__secured_my-worker\n  -> https://99999-myassetcompute-dev.adobeioruntime.net/api/v1/web/dx-asset-compute-worker-1/my-worker\nWell done, your app is now online 🏄\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-custom-asset-compute-worker-lesson-4-md-eae3576601bd8c39985e.js.map