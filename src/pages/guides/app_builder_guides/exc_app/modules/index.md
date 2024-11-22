---
keywords:
  - External Module
title: 'External module: "index"'
description: External modules
---

# External Module: Index

This API is used to integrate solution web applications with the unified shell of Adobe Experience Cloud.

### Interfaces

* [Modules](../interfaces/index.md)
* [Runtime](../interfaces/index.runtime.md)

## Functions

### Init

▸ **init**(`bootstrap`: function): *void*

Initializes a solution web application by invoking the bootstrap callback once the runtime is ready.

1. If the module is already defined, begin bootstrap
2. Otherwise, define the global callback that will be called when runtime is ready

***Example:***

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import runtime, {init} from '@exc/runtime';

init(() => {
  ReactDOM.render(<MainComponent runtime={runtime()} />, document.querySelector('#main'));
});
```

**Parameters:**

▪ **bootstrap**: *function*

The callback used to bootstrap a solution. The runtime object is passed in as a parameter to this callback.

▸ (`runtime`: [Runtime](../interfaces/index.runtime.md)): *void*

**Parameters:**

| Name      | Type                                      |
| --------- | ----------------------------------------- |
| `runtime` | [Runtime](../interfaces/index.runtime.md) |

**Returns:** *void*

___

### runtime

▸ **runtime**(): *[Runtime](../interfaces/index.runtime.md)*

Get the runtime object, which contains all unified-shell APIs.

***Example:***

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import excApp from '@exc/runtime';

export class MyComponent extends React.Component {
  constructor(props) {
    this.runtime = excApp();
  }
}
```

**Returns:** *[Runtime](../interfaces/index.runtime.md)*

The runtime object.

## Next steps

Explore details of the [Page](./modules/page.md), [TopBar](./modules/topbar.md), and [User](./modules/user.md) external modules.

Explore the attributes and behavior of Adobe Experience Cloud Interfaces:

[Modules](modules.md)

[Runtime](runtime.md)

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
