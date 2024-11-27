---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Runtime
---

# Interface: Runtime < **T** >

Defines the runtime object providing all unified-shell APIs for solution authors test.

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

▸ **emit** < **K** > (`type`: K, `event?`: T[ K ]): *void*

*Inherited from void*

Invoke all handlers for the given type.

**Type parameters:**

▪ **K** : *keyof T*

**Parameters:**

▪ **type**: *K*

Type of event to listen for.