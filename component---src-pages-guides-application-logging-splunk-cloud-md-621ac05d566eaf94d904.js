"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[8613],{62678:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return s}});var o,a=t(87462),r=t(63366),p=(t(15007),t(64983)),l=t(91515),m=["components"],i={},d=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.mdx)("div",e)}),u={_frontmatter:i},x=l.Z;function s(e){var n=e.components,t=(0,r.Z)(e,m);return(0,p.mdx)(x,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"forwarding-logs-to-splunk-cloud"},"Forwarding logs to Splunk Cloud"),(0,p.mdx)("p",null,"This guide would cover configuring your app builder application to forward application logs to your Splunk Cloud account. "),(0,p.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},"An index on your Splunk Cloud account. To create a new index, you can follow Splunk's guide ",(0,p.mdx)("a",{parentName:"li",href:"https://docs.splunk.com/Documentation/Splunk/8.2.4/Indexer/Setupmultipleindexes"},"here"),"."),(0,p.mdx)("li",{parentName:"ol"},"Local development setup for your App Builder application."),(0,p.mdx)("li",{parentName:"ol"},"The latest version of AIO CLI. Check your version by running ",(0,p.mdx)("inlineCode",{parentName:"li"},"aio --version"),". To update run ",(0,p.mdx)("inlineCode",{parentName:"li"},"npm install -g @adobe/aio-cli"),".")),(0,p.mdx)("h2",{id:"steps-to-configure-log-forwarding"},"Steps to configure Log Forwarding"),(0,p.mdx)("h3",{id:"1-set-up-splunk-http-event-collector"},"1. Set up Splunk HTTP Event Collector"),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Go to your Splunk Cloud account home and select ",(0,p.mdx)("em",{parentName:"p"},"Settings")," from the ribbon on top. On the ",(0,p.mdx)("em",{parentName:"p"},"Settings")," pane, select ",(0,p.mdx)("em",{parentName:"p"},"Data Inputs"),".")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Click on the ",(0,p.mdx)("strong",{parentName:"p"},(0,p.mdx)("em",{parentName:"strong"},"+ Add New"))," button corresponding to the HTTP Event Collector input type.")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"On the ",(0,p.mdx)("em",{parentName:"p"},"Select Source")," screen:"),(0,p.mdx)("ol",{parentName:"li"},(0,p.mdx)("li",{parentName:"ol"},"Type in an input name. For example: ",(0,p.mdx)("inlineCode",{parentName:"li"},"My App Builder Application")," "),(0,p.mdx)("li",{parentName:"ol"},"Ensure that the ",(0,p.mdx)("em",{parentName:"li"},"Enable Indexer Acknowledgment")," checkbox is ",(0,p.mdx)("strong",{parentName:"li"},"not")," ticked."),(0,p.mdx)("li",{parentName:"ol"},"Click the ",(0,p.mdx)("em",{parentName:"li"},"Next")," button on top."))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"On the ",(0,p.mdx)("em",{parentName:"p"},"Input Settings")," screen:"),(0,p.mdx)("ol",{parentName:"li"},(0,p.mdx)("li",{parentName:"ol"},"Set the source type to ",(0,p.mdx)("inlineCode",{parentName:"li"},"automatic"),". The forwarded logs would be sent with the ",(0,p.mdx)("inlineCode",{parentName:"li"},"sourcetype")," field set to ",(0,p.mdx)("inlineCode",{parentName:"li"},"_json"),"."),(0,p.mdx)("li",{parentName:"ol"},"From the list of indexes, only select the index on which you wish to receive logs from your App Builder application. "),(0,p.mdx)("li",{parentName:"ol"},"Click the ",(0,p.mdx)("em",{parentName:"li"},"Review")," button on top."))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"On the ",(0,p.mdx)("em",{parentName:"p"},"Done")," screen:"),(0,p.mdx)("ol",{parentName:"li"},(0,p.mdx)("li",{parentName:"ol"},"Copy the value of the token value to be used later.")))),(0,p.mdx)("h3",{id:"2-getting-splunk-host-and-port"},"2. Getting Splunk Host and Port"),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"To find out your ",(0,p.mdx)("inlineCode",{parentName:"p"},"hostname")," and ",(0,p.mdx)("inlineCode",{parentName:"p"},"port")," number, read the ",(0,p.mdx)("strong",{parentName:"p"},(0,p.mdx)("em",{parentName:"strong"},"Send data to HTTP Event Collector on Splunk Cloud Platform"))," section on Splunk's documentation ",(0,p.mdx)("a",{parentName:"p",href:"https://docs.splunk.com/Documentation/Splunk/8.2.4/Data/UsetheHTTPEventCollector#Send_data_to_HTTP_Event_Collector_on_Splunk_Cloud_Platform"},"here"),". ")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Confirm whether you have got the correct ",(0,p.mdx)("inlineCode",{parentName:"p"},"hostname")," and ",(0,p.mdx)("inlineCode",{parentName:"p"},"port")," number by executing the following cURL request. If you get a ",(0,p.mdx)("inlineCode",{parentName:"p"},"200 OK")," response, you are good to proceed."),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},'curl -X POST \'https://<hostname>:<port>/services/collector\' \\     \n-H "Authorization: Splunk <token>" \\\n-d \'{"event": "hello world"}\'\n')),(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("em",{parentName:"p"},"Note: The ",(0,p.mdx)("inlineCode",{parentName:"em"},"token")," value is from step 1.5.1")))),(0,p.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),"Only ports `443` and `8088` are supported by I/O Runtime for port forwarding.",(0,p.mdx)("h3",{id:"3-set-up-log-forwarding-in-app-builder"},"3. Set up Log Forwarding in App Builder"),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Open terminal and navigate to the App Builder project directory on your machine.")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Run the following command and supply the values from previous steps"),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},"aio app config set log-forwarding\n? select log forwarding destination: Splunk HEC\n? host: <hostname>\n? port: <port_number>\n? index: <index>\n? hec_token: <token>\n")),(0,p.mdx)("p",{parentName:"li"},"Note:"),(0,p.mdx)("ul",{parentName:"li"},(0,p.mdx)("li",{parentName:"ul"},"Make sure to not prefix the protocol (",(0,p.mdx)("inlineCode",{parentName:"li"},"http://")," or ",(0,p.mdx)("inlineCode",{parentName:"li"},"https://"),") before the hostname."),(0,p.mdx)("li",{parentName:"ul"},"Replace the value of ",(0,p.mdx)("inlineCode",{parentName:"li"},"hostname")," and ",(0,p.mdx)("inlineCode",{parentName:"li"},"port")," as ascertained in step 2.2.1. "),(0,p.mdx)("li",{parentName:"ul"},"Replace the value of ",(0,p.mdx)("inlineCode",{parentName:"li"},"token"),"  from step 1.5.1.")))),(0,p.mdx)("ol",{start:3},(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Verify that the config change has taken effect "),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},"aio app config get log-forwarding\n"))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Execute an action in your App Builder application workspace to generate logs.")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Go to Splunk Home > Search and run the query "),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},"index=<index>\n"))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"If you don't see any logs in Splunk, please check the log forwarding errors."),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},"aio app config get log-forwarding errors\n")),(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("em",{parentName:"p"},"Note: If you are unable to set up log forwarding correctly, please visit our ",(0,p.mdx)("a",{parentName:"em",href:"https://experienceleaguecommunities.adobe.com/t5/app-builder/ct-p/app-builder"},"App Builder forums")," for support.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-application-logging-splunk-cloud-md-621ac05d566eaf94d904.js.map