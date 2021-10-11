# Multiple Regions

Actions are executed in one of four regions on Azure:

* `Australia East` (australiaeast)
* `East US 2` (eastus2)
* `Southeast Asia` (southeastasia)
* `West Europe` (westeurope)

## How do we execute your action?

Action code is made available in all regions when an action is deployed. At execution time, a latency-based routing policy is used in order to run the action on the fastest available region.

In the event a region is unavailable, action invocations will be routed based on latency to one of the available regions.

No action is required by the client in order to execute an action on the fastest available region, and the client cannot restrict in which region an action is invoked. 

## How do I know in what region my actions are executed?

The cloud and region in which an action is invoked is available at execution time via environment variables; `__OW_CLOUD` for the cloud, and `__OW_REGION` for the region as seen here:

```javascript
process.env['__OW_CLOUD'] // example output: azure
process.env['__OW_REGION'] // example output: East US 2
```

Please note, that regions can change as part of a failover or due to a permanent platform change. Your application should not work against a hard-coded set of regions and should handle the case when the region you are looking for is not the region where your action is being executed.
