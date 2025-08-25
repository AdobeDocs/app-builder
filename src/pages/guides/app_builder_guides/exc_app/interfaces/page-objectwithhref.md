---
title: Interface: ObjectWithHref
description: Documentation for the ObjectWithHref interface, detailing its href property and related Adobe Experience Cloud modules.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Interface
# --- FAQs ---
faqs:
- question: What is the ObjectWithHref interface?
  answer: It is an interface defining an object containing an href property that represents the URL of a solution page.
- question: What type is the href property in ObjectWithHref?
  answer: The href property is a string containing the URL of the solution page.
- question: How can I use the ObjectWithHref interface?
  answer: Create objects with a string href property to represent links to solution pages, e.g., { href: 'https://example.com/abc' }.
- question: Where can I find related interfaces and modules?
  answer: Related modules include Index, Page, TopBar, and User, accessible via their respective documentation links.
- question: How does ObjectWithHref relate to Adobe Experience Cloud?
  answer: It is part of the interfaces used within Adobe Experience Cloud for linking and navigation in solution pages.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
title: 'Interface: ObjectWithHref'
# Interface: ObjectWithHref

## Hierarchy

* **ObjectWithHref**

## Properties

### href

• **href**: *string*

The URL of the solution page.

***Example:***

```typescript
{ href: 'https://example.com/abc' }
```

## Next steps

Explore details of the [Index](../modules/index.md), [Page](../modules/page.md), [TopBar](../modules/topbar.md), and [User](../modules/user.md) external modules.

Explore the attributes and behavior of Adobe Experience Cloud Interfaces:

[Modules](modules.md)

[Runtime](runtime.md)

| Page                                        | Topbar                                                     | User                     |
| ------------------------------------------- | ---------------------------------------------------------- | ------------------------ |
| [Object with Path](page-objectwithpath.md)  | [Callback](topbar-callback.md)                             | [API](user-userapi.md)   |
| [API](page-pageapi.md)                      | [Custom Feedback](topbar-customfeedbackconfig.md)          | [Info](user-userinfo.md) |
| [API Properties](page-pageapiproperties.md) | [Custom Search](topbar-customsearchconfig.md)              |                          |
|                                             | [Help Center Feedback](topbar-helpcenterfeedbackconfig.md) |                          |
|                                             | [External Feedback](topbar-externalfeedbackconfig.md)      |                          |
|                                             | [Solution](topbar-solution.md)                             |                          |
|                                             | [API](topbar-topbarapi.md)                                 |                          |
|                                             | [API Properties](topbar-topbarapiproperties.md)            | `                        |

Return to the [Guides Index](../../../index.md).
