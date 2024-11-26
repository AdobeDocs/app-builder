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

---

## Type Parameters

- **T**: Represents the type parameter for event data associated with runtime events.

---

## Hierarchy

- **EventEmitter**
  - ↳ **Runtime**

---

## Methods Index

### EventEmitter Methods

- [emit](#emit)
- [off](#off)
- [on](#on)

---

## EventEmitter Methods

### emit

```ts
emit<K>(type: K, event?: T[K]): void
```