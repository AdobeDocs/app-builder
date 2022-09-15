---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
---

# External module: "index"

API used to integrate as solution web application with the unified shell of the Adobe Experience
Cloud.

## Index

### Interfaces

* [Modules](../interfaces/index.md)
* [Runtime](../interfaces/index.runtime.md)

### Functions

* [init](index.md#init)
* [runtime](index.md#runtime)

## Functions

###  init

▸ **init**(`bootstrap`: function): *void*

Initializes a solution web application by invoking the bootstrap callback
once the runtime is ready.
1. if the module is already defined, start to bootstrap
2. otherwise define the global callback that will be called when runtime is ready.

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

Callback used to bootstrap a solution. The runtime object is passed in as a
parameter to this callback.

▸ (`runtime`: [Runtime](../interfaces/index.runtime.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`runtime` | [Runtime](../interfaces/index.runtime.md) |

**Returns:** *void*

___

###  runtime

▸ **runtime**(): *[Runtime](../interfaces/index.runtime.md)*

Get the runtime object which contains all unified-shell APIs.

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
