---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
---

# Custom I/O Events Overview

Event-driven architectures are a foundational component of the experience business. They enable our customers to react to changes in state, and behaviors and updates to trigger workflows and decisions in near-real time. 
Adobe I/O Events currently supports Adobe internal providers and product teams, by providing 3rd party subscription management to the events emitted by these providers.

**Custom I/O Events** extends this capability by allowing 3rd party developers to generate external events to integrate with Adobe products in a bi-directional flow.  

Custom I/O Events will enable users to emit custom events from their applications or microservices to I/O Events and also consume events existing in the I/O Events.  

**Benefits of Custom Events** 

- **Simple Event Delivery**: 
Adobe I/O Events coordinates the delivery of an event from an event producer to an event consumer. 
Producers are decoupled from consumers — a producer doesn't know which consumers are listening. Consumers are also decoupled from each other, and every consumer sees all of the events.

- **Open Events Specification**:
Adobe I/O Events leverages the Open [CloudEvents Specification](https://cloudevents.io/), 
allowing you to leverage its [many sdks](https://github.com/cloudevents/spec#sdks).
You can read more about Adobe I/O Events adoption to CloudEvents 
format [here](https://medium.com/adobetech/adobe-io-events-adopts-cloudevents-format-c24d8acc20c5).

- **Near Real-time responses**: 
Events are delivered in near real time, so consumers can respond immediately to events as they occur. This helps in orchestrating streamline workflows, improve marketing performance, and create custom experiences that leverage the data more effectively. 

- **Build Cloud Native Adobe Apps**: 
Build custom apps that interact with core Adobe services, and automate processes 
with event-based integrations using [App Builder](../../overview/index.md) 
which comes with the ability to publish/consume Custom I/O Events. 

## Get Started

Register your `Custom Events Providers`, create event based registrations against these, 
and then start publishing events from your Firefly apps, using either
* [Adobe I/O Events API](/events/docs/api/)  
* [Adobe I/O Events CLI](/events/docs/cli/) 
* [Adobe I/O Events SDK](/events/docs/sdk/) 
