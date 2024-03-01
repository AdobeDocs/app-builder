# What is Adobe I/O Runtime

The idea of serverless computing is to abstract the server infrastructure from the developer, so developers can concentrate on application logic, not configuring and deploying servers. With a serverless computing platform like Adobe I/O Runtime, those portions of your application logic that need to be accessible from the Internet, and would normally be executed on a traditionally hosted server or a cloud service such as AWS or Azure, can be hosted on Runtime as on-demand functions and executed as needed via HTTP requests or Adobe I/O Events.

## The programming model
On Adobe I/O Runtime, code is executed on demand in response to Adobe I/O Events or HTTP requests controlled by conditional logic (_rules_). Runtime provides a programming environment supported by a REST API-based command line interface (the _CLI_) and other tools.

![The event processing pipeline](../../img/intro_f01.svg "The event processing pipeline")  
*The event processing pipeline*

The Runtime programming model makes use of the following entities: 

- Actions
- Events
- Triggers
- Rules
- Sequences
- Compositions
- Packages

See [Adobe I/O Runtime Entities](entities.md) for more information.
