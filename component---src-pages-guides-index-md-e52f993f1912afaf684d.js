"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[8450],{65319:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return m}});var i=t(87462),o=t(63366),r=(t(15007),t(64983)),n=t(91515),p=["components"],l={},d={_frontmatter:l},s=n.Z;function m(e){var a=e.components,t=(0,o.Z)(e,p);return(0,r.mdx)(s,(0,i.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",null,"Architecture Overview"),(0,r.mdx)("h2",{id:"types-of-app-builder-apps"},"Types of App Builder apps"),(0,r.mdx)("p",null,"An App Builder Application is a serverless application that extends ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder/apis"},"Adobe Product APIs"),".\nThese applications can be one of two kinds: headless or headful. Each of these types is described in more detail in the sections that follow."),(0,r.mdx)("h3",{id:"headless-application"},"Headless Application"),(0,r.mdx)("p",null,"In a headless application, the application consists of a set of serverless actions and/or sequences deployed to ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder/apis/experienceplatform/runtime"},"Runtime"),", Adobe's serverless platform."),(0,r.mdx)("p",null,"A typical headless application would integrate well with a remote script or process that invokes it, such as an ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.adobe.com/content/help/en/experience-manager-65/assets/using/assets-workflow.html"},"AEM Assets workflow")," or an ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.adobe.com/content/help/en/campaign-standard/using/managing-processes-and-data/data-management-activities/external-api.html"},"ACS activity"),"."),(0,r.mdx)("h3",{id:"headful-application"},"Headful Application"),(0,r.mdx)("p",null,"A headful application is a Single Page Application (SPA) with a full-fledged user interface (UI) served from the out-of-the-box Content Delivery Network. This type of application calls ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder/apis"},"Adobe Product APIs")," directly from the client when applicable. When there is a strong need to orchestrate ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder/apis"},"Adobe Product API")," calls with 3rd party API calls, or with Adobe Identity Management System for authentication purposes, you can deploy serverless actions and/or sequences using ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder/apis/experienceplatform/runtime"},"Runtime"),"."),(0,r.mdx)("h2",{id:"jamstack-anatomy-of-an-app-builder-app"},"JAMStack: Anatomy of an App Builder App"),(0,r.mdx)("p",null,"App Builder apps that are Single Page Applications with a full-fledged UI should follow the ",(0,r.mdx)("a",{parentName:"p",href:"https://jamstack.org/"},"JAMStack Architecture"),"."),(0,r.mdx)("p",null,"The three main components of App Builder apps are:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/app-builder/apis"},"Adobe Product APIs"),", exposed to external developers and consumers through Adobe I/O API Gateway."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-sdk"},"Javascript-based SDK")," and serverless actions, sequences, and APIs deployed to ",(0,r.mdx)("a",{parentName:"li",href:"/app-builder/apis/experienceplatform/runtime"},"Runtime"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/"},"React-Spectrum"),", Adobe's front-end framework which applies Adobe's Design System to React-based components.")),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/5530d/jamstack-anatomy-application-march2021.webp 320w","/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/0c8fb/jamstack-anatomy-application-march2021.webp 640w","/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/94b1e/jamstack-anatomy-application-march2021.webp 1280w","/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/0b34d/jamstack-anatomy-application-march2021.webp 1920w","/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/548e7/jamstack-anatomy-application-march2021.webp 2400w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/dd4a7/jamstack-anatomy-application-march2021.png 320w","/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/0f09e/jamstack-anatomy-application-march2021.png 640w","/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/bbbf7/jamstack-anatomy-application-march2021.png 1280w","/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/ac7a9/jamstack-anatomy-application-march2021.png 1920w","/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/98e2c/jamstack-anatomy-application-march2021.png 2400w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/d2d4f990f760722e5e1f5fadeba79c83/bbbf7/jamstack-anatomy-application-march2021.png",alt:"JAMStack Architecture",title:"JAMStack Architecture",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"sdk-components"},"SDK Components"),(0,r.mdx)("h3",{id:"cli"},"CLI"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," is one of the main touchpoints for App Builder developers. It is based on ",(0,r.mdx)("a",{parentName:"p",href:"https://oclif.io/"},"oclif"),", which is a popular framework to build extensible command line tools."),(0,r.mdx)("p",null,"The CLI comes out-of-the-box with the following capabilities:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli-plugin-auth"},"Authentication")," to Adobe's Identity Management System"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli-plugin-certificate"},"Certificate management")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli-plugin-certificate"},"Configuration management")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli-plugin-console"},"Interactions")," with ",(0,r.mdx)("a",{parentName:"li",href:"/app-builder/console"},"Adobe Developer Console")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli-plugin-runtime"},"Interactions")," with ",(0,r.mdx)("a",{parentName:"li",href:"/app-builder/apis/experienceplatform/runtime"},"Runtime"),", Adobe's serverless platform"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli-plugin-app"},"Lifecycle management")," for ",(0,r.mdx)("a",{parentName:"li",href:"/app-builder/app-builder"},"App Builder"))),(0,r.mdx)("h3",{id:"app-builder-generators"},"App Builder Generators"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/generator-aio-app"},"generators")," help developers to bootstrap their App Builder apps when using the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI"),"."),(0,r.mdx)("p",null,"Generators can be used to create:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A headless application"),(0,r.mdx)("li",{parentName:"ul"},"A full-fledged UI SPA that deploys into ",(0,r.mdx)("a",{parentName:"li",href:"http://experiencecloud.adobe.com/"},"Experience Cloud Unified shell")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/app-builder/apis/experienceplatform/runtime"},"Runtime")," serverless actions extending specific ",(0,r.mdx)("a",{parentName:"li",href:"/app-builder/apis"},"Adobe APIs"))),(0,r.mdx)("h3",{id:"sdk-libraries"},"SDK Libraries"),(0,r.mdx)("p",null,"App Builder also provides a collection of JavaScript-based SDK libraries designed to increase the developer's velocity when implementing Custom Applications on top of Adobe APIs."),(0,r.mdx)("h4",{id:"main-sdk-library"},"Main SDK library"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk"},"main SDK library")," bundles smaller, reusable SDK libraries serving a variety of use-cases:"),(0,r.mdx)("h5",{id:"integration-with-adobe-apis"},"Integration with Adobe APIs"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-analytics"},"Adobe Analytics")," SDK library provides a client for ",(0,r.mdx)("a",{parentName:"li",href:"https://adobedocs.github.io/analytics-2.0-apis/"},"Adobe Analytics 2.0 API"),"."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-target"},"Adobe Target")," SDK library provides a client for ",(0,r.mdx)("a",{parentName:"li",href:"https://developers.adobetarget.com/api/"},"Adobe Target 1.0 API"),"."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-campaign-standard"},"Adobe Campaign Standard")," SDK library provides a client for ",(0,r.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/campaign-standard/using/working-with-apis/get-started-apis.html?lang=en"},"Adobe Campaign Standard API"),".")),(0,r.mdx)("h5",{id:"integration-with-adobes-identity-management-system"},"Integration with Adobe's Identity Management System"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-core-ims"},"Adobe IMS SDK library")," provides authentication management capabilities to Adobe's Identity Management Services, for both of the following scenarios:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-core-ims-oauth"},"User-based (OAuth 2.0)")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-core-ims-jwt"},"Technical account-based (JWT Bearer-token)"))),(0,r.mdx)("h5",{id:"integration-with-additional-out-of-the-box-services"},"Integration with additional out-of-the-box services"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-files"},"Files SDK")," provides a file system-like abstraction on top of an out-of-the-box cloud storage to store large, temporary files."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-state"},"State SDK")," provides a state-like abstraction on top of an out-of-the-box cloud-based key-value store.")),(0,r.mdx)("h5",{id:"technical-framework-for-developers"},"Technical framework for developers"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk-core"},"Core SDK library")," bundled into the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk"},"main SDK library")," provides a lower-level technical framework for developers.   "),(0,r.mdx)("p",null,"This framework must be used when contributing to the App Builder SDK. It is also recommended to use it when building an App Builder application."),(0,r.mdx)("h4",{id:"core-sdk-library"},"Core SDK library"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk-core"},"Core SDK library")," enables developers with the following technical capabilities:"),(0,r.mdx)("h5",{id:"configuration"},"Configuration"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-core-config"},"Configuration SDK library")," allows management of persistent and environment variable configuration."),(0,r.mdx)("h5",{id:"logging"},"Logging"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-core-logging"},"Logging SDK library")," provides a logger abstraction that can be used in ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk"},"SDK libraries")," and serverless actions deployed to ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder/apis/experienceplatform/runtime"},"Runtime"),"."),(0,r.mdx)("h5",{id:"errors"},"Errors"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-core-errors"},"Errors SDK library")," is the base implementation for all errors thrown by the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk"},"SDK libraries")," and can be used by developers to manage their own errors."),(0,r.mdx)("h5",{id:"networking"},"Networking"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-core-networking"},"Networking SDK library")," provides low-level networking tools such as exponential back-off that can be used in ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk"},"SDK libraries")," and custom API clients."),(0,r.mdx)("h3",{id:"token-vending-machine"},"Token-Vending Machine"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-tvm"},"Token-Vending Machine")," is exposed as an out-of-the-box API deployed to ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder/apis/experienceplatform/runtime"},"Runtime"),"."),(0,r.mdx)("p",null,"It enables developers to perform the following actions on behalf of their App Builder application credentials:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Deploy the web assets of their App Builder application to the out-of-the-box CDN."),(0,r.mdx)("li",{parentName:"ul"},"Use the out-of-the-box cloud storage through the ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-files"},"Files SDK"),"."),(0,r.mdx)("li",{parentName:"ul"},"Use the out-of-the-box key-value store through the ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-state"},"State SDK"),".")),(0,r.mdx)("h3",{id:"cicd-support"},"CI/CD Support"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"./deployment/ci_cd_for_firefly_apps.md"},"out-of-the-box CI/CD support")," for App Builder Applications consists in:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/features/actions"},"Github Actions")," to ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-cli-setup-action"},"setup the CLI")," and use it to ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-apps-action"},"perform actions")," such as application testing, build and deployment."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow"},"Github Workflows")," to orchestrate the Github Actions upon specific events triggered against the application repository."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"},"Github Secrets")," to store application secrets required for the execution of the Github Workflows against specific environments.")),(0,r.mdx)("h3",{id:"webpack"},"Webpack"),(0,r.mdx)("p",null,"App Builder uses Webpack for bundling I/O Runtime action code. See ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder/guides/webpack-configuration"},"here")," for an overview on webpack configuration."),(0,r.mdx)("h3",{id:"migration-guides"},"Migration Guides"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"migrations/standalone_to_dx_experience_cloud_spa.md"},"Standalone Application to DX Experience Cloud SPA v1")," - Migrate an App Builder application that's been initialized as a Standalone Application to a DX Experience Cloud SPA v1. Useful if you can't seem to view your application in the App Builder Catalog in Adobe Experience Cloud. ")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-index-md-e52f993f1912afaf684d.js.map