# Forwarding logs to Splunk Enterprise

This guide would cover configuring your app builder application to forward application logs to your Splunk Enterprise deployment.

## Prerequisites

1. An index on your Splunk Enterprise instance. To create a new index, you can follow Splunk's guide [here](https://docs.splunk.com/Documentation/Splunk/8.2.4/Indexer/Setupmultipleindexes).
2. Local development setup for your App Builder application.
3. AIO CLI version 8.2.0 or higher. Check by running `aio --version`. To update run `npm install -g @adobe/aio-cli`.


## Steps to configure Log Forwarding

### 1. Set up Splunk HTTP Event Collector

1. Go to your Splunk home and select _Settings_ from the ribbon on top. On the _Settings_ pane, select _Data Inputs_.

2. Click on the **_+ Add New_** button corresponding to the HTTP Event Collector input type.

3. On the _Select Source_ screen:
   1. Type in an input name. For example: `My App Builder Application` 
   2. Ensure that the _Enable Indexer Acknowledgment_ checkbox is **not** ticked.
   3. Click the _Next_ button on top.

4. On the _Input Settings_ screen:
   1. Set the source type to `automatic`. The forwarded logs would be sent with the `sourcetype` field set to `_json`.
   2. From the list of indexes, only select the index on which you wish to receive logs from your App Builder application. 
   3. Click the _Review_ button on top.

5. On the _Done_ screen:
   1. Copy the value of the token value to be used later.


### 2. Getting Splunk Host and Port

1. To find out your `hostname` and `port` number, read the **_Send data to HTTP Event Collector on Splunk Enterprise_** section on Splunk's documentation [here](https://docs.splunk.com/Documentation/SplunkCloud/8.2.2106/Data/UsetheHTTPEventCollector). 

2. Confirm whether you have got the correct `hostname` and `port` number by executing the following cURL request. If you get a `200 OK` response, you are good to proceed.

```
curl -X POST 'https://<hostname>:<port>/services/collector' \     
-H "Authorization: Splunk <token>" \
-d '{"event": "hello world"}'
```

_Note: The `token` value is from step 1.5.1_


### 3. Set up Log Forwarding in App Builder

1. Open terminal and navigate to the App Builder project directory on your machine.

2. Run the following command and supply the values from previous steps

```
aio app config set log-forwarding
? select log forwarding destination: Splunk HEC
? host: <hostname>
? port: <port_number>
? index: <index>
? hec_token: <token>
```

Note:
* Make sure to not prefix the protocol (`http://` or `https://`) before the hostname.
* Replace the value of `hostname` and `port` as ascertained in step 2.2.1. 
* Replace the value of `token`  from step 1.5.1.


3. Verify that the config change has taken effect 

```
aio app config get log-forwarding
```

4. Execute an action in your runtime namespace to generate logs.

5. Go to Splunk Home > Search and run the query 
```
index=<index>
```

6. If you don't see any logs in Splunk, please check the log forwarding errors.
```
aio app config get log-forwarding errors
```

_Note: Please post on our [App Builder forums](https://experienceleaguecommunities.adobe.com/t5/project-firefly/ct-p/project-firefly) to get support if you are unable to setup log forwarding correctly._