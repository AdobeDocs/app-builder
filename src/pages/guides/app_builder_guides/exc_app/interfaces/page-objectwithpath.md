---
title: Interface: ObjectWithPath
description: Documentation for the ObjectWithPath interface including its properties and related modules in Adobe Experience Cloud.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- ObjectWithPath
# --- FAQs ---
faqs:
- question: What is the ObjectWithPath interface?
  answer: It is an interface that includes a relative path property used within the solution for Adobe Experience Cloud Extensibility.
- question: What type is the 'path' property in ObjectWithPath?
  answer: The 'path' property is a string representing a relative path within the solution.
- question: How do I specify the path in ObjectWithPath?
  answer: You specify it as an object with a 'path' key and string value, e.g., {path: '/abc'}.
- question: Where can I find related modules to ObjectWithPath?
  answer: Related modules such as Index, Page, TopBar, and User are linked in the documentation for further exploration.
- question: What are some Adobe Experience Cloud interfaces related to ObjectWithPath?
  answer: Interfaces including Modules, Runtime, Page object with Href, TopBar callbacks, and User API are related and linked in the docs.
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: 'Interface: ObjectWithPath'
...
# Interface: ObjectWithPath

## Hierarchy

* **ObjectWithPath**

## Properties

### path

• **path**: *string*

The relative path within the solution.

***Example:***

```typescript
{path: '/abc'}
```

## Next steps

Explore details of the [Index](../modules/index.md), [Page](../modules/page.md), [TopBar](../modules/topbar.md), and [User](../modules/user.md) external modules.

Explore the attributes and behavior of Adobe Experience Cloud Interfaces:

[Modules](modules.md)

[Runtime](runtime.md)

| Page                                        | Topbar                                                     | User                     |
| ------------------------------------------- | ---------------------------------------------------------- | ------------------------ |
| [Object with Href](page-objectwithhref.md)  | [Callback](topbar-callback.md)                             | [API](user-userapi.md)   |
| [API](page-pageapi.md)                      | [Custom Feedback](topbar-customfeedbackconfig.md)          | [Info](user-userinfo.md) |
| [API Properties](page-pageapiproperties.md) | [Custom Search](topbar-customsearchconfig.md)              |                          |
|                                             | [Help Center Feedback](topbar-helpcenterfeedbackconfig.md) |                          |
|                                             | [External Feedback](topbar-externalfeedbackconfig.md)      |                          |
|                                             | [Solution](topbar-solution.md)                             |                          |
|                                             | [API](topbar-topbarapi.md)                                 |                          |
|                                             | [API Properties](topbar-topbarapiproperties.md)            | `                        |

Return to the [Guides Index](../../../index.md).
