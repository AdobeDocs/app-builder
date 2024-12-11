"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[6228],{70954:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return s},default:function(){return m}});var t=n(58168),r=n(80045),i=(n(88763),n(15680)),p=n(83407);const o=["components"],s={},d={_frontmatter:s},l=p.A;function m(e){let{components:a}=e,n=(0,r.A)(e,o);return(0,i.mdx)(l,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"lesson-2-writing-a-serverless-action"},"Lesson 2: Writing a Serverless Action"),(0,i.mdx)("p",null,"There are many npm packages available for displaying barcodea, but some don't play well in serverless environments.\nFor this Code Lab, we'll use ",(0,i.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/bwip-js/"},"bwip-js")," to render a code128 barcode. "),(0,i.mdx)("h2",{id:"barcode-action"},"Barcode action"),(0,i.mdx)("p",null,"First, install the dependency with: "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm i bwip-js --save\n")),(0,i.mdx)("p",null,"Then import the dependency into your action: "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const bwipjs = require('bwip-js');\n")),(0,i.mdx)("p",null,"Now we can use the library and generate a barcode buffer in the exported main function:  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const buffer = await bwipjs.toBuffer({\n  bcid: 'code128',\n  text: params.value,\n  scale: 3,\n  height: 10,\n  includetext: false,\n});\n")),(0,i.mdx)("p",null,"Notice that we defined a ",(0,i.mdx)("inlineCode",{parentName:"p"},"value")," parameter to be passed to the barcode generator configuration.\nThis is the actual data the barcode will encode. "),(0,i.mdx)("p",null,"Then we can return the image representation of the buffer with: "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"return {\n  headers: { 'Content-Type': 'image/png' },\n  statusCode: 200,\n  body: buffer.toString('base64')\n};\n")),(0,i.mdx)("p",null,"Finally we can add checks to verify the requested ",(0,i.mdx)("inlineCode",{parentName:"p"},"value")," parameter, logging, and appropriate error handling to obtain this action: "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { Core } = require('@adobe/aio-sdk');\nconst { errorResponse, stringParameters, checkMissingRequestInputs } = require('../utils');\nconst bwipjs = require('bwip-js');\n\n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' });\n\n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action');\n\n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params));\n\n    // check for missing request input parameters and headers\n    const requiredParams = ['value'];\n    const errorMessage = checkMissingRequestInputs(params, requiredParams);\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger);\n    }\n  \n    const buffer = await bwipjs.toBuffer({\n      bcid: 'code128',\n      text: params.value,\n      scale: 3,\n      height: 10,\n      includetext: false,\n      backgroundcolor: 'ffffff'\n    });\n    \n    return {\n      headers: { 'Content-Type': 'image/png' },\n      statusCode: 200,\n      body: buffer.toString('base64')\n    };\n  } catch (error) {\n    // log any server errors\n    logger.error(error);\n    // return with 500\n    return errorResponse(500, error.message, logger);\n  }\n}\n\nexports.main = main;\n\n")),(0,i.mdx)("p",null,"You can run the action locally using the CLI with: "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app run --local\n")),(0,i.mdx)("p",null,"This will: "),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Start a local ",(0,i.mdx)("a",{parentName:"li",href:"https://openwhisk.apache.org/"},"OpenWhisk")," stack on Docker. "),(0,i.mdx)("li",{parentName:"ol"},"Package and deploy the Runtime action and its dependencies using a built-in webpack configuration.   "),(0,i.mdx)("li",{parentName:"ol"},"Start a local development environment and provide the action url e.g. ",(0,i.mdx)("inlineCode",{parentName:"li"},"http://localhost:3233/api/v1/web/guest/my-barcode-app-0.0.1/barcode")," for testing and debugging. ")),(0,i.mdx)("p",null,"We'll discuss how to debug an App Builder app in a later Code Lab."),(0,i.mdx)("p",null,"Nowadd the value parameter, e.g. ",(0,i.mdx)("inlineCode",{parentName:"p"},"?value=test"),", to the url so the action will generate a barcode:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"237px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.708860759493675%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/42d6206cf6b410b59dd142539a08e9d5/2f234/barcode-test.webp 237w"],sizes:"(max-width: 237px) 100vw, 237px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/42d6206cf6b410b59dd142539a08e9d5/2f5e9/barcode-test.png 237w"],sizes:"(max-width: 237px) 100vw, 237px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/42d6206cf6b410b59dd142539a08e9d5/2f5e9/barcode-test.png",alt:"barcode",title:"barcode",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"deploying"},"Deploying"),(0,i.mdx)("p",null,"You can deploy an App Builder Headless app with ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app run")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),". Either will deploy the actions to Adobe I/O Runtime.\n",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app deploy")," would have deployed the UI to a CDN, but since we don't have a UI that step is ignored. A separate Code Lab will show how to build an App Builder App with UI."),(0,i.mdx)("p",null,"Make sure to set your Adobe I/O Runtime secrets (namespace and auth) in the ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file.\nTurn off the built-in authentication by setting ",(0,i.mdx)("inlineCode",{parentName:"p"},"require-adobe-auth: false")," in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"manifest.yml"),".",(0,i.mdx)("br",{parentName:"p"}),"\n","The security topic will be covered in a separate Code Lab."),(0,i.mdx)("p",null,"Hitting deploy with the CLI will output the deployed action url:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1132px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.74999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/c6e9fba481e98d6782d4ef783d3654b7/5530d/deploy.webp 320w","/app-builder/static/c6e9fba481e98d6782d4ef783d3654b7/0c8fb/deploy.webp 640w","/app-builder/static/c6e9fba481e98d6782d4ef783d3654b7/2201a/deploy.webp 1132w"],sizes:"(max-width: 1132px) 100vw, 1132px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/c6e9fba481e98d6782d4ef783d3654b7/dd4a7/deploy.png 320w","/app-builder/static/c6e9fba481e98d6782d4ef783d3654b7/0f09e/deploy.png 640w","/app-builder/static/c6e9fba481e98d6782d4ef783d3654b7/abe8a/deploy.png 1132w"],sizes:"(max-width: 1132px) 100vw, 1132px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/c6e9fba481e98d6782d4ef783d3654b7/abe8a/deploy.png",alt:"deploy",title:"deploy",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"  "),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Congratulations! Your first App Builder Headless App is live.")," "),(0,i.mdx)("p",null,"We can test whether the passed value is correctly rendered as a barcode using one of the many barcode readers available."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-barcode-reader-barcode-md-1bf67c96bfae9c83d23b.js.map