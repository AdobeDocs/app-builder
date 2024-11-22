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

## EventEmitter Methods

### emit

▸ **emit**<**K**>(`type`: K, `event?`: T[K]): *void*

*Inherited from void*

Invoke all handlers for the given type.

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

| Name     | Type | Description                                                              |
| -------- | ---- | ------------------------------------------------------------------------ |
| `type`   | K    | The event type to invoke.                                                |
| `event?` | T[K] | Any value  passed to each handler -  object is recommended, and powerful |

**Returns:** *void*

___

### off

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

| Name     | Type |
| -------- | ---- |
| `event?` | T[K] |

**Returns:** *void*

___

### on

▸ **on**<**K**>(`type`: K, `handler`: function): *void*

*Inherited from void*

Registers an event handler for the given type.

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

▪ **type**: *K*

Type of event to listen for.

▪ **handler**: *function*

Function to call in response to given event.

▸ (`event?`: T[K]): *void*

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `event?` | T[K] |

**Returns:** *void*

## Next steps

Explore details of the [Index](./modules/index.md), [Page](./modules/page.md), [TopBar](./modules/topbar.md), and [User](./modules/user.md) external modules.

Explore the attributes and behavior of other Adobe Experience Cloud interfaces:

[Modules](modules.md)

| Page                                             | Topbar                                                     | User                          |
| ------------------------------------------------ | ---------------------------------------------------------- | ----------------------------- |
| [Object with Href](page.objectwithhref.md)       | [Callback](topbar.callback)                                | [User API](user.userapi.md)   |
| [Object with Path](pageobjectwithpath.md)        | [Custom Feedback](topbar.customfeedback.md)                | [User Info](user.userinfo.md) |
| [Page API](page.pageapi.md)                      | [Custom Search](topbar.customsearchconfig.md)              |                               |
| [Page API Properties](page.pageapiproperties.md) | [Help Center Feedback](topbar.helpcenterfeedbackconfig.md) |                               |
|                                                  | [External Feedback](topbar.externalfeedbackconfig.md)      |                               |
|                                                  | [Solution](topbar.solution.md)                             |                               |
|                                                  | [Topbar API](topbar.topbarapi.md)                          |                               |
|                                                  | [Topbar API Properties](topbar.topbarapiproperties.md)     |                               |

Return to the [Guides Index](../../guides_index.md).
