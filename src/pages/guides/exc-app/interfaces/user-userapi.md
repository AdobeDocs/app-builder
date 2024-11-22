---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: 'Interface: UserApi'
---

# Interface: UserApi

## Hierarchy

* EventEmitter‹UserInfoEvent›

  ↳ **UserApi**

## Index

### Properties

* [logoutUrl](user-userapi.md#logouturl)

### EventEmitter Methods

* [emit](user-userapi.md#emit)
* [off](user-userapi.md#off)
* [on](user-userapi.md#on)

### Other Methods

* [authExpired](user-userapi.md#authexpired)
* [get](user-userapi.md#get)

## Properties

###  logoutUrl

• **logoutUrl**: *string | undefined*

Optional. When specified this URL will be invoked upon user logging out. This is useful to
reduce the number of lingering sessions for solutions who have their own sessions server
(in addition to IMS).

## EventEmitter Methods

###  emit

▸ **emit**<**K**>(`type`: K, `event?`: UserInfoEvent[K]): *void*

*Inherited from void*

Invoke all handlers for the given type.

**Type parameters:**

▪ **K**: *keyof UserInfoEvent*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | K | The event type to invoke. |
`event?` | UserInfoEvent[K] | Any value (object is recommended and powerful), passed to each handler. |

**Returns:** *void*

<hr />

###  off

▸ **off**<**K**>(`type`: K, `handler`: function): *void*

*Inherited from void*

Remove an event handler for the given type.

**Type parameters:**

▪ **K**: *keyof UserInfoEvent*

**Parameters:**

▪ **type**: *K*

Type of event to unregister `handler` from.

▪ **handler**: *function*

Handler function to remove.

▸ (`event?`: UserInfoEvent[K]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | UserInfoEvent[K] |

**Returns:** *void*

<hr />

###  on

▸ **on**<**K**>(`type`: K, `handler`: function): *void*

*Inherited from void*

Register an event handler for the given type.

**Type parameters:**

▪ **K**: *keyof UserInfoEvent*

**Parameters:**

▪ **type**: *K*

Type of event to listen for.

▪ **handler**: *function*

Function to call in response to given event.

▸ (`event?`: UserInfoEvent[K]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | UserInfoEvent[K] |

**Returns:** *void*

<hr />

## Other Methods

###  authExpired

▸ **authExpired**(): *void*

API to notify the unified shell that APIs are returning 401 and user needs to be
re-authenticated.

**Returns:** *void*

<hr />

###  get

▸ **get**<**T**>(`type`: T): *Promise‹UserInfo[T]›*

Gets the specified type of information about an user.

**Type parameters:**

▪ **T**: *keyof UserInfo*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | T | The type of information to get.  |

**Returns:** *Promise‹UserInfo[T]›*
