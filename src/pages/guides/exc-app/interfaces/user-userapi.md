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