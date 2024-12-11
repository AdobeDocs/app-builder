"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[765],{33104:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return l}});var p=t(58168),i=t(80045),n=(t(88763),t(15680)),d=t(83407);const s=["components"],r={},o={_frontmatter:r},c=d.A;function l(e){let{components:a}=e,t=(0,i.A)(e,s);return(0,n.mdx)(c,(0,p.A)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"lesson-1-create-a-new-app-builder-app-from-campaign-standard-template"},"Lesson 1: Create a New App Builder App from Campaign Standard Template"),(0,n.mdx)("p",null,"To initialize an App Builder app, let's use the init command from the CLI:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app init customers-dashboard\n")),(0,n.mdx)("p",null,"Select the org, project, and workspace for your app, and then specify what you want your app to include: serverless actions, web UI assets, CI/CD pipeline, events. In this lab, we keep all except events."),(0,n.mdx)("p",null,"The next question asks you to select the sample actions to be created as part of the initial app. Since customer profiles are pulled from Campaign Standard, we are going to select ",(0,n.mdx)("inlineCode",{parentName:"p"},"Adobe Campaign Standard")," for this question by pressing ",(0,n.mdx)("inlineCode",{parentName:"p"},"<Space>")," to select / de-select, and ",(0,n.mdx)("inlineCode",{parentName:"p"},"<Enter>")," to confirm the choice."),(0,n.mdx)("p",null,"Then you will be asked to specify the names of the sample action. Let's name it ",(0,n.mdx)("inlineCode",{parentName:"p"},"get-profiles"),"."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"970px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/b15a46378e3f6b3229f95d6a76d4ceb2/5530d/app-init-1.webp 320w","/app-builder/static/b15a46378e3f6b3229f95d6a76d4ceb2/0c8fb/app-init-1.webp 640w","/app-builder/static/b15a46378e3f6b3229f95d6a76d4ceb2/66318/app-init-1.webp 970w"],sizes:"(max-width: 970px) 100vw, 970px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/b15a46378e3f6b3229f95d6a76d4ceb2/dd4a7/app-init-1.png 320w","/app-builder/static/b15a46378e3f6b3229f95d6a76d4ceb2/0f09e/app-init-1.png 640w","/app-builder/static/b15a46378e3f6b3229f95d6a76d4ceb2/adb12/app-init-1.png 970w"],sizes:"(max-width: 970px) 100vw, 970px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/b15a46378e3f6b3229f95d6a76d4ceb2/adb12/app-init-1.png",alt:"app-init",title:"app-init",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"From the command line, a NodeJS project is created including the Adobe I/O Runtime actions, configuration files, tests etc. You could explore your project in VS Code, either by opening VSCode -> Open... -> select app folder, or typing this command:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"code customers-dashboard\n")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"534px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"181.56250000000003%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/22db23343eddb705718425695e6b21ec/5530d/app-explore.webp 320w","/app-builder/static/22db23343eddb705718425695e6b21ec/c7900/app-explore.webp 534w"],sizes:"(max-width: 534px) 100vw, 534px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/22db23343eddb705718425695e6b21ec/dd4a7/app-explore.png 320w","/app-builder/static/22db23343eddb705718425695e6b21ec/f1de1/app-explore.png 534w"],sizes:"(max-width: 534px) 100vw, 534px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/22db23343eddb705718425695e6b21ec/f1de1/app-explore.png",alt:"app-explore",title:"app-explore",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Upon app initialization, some of the mandatory environment variables are automatically defined in the ",(0,n.mdx)("inlineCode",{parentName:"p"},".env")," file, specifically ",(0,n.mdx)("inlineCode",{parentName:"p"},"AIO_runtime_namespace"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"AIO_runtime_auth"),", and ",(0,n.mdx)("inlineCode",{parentName:"p"},"SERVICE_API_KEY"),". If they are not set, you can download the Runtime credentials and obtain the API key from I/O Console:  "),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/9fd638da1a7ba99885dd835c72a69a87/5530d/acs-api-key.webp 320w","/app-builder/static/9fd638da1a7ba99885dd835c72a69a87/0c8fb/acs-api-key.webp 640w","/app-builder/static/9fd638da1a7ba99885dd835c72a69a87/94b1e/acs-api-key.webp 1280w","/app-builder/static/9fd638da1a7ba99885dd835c72a69a87/af307/acs-api-key.webp 1818w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/9fd638da1a7ba99885dd835c72a69a87/dd4a7/acs-api-key.png 320w","/app-builder/static/9fd638da1a7ba99885dd835c72a69a87/0f09e/acs-api-key.png 640w","/app-builder/static/9fd638da1a7ba99885dd835c72a69a87/bbbf7/acs-api-key.png 1280w","/app-builder/static/9fd638da1a7ba99885dd835c72a69a87/8471f/acs-api-key.png 1818w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/9fd638da1a7ba99885dd835c72a69a87/bbbf7/acs-api-key.png",alt:"acs-api-key",title:"acs-api-key",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Finally, for Campaign Standard integration, you  need to set the required variable for ",(0,n.mdx)("inlineCode",{parentName:"p"},"CAMPAIGN_STANDARD_TENANT"),". It is usually the subdomain of your Campaign Standard instance. Otherwise, please consult with your Campaign TechOps team for the correct value."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/4d1dd679e5415a50122f92cfed986217/5530d/acs-tenant.webp 320w","/app-builder/static/4d1dd679e5415a50122f92cfed986217/0c8fb/acs-tenant.webp 640w","/app-builder/static/4d1dd679e5415a50122f92cfed986217/94b1e/acs-tenant.webp 1280w","/app-builder/static/4d1dd679e5415a50122f92cfed986217/6a1cb/acs-tenant.webp 1844w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/4d1dd679e5415a50122f92cfed986217/dd4a7/acs-tenant.png 320w","/app-builder/static/4d1dd679e5415a50122f92cfed986217/0f09e/acs-tenant.png 640w","/app-builder/static/4d1dd679e5415a50122f92cfed986217/bbbf7/acs-tenant.png 1280w","/app-builder/static/4d1dd679e5415a50122f92cfed986217/b88a2/acs-tenant.png 1844w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/4d1dd679e5415a50122f92cfed986217/bbbf7/acs-tenant.png",alt:"acs-tenant",title:"acs-tenant",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"All set environment variables should be then uncommented:"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.99999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/8bdef7cf30f71c05b2d343d1ee1074ae/5530d/dot-env.webp 320w","/app-builder/static/8bdef7cf30f71c05b2d343d1ee1074ae/0c8fb/dot-env.webp 640w","/app-builder/static/8bdef7cf30f71c05b2d343d1ee1074ae/94b1e/dot-env.webp 1280w","/app-builder/static/8bdef7cf30f71c05b2d343d1ee1074ae/b16a2/dot-env.webp 1824w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/8bdef7cf30f71c05b2d343d1ee1074ae/dd4a7/dot-env.png 320w","/app-builder/static/8bdef7cf30f71c05b2d343d1ee1074ae/0f09e/dot-env.png 640w","/app-builder/static/8bdef7cf30f71c05b2d343d1ee1074ae/bbbf7/dot-env.png 1280w","/app-builder/static/8bdef7cf30f71c05b2d343d1ee1074ae/955c5/dot-env.png 1824w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/8bdef7cf30f71c05b2d343d1ee1074ae/bbbf7/dot-env.png",alt:"dot-env",title:"dot-env",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-customer-dashboard-lesson-1-md-9bf45380c4cbe0d45e77.js.map