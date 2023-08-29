---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
  - Logging
  - Log Forwarding
  - Monitoring
  - New Relic 
---

# Forwarding logs to New Relic

This guide describes how to configure your App Builder application to forward application logs to your New Relic deployment.

## Prerequisites

* A New Relic account and an [**Ingest license API key**](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).

* A local development setup for your App Builder application.

* The latest version of [Adobe I/O CLI](https://developer.adobe.com/runtime/docs/guides/tools/cli_install/). Check your version by running `aio --version`. Run `npm install -g @adobe/aio-cli` to update.

## Identify the API key and base URI

1. Log in to New Relic and navigate to the API keys screen. Pick the `INGEST - LICENSE` API key type you want to use and copy the `key` value for later use.

1. Depending on the region hosting your New Relic account, you must use the United States or European endpoint as a `base uri`. If you don't know the region of your New Relic instance, check the browser URL of your New Relic home. If the URL begins with `https://one.newrelic.com/`, specify `https://log-api.newrelic.com/log/v1` as the URI. If the URL begins with `https://one.eu.newrelic.com/`, specify `https://log-api.eu.newrelic.com/log/v1`.

## Set up Log Forwarding in App Builder

1. From the command line, navigate to the App Builder project directory on your machine.

1. Run the following command and supply the values from previous steps.

   ```terminal
   aio app config set log-forwarding
   ? select log forwarding destination: New Relic
   ? base URI: <base_uri>
   ? license key: <license_key>
   ```

   The URI value must include the protocol (`https://`).

1. Verify that the config change has taken effect.

   ```terminal
   aio app config get log-forwarding
   ```

1. Execute an action in your App Builder application workspace to generate logs.

1. Go to New Relic Home > **Logs** and run your query.

1. If you don't see any logs in New Relic, check the log forwarding errors.

   ```terminal
   aio app config get log-forwarding errors
   ```

If you are unable to set up log forwarding, visit the [App Builder forums](https://experienceleaguecommunities.adobe.com/t5/app-builder/ct-p/app-builder) for support.
