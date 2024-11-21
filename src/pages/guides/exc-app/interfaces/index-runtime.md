---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: 'Interface: Runtime <**T**>'
---

# Interface: Runtime <**T**>

Defines the runtime object providing all unified-shell APIs for solution authors.

## Type parameters

▪ **T**

## Hierarchy

* EventEmitter

  ↳ **Runtime**

## Index

### EventEmitter Methods


## EventEmitter Methods

###  emit


*Inherited from void*

Invoke all handlers for the given type.

**Type parameters:**

**Parameters:**

| Name     | Type | Description                                                             |
| -------- | ---- | ----------------------------------------------------------------------- |
| `type`   | K    | The event type to invoke.                                               |
| `event?` | T[K] | Any value (object is recommended and powerful), passed to each handler. |

**Returns:** *void*

___

###  off


*Inherited from void*

Remove an event handler for the given type.

**Type parameters:**

**Parameters:**

Type of event to unregister `handler` from.


Handler function to remove.


**Parameters:**

| Name     | Type |
| -------- | ---- |
| `event?` | T[K] |

**Returns:** *void*

###  on


*Inherited from void*

Register an event handler for the given type.

**Type parameters:**


**Parameters:**


Type of event to listen for.


Function to call in response to given event.


**Parameters:**

| Name     | Type |
| -------- | ---- |
| `event?` | T[K] |

**Returns:** *void*
