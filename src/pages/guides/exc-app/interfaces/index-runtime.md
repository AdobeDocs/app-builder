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

* [emit](index-runtime.md#emit)
* [off](index-runtime.md#off)
* [on](index-runtime.md#on)

## EventEmitter Methods

###  emit

▸ **emit**<**K**>(`type`: K, `event?`: T[K]): *void*

*Inherited from void*

Invoke all handlers for the given type.

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | K | The event type to invoke. |
`event?` | T[K] | Any value (object is recommended and powerful), passed to each handler. |

**Returns:** *void*

<hr />

###  off

▸ **off**<**K**>(`type`: K, `handler`: function): *void*

*Inherited from void*

Remove an event handler for the given type.

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

▪ **type**: *K*

Type of event to unregister `handler` from.

▪ **handler**: *function*

Handler function to remove.

▸ (`event?`: T[K]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | T[K] |

**Returns:** *void*

<hr />

###  on

▸ **on**<**K**>(`type`: K, `handler`: function): *void*

*Inherited from void*

Register an event handler for the given type.

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

▪ **type**: *K*

Type of event to listen for.

▪ **handler**: *function*

Function to call in response to given event.

▸ (`event?`: T[K]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | T[K] |

**Returns:** *void*
